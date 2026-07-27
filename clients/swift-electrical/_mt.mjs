/* Contention-independent attribution: count main-thread work during scroll.
   A count of layouts / style recalcs does not change because another process
   is busy, unlike wall-clock long tasks. */
import { chromium } from 'playwright';
const URL = process.argv[2], W = +process.argv[3], H = +process.argv[4], REPS = +(process.argv[5] || 3);
const KILL = `
  .hero__grid,.hero__wash,.hero__circuit,.hero__bolt,.ambient__blob,.spine__head{
    animation:none!important;translate:none!important;rotate:none!important;scale:none!important}
  .section__head::after,.svc__head::after,.areas__head::after,.reviews__head::after,
  .svc-list::before,.cta::after,.header .btn--primary::before{display:none!important}`;

const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const acc = { A: [], B: [] };
for (let i = 0; i < REPS; i++) {
  for (const mode of ['A', 'B']) {
    const ctx = await b.newContext({ viewport: { width: W, height: H } });
    const p = await ctx.newPage();
    const cdp = await ctx.newCDPSession(p);
    await cdp.send('Performance.enable');
    if (mode === 'A') {
      await p.addInitScript(`(()=>{const s=document.createElement('style');s.textContent=${JSON.stringify(KILL)};
        const put=()=>(document.head||document.documentElement).appendChild(s);
        if(document.head)put();else new MutationObserver((_,o)=>{if(document.head){put();o.disconnect();}})
          .observe(document.documentElement,{childList:true});})();`);
    }
    await p.goto(URL, { waitUntil: 'load' });
    await p.waitForTimeout(1500);
    const pick = (m) => Object.fromEntries(m.map((x) => [x.name, x.value]));
    const before = pick((await cdp.send('Performance.getMetrics')).metrics);
    await p.evaluate(async () => {
      document.documentElement.style.scrollBehavior = 'auto';
      const step = () => new Promise((r) => requestAnimationFrame(r));
      const max = document.documentElement.scrollHeight - window.innerHeight;
      for (let y = 0; y < max; y += Math.max(24, max / 120)) { window.scrollTo(0, y); await step(); }
      for (let k = 0; k < 15; k++) await step();
      for (let y = max; y > 0; y -= Math.max(40, max / 60)) { window.scrollTo(0, y); await step(); }
      for (let k = 0; k < 15; k++) await step();
    });
    const after = pick((await cdp.send('Performance.getMetrics')).metrics);
    acc[mode].push({
      layouts: after.LayoutCount - before.LayoutCount,
      recalcs: after.RecalcStyleCount - before.RecalcStyleCount,
      layoutMs: +((after.LayoutDuration - before.LayoutDuration) * 1000).toFixed(1),
      recalcMs: +((after.RecalcStyleDuration - before.RecalcStyleDuration) * 1000).toFixed(1),
      scriptMs: +((after.ScriptDuration - before.ScriptDuration) * 1000).toFixed(1),
    });
    await ctx.close();
  }
}
const med = (a) => { const s = [...a].sort((x, y) => x - y); return s[Math.floor(s.length / 2)]; };
for (const m of ['A', 'B']) {
  const r = acc[m];
  console.log(`${m === 'A' ? 'motion OFF' : 'motion ON '}  layouts=${med(r.map(x=>x.layouts))}  recalcs=${med(r.map(x=>x.recalcs))}` +
    `  layout=${med(r.map(x=>x.layoutMs))}ms  recalc=${med(r.map(x=>x.recalcMs))}ms  script=${med(r.map(x=>x.scriptMs))}ms`);
}
await b.close();
