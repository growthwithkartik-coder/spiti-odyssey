import { topo, ARROW } from '../../tools/lib.mjs';

export default function notfound() {
  return {
    title: 'Off the map',
    description: 'This page could not be found.',
    body: `<section class="phero" style="background:var(--pine)" aria-labelledby="nf-h">${topo(404)}
  <div class="phero__in"><p class="label label--amber">Error 404 · position unknown</p><h1 class="display d-xxl" id="nf-h">Off the<br>map.</h1>
  <p class="lede">This road does not exist — or it has been closed by snow. Head back to known territory.</p>
  <div class="btn-row" style="margin-top:30px"><a class="btn" href="/">Home ${ARROW}</a><a class="btn btn--ghost" href="/itinerary/">Itinerary</a></div></div></section>`,
  };
}
