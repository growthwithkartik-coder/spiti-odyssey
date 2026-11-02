import { photo, topo, ARROW, icon, chapterMark } from '../../tools/lib.mjs';

export default function experience(ctx) {
  const R = ctx.root;
  const items = [
    ['tabo-inside', 'r-169', 'Monasteries, old and alive', 'Tabo was founded in 996 CE; Key is the largest monastery in Spiti; smaller gompas sit in almost every village. These are working religious communities, not museums. Visiting them means quiet voices, modest clothes, walking clockwise and asking before photographing people or prayer-hall interiors.', 'Days 4–6'],
    ['nako-village', 'r-45', 'Stone villages', 'Nako’s lanes of stone and timber houses, Kibber’s whitewashed terraces near Kaza, the flat-roofed farmhouses of Langza: high Himalayan architecture built to hold heat in a place where winters are long. In the off-season, villages are quiet and daily life carries on around visitors.', 'Days 4 & 6'],
    ['nako-reflection', 'r-43', 'Photography in thin air', 'High altitude and dry air give hard, clear light and deep blue skies. Sunrise in Kalpa, reflections at Nako, the bridge at Chicham and the night sky over Spiti are the moments photographers plan around. Batteries drain fast in the cold — bring spares and keep them warm.', 'Throughout'],
    ['lingti-bridge', 'r-32', 'The road as the experience', 'Long road days are part of the design, not a gap between highlights. The Hindustan–Tibet road along the Sutlej, the cliff sections of Kinnaur, river crossings in Spiti and the slow descent to Rampur are where a lot of the trip’s best conversations happen.', 'Every day'],
    ['kaza-shrines', 'r-34', 'Local exploration around Kaza', 'Two days based in Kaza make room for slower exploring: the old town and its mani walls, the Sakya monastery, and short walks when the weather and the group’s energy allow. Any specific walks will be confirmed by the operator.', 'Days 5–6'],
    ['spiti-yak', 'r-43', 'Life in a cold desert', 'Yaks, dzos and sheep, stacks of firewood and dried dung for winter fuel, fields lying fallow under snow. Spiti in deep winter shows how people live through the hardest season — a perspective most visitors never see.', 'Days 4–7'],
  ];
  return {
    title: 'Experience — monasteries, villages and mountain roads',
    description: 'What you experience on The Spiti Odyssey: monasteries at Tabo and Key, stone villages, high-altitude photography, mountain roads and life in Spiti’s cold desert.',
    og: 'mane-kogma',
    body: `
<section class="phero" aria-labelledby="ex-h">
  ${photo('mane-kogma', { cover: true, shade: true, eager: true }, ctx)}
  <div class="phero__in">
    <div class="crumb label"><a href="${R}">Home</a><span>/</span><span>Experience</span></div>
    <h1 class="display d-xxl" id="ex-h">Beyond the<br><em>landscape.</em></h1>
    <p class="lede">The mountains are the backdrop. The experience is the monasteries, the villages, the roads between them and the people you share them with.</p>
  </div>
</section>

<section class="sec sec--night" aria-labelledby="ex-four">
  <div class="wrap">
    <div class="grid" style="margin-bottom:clamp(40px,5vw,70px)"><div class="c-1-7"><p class="label label--amber kicker">What you do between the views</p><h2 class="display d-l" id="ex-four">Four threads <em>run through every day.</em></h2></div>
    <div class="c-8-12" style="align-self:end"><p class="prose">Monasteries, high villages, photography and the road itself. Below, each one is opened up in more detail — where it happens on the route and how to do it well.</p></div></div>
    <div class="four">
      ${[['monasteries', 'stupa', 'Monasteries'], ['high-villages', 'village', 'High villages'], ['photography', 'camera', 'Photography'], ['the-road-itself', 'road', 'The road itself']].map(([id, ic, h], i) => `<a class="four__item" href="#exp-${i + 1}" data-tilt>${photo(id, { ratio: 'r-23', reuse: true, cap: false, sizes: '(max-width:900px) 46vw, 23vw' }, ctx)}<span class="four__txt">${icon(ic)}<b>${h}</b></span></a>`).join('')}
    </div>
  </div>
</section>

<section class="sec sec--char" aria-labelledby="ex-also">
  <div class="wrap">
    <p class="label label--amber kicker">Also on the journey</p><h2 class="display d-m" id="ex-also" style="margin-bottom:34px">The New Year side of things.</h2>
    <ul class="featlist">
      <li>${icon('fire')}<h3>Bonfire nights</h3><p>When the sun drops behind the ridges, the group gathers around a fire. Where and when depends on the stay and the weather.</p></li>
      <li>${icon('music')}<h3>Music and a special DJ</h3><p>A special DJ travels with the group. The name, set times and venue are announced by the team.</p></li>
      <li>${icon('snow')}<h3>Snow days</h3><p>Late December brings snow to Kufri, Kalpa and Spiti — beautiful, cold, and the reason plans stay flexible.</p></li>
      <li>${icon('vehicle')}<h3>Group Hilux or self-drive</h3><p>Ride with the group or bring your own car; the team confirms seats and self-drive arrangements.</p></li>
      <li>${icon('flag')}<h3>Prayer-flag country</h3><p>From Kinnaur onward, prayer flags mark passes, bridges and rooftops — a constant companion on the road.</p></li>
      <li>${icon('thermo')}<h3>Real cold</h3><p>Nights in Spiti are far below freezing. Warm layers turn that from a hardship into part of the story.</p></li>
    </ul>
  </div>
</section>

<section class="sec sec--paper" aria-label="Mountain experiences">
  ${topo(66, { cls: 'topo--ink' })}
  <div class="wrap" style="position:relative">
    ${items.map(([img, r, h, t, when], i) => `<article class="grid" id="exp-${i + 1}" style="align-items:center;margin-bottom:clamp(60px,9vw,140px)" data-reveal>
      <div class="${i % 2 ? 'c-6-12' : 'c-1-7'}" style="${i % 2 ? 'grid-row:1' : ''}" data-reveal="mask">${photo(img, { ratio: r, zoom: true }, ctx)}</div>
      <div class="${i % 2 ? 'c-1-5' : 'c-8-12'}" style="${i % 2 ? 'grid-row:1' : ''}"><p class="label">${String(i + 1).padStart(2, '0')} · ${when}</p><h2 class="display d-m" style="margin:12px 0 18px">${h}</h2><p class="prose">${t}</p></div>
    </article>`).join('')}
  </div>
</section>

<section class="sec sec--char" aria-labelledby="ex-flags">
  <div class="wrap grid" style="align-items:center">
    <div class="c-1-5"><p class="label label--amber kicker">Etiquette</p><h2 class="display d-m" id="ex-flags">How to be a good guest in Spiti.</h2></div>
    <div class="c-6-12"><ol class="pending">
      <li><span>Walk clockwise around stupas, mani walls and prayer wheels.</span></li>
      <li><span>Ask before photographing people, and before taking pictures inside prayer halls.</span></li>
      <li><span>Dress modestly at monasteries; remove shoes where asked.</span></li>
      <li><span>Carry rubbish back out — waste disposal in high valleys is genuinely difficult.</span></li>
      <li><span>Water is precious in a cold desert, especially in winter. Use it carefully.</span></li>
    </ol></div>
    <div class="c-2-12" style="margin-top:40px" data-reveal="mask">${photo('spiti-prayer-flags', { ratio: 'r-219', zoom: true, sizes: '100vw' }, ctx)}</div>
  </div>
</section>

<section class="sec sec--night" aria-labelledby="ex-mud">
  <div class="wrap grid" style="align-items:end">
    <div class="c-1-5" data-reveal="mask">${photo('tabo-mud-walls', { ratio: 'r-34', zoom: true }, ctx)}</div>
    <div class="c-6-12" data-reveal="mask">${photo('tabo-from-top', { ratio: 'r-169', zoom: true }, ctx)}</div>
    <div class="c-6-12"><p class="label label--amber" style="margin-top:20px">Tabo · Day 4</p><h2 class="display d-m" id="ex-mud" style="margin-top:10px">Mud walls, a thousand years old.</h2><p class="prose" style="margin-top:14px">From outside, Tabo’s oldest halls look like plain earthen buildings. Inside, they hold paintings and sculptures that have survived for centuries in the dry mountain air. It is one of the quietest, most affecting places on the route.</p></div>
  </div>
</section>

<section class="sec sec--pine" aria-labelledby="ex-next">
  <div class="wrap grid"><div class="c-1-8"><h2 class="display d-l" id="ex-next">See where each experience falls.</h2></div>
  <div class="c-9-12" style="align-self:end"><div class="btn-row"><a class="btn" href="${R}itinerary/">The itinerary ${ARROW}</a><a class="btn btn--ghost" href="${R}gallery/">Gallery</a></div></div></div>
</section>`,
  };
}
