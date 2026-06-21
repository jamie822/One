// Builds the Get Off The Tools lead-magnet PDF -> public/downloads/off-the-tools-guide.pdf
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const OUT = new URL('../public/downloads/', import.meta.url).pathname;
mkdirSync(OUT, { recursive: true });

const reasons = [
  ['You think the answer is to work harder',
   'More hours just means a more expensive job you can never clock off from. Working harder scales your exhaustion, not your income.',
   'Shift from doing more to building assets that work without you — starting with an online presence that wins better jobs at better prices.'],
  ['Your brand looks cheap — so you compete on price',
   'Your work is first class, but a DIY logo and a free website tell customers you’re the budget option. So you discount to win.',
   'Look premium and you can charge premium. A proper brand and website reframe you as the obvious, trusted choice — before you’ve said a word.'],
  ['Your leads are feast or famine',
   'Word of mouth is brilliant until it goes quiet. With no predictable pipeline, you lurch between rushed-off-your-feet and worryingly dead.',
   'A simple, always-on lead engine (Google + local SEO + social) keeps qualified enquiries coming in every week — not just when someone remembers you.'],
  ['Admin is quietly leaking jobs every week',
   'Missed calls, slow replies, forgotten follow-ups and no review system. Every leak is money walking to a competitor who answered first.',
   'Automation catches missed calls, replies instantly, books jobs and chases reviews — so nothing slips through and your phone stops running your life.'],
  ['The business can’t run without you',
   'If a week off means the money stops, you don’t own a business — you own a job with no holiday pay.',
   'With brand, leads and systems in place, you can price properly, make your first hire and finally step back. That’s being off the tools.'],
];

const mark = `<svg width="64" height="64" viewBox="0 0 48 48"><defs><linearGradient id="m" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e4c77b"/><stop offset=".5" stop-color="#c9a24b"/><stop offset="1" stop-color="#a8853a"/></linearGradient></defs><circle cx="24" cy="24" r="22" fill="none" stroke="url(#m)" stroke-width="2"/><path d="M27.5 9 14.5 27.5h7.2L20 39l13.5-19h-7.4z" fill="url(#m)"/></svg>`;

const html = `<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital@1&family=Inter:wght@400;500;600&family=Sora:wght@600;700;800&display=swap">
<style>
  @page { size: A4; margin: 0; }
  * { margin: 0; box-sizing: border-box; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { font-family: 'Inter', sans-serif; color: #f4f1ea; }
  .gold { background: linear-gradient(135deg,#e4c77b,#c9a24b 45%,#a8853a); -webkit-background-clip: text; background-clip: text; color: transparent; }
  .page { width: 210mm; min-height: 297mm; padding: 26mm 22mm; background:
    radial-gradient(120% 70% at 80% 0%, #17140d, #0b0b0c 60%, #060607); position: relative; overflow: hidden; }
  .page + .page { page-break-before: always; }
  .frame { position: absolute; inset: 12mm; border: 1px solid rgba(201,162,75,.28); pointer-events: none; }
  h1 { font-family: 'Sora'; font-weight: 800; font-size: 40px; line-height: 1.1; }
  h2 { font-family: 'Sora'; font-weight: 700; font-size: 22px; }
  .eyebrow { font-family: 'Sora'; text-transform: uppercase; letter-spacing: .3em; font-size: 11px; font-weight: 700; color: #c9a24b; }
  .muted { color: #a9a59c; }
  .serif { font-family: 'Fraunces'; font-style: italic; }
  /* cover */
  .cover { display: flex; flex-direction: column; justify-content: center; height: 297mm; gap: 22px; }
  .cover h1 { font-size: 52px; }
  /* reason block */
  .reason { border-top: 1px solid rgba(244,241,234,.12); padding: 22px 0; }
  .reason .n { font-family: 'Sora'; font-weight: 800; font-size: 14px; letter-spacing: .2em; color: #c9a24b; }
  .reason h2 { margin: 8px 0 12px; }
  .reason p { font-size: 14px; line-height: 1.6; margin-bottom: 8px; }
  .tag { font-family: 'Sora'; font-weight: 700; font-size: 11px; letter-spacing: .12em; text-transform: uppercase; }
  .cta { display: flex; flex-direction: column; justify-content: center; height: 297mm; text-align: center; gap: 20px; align-items: center; }
  .btn { font-family: 'Sora'; font-weight: 700; background: linear-gradient(135deg,#e4c77b,#c9a24b 45%,#a8853a); color: #1a1408; padding: 16px 34px; border-radius: 6px; font-size: 16px; }
</style></head><body>

<section class="page"><div class="frame"></div>
  <div class="cover">
    ${mark}
    <div class="eyebrow">Get Off The Tools&nbsp;·&nbsp;Free Guide</div>
    <h1>5 Reasons Electricians<br>Stay <span class="gold">Stuck On The Tools</span></h1>
    <p class="serif" style="font-size:22px;color:#c9a24b">…and exactly how to break free of each one.</p>
    <p class="muted" style="max-width:60ch;font-size:15px">If you went self-employed for freedom and more money but ended up with a job you can never clock off from — this is for you. Built by an electrician, for electricians.</p>
  </div>
</section>

<section class="page"><div class="frame"></div>
  <div class="eyebrow">The 5 reasons</div>
  <h1 style="margin:10px 0 6px">Sound <span class="gold">familiar?</span></h1>
  <p class="muted" style="font-size:14px;margin-bottom:6px">Each one quietly keeps you trapped. Here's the fix for every single one.</p>
  ${reasons.slice(0, 3).map((r, i) => `<div class="reason"><div class="n">0${i + 1}</div><h2>${r[0]}</h2>
     <p><span class="tag" style="color:#f4f1ea">The trap — </span><span class="muted">${r[1]}</span></p>
     <p><span class="tag gold">The fix — </span><span class="muted">${r[2]}</span></p></div>`).join('')}
</section>

<section class="page"><div class="frame"></div>
  ${reasons.slice(3).map((r, i) => `<div class="reason"><div class="n">0${i + 4}</div><h2>${r[0]}</h2>
     <p><span class="tag" style="color:#f4f1ea">The trap — </span><span class="muted">${r[1]}</span></p>
     <p><span class="tag gold">The fix — </span><span class="muted">${r[2]}</span></p></div>`).join('')}
  <div style="margin-top:30px;border:1px solid rgba(201,162,75,.3);border-radius:10px;padding:24px">
    <h2>The pattern</h2>
    <p class="muted" style="font-size:14px;margin-top:8px">Every reason comes back to one thing: you're the engine. Get Off The Tools rewires your business so the brand, the leads and the systems do the heavy lifting — and you get your time back.</p>
  </div>
</section>

<section class="page"><div class="frame"></div>
  <div class="cta">
    ${mark}
    <div class="eyebrow">Your next move</div>
    <h1>Ready to <span class="gold">rewire your business?</span></h1>
    <p class="muted" style="max-width:50ch;font-size:15px">Book a free, no-pressure call. We'll map out exactly how to get you off the tools — the website, the leads and the systems, done for you.</p>
    <div class="btn">Book a Call → getoffthetools.co.uk</div>
    <p class="muted serif" style="font-size:18px;margin-top:10px">Rewiring electricians' businesses.</p>
  </div>
</section>

</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setContent(html, { waitUntil: 'load' });
try { await page.evaluate(() => document.fonts.ready); } catch {}
await page.waitForTimeout(400);
await page.pdf({ path: `${OUT}off-the-tools-guide.pdf`, format: 'A4', printBackground: true });
console.log('PDF written to', OUT + 'off-the-tools-guide.pdf');
await browser.close();
