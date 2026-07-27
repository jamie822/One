import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
const p = await ctx.newPage();
await p.goto('http://localhost:4321/', { waitUntil: 'load' });
await p.waitForTimeout(1200);
const max = await p.evaluate(() => document.documentElement.scrollHeight - window.innerHeight);
const y = Math.round(max / 6);
await p.evaluate((yy) => window.scrollTo({ top: yy, behavior: 'instant' }), y);
for (const wait of [200, 1400, 3000]) {
  await p.waitForTimeout(wait === 200 ? 200 : wait - 200);
  const r = await p.evaluate(() => {
    const inView = [...document.querySelectorAll('.reveal')].filter((el) => {
      const b = el.getBoundingClientRect();
      return b.bottom > 0 && b.top < innerHeight;
    });
    return {
      inView: inView.length,
      notIn: inView.filter((e) => !e.classList.contains('is-in')).map((e) => e.className),
      svcHead: (() => {
        const el = document.querySelector('.svc__head');
        const cs = getComputedStyle(el);
        return { isIn: el.classList.contains('is-in'), maskPos: cs.maskPosition, op: cs.opacity,
                 top: Math.round(el.getBoundingClientRect().top) };
      })(),
    };
  });
  console.log('after', wait + 'ms', JSON.stringify(r));
}
await b.close();
