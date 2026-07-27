import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
const p = await ctx.newPage();
await p.goto('http://localhost:4321/', { waitUntil: 'load' });
await p.waitForTimeout(1200);
const max = await p.evaluate(() => document.documentElement.scrollHeight - window.innerHeight);
for (const [n, f] of [['hero', 0], ['svc', 1/6], ['own', 3/6]]) {
  await p.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), Math.round(max * f));
  await p.waitForTimeout(900);
  await p.screenshot({ path: `/tmp/claude-0/-home-user-One/f3380be7-c3e7-55ed-b4e6-4fd395302acb/scratchpad/rm-${n}.png` });
}
// Nothing should be hidden or mid-state under reduced motion.
const r = await p.evaluate(() => ({
  notIn: document.querySelectorAll('.reveal:not(.is-in)').length,
  anims: document.getAnimations().length,
  faded: [...document.querySelectorAll('.reveal')].filter((e) => +getComputedStyle(e).opacity < 0.99).length,
}));
console.log(JSON.stringify(r));
await b.close();
