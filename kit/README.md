# The starter kit — one client a day

The split (agreed 2026-07-28): the founder owns SALES + INTAKE and DESIGN
SIGN-OFF. The studio (Claude) owns everything between: direction, copy,
build, verification, temp link. Go-live happens after the founder's
sign-off and the client's payment.

## The day, hour by hour

| Hours | Step | Owner |
|---|---|---|
| 0 | Intake arrives (`kit/INTAKE.md` answered, any brand assets) | Founder |
| 0-0.5 | `clients/<name>/` scaffolded from a flagship; intake answers become `src/data/client.js`; gaps filled with `// TEMP` industry averages | Studio |
| 0.5-1 | Direction chosen: read `research/founder-taste.md` + `research/direction-ledger.md`, pick a live-hero recipe (`kit/hero-recipes.md`) sharing ≤1 axis with every prior client; write the direction contract | Studio |
| 1-3 | Copy deck per MASTER_PROMPT (skills chain + four de-slop passes), consistent with the pricing model in client.js | Studio |
| 3-6 | Build: live hero first (it is the identity), then pages; commit and push after every phase — containers restart without warning | Studio |
| 6-8 | Gates: `node gates.mjs`, Lighthouse 100×4 every route, schema, TEMP grep; dual critique for new DIRECTIONS (derived builds: single critique) | Studio |
| 8 | Temp preview published (bundle-preview pattern), link to founder | Studio |
| — | Design sign-off; feedback appended to `founder-taste.md` | Founder |
| — | Client review → payment → real facts swap (kill every TEMP) → go-live per `DELIVERY.md` | Both |

## Hard gates that never flex

- Live-hero floor (CLAUDE.md standing rule; `founder-taste.md` binding)
- Lighthouse 100/100/100/100 per route (99 tolerated only with a stated,
  founder-visible reason)
- axe: zero critical/serious, all routes, menu-open and sticky-bar states
- No overflow 360→1920, no console errors
- CTA lock: exactly two intents sitewide, phrased for the client
- TEMP grep list in DELIVERY.md; demo reviews never go live (DMCC 2025)
- Direction ledger row added before the temp link goes out

## Where things live

- `kit/INTAKE.md` — the questionnaire the founder sends clients
- `kit/hero-recipes.md` — named live-hero concepts, each used at most once
- `research/doctrine/` — the studio textbook (Google, UX, psychology,
  local SEO, craft, market) — consult during direction and copy
- `clients/es-elec/`, `clients/loxley-solar/` — the reference flagships;
  copy their `gates.mjs` + `bundle-preview.mjs` and their component
  patterns (Nav/Footer/QuoteForm/Base observers) into new clients
- Status discipline: before any long-running background work, tell the
  founder in chat what is running and how long it takes
