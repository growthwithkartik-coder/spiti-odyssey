import { photo, esc, IMAGES, ARROW, marquee } from '../../tools/lib.mjs';

const FILM = ['nako-lake-village', 'tabo-monastery', 'dhankar-fort', 'nako-morning'];
const FILM_LINES = ['Upper Kinnaur, a lake at the edge of the cold desert.', 'Tabo — earthen halls, a thousand years of prayer.', 'Dhankar, a fortress-monastery on a ridge of clay.', 'Morning in the high country.'];
export const GALLERY = ['kaza-nh505', 'road-kinnaur-cliff', 'key-view-2004', 'chicham-bridge-east', 'kufri-temple-snow', 'kibber-houses', 'road-satluj-nh', 'kalpa-chini-kila', 'kaza-valley', 'spiti-yak-herders', 'kaza-approach', 'peo-pink-hour', 'rampur-shraikoti', 'chandigarh-sukhna-sunrise'];

export default function gallery(ctx) {
  const R = ctx.root;
  const list = GALLERY.filter((id) => IMAGES[id]);
  return {
    title: 'Gallery — photographs of the route',
    description: 'A cinematic photo gallery of the Spiti Odyssey route: Kinnaur, Nako, Tabo, Dhankar, Kaza and the high villages of Spiti, credited to Wikimedia Commons photographers.',
    og: 'nako-lake-village',
    body: `
<section class="film" data-film aria-label="Photo sequence: four places on the route">
  ${FILM.map((id, i) => `<div class="film__frame" data-film-frame="${i}" style="position:absolute;inset:0;${i ? 'clip-path:inset(100% 0 0 0)' : ''}">${photo(id, { cover: true, shade: true, eager: i === 0 }, ctx)}</div>`).join('')}
  <div class="phero__in" style="position:absolute;inset:auto 0 0 0;z-index:5">
    <div class="crumb label"><a href="${R}">Home</a><span>/</span><span>Gallery</span></div>
    <h1 class="display d-xxl">The route,<br><em>in light.</em></h1>
    <div style="position:relative;height:3.5em;margin-top:18px">${FILM_LINES.map((l, i) => `<p class="lede" data-film-line="${i}" style="position:absolute;inset:0;${i ? 'opacity:0' : ''}">${esc(l)}</p>`).join('')}</div>
  </div>
</section>

<section class="sec sec--night" aria-labelledby="gl-h">
  <div class="wrap">
    <div class="grid" style="margin-bottom:46px">
      <div class="c-1-7"><p class="label label--amber kicker">The archive</p><h2 class="display d-l" id="gl-h">More from the road.</h2></div>
      <div class="c-8-12" style="align-self:end"><p class="prose">Select any photograph to view it full screen; use the arrow keys to move between them and Escape to close. Every image is a real photograph of the region by a Wikimedia Commons contributor, credited beneath it. Photographs taken in summer are labelled by the season you can see in them; the journey itself starts on 27 December 2026, in deep winter.</p></div>
    </div>
    <div class="masonry" data-gallery>
      ${list.map((id, i) => `<button type="button" data-lightbox="${i}" aria-label="View larger: ${esc(IMAGES[id].place)}">${photo(id, { cap: 'plain', zoom: true, ratio: 'r-43', sizes: '(max-width:760px) 100vw, 33vw' }, ctx)}</button>`).join('')}
    </div>
    <p class="cap" style="margin-top:30px">Looking for a specific place? Each destination page carries its own photographs: <a href="${R}destinations/kufri/">Kufri</a> · <a href="${R}destinations/kalpa/">Kalpa</a> · <a href="${R}destinations/kaza/">Kaza</a> · <a href="${R}destinations/rampur/">Rampur</a>. All licences: <a href="${R}credits/">photo credits</a>.</p>
  </div>
</section>
<section class="sec sec--char moodboard" aria-labelledby="gl-mood">
  <div class="wrap">
    <div class="grid" style="margin-bottom:46px">
      <div class="c-1-7"><p class="label label--amber kicker">The organisers’ moodboard</p><h2 class="display d-l" id="gl-mood">The journey <em>as we picture it.</em></h2></div>
      <div class="c-8-12" style="align-self:end"><p class="prose">These images were chosen by the organisers for each part of the story — the river road out of the plains, the first light, the party in the snow and the long road itself. They set the mood; they are not photographs of this departure.</p></div>
    </div>
    <div class="mood">
      ${['starts-on-a-river-road', 'the-first-light-arises-before-the-sun-does', 'snow-outside-party-mode-2', 'monasteries', 'cut-into-the-cliff-pointed-at-the-sky', 'photography', 'the-road-itself', 'snow-outside-party-mode-1', 'high-villages'].map((id, i) => `<div class="mood__item mood__item--${i + 1}" data-reveal="mask">${photo(id, { ratio: '', reuse: true, zoom: true, cap: 'plain', sizes: '(max-width:760px) 100vw, 33vw' }, ctx)}</div>`).join('')}
    </div>
  </div>
</section>
${marquee(['Kinnaur', 'Nako', 'Tabo', 'Dhankar', 'Kaza', 'Key', 'Kibber', 'Chicham', 'Langza', 'Komik', 'Hikkim'], { sep: '◆' })}
<div class="lightbox" data-lightbox-box role="dialog" aria-modal="true" aria-label="Photo viewer" hidden>
  <span class="label lightbox__count" data-lb-count></span>
  <button class="lightbox__btn lightbox__close" type="button" data-lb-close aria-label="Close viewer">✕</button>
  <button class="lightbox__btn lightbox__prev" type="button" data-lb-prev aria-label="Previous photo">←</button>
  <img alt="" data-lb-img>
  <p class="cap lightbox__cap" data-lb-cap></p>
  <button class="lightbox__btn lightbox__next" type="button" data-lb-next aria-label="Next photo">→</button>
</div>
<section class="sec sec--char" aria-label="New Year party photographs">
  <div class="wrap grid"><div class="c-1-8"><p class="label label--amber kicker">New Year Mountain Party &amp; Trek</p><h2 class="display d-m">Snow, bonfires, music — the party side of the journey.</h2></div><div class="c-9-12" style="align-self:end"><div class="btn-row"><a class="btn btn--ghost" href="${R}#party">The mountain party</a><a class="btn btn--ghost" href="${R}#transport">Transport</a></div></div></div>
</section>
<section class="sec sec--pine" aria-label="Next">
  <div class="wrap grid"><div class="c-1-8"><h2 class="display d-l">Want to stand in these places?</h2></div><div class="c-9-12" style="align-self:end"><a class="btn" href="${R}booking/">Plan your escape ${ARROW}</a></div></div>
</section>`,
  };
}
