# Brand guide — the web design studio

> The written half of this pack. For the visual version open **brand-sheet.html**; for the
> file list see **README.md**. Real assets live in logo/, colour/ and type/.

**A Stacked Out company. Websites for trades.**

Portable brand file, written 27 Jul 2026. Everything needed to build the studio's website on a
fresh machine or a fresh account: colour, logo, type, layout, voice, imagery. Self-contained —
the logo is inlined as vector below, so nothing here depends on a file from another device.

---

## 0 · Two things to decide before you build

Neither blocks the design work. Both are yours.

**1. The name.** This file calls it *the studio*. Whatever it becomes, the parent's naming rule
carries over: the word STACKED OUT is two words, capitalised, never "Stackedout" and never
"Stacked-Out". If the studio's name contains it, that spelling is fixed.

**2. Whether the studio keeps the diary mark.** The logo below is a spiral-bound wall diary,
nearly full. It is a strong mark and it is *already built* — but the story it tells is a diary
filling up, which is the parent's story, not a web studio's. Three honest options:

- **Keep it as-is.** Instant family resemblance, zero design cost. The metaphor reads as "we keep
  trades busy", which is defensible for a studio whose whole pitch is more work coming in.
- **Keep the system, change the mark.** Same colours, same type, same dark-first world — a new
  mark that says building rather than booking. Costs a designer a day.
- **Endorsed.** Studio mark leads, parent mark small alongside as "a Stacked Out company".

Recommendation if you want one: **option 1 to launch, option 3 once the studio has its own
customers.** Do not spend money on a mark before the site is earning.

---

## 1 · Colour

The whole palette. Nothing outside this list, ever.

| Role | Hex | Where it goes |
|---|---|---|
| **Charcoal** — the ground | `#08090b` | Page background. The default state of everything. |
| **Panel** — raised surfaces | `#0d0f13` | Cards, sections, anything sitting on the ground. |
| **Electric yellow** — action | `#ffdd33` | Buttons, prices, the thing you want clicked. One per screen. |
| Yellow, deep | `#ffd60a` | Hover/pressed states of the above. |
| **Cyan** — incoming | `#3fe3ff` | Links, new things, enquiries, anything arriving. |
| **Off white** — text | `#f5f6f8` | Body copy and headlines on dark. |
| **Muted** — secondary text | `#9aa1ab` | Captions, labels, supporting lines. |

**Signature gradient — hero moments only.**

```css
background: linear-gradient(100deg, #ffdd33, #3fe3ff);
```

One per page. The logo, or one headline, or one primary button — never two, never body text.
A gradient used twice stops being a signature and becomes decoration.

**This is a dark-first brand.** Charcoal is not a "dark mode", it is the brand. If you build a
light surface (a proposal PDF, a printed leaflet), it is white paper with charcoal text and
yellow accents only — the gradient does not survive print and should not be attempted.

**Accessible pairings, checked:**

Every figure below computed, not estimated. AA needs 4.5:1 for body text, 3:1 for large text and
for the boundary of a control.

| Foreground | On | Ratio | |
|---|---|---|---|
| `#f5f6f8` off white | `#08090b` ground | **18.4:1** | AAA |
| `#f5f6f8` off white | `#0d0f13` panel | **17.7:1** | AAA |
| `#9aa1ab` muted | `#08090b` ground | **7.6:1** | AAA |
| `#9aa1ab` muted | `#0d0f13` panel | **7.4:1** | AAA |
| `#ffdd33` yellow | `#08090b` ground | **14.8:1** | AAA |
| `#3fe3ff` cyan | `#08090b` ground | **12.9:1** | AAA |
| `#08090b` on `#ffdd33` | yellow button | **14.8:1** | AAA — the correct way round |
| `#08090b` on `#3fe3ff` | cyan button | **12.9:1** | AAA |

Yellow and cyan are **backgrounds for dark text**, or **text on dark**. Never yellow text on
white and never cyan text on yellow.

```css
:root{
  --ground:#08090b; --panel:#0d0f13;
  --action:#ffdd33; --action-deep:#ffd60a;
  --incoming:#3fe3ff;
  --ink:#f5f6f8; --ink-muted:#9aa1ab;
  --hero:linear-gradient(100deg,#ffdd33,#3fe3ff);
}
```

---

## 2 · The logo

A spiral-bound wall diary, nearly full: **five slots filled, one empty outline slot** — the last
slot going. The empty slot is the whole idea; never fill all six.

Paste this straight into HTML. It is the production mark, exact.

```html
<svg viewBox="0 0 72 82" width="72" height="82" aria-label="Stacked Out">
  <defs>
    <linearGradient id="somark" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ffdd33"/><stop offset="1" stop-color="#3fe3ff"/>
    </linearGradient>
  </defs>
  <!-- binding rings -->
  <circle cx="26" cy="9" r="3.6" fill="none" stroke="#c9ced6" stroke-width="4"/>
  <circle cx="46" cy="9" r="3.6" fill="none" stroke="#c9ced6" stroke-width="4"/>
  <!-- diary body -->
  <rect x="6" y="12" width="60" height="64" rx="13" fill="#0d0f13"
        stroke="rgba(255,255,255,.28)" stroke-width="4"/>
  <line x1="6" y1="30" x2="66" y2="30" stroke="rgba(255,255,255,.28)" stroke-width="3"/>
  <!-- five booked slots -->
  <g fill="url(#somark)">
    <rect x="12" y="37" width="14" height="14" rx="3.5"/>
    <rect x="29" y="37" width="14" height="14" rx="3.5"/>
    <rect x="46" y="37" width="14" height="14" rx="3.5"/>
    <rect x="12" y="55" width="14" height="14" rx="3.5"/>
    <rect x="29" y="55" width="14" height="14" rx="3.5"/>
  </g>
  <!-- the last free slot -->
  <rect x="46" y="55" width="14" height="14" rx="3.5" fill="none"
        stroke="rgba(255,255,255,.35)" stroke-width="3"/>
</svg>
```

**Variant:** replace the gradient fill with four `#ffdd33` slots and one `#3fe3ff` slot to tell a
story — four booked, one just arrived, one free. Use where the mark has room to be read; the
gradient version is the default.

**Rules.**
- Clear space around the mark = the width of one diary cell (14 units at the native viewBox).
- Keep the binding rings. Drop them only at true favicon size (16–32px) where they turn to mush.
- Wordmark minimum **16px tall**. Below that, mark alone.
- Never stretch, never recolour outside the palette, no drop shadows, no glows, no outlines.
- On a photograph: only over a charcoal panel. Never floating on a busy image.

---

## 3 · Type

| Role | Face | Weights |
|---|---|---|
| Display — headlines, the wordmark, **big numbers** | **Clash Display** | 600, 700 |
| Body — everything else | **Satoshi** | 400, 500, 700 |

Both from **Fontshare** (free, commercial use allowed): `https://fontshare.com`

```html
<link href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&f[]=satoshi@400,500,700&display=swap" rel="stylesheet">
```

```css
--font-display:'Clash Display', 'Inter', system-ui, sans-serif;
--font-body:'Satoshi', 'Inter', system-ui, sans-serif;
```

**Numbers are the brand's punctuation.** A price, a turnaround, a count — set it in Clash Display
at display size and let it carry the section. A number set large in yellow does more work than a
paragraph. This is the single most recognisable thing about the brand's layouts.

**Rules.**
- Sentence case headlines. Not Title Case.
- ALL CAPS only for tiny labels, with letter-spacing around `.08em`.
- Body copy 16–18px, line-height 1.6, measure capped near 65 characters.
- One type scale, used consistently. Suggested: 13 / 16 / 18 / 24 / 32 / 48 / 72.
- `font-variant-numeric: tabular-nums` anywhere figures stack in a column.

---

## 4 · Layout and visual language

- **Charcoal ground, panels raised on it.** Cards are `#0d0f13` with a hairline
  `rgba(255,255,255,.10)` border. No heavy shadows — separation comes from the value step
  between ground and panel, not from blur.
- **Corner radius:** 12–16px on cards and buttons, 8px on inputs and small chips. Pick two and
  stick to them.
- **Generous vertical rhythm.** Sections breathe; the dark ground does the work that whitespace
  does on a light site. Cramped dark layouts read as cheap.
- **Tap targets: 44px minimum on phone, 34px on desktop.** Trades read websites on a phone, in a
  van, with cold hands. This is not a nicety.
- **One accent per screen.** Yellow *or* the gradient carrying the eye, not both competing.
- **Cyan is for things arriving** — links, "new", enquiry forms. Yellow is for things you want
  pressed. Do not swap them; the distinction is consistent across the whole family and customers
  learn it.
- **Motion:** two standards, because the studio's own site has a different job from a client's.

  **Client builds — short and functional.** 120–200ms, ease-out. Honour
  `prefers-reduced-motion`. No parallax, no scroll-jacking, no counters ticking up. A customer
  looking for an electrician wants the phone number, not a show. Real page speed beats animation
  every time, and this rule is what protects it.

  **The studio's own site — the showreel, and exempt.** It is the product demo. If it cannot
  demonstrate what the studio can build, it is not doing its job. Scroll-scrubbed sequences,
  parallax, live gradients and cinematic motion are all permitted here and nowhere else.

  Three things still bind on both. `prefers-reduced-motion` is honoured absolutely, and under it
  the page must still make sense rather than going blank. The LCP element is never animated —
  animating an `<h1>` cost a real build 666ms before it was caught. And motion is scroll-linked
  wherever possible, so it moves when the reader moves rather than performing at them.

---

## 5 · Voice — the most protected asset

The brand sounds like a working Yorkshire spark, because that is who it is for and who it came
from. Blunt, warm, short sentences, contractions. This is the thing competitors cannot copy, and
the thing that gets diluted first.

**Do:**
- Short sentences. Full stops over commas.
- Real numbers and real jobs, never percentages. *"Live in a week"*, not *"rapid deployment"*.
- "Sorted", "no bother", "rammed", "nowt" — where they land naturally. Never forced.
- Say the price. Trades trust a number on the page and distrust "get in touch for pricing".
- Honesty over polish. If something takes three weeks, say three weeks.

**Never:**
- Hyphens or dashes in customer-facing copy.
- The words "jargon" or "fluff" — using them is the thing they describe.
- Exclamation marks in cold email.
- Fake testimonials, invented client counts, inflated numbers. Ever. Not once.
- Stock-agency phrasing: "solutions", "leverage", "seamless", "elevate", "in today's
  digital landscape".

**The test:** would a spark reading this on a scaffold at 7am nod, or smell marketing? If it
smells like marketing, rewrite it.

**For the studio specifically:** the audience is trades who have been sold a bad website before,
usually by someone who talked down to them. Write like the person who actually does the work,
because that is what earns the enquiry. Show the work, name the price, say when it will be done.

---

## 6 · Photography and imagery

- **Real gear, real vans, real boards, real brews.** Phone photos beat polished stock.
- **Never** stock models in clean hard hats pointing at clipboards. It is instantly recognisable
  and it insults the audience.
- Screenshots of actual work, on a charcoal panel, at a readable size.
- If there is no real photograph, use no photograph. A well-set number on charcoal is stronger
  than a fake one.
- Any image on the dark ground wants a subtle border or a panel behind it, or it floats.

---

## 7 · Building the website

**Structure that suits this audience:**

1. **Hero** — what you do, who for, and the price or the turnaround. One gradient headline or one
   big Clash Display number. One yellow button. Nothing else competing.
2. **The work** — real sites you have built, screenshots, named trades. This is the whole sell.
3. **What it costs** — a real number. The single biggest differentiator against agencies who hide
   it.
4. **How it goes** — three or four steps, plainly. What you need from them, what they get, when.
5. **Who you are** — that you are a trade, building for trades. Short.
6. **One clear way to get in touch.** Not four.

**Technical defaults:** dark-first with no light-mode toggle unless there is a reason ·
mobile-first, built and tested at 390px before desktop · fonts preloaded, one gradient, no
carousels · visible focus ring on every interactive element (`2px solid #3fe3ff`, offset 2px) ·
real page speed matters more than animation.

---

## 8 · Quick reference — do not

- Add a colour outside the seven above.
- Use the gradient more than once per page.
- Fill all six diary slots.
- Set yellow text on white.
- Write a dash or a hyphen in customer copy.
- Invent a testimonial or a number.
- Use stock photography of tradespeople.
- Title Case A Headline Like This.
- Ship a tap target under 44px on phone.

---

*Colour values, logo geometry and type stack taken from the production Stacked Out brand system,
27 Jul 2026. The parent brand's own guidelines remain the source of truth if the two ever
disagree.*
