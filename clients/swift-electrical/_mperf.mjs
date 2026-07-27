/* Motion perf harness.
   Per page: FCP, LCP, LCP element, CLS x3 (no scrolling), and
   long-task count + blocking during a scripted full-page scroll. */
import { chromium } from 'playwright';

const BASE = process.argv[2] || 'http://localhost:4321/One';
const LABEL = process.argv[3] || 'run';
const PAGES = (process.argv[4] || '/,/areas/shipley/,/areas/bingley/,/services/eicr-landlord-certificates/,/reviews/')
  .split(',');

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900, cpu: 1 },
  { name: 'mobile', width: 390, height: 844, cpu: 4 },
];

const paintProbe = `
  (() => {
    window.__m = { lcp: 0, lcpEl: '', cls: 0, longTasks: [], fcp: 0 };
    new PerformanceObserver((l) => {
      for (const e of l.getEntries()) {
        window.__m.lcp = e.startTime;
        const el = e.element;
        window.__m.lcpEl = el ? (el.tagName.toLowerCase() +
          (el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\\s+/).join('.') : '')) : '(none)';
      }
    }).observe({ type: 'largest-contentful-paint', buffered: true });
    new PerformanceObserver((l) => {
      for (const e of l.getEntries()) if (e.name === 'first-contentful-paint') window.__m.fcp = e.startTime;
    }).observe({ type: 'paint', buffered: true });
    new PerformanceObserver((l) => {
      for (const e of l.getEntries()) if (!e.hadRecentInput) window.__m.cls += e.value;
    }).observe({ type: 'layout-shift', buffered: true });
    new PerformanceObserver((l) => {
      for (const e of l.getEntries()) window.__m.longTasks.push(Math.round(e.duration));
    }).observe({ type: 'longtask', buffered: true });
  })();
`;


const KILL = process.env.KILL_MOTION === '1' ? `
  .hero__grid,.hero__wash,.hero__circuit,.hero__bolt,.ambient__blob,
  .spine__head,.band__rails path,.band__rails circle,.band__bolt-edge{
    animation:none!important;stroke-dasharray:none!important;
    translate:none!important;rotate:none!important;scale:none!important}
  .section__head::after,.svc__head::after,.areas__head::after,.reviews__head::after,
  .svc-list::before,.cta::after,.btn--act::before,.btn--primary::before{display:none!important}
` : '';

const killScript = KILL ? `
  (() => {
    const s = document.createElement('style');
    s.textContent = ${JSON.stringify(KILL)};
    const put = () => (document.head || document.documentElement).appendChild(s);
    if (document.head) put(); else new MutationObserver((_, o) => {
      if (document.head) { put(); o.disconnect(); }
    }).observe(document.documentElement, { childList: true });
  })();
` : '';

const out = [];

for (const vp of VIEWPORTS) {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  for (const path of PAGES) {
    const url = BASE.replace(/\/$/, '') + path;

    /* --- Pass A: paint + CLS, no scrolling at all (3 runs) --------------- */
    const clsRuns = [];
    let fcp = 0, lcp = 0, lcpEl = '';
    for (let i = 0; i < 3; i++) {
      const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
      const page = await ctx.newPage();
      const cdp = await ctx.newCDPSession(page);
      await cdp.send('Emulation.setCPUThrottlingRate', { rate: vp.cpu });
      await page.addInitScript(paintProbe + killScript);
      await page.goto(url, { waitUntil: 'load' });
      await page.waitForTimeout(3000);
      const m = await page.evaluate(() => window.__m);
      clsRuns.push(m.cls);
      if (i === 0) { fcp = m.fcp; lcp = m.lcp; lcpEl = m.lcpEl; }
      await ctx.close();
    }

    /* --- Pass B: scripted scroll, count long tasks ----------------------- */
    const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const page = await ctx.newPage();
    const cdp = await ctx.newCDPSession(page);
    await cdp.send('Emulation.setCPUThrottlingRate', { rate: vp.cpu });
    await page.addInitScript(paintProbe + killScript);
    await page.goto(url, { waitUntil: 'load' });
    await page.waitForTimeout(1500);
    await page.evaluate(() => { window.__m.longTasks.length = 0; });
    await page.evaluate(async () => {
      const prevBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = 'auto';
      const step = () => new Promise((r) => requestAnimationFrame(r));
      const max = document.documentElement.scrollHeight - window.innerHeight;
      for (let y = 0; y < max; y += Math.max(24, max / 90)) { window.scrollTo(0, y); await step(); }
      window.scrollTo(0, max);
      for (let i = 0; i < 20; i++) await step();
      for (let y = max; y > 0; y -= Math.max(40, max / 50)) { window.scrollTo(0, y); await step(); }
      for (let i = 0; i < 20; i++) await step();
    });
    await page.waitForTimeout(600);
    const scrollM = await page.evaluate(() => window.__m);

    const stuck = await page.evaluate(() =>
      [...document.querySelectorAll('.reveal:not(.is-in)')].map((e) => e.className));
    const invisibleFocusable = await page.evaluate(() => {
      const sel = 'a[href],button,input,select,textarea,summary,[tabindex]:not([tabindex="-1"])';
      return [...document.querySelectorAll(sel)].filter((el) => {
        const s = getComputedStyle(el);
        if (s.visibility === 'hidden' || s.display === 'none') return false;
        let n = el, op = 1;
        while (n && n !== document.body) { op *= parseFloat(getComputedStyle(n).opacity || '1'); n = n.parentElement; }
        return op < 0.05;
      }).map((el) => el.tagName + '.' + el.className);
    });
    await ctx.close();

    out.push({
      label: LABEL, vp: vp.name, path,
      fcp: Math.round(fcp), lcp: Math.round(lcp), lcpEl,
      lcpEqFcp: Math.abs(lcp - fcp) < 1,
      cls: clsRuns.map((c) => c.toFixed(6)),
      longTasks: scrollM.longTasks.length,
      blockingMs: scrollM.longTasks.reduce((a, b) => a + Math.max(0, b - 50), 0),
      stuckReveals: stuck.length,
      stuckList: stuck.slice(0, 4),
      invisibleFocusable: invisibleFocusable.length,
      invisList: invisibleFocusable.slice(0, 4),
    });
  }
  await browser.close();
}

console.log('\n=== ' + LABEL + ' ===');
for (const r of out) {
  console.log(
    `${r.vp.padEnd(8)} ${r.path.padEnd(40)} FCP ${String(r.fcp).padStart(5)}  LCP ${String(r.lcp).padStart(5)}` +
    `  ${r.lcpEqFcp ? 'LCP==FCP ' : 'LCP>FCP!!'}  el=${r.lcpEl.slice(0, 30).padEnd(30)}` +
    `  CLS ${r.cls.join('/')}  LT ${r.longTasks}(${r.blockingMs}ms)  stuck=${r.stuckReveals}  invisFocus=${r.invisibleFocusable}`
  );
  if (r.stuckReveals) console.log('           stuck:', r.stuckList.join(' | '));
  if (r.invisibleFocusable) console.log('           invis:', r.invisList.join(' | '));
}
