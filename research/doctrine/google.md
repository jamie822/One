# Google doctrine — operating rules

Permanent operating rules for every site the studio ships. Verified against
Google's own documentation (Search Central, web.dev, Google Business Profile
Help) as of 2026-07-29, via search extracts of those primary pages (direct
fetches were proxy-blocked this session). Nothing unverified is included.

## A. Core Web Vitals — budgets and how Google scores them

1. Hit LCP <= 2.5 s, INP <= 200 ms, CLS <= 0.1 on every page — these are the
   "good" thresholds. They are the only budgets Google publishes; "poor" begins
   at LCP > 4 s, INP > 500 ms, CLS > 0.25 (web.dev, Web Vitals).
2. Optimise for the 75th percentile of real visits, not your own laptop: a page
   is "good" only when at least 75% of real page views meet the threshold, per
   metric, segmented mobile vs desktop (web.dev, Web Vitals).
3. Treat field data (CrUX) as the verdict and Lighthouse as a diagnostic — the
   ranking-relevant numbers are real Chrome users aggregated over a rolling
   28-day window, not lab runs (web.dev; CrUX docs).
4. Budget INP as the page's worst interaction, not its average: INP is the
   longest interaction of the whole visit, ignoring one outlier per 50
   interactions — most visits have fewer, so the worst tap IS the score
   (web.dev, INP).
5. Keep server TTFB <= 800 ms — web.dev calls TTFB good at <= 0.8 s, poor above
   1.8 s, and TTFB is the first of four LCP subparts (web.dev, TTFB).
6. Never quote or optimise FID: INP replaced it as a Core Web Vital on
   12 March 2024 (web.dev blog, 2024).

## B. LCP delivery

7. Make the LCP resource discoverable in the initial HTML — a real `<img>` with
   `src`/`srcset`, never injected by JavaScript. JS-rendered LCP elements
   sidestep the browser preload scanner and add resource-load delay (web.dev,
   Optimize LCP).
8. Put `fetchpriority="high"` on the LCP image and never `loading="lazy"` on
   it. Google names this the clearest instruction to start the fetch
   immediately (web.dev, Fetch Priority API / Optimize LCP).
9. Attack all four LCP subparts: TTFB, resource load delay, resource load
   duration, element render delay — the load-delay and render-delay slices
   should be close to zero on a well-built page (web.dev, Optimize LCP).
10. On our canvas/animated heroes, paint a qualifying LCP candidate fast: LCP
    only considers `<img>`, `<image>` in SVG, `<video>`, CSS `background-image:
    url()`, and block-level text (web.dev, LCP). Render the H1 and any backdrop
    image before the JS scene boots.
11. Do not lazy-load anything above the fold; lazy-load everything below it.
    Lazy-loading in-viewport images measurably worsens LCP (web.dev, top
    ways to improve CWV).

## C. INP and the main thread

12. Break any main-thread task longer than 50 ms — that is Google's definition
    of a long task, and long tasks are the primary cause of input delay
    (web.dev, Optimize long tasks).
13. Yield to the main thread inside heavy work (scheduler.yield/setTimeout
    chunks) so event handlers can run between chunks; keep per-chunk work
    around 50 ms (web.dev, Optimize long tasks / Optimize INP).
14. Budget every interaction's three phases — input delay, event processing,
    presentation delay — because INP is their sum; do rendering-heavy follow-up
    work after the next paint, not inside the handler (web.dev, INP /
    Optimize INP).
15. Run hero animations off the main thread: prefer compositor-friendly CSS
    transforms/opacity, and keep per-frame JS (canvas rAF loops) small enough
    that a tap during the animation still paints inside 200 ms (web.dev,
    optimize long tasks; INP threshold from web.dev, INP).

## D. CLS

16. Give every image and video explicit `width` and `height` attributes (or a
    CSS `aspect-ratio`) — 66% of pages ship at least one unsized image, and
    unsized media is the top CLS cause (web.dev, Optimize CLS).
17. Reserve space in advance for embeds, iframes, maps, and review widgets;
    third-party embeds rarely reserve their own space (web.dev, Optimize CLS).
18. Never insert content above existing content after load (banners, notices)
    unless it responds to a user action (web.dev, Optimize CLS).
19. Control web-font shift: prefer `font-display: optional` or `fallback` over
    `swap`, and use `size-adjust`/fallback metric overrides so the swap does
    not reflow the page (web.dev, font best practices / Optimize CLS).

## E. Images and media weight

20. Serve AVIF or WebP, never plain JPEG/PNG: WebP is typically 25–35% smaller
    than equivalent JPEG, AVIF around 50% smaller than JPEG and ~35% smaller
    than WebP — direct LCP savings (web.dev, serve images in modern formats /
    AVIF articles).
21. Serve images at their displayed size via `srcset`/`sizes`; oversized
    images are wasted bytes Lighthouse flags and LCP pays for (web.dev,
    serve images with correct dimensions).
22. Use real `<img>` elements for any image that should be indexed — Google
    does not index CSS background images (Google Search Central, Image SEO).
23. Write descriptive alt text on every meaningful image; for linked images
    Google uses the alt attribute as anchor text (Google Search Central,
    Image SEO).

## F. Page experience, mobile, HTTPS, interstitials

24. Treat page experience as a cluster of signals, not one score: Google's core
    ranking systems reward good CWV, HTTPS, mobile usability, and absence of
    intrusive interstitials individually — there is no single "page experience
    ranking signal" (Google Search Central, page experience doc, 2023 update).
25. Serve everything over HTTPS — it is an explicit component of Google's page
    experience guidance (Google Search Central, page experience).
26. Build mobile-first as a hard constraint: since 31 October 2023 Google
    crawls and indexes ONLY with the smartphone Googlebot, and desktop crawling
    was reduced — content absent on mobile effectively does not exist (Google
    Search Central blog, Oct 2023).
27. Never cover content with pop-ups on entry. Allowed interstitials are
    legally required ones (cookie/age), logins for genuinely private content,
    and easily-dismissed banners using "a reasonable amount of screen space" —
    Google publishes no exact percentage, so keep banners thin (Google Search
    Central blog, intrusive interstitials).

## G. Content — helpful, E-E-A-T, AI-generated

28. Write for a defined audience with first-hand knowledge — Google's ranking
    systems are built to reward "helpful, reliable, people-first content" and
    demote content made primarily to rank (Google Search Central, helpful
    content doc).
29. Prioritise trust above the other E-E-A-T letters: Google states trust is
    the most important member of experience/expertise/authoritativeness/trust,
    and content need not demonstrate all four (Google Search Central, helpful
    content doc).
30. Run the Who/How/Why test on every page: who made it, how it was made
    (including whether AI was used and why), and why it exists — Google's own
    self-assessment framing (Google Search Central, helpful content doc).
31. Use AI drafting freely but never as the reason a page exists: Google
    rewards quality "however it is produced", and using AI primarily to
    manipulate rankings violates spam policy (Google Search Central blog,
    Feb 2023, AI-generated content guidance).
32. Have a human with real trade experience add specifics AI cannot know —
    Google's generative-AI-content guidance asks whether AI use is self-evident
    and whether the content shows genuine experience (Google Search Central,
    using generative AI content doc).

## H. Spam lines never to cross

33. Never mass-produce near-identical town pages that funnel to one contact
    form — Google's doorway policy names "multiple pages targeted at specific
    regions or cities that funnel users to one page" as spam (Google Search
    Central, spam policies).
34. Never generate many pages of unoriginal content at scale, by AI or human —
    the March 2024 scaled content abuse policy covers it regardless of
    production method (Google Search Central blog, March 2024).
35. Never publish third-party content to borrow a site's authority (site
    reputation abuse), never cloak, never buy or trade links for ranking
    (Google Search Central, spam policies).
36. Never manipulate browser history so Back returns users to your pages —
    "back button hijacking" became a named spam policy in April 2026 (Google
    Search Central blog, Apr 2026).

## I. Structured data and rich results in 2026

37. Use JSON-LD `LocalBusiness` markup with the most specific subtype —
    schema.org defines `Electrician` (under HomeAndConstructionBusiness); solar
    installers use `HomeAndConstructionBusiness` or `Electrician` as fits.
    Required properties: `name` and `address`; recommended: `url`, `telephone`,
    `geo`, `openingHoursSpecification`, `priceRange`, `image` (Google Search
    Central, LocalBusiness structured data).
38. Never mark up reviews of the business on the business's own site: Google
    does not show star rich results for LocalBusiness/Organization types when
    the entity controls its own reviews ("self-serving reviews"), including
    embedded Google/Facebook review widgets (Google Search Central blog,
    Sept 2019; review snippet doc).
39. Do not build for dead rich results: FAQ is limited to well-known government
    and health sites and HowTo is fully deprecated (Aug–Sept 2023); sitelinks
    search box retired Nov 2024; seven more types (Course Info, Claim Review,
    Estimated Salary, etc.) dropped June 2025 (Google Search Central blog).
    Never promise clients stars or FAQ dropdowns.
40. Keep markup identical to visible page content — Google's structured data
    policies require the markup to describe content users can see, or the site
    risks a manual action (Google Search Central, structured data policies).
41. Validate every deployment with the Rich Results Test; markup that does not
    validate earns nothing (Google Search Central, structured data intro).

## J. Titles, snippets, headings

42. Give every page a unique, clear, concise `<title>` that describes that page
    — Google's stated recipe for keeping your own title link instead of a
    rewrite (Google Search Central, title links doc; rewriting system announced
    Aug 2021).
43. Keep titles under roughly 580–600 px (about 50–60 characters) so they
    display untruncated on desktop — Google sets no official limit; the pixel
    figure is industry measurement, not Google doctrine (third-party SERP
    studies, 2024–2026).
44. Front-load the service and area, avoid "Home"/"Welcome", boilerplate
    repetition, and keyword stuffing — all explicitly discouraged in Google's
    title-link best practices (Google Search Central, title links doc).
45. Write a unique meta description per page but expect Google to ignore it:
    snippets are "primarily created from the page content itself", the meta
    description is used only when it describes the page better, and there is no
    official length limit — display truncates to device width (Google Search
    Central, snippet doc).
46. Use meaningful, hierarchical headings to structure content for users;
    heading levels are context signals, not ranking multipliers, and multiple
    H1s cause Google no problem — use one H1 anyway for clarity (Google Search
    Central, SEO starter guide; Google statements via Search Central).

## K. AI Overviews / AI Mode (GEO)

47. Do standard SEO — there are no extra requirements to appear in AI Overviews
    or AI Mode, no special markup, and Google explicitly says to ignore
    "chunking", llms.txt files, and manufactured brand mentions (Google Search
    Central, AI features doc + generative-AI optimization guide, 2026).
48. Write pages that answer the fan-out, not just the head query: AI features
    use retrieval-augmented generation over the normal Search index, issuing
    concurrent sub-queries ("query fan-out") — a page on "EV charger
    installation Wakefield" should also answer cost, timescales, and
    regulations, because those are the fan-out queries (Google Search Central,
    AI optimization guide, 2026).
49. Do NOT spin up a page per imagined fan-out query — that is scaled content
    abuse; answer related sub-questions in depth on one strong page (Google
    Search Central, AI optimization guide + spam policies).
50. Keep snippets fully open: `nosnippet`, `data-nosnippet`, `max-snippet` and
    `noindex` are the controls that remove or limit content in AI Overviews/AI
    Mode — never ship a restrictive `max-snippet` on a page we want cited
    (Google Search Central, AI features doc + robots meta tag doc).
51. Know that blocking Google-Extended does NOT remove a site from AI Overviews
    — those features read the normal Googlebot index; Google-Extended only
    governs Gemini model training (Google Search Central, AI features doc).
52. Do not rely on rankings alone for citations: only ~38% of AI Overview
    citations rank in the organic top 10 (down from 76% in 2025), the rest
    drawn from positions 11–100 and beyond — unique first-hand content earns
    retrieval (Ahrefs study, 2026; Google's guide says unique value beats any
    tactic).
53. Expect zero query-level attribution: fan-out sub-queries never appear in
    Search Console, so judge GEO by branded demand, direct traffic, and leads —
    and say so in client reporting (Google Search Central, AI optimization
    guide, 2026).

## L. Single-tradesperson local-service sites (our client profile)

54. Build one strong page per real service, and location pages ONLY for areas
    genuinely served with something unique to say (jobs done there, local
    photos, area-specific regs) — thin town-name variants are the exact doorway
    pattern Google's spam policy names (Google Search Central, spam policies).
55. Put Electrician/LocalBusiness JSON-LD on the homepage or contact page with
    name, address, phone, hours, and `geo` exactly matching the Google Business
    Profile — complete, consistent info feeds local relevance (Google Search
    Central, LocalBusiness doc; GBP Help).
56. Treat the website as a local-ranking input, not a parallel channel: local
    results rank on relevance, distance, and prominence, and prominence draws
    on links to the business and review count/score — so the site's SEO and
    earned links lift map-pack position (Google Business Profile Help, "Improve
    your local ranking").
57. Push reviews to the Google Business Profile, and publish testimonials on
    the site as plain content only — self-serving review markup earns no stars
    (rule 38) while GBP reviews directly feed prominence (Google Search
    Central; GBP Help).
58. Lead with verifiable first-hand proof — the named electrician, photos of
    real installs, registration numbers (NICEIC/NAPIT, MCS for solar): this is
    the "experience" and "trust" evidence E-E-A-T rewards, and exactly what a
    one-person trade site has that aggregators lack (Google Search Central,
    helpful content doc).
59. Make the phone number a tap-to-call text link in the header, never an
    image: mobile-only Googlebot indexes what mobile users get (rule 26), and
    text NAP is machine-readable for local matching (Google Search Central,
    mobile-first indexing best practices).
60. Answer money questions plainly on service pages (price ranges, timescales,
    certificates issued) — people-first content guidance rewards pages that
    leave a searcher satisfied, and these are the fan-out queries AI features
    ask (Google Search Central, helpful content + AI optimization guides).
61. Keep hours, prices, and service claims identical across site, schema, and
    GBP; conflicting data undermines the "complete and accurate info" Google
    says local ranking depends on (Google Business Profile Help).
62. For solar installers, refresh content when regulations and incentives
    change: Google's AI guide flags freshness as a retrieval factor on evolving
    topics, and stale grant/tariff info fails the trust test (Google Search
    Central, AI optimization guide, 2026).
