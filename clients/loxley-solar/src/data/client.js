// LOXLEY SOLAR — flagship template #2 data.
//
// TEMP POLICY (MASTER_PROMPT.md Part 6): no blanks anywhere. Missing facts
// carry plausible South Yorkshire market averages, each tagged // TEMP.
// Go-live gate: grep -rn "TEMP" src returns nothing, and the demo review
// figures are gone (DMCC Act 2025: invented reviews never ship live).

export const client = {
  name: 'Loxley Solar',
  legalName: 'Loxley Solar Ltd',               // TEMP
  owner: 'Dan Whitfield',                      // TEMP — demo persona
  role: 'MCS-certified solar and battery installer',
  strap: 'Domestic solar, batteries and EV charging',

  town: 'Sheffield',
  county: 'South Yorkshire',
  areas: ['Sheffield', 'Hillsborough', 'Stocksbridge', 'Dronfield', 'Rotherham', 'Chapeltown', 'Ecclesall', 'Barnsley'],
  geo: { lat: 53.38113, lng: -1.47009 },
  address: {
    street: '2 Holme Lane',                    // TEMP
    locality: 'Sheffield',
    region: 'South Yorkshire',
    postcode: 'S6 4JJ',                        // TEMP
  },

  phone: '0114 496 0480',                      // TEMP — Ofcom drama range, safe placeholder
  email: 'hello@loxleysolar.co.uk',            // TEMP
  hours: 'Monday to Friday, 8am to 6pm',       // TEMP
  emergency: false,                            // considered purchases; no emergency path

  yearsTrading: 9,                             // TEMP
  founded: 2017,                               // TEMP
  accreditation: 'MCS certified',              // TEMP
  accreditationNumber: 'NAP-52147',            // TEMP
  liabilityCover: '£5m public liability',      // TEMP — industry standard for roof work
  guarantee: '10-year workmanship guarantee',  // TEMP — panels carry maker warranties on top
  installsCompleted: 640,                      // TEMP

  google: { rating: 4.8, reviewCount: 112 },   // TEMP — demo only, never live (DMCC 2025)

  // Ranked in the order the client wants MORE of.
  services: [
    { id: 'solar',       name: 'Solar panel installation',      from: 5900 },  // TEMP from-price
    { id: 'battery',     name: 'Battery storage',               from: 2800 },  // TEMP
    { id: 'solarplus',   name: 'Solar plus battery packages',   from: 8200 },  // TEMP
    { id: 'ev',          name: 'EV charger installation',       from: 980 },   // TEMP
    { id: 'diverter',    name: 'Hot water diverters',           from: 480 },   // TEMP
    { id: 'health',      name: 'System health checks',          from: 120 },   // TEMP
  ],

  // The estimator's working numbers. All TEMP: calibrate to the client's real
  // quoting model before go-live. Sheffield-latitude yield baseline.
  estimator: {
    kwhPerPanelYear: 385,      // TEMP — 440W panel, south-facing, Sheffield
    facingFactor: { south: 1.0, southeast: 0.94, east: 0.82 },  // TEMP
    exportRate: 0.15,          // TEMP — SEG p/kWh
    importRate: 0.27,          // TEMP — p/kWh offset value
    selfUseShare: 0.45,        // TEMP — without battery
    selfUseShareBattery: 0.8,  // TEMP — with battery
    costPerPanel: 590,         // TEMP — installed, per panel, at 10-panel scale
  },

  conversion: {
    primary: 'quote-form',     // considered purchase: the form leads
    considered: 'quote-form',
    stickyMobileCallBar: true, // still one tap from a human
    formEndpoint: '',          // TEMP — wire the client's form handler at go-live
  },

  social: { instagram: '', facebook: '' },     // TEMP — empty renders nothing
};
