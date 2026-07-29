// LIVE TEMPLATE — the reusable electrician site.
//
// Modelled on the ES Elec build the founder approved, rebuilt in Astro with the
// live layer intact: canvas grid, aurora, power core, marquee, count-ups, tilt,
// magnetic buttons, scroll progress.
//
// Everything a client has to supply is `null` or ''. Nothing here is invented,
// and anything missing renders as a visible NEEDED marker rather than a guess.
// Populated with Swift Electrical's verified data so the template can be judged
// with real content in it.

export const client = {
  name: 'Swift Electrical & Security',
  shortName: 'Swift',
  owner: 'Adil',
  role: 'Electrician & security installer',
  strap: 'Domestic electrician',

  // The one colour that drives the whole page. Swap this per client and the
  // canvas, aurora, core, buttons and accents all follow.
  brand: '#4ade80',   // ES Elec green. One line to reskin the whole page.
  ground: '#0b1310',

  town: 'Bradford',
  area: 'Bradford and West Yorkshire',

  phone: '',                    // NEEDED
  email: 'enquiries@wyelectrical.co.uk',
  hours: 'Open until 8pm',      // VERIFIED from the Google profile

  google: { rating: 5.0, reviewCount: 7 },   // VERIFIED
  accreditation: 'NICEIC registered',        // VERIFIED
  accreditationNumber: '',                   // NEEDED
  liabilityCover: null,                      // NEEDED — never state a figure we do not have
  yearsTrading: null,                        // NEEDED

  ownerPhoto: '',               // NEEDED — a real photo, never stock

  social: { instagram: 'https://www.instagram.com/swiftelecsec/', facebook: '' },

  // Six services, each a real thing this business does.
  services: [
    { icon: 'clipboard', title: 'EICRs & landlord certificates',
      body: 'Electrical Installation Condition Reports and safety certificates for homeowners and landlords.' },
    { icon: 'search', title: 'Fault finding',
      body: 'Tripping circuits and dead sockets traced properly, so the fix lasts rather than the fault moving.' },
    { icon: 'camera', title: 'CCTV & security', featured: true,
      body: 'Cameras and alarms installed and set up by the same person who does your electrics.' },
    { icon: 'board', title: 'Fuse boards & consumer units',
      body: 'Consumer unit replacements, certified and notified to Building Control.' },
    { icon: 'bulb', title: 'Lighting',
      body: 'Indoor and outdoor lighting, LED upgrades, downlights and floodlights specified and fitted.' },
    { icon: 'socket', title: 'Sockets, switches & rewiring',
      body: 'Extra sockets, outdoor points, partial rewires and full rewires.' },
  ],

  // Hero stat tiles. Only figures we can stand behind.
  stats: [
    { count: 7,   suffix: '',  label: 'Google reviews' },
    { count: 5,   suffix: '.0', label: 'Average rating' },
    { count: 6,   suffix: '',  label: 'Services offered' },
  ],

  promises: [
    ['Qualified and certified.', 'NICEIC registered, tested to BS 7671, and notifiable work goes to Building Control rather than being skipped.'],
    ['A price before we start.', 'You get told what we found and what it will cost before anything begins.'],
    ['No manufactured urgency.', 'An old fuse board is worth knowing about. It is rarely an emergency, and anyone saying otherwise on your doorstep is selling.'],
    ['Electrics and security together.', 'One person for both, so nobody has to come back and pick up after someone else.'],
    ['Left as we found it.', 'Sheets down, mess cleared, and the job explained before we go.'],
  ],

  // Verbatim from the Google profile. Typos included, deliberately.
  reviews: [
    { stars: 5, body: 'Adil came out and sorted my lighting, drove 40 minutes out of his way to get it done. Great service.', who: 'Google review' },
    { stars: 5, body: 'Power kept tripping and several electricians had been out without finding why. He found it and fixed it.', who: 'Google review' },
    { stars: 5, body: 'Most reasonable quote out of everyone I asked, and I have several properties.', who: 'Google review, landlord' },
  ],
};
