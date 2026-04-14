# Hannah Kraulik Pagade — Portfolio

This repo powers a portfolio that shows **end-to-end product building from real domain expertise**, not slideware. The work spans **clinical intake and assessment** (OrixLink), **patient-facing health equity and plain-language translation** (HealthLiteracy), **regulated-style document intelligence** (FinanceLens), **enterprise multi-channel conversational design** (ClearChannel), and **agentic infrastructure** (Ask Hannah MCP: live MCP on Railway, Claude.ai connector). Case studies connect strategy, conversation and system design, and full-stack implementation to **live URLs** and on-page embeds, plus **Kai**, the on-site assistant for recruiter-facing questions. Rohimaya Health AI is the product umbrella for the shipped clinical and literacy tools.

**Production:** [hannahkraulikpagade.com](https://hannahkraulikpagade.com). **Stack:** Next.js 16 (App Router), React 18, TypeScript, Tailwind CSS v4.

**Professional links:** [Email](mailto:hannah.pagade@gmail.com) · [LinkedIn](https://www.linkedin.com/in/hannah-pagade) · [GitHub](https://github.com/rohimayaventures)

## If you are reviewing this repository

**Recruiters and hiring managers:** The fastest signal is the **live site**: full case narratives, working embeds, and contact flows. Use this repo to see that the portfolio is a real codebase (CI, tests, typed content) rather than a static export only. For role fit, the site About page states target roles and background explicitly.

**Product and design:** Case study **structure** matches how work is told on the site: problem framing, process, pivots, what shipped, stacks, and honest tradeoffs live as structured data in `content/caseStudies.ts` and render through `src/app/work/[slug]/page.tsx` and shared components. Longer narrative drafts sit in repo-root `*.md` files for depth; the TypeScript file is what ships publicly.

**Engineering:** App Router routes under `src/app/` (`/`, `/about`, `/contact`, `/work/[slug]`). API routes: `src/app/api/contact`, `concierge`, `notify`. UI in `src/components/`. Work-page sections (stats, process nav, embeds, accordions, etc.) are composed in the work template and fed from `caseStudies`. **Node:** use **20.x** locally to match CI (`.github/workflows/ci.yml`). Package manager: **npm**.

This is a **personal portfolio codebase**, not a published open-source library. Code and copy are for evaluation and hiring context unless clearly stated otherwise.

## Repository layout (quick reference)

| Path | Purpose |
|------|--------|
| `src/app/` | Routes, layouts, metadata |
| `src/app/api/` | Contact email, Kai concierge (Anthropic), Slack notify |
| `src/components/` | Page and case-study UI |
| `content/caseStudies.ts` | Canonical case study data and URLs |
| `src/content/caseStudies.ts` | Re-export of `content/caseStudies.ts` for `@/content` imports |
| `src/lib/` | Shared utilities (e.g. Kai appendix builder, rate limiting) |
| `scripts/verify-content.ts` | Content and Kai-appendix checks (also run in CI) |
| `*.md` (repo root) | Authoring-length case writeups; sync important facts into `caseStudies.ts` |

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and fill in values. **Do not commit** `.env` or `.env.local`. Vercel project settings should mirror the same keys for production.

| Area | Variables | Notes |
|------|-----------|--------|
| Site metadata | `NEXT_PUBLIC_SITE_URL` | Optional; Open Graph uses `VERCEL_URL` on Vercel when unset. |
| Contact (`/contact` → `/api/contact`) | `CONTACT_TO_EMAIL` | Required for the form to send mail. |
| | `GMAIL_USER`, `GMAIL_APP_PASSWORD` | Optional Gmail sender (used **first** if both Gmail and Resend are set). |
| | `RESEND_API_KEY`, `RESEND_FROM_EMAIL` | Optional [Resend](https://resend.com) sender; from-address domain must be verified. |
| Kai concierge (`/api/concierge`) | `ANTHROPIC_API_KEY` | Required for the floating **Kai** assistant; without it the API returns a configuration error. |
| Lead pings (`/api/notify`) | `SLACK_WEBHOOK_URL` | Optional Slack incoming webhook when visitors leave contact info from chat. |

Details and comments for each key live in `.env.example`.

## Case study content

**Source of truth for the public site:** `content/caseStudies.ts`. The App Router imports it via `src/content/caseStudies.ts` (re-export only). Work pages (`/work/[slug]`), the home grid, and embeds all read this file.

**Long-form drafts** in the repo root are for authoring and alignment only, for example:

- `ORIXLINK-CASE-STUDY.md`
- `HEALTHLITERACY-AI-CASE-STUDY.md`
- `FINANCELENS-AI-CASE-STUDY.md`
- `ClearChannel-Case-Study.md`

When shipped copy on the site changes, update `content/caseStudies.ts` and keep these drafts in sync if you still use them as references.

### `npm run verify-content`

CI and local checks validate:

- Duplicate or missing slugs, missing title/subtitle, `getCaseStudyBySlug` consistency
- **HTTPS** `embedUrl` when a non-empty embed is set
- **Forbidden fragments** in `content/caseStudies.ts` (legacy hosts Kai must not treat as canonical): `orixlink.vercel.app`, `health-literacy-ai.vercel.app`, `moonlstudios.com`
- **Kai appendix size:** the string from `buildKaiCaseStudyAppendix()` must not exceed `KAI_APPENDIX_MAX_CHARS` in `src/lib/kaiCaseStudyAppendix.ts`

### Kai (concierge) and content sync

- **Policy and canonical product URLs:** `SYSTEM_PROMPT` in `src/app/api/concierge/route.ts`
- **Per-project facts** (stats, pivots, quotes, etc.), derived from the same data as `/work/*`: `src/lib/kaiCaseStudyAppendix.ts` builds an appendix from `content/caseStudies.ts` and it is concatenated into Kai’s system message at request time

When you change live URLs, identity rules, or global assistant behavior, edit `SYSTEM_PROMPT`. When you add public case study detail, put it in `caseStudies.ts` so the site and appendix stay aligned. If markdown drafts contain alternate URLs or exploratory copy you do **not** want on the site, keep that material out of `caseStudies.ts` or add a short vetted paragraph only to `SYSTEM_PROMPT` rather than growing the appendix without review.

### Performance and Lighthouse (what matters)

Lighthouse often reports **unused JavaScript**, **legacy JavaScript**, and **render-blocking resources** for Next.js and analytics-heavy sites. Much of that is **framework and vendor baseline**: routing, hydration, and scripts you keep on purpose. The estimated kilobyte savings can be small next to what you need for a normal app shell. Scores in the **high 90s** are usually fine for a portfolio; chasing a perfect 100 everywhere usually means stripping features, deferring third parties, or fighting the framework, worth it only when you have a **measured** problem (for example, poor LCP on real mobile networks) or a specific heavy asset to fix. Use Lighthouse as a **trend and regression** signal, not a single pass/fail bar.

### Security headers and embeds

`next.config.mjs` sets **non-CSP** headers (`X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`, `X-DNS-Prefetch-Control`). They reduce common browser risks (MIME sniffing, overly chatty referrers, unnecessary access to camera/mic/geolocation) **without** blocking how Next serves styles and scripts.

A **strict Content-Security-Policy** (especially without nonces or careful `frame-src` allowlists) is easy to get wrong: it can break **inline styles**, **Vercel previews**, or **case study iframes** that load third-party origins. Tuning CSP is a separate project. Until then, HTTPS-only embed URLs in content, iframe `referrerPolicy` where appropriate, and the headers above are the practical balance for this site.

## End-to-end tests

Playwright smoke tests cover the home page, a case study with a live embed, and the About page anchors. Run a production build first. Playwright starts `next start` on **port 3456** so it does not collide with `npm run dev` on 3000.

```bash
npm run build
npm run test:e2e
```

## Continuous integration

On push and pull requests to `main`, CI runs in order:

1. `npm run lint`
2. `npm run verify-content`
3. `npm run build`
4. `npm audit --audit-level=high`
5. Install Playwright Chromium, then `npm run test:e2e`

## Deploy

Deploy on [Vercel](https://vercel.com). Add the same environment variables in the project settings as in `.env.example`.
