# THE PROMPT

Copy everything below the line into a fresh Claude Code session in this repo.
Paste the client's Google Business Profile where marked. That's it.

Works with nothing but the Google profile. Everything it can't get from there,
it will list as questions for the client rather than invent.

---

# BUILD AN ELECTRICIAN'S WEBSITE

You are building a website for a UK electrician. You have this repo's research,
41 skills, and a working Astro template. Follow this exactly.

## Repo context — read these first

- `BUILD_PROCESS.md` — the 8 phases, skill order and quality gates. **Follow it.**
- `AUDIENCE.md` — what makes a UK homeowner ring an electrician. **Read before
  writing any copy.**
- `RESEARCH.md` — competitor teardown and live audit data.
- `MASTER_PROMPT.md` — the full spec for the finished site.
- `client-template/` — the starter. Copy it, don't edit it in place.

---

## CLIENT

**Google Business Profile — paste below.** Include everything you can see: name,
category, address or service area, phone, website, hours, rating, review count,
the business description, the services list, and **as many full reviews as you
can copy, with reviewer names and dates.** The reviews matter more than anything
else here.

```
<<<PASTE GOOGLE BUSINESS PROFILE HERE>>>
```

**Anything else you know** (delete if nothing):

```
<<<OPTIONAL: website URL, Facebook, van photos, who the owner is, what they
told you on the phone, which towns they want work in>>>
```

---

## STEP 1 — Mine the profile, then tell me what's missing

Before building anything, extract and report back.

### Pull out directly

Name (exact, canonical) · category · address or service area · phone · hours ·
rating · review count · description · services listed · years trading if shown.

### Mine the reviews — this is the highest-value step

Reviews are the single richest source you have. Work through every one and pull:

- **Named staff.** "Dave came out", "Mike and Sandra were brilliant" — these
  names go on the site. Research found named individuals in testimonials are the
  most under-used trust signal in the entire UK market.
- **Job types actually mentioned** — rewires, EICRs, fuse boards, EV chargers,
  fault finding, outdoor sockets. This tells you the real service mix, which is
  often not what the profile lists.
- **Towns, streets and areas named by customers.** These seed the location pages
  and they're *verified* — a customer said it, not the client.
- **The customer's own words.** Copy exact phrases. "Turned up when he said he
  would", "explained everything without being patronising", "cleaned up after
  himself". This is the voice the site should echo. Never paraphrase these into
  marketing language.
- **Recurring praise.** If eight reviews mention tidiness, tidiness is the
  positioning.
- **Any complaint, and how they replied.** A good reply to a bad review is a
  trust asset — put it on the reviews page.
- **Review recency.** 73% of consumers only trust reviews from the last month.
  If the newest is 8 months old, that's a finding to raise with the client.

### Infer, and label it as inference

Housing stock likely in their area · probable customer mix (domestic / landlord /
commercial) · whether they look like a sole trader or a limited company · rough
business maturity.

### Then stop and give me a list

Report:

1. **What you extracted** — the facts, in a short table.
2. **What the reviews told you** — named staff, real job types, verified towns,
   the three best verbatim quotes.
3. **What you must ask the client**, as a numbered list I can send them
   straight away. At minimum this will include:
   - Accreditation scheme **and registration number** (NICEIC / NAPIT / SELECT)
   - Part P registration date
   - Public liability figure
   - Qualifications (2391, 18th Edition, ECS card)
   - Owner's full name and role
   - Real streets, estates or developments they've worked on, per town
   - Three real jobs for case studies: what was wrong, what they did, what it
     cost, roughly when
   - Photos: owner, team, van, finished work, any before/afters
   - Which work they want more of, and which they want less of
   - Domain: owned, or needs registering
4. **Your read on the build** — which of the four buyers in `AUDIENCE.md` this
   client mainly serves, and what the positioning should be.

**Do not start building until I've come back with answers.** If I say "just
build it with what you've got", proceed — but every unknown becomes a visible
placeholder, never an invention.

---

## STEP 2 — Build

Once I've answered, work through `BUILD_PROCESS.md` phases 1–6 in order.

### Absolute rules

**Never invent a fact.** No accreditation number, review count, testimonial,
case study, qualification or price unless it came from me or the profile. One
invented registration number does more damage than a plain-looking site.

**Every claim carries a name, number, date or place.** If a competitor could run
the same sentence unchanged, rewrite it.

**No fear-selling.** The test: *would this sentence still be true and useful if
the reader decided not to buy?* Information if yes, manipulation if no. See
`AUDIENCE.md` §6 — this is a legal line as well as an ethical one.

**Run all four de-slop passes on every page:** `stop-slop` → `avoid-ai-writing`
→ `humanizer` → `structural-humanizer`. Rewording alone doesn't beat structural
AI detection.

**Never animate the LCP element.** The best-looking competitor site scores
15/100 with a 23.7-second LCP because they hung a video on it. We get a live
hero *and* a passing score, which nobody in this market currently has.

**Only build a location page you can make genuinely distinct.** It needs real
street names and the actual electrical characteristics of that area's housing.
Ten real pages beat thirty templated ones. If you can't write it, don't build
it — the template will render a warning if you try.

### Order

```
Phase 1  Strategy    seo-local, seo-page. Decide the page set.
Phase 2  Design      impeccable FIRST, then aesthetic-anchors.
                     Pick an ownable colour — never trade-blue.
                     Hero approach follows the photography reality.
Phase 3  Copy        copywriting + ogilvy → all four de-slop passes
                     → cro → seo-geo. Symptom first, one buyer per page.
Phase 4  Build       cp -r client-template ../<client> && npm install
                     Fill src/data/client.js. frontend-design,
                     design-engineering, css-animations, seo-images.
Phase 5  Optimise    seo-schema, seo-page, seo-technical, seo-sitemap,
                     seo-local. Electrician schema, not LocalBusiness.
                     No AggregateRating on self-collected reviews.
Phase 6  Verify      performance-audit, lighthouse-100, responsive-check,
                     a11y-critic. Then npm run build.
```

### The page set

Home · About · Contact · Reviews · Case Studies · one page per real service ·
8–15 location pages · industry pages only if they do commercial work.

### What the homepage must do, in order

1. **Hero** — what they do, where, and the Google rating **above the headline**.
   Phone CTA and quote CTA. That review-above-the-headline pattern is the single
   most copyable thing found in the research.
2. **Trust bar** — accreditations linked to their verifying register, years
   trading, insurance figure.
3. **Problem-led intro** — the customer's symptom, not the company's history.
4. **Services** — real photos over icons where photos exist.
5. **The owner** — photo, name, one specific first-person paragraph. Biggest
   differentiator in the market.
6. **Case studies** — three, real, with before/after.
7. **Reviews** — naming the electrician where the review does.
8. **Areas covered.**
9. **FAQ** — questions they actually get asked.
10. **Closing CTA** — phone, form, hours, response promise.

### Non-obvious things that matter

- **Contact details and hours outrank price and reviews** as a trust factor (85%
  rate them important). Phone tappable, visible on a 375px screen without
  scrolling, sticky.
- **The site is a verification channel.** 69% of hires come from word of mouth —
  the visitor already has the name and is checking they're real. Survive
  scrutiny; don't pitch.
- **Address the stranger-in-the-house fear.** Only 22% of women say a
  tradesperson alone in their home has never made them feel unsafe, against 59%
  of men. A real face, a first name, "we'll text you a photo of the engineer
  before he arrives" — almost nobody does this.
- **Translate every badge.** "NICEIC Approved Contractor" means nothing to most
  people (Part P awareness ~14%). Add: *"an independent assessor inspects our
  work every year, and we can self-certify to Building Control — so you get the
  compliance certificate your solicitor asks for when you sell."*
- **Show prices where they exist.** Hiding them reads as evasive. Where genuinely
  variable, publish the hourly rate and call-out fee and say what varies.
- **Explain C1/C2/C3 codes.** C3 is "improvement recommended" and does *not*
  fail a report. Saying so inoculates the customer against the electrician down
  the road who quotes remedials for every C3.
- **Don't chase a spotless 5.0.** Purchase likelihood peaks at 4.2–4.5 stars.

---

## STEP 3 — Report

When the build passes Phase 6, give me:

- What you built — page count, structure
- **Lighthouse: performance, accessibility, best practices, SEO, plus LCP, INP,
  CLS on mobile.** Targets: LCP <2.5s, INP <200ms, CLS <0.1.
- Every placeholder still showing, and what's needed to fill it
- Every assumption you made
- What I need to do before launch: GBP verification, Search Console, citations
- Three things you'd improve with more budget

Then wait. Don't launch anything.

---

## Agent rules

You are the CEO of any agents you run, not a dispatcher.

- **Never more than 3 at once.** You must genuinely read everything back.
- **Every brief names one deliverable and its format.**
- **Review before use, every time.** Agents produce confident nonsense.
- **Location pages are the one place worth parallelising** — up to three at a
  time, one town each, each briefed with that town's real streets and housing
  stock.
- **Never let an agent invent a fact.**
- Anything you didn't personally check doesn't ship.
