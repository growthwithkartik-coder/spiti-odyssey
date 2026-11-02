// =====================================================================
// NEW YEAR MOUNTAIN PARTY & TREK — additional home-page sections.
// Added in the 2026 enhancement. These are inserted between the original
// home sections; nothing in home.mjs was removed to make room for them.
// Every photograph here is a mood image: its caption says it is not the
// actual event, venue, DJ or vehicle (see notes in src/data/images.mjs).
// =====================================================================
import { photo, esc, ridge, ARROW, CONTACT, bigCompass, countdown, equaliser, waLink, departureLine, SPARKLE } from '../../tools/lib.mjs';

const arrowSm = ARROW.replace('<svg', '<svg width="16" height="16"');

/* A · NEW YEAR IN THE SNOW ------------------------------------------- */
export function newYearSnow(ctx) {
  return `<section class="nysnow" data-nysnow aria-labelledby="nys-h">
  <div class="nysnow__bg" data-parallax="0.18">${photo('snow-solang-valley', { cover: true, cap: true, alt: 'A Himalayan valley buried in deep winter snow under a clear sky', pos: '50% 60%' }, ctx)}</div>
  <div class="nysnow__veil" aria-hidden="true"></div>
  <canvas class="snow snow--section" data-snow-section aria-hidden="true"></canvas>
  <div class="nysnow__compass" aria-hidden="true">${bigCompass()}</div>
  <div class="wrap nysnow__in">
    <p class="label label--amber kicker" data-split-in>New Year · in the snow</p>
    <h2 class="display d-xl" id="nys-h" data-split>A New Year above the ordinary.</h2>
    <p class="lede" data-split-in>Escape into the Himalayas for a winter adventure filled with breathtaking mountain views, unforgettable company, and a New Year celebration unlike the usual city party.</p>
    ${countdown({ cls: 'nysnow__cd' })}
    <div class="btn-row" data-split-in><a class="btn btn--glow" href="${ctx.root}booking/">Reserve your place ${ARROW}</a><a class="btn btn--ghost" href="#party">See the party</a></div>
  </div>
</section>`;
}

/* B · THE MOUNTAIN PARTY ----------------------------------------------- */
export function mountainParty(ctx) {
  return `<section class="party" id="party" aria-labelledby="party-h">
  <div class="party__beams" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
  <div class="party__orbs" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></div>
  <div class="wrap">
    <div class="party__head">
      <p class="label kicker party__kicker">${SPARKLE} The mountains are calling. The party is waiting.</p>
      <h2 class="display d-xl" id="party-h" data-split>Snow outside.<br><span class="party__neon">Party mode on.</span></h2>
      <p class="lede" data-reveal>Days on mountain roads and snowy trails. Nights that turn into a celebration — warm layers, good music, the whole group together, and a New Year welcomed somewhere most people never see.</p>
    </div>
    <div class="party__collage" data-collage>
      <div class="party__c party__c--1" data-reveal="mask" data-plx="-6">${photo('snow-outside-party-mode-1', { ratio: 'r-34', zoom: true, sizes: '(max-width:900px) 90vw, 40vw' }, ctx)}</div>
      <div class="party__c party__c--2" data-reveal="mask" data-plx="8">${photo('snow-outside-party-mode-2', { ratio: 'r-23', zoom: true, sizes: '(max-width:900px) 60vw, 28vw' }, ctx)}</div>
      <div class="party__c party__c--3" data-reveal="mask" data-plx="-12">${photo('snow-outside-party-mode-3', { ratio: 'r-23', zoom: true, sizes: '(max-width:900px) 60vw, 26vw' }, ctx)}</div>
      <p class="party__stamp" aria-hidden="true"><span>Snow outside</span><b>Party mode</b><span>— on —</span></p>
    </div>
    <p class="cap party__mood">Mood images supplied by the organisers to show the spirit of the celebration — not photographs of this event’s venue, crowd or line-up.</p>
    <ul class="party__pills" data-reveal>
      <li><b>Days</b><span>Mountain roads, snow trails &amp; viewpoints</span></li>
      <li><b>Nights</b><span>Bonfires, music &amp; celebration</span></li>
      <li><b>${esc(departureLine())}</b><span>The New Year edition begins</span></li>
    </ul>
  </div>
</section>`;
}

/* C · BONFIRE NIGHTS --------------------------------------------------- */
export function bonfireNights(ctx) {
  return `<section class="bonfire" aria-labelledby="bon-h">
  <div class="bonfire__bg">${photo('bonfire-sparks', { cover: true, cap: 'short', alt: 'Sparks rising from a night fire' }, ctx)}</div>
  <div class="bonfire__glow" aria-hidden="true"></div>
  <canvas class="sparks" data-sparks aria-hidden="true"></canvas>
  <div class="wrap bonfire__in">
    <div class="bonfire__text">
      <p class="label label--amber kicker" data-split-in>Bonfire nights</p>
      <h2 class="display d-xl" id="bon-h" data-split>Cold mountains. Warm fires. Wild memories.</h2>
      <p class="prose" data-reveal>When the sun drops behind the ridges the temperature falls fast — and that is when the group gathers. Fire, warm hands, stories from the road, the cabin windows glowing behind you and the snow catching the light.</p>
      <p class="label bonfire__sub" data-reveal>Cold nights. Warm fires. Unforgettable stories.</p>
    </div>
    <div class="bonfire__stack">
      <div class="bonfire__a" data-reveal="mask">${photo('cold-mountains-warm-fires-wild-memories-1', { ratio: 'r-32', zoom: true, cap: 'short' }, ctx)}</div>
      <div class="bonfire__b" data-reveal="mask">${photo('cold-mountains-warm-fires-wild-memories-2', { ratio: 'r-43', zoom: true, cap: 'short' }, ctx)}</div>
      <div class="bonfire__c" data-reveal="mask">${photo('cold-mountains-warm-fires-wild-memories-3', { ratio: 'r-43', zoom: true, cap: 'short' }, ctx)}</div>
      <div class="bonfire__d" data-reveal="mask">${photo('cold-mountains-warm-fires-wild-memories-4', { ratio: 'r-45', zoom: true, cap: 'short' }, ctx)}</div>
    </div>
  </div>
</section>`;
}

/* D · A SPECIAL DJ JOINS THE JOURNEY ----------------------------------- */
export function specialDj(ctx) {
  return `<section class="dj" aria-labelledby="dj-h">
  <div class="dj__bg">${photo('night-star-trail-snow', { cover: true, cap: 'short', alt: 'Star trails wheeling over snow-covered peaks at night' }, ctx)}</div>
  <div class="dj__veil" aria-hidden="true"></div>
  <div class="wrap dj__in">
    <div class="dj__text">
      <p class="label kicker dj__kicker">Entertainment announcement</p>
      <h2 class="display d-xl" id="dj-h" data-split>A special DJ will be travelling with us.</h2>
      <p class="lede" data-reveal>Take the mountain experience up a notch with music, celebration, and a special DJ travelling with the group.</p>
      ${equaliser(44, 'dj__eq')}
      <p class="note dj__note" data-reveal>The DJ’s name will be announced by DemiGod House. Set times and venues on the route are not yet confirmed. Want to be told first? <a href="mailto:${CONTACT.email}?subject=${encodeURIComponent('Spiti Odyssey — DJ announcement')}">Email the team</a>${waLink() ? ` or <a href="${waLink()}" target="_blank" rel="noopener">message on WhatsApp</a>` : ''}.</p>
    </div>
    <div class="dj__visual">
      <div class="dj__disc" aria-hidden="true"><svg viewBox="0 0 200 200"><defs><radialGradient id="vinyl" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#2a2f3a"/><stop offset=".25" stop-color="#0c0e13"/><stop offset="1" stop-color="#050608"/></radialGradient></defs><circle cx="100" cy="100" r="98" fill="url(#vinyl)"/>${Array.from({ length: 14 }, (_, i) => `<circle cx="100" cy="100" r="${34 + i * 4.5}" fill="none" stroke="rgba(255,255,255,.06)"/>`).join('')}<circle cx="100" cy="100" r="26" fill="var(--magenta)"/><circle cx="100" cy="100" r="3" fill="#050608"/><path d="M60 40 A70 70 0 0 1 150 52" stroke="rgba(120,200,255,.35)" stroke-width="3" fill="none"/></svg></div>
      <div class="dj__ph dj__ph--a" data-reveal="mask">${photo('dj-mixer-hands', { ratio: 'r-32', zoom: true, alt: 'Hands working a DJ mixer under red lights' }, ctx)}</div>
      <div class="dj__ph dj__ph--b" data-reveal="mask">${photo('dj-decks-blue', { ratio: 'r-43', zoom: true, alt: 'A DJ mixer glowing blue' }, ctx)}</div>
    </div>
  </div>
</section>`;
}

/* TRANSPORT · YOUR JOURNEY, YOUR WAY ------------------------------------ */
export function transport(ctx) {
  return `<section class="transport" id="transport" aria-labelledby="tr-h">
  <div class="transport__bg">${photo('road-lahaul-winter', { cover: true, cap: 'short', alt: 'Aerial view of a snowbound Himalayan valley and its road in winter' }, ctx)}</div>
  <div class="transport__veil" aria-hidden="true"></div>
  <svg class="transport__route" viewBox="0 0 1600 500" preserveAspectRatio="none" aria-hidden="true"><path data-route-line pathLength="1" d="M-20 420 C 200 380 260 250 470 270 S 760 420 930 300 S 1180 90 1380 160 S 1560 260 1640 200"/><path class="transport__route-dash" d="M-20 420 C 200 380 260 250 470 270 S 760 420 930 300 S 1180 90 1380 160 S 1560 260 1640 200"/></svg>
  <div class="wrap transport__in">
    <div class="transport__text">
      <p class="label label--amber kicker" data-split-in>Transport</p>
      <h2 class="display d-xl" id="tr-h" data-split>Your journey, your way.</h2>
      <div class="transport__opts">
        <article class="topt" data-reveal>
          <span class="topt__ic" aria-hidden="true"><svg viewBox="0 0 48 48"><path d="M4 30h40v6H4zM8 30l4-10h16l6 10M28 20h8l6 10" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="14" cy="37" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="35" cy="37" r="4" fill="none" stroke="currentColor" stroke-width="2"/></svg></span>
          <div><p class="label">Group transport</p><h3>Hilux vehicle available for the journey.</h3><p>Travel with the group in a Toyota Hilux, a pickup built for rough mountain roads. Seat numbers and allocation are confirmed by the team when you book.</p></div>
        </article>
        <article class="topt" data-reveal>
          <span class="topt__ic" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="18"/><circle cx="24" cy="24" r="13"/><path d="M11 23.5c4-1.6 8.4-2.4 13-2.4s9 .8 13 2.4"/><rect x="19.5" y="21" width="9" height="7" rx="2.5"/><path d="M22 28l-2.4 8.6M26 28l2.4 8.6"/></svg></span>
          <div><p class="label">Self-drive option</p><h3>Participants may bring their own car if they prefer.</h3><p>Prefer your own wheels? Tell the team when you enquire so they can share what applies to self-drivers.</p></div>
        </article>
      </div>
      <p class="note transport__note" data-reveal>Vehicle numbers, seats, convoy arrangements, fuel, parking and winter road access are not yet confirmed — the team will confirm them with you. The original route and its road-condition notes (see the <a href="${ctx.root}itinerary/">itinerary</a>) still apply: snow and clearance can change timings.</p>
      <div class="btn-row" data-reveal><a class="btn btn--glow" href="${ctx.root}booking/">Choose how you travel ${ARROW}</a></div>
    </div>
    <div class="transport__visual">
      <div class="transport__compass" aria-hidden="true">${bigCompass('bigcompass--amber')}</div>
      <div class="transport__car" data-reveal="mask" data-tilt>${photo('your-journey-your-way-toyota-hilux', { ratio: 'r-45', zoom: true, pos: '50% 78%', sizes: '(max-width:900px) 90vw, 40vw' }, ctx)}</div>
    </div>
  </div>
</section>`;
}

/* E · THE HIMALAYAN EXPERIENCE (editorial gallery with filters) --------- */
export function himalayanGallery(ctx) {
  const items = [
    ['trek-snow-group', 'trek', 'Walking on snow', 'tall'],
    ['sunset-keylong', 'snow', 'Evening on the peaks', 'wide'],
    ['trek-sar-pass', 'trek', 'Snow trails', ''],
    ['lodge-fireplace', 'stays', 'Warm interiors', 'tall'],
    ['snow-auli-slope', 'snow', 'Fresh snow', ''],
    ['night-tents-peak', 'nights', 'Glowing camps', ''],
    ['trek-kedarkantha-ridges', 'trek', 'Layered ridges', 'wide'],
    ['bonfire-circle-night', 'nights', 'Fireside circles', 'tall'],
    ['snow-manali-ice', 'snow', 'Snowbound slopes', ''],
    ['snow-night-lamps', 'nights', 'Lamplit snow', ''],
    ['trek-kedarkantha-camps', 'trek', 'Camps at dusk', 'wide'],
  ];
  const chips = [['all', 'All'], ['snow', 'Snow & peaks'], ['trek', 'Trek & adventure'], ['stays', 'Warm stays'], ['nights', 'Mountain nights']];
  return `<section class="sec sec--night hgal" aria-labelledby="hg-h">
  <div class="wrap">
    <div class="grid" style="margin-bottom:34px">
      <div class="c-1-7"><p class="label label--amber kicker">The Himalayan experience</p><h2 class="display d-l" id="hg-h" data-split>Peaks, trails, warm rooms, long nights.</h2></div>
      <div class="c-8-12" style="align-self:end"><p class="prose">Snow-covered peaks, winter adventure, scenic drives, trekking, mountain stays and the group itself. Filter by mood, and select any photo to view it full screen. These are mood photographs from across the Himalaya; each caption says where it was taken.</p></div>
    </div>
    <div class="hgal__chips" role="group" aria-label="Filter the gallery">${chips.map(([k, l], i) => `<button type="button" class="chip" data-hg-filter="${k}" aria-pressed="${i === 0}">${l}</button>`).join('')}</div>
    <div class="hgal__grid" data-hg-grid>
      ${items.map(([id, cat, label, size], i) => `<div class="hgal__item ${size ? 'hgal__item--' + size : ''}" data-hg-cat="${cat}" style="--i:${i}">
        ${photo(id, { ratio: '', zoom: true, cap: 'short', sizes: '(max-width:900px) 50vw, 33vw' }, ctx).replace('ph--frame', 'ph--frame hgal__ph')}
        <span class="hgal__tag label">${esc(label)}</span></div>`).join('')}
    </div>
  </div>
</section>`;
}

/* F · THE NIGHT COMES ALIVE --------------------------------------------- */
export function nightAlive(ctx) {
  const r = (seed) => ridge(seed, { base: .7, amp: .25, rough: .55 });
  return `<section class="nightalive" aria-labelledby="na-h">
  <div class="nightalive__bg" data-parallax="0.12">${photo('nye-fireworks-village', { cover: true, cap: true, alt: 'Fireworks bursting over a village on New Year’s Eve' }, ctx)}</div>
  <div class="nightalive__veil" aria-hidden="true"></div>
  <div class="party__beams party__beams--soft" aria-hidden="true"><i></i><i></i><i></i></div>
  <canvas class="snow snow--section" data-snow-section aria-hidden="true"></canvas>
  <svg class="nightalive__ridge" viewBox="0 0 1600 600" preserveAspectRatio="none" aria-hidden="true"><path d="${r(77)}" fill="#05070c" opacity=".9"/></svg>
  <div class="wrap nightalive__in">
    <p class="label kicker nightalive__kicker">Take the party above the ordinary</p>
    <h2 class="display d-xl" id="na-h" data-split>One journey. Mountain magic. <span class="party__neon">New Year energy.</span></h2>
    <div class="nightalive__duo">
      <div data-reveal="mask">${photo('party-trance-dance', { ratio: 'r-43', zoom: true, alt: 'People dancing under coloured lights at a night party' }, ctx)}</div>
      <div data-reveal="mask">${photo('snow-tree-lights', { ratio: 'r-43', zoom: true, alt: 'Warm string lights on a snow-covered tree at night' }, ctx)}</div>
    </div>
    <div class="btn-row" data-reveal><a class="btn btn--glow" href="${ctx.root}booking/">Join the New Year journey ${ARROW}</a><a class="link-arrow" href="${ctx.root}itinerary/">See the route day by day ${arrowSm}</a></div>
  </div>
</section>`;
}
