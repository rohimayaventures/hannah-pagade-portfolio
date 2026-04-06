# CASESTUDIES.TS GAP ANALYSIS
# All three projects: HealthLiteracy AI, ClearChannel by Vestara, FinanceLens AI

*This document identifies every field that needs to be added or updated in caseStudies.ts
to match what was populated for OrixLink AI in Phases 1 and 2.*

*Instructions for each project: add the fields listed below inside the existing object
for that slug. Do not remove or change any existing fields unless explicitly flagged.*

---

## PROJECT 1 — HEALTHLITERACY AI (slug: healthliteracy-ai)

### CRITICAL: Scrub pass first

```bash
grep -r "Haitian Creole" --include="*.ts" --include="*.tsx" .
grep -r "Somali" --include="*.ts" --include="*.tsx" .
grep -r "Haiku" --include="*.ts" --include="*.tsx" .
grep -r "Pagade Ventures" --include="*.ts" --include="*.tsx" .
grep -r "THOROUGH\"" --include="*.ts" --include="*.tsx" .
```

Any hits in caseStudies.ts need to be resolved before the fields below are added.
Confirm badge labels in code are THOROUGH CHECK / PARTIAL CHECK / QUICK CHECK before using them in copy.

### Fields that need to be ADDED (not currently in caseStudies.ts)

```ts
proofPoint: `Fifteen years of watching patients fold their discharge papers into a bag and go home without understanding them. This tool closes one piece of that gap, for free, in twelve languages, with no login required.`,

stats: [
  { value: "12", label: "languages at launch" },
  { value: "3", label: "reading levels (Simple, Clear, Complete)" },
  { value: "88%", label: "of Americans lack proficient health literacy" },
],

processStepsInteractive: [
  {
    title: "The Constraint Set",
    body: "No login. No setup. Urgent items first. Medical terms explained in the same sentence. Twelve languages at launch, not deferred. Attribution language in the output, not the footer. Every constraint came from fifteen years of watching what patients actually do when they leave a care setting.",
  },
  {
    title: "Two-Pass Architecture",
    body: "The first Claude call always runs and produces the translation. The second call is user-initiated: when a patient or caregiver requests a second check, it compares the translation against the original and returns issue cards flagging omissions. Verification is a tool the patient controls, not a pipeline step that adds delay to every interaction.",
  },
  {
    title: "Reading Level System",
    body: "Three reading levels: Simple, Clear, Complete. Patient-facing labels never show grade numbers because grade labels shame patients under stress. Each level has a distinct prompt instruction set for sentence structure, explanation depth, and concept unpacking. The selector is surfaced at the top of the interface.",
  },
  {
    title: "Pivot Stories",
    body: "Four documented pivots: language selection principle, reading level labeling, user-initiated verification design, and Sonnet for clinical text quality.",
  },
  {
    title: "What Shipped",
    body: "A free, no-login patient document translation tool with paste, upload, and voice input, twelve languages, three reading levels, urgent item extraction, side-by-side view, user-initiated verification with THOROUGH CHECK / PARTIAL CHECK / QUICK CHECK badges, and 90-day shareable sessions. Deployed at literacy.rohimaya.ai.",
  },
],

pivots: [
  {
    title: "Language selection: principle over convenience",
    lesson: "Deferring language support is a product decision about whose needs wait. This product made the opposite choice.",
    body: "The standard MVP pattern is English and Spanish first, more languages later. That pattern was rejected before the first commit. The launch set was chosen for coverage and script diversity across the largest underserved U.S. patient populations: Arabic, Mandarin, Hindi, Russian, Vietnamese, Tagalog, Korean, Japanese, French, Portuguese, and Spanish alongside English.",
  },
  {
    title: "Reading levels: patient language over institutional labels",
    lesson: "Grade numbers shame patients under stress. Plain labels serve the people actually using the product.",
    body: "Internally the system maps to 5th grade, 8th grade, and college-equivalent depth. The UI shipped Simple, Clear, and Complete because grade labels confuse family members and shame patients. Same constraint as the discharge paperwork problem this product exists to solve.",
  },
  {
    title: "Verification: second pass on the patient's terms",
    lesson: "Automated is not always more trustworthy. Visible and explicit builds more trust than silent in a clinical context.",
    body: "The original spec called for automatic verification on every translation. The shipped version is user-initiated. Doubling latency and cost on every free session prioritizes pipeline architecture over the patient's experience. Making verification explicit and on-demand respects autonomy, controls cost, and keeps the patient in control of what happens next.",
  },
  {
    title: "Sonnet for clinical text",
    lesson: "Model selection is a product safety decision in clinical contexts. Default to the model that gets the clinical output right.",
    body: "The product uses claude-sonnet-4-20250514 for both translation and verification with no Haiku path and no model router. High-stakes plain language for patients making medical decisions is not generic chat. Retries fire on transport failures. Zod validates request bodies. Claude responses use manual validation.",
  },
],

shippedCards: [
  {
    category: "Input and Access",
    items: [
      "Paste, upload (PDF and .txt text-layer only), or voice (Web Speech API, Chrome and Edge best)",
      "No login, no setup, no cost",
      "Works on mobile, tablet, and desktop",
    ],
  },
  {
    category: "Translation Engine",
    items: [
      "12 languages: Arabic, French, Hindi, Japanese, Korean, Mandarin, Portuguese, Russian, Spanish, Tagalog, Vietnamese, English",
      "3 reading levels: Simple, Clear, Complete",
      "Medical term explanation in every output",
      "Attribution language preventing misreading as diagnosis",
      "Claude Sonnet (claude-sonnet-4-20250514)",
    ],
  },
  {
    category: "Output and Verification",
    items: [
      "Urgent item extraction as separate structured card array",
      "Side-by-side view (original and translation)",
      "User-initiated verification pass (Check for Missing Info button)",
      "Issue cards flagging detected omissions or inaccuracies",
      "THOROUGH CHECK / PARTIAL CHECK / QUICK CHECK badges",
      "Copy and share, PDF export with disclaimer",
      "Session persistence via Supabase (90-day TTL, 410 on expiry)",
    ],
  },
  {
    category: "Infrastructure and Quality",
    items: [
      "Next.js 15, App Router, TypeScript",
      "Tailwind CSS v4",
      "Claude API (claude-sonnet-4-20250514), timeouts and retries on transport failures",
      "Zod validation on API request bodies; manual validation on Claude responses",
      "Rate limiting on translate, verify, share (POST and GET), and parse routes",
      "Supabase (90-day expires_at, 410 on expiry, versioned SQL migrations)",
      "Vercel",
    ],
  },
  {
    category: "Accessibility",
    items: [
      "Skip link",
      "Full keyboard navigation and tab semantics",
      "Focus-to-results after translation completes",
      "prefers-reduced-motion respected",
      "Visible error states for PDF extraction and share failures",
    ],
  },
],

stackHighlighted: [
  "Claude API (claude-sonnet-4-20250514, two-pass with user-initiated verify)",
  "Next.js 15 (App Router)",
  "Supabase (90-day session expiry, versioned migrations)",
],

stackStandard: ["TypeScript", "Tailwind CSS v4", "Zod (request validation)", "Web Speech API", "Vercel"],

whatThisDemonstrates: [
  "Designing for emotionally vulnerable, non-technical users with zero tolerance for friction",
  "Two-pass AI architecture with user-initiated verification and issue cards, not automatic re-render",
  "Patient safety framing applied to every product decision including model selection and verification UX",
  "Multilingual product development with accessibility as a launch requirement, not a roadmap item",
  "Abuse resistance on a free, no-login product: Zod on request bodies, rate limiting on all routes",
  "Full-stack build from problem definition to deployed product with versioned database migrations",
  "Clinical operations background applied directly to product constraint and pivot decisions",
],

honestSummary: {
  technical: `Claude Sonnet (claude-sonnet-4-20250514) runs both the translate and verify calls. No Haiku default or model router. Zod validates incoming API request bodies. Claude JSON responses use manual validation with retry logic on transport failures, not parse errors. Rate limiting is applied to translate, verify, share (POST and GET), and parse routes. Supabase sessions use 90-day expiry with versioned SQL migrations. Expired links return 410. Voice input uses the Web Speech API with browser support checks and inline fallback messaging. PDF and .txt only, no OCR.`,
  product: `Every design constraint came from a clinical observation. No login because discharged patients will not create an account. Urgent items first because safety-critical information must not be buried. Twelve languages at launch because deferring is a choice about whose needs wait. Verification user-initiated rather than automatic because doubling latency on a free tool prioritizes pipeline over patient experience. The four pivot stories each represent a real product decision with a real tradeoff. The honest gaps are PDF scanned document support and a production model router for cost optimization at scale.`,
  design: `The interface is built for a specific emotional state: worried, possibly unfamiliar with the language on the page, needing information immediately. Reading level labels are Simple, Clear, and Complete because grade framing adds shame to a moment that already carries enough. The side-by-side view was built for a secondary use case: a caregiver verifying accuracy before presenting to a patient. Accessibility patterns including skip link, keyboard navigation, focus-to-results, and prefers-reduced-motion are launch requirements, not roadmap items.`,
},

impactQuote: `This project exists because discharge instructions written at a 12th-grade reading level do not help a patient who reads at a 5th-grade level, speaks Vietnamese or Tagalog at home, and is scared. That gap is preventable with a two-second API call. The research agrees.`,
```

### Fields that need to be UPDATED in current caseStudies.ts

- `processSteps[0]` — remove any mention of Vanguard if present (was copied from ClearChannel in an earlier session)
- `embedUrl` and `liveUrl` — confirm both are `https://literacy.rohimaya.ai`
- Any badge labels using `THOROUGH` or `PARTIAL` without `CHECK` suffix — update to match repo
- Any Zod claim saying "all Claude API responses" — update to "API request bodies"
- Any reference to auto re-render or auto-correction on omission detection — update to user-initiated issue cards
  {
    category: "Output and Verification",
    items: [
      "Urgent item extraction as separate structured card array",
      "Side-by-side view (original and translation)",
      "User-initiated verification pass (Check for Missing Info)",
      "Auto-correction: affected sections re-translate and update in place on detected omissions",
      "THOROUGH / PARTIAL / QUICK CHECK badges",
      "Copy and share, session persistence via Supabase (90-day TTL)",
    ],
  },
  {
    category: "Infrastructure and Quality",
    items: [
      "Next.js 15, App Router, TypeScript",
      "Tailwind CSS v4",
      "Claude API (claude-sonnet-4-20250514), with timeouts and retries",
      "Zod validation and payload bounds on all routes",
      "Rate limiting on translate, verify, share, parse",
      "Supabase (90-day expires_at, 410 on expiry, versioned migrations)",
      "Vercel",
    ],
  },
  {
    category: "Accessibility",
    items: [
      "Skip link",
      "Full keyboard navigation and tab semantics",
      "Focus-to-results after translation completes",
      "prefers-reduced-motion respected",
      "Visible error states for PDF extraction and share failures",
    ],
  },
],

stackHighlighted: [
  "Claude API (claude-sonnet-4-20250514, two-pass with user-initiated verify)",
  "Next.js 15 (App Router)",
  "Supabase (90-day session expiry, versioned migrations)",
],

stackStandard: ["TypeScript", "Tailwind CSS v4", "Zod (request validation)", "Web Speech API", "Vercel"],

whatThisDemonstrates: [
  "Designing for emotionally vulnerable, non-technical users with zero tolerance for friction",
  "Two-pass AI architecture with user-initiated verification and issue cards, not automatic re-render",
  "Patient safety framing applied to every product decision including model selection and verification UX",
  "Multilingual product development with accessibility as a launch requirement, not a roadmap item",
  "Abuse resistance on a free, no-login product: Zod on request bodies, rate limiting on all routes",
  "Full-stack build from problem definition to deployed product with versioned database migrations",
  "Clinical operations background applied directly to product constraint and pivot decisions",
],
  "Privacy-by-design: 90-day session expiry on shareable medical document links",
  "Full-stack build from problem definition to deployed product with versioned database migrations",
  "Clinical operations background applied directly to product constraint design",
],

honestSummary: {
  technical: `The two-pass Claude architecture is the technical proof of this case study. A single API call (claude-sonnet-4-20250514) translates. The second call verifies against the source for omissions. When the verify pass detects a material omission, a targeted third call re-translates only the affected section and renders the correction in place. The reading level system is three separate instruction sets, not a vocabulary filter. Urgent item extraction is a structured output contract. Zod validates all route inputs. Rate limiting is on translate, verify, share, and parse. Session expiry is 90 days with 410 on expired links. Versioned SQL migrations manage the Supabase schema.`,
  product: `Every design constraint came from a clinical observation, not a user story. No login because patients who have just been discharged will not create an account. Urgent items first because the most safety-critical information must not be buried. Twelve languages at launch because deferring any language is a product decision about whose needs matter. Verification auto-correction because giving the patient a list of omissions to act on transfers work back to the person this product exists to help. The honest gaps are image OCR and provider-facing mode, both in the status matrix and on the roadmap.`,
  design: `The interface is built for a specific emotional state: someone who is worried, possibly unfamiliar with the language on the page, and needs information immediately. Reading level labels are Simple, Clear, and Complete because grade numbers shame patients under stress. Verification badges (THOROUGH / PARTIAL / QUICK CHECK) give patients a legible signal without requiring them to understand what omission detection means. The side-by-side view was built for caregivers and care coordinators who need to verify before presenting to a patient. Accessibility is a launch requirement for a product whose users are frequently on assistive technology or under cognitive load.`,
},

impactQuote: `This project exists because discharge instructions written at a 12th-grade reading level do not help a patient who reads Hindi at home, is scared, and has no one to call at 11pm. That gap is preventable with a two-second API call. The research agrees.`,
```

### Fields that need to be UPDATED (exist but are wrong)

- `embedUrl` and `liveUrl` — confirm both are `https://literacy.rohimaya.ai`
- `status` — confirm `"live"`
- Any `subtitle` or `projectDescription` mentioning Haiku, Somali, or Haitian Creole — grep and replace
- Any `processSteps` referencing Vanguard — remove if present
- `projectDescription` reading level labels — update to Simple, Clear, Complete if Standard or Professional appear

---

## PROJECT 2 — CLEARCHANNEL BY VESTARA (slug: clearchannel-vestara)

### CRITICAL: Scrub pass — run grep first

```bash
grep -r "Vanguard" --include="*.ts" --include="*.tsx" --include="*.md" .
grep -r "Web Speech API" --include="*.ts" --include="*.tsx" .
grep -r "claude-sonnet-4\"" --include="*.ts" --include="*.tsx" .
```

Any remaining hits need to be resolved before the fields below are added.

### Fields that need to be ADDED

```ts
proofPoint: `When the bereavement utterance fires, the system suppresses account verification, routes to a senior specialist, and the entire application turns purple. The UI does not just label sentiment. It inhabits it.`,

stats: [
  { value: "11", label: "sample utterances covering emotional edge cases" },
  { value: "5", label: "sentiment states driving the full CSS token system" },
  { value: "18", label: "classified intents with priority override rules" },
],

processStepsInteractive: [
  {
    title: "The Brief and Constraint Set",
    body: "An enterprise conversational channels team needed a designer who understood IVR, chatbot, and agent assist as a system. I read that requirement as a product spec and built the tool that would make a hiring team say she already understands our system. The lab opens empty: no pre-seeded result, two paths — open a sample or start a Live Call. The first screen is the brief.",
  },
  {
    title: "SSE Streaming Architecture",
    body: "One Claude API call (claude-sonnet-4-6) streams over SSE. The client accumulates the text stream and extracts complete JSON sections as braces close. Intent bar and channel panels fill progressively as each block arrives. The streaming implementation matches the product argument: one utterance, three channels, unfolding simultaneously.",
  },
  {
    title: "Sentiment Theming System",
    body: "The data-sentiment CSS token architecture drives every color surface from a single attribute on the root element. Five states: neutral (teal), concerned (amber), distressed (purple), urgent (red), confused (blue). When the system classifies an utterance, the override fires in the prompt logic and the CSS attribute changes simultaneously. The environment echoes the emotional state at a glance.",
  },
  {
    title: "Voice Input and OpenAI Realtime",
    body: "Voice input uses MediaRecorder and OpenAI Whisper via /api/transcribe for reliable server-side transcription. IVR audio uses OpenAI TTS via /api/speak with a Blob URL and HTMLAudioElement specifically for iOS Safari reliability. Live Call uses the OpenAI Realtime API for a persistent WebSocket session: a second input mode that shows what a real contact-center conversation feels like alongside designed edge case utterances.",
  },
  {
    title: "Pivot Stories",
    body: "Six documented pivots: empty state over pre-seeded dashboard, SSE streaming for progressive fill, Blob URL for iOS IVR audio, sentiment as full-environment signal, mobile welcome craft, and Live Call promotion to first-class CTA. Each is a product decision with a real tradeoff, not a technical accident.",
  },
],

pivots: [
  {
    title: "Empty state instead of pre-seeded dashboard",
    lesson: "We chose clarity over looking live on load. The first screen is the brief.",
    body: "The lab originally opened with a pre-loaded analysis result. A busy first screen read as a data dump on mobile and bypassed the product story. The decision was to start empty with two paths: open a sample or start a Live Call. Analysis only appears after the user acts.",
  },
  {
    title: "SSE streaming for progressive panel fill",
    lesson: "Align implementation with the product argument. The same reasoning surfaces across all channels, not as a sequential reveal, but as one response unfolding in real time.",
    body: "Analysis originally waited for one full JSON response before rendering. The thesis is one utterance, many channels simultaneously. A blocking response hides that structure. Moving to SSE with progressive section extraction makes the parallel outputs visible as they arrive.",
  },
  {
    title: "IVR audio and iOS Safari",
    lesson: "IVR is audible-first. Mobile playback is a product requirement, not a nice-to-have.",
    body: "IVR audio originally used AudioContext and decoded buffers. On iOS Safari, user-gesture chains break across await, causing silent failures on tap-to-play. The pattern was changed to fetch to Blob URL to HTMLAudioElement.play() with cleanup on end and unmount.",
  },
  {
    title: "Sentiment as full-environment signal",
    lesson: "The UI does not just label sentiment. It inhabits it.",
    body: "The original design used a small badge to label sentiment state. If only a badge changes color, reviewers miss the point that emotional state changes routing, copy, and system behavior. Semantic CSS variables driven by data-sentiment now retint background, topbar, accents, panels, and prosody indicators with smooth transitions.",
  },
  {
    title: "Welcome flow and mobile craft",
    lesson: "Portfolio demos are shipped software. Onboarding and thumb-sized UI are part of the proof.",
    body: "The welcome experience could not be scrolled to completion on small screens and several controls did not meet 44px touch targets. Rebuilt with backdrop scrolling (not a trapped modal), 100dvh, 44px touch targets throughout, and readable label sizes on small screens.",
  },
  {
    title: "Live Call as first-class story",
    lesson: "We run two proofs in one lab: designed utterances for edge cases, and live speech for what a call feels like.",
    body: "Live Call originally lived in an easy-to-miss location. Typed samples show NLU design. Live voice shows contact-center reality. Promoted to the empty-state hero as a primary CTA alongside sample utterances, with stronger topbar control and a header layout that does not break on narrow widths.",
  },
],

shippedCards: [
  {
    category: "Sample Coverage",
    items: [
      "IRA to brokerage fund transfer",
      "Unauthorized transaction / fraud detection",
      "Balance inquiry (baseline)",
      "Retirement planning",
      "Bereavement / beneficiary update (death of spouse)",
      "Market anxiety / panic-selling",
      "Repeat caller frustration",
      "Barge-in escalation",
      "Vague distress",
      "Cognitive accessibility (family member managing account)",
      "Time pressure / urgent deadline",
    ],
  },
  {
    category: "Channel Outputs",
    items: [
      "IVR: spoken script with prosody annotations, entities, routing, fallback",
      "Chatbot: bot response, quick replies, containment decision, handoff context",
      "Agent Assist: suggested script, policy references, compliance flags, escalation path",
    ],
  },
  {
    category: "NLU Architecture",
    items: [
      "18 intents with priority override rules",
      "Confidence score and threshold visualization",
      "Entity schema",
      "Training phrase suggestions",
      "Collapsible four-column grid",
    ],
  },
  {
    category: "Sentiment Theming",
    items: [
      "Five states: neutral (teal #0891B2), concerned (amber #D97706), distressed (purple #7C3AED), urgent (red #DC2626), confused (blue #3B82F6)",
      "data-sentiment attribute cascades through all CSS token surfaces",
      "Smooth transitions on topbar, background, accents, borders, pills, prosody indicators",
    ],
  },
  {
    category: "Override Rules",
    items: [
      "Bereavement: verification suppressed, senior specialist routing, distressed theme",
      "Fraud escalation: urgent theme",
      "Market anxiety behavioral coaching guardrail: concerned theme",
      "Barge-in interruption detection",
    ],
  },
  {
    category: "Voice and Audio",
    items: [
      "MediaRecorder + OpenAI Whisper (/api/transcribe) for voice input",
      "OpenAI TTS (/api/speak) + Blob URL + HTMLAudioElement for IVR playback",
      "OpenAI Realtime (/api/realtime-session) for persistent Live Call mode",
      "SSE streaming with progressive panel fill",
    ],
  },
  {
    category: "Design Artifact Page",
    items: [
      "/design-artifact: static page, no API calls",
      "Intent taxonomy: all 18 intents with category, threshold, sentiment state",
      "Override priority rules with structural changes and channel behavior",
      "Entity schema with intent associations",
      "Channel routing matrix",
      "Sentiment state map with design token swatches from globals.css",
      "Data from lib/designArtifactData.ts",
    ],
  },
  {
    category: "Infrastructure",
    items: [
      "Next.js 16, React 19, TypeScript, Tailwind CSS",
      "Claude API (claude-sonnet-4-6), structured JSON, SSE streaming",
      "OpenAI Whisper, TTS, Realtime",
      "Vercel",
    ],
  },
],

stackHighlighted: [
  "Claude API (claude-sonnet-4-6, SSE streaming, progressive panel fill)",
  "OpenAI (Whisper · TTS · Realtime)",
  "data-sentiment CSS token architecture (five emotional state themes)",
],

stackStandard: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Vercel"],

whatThisDemonstrates: [
  "Multi-channel conversational system design: IVR, Chatbot, and Agent Assist as a unified architecture",
  "Semantic CSS token architecture for emotional state-driven UI theming across five states",
  "NLU architecture: 18 intents, entity schema, confidence threshold, priority override rules",
  "Full voice pipeline: MediaRecorder, OpenAI Whisper, TTS audio playback, OpenAI Realtime Live Call",
  "SSE streaming with progressive UI fill aligned to the product thesis",
  "Visual NLU documentation as a design deliverable (design artifact page, lib/designArtifactData.ts)",
  "Six documented product pivots each with a real constraint, decision, and tradeoff",
  "Honest status matrix: acknowledging what is and is not implemented",
],

honestSummary: {
  technical: `The Claude API call (claude-sonnet-4-6) streams over SSE. The client accumulates the text stream and extracts complete JSON sections as braces close, allowing progressive panel fill without blocking. There is no server-side JSON repair pass. A final JSON.parse on the accumulated stream fails silently with no user-facing error state. That is the honest current implementation and it is in the status matrix. Voice uses MediaRecorder and OpenAI Whisper server-side via /api/transcribe, not Web Speech API. IVR audio uses OpenAI TTS via /api/speak with a Blob URL and HTMLAudioElement specifically for iOS Safari reliability. OpenAI Realtime manages a persistent WebSocket session for Live Call mode, a distinct architecture from the standard transcribe-then-analyze path.`,
  product: `This project is built from a product brief: an enterprise conversational channels team that needed a designer who understood IVR, chatbot, and agent assist as a unified system. The six pivot stories each represent a real product decision with a real tradeoff: empty state, SSE streaming, iOS audio path, full-environment sentiment theming, mobile craft, and Live Call promotion. The design artifact page at /design-artifact is a second deliverable produced from the same build, demonstrating that this designer thinks about conversation architecture as a documentation problem, not just an implementation problem.`,
  design: `The CSS token architecture is the design centerpiece. Five named sentiment states, each driving a complete color system through a single data-sentiment attribute on the root. IBM Plex Sans for interface text, IBM Plex Mono for financial data and classification output. Navy #1B2E4B, teal #0891B2 as the base palette. The panel layout hierarchy reflects practitioner reading order: IVR at 44%, Chatbot and Agent Assist stacked on the right, NLU collapsible below. Mobile is a drawer, not a collapsed state. 44px touch targets, 100dvh, backdrop scrolling.`,
},

impactQuote: `The bereavement utterance fires. The system suppresses account verification, routes to a senior specialist, and the entire application turns purple. That is not decoration. That is the proof that emotional state handling was designed in, not added on.`,
```

### Fields that need to be CONFIRMED in current caseStudies.ts

- `embedUrl` and `liveUrl` — confirm `https://clearchannel-vestara.vercel.app`
- `status` — confirm `"live"`
- `tagline` — confirm "Design the conversation. Across every channel." still accurate or update
- `subtitle` — remove any mention of Web Speech API, replace with Whisper
- Any `processSteps` text referencing Vanguard — grep and confirm zero results after scrub
- `projectDescription` — remove "Built as a portfolio demonstration for Vanguard" if still present

---

## PROJECT 3 — FINANCELENS AI (slug: financelens-ai)

### CRITICAL: Scrub pass first

```bash
grep -r "permanent URL" --include="*.ts" --include="*.tsx" .
grep -r "Haiku" --include="*.ts" --include="*.tsx" .
grep -r "required field" --include="*.ts" --include="*.tsx" .
```

Any "permanent URL", Haiku model references, or "required field" descriptions for source anchors in caseStudies.ts need to be updated before the fields below are applied.

### Fields that need to be ADDED

```ts
proofPoint: `The shift from "we will deliver" to "we believe we are well positioned to deliver" is not a stylistic choice. It is information. FinanceLens structures financial documents into six sections of analysis, surfaces where the language shifted, ties claims to source passages when present, and closes the loop at a 30-day shareable URL.`,

stats: [
  { value: "6", label: "structured analysis sections" },
  { value: "5", label: "pivot decisions from Canva API to media pipeline" },
  { value: "30-day", label: "TTL on all share URLs" },
],

processStepsInteractive: [
  {
    title: "The Product Thesis",
    body: "Summarization is a solved problem. Intelligence is not. The brief was to build a tool that structures financial documents into distinct analytical sections, each with a defined purpose, with claims tied to source passages when present. Six sections, Zod-validated, with language drift detection as the most analytically novel capability.",
  },
  {
    title: "The Output Contract",
    body: "Claude Sonnet 4 (claude-sonnet-4-20250514) with a typed JSON output contract via lib/claudeJsonWithRetry.ts. Source anchors are prompt-required and surfaced when returned; the Zod schema treats supportingEvidence as optional, not a hard validation gate. One structured repair turn fires before error state surfaces.",
  },
  {
    title: "Compare Mode Architecture",
    body: "A standard analysis prompt applied to two documents produces two analyses. A diff-aware prompt produces the delta. Compare mode renders as an accordion: claim shifts and new language expanded by default, all other sections collapsible with a summary line and item count visible in the collapsed header.",
  },
  {
    title: "Pivot Stories",
    body: "Five documented pivots: Canva API to owned presentation layer, design exports to production media pipeline, metadata and attribution as shipping criteria, share URLs as first-class persistence (30-day TTL), and compare accordion as information reveal design.",
  },
],

pivots: [
  {
    title: "Canva Connect API to owned presentation layer",
    lesson: "A roadmap dependency on a pending API approval is a schedule risk. Own the layer.",
    body: "The original spec called for Canva Connect API. App review blocked access with no timeline. The architecture was redesigned: Claude generates a JSON deck outline, pptxgenjs renders the PPTX (Calibri, Office-safe), pdf-lib generates the branded PDF (WSJ Editorial typography), and a custom deck viewer at /deck/[slug] serves the 30-day Supabase-backed URL.",
  },
  {
    title: "Design exports to production media pipeline",
    lesson: "Shipping design exports as-is confuses handoff with production delivery. Media is a build artifact.",
    body: "Landing hero and OG assets were originally multi-megabyte raw exports. scripts/optimize-assets.mjs uses Sharp to produce public/hero.webp, public/og-image.jpg, and rasterized icons at every required size. Edge cases handled in the script, not the UI.",
  },
  {
    title: "Metadata and attribution as shipping criteria",
    lesson: "Shipping is not only features. It is how the product looks when linked on LinkedIn.",
    body: "metadataBase set from env (NEXT_PUBLIC_SITE_URL with Vercel fallbacks). OG and Twitter images wired to optimized og-image.jpg. PortfolioSiteCredit component added across landing, shell, deck viewer, and PDF footer pointing to hannahkraulikpagade.com.",
  },
  {
    title: "Share URLs as first-class persistence",
    lesson: "The artifact, not the login, is the unit of sharing.",
    body: "sessionStorage dies with the tab. Analyze, compare, and briefing flows insert rows into financelens_sessions with nanoid slugs and 30-day expires_at. Expired slugs return 410. Graceful degradation: Supabase failure does not block PPTX or PDF download.",
  },
  {
    title: "Compare accordion as information reveal design",
    lesson: "The order in which information reveals itself is a product decision.",
    body: "Compare results originally rendered all delta sections as always-visible stacked content. Accordion layout: claim shifts and new language expanded by default because those carry the most analytical signal. All other sections collapsible with summary line and item count in the collapsed header.",
  },
],

shippedCards: [
  {
    category: "Input",
    items: [
      "Text paste",
      "PDF upload (text-layer only via pdf-parse; scanned PDFs require paste)",
      "Six sample document pairs including compare mode pairs",
    ],
  },
  {
    category: "Analysis Engine",
    items: [
      "What they said (plain language)",
      "What it actually means (interpretation, hedging removed)",
      "Key numbers (values with direction and context)",
      "Language drift (hedge/firm tags with quoted phrases)",
      "Worth a closer look (evidence-oriented flags)",
      "Source anchors (prompt-required, surfaced when present)",
      "Toggleable confidence score (0-100 evidence density rubric)",
      "Zod + lib/claudeJsonWithRetry one repair turn on failure",
    ],
  },
  {
    category: "Compare Mode",
    items: [
      "Two-document delta analysis (diff-aware system prompt)",
      "Accordion layout: claim shifts and new language expanded by default",
      "All sections independently collapsible, summary line visible when collapsed",
      "Six built-in sample pairs",
      "30-day share URL with compare-specific layout",
    ],
  },
  {
    category: "Output and Sharing",
    items: [
      "Branded PDF via pdf-lib (WSJ Editorial typography)",
      "PPTX via pptxgenjs (Calibri, Office-safe)",
      "Claude 7-slide deck outline",
      "Unsplash + Pollinations image pipeline with attribution",
      "Full-screen and scroll deck viewer at /deck/[slug]",
      "30-day Supabase-backed share URLs, 410 on expiry",
      "/methodology trust and transparency page",
    ],
  },
  {
    category: "Infrastructure",
    items: [
      "Next.js 16, React 19, TypeScript",
      "Tailwind CSS v4 (utility base) + custom .fl-* CSS classes",
      "Claude Sonnet 4 (claude-sonnet-4-20250514) throughout",
      "Zod schema validation",
      "pdf-lib, pptxgenjs (owned presentation layer)",
      "scripts/optimize-assets.mjs (Sharp media pipeline)",
      "PortfolioSiteCredit component",
      "Supabase (financelens_sessions, 30-day TTL, 410 expiry)",
      "Vercel (maxDuration: 120s on analyze/compare, 60s on export-pdf)",
    ],
  },
],

stackHighlighted: [
  "Claude API (claude-sonnet-4-20250514, Zod-validated six-section contract, lib/claudeJsonWithRetry)",
  "pptxgenjs + pdf-lib (owned presentation layer, no Canva OAuth dependency)",
  "Supabase (financelens_sessions, 30-day TTL, 410 on expiry)",
],

stackStandard: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Vercel"],

whatThisDemonstrates: [
  "Structured AI output architecture using typed JSON contracts and Zod validation with repair",
  "Product-level distinction between summarization and intelligence",
  "Source anchor design as a trust architecture decision (prompt-required, schema-optional, honest about current implementation)",
  "Five documented pivot decisions each with a real constraint, decision, and outcome",
  "Accordion-style compare UX: information reveal order as a product decision",
  "Fully owned presentation layer without third-party OAuth dependency",
  "Media pipeline discipline: design exports treated as build artifacts, not direct deploys",
  "Financial domain fluency: earnings calls, 10-K structure, language drift in investor communications",
  "Full-stack build from product definition to deployed, shareable artifact with 30-day share URLs",
],

honestSummary: {
  technical: `Claude Sonnet 4 (claude-sonnet-4-20250514) is used for all analyze, compare, and briefing calls. No Haiku routing is implemented. Source anchors are prompt-required; supportingEvidence is optional in the Zod schema, not a hard validation gate. claudeJsonWithRetry fires one structured repair turn before error state surfaces. Compare mode uses a diff-aware system prompt, architecturally distinct from standard analysis. Presentation layer: Claude deck outline, pptxgenjs PPTX (Calibri for Office compatibility), pdf-lib PDF (WSJ Editorial typography), custom deck viewer at 30-day Supabase URLs with 410 on expiry. Media pipeline: scripts/optimize-assets.mjs produces hero.webp, og-image.jpg, and rasterized icons. UI is mostly custom .fl-* CSS; Tailwind provides the reset and utility base. metadataBase from NEXT_PUBLIC_SITE_URL.`,
  product: `The product hypothesis is that structured intelligence and summarization are different products. Five pivot decisions are documented in the process section: Canva to owned presentation layer, design exports to build pipeline, attribution as shipping criteria, share URLs as the unit of sharing (30-day TTL), and compare accordion as information reveal design. The honest gaps: source anchors are prompt-required but schema-optional, no streaming on analyze, no rate limiting before public traffic, no observability before monetization.`,
  design: `WSJ Editorial light has three distinct typeface roles: Fraunces for landing and display headings, Georgia for app and report surfaces, IBM Plex Mono for financial data and labels. The compare accordion layout is a product design decision: claim shifts and new language expanded by default because those carry the most analytical signal. All other sections show a summary line and item count in the collapsed header. PPTX uses Calibri because it is the Office-safe default, not the brand choice. The deck viewer scroll and full-screen modes serve different use cases: scroll for reading, full-screen for presenting.`,
},

impactQuote: `The intelligence is in the delta. What changed from last quarter. Where management stopped committing and started hedging. What was disclosed in a footnote for the first time. FinanceLens surfaces the signal that the document format hides.`,
```

### Fields that need to be CONFIRMED in current caseStudies.ts

- `status` — confirm `"live"`
- `embedUrl` and `liveUrl` — confirm `https://financelens-ai.vercel.app`
- Any `processSteps` or descriptions saying "permanent URL" — update to "30-day share URL"
- Any model reference saying "Haiku" — remove, standardize to claude-sonnet-4-20250514
- Any "required field in schema" for source anchors — soften to "prompt-required, surfaced when present"
- `tagline` — confirm "Financial documents, in plain English." is still accurate

---

## HOW TO APPLY THESE CHANGES

For each project, open `content/caseStudies.ts` (and sync to `src/content/caseStudies.ts`).

Find the object for each slug and add the fields listed above. Do not overwrite existing fields unless the update note says to.

After adding, run these grep checks before pushing:

```bash
grep -n "Vanguard" content/caseStudies.ts
grep -n "Pagade Ventures" content/caseStudies.ts
grep -n "Haitian Creole" content/caseStudies.ts
grep -n "Somali" content/caseStudies.ts
grep -n "permanent URL" content/caseStudies.ts
grep -n "Haiku" content/caseStudies.ts
grep -n "Web Speech API" content/caseStudies.ts
```

All should return zero results.

Run the site locally and navigate to `/work/healthliteracy-ai`, `/work/clearchannel-vestara`, and `/work/financelens-ai` to confirm all new components (ProofPointBlock, StatsRow, ProcessSideNav, PivotAccordion, ShippedGrid, StackRow, WhatThisDemonstrates, HonestSummary, ImpactClose) render with data.

*Gap analysis complete. April 2026.*