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

## Case study content

The site reads case study data from `content/caseStudies.ts` (including work pages and the home grid). Long-form drafts in repo-root files such as `*-CASE-STUDY.md` are references for you; when you change shipped copy, update both so they stay aligned. CI runs `npm run verify-content` to catch duplicate or broken slugs, missing titles, and **non-HTTPS `embedUrl`** values when an embed is set.

When you change **live product URLs**, **headline facts**, or **case study blurbs** in `content/caseStudies.ts`, also update the **`SYSTEM_PROMPT`** in `src/app/api/concierge/route.ts` so the on-site Kai assistant stays consistent with the public site.

### Performance and Lighthouse (what matters)

Lighthouse often reports **unused JavaScript**, **legacy JavaScript**, and **render-blocking resources** for Next.js and analytics-heavy sites. Much of that is **framework and vendor baseline**: routing, hydration, and scripts you keep on purpose. The estimated kilobyte savings can be small next to what you need for a normal app shell. Scores in the **high 90s** are usually fine for a portfolio; chasing a perfect 100 everywhere usually means stripping features, deferring third parties, or fighting the framework—worth it only when you have a **measured** problem (for example, poor LCP on real mobile networks) or a specific heavy asset to fix. Use Lighthouse as a **trend and regression** signal, not a single pass/fail bar.

### Security headers and embeds

`next.config.mjs` sets **non-CSP** headers (`X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`, `X-DNS-Prefetch-Control`). They reduce common browser risks (MIME sniffing, overly chatty referrers, unnecessary access to camera/mic/geolocation) **without** blocking how Next serves styles and scripts.

A **strict Content-Security-Policy** (especially without nonces or careful `frame-src` allowlists) is easy to get wrong: it can break **inline styles**, **Vercel previews**, or **case study iframes** that load third-party origins. Tuning CSP is a separate project. Until then, HTTPS-only embed URLs in content, iframe `referrerPolicy` where appropriate, and the headers above are the practical balance for this site.

## End-to-end tests

Playwright smoke tests cover the home page, a case study with a live embed, and the About page anchors. Run a production build first. Playwright starts `next start` on **port 3456** so it does not collide with `npm run dev` on 3000.

```bash
npm run build
npm run test:e2e
```

CI runs `npm audit --audit-level=high`, then installs Chromium for Playwright and runs `npm run test:e2e` after the build.

## Deploy

Deploy on [Vercel](https://vercel.com). Add the same environment variables in the project settings.
