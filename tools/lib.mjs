// Shared building blocks for every page (the site's "components").
import { IMAGES } from '../src/data/images.mjs';
import { TRIP, CONTACT, PRICING, STAYS, ITINERARY } from '../src/data/trip.mjs';

import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
const IMG_DIR = fileURLToPath(new URL('../public/assets/img/', import.meta.url));
// Photos are bundled in public/assets/img/ (<id>-800.jpg and <id>-1600.jpg). If they are
// present the site uses them; otherwise it falls back to Wikimedia. IMAGE_MODE=remote|local overrides.
const bundled = fs.existsSync(IMG_DIR) && fs.readdirSync(IMG_DIR).some((f) => /-(800|1600)\.jpg$/.test(f));
export const IMAGE_MODE = process.env.IMAGE_MODE === 'remote' ? 'remote' : process.env.IMAGE_MODE === 'local' || bundled ? 'local' : 'remote';
export const LOCAL_WIDTHS = [800, 1600];
// per-photo: use whichever bundled sizes exist; anything missing loads from Wikimedia
const localHas = (id, w) => fs.existsSync(IMG_DIR + `${id}-${w}.jpg`);
export const hasLocal = (id) => localHas(id, 800) || localHas(id, 1600);
const localSize = (id, w) => { const want = w <= 960 ? 800 : 1600; return localHas(id, want) ? want : (want === 800 ? 1600 : 800); };
export const SITE_URL = (process.env.SITE_URL || '').replace(/\/$/, '');
export const WIDTHS = [500, 960, 1280, 1920];

export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export const inr = (n) => '₹' + Number(n).toLocaleString('en-IN');
export const TBC = 'To be confirmed';

/* ------------------------------------------------------------------ */
/* Image usage register: an id may appear on exactly one page section. */
/* ------------------------------------------------------------------ */
export const USAGE = new Map();
let CURRENT_PAGE = '';
export const setPage = (p) => { CURRENT_PAGE = p; };

const encFile = (f) => encodeURIComponent(decodeURIComponent(f)).replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29');
const SUP = (id, w, ext = 'jpg') => `assets/img/supplied/${id}-${IMAGES[id].w <= 800 || w <= 960 ? 800 : 1600}.${ext}`;
export function srcFor(id, w, root = '') {
  const im = IMAGES[id];
  if (!im) throw new Error('Unknown image id: ' + id);
  if (im.supplied) return root + SUP(id, w);
  if (IMAGE_MODE === 'local' && hasLocal(id)) return `${root}assets/img/${id}-${localSize(id, w)}.jpg`;
  const f = encFile(im.file);
  if (w >= im.w) return `https://upload.wikimedia.org/wikipedia/commons/${im.hash}/${f}`;
  return `https://upload.wikimedia.org/wikipedia/commons/thumb/${im.hash}/${f}/${w}px-${f}`;
}
export const isSupplied = (id) => !!IMAGES[id]?.supplied;
export const commonsUrl = (id) => 'https://commons.wikimedia.org/wiki/File:' + encFile(IMAGES[id].file);
const licUrl = (lic) => {
  const m = lic.match(/CC (BY(?:-SA)?) (\d\.\d)/);
  if (m) return `https://creativecommons.org/licenses/${m[1].toLowerCase()}/${m[2]}/`;
  if (/CC0/.test(lic)) return 'https://creativecommons.org/publicdomain/zero/1.0/';
  return null;
};

export function caption(id, { short = false, plain = false } = {}) {
  const im = IMAGES[id];
  if (im.supplied) {
    const tag = im.stay ? 'Image supplied for this stay' : im.mood ? 'Mood image · supplied' : 'Supplied image';
    return plain ? `${esc(im.place)} — ${tag}` : `${esc(im.place)} — <span class="sup">${tag}</span>`;
  }
  if (plain) return `${esc(im.place)} — Photo: ${esc(im.by)} · ${esc(im.lic)} · Wikimedia Commons`;
  const lu = licUrl(im.lic);
  const credit = `Photo: <a href="${commonsUrl(id)}" target="_blank" rel="noopener">${esc(im.by)}</a> · ${lu ? `<a href="${lu}" target="_blank" rel="noopener">${esc(im.lic)}</a>` : esc(im.lic)} · Wikimedia Commons`;
  if (short) return `${esc(im.place)} — ${credit}`;
  return `${esc(im.place)}${im.note ? `. <span class="ill">${esc(im.note)}</span>` : ''} — ${credit}`;
}

/**
 * photo(id, opts) → <figure>
 * opts: ratio ('r-169' etc), cover (absolute fill), cls, sizes, eager, zoom, cap (true|false|'short'), alt, pos (object-position)
 */
export function photo(id, o = {}, ctx) {
  const im = IMAGES[id];
  if (!im) throw new Error('Unknown image id: ' + id);
  if (!o.reuse) {
    if (USAGE.has(id)) throw new Error(`Image "${id}" used twice: ${USAGE.get(id)} and ${CURRENT_PAGE}`);
    USAGE.set(id, CURRENT_PAGE);
  }
  const root = ctx?.root ?? '';
  const sizes = o.sizes || (o.cover ? '100vw' : '(max-width: 900px) 100vw, 50vw');
  if (im.supplied) return suppliedPhoto(id, im, o, root, sizes);
  const set = IMAGE_MODE === 'local' && hasLocal(id)
    ? [...new Set(LOCAL_WIDTHS.map((w) => localSize(id, w)))].map((w) => `${root}assets/img/${id}-${w}.jpg ${Math.min(w, im.w)}w`).join(', ')
    : WIDTHS.filter((w) => w <= Math.max(im.w, 500)).map((w) => `${srcFor(id, w, root)} ${Math.min(w, im.w)}w`).join(', ');
  const def = srcFor(id, o.cover ? 1920 : 1280, root);
  const alt = o.alt ?? im.place;
  const pos = o.pos ? ` style="object-position:${o.pos}"` : '';
  const img = `<img src="${def}" srcset="${set}" sizes="${sizes}" alt="${esc(alt)}" width="${im.w}" height="${im.h}"${o.eager ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async" data-img="${id}"${o.zoom ? ' data-zoom' : ''}${pos}>`;
  const cap = o.cap === false ? '' : `<figcaption>${caption(id, { short: o.cap === 'short', plain: o.cap === 'plain' })}</figcaption>`;
  if (o.cover) return `<figure class="ph ph--cover ${o.shade ? 'shade ' + (o.shade === true ? '' : o.shade) : ''} ${o.cls || ''}">${img}${cap}</figure>`;
  return `<figure class="ph ph--frame ${o.cls || ''}"><div class="ph__img ${o.ratio || 'r-32'} ${o.shade ? 'shade' : ''}">${img}</div>${cap}</figure>`;
}

function suppliedPhoto(id, im, o, root, sizes) {
  const ws = im.w <= 800 ? [800] : [800, 1600];
  const set = (ext) => ws.map((w) => `${root}assets/img/supplied/${id}-${w}.${ext} ${Math.min(w, im.w)}w`).join(', ');
  const alt = o.alt ?? im.alt ?? im.place;
  const pos = o.pos ? ` style="object-position:${o.pos}"` : '';
  const img = `<picture><source type="image/webp" srcset="${set('webp')}" sizes="${sizes}"><img src="${root}${SUP(id, o.cover ? 1920 : 1280)}" srcset="${set('jpg')}" sizes="${sizes}" alt="${esc(alt)}" width="${im.w}" height="${im.h}"${o.eager ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async" data-img="${id}"${o.zoom ? ' data-zoom' : ''}${pos}></picture>`;
  const cap = o.cap === false ? '' : `<figcaption>${caption(id, { plain: o.cap === 'plain' })}</figcaption>`;
  if (o.cover) return `<figure class="ph ph--cover ph--sup ${o.shade ? 'shade ' + (o.shade === true ? '' : o.shade) : ''} ${o.cls || ''}">${img}${cap}</figure>`;
  return `<figure class="ph ph--frame ph--sup ${o.cls || ''}"><div class="ph__img ${o.ratio || 'r-32'} ${o.shade ? 'shade' : ''}">${img}</div>${cap}</figure>`;
}

/* ------------------------------------------------------------------ */
/* Procedural graphics: ridgelines, contours, stay windows             */
/* ------------------------------------------------------------------ */
export function rng(seed) { let a = seed >>> 0; return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

/** Midpoint-displacement ridge. Returns a closed path filling to the bottom. */
export function ridge(seed, { w = 1600, h = 600, base = 0.55, amp = 0.35, rough = 0.55, levels = 8, peak = null } = {}) {
  const r = rng(seed);
  let pts = [base + (r() - 0.5) * amp, base + (r() - 0.5) * amp];
  let a = amp;
  for (let l = 0; l < levels; l++) {
    const nx = [];
    for (let i = 0; i < pts.length - 1; i++) { nx.push(pts[i], (pts[i] + pts[i + 1]) / 2 + (r() - 0.5) * a); }
    nx.push(pts[pts.length - 1]); pts = nx; a *= rough;
  }
  if (peak) { // raise a dominant summit at peak.x (0..1)
    pts = pts.map((y, i) => { const x = i / (pts.length - 1); const d = Math.abs(x - peak.x); return y - Math.max(0, peak.h * (1 - d / peak.wd)); });
  }
  const step = w / (pts.length - 1);
  let d = `M0 ${h} L0 ${(pts[0] * h).toFixed(1)}`;
  pts.forEach((y, i) => { d += ` L${(i * step).toFixed(1)} ${(Math.max(0.02, y) * h).toFixed(1)}`; });
  return d + ` L${w} ${h} Z`;
}

/** Topographic contour rings as an inline SVG. */
export function topo(seed, { w = 1600, h = 1000, centers = 3, rings = 7, cls = '' } = {}) {
  const r = rng(seed);
  let paths = '';
  for (let c = 0; c < centers; c++) {
    const cx = r() * w, cy = r() * h, ph = [r() * 6.28, r() * 6.28, r() * 6.28];
    const k = 2 + Math.floor(r() * 3);
    for (let i = 1; i <= rings; i++) {
      const R = i * (40 + r() * 18);
      const N = 40; const pts = [];
      for (let j = 0; j < N; j++) {
        const t = (j / N) * Math.PI * 2;
        const rr = R * (1 + 0.18 * Math.sin(t * k + ph[0]) + 0.09 * Math.sin(t * (k + 2) + ph[1] + i * 0.2) + 0.05 * Math.sin(t * 7 + ph[2]));
        pts.push([cx + Math.cos(t) * rr * 1.25, cy + Math.sin(t) * rr * 0.8]);
      }
      let d = `M${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
      for (let j = 0; j < N; j++) {
        const p0 = pts[(j - 1 + N) % N], p1 = pts[j], p2 = pts[(j + 1) % N], p3 = pts[(j + 2) % N];
        const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6], c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
        d += ` C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
      }
      paths += `<path d="${d}Z"/>`;
    }
  }
  return `<svg class="topo ${cls}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid slice" aria-hidden="true" data-topo>${paths}</svg>`;
}

const STAY_ART = {
  delhi:      { sky: ['#1b1d2e', '#5b3a46', '#c2703f'], seeds: [11, 12], ridge: '#141522', skyline: true },
  kufri:      { sky: ['#0f1a22', '#28414d', '#8fa9b4'], seeds: [21, 22, 23], ridge: '#0d1714', pines: true, snow: '#dfe7ea' },
  kalpa:      { sky: ['#0d1420', '#3d4d6a', '#e2a06a'], seeds: [31, 32], ridge: '#101722', peak: true, snow: '#f4ede4' },
  kaza:       { sky: ['#070a12', '#151d33', '#2b3550'], seeds: [41, 42, 43], ridge: '#2c2219', stars: true, desert: ['#6b5240', '#4a3a2e', '#2f251d'] },
  rampur:     { sky: ['#14201f', '#3c5650', '#b98c5a'], seeds: [51, 52], ridge: '#0f1816', gorge: true },
  chandigarh: { sky: ['#1a1c22', '#6e4a3c', '#e6a462'], seeds: [61, 62], ridge: '#191a1f', lake: true },
};
/** An illustrated "window onto the place" — clearly labelled as illustration on the page. */
export function stayArt(id) {
  const a = STAY_ART[id];
  const r = rng(a.seeds[0] * 7);
  const W = 800, H = 1000;
  let g = `<defs><linearGradient id="sky-${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a.sky[0]}"/><stop offset=".6" stop-color="${a.sky[1]}"/><stop offset="1" stop-color="${a.sky[2]}"/></linearGradient>
  <radialGradient id="glow-${id}" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffd6a0" stop-opacity=".9"/><stop offset="1" stop-color="#ffd6a0" stop-opacity="0"/></radialGradient>
  <clipPath id="win-${id}"><path d="M120 960 V330 a280 280 0 0 1 560 0 V960 Z"/></clipPath></defs>`;
  g += `<rect width="${W}" height="${H}" fill="#120f0d"/>`;
  let scene = `<rect width="${W}" height="${H}" fill="url(#sky-${id})"/>`;
  if (a.stars) for (let i = 0; i < 90; i++) scene += `<circle cx="${(r() * W).toFixed(0)}" cy="${(r() * 520).toFixed(0)}" r="${(r() * 1.6 + .3).toFixed(2)}" fill="#fff" opacity="${(r() * .7 + .2).toFixed(2)}"/>`;
  if (!a.stars) scene += `<circle cx="${a.lake ? 520 : 560}" cy="${a.lake ? 600 : 560}" r="160" fill="url(#glow-${id})"/>`;
  if (a.peak) scene += `<path d="${ridge(a.seeds[0], { w: W, h: H, base: .62, amp: .12, peak: { x: .55, h: .36, wd: .3 }, rough: .6 })}" fill="#43506a"/><path d="${ridge(a.seeds[0] + 3, { w: W, h: H, base: .5, amp: .1, peak: { x: .55, h: .24, wd: .14 }, rough: .62 })}" fill="${a.snow}" opacity=".9" style="clip-path:inset(0 0 55% 0)"/>`;
  if (a.desert) a.desert.forEach((c, i) => { scene += `<path d="${ridge(a.seeds[0] + i * 5, { w: W, h: H, base: .55 + i * .1, amp: .2, rough: .5 })}" fill="${c}"/>`; });
  if (a.snow && !a.peak) scene += `<path d="${ridge(a.seeds[1], { w: W, h: H, base: .55, amp: .22, rough: .55 })}" fill="${a.snow}" opacity=".85"/>`;
  scene += `<path d="${ridge(a.seeds[1] + 9, { w: W, h: H, base: .74, amp: .16, rough: .5 })}" fill="${a.ridge}" opacity=".85"/>`;
  if (a.gorge) scene += `<path d="M0 520 L360 900 L440 900 L800 480 L800 1000 L0 1000Z" fill="#0b1311"/><path d="M380 1000 C 392 930 408 905 400 860" stroke="#9cb9c6" stroke-width="5" fill="none" opacity=".7"/>`;
  if (a.lake) scene += `<rect x="0" y="780" width="${W}" height="220" fill="#24262c"/><rect x="0" y="780" width="${W}" height="3" fill="#e6a462" opacity=".5"/><ellipse cx="520" cy="800" rx="120" ry="10" fill="#ffd6a0" opacity=".35"/>`;
  if (a.skyline) { let x = 0; while (x < W) { const bw = 30 + r() * 70, bh = 60 + r() * 230; scene += `<rect x="${x.toFixed(0)}" y="${(1000 - bh - 120).toFixed(0)}" width="${bw.toFixed(0)}" height="${(bh + 120).toFixed(0)}" fill="#0f1019"/>`; for (let k = 0; k < 6; k++) if (r() > .55) scene += `<rect x="${(x + 6 + r() * (bw - 14)).toFixed(0)}" y="${(1000 - 120 - r() * bh).toFixed(0)}" width="4" height="6" fill="#f0b46a" opacity=".8"/>`; x += bw + 4; } }
  if (a.pines) for (let i = 0; i < 26; i++) { const px = r() * W, ps = 40 + r() * 90, py = 860 + r() * 140; scene += `<path d="M${px} ${py - ps} L${px - ps * .28} ${py} L${px + ps * .28} ${py}Z" fill="#08110e"/>`; }
  g += `<g clip-path="url(#win-${id})">${scene}</g>`;
  // window frame + mullions + sill glow
  g += `<path d="M120 960 V330 a280 280 0 0 1 560 0 V960" fill="none" stroke="#2a201a" stroke-width="34"/><path d="M400 52 V960 M120 560 H680" stroke="#2a201a" stroke-width="14"/><path d="M98 960 H702" stroke="#e0a35a" stroke-width="3" opacity=".6"/><rect x="0" y="972" width="${W}" height="28" fill="#1c1511"/>`;
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Illustration: a window looking out over ${esc(STAYS.find((s) => s.id === id).city)}" preserveAspectRatio="xMidYMid slice">${g}</svg>`;
}

/* ------------------------------------------------------------------ */
/* Small components                                                     */
/* ------------------------------------------------------------------ */
export const ARROW = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12h17M14 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>';
export const MARK = '<svg class="brand__mark" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="19" fill="none" stroke="currentColor" stroke-opacity=".35"/><circle cx="26" cy="15" r="4.2" fill="#e0a35a"/><path d="M4 30 L14 16 L19 22 L24 14 L36 30 Z" fill="currentColor"/><path d="M14 16 L16.6 19.6 L19 18.4 L21.4 20 L24 14" fill="none" stroke="#0b1210" stroke-width="1.2"/></svg>';
export const COMPASS = '<svg class="compass" viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" stroke-opacity=".5"/><g stroke="currentColor" stroke-opacity=".6"><path d="M20 2v4M20 34v4M2 20h4M34 20h4"/></g><g class="needle"><path d="M20 7 L23 20 L20 33 L17 20Z" fill="none" stroke="currentColor"/><path d="M20 7 L23 20 L17 20Z" fill="currentColor"/></g></svg>';

export function priceBlock({ compact = false, tone = '' } = {}) {
  const P = PRICING.package;
  const rows = PRICING.lines.map((l) => `<tr><th scope="row">${esc(l.label)}</th><td class="${l.amount == null ? 'tbc' : ''}">${l.amount == null ? 'Itemised in your quote' : inr(l.amount)}</td></tr>`).join('');
  return `<div class="price price--trip ${tone}" data-reveal>
    <span class="label label--amber">${esc(P.label)}</span>
    <p class="price__fig"><span class="price__from">${inr(P.from)}</span><span class="price__dash">–</span><span class="price__to">${inr(P.to)}</span></p>
    <p class="price__basis">${esc(P.basis)}</p>
    <p class="price__note">${esc(P.note)}</p>
    ${compact ? '' : `<table><caption class="sr">What the quote covers</caption><tbody>
      ${rows}
      <tr class="total"><th scope="row">Trip price range</th><td>${priceRange()} ${esc(P.basis)}</td></tr>
    </tbody></table>`}
  </div>`;
}

export function departureLine() {
  const d = TRIP.departure;
  return `${d.day}${d.year ? ' ' + d.year : ''}`;
}

/* ------------------------------------------------------------------ */
/* New Year 2026 edition — shared components (added)                   */
/* ------------------------------------------------------------------ */
export const lakh = (n) => '₹' + (n / 100000).toFixed(2) + ' lakh';
export const priceFrom = () => inr(PRICING.package.from);
export const priceTo = () => inr(PRICING.package.to);
export const priceRange = () => `${priceFrom()}–${priceTo()}`;
export const pricePP = () => `${priceRange()} per person`;
export const waLink = () => CONTACT.whatsapp ? `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappMessage || '')}` : null;
export const WA_ICON = '<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16.04 3C8.9 3 3.1 8.78 3.1 15.9c0 2.28.6 4.5 1.74 6.46L3 29l6.83-1.79a12.9 12.9 0 0 0 6.2 1.58h.01c7.13 0 12.94-5.79 12.94-12.9C28.98 8.78 23.17 3 16.04 3Zm0 23.6h-.01a10.7 10.7 0 0 1-5.46-1.5l-.39-.23-4.05 1.06 1.08-3.94-.25-.4a10.65 10.65 0 0 1-1.64-5.7c0-5.9 4.82-10.7 10.73-10.7 5.9 0 10.72 4.8 10.72 10.7 0 5.9-4.81 10.7-10.73 10.7Zm5.88-8.01c-.32-.16-1.91-.94-2.2-1.05-.3-.1-.51-.16-.73.16-.21.32-.83 1.05-1.02 1.26-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.6-1.9-1.79-2.22-.19-.32-.02-.5.14-.66.15-.14.32-.37.48-.56.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.73-1.75-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.56.08-.85.4-.3.31-1.12 1.09-1.12 2.66 0 1.57 1.15 3.09 1.31 3.3.16.21 2.26 3.44 5.47 4.83.77.33 1.36.52 1.83.67.77.24 1.47.21 2.02.13.62-.09 1.91-.78 2.18-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z"/></svg>';
export const SPARKLE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z" fill="currentColor"/></svg>';

/** Large decorative compass — rotates slowly (CSS), still under reduced motion. */
export function bigCompass(cls = '') {
  const ticks = Array.from({ length: 72 }, (_, i) => { const a = (i * 5) * Math.PI / 180, r1 = i % 18 === 0 ? 82 : i % 6 === 0 ? 88 : 92; return `<path d="M${(100 + Math.sin(a) * r1).toFixed(1)} ${(100 - Math.cos(a) * r1).toFixed(1)}L${(100 + Math.sin(a) * 96).toFixed(1)} ${(100 - Math.cos(a) * 96).toFixed(1)}"/>`; }).join('');
  return `<svg class="bigcompass ${cls}" viewBox="0 0 200 200" aria-hidden="true"><g class="bigcompass__rose"><circle cx="100" cy="100" r="97" fill="none"/><circle cx="100" cy="100" r="70" fill="none" stroke-dasharray="2 4"/><g class="bigcompass__ticks">${ticks}</g>
    <path class="bigcompass__star" d="M100 18 L108 92 L182 100 L108 108 L100 182 L92 108 L18 100 L92 92 Z"/><path class="bigcompass__n" d="M100 18 L108 92 L92 92 Z"/>
    <text x="100" y="13" text-anchor="middle">N</text><text x="191" y="104" text-anchor="middle">E</text><text x="100" y="199" text-anchor="middle">S</text><text x="9" y="104" text-anchor="middle">W</text></g></svg>`;
}

/** Countdown to the event start. Computed live in the browser; falls back to the date text. */
export function countdown({ cls = '' } = {}) {
  const d = TRIP.departure;
  return `<div class="countdown ${cls}" data-countdown="${esc(d.iso)}" role="timer" aria-live="off">
    <div class="countdown__grid" data-cd-grid>
      <div><b data-cd="d">--</b><span class="label">Days</span></div>
      <div><b data-cd="h">--</b><span class="label">Hours</span></div>
      <div><b data-cd="m">--</b><span class="label">Minutes</span></div>
      <div><b data-cd="s">--</b><span class="label">Seconds</span></div>
    </div>
    <p class="countdown__done" data-cd-done hidden>The Spiti Odyssey New Year edition began on ${esc(departureLine())}. Thank you to everyone who joined — ask the team about the next one.</p>
    <p class="label countdown__to">Counting down to ${esc(departureLine())} · event start</p>
  </div>`;
}

/** Prominent booking band: event, date, price range, CTAs. */
export function bookingBand(ctx, { id = '', heading = true } = {}) {
  const R = ctx.root; const P = PRICING.package; const wa = waLink();
  return `<section class="bookband" ${id ? `id="${id}"` : ''} aria-labelledby="bb-h-${id || 'x'}">
  <div class="bookband__lights" aria-hidden="true"><i></i><i></i><i></i></div>
  <div class="wrap bookband__in">
    <div class="bookband__head">
      <p class="label label--amber kicker">Pricing &amp; booking</p>
      ${heading ? `<h2 class="display d-l" id="bb-h-${id || 'x'}">Spiti Odyssey — New Year 2026</h2>` : `<h2 class="sr" id="bb-h-${id || 'x'}">Spiti Odyssey — New Year 2026</h2>`}
      <p class="bookband__date"><span class="label">Event starts</span><b>${esc(departureLine())}</b></p>
    </div>
    <div class="bookband__price">
      <div><span class="label">Starting from</span><b data-price="from">${inr(P.from)}</b></div>
      <div class="bookband__sep" aria-hidden="true"></div>
      <div><span class="label">Up to · ${esc(P.basis)}</span><b data-price="to">${inr(P.to)}</b></div>
      <p class="bookband__note">Prices are ${esc(P.basis)} (${lakh(P.from)}–${lakh(P.to).replace('₹', '')}). ${esc(P.note)}</p>
    </div>
    <div class="btn-row bookband__cta">
      <a class="btn btn--glow" href="${R}booking/">Book your spot ${ARROW}</a>
      ${wa ? `<a class="btn btn--ghost" href="${wa}" target="_blank" rel="noopener">WhatsApp the team</a>` : ''}
      <a class="btn btn--ghost" href="tel:${CONTACT.phoneIntl}">Call ${esc(CONTACT.phoneDisplay)}</a>
    </div>
  </div>
</section>`;
}

/** Sound-wave / equaliser graphic (CSS-animated bars). */
export function equaliser(n = 36, cls = '') {
  const r = rng(909);
  return `<div class="eq ${cls}" aria-hidden="true">${Array.from({ length: n }, (_, i) => `<i style="--h:${(25 + r() * 75).toFixed(0)}%;--d:${(0.6 + r() * 0.9).toFixed(2)}s;--o:${(-r()).toFixed(2)}s"></i>`).join('')}</div>`;
}

export const stayById = (id) => STAYS.find((s) => s.id === id);
export const dayLink = (root, n) => `${root}itinerary/#day-${n}`;
export { TRIP, CONTACT, PRICING, STAYS, ITINERARY, IMAGES };

/* ================================================================== */
/* CINEMATIC EDITION (Oct 2026) — expedition graphics & components     */
/* ================================================================== */

/** Approximate altitudes along the journey, ordered by day (not distance).
 *  Same rounded figures used elsewhere on the site; not survey data. */
export const PROFILE = [
  { name: 'Delhi', alt: 215, day: 1 }, { name: 'Kufri', alt: 2700, day: 2 }, { name: 'Kalpa', alt: 2960, day: 3 },
  { name: 'Nako', alt: 3600, day: 4 }, { name: 'Tabo', alt: 3280, day: 4.5 }, { name: 'Kaza', alt: 3800, day: 4.9 },
  { name: 'Key', alt: 4100, day: 5 }, { name: 'Langza', alt: 4400, day: 6 }, { name: 'Rampur', alt: 1000, day: 7 }, { name: 'Delhi', alt: 215, day: 8 },
];

/** Elevation profile SVG. `mini` = no labels (hero strip). Paths carry data-draw for scroll drawing. */
export function elevation({ cls = '', mini = false, w = 1600, h = mini ? 160 : 520, id = 'ev' } = {}) {
  const padL = mini ? 0 : 70, padR = mini ? 0 : 40, padT = mini ? 22 : 70, padB = mini ? 10 : 70;
  const X = (d) => padL + ((d - 1) / 7) * (w - padL - padR);
  const Y = (a) => padT + (1 - a / 4600) * (h - padT - padB);
  const pts = PROFILE.map((p) => [X(p.day), Y(p.alt)]);
  // smooth Catmull-Rom → Bézier
  let d = `M${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6], c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  const area = `${d} L${pts[pts.length - 1][0].toFixed(1)} ${h - padB} L${pts[0][0].toFixed(1)} ${h - padB} Z`;
  const grid = mini ? '' : [0, 1000, 2000, 3000, 4000].map((a) => `<g class="ev__grid"><path d="M${padL} ${Y(a).toFixed(1)} H${w - padR}"/><text x="${padL - 12}" y="${(Y(a) + 4).toFixed(1)}" text-anchor="end">${a.toLocaleString('en-IN')} m</text></g>`).join('');
  const days = mini ? '' : Array.from({ length: 8 }, (_, i) => `<text class="ev__day" x="${X(i + 1).toFixed(1)}" y="${h - padB + 34}" text-anchor="middle">DAY ${String(i + 1).padStart(2, '0')}</text>`).join('');
  const marks = PROFILE.map((p, i) => {
    const [x, y] = pts[i]; const up = i % 2 === 0;
    return `<g class="ev__mark" data-ev-mark="${i}" style="--i:${i}"><path class="ev__stem" d="M${x.toFixed(1)} ${y.toFixed(1)} V${(h - padB).toFixed(1)}"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${mini ? 3 : 6}"/>${mini ? '' : `<text x="${x.toFixed(1)}" y="${(y + (up ? -22 : -22)).toFixed(1)}" text-anchor="middle"><tspan class="ev__name">${p.name}</tspan><tspan class="ev__alt" x="${x.toFixed(1)}" dy="-18">~${p.alt.toLocaleString('en-IN')} m</tspan></text>`}</g>`;
  }).join('');
  return `<svg class="ev ${mini ? 'ev--mini' : ''} ${cls}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="${mini ? 'none' : 'xMidYMid meet'}" role="img" aria-label="Approximate altitude profile by day: Delhi about 215 m, Kufri 2,700 m, Kalpa 2,960 m, Nako 3,600 m, Tabo 3,280 m, Kaza 3,800 m, Key 4,100 m, Langza 4,400 m, Rampur 1,000 m, back to Delhi." data-ev>
    <defs><linearGradient id="${id}-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--amber)" stop-opacity=".34"/><stop offset="1" stop-color="var(--amber)" stop-opacity="0"/></linearGradient></defs>
    ${grid}<path class="ev__area" d="${area}" fill="url(#${id}-fill)"/><path class="ev__line" d="${d}" pathLength="1" data-draw/>${marks}${days}
  </svg>`;
}

/** A compact per-day sparkline with the day's position marked. */
export function daySpark(n) {
  const w = 320, h = 70;
  const X = (d) => 6 + ((d - 1) / 7) * (w - 12), Y = (a) => 8 + (1 - a / 4600) * (h - 16);
  const pts = PROFILE.map((p) => `${X(p.day).toFixed(1)},${Y(p.alt).toFixed(1)}`).join(' ');
  const at = PROFILE.filter((p) => Math.floor(p.day) === n).sort((a, b) => b.alt - a.alt)[0] || PROFILE[0];
  return `<svg class="spark" viewBox="0 0 ${w} ${h}" aria-hidden="true"><polyline points="${pts}" class="spark__all"/><path d="M${X(n).toFixed(1)} 0 V${h}" class="spark__now"/><circle cx="${X(at.day).toFixed(1)}" cy="${Y(at.alt).toFixed(1)}" r="4"/></svg>`;
}

/** Infinite marquee band (CSS animated; JS links its speed to scroll velocity). */
export function marquee(items, { cls = '', sep = '✕' } = {}) {
  const row = items.map((t) => `<span>${t}</span><i aria-hidden="true">${sep}</i>`).join('');
  return `<div class="marquee ${cls}" aria-hidden="true" data-marquee><div class="marquee__track"><div class="marquee__row">${row}</div><div class="marquee__row">${row}</div></div></div>`;
}

/** Topographic contour divider: animated line set between sections. */
export function contourDivider(seed = 1, { cls = '' } = {}) {
  const r = rng(seed); const W = 1600, H = 120;
  const lines = Array.from({ length: 6 }, (_, k) => {
    let d = `M0 ${(20 + k * 16).toFixed(0)}`;
    for (let x = 0; x <= W; x += 80) d += ` S${x + 40} ${(20 + k * 16 + (r() - .5) * 26).toFixed(0)} ${x + 80} ${(20 + k * 16 + (r() - .5) * 18).toFixed(0)}`;
    return `<path d="${d}" pathLength="1" data-draw style="--k:${k}"/>`;
  }).join('');
  return `<div class="contour-div ${cls}" aria-hidden="true"><svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none">${lines}</svg></div>`;
}

/** Field-journal chapter marker. */
export function chapterMark(no, label, coord = '') {
  return `<div class="chmark" data-reveal><span class="chmark__no">No.&nbsp;${String(no).padStart(2, '0')}</span><span class="chmark__rule"></span><span class="chmark__lbl">${label}</span>${coord ? `<span class="chmark__coord">${coord}</span>` : ''}</div>`;
}

/** Custom line icons for experiences and trip details. */
export const ICONS = {
  stupa: '<path d="M24 5v5M20 10h8M18 16c0-3 3-6 6-6s6 3 6 6M15 16h18l-2 6H17zM13 22h22v4H13zM16 26h16v12H16zM11 38h26v4H11z"/>',
  village: '<path d="M5 40h38M8 40V24h12v16M20 40V18h12v22M32 40V28h8v12M8 24l6-6 6 6M20 18l6-6 6 6M12 30h4M24 24h4M24 31h4"/>',
  camera: '<path d="M6 16h8l3-5h14l3 5h8v22H6z"/><circle cx="24" cy="26" r="7"/><path d="M36 20h2"/>',
  road: '<path d="M18 42 22 6M30 42 26 6M24 10v4M24 19v5M24 30v6M6 42h36"/>',
  fire: '<path d="M24 6c2 7 10 10 10 20a10 10 0 0 1-20 0c0-5 3-8 5-10 0 4 2 6 4 6-2-6 1-11 1-16zM12 42l24-4M12 38l24 4"/>',
  music: '<path d="M18 36V10l20-4v26"/><circle cx="13" cy="36" r="5"/><circle cx="33" cy="32" r="5"/><path d="M18 17l20-4"/>',
  snow: '<path d="M24 4v40M7 14l34 20M7 34l34-20M19 7l5 5 5-5M19 41l5-5 5 5M7 20l7 0-4 6M41 28l-7 0 4-6"/>',
  vehicle: '<path d="M4 31h40v6H4zM8 31l5-11h17l7 11M30 20h6l6 11"/><circle cx="14" cy="38" r="4"/><circle cx="35" cy="38" r="4"/>',
  bed: '<path d="M5 38V12M5 28h38v10M43 28v-6a5 5 0 0 0-5-5H22v11M10 22a4 4 0 1 0 8 0 4 4 0 1 0-8 0"/>',
  peak: '<path d="M3 40 17 16l7 10 6-8 15 22zM14 21l3 3 3-3 4 5"/>',
  compass: '<circle cx="24" cy="24" r="18"/><path d="M24 10l5 14-5 14-5-14z"/><path d="M24 10l5 14h-10z" fill="currentColor"/>',
  calendar: '<path d="M6 12h36v30H6zM6 20h36M15 6v10M33 6v10M13 27h5M22 27h5M31 27h5M13 34h5M22 34h5"/>',
  rupee: '<path d="M14 9h22M14 17h22M14 9h6a8 8 0 0 1 0 16h-6l16 16"/>',
  thermo: '<path d="M20 30V9a4 4 0 0 1 8 0v21a8 8 0 1 1-8 0z"/><path d="M24 16v18"/><circle cx="24" cy="36" r="3" fill="currentColor"/>',
  altitude: '<path d="M4 40 18 18l6 8 8-14 12 28z"/><path d="M38 4v12M34 8l4-4 4 4"/>',
  flag: '<path d="M6 10h36M8 10l4 10 4-10M18 10l4 10 4-10M28 10l4 10 4-10"/>',
};
export const icon = (k, cls = '') => `<svg class="ico ${cls}" viewBox="0 0 48 48" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${ICONS[k]}</svg>`;

/** Splits a short title into per-letter spans for the hero reveal (aria-label keeps it readable). */
export const letters = (t) => [...t].map((c, i) => c === ' ' ? ' ' : `<span class="lt" style="--li:${i}" aria-hidden="true">${esc(c)}</span>`).join('');
