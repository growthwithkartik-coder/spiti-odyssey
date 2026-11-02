# Optional backend

Node 18+ with no dependencies. Run it with `node server.mjs`, using the environment variables from `../.env.example`.

| Endpoint | Purpose |
|---|---|
| `GET /api/health` | `{ ok, payments }` |
| `POST /api/enquiry` | Validates the enquiry and appends it to `data/enquiries.jsonl` (optionally forwarding it to `ENQUIRY_WEBHOOK_URL`). Returns `{ ok: true, reference }`. Includes a simple per-IP rate limit and a honeypot field (`company`). |
| `POST /api/payments/order` | `{ travellers, reference }`. Creates a Razorpay order for `CONFIRMED_DEPOSIT_PAISE × travellers`; the amount is never taken from the browser. Reuses an open order for the same reference. |
| `POST /api/payments/verify` | Razorpay checkout response. Checks the HMAC signature, then fetches the payment from Razorpay and checks the order id and amount. Returns `{ ok, status }`. |

Payment routes answer `503 Online payment is not enabled` until all of these are set: `PAYMENTS_ENABLED=true`, both keys, and a non-zero confirmed deposit.

The JSONL files are a minimal record store. For production, replace them with a database and add email notifications.
