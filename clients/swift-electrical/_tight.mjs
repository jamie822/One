import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 3 });
const p = await ctx.newPage();
await p.goto('http://localhost:4321/', { waitUntil: 'load' });
await p.waitForTimeout(800);
await p.evaluate(() => {
  const el = document.querySelector('.section__head.is-center');
  window.scrollTo(0, window.scrollY + el.getBoundingClientRect().top - 200);
});
await p.waitForTimeout(1200);
const r = await p.evaluate(() => {
  const el = document.querySelector('.section__head.is-center');
  const b = el.getBoundingClientRect();
  return { left: b.left, bottom: b.bottom, width: b.width };
});
await p.screenshot({
  path: '/tmp/claude-0/-home-user-One/f3380be7-c3e7-55ed-b4e6-4fd395302acb/scratchpad/rule-tight.png',
  clip: { x: r.left, y: r.bottom - 26, width: r.width, height: 40 },
});
console.log('rule should be at y=+14 within this 34px strip');
await b.close();
