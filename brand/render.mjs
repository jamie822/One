// Renders Off The Tools brand assets to PNGs at exact platform sizes.
//   node brand/render.mjs   ->   ./brand-assets/*.png
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const OUT = new URL('../brand-assets/', import.meta.url).pathname;
mkdirSync(OUT, { recursive: true });

const FONTS = `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@1,9..144,400;1,9..144,500&family=Inter:wght@400;500;600;700&family=Sora:wght@600;700;800&display=swap">`;

const CSS = `
  *{margin:0;box-sizing:border-box}
  :root{--gold1:#e4c77b;--gold2:#c9a24b;--gold3:#a8853a;--base:#0b0b0c;--cream:#f4f1ea;--muted:#a9a59c}
  html,body{width:100%;height:100%}
  body{font-family:'Inter',sans-serif;background:var(--base);color:var(--cream);overflow:hidden}
  .gold{background:linear-gradient(135deg,var(--gold1),var(--gold2) 45%,var(--gold3));-webkit-background-clip:text;background-clip:text;color:transparent}
  .goldfill{background:linear-gradient(135deg,var(--gold1),var(--gold2) 45%,var(--gold3))}
  .serif{font-family:'Fraunces',serif;font-style:italic;font-weight:400}
  .display{font-family:'Sora',sans-serif}
  .eyebrow{font-family:'Sora';text-transform:uppercase;letter-spacing:.34em;color:var(--gold2);font-weight:700}
  .stage{position:relative;width:100vw;height:100vh;overflow:hidden;
    background:radial-gradient(120% 90% at 80% -10%, #17140d 0%, #0b0b0c 55%, #060607 100%)}
  .frame{position:absolute;inset:28px;border:1px solid rgba(201,162,75,.28)}
  .grid{position:absolute;inset:0;opacity:.5;
    background-image:linear-gradient(rgba(244,241,234,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(244,241,234,.03) 1px,transparent 1px);
    -webkit-mask-image:radial-gradient(70% 70% at 70% 30%,#000,transparent)}
  .wrap{position:relative;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center}
`;

// Lightning bolt inside a thin gold ring (px size).
const mark = (s) => `<svg width="${s}" height="${s}" viewBox="0 0 48 48">
  <defs><linearGradient id="m" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#e4c77b"/><stop offset=".5" stop-color="#c9a24b"/><stop offset="1" stop-color="#a8853a"/>
  </linearGradient></defs>
  <circle cx="24" cy="24" r="22" fill="none" stroke="url(#m)" stroke-width="2"/>
  <path d="M27.5 9 14.5 27.5h7.2L20 39l13.5-19h-7.4z" fill="url(#m)"/></svg>`;

const wordmark = (scale = 1) => `
  <div style="line-height:1">
    <div class="display" style="font-weight:600;font-size:${0.9 * scale}rem;letter-spacing:.42em;color:rgba(244,241,234,.6)">OFF&nbsp;THE</div>
    <div class="display gold" style="font-weight:800;font-size:${3.2 * scale}rem;letter-spacing:.02em">TOOLS</div>
    <div style="font-weight:500;font-size:${0.62 * scale}rem;letter-spacing:.34em;color:rgba(244,241,234,.55)">FOR&nbsp;ELECTRICIANS</div>
  </div>`;

const page = (body, pad = 90) => `<!doctype html><html><head><meta charset="utf-8">${FONTS}<style>${CSS}.wrap{padding:${pad}px}</style></head>
<body><div class="stage"><div class="grid"></div><div class="frame"></div><div class="wrap">${body}</div></div></body></html>`;

// ---- Asset definitions ------------------------------------------------------
const assets = [
  {
    name: 'profile-avatar', w: 1080, h: 1080,
    html: page(`<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:40px;height:100%">
      ${mark(360)}
      <div class="display" style="font-weight:800;font-size:3.4rem;letter-spacing:.04em"><span class="gold">OFF THE</span></div>
      <div class="display" style="font-weight:800;font-size:4.6rem;letter-spacing:.02em;margin-top:-30px">TOOLS</div>
    </div>`),
  },
  {
    name: 'og-image', w: 1200, h: 630,
    html: page(`<div style="display:flex;align-items:center;gap:46px">${mark(150)}
      <div>
        <div class="eyebrow" style="font-size:1rem;margin-bottom:18px">OFF&nbsp;THE&nbsp;TOOLS</div>
        <div class="display" style="font-weight:800;font-size:3.4rem;line-height:1.05">Stop being the business.<br><span class="gold">Start owning one.</span></div>
        <div style="color:var(--muted);font-size:1.4rem;margin-top:22px">Premium websites &amp; online presence for electricians.</div>
      </div></div>`, 80),
  },
  {
    name: 'instagram-post', w: 1080, h: 1080,
    html: page(`<div style="height:100%;display:flex;flex-direction:column;justify-content:space-between">
      <div class="eyebrow" style="font-size:1.1rem">Sound familiar?</div>
      <div class="display" style="font-weight:800;font-size:4.2rem;line-height:1.1">You didn't go self-employed to <span class="serif gold" style="font-weight:400">work even harder.</span></div>
      <div style="display:flex;align-items:center;gap:18px">${mark(72)}<div class="display" style="font-weight:700;font-size:1.5rem">OFF THE <span class="gold">TOOLS</span></div></div>
    </div>`, 96),
  },
  {
    name: 'instagram-story', w: 1080, h: 1920,
    html: page(`<div style="height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:50px">
      ${mark(240)}
      <div class="eyebrow" style="font-size:1.1rem">For electricians ready to scale</div>
      <div class="display" style="font-weight:800;font-size:4.6rem;line-height:1.1">Stop being<br>the business.<br><span class="gold">Start owning one.</span></div>
      <div style="color:var(--muted);font-size:1.6rem;max-width:18ch">Premium websites &amp; online presence for electricians.</div>
      <div class="goldfill" style="color:#1a1408;font-family:'Sora';font-weight:700;font-size:1.5rem;padding:22px 54px;border-radius:6px;margin-top:20px">Book a Call →</div>
    </div>`, 110),
  },
  {
    name: 'facebook-cover', w: 1640, h: 624,
    html: page(`<div style="display:flex;align-items:center;gap:60px;height:100%">${mark(190)}
      <div><div class="eyebrow" style="font-size:1rem;margin-bottom:16px">OFF THE TOOLS</div>
      <div class="display" style="font-weight:800;font-size:3.6rem;line-height:1.06">Get off the tools.<br><span class="gold">Build a real business.</span></div>
      <div style="color:var(--muted);font-size:1.4rem;margin-top:18px">Premium websites &amp; online presence — built by an electrician.</div></div></div>`, 90),
  },
  {
    name: 'linkedin-banner', w: 1584, h: 396,
    html: page(`<div style="display:flex;align-items:center;gap:48px;height:100%">${mark(150)}
      <div><div class="display" style="font-weight:800;font-size:2.8rem;line-height:1.08">Premium online presence for <span class="gold">electricians</span></div>
      <div style="color:var(--muted);font-size:1.3rem;margin-top:14px">Websites · Branding · Lead generation · Systems</div></div></div>`, 70),
  },
  {
    name: 'youtube-banner', w: 2560, h: 1440,
    html: page(`<div style="height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:36px">
      ${mark(200)}
      <div class="display" style="font-weight:800;font-size:4rem;line-height:1.1;max-width:20ch">Stop being the business.<br><span class="gold">Start owning one.</span></div>
      <div style="color:var(--muted);font-size:1.5rem">Premium websites &amp; online presence for electricians</div>
    </div>`, 120),
  },
];

const browser = await chromium.launch();
for (const a of assets) {
  const pg = await (await browser.newContext({ viewport: { width: a.w, height: a.h }, deviceScaleFactor: 1 })).newPage();
  await pg.setContent(a.html, { waitUntil: 'load' });
  try { await pg.evaluate(() => document.fonts.ready); } catch {}
  await pg.waitForTimeout(400);
  await pg.screenshot({ path: `${OUT}${a.name}.png` });
  console.log('rendered', a.name, `${a.w}x${a.h}`);
  await pg.close();
}
await browser.close();
