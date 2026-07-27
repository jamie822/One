import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
for (let i = 0; i < 4; i++) {
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 } });
  const p = await ctx.newPage();
  await p.addInitScript(() => {
    window.__trace = { scrollEvents: 0, rescues: 0, maxSeen: 0, maxScrollY: 0 };
    addEventListener('scroll', () => {
      window.__trace.scrollEvents++;
      window.__trace.maxScrollY = Math.max(window.__trace.maxScrollY, window.scrollY);
      window.__trace.maxSeen = Math.max(window.__trace.maxSeen, window.scrollY + innerHeight - 40);
    }, { passive: true, capture: true });
  });
  await p.goto('http://localhost:4321/areas/shipley/', { waitUntil: 'load' });
  await p.waitForTimeout(900);
  await p.evaluate(async () => {
    const prevBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    const step = () => new Promise((r) => requestAnimationFrame(r));
    const max = document.documentElement.scrollHeight - window.innerHeight;
    for (let y = 0; y < max; y += Math.max(24, max / 90)) { window.scrollTo(0, y); await step(); }
    window.scrollTo(0, max);
    for (let k = 0; k < 20; k++) await step();
    for (let y = max; y > 0; y -= Math.max(40, max / 50)) { window.scrollTo(0, y); await step(); }
    window.scrollTo(0, 0);
    for (let k = 0; k < 20; k++) await step();
  });
  await p.waitForTimeout(500);
  const r = await p.evaluate(() => ({
    trace: window.__trace,
    stuck: [...document.querySelectorAll('.reveal:not(.is-in)')].map((el) => ({
      cls: el.className, docTop: Math.round(el.getBoundingClientRect().top + scrollY),
      h: Math.round(el.getBoundingClientRect().height),
      cv: getComputedStyle(el).contentVisibility,
    })),
    docH: document.documentElement.scrollHeight,
  }));
  console.log(i, JSON.stringify(r));
  await ctx.close();
}
await b.close();
