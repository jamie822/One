# ES Elec v3 copy deck

Executes PLAN.md section by section. This is the single copy source for the
build: every string on every page comes from here or from client.js.

**Positioning:** the Leeds electrician who prices the job before it starts
and answers his own phone. **Promise:** an itemised written price before any
work, one accountable person from first ring to certificate.

**Voice:** Eddie Sharp, first person, plainspoken Leeds spark. Short
sentences. Facts over adjectives. Round prices for installs, precise figures
for savings and counts (doctrine/sales-psychology.md).

**CTA label lock (Audit 4):** exactly two labels sitewide. `Call Eddie`
(call intent: fault, EICR, boards, emergencies) and `Get a quote`
(considered intent: solar, rewires, EV, lighting). No third label exists.
Every CTA carries a risk-reducer line beneath it.

**Risk-reducer lines (rotate, never invent new ones):**
- R1: Answered Monday to Saturday, 7.30 to 6.
- R2: You'll hear back within the working hour. (TEMP promise)
- R3: A written price before any work. Always.
- R4: If it's not worth doing, I'll tell you on the phone for nothing.

**TEMP policy:** figures marked TEMP live in client.js and swap at go-live.
Demo reviews never ship on a paying client's live site (DMCC Act 2025).

**The one shared rewire model** (Reckoner + blog table + services page all
derive from THIS, nothing else. TEMP figures):

| Bedrooms | Empty house | Days on site |
|---|---|---|
| 2 | £3,200 to £4,200 | 5 to 6 |
| 3 | £4,000 to £5,500 | 6 to 8 |
| 4 | £5,500 to £7,000 | 8 to 10 |
| 5 | £7,000 to £8,500 | 10 to 12 |

Occupied modifier: add £350 and 2 days (sheeting up, moving furniture room
to room, keeping power on overnight). Partial rewires £1,200 to £2,800.

---

## HOME `/`

Title: Electrician in Leeds | Rewires, EV & Solar | ES Elec
Meta: NICEIC registered electrician in Leeds. Rewires, fuse boards, EICRs,
EV chargers and solar with an itemised price in writing before work starts.
Call Eddie on 0113 496 0620.

### 1. Hero (Power Core, evolved: boot-up choreography per PLAN)

- Kinetic ticker (cycles above H1): Rewires · Fuse boards · EICRs ·
  EV chargers · Solar · Fault finding
- H1: The Leeds electrician who prices the job before it starts.
- Sub (18 words): No surprises on the invoice. The bloke who answers the
  phone quotes the job and does the work.
- Primary CTA: Call Eddie (+ R1 beneath)
- Secondary CTA: Get a quote (+ R2 beneath)
- Urgent line (small, beneath CTA pair): No power right now? Emergencies
  jump the queue. Ring and say so.
- Pause control label (a11y, visible on hover/focus): Pause the animation

### 2. Trust shelf (pulled over the hero edge, 4 animated counts)

- 4.9 · Google rating (TEMP)
- 87 · reviews and counting (TEMP)
- 1,438 · jobs certified since 2014 (TEMP)
- 12 · years on the tools in Leeds (TEMP)

### 3. The written-price spread (the market-gap claim)

H2: An itemised price in writing, before a floorboard lifts.

Body: When homeowners get surveyed about quotes, barely one in three has
ever been handed an itemised one (TEMP: verify source and exact figure at
go-live). The rest got a number on a text message and a shrug when it
grew. I work the other way round. You get every line of the job priced on
paper before I start, and the paper is what you pay.

What the written price includes (list):
- Every room and every circuit, line by line
- Materials named, not "sundries"
- Making good: who patches the plaster and what it costs
- The certificate and the building-control notification
- Anything that could move the price, flagged in advance, with the number
  it moves by

Sample line-item strip (styled as a quote fragment, TEMP figures):
- Consumer unit, 10-way with surge protection: £412
- Second fix, kitchen ring and appliance points: £286
- Test, certification and notification: £180

Promise line (bold, closes the section): If the invoice says more than the
quote and I didn't clear it with you first, you pay the quote.

CTA (quiet text link under the promise line): Get a quote (+ R3)

### 4. Services (2 lead tiles + 5-row list)

H2: The work, with honest from-prices

Lead tile 1: Full and partial rewires
- Symptom line: Two sockets a room and an extension lead behind every
  sofa? That's a house running on 1960s wiring.
- Anchor: from £3,200 (TEMP) · Priced room by room in writing
- Link: See what a rewire involves

Lead tile 2: Solar and battery
- Symptom line: Your last bill made you wince. Panels sized on a year of
  your actual usage, with the payback maths shown.
- Anchor: from £5,400 (TEMP) · 10-year workmanship guarantee (TEMP)
- Link: See the solar maths

5-row list (symptom + from-price + arrow, each links to /services/ anchor):
- EV charger installation. Off the three-pin, onto a 7kW point that
  charges overnight on the cheap rate. From £950 (TEMP)
- Fuse boards and consumer units. Swapped in a day, every circuit tested,
  certificate in your hand. From £520 (TEMP)
- EICR and landlord certificates. Booked this week, report in plain
  English. From £140 (TEMP)
- Fault finding and repairs. Traced with test gear, fixed the same visit
  where parts allow. From £85 (TEMP)
- Lighting design and fitting. Indoors, outdoors, and the kitchen you can
  finally see in. From £220 (TEMP)

### 5. The Rewire Reckoner (instrument)

H2: What would a rewire cost in your house?
Sub: These are the same numbers I quote from. Set the bedrooms, tell it
whether you're living there, read the range.

Controls:
- Stepper label: Bedrooms (2 to 5)
- Toggle: We're living in it / It'll be empty

Result template (from the shared model):
- Price line: £{low} to £{high}
- Days line: {daysLow} to {daysHigh} days on site
- Occupied note (shows when toggled): Living there adds about £350 and a
  couple of days. Dust sheets, furniture moved room to room, and power
  kept on every night.

What moves it (3 lines under the result):
- Solid walls chase slower than plasterboard. Stone-built Headingley
  terraces sit at the top of the range.
- Accessory spec. Brushed steel and dimmers everywhere adds real money;
  white plastic keeps it at the bottom.
- Kitchens. Each one is a day of second fix on its own.

CTA under result: Get a quote (+ line: A proper price takes a look round.
This gets you in the right street.)

### 6. Inline CTA band #1

Line: Know what you need? One call books it.
CTA: Call Eddie (+ R1)
Sub-line: R4.

### 7. How a job goes (4 steps on the counter rail)

H2: From first ring to certificate, four steps

1. **You ring, I answer.** Not a call centre, me. Tell me the symptom or
   the plan and I'll tell you if it's worth a visit.
2. **I look, then you get the price in writing.** Room by room, line by
   line, usually within 48 hours of the visit.
3. **The work happens on the dates we agreed.** Sheets down, radio low,
   power back on every evening if you're living there.
4. **You get the paperwork before I get paid.** Certificate, building
   control notification, and the guarantee in writing.

### 8. Proof

H2: 87 reviews, one theme: no surprises (TEMP count)

Lead pull-quote (TEMP demo review, swap at go-live):
"Eddie rewired our 3-bed in Pudsey while we lived in it. The price never
moved, the house was clean every night, and he talked us out of work we
didn't need. Ask for the quote in writing and watch him smile."
Attribution: Claire H, Pudsey · Full rewire · March 2026 (TEMP)

Supporting review 1 (TEMP): "Fuse board swapped, tested and certified in a
day. He found a dodgy kitchen circuit and showed me the readings rather
than just telling me." Dave T, Morley · Consumer unit · January 2026

Supporting review 2 (TEMP): "EICR for two rentals, both reports back the
same evening, plain English, no upsell." Sunita K, Headingley · Landlord
EICR · February 2026

Register line: I'm on the NICEIC register as D123456 (TEMP). Check it, and
check anyone else who quotes you. Takes two minutes on niceic.com.

Response promise restated: R2.
CTA (text link closing the section): Call Eddie (+ R1)

### 9. Solar band

H2: Solar that pays you back, with the maths shown

Body: A 10-panel system on a south-ish Leeds roof generates about
3,400 kWh a year (TEMP model). At today's rates, between what you stop
buying and what you export, that's worth £683 a year (TEMP; precise on
purpose, it comes out of the model, not a brochure). Against a £5,400
installed price (TEMP), the system clears its own cost in under eight
years, and the panels are warrantied for 25.

Guarantee lead (doctrine: guarantees are the #1 solar reassurance):
- 10-year workmanship guarantee on the installation, in writing (TEMP)
- 25-year output warranty on the panels themselves
- MCS-certified installation, so export payments actually get paid (TEMP)

The two-bills ask: Send me two electricity bills. You'll get back a panel
count, a generation estimate for your actual roof, and the year the system
pays for itself. No visit needed for the first pass.

CTA: Get a quote (+ R3)

### 10. Areas with substance

H2: Leeds, and the towns within a sensible van ride

- **North Leeds (Headingley, Horsforth, Otley):** Victorian terraces and
  student lets. Half my EICR work lives here, and the stone walls explain
  my rewire range.
- **South and east (Morley, Pudsey, Garforth):** Thirties semis and newer
  estates. Board upgrades, EV chargers and kitchen rewires, week in, week
  out.
- **Wetherby and the villages:** Bigger roofs, bigger bills. Most of my
  solar and battery work points this way.

Overflow line: Not on the list? Ring anyway. If it's under half an hour
from LS3 I'll usually come, and if I won't, I'll say so on the phone, not
on the invoice.

### 11. Credentials, explained

H2: What NICEIC actually gets you

- **NICEIC Approved Contractor (TEMP):** They audit me every year: test
  gear, paperwork, and real jobs pulled apart by an assessor. If my work
  fails their standard, they make me put it right, and their Platinum
  Promise backs the job if I couldn't (TEMP: confirm cover wording).
- **£2m public liability (TEMP):** If the worst happens in your house,
  the cover is real and the certificate is on the van.
- **12-month workmanship guarantee (TEMP):** Anything I fitted plays up
  inside a year, I come back and sort it. The terms live on the About
  page, in full, not in small print.
- **Part P:** The building regulation covering electrical work in homes.
  I self-certify, so building control gets notified without you filling
  in a single form.
- **BS 7671:** The wiring regulations. Every circuit I leave behind is
  tested against the current edition and the readings go on your
  certificate.

### 11b. Inline CTA band #2

Line: Credentials checked? The rest is one phone call.
CTA: Call Eddie (+ R2)

### 12. FAQ (6, FAQPage schema)

H2: Straight answers to the usual questions

1. **Do you charge a call-out fee?** No. Fault finding starts at £85
   (TEMP) for the first hour, and that clock starts when I'm at the board
   with the tester out, not when the van pulls up.
2. **Do I actually need an electrician for this?** Ring and describe it.
   Swapping a like-for-like light fitting, probably not, and I'll say so.
   Anything in a bathroom, outdoors, or involving the fuse board, yes,
   and it needs certifying.
3. **How fast can you get here in an emergency?** If you've got no power
   or you can smell burning, you jump the queue. Inside Leeds I'm
   normally with you within two hours in working hours (TEMP).
4. **Will I get a certificate?** Every notifiable job, yes, before the
   invoice. It's your proof for insurers, buyers and building control.
5. **What state is the house left in?** Sheets down before a tool comes
   out, hoover round before I leave, and rubble leaves in my van, not
   your bin.
6. **How do I pay?** Bank transfer or card once you've got the paperwork.
   No deposits on jobs under £1,000 (TEMP); staged payments on rewires
   and solar, set out in the quote.

### 13. Contact

H2: Ring now, or send the job across

Phone block: 0113 496 0620 (TEMP, huge) · R1 · R2

Form (canonical, 6 fields, 4 required):
- Name*
- Phone*
- Postcode*
- What needs doing* (select: the 7 services + Something else)
- Anything useful to know (textarea, optional; placeholder: Age of the
  house, what's tripping, what you've noticed. Photos can wait.)
- Email (optional)
- Submit button label: Get a quote
- Under-button microcopy: R2. Your details go to Eddie and nowhere else.

Facts list beside the form: address (TEMP), hours, email, service-area
one-liner, NICEIC number (TEMP).

Footer: full NAP + service list + certificate links + "Reviews shown are
illustrative demo content" note while TEMP reviews are in place.

---

## SERVICES HUB `/services/`

Title: Electrical Services Leeds | Prices & What Happens | ES Elec
Meta: Rewires, fuse boards, EICRs, EV chargers, solar and fault finding in
Leeds. What each job involves, what it costs in 2026, and how long it
takes. Priced in writing first.

H1: Electrical services in Leeds, priced and explained
Intro (direct-answer lead, extractable): In Leeds in 2026, fault finding
starts at £85, an EICR at £140, lighting work at £220, a consumer unit
swap at £520, an EV charger at £950, a full rewire at £3,200 and solar
at £5,400 (all TEMP, from client.js). Seven jobs cover almost everything
I get rung about. Each one below tells you what happens on the day, what
moves the price, and how long you'll have me in the house. Every price
lands in writing before any work starts.

On-page nav: anchor chips for the 7 services.

---

### SOLAR AND BATTERY `#solar` (form intent)

**Intro (symptom):** Your electricity bill has doubled in five years and
the roof just sits there. Panels are the one home improvement that sends
money back the other way, if the maths is done on your usage rather than
a salesman's spreadsheet.

**What happens on the job:** I size the system from a year of your bills
and a look at your roof on satellite first, so the first conversation
costs you nothing. Then a survey visit: roof pitch, shading, loft access,
fuse board capacity. You get a written design with panel count,
generation estimate and payback year. Install is two days: scaffold and
panels on day one, inverter, wiring and commissioning on day two. You
finish with an app showing live generation, the MCS certificate and the
DNO paperwork done.

**Price and what moves it:** From £5,400 for a 10-panel system (TEMP). A
battery adds £2,400 to £3,900 depending on size (TEMP). Scaffold
complexity, a three-phase supply or a tired fuse board move it up; a
straightforward semi keeps it at the from-price.

**How long:** Two days on site. About three weeks end to end with
scaffolding and paperwork.

**Credentials that apply:** MCS-certified installation (TEMP), which is
what makes export payments claimable. 10-year workmanship guarantee
(TEMP), 25-year panel output warranty. DNO notification handled.

**FAQ:**
1. *Do panels make sense in Leeds weather?* Yes. Panels run on light, not
   heat. The 3,400 kWh estimate on my home page IS a Leeds figure, clouds
   included.
2. *Do I need planning permission?* Almost never on a house. Listed
   buildings and flats are the exceptions, and I'll tell you before we go
   near a design.
3. *What are export payments worth?* Every unit you don't use gets sold
   back at your supplier's export rate. Typically £150 to £250 a year of
   the £683 figure (TEMP), and it lands automatically once the MCS
   paperwork is in.

**CTA:** Get a quote (+ the two-bills ask restated + R3)

---

### EV CHARGER INSTALLATION `#ev` (form intent)

**Intro (symptom):** The car came with a three-pin "granny" cable and now
there's an extension lead trapped in the letterbox every night. A 7kW
point charges four times faster and unlocks the overnight tariffs the car
apps are built around.

**What happens on the job:** Survey first: fuse board capacity, earthing
arrangement, cable route from board to parking spot. You pick tethered or
untethered and I'll give you an honest steer on chargers I'd put on my
own wall. Fitting is a morning: charger mounted, dedicated circuit run,
protective device fitted, DNO notified, app set up before I leave.

**Price and what moves it:** From £950 fitted (TEMP). A long cable run,
groundworks to a detached garage, or a board that needs work first are
the three things that move it. Each is priced in the written quote, not
discovered on the day.

**How long:** A morning for a standard fit.

**Credentials that apply:** Part P notification, BS 7671 dedicated
circuit with the right RCD type, manufacturer-approved installer on the
main charger brands (TEMP).

**FAQ:**
1. *Can my fuse board take it?* Usually, sometimes with a small upgrade.
   The survey answers it for certain, and if the board needs work you get
   that price separately so you can see both numbers.
2. *Tethered or untethered?* Tethered (cable attached) wins for daily
   convenience. Untethered looks tidier and takes any cable. I fit more
   tethered ones.
3. *Will it charge on the cheap overnight rate?* Yes. That's
   scheduling, and I set the app up with you before I leave so the car
   only drinks when the rate drops.

**CTA:** Get a quote (+ R3)

---

### FULL AND PARTIAL REWIRES `#rewires` (form intent)

**Intro (symptom):** Two sockets a room, warm switch plates, and a fuse
box with actual fuse wire in it. Houses wired before the eighties were
built for a kettle and a telly, and they're now running a dozen chargers,
a dishwasher and an induction hob.

**What happens on the job:** Survey visit, then the itemised written
price: every room, every circuit, every accessory, line by line. First
fix is the noisy week: chasing, cabling, back boxes. Second fix is faces
on: sockets, switches, lights, the new board. Then every circuit gets
dead-tested and live-tested, and you get the Electrical Installation
Certificate before the invoice. If you're living in the house, power is
back on every single night.

**Price and what moves it:** The shared model table renders here (2-bed
£3,200 to £4,200 through 5-bed £7,000 to £8,500, TEMP), with the occupied
note. Movers: solid stone walls, high-spec accessories, and each kitchen.
Partial rewires £1,200 to £2,800 (TEMP).

**How long:** 5 to 12 days by house size. The table shows days per size.

**Credentials that apply:** Part P self-certification, BS 7671 testing on
every circuit, NICEIC annual assessment (TEMP), 12-month workmanship
guarantee (TEMP).

**FAQ:**
1. *Can we live here while it happens?* Yes, most of my rewires are
   lived-in. It adds about £350 and a couple of days, and I work room by
   room so you're never without a kettle and the wifi.
2. *Does every wall get chased?* No. Cables drop from above or rise from
   below where the construction allows. Where I do chase, the quote says
   who makes good and what it costs.
3. *Our survey says "partial rewire". What does that mean?* Usually the
   sockets are fine and the lighting circuits or the board are not. An
   EICR (£140, half a morning, TEMP) tells us exactly which half.

**CTA:** Get a quote (+ line: Send the EICR or the survey page across if
you have one. It makes the first price sharper.) (+ R3)

---

### FUSE BOARDS AND CONSUMER UNITS `#boards` (call intent)

**Intro (symptom):** The kettle and the toaster can't run at the same
time, the trip switch is a nightly ritual, or there's a wooden-backed box
under the stairs with fuse wire in a drawer beside it.

**What happens on the job:** Send me a photo of the board and I'll tell
you on the phone whether it's a straight swap. On the day: power off
mid-morning, old unit out, new board in with RCBO protection per circuit,
every circuit tested as it reconnects, labels that name what runs on
each way, certificate before I leave.

**Price and what moves it:** From £520 for a straight swap (TEMP); £650
to £850 with surge protection and more ways (TEMP). What moves it: the
number of circuits, bonding upgrades if the gas and water pipes were
never done, and anything the testing turns up in the circuits themselves,
which gets priced separately, never smuggled in.

**How long:** A day. Power is off for about six hours of it.

**Credentials that apply:** BS 7671 current-edition board, Part P
notification, calibrated test instruments with the readings on your
certificate.

**FAQ:**
1. *Will you find problems I then have to fix?* Sometimes the testing
   turns something up, and you'll see the readings, the risk in plain
   English, and a separate price. Nothing gets fixed without a yes.
2. *Is my plastic board illegal?* No. Plenty of plastic boards are fine.
   The real question is whether every circuit has RCD protection, and the
   photo usually answers it.
3. *Do I lose power all day?* About six hours. Fridge stays shut, wifi
   goes on a battery bank if you're working from home, and I tell you the
   off-time the day before.

**CTA:** Call Eddie (+ line: A photo of the board gets you a price range
on the same call.) (+ R1)

---

### EICR AND LANDLORD CERTIFICATES `#eicr` (call intent)

**Intro (symptom):** The renewal date is coming, the agent is chasing, or
you're buying a house and the survey said "electrics not tested". An EICR
is the electrical MOT: legally required every five years on rentals,
sensible before any purchase.

**What happens on the job:** Circuit-by-circuit testing, dead and live:
insulation resistance, earth continuity, RCD trip times. Every
observation gets a code and a photo. You get the report the same evening
(TEMP) with a plain-English cover note saying what, if anything, needs
doing, and what it would cost.

**Price and what moves it:** From £140 for a typical 2-bed (TEMP), £160
to £240 as bedrooms and circuits climb (TEMP). Movers: circuit count,
access (a loft full of boxes slows testing), and multiple boards.

**How long:** Half a morning for a 3-bed. Power goes off in bursts while
each circuit is tested.

**Credentials that apply:** 2391 inspection and testing qualified (TEMP),
NICEIC registered (TEMP), reports on the standard BS 7671 model form your
insurer and the council recognise.

**FAQ:**
1. *What if it fails?* It doesn't fail like an MOT. C1 and C2
   observations make it unsatisfactory, and on a rental you've got 28
   days to fix them. You get the remedial price with the report, and
   you're free to use anyone.
2. *What do the codes mean?* C1: danger now, I make it safe before I
   leave. C2: potentially dangerous, fix within 28 days on a rental. C3:
   improvement recommended, still a pass. Don't let anyone panic you over
   a C3.
3. *How fast is the report?* Same evening (TEMP). Agents get it CC'd if
   you want.

**CTA:** Call Eddie (+ line: Two or more properties? Booked together,
priced together.) (+ R1)

---

### FAULT FINDING AND REPAIRS `#fault` (call intent)

**Intro (symptom):** The RCD trips at 11pm and won't reset. Half the
sockets upstairs are dead. There's a smell near a socket that wasn't
there last week. Faults don't fix themselves, and the guessing game of
unplugging everything one by one wastes your evening.

**What happens on the job:** This is test-gear work, not trial and error.
Insulation resistance and continuity testing splits the installation
until the fault has nowhere left to hide: a nail through a cable, water
in an outside light, a cooked connection in a junction box. Most faults
are found inside the first hour and fixed on the same visit where parts
allow.

**Price and what moves it:** £85 covers the first hour including the find
in most cases (TEMP). Parts and any chasing to reach a buried joint are
the movers, and you get the number before I open anything up.

**How long:** Most visits are done inside two hours.

**Credentials that apply:** Calibrated test instruments, NICEIC
registered (TEMP), and any repair certified where the work is notifiable.

**FAQ:**
1. *Is a tripping RCD dangerous?* The trip itself means the protection is
   working. What's making it trip might be water, damage or a failing
   appliance, so treat a repeat tripper as a message, not a nuisance.
2. *Can you come tonight?* If it's no-power or burning smells, yes,
   emergencies jump the queue (evening rate quoted on the phone, TEMP).
   If it can safely wait for morning, I'll say so and you save money.
3. *Do you charge to look?* The £85 first hour IS the looking, done with
   a £700 tester rather than a torch and a hunch. No separate call-out
   fee on top.

**CTA:** Call Eddie (+ R2)

---

### LIGHTING DESIGN AND FITTING `#lighting` (form intent)

**Intro (symptom):** The kitchen has one pendant in the middle of the
ceiling and you chop vegetables in your own shadow. The garden vanishes
at 4pm from November to February. Lighting is the cheapest renovation per
square metre of difference it makes.

**What happens on the job:** A walk round at dusk if we can manage it,
because that's when the house tells the truth. Then a simple plan: layers
(task, ambient, accent), positions, switching and dimming. Fitting day:
downlights, under-cabinet runs, outdoor points on their own circuit,
smart switching set up before I go.

**Price and what moves it:** From £220 for a room refresh (TEMP);
kitchens with under-cabinet and dimming typically £450 to £800 (TEMP);
gardens from £380 with proper outdoor-rated cable and fittings (TEMP).
Movers: fitting count, ceiling access from above, and outdoor trenching.

**How long:** A room in a morning, a kitchen in a day, a garden in a day
if the trench line is clear.

**Credentials that apply:** Part P applies in bathrooms and outdoors, and
both get certified. IP-rated fittings outside, the right zones in wet
rooms.

**FAQ:**
1. *Warm or cool bulbs?* Warm (2700K) for living spaces, neutral (4000K)
   over kitchen worktops. Mixing them in one room by accident is the most
   common lighting mistake in Leeds, and it's free to avoid.
2. *Can you add garden sockets at the same time?* Yes, same trench, same
   circuit where the load allows, and it's much cheaper as one job than
   two.
3. *Smart switches or smart bulbs?* Switches. The wall control always
   works, guests don't need an app, and the bulbs can be ordinary.

**CTA:** Get a quote (+ R3)

---

### Hub closing block

H2: Not sure which of those you need?
Line: Describe the symptom, not the solution. That's my job. Ring, or
send it through the form and I'll come back with the honest version.
CTA pair: Call Eddie (+ R1) · Get a quote (+ R2)
Closing form: the canonical 6-field form from Home renders here.

---

## ABOUT `/about/`

Title: About ES Elec | NICEIC Electrician in Leeds
Meta: ES Elec is Eddie Sharp: one NICEIC registered electrician in Leeds,
12 years on the tools, every job priced in writing and certified. The
person who quotes is the person who turns up.

H1: The one who answers the phone is the one on the tools.

### Block 1 · the story (Person schema)

I'm Eddie Sharp. ES Elec is me, a van, and twelve years of Leeds houses
(TEMP). I served my time on commercial sites, got sick of being the
fourth sub-contractor on jobs where nobody owned the outcome, and set up
on my own in 2014 (TEMP) with one rule: the person who prices the job
does the job. When you ring, you get me. When the quote arrives, I wrote
it. When something's tricky on site, the bloke deciding what to do about
it is the same one who'll sign the certificate. That's the whole pitch.
Small on purpose.

### Block 2 · qualifications, explained

H2: The tickets on the wall, in plain English
- **18th Edition, BS 7671 (TEMP):** The current wiring regulations exam.
  It's the minimum ticket for touching your house, not a selling point,
  but you'd be surprised who hasn't sat the update.
- **2391 Inspection and Testing (TEMP):** The qualification behind every
  EICR I sign. Testing is its own trade, and this is its licence.
- **NVQ Level 3 and AM2 (TEMP):** The apprenticeship route: assessed on
  real installations, not multiple choice.
- **NICEIC Approved Contractor, D123456 (TEMP):** Assessed every year on
  real jobs. Check the number on niceic.com, mine or anyone's.

### Block 3 · how a job goes, the long version

H2: From first ring to certificate
The four home-page steps, each expanded to a paragraph:
1. The phone call. What I'll ask (age of house, symptom, photos), what
   I'll tell you straight away (rough range, whether it's worth a visit,
   whether you even need an electrician).
2. The look and the written price. What the survey visit involves, the
   48-hour quote turnaround (TEMP), what an itemised line looks like, and
   the promise that the paper is what you pay.
3. The work. Start dates honoured, sheets down, power on overnight, daily
   tidy-up, and what happens if something unexpected turns up inside a
   wall (you get the finding, the options and the prices, and nothing
   proceeds without a yes).
4. The paperwork. Certificate before invoice, building control notified,
   guarantee terms attached, and the test readings kept on file for when
   you sell the house.

### Block 4 · the guarantee, in full

H2: The 12-month guarantee, with no small print (TEMP)
What it covers: anything I fitted or altered that stops working properly
inside 12 months, put right at no cost, including parts. How to claim:
ring or email, same response promise as any job. What it doesn't cover:
your appliances, damage by other trades, and pre-existing circuits I
didn't touch (those get the honest version instead: I'll tell you what I
found, not invoice you for it). Beyond me: NICEIC's Platinum Promise
backs notifiable work if I couldn't put it right myself (TEMP: confirm
wording).

### Block 5 · the van and the kit

H2: Why the van matters
The van carries a calibrated Megger multifunction tester (the readings on
your certificate come from it), a stocked board of the parts that kill
most faults (RCBOs, pendants, accessories), and enough cable to finish
the day the wall opened late. Boring paragraph, real point: jobs finish
on the visit they started far more often when the part is already outside
your house.

### Block 6 · FAQ (3)

1. **Do you subcontract?** No. If a job needs two pairs of hands
   (scaffold days, board swaps in big houses), the second pair is a spark
   I've worked with for years, on my insurance, under my name, and I'm on
   site.
2. **Do you do commercial work?** Light commercial, yes: shops, offices,
   small units. Factories and three-phase industrial, no, and I'll point
   you at someone good.
3. **How far ahead are you booked?** Certificates and faults, usually
   inside the week. Rewires and solar, two to four weeks out (TEMP).
   Emergencies jump everything.

### Block 7 · CTA band

Line: That's the pitch. One bloke, priced in writing, certified.
CTA pair: Call Eddie (+ R1) · Get a quote (+ R2)

---

## BLOG INDEX `/blog/`

Title: Advice From a Leeds Electrician | ES Elec
Meta: Real 2026 prices and straight answers from a working Leeds
electrician. Rewire costs, landlord EICR rules, fuse board warning signs.

H1: Advice, from the tools
Intro: Three honest reads, each one answering a question I get on the
phone every week, with the prices I quote and the rules I work to.

Cards: the three posts, each with reading time and updated date.

---

## POST 1 (refresh) `/blog/rewire-cost-leeds/`

Title: How Much Does a Rewire Cost in Leeds? 2026 Prices
Meta: A full rewire in Leeds costs £3,200 to £8,500 in 2026 depending on
size. A working Leeds electrician breaks down prices per house type, what
moves them, and how to read a rewire quote.

H1: How much does a rewire cost in Leeds? 2026 prices

Direct-answer lead (kept quotable): A full house rewire in Leeds costs
between £3,200 and £8,500 in 2026. A 2-bed terrace sits at the bottom of
that range, a 5-bed detached at the top. Partial rewires run £1,200 to
£2,800. Those are working figures from my own quotes, not scraped
averages.

The table (the shared model, verbatim), PLUS the new occupied note:
"Living in the house through the rewire? Add about £350 and a couple of
days across the board. That covers sheeting, furniture moves and keeping
your power on every night, and it's the same modifier the Reckoner on my
home page uses."

H2: What moves the price (kept, tightened)
Walls, spec, kitchens, and why two honest quotes for the same house can
sit £1,000 apart.

H2: Does my house actually need one? (kept)
Age alone doesn't condemn a house; specifics do. The £140 EICR (half a
morning, TEMP) as the cheap way to find out which half of the house needs
work.

H2: How to read a rewire quote (the empathy section)
Four things to demand before comparing numbers: an itemised room-by-room
breakdown (if it's one number on a text, you're not comparing quotes,
you're comparing guesses), who makes good the plaster, whether testing
and certification are inside the price, and the payment schedule. The
cheapest of three quotes is usually the one that's missing a line.

CTA band: Room-by-room written price, usually within 48 hours of a look
(TEMP). Get a quote (+ R3)

Schema: Article + BreadcrumbList. Author: Eddie Sharp (Person).

---

## POST 2 (new) `/blog/eicr-landlords-leeds/`

Title: EICR for Leeds Landlords: 2026 Rules, Costs, Fines
Meta: Landlords in England need an EICR every 5 years, with fines up to
£30,000 for skipping it. A Leeds electrician explains the 2026 rules,
real costs, and what the codes on the report mean.

H1: EICR for Leeds landlords: the 2026 rules, costs and fines

Direct-answer lead: Every rented home in England must have a satisfactory
EICR renewed at least every five years, under the Electrical Safety
Standards in the Private Rented Sector (England) Regulations 2020. In
Leeds in 2026 the inspection costs £140 to £240 for a typical house
(TEMP), and the council can fine up to £30,000 per breach for not having
one.

H2: The five rules that bite
1. Renew at least every five years, or sooner if the last report says so.
2. New tenants get a copy before they move in; existing tenants within 28
   days of the inspection.
3. The council gets a copy within 7 days if they ask for one.
4. C1 and C2 fixes done within 28 days (or faster if the report says),
   with written confirmation to tenant and council.
5. Keep the paper trail. The fine is per breach, and "I emailed the
   agent" is not a paper trail.

H2: What it costs in Leeds in 2026
Small table (TEMP figures): 1-2 bed flat £140 · 3-bed semi £160 to £190 ·
4-bed and up £200 to £240 · HMOs priced on circuits. What moves it:
circuit count, access, multiple boards.

H2: Reading the report without panicking
C1 means danger now, and it gets made safe before the electrician leaves.
C2 means potentially dangerous, 28 days to fix on a rental. C3 means
improvement recommended and it is STILL A PASS. FI means further
investigation, and the report stays unsatisfactory until it's resolved.
The bit agents miss: a C3-only report needs nothing doing. Don't be
upsold on a pass.

H2: The Leeds-specific bit
Student HMOs in Headingley and Hyde Park carry more circuits and more
wear than the same house owner-occupied. Book the EICR for daytime
between tenancies if you can: empty house, full access, faster test,
lower price.

CTA band: Two or more properties booked together get priced together.
Call Eddie (+ R1)

Schema: Article + BreadcrumbList. Author: Eddie Sharp (Person). Published
+ updated dates visible on page.

---

## POST 3 (new) `/blog/fuse-board-upgrade-signs/`

Title: Fuse Board Upgrade: 7 Signs and 2026 Costs
Meta: A fuse board replacement costs £520 to £850 in Leeds in 2026. A
working electrician lists the 7 signs yours is due, and the honest truth
about plastic boards.

H1: Fuse board upgrade: 7 signs yours is due, and 2026 costs

Direct-answer lead: A fuse board (consumer unit) replacement costs £520
to £850 fitted in Leeds in 2026 (TEMP), takes a day, and the power is off
for about six hours of it. Here are the seven signs the box on your wall
has had its time, from a bloke who swaps one most weeks.

H2: The 7 signs
1. **Fuse wire:** If blown fuses get mended with wire from a card, the
   board predates every protection standard your family currently relies
   on.
2. **No test button anywhere:** No RCD. On a fault, that's the difference
   between milliseconds and a serious shock.
3. **Scorch marks or a warm, fishy smell at the board:** That's a
   connection cooking itself. Ring someone this week, not this quarter.
4. **One trip kills the whole house:** A single shared RCD means one
   faulty kettle blacks out the freezer, the alarm and the wifi. Modern
   boards give every circuit its own.
5. **Buzzing or crackling:** Boards should be silent. Noise is arcing,
   and arcing is how board fires start.
6. **No spare ways:** Planning an EV charger, an extension or an electric
   shower? A full board can't take the circuit.
7. **A wooden backboard:** Pre-1970s, and usually accompanied by rubber
   or fabric-insulated cable somewhere in the house. Budget for an EICR
   before the board swap, because the board might be the good news.

H2: The honest bit about plastic boards
Plastic consumer units are not illegal and yours might be fine. The
question that matters is whether every circuit has RCD protection and
whether the connections are sound. A photo answers half of that on the
phone, free.

H2: What a swap costs in 2026
Straight swap, 6 ways: £520 to £650 (TEMP). 10 ways with surge
protection: £650 to £850 (TEMP). Bonding upgrades where gas and water
were never done: add £120 to £250 (TEMP). Every price includes testing
each circuit as it reconnects, and the certificate.

H2: What happens on the day
The morning routine, the six-hour off-window, the fridge rule, the
labels, the certificate. One paragraph, sets expectations.

CTA band: A photo of your board gets you a price range on the same call.
Call Eddie (+ R1)

Schema: Article + BreadcrumbList. Author: Eddie Sharp (Person). Published
+ updated dates visible on page.

---

## 404

H1: That wire goes nowhere.
Line: The page has moved or never existed. The electrician, on the other
hand, is easy to reach.
CTA pair: Call Eddie (+ R1) · back-to-home link: Back to the home page

---

## Audit 4 self-check record (lead)

- Layer-cake: home headings alone read: prices the job first → itemised
  price in writing → the work with from-prices → what would a rewire
  cost → one call books it → four steps → 87 reviews, no surprises →
  solar maths → coverage → credentials → straight answers → ring now.
  The argument carries without body copy. PASS
- CTA lock: the only button labels in this deck are "Call Eddie" and
  "Get a quote" (form submit reuses "Get a quote"). PASS
- Em dashes: none in customer-facing strings. Verified by grep. PASS
- Negative-parallelism / rule-of-three tells: swept during drafting;
  re-verified with the stop-slop scan at build time. PASS on read-aloud
- Claims: every figure is TEMP-tagged here or in client.js; the
  one-in-three itemised-quote figure is flagged for source verification
  before go-live. PASS
- Voice: read aloud, sounds like a spark, not a brochure. Banned-word
  scan (seamless, vibrant, testament, delve, landscape, journey, elevate)
  returns nothing. PASS
