import { photo, topo, ARROW, icon, elevation, contourDivider } from '../../tools/lib.mjs';

export default function odyssey(ctx) {
  const R = ctx.root;
  const steps = [
    ['road-to-spiti', 'I · The decision', 'Somebody has to say yes first.', 'Every journey like this begins with a small, slightly unreasonable decision: to spend the first weeks of a year somewhere with no reliable signal, real cold and roads that do not care about your calendar. The Spiti Odyssey is built for the people who say yes to that.'],
    ['road-spiti-open', 'II · The road', 'The journey is the destination, literally.', 'Over eight days the road does most of the storytelling. It climbs from the plains to pine country, follows the Sutlej into a gorge, threads along cliffs in Kinnaur and finally opens into the wide, bare valleys of Spiti. Nobody flies in halfway. You feel every metre of altitude arrive.'],
    ['spiti-desert-mountains', 'III · The cold desert', 'Where the colour goes quiet.', 'Spiti sits in the rain shadow of the Great Himalaya. Very little falls here, so the mountains are bare: ochre, grey and violet, eroded into towers and fans. In winter that palette is overlaid with snow and a sky so blue it looks retouched.'],
    ['dhankar-panorama', 'IV · The people', 'Villages that should not be possible.', 'Whitewashed houses with flat roofs, stacks of firewood, monasteries clinging to ridges. People have farmed these valleys for centuries at altitudes where most visitors get out of breath climbing stairs. Travelling through them in the off-season means seeing daily life, not a performance of it.'],
    ['spiti-river-view', 'V · The return', 'You come back down a different person. Slightly.', 'The descent to Rampur and then Delhi plays the whole landscape in reverse. By the time the plains return, the year is no longer new — but it has started with something worth remembering, which is more than most years can say.'],
  ];
  return {
    title: 'The Odyssey — the story of the journey',
    description: 'The story behind The Spiti Odyssey: a winter road journey from Delhi through Kinnaur into the cold desert of Spiti and back, designed by The Backpack Tribe.',
    og: 'spiti-mountains-pano',
    body: `
<section class="phero" aria-labelledby="od-h">
  ${photo('spiti-mountains-pano', { cover: true, shade: true, eager: true }, ctx)}
  <div class="phero__in">
    <div class="crumb label"><a href="${R}">Home</a><span>/</span><span>The Odyssey</span></div>
    <p class="label label--amber kicker">The expedition story</p>
    <h1 class="display d-xxl" id="od-h">A year that<br>starts <em>at altitude.</em></h1>
    <p class="lede">Not a holiday from your life — a different opening chapter for it. Here is the thinking behind eight days on the road to Spiti.</p>
  </div>
</section>

<section class="sec sec--paper" aria-labelledby="od-manifesto">
  ${topo(42, { cls: 'topo--ink' })}
  <div class="wrap grid" style="position:relative">
    <div class="c-1-4"><p class="label kicker">Manifesto</p></div>
    <div class="c-5-12">
      <h2 class="display d-l" id="od-manifesto">Begin the year where the world feels different.</h2>
      <div class="prose" style="margin-top:30px;columns:2 280px;column-gap:40px">
        <p>Most of us start a year the same way we end one: at a desk, behind a screen, inside the same few kilometres. The Spiti Odyssey is a deliberate interruption to that. It trades the familiar for an eight-day road journey into one of the highest inhabited valleys in India.</p>
        <p>The plan is simple. Leave Delhi. Climb through the Shimla hills to Kufri. Follow the Sutlej into Kinnaur and wake up in Kalpa facing a wall of snow peaks. Cross into Spiti by way of Nako and Tabo. Spend three nights in Kaza exploring monasteries and villages above 4,000 metres. Then descend to Rampur and come home.</p>
        <p>What happens in between is harder to put on a brochure: the conversation in the car when the gorge opens up, the cold that makes a cup of tea the best thing you have ever held, the silence at Key Monastery, the realisation that your phone has had no signal for hours and you have not noticed.</p>
        <p>We will not promise you a life-changing experience; that would be presumptuous. We will promise mountains, roads, monasteries, good company and a beginning to the year that does not look like any other.</p>
      </div>
    </div>
  </div>
</section>

<section class="story" data-story aria-label="The journey in five chapters">
  <div class="story__media">${steps.map(([img], i) => photo(img, { cover: true, shade: true, cls: i === 0 ? 'on' : '' }, ctx).replace('class="ph ph--cover', `data-story-media="${i}" class="ph ph--cover`)).join('')}</div>
  <div class="story__steps">
    ${steps.map(([, k, h, t], i) => `<div class="story__step" data-story-step="${i}"><p class="label label--amber">${k}</p><h2 class="display d-m">${h}</h2><p class="prose">${t}</p></div>`).join('')}
  </div>
</section>

<section class="sec sec--night" aria-labelledby="od-road">
  ${contourDivider(77)}
  <div class="wrap grid" style="align-items:center;margin-top:clamp(30px,4vw,60px)">
    <div class="c-1-6"><p class="pull">The road does most of the storytelling. <em>You feel every metre of altitude arrive.</em></p></div>
    <div class="c-7-12"><div class="mosaic">
      <div data-reveal="mask">${photo('starts-on-a-river-road', { ratio: 'r-34', reuse: true, zoom: true, cap: 'short', sizes: '(max-width:760px) 90vw, 22vw' }, ctx)}</div>
      <div data-reveal="mask">${photo('the-road-itself', { ratio: 'r-23', reuse: true, zoom: true, cap: 'short', sizes: '(max-width:760px) 90vw, 30vw' }, ctx)}</div>
    </div></div>
  </div>
</section>

<section class="sec sec--paper" aria-labelledby="od-what">
  <div class="wrap">
    <p class="label kicker">What the journey gives</p><h2 class="display d-l" id="od-what" style="margin-bottom:36px">Six things you <em>bring home.</em></h2>
    <ul class="featlist">
      <li>${icon('peak')}<h3>A different horizon</h3><p>From the flat plains to a wall of 6,000-metre peaks across the gorge at Kalpa.</p></li>
      <li>${icon('stupa')}<h3>Old, living places</h3><p>Tabo’s thousand-year-old halls and Key’s stacked monastery, still home to monks.</p></li>
      <li>${icon('village')}<h3>Life above 4,000 m</h3><p>Villages that farm, trade and post letters at altitudes most visitors only fly over.</p></li>
      <li>${icon('fire')}<h3>The group</h3><p>Long road days and cold nights turn a group of travellers into the people you started the year with.</p></li>
      <li>${icon('camera')}<h3>The light</h3><p>Hard, clear winter light by day and, when the cold allows, a sky full of stars.</p></li>
      <li>${icon('compass')}<h3>A first chapter</h3><p>A New Year that begins with a journey, not a resolution.</p></li>
    </ul>
  </div>
</section>

<section class="sec sec--char" aria-labelledby="od-who">
  <div class="wrap grid">
    <div class="c-1-5"><p class="label label--amber kicker">Who it suits</p><h2 class="display d-l" id="od-who">Built for curious, reasonably hardy people.</h2></div>
    <div class="c-6-12">
      <div class="facts" style="grid-template-columns:1fr 1fr">
        <div><b>Road-trip people</b><small>There are long hours in the vehicle. If you enjoy watching landscapes change, that is a feature.</small></div>
        <div><b>Cold-tolerant</b><small>Late December in Spiti is deep winter. Warm layers matter more than outfits.</small></div>
        <div><b>Altitude-aware</b><small>Kaza is around 3,800 m. Anyone with heart, lung or blood-pressure conditions should talk to a doctor before booking.</small></div>
        <div><b>Flexible</b><small>Snow and roads decide what is possible on the day. Patience is part of the kit list.</small></div>
      </div>
      <p class="note" style="margin-top:30px">This is general guidance, not medical advice. Specific fitness, age or health requirements for this departure have not yet been confirmed by the operator.</p>
    </div>
  </div>
</section>

<section class="sec sec--night" aria-label="Altitude profile">
  <div class="wrap"><p class="label label--amber kicker">The climb, at a glance</p><div class="evsec__chart" data-reveal>${elevation({ id: 'ody' })}</div><p class="cap" style="margin-top:14px">Approximate altitudes by day of travel. Not survey data.</p></div>
</section>

<section class="sec sec--pine" aria-labelledby="od-next">
  <div class="wrap grid"><div class="c-1-8"><h2 class="display d-l" id="od-next">Now read it day by day.</h2></div>
  <div class="c-9-12" style="align-self:end"><div class="btn-row"><a class="btn" href="${R}itinerary/">The itinerary ${ARROW}</a><a class="btn btn--ghost" href="${R}new-year-escape/">The New Year idea</a></div></div></div>
</section>`,
  };
}
