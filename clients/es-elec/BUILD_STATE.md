# BUILD_STATE — ES Elec v3 (live, updated at every stop point)

Purpose: if the session is cut (usage window, container restart), a fresh
session resumes the build from THIS file with zero re-derivation. Read
CLAUDE.md first (THE PROCESS MANDATE binds this build), then this file,
then act on NEXT ACTION. Delete this file at Phase 9 hand-off.

Last updated: 2026-07-29, ALL PAGES v3 COMPLETE (home, services, about, blog x3, 404) and pushed; preview republished.

## Where the build stands

Checklist phase: **Phase 5 (build), in progress.** Phases 0-4 complete:
- Phase 1-3 → PLAN.md (page map, direction contract, 13-section IA)
- Phase 4 → COPY.md (the v3 copy deck, Audit 4 passed; copy is used
  VERBATIM from there)
- impeccable re-run for v3: context.mjs done → PRODUCT.md + DESIGN.md
  written; craft-floor loaded; mechanical detector
  (`node .claude/skills/impeccable/scripts/detect.mjs --json <targets>`)
  still TO RUN ONCE at end of build
- Phase 5 opened: reference frames for home =
  design-system/reference-frames-home.html (imagegen-web fallback,
  Higgsfield offline)

Home page state: **hero DONE** (evolved Power Core: boot-up choreography
once on arrival, pause control wired to CSS + mesh canvas, designed
reduced-motion stills incl. static ticker word and one-frame
constellation; verified by screenshot at mid-boot/idle/paused/still,
zero console errors). Sections 2-13 still render the OLD v2 layout and
must be rebuilt per COPY.md + the reference frames.

Data: src/data/client.js carries all v3 extensions (reckoner model,
solarModel, faqs×6, areaClusters, lineItems, jobsCertified 1438,
v3 reviews). All TEMP-tagged.

## NEXT ACTION (pick up exactly here)

Rebuild home sections 2-13 in src/pages/index.astro + src/styles/site.css,
in this order, copy verbatim from COPY.md, layout per
design-system/reference-frames-home.html:

2.  DONE — trust shelf live (4 counts, count-up formatter now handles
    thousands separators), verified desktop + mobile
3.  DONE — written-price spread live (paper section, quote-fragment card,
    includes list, promise line, quiet CTA), verified desktop
4.  DONE — services live (2 lead tiles + 5 rows on paper), verified
    desktop. NOTE: old .work CSS now unused; strip in the simplify pass
5.  DONE — Reckoner live; maths click-tested against the model (5 cases
    ALL PASS, clamps verified, zero console errors), desktop verified
6.  DONE — CTA band #1 (.band fragment with filament pulse edge)
7.  DONE — four-step counter rail on paper, numbers light on reveal
8.  DONE — proof dark section (lead quote + 2 side, register line, CTA);
    verified desktop, zero console errors
9.  DONE — solar band dark, guarantee-led, flow SVG kept alive
10. DONE — areas clusters with housing-stock sentences + overflow line
11. DONE — credentials definition rows; 11b band #2 in place; verified
12. DONE — FAQ accordion (native details, first open, chevron rotate),
    FAQPage JSON-LD validated with 6 questions
13. DONE — contact: v3 H2, canonical 6-field form (select jobtype, optional
    detail/email, demo mailto updated), footer demo-reviews note added

X
blog: refresh rewire-cost-leeds (occupied note), NEW eicr-landlords-leeds
+ fuse-board-upgrade-signs, branded 404.
Commit + push after every page. Keep this file's "Last updated" current.

## Then Phases 6-9 (per kit/BUILD_CHECKLIST.md)

- Phase 5 close: find/improve/review-animations sweep; impeccable
  detect.mjs once; AUDIT 5 = the LOOK audit (full-page screenshots,
  desktop AND mobile, read every section)
- Phase 6: seo-schema (Electrician, NO aggregateRating), seo-technical,
  seo-sitemap; Audit 6 TEMP grep
- Phase 7: node gates.mjs (add paused-hero state), Lighthouse 100×4 all
  7 routes (gzip server on 4321, CHROME_PATH=/opt/pw-browsers/chromium,
  playwright-core from client node_modules)
- Phase 8: two independent critique agents on the RENDERED site, ≥28/32
  both, zero P0
- Phase 9: bundle-preview.mjs (motion force-unlock) republished to the ES
  artifact URL https://claude.ai/code/artifact/9e088c53-5505-45c0-aeef-b3cc5d46143a
  (pass `url` to keep the same link), DELIVERY.md refresh, SKILL_LOG.md
  complete (Audit 9 gates on it), hand-off message, STOP for founder
  sign-off, verdict → research/founder-taste.md

## Standing constraints (do not re-learn these the hard way)

- Push ONLY to claude/electrician-website-template-a3751a (updates PR #1;
  never open another PR)
- Skills are INVOKED via the Skill tool per kit/SKILL_ROSTER.md; log every
  one in design-system/SKILL_LOG.md (process mandate, CLAUDE.md)
- MCP status at resume: GitHub OK · Claude Code Remote OK · magic DEAD
  (no API key; founder to decide keep/remove) · Higgsfield: CLI INSTALLED
  (npm @higgsfield/cli, binary /opt/node22/bin/higgsfield — reinstall via
  `npm i -g @higgsfield/cli` after restarts) but api/cloud/higgsfield.ai
  are BLOCKED by the environment network policy (curl 000). Fix is
  founder-side: EITHER start the session with the Higgsfield connector
  ticked (org-level auth already connected) OR allow higgsfield.ai +
  api.higgsfield.ai + cloud.higgsfield.ai in the environment's network
  policy, then run `higgsfield auth login` (PKCE; founder opens the URL
  and pastes the 127.0.0.1 callback URL back). Video loops = first job.
- H1 stays LCP, never animated; amber-500 is conversion-only; no em
  dashes in customer copy; TEMP reviews never go live (DMCC 2025)
- Container restarts: `git fetch origin claude/electrician-website-template-a3751a
  && git reset --hard origin/claude/electrician-website-template-a3751a`
- Founder rhythm: report status before long work, one-line note per phase
