// Verifies the three states that are not the animation: reduced motion, no JS,
// and live playback frame cost.
import { chromium } from 'playwright';
import fs from 'node:fs';

const out = process.argv[2] || '/tmp/wcv';
fs.mkdirSync(out, { recursive: true });
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });

// --- 1. reduced motion -----------------------------------------------------
for (const w of [1440, 390]) {
  const ctx = await browser.newContext({
    viewport: { width: w, height: w < 600 ? 844 : 900 },
    deviceScaleFactor: 2, reducedMotion: 'reduce',
  });
  const p = await ctx.newPage();
  await p.goto('http://localhost:4620/hero/', { waitUntil: 'load' });
  await p.waitForTimeout(1200);
  const st = await p.evaluate(() => ({
    live: document.querySelector('.wc').classList.contains('wc--live'),
    tl: !!window.__wcTl,
    sheet0: getComputedStyle(document.querySelector('.wc__sheet[data-sheet="0"]')).display,
    month: document.querySelector('.wc__sheet[data-sheet="2"] .wc__month').textContent,
    ring: !!document.querySelector('.wc__day--open'),
  }));
  console.log('reduced-motion', w, JSON.stringify(st));
  await p.screenshot({ path: `${out}/reduced-${w}.png` });
  await ctx.close();
}

// --- 2. no JS --------------------------------------------------------------
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2, javaScriptEnabled: false });
  const p = await ctx.newPage();
  await p.goto('http://localhost:4620/hero/', { waitUntil: 'load' });
  await p.waitForTimeout(600);
  const st = await p.$eval('.wc__sheet[data-sheet="0"]', (el) => getComputedStyle(el).display);
  console.log('no-js sheet0 display =', st);
  await p.screenshot({ path: `${out}/nojs-1440.png` });
  await ctx.close();
}

// --- 3. live playback frame cost ------------------------------------------
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
  const p = await ctx.newPage();
  await p.goto('http://localhost:4620/hero/', { waitUntil: 'load' });
  const frames = await p.evaluate(async () => {
    window.__wcTl.pause(0);
    const ts = [];
    let last = performance.now();
    return await new Promise((res) => {
      window.__wcTl.eventCallback('onComplete', () => res(ts));
      const tick = () => {
        const n = performance.now();
        ts.push(n - last); last = n;
        if (ts.length < 400) requestAnimationFrame(tick); else res(ts);
      };
      window.__wcTl.play(0.4);
      requestAnimationFrame(tick);
    });
  });
  const s = frames.slice(2).sort((a, b) => a - b);
  console.log('frames', s.length, 'median', s[(s.length / 2) | 0].toFixed(1),
              'p95', s[(s.length * 0.95) | 0].toFixed(1), 'max', s[s.length - 1].toFixed(1));
  await ctx.close();
}
await browser.close();
