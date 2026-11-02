import { topo, esc, CONTACT, TRIP } from '../../tools/lib.mjs';

export default function policy(ctx) {
  const R = ctx.root;
  const secs = [
    ['how', 'How booking works', `<p>Booking the Spiti Odyssey happens in three stages, and no money changes hands until the last one.</p>
      <ul><li><b>Enquiry.</b> You send your details through the <a href="${R}booking/">enquiry form</a>, by email or by phone. This reserves nothing and costs nothing.</li>
      <li><b>Confirmation.</b> The team replies with the confirmed departure year, availability, package total, inclusions and the written terms.</li>
      <li><b>Payment.</b> Only after you have accepted the confirmed package and terms is a payment requested — through a verified payment method named by the operator.</li></ul>`],
    ['status', 'Current status of this package', `<p>At the time this site was published:</p>
      <ul><li>The event starts on 27 December 2026; availability and the final schedule are <b>to be confirmed</b>.</li>
      <li>The trip price is <b>₹1,60,000–₹2,30,000 per person</b>, depending on the package selected and its confirmed inclusions. Your written quote itemises stays, transport, meals, permits and taxes before any payment is requested.</li>
      <li>The itinerary is subject to final confirmation, including where the Chandigarh stay fits.</li>
      <li>This website does not take payments.</li></ul>`],
    ['cancellation', 'Cancellation and refunds', `<p><span class="status-chip">Awaiting brochure</span></p><p>The cancellation schedule and refund terms are set out in the expedition brochure (“${esc(TRIP.brochure.name)}”), which was not supplied with this version of the site. They will be published here word for word once received.</p>
      <p>Until then, please do not rely on any cancellation or refund terms other than those given to you in writing by The Backpack Tribe.</p>`],
    ['changes', 'Weather, roads and itinerary changes', `<p>Winter travel in Kinnaur and Spiti depends on snowfall, road clearance and official advisories. Roads can close or slow without warning, and some high villages may be inaccessible on a given day.</p>
      <p>This site never guarantees access to a specific place. How changes for safety or weather are handled — including any effect on cost — will be defined in the operator’s final written terms.</p>`],
    ['health', 'Health, fitness and altitude', `<p>The route reaches roughly 3,800 metres at Kaza and higher on day excursions. Travellers should consider their health before booking and consult a doctor if they have heart, lung or blood-pressure conditions or are pregnant. Specific age, fitness or medical requirements for this departure have not yet been confirmed.</p>`],
    ['payments', 'Payments and security', `<p>When online payment is introduced, it will run through a recognised payment gateway with server-side order creation and verification. A booking will only be treated as confirmed after the payment has been verified with the gateway — never simply because a button was pressed.</p>
      <p>The team will never ask for card numbers, passwords or one-time codes over the phone, email or social media.</p>`],
    ['privacy', 'Your information', `<p>The enquiry form asks only for what is needed to reply: your name, email, phone number, number of travellers, preferred departure, room-sharing preference and any questions. It is used to respond to your enquiry and is not sold or shared for marketing.</p>`],
    ['contact', 'Questions about these terms', `<p>Email <a href="mailto:${CONTACT.email}">${CONTACT.email}</a>, call <a href="tel:${CONTACT.phoneIntl}">${CONTACT.phoneDisplay}</a>, or message <a href="${CONTACT.instagramUrl}" target="_blank" rel="noopener">@${CONTACT.instagram}</a> on Instagram.</p>`],
  ];
  return {
    title: 'Booking policy — terms and cancellation',
    description: 'How booking The Spiti Odyssey works, the current status of the package, and where the cancellation, refund and payment terms stand.',
    body: `
<section class="phero phero--short" aria-labelledby="bp-h" style="background:var(--pine)">
  ${topo(111)}
  <div class="phero__in">
    <div class="crumb label"><a href="${R}">Home</a><span>/</span><span>Booking policy</span></div>
    <h1 class="display d-xxl" id="bp-h">Booking<br><em>policy.</em></h1>
    <p class="lede">Plain terms about how booking works, what is settled, and what is not yet — written so nobody pays for something that has not been defined.</p>
  </div>
</section>
<section class="sec sec--night" aria-label="Policy">
  <div class="wrap grid">
    <nav class="c-1-3" aria-label="On this page"><div class="toc">${secs.map(([id, h]) => `<a href="#${id}">${h}</a>`).join('')}</div></nav>
    <div class="c-4-12 doc">${secs.map(([id, h, t]) => `<section id="${id}" aria-labelledby="${id}-h"><h2 id="${id}-h">${h}</h2>${t}</section>`).join('')}
    <p class="cap" style="margin-top:50px">This page describes the current status of the website and package. It is not legal advice and will be replaced by the operator’s final written terms.</p></div>
  </div>
</section>`,
  };
}
