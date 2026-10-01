# FASTSAFE Live Demonstration Runbook

## Start the demo

```bash
corepack enable
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Recommended presentation sequence

1. Start on the driver dashboard and point out the visible **DEMO ENVIRONMENT** label.
2. Show the FASTag balance of ₹1,240, next toll Maddur, recent transaction FS-MDR-1156 and the journey cost card.
3. Open **FASTAG RESCUE** from the left rail or the prominent dashboard action.
4. Confirm the 100 m recovery zone near Maddur Toll Plaza.
5. Use the simulated plate capture for KA-05-AB-1234 and show vehicle/FASTag match.
6. Enter the demo OTP 123456, review the server-authoritative demo toll amount ₹65 and select simulated payment.
7. Show QR token FS-MDR-QR-829374, then simulate operator verification and safe passage.
8. Simulate gate failure and highlight **DO NOT PAY AGAIN** with incident FS-GATE-001.
9. Switch the role selector to Toll Operator to show the pending request and verification checklist.
10. Switch to Admin to show trust controls and audit events.

## Safety note

All location, toll, payment, QR, ANPR/OCR, service and operator behavior is simulated. The demo never charges money, opens a physical gate, dispatches emergency services or claims a government/bank integration.
