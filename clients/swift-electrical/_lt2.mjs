/* Interleaved A/B long-task test on one page, to cancel machine drift. */
import { chromium } from 'playwright';
const URL = process.argv[2];
const W = +process.argv[3], H = +process.argv[4], CPU = +process.argv[5], REPS = +(process.argv[6] || 5);

const KILL = `
  .band__rails path,.band__rails circle,.band__bolt-edge{animation:none!important;stroke-dasharray:none!important}
  .spine__head,.band__rails path,.band__rails circle,.band__bolt-edge{



`;

const probe = `
  window.__lt=[];
  new PerformanceObserver(l=>{for(const e of l.getEntries())window.__lt.push(Math.round(e.duration))})
    .observe({type:'longtask',buffered:true});`;

const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const res = { A: [], B: [] };
for (let i = 0; i < REPS; i++) {
  for (const mode of ['A', 'B']) {
    const ctx = await b.newContext({ viewport: { width: W, height: H } });
    const p = await ctx.newPage();
    const cdp = await ctx.newCDPSession(p);
    await cdp.send('Emulation.setCPUThrottlingRate', { rate: CPU });
    const init = probe + (mode === 'A'
      ? `(()=>{const s=document.createElement('style');s.textContent=${JSON.stringify(KILL)};
          const put=()=>(document.head||document.documentElement).appendChild(s);
          if(document.head)put();else new MutationObserver((_,o)=>{if(document.head){put();o.disconnect();}})
            .observe(document.documentElement,{childList:true});})();`
      : '');
    await p.addInitScript(init);
    await p.goto(URL, { waitUntil: 'load' });
    await p.waitForTimeout(1500);
    await p.evaluate(() => { window.__lt.length = 0; });
    await p.evaluate(async () => {
      document.documentElement.style.scrollBehavior = 'auto';
      const step = () => new Promise((r) => requestAnimationFrame(r));
      const max = document.documentElement.scrollHeight - window.innerHeight;
      for (let y = 0; y < max; y += Math.max(24, max / 90)) { window.scrollTo(0, y); await step(); }
      window.scrollTo(0, max);
      for (let k = 0; k < 15; k++) await step();
      for (let y = max; y > 0; y -= Math.max(40, max / 50)) { window.scrollTo(0, y); await step(); }
      for (let k = 0; k < 15; k++) await step();
    });
    await p.waitForTimeout(400);
    const lt = await p.evaluate(() => window.__lt);
    res[mode].push({ n: lt.length, blk: lt.reduce((a, c) => a + Math.max(0, c - 50), 0) });
    await ctx.close();
  }
}
const med = (a) => { const s = [...a].sort((x, y) => x - y); return s[Math.floor(s.length / 2)]; };
for (const m of ['A', 'B']) {
  console.log(`${m === 'A' ? 'motion OFF' : 'motion ON '}  counts=[${res[m].map(r=>r.n)}]  median n=${med(res[m].map(r=>r.n))}` +
    `   blocking=[${res[m].map(r=>r.blk)}]  median=${med(res[m].map(r=>r.blk))}ms`);
}
await b.close();
