# The Spiti Odyssey — Cinematic Edition (October 2026)

A redesign of the existing static site, built on the same generator (`tools/build.mjs`), the same data files and the same page routes. Nothing was removed from the booking flow, enquiry form, payment scaffolding, lightbox, 3D route map or countdown.

## 1. Corrections

| Request | What changed | Where |
|---|---|---|
| Remove the hero attribution / “presents” wording | “The Backpack Tribe presents” and the “New Year Mountain Party & Trek · Operated and Managed by DemiGod House” chip are gone. The hero now carries the brand, a coordinate line and an original tagline: *“Eight days from the plains to the cold desert — and a new year that begins at altitude.”* | `src/pages/home.mjs` |
| Footer-only attribution | **Operated and Managed by DemiGod House** appears exactly once per page, in the footer base. Removed from the menu, contact page, trip-details facts and meta titles/descriptions. | `tools/build.mjs` |
| Remove ₹50,000–₹60,000 | Removed from data, every page, the footer, the price block, the booking review step (it was hard-coded in `site.js`), the stays hero, page descriptions and the policy page. A regex search for every spacing/format variant returns nothing in `public/`, `src/` or `tools/`. | `src/data/trip.mjs`, `tools/lib.mjs`, `public/assets/js/site.js`, pages |
| Show ₹1,60,000–₹2,30,000 per person | `PRICING.package.basis = 'per person'`. Shown in the hero, menu, footer, price block, booking band, mobile booking bar, stays, itinerary, trip details, booking form, policy and descriptions. The booking summary now multiplies the per-person range by the number of travellers. | data + every price component |

## 2. Supplied images — placement

All 23 files in `updated_travel_images_v2 2.zip` are used. Each is optimised to 800 px and 1600 px (never upscaled) in JPEG and WebP under `public/assets/img/supplied/`, keeping the supplied name as a slug. The build fails if any supplied image is not placed.

| Supplied file | Primary placement (by its name) | Also used on |
|---|---|---|
| Starts on a river road | Home · “This one starts on a river road” (pinned sequence, frame 2) | Odyssey, Gallery moodboard |
| Cut into the cliff, pointed at the sky | Home · “Cut into the cliff. Pointed at the sky.” (frame 3) | Gallery moodboard |
| The first light arises before the sun does | Home · First light section background | New Year Escape, Gallery |
| Snow Outside Party Mode 1 / 2 / 3 | Home · “Snow outside. Party mode on.” collage | Gallery (1, 2) |
| Your Journey, Your Way – A Toyota Hilux | Home · Transport “Your journey, your way.” | — |
| What You Do Between the Views | Home · “What you do between the views” banner (cropped to the peaks and flags) | — |
| Monasteries / High Villages / Photography / The Road Itself | Home · the four cards under “What you do between the views” | Experience, Gallery, Odyssey |
| Delhi | Home · route section start (Delhi) | Destinations (Delhi start/finish), Itinerary Day 1 |
| Kufri / Kalpa / Kaza / Rampur | Home · destination cards | Destinations index cards, each destination page hero inset |
| Hyatt Centric / Fortune / Kinner Villa / Sakya Abode / Dev Dhara / JW Marriott | Home · stays strip; Stays page (replacing the illustrations) | Itinerary overnight cards, destination “At a glance” stay cards |

Notes for the organiser (nothing was changed because of these, they are flagged for you):
- `What You Do Between the Views.jpeg` is byte-for-byte the same file as the Toyota Hilux image. It is used as named; the banner crops to the mountains so the truck is not repeated prominently. Supply a different file to replace it: put it at `public/assets/img/supplied/what-you-do-between-the-views-800|1600.(jpg|webp)`.
- `Snow Outside Party Mode 2.jpeg` carries a “momooze” watermark, and a few images carry a small sparkle mark in a corner. Please confirm the site can publish them.
- Some supplied images may not show the actual property or place (for example `Dev Dhara.jpeg` shows white stupas; `Kinner Villa.jpeg` shows an alpine-style chalet; `High Villages.jpeg` shows a green Mediterranean-looking hillside). Captions say “Image supplied for this stay” / “Supplied image” rather than claiming a verified photograph.
- Party images are captioned as mood images, not photographs of this event.

## 3. Design system

- **Palette** — slate night `#0e1114`, shale `#191c20`, moraine stone `#8e877b`, snowfield `#f1efea`, yak-wool paper `#e6e0d3`, lichen ochre `#c99a55` (single accent), glacier `#8fb3c4` (maps/altitude).
- **Type (self-hosted, OFL)** — Instrument Serif for display (mixed case, large, tight, italic for the second clause of a heading), Archivo variable for UI and body, IBM Plex Mono only for real data (coordinates, altitudes). Fonts no longer load from Google.
- **Signature motif** — the altitude profile of the journey (approximate altitudes by day, the same rounded figures already on the site). It appears in the hero, the menu, the footer horizon, a full chart on the home, destinations, odyssey, itinerary and trip-details pages, and as a per-day sparkline in the itinerary.
- **Field-journal structure** — numbered chapter marks (No. 01–11) on the home page; a vertical chapter indicator on wide screens.

## 4. Motion & interaction (all respect `prefers-reduced-motion`)

Hero letter-by-letter reveal, corner frame and altitude scale; scroll-drawn elevation profiles and contour dividers; number counters (not on prices); scroll-velocity marquee; collage and banner parallax; magnetic buttons and tilt cards (fine pointers only); sliding nav indicator; clip-path menu with staggered links; page-transition curtain for internal links; drag-to-scroll stays strip; itinerary timeline overview synced to the day being read. The existing pinned sequences, 3D terrain (re-tinted), snow, sparks, countdown and split-text entrances are kept.

## 5. Content added

Home: prologue with journey statistics, elevation section, redesigned destinations, stays strip, “between the views”, pricing. Odyssey: road pull-quote and mosaic, “six things you bring home”, altitude chart. Itinerary: one-line timeline, altitude chart, per-day sparkline and stay card, Delhi image. Destinations: Delhi start/finish section, landscape marquee, elevation profile. Each destination: hero inset, coordinates, “At a glance” band with stay card, extra photographs. Stays: how the stays work, jump index, photographs, cost note. Experience: four threads, New Year side of the journey. New Year: “the shape of it”. Gallery: organisers’ moodboard and expanded archive. Trip details: quote breakdown and altitude chart. Contact and credits updated. No activities, schedules, amenities, distances or prices were invented.

## 6. Tests run

See README §8.

## Update · 28 October 2026 — supplied images (mountain_images_same_names_3.zip) and route facts

| Supplied file | Placed in | Image id |
|---|---|---|
| Eight Days in Order 01 Delhi.jpeg | Home · Eight days, in order — card 01 Delhi | eight-days-01-delhi |
| eight. days in order kupri to kalpa jpeg.jpeg | card 03 Kufri → Kalpa | eight-days-03-kufri-to-kalpa |
| Eight Days in Order 04 Kalpa to Kaza.jpeg | card 04 Kalpa → Kaza | eight-days-04-kalpa-to-kaza |
| Eight Days in Order 06 Kaza.jpeg | card 06 Kaza | eight-days-06-kaza |
| Eight Days in Order 07 Kaza to Rampur.jpeg | card 07 Kaza → Rampur | eight-days-07-kaza-to-rampur |
| Eight Days in Order 08 Rampur to Delhi.jpeg | card 08 Rampur → Delhi | eight-days-08-rampur-to-delhi |
| Cold Mountains, Warm Fires, Wild Memories 1–4.jpeg | Bonfire nights photo stack, positions 1–4 | cold-mountains-warm-fires-wild-memories-1…4 |
| Cut into the Cliff, Painted at the Sky.jpeg | Leave the familiar behind — “Cut into the cliff” frame (file was stored sideways; rotated upright) | cut-into-the-cliff-pointed-at-the-sky |
| Warm Rooms After Cold Roads 03 Kinner Villa / 04 Sakya Abode / 05 Devdhara / 06 JW Marriott | Stay cards 03–06 (home strip, Stays page, destination/itinerary stay insets) | kinner-villa, sakya-abode, dev-dhara, jw-marriott |
| rampur.jpeg | Destination · Rampur (home card, Rampur page, destinations index) | rampur |

Not placed — needs the organiser's call: `Eight Days in Order 07 kalpa to Kaza .jpeg` (number 07 = Kaza → Rampur, name = Kalpa → Kaza; both slots already have their own named file). Day cards 02 and 05 keep their existing photographs.

Also: nav brand now reads **New Year in Spiti**; the home route map shows a fact for each stop as the golden line reaches it (desktop: inside the map; mobile: under each stop); Self-drive icon is now a steering wheel; Chandigarh stay is labelled **Chandigarh (Optional)**.
