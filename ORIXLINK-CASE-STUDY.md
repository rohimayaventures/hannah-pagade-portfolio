# OrixLink AI — Portfolio Case Study
# Hannah Kraulik Pagade | Rohimaya Health AI
# hannahkraulikpagade.com

**Last updated:** March 2026

---

## PROJECT METADATA

| Field | Value |
|-------|-------|
| **Project name** | OrixLink AI |
| **Tagline** | Where every symptom finds its answer. |
| **Status** | Live -- early commercial pilot |
| **Primary URL** | triage.rohimaya.ai |
| **Repo** | github.com/rohimayaventures/orixlink |
| **Design process page** | hannahkraulikpagade.com/work/orixlink-ai/process |
| **Tags** | CLINICAL-AI · CONVERSATIONAL · FULL-STACK · MONETIZED |
| **Role** | Product Lead, Conversation UX, Prompt Architect, Full-Stack Implementation |
| **Timeline** | 2025 -- Present |
| **Stack** | Next.js 16 · TypeScript · Tailwind CSS v4 · Claude API (Sonnet + Haiku) · Supabase (Auth + Postgres + RLS + pg_cron + pg_net) · Stripe (Checkout + Webhooks + Billing Portal) · Resend (transactional email) · Loops (marketing email, future) · Vercel |

---

## SECTION 1 — THE PROBLEM

### One-sentence framing

Diagnostic errors affect at least 12 million Americans every year. Most happen not because clinicians lack knowledge, but because the current intake process gives them no structured way to connect a patient's full symptom picture to a working differential before the encounter even begins.

### The data

Diagnostic errors are the most costly and most invisible category of medical error. The U.S. healthcare system estimates at least 12 million Americans experience a diagnostic error in outpatient settings each year. The majority occur not in hospitals but in primary care and urgent care settings -- where time is shortest and intake is least structured.

The problem compounds in two directions simultaneously. Clinicians are working from fragmented intake -- a rushed triage note, a chief complaint field, a patient who cannot describe what they are feeling in clinical terms. And patients are entering care settings with no tool to help them articulate what they are experiencing before the encounter begins.

OrixLink addresses both. Any symptom. Any person. No prior diagnosis required.

### The proof point

In March 2026, OrixLink was used in a real clinical scenario: Prasad Pagade, 38, seven days post radial artery cardiac catheterization with stent placement, presenting with forearm swelling, a hard and tight forearm to palpation, pain that had returned after initial improvement, pain waking him from sleep, and progressive grip weakness.

OrixLink flagged the symptom cluster as a red-flag emergency presentation consistent with compartment syndrome. It returned a structured differential ranking hematoma, pseudoaneurysm, radial artery occlusion, and compartment syndrome in order of likelihood. It identified four present red flag criteria and recommended: go to the emergency room now, bring this assessment, ask for compartment pressure measurement.

He was seen. The assessment matched the clinical workup.

This is not a demo. This is what the product is for.

---

## SECTION 2 — THE PROCESS

### Step 1 -- Discovery

I have 15 years of clinical experience across acute care, post-acute, rehabilitation, and senior living. Every shift for 15 years has been field research for this product. The constraints were not discovered through user interviews. They were accumulated through repetition:

- Patients who cannot articulate their symptoms in clinical language get worse intake assessments.
- The same symptom cluster means different things depending on context, history, and onset pattern.
- No tool exists that accepts any symptom from any person with no prior diagnosis and returns a structured clinical differential.
- That absence is not a gap in the market. It is a gap in care.

### Step 2 -- Constraint set

**The product had to do five things simultaneously without failing any of them:**

- Accept unconstrained natural language symptom input from any person regardless of health literacy or prior diagnosis
- Return a structured differential with likelihood rankings that a clinician would recognize as correctly framed
- Surface red flag criteria as a discrete visual layer -- not buried in prose
- Assign a four-tier urgency level that mirrors the judgment a triage nurse applies in the first 90 seconds of an encounter
- Frame every output as clinical support, not diagnosis -- with the legal overlay present but not obstructive

**The urgency tier system required the most iteration.** The tiers are not algorithmic. They are judgment-based on symptom pattern, red flag presence, and onset velocity. The system prompt encodes the same pattern recognition a 15-year LPN uses, not a decision tree.

**The output contract required a structural decision.** Rather than letting Claude return free-form prose, the prompt architecture enforces fixed section tokens -- differential rankings, red flag criteria, urgency tier, disclaimer -- that `lib/parseAssessment.ts` parses into typed React components. This means the UI is always correct regardless of language, phrasing variation, or model output style. It also makes share text, PDF output, and reminder previews reliable without post-processing.

**Monetization architecture was designed before a single paying user existed.** The usage cap system uses an atomic `attempt_assessment` RPC with a paired `rollback_assessment` on model failure. This means a user never loses a cap slot because Claude threw an error. The credit pack system writes to a `credits` table that the RPC reads, with `frozen_at` and `expires_at` columns for future freeze-on-cancel and expiry mechanics. The webhook handler uses a claim-after-process pattern so Stripe retries work correctly if processing fails.

### Step 3 -- The pivot

The original anonymous assessment enforcement used localStorage only. A technically sophisticated user could clear browser storage and run unlimited free assessments. During QA this was flagged as a revenue leak.

The decision was to add server-side enforcement using a browser fingerprint derived from non-identifying signals and an IP address, stored in an `anonymous_assessments` table with a 24-hour window and a 30-day retention policy. The legal page was updated to disclose this explicitly.

This is a pattern that appears throughout the build: something that looks like a product detail is actually a business model decision. The enforcement layer is not about blocking users. It is about ensuring the free tier is economically sustainable so the product can exist for the users who need it most.

### Step 4 -- Design system: Meridian Oracle

| Token | Value | Usage |
|-------|-------|-------|
| Obsidian | `#080C14` | Primary background |
| Gold | `#C8A96E` | Primary accent, urgency indicators, CTAs |
| Cream | `#F4EFE6` | Body text, card surfaces |
| Typography | Cormorant Garamond + DM Sans + DM Mono | Display / body / data labels |

The dark background and gold accent were chosen to signal institutional authority and precision. The product is for clinical staff as much as patients, and the design register communicates that before a word is read. Cormorant Garamond brings the weight of clinical documentation. DM Sans keeps it readable at speed. DM Mono makes urgency tiers and differential rankings scannable as data.

---

## SECTION 3 — WHAT SHIPPED

### Core assessment

- Conversational symptom intake in natural language, any symptom, any person
- Three-step intake flow: role selection, context selection, symptom description with sessionStorage persistence across refresh
- 12-language support with tiered confidence disclaimers (High/Moderate/Low vocabulary confidence per language)
- Emergency override: any Tier 4 urgency output in a Low-confidence language renders the emergency instruction in both the selected language and English simultaneously
- Structured differential output parsed from fixed section tokens via `lib/parseAssessment.ts`
- Red flag criteria surfaced as a discrete visual card layer before the differential body
- Four-tier urgency classification with plain-language action guidance
- Follow-up prompting -- the conversation continues as new symptoms or context arrive
- Share and print output with full disclaimer block

### Authentication and session management

- Supabase Auth with email/password and Google OAuth
- Anonymous first-assessment gate via browser fingerprint + sessionStorage, with server-side rate limiting in `anonymous_assessments` table
- Anonymous to signed-in session migration via `POST /api/migrate-session`
- Bootstrap on `SIGNED_IN` event creates `subscriptions`, `usage_tracking`, and credit rows
- 30-minute inactivity timeout with 2-minute warning banner via `hooks/useSessionTimeout.ts`
- Protected routes: `/dashboard`, `/history`, `/account`, `/pricing/success`
- `?auth=required` and `?session=expired` handling on landing page

### Billing and monetization

**Tiers:**

| Tier | Price | Cap | Model |
|------|-------|-----|-------|
| Free | $0 | 5/month | Haiku |
| Pro | $19/mo or $190/yr | 150/month | Sonnet |
| Family | $34/mo or $340/yr | 300/month, 6 members | Sonnet |
| Clinical | $99/mo or $990/yr | 200/month, 3 seats | Sonnet |
| Lifetime | $249 one-time | 100/month | Sonnet |

**Credit packs (Pro and Family):**

| Pack | Assessments | Price | Margin |
|------|-------------|-------|--------|
| Starter | 25 | $5 | 79% |
| Standard | 75 | $12 | 74% |
| Value | 150 | $20 | 69% |
| Power | 300 | $35 | 64% |
| Clinic Boost | 500 | $75 | 72% |

**API cost reference:** Haiku ~$0.014/session, Sonnet ~$0.042/session. At full Pro cap (150 sessions), API cost is $6.30 against $19 revenue. Break-even at 4 Pro subscribers per 1,000 free users.

**Stripe integration:**
- Checkout route handles subscription mode (Pro, Family, Clinical) and payment mode (Lifetime, credit packs) in a single route with correct branching
- Webhook handler covers 11 events including full subscription lifecycle
- Idempotent webhook processing via `webhook_events` table using claim-after-process semantics
- Billing portal for self-service subscription management
- Success page verifies payment status before showing confirmation
- Credit pack webhook writes to `credits` table with `pack_name`, `purchased_at`, and `expires_at` for full lifecycle tracking

**Usage enforcement:**
- Atomic `attempt_assessment` RPC consumes a cap slot before Claude is called
- `rollback_assessment` RPC restores the slot if Claude fails, including credit restoration on credit-funded attempts
- Cap reached returns structured `402` payload driving `CapReachedPrompt` component
- Server-side anonymous fingerprint enforcement with IP fallback

### Post-auth product surface

- Dashboard with usage ring, 5 recent sessions with chief complaint preview, upgrade CTA for free users
- History with full session list, session detail view via `/assessment/[id]`
- Account page showing tier, assessments used vs cap, credits balance, billing period dates, Manage Billing button
- Admin dashboard with usage analytics, tier management, manual credit grants

### Follow-up reminder system

- Post-assessment `ReminderPrompt` component for Pro and Family users
- 24h/48h/72h reminder options with cancel capability
- `reminders` table with `pending`/`sent`/`cancelled`/`failed` status tracking
- Hourly pg_cron job fires `POST /api/reminders/send` via pg_net
- Resend sends fully branded HTML email with Meridian Oracle styling, OrixLink logo, assessment summary card, gold CTA button
- Loops integrated for future marketing email campaigns

### Compliance and legal

- Legal overlay: first-use acknowledgment, persistent emergency redirect
- Full legal page: medical disclaimer, terms of use, subscription terms, privacy policy with HIPAA non-covered-entity statement, anonymous data disclosure, session security, user rights, 30-day deletion policy
- FDA informational stance in footer
- Session timeout described in legal and implemented consistently
- Disclaimer present in system prompt, parsed into every output, included in share text and exports

### Design and infrastructure

- Meridian Oracle dark theme consistent across all pages including assessment, results, legal, pricing, account, dashboard, history, 404
- Stylized 404 page with ghost gold watermark
- PWA manifest with 192/512 PNG icons, apple-touch-icon, theme color
- Service worker with offline fallback that avoids caching `/api/*`
- WCAG AA contrast validated programmatically across all Meridian Oracle color combinations
- Systematic hover, focus, and active states on all interactive elements
- Loading skeletons on history, session detail, and account pages
- Focus-visible ring in gold across all keyboard-navigable elements

---

## SECTION 4 — TECHNICAL ARCHITECTURE

| Piece | Implementation |
|-------|----------------|
| Framework | Next.js 16 App Router |
| AI | Claude API -- `claude-sonnet-4-20250514` for Pro/Family/Clinical/Lifetime, `claude-3-5-haiku-20241022` for Free tier |
| Prompt architecture | System prompt with urgency tier hierarchy, red flag criteria, differential ranking structure, refusal protocol for emergency patterns, section token enforcement for `parseAssessment` consumer |
| Output contract | Fixed section tokens parsed by `lib/parseAssessment.ts` into typed React components -- differential, red flags, urgency, disclaimer |
| Persistence | Supabase -- sessions, messages, subscriptions, usage_tracking, credits, reminders, webhook_events, anonymous_assessments, profiles, dependents, practice_accounts, practice_seats, practice_sessions |
| Auth | `@supabase/ssr` browser and server clients, middleware session refresh, OAuth callback, bootstrap on SIGNED_IN |
| Anonymous enforcement | localStorage + sessionStorage UX layer, server-side fingerprint + IP in anonymous_assessments table, 24h window |
| Usage caps | `attempt_assessment` RPC (atomic, row-locked), `rollback_assessment` on failure including credit restoration, ensureUsageTrackingForMonth alignment on login |
| Billing | Stripe Checkout (subscription + payment modes), webhook handler (11 events, claim-after-process idempotency), Billing Portal, checkout confirm with auth verification |
| Credits | credits table with pack_name, purchased_at, expires_at, frozen_at for full lifecycle; RPC-based consumption; rollback on model failure |
| Email -- transactional | Resend -- follow-up reminders with branded HTML templates |
| Email -- marketing | Loops -- configured, domain verified, reserved for future campaigns |
| Scheduling | pg_cron (hourly) + pg_net (HTTP to Next.js) for reminder delivery |
| Security | RLS on all core tables, service role isolated to server-only paths, CRON_SECRET for cron endpoint auth, session timeout at 30 minutes, central env validation at startup via instrumentation hook |
| Design system | Meridian Oracle -- Obsidian #080C14, Gold #C8A96E, Cream #F4EFE6, Cormorant Garamond + DM Sans + DM Mono, WCAG AA verified |
| Deploy | Vercel, primary domain triage.rohimaya.ai via Cloudflare DNS |
| PWA | manifest.json with PNG icons (192/512/180), service worker with offline fallback |

---

## SECTION 5 — STATUS MATRIX

### What works

- Core assessment funnel: intake, Claude call, structured output, follow-up chat
- Authentication: Google OAuth, email, anonymous gate, session migration, bootstrap
- Usage cap enforcement: atomic RPC, rollback on failure, credit consumption and restoration
- Stripe billing: checkout, webhook lifecycle, billing portal, success confirmation
- Credit pack purchase and delivery end to end
- Reminder system: set, send via Resend, cancel
- Dashboard, history, session detail, account
- Legal overlay, legal page, HIPAA statement, anonymous data disclosure
- Meridian Oracle dark theme across all surfaces
- PWA install, service worker, offline fallback
- Admin dashboard: usage analytics, tier management, credit grants
- 404 page, session timeout, focus states, loading skeletons

### Known gaps and active roadmap

| Gap | Status | Notes |
|-----|--------|-------|
| PDF export via dedicated pipeline | Not built -- browser print only | Railway + Puppeteer microservice on roadmap. Browser print is the current implementation. Pricing page documents this as the current behavior. |
| Lifetime 90-day retirement enforcement | Copy only | The countdown is marketing copy. Enforcement requires archiving the Stripe price after 90 days -- a Stripe Dashboard action, not a code change. |
| pg_cron operational verification | Manual SQL | The cron job must be created in Supabase SQL editor. Not verifiable from the repo alone. Documented in supabase/migrations/README.md. |
| Family member invite flow | Not built | Family tier exists in billing. Member management and invite UI are Phase 4 roadmap. |
| Clinical practice dashboard | Scaffolded | Tables exist (practice_accounts, practice_seats, practice_sessions). Provider dashboard UI is Phase 5 roadmap. |
| Reminder partial send idempotency | Not hardened | Send route processes up to 50 reminders per run. Partial batch failures are logged but not retried automatically. |
| WCAG AA on all surfaces | Programmatically fixed | Core combinations verified. Mobile and edge cases not fully audited. |
| Apple App Store / Google Play submission | Not started | PWA infrastructure complete. App store submission is Phase 6 roadmap. |

---

## SECTION 6 — PORTFOLIO COPY

### Card summary

Universal triage and diagnosis. Any symptom, any person, no prior diagnosis required. Live at triage.rohimaya.ai with full Stripe billing, usage cap enforcement, and a reminder system.

### Project description (card view)

OrixLink AI accepts any symptom in natural language and returns a structured clinical differential, red flag criteria, four-tier urgency classification, and plain-language next steps. Built by a 15-year LPN for the intake gap that causes 12 million diagnostic errors a year. Monetized with tiered subscriptions, credit packs, and a Lifetime access offer.

### Problem statement (case study hero)

At least 12 million Americans experience a diagnostic error in outpatient settings each year. Most happen not because clinicians lack knowledge, but because the intake process gives them no structured way to connect a patient's full symptom picture to a working differential. OrixLink is the tool that closes that gap -- any symptom, any person, no prior diagnosis required. Validated in March 2026 against a real compartment syndrome presentation.

### Process Step 1 -- Discovery

I did not need to conduct user research for this product. I have conducted it for 15 years on every shift. The intake failure pattern is not hypothetical. It is the first 90 seconds of every clinical encounter, repeated across every setting I have worked in.

### Process Step 2 -- Design and Build

The hardest problem was the output contract. The Claude system prompt had to accept unconstrained natural language, return a structured differential with likelihood rankings, surface red flags as a discrete layer, assign a four-tier urgency level, and frame everything as clinical support without being a disclaimer wall or a dangerously confident diagnosis. Every word of that prompt was iterated until a triage nurse would trust it. Then the output was parsed by a typed consumer so the UI never breaks regardless of language or phrasing variation.

### Process Step 3 -- What shipped

A conversational clinical triage tool with natural language intake, structured differential output, red flag cards, urgency tiers, follow-up prompting, legal overlay, Supabase persistence, full authentication with anonymous session migration, tiered Stripe billing with atomic usage enforcement, credit packs, a follow-up reminder system via Resend and pg_cron, admin dashboard, Meridian Oracle dark design system across all surfaces, PWA with offline fallback, and a compliance-aware legal layer including HIPAA scope, anonymous data disclosure, and session timeout policy. Validated in March 2026 against a real compartment syndrome presentation that matched the clinical workup.

### The pivot story (for PM and product strategy interviews)

The original anonymous enforcement was localStorage only. A technically sophisticated user could clear browser storage and run unlimited free assessments -- a real revenue leak for a product where Haiku costs $0.014 per session and the free tier is five sessions per month. Rather than add friction to the UX, the architecture was extended to add server-side fingerprint and IP storage in an `anonymous_assessments` table with a 24-hour window. The legal page was updated to disclose this explicitly. The result is an enforcement layer that is transparent to normal users, meaningful against abuse, and legally accurate -- which is a harder problem than it looks when health data is involved.

The same pattern appeared in the billing architecture. The initial credit pack implementation wrote to a `credits_balance` column in `usage_tracking`. The `attempt_assessment` RPC read from a separate `credits` table. These were two different places. A user could pay for credits and get nothing. The fix was not just a code change -- it was recognizing that the data model had drifted between the webhook layer and the RPC layer during a fast-moving build, and that catching this before real users paid money was the highest-value thing to do before launch.

### The business model (for product and strategy interviews)

OrixLink is the only product in this portfolio that has real unit economics.

API cost per session: Haiku $0.014 (Free tier), Sonnet $0.042 (Pro and above).

At full Pro cap (150 sessions/month): API cost $6.30 against $19 revenue. Gross margin on Pro: 67% before infrastructure.

Credit pack margins: 64% to 79% depending on pack size. Packs are positioned as cheaper than overage ($0.25/assessment) but the real function is retention -- credits freeze on cancellation and reactivate on return.

Break-even math: 4 Pro subscribers covers API cost for 1,000 free users at the current free tier cap. 1 Clinical practice covers approximately 1,400 free users.

The Lifetime offer at $249 breaks even against Pro annual at 13 months. It was designed as a launch instrument with a 90-day availability window to reward early adopters and create urgency. The retire-after-90-days enforcement is a Stripe Dashboard configuration step not yet implemented -- this is a known gap documented in the status matrix.

### What this is not (for healthcare-adjacent interviews)

OrixLink AI is not a diagnostic instrument. It does not create a provider-patient relationship. It is not a covered entity under HIPAA. It has not been reviewed or approved by the FDA. It is a consumer informational tool that uses AI to help people describe what they are experiencing before a clinical encounter -- the same way a good triage nurse would help a patient articulate their symptoms.

This distinction matters because it determines what the product can claim, what it cannot claim, and what legal exposure it does not carry. Every surface in the product -- the legal overlay, the output disclaimer, the system prompt, the metadata, the footer -- reflects that distinction consistently.

### Clinical credibility statement

The urgency tier system mirrors the reasoning a triage nurse applies in the first 90 seconds of an encounter -- because I am a triage nurse and I built it that way. Tier 1 is monitor at home. Tier 2 is contact your provider today. Tier 3 is urgent care now. Tier 4 is emergency department now. The thresholds for each tier encode 15 years of pattern recognition across acute care, post-acute, rehabilitation, and senior living. When OrixLink flagged Prasad's compartment syndrome presentation as a Tier 4 emergency, it was not because of a rule. It was because the symptom pattern -- post-procedural, progressive, waking from sleep, grip weakness -- matched the mental model of a nurse who has seen what happens when that pattern is missed.

### One honest line for interviews

OrixLink demonstrates full AI product ownership: prompt architecture that enforces a typed output contract, atomic usage cap enforcement with rollback, a complete Stripe billing lifecycle including idempotent webhook processing, clinical domain expertise embedded in the system prompt, and a compliance layer that is accurate rather than performative -- with honest documentation of the two open engineering items (credit rollback on credit-funded attempts and the PDF pipeline) that are next on the fix list.

### Interview talking points by audience

**For clinical and healthcare AI interviews (Abridge, Hippocratic AI, Ambience Healthcare):**
The urgency tier system is not algorithmic. It encodes clinical judgment. The legal architecture is not a disclaimer wall -- it is a precisely calibrated disclosure that says exactly what the product does and does not do, including what HIPAA coverage does and does not apply. The compartment syndrome validation is not a cherry-picked demo. It is an instance of the product doing what it was designed to do under real clinical stakes.

**For technical interviews:**
The three strongest architectural decisions are: the fixed section token output contract that makes the AI output machine-readable without post-processing, the atomic attempt_assessment/rollback_assessment RPC pairing that prevents revenue leakage on model failure, and the claim-after-process webhook idempotency pattern that prevents double-processing while allowing legitimate retries. The two weakest areas I am actively fixing are the credit rollback on credit-funded failed attempts and the PDF export pipeline which is currently browser print.

**For product and strategy interviews:**
The product is live, monetized, and has real unit economics I can defend. The pricing architecture -- tiered subscriptions, credit packs with freeze-on-cancel retention mechanics, a Lifetime offer designed to retire after 90 days -- was designed before a single paying user existed. The anonymous enforcement pivot and the credit data model drift are both examples of catching business model issues before they became customer trust issues.

### Impact line

OrixLink exists because the intake gap is real, the diagnostic error rate is real, and 15 years of clinical experience is worth more than a user research sprint. The proof point is not a demo. It is a real patient whose symptom cluster the product correctly flagged as an emergency before a clinician saw him.

---

*Case study updated March 2026. Hannah Kraulik Pagade, Rohimaya Health AI.*
*Do not share externally without review. Contains unreleased product roadmap and pricing strategy.*