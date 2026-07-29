# ES Elec v3 — the blueprint (checklist Phases 1-3 output)

Rebuild of record, 2026-07-28. Doctrine-driven, taste-rule-13: first time
right. This file is the single source for IA and depth; COPY.md executes
it section by section.

## Phase 1 — strategy (skills: seo-local, seo-page applied)

| Page | Primary term | Title (≤600px) | H1 |
|---|---|---|---|
| / | electrician leeds | Electrician in Leeds \| Rewires, EV & Solar \| ES Elec | The Leeds electrician who prices the job before it starts. |
| /services/ | electrical services leeds (+7 anchored service terms) | Electrical Services Leeds \| Prices & What Happens \| ES Elec | Electrical services in Leeds, priced and explained |
| /about/ | niceic electrician leeds | About ES Elec \| NICEIC Electrician in Leeds | The one who answers the phone is the one on the tools. |
| /blog/ | — | Advice From a Leeds Electrician \| ES Elec | Advice, from the tools |
| /blog/rewire-cost-leeds/ | rewire cost leeds | How Much Does a Rewire Cost in Leeds? 2026 Prices | (direct-answer lead, exists — refresh) |
| /blog/eicr-landlords-leeds/ | eicr leeds landlord | EICR for Leeds Landlords: 2026 Rules, Costs, Fines | NEW |
| /blog/fuse-board-upgrade-signs/ | fuse box replacement cost | Fuse Board Upgrade: 7 Signs and 2026 Costs | NEW |

No per-town pages (doorway policy). Local-SEO go-live checklist appended
to DELIVERY.md per doctrine/local-seo.md. No aggregateRating in go-live
schema (doctrine/google.md).

## Phase 2 — direction contract

World: **Tungsten** (founder-approved) — warm charcoal #16130f, ink
#f4efe6, amber #ffb24d highlights, filament #ff9e1f reserved for
conversion actions, paper middles between dark bookends. Clash Display +
Satoshi. Hero recipe: **The Power Core, evolved** (recipe 1, this
client's own). What "evolved" adds over the approved v2 core:

1. **Boot-up choreography** (the ONE signature moment, per
   doctrine/design-craft): on arrival the scene powers up in sequence —
   grid fades in, a current pulse runs the traces into the core, the orb
   ignites with a bloom, rings spin up, chips arrive. ~2.4s, ease-out,
   once.
2. Constellation mesh + aurora + marquee retained; density tuned up at
   ≥1280px.
3. **Pause control** (WCAG 2.2.2): small styled pause bottom-right of the
   hero freezes core/marquee/canvas; reduced-motion serves the DESIGNED
   still (core lit, rings at composed angles).
4. Hero ≥88svh; H1 stays LCP.

CTA system (taste rule 12 — unmissable): filament `Call Eddie` is the
single loudest element on every screen — glow, size, weight — always with
one risk-reducer line beneath ("Answered Mon to Sat, 7.30 to 6" / "You'll
hear back within the working hour"). Secondary `Get a quote` outline.
Inline CTA bands between section clusters keep cadence at every 1.5-2
viewports. Sticky mobile bar from 520px scroll.

## Phase 3 — DEPTH information architecture

### Home (13 sections — Audit 3 tabulates against this)

1. **Live hero** — core scene, kinetic service ticker, H1, 18-word sub,
   dual CTA + risk-reducer, urgent line (emergencies jump the queue)
2. **Trust shelf** pulled up over the hero's bottom edge — 4 animated
   counts: 4.9 rating / 87 reviews / jobs certified / years trading
3. **"Priced before it starts" spread** — the market-gap claim: only ~1/3
   of homeowners get an itemised quote (doctrine/trade-market); what an
   ES Elec written price includes, itemised, with a sample line-item
   strip; the written-price promise
4. **Services** — 2 lead tiles (Rewires, Solar+battery: symptom-led,
   scene/photo, price anchor) + tight 5-row list (EV, boards, EICR,
   fault, lighting), each: symptom line + from-price + arrow
5. **The Rewire Reckoner** (interactive instrument): bedrooms stepper +
   occupied/empty toggle → guide price range, days on site, what moves
   it; derives from the SAME model as the blog table; CTA under result
6. **Inline CTA band #1** — call-first, risk-reducer line
7. **How a job goes** — 4 steps on a drawn counter rail (ring → price →
   work → paperwork), two sentences each
8. **Proof** — lead pull-quote review + 2 supporting (name, area, job,
   date), "check D123456 on the NICEIC register, me included" line,
   response-time promise restated
9. **Solar band** — payback framing, 10-year workmanship + MCS handling,
   two-bills ask, precise savings figure against round install price
10. **Areas with substance** — Leeds + 7 towns grouped by coverage logic,
    one real sentence per cluster, "ring anyway" overflow line
11. **Credentials, explained** — NICEIC in plain English (what it audits,
    why warranties survive), £2m liability, 12-month workmanship terms,
    Part P / BS 7671 in one homeowner sentence each
12. **FAQ** — 6 questions (call-out cost, do I need an electrician for X,
    emergency speed, certificates, tidy-up, payment) — FAQPage schema
13. **Contact** — phone-first block (huge number, hours, callback
    promise) + canonical 7-field-max form (5 required) + facts list
    → footer with full NAP

### Services hub (per service × 7 — every block present)

Intro (symptom voice) · What happens on the job · Price and what moves it
· How long it takes · Credentials that apply · 2-3 real FAQs · intent CTA
(call: fault/EICR/boards · form: solar/rewires/EV/lighting). Job cards
keep the price/duration/CTA rail. Closing quote form on-page.

### About

Bio with story (the one-man-band argument) · quals explained · expanded
how-a-job-goes · guarantee terms in full · the kit/van paragraph · FAQ
(3) · CTA band. Person schema.

### Blog

3 posts, each: direct-answer first paragraph, real table, "how to read a
quote" empathy section, CTA band. Article + Breadcrumb schema.

### client.js extensions this build adds

`faqs` (global + per-service), `jobsCertified` (TEMP), per-service
`happens`, `moves`, `duration`, `faq[]`, `reckoner` model (bedrooms →
price/days, single source with the blog table).

## Audit 3 record

Home 13 sections — canonical order (doctrine/trade-market) plus the
instrument; services 7 services × 7 blocks; about 7 blocks; 3 posts.
Depth met on paper; Audit 5 (the look audit) verifies it on screen.
