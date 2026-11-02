import { photo, topo, ARROW, esc, elevation, marquee, icon } from '../../tools/lib.mjs';
import { heroCoord } from './_cinematic.mjs';
import { schematic } from './home.mjs';

export default function destinations(ctx) {
  const R = ctx.root;
  const cards = [
    ['kufri', 'kufri', 'Kufri', 'Day 2 · ~2,700 m', 'Pine ridges and the first snow line, above Shimla.'],
    ['kalpa', 'kalpa', 'Kalpa', 'Day 3 · ~2,960 m', 'Orchards, old towers and the Kinnaur Kailash range.'],
    ['kaza', 'kaza', 'Kaza', 'Days 4–6 · ~3,800 m', 'Base for Key, Chicham, Langza, Komik and Hikkim.'],
    ['rampur', 'rampur', 'Rampur', 'Day 7 · ~1,000 m', 'A palace town on the Sutlej, at the bottom of the descent.'],
  ];
  const alts = [['Delhi', 215], ['Kufri', 2700], ['Kalpa', 2960], ['Nako', 3600], ['Tabo', 3280], ['Kaza', 3800], ['Key', 4100], ['Langza', 4400], ['Rampur', 1000], ['Delhi', 215]];
  return {
    title: 'Destinations — Kufri, Kalpa, Kaza and Rampur',
    description: 'The four overnight destinations of The Spiti Odyssey — Kufri, Kalpa, Kaza and Rampur — plus Nako, Tabo and the high villages of Spiti.',
    og: 'kibber-kanamo',
    body: `
<section class="phero" aria-labelledby="ds-h">
  ${photo('kibber-kanamo', { cover: true, shade: true, eager: true }, ctx)}
  ${heroCoord(['Kufri 31.10° N · Kalpa 31.54° N', 'Kaza 32.23° N · Rampur 31.45° N'])}
  <div class="phero__in">
    <div class="crumb label"><a href="${R}">Home</a><span>/</span><span>Destinations</span></div>
    <h1 class="display d-xxl" id="ds-h">Four stops.<br><em>Four climates.</em></h1>
    <p class="lede">The Spiti Odyssey crosses the Himalaya’s full range of moods in a week: temperate pine hills, the gorge country of Kinnaur, the cold desert of Spiti and a warm river valley on the way home.</p>
  </div>
</section>

<section class="sec sec--night" aria-label="Destination index">
  <div class="wrap">
    <div class="dest-index">
      ${cards.map(([k, img, n, meta, line]) => `<a class="dest-card" href="${R}destinations/${k}/" data-reveal data-tilt>
        ${photo(img, { ratio: '', cap: false, shade: true, reuse: true, sizes: '(max-width:760px) 100vw, 50vw' }, ctx)}
        <div class="dest-card__txt"><div><p class="label label--amber">${meta}</p><h3>${n}</h3><p style="margin:10px 0 0;color:var(--muted);max-width:34ch">${line}</p></div>${ARROW.replace('<svg', '<svg width="34" height="34"')}</div>
      </a>`).join('')}
    </div>
    <p class="cap" style="margin-top:18px">Destination images supplied by the organisers. Route photographs on each destination page are credited to Wikimedia Commons contributors — see the <a href="${R}credits/">credits page</a>.</p>
  </div>
</section>

${marquee(['Pine hills', 'Kinnaur gorge', 'Cold desert', 'River valley', 'Snow line', 'Monasteries', 'High villages'], { sep: '◆' })}

<section class="sec sec--paper" aria-labelledby="ds-delhi">
  <div class="wrap grid" style="align-items:center">
    <div class="c-1-5" data-reveal="mask">${photo('delhi', { ratio: 'r-34', reuse: true, zoom: true, sizes: '(max-width:900px) 90vw, 34vw' }, ctx)}</div>
    <div class="c-7-12"><p class="label kicker">Start and finish · Days 1 &amp; 8</p><h2 class="display d-l" id="ds-delhi">Delhi, <em>the starting line.</em></h2>
      <p class="prose" style="margin-top:20px">Every journey north begins in the capital — Mughal domes, winter fog over the ring roads and the last flat horizon for a week. Day one is for arriving, meeting the group and an early night at the Hyatt Centric; day eight brings everyone back down to the plains.</p>
      <p class="coord">28.61° N · 77.21° E · ~215 m</p>
      <div class="btn-row" style="margin-top:22px"><a class="btn btn--ink" href="${R}itinerary/#day-1">Day 1 ${ARROW}</a><a class="btn btn--ghost" href="${R}stays/#delhi">The Delhi stay</a></div></div>
  </div>
</section>

<section class="sec sec--char" aria-labelledby="ds-alt">
  ${topo(77)}
  <div class="wrap" style="position:relative">
    <div class="grid"><div class="c-1-7"><p class="label label--amber kicker">The altitude profile</p><h2 class="display d-l" id="ds-alt">Up three and a half kilometres. Then down.</h2></div>
    <div class="c-8-12" style="align-self:end"><p class="prose">Approximate heights of the places on the route. The body notices every step of this — which is why the journey spends a night at Kufri and Kalpa before sleeping at Kaza’s altitude.</p></div></div>
    <div class="evsec__chart" data-reveal>${elevation({ id: 'dest' })}</div>
    <p class="cap" style="margin-top:18px">Approximate altitudes, rounded. Not survey data.</p>
  </div>
</section>

<section class="sec sec--pine" aria-labelledby="ds-map">
  <div class="wrap grid">
    <div class="c-1-5"><p class="label label--amber kicker">How they connect</p><h2 class="display d-m" id="ds-map">A loop through Kinnaur and Spiti.</h2>
      <p class="prose" style="margin-top:20px">The outbound road follows the Sutlej into Kinnaur, climbs past Nako into Spiti and reaches Kaza. The return retraces the river valleys to Rampur. In winter this Kinnaur approach is the usual way into Spiti, as the high passes on the northern side are closed by snow.</p>
      <p class="note">The diagram is illustrative and not to scale. Delhi has been drawn much closer than it really is.</p></div>
    <div class="c-6-12" style="min-height:420px;position:relative" data-reveal>${schematic('static')}</div>
  </div>
</section>

<section class="sec sec--paper" aria-labelledby="ds-between">
  <div class="wrap">
    <div class="grid" style="margin-bottom:50px"><div class="c-1-7"><p class="label kicker">Between the overnight stops</p><h2 class="display d-l" id="ds-between">The places on the way matter too.</h2></div></div>
    <div class="place-list">
      <article data-reveal><p class="label">Day 4</p><h3>Nako &amp; Tabo</h3><p class="prose">A lake village in upper Kinnaur and a monastery founded in 996 CE — the two places the brochure links to the crossing into Spiti. <a href="${R}itinerary/#day-4">Day 4</a></p></article>
      <article data-reveal><p class="label">Day 5</p><h3>Key &amp; Chicham</h3><p class="prose">Spiti’s largest monastery, and a bridge strung across a gorge between two high villages. <a href="${R}destinations/kaza/#key">Read more</a></p></article>
      <article data-reveal><p class="label">Day 6</p><h3>Langza, Komik, Hikkim</h3><p class="prose">Three villages above 4,000 metres, famous for a giant Buddha, a hilltop monastery and a post office. <a href="${R}destinations/kaza/#villages">Read more</a></p></article>
    </div>
  </div>
</section>`,
  };
}
