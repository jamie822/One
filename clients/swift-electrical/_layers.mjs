import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const ctx = await b.newContext({ viewport: { width: 390, height: 844 } });
const p = await ctx.newPage();
await p.goto('http://localhost:4321/', { waitUntil: 'load' });
await p.waitForTimeout(1200);
const r = await p.evaluate(() => {
  const counts = {};
  document.getAnimations().forEach((a) => {
    const n = a.animationName || 'transition';
    counts[n] = (counts[n] || 0) + 1;
  });
  return {
    animations: counts,
    total: document.getAnimations().length,
    ambientFields: document.querySelectorAll('.ambient').length,
    blobs: document.querySelectorAll('.ambient__blob').length,
    railSvgs: document.querySelectorAll('.band__rails').length,
    railPaths: document.querySelectorAll('.band__rails path').length,
    boltEdges: document.querySelectorAll('.band__bolt-edge').length,
    heads: document.querySelectorAll('.section__head,.svc__head,.areas__head,.reviews__head').length,
  };
});
console.log(JSON.stringify(r, null, 1));
await b.close();
