// ES ELEC v2 — flagship template data.
//
// TEMP POLICY (MASTER_PROMPT.md Part 6): no blanks anywhere. Missing facts
// carry plausible West Yorkshire market averages, each tagged // TEMP.
// The go-live gate is: grep -n "TEMP" src/data/client.js returns nothing.
// Reviews are illustrative for the template demo and NEVER ship on a paying
// client's live site (DMCC Act 2025); their swap is part of the same gate.

export const client = {
  name: 'ES Elec',
  legalName: 'ES Elec (Leeds) Ltd',            // TEMP
  owner: 'Eddie Sharp',                        // TEMP — demo persona, ES initials
  role: 'Electrician and solar installer',
  strap: 'Domestic and light commercial',

  town: 'Leeds',
  county: 'West Yorkshire',
  areas: ['Leeds', 'Horsforth', 'Headingley', 'Pudsey', 'Morley', 'Wetherby', 'Otley', 'Garforth'],
  geo: { lat: 53.79648, lng: -1.54785 },
  address: {
    street: '14 Kirkstall Road',                 // TEMP
    locality: 'Leeds',
    region: 'West Yorkshire',
    postcode: 'LS3 1LX',                         // TEMP
  },

  phone: '0113 496 0620',                      // TEMP — Ofcom drama range, safe placeholder
  email: 'hello@eselec.co.uk',                 // TEMP
  hours: 'Monday to Saturday, 7.30am to 6pm',  // TEMP
  emergency: true,
  responsePromise: 'Same-day reply, always',   // TEMP

  yearsTrading: 12,                            // TEMP
  founded: 2014,                               // TEMP
  accreditation: 'NICEIC Approved Contractor', // TEMP
  accreditationNumber: 'D123456',              // TEMP
  liabilityCover: '£2m public liability',      // TEMP — industry standard figure
  guarantee: '12-month workmanship guarantee', // TEMP

  google: { rating: 4.9, reviewCount: 87 },    // TEMP — demo only, never live (DMCC 2025)

  // Ranked in the order the client wants MORE of, which is the order the
  // site sells them. Solar and EV lead: higher ticket, considered buyers.
  services: [
    { id: 'solar',      name: 'Solar and battery',            from: 5400 },  // TEMP from-price
    { id: 'ev',         name: 'EV charger installation',      from: 950 },   // TEMP
    { id: 'rewires',    name: 'Full and partial rewires',     from: 3200 },  // TEMP
    { id: 'boards',     name: 'Fuse boards and consumer units', from: 520 }, // TEMP
    { id: 'eicr',       name: 'EICR and landlord certificates', from: 140 }, // TEMP
    { id: 'fault',      name: 'Fault finding and repairs',    from: 85 },    // TEMP
    { id: 'lighting',   name: 'Lighting design and fitting',  from: 220 },   // TEMP
  ],

  // Conversion pack fitted: emergency split, call-first default.
  conversion: {
    primary: 'call',
    considered: 'quote-form',                  // solar / EV / rewire path
    stickyMobileCallBar: true,
    // Where the quote form POSTs at go-live (Formspree/Basin/host handler).
    // Empty string = demo mode: the form composes an email to client.email
    // instead, so an enquiry is never silently lost.  // TEMP
    formEndpoint: '',
  },

  social: { instagram: '', facebook: '' },     // TEMP — empty renders nothing, not a blank

  // ---- v3 extensions (PLAN.md Phase 3; copy source COPY.md) ----

  jobsCertified: 1438,                         // TEMP — trust shelf count

  // THE one shared rewire model. The Reckoner, the blog table and the
  // services page all read this object; nothing forks it.
  reckoner: {                                  // TEMP figures
    beds: {
      2: { low: 3200, high: 4200, daysLow: 5,  daysHigh: 6  },
      3: { low: 4000, high: 5500, daysLow: 6,  daysHigh: 8  },
      4: { low: 5500, high: 7000, daysLow: 8,  daysHigh: 10 },
      5: { low: 7000, high: 8500, daysLow: 10, daysHigh: 12 },
    },
    occupied: { price: 350, days: 2 },
    partial: { low: 1200, high: 2800 },
  },

  // Sample quote-fragment lines for the written-price spread.
  lineItems: [                                 // TEMP figures
    ['Consumer unit, 10-way with surge protection', 412],
    ['Second fix, kitchen ring and appliance points', 286],
    ['Test, certification and notification', 180],
  ],

  // Home solar band model. Precise saving on purpose (doctrine: round
  // installs, precise savings); install price stays services.solar.from.
  solarModel: {                                // TEMP figures
    panels: 10,
    genKwh: 3400,
    valuePerYear: 683,
    exportLow: 150,
    exportHigh: 250,
    paybackLine: 'under eight years',
    workmanshipYears: 10,
    panelWarrantyYears: 25,
  },

  // Global FAQ (home, FAQPage schema). Answers verbatim from COPY.md.
  faqs: [                                      // TEMP where figures appear
    { q: 'Do you charge a call-out fee?',
      a: 'No. Fault finding starts at £85 for the first hour, and that clock starts when I’m at the board with the tester out, not when the van pulls up.' },
    { q: 'Do I actually need an electrician for this?',
      a: 'Ring and describe it. Swapping a like-for-like light fitting, probably not, and I’ll say so. Anything in a bathroom, outdoors, or involving the fuse board, yes, and it needs certifying.' },
    { q: 'How fast can you get here in an emergency?',
      a: 'If you’ve got no power or you can smell burning, you jump the queue. Inside Leeds I’m normally with you within two hours in working hours.' },
    { q: 'Will I get a certificate?',
      a: 'Every notifiable job, yes, before the invoice. It’s your proof for insurers, buyers and building control.' },
    { q: 'What state is the house left in?',
      a: 'Sheets down before a tool comes out, hoover round before I leave, and rubble leaves in my van, not your bin.' },
    { q: 'How do I pay?',
      a: 'Bank transfer or card once you’ve got the paperwork. No deposits on jobs under £1,000; staged payments on rewires and solar, set out in the quote.' },
  ],

  // Areas with substance: coverage logic, not a town list.
  areaClusters: [
    { title: 'North Leeds', places: 'Headingley, Horsforth, Otley',
      line: 'Victorian terraces and student lets. Half my EICR work lives here, and the stone walls explain my rewire range.' },
    { title: 'South and east', places: 'Morley, Pudsey, Garforth',
      line: 'Thirties semis and newer estates. Board upgrades, EV chargers and kitchen rewires, week in, week out.' },
    { title: 'Wetherby and the villages', places: '',
      line: 'Bigger roofs, bigger bills. Most of my solar and battery work points this way.' },
  ],
  areaOverflow: 'Not on the list? Ring anyway. If it’s under half an hour from LS3 I’ll usually come, and if I won’t, I’ll say so on the phone, not on the invoice.',

  // v3 demo reviews (TEMP — DMCC 2025: never on a paying client's live site).
  reviews: [
    { lead: true,
      quote: 'Eddie rewired our 3-bed in Pudsey while we lived in it. The price never moved, the house was clean every night, and he talked us out of work we didn’t need. Ask for the quote in writing and watch him smile.',
      name: 'Claire H', area: 'Pudsey', job: 'Full rewire', date: 'March 2026' },
    { quote: 'Fuse board swapped, tested and certified in a day. He found a dodgy kitchen circuit and showed me the readings rather than just telling me.',
      name: 'Dave T', area: 'Morley', job: 'Consumer unit', date: 'January 2026' },
    { quote: 'EICR for two rentals, both reports back the same evening, plain English, no upsell.',
      name: 'Sunita K', area: 'Headingley', job: 'Landlord EICR', date: 'February 2026' },
  ],
};
