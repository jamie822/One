# Swift Electrical & Security — v2 REBUILD BRIEF (founder order, 2026-07-29)

"Take everything we have added to your memory today and start a brand new
website... follow the new guidelines, do not copy anything from the site
you built except the colour scheme and the logo."

## What carries over (ONLY these)
- COLOUR SCHEME: the cyan-on-deep-blue world from src/styles/global.css —
  surface ladder --sunk #02060a / --bg #040d13 / --panel #0d1f27 /
  --raised #1d353e; text #ebf5f9 / #a0b6bd / #8aa3ab; brand cyan family
  (glow rgba(34,200,238)); accent amber #ffb63d (dark) / #c07800 (light);
  on-brand #002330, on-accent #2b1a03; full light-mode set as in file.
  Confirm the exact --brand cyan hex from global.css at Phase 2.
- LOGO: src/components/Logo.astro (bolt + SWIFT wordmark + spaced subline;
  recolours via --brand). Still a rebuild of the client's Instagram logo —
  original vector remains on the go-live NEEDED list.
- CLIENT FACTS in src/data/client.js remain the intake ground truth
  (VERIFIED/NEEDED markers): Adil, Bradford, security + electrical split.

## What does NOT carry over
Everything else: layout, hero, copy, IA, components, motion. The old site
is anti-reference only.

## Process
Full kit/BUILD_CHECKLIST.md Phases 0-9 under THE PROCESS MANDATE (no skips,
no substitutions, SKILL_LOG.md from Phase 0). New build lives at
clients/swift-electrical/v2/ scaffolded from the es-elec flagship; swap in
old dir at hand-off. Hero: claim an UNUSED recipe from kit/hero-recipes.md
(not Power Core, not Rising Sun, not Street Comes On unless founder asks) —
security+electrical suggests recipe candidates: Fuse Board Lit, Storm and
Steady House, Live Wire. Differentiator: SECURITY is half the business —
IA must sell CCTV/alarms/access alongside electrical, not as an afterthought.

## MCP status at kickoff (Phase 0 mandate)
GitHub OK · Claude Code Remote OK · Higgsfield: CLI installed,
higgsfield.ai domains still blocked by environment network policy
(founder-side fix pending; fallback = built scenes, declared) · magic: no
API key (founder to keep/remove).
