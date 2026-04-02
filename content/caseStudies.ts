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
      "88% of Americans have less-than-proficient health literacy. The average discharge summary is written at a 9th or 10th grade reading level. The average patient reads at an 8th grade level at best — often lower — and may not read English at home. Patients who understand their discharge instructions are 30% less likely to be readmitted. That gap is a product problem.",
    processSteps: [
      "I did not need to conduct user research for this project. I have conducted it for 15 years on every shift. The constraints were clear before the first line of code: no login, no setup, urgent items at the top, built-in translation in the languages my actual patients speak. The tool had to serve patients who might be scared, tired, medicated, or not literate in English — all at once.",
      "The core product decision was the Claude system prompt. Translation is easy. A translation that a nurse would trust to hand to a patient requires specific constraints: every medical term explained in the same sentence, urgent items returned as a structured array separate from the translation body, attribution language that prevents the tool from being read as a diagnosis, and a verification pass that checks its own work for omissions. Twelve languages and voice input were built at launch, not deferred, because the population this serves is not well-served by English-only MVP thinking.",
      "A free, no-login patient document translation tool with three input methods, twelve languages, three reading levels, urgent item cards, side-by-side view, copy and share, and a built-in AI verification pass that checks the translation against the original for omissions. Deployed on Vercel at literacy.rohimaya.ai, sessions persisted in Supabase, built on Next.js 15 and the Claude API.",
    ],
    impactLine:
      "If someone cannot read or act on discharge instructions, the care plan never really starts. HealthLiteracy is built so plain language, reading level, language, and urgent items are part of the product, not an afterthought.",
    processAngle:
      "Built around health equity constraints with twelve-language output, low-friction input modes, and AI verification for omission checking.",
    cardSummary:
      "Patient document translation. 12 languages, 3 reading levels, urgent items surfaced first. Built-in AI verification pass. No login required. Free by design.",
    role: "Product and Conversation Design",
    timeline: "2025 — Present",
    keyOutcome: "Twelve-language translation with AI verification, three reading levels, and shareable sessions",
    stats: [
      {
        number: "88%",
        label:
          "of American adults have less-than-proficient health literacy",
        source: "U.S. Department of Health and Human Services",
      },
      {
        number: "88.7%",
        label:
          "of discharge instructions analyzed were inaccessible to the patients they were intended for",
        source: "Zhong et al., Journal of General Internal Medicine, 2021",
      },
      {
        number: "30%",
        label:
          "lower likelihood of readmission or ED return when patients understand after-hospital care instructions",
        source: "Agency for Healthcare Research and Quality (cited in case study)",
      },
      {
        number: "78%",
        label:
          "of ED-discharged patients show comprehension deficits for at least one discharge instruction component",
        source: "Menchine & Baraff, Annals of Emergency Medicine, 1994",
      },
    ],
    processStepsInteractive: [
      {
        number: "01",
        label: "Discovery",
        phase: "STEP 01 — DISCOVERY",
        title: "Discovery",
        body: "I did not need to conduct user research for this project. I have conducted it for 15 years on every shift. The constraints were clear before the first line of code: no login, no setup, urgent items at the top, built-in translation in the languages my actual patients speak. The tool had to serve patients who might be scared, tired, medicated, or not literate in English — all at once.",
      },
      {
        number: "02",
        label: "Design",
        phase: "STEP 02 — DESIGN AND BUILD",
        title: "Design and build",
        body: "The core product decision was the Claude system prompt. Translation is easy. A translation that a nurse would trust to hand to a patient requires specific constraints: every medical term explained in the same sentence, urgent items returned as a structured array separate from the translation body, attribution language that prevents the tool from being read as a diagnosis, and a verification pass that checks its own work for omissions. Twelve languages and voice input were built at launch, not deferred, because the population this serves is not well-served by English-only MVP thinking.",
      },
      {
        number: "03",
        label: "Delivery",
        phase: "STEP 03 — WHAT SHIPPED",
        title: "What shipped",
        body: "A free, no-login patient document translation tool with three input methods, twelve languages, three reading levels, urgent item cards, side-by-side view, copy and share, and a built-in AI verification pass that checks the translation against the original for omissions. Deployed on Vercel at literacy.rohimaya.ai, sessions persisted in Supabase, built on Next.js 15 and the Claude API.",
      },
    ],
    pivots: [
      {
        tag: "DESIGN",
        title: "Reading level selector: descriptive labels instead of grade levels",
        body: "An early iteration used grade-level labels (5th Grade, 8th Grade, College). These were replaced with descriptive labels (Simple, Clear, Complete) because grade levels require meta-cognition — a patient has to assess their own reading ability and select accordingly.",
        lesson:
          "Descriptive labels communicate the output quality, not a judgment about the reader. A patient picking Simple is choosing a format, not identifying a deficit.",
      },
      {
        tag: "SAFETY",
        title: "Reverse-check verification as a second Claude pass",
        body: "A reverse-check pass runs as a second API call after translation. Claude is prompted to act as a QA auditor comparing the translation against the original for omissions and inaccuracies, returning a structured pass/fail result with itemized flags.",
        lesson:
          "A patient who cannot catch a translation error should never be in a position where catching it was their responsibility.",
      },
    ],
    shippedCards: [
      {
        title: "Inputs and reading levels",
        body: "Paste text, upload PDF (server-side pdf-parse), or voice input (Web Speech API). Reading levels: Simple, Clear, Complete. Twelve-language output including English, Spanish, Haitian Creole, Portuguese, French, Mandarin, Vietnamese, Tagalog, Korean, Arabic, Hindi, and Russian.",
      },
      {
        title: "Urgent items and layout",
        body: "Urgent item cards rendered above the translation body for follow-up appointments, medication changes, and return precautions. Side-by-side view: original clinical document and plain-language translation. Copy to clipboard supported.",
      },
      {
        title: "Verification pipeline",
        body: "Two-call pipeline: translate, then verify. Second Claude call audits the translation for omissions, inaccuracies, and meaning drift with structured pass/fail, confidence, and itemized flags.",
      },
      {
        title: "Share and persistence",
        body: "Shareable URLs via Supabase-persisted sessions. Public read by session ID, public insert, no authentication required. Row Level Security enabled.",
      },
      {
        title: "Candlelight Clarity design system",
        body: "Cream, forest green, and amber palette; Cormorant Garamond, DM Sans, DM Mono; WCAG AA contrast; hero ring motion for calm, warm register; urgent cards use amber border instead of clinical red.",
      },
      {
        title: "Deploy and runtime",
        body: "Next.js 15 App Router, TypeScript, Tailwind CSS v4, Claude API (claude-sonnet-4-20250514), Vercel at literacy.rohimaya.ai, Cloudflare DNS. PDF parsing on Node.js runtime; edge runtime excluded for parsing reliability.",
      },
    ],
    stackHighlighted: ["Claude API", "Next.js 15", "Supabase", "Tailwind CSS v4"],
    stackStandard: [
      "TypeScript",
      "pdf-parse",
      "Web Speech API",
      "Vercel",
    ],
    whatThisDemonstrates: [
      {
        title: "AI architecture for clinical-safe document processing",
        tag: "TECHNICAL",
        body: "The two-call pipeline (translate, then verify) and structured JSON output show how to constrain LLM behavior for clinical contexts. This is not a chatbot. It is a deterministic document processing pipeline with AI as the engine.",
      },
      {
        title: "Health equity as a product value, not a feature",
        tag: "PRODUCT",
        body: "Twelve languages and voice input were included at launch rather than deferred. Reading level was made accessible via descriptive labels rather than grade levels. Each decision traded speed-to-ship for who the product actually serves.",
      },
      {
        title: "Separation of concerns in prompt engineering",
        tag: "TECHNICAL",
        body: "The system prompt lives as a standalone TypeScript module; the verification prompt is separate with different constraints. That reflects production-grade thinking about prompt versioning and auditability.",
      },
      {
        title: "Design system differentiation in a product family",
        tag: "DESIGN",
        body: "Candlelight Clarity and Meridian Oracle share a font stack but differ in palette and emotional register: patient-facing warmth versus clinical authority, with brand coherence across Rohimaya products.",
      },
      {
        title: "Portfolio breadth in one domain",
        tag: "PRODUCT",
        body: "HealthLiteracy applies the same document-processing discipline as OrixLink in a patient-facing context rather than an assessment context, alongside ClearChannel extending conversational architecture outside healthcare.",
      },
    ],
    impactQuote:
      "If someone cannot read or act on discharge instructions, the care plan never really starts. HealthLiteracy is built so plain language, reading level, language, and urgent items are part of the product, not an afterthought.",
  },
  {
    order: 4,
    featured: false,
    slug: "onboarding-agent",
    title: "Arc Onboarding Agent",
    tagline: "Design the conversation. Not the form.",
    embedUrl: "",
    embedType: "coming-soon",
    liveUrl: "",
    status: "coming-soon",
    subtitle:
      "A real-time conversational AI design platform. Ori asks one question at a time and builds your starter conversation architecture live. Powered by Claude API.",
    tags: [
      "CONVERSATIONAL-AI",
      "PRODUCT-DESIGN",
      "FULL-STACK",
      "CLAUDE-API",
    ],
    coverImage: "",
    projectDescription:
      "Arc is a conversational AI design platform. Ori, the onboarding agent, asks one question at a time, listens to your answers, and builds a personalized conversation architecture live in the right panel as you talk. Powered by Claude API in real time. Built on Next.js 15, Supabase session persistence, and a shareable URL for every completed session. The one-question-per-turn discipline is the entire design argument: this is what separates a conversation from a form with a chat wrapper.",
    problemStatement:
      "Enterprise onboarding fails when it hands new users a form. Arc is a conversational AI design platform powered by Ori, a real-time Claude-powered agent that learns what you are building and generates a starter conversation architecture tailored to your product. One question per turn. No forms. No scripts. Every path is different.",
    processAngle: "Coming soon.",
    cardSummary:
      "A real-time conversational AI design platform. Ori asks one question at a time and builds your starter conversation architecture live. Powered by Claude API.",
    stackHighlighted: ["Claude API", "Next.js 15", "Supabase"],
    stackStandard: ["TypeScript", "Tailwind v4", "Space Grotesk", "Vercel"],
    impactQuote:
      "Most portfolio onboarding agents demonstrate that you can wire a chat interface to an AI. Arc demonstrates that you understand conversational design as a discipline.",
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
      "Executives write earnings calls and regulatory filings to communicate selectively. The language is deliberate. Most readers lack tools to see what the language is signaling, not just what it says. FinanceLens was built to make that signal visible. Analysts and operators who read these documents carefully lose hours turning a read-through into something shareable without institutional tooling or a Bloomberg terminal. No accessible tool combines plain-language translation, language drift detection, confidence scoring, two-document comparison, and shareable presentation generation in one workflow for non-institutional users.",
    processSteps: [
      "The difference between FinanceLens and a document summarizer is translation versus intelligence: translation removes complexity; intelligence reveals what deliberately simple language is doing. Constraints included drift as a discrete quoted signal, confidence tied to evidence density in the excerpt (not stock recommendations), document-type-specific prompts for earnings calls, 10-Ks, and regulatory notices, shareable outputs, and persistent assistive-only guardrails.",
      "The original architecture specified the Canva Connect API for branded decks; Canva app review blocked programmatic access. The stack pivoted to an owned presentation layer: Claude-built 7-slide JSON, Unsplash with attribution or Pollinations fallback, pptxgenjs PPTX download, slide JSON in Supabase, and a branded full-screen viewer at /deck/[slug] with 30-day TTL — no third-party OAuth dependency for the core path.",
      "Shipped: single-document analyze with PDF text extraction, six output areas including source anchors and optional confidence, compare mode with sample pairs and shared layouts, briefing modal with PPTX and share links, /deck/[slug] scroll and presenter views, branded PDF export via pdf-lib, methodology page, and claudeJsonWithRetry with Zod validation across analyze, compare, and briefing routes. Next.js 16, React 19, TypeScript, Tailwind CSS v4, Vercel.",
    ],
    impactLine:
      "Structured financial intelligence — plain language, drift detection, source anchors, confidence rubric — across single-document analysis and two-document comparison, with branded PDF share, LLM-built briefing decks with Unsplash imagery, PPTX download, full-screen presenter view at a 30-day share URL (/deck/[slug]), and an explicit methodology and trust layer. Assistive only. Never financial advice.",
    processAngle:
      "Next.js 16, React 19, Claude (Haiku and Sonnet), Zod plus JSON retry, Supabase, pdf-lib, pptxgenjs, Unsplash and Pollinations. WSJ Editorial UI. Canva Connect planned after approval, not required for the core workflow.",
    cardSummary:
      "Earnings calls, 10-Ks, and regulatory filings → structured analysis, two-document compare, shareable PDF, and exportable slides — with explicit trust framing and a validated JSON pipeline from document to shareable artifact.",
    role: "Product design, prompt architecture, implementation",
    timeline: "2026",
    keyOutcome:
      "Structured financial intelligence with drift, anchors, and confidence rubric; compare mode; branded PDF; briefing decks, PPTX, and 30-day /deck URLs; methodology and trust layer. Assistive only. Not financial advice.",
    processStepsInteractive: [
      {
        number: "01",
        label: "Insight",
        phase: "STEP 01 — CORE INSIGHT",
        title: "Translation versus intelligence",
        body: "FinanceLens must tell you what language means and signals, not only what was said. Drift is a discrete signal with quoted phrases. Confidence reflects evidence density in the excerpt, not a stock recommendation. Document type steers the analysis logic. Outputs are shareable; guardrails frame everything as assistive analysis.",
      },
      {
        number: "02",
        label: "Constraints",
        phase: "STEP 02 — CONSTRAINT SET",
        title: "Product and compliance constraints",
        body: "Earnings calls, 10-Ks, and regulatory notices each get different prompt logic. The UI and methodology page explain confidence, image sourcing, sessionStorage scope, and the assistive-only disclaimer so the product never reads as a financial advisor.",
      },
      {
        number: "03",
        label: "Pivot",
        phase: "STEP 03 — PRESENTATION LAYER PIVOT",
        title: "Owned decks instead of Canva",
        body: "Canva Connect was blocked pending app review. The architecture owns the presentation layer: Claude JSON slide outlines, pptxgenjs blob downloads, Supabase persistence, and /deck/[slug] in the WSJ Editorial system. Canva remains roadmap as an additive path, not a dependency for the core workflow.",
      },
      {
        number: "04",
        label: "Delivery",
        phase: "STEP 04 — WHAT SHIPPED",
        title: "Shipped surfaces",
        body: "Analyze and compare with Zod-validated JSON and a repair retry path; PDF upload via pdf-parse; briefing flow with PPTX and clipboard share URLs; deck viewer with scroll and full-screen modes; branded PDF export; methodology and in-product trust hints; graceful degradation if Supabase insert fails.",
      },
    ],
    pivots: [
      {
        tag: "DESIGN",
        title: "Canva Connect blocked — own the presentation layer",
        body: "The original spec called for the Canva Connect API as the presentation output. During build, Canva's app review process blocked access pending approval — a real-world constraint with no timeline. Rather than stall the ship, the architecture was redesigned to own the presentation layer entirely: Claude JSON outlines, pptxgenjs for the file download, and a custom /deck/[slug] viewer built inside the app using the WSJ Editorial design system.",
        lesson:
          "The result removed a third-party OAuth dependency, gave full control over the branded output, and shipped faster. Canva API remains on the roadmap as an additive feature, not a requirement for the core workflow to function.",
      },
    ],
    shippedCards: [
      {
        title: "Single-document analysis",
        body: "Paste or PDF upload with text-layer extraction (scanned PDFs require paste). Document-type-specific prompts. Outputs: what they said, what it means, key numbers, language drift with hedge versus firm tags, flags, source anchors, optional confidence toggle. Haiku default on analyze; Sonnet for deeper work.",
      },
      {
        title: "Compare mode",
        body: "Two documents, one structured JSON response: period shift overview, new and dropped language, claim shifts, metrics narrative, dual confidence scores. Six built-in sample pairs. Share saves to Supabase with compare layout in DeckViewer. maxDuration 120s on the route.",
      },
      {
        title: "Briefing decks and PPTX",
        body: "Seven-slide JSON from Claude; Unsplash search with attribution or Pollinations fallback; modal preview; PPTX download via pptxgenjs after async image fetch; share copies /deck/[slug] to clipboard.",
      },
      {
        title: "Shareable deck viewer",
        body: "/deck/[slug] for analysis, briefing, or compare: 30-day TTL, scroll view and full-screen presenter mode, WSJ Editorial styling, expiry called out in the UI, branded error state for missing or expired slugs.",
      },
      {
        title: "PDF export and methodology",
        body: "Branded PDF via pdf-lib on Node with FinanceLens identity and disclaimers. Dedicated /methodology page plus on-page hints for confidence and evidence framing.",
      },
      {
        title: "Validation and deploy",
        body: "claudeJsonWithRetry with one repair turn on invalid JSON or failed Zod validation. Supabase financelens_sessions with RLS. Vercel deploy; extended maxDuration on analyze, compare, export, and parse routes as documented in the case study.",
      },
    ],
    stackHighlighted: [
      "Next.js 16",
      "Claude API",
      "Supabase",
      "Zod",
    ],
    stackStandard: [
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "pdf-lib",
      "pptxgenjs",
      "pdf-parse",
      "Vercel",
      "Unsplash",
      "Pollinations",
    ],
    impactQuote:
      "FinanceLens closes the loop from financial document to shareable artifact using Claude, Zod validation, pdf-lib, pptxgenjs, and Supabase-backed 30-day share URLs — not a thin summarizer, and every architectural decision in the case study matches what is actually wired in the repo.",
  },
  {
    featured: false,
    order: 3,
    slug: "clearchannel-vestara",
    title: "ClearChannel by Vestara",
    tagline: "Design the conversation. Across every channel.",
    subtitle:
      "ClearChannel demonstrates what it means to design a conversational AI system for all channels simultaneously rather than one at a time. Type or speak any investor utterance and watch Claude generate IVR script, Chatbot response, and Agent Assist content in real time, with a full NLU architecture breakdown per utterance. Three override protocols handle bereavement, fraud, and barge-in before any intent classification runs.",
    tags: ["CONVERSATION-DESIGN", "NLU-ARCHITECTURE", "ENTERPRISE-AI", "FINTECH"],
    embedType: "live",
    embedUrl: "https://clearchannel-vestara.vercel.app/",
    liveUrl: "https://clearchannel-vestara.vercel.app/",
    status: "live",
    coverImage: "/images/clearchannel-landing.png",
    projectDescription:
      "ClearChannel demonstrates what it means to design a conversational AI system for all channels simultaneously rather than one at a time. Type or speak any investor utterance and watch Claude generate IVR script, Chatbot response, and Agent Assist content in real time, with a full NLU architecture breakdown per utterance. Three override protocols handle bereavement, fraud, and barge-in before any intent classification runs.",
    problemStatement:
      "Most conversational AI design optimizes for one channel. Enterprise contact centers run three simultaneously. A customer who calls about a deceased spouse is also potentially in the chatbot, and a live agent may be watching the same interaction. The design consequences of routing decisions are invisible across channels unless you can see all three fire at once. ClearChannel makes that visible, interactive, and auditable.",
    processSteps: [
      "The three hard override rules are the most important product decisions in this build. Bereavement, fraud, and barge-in fire before intent classification — because in enterprise financial services, getting those wrong is not a UX failure, it is an institutional trust failure. The bereavement protocol opens with acknowledgment and an 800ms pause before any transactional language, which mirrors the same principle used in clinical communication: acknowledgment before action, always.",
      "Channel responses are generated simultaneously: IVR script, Chatbot response, and Agent Assist content in a single API call so practitioners see all three within seconds of submitting an utterance. That makes design tradeoffs visible that are typically invisible — for example, a containment decision that looks reasonable in the chatbot panel may produce an agent assist script that contradicts it.",
      "Confidence is surfaced prominently in the intent bar and NLU architecture section, with intent-specific thresholds so bereavement, fraud, and barge-in can trigger on weaker signal when the protocol requires it. Agent Assist uses verbatim-ready spoken scripts plus policy references, not only abstract recommendations.",
      "The streaming architecture was chosen because perceived latency matters more than actual latency in a design tool. Claude streams via Server-Sent Events; the client uses a brace-depth JSON section extractor so each completed section (IVR, chatbot, agent_assist, NLU) hydrates its panel as it arrives — under about two seconds for the first panel versus six to eight seconds for a blocking response.",
    ],
    impactLine:
      "ClearChannel makes that visible, interactive, and auditable: one utterance, three simultaneous channel outputs, emotional override protocols, and streaming NLU you can watch populate in real time.",
    processAngle:
      "Designed for enterprise conversational governance: emotional overrides, simultaneous channel outputs, confidence legibility, and verbatim-ready agent assist.",
    cardSummary:
      "Enterprise NLU routing simulator. One utterance drives three simultaneous channel outputs — IVR, Chatbot, Agent Assist — with full intent taxonomy, confidence scoring, sentiment detection, and three emotional override protocols.",
    role: "Product & Conversation UX",
    timeline: "2025",
    keyOutcome:
      "Live multi-channel NLU simulator: 18 intents, simultaneous IVR/Chatbot/Agent Assist, three emotional overrides, streaming SSE with progressive panel hydration, sentiment-driven UI, and voice input/output (Whisper, TTS, Realtime).",
    stats: [
      {
        number: "81%",
        label:
          "had abandoned at least one call to a business in the past year because they reached an IVR",
        source: "Vonage (2019). IVR Customer Experience Survey. Opinion Matters. n=4,019 adults, UK and US.",
      },
      {
        number: "51%",
        label:
          "reported having stopped using a business entirely as a direct result of a frustrating IVR interaction",
        source: "Vonage (2019). IVR Customer Experience Survey. Opinion Matters. n=4,019 adults, UK and US.",
      },
      {
        number: "14%",
        label:
          "higher productivity on average for agents with access to a generative AI assistant (issues resolved per hour)",
        source: "Li, Brynjolfsson & Raymond (2023). Generative AI at Work. NBER Working Paper 31161. 5,179 agents.",
      },
      {
        number: "25%",
        label:
          "decline in requests to speak to a manager (customer sentiment)",
        source: "Li, Brynjolfsson & Raymond (2023). Generative AI at Work. NBER Working Paper 31161.",
      },
    ],
    processStepsInteractive: [
      {
        number: "01",
        label: "Overrides",
        phase: "STEP 01 — EMOTIONAL OVERRIDE PROTOCOLS",
        title: "Bereavement, fraud, and barge-in before intent",
        body: "The three hard override rules fire before standard intent classification. Getting them wrong is an institutional trust failure, not a UX nit. The bereavement protocol opens with acknowledgment and an 800ms pause before transactional language — acknowledgment before action, the same principle as strong clinical communication.",
      },
      {
        number: "02",
        label: "Channels",
        phase: "STEP 02 — SIMULTANEOUS MULTI-CHANNEL OUTPUT",
        title: "IVR, Chatbot, and Agent Assist together",
        body: "One utterance produces IVR script, Chatbot response, and Agent Assist content in one call so you can see cross-channel consequences immediately — including when a containment choice in one channel clashes with the script another channel needs.",
      },
      {
        number: "03",
        label: "Legibility",
        phase: "STEP 03 — CONFIDENCE AND AGENT-READY COPY",
        title: "Confidence you can read; scripts you can say",
        body: "Confidence scores surface in the intent bar and NLU card with differentiated thresholds for high-stakes intents. Agent Assist delivers verbatim-ready spoken English plus policy references so agents are not left to improvise under pressure.",
      },
      {
        number: "04",
        label: "Streaming",
        phase: "STEP 04 — STREAMING ARCHITECTURE",
        title: "Perceived latency under ~2 seconds for the first panel",
        body: "Streaming via Claude Server-Sent Events and a brace-depth JSON section extractor fires setResult as each section completes, so panels hydrate progressively instead of waiting six to eight seconds on a blocking JSON blob.",
      },
    ],
    shippedCards: [
      {
        title: "Live simulator scope",
        body: "Live demo at clearchannel-vestara.vercel.app with no login or setup. 18 intent categories with confidence scoring and sentiment detection. Three simultaneous channel outputs per utterance: IVR, Chatbot, and Agent Assist. NLU architecture card per utterance: intent taxonomy, entity schema, training phrases, confidence thresholds.",
      },
      {
        title: "Emotional override protocols",
        body: "Three hard rules before intent classification: bereavement detection, fraud detection, and barge-in detection — each wired to the routing and copy patterns described in the case study.",
      },
      {
        title: "Sentiment-driven UI",
        body: "Five sentiment states (neutral, concerned, urgent, distressed, confused) each trigger a full UI theme shift via CSS custom properties so tenor is visible before an operator reads the scripts.",
      },
      {
        title: "Streaming NLU pipeline",
        body: "Analyze route streams Claude via Server-Sent Events with a brace-depth section extractor for progressive panel hydration and sub–two-second perceived time to first panel.",
      },
      {
        title: "Voice input and audio",
        body: "Voice input via OpenAI Whisper; IVR spoken response via OpenAI TTS-1 (alloy) as streaming audio through a Blob URL for mobile compatibility. OpenAI Realtime API for bidirectional voice with a Vestara AI persona.",
      },
      {
        title: "Samples and design system",
        body: "11 curated sample utterances spanning standard and edge-case emotional scenarios. Vestara Institutional design system applied consistently across surfaces.",
      },
    ],
    stackHighlighted: [
      "Claude API",
      "Next.js 16",
      "OpenAI (Whisper, TTS, Realtime)",
      "Tailwind CSS v4",
    ],
    stackStandard: ["TypeScript", "Vercel", "Server-Sent Events"],
    impactQuote:
      "ClearChannel demonstrates multi-channel conversational AI system design: simultaneous NLU routing across IVR, Chatbot, and Agent Assist with emotional override protocols, streaming architecture, sentiment-driven UI state, and voice input/output — built as a live, portable portfolio artifact with no login barrier.",
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
