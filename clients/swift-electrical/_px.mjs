import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
const p = await ctx.newPage();
await p.goto('http://localhost:4321/', { waitUntil: 'load' });
await p.waitForTimeout(800);
await p.evaluate(() => {
  const el = document.querySelector('.section__head.is-center');
  window.scrollTo(0, window.scrollY + el.getBoundingClientRect().top - 200);
});
await p.waitForTimeout(1000);
const info = await p.evaluate(() => {
  const el = document.querySelector('.section__head.is-center');
  const cs = getComputedStyle(el, '::after');
  const host = getComputedStyle(el);
  const r = el.getBoundingClientRect();
  return {
    afterBottom: cs.bottom, afterHeight: cs.height, afterLeft: cs.left, afterRight: cs.right,
    afterWidth: cs.width, afterDisplay: cs.display, afterVis: cs.visibility, afterZ: cs.zIndex,
    afterBg: cs.backgroundImage, afterShadow: cs.boxShadow, afterContent: cs.content,
    hostOverflow: host.overflow, hostZ: host.zIndex, hostIsolation: host.isolation,
    rect: { top: Math.round(r.top), h: Math.round(r.height), w: Math.round(r.width), left: Math.round(r.left) },
    brand: getComputedStyle(document.documentElement).getPropertyValue('--brand'),
    accent: getComputedStyle(document.documentElement).getPropertyValue('--accent'),
    // what is at the point where the rule should be?
    elAtRulePoint: (() => {
      const x = r.left + r.width / 2, y = r.bottom + 13;
      const e = document.elementFromPoint(x, y);
      return e ? e.tagName + '.' + e.className : 'null';
    })(),
  };
});
console.log(JSON.stringify(info, null, 1));
await b.close();
