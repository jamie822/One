# PRODUCT.md — ES Elec

## What this is
Flagship demo site for ES Elec (Leeds electrician + solar installer), the
studio's rebrandable template of record. One-man band: Eddie Sharp quotes,
does and certifies every job. Demo persona; facts marked TEMP in
src/data/client.js swap at go-live.

## Who it serves
Leeds homeowners and small landlords, 30-70, on their phone, often mid-
problem (tripping board, dead sockets) or mid-decision (rewire, solar, EV).
They fear invoice surprises and cowboy trades more than price itself.
Full profile: /AUDIENCE.md.

## The one job of the site
Produce a phone call (distress work) or a quote-form submission
(considered work). Everything else is in service of those two actions.

## Positioning (locked, Phase 4)
The Leeds electrician who prices the job before it starts and answers his
own phone. Proof spine: itemised written price, NICEIC D123456 checkable,
response promise, 12-month guarantee.

## Product truths that constrain design
- Two CTA intents only: `Call Eddie` (fault/EICR/boards/emergency) and
  `Get a quote` (solar/rewires/EV/lighting). No third label.
- One shared rewire pricing model feeds the Reckoner instrument, the blog
  table and the services page. Never fork it.
- Reviews are TEMP demo content; never ship on a paying client's live
  site (DMCC Act 2025). Footer carries the demo-content note.
- Prices: round for installs, precise for savings.
- Copy source of truth: COPY.md. IA source of truth: PLAN.md.

## Platform
Static Astro 4, no framework runtime. Pages ship as HTML + one inlined
stylesheet + small vanilla scripts. Hosting assumes gzip. Lighthouse
100/100/100/100 on every route is the floor, H1 stays the LCP element.

## Surfaces
/ (Persuade) · /services/ (Persuade) · /about/ (Persuade-Read) ·
/blog/ + 3 posts (Read) · /404 (Persuade). Mode notes live per-surface;
the home hero is the signature surface (live-hero floor, CLAUDE.md).
