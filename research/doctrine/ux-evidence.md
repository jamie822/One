# UX evidence doctrine

Operating rules for every site the studio ships to UK electricians and
solar installers. Each rule is grounded in published, measured research —
eye-tracking, large-scale usability testing, or field data — with the
source named inline. Nothing here is taste; taste lives in
founder-taste.md. Where the two conflict on a measurable outcome (a lead
form, an error state, a tap target), this file wins, because these rules
are what make the phone ring.

Primary evidence bodies: Nielsen Norman Group (NN/g) eye-tracking and
usability studies; Baymard Institute large-scale checkout/form testing
(their checkout evidence transfers directly to quote-request forms — same
fields, same anxieties, higher stakes per lead); named published studies
(Stanford/Fogg, Erik Runyon/Notre Dame, Google, CXL, KoMarketing).

## Scanning and hierarchy

1. **Write for scanners, not readers.** Users read at most 28% of the
   words on an average page, and 20% is more likely (NN/g, "How Little Do
   Users Read", eye-tracking). Every section must survive being skimmed:
   meaningful headings, short paragraphs, front-loaded sentences.
2. **Front-load the first two words of every heading, link, and bullet.**
   NN/g's F-pattern eye-tracking (232 users) shows fixations concentrate
   on the first lines of a page and the first words of each line; people
   mostly read the first 2 words of a link (NN/g, "Writing Hyperlinks").
   "Rewire a Wakefield kitchen" beats "We can help you rewire...".
3. **Put the offer and the primary CTA in the first viewport.** 57% of
   viewing time is spent above the fold and 74% within the first two
   screenfuls (~2160px); attention then falls into a long tail (NN/g,
   "Scrolling and Attention", 2018). Nothing lead-critical lives only at
   the bottom of the page.
4. **State the value proposition within 10 seconds of arrival.** Users
   typically leave pages within 10–20 seconds; pages that survive the
   first 10-second judgment and hold users ~30 seconds often keep them
   2+ minutes (NN/g, "How Long Do Users Stay on Web Pages?"). The hero
   must say who you are, what you do, and where — instantly.
5. **Never use auto-rotating carousels for content that matters.** At
   Notre Dame, ~1% of visitors interacted with the homepage carousel, and
   89% of those clicks were on slide 1 (Erik Runyon, 2013). Slides 2–5
   are effectively invisible. One static, committed hero message.
6. **Break text with descriptive subheadings and bullets, not decoration.**
   The F-pattern is a symptom of walls of text; NN/g shows scanning
   patterns become more efficient (layer-cake pattern) when headings map
   the content. Structure is the cure, not shorter copy alone.
7. **Avoid generic link/button labels ("Learn more", "Click here").**
   Generic labels have poor information scent — users can't predict the
   destination, so they don't click (NN/g, "'Learn More' Links: You Can
   Do Better"). Label the destination: "See our solar installs".

## Forms

8. **Cut every field that is not needed to price the job.** Baymard
   measured the average checkout at 11.3 form fields, while a fully
   optimized flow needs only 7–8 fields (12–14 form elements); most forms
   can shed 20–60% of their elements. Roughly 1 in 5 US shoppers has
   abandoned an order because the process was "too long / complicated"
   (Baymard checkout research and abandonment surveys).
9. **Single column, always.** Multicolumn forms pull attention in
   multiple directions and cause skipped required fields; 16% of sites
   still get this wrong (Baymard, "Avoid Extensive Multicolumn Layouts").
   A CXL eye-tracking test found single-column forms completed 15.4
   seconds faster on average. Only tightly related short fields (e.g.
   postcode + town) may share a row.
10. **Labels sit above their fields, visually grouped, never replaced by
    placeholders.** NN/g's "Website Forms Usability: Top 10" places labels
    immediately above fields; placeholder-as-label makes users forget what
    a field wants, hides context during error recovery, and burdens
    low-vision users (NN/g, "Placeholders in Form Fields Are Harmful").
    Persistent helper text goes below the field, not inside it.
11. **Mark required AND optional fields explicitly.** When only optional
    fields were marked, 32% of Baymard's test users failed to complete a
    required field; only 14% of sites mark both (Baymard). Use `*` for
    required plus the word "(optional)" — both, every form.
12. **Explain the phone field inline or make it optional.** Users enter
    fake numbers or abandon when a phone number is demanded without
    reason; 39% of sites offer no explanation (Baymard, "Explaining
    Required Phone Number Fields", guideline #731). One line under the
    field: "Only used to discuss your job — never for marketing."
13. **Ask for one "Full name" field, not First/Last.** Users think of
    their name as a single unit and repeatedly typed their whole name
    into "First name" in Baymard's checkout and mobile studies; Amazon
    uses a single field for the same reason.
14. **Validate inline, adjacent to the field, but never mid-typing.**
    40% of checkouts have no inline validation and a further 20%
    implement it badly (Baymard); premature validation ("your email is
    wrong" before the user finishes typing) measurably frustrates users.
    Validate on field exit or submit; show the message next to the field.
15. **Error messages: visible, specific, blame-free, input preserved.**
    NN/g's error guidelines: place the message adjacent to the error,
    keep the form visible while fixing (no modals on mobile), preserve
    everything the user typed, say precisely what to do in human
    language. Red text plus an icon — never colour alone.
16. **Never gate a lead form behind a CAPTCHA.** 8.66% of users mistype a
    CAPTCHA on first attempt — 29.45% if case-sensitive — and some of
    those leave (Baymard, "CAPTCHAs in Checkout"). Use a honeypot field
    and server-side filtering; eat the spam, keep the leads.
17. **Use address/postcode autocomplete.** Baymard's testing found fully
    automatic address lookup the best-performing address entry pattern:
    fewer keystrokes and fewer validation errors because addresses match
    official databases. In the UK, postcode lookup is the expected form.
18. **Don't agonize over one page vs multi-step.** Baymard found no
    inherent completion difference between an optimized one-page and an
    optimized multi-step flow; friction (field count, errors, surprise
    requirements) drives abandonment, not page count. Default to one
    short page; split only if the form genuinely branches.
19. **Never require information that seems unnecessary to the user.**
    Users abandon or falsify when asked for data with no obvious purpose
    (Baymard, "Don't Require Seemingly Unnecessary Information — 61% Get
    It Wrong"). If a field's purpose isn't self-evident, explain it in
    one line or delete it.

## Navigation

20. **Keep primary navigation visible on desktop — no hamburger.** Hiding
    navigation cut discoverability almost in half, lengthened task time,
    and raised perceived difficulty across NN/g's 179-participant, 6-site
    study ("Hamburger Menus and Hidden Navigation Hurt UX Metrics"). The
    cost of hiding is worse on desktop than mobile.
21. **On mobile, a hamburger is tolerable but still taxes users — expose
    the money links anyway.** Same NN/g study: hidden nav is used less
    and later even on phones. Keep "Get a quote" and the phone number
    permanently visible in the header/sticky bar, outside any menu.
22. **Use plain, keyword-first labels that match what customers call the
    work.** Users click the link with the strongest information scent,
    built from the label and context (NN/g, "Information Scent").
    "Rewires", "EV chargers", "Solar panels" — not "Solutions" or
    "Services we offer". Misleadingly strong scent costs sales (NN/g,
    "Deceivingly Strong Information Scent Costs Sales").
23. **A trades site needs one shallow tier of navigation.** With ~5–7
    destinations (services, work, reviews, about, contact/quote) there is
    nothing to nest; every page reachable from the header. Depth only
    dilutes scent and adds taps (follows from rules 20–22).

## Mobile and touch

24. **Touch targets: minimum 1cm × 1cm physical size.** NN/g's guideline
    ("Touch Targets on Touchscreens"), grounded in target-acquisition
    research; the MIT Touch Lab measured fingertips at 1.6–2cm and thumb
    contact at ~2.5cm. In CSS terms: meet WCAG 2.2 SC 2.5.8's 24×24px
    floor everywhere, and build buttons and nav items at 44–48px (Apple
    HIG 44pt; Material Design 48dp; WCAG 2.5.5 AAA 44px).
25. **Trigger the right keyboard for every field.** `type="tel"` for
    phone, `type="email"` for email, `inputmode="numeric"` where only
    digits are valid, correct `autocomplete` tokens throughout. 60% of
    top mobile commerce sites failed at least 2 of 5 keyboard
    optimizations in Baymard's audit ("Touch Keyboard Types").
26. **Never split a single input into multiple boxes.** Phone numbers or
    postcodes split across fields break autofill, paste, and flow
    (Baymard, "Avoid Splitting Single Input Entities"). One field per
    logical entity.
27. **Load in under 3 seconds on mobile networks.** 53% of mobile visits
    are abandoned if a page takes longer than 3 seconds (Google, "The
    Need for Mobile Speed"); the average mobile page took 19 seconds on
    3G in the same study. Budget the hero animation against this number.
28. **Respect the response-time thresholds.** 0.1s feels instant, 1s
    keeps flow, and beyond 10s users' minds leave the task (NN/g,
    "Response Times: 3 Important Limits"). Form submits show immediate
    feedback; anything slower than ~1s shows a progress state.
29. **Form inputs use a 16px+ font size on mobile.** iOS Safari zooms the
    viewport when focusing any input below 16px, disorienting users and
    breaking single-column flow (documented platform behaviour).
30. **Assume the F-pattern and fold economics hold on phones.** NN/g's
    2017 re-run confirmed F-scanning on mobile; the first screenful still
    dominates attention (NN/g scrolling data, rule 3). Mobile heroes earn
    their pixels or shrink.

## Trust and credibility

31. **Visual design quality IS the credibility judgment.** In Fogg's
    Stanford study (2,684 participants), "design look" was the most
    frequent basis for credibility assessments — present in 46.1% of
    comments, ahead of any content factor ("How Do Users Evaluate the
    Credibility of Web Sites?", 2002/2003). Sloppy craft reads as an
    untrustworthy tradesperson.
32. **Show full contact details — a real phone number, a real area.** 44%
    of B2B buyers say they leave a vendor site with no contact
    info/phone number, and 54% say missing contact details reduce
    credibility (KoMarketing/Huff 2015 B2B Web Usability Report). Name,
    phone, service area, and company/registration details in the footer
    of every page.
33. **Build to NN/g's four trust factors: design quality, up-front
    disclosure, comprehensive current content, connection to the rest of
    the web** (NN/g, "Trustworthiness in Web Design"). For trades:
    disclose call-out fees and typical price ranges, keep certifications
    and reviews current, link out to NICEIC/MCS/Trustmark listings and
    review platforms rather than only claiming them.
34. **Use real photos of the actual team and actual jobs — never generic
    stock.** NN/g eye-tracking shows decorative stock imagery is ignored
    while photos of real people and real work are scrutinized as content
    (NN/g, "Photos as Web Content"). A van, a fuse board, the installer's
    face: those get fixations.
35. **Disclose costs and process early.** Surprise costs are the #1
    reported reason for e-commerce abandonment in Baymard's surveys, and
    up-front disclosure is one of NN/g's four trust factors. State what
    happens after the form ("we reply within 1 working day, quote within
    3") and any fees before asking for anything.

## The quote-request form, canonical spec

One page, one column, seven fields, no CAPTCHA. Header of the form states
the exchange: **"Get your free quote — we reply within 1 working day."**
(value proposition inside 10 seconds, rule 4; up-front disclosure, rule 35).

Fields, in order — labels above fields, required marked `*`, optional
marked "(optional)", helper text persistent below the field, never a
placeholder-as-label (rules 10–11):

1. **Full name*** — single field (rule 13). `autocomplete="name"`.
2. **Phone*** — `type="tel"`, `autocomplete="tel"` (rule 25). Helper:
   "Only used to discuss your job — never for marketing." (rule 12).
3. **Email*** — `type="email"`, `autocomplete="email"`.
4. **Postcode*** — one field, UK lookup/autocomplete where available
   (rules 17, 26). Helper: "So we can confirm you're in our area."
5. **What do you need?*** — 4–6 visible radio options in the customer's
   own words ("Rewire", "Fuse board", "EV charger", "Solar panels",
   "Something else") — visible options carry scent; no dropdown to open
   (rules 2, 22). Each option a 48px target (rule 24).
6. **Tell us about the job (optional)** — one textarea. Helper: "Rough
   size, timing, anything useful."
7. **Photos (optional)** — single upload control, only if the client
   actually quotes from photos; otherwise delete (rules 8, 19).

Seven fields total, five required — inside Baymard's 7–8 optimized field
count (rule 8). Nothing else: no address beyond postcode, no title, no
"how did you hear about us" (rule 19).

Behaviour: validate on field exit, error message adjacent in red text
with icon, all input preserved (rules 14–15). Submit button full-width on
mobile, minimum 48px tall, labelled **"Request my free quote"** — never
"Submit" (rules 7, 24). Under the button: one privacy line and the phone
alternative — "Prefer to talk? Call 01924 XXX XXX" (rule 32). Honeypot +
server-side spam filtering instead of CAPTCHA (rule 16). Success state is
a real page stating exactly what happens next and when (rules 28, 35).
Form (or a sticky "Get a quote" CTA linking to it) reachable from the
first viewport of every page (rules 3, 21).
