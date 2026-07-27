import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
let fails = 0;
for (let i = 0; i < 6; i++) {
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 } });
  const p = await ctx.newPage();
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
    window.scrollTo(0,0);
    for (let k = 0; k < 20; k++) await step();
  });
  await p.waitForTimeout(500);
  const r = await p.evaluate(() => {
    const stuck = [...document.querySelectorAll('.reveal:not(.is-in)')];
    return stuck.map((el) => {
      const b = el.getBoundingClientRect();
      return { cls: el.className, top: Math.round(b.top), h: Math.round(b.height),
               vh: window.innerHeight, scrollY: Math.round(window.scrollY),
               maxY: Math.round(document.documentElement.scrollHeight - window.innerHeight) };
    });
  });
  if (r.length) { fails++; console.log(`run ${i} STUCK`, JSON.stringify(r)); }
  else console.log(`run ${i} ok`);
  await ctx.close();
}
console.log('fails', fails, '/6');
await b.close();
