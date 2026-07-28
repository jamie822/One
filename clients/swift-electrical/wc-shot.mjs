// Freeze-frame harness for the Stacked Out wall-calendar turn.
// Usage: node wc-shot.mjs <outDir> <t1,t2,t3,...> [width] [tag]
import { chromium } from 'playwright';
import fs from 'node:fs';

const outDir = process.argv[2] || '/tmp/wc';
const times = (process.argv[3] || '0.6,0.9,1.2,1.5,1.8,2.1').split(',').map(Number);
const width = Number(process.argv[4] || 1440);
const tag = process.argv[5] || `w${width}`;
const height = width < 600 ? 844 : 900;

fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 2 });
const errs = [];
page.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
page.on('pageerror', (e) => errs.push('PAGEERROR ' + e.message));

await page.goto('http://localhost:4620/hero/', { waitUntil: 'load' });
await page.waitForTimeout(700);

// Pause everything: GSAP global timeline + any CSS animations, then seek by hand.
const hasGsap = await page.evaluate(() => !!window.gsap);
if (hasGsap) {
  await page.evaluate(() => { window.__wcTl && window.__wcTl.pause(0); });
}

for (const t of times) {
  await page.evaluate((t) => {
    if (window.__wcTl) { window.__wcTl.pause(); window.__wcTl.time(t, false); }
    document.getAnimations().forEach((a) => {
      try { a.pause(); a.currentTime = t * 1000; } catch (e) {}
    });
  }, t);
  await page.waitForTimeout(120);
  const file = `${outDir}/${tag}-t${String(t).replace('.', '_')}.png`;
  await page.screenshot({ path: file });
  console.log('shot', file);
}

if (errs.length) console.log('CONSOLE ERRORS:\n' + errs.join('\n'));
await browser.close();
