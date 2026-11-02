import { photo, topo, ARROW, stayById } from '../../tools/lib.mjs';
import { heroInset, heroCoord, destGlance } from './_cinematic.mjs';

export const destNext = (R, slug, name, sub) => `<section class="sec sec--pine" aria-label="Next on the road">
  <div class="wrap grid"><div class="c-1-8"><p class="label label--amber">Next on the road · ${sub}</p><a href="${R}${slug.includes('/') ? slug : 'destinations/' + slug + '/'}" style="text-decoration:none"><h2 class="display d-xl" style="margin-top:12px">${name} →</h2></a></div>
  <div class="c-9-12" style="align-self:end"><div class="btn-row"><a class="btn" href="${R}booking/">Plan your escape ${ARROW}</a><a class="btn btn--ghost" href="${R}itinerary/">Itinerary</a></div></div></div></section>`;

export default function kalpa(ctx) {
  const R = ctx.root; const s = stayById('kalpa');
  return {
    title: 'Kalpa — facing the Kinnaur Kailash range',
    description: 'Kalpa in Kinnaur, about 2,960 m, on a shelf facing the Kinnaur Kailash range across the Sutlej. Day 3 of The Spiti Odyssey. Stay: Kinner Villa.',
    og: 'kalpa-light',
    body: `
<section class="phero" aria-labelledby="kp-h">
  ${photo('kalpa-light', { cover: true, shade: true, eager: true }, ctx)}
  ${heroCoord(['31.54° N · 78.26° E', '~2,960 m · Kinnaur'])}
  ${heroInset(ctx, 'kalpa', 'Carved and painted temple eaves in front of a snow-dusted mountain wall at Kalpa')}
  <div class="phero__in">
    <div class="crumb label"><a href="${R}">Home</a><span>/</span><a href="${R}destinations/">Destinations</a><span>/</span><span>Kalpa</span></div>
    <p class="label label--amber">Destination 02 · Day 3</p>
    <h1 class="display d-xxl" id="kp-h">Kalpa</h1>
    <p class="lede">A village on a ledge, an orchard full of apple trees, and directly across the gorge, a range of mountains that refuses to be ignored.</p>
    <div class="phero__meta"><div><span class="label">Altitude</span><b>~2,960 m</b></div><div><span class="label">Position</span><b>31.54° N · 78.26° E</b></div><div><span class="label">Faces</span><b>Kinnaur Kailash</b></div><div><span class="label">Overnight</span><b>${s.name}</b></div></div>
  </div>
</section>

<section class="sec sec--paper" aria-labelledby="kp-a">
  ${topo(23, { cls: 'topo--ink' })}
  <div class="wrap grid" style="position:relative">
    <div class="c-1-6"><p class="label kicker">The arrival</p><h2 class="display d-l" id="kp-a">You hear about the view before you see it.</h2></div>
    <div class="c-7-12 prose">
      <p>Kalpa sits on a sloping shelf high above the Sutlej, a few kilometres up the hill from Reckong Peo, the district headquarters of Kinnaur. What makes it famous is the view east, across the river gorge, to the Kinnaur Kailash range.</p>
      <p>The range includes Kinnaur Kailash itself, at about 6,050 metres, and the higher summit of Jorkanden at around 6,470 metres. Near the top of the Kinnaur Kailash massif stands a tall rock pillar that is sacred to Hindus and Buddhists alike, which is why the mountain is also a pilgrimage route in summer.</p>
      <p>Arriving in the afternoon, the light is usually flat and the peaks are bright white. The magic happens the next morning, when the first sun hits the summits long before it reaches the village.</p>
    </div>
  </div>
</section>

${destGlance(ctx, { key: 'kalpa', days: 'Day 3 · night 3', alt: '~2,960 m', coord: '31.54° N, 78.26° E', landscape: ['Temples and orchards', 'Carved wooden temples, slate roofs and apple terraces, bare and silver in winter.'], notice: ['The dawn', 'First light reaches the Kinnaur Kailash summits long before the village.'] })}


<section class="sec sec--night" aria-labelledby="kp-b">
  <div class="wrap">
    <div class="grid" style="margin-bottom:40px"><div class="c-1-7"><p class="label label--amber kicker">Dawn, in three frames</p><h2 class="display d-l" id="kp-b">The morning to set an alarm for.</h2></div></div>
    <div class="grid" style="align-items:end">
      <div class="c-1-5" data-reveal="mask">${photo('kalpa-waking', { ratio: 'r-34', zoom: true }, ctx)}</div>
      <div class="c-6-12" data-reveal="mask">${photo('peo-kailash-peak', { ratio: 'r-169', zoom: true }, ctx)}</div>
      <div class="c-3-11" data-reveal="mask" style="margin-top:30px">${photo('kalpa-range-ridge', { ratio: 'r-219', zoom: true }, ctx)}</div>
      <div class="c-1-12" data-reveal="mask" style="margin-top:30px">${photo('kalpa-kailash-jorkanden', { ratio: 'r-31', zoom: true, sizes: '100vw' }, ctx)}</div>
    </div>
  </div>
</section>

<section class="sec sec--char" aria-labelledby="kp-c">
  ${topo(24)}
  <div class="wrap grid" style="position:relative">
    <div class="c-1-5"><p class="label label--amber kicker">Around the village</p><h2 class="display d-m" id="kp-c">Orchards, towers and old villages.</h2>
      <p class="prose" style="margin-top:20px">Kinnaur is apple country, and the slopes around Kalpa are terraced with orchards — bare and silver in winter. The old village of Chini, part of Kalpa, has traditional wooden-and-stone architecture and a tall tower-like structure, and the path to Roghi village runs along the hillside beyond.</p>
      <p class="note">Walks around Kalpa depend on time, weather and the operator’s plan for the day; none are confirmed as scheduled activities.</p></div>
    <div class="c-6-12"><div class="grid">
      <div class="c-1-7" data-reveal="mask">${photo('kalpa-orchard', { ratio: 'r-43', zoom: true }, ctx)}</div>
      <div class="c-8-12" data-reveal="mask" style="margin-top:12vh">${photo('kalpa-roghi', { ratio: 'r-34', zoom: true }, ctx)}</div>
    </div></div>
  </div>
</section>

<section class="sec sec--night" aria-labelledby="kp-d">
  <div class="wrap grid">
    <div class="c-1-7" data-reveal="mask">${photo('road-sutlej-baspa', { ratio: 'r-169', zoom: true }, ctx)}</div>
    <div class="c-8-12" style="align-self:center"><p class="label label--amber kicker">Getting there</p><h2 class="display d-m" id="kp-d">The road in.</h2><p class="prose" style="margin-top:18px">From Kufri the road descends to the Sutlej and follows it upstream into Kinnaur, passing the Baspa confluence below Kalpa. Sections of this road are carved straight into the cliff; rockfall clearance and snow can cause delays, so the timing of the day is confirmed on the road.</p><a class="link-arrow" href="${R}itinerary/#day-3">Day 3 in the itinerary</a></div>
  </div>
</section>

<section class="sec--tight sec sec--paper" aria-label="Kalpa landscape">
  <div class="wrap" data-reveal="mask">${photo('kalpa-eternal-hills', { ratio: 'r-31', zoom: true, sizes: '100vw' }, ctx)}</div>
</section>
${destNext(R, 'kaza', 'Kaza', 'Days 4–6 · into Spiti')}
`,
  };
}
