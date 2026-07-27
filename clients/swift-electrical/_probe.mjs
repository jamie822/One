import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
const p = await ctx.newPage();
await p.goto('http://localhost:4321/', { waitUntil: 'load' });
await p.waitForTimeout(1000);

const r = await p.evaluate(() => {
  const out = [];
  document.querySelectorAll('.section__head, .svc__head, .areas__head, .reviews__head').forEach((el) => {
    const cs = getComputedStyle(el, '::after');
    const box = el.getBoundingClientRect();
    out.push({
      cls: el.className,
      content: cs.content,
      transform: cs.transform,
      opacity: cs.opacity,
      bg: cs.backgroundImage.slice(0, 46),
      pos: cs.position,
      hostPos: getComputedStyle(el).position,
      w: Math.round(box.width),
      anims: document.getAnimations().filter((a) => a.effect?.target === el && a.effect?.pseudoElement === '::after').length,
    });
  });
  return out;
});
console.log(JSON.stringify(r, null, 1));
await b.close();
