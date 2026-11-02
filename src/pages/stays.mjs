import { photo, esc, ARROW, STAYS, ITINERARY, priceBlock, TBC, priceRange, icon, contourDivider } from '../../tools/lib.mjs';
import { STAY_IMG, DEST_IMG } from './_cinematic.mjs';

export default function stays(ctx) {
  const R = ctx.root;
  const variants = ['stay--a', 'stay--b', 'stay--c', 'stay--b', 'stay--a', 'stay--b'];
  const blocks = STAYS.map((s, i) => {
    const nights = s.nights.length ? (s.nights.length > 1 ? `Nights ${s.nights.join(', ')}` : `Night ${s.nights[0]}`) : 'Not yet placed in the itinerary';
    const days = s.nights.map((n) => ITINERARY.find((d) => d.n === n)).filter(Boolean);
    return `<div class="stay-wrap" id="${s.id}">
    <article class="stay ${variants[i]}" aria-labelledby="st-${s.id}">
      <div class="stay__art stay__photo" data-reveal="mask" data-tilt>${photo(STAY_IMG[s.id], { ratio: 'r-45', zoom: true, alt: `${s.name}, ${s.city}`, sizes: '(max-width:900px) 92vw, 45vw', reuse: true }, ctx)}<span class="stay__badge">${esc(s.city)}${s.nights.length ? ` · ${s.nights.length > 1 ? 'nights ' + s.nights[0] + '–' + s.nights[s.nights.length - 1] : 'night ' + s.nights[0]}` : ''}</span></div>
      <div class="stay__txt" data-reveal>
        <span class="stay__num" aria-hidden="true">0${i + 1}</span>
        <p class="label label--amber" style="margin-top:16px">${esc(s.city)}${s.id === 'chandigarh' ? ' (Optional)' : ''}</p>
        <h2 class="display d-l" id="st-${s.id}">${esc(s.name)}</h2>
        ${s.flag ? `<p class="flag" style="margin-top:16px">${esc(s.flag)}</p>` : ''}
        <p class="prose" style="margin-top:20px">${esc(s.role)}</p>
        <dl>
          <dt>Location</dt><dd>${esc(s.city)}</dd>
          <dt>In the itinerary</dt><dd>${esc(nights)}</dd>
          <dt>Booking status</dt><dd class="${s.confirmed ? '' : 'tbc'}">${s.confirmed ? 'Confirmed' : TBC}</dd>
          <dt>Room sharing</dt><dd class="${s.sharing ? '' : 'tbc'}">${s.sharing ? esc(s.sharing) : TBC}</dd>
          <dt>Room categories &amp; amenities</dt><dd class="tbc">Shared by the team with your quote</dd>
          <dt>Cost</dt><dd>Included in the trip price range (${priceRange()} per person)</dd>
        </dl>
        <div class="btn-row">${days.length ? days.map((d) => `<a class="btn btn--ghost btn--sm" href="${R}itinerary/#day-${d.n}">Day ${d.n}</a>`).join('') : `<a class="btn btn--ghost btn--sm" href="${R}itinerary/">See the route note</a>`}</div>
      </div>
    </article></div>`;
  }).join('');
  return {
    title: 'Stays — six properties on the route',
    description: 'The accommodation collection for The Spiti Odyssey: Hyatt Centric (Delhi), Fortune (Kufri), Kinner Villa (Kalpa), Sakya Abode (Kaza), Dev Dhara (Rampur) and JW Marriott (Chandigarh). Trip price ₹1,60,000–₹2,30,000 per person.',
    og: 'kalpa-town',
    body: `
<section class="phero" aria-labelledby="sy-h">
  ${photo('kalpa-town', { cover: true, shade: true, eager: true }, ctx)}
  <div class="phero__in">
    <div class="crumb label"><a href="${R}">Home</a><span>/</span><span>Stays</span></div>
    <p class="label label--amber kicker">The accommodation collection</p>
    <h1 class="display d-xxl" id="sy-h">Warm rooms<br>after cold roads.</h1>
    <p class="lede">Six properties are on the current stay list, from a city hotel in Delhi to a guesthouse base in the cold desert at Kaza.</p>
    <div class="phero__meta"><div><span class="label">Properties</span><b>6</b></div><div><span class="label">Nights</span><b>7</b></div><div><span class="label">Trip price · per person</span><b>${priceRange()}</b></div></div>
  </div>
</section>

<section class="sec sec--paper" aria-labelledby="sy-honest">
  <div class="wrap grid">
    <div class="c-1-5"><p class="label kicker">How the stays work</p><h2 class="display d-m" id="sy-honest">Six nights out of the cold, <em>one city night either side.</em></h2></div>
    <div class="c-6-12 prose">
      <p>The stay list moves with the landscape: an international hotel in Delhi for the first night, a hill hotel above Shimla, a chalet-style villa in Kalpa, a traditional Spitian guesthouse in Kaza for three nights, and a riverside night in Rampur on the way down. The JW Marriott in Chandigarh is also on the list; where it fits is explained below.</p>
      <p>Each property is shown with the image supplied for it. Booking status, room sharing and room categories are confirmed by the team with every traveller — until then they are marked as to be confirmed rather than assumed.</p>
    </div>
    <div class="c-1-12" style="margin-top:clamp(30px,4vw,60px)">
      <ul class="featlist">
        <li>${icon('bed')}<h3>Warm rooms</h3><p>Each night ends indoors and out of the wind — the point of a winter road journey that does not involve tents.</p></li>
        <li>${icon('altitude')}<h3>Paced for altitude</h3><p>Kufri and Kalpa sit between the plains and Kaza, so you never sleep high without stepping up first.</p></li>
        <li>${icon('rupee')}<h3>In the trip price</h3><p>Stays are part of the ${priceRange()} per-person trip price and are itemised in your written quote.</p></li>
      </ul>
    </div>
  </div>
</section>

<section class="sec sec--char stayindex" aria-label="Jump to a stay">
  <div class="wrap">
    <ol class="stayindex__list">${STAYS.map((st, i) => `<li><a href="#${st.id}"><span class="stayindex__n">0${i + 1}</span><span class="stayindex__city">${esc(st.city)}${st.id === 'chandigarh' ? ' (Optional)' : ''}</span><b>${esc(st.name)}</b></a></li>`).join('')}</ol>
  </div>
</section>

<section aria-label="The six stays">${blocks}</section>

<section class="sec sec--night" aria-labelledby="sy-chd">
  <div class="wrap grid">
    <div class="c-1-5"><p class="label label--amber kicker">The Chandigarh question</p><h2 class="display d-m" id="sy-chd">A sixth stay, and an open question.</h2></div>
    <div class="c-6-12 prose"><p>The JW Marriott in Chandigarh is on the latest stay list, but the brochure route runs from Rampur straight back to Delhi on Day 8, with no night in Chandigarh. Rather than quietly adding or removing a day, the itinerary on this site is left exactly as the brochure describes it until the operator confirms how the Chandigarh stay fits — for example as an extra night on the way back, or as an option.</p></div>
    <div class="c-1-12" style="margin-top:30px" data-reveal="mask">${photo('chandigarh-shivalik', { ratio: 'r-31', sizes: '100vw', alt: 'The Shivalik hills seen across Sukhna Lake, Chandigarh' }, ctx)}</div>
  </div>
</section>

<section class="sec sec--paper" aria-labelledby="sy-price">
  <div class="wrap grid">
    <div class="c-1-5"><p class="label kicker">Cost</p><h2 class="display d-l" id="sy-price">Stays are part of <em>one trip price.</em></h2><p class="prose" style="margin-top:20px">There is no separate accommodation charge on this page. The Spiti Odyssey is priced at ${priceRange()} per person, and your written quote itemises the stays alongside transport, meals, permits and taxes.</p></div>
    <div class="c-6-12">${priceBlock()}<div class="btn-row" style="margin-top:22px"><a class="btn btn--ink" href="${R}booking/">Enquire about the stays ${ARROW}</a><a class="btn btn--ghost" href="${R}trip-details/">Full trip details</a></div></div>
  </div>
</section>`,
  };
}
