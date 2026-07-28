// Verification gates: responsive overflow sweep + axe-core, all routes.
import { chromium } from 'playwright-core';
import { readFileSync } from 'node:fs';

const AXE = readFileSync(new URL(import.meta.resolve('axe-core/axe.min.js')), 'utf8');
const ROUTES = ['/', '/services/', '/about/', '/blog/', '/blog/solar-panel-cost-sheffield/', '/404.html'];
const WIDTHS = [360, 390, 768, 1024, 1440, 1920];
const BASE = 'http://localhost:4322';

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
let fails = 0;

console.log('== RESPONSIVE SWEEP ==');
for (const w of WIDTHS) {
  const page = await browser.newPage({ viewport: { width: w, height: 900 } });
  const errors = [];
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', e => errors.push(String(e)));
  for (const r of ROUTES) {
    await page.goto(BASE + r, { waitUntil: 'networkidle' });
    const over = await page.evaluate(() => {
      const d = document.documentElement;
      return Math.max(d.scrollWidth, document.body.scrollWidth) - d.clientWidth;
    });
    if (over > 1) { console.log(`FAIL ${w}px ${r} overflow +${over}px`); fails++; }
  }
  if (errors.length) { console.log(`FAIL ${w}px console errors:`, errors.slice(0, 5)); fails++; }
  await page.close();
}
console.log('responsive sweep done');

console.log('== AXE-CORE ==');
for (const r of ROUTES) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto(BASE + r, { waitUntil: 'networkidle' });
  await page.waitForTimeout(700); // let fire-once reveals finish
  await page.evaluate(AXE);
  const res = await page.evaluate(async () => await axe.run(document, { resultTypes: ['violations'] }));
  const bad = res.violations.filter(v => ['critical', 'serious'].includes(v.impact));
  const minor = res.violations.filter(v => !['critical', 'serious'].includes(v.impact));
  if (bad.length) {
    fails++;
    for (const v of bad) {
      console.log(`FAIL ${r} [${v.impact}] ${v.id}: ${v.help}`);
      for (const n of v.nodes.slice(0, 3)) console.log(`   -> ${n.target.join(' ')}`);
    }
  } else {
    console.log(`PASS ${r} (0 critical/serious${minor.length ? `, ${minor.length} minor: ${minor.map(v => v.id).join(',')}` : ''})`);
  }
  await page.close();
}

// Mobile pass on home: scrolled state with sticky bar + open menu panel.
{
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  await page.click('[data-menu-btn]');
  await page.waitForTimeout(300);
  await page.evaluate(() => window.scrollTo(0, 900));
  await page.waitForTimeout(500);
  await page.evaluate(AXE);
  const res = await page.evaluate(async () => await axe.run(document));
  const bad = res.violations.filter(v => ['critical', 'serious'].includes(v.impact));
  if (bad.length) { fails++; for (const v of bad) console.log(`FAIL mobile / [${v.impact}] ${v.id}: ${v.help} -> ${v.nodes[0]?.target.join(' ')}`); }
  else console.log('PASS mobile / (menu open + sticky bar state)');
  await page.close();
}

await browser.close();
console.log(fails ? `\nGATES FAILED: ${fails}` : '\nALL MECHANICAL GATES PASS');
process.exit(fails ? 1 : 0);
