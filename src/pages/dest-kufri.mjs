import { photo, topo, ridge, ARROW, stayById } from '../../tools/lib.mjs';
import { heroInset, heroCoord, destGlance } from './_cinematic.mjs';
import { destNext } from './dest-kalpa.mjs';

export default function kufri(ctx) {
  const R = ctx.root; const s = stayById('kufri');
  return {
    title: 'Kufri — the first night in the hills',
    description: 'Kufri, above Shimla at about 2,700 m: the Spiti Odyssey’s first mountain night after the drive from Delhi. Stay: Fortune.',
    og: 'kufri-snow-hills',
    body: `
<section class="phero" aria-labelledby="kf-h">
  ${photo('kufri-snow-hills', { cover: true, shade: true, eager: true }, ctx)}
  ${heroCoord(['31.10° N · 77.27° E', '~2,700 m · Shimla hills'])}
  ${heroInset(ctx, 'kufri', 'Walkers on a snow-covered lane between deodar trees and cabins at Kufri')}
  <div class="phero__in">
    <div class="crumb label"><a href="${R}">Home</a><span>/</span><a href="${R}destinations/">Destinations</a><span>/</span><span>Kufri</span></div>
    <p class="label label--amber">Destination 01 · Day 2</p>
    <h1 class="display d-xxl" id="kf-h">Kufri</h1>
    <p class="lede">Where the plains finally run out. A hill station of deodar and pine above Shimla, and the journey’s first night in the cold.</p>
    <div class="phero__meta"><div><span class="label">Altitude</span><b>~2,700 m</b></div><div><span class="label">Position</span><b>31.10° N · 77.27° E</b></div><div><span class="label">Overnight</span><b>${s.name}</b></div></div>
  </div>
</section>

<section class="sec sec--paper" aria-labelledby="kf-a">
  ${topo(12, { cls: 'topo--ink' })}
  <div class="wrap grid" style="position:relative">
    <div class="c-1-5"><p class="label kicker">Why stop here</p><h2 class="display d-l" id="kf-a">The body needs a staircase.</h2></div>
    <div class="c-6-12 prose">
      <p>Driving from Delhi straight to the high valleys would be a mistake, for comfort and for safety. Kufri is the first step on the staircase: high enough to feel the mountain air, low enough to sleep well while your body begins to adjust.</p>
      <p>It is also a genuinely lovely place to arrive in winter. Kufri sits along the ridge east of Shimla, where the old Hindustan–Tibet road begins its long run toward Kinnaur. On clear days the higher Himalaya appears on the northern horizon as a white line — a preview of where the road is heading.</p>
      <p>In late December, snow around Kufri is common. That makes for beautiful evenings and, occasionally, slower roads; the operator will confirm arrival plans closer to the date.</p>
    </div>
  </div>
</section>

${destGlance(ctx, { key: 'kufri', days: 'Day 2 · night 2', alt: '~2,700 m', coord: '31.10° N, 77.27° E', landscape: ['Deodar and snow', 'Cedar and pine forest on the ridge east of Shimla, often under snow in late December.'], notice: ['The first step up', 'A night at this height eases the body toward Kalpa and, later, Kaza.'] })}


<section class="sec sec--night" aria-labelledby="kf-b" style="padding-bottom:0">
  <div class="wrap grid">
    <div class="c-1-7" data-reveal="mask"><figure class="ph ph--frame"><div class="ph__img r-43"><svg viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Illustration: the climb from the plains through pine ridges to the snow line" style="width:100%;height:100%">
      <defs><linearGradient id="kfs" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0f1a22"/><stop offset=".7" stop-color="#3a5560"/><stop offset="1" stop-color="#9cb9c6"/></linearGradient></defs>
      <rect width="1200" height="900" fill="url(#kfs)"/>
      <path d="${ridge(611, { w: 1200, h: 900, base: .42, amp: .22, rough: .58 })}" fill="#e7edef" opacity=".9"/>
      <path d="${ridge(612, { w: 1200, h: 900, base: .58, amp: .2, rough: .55 })}" fill="#21363a"/>
      <path d="${ridge(613, { w: 1200, h: 900, base: .72, amp: .16, rough: .5 })}" fill="#132520"/>
      <path d="${ridge(614, { w: 1200, h: 900, base: .86, amp: .1, rough: .5 })}" fill="#0b1210"/>
      <g fill="none" stroke="#e0a35a" stroke-width="2" stroke-dasharray="6 8"><path d="M80 880 C 300 800 380 760 520 700 S 800 600 1000 520"/></g>
      <g font-family="IBM Plex Mono, monospace" font-size="18" fill="#f2efe8" letter-spacing="3"><text x="70" y="850">PLAINS ~215 M</text><text x="560" y="690">KUFRI ~2,700 M</text><text x="880" y="370">SNOW LINE</text></g>
    </svg></div><figcaption><span class="ill">Illustration</span> — the day-two climb from the plains to Kufri, not to scale.</figcaption></figure></div>
    <div class="c-8-12" style="align-self:center">
      <p class="label label--amber kicker">What to notice</p>
      <h2 class="display d-m" id="kf-b">Three things that change at Kufri.</h2>
      <ol class="pending" style="margin-top:26px">
        <li><span><b>The trees.</b> Plains scrub gives way to deodar cedar and pine, often dusted with snow.</span></li>
        <li><span><b>The temperature.</b> Winter evenings are properly cold — this is where the warm layers come out.</span></li>
        <li><span><b>The horizon.</b> For the first time, the snow peaks of the higher Himalaya are visible on clear days.</span></li>
      </ol>
    </div>
  </div>
  <svg viewBox="0 0 1600 300" preserveAspectRatio="none" style="width:100%;height:18vw;margin-top:80px" aria-hidden="true"><path d="${ridge(902, { w: 1600, h: 300, base: .45, amp: .35 })}" fill="#10201b"/><path d="${ridge(903, { w: 1600, h: 300, base: .7, amp: .25 })}" fill="#16191b"/></svg>
</section>

<section class="sec sec--char" aria-labelledby="kf-c" style="padding-top:40px">
  <div class="wrap grid">
    <div class="c-1-5"><p class="label label--amber kicker">Neighbour</p><h2 class="display d-m" id="kf-c">Shimla, just down the ridge.</h2><p class="prose" style="margin-top:18px">The old summer capital spreads across the hills a short distance west. The road to Kufri passes close to it, and after dark its lights stack up the slopes like a second sky.</p></div>
    <div class="c-6-12" data-reveal="mask">${photo('shimla-night-lights', { ratio: 'r-169', zoom: true }, ctx)}</div>
    <div class="c-1-12" data-reveal="mask" style="margin-top:clamp(30px,4vw,60px)">${photo('kufri-peaks-peeking', { ratio: 'r-219', zoom: true, sizes: '100vw' }, ctx)}</div>
  </div>
</section>
${destNext(R, 'kalpa', 'Kalpa', 'Day 3 · into Kinnaur')}
`,
  };
}
