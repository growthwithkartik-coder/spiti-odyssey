import { photo, esc, topo, ARROW, ITINERARY, stayById, TRIP, elevation, chapterMark, priceRange } from '../../tools/lib.mjs';
import { dayStay, daySpark, heroCoord } from './_cinematic.mjs';

const STORY = {
  1: {
    img: ['delhi-india-gate-night'],
    head: 'Before the mountains, the meeting.',
    text: [
      'The odyssey begins where most journeys north do: in Delhi, among the noise you are about to trade for silence. Day one is deliberately light. Travellers arrive, the group meets, bags are checked against the cold that is coming, and everyone gets an early night.',
      'It is worth treating this evening as part of the trip rather than a formality. The people you meet tonight are the people you will watch the sun rise over Kinnaur Kailash with in two days’ time.',
    ],
  },
  2: {
    img: ['kufri-road'],
    head: 'The plains end somewhere after breakfast.',
    text: [
      'The first real road day climbs out of the Gangetic plain and into the Shimla hills. Somewhere along the way the air sharpens, the trees turn to deodar and pine, and the horizon starts to fill with ridges instead of buildings.',
      'Kufri, above Shimla at roughly 2,700 metres, is the first night in the mountains. In winter, snow on the slopes around it is common — which is beautiful, and also the first reminder that the mountains set the schedule from here on.',
    ],
  },
  3: {
    img: ['kalpa-morning-kailash'],
    head: 'Into Kinnaur, along the Sutlej.',
    text: [
      'Today the road drops to meet the Sutlej and follows it east into Kinnaur on the old Hindustan–Tibet road. The valley narrows into a gorge; the road is carved into the rock face above the water, and every bend opens a new wall of mountain.',
      'Kalpa, at around 2,960 metres, is the reward. It sits on a sloping shelf directly opposite the Kinnaur Kailash range, close enough that the summits fill the window. If there is a single sunrise to wake up for on this journey, it is tomorrow’s.',
    ],
  },
  4: {
    img: ['nako-lake-wide', 'tabo-aerial'],
    head: 'Crossing into Spiti by way of Nako and Tabo.',
    text: [
      'The longest change of scenery happens today. Beyond Kalpa the green of Kinnaur thins out and the landscape turns to bare rock, scree and sky — the beginning of the cold desert that defines Spiti.',
      'The brochure describes stops related to Nako, a stone village beside a small high-altitude lake, and Tabo, whose monastery was founded in 996 CE and still holds centuries-old murals inside its mud-walled halls. By evening the road reaches Kaza, at about 3,800 metres, which will be home for three nights.',
    ],
  },
  5: {
    img: ['key-hill', 'chicham-bridge-east'],
    head: 'A monastery on a cone of rock. A bridge over nothing.',
    text: [
      'The first full day in Spiti is spent exploring around Kaza. Key Monastery, the largest in the valley, is stacked up the sides of a conical hill above the Spiti river — a jumble of whitewashed rooms, steep stairways and prayer halls with the whole valley laid out below.',
      'Further up the side valley, Chicham Bridge spans a deep, narrow gorge between the villages of Kibber and Chicham. It is often described as one of the highest bridges in Asia, and standing on it explains why people say so.',
    ],
  },
  6: {
    img: ['langza-cckn-peak', 'hikkim-village'],
    head: 'The three highest villages of the journey.',
    text: [
      'Day six climbs to the high villages above Kaza. Langza sits beneath the pyramid of Chau Chau Kang Nilda, watched over by a large Buddha statue that faces down the valley. Komik is one of the highest villages reachable by road anywhere, with a small monastery at its heart.',
      'Hikkim is known for its post office — frequently called the highest in the world — where it is possible to send a postcard home from above 4,000 metres. In winter, how far up the road can go on the day depends entirely on snow.',
    ],
  },
  7: {
    img: ['road-karcham'],
    head: 'The long descent, river by river.',
    text: [
      'Leaving Kaza, the road retraces the Spiti river down to its confluence with the Sutlej and then follows the Sutlej back through Kinnaur. It is the longest drive of the journey, and the one where the landscape plays in reverse: desert, then forest, then warmth.',
      'Rampur, at around 1,000 metres, is the old capital of the Bushahr state and sits right on the river. After nights at altitude, the air here feels almost tropical.',
    ],
  },
  8: {
    img: ['road-sutlej-gorge'],
    head: 'Back to the plains, with a different view.',
    text: [
      'The final day leaves the Sutlej behind and descends through the hills to Delhi. Arrival time depends on the road; please wait for the operator’s confirmation before booking any onward train or flight.',
      'By the time the city reappears, it has been eight days. It will feel like considerably longer — which is the point.',
    ],
  },
};
const VARIANT = ['full', 'split', 'full', 'duo', 'full', 'duo', 'split', 'full'];

export default function itinerary(ctx) {
  const R = ctx.root;
  const chapters = ITINERARY.map((d, i) => {
    const s = STORY[d.n]; const stay = d.stay ? stayById(d.stay) : null; const v = VARIANT[i];
    const prev = ITINERARY[i - 1], next = ITINERARY[i + 1];
    const route = d.from && d.from !== d.to ? `${d.from} → ${d.to}` : d.to;
    const prog = `<div class="day__prog" aria-label="Day ${d.n} of 8">${ITINERARY.map((x) => `<i class="${x.n < d.n ? 'on' : x.n === d.n ? 'now' : ''}"></i>`).join('')}</div>`;
    const aside = `<aside class="day__aside" data-reveal>
        <div class="box"><span class="label">Overnight</span><b>${stay ? `${esc(stay.name)}, ${esc(stay.city)}` : 'No overnight — journey ends'}</b>${dayStay(ctx, stay)}</div>
        <div class="box"><span class="label">Altitude</span><b>${esc(d.alt)}</b>${daySpark(d.n)}<span class="cap">Day ${d.n} on the journey’s altitude profile (approx.)</span></div>
        <div class="box"><span class="label">Road &amp; weather note</span><p style="margin:8px 0 0;font-size:14.5px;color:var(--muted)">${esc(d.note)}</p></div>
        ${prog}
      </aside>`;
    const extra = d.n === 1 ? `<div class="day__inset" data-reveal="mask">${photo('delhi', { ratio: 'r-34', reuse: true, cap: 'short', sizes: '(max-width:900px) 70vw, 24vw' }, ctx)}</div>` : '';
    const body = `<ul class="day__places" aria-label="Places">${d.places.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
        <h3 class="display d-m" style="margin-bottom:24px">${esc(s.head)}</h3>
        <div class="prose">${s.text.map((t) => `<p>${esc(t)}</p>`).join('')}</div>${extra}`;
    const nav = `<nav class="day__nav" aria-label="Day navigation">${prev ? `<a href="#day-${prev.n}"><span class="label">← Day ${prev.n}</span><b>${esc(prev.to)}</b></a>` : `<a href="${R}the-odyssey/"><span class="label">← Before the road</span><b>The story</b></a>`}${next ? `<a class="next" href="#day-${next.n}"><span class="label">Day ${next.n} →</span><b>${esc(next.from && next.from !== next.to ? next.to : next.to + ' (local)')}</b></a>` : `<a class="next" href="${R}booking/"><span class="label">Ready? →</span><b>Plan your escape</b></a>`}</nav>`;
    const title = `<p class="label label--amber">${esc(route)}</p><h2 class="day__n"><span class="sr">Day </span>${String(d.n).padStart(2, '0')}<small>Day</small></h2><p class="display d-s" style="margin-top:14px">${esc(d.title)}</p>`;
    if (v === 'full') return `<article class="day" id="day-${d.n}" data-day="${d.n}">
      <header class="day__head">${photo(s.img[0], { cover: true, shade: true }, ctx)}<div class="wrap">${title}</div></header>
      <div class="wrap grid day__body"><div class="c-1-7">${body}</div><div class="c-9-12">${aside}</div><div class="c-1-12">${nav}</div></div>
    </article>`;
    if (v === 'split') return `<article class="day day--split" id="day-${d.n}" data-day="${d.n}">
      <div class="wrap grid day__body" style="padding-top:calc(var(--nav-h) + 50px)">
        <div class="c-1-5">${title}<div style="margin-top:36px">${aside}</div></div>
        <div class="c-6-12"><div data-reveal="mask">${photo(s.img[0], { ratio: 'r-45', zoom: true }, ctx)}</div><div style="margin-top:36px">${body}</div></div>
        <div class="c-1-12">${nav}</div></div>
    </article>`;
    return `<article class="day day--alt" id="day-${d.n}" data-day="${d.n}">
      <div class="wrap grid day__head">${topo(500 + d.n)}<div class="c-1-12" style="position:relative">${title}</div></div>
      <div class="wrap"><div class="day__duo"><div data-reveal="mask">${photo(s.img[0], { ratio: 'r-32', zoom: true }, ctx)}</div><div data-reveal="mask">${photo(s.img[1], { ratio: 'r-45', zoom: true }, ctx)}</div></div></div>
      <div class="wrap grid day__body"><div class="c-1-7">${body}</div><div class="c-9-12">${aside}</div><div class="c-1-12">${nav}</div></div>
    </article>`;
  }).join('');

  return {
    title: 'Itinerary — eight days from Delhi to Spiti',
    description: 'Day-by-day itinerary for The Spiti Odyssey: Delhi, Kufri, Kalpa, Nako and Tabo toward Kaza, Key Monastery, Chicham Bridge, Langza, Komik, Hikkim, Rampur and back to Delhi.',
    og: 'key-panorama',
    body: `
<section class="phero" aria-labelledby="it-h">
  ${photo('key-panorama', { cover: true, shade: true, eager: true }, ctx)}
  ${heroCoord(['Delhi → Kufri → Kalpa → Kaza → Rampur → Delhi', 'From ~215 m to ~4,400 m and back'])}
  <div class="phero__in">
    <div class="crumb label"><a href="${R}">Home</a><span>/</span><span>Itinerary</span></div>
    <h1 class="display d-xxl" id="it-h">Eight days,<br><em>one road.</em></h1>
    <p class="lede">From the plains of Delhi to villages above 4,000 metres and back again. Each day below has its own chapter: where you go, where you sleep, and what the road might do.</p>
    <div class="phero__meta">
      <div><span class="label">Duration</span><b>8 days / 7 nights</b></div>
      <div><span class="label">Event starts</span><b>27 December 2026</b></div>
      <div><span class="label">Trip price · per person</span><b>${priceRange()}</b></div>
    </div>
  </div>
</section>
<section class="sec sec--night itov" aria-labelledby="it-ov">
  <div class="wrap">
    ${chapterMark(0, 'The whole journey on one line')}
    <div class="grid" style="margin-bottom:clamp(30px,4vw,60px)"><div class="c-1-7"><h2 class="display d-l" id="it-ov">Eight days, <em>one continuous road.</em></h2></div>
    <div class="c-8-12" style="align-self:end"><p class="prose">Select a day to jump to its chapter. The line underneath traces the approximate altitude of each day — two steps up through Kufri and Kalpa, three nights high in Spiti, then one long descent.</p></div></div>
    <ol class="tl" data-tl>${ITINERARY.map((d) => `<li><a href="#day-${d.n}" data-tl-day="${d.n}"><b>${String(d.n).padStart(2, '0')}</b><strong>${esc(d.from && d.from !== d.to ? d.to : d.to + (d.n > 1 ? ' (local)' : ''))}</strong><span>${esc(d.alt)}</span></a></li>`).join('')}</ol>
    <div class="itov__ev" data-reveal>${elevation({ id: 'itin' })}</div>
  </div>
</section>

<section class="sec--tight sec sec--paper" aria-label="How to read this itinerary">
  <div class="wrap grid">
    <div class="c-1-6"><p class="label kicker">Read this first</p><p class="prose">The route structure comes from the expedition brochure. Exact driving times, distances, meal schedules and access to high villages are deliberately <em>not</em> stated: in winter they depend on snow, road clearance and weather on the day, and the operator will confirm them before departure.</p></div>
    <div class="c-7-12"><div class="note note--box" style="color:rgba(21,24,26,.8)"><b style="color:var(--ink)">Route note — Chandigarh.</b> The latest stay list includes the JW Marriott in Chandigarh, but the brochure’s eight-day route runs Rampur → Delhi on the final day with no Chandigarh night. No day has been added or removed here. Where Chandigarh fits will be updated once the operator confirms it. <a href="${R}stays/#chandigarh">See the stay</a>.</div></div>
  </div>
</section>
${chapters}
<nav class="dayrail" data-dayrail aria-label="Jump to day"><ol>${ITINERARY.map((d) => `<li><a href="#day-${d.n}" data-rail="${d.n}"><b>${String(d.n).padStart(2, '0')}</b><span>${esc(d.to)}</span></a></li>`).join('')}</ol></nav>
<section class="sec sec--pine" aria-labelledby="it-next">
  <div class="wrap grid"><div class="c-1-7"><h2 class="display d-l" id="it-next">Questions about a particular day?</h2><p class="prose" style="margin-top:18px">Ask the team about road conditions, altitude or anything else before you commit. Enquiries are answered with confirmed details only.</p></div>
  <div class="c-8-12" style="align-self:end"><div class="btn-row"><a class="btn" href="${R}booking/">Send an enquiry ${ARROW}</a><a class="btn btn--ghost" href="${R}trip-details/">Trip details</a></div></div></div>
</section>`,
  };
}
