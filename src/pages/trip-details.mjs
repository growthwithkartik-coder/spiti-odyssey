import { photo, esc, topo, ARROW, priceBlock, ITINERARY, STAYS, TRIP, CONTACT, priceRange, icon, elevation } from '../../tools/lib.mjs';
import { PENDING as P } from '../data/trip.mjs';

export default function tripDetails(ctx) {
  const R = ctx.root;
  return {
    title: 'Trip details & pricing',
    description: 'Trip details for The Spiti Odyssey: event starts 27 December 2026, 8 days / 7 nights, trip price ₹1,60,000–₹2,30,000 per person, the route, the stays, and what is still to be confirmed.',
    og: 'road-khab-confluence',
    body: `
<section class="phero phero--short" aria-labelledby="td-h">
  ${photo('road-khab-confluence', { cover: true, shade: true, eager: true }, ctx)}
  <div class="phero__in">
    <div class="crumb label"><a href="${R}">Home</a><span>/</span><span>Trip details</span></div>
    <h1 class="display d-xxl" id="td-h">The <em>details.</em></h1>
    <p class="lede">Dates, duration, route, stays and costs — with every unconfirmed item clearly marked, so you know exactly what is settled and what is not.</p>
  </div>
</section>

<section class="sec sec--paper" aria-labelledby="td-glance">
  <div class="wrap">
    <p class="label kicker">At a glance</p><h2 class="display d-l" id="td-glance" style="margin-bottom:40px">The Spiti Odyssey — New Year Himalayan Escape</h2>
    <div class="facts facts--5">
      <div><span class="label">Trip price</span><b>${priceRange()}</b><small>Per person · depends on the package and its confirmed inclusions</small></div>
      <div><span class="label">Event starts</span><b>27 December 2026</b><small>Availability and final schedule to be confirmed</small></div>
      <div><span class="label">Contact</span><b>Talk to the team</b><small>${esc(CONTACT.email)} · ${esc(CONTACT.phoneDisplay)}</small></div>
      <div><span class="label">Duration</span><b>8 days / 7 nights</b><small>Subject to final itinerary confirmation</small></div>
      <div><span class="label">Start &amp; end</span><b>Delhi</b><small>Route: Delhi · Kufri · Kalpa · Kaza · Rampur · Delhi</small></div>
    </div>
  </div>
</section>

<section class="sec sec--night" aria-labelledby="td-price">
  ${topo(91)}
  <div class="wrap grid" style="position:relative">
    <div class="c-1-5"><p class="label label--amber kicker">Pricing</p><h2 class="display d-l" id="td-price">What it costs.</h2>
      <p class="prose" style="margin-top:20px">The Spiti Odyssey is priced at <b>${priceRange()} per person</b>. Where you land in that range depends on the package you choose and its confirmed inclusions. Your written quote itemises each part — stays, transport, meals, permits and taxes — before any payment is requested.</p>
      <p class="note">No discount, offer or advance amount applies at present. If you see a different figure quoted elsewhere, check it with the team directly.</p></div>
    <div class="c-6-12">${priceBlock()}</div>
  </div>
</section>

<section class="sec sec--paper" aria-labelledby="td-quote">
  <div class="wrap">
    <p class="label kicker">What your quote covers</p><h2 class="display d-m" id="td-quote" style="margin-bottom:34px">Itemised, <em>in writing, before you pay.</em></h2>
    <ul class="featlist">
      <li>${icon('bed')}<h3>Stays</h3><p>Seven nights across Delhi, Kufri, Kalpa, Kaza and Rampur, with room sharing confirmed for you.</p></li>
      <li>${icon('vehicle')}<h3>Transport</h3><p>A seat in the group Hilux, or what applies if you self-drive.</p></li>
      <li>${icon('rupee')}<h3>Meals, permits &amp; taxes</h3><p>Listed line by line so the total is clear before you commit.</p></li>
    </ul>
  </div>
</section>

<section class="sec sec--night" aria-label="Altitude profile">
  <div class="wrap"><p class="label label--amber kicker">Altitude by day</p><div class="evsec__chart" data-reveal>${elevation({ id: 'td' })}</div><p class="cap" style="margin-top:14px">Approximate altitudes by day of travel — the route reaches about 3,800 m at Kaza and higher on day trips.</p></div>
</section>

<section class="sec sec--char" aria-labelledby="td-plan">
  <div class="wrap grid">
    <div class="c-1-5"><p class="label label--amber kicker">Day plan &amp; stays</p><h2 class="display d-m" id="td-plan">Where you sleep each night.</h2></div>
    <div class="c-6-12">
      <div style="overflow-x:auto"><table class="price" style="width:100%;border-collapse:collapse;font-size:14.5px">
        <caption class="sr">Day plan and overnight stays</caption>
        <thead><tr><th scope="col" style="text-align:left;padding:12px 0" class="label">Day</th><th scope="col" style="text-align:left" class="label">Route</th><th scope="col" style="text-align:left" class="label">Overnight</th></tr></thead>
        <tbody>${ITINERARY.map((d) => { const s = STAYS.find((x) => x.id === d.stay); return `<tr><td style="padding:12px 12px 12px 0;border-top:1px solid var(--line);font-family:var(--f-display);font-weight:700;font-size:20px">${String(d.n).padStart(2, '0')}</td><td style="border-top:1px solid var(--line);padding-right:12px"><a href="${R}itinerary/#day-${d.n}">${esc(d.from && d.from !== d.to ? `${d.from} → ${d.to}` : `${d.to} (local)`)}</a></td><td style="border-top:1px solid var(--line)">${s ? `${esc(s.name)}, ${esc(s.city)}` : '—'}</td></tr>`; }).join('')}
        <tr><td style="padding:12px 12px 12px 0;border-top:1px solid var(--line)" class="label">—</td><td style="border-top:1px solid var(--line)">Chandigarh</td><td style="border-top:1px solid var(--line);color:var(--amber)">JW Marriott — position awaiting confirmation</td></tr>
        </tbody></table></div>
    </div>
  </div>
</section>

<section class="sec sec--paper" aria-labelledby="td-incl">
  <div class="wrap grid">
    <div class="c-1-5"><p class="label kicker">Inclusions, exclusions &amp; packing</p><h2 class="display d-m" id="td-incl">Awaiting the brochure.</h2></div>
    <div class="c-6-12 prose">
      <p>The expedition brochure (“${esc(TRIP.brochure.name)}”) contains the full inclusions, exclusions and packing list. It was not supplied with this version of the website, so those lists are not reproduced here rather than guessed at.</p>
      <p>Until they are published, the safest assumption is that only what is written on this page is confirmed. Ask the team for the brochure directly at <a href="mailto:${CONTACT.email}">${esc(CONTACT.email)}</a> or <a href="tel:${CONTACT.phoneIntl}">${esc(CONTACT.phoneDisplay)}</a>.</p>
      <h3 class="display d-s" style="margin:34px 0 14px">General winter essentials</h3>
      <p>For any winter journey into Spiti, plan on: thermal base layers, a fleece mid-layer, a down or insulated jacket, a windproof outer shell, warm gloves, a woollen cap, thick socks, sturdy waterproof shoes with grip, sunglasses, high-SPF sunscreen and lip balm, a refillable water bottle, any personal medication, spare phone batteries or a power bank, and a government photo ID. <em>This is general guidance, not the operator’s official list.</em></p>
    </div>
  </div>
</section>

<section class="sec sec--pine" aria-labelledby="td-pending">
  <div class="wrap grid">
    <div class="c-1-5"><p class="label label--amber kicker">Transparency</p><h2 class="display d-m" id="td-pending">Still to be confirmed.</h2><p class="prose" style="margin-top:18px">These items are open. Each will be updated here as soon as the operator confirms it.</p></div>
    <div class="c-6-12"><ol class="pending">${P.map((p) => `<li><span>${esc(p)}</span></li>`).join('')}</ol>
    <div class="btn-row" style="margin-top:30px"><a class="btn" href="${R}booking/">Send an enquiry ${ARROW}</a><a class="btn btn--ghost" href="${R}booking-policy/">Booking policy</a></div></div>
  </div>
</section>`,
  };
}
