# Live-hero recipes

Every client gets a BUILT, MOVING scene occupying the majority of the hero
(the founder's floor — see `research/founder-taste.md`). Each recipe is
used for AT MOST ONE client, then marked. The design-craft doctrine agent
contributes further recipes to this file; keep them one paragraph each and
concrete enough to build from.

## Shipped

1. **The Power Core** — USED: ES Elec (Leeds). Dark warm charcoal world;
   glowing amber orb carrying the brand mark inside three concentric rings
   with orbiting sparks; constellation canvas wiring itself across the
   hero; breathing aurora glows; faint engineer's grid; trust marquee
   closing the frame. Tech: CSS keyframes + one rAF canvas, all
   transform/opacity.

2. **The Rising Sun** — USED: Loxley Solar (Sheffield). Warm daylight
   world; a large sun with a soft scalloped corona (conic-gradient ray
   ring under a radial mask, slow rotation) rising out of the left
   horizon, crossing high and setting behind a drawn roofline carrying
   tilted panels; twinkling glint canvas; the interactive yield estimator
   floating on the scene as a white instrument. Tech: CSS keyframes
   (translateX wrapper + eased translateY disc) + one rAF canvas.

## Ready to build (claim one per client, then move it to Shipped)

3. **The Fuse Board, Lit** — macro world inside a consumer unit: a dark
   panel of drawn breakers where one circuit at a time illuminates and
   sends a pulse of current along a visible copper busbar to light a
   labelled room icon (kitchen, EV, loft). The cycle tells the services
   story. Tech: SVG with stroke-dash pulses + staggered glow keyframes.

4. **The Storm and the Steady House** — night scene, drawn terrace
   skyline; distant lightning flickers dim every OTHER house while the
   client's house stays warmly lit, its window glow breathing. Rain lines
   on canvas. Positions emergency reliability without fear copy. Tech:
   canvas rain + CSS flicker choreography kept under 3 flashes/second
   (WCAG 2.3.1).

5. **The Meter Running Backwards** — solar: a huge drawn export meter
   whose mono digits roll downward while a sun-fed supply line pulses
   from roof to meter; savings figure counts up beside it. Tech: CSS
   translateY digit reels + count-up JS.

6. **The Cable Run** — the hero is a cross-section wall: a glowing cable
   threads itself room to room behind the plaster as you watch, junction
   boxes clicking alight in sequence; ends at a socket that "powers" the
   CTA's glow. Tech: SVG offset-path dot + drawn path, keyframed.

7. **The Day the Panels Work** — time-of-day simulation: the whole hero's
   light temperature slides dawn→noon→dusk on a loop while a live output
   curve draws itself under the headline, peaking at noon. Pairs with an
   estimator. Tech: CSS custom-property colour interpolation + SVG line
   draw.

8. **The Van at First Light** — drawn (not photographic) flat-illustration
   street at dawn: sky gradient warming, windows lighting one by one, the
   liveried van's headlights sweeping on and pulling off-screen. Local,
   warm, story-led. Tech: layered SVG + CSS keyframes.

## From the design-craft doctrine (recipes 9-16)

See `research/doctrine/design-craft.md` §"Live hero recipes" for the full
paragraphs: **The Grid Awakens** (town skyline lighting up), **Filament**
(macro tungsten coil), **Photon Field** (bright airy light-theme photon
drift), **Circuit Bloom** (schematic drawing itself), **Day Cycle Roof**
(isometric solar house through a day), **Live Wire** (one humming cable
sweep), **Storage Cell** (monumental battery filling), **Substation
Aurora** (pylons under living sky). Same rules: one client per recipe,
mark here when claimed.
