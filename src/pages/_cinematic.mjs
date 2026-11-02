// =====================================================================
// CINEMATIC EDITION — shared page sections (October 2026).
// Small building blocks used by the destination, stays and itinerary
// pages so the supplied images and new graphics appear consistently.
// =====================================================================
import { photo, esc, icon, stayById, ARROW, daySpark } from '../../tools/lib.mjs';

/** Supplied stay image for each stay id (filenames as supplied by the organiser). */
export const STAY_IMG = { delhi: 'hyatt-centric', kufri: 'fortune', kalpa: 'kinner-villa', kaza: 'sakya-abode', rampur: 'dev-dhara', chandigarh: 'jw-marriott' };
/** Supplied destination image for each destination. */
export const DEST_IMG = { delhi: 'delhi', kufri: 'kufri', kalpa: 'kalpa', kaza: 'kaza', rampur: 'rampur' };

/** Portrait inset that floats over an inner-page hero (re-uses a supplied image). */
export const heroInset = (ctx, id, alt) => `<div class="phero__inset" data-reveal="mask">${photo(id, { ratio: 'r-34', reuse: true, cap: 'short', alt, sizes: '(max-width:900px) 70vw, 20vw' }, ctx)}</div>`;
export const heroCoord = (lines) => `<p class="phero__coord" aria-hidden="true">${lines.map(esc).join('<br>')}</p>`;

/** “At a glance” band for a destination page. */
export function destGlance(ctx, { key, days, alt, coord, landscape, notice }) {
  const R = ctx.root; const s = stayById(key);
  return `<section class="sec sec--night glance" aria-labelledby="gl-${key}">
  <div class="wrap">
    <div class="glance__grid">
      <div>
        <p class="label label--amber kicker">At a glance</p>
        <h2 class="display d-m" id="gl-${key}">${esc(s.city)} on the route</h2>
        <ul class="featlist featlist--2" style="margin-top:30px">
          <li>${icon('calendar')}<h3>${esc(days)}</h3><p>Where ${esc(s.city)} falls in the eight days. <a href="${R}itinerary/">See the itinerary</a>.</p></li>
          <li>${icon('altitude')}<h3>${esc(alt)}</h3><p>Approximate altitude, rounded. ${esc(coord)}.</p></li>
          <li>${icon('peak')}<h3>${esc(landscape[0])}</h3><p>${esc(landscape[1])}</p></li>
          <li>${icon('compass')}<h3>${esc(notice[0])}</h3><p>${esc(notice[1])}</p></li>
        </ul>
      </div>
      <a class="glance__stay" href="${R}stays/#${s.id}" data-tilt>
        ${photo(STAY_IMG[key], { ratio: 'r-45', reuse: true, cap: false, alt: `${s.name}, ${s.city}`, sizes: '(max-width:900px) 90vw, 30vw' }, ctx)}
        <span class="glance__stay-txt"><span class="label">Overnight${s.nights.length > 1 ? 's' : ''} · ${s.nights.length > 1 ? `nights ${s.nights.join(', ')}` : `night ${s.nights[0]}`}</span><b>${esc(s.name)}</b><span class="label">Image supplied for this stay · booking confirmed by the team</span></span>
      </a>
    </div>
  </div>
</section>`;
}

/** Stay card used in the itinerary day aside. */
export function dayStay(ctx, stay) {
  if (!stay) return '';
  return `<a class="daystay" href="${ctx.root}stays/#${stay.id}">${photo(STAY_IMG[stay.id], { ratio: 'r-43', reuse: true, cap: false, alt: `${stay.name}, ${stay.city}`, sizes: '(max-width:900px) 60vw, 20vw' }, ctx)}<span>${esc(stay.name)}, ${esc(stay.city)} ${ARROW.replace('<svg', '<svg width="14" height="14"')}</span></a>`;
}
export { daySpark };
