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
      "HealthLiteracy AI was built on a simple premise: if a patient cannot understand their discharge instructions, the care plan never starts.",
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
      "FinanceLens turns earnings calls, 10-K filings, and regulatory notices into structured intelligence (not a summary): six analytical sections including plain-language translation, interpretation with hedging surfaced, key numbers, language drift with hedge versus firm tags and quoted phrases, items worth a closer look, and source anchors. Claude Sonnet 4 throughout analyze, compare, and briefing. Zod-validated JSON with one structured repair turn. Compare two documents for delta analysis (accordion UI: highest-signal sections open first). Branded PDF (pdf-lib), PPTX (pptxgenjs), and 30-day share URLs at /deck/[slug] via Supabase. Assistive analysis only, not financial advice.",
    tags: ["FINTECH", "AI-PRODUCT", "FULL-STACK", "DOCUMENT-INTELLIGENCE"],
    embedType: "live",
    embedUrl: "https://financelens-ai.vercel.app",
    liveUrl: "https://financelens-ai.vercel.app",
    status: "live",
    coverImage: "/images/financelens-ai-landing.png",
    projectDescription:
      "FinanceLens AI translates financial documents into structured intelligence. Six distinct analytical sections with source anchors when present, language drift detection, and a toggleable 0-to-100 confidence rubric on evidence density (not a stock recommendation). Compare mode uses a diff-aware prompt and accordion layout so claim shifts and new language open first. Share output as branded PDF, seven-slide PPTX from a Claude JSON outline, or a 30-day URL at the in-app deck viewer. WSJ Editorial light design system (Fraunces, Georgia, IBM Plex Mono).",
    problemStatement:
      "Financial documents are written for lawyers and analysts. They are among the most consequential documents a company publishes, yet nearly inaccessible without a trained framework. Summarization removes complexity; it does not show what the language signals, what changed quarter to quarter, or where management hedged versus committed. FinanceLens is built on the thesis that structured intelligence is a different product than summarization.",
    processSteps: [
      "The product thesis: summarization is a solved problem in the market; intelligence is not. Every output section has a distinct analytical purpose wired into the Claude system prompt as typed JSON, not headers bolted onto a free-form summary. Source anchors are a trust architecture decision: claims tie to passages when the model supplies them. Document type (earnings call, 10-K, regulatory notice) steers different analytical framing.",
      "Architecture: claude-sonnet-4-20250514 for translate, verify, compare, and briefing. No Haiku routing. claudeJsonWithRetry provides one repair turn if JSON is invalid or fails Zod schema validation before an error state surfaces. Compare mode is a separate diff-aware prompt, not two single-document runs pasted together.",
      "Pivot stack: Canva Connect was the original presentation output; app review blocked API access with no timeline. Hannah owned the layer: Claude deck outline, pptxgenjs PPTX, pdf-lib branded PDF, custom /deck/[slug] viewer with HTTP 404 for unknown slugs and 410 for expired shares (middleware plus branded HTML). Secondary pivots: Sharp-based optimize-assets script for hero and OG images; portfolio attribution (PortfolioSiteCredit) and metadataBase; Supabase-backed 30-day share rows with graceful degradation if insert fails; compare results rebuilt as accordions with summary lines in collapsed headers.",
      "Shipped: /analyze and /results with PDF text-layer upload; /compare with six sample pairs and maxDuration 120s; briefing modal; Unsplash plus Pollinations image pipeline; /methodology; .fl-* CSS-heavy UI on a Tailwind v4 base; iframe embed headers for hannahkraulikpagade.com.",
    ],
    impactLine:
      "Structured financial intelligence with six sections, drift and anchors, Sonnet-only pipeline, Zod plus repair, compare accordions, owned presentation layer, 30-day deck URLs, and explicit methodology. Assistive only. Not financial advice.",
    processAngle:
      "Next.js 16, React 19, Claude Sonnet 4, Zod, claudeJsonWithRetry, Supabase financelens_sessions, pdf-lib, pptxgenjs, Unsplash, Pollinations, Tailwind CSS v4, Vercel. Canva Connect remains roadmap as additive output.",
    cardSummary:
      "Earnings calls, 10-Ks, and regulatory filings into six structured sections; two-document compare with accordion deltas; branded PDF, PPTX, and 30-day /deck/[slug] viewer; methodology and validated JSON pipeline.",
    role: "Product design, prompt architecture, implementation",
    timeline: "2026",
    keyOutcome:
      "Structured financial document intelligence with six-section output, compare mode, Zod plus repair, branded PDF and PPTX, Supabase 30-day share URLs, methodology page, and WSJ Editorial presentation layer without Canva dependency.",
    proofPoint: {
      label: "The proof point",
      body: 'The shift from "we will deliver" to "we believe we are well positioned to deliver" is not a stylistic choice. It is information. Management language in earnings calls and filings is deliberate: hedges and passive constructions signal risk and earn persistence research has tied to readability and complexity for decades.',
      verdict:
        "Translation is the minimum. Intelligence is the product: what it signals, where language drifted, what changed from last quarter, and what deserves a closer look.",
    },
    stats: [
      {
        number: "6",
        label:
          "structured analysis sections per document (distinct analytical purposes, not one summary)",
        source: "FinanceLens product spec",
      },
      {
        number: "2",
        label:
          "document compare mode with diff-aware prompt and accordion delta layout",
        source: "Shipped Q1 2026",
      },
      {
        number: "5",
        label:
          "documented pivot decisions from Canva block through share URLs and compare UX",
        source: "Case study Section 3",
      },
      {
        number: "30",
        label: "day TTL on Supabase-backed share links with expiry in the deck viewer",
        source: "financelens_sessions",
      },
    ],
    processStepsInteractive: [
      {
        number: "01",
        label: "Thesis",
        phase: "STEP 01 — PRODUCT THESIS",
        title: "Translation versus intelligence",
        body: "The brief was explicit: FinanceLens is not a summarizer. Six structured sections in sequence, each a different kind of analytical work. Source anchors make analysis verifiable. Confidence is a rubric on evidence density in the excerpt, not a recommendation. WSJ Editorial light signals editorial analysis, not consumer fintech chrome.",
      },
      {
        number: "02",
        label: "Contract",
        phase: "STEP 02 — OUTPUT CONTRACT",
        title: "Six sections and Zod validation",
        body: "Shipped labels: What they said, What it actually means, Key numbers, Language drift, Worth a closer look, Source anchors. Every response passes Zod; one structured repair turn runs before the user sees failure. Compare uses its own diff-aware contract with claim shift objects and default-open sections for highest signal.",
      },
      {
        number: "03",
        label: "Compare",
        phase: "STEP 03 — COMPARE MODE",
        title: "Delta in the accordion",
        body: "The most revealing read is period-over-period. Compare loads two transcripts and surfaces deltas: new language, dropped language, claim shifts with direction, metrics narrative. Accordion layout: claim shifts and new language expanded by default; other sections show summary line and item count when collapsed. 44px touch targets, CSS max-height transitions, no external accordion library.",
      },
      {
        number: "04",
        label: "Pivots",
        phase: "STEP 04 — WHAT CHANGED AND WHY",
        title: "From Canva to owned artifacts",
        body: "Canva API blocked: owned PPTX, PDF, and /deck viewer. Hero assets: Sharp pipeline for webp, og-image, icons. Attribution and metadata as shipping criteria. Share URLs as first-class persistence. Compare UX tuned for scanability before depth.",
      },
    ],
    pivots: [
      {
        tag: "DESIGN",
        title: "Canva Connect blocked — own the presentation layer",
        body: "Original spec relied on Canva Connect for shareable decks. Review blocked programmatic access with no timeline. Redesign: Claude 7-slide JSON, pptxgenjs download, pdf-lib branded PDF, custom deck viewer at 30-day Supabase URLs. Removed OAuth dependency and shipped faster than waiting on approval.",
        lesson:
          "A third-party dependency on a feature not yet approved is schedule risk. Owning the layer eliminates it and produced a stronger portfolio artifact than an embed would have.",
      },
      {
        tag: "DESIGN",
        title: "Hero assets to production media pipeline",
        body: "Multi-megabyte PNG and SVG exports from design tools hurt LCP and git history. scripts/optimize-assets.mjs uses Sharp for hero.webp, og-image.jpg, and rasterized icons with Windows same-file edge cases handled in the script.",
        lesson:
          "Media is a build artifact with defined outputs, not whatever the design tool exported last.",
      },
      {
        tag: "PRODUCT",
        title: "Metadata and portfolio attribution as shipping criteria",
        body: "metadataBase from NEXT_PUBLIC_SITE_URL with Vercel fallbacks, OG and Twitter images wired to optimized assets, PortfolioSiteCredit on landing, shell, deck viewer, and PDF footer — consistent thread to hannahkraulikpagade.com.",
        lesson:
          "Shipping is how the product looks when linked on LinkedIn and how ownership reads next to AI output.",
      },
      {
        tag: "TECHNICAL",
        title: "Share URLs as first-class persistence",
        body: "sessionStorage dies with the tab. On successful analyze, compare, and briefing flows, rows go to financelens_sessions with nanoid slug and expires_at. 410 branded state when expired; core downloads still work if Supabase insert fails.",
        lesson:
          "Traded account complexity for time-boxed link-based sharing; the artifact is the unit of share.",
      },
      {
        tag: "DESIGN",
        title: "Compare accordion for scannable deltas",
        body: "Stacked always-visible deltas forced long scrolls before knowing what mattered. Converted to accordion: default-open on highest-signal sections, summary plus counts in headers when collapsed.",
        lesson:
          "Information reveal order is a product decision.",
      },
    ],
    shippedCards: [
      {
        title: "Single-document analysis",
        body: "Paste or PDF upload (text layer via pdf-parse; scanned PDFs need paste). Six sections: What they said, What it actually means, Key numbers, Language drift, Worth a closer look, Source anchors. Toggleable confidence. Claude Sonnet 4 only.",
      },
      {
        title: "Compare mode",
        body: "Two documents, diff-aware JSON: overview, new and dropped language, claim shifts, metrics, dual confidence. Six sample pairs. Accordion UI. Share to /deck/[slug]. maxDuration 120s.",
      },
      {
        title: "Briefing decks and PPTX",
        body: "Claude 7-slide outline; Unsplash with attribution and download ping or Pollinations fallback; modal preview; async image fetch then pptxgenjs blob; share copies URL to clipboard.",
      },
      {
        title: "Deck viewer and expiry",
        body: "/deck/[slug]: scroll and full-screen presenter modes, WSJ Editorial styling, expiry in header, branded 404/410 for missing or expired slugs.",
      },
      {
        title: "PDF and methodology",
        body: "Branded pdf-lib export on Node. /methodology explains AI use, confidence, images, validation, sessionStorage scope, assistive-only scope.",
      },
      {
        title: "Validation and infrastructure",
        body: "claudeJsonWithRetry across analyze, compare, briefing. Supabase RLS. Vercel with extended maxDuration on heavy routes. Optional Unsplash key; graceful share degradation.",
      },
    ],
    stackHighlighted: [
      "Claude API (Sonnet 4, Zod six-section contract)",
      "pptxgenjs",
      "pdf-lib",
      "Supabase (30-day shares)",
    ],
    stackStandard: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Zod",
      "pdf-parse",
      "Vercel",
      "Unsplash",
      "Pollinations",
    ],
    whatThisDemonstrates: [
      {
        title: "Structured AI output with Zod and repair",
        tag: "TECHNICAL",
        body: "Typed JSON contracts across analyze, compare, and briefing with one repair turn before failure. Source anchors and drift are first-class schema concerns.",
      },
      {
        title: "Summarization versus intelligence as product positioning",
        tag: "PRODUCT",
        body: "Every section answers a different analytical question. The product hypothesis is explicit in the case study and in the shipped labels.",
      },
      {
        title: "Five pivots with constraint, decision, and outcome",
        tag: "PRODUCT",
        body: "Canva, media pipeline, attribution, share persistence, compare accordion — each documented as a real tradeoff, not retroactive polish.",
      },
      {
        title: "Compare UX as information architecture",
        tag: "DESIGN",
        body: "Default-open sections carry the most delta signal; collapsed headers stay scannable. 44px targets, no dependency accordion.",
      },
      {
        title: "Owned presentation layer",
        tag: "TECHNICAL",
        body: "No third-party OAuth required to close analyze-to-shareable-artifact loop. Custom viewer matches brand.",
      },
      {
        title: "Media and metadata discipline",
        tag: "TECHNICAL",
        body: "Sharp pipeline for production images; OG and icons wired; build hygiene as feature work.",
      },
      {
        title: "Financial domain fluency",
        tag: "PRODUCT",
        body: "Earnings calls, 10-K structure, investor language drift, and assistive-only guardrails reflected in prompts and methodology.",
      },
      {
        title: "End-to-end shareable artifact",
        tag: "FULL-STACK",
        body: "From paste to PDF, PPTX, and time-boxed public URLs with correct HTTP semantics for missing versus expired resources.",
      },
    ],
    honestSummary: {
      technical: {
        label: "For engineers",
        body: "Sonnet 4 end-to-end; supportingEvidence optional in Zod so anchors are prompt-pushed but not always hard-fail. No streaming on analyze yet. No rate limiting or structured observability before a traffic or monetization push. Compare and analyze are architecturally different prompts.",
      },
      product: {
        label: "For product",
        body: "Honest gaps in the case study: scanned PDF OCR not shipped; Canva remains roadmap; confidence is a useful rubric, not calibrated across models. Strength is the owned loop from document to shareable deck without waiting on a vendor gate.",
      },
      design: {
        label: "For design",
        body: "Fraunces on landing, Georgia in app surfaces, IBM Plex Mono for data. PPTX body uses Calibri as Office-safe default; brand color on chrome. Deck scroll versus full-screen serves read versus present modes.",
      },
    },
    impactQuote:
      "The intelligence is in the delta. What changed from last quarter. Where management stopped committing and started hedging. What was disclosed in a footnote for the first time. FinanceLens surfaces the signal that the document format hides.",
  },
  {
    featured: false,
    order: 3,
    slug: "clearchannel-vestara",
    title: "ClearChannel by Vestara",
    tagline: "Design the conversation. Across every channel.",
    subtitle:
      "Conversational design lab for Vestara, a fictional enterprise financial firm: one investor utterance in, simultaneous IVR, Chatbot, and Agent Assist out, streamed over SSE with progressive panel fill. claude-sonnet-4-6, structured JSON contract. Three critical overrides before general intent classification: bereavement, fraud, barge-in. Market anxiety and panic-selling route through MARKET_ANXIETY intent plus behavioral coaching and concerned sentiment. Five-way sentiment theming: data-sentiment on the root drives a full CSS token cascade (distressed purple, urgent red, concerned amber, confused blue, neutral teal). Eleven sample utterances; OpenAI Realtime Live Call as primary empty-state CTA alongside samples; MediaRecorder plus Whisper /api/transcribe; IVR audio via TTS to Blob URL and HTMLAudioElement for iOS Safari. Static /design-artifact documents the NLU architecture. Portfolio artifact only; no named real bank; generic financial-services knowledge in the prompt.",
    tags: [
      "CONVERSATION-DESIGN",
      "NLU-ARCHITECTURE",
      "ENTERPRISE-FINTECH",
      "PORTFOLIO-ARTIFACT",
    ],
    embedType: "live",
    embedUrl: "https://clearchannel-vestara.vercel.app/",
    liveUrl: "https://clearchannel-vestara.vercel.app/",
    status: "live",
    coverImage: "/images/clearchannel-landing.png",
    projectDescription:
      "ClearChannel is a conversational design lab. A user types or speaks an investor utterance; the tool generates simultaneous IVR, Chatbot, and Agent Assist outputs plus a full NLU architecture card, streamed via SSE so parallel structure is visible as it arrives. A semantic sentiment system shifts the entire interface across five emotional states. OpenAI Realtime powers a persistent Live Call mode promoted on the empty state. A static /design-artifact page documents intents, overrides, entities, routing matrix, and sentiment map from lib/designArtifactData.ts.",
    problemStatement:
      "Enterprise conversational AI is never one channel. IVR, chatbot, and agent assist run at once with shared customers and compliance needs but different output constraints. Most designers optimize one channel. ClearChannel shows all three from the same utterance so cross-channel tradeoffs and failures (for example bereavement routed like a balance inquiry) are visible and auditable.",
    processSteps: [
      "Constraint set: one utterance, three channel outputs simultaneously; lab opens empty with two paths (sample utterances or Live Call); sentiment is architectural (data-sentiment retints every major surface, not a badge); confidence score plus threshold bar signals NLU-system literacy.",
      "Claude API (claude-sonnet-4-6) streams one structured JSON response over SSE; client brace-depth extraction hydrates IVR, Chatbot, Agent Assist, and NLU as sections complete. System prompt uses generic enterprise financial knowledge only; no named external firm.",
      "Voice: MediaRecorder to /api/transcribe (Whisper) for accuracy over Web Speech API; IVR playback via /api/speak (OpenAI TTS), fetch to Blob URL, HTMLAudioElement.play() for reliable iOS Safari tap-to-play. OpenAI Realtime for Live Call: /api/realtime-session token, RealtimeSession WebSocket lifecycle.",
      "Layout: IVR ~44% width as primary audible channel; Chatbot and Agent Assist stacked on the right; NLU collapsible below. Mobile: hamburger drawer, vertical stack, horizontal NLU scroll with fade, 100dvh, 44px targets. Welcome flow scroll-safe on small screens.",
    ],
    impactLine:
      "One utterance, three simultaneous channel outputs, SSE-visible parallelism, five sentiment themes on the full UI, three pre-classification overrides plus market-anxiety coaching, Whisper and Realtime voice paths, and /design-artifact as a second deliverable.",
    processAngle:
      "Next.js 16, React 19, TypeScript, Tailwind CSS, Claude (claude-sonnet-4-6) with SSE, OpenAI Whisper, TTS, Realtime, Vercel. IBM Plex Sans and IBM Plex Mono. Honest gaps: no production NLU engine integration; no user-facing JSON parse error state yet.",
    cardSummary:
      "Type or speak an utterance; watch IVR, Chatbot, and Agent Assist stream in parallel, NLU card fill, and the whole app retint to sentiment. Live Call on the hero. Eleven edge-case samples. /design-artifact for full NLU documentation.",
    role: "Conversation design, NLU architecture, product design, full-stack build",
    timeline: "March 2026",
    keyOutcome:
      "Live lab: simultaneous multi-channel output, 18 intents, SSE progressive fill, five sentiment CSS themes, three overrides before classification, Whisper and Realtime voice, empty state plus welcome flow, mobile drawer layout, /design-artifact static docs.",
    proofPoint: {
      label: "The proof point",
      body: "When someone calls to say their spouse just died, the system must not open by asking for an account number. On the bereavement sample, ClearChannel classifies distressed sentiment, fires the bereavement override, suppresses verification, routes to a senior specialist, and shifts the entire application to distressed purple. The UI does not just label sentiment. It inhabits it.",
      verdict:
        "That is not decoration. That is the proof that emotional state handling was designed in, not added on.",
    },
    stats: [
      {
        number: "11",
        label:
          "curated sample utterances from balance inquiry through bereavement, fraud, and barge-in",
        source: "ClearChannel product scope",
      },
      {
        number: "3",
        label:
          "channel outputs rendered in parallel per utterance (IVR, Chatbot, Agent Assist)",
        source: "Shipped architecture",
      },
      {
        number: "5",
        label:
          "sentiment states driving full-environment CSS tokens via data-sentiment",
        source: "Design system",
      },
      {
        number: "18",
        label:
          "classified intents in NLU card with override priority rules in prompt",
        source: "NLU architecture",
      },
    ],
    processStepsInteractive: [
      {
        number: "01",
        label: "Brief",
        phase: "STEP 01 — THE BRIEF",
        title: "The brief and constraint set",
        body: "Read the enterprise conversational-channels brief as a product spec: prove IVR, chatbot, and agent assist as one system. Eleven utterances chosen for edge cases that define architecture quality, not median balance inquiries.",
      },
      {
        number: "02",
        label: "SSE",
        phase: "STEP 02 — STREAMING",
        title: "SSE streaming architecture",
        body: "One Claude call streams JSON over SSE; brace-depth extraction fills intent bar and panels as sections complete. Thesis is simultaneous channels; blocking JSON would hide that structure.",
      },
      {
        number: "03",
        label: "Sentiment",
        phase: "STEP 03 — THEMING",
        title: "Sentiment theming system",
        body: "data-sentiment on the root cascades tokens through topbar, background, accents, borders, pills. Override logic in the prompt and CSS change together. Distressed, urgent, concerned, confused, neutral each have defined palette roles.",
      },
      {
        number: "04",
        label: "Voice",
        phase: "STEP 04 — VOICE",
        title: "Voice input and OpenAI Realtime",
        body: "Whisper server-side for transcripts; Blob URL plus HTMLAudioElement for IVR playback on iOS. Realtime WebSocket session for Live Call, surfaced as primary CTA next to samples.",
      },
      {
        number: "05",
        label: "Pivots",
        phase: "STEP 05 — PIVOTS",
        title: "Pivot stories",
        body: "Empty state over pre-seed; SSE over blocking JSON; IVR audio path for Safari; sentiment as full environment; welcome and 44px mobile craft; Live Call promoted to hero.",
      },
      {
        number: "06",
        label: "Shipped",
        phase: "STEP 06 — WHAT SHIPPED",
        title: "What shipped",
        body: "Samples, channels, NLU grid, overrides, voice stack, streaming, design artifact page, mobile layout, custom utterance input. Known gap: no user-facing error when JSON parse fails.",
      },
    ],
    pivots: [
      {
        tag: "DESIGN",
        title: "Empty state instead of pre-seeded dashboard",
        body: "The lab originally opened with a pre-loaded analysis to look live on first paint. Review showed a busy data dump that skipped the story, especially on mobile. Rebuilt to start empty: samples or Live Call as the two paths.",
        lesson: "Clarity over looking live on load. The first screen is the brief.",
      },
      {
        tag: "TECHNICAL",
        title: "SSE streaming for progressive panel fill",
        body: "Blocking JSON waited for the full response before any panel rendered, hiding the one-utterance-many-channels thesis. SSE with section extraction makes parallel outputs visible as they arrive.",
        lesson: "Implementation should match the product argument.",
      },
      {
        tag: "TECHNICAL",
        title: "IVR audio and iOS Safari",
        body: "AudioContext and decoded buffers broke user-gesture chains across await on iOS, causing silent tap-to-play failures. Switched to fetch, Blob URL, HTMLAudioElement with cleanup.",
        lesson: "Reliable phone playback is core to the IVR story, not an edge case.",
      },
      {
        tag: "DESIGN",
        title: "Sentiment as full-environment signal",
        body: "A badge-only sentiment label let reviewers miss that emotion changes routing and copy. data-sentiment now retints the full chrome and panels with transitions.",
        lesson: "The environment should echo bereavement, urgency, and confusion at a glance.",
      },
      {
        tag: "DESIGN",
        title: "Welcome flow and mobile craft",
        body: "Welcome could not scroll to completion on small screens; several controls missed 44px targets. Rebuilt with backdrop scrolling, 100dvh, readable labels, tighter Realtime header on narrow widths.",
        lesson: "Portfolio demos are shipped software; onboarding is part of the proof.",
      },
      {
        tag: "PRODUCT",
        title: "Live Call as first-class story",
        body: "Realtime lived in an easy-to-miss slot. Typed samples show NLU; live voice shows contact-center reality. Promoted Live Call to the empty-state hero beside samples with stronger topbar entry.",
        lesson: "Do not bury a differentiator that proves a second input mode.",
      },
    ],
    shippedCards: [
      {
        title: "Sample coverage",
        body: "Eleven utterances: transfers, fraud, balance, retirement, bereavement, panic-selling, repeat caller, barge-in, vague distress, cognitive accessibility, time pressure.",
      },
      {
        title: "Channel outputs",
        body: "IVR with prosody and routing. Chatbot with quick replies and handoff context. Agent Assist with suggested script, policy references, compliance flags, escalation path.",
      },
      {
        title: "NLU architecture",
        body: "Primary intent, confidence and threshold visualization, entity schema, training phrase suggestions, 18 intents, collapsible four-column grid below channels.",
      },
      {
        title: "Sentiment and overrides",
        body: "Five sentiment themes on the full UI. Overrides before classification: bereavement, fraud escalation, market-anxiety coaching (concerned), barge-in simplified re-prompt.",
      },
      {
        title: "Voice, audio, Realtime",
        body: "MediaRecorder plus Whisper /api/transcribe through the same pipeline as type. TTS to Blob URL for IVR. Pulse on play. OpenAI Realtime Live Call with token route and WebSocket component.",
      },
      {
        title: "SSE and empty state",
        body: "Progressive fill from streamed JSON. Empty hero with samples plus Live Call CTAs; welcome modal for recruiter context.",
      },
      {
        title: "Design artifact and mobile",
        body: "/design-artifact static docs from designArtifactData.ts. Mobile drawer, stacked panels, NLU horizontal scroll with fade, 44px targets.",
      },
      {
        title: "Infrastructure",
        body: "Next.js 16, React 19, claude-sonnet-4-6, OpenAI APIs, Vercel. No login. Generic prompt knowledge only.",
      },
    ],
    stackHighlighted: [
      "Claude API (claude-sonnet-4-6, SSE)",
      "OpenAI (Whisper, TTS, Realtime)",
      "data-sentiment CSS token system",
    ],
    stackStandard: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
      "Server-Sent Events",
    ],
    whatThisDemonstrates: [
      {
        title: "Multi-channel conversational system design",
        tag: "PRODUCT",
        body: "IVR, Chatbot, and Agent Assist as one architecture from one utterance, not three separate demos.",
      },
      {
        title: "Semantic CSS for emotional state",
        tag: "DESIGN",
        body: "Five states retint the whole app from a single root attribute, aligned with prompt overrides.",
      },
      {
        title: "NLU architecture storytelling",
        tag: "TECHNICAL",
        body: "18 intents, entities, thresholds, and training phrases surfaced as practitioner-readable evidence.",
      },
      {
        title: "Full voice pipeline",
        tag: "TECHNICAL",
        body: "Whisper transcription, TTS IVR with mobile-safe playback, Realtime for live conversation.",
      },
      {
        title: "SSE aligned to product thesis",
        tag: "TECHNICAL",
        body: "Parallel outputs visible as they stream instead of one blocking blob.",
      },
      {
        title: "Requirement-to-build literacy",
        tag: "PRODUCT",
        body: "Enterprise channels brief treated as a ship spec, not a slide.",
      },
      {
        title: "Visual NLU documentation",
        tag: "DESIGN",
        body: "/design-artifact as a second deliverable most portfolios skip.",
      },
      {
        title: "Honest status matrix",
        tag: "PRODUCT",
        body: "Acknowledges simulated NLU via Claude, parse failure UX gap, and no Dialogflow or LUIS integration.",
      },
    ],
    honestSummary: {
      technical: {
        label: "For engineers",
        body: "SSE plus client-side progressive parse; final JSON.parse with no server repair pass and no user-facing error on partial failure yet. NLU output is Claude-generated, not wired to a production NLU engine. Whisper and Blob URL IVR paths chosen for accuracy and iOS reliability.",
      },
      product: {
        label: "For product",
        body: "Built to make a hiring team see system-level conversational design: overrides, cross-channel tension, sentiment as policy, and Live Call as second proof mode. Six pivots in the long-form case study are each a real tradeoff.",
      },
      design: {
        label: "For design",
        body: "IBM Plex Sans for UI, IBM Plex Mono for classification output. Panel hierarchy matches practitioner reading order. Mobile is a drawer and stack, not a squashed desktop.",
      },
    },
    impactQuote:
      "The bereavement utterance is the one that matters. The system suppresses the account verification prompt, routes to a senior specialist, and the entire application turns purple. That is not decoration. That is the proof that emotional state handling was designed in, not added on.",
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
