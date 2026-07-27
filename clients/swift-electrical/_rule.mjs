import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
const p = await ctx.newPage();
await p.goto('http://localhost:4321/', { waitUntil: 'load' });
await p.waitForTimeout(1000);

const sels = ['.svc__head', '.reviews__head', '.areas__head', '.section__head.is-center'];
for (const s of sels) {
  await p.evaluate((sel) => {
    const el = document.querySelector(sel);
    if (el) window.scrollTo(0, window.scrollY + el.getBoundingClientRect().top - 200);
  }, s);
  await p.waitForTimeout(1000);
  const info = await p.evaluate((sel) => {
    const el = document.querySelector(sel);
    const cs = getComputedStyle(el, '::after');
    const r = el.getBoundingClientRect();
    return { t: cs.transform, o: cs.opacity, top: Math.round(r.top), h: Math.round(r.height) };
  }, s);
  console.log(s.padEnd(28), JSON.stringify(info));
  const el = await p.$(s);
  const box = await el.boundingBox();
  await p.screenshot({
    path: `/tmp/claude-0/-home-user-One/f3380be7-c3e7-55ed-b4e6-4fd395302acb/scratchpad/rule-${s.replace(/[^a-z]/gi, '')}.png`,
    clip: { x: Math.max(0, box.x - 20), y: box.y - 10, width: Math.min(1400, box.width + 40), height: box.height + 60 },
  });
}
await b.close();
