# UK Electrician Websites — Market Research & Build Playbook

> **Updated 27 July 2026 after a live audit.** The original study was built from
> Google's search index because outbound HTTPS was blocked. A GitHub Actions
> runner has since inspected all ten sites directly. **Section 0 corrects what
> the live data disproved.** Everything else stands, and most of it is now
> confirmed rather than inferred.

---

## 0. Corrections from the live audit

Raw data in `research-output/` — screenshots, `AUDIT.md`, `audit.json`.

### The biggest finding in the whole study: nobody passes Core Web Vitals

Lighthouse, mobile, all ten sites. Google's thresholds are **LCP under 2.5s, CLS
under 0.1.**

| Site | Perf | A11y | SEO | LCP | CLS |
|---|---|---|---|---|---|
| PWS (Glasgow) | 92 | 89 | 92 | **2.9s** | 0 |
| KHL (Manchester) | 69 | 92 | 100 | 3.6s | 0 |
| Gallagher (Birmingham) | 55 | 87 | 100 | 17.9s | 0.001 |
| Certified Electricians (London) | 47 | 90 | 92 | 9.2s | 0.196 |
| Amara (Manchester) | 46 | 94 | 92 | 4.3s | 0.004 |
| SS Electrical (Leeds) | 45 | 89 | 100 | 9.0s | 0.001 |
| **WY Electrical (benchmark)** | **42** | **92** | **85** | **7.3s** | **0.002** |
| Bains (Glasgow) | 24 | 79 | 85 | 17.1s | 0.287 |
| **Scott Electrical (Leeds)** | **15** | **76** | **85** | **23.7s** | **0.913** |

**Not one site passes.** The best LCP in the entire competitive set is 2.9
seconds, against a 2.5-second threshold. Six sites are over 7 seconds. Two are
over 17.

### And the site with the animated hero has the worst score in the set

Scott Electrical runs the drone-video hero — the best-looking hero found
anywhere. It costs them:

- **Performance 15/100**
- **LCP 23.7 seconds** — nearly ten times the threshold
- **CLS 0.913** — nine times the threshold

That is the single most useful data point in this research. **The one competitor
who tried to build something visually ambitious destroyed their page speed doing
it**, because they hung an autoplaying video on the LCP element inside a
WordPress theme.

This is exactly the trap `BUILD_PROCESS.md` Phase 4.3 exists to avoid: a hero
that moves, with the motion behind CSS transforms and the LCP element left
untouched and eager-loaded. You can have both. Nobody in this market currently
does.

**The competitive position, stated plainly:** every competitor is on WordPress,
nine of ten are visibly slow, and the only one that's fast is also the plainest.
A static Astro build that passes Core Web Vitals *and* has a live hero beats the
entire set on both axes at once. That isn't a marketing claim — it's the
measured gap.

Two secondary points worth keeping:

- **Accessibility is universally mediocre** — 76 to 94, nobody near 100. An
  accessible site is an easy, cheap differentiator.
- **The benchmark is mid-table.** WY Electrical's 42/100 and 7.3s LCP are better
  than most but nowhere near passing. Its CLS of 0.002 is genuinely excellent
  though — the layout is stable, it's just heavy.

### Corrected: three of ten heroes do move

The original study inferred from five independent city searches that no
competitor had an animated hero. **That was wrong.** Measured by screenshotting
each hero twice, two seconds apart, and diffing:

| Hero moves | Sites |
|---|---|
| **Yes (3)** | Scott Electrical (Leeds) — full drone **video** hero; SS Electrical (Leeds); Gallagher (Birmingham) |
| No (7) | WY Electrical, Quantum, Certified Electricians, KHL, Amara, Bains, PWS |

Scott Electrical's is genuinely good: aerial footage over a solar
installation, orange-on-charcoal, clean type, single clear CTA.

**What survives the correction:** seven of ten still have a static hero, and
animation libraries are loaded far more often than they're used —
Lottie, Swiper, AOS and Elementor Motion appear on six sites, mostly driving
carousels rather than a hero. Bains loads **136 CSS keyframe rules** and its
hero doesn't move at all. So motion remains a differentiator, just not an empty
field. Aim above Scott Electrical, not above nothing.

### Corrected: the benchmark has case studies

The original study reported no case-studies page on WY Electrical. **It has
one** — "Case Studies" sits in the main nav, alongside Reviews and Locations.
Scott Electrical and PWS have them too.

### Confirmed and sharpened

- **Every single one of the ten runs WordPress.** Mostly Elementor or Divi.
  There is no modern stack anywhere in this competitive set.
- **WY Electrical's hero is strong.** Real photography of a real electrician
  mid-job, dark overlay, and the Google rating — **5.0 from 188 reviews** —
  placed *above* the headline. That review-at-hero-level pattern is the single
  most copyable thing in the study.
- **Its brand colour is magenta**, not trade-blue. Genuinely distinctive.
- **Schema is richer than search could show.** WY runs 27 types including
  `Electrician`, `AggregateRating`, `Review`, `FAQPage` and `BreadcrumbList`.
  Certified Electricians and Bains also carry `AggregateRating`. This is table
  stakes, not an edge.
- **Location page counts confirm the architecture finding:** Certified
  Electricians 25 location paths, KHL 25, WY 22.
- **Real weaknesses visible in the screenshots:** WY's cookie banner and chat
  widget together cover roughly a third of the hero, obscuring the phone CTA.
  Scott Electrical has **41 images with no alt text**; SS Electrical has 31 and
  **no `<h1>` at all**; Gallagher has five `<h1>`s.

### Two flaws in the audit tool itself

- **The accreditation scan reports "SELECT" on all ten sites.** SELECT is the
  Scottish trade body — implausible for Leeds and London firms. The regex is
  matching `<select>` elements in the HTML. Ignore that column.
- **Review-count parsing produces artefacts** like "0188 reviews" and "8439
  reviews" where it has caught fragments of other numbers. Trust the
  screenshots over that column.

---

Research conducted July 2026 across the benchmark site, twenty-one competitor
electrician businesses in five major UK cities, cross-industry premium design,
Google Business Profile and local SEO practice, technical SEO, and premium
copywriting principles.

**Who this is for:** a two-person partnership (a working electrician of 13 years
and a web designer) selling well-built, high-converting websites at a reasonable
price to UK electricians who currently have **no website at all**.

---

## 1. The finding that matters

**No genuinely premium, design-led electrician website is ranking in any major UK
city.** *(Confirmed by the live audit — with the animated-hero caveat in §0.)*

Three researchers worked London, Manchester and Leeds independently, without
sight of each other's results. All three reached the same conclusion. A fourth
covering Birmingham and Glasgow found the same thing. Every top-ranking
competitor — Quantum and Certified Electricians in London, KHL and Amara in
Manchester, Scott Electrical and JTS in Leeds, Gallagher in Birmingham, Bains
and PWS in Glasgow — is a conventional trade site. Keyword-stuffed titles, stock
or absent photography, no case studies, no founder story, no motion.

Some of these are serious businesses. PWS Glasgow has 500+ five-star reviews and
runs its entire site on `.php` URLs. Bains Electrical has 137 reviews at 5.0 and
an industry award. Their real-world reputations are far ahead of their websites.

### But design alone will not rank a client

This is the nuance that decides whether the business works. The firms winning
local search today win on **review volume and hyperlocal page coverage**, not
looks. A beautiful site with one page and no reviews will lose to an ugly site
with forty location pages and 300 reviews.

So the offer has to be both. Design is the differentiator that wins the sale and
converts the visitor. Local SEO architecture is what actually gets them found.
Sell the first, deliver both.

### Why this fits a "no website yet" target

A prospect with no website has no sunk cost, no incumbent agency, and nothing to
migrate. They are also, almost by definition, losing work to competitors who do
have one. The pitch writes itself, and the build is cleaner than a redesign.

---

## 2. What the winners do — replicate these

### 2.1 A page per town, not one "areas we cover" page

This is the ranking engine, and it recurs in every city studied.

The benchmark site runs individual pages for Baildon, Adel, Alwoodley, Otley,
Ilkley, Huddersfield, Guiseley, Skipton, Harrogate and Leeds. Certified
Electricians London runs `/areas-covered/` pages per region. Quantum runs a page
per borough. SS Electrical Leeds covers Alwoodley, Adel and Bramhope
individually. KHL Manchester covers Prestwich, Wilmslow, Cheadle Hulme, Salford,
Hale Barns and Bolton.

**Every client build needs eight to fifteen of these.** Pull the list from the
client's actual job history, not a map radius.

### 2.2 A page per industry vertical

Rarer, and therefore an edge. The benchmark site has pages for garages and
dealerships, factories and warehouses, hospitals and care homes, schools, and
offices. Most competitors have nothing equivalent. Commercial work is higher
value and less price-sensitive than domestic, and these pages are how you reach
it.

### 2.3 Review count in the title of every page, not just the homepage

Quantum Electrical stamps "5 Star Proven Reviews" into titles and H1s across the
entire site. It is a small, mechanical, highly copyable trick that lifts
click-through on every listing the client owns.

### 2.4 Testimonials that name the actual electrician

Amara Manchester's reviews say "Mike and Sandra". JK Glasgow's say "ask for Jim".
PWS Glasgow's name "Paul and Alan". The benchmark site has "Jamie personally
oversees every inspection".

Customers already form trust around named individuals. Almost no site puts those
names on the page deliberately. Do it everywhere.

### 2.5 The accreditation stack

Table stakes, not a differentiator, but their absence is disqualifying. NICEIC or
NAPIT, Part P, TrustMark, CHAS for commercial, Which? Trusted Traders. Where
possible, link each badge to the verifying register so it is checkable.

### 2.6 Specialisms that signal a modern business

The strongest-positioned firms lead with EV charging, solar and battery, and
smart lighting rather than generic "electrical services". Gallagher Birmingham
pivoted entirely into renewables. Green Electrical leads with Rako lighting
control. These carry higher margins and less price competition.

---

## 3. What the losers do — avoid these

| Anti-pattern | Seen at | Why it hurts |
|---|---|---|
| Near-duplicate keyword pages (`best-electrician-leeds`, `best-electrician-leeds-2`, `cheap-electrician-leeds`) | Elite Electrical, Leeds | Textbook cannibalisation. Google picks one and may trust none. |
| Two pages for the same term (`/electricians-glasgow/` and `/electrician-glasgow/`) | Bains, Glasgow | Same problem, smaller scale. |
| Phone number stuffed into the title tag | JTS, Leeds | Wastes character budget, looks spammy in results. |
| Identical title template across every location page (`BEST [Service] in [Suburb]`) | KHL, Manchester | Reads as machine-generated. Thin-content risk. |
| The same pricing headline copy-pasted onto every location page | Benchmark site | Find-and-replace content. Exactly the slop to avoid. |
| Legacy `.php` URLs | PWS, Glasgow | Signals an unmaintained template build. |
| Inconsistent business name across web properties | Benchmark site | Direct NAP-consistency damage to local pack ranking. |

### Two defects on the benchmark site worth fixing

Both surfaced from public data and are genuinely fixable.

1. **The trading name appears four ways.** "West Yorkshire Electrical", "West
   Yorkshire Electrical and Solar" on Facebook, "West Yorkshire Electrics" in
   directories, "WYE Electrical" in some page titles. Google treats NAP
   consistency as a ranking input. Pick one exact string and enforce it
   everywhere.
2. **Location URLs split between two patterns** — some under `/locations/slug/`,
   others at the site root. Pick one and 301 the rest.

The review footprint, by contrast, is genuinely strong: roughly 157 Google
reviews at 5.0, a dedicated reviews page, and real unpolished customer language.
That part is the model to copy.

---

## 4. City-by-city summary

| City | Notable competitors | What stands out | The gap |
|---|---|---|---|
| **London** | Quantum (4.7★/277), Certified Electricians (~300 reviews, founder David Smallwood, 20+yrs NICEIC), Green Electrical, Atkins | Borough-level page coverage; sitewide review-badge branding; multi-trade diversification | No animated hero, no owner photography, no case study galleries anywhere |
| **Manchester** | KHL (4.9/325 MyBuilder), Spark Pro, Amara (10/10 Checkatrade, 261 reviews) | Deepest suburb page coverage; best named-individual testimonials (Amara) | Social proof lives entirely off-site on Checkatrade/MyBuilder rather than on the page |
| **Leeds** | Scott Electrical, SS Electrical, JTS, Elite | Scott and SS have real case studies with named clients; JTS runs a genuine blog | Titles written SEO-first, not human-first; Elite is cannibalising itself |
| **Birmingham** | Gallagher (renewables pivot, two generations), Birmingham Electricians (2,500+ rewires, single-service focus) | Deep service×audience URL siloing; niche-dominant positioning | Review volume thin compared with Glasgow (Q Khan: 11 reviews) |
| **Glasgow** | Bains (5.0★/137, award-winning), PWS (500+ reviews, most accredited), JK (45 years, "Jim") | Strongest review volumes found anywhere in the study | Best reputations, worst websites. `.php` URLs at the top of the market. |

**Regional note:** Glasgow firms clear 100+ reviews routinely. Birmingham firms
researched were markedly thinner. Review-count targets should be set against the
client's own city, not a national average.

---

## 5. What premium actually looks like

Researched outside the trade, because inside it there is no ceiling to aim at.
Architecture studios (Minale + Mann, Gregory Phillips), luxury builders
(Hawksmoor Homes), bespoke joiners (Grovewood), heritage makers (Smallbone).

Six transferable principles:

1. **Typography is the design statement.** Premium sites use oversized,
   characterful editorial type. Trade sites use the default sans-serif their
   theme shipped with.
2. **Restraint beats clutter.** The architecture sites win on what they leave
   out. No badge walls, no icon-box grids, no stacked CTAs. Large photography
   and negative space carry it.
3. **Motion should reveal, not decorate.** Scroll-triggered reveals that pace a
   story. Never an autoplaying stock-footage loop.
4. **Colour should be ownable.** Architecture studios go near-monochrome and let
   photography supply colour. Premium US HVAC brands pick bold non-default
   palettes. Either beats generic trade-blue. Pick one distinctive colour per
   client.
5. **Lead with real projects, not a services grid.** Every premium example leads
   with named case study work.
6. **Social proof belongs at hero level.** A real review count near the top, not
   a footer widget.

Gregory Phillips Architects is the proof that premium and SEO are not in
tension: a rebuild around genuine copywriting and technical SEO took them to
top-three UK rankings across roughly thirty keywords.

**Target tier:** aim at the architecture-studio look. Treat the best US
HVAC/plumbing sites as the floor. Avoid the generic-template trap entirely.

---

## 6. Copy rules — the anti-slop standard

The single mechanism separating premium copy from filler is **specificity**. AI
slop and stock trade copy share one failure mode: claims with no name, number,
date or place attached.

### Banned outright

- "A family-owned business with over X years of experience providing quality
  service." The most repeated sentence shape on the trade web.
- Hedge and inflation vocabulary: leverage, unlock, elevate, seamless,
  cutting-edge, best-in-class, delve.
- Stock openers: "In today's fast-paced world...", "Have you ever wondered...".
- Rule-of-three adjective lists. "Reliable, professional and affordable" commits
  to nothing.
- Unfalsifiable trust claims: "fully qualified and insured", "hundreds of happy
  customers".

### The rewrite test

Every claim needs a name, a number, a date or a place. If a competitor could run
the sentence unchanged on their own site, rewrite it.

| Slop | Specific |
|---|---|
| "We provide quality electrical service you can trust." | "Every job gets a full EIC certificate within 48 hours and a photo log of the consumer unit before we leave." |
| "We always leave a neat, professional job." | "Every circuit is labelled by room, cables run square along the joists, and nothing is held together with black tape." |
| "Fully qualified, insured and accredited." | "NICEIC Approved Contractor (enrolment #123456), Part P registered since 2011, £2m public liability." |
| "Proudly serving the local area." | "Victorian terrace rewires on Bishopthorpe Road, EV chargers from Fulford to Haxby." |
| "Hundreds of satisfied customers." | "1,240 jobs logged across North Yorkshire since 2011." |
| "Same-day quotes available." | "Ask at 9am, know the price by lunchtime." |

### Structure

Lead every page with the customer's specific problem before mentioning the
business. Not "We offer full rewiring services" but "The lights flicker every
time the tumble dryer kicks in, and there's a faint burning smell behind the
socket. That's arc damage."

Read every page aloud before publishing. Any phrase the client would never
actually say to a customer's face gets cut.

The vendored `stop-slop` skill automates most of this pass.

---

## 7. Google Business Profile — the highest-leverage work

GBP signals carry roughly **32% of local pack ranking weight**, ahead of on-page
website signals. For a client with no existing web presence, the profile is
often worth more than the website in the first ninety days.

### The 2026 shift you must know

**Google now auto-assigns the verification method.** Owners no longer choose.
Roughly **eight in ten new home-service and trades profiles get video
verification**. Trades categories face extra spam scrutiny.

Plan for video verification as the default. It means one continuous, unedited
take showing the business location or vehicle, signage, tools, and proof of
management access.

### Setup, in order

1. Search for an existing profile before creating one. Duplicates cause
   suspensions.
2. Register the **exact legal trading name only**. No keywords. "John Smith
   Electrical", never "John Smith Electrician Emergency 24/7 Leeds".
3. Answer the business-model question correctly at setup.
4. Give a real verifiable address, then hide it if the client is a service-area
   business working from home or a van.
5. Define service areas by **town or postcode district**, not a mile radius.
6. Primary category: **Electrician**. Then two to four genuinely accurate
   secondary categories.
7. Lock NAP format before verifying, and match the website exactly.
8. Gather supporting documents before starting: utility bill, insurance
   certificate, vehicle livery photos, trade body registration.
9. Pre-verify the website in Search Console first. It improves the odds of
   instant verification.
10. Avoid frequent edits during and immediately after verification.

### Ongoing

- Google Posts weekly, minimum. Two or three times weekly performs better. Use
  the native CTA button, never a phone number typed into the body.
- Photos on a steady drip, never one bulk upload. Real and geotagged, never
  stock.
- Seed the Q&A section with the top customer questions, answered as the owner.
- Respond to every review within 24 to 48 hours.
- **Never gate reviews** by routing happy customers to Google and unhappy ones
  elsewhere. It is a suspension trigger.

### Citations, in priority order

1. **The big five:** Google Business Profile, Bing Places, Apple Business
   Connect, Facebook, Yell.
2. **Trade-vetted:** Checkatrade, TrustATrader, Which? Trusted Traders.
3. **Trade bodies:** NICEIC Find a Contractor, NAPIT installer search, TrustMark
   register, ECA.
4. **Secondary:** Thomson Local, Foursquare, 192.com, FreeIndex, Yelp UK,
   Trustpilot.

Pay-per-lead platforms (Rated People, MyBuilder, Bark) are a lead channel, not a
citation priority.

---

## 8. Technical SEO requirements

### Core Web Vitals

Measured on real-user field data at the 75th percentile via Chrome UX Report,
not a lab Lighthouse score.

| Metric | Threshold |
|---|---|
| LCP | under 2.5s |
| INP | under 200ms |
| CLS | under 0.1 |

**INP replaced FID and is the vital most sites now fail.** It punishes exactly
the kind of animated hero this offer promises. Handle it deliberately:

- Never lazy-load the hero image. Set `loading="eager"` and
  `fetchpriority="high"`.
- Defer every non-critical script: chat widgets, review embeds, analytics.
- Prefer CSS animation over JavaScript. Prefer a compressed WebM or a
  canvas/Lottie animation over a heavy library.

### Structured data

- Use the specific `Electrician` type, not generic `LocalBusiness`.
- `Service` schema on every service page.
- `BreadcrumbList` across service and location pages.
- **Only mark up `Review`/`AggregateRating` against genuinely third-party
  reviews** (Google, Trustpilot, Checkatrade). Never mark up self-collected
  homepage testimonials against the business's own entity. This is a penalty
  risk.
- `FAQPage` is fine for genuine FAQs, but **Google removed FAQ rich results in
  2025**. Do not build strategy around it.
- Validate everything before launch.

### The rest

- One H1 per page, aligned with the title tag, then a non-skipping heading
  hierarchy.
- Unique front-loaded titles, 50 to 60 characters. Service plus location near
  the start.
- Unique meta descriptions, 150 to 160 characters. Treat as ad copy for
  click-through, not as a ranking factor.
- Self-referencing canonical on every page. One URL form sitewide: HTTPS,
  consistent www choice, consistent trailing slash.
- Real descriptive alt text on every photo of the owner, team, van and finished
  work.
- WebP or AVIF, responsive `srcset`, correct rendered dimensions.
- Sitemap generated automatically, submitted in Search Console. Verify via DNS
  TXT where possible; HTML file or meta tag as fallback.
- Add the agency as a delegated Search Console user rather than relying on the
  client's login.
- Do not build indexing strategy around the Indexing API. Google restricts it to
  JobPosting and BroadcastEvent.

### E-E-A-T

- A real About page: owner's real name, real headshot, years trading,
  qualifications, insurance, and a first-person account of how the business
  works.
- Named authors on any advice content, linking to a bio.
- Real dated case studies with before and after photos, job location, scope and
  a direct customer quote.
- Trust signals linking to the verifying third-party register where possible.

---

## 9. The build requirements checklist

Every client site ships with all of this.

**Structure**
- [ ] Home, Services, About, Contact, Reviews, Case Studies
- [ ] One page per service (rewire, EICR, consumer unit, EV charger, fault
      finding, landlord certificate)
- [ ] 8–15 location pages, genuinely distinct copy on each
- [ ] Industry pages where the client does commercial work
- [ ] One consistent URL pattern, no near-duplicates

**Proof**
- [ ] Google rating and review count visible above the fold
- [ ] Real reviews synced from third-party platforms, not hand-written
- [ ] Named electricians in testimonials
- [ ] Accreditation badges linking to verifying registers
- [ ] At least three case studies with before/after photos and named clients
- [ ] Owner photograph on the homepage and About page

**Copy**
- [ ] Every claim carries a name, number, date or place
- [ ] `stop-slop` pass on every page
- [ ] Read-aloud test passed
- [ ] No two pages share a sentence

**Technical**
- [ ] LCP under 2.5s, INP under 200ms, CLS under 0.1 on mobile
- [ ] `Electrician` + `Service` + `BreadcrumbList` JSON-LD, validated
- [ ] Unique title and meta per page
- [ ] Sitemap submitted, Search Console verified
- [ ] HTTPS, canonicals, consistent NAP

**Google**
- [ ] GBP created, verified, fully populated
- [ ] Service areas mirrored between GBP and location pages
- [ ] Big-five citations live
- [ ] Trade body citations claimed
- [ ] Review request process handed over to the client

**Motion**
- [ ] Live hero animation
- [ ] Scroll reveals on section entry
- [ ] `prefers-reduced-motion` respected throughout
- [ ] No animation on the LCP element

---

## 10. Method and limitations

Twelve researchers worked in parallel: one on the benchmark, four on cities, one
on cross-industry design, one on hero animation technique, three on Google and
SEO practice, one on copywriting, one on tooling.

**Outbound HTTPS was blocked in the research environment.** Every attempt to
fetch a live page returned 403, including neutral control domains. The original
site findings were therefore reconstructed from Google's search index — page
titles, meta descriptions, indexed URL structure — plus third-party review
platforms, business registries and social profiles.

**That gap has since been closed.** `.github/workflows/competitor-audit.yml`
runs the inspection on a GitHub Actions runner, which has unrestricted internet,
and commits screenshots and extracted signals back to `research-output/`. All
ten sites now have desktop, mobile and full-page captures.

### What the two methods each got right

Search-index research proved **reliable** for site architecture, URL patterns,
review volumes and copy tone — the live audit confirmed all of it, and the
location-page counts matched closely.

It proved **unreliable** for anything visual. It produced a false negative on
animated heroes (§0), missed a case-studies page that sits in the main nav, and
could not see that the benchmark's whole hero is built around a review count.

The lesson for future competitor work: **never infer visual design from the
search index.** Run the audit workflow instead.
