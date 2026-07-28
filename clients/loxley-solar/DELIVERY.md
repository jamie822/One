# Loxley Solar — delivery note

Status: **temp preview**. Everything below must be resolved before paid go-live.
Gate: `grep -rn "TEMP" src` returns nothing, and the demo review figures are gone.

## Verification record (2026-07-28)

| Gate | Result |
|---|---|
| Lighthouse (mobile, throttled) | 100 / 100 / 100 / 100 on all five routes |
| axe-core | 0 critical, 0 serious on all routes, incl. open mobile menu and sticky-bar states |
| Responsive | no overflow, no console errors at 360 / 390 / 768 / 1024 / 1440 / 1920 |
| Schema | HomeAndConstructionBusiness (+PostalAddress), OfferCatalog, Article, Person, BreadcrumbList all valid |
| Estimator | maths verified live (14 panels E-W: 4,420 kWh, £902/yr, 9.1yr, £8,200) and consistent with the blog price table |
| Impeccable critique | dual independent critics on the built site (see git log for outcomes) |

Repeatable check: `node gates.mjs` with `dist/` served on :4322.

## TEMP swap list (all tagged in source)

Single source of truth is `src/data/client.js`:

- Legal name, owner name, address/postcode (footer + schema)
- Phone (Ofcom drama range), email, hours
- Founded year, installs count (640), MCS number NAP-52147
  (verify on the MCS register before publishing)
- Liability cover, guarantee wording
- Google rating + review count
- All six from-prices
- **The estimator model** (`client.estimator`): yield per panel, facing
  factors, SEG/import rates, self-use shares, price model. The blog price
  table derives from the same numbers; calibrate both together to the
  client's real quoting model.

Also tagged in pages:

- Three demo reviews on the home page (`TEMP demo review`). **Never ship
  live: invented reviews are illegal under the DMCC Act 2025.**
- The blog launches with one post; write 2 or 3 more before go-live so the
  advice section reads established (battery sizing and export tariffs are
  already teed up by the services copy)
- Blog post prices, benefit figures and VAT note
- The one-working-day response promise (form confirm line and contact)
- The "About one roof in five, we do" claim: confirm or cut

## Form wiring at go-live

`client.conversion.formEndpoint` is empty, so the form runs in demo mode
(composes an email to `client.email`; nothing typed is lost). Set the real
handler at go-live and it switches to a POST automatically.

## Hosting notes

- Serve with gzip or brotli (the Lighthouse 100s assume compressed transfer)
- Map 404s to `/404.html`
- `dist/` is fully static; no server runtime
