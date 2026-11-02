// =====================================================================
// Spiti Odyssey — optional backend (Node 18+, no dependencies)
//
//   POST /api/enquiry          store an enquiry (and optionally forward it)
//   POST /api/payments/order   create a Razorpay order (server-side amount)
//   POST /api/payments/verify  verify a Razorpay payment signature + status
//   GET  /api/health
//
// Payments are OFF unless PAYMENTS_ENABLED=true AND keys AND a confirmed
// deposit amount are set. The browser never chooses the amount and never
// sees the secret. See server/README.md.
// =====================================================================
import http from 'node:http';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const env = process.env;
const PORT = Number(env.PORT || 8787);
const ORIGINS = (env.ALLOWED_ORIGINS || '').split(',').map((s) => s.trim()).filter(Boolean);
const DATA_DIR = path.resolve(env.DATA_DIR || './data');
const PAY = {
  enabled: env.PAYMENTS_ENABLED === 'true',
  keyId: env.RAZORPAY_KEY_ID || '',
  secret: env.RAZORPAY_KEY_SECRET || '',
  depositPaise: Number(env.CONFIRMED_DEPOSIT_PAISE || 0), // confirmed per-traveller deposit, in paise
  merchant: env.MERCHANT_NAME || '',
};
fs.mkdirSync(DATA_DIR, { recursive: true });
const file = (n) => path.join(DATA_DIR, n);
const append = (n, obj) => fs.appendFileSync(file(n), JSON.stringify(obj) + '\n');
const readLines = (n) => (fs.existsSync(file(n)) ? fs.readFileSync(file(n), 'utf8').split('\n').filter(Boolean).map((l) => JSON.parse(l)) : []);

function send(res, code, body, origin) {
  const h = { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' };
  if (origin && ORIGINS.includes(origin)) { h['Access-Control-Allow-Origin'] = origin; h['Vary'] = 'Origin'; }
  res.writeHead(code, h); res.end(JSON.stringify(body));
}
function body(req, limit = 20_000) {
  return new Promise((resolve, reject) => {
    let d = ''; req.on('data', (c) => { d += c; if (d.length > limit) { reject(new Error('Payload too large')); req.destroy(); } });
    req.on('end', () => { try { resolve(JSON.parse(d || '{}')); } catch { reject(new Error('Invalid JSON')); } });
  });
}
const str = (v, max) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
const hits = new Map(); // naive per-IP rate limit
const limited = (ip) => { const now = Date.now(); const a = (hits.get(ip) || []).filter((t) => now - t < 60_000); a.push(now); hits.set(ip, a); return a.length > 10; };

async function razorpay(pathname, payload, method = 'POST') {
  const auth = Buffer.from(`${PAY.keyId}:${PAY.secret}`).toString('base64');
  const r = await fetch('https://api.razorpay.com/v1' + pathname, { method, headers: { Authorization: 'Basic ' + auth, 'Content-Type': 'application/json' }, body: method === 'POST' ? JSON.stringify(payload) : undefined });
  const j = await r.json(); if (!r.ok) throw new Error(j?.error?.description || 'Gateway error'); return j;
}

const server = http.createServer(async (req, res) => {
  const origin = req.headers.origin;
  const ip = req.socket.remoteAddress || '';
  if (req.method === 'OPTIONS') {
    if (origin && ORIGINS.includes(origin)) res.writeHead(204, { 'Access-Control-Allow-Origin': origin, 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Max-Age': '600', Vary: 'Origin' });
    else res.writeHead(403); return res.end();
  }
  try {
    const url = new URL(req.url, 'http://x');
    if (req.method === 'GET' && url.pathname === '/api/health') return send(res, 200, { ok: true, payments: PAY.enabled && !!PAY.keyId && PAY.depositPaise > 0 }, origin);

    if (req.method === 'POST' && url.pathname === '/api/enquiry') {
      if (limited(ip)) return send(res, 429, { ok: false, error: 'Too many requests. Please try again in a minute.' }, origin);
      const b = await body(req);
      if (str(b.company, 100)) return send(res, 200, { ok: true }, origin); // honeypot
      const e = { name: str(b.name, 120), email: str(b.email, 160), phone: str(b.phone, 20), travellers: Number(b.travellers), departure: str(b.departure, 120), roomSharing: str(b.roomSharing, 60), packagePref: str(b.packagePref, 80), travelMode: str(b.travelMode, 80), questions: str(b.questions, 2000) };
      const errors = [];
      if (e.name.length < 2) errors.push('name'); if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e.email)) errors.push('email');
      if (e.phone.replace(/\D/g, '').length < 10) errors.push('phone'); if (!Number.isInteger(e.travellers) || e.travellers < 1 || e.travellers > 30) errors.push('travellers');
      if (!e.departure) errors.push('departure'); if (!e.roomSharing) errors.push('roomSharing');
      if (errors.length) return send(res, 400, { ok: false, error: 'Please check: ' + errors.join(', ') }, origin);
      const reference = 'SPT-' + crypto.randomBytes(3).toString('hex').toUpperCase();
      append('enquiries.jsonl', { reference, receivedAt: new Date().toISOString(), ...e });
      if (env.ENQUIRY_WEBHOOK_URL) { fetch(env.ENQUIRY_WEBHOOK_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ reference, ...e }) }).catch((err) => console.error('webhook failed', err.message)); }
      return send(res, 200, { ok: true, reference }, origin);
    }

    if (url.pathname.startsWith('/api/payments/')) {
      if (!(PAY.enabled && PAY.keyId && PAY.secret && PAY.depositPaise > 0)) return send(res, 503, { ok: false, error: 'Online payment is not enabled.' }, origin);
      if (req.method === 'POST' && url.pathname === '/api/payments/order') {
        if (limited(ip)) return send(res, 429, { ok: false, error: 'Too many requests.' }, origin);
        const b = await body(req);
        const travellers = Number(b.travellers); const reference = str(b.reference, 40);
        if (!Number.isInteger(travellers) || travellers < 1 || travellers > 30) return send(res, 400, { ok: false, error: 'Invalid traveller count.' }, origin);
        // idempotency: one open order per enquiry reference
        const existing = readLines('orders.jsonl').reverse().find((o) => o.reference === reference && o.status === 'created');
        if (existing && reference) return send(res, 200, { ok: true, orderId: existing.orderId, amount: existing.amount, currency: 'INR', keyId: PAY.keyId, merchant: PAY.merchant }, origin);
        const amount = PAY.depositPaise * travellers; // amount decided here, never by the browser
        const order = await razorpay('/orders', { amount, currency: 'INR', receipt: reference || 'spiti-' + Date.now(), notes: { trip: 'Spiti Odyssey', travellers: String(travellers) } });
        append('orders.jsonl', { orderId: order.id, reference, amount, status: 'created', at: new Date().toISOString() });
        return send(res, 200, { ok: true, orderId: order.id, amount, currency: 'INR', keyId: PAY.keyId, merchant: PAY.merchant }, origin);
      }
      if (req.method === 'POST' && url.pathname === '/api/payments/verify') {
        const b = await body(req);
        const orderId = str(b.razorpay_order_id, 60), paymentId = str(b.razorpay_payment_id, 60), sig = str(b.razorpay_signature, 200);
        const known = readLines('orders.jsonl').find((o) => o.orderId === orderId);
        if (!known) return send(res, 400, { ok: false, status: 'unknown_order' }, origin);
        const expected = crypto.createHmac('sha256', PAY.secret).update(`${orderId}|${paymentId}`).digest('hex');
        const valid = sig.length === expected.length && crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
        if (!valid) return send(res, 400, { ok: false, status: 'signature_mismatch' }, origin);
        if (readLines('payments.jsonl').some((p) => p.paymentId === paymentId && p.status === 'captured')) return send(res, 200, { ok: true, status: 'captured', duplicate: true }, origin);
        const pay = await razorpay('/payments/' + encodeURIComponent(paymentId), null, 'GET'); // confirm with the gateway itself
        const status = pay.order_id === orderId && pay.amount === known.amount ? pay.status : 'mismatch';
        append('payments.jsonl', { paymentId, orderId, status, amount: pay.amount, at: new Date().toISOString() });
        return send(res, 200, { ok: status === 'captured' || status === 'authorized', status }, origin);
      }
    }
    send(res, 404, { ok: false, error: 'Not found' }, origin);
  } catch (err) {
    console.error(err);
    send(res, 500, { ok: false, error: 'Server error' }, origin);
  }
});
server.listen(PORT, () => console.log(`Spiti Odyssey API on :${PORT} · payments ${PAY.enabled ? 'ENABLED' : 'disabled'}`));
