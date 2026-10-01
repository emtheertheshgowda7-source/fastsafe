# FASTSAFE — Smart FASTag & Highway Companion

FASTSAFE is a responsive PWA prototype for the Innovexa Drive Safe Hackathon. It combines FASTag intelligence, toll and journey context, highway services, safety support and the FASTAG RESCUE recovery workflow in one operator-aware experience.

## Demo access

Use the demo driver profile for the primary flow. Demo OTP is **123456** and the registered vehicle is **KA-05-AB-1234**. The application visibly marks simulated toll, payment, QR, location, ANPR/OCR and service data. No real money is charged and no government, bank, toll-gate or emergency system is connected.

## Architecture

The React/Vite/TypeScript frontend uses typed demo domain services and a server-authoritative boundary for the rescue state machine. The structure is ready to replace demo adapters with authenticated Express APIs and managed MySQL tables for users, roles, vehicles, FASTags, transactions, tolls, journeys, expenses, services, rescue requests, payments, QR tokens, incidents, notifications and audit events.

## Development

```bash
pnpm install
pnpm dev
pnpm typecheck
pnpm build
```

The Preview service listens on port 3000. The route manifest is available at `/manus-routes.json`.

## Security posture

Production must use HTTPS/TLS, bcrypt or Argon2id password hashing, secure sessions, MFA for admins, server-side validation, rate limiting, CSRF/CORS controls, signed short-lived QR tokens, single-use verification, least-privilege RBAC and audit logging without OTP/payment secrets. Demo mode is intentionally deterministic for presentation and does not claim production security certification.

## Future integrations

Authorized NETC/FASTag and toll operator APIs, a compliant payment gateway, maps and directions, trusted ANPR/OCR, emergency provider APIs, verified highway data and an LLM with controlled data access can be connected through adapters without changing the UI flow.

## Known limitations

All operational data is clearly marked demo data. The map is a route visualization rather than live GPS. The AI assistant uses deterministic answers from the demo dataset. The operator verification is a simulated server workflow and does not open a physical gate.
