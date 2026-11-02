import { photo, topo, ARROW, countdown, bookingBand, icon, priceRange, marquee } from '../../tools/lib.mjs';

export default function newYear(ctx) {
  const R = ctx.root;
  return {
    title: 'New Year Escape — a different first chapter',
    description: 'The idea behind the New Year Himalayan Escape: beginning the year with a winter journey into Kinnaur and Spiti instead of the usual routine. New Year Mountain Party & Trek, event starts 27 December 2026.',
    og: 'key-snow',
    body: `
<section class="phero" aria-labelledby="ny-h">
  ${photo('key-snow', { cover: true, shade: true, eager: true }, ctx)}
  <div class="phero__in">
    <div class="crumb label"><a href="${R}">Home</a><span>/</span><span>New Year Escape</span></div>
    <p class="label label--amber kicker">The new-year concept</p>
    <h1 class="display d-xxl" id="ny-h">New year.<br><em>New altitude.</em></h1>
    <p class="lede">A party in the snow and a countdown in the mountains — and around them, the last real journey of the year, taken while the mountains are at their quietest and most dramatic.</p>
  </div>
</section>

<section class="sec sec--paper" aria-labelledby="ny-a">
  ${topo(71, { cls: 'topo--ink' })}
  <div class="wrap grid" style="position:relative">
    <div class="c-1-5"><p class="label kicker">The idea</p><h2 class="display d-l" id="ny-a">Resolutions fade by February. Mountains don’t.</h2></div>
    <div class="c-6-12 prose">
      <p>By the middle of February, most new-year energy has quietly evaporated. The gym membership is unused, the journal is blank after page four, and the year already feels like the last one.</p>
      <p>The New Year edition of the Spiti Odyssey starts on 27 December 2026, so the old year ends and the new one begins in the mountains. Instead of a resolution, it offers an experience: eight days of road, snow, monasteries and mornings that will still be vivid next December.</p>
      <p>To be clear about what this is: the New Year edition is a winter journey with a mountain party at its heart — bonfire nights, music and a special DJ travelling with the group. The exact timing and venue of the celebration on the route are still to be confirmed, and no fireworks show is promised. The sunrise over Kinnaur Kailash is still part of the deal.</p>
    </div>
  </div>
</section>

<section class="sec sec--char" aria-labelledby="ny-shape">
  <div class="wrap">
    <div class="grid" style="margin-bottom:40px"><div class="c-1-7"><p class="label label--amber kicker">The shape of it</p><h2 class="display d-l" id="ny-shape">Days for the mountains. <em>Nights for the group.</em></h2></div>
    <div class="c-8-12" style="align-self:end"><p class="prose">The New Year edition keeps the full eight-day route and adds a celebration at its heart. What is confirmed is below; timings and venues are shared by the team before departure.</p></div></div>
    <ul class="featlist">
      <li>${icon('road')}<h3>Mountain roads by day</h3><p>Kinnaur’s cliff roads, the Sutlej and the cold desert of Spiti, one stage at a time.</p></li>
      <li>${icon('fire')}<h3>Bonfires after dark</h3><p>Warm hands, stories from the road and the group together when the temperature drops.</p></li>
      <li>${icon('music')}<h3>A special DJ</h3><p>Travelling with the group; the name is announced by the team.</p></li>
      <li>${icon('calendar')}<h3>Starts 27 December 2026</h3><p>So the old year ends and the new one begins in the mountains.</p></li>
      <li>${icon('snow')}<h3>In the snow</h3><p>Late December is deep winter in Kinnaur and Spiti — quiet, white and dramatic.</p></li>
      <li>${icon('rupee')}<h3>${priceRange()}</h3><p>Trip price per person, depending on the package and its confirmed inclusions.</p></li>
    </ul>
  </div>
</section>

<section class="sec sec--night" aria-labelledby="ny-b">
  <div class="wrap">
    <div class="grid" style="margin-bottom:40px"><div class="c-1-7"><p class="label label--amber kicker">Why winter</p><h2 class="display d-l" id="ny-b">The Himalaya in its most honest season.</h2></div></div>
    <div class="grid" style="align-items:start">
      <div class="c-1-7" data-reveal="mask">${photo('sangla-snowy-morning', { ratio: 'r-219', zoom: true }, ctx)}</div>
      <div class="c-8-12 prose" data-reveal><p><b>Snow changes everything.</b> The same valleys that look brown and bare in summer turn white and blue in winter, with sharp shadows and long, low light.</p><p><b>It is quiet.</b> Summer brings bikers and convoys; midwinter brings far fewer. Monasteries and villages are calm, and the road belongs to the locals.</p></div>
      <div class="c-2-6" data-reveal="mask" style="margin-top:40px">${photo('kibber-snow', { ratio: 'r-43', zoom: true }, ctx)}</div>
      <div class="c-7-12" data-reveal="mask" style="margin-top:12vh">${photo('spiti-khurik-snow', { ratio: 'r-219', zoom: true }, ctx)}</div>
      <div class="c-2-12" data-reveal="mask" style="margin-top:40px">${photo('the-first-light-arises-before-the-sun-does', { ratio: 'r-219', zoom: true, reuse: true, sizes: '100vw' }, ctx)}</div>
    </div>
  </div>
</section>

<section class="sec sec--char" aria-labelledby="ny-c">
  <div class="wrap grid">
    <div class="c-1-5"><p class="label label--amber kicker">The honest part</p><h2 class="display d-m" id="ny-c">Winter travel asks something of you.</h2></div>
    <div class="c-6-12">
      <div class="facts" style="grid-template-columns:1fr 1fr">
        <div><b>Real cold</b><small>Nights in Spiti in late December are far below freezing. Proper thermal layers, a down jacket, gloves and a warm hat are essential.</small></div>
        <div><b>Snow on roads</b><small>Snowfall can close roads or slow them for hours. Plans are adjusted on the day for safety.</small></div>
        <div><b>Simple comforts</b><small>Water, heating and power can be limited in high valleys in winter.</small></div>
        <div><b>Short days</b><small>Daylight is shorter, so road days start early and evenings are spent indoors and warm.</small></div>
      </div>
      <p class="note" style="margin-top:28px">The full packing list from the brochure will be published on the <a href="${R}trip-details/">trip details</a> page once the brochure is supplied.</p>
    </div>
  </div>
</section>

<section class="sec sec--night nycount" aria-labelledby="ny-cd">
  <div class="wrap grid">
    <div class="c-1-6"><p class="label label--amber kicker">New Year countdown</p><h2 class="display d-l" id="ny-cd">The mountains are calling. The party is waiting.</h2>
      <p class="prose" style="margin-top:18px">Bonfire nights, music and a special DJ travelling with the group. See <a href="${R}#party">the mountain party</a> on the home page.</p></div>
    <div class="c-7-12" style="align-self:center">${countdown()}</div>
  </div>
</section>

${bookingBand(ctx, { id: 'ny-book' })}

<section class="finale" aria-labelledby="ny-f" style="min-height:90svh">
  ${photo('baspa-under-snow', { cover: true, shade: 'shade--deep' }, ctx)}
  <div class="finale__in"><p class="label label--amber">Event starts · 27 December 2026</p><h2 class="display d-xl" id="ny-f" style="margin-top:18px">Make the year’s first journey the one you talk about all year.</h2>
  <div class="btn-row"><a class="btn" href="${R}booking/">Plan your escape ${ARROW}</a><a class="btn btn--ghost" href="${R}itinerary/">See the eight days</a></div></div>
</section>`,
  };
}
