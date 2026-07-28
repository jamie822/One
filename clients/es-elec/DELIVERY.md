# ES Elec v2 — delivery note

Status: **temp preview**. Everything below must be resolved before paid go-live.
Gate: `grep -rn "TEMP" src` returns nothing, and the demo reviews are gone.

## Verification record (2026-07-28)

| Gate | Result |
|---|---|
| Lighthouse (mobile, throttled) | 100 / 100 / 100 / 100 on all five routes |
| axe-core | 0 critical, 0 serious on all routes, including open mobile menu and sticky-bar states |
| Responsive | no overflow, no console errors at 360 / 390 / 768 / 1024 / 1440 / 1920 |
| Schema | Electrician (+PostalAddress), OfferCatalog, Article, Person, BreadcrumbList all valid |
| Impeccable critique | dual independent critics; round 1 defects fixed (see git log), round 2 on fixed build |

Repeatable check: `node gates.mjs` with `dist/` served on :4321.

## TEMP swap list (all tagged in source)

Single source of truth is `src/data/client.js`. Swap there and every page updates:

- Legal name, owner name
- Street address and postcode (schema only, not rendered)
- Phone (currently an Ofcom drama-range number), email, hours
- Founded year / years trading
- NICEIC registration number (verify on the NICEIC register before publishing)
- Liability cover, guarantee wording
- Google rating + review count
- All seven from-prices

Also tagged in pages:

- Three demo reviews on the home page (`index.astro`, marked `TEMP demo review`).
  **Never ship these live: invented reviews are illegal under the DMCC Act 2025.**
  Replace with real Google reviews (quoted verbatim, with permission) or remove the section.
- "Read all 87 reviews on Google" links to bare google.com/maps; swap for the
  client's real Google reviews URL (tagged `TEMP review link`)
- The rewire blog post price table and figures (`blog/rewire-cost-leeds.astro`)
- Solar figures and MCS status (`services.astro`, `index.astro`)
- Hero, board and solar photographs are generated placeholders; swap for real
  photos: the owner at the van (the About page needs a face), genuine job
  photos, the real roof installs
- The one-working-hour response promise in the quote form, and the
  "emergencies jump the queue" promise in the hero and fault-finding card:
  confirm the client actually offers both before go-live

## Form wiring at go-live

`client.conversion.formEndpoint` is empty, so the form runs in demo mode
(composes an email to `client.email` and never loses the enquiry). At go-live,
set it to the client's form handler (Formspree, Basin, or the hosting's own
endpoint) and the form switches to a real POST automatically.

## Hosting notes

- Serve with gzip or brotli (the Lighthouse 100s assume compressed transfer)
- Map 404s to `/404.html`
- `dist/` is fully static; no server runtime needed
