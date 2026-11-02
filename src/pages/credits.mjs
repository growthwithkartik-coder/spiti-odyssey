import { esc, IMAGES, commonsUrl, USAGE } from '../../tools/lib.mjs';

export default function credits(ctx) {
  const R = ctx.root;
  const used = (id) => USAGE.has(id);
  const sup = Object.entries(IMAGES).filter(([id, im]) => im.supplied).map(([id, im]) => `<tr><td style="padding:10px 14px 10px 0;border-top:1px solid var(--line)">${esc(im.place)}</td><td style="border-top:1px solid var(--line);padding-right:14px">${esc(im.source)}</td><td style="border-top:1px solid var(--line)">${esc(im.section)}</td></tr>`).join('');
  const rows = Object.entries(IMAGES).filter(([id, im]) => !im.supplied && used(id)).map(([id, im]) => `<tr><td style="padding:10px 14px 10px 0;border-top:1px solid var(--line)">${esc(im.place)}</td><td style="border-top:1px solid var(--line);padding-right:14px">${esc(im.by)}</td><td style="border-top:1px solid var(--line);padding-right:14px" class="label">${esc(im.lic)}</td><td style="border-top:1px solid var(--line)"><a href="${commonsUrl(id)}" target="_blank" rel="noopener">Source</a></td></tr>`).join('');
  return {
    title: 'Photo credits and licences',
    description: 'Credits and licences for every photograph used on The Spiti Odyssey website. All photographs are from Wikimedia Commons contributors.',
    body: `
<section class="sec sec--night" style="padding-top:calc(var(--nav-h) + 80px)" aria-labelledby="cr-h">
  <div class="wrap">
    <div class="crumb label"><a href="${R}">Home</a><span>/</span><span>Photo credits</span></div>
    <h1 class="display d-xl" id="cr-h">Photo credits.</h1>
    <div class="prose" style="margin:26px 0 40px"><p>The site uses two sets of images. <b>Supplied images</b> were provided by the organisers for specific sections — the destinations, the stays, the party and the road — and are listed first with the section each was supplied for. <b>Route photographs</b> are real photographs of the region published on Wikimedia Commons by the photographers named below and used under the licence shown; photographs shared under CC BY-SA remain under that licence.</p></div>
    <h2 class="display d-m" style="margin:10px 0 20px">Supplied images</h2>
    <div style="overflow-x:auto;margin-bottom:60px"><table style="width:100%;border-collapse:collapse;font-size:14px;min-width:640px"><caption class="sr">Supplied images</caption>
      <thead><tr><th scope="col" class="label" style="text-align:left;padding:10px 0">Subject</th><th scope="col" class="label" style="text-align:left">Supplied file</th><th scope="col" class="label" style="text-align:left">Supplied for</th></tr></thead>
      <tbody>${sup}</tbody></table></div>
    <h2 class="display d-m" style="margin:10px 0 20px">Route photographs</h2>
    <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:14px;min-width:640px"><caption class="sr">Photograph credits</caption>
      <thead><tr><th scope="col" class="label" style="text-align:left;padding:10px 0">Subject</th><th scope="col" class="label" style="text-align:left">Photographer</th><th scope="col" class="label" style="text-align:left">Licence</th><th scope="col" class="label" style="text-align:left">File</th></tr></thead>
      <tbody>${rows}</tbody></table></div>
  </div>
</section>`,
  };
}
