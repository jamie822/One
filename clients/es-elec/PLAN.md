# ES Elec v2 — flagship template build plan

The 2-day flagship. Beats `clients/live-template` (the ES Elec v1 base). This
file carries the strategy phase so the build phase never re-derives it.

## What v1 got right (keep, elevated)
- Confident dark hero with a live layer and a physical centrepiece
- Trust chip above the headline; town in the accent colour
- Floating service chips (idea kept, anchoring fixed)
- Light/dark section rhythm; count-up stats; real trade copy voice
- One-line brand reskin via `client.js`

## What v1 gets wrong (the beat-list)
- Giant broken checkmark SVGs colliding with mid-page sections
- Scroll-reveal voids: whole viewports of nothing mid-scroll
- Green-neon-on-dark reads AI-generic; aurora + dot grid is the 2024 cluster
- Chips look pasted; no anchor to the composition
- Filler stat ("6 services offered"); "NEEDED" chips now against policy
- One page; base package is four

## Business model (SAB, Home Services, Electrician)
- Service Area Business: no street address on page, `areaServed` lists real
  towns: Leeds, Horsforth, Headingley, Pudsey, Morley, Wetherby, Otley,
  Garforth, plus "across West Yorkshire"
- NAP = Name + Phone everywhere consistent (footer, contact, schema)
- Hours visible on page (open-at-search-time ranking factor)
- tel: click-to-call above the fold on every page; sticky mobile call bar
- Schema subtype `Electrician` (never generic LocalBusiness), `geo` at 5
  decimals (Leeds 53.79648, -1.54785), `openingHoursSpecification`,
  `priceRange`, `areaServed`
- aggregateRating carries demo figures tagged TEMP; swapped or removed at
  go-live per MASTER_PROMPT Part 6 (fake reviews illegal, DMCC 2025)

## Page targets (seo-page applied)

### Home `/`
- Title (58): `Electrician in Leeds | Rewires, EV & Solar | ES Elec`
- Meta (155): NICEIC registered electrician in Leeds. Rewires, fuse boards,
  EICRs, EV chargers and solar. A price before work starts. Call today.
- H1 contains: electrician + Leeds. One H1 only.
- Sections: hero → trust bar → services teaser (links to hub anchors) →
  why-us proof → reviews → area coverage → CTA band
- Schema: `Electrician` + `WebSite`; OG complete

### Services `/services/` (the hub — #1 local organic factor)
- Title (57): `Electrical Services Leeds | EICR, Rewires, EV, Solar`
- H1: Electrical services in Leeds
- Seven sections, each an anchored `<section id>` with its own H2 keyword:
  fuse boards & consumer units / full & partial rewires / EICR & landlord
  certificates / EV charger installation / solar & battery / fault finding /
  lighting design & installation
- Each section: what it is, what it costs (from-price, TEMP), how long it
  takes, evidence line. 150-250 words each — swap-test proof, no doorway thin
- Upsell path: wider packages split these into standalone pages
- Schema: `Electrician` + `OfferCatalog`; BreadcrumbList

### About `/about/`
- Title (54): `About ES Elec | NICEIC Electrician in Leeds`
- H1: The bloke behind ES Elec
- E-E-A-T: owner bio, quals (18th Edition, 2391 TEMP), accreditation numbers
  (TEMP), insurance (TEMP), photos, how-we-work, guarantee
- Schema: `AboutPage` + `Person`

### Blog `/blog/` + flagship post `/blog/rewire-cost-leeds/`
- Flagship post title (56): `How Much Does a Rewire Cost in Leeds? 2026 Prices`
- The classic trade lead magnet: cost table by house size (TEMP figures at
  West Yorkshire market rate), what changes the price, how to spot a quote
  that will grow, when you do NOT need a full rewire (trust play)
- GEO-citable: direct answers, stat-led, quotable blocks per seo-geo
- Schema: `Article` (no FAQ rich-result chasing; retired)
- Blog index: simple, fast, links post + services

## Internal linking
Hub-and-spoke: Home teases each service → `/services/#anchor`. Post links
`/services/#rewires` and Home. About links Services. Every page ≤2 clicks
from Home. Descriptive anchors only ("EICR testing in Leeds", never
"click here").

## Conversion pack (fitted: emergency split + call-first default)
- Urgent path: call CTA primary everywhere, sticky mobile call bar
- Considered path (EV/solar/rewire): short quote form, name/phone/postcode/job
- Both paths on Home; Services sections carry the path that fits the service

## Direction
Locked after research agents report: palette + type pairing + hero concept +
motion signature + layout rhythm from `research/design-benchmarks.md`,
entered in `research/direction-ledger.md` as the first entry.
Non-negotiable regardless of direction: no aurora-dot-grid default, no
neon-on-dark slop palette, light imagery budget honoured, LCP element never
animated, every interactive flourish must serve conversion or comprehension.

## Verification exit (MASTER_PROMPT Part 7)
critique ≥28/32 zero P0 → responsive 360-1920 → axe zero critical/serious →
Lighthouse 100×4 on Home, ≥95 others → de-slop ×4 confirmed per page →
schema validates → TEMP grep list attached → rendered screenshots reviewed.
