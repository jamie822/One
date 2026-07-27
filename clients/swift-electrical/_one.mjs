import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
const p = await ctx.newPage();
await p.goto('http://localhost:4321/', { waitUntil: 'load' });
await p.waitForTimeout(1200);
const max = await p.evaluate(() => document.documentElement.scrollHeight - window.innerHeight);
for (const [name, frac] of [['svc', 1/6], ['est', 2/6], ['owner', 3/6]]) {
  await p.evaluate((yy) => window.scrollTo({ top: yy, behavior: 'instant' }), Math.round(max*frac));
  await p.waitForTimeout(3200);
  await p.screenshot({ path: `/tmp/claude-0/-home-user-One/f3380be7-c3e7-55ed-b4e6-4fd395302acb/scratchpad/settled-${name}.png` });
}
await b.close();
