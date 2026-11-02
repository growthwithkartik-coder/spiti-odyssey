import { photo, topo, ridge, stayById } from '../../tools/lib.mjs';
import { heroInset, heroCoord, destGlance } from './_cinematic.mjs';
import { destNext } from './dest-kalpa.mjs';

export default function rampur(ctx) {
  const R = ctx.root; const s = stayById('rampur');
  return {
    title: 'Rampur — a palace town on the Sutlej',
    description: 'Rampur Bushahr, about 1,000 m on the Sutlej: the Spiti Odyssey’s descent night on Day 7, in the former capital of the Bushahr state. Stay: Dev Dhara.',
    og: 'rampur-town-angle',
    body: `
<section class="phero" aria-labelledby="rp-h">
  ${photo('rampur-town-angle', { cover: true, shade: true, eager: true }, ctx)}
  ${heroCoord(['31.45° N · 77.63° E', '~1,000 m · Sutlej valley'])}
  ${heroInset(ctx, 'rampur', 'The cream-coloured towers and arches of Padam Palace in Rampur')}
  <div class="phero__in">
    <div class="crumb label"><a href="${R}">Home</a><span>/</span><a href="${R}destinations/">Destinations</a><span>/</span><span>Rampur</span></div>
    <p class="label label--amber">Destination 04 · Day 7</p>
    <h1 class="display d-xxl" id="rp-h">Rampur</h1>
    <p class="lede">After three nights at nearly four thousand metres, a town on a river, a carved palace, and air thick enough to breathe without thinking.</p>
    <div class="phero__meta"><div><span class="label">Altitude</span><b>~1,000 m</b></div><div><span class="label">Position</span><b>31.45° N · 77.63° E</b></div><div><span class="label">River</span><b>Sutlej</b></div><div><span class="label">Overnight</span><b>${s.name}</b></div></div>
  </div>
</section>

<section class="sec sec--paper" aria-labelledby="rp-a">
  ${topo(45, { cls: 'topo--ink' })}
  <div class="wrap grid" style="position:relative">
    <div class="c-1-5"><p class="label kicker">The old capital</p><h2 class="display d-l" id="rp-a">Bushahr’s river town.</h2></div>
    <div class="c-6-12 prose">
      <p>Rampur, often called Rampur Bushahr, was the winter capital of the princely state of Bushahr, which once controlled much of the trade route between the plains and Tibet along the Sutlej. The town climbs in terraces above the river, its houses stacked against the hillside.</p>
      <p>Its best-known building is the Padam Palace, built in the early twentieth century with carved wooden balconies in a blend of Himachali and colonial styles. Rampur is also known for the Lavi fair, an old trading fair held each November — not during this journey, but a sign of how long this has been a meeting point between the mountains and the plains.</p>
      <p>On this journey Rampur is a reward and a decompression chamber: the night after the longest drive, at a third of Kaza’s altitude, before the final road home.</p>
    </div>
  </div>
</section>

${destGlance(ctx, { key: 'rampur', days: 'Day 7 · night 7', alt: '~1,000 m', coord: '31.45° N, 77.63° E', landscape: ['A river town', 'Terraced houses above the fast green Sutlej, and the towers of Padam Palace.'], notice: ['The decompression night', 'At about a quarter of Kaza’s altitude, the air feels thick and the night mild.'] })}


<section class="sec sec--night" aria-labelledby="rp-b">
  <div class="wrap grid" style="align-items:center">
    <div class="c-1-7" data-reveal="mask">${photo('rampur-lalsa', { ratio: 'r-32', zoom: true }, ctx)}</div>
    <div class="c-8-12"><p class="label label--amber kicker">The descent</p><h2 class="display d-m" id="rp-b">Watching the landscape play in reverse.</h2><p class="prose" style="margin-top:18px">Day 7 runs from the cold desert of Spiti back down to the Sutlej and through Kinnaur. The bare rock gives way to pine, the pine to terraced fields and orchards, and the villages around Rampur appear green even in winter. It is the longest drive of the trip, and the most dramatic change of scene.</p><a class="link-arrow" href="${R}itinerary/#day-7">Day 7 in the itinerary</a></div>
  </div>
  <svg viewBox="0 0 1600 260" preserveAspectRatio="none" style="width:100%;height:14vw;margin-top:90px" aria-hidden="true"><path d="${ridge(950, { w: 1600, h: 260, base: .3, amp: .4 })}" fill="#10201b"/><path d="M0 230 C 300 210 500 250 800 225 S 1300 205 1600 228 L1600 260 L0 260Z" fill="#5f8496" opacity=".5"/></svg>
</section>
<section class="sec sec--paper" aria-labelledby="rp-pal">
  <div class="wrap grid" style="align-items:center">
    <div class="c-1-5"><p class="label kicker">Padam Palace</p><h2 class="display d-l" id="rp-pal">Carved wood and <em>a river below.</em></h2><p class="prose" style="margin-top:18px">The palace of the former Bushahr rulers stands at the heart of the town, its towers and carved balconies a reminder that Rampur once sat on a trade road between the plains and Tibet. On this journey it is a landmark to look out for on the last evening in the mountains, rather than a scheduled visit.</p></div>
    <div class="c-6-12" data-reveal="mask">${photo('rampur-padam-palace', { ratio: 'r-169', zoom: true }, ctx)}</div>
  </div>
</section>
${destNext(R, 'itinerary/#day-8', 'Day 8 — home', 'Rampur to Delhi')}
`,
  };
}
