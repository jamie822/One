# Design & motion craft doctrine

Permanent operating rules for a studio whose signature is LIVE, immersive,
animated heroes (built code scenes, never stock photos) for UK electricians
and solar installers. Researched against the open web, July 2026.
`founder-taste.md` outranks this file on taste calls; nothing outranks
section F on production sites. Rules are numbered continuously for citation.

## A. Hero scenes — what award-level looks like

1. Build ONE signature moment per hero, not twenty effects. Recent Awwwards
   SOTD winners share "a single interaction or visual that makes you stop
   scrolling, not 20 effects" (hontran.dev, Best Award-Winning Websites 2026).
   Every hero gets one focal idea, executed to exhaustion.
2. Treat the hero as a drawn world, not a decorated page. The 2025 Awwwards
   Sites of the Year (Lando Norris by OFF+BRAND; Messenger's "tiny WebGL
   planet in your browser") are handcrafted scenes users sit inside — the
   scene IS the brand. This matches the founder's floor: the moving thing
   occupies the majority of the hero (founder-taste.md rule 1).
3. Use the award-stack pattern: custom canvas/WebGL scene + GSAP-class
   choreography + a fast framework (Astro/Next). Three.js is "the dominant 3D
   library behind recent Awwwards and FWA winners" (hontran.dev); our Canvas
   2D/SVG scenes are the lighter expression of the same pattern.
4. Treat performance as a design constraint from day one, never a launch-week
   optimisation pass — the documented habit of studios that win repeatedly
   (utsubo.com judging-criteria analysis). Budget the scene (section C) first.
5. Pair the maximal scene with editorial restraint everywhere else. By-Kin
   (Awwwards SOTD + Developer Award + FWA + CSSDA WOTD) is "a masterclass in
   restraint — confident editorial typography, weighted smooth scroll,
   transitions that never call attention to themselves." One loud layer.
6. Texture beats flatness in 2026 galleries: grain/noise overlays, glow,
   layered light, oversized type over gradients (reallygooddesigns.com,
   topcssgallery.com trend surveys). This independently confirms the
   founder's "light-and-flat reads as 1990s" verdict — light themes need
   depth, glow and scene-building, not whitespace alone.
7. Iterate focal objects toward organic softness: dense, soft, blended detail
   (soft corona), never sparse geometric spikes (founder-taste.md rule 5,
   proven across four Loxley sun rounds).
8. Composited elements must share the motion, lighting and perspective of the
   scene they sit in; anything that "looks stuck on" fails on sight
   (founder-taste.md rule 7). Overlay UI (chips, marquees, counters) inherits
   the scene's light: glows, reflections, parallax offsets.

## B. Motion physics

9. Ease-out for anything entering or exiting; ease-in-out for elements moving
   while on screen; springs for anything the user drags or the cursor drives
   (Emil Kowalski, Animations on the Web / emilkowal.ski).
10. Keep UI (non-scene) animations under 300ms; ~180ms feels more responsive
    than 400ms (Kowalski). Ambient scene motion is exempt — it is weather,
    not feedback — but every user-triggered response obeys the budget.
11. Never animate keyboard-initiated or high-frequency actions; animation
    frequency budget scales inversely with usage frequency (Kowalski; echoed
    by Apple HIG Motion: "avoid adding motion to interactions that occur
    frequently").
12. Built-in CSS `ease`/`ease-in-out` keywords are too weak for hero-grade
    work; author custom cubic-beziers (Kowalski). Reference curves: Material
    3 emphasized `cubic-bezier(0.2, 0, 0, 1)`, emphasized-decelerate
    `cubic-bezier(0.05, 0.7, 0.1, 1)` (m3.material.io motion tokens).
13. Sequence, don't synchronise. "Human eyes detect simultaneous motion as
    mechanical, sequential as organic" (Rauno Freiberg, Invisible Details of
    Interaction Design, rauno.me). Stagger hero-element entrances; give
    secondary elements 100–200ms delays after the primary transition.
14. Apply follow-through and overlapping action: parts of a scene stop at
    different times, never all at once (Freiberg, applying Disney's
    principles). A node blooms after the pulse arrives, not with it.
15. All interactive motion must be interruptible and retargetable mid-flight.
    Prefer CSS transitions (naturally interruptible) or springs; M3 Expressive
    moved wholesale to physics springs because "a spring can be re-targeted at
    any point" without jarring (m3.material.io). Kowalski's baseline spring
    for cursor-tracking: stiffness 300, damping 30.
16. Reserve bounce/overshoot for hero moments only. M3 Expressive's bouncy
    scheme is for "hero moments and key interactions"; its higher-damping
    Standard scheme is for everything utilitarian. Buttons never wobble.
17. Micro-interaction defaults (Kowalski): press-scale `scale(0.97)`; never
    enter from `scale(0)` — start at `scale(0.9)` or larger; origin-aware
    transforms (menus grow from their trigger, not centre); a touch of
    `filter: blur()` masks crossfade imperfections.
18. Motion must communicate — status, feedback, orientation — and must never
    be the ONLY channel carrying information (Apple HIG, Motion +
    Accessibility). The hero scene sells feeling; the headline carries the
    facts.

## C. Performance budgets

19. Animate only compositor properties — `transform` and `opacity` — for
    everything outside the canvas. Layout/paint properties (width, margin,
    top, box-shadow spread) are banned in animations (web.dev, "Stick to
    Compositor-Only Properties and Manage Layer Count").
20. Prefer CSS/WAAPI over rAF-driven JS for DOM motion: compositor-thread
    animations stay smooth when the main thread is busy;
    requestAnimationFrame animation always runs on the main thread and janks
    when anything blocks it (motion.dev performance guide; webperf.tips,
    "Animate on the Compositor Thread").
21. The canvas scene is main-thread work — budget it like JavaScript, because
    it is: heavy per-frame computation "can harm the app's real and perceived
    performance" (web.dev, OffscreenCanvas). The scene's rAF tick must leave
    interactions able to complete inside INP's "good" threshold of 200ms
    (web.dev, INP).
22. Escape hatch for heavy scenes: `transferControlToOffscreen()` +
    OffscreenCanvas in a worker moves both computation and rendering off the
    main thread (web.dev, OffscreenCanvas). Reach for it before cutting the
    scene's ambition.
23. Cap the scene's real cost: clamp devicePixelRatio (render at ≤2x), cap
    particle counts by viewport area, pause the rAF loop when the hero leaves
    the viewport (IntersectionObserver) and when `document.hidden`. An
    off-screen hero burning CPU is a silent INP/battery tax.
24. A `<canvas>` is not an LCP candidate — LCP measures the largest image or
    text block (w3c/largest-contentful-paint spec; web.dev LCP). So the hero
    HEADLINE is our LCP element: real text, self-hosted font, rendered
    immediately, never blocked behind scene init or hydration.
25. Never attach scene work to scroll events. Scroll-linked effects use CSS
    scroll-driven animations (compositor-threaded for transform/opacity —
    Chrome scroll-animation-performance case study) or, at worst, a passive
    rAF-throttled observer.
26. Manage layer count: blanket `will-change` costs memory and can slow the
    page; promote few layers, deliberately, and remove `will-change` after
    the animation (web.dev, compositor-only properties article).
27. Test motion under throttled CPU (4x–6x) on a mid-range Android profile
    before sign-off — our trade audience browses on phones from vans; 60fps
    on an M-series laptop proves nothing (Kowalski: profile in DevTools;
    target minimum 60fps).

## D. Typography

28. Display-led sites get a fluid type scale built on `clamp(min, preferred,
    max)` — no font-size media queries (Aleksandr Hovhannisyan, "Creating a
    Fluid Type Scale with CSS Clamp"; fluid-type-scale.com). Use a modular
    ratio, steeper for display sizes than for body.
29. Include `rem` in the preferred value (e.g. `clamp(2rem, 1rem + 4vw,
    4.5rem)`), never a bare viewport unit: viewport units ignore user zoom,
    so pure-vw type breaks zoom accessibility (robertcelt95, "Beyond
    font-size: clamp()"; WCAG 1.4.4 resize text).
30. Body text measures 60–75 characters; enforce with `ch`-based max-widths
    (CSS typography consensus, thecrit.co / Hovhannisyan).
31. Use one variable font per site as a single self-hosted, subset WOFF2.
    The crossover is roughly two static weights — above that the variable
    file wins on bytes and requests (webcarbon.io; fontself.app: Inter's
    ~330KB variable build replaces six static files).
32. Exploit the axes we pay for: weight for hierarchy without extra files;
    `font-optical-sizing` where an `opsz` axis exists — thicker small text,
    more elegant display cuts (MDN Variable fonts guide).
33. Hero headline: `preload` the WOFF2, `font-display: swap`/`optional`,
    metrics-compatible fallback stack — it is the LCP element (rule 24) and
    must paint on first frame.
34. Oversized confident type is the 2026 award norm (rule 6), but it obeys
    the founder's integration law: display type over a live scene must sit IN
    the scene — scrim slots, glow interaction, z-layering — never float
    stuck-on.

## E. Colour

35. Author all palettes in OKLCH. It is perceptually uniform — equal
    lightness numbers look equally light across hues — making derived scales
    and contrast reasoning honest (Evil Martians, "OKLCH in CSS: why we moved
    from RGB and HSL"). Supported in every major browser since 2023 (Chrome
    111, Safari 15.4, Firefox 113); Tailwind v4's tokens are OKLCH.
36. Build each client's palette as a lightness ladder per hue: hold H and C,
    step L. Theme flips then become custom-property swaps, no per-component
    media queries (Evil Martians; LogRocket OKLCH guide).
37. Use OKLCH's P3 headroom (~30% more perceivable colours than sRGB —
    uxdesign.cc, "OKLCH explained for designers") for the glow accents that
    carry our heroes — electric ambers, arc blues — with an sRGB-safe
    fallback value.
38. Dark themes never use pure `#000`: it causes halation/"blooming" around
    bright text. Base near Material's `#121212`-class dark grey
    (atmos.style; Material Design dark theme guidance).
39. Express dark-theme elevation with light, not shadow: nearer surfaces are
    lighter (Material's overlay scale: ~5% white at 1dp to 16% at 24dp);
    prefer subtle borders over drop shadows (colorarchive.org; halo-lab).
40. Desaturate in the dark: fully saturated accents vibrate on dark grounds;
    use lighter, lower-chroma versions of brand hues, and off-white text
    (`rgba(255,255,255,0.87)`-class), never pure white body copy (Material
    dark theme guidance; uxcel dark mode principles).
41. Dark is our default axis for electricians (Tungsten precedent,
    founder-taste.md approval log) but it must stay warm and alive — glow,
    aurora, ember tones — "not as dark and moody... this is supposed to be a
    positive thing" (founder-taste.md rule 6).

## F. Accessibility of motion (non-negotiable on production)

42. WCAG 2.3.1 Three Flashes (Level A): nothing flashes more than three times
    in any one-second period unless below the general/red flash thresholds —
    combined flash area under 0.006 steradians (~25% of any 10° visual field)
    (W3C Understanding 2.3.1). For us: arc-flash, spark and lightning effects
    are choreographed as glows and travels, never full-area strobes; cap any
    luminance pulse at ≤3 per second.
43. WCAG 2.2.2 Pause, Stop, Hide (Level A): auto-starting moving content
    lasting over 5 seconds alongside other content MUST have a
    pause/stop/hide mechanism (W3C Understanding 2.2.2). Our heroes loop
    forever by design, so every production hero ships a small, findable pause
    control that freezes the scene to a composed still.
44. WCAG 2.3.3 Animation from Interactions (AAA, our target): motion
    triggered by interaction can be disabled unless essential (W3C
    Understanding 2.3.3). Parallax, cursor-reactive and scroll-driven motion
    all sit behind the reduced-motion check.
45. Implement via W3C Technique C39: wrap motion in
    `@media (prefers-reduced-motion: no-preference)` so no-motion is the
    default and motion the enhancement; in JS, gate rAF loops on
    `matchMedia('(prefers-reduced-motion: reduce)')` and re-check on change.
46. Reduced-motion is a REDESIGN, not a blank page: serve the scene's best
    single frame (static gradient/SVG composition of the same world), keep
    opacity crossfades, kill translation/scale/parallax. Vestibular triggers
    are motion, not change (C39 rationale; Apple HIG Reduce Motion).
47. Never let motion carry sole meaning (Apple HIG; rule 18 as a compliance
    duty): with the scene paused or reduced, every claim, CTA and number on
    the page must still be present as text.
48. Founder demo links may force motion on (founder-taste.md rule 3 — a still
    page reads as broken); that override is for temp preview URLs only. The
    compliance layer (rules 42–47) ships on every live client site, and the
    paused state is designed with the same care as the moving one.
49. Scroll-driven Animations API status (mid-2026): Chrome/Edge since 115
    (July 2023); Safari 26 (Sept 2025), threaded from 26.4; Firefox stable
    still behind `layout.css.scroll-driven-animations.enabled` as of Firefox
    152; ~84% global support (MDN; frontendhorizon.com; cssawwwards.com).
    Use `@supports (animation-timeline: scroll())` as progressive
    enhancement; the page must be complete without it; add a JS fallback
    only where the scroll effect is load-bearing.

## Live hero recipes

Eight distinct, buildable live-hero concepts — each a whole drawn world (rule
2) with one signature moment (rule 1), floor-compliant per founder-taste.md.
The direction ledger applies: no two clients ship the same recipe.

1. **The Grid Awakens** — night-time town skyline in layered silhouette;
   light pulses travel outward from a substation along drawn cable runs, and
   windows warm up street by street until the whole town glows. Motion:
   pulse travel + staggered window ignition (rule 13), slow parallax drift
   between silhouette layers. Palette axis: deep navy OKLCH ladder to
   sodium-amber glow. Tech: Canvas 2D polyline particles + CSS parallax
   layers; window lights as batched rects; pauses off-screen (rule 23).

2. **Filament** — macro close-up of a tungsten filament coil filling the
   hero, breathing between ember-orange and white-hot under a slow camera
   drift, with a gentle brightness swell on scroll (never a strobe — rule
   42). Motion: luminance breathing at ~0.2Hz, shimmer via animated dash on
   the coil path. Palette axis: charcoal ground, incandescent orange→white
   core. Tech: SVG coil + stroke-dashoffset, bloom from stacked blurred
   copies, scroll swell via scroll-driven animation behind @supports.

3. **Photon Field** — a bright, airy sky (light theme with depth, rule 6):
   thousands of photon motes stream diagonally onto a stylised panel plane;
   each impact blooms softly and a battery/savings meter ticks upward — the
   interactive-instrument signature (founder-taste.md rule 8). Motion:
   directional particle field, soft impact blooms, spring-eased meter.
   Palette axis: warm white→sky cyan with gold photon accents. Tech: Canvas
   2D particles (count capped by viewport), DOM meter on the same clock.

4. **Circuit Bloom** — a giant schematic draws itself: copper traces grow
   across the hero, junction nodes bloom into soft light as current reaches
   them, then pulses circulate forever. Motion: stroke-dashoffset trace
   growth, staggered node blooms (rule 14 follow-through), travelling pulse
   dots. Palette axis: near-black blue-green ground, copper traces, teal
   pulses. Tech: pure SVG + WAAPI (fully compositor-friendly, rule 20);
   reduced-motion serves the completed lit schematic (rule 46).

5. **Day Cycle Roof** — an isometric drawn house with a solar roof inside a
   little world (garden, fence, EV on the drive); the sun arcs overhead as
   the sky morphs dawn→noon→dusk, panel cells shimmer as they catch light,
   and a generation counter follows the sun's height. Motion: scroll-linked
   time-of-day scrub with a slow idle cycle when untouched. Palette axis:
   full sky sweep (rose→azure→amber) over a warm-neutral house. Tech:
   layered SVG, OKLCH custom-property sky interpolation (rule 36),
   scroll-driven animation + JS fallback (rule 49).

6. **Live Wire** — one thick cable sweeps across the hero, humming with
   travelling light; it sags and sways on spring physics and flexes away
   from the cursor; soft corona sparks at each terminal (rule 7). Motion:
   verlet rope simulation, cursor repulsion on a stiffness-300/damping-30
   spring (rule 15). Palette axis: graphite ground, electric blue→violet
   glow. Tech: Canvas 2D rope + glow sprites; cursor reactivity off under
   reduced motion (rule 44).

7. **Storage Cell** — a monumental translucent battery cell dominates the
   hero, filling with luminous liquid energy: live meniscus wave, rising
   bubbles of light, climbing charge percentage — for battery/EV-charger
   specialists. Motion: layered sine-wave liquid surface, rising motes,
   spring-eased counter. Palette axis: deep slate ground, lime→cyan energy
   liquid (P3 headroom, rule 37). Tech: Canvas 2D wave layers clipped to an
   SVG cell silhouette; counter is real DOM text.

8. **Substation Aurora** — pylon and substation silhouettes under a living
   aurora: slow ribbons of light fold across a star field while a faint hum
   of light travels the pylon lines to the horizon. Motion: three drifting
   ribbon layers at different speeds (rule 13), star twinkle capped well
   under flash thresholds (rule 42). Palette axis: midnight indigo ground,
   green→teal aurora with a magenta fringe. Tech: layered animated gradients
   on transform/opacity only (rule 19), or one lightweight shader canvas
   where budget allows; static aurora frame under reduced motion.
