import { photo, esc, ARROW, priceBlock, CONTACT, bookingBand, inr, PRICING, departureLine, waLink, WA_ICON } from '../../tools/lib.mjs';
import { ENQUIRY, PAYMENTS } from '../data/trip.mjs';

export default function booking(ctx) {
  const R = ctx.root;
  const opt = (arr) => arr.map((o) => `<option>${esc(o)}</option>`).join('');
  return {
    title: 'Plan your escape — enquiry',
    description: 'Send an enquiry for The Spiti Odyssey — New Year Mountain Party & Trek, event starts 27 December 2026. Trip price ₹1,60,000–₹2,30,000 per person.',
    og: 'spiti-river-valley',
    body: `
<section class="phero phero--short" aria-labelledby="bk-h">
  ${photo('spiti-river-valley', { cover: true, shade: true, eager: true }, ctx)}
  <div class="phero__in">
    <div class="crumb label"><a href="${R}">Home</a><span>/</span><span>Plan your escape</span></div>
    <h1 class="display d-xxl" id="bk-h">Plan your<br><em>escape.</em></h1>
    <p class="lede">Tell the team who is coming and what you would like to know. You will hear back with confirmed details — this is an enquiry, not a payment.</p>
  </div>
</section>

${bookingBand(ctx, { id: 'pricing' })}

<section class="sec sec--night" id="enquire" aria-label="Enquiry form">
  <div class="wrap grid">
    <div class="c-1-7">
      <ol class="steps" aria-label="Enquiry steps"><li class="on" data-step-ind="1">1 · Your details</li><li data-step-ind="2">2 · Review</li><li data-step-ind="3">3 · Send</li></ol>
      <form class="form" data-enquiry novalidate aria-describedby="bk-intro">
        <p class="full prose" id="bk-intro" style="font-size:16px;margin:0">Fields marked <span class="amber">*</span> are required. We only ask for what is needed to reply to you.</p>
        <div data-step="1" class="full form" style="display:grid">
          <div class="field full"><label for="f-name">Full name <i>*</i></label><input id="f-name" name="name" autocomplete="name" required maxlength="120"><span class="err" id="e-name" aria-live="polite"></span></div>
          <div class="field"><label for="f-email">Email address <i>*</i></label><input id="f-email" name="email" type="email" autocomplete="email" required maxlength="160"><span class="err" id="e-email" aria-live="polite"></span></div>
          <div class="field"><label for="f-phone">Phone number <i>*</i></label><input id="f-phone" name="phone" type="tel" autocomplete="tel" required inputmode="tel" maxlength="20" placeholder="+91"><span class="err" id="e-phone" aria-live="polite"></span></div>
          <div class="field"><label for="f-trav">Number of travellers <i>*</i></label><input id="f-trav" name="travellers" type="number" min="1" max="30" value="1" required><span class="err" id="e-travellers" aria-live="polite"></span></div>
          <div class="field"><label for="f-room">Room-sharing preference <i>*</i></label><select id="f-room" name="roomSharing" required><option value="">Choose…</option>${opt(ENQUIRY.roomSharing)}</select><span class="hint">Final sharing basis at each property is still to be confirmed.</span><span class="err" id="e-roomSharing" aria-live="polite"></span></div>
          <div class="field full"><label for="f-pkg">Package preference <i>*</i></label><select id="f-pkg" name="packagePref" required data-pkg><option value="">Choose…</option>${opt(ENQUIRY.packagePreference)}</select><span class="hint">The trip is priced at ${inr(PRICING.package.from)}–${inr(PRICING.package.to)} per person. This tells the team which end of the range to quote; the final price depends on the package and its confirmed inclusions.</span><span class="err" id="e-packagePref" aria-live="polite"></span></div>
          <div class="field full"><label for="f-trav-mode">How will you travel? <i>*</i></label><select id="f-trav-mode" name="travelMode" required><option value="">Choose…</option><option>Group transport (Hilux)</option><option>Self-drive — I will bring my own car</option><option>Not sure yet</option></select><span class="hint">Seat numbers and self-drive arrangements are confirmed by the team.</span><span class="err" id="e-travelMode" aria-live="polite"></span></div>
          <div class="field full"><label for="f-dep">Preferred departure <i>*</i></label><select id="f-dep" name="departure" required>${opt(ENQUIRY.departures)}</select><span class="hint">The event starts on 27 December 2026. Availability and the final schedule still need confirmation.</span><span class="err" id="e-departure" aria-live="polite"></span></div>
          <div class="field full"><label for="f-q">Additional travel questions</label><textarea id="f-q" name="questions" maxlength="2000" placeholder="Fitness, dietary needs, travelling from outside Delhi, the Chandigarh stay…"></textarea></div>
          <label class="check full"><input type="checkbox" name="consent" id="f-consent" required><span>I agree that DemiGod House, which operates and manages the Spiti Odyssey, may contact me about this enquiry using the details above. <i class="amber">*</i></span></label>
          <span class="err full" id="e-consent" aria-live="polite" style="font-size:13px;color:#f08a7b"></span>
          <div class="full btn-row"><button class="btn" type="button" data-next>Review enquiry ${ARROW}</button></div>
        </div>
        <div data-step="2" class="full" hidden>
          <h2 class="display d-s" style="margin-bottom:18px">Check your enquiry</h2>
          <dl data-review style="display:grid;grid-template-columns:auto 1fr;gap:10px 24px;font-size:15px;margin:0 0 26px"></dl>
          <div class="btn-row"><button class="btn" type="submit" data-submit>Send enquiry ${ARROW}</button><button class="btn btn--ghost" type="button" data-back>Edit details</button></div>
        </div>
        <div class="full form-status" data-status role="status" aria-live="polite" tabindex="-1"></div>
      </form>
      <noscript><p class="note" style="margin-top:20px">This form needs JavaScript. You can enquire directly at <a href="mailto:${CONTACT.email}">${CONTACT.email}</a> or <a href="tel:${CONTACT.phoneIntl}">${CONTACT.phoneDisplay}</a>.</p></noscript>
    </div>
    <aside class="c-8-12">
      <div class="price psum" data-psum aria-live="polite">
        <span class="label label--amber">Your price summary</span>
        <p class="psum__event"><b>Spiti Odyssey — New Year 2026</b><small>Event starts ${esc(departureLine())}</small></p>
        <dl class="psum__rows">
          <dt>Trip price</dt><dd>${inr(PRICING.package.from)}–${inr(PRICING.package.to)} per person</dd>
          <dt>Your preference</dt><dd data-psum-pkg>Not chosen yet</dd>
          <dt>Travellers</dt><dd data-psum-trav>1</dd>
          <dt>Travel</dt><dd data-psum-mode>Not chosen yet</dd>
          <dt>Indicative total</dt><dd data-psum-ind>${inr(PRICING.package.from)}–${inr(PRICING.package.to)}</dd>
        </dl>
        <p class="price__note">The indicative total multiplies the per-person range by the number of travellers. ${esc(PRICING.package.note)} The team sends your confirmed quote before any payment.</p>
      </div>
      <div class="price" style="margin-top:20px">
        <span class="label">Online payment</span>
        <p class="pay-status" style="margin:14px 0 10px"><i aria-hidden="true"></i>${PAYMENTS.enabled ? 'Available' : 'Not enabled'}</p>
        <p class="price__note">No payment is taken on this website yet. A payment option will only appear after the package total and deposit are confirmed and a secure payment gateway is connected. Nobody from the team will ask you to pay through an unverified link.</p>
      </div>
      <div class="note" style="margin-top:24px">Prefer to talk? <a href="tel:${CONTACT.phoneIntl}">${CONTACT.phoneDisplay}</a> · <a href="mailto:${CONTACT.email}">${CONTACT.email}</a> · <a href="${CONTACT.instagramUrl}" target="_blank" rel="noopener">@${CONTACT.instagram}</a></div>
      ${waLink() ? `<a class="wa-card" href="${waLink()}" target="_blank" rel="noopener">${WA_ICON}<span><b>WhatsApp DemiGod House</b><small>${esc(CONTACT.phoneDisplay)} · opens WhatsApp</small></span></a>` : ''}
      <p class="cap" style="margin-top:18px">By enquiring you are not booking or paying. See the <a href="${R}booking-policy/">booking policy</a>.</p>
    </aside>
  </div>
</section>`,
  };
}
