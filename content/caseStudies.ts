export type EmbedType = "live" | "coming-soon";
export type CaseStudyStatus = "live" | "coming-soon";

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  coverImage: string;
  order: number;
  featured: boolean;
  embedType: EmbedType;
  embedUrl: string;
  liveUrl: string;
  status: CaseStudyStatus;
  tagline?: string;
  projectDescription: string;
  problemStatement?: string;
  processSteps?: [string, string, string] | [string, string, string, string];
  impactLine?: string;
  processAngle: string;
  /** Short summary for card view (scan-friendly). */
  cardSummary?: string;
  /** Role on the project (e.g. "Conversation UX Lead") */
  role?: string;
  /** Timeline (e.g. "2025 — Present") */
  timeline?: string;
  /** One-line outcome for recruiter scan */
  keyOutcome?: string;

  proofPoint?: {
    label: string;
    body: string;
    verdict: string;
  };

  stats?: Array<{
    number: string;
    label: string;
    source: string;
  }>;

  processStepsInteractive?: Array<{
    number: string;
    label: string;
    phase: string;
    title: string;
    body: string;
  }>;

  pivots?: Array<{
    tag: string;
    title: string;
    body: string;
    lesson: string;
  }>;

  shippedCards?: Array<{
    title: string;
    body: string;
  }>;

  stackHighlighted?: string[];
  stackStandard?: string[];

  whatThisDemonstrates?: Array<{
    title: string;
    tag: string;
    body: string;
  }>;

  honestSummary?: {
    technical: { label: string; body: string };
    product: { label: string; body: string };
    design: { label: string; body: string };
  };

  impactQuote?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    featured: true,
    order: 1,
    slug: "orixlink-ai",
    title: "OrixLink AI",
    tagline: "Where every symptom finds its answer.",
    subtitle:
      "OrixLink AI accepts any symptom in natural language and returns a structured clinical differential, red flag criteria, four-tier urgency classification, and plain-language next steps. Built by a 15-year LPN for the intake gap behind an estimated 12 million outpatient diagnostic errors a year. Monetized with tiered subscriptions, credit packs, Google OAuth, Stripe with idempotent credit delivery (unique constraint on payment intent), and a lifetime access offer.",
    tags: ["CLINICAL-AI", "CONVERSATIONAL", "FULL-STACK", "MONETIZED"],
    embedType: "live",
    embedUrl: "https://triage.rohimaya.ai",
    liveUrl: "https://triage.rohimaya.ai",
    status: "live",
    coverImage: "/images/orixlink-ai-landing.png",
    projectDescription:
      "OrixLink AI accepts any symptom in natural language and returns a structured clinical differential, red flag criteria, four-tier urgency classification, and plain-language next steps. Built by a 15-year LPN for the intake gap that causes an estimated 12 million diagnostic errors a year in outpatient settings. Monetized with tiered subscriptions, credit packs, Google OAuth, Stripe with idempotent credit delivery (unique constraint on payment intent), and a lifetime access offer.",
    problemStatement:
      "At least 12 million Americans experience a diagnostic error in outpatient settings each year. Most happen not because clinicians lack knowledge, but because the intake process gives them no structured way to connect a patient's full symptom picture to a working differential. OrixLink is the tool that closes that gap—any symptom, any person, no prior diagnosis required. Validated in March 2026 against a real compartment syndrome presentation.",
    processSteps: [
      "I did not need to conduct user research for this product. I have conducted it for 15 years on every shift. The intake failure pattern is not hypothetical. It is the first 90 seconds of every clinical encounter, repeated across every setting I have worked in.",
      "The hardest problem was the output contract. The Claude system prompt had to accept unconstrained natural language, return a structured differential with likelihood rankings, surface red flags as a discrete layer, assign a four-tier urgency level, and frame everything as clinical support without being a disclaimer wall or a dangerously confident diagnosis. Every word of that prompt was iterated until a triage nurse would trust it. Then the output was parsed by a typed consumer so the UI never breaks regardless of language or phrasing variation.",
      "A conversational clinical triage tool with natural language intake, structured differential output, red flag cards, urgency tiers, follow-up prompting, legal overlay, Supabase persistence, full authentication with Google OAuth and email plus anonymous session migration, tiered Stripe billing with atomic usage enforcement, idempotent credit delivery using a unique constraint on Stripe payment intent, credit packs, a follow-up reminder system via Resend and pg_cron, admin dashboard, Meridian Oracle dark design system across all surfaces, PWA with offline fallback, and a compliance-aware legal layer including HIPAA scope, anonymous data disclosure, and session timeout policy. Validated in March 2026 against a real compartment syndrome presentation that matched the clinical workup.",
      "Production SQL fix — the RPC boundary bug: at the subscription cap, attempt_assessment could mis-classify the last included assessment as over-cap and consume a credit (ghost credit). Diagnosed in the Supabase SQL editor by tracing subscription usage before and after the cap check. Fixed with v_used_before logic so subscription-funded sessions never fall through to credits incorrectly. Credit purchases also use a unique constraint on stripe_payment_intent_id so duplicate Stripe webhook retries cannot double-apply credits.",
    ],
    impactLine:
      "OrixLink exists because the intake gap is real, the diagnostic error rate is real, and 15 years of clinical experience is worth more than a user research sprint. The proof point is not a demo. It is a real patient whose symptom cluster the product correctly flagged as an emergency before a clinician saw him.",
    processAngle:
      "Next.js 16 App Router, Claude API (Sonnet for paid tiers, Haiku for free), Supabase (Google OAuth and email auth, persistence, RLS, pg_cron, pg_net), Stripe (checkout, webhooks, billing portal, idempotent credits via unique constraint on payment intent), Resend for transactional email, typed assessment output via parseAssessment, Meridian Oracle design system. Live at triage.rohimaya.ai, early commercial pilot.",
    cardSummary:
      "Universal triage at triage.rohimaya.ai: Stripe billing, credit packs, Google OAuth, usage caps and reminders. March 2026 compartment syndrome validation matched the clinical workup.",
    role: "Product Lead, Conversation UX, Prompt Architect, Full-Stack Implementation",
    timeline: "2025 — Present",
    keyOutcome:
      "Early commercial pilot: Stripe subscriptions, credit packs, Google OAuth, atomic usage caps with rollback and idempotent credit webhooks, Resend reminders; March 2026 validation matched clinical workup on a compartment syndrome presentation",
  },
  {
    featured: false,
    order: 2,
    slug: "healthliteracy-ai",
    title: "HealthLiteracy AI",
    tagline: "Your medical records, in your language.",
    subtitle:
      "Clinical document translation into plain language across 12 languages and 3 reading levels. Urgent action items surfaced before the translation body. Built-in AI verification pass checks the translation against the original for omissions before showing it to the patient.",
    tags: ["HEALTH-EQUITY", "PATIENT-FACING", "FULL-STACK", "MULTILINGUAL"],
    embedType: "live",
    embedUrl: "https://literacy.rohimaya.ai",
    liveUrl: "https://literacy.rohimaya.ai",
    status: "live",
    coverImage: "/images/healthliteracy-ai-landing.png",
    projectDescription:
      "HealthLiteracy AI translates discharge summaries, lab results, and clinical notes into plain language a patient can actually act on. Three input methods. Twelve languages. Three reading levels with descriptive labels. A reverse-check verification step sends the translation back through Claude before the patient sees it. Urgent items are surfaced as visual cards above the translation body so a patient who reads only the top of the page still knows what to do.",
    problemStatement:
      "88% of Americans have less-than-proficient health literacy. The average discharge summary is written at a 9th grade reading level. Patients who clearly understand their discharge instructions are 30% less likely to be readmitted. That gap is a product problem — and a product can close it.",
    processSteps: [
      "The constraint set was clear before a line of code was written: no login, no setup, urgent items at the top, built-in translation in the languages patients in a real clinical setting actually speak. The tool had to serve someone who might be scared, medicated, and not literate in English — all at the same time.",
      "The hardest product decision was the Claude system prompt. Translation is easy. A translation a nurse would trust to hand to a patient requires specific constraints: every medical term explained in the same sentence it appears, urgent items returned as a structured array separate from the translation body so the front end can always render them first, attribution language that prevents the tool from functioning as a diagnostic instrument, and a verification pass that checks its own work.",
      "Twelve languages and voice input were built at launch rather than deferred. English-only MVP thinking does not serve the population this product is for. The reading level selector uses descriptive labels — Simple, Clear, Complete — rather than grade levels, because selecting a reading level should feel like choosing a format, not assessing yourself.",
      "The reverse-check verification step was the most important safety decision. A second Claude API call sends the translation back through Claude acting as a QA auditor. It checks for omissions, meaning drift, and inaccuracies before the output is shown. A patient who cannot catch a translation error should never be in a position where catching it was their responsibility.",
    ],
    impactLine:
      "If someone cannot read or act on discharge instructions, the care plan never really starts. HealthLiteracy AI is built so plain language, reading level, language choice, and urgent action items are part of the product — not an afterthought.",
    processAngle:
      "Built around health equity constraints with twelve-language output, low-friction input modes, and AI verification for omission checking.",
    cardSummary:
      "Patient document translation. 12 languages, 3 reading levels, urgent items surfaced first. Built-in AI verification pass. No login required. Free by design.",
    role: "Product and Conversation Design",
    timeline: "2025 — Present",
    keyOutcome: "Twelve-language translation with AI verification, three reading levels, and shareable sessions",
  },
  {
    order: 4,
    featured: false,
    slug: "onboarding-agent",
    title: "Onboarding Agent",
    embedUrl: "",
    embedType: "coming-soon",
    liveUrl: "",
    status: "coming-soon",
    subtitle:
      "A multi-turn conversational onboarding agent for a fictional B2B HR platform. The Claude-powered agent adapts its question sequence based on company size and team structure, ends with a structured setup summary, and includes a full conversation design artifact showing every branch and terminal state.",
    tags: ["ENTERPRISE-SAAS", "CONVERSATIONAL-AI", "FULL-STACK"],
    coverImage: "",
    projectDescription:
      "A multi-turn conversational onboarding agent for a fictional B2B HR platform. The Claude-powered agent adapts its question sequence based on company size and team structure, ends with a structured setup summary, and includes a full conversation design artifact showing every branch and terminal state.",
    processAngle: "Coming soon.",
  },
  {
    featured: false,
    order: 5,
    slug: "financelens-ai",
    title: "FinanceLens AI",
    tagline: "Financial documents, in plain English.",
    subtitle:
      "FinanceLens analyzes earnings calls, 10-K filings, and regulatory notices into structured intelligence: plain language, interpretation, key numbers, drift with quoted phrases, flags, source anchors, and an evidence-based confidence rubric (not investment advice). Compare two documents, export a branded PDF, generate PPTX briefing decks from a Claude-built slide outline, and share full-screen deck views via 30-day links. Haiku by default for latency, Sonnet for deeper passes. Assistive analysis only, not financial advice.",
    tags: ["FINTECH", "AI-PRODUCT", "FULL-STACK", "DOCUMENT-INTELLIGENCE"],
    embedType: "live",
    embedUrl: "https://financelens-ai.vercel.app",
    liveUrl: "https://financelens-ai.vercel.app",
    status: "live",
    coverImage: "/images/financelens-ai-landing.png",
    projectDescription:
      "FinanceLens analyzes earnings calls, 10-K filings, and regulatory notices into structured intelligence: plain language, interpretation, key numbers, drift with quoted phrases, flags, source anchors, and an evidence-based confidence rubric (not investment advice). Compare two documents, export a branded PDF, generate PPTX briefing decks from a Claude-built slide outline, and share full-screen deck views via 30-day links. Haiku by default for latency, Sonnet for deeper passes. Assistive analysis only, not financial advice.",
    problemStatement:
      "Executives write earnings calls and regulatory filings to communicate selectively. The language is deliberate. Most readers lack tools to see what the language is signaling, not just what it says. FinanceLens makes that signal visible. It also reduces workflow friction: turning a careful read into something shareable without institutional tooling.",
    processSteps: [
      "The core insight is translation versus intelligence. Translation removes complexity; intelligence reveals what deliberately simple language is doing. Constraints included drift as a discrete quoted signal, confidence tied to evidence density in the excerpt (not stock recommendations), document-type-specific prompts, shareable outputs, and persistent assistive-only guardrails. The original spec used Canva Connect for decks; Canva app review blocked programmatic access, so the architecture pivoted to an owned presentation layer: Claude-built slide JSON, pptxgenjs for PPTX download, Unsplash plus Pollinations for imagery, and a branded full-screen viewer at share URLs with a 30-day TTL. Canva integration remains on the roadmap.",
      "Implementation centers on Anthropic (Haiku default on analyze for speed, Sonnet for compare, briefing, and deeper passes), Zod-validated JSON with a repair retry path, Supabase persistence for shared analyses and decks, pdf-lib for branded PDF export, and server-side PDF text extraction (text layer only; scanned PDFs need paste). Routes use extended maxDuration where needed for long documents. A dedicated methodology page documents confidence, image sourcing, session scope, and disclaimers.",
      "What shipped: single-document analyze with PDF upload, six output areas including source anchors and optional confidence, compare mode with sample pairs and shared compare layouts, briefing flow with PPTX download and copy-to-clipboard share links, /deck/[slug] scroll and presenter views, branded PDF export, and in-product trust copy. Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, deployed on Vercel.",
    ],
    impactLine:
      "FinanceLens closes the loop from financial document to shareable artifact: validated JSON from Claude, branded PDF, PPTX decks, and 30-day share links in a WSJ Editorial viewer, with methodology and assistive-only framing throughout.",
    processAngle:
      "Next.js 16, React 19, Claude (Haiku and Sonnet), Zod plus JSON retry, Supabase, pdf-lib, pptxgenjs, Unsplash and Pollinations. WSJ Editorial UI. Canva Connect planned after approval, not required for the core workflow.",
    cardSummary:
      "Earnings calls, 10-Ks, and regulatory filings: structured analysis, two-document compare, branded PDF, PPTX decks, 30-day share URLs, methodology and trust framing.",
    role: "Product design, prompt architecture, implementation",
    timeline: "2026",
    keyOutcome:
      "Drift, anchors, and evidence-based confidence rubric; compare mode; branded PDF; PPTX and 30-day /deck share viewer; Zod-validated pipeline. Assistive only, not financial advice.",
  },
  {
    featured: false,
    order: 3,
    slug: "clearchannel-vestara",
    title: "ClearChannel by Vestara",
    tagline: "Design the conversation. Across every channel.",
    subtitle:
      "Enterprise NLU routing simulator for financial services contact centers. One utterance drives three simultaneous channel outputs — IVR, Chatbot, and Agent Assist — with full intent taxonomy, confidence scoring, three emotional override protocols, and voice input via OpenAI Whisper.",
    tags: ["CONVERSATION-DESIGN", "NLU-ARCHITECTURE", "ENTERPRISE-AI", "FINTECH"],
    embedType: "live",
    embedUrl: "https://clearchannel-vestara.vercel.app/",
    liveUrl: "https://clearchannel-vestara.vercel.app/",
    status: "live",
    coverImage: "/images/clearchannel-landing.png",
    projectDescription:
      "ClearChannel demonstrates what it means to design a conversational AI system for all channels at once rather than one at a time. Built to show how a single investor utterance is classified, routed, and transformed into channel-specific responses in real time. Three hard override protocols handle bereavement, fraud, and barge-in before any standard intent classification runs.",
    problemStatement:
      "Most conversational AI design tools optimize for one channel. Enterprise contact centers run three simultaneously. The design consequences of routing decisions are invisible unless you can see IVR, Chatbot, and Agent Assist fire at once. ClearChannel makes that system visible, interactive, and auditable.",
    processSteps: [
      "The product started from a simple observation: conversational AI design tools show one channel at a time, but the real design problem is the system — how the same utterance gets handled differently across IVR, chatbot, and live agent support, and where those three channels contradict each other. That contradiction is invisible in standard design tools. ClearChannel makes it visible in real time.",
      "The core architecture decision was to treat all three channel outputs as a single atomic Claude API call with a structured JSON output contract rather than three separate calls. This keeps latency low and guarantees the three outputs are always internally consistent with each other — the IVR containment decision and the Agent Assist script can never contradict each other in the same response.",
      "The three override protocols — bereavement, fraud, barge-in — were designed before the standard intent taxonomy. The principle is the same one used in clinical triage: the most dangerous presentations are handled before the standard intake process runs. Emotional emergencies in a financial services context require the same discipline.",
      "Streaming via Server-Sent Events with a brace-depth JSON section extractor was chosen to give progressive panel hydration under two seconds of perceived latency. A practitioner watching three panels populate in real time engages differently with the output than one waiting for a blocking response.",
    ],
    impactLine:
      "Live portfolio demonstration of enterprise conversational AI for financial services contact centers: multi-channel NLU architecture that is visible, interactive, and auditable in real time.",
    processAngle:
      "Designed for enterprise conversational governance: emotional overrides, simultaneous channel outputs, confidence legibility, and verbatim-ready agent assist.",
    cardSummary:
      "Enterprise NLU routing simulator. One utterance, three simultaneous channel outputs, three emotional override protocols, full NLU architecture card per utterance. Live with voice input and IVR audio playback.",
    role: "Product & Conversation UX",
    timeline: "2025",
    keyOutcome:
      "Live multi-channel NLU simulator with 18 intents, confidence scoring, and sentiment-aware routing",
  },
];

export function getFeaturedCaseStudies() {
  return [...caseStudies]
    .sort((a, b) => a.order - b.order)
    .filter((c) => c.featured);
}

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
