import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
const p = await ctx.newPage();
for (const path of ['/', '/areas/shipley/', '/services/eicr-landlord-certificates/', '/reviews/', '/about/', '/contact/']) {
  await p.goto('http://localhost:4321' + path, { waitUntil: 'load' });
  await p.waitForTimeout(500);
  const r = await p.evaluate(() => [...document.querySelectorAll('.section__head,.svc__head,.areas__head,.reviews__head')].map((el) => {
    const hb = el.getBoundingClientRect();
    const kids = [...el.children];
    const last = kids[kids.length - 1];
    const lb = last ? last.getBoundingClientRect() : hb;
    const cs = getComputedStyle(el);
    return { cls: el.className.replace(/\s+/g, '.'), gap: Math.round(hb.bottom - lb.bottom),
             mb: cs.marginBottom, pb: cs.paddingBottom, lastTag: last ? last.tagName : '-' };
  }));
  console.log(path, JSON.stringify(r));
}
await b.close();
