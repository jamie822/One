# Stacked Out — brand pack

**For the web design studio.** Everything to build the site, in real files. Nothing here needs
fetching from anywhere else.

**Start here:** open **`brand-sheet.html`** in a browser. It is the visual guide — colour, logo,
type and voice on one page, using the real fonts from this folder.

---

## What's in the box

```
brand-sheet.html        ← open this first. The visual brand sheet.
BRAND-GUIDE.md          ← the written guide. Every rule, in words.
README.md               ← this file.

logo/
  svg/                  ← vector masters. Scale to any size, edit in any tool.
    mark-gradient.svg       primary — the gradient mark
    mark-yellowcyan.svg     story version — four booked, one just in, one free
    mark-mono-white.svg     one colour, for dark grounds
    mark-mono-black.svg     one colour, for light grounds and print
  png/                  ← ready to use. Transparent unless the name says otherwise.
    mark-gradient-1024/512/256/180/64/32.png
    mark-mono-white-1024.png · mark-yellowcyan-1024.png
    avatar-charcoal-1024/512.png    social avatars, mark on charcoal, rounded
    apple-touch-icon-180.png        iOS home screen
    favicon-32.png                  browser tab
    lockup-horizontal-dark.png      mark + wordmark, for dark backgrounds
    lockup-horizontal-light.png     mark + wordmark, for light backgrounds
    lockup-on-charcoal.png          the full lockup on its ground

colour/
  palette.png           ← the swatch sheet, with every contrast ratio
  palette.css           ← paste into any project. CSS custom properties.
  palette.json          ← for tooling, design systems, or an AI to read

type/
  clash-display-600/700.woff2       display face — headlines, wordmark, big numbers
  satoshi-400/500/700.woff2         body face

preview/
  _render.py            ← regenerates every PNG from the SVGs. See below.
```

## Using it

**On a website.** Copy `type/` and `colour/palette.css` into the project. Load the fonts:

```css
@font-face{font-family:'Clash Display';font-weight:700;src:url(type/clash-display-700.woff2) format('woff2');font-display:swap}
@font-face{font-family:'Satoshi';font-weight:400;src:url(type/satoshi-400.woff2) format('woff2');font-display:swap}
```

Then `var(--action)`, `var(--ground)` and the rest are available. Both faces are also on
**Fontshare** (free, commercial use) if you would rather load them from there:
`https://api.fontshare.com/v2/css?f[]=clash-display@600,700&f[]=satoshi@400,500,700&display=swap`

**Handing it to a designer or another AI.** Give them the whole folder. `BRAND-GUIDE.md` and
`palette.json` are written to be read by both.

**Favicon and app icons.** `favicon-32.png`, `apple-touch-icon-180.png`, and
`mark-gradient-512.png` for a web app manifest.

**Changing the mark.** Edit the SVG, then re-render every PNG in one go:

```bash
python3 preview/_render.py
```

Needs Python with Playwright and Chromium. It renders through a real browser so the wordmark uses
Clash Display properly rather than falling back to something else.

## The three rules people break first

1. **Never fill all six diary slots.** The empty one is the whole idea.
2. **The gradient once per page.** Logo, or one headline, or one button. Not two.
3. **No colour outside `palette.css`.** Not a tint, not a shade, not "just for this bit".

## Two things still to decide

Both in `BRAND-GUIDE.md` §0, neither blocking:

- **The studio's name.** The guide calls it "the studio" throughout.
- **Whether the studio keeps the diary mark.** It is strong and already built, but what it *says*
  is "a diary filling up" — the parent's story, not a web studio's. Three options and a
  recommendation are written out in the guide.
