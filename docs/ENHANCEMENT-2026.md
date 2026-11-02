> **Historical note.** This file describes the earlier October 2026 enhancement. Some items below were changed by the Cinematic Edition — see `docs/CINEMATIC-EDITION.md`. In particular the hero attribution chip was removed (the attribution now appears only in the footer) and prices are now stated per person.

# New Year Mountain Party & Trek — enhancement log (October 2026)

Built on top of `Spiti_Odyssey_New_Year_Website_1.zip`. Nothing was deleted: all 207 original files are still in the project, the 148 bundled image files are byte-for-byte unchanged, and every original section, heading and photograph is still on its page (checked by script against the original build).

## Event details now used by the site

| Item | Value | Where to change it |
|---|---|---|
| Event name | Spiti Odyssey — New Year Mountain Party & Trek | `TRIP.eventName` in `src/data/trip.mjs` |
| Event start date | 27 December 2026 (no end date shown) | `TRIP.departure` (`day`, `year`, `iso` for the countdown) |
| Package price | ₹1,60,000 – ₹2,30,000 (₹1.60 lakh – ₹2.30 lakh) | `PRICING.package.from` / `.to` |
| Organiser | Operated and Managed by DemiGod House | footer, menu, hero chip, trip details |
| Email | dev@demigodhouse.com (`mailto:`) | `CONTACT.email`, `ENQUIRY.to` |
| Phone | +91 83558 97803 (`tel:+918355897803`) | `CONTACT.phone*` |
| WhatsApp | https://wa.me/918355897803 (pre-filled message) | `CONTACT.whatsapp` — set to `null` to hide every WhatsApp button |

Run `node tools/build.mjs` after any change.

## Added

**Home page: seven new sections, slotted between the original ones (original order kept)**

1. **A New Year above the ordinary.** Full-height snowy valley with parallax, a slowly rotating compass, falling snow, word-by-word headline entrance, and a live countdown to 27 Dec 2026. After the date passes, the countdown shows a "began on" message instead of negative numbers. *(after the hero)*
2. **Snow outside. Party mode on.** (`#party`) Animated party light beams, floating light orbs, neon outline type and three party photos. *(after "The first light")*
3. **Cold mountains. Warm fires. Wild memories.** Flickering fire-glow, a canvas of rising sparks, and four bonfire and cabin-light photos.
4. **A special DJ will be travelling with us.** Animated equaliser bars, a spinning vinyl graphic and two DJ-equipment photos. It does not name the DJ, give their genre or give set times.
5. **Your journey, your way.** (`#transport`) Hilux group transport and the self-drive option, an animated route line, a rotating compass and a Hilux photo. *(after the route map)*
6. **The Himalayan experience.** An 11-photo editorial gallery with mood filters (Snow, Trek, Stays, Nights), staggered reveals, hover zoom and the existing full-screen viewer. *(after "Beyond the landscape")*
7. **One journey. Mountain magic. New Year energy.** Fireworks background with parallax, soft party beams, snow and a ridge silhouette.
8. **Pricing & booking band.** "Spiti Odyssey — New Year 2026 · Starting from ₹1,60,000 · Packages up to ₹2,30,000" with Book, WhatsApp and Call buttons. *(before the final invitation)*

**Hero (enhanced, not replaced):** a "New Year Mountain Party & Trek · Operated and Managed by DemiGod House" chip, light particles, a large rotating compass, the event date, and a fourth fact for the package price.

**Every page:**
- A scroll progress bar.
- A "The Party" link in the main navigation.
- A floating WhatsApp button.
- A sticky "Book" bar on mobile (hidden on the booking page).
- A footer block headed "Operated and Managed by DemiGod House", showing the event, the event date, email, phone, WhatsApp and booking links.

**Booking page:**
- The pricing band.
- New required **Package preference** field. Its options are "Starting package — from ₹1,60,000", "Upper range — up to ₹2,30,000" and "Not sure yet". These are budget preferences, not invented tiers.
- New required **How will you travel?** field: Hilux, self-drive or not sure.
- A live price summary.
- A WhatsApp card.
- Both new fields are validated, shown in the review step, included in the email text, and stored by `server/server.mjs`.

**Other pages:**
- New Year Escape page: a countdown and the pricing band.
- Gallery page: a link band to the party and transport sections.
- Contact page: a WhatsApp link and the DemiGod House line.

**Photographs:** 28 new Commons photographs, all CC or public-domain licensed and each credited in its caption and on `/credits/`. Each one is used once. Every caption says that the photo shows the mood and is **not** the event, venue, DJ or vehicle.

**Motion:** all of it respects `prefers-reduced-motion`. Scrolling is never hijacked, and the canvases pause when they are off screen.

## Existing text changed (only where the brief required it)

| File | Change | Reason |
|---|---|---|
| `trip.mjs` | departure 13 February (year TBC) → 27 December 2026; contact email/phone → DemiGod House; enquiry address → dev@demigodhouse.com; first pending item and the February access note reworded | Date and contact instruction |
| all pages | "Proposed departure · 13 February · year to be confirmed" → "Event starts · 27 December 2026" | Date instruction |
| kufri, kaza, kalpa, itinerary, experience, odyssey, trip-details, gallery | "in February" → "in winter / late December" (season wording only) | They described the old travel month |
| `home.mjs` "First light" | "Not a countdown, not a party" → "The countdown and the party come after dark…" | Would contradict the party brief |
| `home.mjs` practical details | The intro now states the published package range | Pricing instruction |
| `new-year.mjs` | The "Not a party. Not a countdown." lede and the "There is no fireworks show or party on the itinerary" paragraph rewritten; the 13 February paragraph rewritten for 27 December | Would contradict the party brief and date |
| `booking.mjs` | Consent line: "The Backpack Tribe may contact me" → "DemiGod House, which operates and manages the Spiti Odyssey, may contact me" | Enquiries now go to DemiGod House |
| `trip-details.mjs` | Operator → "Operated & managed by DemiGod House" (brand The Backpack Tribe kept) | Organiser instruction |
| `contact.mjs` | Title and meta description use the new contact details | Old email and phone were in the description |
| `booking-policy.mjs` | Departure line updated and package range added | Date and pricing instruction |

The Backpack Tribe branding, its Instagram link and the old contact details (kept as `CONTACT.previous` in the data file) were **not** removed.

## Not changed

- Payments are still disabled. The Razorpay server-side order/verify pattern in `server/` and `public/assets/js/payments.js` is untouched, and no credentials were added. The booking page still says no payment is taken online.
- The 3D route map, the "Leave the familiar" pinned sequence, the horizontal day scroller, the stays artwork, the lightbox and the enquiry email/endpoint flow all work as before.
