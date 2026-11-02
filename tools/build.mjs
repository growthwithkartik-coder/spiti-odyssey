// Static site builder — no dependencies. `node tools/build.mjs`
// Composes every page module in src/pages/ with the shared layout and
// writes public/<route>/index.html. Fails if an image is placed twice.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { esc, setPage, USAGE, srcFor, MARK, COMPASS, ARROW, TRIP, CONTACT, PRICING, STAYS, ITINERARY, IMAGES, SITE_URL, IMAGE_MODE, departureLine, inr, waLink, WA_ICON, priceRange, pricePP, elevation, marquee } from './lib.mjs';
import { ENQUIRY, PAYMENTS, PENDING } from '../src/data/trip.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'public');

export const ROUTES = [
  { route: '',                    mod: 'home',            nav: 'Home' },
  { route: 'the-odyssey',         mod: 'odyssey',         nav: 'The Odyssey', primary: true },
  { route: 'itinerary',           mod: 'itinerary',       nav: 'Itinerary', primary: true },
  { route: 'destinations',        mod: 'destinations',    nav: 'Destinations', primary: true },
  { route: 'destinations/kufri',  mod: 'dest-kufri',      nav: 'Kufri', sub: true },
  { route: 'destinations/kalpa',  mod: 'dest-kalpa',      nav: 'Kalpa', sub: true },
  { route: 'destinations/kaza',   mod: 'dest-kaza',       nav: 'Kaza', sub: true },
  { route: 'destinations/rampur', mod: 'dest-rampur',     nav: 'Rampur', sub: true },
  { route: 'stays',               mod: 'stays',           nav: 'Stays', primary: true },
  { route: 'experience',          mod: 'experience',      nav: 'Experience', primary: true },
  { route: 'new-year-escape',     mod: 'new-year',        nav: 'New Year Escape' },
  { route: 'gallery',             mod: 'gallery',         nav: 'Gallery' },
  { route: 'trip-details',        mod: 'trip-details',    nav: 'Trip Details', primary: true },
  { route: 'booking',             mod: 'booking',         nav: 'Plan Your Escape' },
  { route: 'booking-policy',      mod: 'booking-policy',  nav: 'Booking Policy' },
  { route: 'contact',             mod: 'contact',         nav: 'Contact' },
  { route: 'credits',             mod: 'credits',         nav: 'Photo Credits', hidden: true },
];

import crypto from 'node:crypto';
const VER = crypto.createHash('md5').update(['assets/css/odyssey.css','assets/css/party.css','assets/css/expedition.css','assets/js/site.js','assets/js/party.js','assets/js/expedition.js','assets/js/payments.js'].map((f) => { try { return fs.readFileSync(path.join(OUT, f)); } catch { return ''; } }).join('') + Date.now()).digest('hex').slice(0, 8);

function nav(ctx) {
  const L = (r) => `${ctx.root}${r.route ? r.route + '/' : ''}`;
  const cur = (r) => (ctx.route === r.route || (r.route && ctx.route.startsWith(r.route + '/')) ? ' aria-current="page"' : '');
  const primary = ROUTES.filter((r) => r.primary).map((r) => `<li><a href="${L(r)}"${cur(r)}>${esc(r.nav)}</a></li>`).join('');
  const main = ROUTES.filter((r) => !r.sub && !r.hidden).map((r) => `<li><a href="${L(r)}"${ctx.route === r.route ? ' aria-current="page"' : ''}><span>${esc(r.nav)}</span></a></li>`).join('');
  const subs = ROUTES.filter((r) => r.sub).map((r) => `<li><a href="${L(r)}"${ctx.route === r.route ? ' aria-current="page"' : ''}>${esc(r.nav)}</a></li>`).join('');
  const party = `<li><a href="${ctx.root}#party" class="nav__party">The Party</a></li>`;
  return `<a class="skip" href="#main">Skip to content</a>
<div class="scrollbar" aria-hidden="true"><i data-scrollbar></i></div>
<header class="nav" data-nav>
  <a class="brand" href="${ctx.root}" aria-label="New Year in Spiti — home">${MARK}<span class="brand__txt"><b>New Year in Spiti</b></span></a>
  <nav aria-label="Primary"><ul class="nav__links" data-navlinks>${party}${primary}<li class="nav__ind" aria-hidden="true" data-nav-ind></li></ul></nav>
  <div class="nav__right">${COMPASS}<a class="btn btn--sm" href="${ctx.root}booking/">Plan your escape</a>
  <button class="menu-btn" type="button" aria-expanded="false" aria-controls="site-menu" data-menu-btn><span>Menu</span><i aria-hidden="true"></i></button></div>
</header>
<div class="menu" id="site-menu" data-menu aria-label="Site menu">
  <div class="menu__bg" aria-hidden="true">${elevation({ mini: true, id: 'mn' })}</div>
  <nav aria-label="All pages"><ul class="menu__list">${main}</ul></nav>
  <div class="menu__aside">
    <div><p class="label">Destinations</p><ul class="menu__list menu__list--small">${subs}</ul></div>
    <div class="menu__trip"><p class="label">The trip</p>
      <p class="menu__price"><b>${priceRange()}</b><span>per person</span></p>
      <p class="label">${esc(departureLine())} · 8 days / 7 nights</p></div>
    <div><p class="label">Talk to the team</p>
      <p><a href="mailto:${CONTACT.email}">${CONTACT.email}</a><br><a href="tel:${CONTACT.phoneIntl}">${CONTACT.phoneDisplay}</a>${waLink() ? `<br><a href="${waLink()}" target="_blank" rel="noopener">WhatsApp</a>` : ''}<br><a href="${CONTACT.instagramUrl}" target="_blank" rel="noopener">@${CONTACT.instagram}</a></p></div>
  </div>
</div>`;
}

function footer(ctx) {
  const L = (r) => `${ctx.root}${r}/`;
  return `<footer class="foot">
  <div class="foot__horizon" aria-hidden="true">${elevation({ mini: true, id: 'ft' })}</div>
  <div class="wrap">
    <div class="foot__close">
      <p class="label label--amber">End of the road · Day 08 · back to ~215 m</p>
      <p class="foot__line" data-split>The road ends where it began. <em>The year doesn’t.</em></p>
      <div class="btn-row"><a class="btn" href="${ctx.root}booking/">Plan your escape ${ARROW}</a><a class="btn btn--ghost" href="${ctx.root}itinerary/">Read the eight days</a></div>
    </div>
    <div class="foot__cols">
      <div class="foot__brand">
        <a class="brand" href="${ctx.root}">${MARK}<span class="brand__txt"><b>The Spiti Odyssey</b><span>New Year Mountain Party &amp; Trek</span></span></a>
        <p class="foot__about">Eight days and seven nights by road from Delhi into Kinnaur and the cold desert of Spiti, then back down the Sutlej — with the New Year welcomed at altitude. Event starts ${esc(departureLine())}.</p>
        <p class="foot__price"><span class="label">Trip price</span><b>${priceRange()}</b><span class="label">per person</span></p>
      </div>
      <div><p class="label">The journey</p><ul>
        <li><a href="${L('the-odyssey')}">The Odyssey</a></li><li><a href="${L('itinerary')}">Itinerary</a></li><li><a href="${L('new-year-escape')}">New Year Escape</a></li><li><a href="${L('experience')}">Experience</a></li><li><a href="${L('gallery')}">Gallery</a></li></ul></div>
      <div><p class="label">Places &amp; stays</p><ul>
        <li><a href="${L('destinations')}">Destinations</a></li><li><a href="${L('destinations/kufri')}">Kufri</a></li><li><a href="${L('destinations/kalpa')}">Kalpa</a></li><li><a href="${L('destinations/kaza')}">Kaza</a></li><li><a href="${L('destinations/rampur')}">Rampur</a></li><li><a href="${L('stays')}">Stays</a></li></ul></div>
      <div><p class="label">Practical</p><ul>
        <li><a href="${L('trip-details')}">Trip details &amp; pricing</a></li><li><a href="${L('booking')}">Enquire</a></li><li><a href="${L('booking-policy')}">Booking policy</a></li><li><a href="${L('contact')}">Contact</a></li><li><a href="${L('credits')}">Photo credits</a></li></ul></div>
      <div class="foot__contact"><p class="label">Contact</p><ul>
        <li><a href="mailto:${CONTACT.email}">${CONTACT.email}</a></li>
        <li><a href="tel:${CONTACT.phoneIntl}">${CONTACT.phoneDisplay}</a></li>
        ${waLink() ? `<li><a class="foot__wa" href="${waLink()}" target="_blank" rel="noopener">${WA_ICON}<span>WhatsApp us</span></a></li>` : ''}
        <li><a href="${CONTACT.instagramUrl}" target="_blank" rel="noopener">@${CONTACT.instagram}</a></li></ul></div>
    </div>
    <div class="foot__base">
      <p class="foot__managed">Operated and Managed by DemiGod House</p>
      <span class="label">© 2026 The Spiti Odyssey · The Backpack Tribe</span>
      <span class="label">Route photographs: Wikimedia Commons contributors · <a href="${L('credits')}">credits &amp; licences</a></span>
    </div>
  </div>
  <div class="foot__big" aria-hidden="true"><span>Spiti</span> <em>Odyssey</em></div>
</footer>`;
}

function layout(ctx, page) {
  const title = page.title ? `${page.title} — The Spiti Odyssey` : 'The Spiti Odyssey — New Year Mountain Party & Trek in the Himalaya · from 27 December 2026';
  const og = page.og ? srcFor(page.og, 1280) : '';
  const ogAbs = og && og.startsWith('http') ? og : (SITE_URL && og ? `${SITE_URL}/${og}` : '');
  const canonical = SITE_URL ? `<link rel="canonical" href="${SITE_URL}/${ctx.route ? ctx.route + '/' : ''}">` : '';
  return `<!doctype html>
<html lang="en-IN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(page.description)}">
<meta name="theme-color" content="#0a0b0d">
${canonical}
<meta property="og:type" content="website">
<meta property="og:site_name" content="The Spiti Odyssey">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(page.description)}">
${ogAbs ? `<meta property="og:image" content="${ogAbs}">\n<meta name="twitter:image" content="${ogAbs}">` : ''}
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="${ctx.root}assets/img/favicon.svg" type="image/svg+xml">
<link rel="preload" href="${ctx.root}assets/fonts/instrument-serif-latin-400-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${ctx.root}assets/fonts/archivo-latin-wdth-normal.woff2" as="font" type="font/woff2" crossorigin>
${IMAGE_MODE === 'remote' ? '<link rel="preconnect" href="https://upload.wikimedia.org" crossorigin>' : ''}
<link rel="stylesheet" href="${ctx.root}assets/css/odyssey.css?v=${VER}">
<link rel="stylesheet" href="${ctx.root}assets/css/party.css?v=${VER}">
<link rel="stylesheet" href="${ctx.root}assets/css/expedition.css?v=${VER}">
<script>document.documentElement.classList.add('js');window.SITE_ROOT=${JSON.stringify(ctx.root)};</script>
</head>
<body data-page="${esc(ctx.mod)}">
${nav(ctx)}
<main id="main">
${page.body}
</main>
${footer(ctx)}
<div class="grain" aria-hidden="true"></div>
<div class="cursor" aria-hidden="true"><span>View</span></div>
${waLink() ? `<a class="wa-float" href="${waLink()}" target="_blank" rel="noopener" aria-label="Chat with DemiGod House on WhatsApp (opens WhatsApp)">${WA_ICON}<span class="wa-float__tip">WhatsApp us</span></a>` : ''}
<div class="mcta" data-mcta><a class="btn btn--glow" href="${ctx.root}booking/">Book · ${priceRange()} <small>pp</small></a></div>
<script src="${ctx.root}assets/js/vendor/gsap.min.js" defer></script>
<script src="${ctx.root}assets/js/vendor/ScrollTrigger.min.js" defer></script>
<script src="${ctx.root}assets/js/config.js?v=${VER}" defer></script>
<script src="${ctx.root}assets/js/site.js?v=${VER}" defer></script>
<script src="${ctx.root}assets/js/party.js?v=${VER}" defer></script>
<script src="${ctx.root}assets/js/expedition.js?v=${VER}" defer></script>
</body>
</html>
`;
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const sitemap = [];
  for (const r of ROUTES) {
    const depth = r.route ? r.route.split('/').length : 0;
    const ctx = { route: r.route, mod: r.mod, root: '../'.repeat(depth) };
    setPage(r.route || '/');
    const mod = await import(path.join(ROOT, 'src/pages', r.mod + '.mjs'));
    const page = mod.default(ctx);
    const html = layout(ctx, page);
    const dir = path.join(OUT, r.route);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html);
    sitemap.push(r.route);
    console.log('✓', '/' + r.route, `(${(html.length / 1024).toFixed(0)} KB)`);
  }
  // 404
  {
    const ctx = { route: '404', mod: 'notfound', root: '/' };
    setPage('404');
    const page = (await import(path.join(ROOT, 'src/pages/notfound.mjs'))).default(ctx);
    fs.writeFileSync(path.join(OUT, '404.html'), layout(ctx, page));
  }
  // runtime config for the booking form (public values only)
  const cfg = { trip: TRIP, contact: CONTACT, pricing: PRICING, enquiry: ENQUIRY, payments: { ...PAYMENTS }, stays: STAYS.map(({ id, city, name }) => ({ id, city, name })), itinerary: ITINERARY.map(({ n, title }) => ({ n, title })), imageMode: IMAGE_MODE };
  fs.writeFileSync(path.join(OUT, 'assets/js/config.js'), `/* Generated by tools/build.mjs from src/data/trip.mjs — edit that file, not this one. Public values only. */\nwindow.ODYSSEY_CONFIG = ${JSON.stringify(cfg, null, 2)};\n`);
  if (SITE_URL) fs.writeFileSync(path.join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemap.map((r) => `  <url><loc>${SITE_URL}/${r ? r + '/' : ''}</loc></url>`).join('\n')}\n</urlset>\n`);
  fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\n${SITE_URL ? `Sitemap: ${SITE_URL}/sitemap.xml\n` : ''}`);
  // asset inventory
  const inv = Object.entries(IMAGES).map(([id, im]) => im.supplied
    ? ({ id, usedOn: USAGE.get(id) || null, place: im.place, supplied: true, sourceFile: im.source, intendedSection: im.section, original: `${im.w}x${im.h}`, files: `public/assets/img/supplied/${id}-800|1600.(jpg|webp)` })
    : ({ id, usedOn: USAGE.get(id) || null, place: im.place, note: im.note || null, author: im.by, licence: im.lic, source: 'https://commons.wikimedia.org/wiki/File:' + im.file, original: `${im.w}x${im.h}` }));
  const missingSupplied = inv.filter((i) => i.supplied && !i.usedOn).map((i) => i.id);
  if (missingSupplied.length) throw new Error('Supplied image(s) not placed: ' + missingSupplied.join(', '));
  fs.writeFileSync(path.join(ROOT, 'docs/asset-inventory.json'), JSON.stringify(inv, null, 2));
  const unused = inv.filter((i) => !i.usedOn).map((i) => i.id);
  console.log(`\nImages placed: ${USAGE.size}/${inv.length}${unused.length ? ' · unused: ' + unused.join(', ') : ''}`);
}
main().catch((e) => { console.error('\nBUILD FAILED:', e.message); process.exit(1); });
