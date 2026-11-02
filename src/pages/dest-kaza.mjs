import { photo, topo, ARROW, stayById } from '../../tools/lib.mjs';
import { heroInset, heroCoord, destGlance } from './_cinematic.mjs';
import { destNext } from './dest-kalpa.mjs';

export default function kaza(ctx) {
  const R = ctx.root; const s = stayById('kaza');
  return {
    title: 'Kaza — base camp for Spiti',
    description: 'Kaza, about 3,800 m, the base for three nights in Spiti: Key Monastery, Chicham Bridge, Langza, Komik and Hikkim. Stay: Sakya Abode.',
    og: 'kaza-river',
    body: `
<section class="phero" aria-labelledby="kz-h">
  ${photo('kaza-river', { cover: true, shade: true, eager: true }, ctx)}
  ${heroCoord(['32.23° N · 78.07° E', '~3,800 m · Spiti valley'])}
  ${heroInset(ctx, 'kaza', 'Prayer flags in the foreground and Key Monastery stacked on its snowy hill near Kaza')}
  <div class="phero__in">
    <div class="crumb label"><a href="${R}">Home</a><span>/</span><a href="${R}destinations/">Destinations</a><span>/</span><span>Kaza</span></div>
    <p class="label label--amber">Destination 03 · Days 4–6</p>
    <h1 class="display d-xxl" id="kz-h">Kaza</h1>
    <p class="lede">The capital of a cold desert. Three nights at the top of the journey, with monasteries and the highest villages within reach.</p>
    <div class="phero__meta"><div><span class="label">Altitude</span><b>~3,800 m</b></div><div><span class="label">Position</span><b>32.23° N · 78.07° E</b></div><div><span class="label">Nights</span><b>4, 5 &amp; 6</b></div><div><span class="label">Overnight</span><b>${s.name}</b></div></div>
  </div>
</section>

<section class="sec sec--paper" aria-labelledby="kz-a">
  ${topo(34, { cls: 'topo--ink' })}
  <div class="wrap grid" style="position:relative">
    <div class="c-1-5"><p class="label kicker">The town</p><h2 class="display d-l" id="kz-a">Small town, enormous valley.</h2></div>
    <div class="c-6-12 prose">
      <p>Kaza is the administrative centre of the Spiti valley, set on the wide gravel floodplain of the Spiti river. It is not large — a few lanes of shops, homestays and offices, the colourful Sakya monastery, and an older quarter of whitewashed houses and carved mani stones — but in Spiti terms it is the big city.</p>
      <p>What surrounds it is the reason to come. Spiti lies in the rain shadow of the Great Himalaya, so the mountains here are bare and sculpted: ochre ridges, scree fans and eroded pillars, with snow peaks behind. In midwinter the river runs low and partly frozen, and the light is sharp and clean.</p>
      <p>Three nights here allow time for the body to adjust and for two full days of exploring around the valley.</p>
    </div>
  </div>
</section>

${destGlance(ctx, { key: 'kaza', days: 'Days 4–6 · nights 4, 5 & 6', alt: '~3,800 m', coord: '32.23° N, 78.07° E', landscape: ['Cold desert', 'Bare ochre ridges, scree fans and a braided, half-frozen river under a hard blue sky.'], notice: ['Base camp', 'Three nights here leave two full days for Key, Chicham and the high villages.'] })}


<section class="sec sec--night" aria-label="Kaza in pictures" style="padding-top:clamp(60px,7vw,110px)">
  <div class="wrap grid" style="align-items:start">
    <div class="c-1-4" data-reveal="mask">${photo('kaza-sakya-monastery', { ratio: 'r-34', zoom: true }, ctx)}</div>
    <div class="c-5-12" data-reveal="mask">${photo('kaza-floodplain', { ratio: 'r-169', zoom: true }, ctx)}</div>
    <div class="c-1-12" data-reveal="mask" style="margin-top:20px">${photo('kaza-gorge', { ratio: 'r-31', zoom: true, sizes: '100vw' }, ctx)}</div>
    <div class="c-1-6" data-reveal="mask" style="margin-top:20px">${photo('kaza-mani-stones', { ratio: 'r-43', zoom: true }, ctx)}</div>
    <div class="c-7-12" data-reveal="mask" style="margin-top:20px">${photo('key-gompa-valley', { ratio: 'r-43', zoom: true }, ctx)}</div>
  </div>
</section>

<section class="sec sec--char" id="key" aria-labelledby="kz-key">
  ${topo(35)}
  <div class="wrap" style="position:relative">
    <div class="grid" style="margin-bottom:46px"><div class="c-1-7"><p class="label label--amber kicker">Day 5 · Key Monastery</p><h2 class="display d-xl" id="kz-key">A monastery that grew up a hill.</h2></div>
    <div class="c-8-12" style="align-self:end"><p class="prose">Key (also written Kye or Kee) is the largest monastery in Spiti. Its buildings are stacked up the sides of a conical hill above the river, connected by narrow passages and steep stairs, so that from below it looks like a fortified village. Monks live and study here year round.</p></div></div>
    <div class="grid">
      <div class="c-1-7" data-reveal="mask">${photo('key-wide', { ratio: 'r-32', zoom: true }, ctx)}</div>
      <div class="c-8-12" data-reveal="mask">${photo('key-steps', { ratio: 'r-45', zoom: true }, ctx)}</div>
      <div class="c-2-8" data-reveal="mask">${photo('key-riverbed', { ratio: 'r-169', zoom: true }, ctx)}</div>
      <div class="c-9-12" style="align-self:center"><p class="prose">From the rooftops the whole upper valley opens out: the braided river, the road toward Kibber and the villages perched on terraces. Visitors are expected to dress modestly, walk clockwise around prayer wheels and stupas, and ask before photographing people or the interiors of prayer halls.</p></div>
    </div>
  </div>
</section>

<section class="sec sec--paper" aria-labelledby="kz-chi">
  <div class="wrap grid">
    <div class="c-1-5" style="align-self:center"><p class="label kicker">Day 5 · Chicham Bridge</p><h2 class="display d-l" id="kz-chi">A bridge across a very deep crack.</h2><p class="prose" style="margin-top:20px">Above Key, the road continues to Kibber and then on to Chicham across a narrow, sheer-walled gorge. The bridge that spans it, opened in 2017, is widely described as one of the highest in Asia. It turned what used to be a precarious crossing into a few seconds of very memorable driving.</p>
    <p class="note">Whether the Chicham road is open on the day depends on snow. The operator confirms access locally.</p></div>
    <div class="c-6-12" data-reveal="mask">${photo('chicham-bridge-se', { ratio: 'r-43', zoom: true }, ctx)}</div>
  </div>
</section>

<section class="sec sec--night" id="villages" aria-labelledby="kz-vil">
  <div class="wrap">
    <div class="grid" style="margin-bottom:56px"><div class="c-1-8"><p class="label label--amber kicker">Day 6 · Langza, Komik, Hikkim</p><h2 class="display d-xl" id="kz-vil">Three villages above 4,000 metres.</h2></div></div>
    <div class="place-list">
      <article data-reveal>${photo('langza-buddha', { ratio: 'r-45', zoom: true }, ctx)}<h3>Langza</h3><p class="prose">A cluster of houses beneath the pyramid of Chau Chau Kang Nilda, with a large Buddha statue looking down the valley. The surrounding slopes are known for marine fossils — a reminder that these rocks were once the floor of an ancient sea.</p></article>
      <article data-reveal style="margin-top:8vh">${photo('komic-tangyud', { ratio: 'r-45', zoom: true }, ctx)}<h3>Komik</h3><p class="prose">Often described as one of the highest villages in the world connected by a motorable road, Komik is built around its monastery and has views across the whole Spiti basin.</p></article>
      <article data-reveal>${photo('hikkim-post-office', { ratio: 'r-45', zoom: true }, ctx)}<h3>Hikkim</h3><p class="prose">Home to a post office frequently called the highest in the world. Writing a postcard here and posting it home is the most popular thing to do in the village — and it is genuinely delivered.</p></article>
    </div>
    <div class="grid" style="margin-top:60px;align-items:end">
      <div class="c-1-5" data-reveal="mask">${photo('komic-window', { ratio: 'r-11', zoom: true }, ctx)}</div>
      <div class="c-6-12" data-reveal="mask">${photo('komic-cckn-road', { ratio: 'r-169', zoom: true }, ctx)}</div>
      <div class="c-1-7" data-reveal="mask">${photo('langza-monastery-cckn', { ratio: 'r-32', zoom: true }, ctx)}</div>
      <div class="c-8-12" data-reveal="mask">${photo('hikkim-to-komic', { ratio: 'r-43', zoom: true }, ctx)}</div>
      <div class="c-2-8" data-reveal="mask">${photo('langza-shepherd', { ratio: 'r-169', zoom: true }, ctx)}</div>
      <div class="c-9-12" data-reveal="mask">${photo('langza-meadow', { ratio: 'r-34', zoom: true }, ctx)}</div>
      <div class="c-1-6" data-reveal="mask">${photo('komic-prayer-flags', { ratio: 'r-43', zoom: true }, ctx)}</div>
      <div class="c-7-12" data-reveal="mask">${photo('langza-star-trail', { ratio: 'r-43', zoom: true }, ctx)}</div>
    </div>
    <p class="note" style="margin-top:40px"><b>Winter access.</b> These villages sit on narrow roads above 4,000 metres. In winter, which of them can be reached on the day depends on snow and clearance. Nothing on this page guarantees access.</p>
  </div>
</section>

<section class="sec sec--char" aria-labelledby="kz-alt">
  <div class="wrap grid"><div class="c-1-6"><p class="label label--amber kicker">At this altitude</p><h2 class="display d-m" id="kz-alt">Go slowly. Drink water. Sleep low when you can.</h2></div>
  <div class="c-7-12 prose"><p>Kaza is high enough that most people feel the altitude at first: breathlessness on stairs, a light headache, poor sleep. The gradual climb via Kufri and Kalpa helps. Take the first evening easy, keep hydrated, avoid alcohol early on, and tell the trip lead promptly if symptoms get worse rather than better.</p><p class="note">General guidance only, not medical advice. Anyone with heart, lung or blood-pressure conditions — or who is pregnant — should consult a doctor before travelling to high altitude.</p></div></div>
</section>
${destNext(R, 'rampur', 'Rampur', 'Day 7 · the descent')}
`,
  };
}
