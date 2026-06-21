# Off The Tools — Brand Guidelines

> **Stop being the business. Start owning one.**
> Premium websites & online presence for electricians who want to get off the tools.

---

## 1. Brand essence

| | |
|---|---|
| **Name** | Off The Tools |
| **One-liner** | Premium websites & online presence for electricians. |
| **Mission** | Give working electricians the unfair advantage to build a business that runs without them. |
| **Founder hook** | Built by an electrician, for electricians — not a marketer in a suit. |
| **Feel** | Dark Luxe. Premium, aspirational, masculine, confident, no-nonsense. |

### Positioning
We sell **websites + online presence** (with CRM/automation under the hood — *never named publicly*), then upsell **coaching + systems/automation**. Pricing is **tailored, not public** — every page drives to *Book a call*.

---

## 2. Voice & tone — pain-point first

Talk like a successful spark who's been there, not an agency.

- **Lead with the pain, then the escape.** "Quoting at 9pm… take a week off and the money stops." → "Build a business that runs without you."
- **Short, punchy, plain English.** No jargon, no buzzwords, never say the software names we use.
- **Confident, not salesy.** We're the obvious choice; we don't beg.
- **Aspirational.** Freedom, premium clients, time back, profit, status.

**Power phrases:** *Get off the tools · Stop being the business · Look the part · Win better work · A business that runs without you · Built by an electrician.*

---

## 3. Colour — "Dark Luxe"

| Token | Hex | Use |
|---|---|---|
| Near-black (base) | `#0B0B0C` | Primary background |
| Charcoal (panel) | `#131419` | Section panels, cards |
| Panel light | `#1A1C22` | Raised surfaces |
| **Brushed gold** | `#C9A24B` | Primary accent, key words, lines |
| Gold light | `#E4C77B` | Gradient highlight |
| Gold deep | `#A8853A` | Gradient shadow, hovers |
| Warm off-white | `#F4F1EA` | Body text on dark |
| Muted | `#A9A59C` | Secondary text |

**Gold gradient:** `135deg, #E4C77B → #C9A24B → #A8853A` (used on key words, the logo mark, primary buttons).
**Rule:** gold is precious — use it sparingly for impact. Black does the heavy lifting.

> The whole site recolours from one value (`brandColor` in `src/data/site.js`). This palette is specific to Off The Tools.

---

## 4. Typography

| Role | Typeface | Notes |
|---|---|---|
| Display / headings | **Sora** (700–800) | Tight, modern, premium |
| Accent / emotive | **Fraunces** *italic* | Used sparingly on key phrases (e.g. *"work even harder"*) |
| Body | **Inter** (400–600) | Clean, legible |
| Eyebrows/labels | Sora, UPPERCASE, wide tracking | Gold |

---

## 5. Logo

- **Lockup:** circular gold "bolt" mark + stacked wordmark — small `OFF THE`, large `TOOLS`, tiny `FOR ELECTRICIANS`.
- **Mark:** a lightning bolt inside a thin gold ring — works alone as an avatar/favicon.
- **Clear space:** keep at least the height of the mark clear around the logo.
- **Don'ts:** don't recolour the gold to flat yellow, don't put on busy backgrounds without a dark overlay, don't stretch.
- Source: `src/components/Logo.astro` (variants: `full`, `stacked`, `mark`; tones: `gold`, `light`, `dark`).

---

## 6. Photography — *the trust engine*

This is a personal brand. Real photos of Jamie are central.

**Two registers, deliberately contrasted:**
1. **On the tools** — dusty workwear, tattoo sleeve, real job sites, bricks, ladders, consumer units. Proves the graft and earns trust. *(Hero, credibility sections.)*
2. **Off the tools** — sharp, premium, relaxed (smart-casual, confident). The aspiration we sell. *(Story, "made it" moments.)*

**Treatment:** cinematic dark grade, slightly desaturated, deep shadows, warm gold light. Faces stay natural and warm. Always legible under the black gradient overlay.

**Recommended shoot list** (see chat for detail): on-site working portrait, arms-folded confident portrait, close-up hands-on-work, walking-to-van, clean studio headshot on black, and a smart "off the tools" full-length.

---

## 7. Assets

Rendered brand assets live in **`/brand-assets/`** (profile pics, OG image, social post/story templates, platform banners). Regenerate with `node brand/render.mjs`. Source templates in `brand/`.
