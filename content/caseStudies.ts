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
      "At least 12 million Americans experience a diagnostic error in outpatient settings each year. Most happen not because clinicians lack knowledge, but because the intake process gives them no structured way to connect a patient's full symptom picture to a working differential before the encounter begins. OrixLink is the tool that closes that gap: any symptom, any person, no prior diagnosis required.",
    processSteps: [
      "Clinical constraint set: the output had to be structured the way a triage nurse actually thinks. Urgency tiers, differential ranking, and red flag framing were all drawn from 15 years of clinical observation before a single line of prompt engineering was written.",
      "Output contract before UI: the system prompt enforces fixed section tokens that the parser maps into typed UI components. The contract was defined first. The UI was built to consume it. The system prompt is the product IP.",
      "Monetization before the first user: billing architecture, credit data model, and the atomic attempt/rollback RPC pairing were all designed before launch. Three production-class billing bugs were caught and fixed during build.",
      "Delivery and validation: validated against a real clinical scenario before marketing began. The compartment syndrome presentation matched the clinical workup. 28-item launch checklist covering clinical accuracy, billing integrity, auth flows, mobile layout, and legal compliance.",
    ],
    impactLine:
      "The intake gap and diagnostic error statistics are real. Fifteen years at the bedside is the research program. The proof point is a real patient whose emergency presentation the product surfaced before a clinician saw him.",
    processAngle:
      "Next.js 16 App Router, Claude API (Sonnet for paid tiers, Haiku for free), Supabase (Google OAuth and email auth, persistence, RLS, pg_cron, pg_net), Stripe (checkout, webhooks, billing portal, idempotent credits via unique constraint on payment intent), Resend for transactional email, typed assessment output via parseAssessment, Meridian Oracle design system. Live at triage.rohimaya.ai, early commercial pilot.",
    cardSummary:
      "Universal triage at triage.rohimaya.ai: Stripe billing, credit packs, Google OAuth, usage caps and reminders. March 2026 compartment syndrome validation matched the clinical workup.",
    role: "Product Lead, Conversation UX, Prompt Architect, Full-Stack Implementation",
    timeline: "2025 — Present",
    keyOutcome:
      "Early commercial pilot: Stripe subscriptions, credit packs, Google OAuth, atomic usage caps with rollback and idempotent credit webhooks, Resend reminders; March 2026 validation matched clinical workup on a compartment syndrome presentation",
    proofPoint: {
      label: "The proof point",
      body: "Seven days after my spouse had a radial artery cardiac catheterization with stent placement, he developed forearm swelling, a hard and tight forearm to palpation, pain that had returned after initial improvement, pain waking him from sleep, and progressive grip weakness. I ran OrixLink. It flagged the cluster as a red-flag emergency consistent with compartment syndrome, returned a structured differential, identified four present red flag criteria, and recommended going to the emergency room now. He was seen. The assessment matched the clinical workup.",
      verdict: "This is not a demo. This is what the product is for.",
    },
    stats: [
      {
        number: "12M+",
        label:
          "Americans experience a diagnostic error in outpatient settings each year",
        source: "National Academies, 2015",
      },
      {
        number: "32.9%",
        label:
          "of malpractice payments are diagnosis-related, the single highest category",
        source: "Newman-Toker et al., 2021",
      },
      {
        number: "74.9%",
        label:
          "of diagnosis-related malpractice outcomes resulted in death or permanent disability",
        source: "Newman-Toker et al., 2021",
      },
      {
        number: "85%",
        label:
          "of harmful diagnostic errors in hospital patients were likely preventable",
        source: "BMJ Quality and Safety, 2024",
      },
    ],
    processStepsInteractive: [
      {
        number: "01",
        label: "Discovery",
        phase: "STEP 01 — DISCOVERY",
        title: "Discovery",
        body: "I did not need to conduct user research for this product. I have conducted it for 15 years on every shift. The intake failure pattern is not hypothetical. It is the first 90 seconds of every clinical encounter, repeated across every acute care, post-acute, rehabilitation, and senior living setting I have worked in. The constraints came directly from the floor, not a whiteboard.",
      },
      {
        number: "02",
        label: "Design",
        phase: "STEP 02 — DESIGN AND BUILD",
        title: "Design and build",
        body: "The hardest problem was the output contract. The Claude system prompt had to accept unconstrained natural language and return a structured differential a triage nurse would trust. Every word was iterated until the output was clinically defensible. The contract was defined first. The UI was built to consume it. The system prompt is the product IP.",
      },
      {
        number: "03",
        label: "Architecture",
        phase: "STEP 03 — ARCHITECTURE",
        title: "Architecture",
        body: "Full-stack clinical tool: natural language intake, structured differential output, red flag cards, urgency tiers, follow-up prompting, anonymous session gate, Supabase persistence, tiered Stripe billing with atomic usage enforcement, idempotent credit delivery, follow-up reminder system, admin dashboard, Meridian Oracle design system across all surfaces, PWA with offline fallback, and a compliance-aware legal layer with HIPAA non-covered-entity disclosure.",
      },
      {
        number: "04",
        label: "Delivery",
        phase: "STEP 04 — DELIVERY AND VALIDATION",
        title: "Delivery and validation",
        body: "Validated against a real clinical scenario before marketing began. The compartment syndrome presentation matched the clinical workup. Three production-class billing bugs were diagnosed and fixed before any paying user encountered them. The launch checklist covered 28 items across clinical accuracy, billing integrity, auth flows, mobile layout, and legal compliance.",
      },
    ],
    pivots: [
      {
        tag: "ENFORCEMENT",
        title: "Anonymous enforcement moved server-side",
        body: "Early enforcement leaned on localStorage. A determined user could clear storage and run unlimited free assessments. At roughly $0.014 per Haiku session, that is a real cost leak. The fix moved enforcement server-side: fingerprint and IP stored in the database with a 24-hour window and 30-day retention. The legal disclosure was added at the same time.",
        lesson:
          "Client-side enforcement is a UX signal, not a security gate. Any enforcement that matters lives at the data layer.",
      },
      {
        tag: "BILLING",
        title: "Credit data model drift caught before real money moved",
        body: "Credit packs initially wrote to a credits_balance column on usage_tracking while attempt_assessment read a separate credits table. A user could purchase a credit pack, see a confirmation, and still hit a cap wall on their next assessment. Real money was moving. The fix aligned webhook writes with RPC reads before any paid user hit the flow.",
        lesson:
          "Billing data model decisions compound quickly. Every column storing money-adjacent state needs an explicit contract with the function that reads it.",
      },
      {
        tag: "DATABASE",
        title: "RPC boundary bug diagnosed in the Supabase SQL editor",
        body: "attempt_assessment could treat the last included subscription assessment as over-cap and pull from credits incorrectly. A user at exactly their monthly limit would have a credit consumed for a free subscription assessment. The fix reads v_used_before before incrementing and only enters the credits path when the subscription increment did not fire.",
        lesson:
          "Atomic database functions require explicit boundary definitions, not implicit assumptions about when paths fire.",
      },
    ],
    shippedCards: [
      {
        title: "Clinical assessment engine",
        body: "3-step intake, 7 roles, 12 languages, 4-tier urgency, ranked differential, red flag cards, follow-up prompts, multi-turn conversation.",
      },
      {
        title: "Monetization architecture",
        body: "4 subscription tiers, credit packs, family plans with shared pool, atomic usage enforcement, Stripe Checkout plus full webhook lifecycle.",
      },
      {
        title: "Auth and sessions",
        body: "Google OAuth, email/password, anonymous gate with server-side enforcement, session migration, 30-minute inactivity timeout with warning banner.",
      },
      {
        title: "Family system",
        body: "Email and code invite flow, 600-assessment shared pool, 6 members, 10 per day per-member limit, cancellation cascade, usage dashboard.",
      },
      {
        title: "Compliance and legal",
        body: "First-use legal overlay, full legal page, HIPAA non-covered-entity disclosure, anonymous data retention policy, RLS on all database tables.",
      },
      {
        title: "Infrastructure",
        body: "Meridian Oracle design system, PWA with offline fallback, pg_cron reminders, admin dashboard, env validation at startup, Vercel deploy.",
      },
    ],
    stackHighlighted: ["Claude API", "Next.js 16", "Supabase", "Stripe"],
    stackStandard: [
      "TypeScript",
      "Tailwind v4",
      "Resend",
      "pg_cron",
      "pg_net",
      "Vercel",
    ],
    whatThisDemonstrates: [
      {
        title: "Production-grade prompt engineering for clinical AI",
        tag: "TECHNICAL",
        body: "The OrixLink system prompt must produce structured output, enforce clinical attribution language, surface urgency discretely, and handle the full range of symptom presentations without hallucinating diagnoses or missing red flags. The system prompt is the product IP.",
      },
      {
        title: "Universal scope as a deliberate product decision",
        tag: "PRODUCT",
        body: "Any symptom, any person, no prior diagnosis required is a positioning choice that most clinical AI products explicitly avoid. Existing tools narrow scope to reduce liability. OrixLink accepts the full scope and manages it through prompt constraint rather than feature limitation.",
      },
      {
        title: "Design systems thinking at brand scale",
        tag: "DESIGN",
        body: "The Meridian Oracle system was not designed for OrixLink alone. It was designed as the foundation for the Rohimaya Health AI brand family. Maintaining visual coherence across multiple products while differentiating by audience is a Head of Product competency, not just a design competency.",
      },
      {
        title: "Clinical knowledge applied as product constraint",
        tag: "PRODUCT",
        body: "The red flag logic, urgency taxonomy, care pathway recommendations, and attribution language all reflect 15 years of real clinical knowledge applied as product constraint. That is not replicable by a product manager without clinical experience.",
      },
      {
        title: "0-to-1 ownership across every layer",
        tag: "FULL-STACK",
        body: "Product strategy, conversation design, system prompt engineering, full-stack implementation, billing architecture, and clinical validation all came from one person. This is the portfolio evidence for what that combination looks like at production scale.",
      },
    ],
    honestSummary: {
      technical: {
        label: "For engineers and architects",
        body: "Typed output contract via parseAssessment plus attempt_assessment and rollback_assessment RPC pairing plus Stripe claim-after-process idempotency and stripe_payment_intent_id dedup, built and shipped by one person with a clinical license and a code editor.",
      },
      product: {
        label: "For product and clinical teams",
        body: "The monetization architecture, system prompt, full-stack implementation, three production-class billing bug fixes, and clinical validation against a real emergency presentation all came from one builder with 15 years of domain expertise. This is what 0-to-1 looks like when the domain knowledge is not borrowed.",
      },
      design: {
        label: "For design and brand teams",
        body: "The Meridian Oracle system was not designed for one product. It was designed for a brand family. OrixLink is the flagship. The dark palette, Cormorant Garamond display type, and gold accent signal clinical authority to both clinicians and patients without feeling cold. Every urgency state, error condition, and empty state has a designed response across the assessment funnel, dashboard, history, account, legal pages, email templates, and print output.",
      },
    },
    impactQuote:
      "The intake gap and diagnostic error statistics are real. Fifteen years at the bedside is the research program. The proof point is a real patient whose emergency presentation the product surfaced before a clinician saw him.",
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
