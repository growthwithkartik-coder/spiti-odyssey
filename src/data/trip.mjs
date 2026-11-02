// =====================================================================
// TRIP CONFIGURATION — the single source of truth.
// Every fact the site states about the expedition lives here. Edit,
// then run `node tools/build.mjs`. The same data is also written to
// public/assets/js/config.js for the booking form.
//
// RULE: when something is not confirmed, leave it as null. The site
// prints "To be confirmed" wherever a value is null. Never type a
// guess into this file.
// =====================================================================

export const TRIP = {
  brand: 'The Backpack Tribe',
  name: 'The Spiti Odyssey',
  edition: 'New Year Himalayan Escape',
  tagline: 'Begin the year where the world feels different.',
  duration: { days: 8, nights: 7, note: 'Subject to final itinerary confirmation' },
  // Event name used by the 2026 New Year edition (organiser brief, Oct 2026).
  eventName: 'Spiti Odyssey — New Year Mountain Party & Trek',
  managedBy: 'DemiGod House',
  departure: {
    // Event start date as supplied by the organiser. No end date is published.
    day: '27 December',
    year: 2026,
    iso: '2026-12-27T00:00:00+05:30', // drives the countdown (IST)
    availability: null,       // ← not confirmed. e.g. 'Open', 'Waitlist'
    note: 'Event starts 27 December 2026. Availability and the final day-by-day schedule are still to be confirmed.',
    // Previously: day '13 February', year null (replaced on the organiser's instruction).
  },
  route: ['Delhi', 'Kufri', 'Kalpa', 'Kaza', 'Rampur', 'Delhi'],
  routeIsIllustrative: true, // route graphics are schematic, not surveyed maps

  // Brochure status — the source PDF was not supplied with this build.
  brochure: {
    received: false,
    name: 'Spiti 2K26 Prem (brochure PDF)',
  },
};

export const CONTACT = {
  // Organiser contact — DemiGod House (operates and manages the event).
  organiser: 'DemiGod House',
  email: 'dev@demigodhouse.com',
  phone: '8355897803',
  phoneIntl: '+918355897803',
  phoneDisplay: '+91 83558 97803',
  // WhatsApp: digits only, with country code. Confirmed by the organiser as +91 8355897803.
  // Set to null to hide the floating WhatsApp button everywhere.
  whatsapp: '918355897803',
  whatsappMessage: 'Hi DemiGod House, I would like to know more about the Spiti Odyssey New Year Mountain Party & Trek (27 December 2026).',
  // Kept from the original build (The Backpack Tribe). Remove if no longer relevant.
  instagram: 'thebagpacktribe',
  instagramUrl: 'https://www.instagram.com/thebagpacktribe/',
  previous: { email: 'thebagpacktribe@gmail.com', phoneDisplay: '+91 89540 94444' },
};

// ---------------------------------------------------------------------
// PRICING — the Spiti Odyssey trip price (organiser brief, Oct 2026).
// The trip is priced at ₹1,60,000–₹2,30,000 PER PERSON. Edit `from` / `to`
// to update every price shown on the site (pages, booking form, config).
// The former accommodation-only estimate has been removed on the
// organiser's instruction; it must not be shown anywhere.
// ---------------------------------------------------------------------
export const PRICING = {
  currency: 'INR',
  package: { from: 160000, to: 230000, basis: 'per person',
    label: 'Spiti Odyssey trip price',
    note: 'Where you land in the range depends on the package you choose and its confirmed inclusions. Your written quote from the team is final.' },
  // Line items are listed so travellers can see what the final quote will
  // itemise. Amounts stay null until confirmed — the site prints "To be confirmed".
  lines: [
    { key: 'stays',      label: 'Stays on the route',           amount: null },
    { key: 'transport',  label: 'Transportation and operations', amount: null },
    { key: 'meals',      label: 'Meals',                         amount: null },
    { key: 'permits',    label: 'Permits and applicable fees',   amount: null },
    { key: 'taxes',      label: 'Taxes',                         amount: null },
  ],
  packageTotal: null,   // confirmed per-person total for a specific package
  deposit: null,        // confirmed booking deposit — payments stay disabled while null
};

export const PAYMENTS = {
  enabled: false,              // flips on only when backend + credentials + confirmed amounts exist
  provider: 'razorpay',
  createOrderEndpoint: null,   // e.g. 'https://api.example.com/api/payments/order'
  verifyEndpoint: null,        // e.g. 'https://api.example.com/api/payments/verify'
  keyId: null,                 // Razorpay PUBLIC key id only (rzp_live_…). Never the secret.
  merchantName: null,          // legal merchant name as registered with the gateway — to be confirmed
};

export const ENQUIRY = {
  // If set, the booking form POSTs JSON here (see server/README). If null,
  // the form opens the visitor's email app with the enquiry pre-filled.
  endpoint: null,
  to: 'dev@demigodhouse.com',
  subject: 'Spiti Odyssey enquiry',
  departures: ['27 December 2026 — New Year Mountain Party & Trek', 'A different date — I will describe it below'],
  // Budget preference within the published range. These are NOT package tiers —
  // the organiser has not defined tiers; this only tells the team what to quote.
  packagePreference: ['Starting package — from ₹1,60,000 per person', 'Upper range — up to ₹2,30,000 per person', 'Not sure yet — please advise'],
  roomSharing: ['Twin sharing', 'Triple sharing', 'Single occupancy', 'Not sure yet'],
};

// ---------------------------------------------------------------------
// STAYS — exact names as supplied. Nothing below claims an amenity,
// room type or view. `confirmed` is false until the operator confirms
// the booking with each property.
// ---------------------------------------------------------------------
export const STAYS = [
  { id: 'delhi',      city: 'Delhi',      name: 'Hyatt Centric', nights: [1],       day: 1,    confirmed: null, sharing: null,
    role: 'The first night. Everyone arrives, meets, and wakes up together for the long climb north.' },
  { id: 'kufri',      city: 'Kufri',      name: 'Fortune',       nights: [2],       day: 2,    confirmed: null, sharing: null,
    role: 'The first night in the hills, after the plains give way to pine ridges above Shimla.' },
  { id: 'kalpa',      city: 'Kalpa',      name: 'Kinner Villa',  nights: [3],       day: 3,    confirmed: null, sharing: null,
    role: 'One night on the Kalpa shelf, across the gorge from the Kinnaur Kailash range.' },
  { id: 'kaza',       city: 'Kaza',       name: 'Sakya Abode',   nights: [4, 5, 6], day: 4,    confirmed: null, sharing: null,
    role: 'The base for three nights in Spiti: arrival from Kinnaur, then two days of high-village exploring.' },
  { id: 'rampur',     city: 'Rampur',     name: 'Dev Dhara',     nights: [7],       day: 7,    confirmed: null, sharing: null,
    role: 'The descent night on the Sutlej, before the final drive back to Delhi.' },
  { id: 'chandigarh', city: 'Chandigarh', name: 'JW Marriott',   nights: [],        day: null, confirmed: null, sharing: null,
    role: 'Included in the latest stay list. The brochure’s eight-day route ends in Delhi and has no Chandigarh night, so where this stay fits is awaiting the operator’s confirmation.',
    flag: 'Itinerary position awaiting confirmation' },
];

// ---------------------------------------------------------------------
// ITINERARY — route structure from the brief. Exact drive times,
// distances, meal plans and access are NOT stated anywhere on purpose.
// To add a Chandigarh night later, insert a day object and set the
// chandigarh stay's `nights`/`day` — the pages rebuild from this list.
// ---------------------------------------------------------------------
export const ITINERARY = [
  { n: 1, slug: 'day-1', from: null, to: 'Delhi', title: 'Delhi — the starting line', stay: 'delhi', alt: 'about 215 m',
    places: ['Arrival in Delhi', 'Group meet'],
    note: 'Arrival arrangements and meeting time to be confirmed by the operator.' },
  { n: 2, slug: 'day-2', from: 'Delhi', to: 'Kufri', title: 'Delhi to Kufri — out of the plains', stay: 'kufri', alt: 'about 2,700 m',
    places: ['The climb into the Shimla hills', 'Kufri'],
    note: 'A long road day. Winter fog on the plains and snow near Kufri can change timings.' },
  { n: 3, slug: 'day-3', from: 'Kufri', to: 'Kalpa', title: 'Kufri to Kalpa — into Kinnaur', stay: 'kalpa', alt: 'about 2,960 m',
    places: ['The Sutlej valley', 'Hindustan–Tibet road', 'Kalpa'],
    note: 'Cliff-cut sections of road; landslide or snow clearance can cause waits.' },
  { n: 4, slug: 'day-4', from: 'Kalpa', to: 'Kaza', title: 'Kalpa toward Kaza — Nako and Tabo', stay: 'kaza', alt: 'about 3,800 m at Kaza',
    places: ['Nako', 'Tabo'],
    note: 'The stops described in the brochure for this day relate to Nako and Tabo. The order of stops is confirmed on the road.' },
  { n: 5, slug: 'day-5', from: 'Kaza', to: 'Kaza', title: 'Kaza — Key Monastery and Chicham Bridge', stay: 'kaza', alt: 'Key Monastery about 4,100 m',
    places: ['Key Monastery', 'Chicham Bridge'],
    note: 'Local exploration from Kaza. High-altitude sightseeing depends on snow and road status on the day.' },
  { n: 6, slug: 'day-6', from: 'Kaza', to: 'Kaza', title: 'Kaza — Langza, Komik and Hikkim', stay: 'kaza', alt: 'villages above 4,000 m',
    places: ['Langza', 'Komik', 'Hikkim'],
    note: 'The three highest villages of the trip. Access in winter depends on snow clearance.' },
  { n: 7, slug: 'day-7', from: 'Kaza', to: 'Rampur', title: 'Kaza to Rampur — the long descent', stay: 'rampur', alt: 'about 1,000 m',
    places: ['Back down the Spiti and Sutlej valleys', 'Rampur'],
    note: 'The longest drive back; timings depend on road conditions.' },
  { n: 8, slug: 'day-8', from: 'Rampur', to: 'Delhi', title: 'Rampur to Delhi — the return', stay: null, alt: 'back to the plains',
    places: ['Return to Delhi'],
    note: 'Arrival time in Delhi to be confirmed; please do not book onward travel until it is.' },
];

// ---------------------------------------------------------------------
// OUTSTANDING CONFIRMATIONS — shown on the trip-details page and
// listed in README. Remove an item once the operator confirms it.
// ---------------------------------------------------------------------
export const PENDING = [
  'Availability and the final day-by-day schedule from the 27 December 2026 start.',
  'What each point in the ₹1,60,000–₹2,30,000 per-person range includes.',
  'The DJ’s name, and the timing and venue of the New Year celebration on the route.',
  'Transport: Hilux availability and number of seats, and what applies to guests who bring their own car (fuel, parking, convoy, permits).',
  'Where the Chandigarh JW Marriott night fits — the brochure route ends in Delhi.',
  'Booking deposit, payment schedule and the itemised inclusions (stays, transport, meals, permits, taxes).',
  'Room-sharing basis at each property and whether each booking is confirmed.',
  'Full inclusions, exclusions, cancellation schedule, terms and packing list from the brochure PDF (not supplied with this build).',
  'Brand spelling: the brand is “The Backpack Tribe” but the email and Instagram handle use “bagpack”.',
  'Payment gateway account and merchant details, if online payment is wanted.',
];
