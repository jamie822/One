import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
const p = await ctx.newPage();
await p.goto('http://localhost:4321/', { waitUntil: 'load' });
await p.waitForTimeout(1000);

let worst = 1, checked = 0, bad = [], imm = [];
for (let i = 0; i < 70; i++) {
  await p.keyboard.press('Tab');
  const immediate = await p.evaluate(() => {
    const el = document.activeElement;
    if (!el || el === document.body) return 1;
    let n = el, op = 1;
    while (n && n !== document.body) { op *= parseFloat(getComputedStyle(n).opacity || '1'); n = n.parentElement; }
    return +op.toFixed(3);
  });
  await p.waitForTimeout(700);
  const r = await p.evaluate(() => {
    const el = document.activeElement;
    if (!el || el === document.body) return null;
    let n = el, op = 1;
    while (n && n !== document.body) { op *= parseFloat(getComputedStyle(n).opacity || '1'); n = n.parentElement; }
    const b = el.getBoundingClientRect();
    return { tag: el.tagName, cls: String(el.className).slice(0, 40), op: +op.toFixed(3),
             vis: getComputedStyle(el).visibility, inView: b.top < innerHeight && b.bottom > 0,
             txt: (el.textContent || '').trim().slice(0, 28) };
  });
  if (!r) continue;
  checked++;
  if (r.op < worst) worst = r.op;
  if (r.op < 0.5) bad.push(r);
  if (immediate < 0.5) imm.push({ ...r, immediate });
}
console.log('tab stops checked:', checked);
console.log('lowest effective opacity of any focused element:', worst);
console.log('AFTER 700ms  focused-but-invisible:', bad.length, JSON.stringify(bad.slice(0,3)));
console.log('IMMEDIATELY  focused-but-invisible:', imm.length, JSON.stringify(imm.slice(0,3).map(x=>({c:x.cls,i:x.immediate,after:x.op}))));
await b.close();
