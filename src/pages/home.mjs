import { photo, esc, ridge, topo, ARROW, TRIP, STAYS, ITINERARY, priceBlock, departureLine, inr, PRICING, bigCompass, bookingBand, priceRange, elevation, marquee, contourDivider, chapterMark, icon, letters } from '../../tools/lib.mjs';
import { newYearSnow, mountainParty, bonfireNights, specialDj, transport, himalayanGallery, nightAlive } from './_party-sections.mjs';

// Approximate town coordinates (2 d.p.) — used for labels and the schematic.
export const STOPS = [
  { key: 'delhi',  name: 'Delhi',  lat: 28.61, lon: 77.21, alt: '~215 m',   line: 'The plains. Traffic, fog, the last flat horizon for a week.', fact: 'Delhi is home to the historic Red Fort, a UNESCO World Heritage Site that served as a major residence of Mughal emperors.' },
  { key: 'kufri',  name: 'Kufri',  lat: 31.10, lon: 77.27, alt: '~2,700 m', line: 'Pine ridges above Shimla — the first night the air turns thin and cold.', fact: 'Kufri is a Himalayan hill destination near Shimla, known for its mountain scenery and winter snowfall.' },
  { key: 'kalpa',  name: 'Kalpa',  lat: 31.54, lon: 78.26, alt: '~2,960 m', line: 'A village on a shelf, facing the Kinnaur Kailash range across the gorge.', fact: 'Kalpa is a beautiful village in Kinnaur, Himachal Pradesh, known for its spectacular views of the Kinner Kailash mountain range.' },
  { key: 'kaza',   name: 'Kaza',   lat: 32.23, lon: 78.07, alt: '~3,800 m', line: 'Spiti’s cold-desert capital — base for monasteries and the highest villages.', fact: 'Kaza is the main town of the Spiti Valley, surrounded by dramatic high-altitude desert landscapes and rugged Himalayan mountains.' },
  { key: 'rampur', name: 'Rampur', lat: 31.45, lon: 77.63, alt: '~1,000 m', line: 'The descent to the Sutlej, a palace town and a warmer night.', fact: 'Rampur Bushahr, in Himachal Pradesh, is a historic town associated with the former Bushahr princely state and its heritage architecture.' },
  { key: 'delhi2', name: 'Delhi',  lat: 28.61, lon: 77.21, alt: '~215 m',   line: 'Back to the plains, carrying a different view of the year.', fact: 'Delhi’s historic Humayun’s Tomb is another UNESCO World Heritage Site and an important precursor to Mughal garden-tomb architecture.' },
];

export function schematic(cls = '') {
  // project lon/lat; Delhi is pulled up with a visible "not to scale" break
  const P = (s) => { const lat = s.lat < 30 ? 30.35 : s.lat; return [((s.lon - 76.85) / 1.75) * 820 + 90, ((32.55 - lat) / 2.3) * 560 + 50]; };
  const pts = STOPS.map(P);
  const legs = pts.slice(1).map((p, i) => { const a = pts[i]; const mx = (a[0] + p[0]) / 2 + (i % 2 ? 40 : -40); const my = (a[1] + p[1]) / 2 + (i % 2 ? -30 : 30); return `M${a[0].toFixed(0)} ${a[1].toFixed(0)} Q${mx.toFixed(0)} ${my.toFixed(0)} ${p[0].toFixed(0)} ${p[1].toFixed(0)}`; });
  return `<svg class="schematic ${cls}" viewBox="0 0 1000 700" role="img" aria-label="Illustrative route: Delhi, Kufri, Kalpa, Kaza, Rampur and back to Delhi. Not to scale.">
    ${legs.map((d, i) => `<path class="leg" d="${d}"/><path class="leg-done" d="${d}" data-leg="${i}" pathLength="1" style="stroke-dasharray:1;stroke-dashoffset:1"/>`).join('')}
    <path class="break" d="M70 640 l20 -14 M84 646 l20 -14"/>
    <text x="110" y="650" style="font:11px var(--f-mono);fill:var(--muted-2);letter-spacing:.12em">DELHI DRAWN CLOSER — NOT TO SCALE</text>
    ${STOPS.slice(0, 5).map((s, i) => `<g class="stop" data-stop="${i}"><circle cx="${pts[i][0].toFixed(0)}" cy="${pts[i][1].toFixed(0)}" r="9"/><text x="${(pts[i][0] + 16).toFixed(0)}" y="${(pts[i][1] + 5).toFixed(0)}">${s.name}</text></g>`).join('')}
  </svg>`;
}

export default function home(ctx) {
  const R = ctx.root;
  const hr = (seed, o) => ridge(seed, o);
  const days = [
    ['eight-days-01-delhi', 'Arrive, meet the tribe, sleep early. Tomorrow the plains end.'],
    ['kufri-himalayan-range', 'North through the Shimla hills to a pine-ridge night at Kufri.'],
    ['eight-days-03-kufri-to-kalpa', 'Into Kinnaur along the Sutlej, to Kalpa and its wall of peaks.'],
    ['eight-days-04-kalpa-to-kaza', 'Toward Kaza by way of Nako and Tabo — the first Spiti light.'],
    ['key-may', 'Key Monastery on its cone of rock; Chicham Bridge over its gorge.'],
    ['eight-days-06-kaza', 'Langza, Komik and Hikkim — the highest villages of the journey.'],
    ['eight-days-07-kaza-to-rampur', 'Down the Spiti river to the Sutlej and on to Rampur.'],
    ['eight-days-08-rampur-to-delhi', 'The last road day: Rampur back to Delhi.'],
  ];
  return {
    title: '',
    description: 'The Spiti Odyssey: an 8-day, 7-night New Year road journey from Delhi to Kufri, Kalpa, Kaza and Rampur — a mountain party and trek in the Himalaya. Event starts 27 December 2026. Trip price ₹1,60,000–₹2,30,000 per person.',
    og: 'kalpa-kailash-golden',
    body: `
<!-- A · CINEMATIC OPENING -->
<section class="hero hero--x" data-hero aria-label="The Spiti Odyssey">
  <div class="hero__photo" data-hero-photo>${photo('kalpa-kailash-golden', { cover: true, eager: true, cap: false, alt: 'First light turning the snow peaks of the Kinnaur Kailash range gold, seen from Kalpa', pos: '55% 45%' }, ctx)}</div>
  <div class="hero__sky"></div>
  <div class="hero__glow" data-hero-glow></div>
  <div class="hero__dark" data-hero-dark></div>
  <div class="hero__ridges" aria-hidden="true">
    <svg viewBox="0 0 1600 600" preserveAspectRatio="none" data-depth="0.15"><path d="${hr(7, { base: .52, amp: .3, rough: .58 })}" fill="#14161a" opacity=".5"/></svg>
    <svg viewBox="0 0 1600 600" preserveAspectRatio="none" data-depth="0.3"><path d="${hr(19, { base: .68, amp: .26, rough: .55 })}" fill="#0f1013" opacity=".8"/></svg>
    <svg viewBox="0 0 1600 600" preserveAspectRatio="none" data-depth="0.5"><path d="${hr(33, { base: .84, amp: .2, rough: .5 })}" fill="#0a0b0d"/></svg>
  </div>
  <canvas class="snow" data-snow aria-hidden="true"></canvas>
  <div class="hero__frame" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
  <div class="hero__scale" aria-hidden="true">${[4000, 3000, 2000, 1000, 0].map((a) => `<span><b>${a.toLocaleString('en-IN')}</b></span>`).join('')}<i data-hero-alt-dot></i></div>
  <svg class="hero__route" viewBox="0 0 300 220" aria-hidden="true" data-hero-route>
    <path class="route" d="M30 200 C 40 140 60 120 70 110 S 150 80 170 60 S 200 20 200 18 S 230 70 120 100 S 40 190 30 200" pathLength="1"/>
    <circle cx="30" cy="200" r="3"/><circle cx="70" cy="110" r="3"/><circle cx="170" cy="60" r="3"/><circle cx="200" cy="18" r="3.5" style="fill:var(--amber)"/><circle cx="120" cy="100" r="3"/>
    <text x="38" y="204">Delhi</text><text x="78" y="114">Kufri</text><text x="178" y="64">Kalpa</text><text x="208" y="22">Kaza</text><text x="128" y="104">Rampur</text>
  </svg>
  <div class="hero__in">
    <p class="hero__coord label" data-hero-in><span class="hero__live" aria-hidden="true"></span>Kinnaur Kailash from Kalpa · 31.54° N 78.26° E · ~2,960 m</p>
    <h1 class="hero__title hero__title--x" aria-label="The Spiti Odyssey">
      <span class="ln ln--sm"><span data-hero-word>The</span></span>
      <span class="ln"><span class="hero__w1">${letters('Spiti')}</span></span>
      <span class="ln ln--it"><span class="hero__w2">${letters('Odyssey')}</span></span>
    </h1>
    <p class="hero__tag" data-hero-in>Eight days from the plains to the cold desert — <em>and a new year that begins at altitude.</em></p>
    <div class="hero__row">
      <dl class="hero__facts" data-hero-in>
        <div><dt class="label">Route</dt><dd>Delhi → Spiti → Delhi</dd></div>
        <div><dt class="label">Duration</dt><dd>8 days / 7 nights</dd></div>
        <div><dt class="label">Event starts</dt><dd>${esc(departureLine())}</dd></div>
        <div class="hero__price"><dt class="label">Trip price · per person</dt><dd>${priceRange()}</dd></div>
      </dl>
      <div class="btn-row" data-hero-cta>
        <a class="btn" href="#journey" data-magnet>Explore the journey ${ARROW}</a>
        <a class="btn btn--ghost btn--glow-ring" href="${R}booking/" data-magnet>Plan your escape</a>
      </div>
    </div>
  </div>
  <div class="hero__ev" aria-hidden="true">${elevation({ mini: true, id: 'hero' })}</div>
  <a class="hero__scroll" href="#prologue" aria-label="Scroll to the story"><span class="label">Scroll</span><i></i></a>
</section>

${marquee(['Delhi <small>~215 m</small>', 'Kufri <small>~2,700 m</small>', 'Kalpa <small>~2,960 m</small>', 'Nako <small>~3,600 m</small>', 'Tabo <small>~3,280 m</small>', 'Kaza <small>~3,800 m</small>', 'Key <small>~4,100 m</small>', 'Langza <small>~4,400 m</small>', 'Rampur <small>~1,000 m</small>'], { cls: 'marquee--hero' })}

<!-- PROLOGUE (new) -->
<section class="prologue" id="prologue" aria-labelledby="pro-h">
  ${topo(515, { cls: 'topo--soft' })}
  <div class="wrap">
    ${chapterMark(1, 'Prologue · the expedition journal', '28.61° N 77.21° E → 32.23° N 78.07° E')}
    <div class="prologue__grid">
      <h2 class="display d-l" id="pro-h" data-split>Not a holiday from your life. <em>A different first chapter for it.</em></h2>
      <div class="prologue__txt">
        <p class="lede">The Spiti Odyssey is a road journey through the turn of the year — out of Delhi, up through the Shimla hills, along the Sutlej into Kinnaur and over into the cold desert of Spiti, before the long descent home.</p>
        <p class="prose">Days belong to the landscape: cliff roads, frozen rivers, monasteries stacked on ridges and villages that sit above four thousand metres. Nights belong to the group — warm rooms, bonfires, music and a New Year welcomed somewhere most people never see. Every stage is planned around one idea: the journey itself is the destination.</p>
      </div>
    </div>
    <ul class="stats" aria-label="The journey in numbers">
      <li data-reveal><b><span data-count="8">8</span></b><span>days on the road</span></li>
      <li data-reveal><b><span data-count="7">7</span></b><span>nights, five towns</span></li>
      <li data-reveal><b>~<span data-count="4400" data-fmt="in">4,400</span><small>m</small></b><span>highest village on the route (Langza, approx.)</span></li>
      <li data-reveal><b>~<span data-count="3800" data-fmt="in">3,800</span><small>m</small></b><span>Kaza, base for three nights (approx.)</span></li>
    </ul>
  </div>
</section>

<!-- + A · NEW YEAR IN THE SNOW (added) -->
${newYearSnow(ctx)}

<!-- B · LEAVE THE FAMILIAR BEHIND -->
<section class="leave" data-leave aria-labelledby="leave-h">
  <div class="leave__stage">
    <div class="leave__frame leave__frame--1">${photo('delhi-night-traffic', { cover: true, shade: 'shade--deep', cap: 'short' }, ctx)}</div>
    <div class="leave__frame leave__frame--2">${photo('starts-on-a-river-road', { cover: true, shade: 'shade--deep' }, ctx)}</div>
    <div class="leave__frame leave__frame--3">${photo('cut-into-the-cliff-pointed-at-the-sky', { cover: true, shade: 'shade--deep', pos: '50% 35%' }, ctx)}</div>
    <div class="leave__text">
      <div class="leave__line"><p class="label label--amber kicker">No. 02 · Leave the familiar behind</p><h2 class="display d-xl" id="leave-h">Every year starts in <em>traffic.</em></h2><p class="lede">Horns, fog, a calendar already filling up. Most new years begin exactly where the old one ended.</p></div>
      <div class="leave__line"><p class="label label--amber kicker">The road north</p><h2 class="display d-xl">This one starts on a <em>river road.</em></h2><p class="lede">The plains tilt into hills, the hills into gorges, and the Sutlej takes over as the only thing that knows the way.</p></div>
      <div class="leave__line"><p class="label label--amber kicker">Kinnaur</p><h2 class="display d-xl">Cut into the cliff. <em>Pointed at the sky.</em></h2><p class="lede">By the third day the road is a ledge, the city is a rumour, and the year has finally changed.</p></div>
    </div>
    <div class="leave__meter" aria-hidden="true"><span class="label">City</span><span><i data-leave-meter></i></span><span class="label">Himalaya</span></div>
  </div>
  <div class="leave__static wrap sec--tight"><p class="label label--amber kicker">No. 02 · Leave the familiar behind</p><h2 class="display d-l">Every year starts in traffic. This one starts on a river road.</h2></div>
</section>

<!-- C · THE FIRST LIGHT -->
<section class="light" data-light aria-labelledby="light-h">
  ${photo('the-first-light-arises-before-the-sun-does', { cover: true, cap: true, pos: '50% 40%' }, ctx)}
  <div class="light__sun" data-light-sun></div>
  <div class="light__glow"></div>
  <div class="wrap light__in grid">
    <div class="c-1-7">
      <p class="label label--amber kicker">No. 03 · First light</p><p class="light__clock"><span>Kalpa · first light</span><b data-light-clock>05:58</b></p>
      <h2 class="display d-xl" id="light-h">The first light <em class="amber">arrives</em> before the sun does.</h2>
    </div>
    <div class="c-8-12" style="align-self:end">
      <p class="lede">Above Kalpa the summits catch fire while the village is still blue with shadow. The colour comes down the mountain in stages — pink, then copper, then a white so bright it hurts — and for a few minutes nobody says anything.</p>
      <p class="prose" style="margin-top:18px">That is the whole idea of beginning a year up here. The countdown and the party come after dark — but first, a morning that is impossible to scroll past.</p>
      <div class="light__bar" aria-hidden="true"><i data-light-bar></i></div>
      <div class="light__steps label" aria-hidden="true"><span>Blue hour</span><span>Alpenglow</span><span>Daylight</span></div>
    </div>
  </div>
</section>

<!-- + B · THE MOUNTAIN PARTY (added) -->
${mountainParty(ctx)}

<!-- + C · BONFIRE NIGHTS (added) -->
${bonfireNights(ctx)}

<!-- + D · A SPECIAL DJ JOINS THE JOURNEY (added) -->
${specialDj(ctx)}

<!-- D · THE EXPEDITION ROUTE -->
<section class="route" id="journey" data-route aria-labelledby="route-h">
  <div class="route__grid">
    <div class="route__map" data-route-map>
      ${schematic('')}
      <div class="route__hud"><span class="label">Route · illustrative, not to scale</span><span class="label" data-route-coord>28.61° N · 77.21° E</span></div>
      <div class="route__fact is-in" data-route-fact aria-live="polite"><span class="label label--amber" data-route-fact-k>Stop 01 · Delhi</span><p data-route-fact-t>${esc(STOPS[0].fact)}</p></div>
      <div class="route__now" aria-hidden="true"><span class="label label--amber" data-route-alt>~215 m</span><b data-route-name>Delhi</b></div>
    </div>
    <ol class="route__stops">
      <li class="route__stop" data-route-stop="0" data-fact="${esc(STOPS[0].fact)}" data-fact-k="Stop 01 · Delhi"><p class="label label--amber kicker">No. 05 · The expedition route</p><h2 class="display d-l" id="route-h">Five places. <em>One continuous climb.</em></h2><p class="prose" style="margin-top:20px">Delhi → Kufri → Kalpa → Kaza → Rampur → Delhi. The road gains more than three and a half kilometres of altitude before turning for home. Scroll, and the map follows the road.</p>
        <div class="route__delhi" data-reveal="mask">${photo('delhi', { ratio: 'r-34', zoom: true, sizes: '(max-width:900px) 70vw, 22vw', pos: '50% 40%' }, ctx)}</div>
        <p class="prose route__delhi-txt">The starting line is Delhi — Mughal domes, winter fog and the last flat horizon for a week. Day one is for arriving, meeting the group and an early night before the climb north.</p>
        <p class="route__stop-fact"><span class="label label--amber">Did you know</span>${esc(STOPS[0].fact)}</p>
        <p class="coord label">Start · Delhi · ~215 m · 28.61° N 77.21° E</p></li>
      ${STOPS.slice(1).map((s, i) => `<li class="route__stop" data-route-stop="${i + 1}" data-fact="${esc(s.fact)}" data-fact-k="${s.key === 'delhi2' ? 'Return · Delhi' : `Stop ${String(i + 2).padStart(2, '0')} · ${s.name}`}">
        <p class="label label--amber">Stop ${String(i + 2).padStart(2, '0')} · ${s.alt}</p>
        <h3>${s.name === 'Delhi' ? 'Delhi, again' : s.name}</h3>
        <p class="prose" style="margin-top:14px">${s.line}</p>
        <p class="route__stop-fact"><span class="label label--amber">Did you know</span>${esc(s.fact)}</p>
        <p class="coord label"><span>${s.lat.toFixed(2)}° N · ${s.lon.toFixed(2)}° E</span><span>approx.</span></p>
        ${s.key !== 'delhi2' ? `<a class="link-arrow" href="${R}destinations/${s.key}/">Read about ${s.name} ${ARROW.replace('<svg', '<svg width="16" height="16"')}</a>` : `<a class="link-arrow" href="${R}itinerary/#day-8">Day 8 ${ARROW.replace('<svg', '<svg width="16" height="16"')}</a>`}
      </li>`).join('')}
    </ol>
  </div>
</section>

<!-- ELEVATION PROFILE (new) -->
<section class="evsec" data-evsec aria-labelledby="ev-h">
  ${contourDivider(41, { cls: 'contour-div--top' })}
  <div class="wrap">
    <div class="evsec__head">
      <div>${chapterMark(6, 'The climb, in metres')}<h2 class="display d-l" id="ev-h" data-split>Up three and a half kilometres. <em>Then all the way down.</em></h2></div>
      <p class="prose">The profile below follows the journey day by day, not by distance. It climbs in steps — a night at Kufri, a night at Kalpa — before sleeping at Kaza’s altitude, and the highest points come on day trips from Kaza rather than overnight.</p>
    </div>
    <div class="evsec__chart" data-reveal>${elevation({ id: 'home' })}</div>
    <div class="evsec__legend">
      <p class="cap">Approximate altitudes, rounded — not survey data. Positions are spaced by day of travel.</p>
      <div class="evsec__readout" aria-hidden="true"><span class="label">Highest point</span><b>~<span data-count="4400" data-fmt="in">4,400</span> m</b><span class="label">Langza · Day 6</span></div>
    </div>
  </div>
</section>

<!-- + TRANSPORT · YOUR JOURNEY, YOUR WAY (added) -->
${transport(ctx)}

<!-- E · DISCOVER THE DESTINATIONS -->
<section class="sec sec--paper dests" aria-labelledby="dest-h">
  ${topo(301, { cls: 'topo--ink' })}
  <div class="wrap" style="position:relative">
    <div class="grid" style="margin-bottom:clamp(50px,7vw,110px)">
      <div class="c-1-7">${chapterMark(7, 'Discover the destinations')}<h2 class="display d-l" id="dest-h" data-split>Four places that do not look <em>like each other.</em></h2></div>
      <div class="c-8-12" style="align-self:end"><p class="prose">Pine forest under snow, the orchard-and-temple country of Kinnaur, a moonscape of cold desert and a river town at the bottom of a gorge. The landscape changes so completely that each overnight stop feels like crossing into a new country.</p></div>
    </div>
    <div class="dcards">
      ${[
        ['kufri', 'kufri', 'Kufri', 'The hills begin', 'Day 02', '~2,700 m', '31.10° N 77.27° E', 'The first evening above two and a half thousand metres. Deodar and pine heavy with snow, wooden cabins, a white line of higher peaks on the horizon — and the realisation that the plains are now below you.'],
        ['kalpa', 'kalpa', 'Kalpa', 'A wall of white', 'Day 03', '~2,960 m', '31.54° N 78.26° E', 'Kalpa sits on a shelf high above the Sutlej, its carved temple eaves facing straight across at Kinnaur Kailash. It is the kind of view that makes people set alarms for dawn without being asked.'],
        ['kaza', 'kaza', 'Kaza', 'The cold desert', 'Days 04–06', '~3,800 m', '32.23° N 78.07° E', 'Beyond the rain shadow, colour drains out of the land and the monasteries take over: Key stacked on its hill, prayer flags snapping in thin air, three nights at the heart of Spiti.'],
        ['rampur', 'rampur', 'Rampur', 'Down to the river', 'Day 07', '~1,000 m', '31.45° N 77.63° E', 'The descent ends in the old capital of Bushahr, where the Sutlej runs fast and green below the towers of Padam Palace and the night is mild enough to sit outside.'],
      ].map(([k, img, name, sub, day, alt, co, txt], i) => `<article class="dcard dcard--${i + 1}">
        <a class="dcard__img" href="${R}destinations/${k}/" data-reveal="mask" data-tilt tabindex="-1" aria-hidden="true">${photo(img, { ratio: 'r-34', cap: false, sizes: '(max-width:900px) 90vw, 30vw' }, ctx)}<span class="dcard__alt">${alt}</span></a>
        <div class="dcard__txt" data-reveal>
          <span class="dcard__num" aria-hidden="true">0${i + 1}</span>
          <p class="label">${day} · ${sub}</p>
          <h3 class="display d-m"><a href="${R}destinations/${k}/">${name}</a></h3>
          <p class="prose">${txt}</p>
          <p class="coord label">${co} · approx.</p>
          <a class="link-arrow" href="${R}destinations/${k}/">Explore ${name} ${ARROW.replace('<svg', '<svg width="16" height="16"')}</a>
        </div>
      </article>`).join('')}
    </div>
    <p class="cap" style="margin-top:40px">Destination images supplied by the organisers.</p>
  </div>
</section>

<!-- F · THE JOURNEY THROUGH THE DAYS -->
<section class="hscroll" data-hscroll aria-labelledby="days-h">
  <div class="hscroll__pin">
    <div class="hscroll__head"><div><p class="label label--amber kicker">No. 08 · The journey through the days</p><h2 class="display d-l" id="days-h">Eight days, <em>in order.</em></h2></div><a class="btn btn--ghost" href="${R}itinerary/">Full itinerary ${ARROW}</a></div>
    <div class="hscroll__track" data-hscroll-track>
      ${ITINERARY.map((d, i) => `<a class="daycard" href="${R}itinerary/#day-${d.n}">
        ${photo(days[i][0], { ratio: '', cap: 'plain', sizes: '(max-width:900px) 80vw, 30vw' }, ctx).replace('ph--frame', 'ph--frame daycard__ph')}
        <span class="daycard__n">${String(d.n).padStart(2, '0')}</span>
        <h3>${esc(d.from && d.from !== d.to ? `${d.from} → ${d.to}` : d.to)}</h3>
        <p>${esc(days[i][1])}</p>
      </a>`).join('')}
    </div>
    <div class="hscroll__progress" aria-hidden="true"><i data-hscroll-progress></i></div>
  </div>
</section>

<!-- G · WHERE YOU STAY -->
<section class="sec sec--char staystrip" aria-labelledby="stay-h">
  <div class="wrap">
    <div class="grid" style="margin-bottom:46px">
      <div class="c-1-7">${chapterMark(9, 'Where you stay')}<h2 class="display d-l" id="stay-h" data-split>Warm rooms <em>after cold roads.</em></h2></div>
      <div class="c-8-12" style="align-self:end"><p class="prose">Six properties are on the current stay list, from a city hotel in Delhi to a carved-window guesthouse in the cold desert at Kaza. Bookings and room-sharing are confirmed by the team with each traveller.</p></div>
    </div>
  </div>
  <div class="staystrip__track" data-drag>
    ${STAYS.map((s, i) => `<a class="scard" href="${R}stays/#${s.id}" data-tilt>
      <div class="scard__img">${photo(({ delhi: 'hyatt-centric', kufri: 'fortune', kalpa: 'kinner-villa', kaza: 'sakya-abode', rampur: 'dev-dhara', chandigarh: 'jw-marriott' })[s.id], { ratio: 'r-23', cap: false, sizes: '(max-width:760px) 72vw, 22vw', alt: `${s.name}, ${s.city}` }, ctx)}</div>
      <div class="scard__txt"><span class="scard__n">0${i + 1}</span><span class="scard__city">${esc(s.city)}${s.id === 'chandigarh' ? ' (Optional)' : ''}</span><h3>${esc(s.name)}</h3>
      <small>${s.flag ? esc(s.flag) : s.nights.length > 1 ? `Nights ${s.nights[0]}–${s.nights[s.nights.length - 1]}` : `Night ${s.nights[0]}`}</small></div>
    </a>`).join('')}
  </div>
  <div class="wrap staystrip__foot"><p class="cap">Stay images supplied by the organisers. Booking status, room categories and amenities are confirmed by the team.</p><a class="btn btn--ghost" href="${R}stays/">Discover the stays ${ARROW}</a></div>
</section>

<!-- H · BEYOND THE LANDSCAPE -->
<section class="between" aria-labelledby="exp-h">
  <div class="between__banner">
    <div class="between__bg" data-plx-bg>${photo('what-you-do-between-the-views', { cover: true, pos: '50% 26%', cap: true }, ctx)}</div>
    <div class="between__veil" aria-hidden="true"></div>
    <div class="wrap between__head">
      ${chapterMark(10, 'Beyond the landscape')}
      <h2 class="display d-xl" id="exp-h" data-split>What you do <em>between the views.</em></h2>
      <p class="lede">Monasteries older than most nations, villages where the road simply stops, light that photographers plan whole trips around — and the long, unhurried road that ties it together.</p>
    </div>
  </div>
  <div class="wrap between__grid">
    ${[
      ['monasteries', 'stupa', 'Monasteries', 'Tabo, Key and the village gompas: prayer halls, carved mani stones, butter-lamp quiet and prayer flags cracking in the wind. Working monasteries, not museums — visited quietly and clockwise.', 'Days 4–6'],
      ['high-villages', 'village', 'High villages', 'Langza, Komik and Hikkim sit above four thousand metres — flat-roofed houses, stacked firewood, a post office famous for its altitude, and the moment the road simply stops.', 'Day 6'],
      ['photography', 'camera', 'Photography', 'Thin, dry air makes for hard, clear light by day and, when the cold allows, a sky thick with stars. Sunrise at Kalpa and the ridgelines above Kaza are the frames people plan around.', 'Throughout'],
      ['the-road-itself', 'road', 'The road itself', 'Cliff-cut sections in Kinnaur, river crossings, long straight runs into bare mountains — the unhurried hours between places are the part that turns a trip into a journey.', 'Every day'],
    ].map(([img, ic, h, p, when], i) => `<article class="bw bw--${i + 1}" data-reveal>
      <div class="bw__img" data-reveal="mask">${photo(img, { ratio: i % 2 ? 'r-45' : 'r-23', zoom: true, cap: 'short', sizes: '(max-width:900px) 90vw, 25vw' }, ctx)}</div>
      <div class="bw__txt"><span class="bw__ico">${icon(ic)}</span><p class="label label--amber">${String(i + 1).padStart(2, '0')} · ${when}</p><h3>${h}</h3><p>${p}</p></div>
    </article>`).join('')}
  </div>
  <div class="wrap" style="padding-bottom:clamp(70px,9vw,140px)"><a class="link-arrow" href="${R}experience/">All mountain experiences ${ARROW.replace('<svg', '<svg width="16" height="16"')}</a></div>
</section>

<!-- + E · THE HIMALAYAN EXPERIENCE (added) -->
${himalayanGallery(ctx)}

<!-- + F · THE NIGHT COMES ALIVE (added) -->
${nightAlive(ctx)}

<!-- I · THE PRACTICAL DETAILS -->
<section class="sec sec--paper pricing" aria-labelledby="prac-h">
  ${topo(612, { cls: 'topo--ink' })}
  <div class="wrap grid" style="position:relative">
    <div class="c-1-6">
      ${chapterMark(11, 'The practical details')}
      <h2 class="display d-l" id="prac-h" data-split>One clear price. <em>Every detail in writing.</em></h2>
      <p class="prose" style="margin-top:22px">The Spiti Odyssey is priced at ${priceRange()} per person. Where you land in that range depends on the package you choose and its confirmed inclusions; the team sends a written, itemised quote before any payment is requested.</p>
      <ul class="pfacts">
        <li>${icon('calendar')}<div><span class="label">Event starts</span><b>${esc(departureLine())}</b></div></li>
        <li>${icon('compass')}<div><span class="label">Duration</span><b>8 days / 7 nights</b></div></li>
        <li>${icon('peak')}<div><span class="label">Route</span><b>Delhi · Kufri · Kalpa · Kaza · Rampur</b></div></li>
        <li>${icon('vehicle')}<div><span class="label">Travel</span><b>Group Hilux or self-drive</b></div></li>
      </ul>
    </div>
    <div class="c-7-12" style="align-self:center">
      ${priceBlock({ tone: 'price--light' })}
      <div class="btn-row" style="margin-top:20px"><a class="btn btn--ink" href="${R}booking/">Enquire now ${ARROW}</a><a class="btn btn--ghost" href="${R}trip-details/">See trip details</a></div>
    </div>
  </div>
</section>

<!-- + PRICING & BOOKING BAND (added) -->
${bookingBand(ctx, { id: 'book' })}

<!-- J · THE FINAL INVITATION -->
<section class="finale" aria-labelledby="fin-h">
  ${photo('peo-sunset-alpenglow', { cover: true, shade: 'shade--deep' }, ctx)}
  <div class="finale__in">
    <p class="label label--amber" data-reveal>The Spiti Odyssey · New Year Mountain Party &amp; Trek · ${esc(departureLine())}</p>
    <h2 class="display d-xl" id="fin-h" data-split style="margin-top:22px">Let the year begin with <em>a different view.</em></h2>
    <p class="lede finale__lede" data-reveal>${priceRange()} per person · eight days · one road into the cold desert.</p>
    <div class="btn-row" data-reveal>
      <a class="btn" href="${R}booking/">Make an enquiry ${ARROW}</a>
      <a class="btn btn--ghost" href="${R}itinerary/">Explore the itinerary</a>
      <a class="btn btn--ghost" href="${R}stays/">View the stays</a>
    </div>
  </div>
</section>
<div class="altimeter" data-altimeter aria-hidden="true" hidden><b>Kaza ~3,800 m</b><div class="altimeter__bar"><i></i></div><b>Delhi ~215 m</b></div>
`,
  };
}
