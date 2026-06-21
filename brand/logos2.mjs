// 10 premium logo MARK concepts (no lightning) -> ./brand-assets/logos2/*.png
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
const OUT = new URL('../brand-assets/logos2/', import.meta.url).pathname;
mkdirSync(OUT, { recursive: true });

const FONTS = `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800&family=Cormorant+Garamond:wght@500;600;700&family=Marcellus&family=Great+Vibes&family=Inter:wght@500;600&display=swap">`;

const CSS = `
*{margin:0;box-sizing:border-box}
body{background:#0b0b0c}
.gold{background:linear-gradient(135deg,#e9cf86,#c9a24b 48%,#9d7b34);-webkit-background-clip:text;background-clip:text;color:transparent}
.stage{width:100vw;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:26px;
  background:radial-gradient(120% 90% at 50% 0%,#16130c,#0b0b0c 62%,#070708);position:relative}
.cinzel{font-family:'Cinzel',serif}.cormorant{font-family:'Cormorant Garamond',serif}.marcellus{font-family:'Marcellus',serif}.pinyon{font-family:'Great Vibes',cursive}
.cream{color:#f4f1ea}.muted{color:#b8b2a4}
.wm{font-family:'Cinzel',serif;font-weight:600;font-size:21px;letter-spacing:.36em;color:#f4f1ea;text-align:center}
.sub{font-family:'Inter';text-transform:uppercase;letter-spacing:.42em;font-size:11px;color:#9a937f;text-align:center;margin-top:6px}
.cap{position:absolute;bottom:30px;left:0;right:0;text-align:center;font-family:Inter;color:#6f6a60;font-size:15px;letter-spacing:.06em}
.emblem{position:relative;display:grid;place-items:center}
.mono{position:absolute;font-family:'Cinzel',serif;font-weight:700}
`;
const G = `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e9cf86"/><stop offset=".5" stop-color="#c9a24b"/><stop offset="1" stop-color="#9d7b34"/></linearGradient></defs>`;
const svg = (vb, inner, s = 150) => `<svg width="${s}" height="${s}" viewBox="${vb}">${G}${inner}</svg>`;

// laurel ticks
let laurel = '';
for (let i = 0; i < 9; i++) {
  const ang = (-78 + i * 13) * Math.PI / 180; // left arc region
  const cx = 50 + 36 * Math.sin(ang), cy = 54 - 36 * Math.cos(ang);
  const ox = cx + 9 * Math.sin(ang + 0.5), oy = cy - 9 * Math.cos(ang + 0.5);
  laurel += `<line x1="${cx.toFixed(1)}" y1="${cy.toFixed(1)}" x2="${ox.toFixed(1)}" y2="${oy.toFixed(1)}" stroke="url(#g)" stroke-width="2" stroke-linecap="round"/>`;
}
let laurelR = '';
for (let i = 0; i < 9; i++) {
  const ang = (78 - i * 13) * Math.PI / 180;
  const cx = 50 + 36 * Math.sin(ang), cy = 54 - 36 * Math.cos(ang);
  const ox = cx + 9 * Math.sin(ang - 0.5), oy = cy - 9 * Math.cos(ang - 0.5);
  laurelR += `<line x1="${cx.toFixed(1)}" y1="${cy.toFixed(1)}" x2="${ox.toFixed(1)}" y2="${oy.toFixed(1)}" stroke="url(#g)" stroke-width="2" stroke-linecap="round"/>`;
}

const wm = `<div><div class="wm"><span class="cream">GET OFF THE </span><span class="gold">TOOLS</span></div><div class="sub">For Electricians</div></div>`;

const page = (mark, cap, showWm = true) => `<!doctype html><html><head><meta charset="utf-8">${FONTS}<style>${CSS}</style></head>
<body><div class="stage">${mark}${showWm ? wm : ''}<div class="cap">${cap}</div></div></body></html>`;

const concepts = [
  // 1 — Pure typographic luxe wordmark (no symbol)
  page(`<div style="text-align:center">
    <div class="cinzel cream" style="font-weight:700;font-size:58px;letter-spacing:.14em;line-height:1.1">GET OFF THE</div>
    <div style="display:flex;align-items:center;gap:18px;justify-content:center;margin-top:6px">
      <div style="width:60px;height:1px;background:#c9a24b"></div>
      <div class="cinzel gold" style="font-weight:800;font-size:58px;letter-spacing:.14em">TOOLS</div>
      <div style="width:60px;height:1px;background:#c9a24b"></div></div></div>`,
    'Concept 1 — Typographic luxe (wordmark only)', false),

  // 2 — GT monogram in a fine ring
  page(`<div class="emblem">${svg('0 0 100 100', '<circle cx="50" cy="50" r="46" fill="none" stroke="url(#g)" stroke-width="1.4"/><circle cx="50" cy="50" r="41" fill="none" stroke="url(#g)" stroke-width="0.6" opacity=".55"/>', 150)}
    <span class="mono gold" style="font-size:52px;letter-spacing:.04em">GT</span></div>`,
    'Concept 2 — GT monogram, fine ring'),

  // 3 — Faceted diamond (value / premium)
  page(svg('0 0 100 100', '<path d="M50 8 L88 40 L50 94 L12 40 Z" fill="none" stroke="url(#g)" stroke-width="2.2"/><path d="M12 40 H88 M50 8 V94 M30 40 L50 8 L70 40 M30 40 L50 94 M70 40 L50 94" stroke="url(#g)" stroke-width="1" opacity=".55" fill="none"/>', 140),
    'Concept 3 — Faceted diamond'),

  // 4 — Laurel wreath + star (achievement / status)
  page(svg('0 0 100 100', `${laurel}${laurelR}<path d="M50 12 l3 5 l-3 5 l-3 -5 z" fill="url(#g)"/>`, 150),
    'Concept 4 — Laurel wreath (achievement)'),

  // 5 — Hexagon seal + GT (subtle trade heritage)
  page(`<div class="emblem">${svg('0 0 100 100', '<path d="M50 6 L88 28 V72 L50 94 L12 72 V28 Z" fill="none" stroke="url(#g)" stroke-width="2"/><path d="M50 16 L79 33 V67 L50 84 L21 67 V33 Z" fill="none" stroke="url(#g)" stroke-width="0.8" opacity=".5"/>', 150)}
    <span class="mono gold" style="font-size:40px;letter-spacing:.02em">GT</span></div>`,
    'Concept 5 — Hexagon seal'),

  // 6 — Minimal crown (king of your trade)
  page(svg('0 0 100 74', '<path d="M12 60 L20 24 L35 46 L50 14 L65 46 L80 24 L88 60 Z" fill="none" stroke="url(#g)" stroke-width="2.4" stroke-linejoin="round"/><rect x="12" y="62" width="76" height="6" fill="url(#g)"/><circle cx="20" cy="24" r="3.2" fill="url(#g)"/><circle cx="50" cy="14" r="3.6" fill="url(#g)"/><circle cx="80" cy="24" r="3.2" fill="url(#g)"/>', 150),
    'Concept 6 — Minimal crown'),

  // 7 — Rising ascent (growth / off the tools)
  page(svg('0 0 100 100', '<path d="M22 78 L50 52 L78 78" fill="none" stroke="url(#g)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M30 60 L50 42 L70 60" fill="none" stroke="url(#g)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity=".75"/><path d="M38 42 L50 32 L62 42" fill="none" stroke="url(#g)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity=".5"/>', 140),
    'Concept 7 — Rising ascent (growth)'),

  // 8 — Archway / portal (stepping through to freedom)
  page(svg('0 0 100 100', '<path d="M20 94 V46 A30 30 0 0 1 80 46 V94" fill="none" stroke="url(#g)" stroke-width="2.2"/><path d="M34 94 V48 A16 16 0 0 1 66 48 V94" fill="none" stroke="url(#g)" stroke-width="0.9" opacity=".5"/><rect x="12" y="94" width="76" height="3" fill="url(#g)"/>', 140),
    'Concept 8 — Archway / portal'),

  // 9 — North Star / compass (direction, aspiration)
  page(svg('0 0 100 100', '<circle cx="50" cy="50" r="46" fill="none" stroke="url(#g)" stroke-width="1.2" opacity=".7"/><path d="M50 10 L45 50 L50 50 Z M50 90 L45 50 L50 50 Z M50 10 L55 50 L50 50 Z M50 90 L55 50 L50 50 Z M10 50 L50 45 L50 50 Z M90 50 L50 45 L50 50 Z M10 50 L50 55 L50 50 Z M90 50 L50 55 L50 50 Z" fill="url(#g)"/><path d="M50 50 L70 30 M50 50 L30 30 M50 50 L70 70 M50 50 L30 70" stroke="url(#g)" stroke-width="1" opacity=".5"/><circle cx="50" cy="50" r="3" fill="#0b0b0c" stroke="url(#g)" stroke-width="1"/>', 145),
    'Concept 9 — North Star / compass'),

  // 10 — Coin / medallion monogram (GOTT)
  page(`<div class="emblem">${svg('0 0 100 100', '<circle cx="50" cy="50" r="47" fill="none" stroke="url(#g)" stroke-width="2.4"/><circle cx="50" cy="50" r="40" fill="none" stroke="url(#g)" stroke-width="0.8"/><path d="M50 7 v6 M50 87 v6 M7 50 h6 M87 50 h6" stroke="url(#g)" stroke-width="2"/>', 150)}
    <span class="mono gold" style="font-size:30px;letter-spacing:.08em">GOTT</span></div>`,
    'Concept 10 — Coin medallion (GOTT)'),
];

const browser = await chromium.launch();
let i = 1;
for (const html of concepts) {
  const pg = await (await browser.newContext({ viewport: { width: 1000, height: 720 }, deviceScaleFactor: 2 })).newPage();
  await pg.setContent(html, { waitUntil: 'load' });
  try { await pg.evaluate(() => document.fonts.ready); } catch {}
  await pg.waitForTimeout(450);
  await pg.screenshot({ path: `${OUT}mark-${String(i).padStart(2, '0')}.png` });
  console.log('rendered', i); i++; await pg.close();
}
await browser.close();
