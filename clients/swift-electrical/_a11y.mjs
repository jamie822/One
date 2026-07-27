import { chromium } from 'playwright';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const axePath = require.resolve('axe-core/axe.min.js');
const fs = await import('fs');
const axeSrc = fs.readFileSync(axePath, 'utf8');

const PAGES = ['/', '/areas/shipley/', '/services/eicr-landlord-certificates/', '/reviews/', '/about/', '/contact/'];
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
let total = 0;
for (const rm of ['no-preference', 'reduce']) {
  for (const vp of [{ w: 1440, h: 900, n: 'desktop' }, { w: 390, h: 844, n: 'mobile' }]) {
    for (const path of PAGES) {
      const ctx = await b.newContext({ viewport: { width: vp.w, height: vp.h }, reducedMotion: rm === 'reduce' ? 'reduce' : 'no-preference' });
      const p = await ctx.newPage();
      await p.goto('http://localhost:4321' + path, { waitUntil: 'load' });
      await p.waitForTimeout(700);
      await p.evaluate(axeSrc);
      const r = await p.evaluate(async () => await window.axe.run(document, {
        runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'] },
      }));
      if (r.violations.length) {
        total += r.violations.length;
        console.log(`${rm}/${vp.n}${path}`, r.violations.map((v) => `${v.id}(${v.nodes.length})`).join(', '));
      }
      await ctx.close();
    }
  }
}
console.log('TOTAL VIOLATIONS:', total, '— 6 pages x 2 viewports x 2 motion modes');
await b.close();
