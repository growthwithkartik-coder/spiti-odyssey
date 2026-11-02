import { photo, ARROW, CONTACT, waLink, icon, priceRange } from '../../tools/lib.mjs';

export default function contact(ctx) {
  const R = ctx.root;
  return {
    title: 'Contact the team',
    description: 'Contact DemiGod House about the Spiti Odyssey New Year Mountain Party & Trek (27 December 2026): dev@demigodhouse.com, +91 83558 97803, WhatsApp.',
    og: 'tabo-surroundings',
    body: `
<section class="sec sec--night" style="padding-top:calc(var(--nav-h) + 80px);min-height:100svh;display:flex;align-items:center" aria-labelledby="ct-h">
  <div class="wrap grid" style="align-items:end">
    <div class="c-1-7">
      <div class="crumb label"><a href="${R}">Home</a><span>/</span><span>Contact</span></div>
      <h1 class="display d-xl" id="ct-h">Talk to<br><em>the team.</em></h1>
      <p class="lede" style="margin-top:24px">Questions about the route, the stays, the cold or the dates? Reach the team directly.</p>
      <div class="contact-big" style="margin-top:44px">
        <a href="mailto:${CONTACT.email}"><small>Email</small><span>${CONTACT.email}</span></a>
        <a href="tel:${CONTACT.phoneIntl}"><small>Phone</small>${CONTACT.phoneDisplay}</a>
        <a href="${CONTACT.instagramUrl}" target="_blank" rel="noopener"><small>Instagram</small>@${CONTACT.instagram}</a>
        ${waLink() ? `<a href="${waLink()}" target="_blank" rel="noopener"><small>WhatsApp</small>Chat with us</a>` : ''}
      </div>
    </div>
    <div class="c-8-12">
      <div data-reveal="mask">${photo('tabo-surroundings', { ratio: 'r-34' }, ctx)}</div>
      <ul class="featlist featlist--1" style="margin-top:26px">
        <li>${icon('calendar')}<h3>Ask about dates</h3><p>The event starts 27 December 2026; the team confirms availability.</p></li>
        <li>${icon('rupee')}<h3>Ask for a quote</h3><p>${priceRange()} per person, itemised in writing.</p></li>
      </ul>
      <div class="note" style="margin-top:26px">For trip-specific questions the <a href="${R}booking/">enquiry form</a> is quickest — it sends everything the team needs in one go.</div>
      <div class="btn-row" style="margin-top:20px"><a class="btn" href="${R}booking/">Plan your escape ${ARROW}</a></div>
    </div>
  </div>
</section>`,
  };
}
