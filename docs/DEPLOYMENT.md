# FASTSAFE Deployment

## Static hosting

Run `pnpm install --frozen-lockfile && pnpm build`, then publish the `dist/` directory to a static host. Configure SPA fallback to `index.html` and preserve `/manus-routes.json` and `/manifest.webmanifest` as static files.

## Container hosting

```bash
docker build -t fastsafe .
docker run --rm -p 3000:3000 fastsafe
```

The container serves the built SPA on port 3000 and supports `PORT` for platform runtimes.

## Managed Preview

The Manus-managed project Preview uses `pnpm dev` on port 3000. The current project checkpoint and Preview URL are the reference live demonstration for this task.

## Production integration checklist

Before connecting real systems, add server-side authentication, database migrations, secure session cookies, Argon2id/bcrypt password hashing, OTP rate limiting, signed expiring QR tokens, payment-webhook confirmation, operator authorization, structured audit logs, secret-manager values and a verified map/traffic/emergency provider. Do not remove demo labels until each integration is authorized and tested.
