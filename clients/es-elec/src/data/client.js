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
  },

  social: { instagram: '', facebook: '' },     // TEMP — empty renders nothing, not a blank
};
