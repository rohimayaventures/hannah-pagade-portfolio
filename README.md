# Hannah Kraulik Pagade — Portfolio

Next.js portfolio for UX strategy and conversational AI design work.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form (production)

The `/contact` page posts to `/api/contact`. Configure **one** of these in Vercel (or `.env.local` locally):

**Resend** (recommended if you have a verified sending domain):

- `CONTACT_TO_EMAIL` — where inquiries are delivered
- `RESEND_API_KEY` — from [Resend](https://resend.com)
- `RESEND_FROM_EMAIL` — e.g. `Hannah Kraulik Pagade <hello@yourdomain.com>`

**Gmail** (optional; sends from your Gmail via App Password):

- `CONTACT_TO_EMAIL`
- `GMAIL_USER`
- `GMAIL_APP_PASSWORD` — [Google App Passwords](https://myaccount.google.com/apppasswords)

If both Gmail and Resend are set, Gmail is used first.

Copy `.env.example` to `.env.local` and fill in values. **Do not commit** `.env` or `.env.local`.

## Deploy

Deploy on [Vercel](https://vercel.com). Add the same environment variables in the project settings.
