import { chromium } from 'playwright';
const BASE = 'http://localhost:4321';
const OUT = process.argv[2] || 'mo-before';
const path = process.argv[3] || '/';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
for (const vp of [{ n: 'd', w: 1440, h: 900 }, { n: 'm', w: 390, h: 844 }]) {
  const ctx = await b.newContext({ viewport: { width: vp.w, height: vp.h } });
  const p = await ctx.newPage();
  await p.goto(BASE + path, { waitUntil: 'load' });
  await p.waitForTimeout(1500);
  const max = await p.evaluate(() => document.documentElement.scrollHeight - window.innerHeight);
  const stops = 7;
  for (let i = 0; i < stops; i++) {
    const y = Math.round((max * i) / (stops - 1));
    await p.evaluate((yy) => window.scrollTo({ top: yy, behavior: 'instant' }), y);
    await p.waitForTimeout(1400);
    await p.screenshot({ path: `/tmp/claude-0/-home-user-One/f3380be7-c3e7-55ed-b4e6-4fd395302acb/scratchpad/${OUT}-${vp.n}${i}.png` });
  }
  await ctx.close();
}
await b.close();
console.log('done');
