// Renders premium logo CONCEPTS for selection -> ./brand-assets/logos/*.png
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
const OUT = new URL('../brand-assets/logos/', import.meta.url).pathname;
mkdirSync(OUT, { recursive: true });

const FONTS = `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800&family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,900&family=Marcellus&family=Cormorant+Garamond:wght@500;600;700&display=swap">`;

const CSS = `
*{margin:0;box-sizing:border-box}
body{background:#0b0b0c}
.gold{background:linear-gradient(135deg,#e9cf86,#c9a24b 48%,#9d7b34);-webkit-background-clip:text;background-clip:text;color:transparent}
.stage{width:100vw;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;
  background:radial-gradient(120% 90% at 50% 0%,#16130c,#0b0b0c 60%,#070708);position:relative}
.cap{position:absolute;bottom:34px;left:0;right:0;text-align:center;font-family:Inter,sans-serif;color:#6f6a60;font-size:15px;letter-spacing:.08em}
.cinzel{font-family:'Cinzel',serif}.fraunces{font-family:'Fraunces',serif}.marcellus{font-family:'Marcellus',serif}.cormorant{font-family:'Cormorant Garamond',serif}
.cream{color:#f4f1ea}.muted{color:#b8b2a4}
.rule{height:1px;background:linear-gradient(90deg,transparent,#c9a24b,transparent)}
.smallcaps{font-family:'Inter',sans-serif;text-transform:uppercase;letter-spacing:.4em;font-size:13px;color:#c9a24b;font-weight:600}
`;

// Refined bolt mark, single or double ring.
const mark = (s, dbl = false) => `<svg width="${s}" height="${s}" viewBox="0 0 64 64">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e9cf86"/><stop offset=".5" stop-color="#c9a24b"/><stop offset="1" stop-color="#9d7b34"/></linearGradient></defs>
  <circle cx="32" cy="32" r="30" fill="none" stroke="url(#g)" stroke-width="1.5"/>
  ${dbl ? '<circle cx="32" cy="32" r="25.5" fill="none" stroke="url(#g)" stroke-width="0.8" opacity="0.7"/>' : ''}
  <path d="M37 13 19 37h9.5l-2.5 14 18-25h-9.8z" fill="url(#g)"/></svg>`;

const page = (body, cap) => `<!doctype html><html><head><meta charset="utf-8">${FONTS}<style>${CSS}</style></head>
<body><div class="stage">${body}<div class="cap">${cap}</div></div></body></html>`;

const concepts = [
  // 1 — Cinzel heritage stack (luxury Roman caps)
  page(`
    ${mark(96)}
    <div class="rule" style="width:120px;margin:18px 0 14px"></div>
    <div class="cinzel" style="font-weight:700;font-size:62px;line-height:1.08;letter-spacing:.12em;text-align:center">
      <div class="cream">GET OFF THE</div><div class="gold">TOOLS</div></div>
    <div class="smallcaps" style="margin-top:16px">For Electricians</div>`,
    'Concept 1 — Cinzel (heritage luxury caps)'),

  // 2 — Fraunces editorial (modern premium serif, mixed case)
  page(`
    <div style="display:flex;align-items:center;gap:26px">
      ${mark(120)}
      <div class="fraunces" style="font-weight:900;font-size:74px;line-height:.94;letter-spacing:-.01em">
        <div class="cream">Get Off</div><div class="cream">The <span class="gold">Tools</span></div></div>
    </div>
    <div style="display:flex;align-items:center;gap:14px;margin-top:24px">
      <div class="rule" style="width:60px"></div><div class="smallcaps">For Electricians</div><div class="rule" style="width:60px"></div></div>`,
    'Concept 2 — Fraunces (modern editorial serif)'),

  // 3 — Crest / badge (premium emblem)
  page(`
    <div style="position:relative;width:330px;height:330px;border-radius:50%;border:1.5px solid #c9a24b;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px">
      <div style="position:absolute;inset:9px;border-radius:50%;border:.8px solid rgba(201,162,75,.55)"></div>
      ${mark(64)}
      <div class="cinzel gold" style="font-weight:700;font-size:38px;line-height:1.05;letter-spacing:.14em;text-align:center;margin-top:6px">GET OFF<br>THE TOOLS</div>
      <div class="smallcaps" style="font-size:11px;letter-spacing:.34em">★ For Electricians ★</div>
    </div>`,
    'Concept 3 — Crest emblem (badge)'),

  // 4 — Horizontal lockup, Marcellus + Cinzel (clean header mark)
  page(`
    <div style="display:flex;align-items:center;gap:26px">
      ${mark(92, true)}
      <div style="height:78px;width:1px;background:linear-gradient(180deg,transparent,#c9a24b,transparent)"></div>
      <div style="text-align:left">
        <div class="marcellus cream" style="font-size:26px;letter-spacing:.32em">GET OFF THE</div>
        <div class="cinzel gold" style="font-weight:800;font-size:58px;letter-spacing:.06em;line-height:1">TOOLS</div>
        <div class="smallcaps" style="font-size:11px;margin-top:8px">For Electricians</div>
      </div>
    </div>`,
    'Concept 4 — Horizontal lockup (Marcellus + Cinzel)'),

  // 5 — Cormorant high-contrast, full phrase emphasis
  page(`
    ${mark(84, true)}
    <div class="cormorant" style="font-weight:600;font-size:78px;line-height:.96;letter-spacing:.02em;text-align:center;margin-top:10px">
      <span class="cream">Get Off The </span><span class="gold">Tools</span></div>
    <div class="smallcaps" style="margin-top:14px">Premium online presence · For Electricians</div>`,
    'Concept 5 — Cormorant (high-contrast serif)'),
];

const browser = await chromium.launch();
let i = 1;
for (const html of concepts) {
  const pg = await (await browser.newContext({ viewport: { width: 1200, height: 760 }, deviceScaleFactor: 2 })).newPage();
  await pg.setContent(html, { waitUntil: 'load' });
  try { await pg.evaluate(() => document.fonts.ready); } catch {}
  await pg.waitForTimeout(400);
  await pg.screenshot({ path: `${OUT}concept-${i}.png` });
  console.log('rendered concept', i);
  i++; await pg.close();
}
await browser.close();
