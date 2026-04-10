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
      "Free patient document translation in twelve languages and three reading levels (Simple, Clear, Complete). Urgent items surface first. User-initiated verification pass compares translation to the original and returns issue cards with THOROUGH CHECK, PARTIAL CHECK, and QUICK CHECK badges. No auto re-render: the patient decides next steps. Voice via Web Speech API (Chrome and Edge best). Paste, type, upload (.txt or PDF text-layer), or speak. No login. 90-day shareable sessions. claude-sonnet-4-20250514 for translate and verify only.",
    tags: ["HEALTH-EQUITY", "PATIENT-FACING", "FULL-STACK", "MULTILINGUAL"],
    embedType: "live",
    embedUrl: "https://literacy.rohimaya.ai",
    liveUrl: "https://literacy.rohimaya.ai",
    status: "live",
    coverImage: "/images/healthliteracy-ai-landing.png",
    projectDescription:
      "HealthLiteracy AI translates clinical documents into plain language. Any of twelve supported languages. Reading levels Simple, Clear, or Complete. Urgent items render as cards above the translation. Medical terms explained in the same sentence. Attribution language prevents the output from being read as a diagnosis. User-initiated second Claude pass (Check for Missing Info) returns issue cards and THOROUGH CHECK / PARTIAL CHECK / QUICK CHECK badges. Side-by-side original and translation. Copy, share, PDF export with disclaimer. Supabase sessions with 90-day expiry and 410 on expired links. literacy.rohimaya.ai.",
    problemStatement:
      "Clinical documentation is written for providers. Patients receive the same documents at discharge, often scared, sometimes in pain, frequently in a language they do not read fluently, and are expected to manage their own care from them. 88% of American adults have less-than-proficient health literacy. Patients who understand their discharge instructions are 30% less likely to be readmitted. That gap is not inevitable. It is addressable with a well-designed AI tool.",
    processSteps: [
      "The constraint set — No login. No setup. Urgent items first. Medical terms explained in the same sentence. Twelve languages at launch, not deferred. Attribution language in the output, not the footer. Every constraint came from fifteen years of watching what patients actually do when they leave a care setting.",
      "The core architecture decision — One-pass Claude translation produces a translation. Two-pass produces a translation that can be checked against itself. The second call is user-initiated and returns issue cards flagging omissions. The patient decides what to do next. Verification is a tool the patient controls, not a pipeline step that adds delay to every interaction.",
      "What shipped — A free, no-login patient document translation tool with paste, type, voice, and upload input, twelve languages, three reading levels, urgent item extraction, side-by-side view, user-initiated verification with issue cards and THOROUGH CHECK / PARTIAL CHECK / QUICK CHECK badges, copy and share, PDF export, 90-day session persistence, rate limiting on translate, verify, share, and parse. Deployed at literacy.rohimaya.ai.",
    ],
    impactLine:
      "If someone cannot read or act on discharge instructions, the care plan never really starts. HealthLiteracy is built so plain language, reading level, language, and urgent items are part of the product, not an afterthought.",
    processAngle:
      "Next.js 15 App Router, TypeScript, Tailwind CSS v4, Claude API (claude-sonnet-4-20250514 for translate and verify), Zod on API request bodies, manual validation on Claude responses with retry on transport failures, rate limiting, Supabase with versioned SQL migrations and 90-day expiry, Web Speech API for voice, Vercel.",
    cardSummary:
      "Free patient document translation in twelve languages and three reading levels. Paste, type, upload, or speak. Urgent items first, user-initiated verification with issue cards, no login. Live at literacy.rohimaya.ai.",
    role: "Product design, conversation design, full-stack build",
    timeline: "2025 — Present",
    keyOutcome:
      "Free, no-login patient document translation with twelve-language support, three reading levels, user-initiated AI verification, voice input, and 90-day shareable sessions",
    proofPoint: {
      label: "The proof point",
      body: "Fifteen years of watching patients fold their discharge papers into a bag and go home without understanding them. This tool closes one piece of that gap, for free, in twelve languages, with no login required.",
      verdict: "This tool exists because that gap is preventable. Not later. Now.",
    },
    stats: [
      {
        number: "12",
        label: "languages at launch",
        source: "HealthLiteracy product spec (Arabic, French, Hindi, Japanese, Korean, Mandarin, Portuguese, Russian, Spanish, Tagalog, Vietnamese, English)",
      },
      {
        number: "3",
        label: "reading levels (Simple, Clear, Complete)",
        source: "Patient-facing labels; internally mapped to depth tiers, not shown as grades in UI",
      },
      {
        number: "88%",
        label: "of Americans lack proficient health literacy",
        source: "U.S. Department of Health and Human Services, Healthy People 2030",
      },
    ],
    processStepsInteractive: [
      {
        number: "01",
        label: "Constraints",
        phase: "STEP 01 — CONSTRAINT SET",
        title: "The Constraint Set",
        body: "No login. No setup. Urgent items first. Medical terms explained in the same sentence. Twelve languages at launch, not deferred. Attribution language in the output, not the footer. Every constraint came from fifteen years of watching what patients actually do when they leave a care setting.",
      },
      {
        number: "02",
        label: "Architecture",
        phase: "STEP 02 — TWO-PASS",
        title: "Two-Pass Architecture",
        body: "The first Claude call always runs and produces the translation. The second call is user-initiated: when a patient or caregiver requests a second check, it compares the translation against the original and returns issue cards flagging omissions. Verification is a tool the patient controls, not a pipeline step that adds delay to every interaction.",
      },
      {
        number: "03",
        label: "Reading levels",
        phase: "STEP 03 — READING LEVELS",
        title: "Reading Level System",
        body: "Three reading levels: Simple, Clear, Complete. Patient-facing labels never show grade numbers because grade labels shame patients under stress. Each level has a distinct prompt instruction set for sentence structure, explanation depth, and concept unpacking. The selector is surfaced at the top of the interface.",
      },
      {
        number: "04",
        label: "Pivots",
        phase: "STEP 04 — PIVOTS",
        title: "Pivot Stories",
        body: "Four documented pivots: language selection principle, reading level labeling, user-initiated verification design, and Sonnet for clinical text quality.",
      },
      {
        number: "05",
        label: "Shipped",
        phase: "STEP 05 — WHAT SHIPPED",
        title: "What Shipped",
        body: "A free, no-login patient document translation tool with paste, upload, and voice input, twelve languages, three reading levels, urgent item extraction, side-by-side view, user-initiated verification with THOROUGH CHECK / PARTIAL CHECK / QUICK CHECK badges, and 90-day shareable sessions. Deployed at literacy.rohimaya.ai.",
      },
    ],
    pivots: [
      {
        tag: "PRODUCT",
        title: "Language selection: principle over convenience",
        body: "The standard MVP pattern is English and Spanish first, more languages later. That pattern was rejected before the first commit. The launch set was chosen for coverage and script diversity across the largest underserved U.S. patient populations: Arabic, Mandarin, Hindi, Russian, Vietnamese, Tagalog, Korean, Japanese, French, Portuguese, and Spanish alongside English.",
        lesson:
          "Deferring language support is a product decision about whose needs wait. This product made the opposite choice.",
      },
      {
        tag: "DESIGN",
        title: "Reading levels: patient language over institutional labels",
        body: "Internally the system maps to 5th grade, 8th grade, and college-equivalent depth. The UI shipped Simple, Clear, and Complete because grade labels confuse family members and shame patients. Same constraint as the discharge paperwork problem this product exists to solve.",
        lesson:
          "Grade numbers shame patients under stress. Plain labels serve the people actually using the product.",
      },
      {
        tag: "SAFETY",
        title: "Verification: second pass on the patient's terms",
        body: "The original spec called for automatic verification on every translation. The shipped version is user-initiated. Doubling latency and cost on every free session prioritizes pipeline architecture over the patient's experience. Making verification explicit and on-demand respects autonomy, controls cost, and keeps the patient in control of what happens next.",
        lesson:
          "Automated is not always more trustworthy. Visible and explicit builds more trust than silent in a clinical context.",
      },
      {
        tag: "TECHNICAL",
        title: "Sonnet for clinical text",
        body: "The product uses claude-sonnet-4-20250514 for both translation and verification with no smaller model path and no model router. High-stakes plain language for patients making medical decisions is not generic chat. Retries fire on transport failures. Zod validates request bodies. Claude responses use manual validation.",
        lesson:
          "Model selection is a product safety decision in clinical contexts. Default to the model that gets the clinical output right.",
      },
    ],
    shippedCards: [
      {
        title: "Input and Access",
        body: "Paste, upload (PDF and .txt text-layer only), or voice (Web Speech API, Chrome and Edge best). No login, no setup, no cost. Works on mobile, tablet, and desktop.",
      },
      {
        title: "Translation Engine",
        body: "12 languages: Arabic, French, Hindi, Japanese, Korean, Mandarin, Portuguese, Russian, Spanish, Tagalog, Vietnamese, English. 3 reading levels: Simple, Clear, Complete. Medical term explanation in every output. Attribution language preventing misreading as diagnosis. Claude Sonnet (claude-sonnet-4-20250514).",
      },
      {
        title: "Output and Verification",
        body: "Urgent item extraction as separate structured card array. Side-by-side view (original and translation). User-initiated verification pass (Check for Missing Info button). Issue cards flagging detected omissions or inaccuracies. THOROUGH CHECK / PARTIAL CHECK / QUICK CHECK badges. Copy and share, PDF export with disclaimer. Session persistence via Supabase (90-day TTL, 410 on expiry).",
      },
      {
        title: "Infrastructure and Quality",
        body: "Next.js 15, App Router, TypeScript. Tailwind CSS v4. Claude API (claude-sonnet-4-20250514), timeouts and retries on transport failures. Zod validation on API request bodies; manual validation on Claude responses. Rate limiting on translate, verify, share (POST and GET), and parse routes. Supabase (90-day expires_at, 410 on expiry, versioned SQL migrations). Vercel.",
      },
      {
        title: "Accessibility",
        body: "Skip link. Full keyboard navigation and tab semantics. Focus-to-results after translation completes. prefers-reduced-motion respected. Visible error states for PDF extraction and share failures.",
      },
    ],
    stackHighlighted: [
      "Claude API (claude-sonnet-4-20250514, two-pass with user-initiated verify)",
      "Next.js 15 (App Router)",
      "Supabase (90-day session expiry, versioned migrations)",
    ],
    stackStandard: [
      "TypeScript",
      "Tailwind CSS v4",
      "Zod (request validation)",
      "Web Speech API",
      "Vercel",
    ],
    whatThisDemonstrates: [
      {
        title: "Designing for emotionally vulnerable, non-technical users",
        tag: "PRODUCT",
        body: "Zero tolerance for friction: no login, urgent items first, plain reading level labels.",
      },
      {
        title: "Two-pass AI with user-initiated verification",
        tag: "TECHNICAL",
        body: "Issue cards and badges, not automatic re-render on every translation.",
      },
      {
        title: "Patient safety in model and verification UX",
        tag: "PRODUCT",
        body: "Sonnet for translate and verify; verification explicit and on-demand.",
      },
      {
        title: "Multilingual launch with accessibility as a requirement",
        tag: "DESIGN",
        body: "Twelve languages at ship; skip link, keyboard nav, focus-to-results, reduced motion.",
      },
      {
        title: "Abuse resistance on a free, no-login product",
        tag: "TECHNICAL",
        body: "Zod on request bodies, rate limiting on translate, verify, share, and parse routes.",
      },
      {
        title: "Full-stack with versioned database migrations",
        tag: "FULL-STACK",
        body: "Problem definition through deployed product with Supabase schema discipline.",
      },
      {
        title: "Clinical operations as product constraint",
        tag: "PRODUCT",
        body: "Fifteen years at the bedside informing every pivot and constraint.",
      },
    ],
    honestSummary: {
      technical: {
        label: "For engineers",
        body: "Claude Sonnet (claude-sonnet-4-20250514) runs both the translate and verify calls. No smaller model default or model router. Zod validates incoming API request bodies. Claude JSON responses use manual validation with retry logic on transport failures, not parse errors. Rate limiting is applied to translate, verify, share (POST and GET), and parse routes. Supabase sessions use 90-day expiry with versioned SQL migrations. Expired links return 410. Voice input uses the Web Speech API with browser support checks and inline fallback messaging. PDF and .txt only, no OCR.",
      },
      product: {
        label: "For product",
        body: "Every design constraint came from a clinical observation. No login because discharged patients will not create an account. Urgent items first because safety-critical information must not be buried. Twelve languages at launch because deferring is a choice about whose needs wait. Verification user-initiated rather than automatic because doubling latency on a free tool prioritizes pipeline over patient experience. The four pivot stories each represent a real product decision with a real tradeoff. The honest gaps are PDF scanned document support and a production model router for cost optimization at scale.",
      },
      design: {
        label: "For design",
        body: "The interface is built for a specific emotional state: worried, possibly unfamiliar with the language on the page, needing information immediately. Reading level labels are Simple, Clear, and Complete because grade framing adds shame to a moment that already carries enough. The side-by-side view was built for a secondary use case: a caregiver verifying accuracy before presenting to a patient. Accessibility patterns including skip link, keyboard navigation, focus-to-results, and prefers-reduced-motion are launch requirements, not roadmap items.",
      },
    },
    impactQuote:
      "This project exists because discharge instructions written at a 12th-grade reading level do not help a patient who reads at a 5th-grade level, speaks Vietnamese or Tagalog at home, and is scared. That gap is preventable with a two-second API call. The research agrees.",
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
      "Architecture: claude-sonnet-4-20250514 for translate, verify, compare, and briefing only. claudeJsonWithRetry provides one repair turn if JSON is invalid or fails Zod schema validation before an error state surfaces. Compare mode is a separate diff-aware prompt, not two single-document runs pasted together.",
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
      body: 'The shift from "we will deliver" to "we believe we are well positioned to deliver" is not a stylistic choice. It is information. FinanceLens structures financial documents into six sections of analysis, surfaces where the language shifted, ties claims to source passages when present, and closes the loop at a 30-day shareable URL.',
      verdict:
        "Translation is the minimum. Intelligence is the product: what it signals, where language drifted, what changed from last quarter, and what deserves a closer look.",
    },
    stats: [
      {
        number: "6",
        label: "structured analysis sections",
        source: "FinanceLens product spec",
      },
      {
        number: "5",
        label:
          "pivot decisions from Canva API block through media pipeline, attribution, share URLs, and compare UX",
        source: "Case study Section 3",
      },
      {
        number: "30",
        label: "day TTL on all Supabase-backed share URLs (410 on expiry)",
        source: "financelens_sessions",
      },
    ],
    processStepsInteractive: [
      {
        number: "01",
        label: "Thesis",
        phase: "STEP 01 — PRODUCT THESIS",
        title: "The product thesis",
        body: "Summarization is a solved problem. Intelligence is not. The brief was to build a tool that structures financial documents into distinct analytical sections, each with a defined purpose, with claims tied to source passages when present. Six sections, Zod-validated, with language drift detection as the most analytically novel capability.",
      },
      {
        number: "02",
        label: "Contract",
        phase: "STEP 02 — OUTPUT CONTRACT",
        title: "The output contract",
        body: "Claude Sonnet 4 (claude-sonnet-4-20250514) with a typed JSON output contract via lib/claudeJsonWithRetry.ts. Source anchors are prompt-required and surfaced when returned; the Zod schema treats supportingEvidence as optional, not a hard validation gate. One structured repair turn fires before error state surfaces.",
      },
      {
        number: "03",
        label: "Compare",
        phase: "STEP 03 — COMPARE MODE",
        title: "Compare mode architecture",
        body: "A standard analysis prompt applied to two documents produces two analyses. A diff-aware prompt produces the delta. Compare mode renders as an accordion: claim shifts and new language expanded by default, all other sections collapsible with a summary line and item count visible in the collapsed header.",
      },
      {
        number: "04",
        label: "Pivots",
        phase: "STEP 04 — PIVOT STORIES",
        title: "Pivot stories",
        body: "Five documented pivots: Canva API to owned presentation layer, design exports to production media pipeline, metadata and attribution as shipping criteria, share URLs as first-class persistence (30-day TTL), and compare accordion as information reveal design.",
      },
    ],
    pivots: [
      {
        tag: "DESIGN",
        title: "Canva Connect API to owned presentation layer",
        body: "The original spec called for Canva Connect API. App review blocked access with no timeline. The architecture was redesigned: Claude generates a JSON deck outline, pptxgenjs renders the PPTX (Calibri, Office-safe), pdf-lib generates the branded PDF (WSJ Editorial typography), and a custom deck viewer at /deck/[slug] serves the 30-day Supabase-backed URL.",
        lesson:
          "A roadmap dependency on a pending API approval is a schedule risk. Own the layer.",
      },
      {
        tag: "DESIGN",
        title: "Design exports to production media pipeline",
        body: "Landing hero and OG assets were originally multi-megabyte raw exports. scripts/optimize-assets.mjs uses Sharp to produce public/hero.webp, public/og-image.jpg, and rasterized icons at every required size. Edge cases handled in the script, not the UI.",
        lesson:
          "Shipping design exports as-is confuses handoff with production delivery. Media is a build artifact.",
      },
      {
        tag: "PRODUCT",
        title: "Metadata and attribution as shipping criteria",
        body: "metadataBase set from env (NEXT_PUBLIC_SITE_URL with Vercel fallbacks). OG and Twitter images wired to optimized og-image.jpg. PortfolioSiteCredit component added across landing, shell, deck viewer, and PDF footer pointing to hannahkraulikpagade.com.",
        lesson:
          "Shipping is not only features. It is how the product looks when linked on LinkedIn.",
      },
      {
        tag: "TECHNICAL",
        title: "Share URLs as first-class persistence",
        body: "sessionStorage dies with the tab. Analyze, compare, and briefing flows insert rows into financelens_sessions with nanoid slugs and 30-day expires_at. Expired slugs return 410. Graceful degradation: Supabase failure does not block PPTX or PDF download.",
        lesson:
          "The artifact, not the login, is the unit of sharing.",
      },
      {
        tag: "DESIGN",
        title: "Compare accordion as information reveal design",
        body: "Compare results originally rendered all delta sections as always-visible stacked content. Accordion layout: claim shifts and new language expanded by default because those carry the most analytical signal. All other sections collapsible with summary line and item count in the collapsed header.",
        lesson:
          "The order in which information reveals itself is a product decision.",
      },
    ],
    shippedCards: [
      {
        title: "Input",
        body: "Text paste. PDF upload (text-layer only via pdf-parse; scanned PDFs require paste). Six sample document pairs including compare mode pairs.",
      },
      {
        title: "Analysis engine",
        body: "What they said (plain language). What it actually means (interpretation, hedging removed). Key numbers (values with direction and context). Language drift (hedge/firm tags with quoted phrases). Worth a closer look (evidence-oriented flags). Source anchors (prompt-required, surfaced when present). Toggleable confidence score (0–100 evidence density rubric). Zod plus lib/claudeJsonWithRetry one repair turn on failure.",
      },
      {
        title: "Compare mode",
        body: "Two-document delta analysis (diff-aware system prompt). Accordion layout: claim shifts and new language expanded by default. All sections independently collapsible, summary line visible when collapsed. Six built-in sample pairs. 30-day share URL with compare-specific layout.",
      },
      {
        title: "Output and sharing",
        body: "Branded PDF via pdf-lib (WSJ Editorial typography). PPTX via pptxgenjs (Calibri, Office-safe). Claude 7-slide deck outline. Unsplash plus Pollinations image pipeline with attribution. Full-screen and scroll deck viewer at /deck/[slug]. 30-day Supabase-backed share URLs, 410 on expiry. /methodology trust and transparency page.",
      },
      {
        title: "Infrastructure",
        body: "Next.js 16, React 19, TypeScript. Tailwind CSS v4 (utility base) plus custom .fl-* CSS classes. Claude Sonnet 4 (claude-sonnet-4-20250514) throughout. Zod schema validation. pdf-lib, pptxgenjs (owned presentation layer). scripts/optimize-assets.mjs (Sharp media pipeline). PortfolioSiteCredit component. Supabase (financelens_sessions, 30-day TTL, 410 expiry). Vercel (maxDuration 120s on analyze/compare, 60s on export-pdf).",
      },
    ],
    stackHighlighted: [
      "Claude API (claude-sonnet-4-20250514, Zod-validated six-section contract, lib/claudeJsonWithRetry)",
      "pptxgenjs + pdf-lib (owned presentation layer, no Canva OAuth dependency)",
      "Supabase (financelens_sessions, 30-day TTL, 410 on expiry)",
    ],
    stackStandard: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Vercel",
      "Zod",
      "pdf-parse",
      "Unsplash",
      "Pollinations",
    ],
    whatThisDemonstrates: [
      {
        title: "Structured AI output with typed contracts",
        tag: "TECHNICAL",
        body: "Typed JSON contracts and Zod validation with one structured repair turn before failure.",
      },
      {
        title: "Summarization versus intelligence",
        tag: "PRODUCT",
        body: "Product-level distinction between a summary and six analytical sections with distinct purposes.",
      },
      {
        title: "Source anchors as trust architecture",
        tag: "PRODUCT",
        body: "Prompt-required, schema-optional: anchors surface when the model returns them; supportingEvidence is optional in Zod, not a hard gate.",
      },
      {
        title: "Five documented pivots",
        tag: "PRODUCT",
        body: "Each pivot has a real constraint, decision, and outcome — Canva through compare accordion.",
      },
      {
        title: "Compare accordion as information reveal",
        tag: "DESIGN",
        body: "Order of reveal is a product decision: highest-signal sections open first; collapsed headers stay scannable.",
      },
      {
        title: "Owned presentation layer",
        tag: "TECHNICAL",
        body: "No third-party OAuth required to close analyze-to-shareable-artifact loop; custom deck viewer at 30-day URLs.",
      },
      {
        title: "Media pipeline discipline",
        tag: "TECHNICAL",
        body: "Design exports treated as build artifacts via Sharp and optimize-assets, not raw deploys.",
      },
      {
        title: "Financial domain fluency",
        tag: "PRODUCT",
        body: "Earnings calls, 10-K structure, language drift in investor communications, assistive-only guardrails.",
      },
      {
        title: "Deployed shareable artifact",
        tag: "FULL-STACK",
        body: "From product definition to live app with 30-day share URLs and correct 404/410 semantics.",
      },
    ],
    honestSummary: {
      technical: {
        label: "For engineers",
        body: "Claude Sonnet 4 (claude-sonnet-4-20250514) is used for all analyze, compare, and briefing calls. Sonnet only; no secondary model routing. Source anchors are prompt-required; supportingEvidence is optional in the Zod schema, not a hard validation gate. claudeJsonWithRetry fires one structured repair turn before error state surfaces. Compare mode uses a diff-aware system prompt, architecturally distinct from standard analysis. Presentation layer: Claude deck outline, pptxgenjs PPTX (Calibri for Office compatibility), pdf-lib PDF (WSJ Editorial typography), custom deck viewer at 30-day Supabase URLs with 410 on expiry. Media pipeline: scripts/optimize-assets.mjs produces hero.webp, og-image.jpg, and rasterized icons. UI is mostly custom .fl-* CSS; Tailwind provides the reset and utility base. metadataBase from NEXT_PUBLIC_SITE_URL.",
      },
      product: {
        label: "For product",
        body: "The product hypothesis is that structured intelligence and summarization are different products. Five pivot decisions are documented in the process section: Canva to owned presentation layer, design exports to build pipeline, attribution as shipping criteria, share URLs as the unit of sharing (30-day TTL), and compare accordion as information reveal design. Honest gaps: source anchors are prompt-required but schema-optional; no streaming on analyze; no rate limiting before public traffic; no observability before monetization.",
      },
      design: {
        label: "For design",
        body: "WSJ Editorial light has three distinct typeface roles: Fraunces for landing and display headings, Georgia for app and report surfaces, IBM Plex Mono for financial data and labels. The compare accordion layout is a product design decision: claim shifts and new language expanded by default because those carry the most analytical signal. All other sections show a summary line and item count in the collapsed header. PPTX uses Calibri because it is the Office-safe default, not the brand choice. The deck viewer scroll and full-screen modes serve different use cases: scroll for reading, full-screen for presenting.",
      },
    },
    impactQuote:
      "The intelligence is in the delta. What changed from last quarter. Where management stopped committing and started hedging. What was disclosed in a footnote for the first time. FinanceLens surfaces the signal that the document format hides.",
  },
  {
    featured: false,
    order: 6,
    slug: "ask-hannah-mcp",
    title: "Ask Hannah MCP",
    tagline:
      "A live MCP server that lets AI systems query Hannah's professional data directly.",
    subtitle:
      "Ten tools over HTTP on Railway: Zod-validated inputs, Phases 0–4 generation hardening, and a public Claude.ai connector.",
    tags: ["mcp", "agentic-ai", "infrastructure", "developer-tooling"],
    coverImage: "/images/ask-hannah-mcp-cover.jpg",
    embedType: "live",
    embedUrl: "https://ask-hannah-mcp-production.up.railway.app/health",
    liveUrl: "https://ask-hannah-mcp-production.up.railway.app",
    status: "live",
    projectDescription:
      "The standard portfolio format has not changed since 2010. A recruiter arrives, clicks, decides in thirty seconds, and moves on. That format is not built for a world where AI assistants are embedded in hiring workflows. Ask Hannah MCP is a structured data layer that integrates into the tools hiring managers already use instead of asking them to visit another website.",
    problemStatement:
      "Most portfolios are static websites. Ask Hannah MCP is a live API that AI systems can call directly. Recruiters and hiring managers who connect it to Claude can query her background, projects, metrics, voice statements, and a role-focused hiring brief the same way they would query any other data source. The product demonstrates in its own structure what it claims about the builder: she understands how AI systems connect to each other, how to design tools for agentic workflows, and how to ship infrastructure that works. Ten structured tools. The structured data in this server is the canonical fact source for Hannah's professional content.",
    processSteps: [
      "Step 1 — Tool schema design. Ten tools, each scoped to a single job. Profile, voice, projects, metrics, skills, FAQ answers, hiring brief, and generation. Schema clarity was the first decision because downstream AI synthesis is only as good as the structure it receives.",
      "Step 2 — Data contract and voice consistency. hannah-data.ts is the single source of truth for professional content. Voice statements are first-person and human, not formal third-person summaries, because the downstream audience is a human reading AI-synthesized output. The distinction shapes how every tool response reads.",
      "Step 3 — Transport, reliability, and conversion. The stdio build worked locally and failed at registration. The HTTP MCP transport rebuild was necessary. Railway auto-deploys on push. The server is stateless by design. Later passes added trust metadata, hiring-brief depth, explicit contact ordering, UTM tagging, and tests so the system stays credible as it grows.",
    ],
    processAngle:
      "Node.js 20, TypeScript, MCP SDK, Express HTTP streamable transport, Zod, Anthropic API (generation), Railway; hannah-data.ts as compile-time source of truth; src/lib and src/tool-handlers with npm test. Stateless, no database.",
    cardSummary:
      "A live MCP server that turns Hannah's professional portfolio into a queryable data layer for AI systems. Ten tools. Deployed to Railway. Registered in Claude.ai.",
    role: "Product Lead, API Designer, Full-Stack Implementation",
    timeline: "April 2026",
    keyOutcome:
      "Ten MCP tools over HTTP: Zod inputs, streamable transport, Phases 0–4 generation (JD extract, JSON docs, fact verify, ATS modes), stateless Railway deploy, Claude.ai connector.",
    proofPoint: {
      label: "The proof point",
      body: "Ask Hannah MCP is registered as a live connector in Claude.ai. A hiring manager can connect it, open Claude, and query Hannah's background from structured data she controls—not a nav bar, a queryable layer inside tools they already use. That demonstrates agentic infrastructure instinct: tools downstream models can call reliably.",
      verdict: "The proof point is structural. The medium is the message.",
    },
    stats: [
      {
        number: "10",
        label: "live MCP tools",
        source: "Deployed to Railway",
      },
      {
        number: "1",
        label: "Claude.ai connector",
        source: "Publicly registered",
      },
      {
        number: "0",
        label: "databases required",
        source: "Stateless by design",
      },
    ],
    processStepsInteractive: [
      {
        number: "01",
        label: "Schema",
        phase: "STEP 01 — TOOL SCHEMA",
        title: "Tool schema design",
        body: "Ten tools, each scoped to a single job. Profile, voice, projects, metrics, skills, FAQ answers, hiring brief, and generation. Schema clarity was the first decision because downstream AI synthesis is only as good as the structure it receives.\n\nStack: TypeScript, Zod, MCP SDK",
      },
      {
        number: "02",
        label: "Data",
        phase: "STEP 02 — DATA CONTRACT",
        title: "Data contract and voice consistency",
        body: "hannah-data.ts is the single source of truth for professional content. Voice statements are first-person and human, not formal third-person summaries, because the downstream audience is a human reading AI-synthesized output. The distinction shapes how every tool response reads.\n\nStack: TypeScript, Anthropic SDK",
      },
      {
        number: "03",
        label: "Transport",
        phase: "STEP 03 — TRANSPORT",
        title: "Transport, reliability, and conversion",
        body: "The stdio build worked locally and failed at registration. Rebuilt on Express with streamable HTTP MCP for Claude.ai. Railway auto-deploys on push; zero database. Trust metadata on metrics, hiring-brief depth, Calendly-first contact ordering, UTM tagging on outbound links, and automated tests followed.\n\nStack: Express, Railway, HTTP MCP transport",
      },
    ],
    pivots: [
      {
        tag: "TECHNICAL",
        title: "The stdio to HTTP transport swap",
        body: "The first working build used stdio transport because that is the simplest MCP pattern and most documentation assumes local use. It compiled, passed local tests, and produced correct tool outputs—then failed to register as a Claude.ai connector. Claude.ai expects a public HTTP MCP endpoint. The entire transport layer was rebuilt around Express and streamable HTTP before the server could go public.",
        lesson:
          "When building for an external platform's integration spec, read the integration spec first, not the SDK quickstart. They are not the same document.",
      },
      {
        tag: "PRODUCT",
        title: "The resume tool output contract",
        body: "The first version of hannah_generate_resume used a loosely structured prompt; outputs were good but inconsistent—section ordering drifted, metric phrasing varied. The fix enforces a strict contract: model returns document body only from verified data; empty responses and API failures map to explicit error codes with retry guidance.",
        lesson:
          "Generation tools in production need a contract, not a suggestion. The model does what the prompt allows.",
      },
      {
        tag: "PRODUCT",
        title: "Scoping what the server should not do",
        body: "Early design considered a tool that would score Hannah's fit against a job description in real time. It was cut: a fit-scoring tool that can return a low score is a liability in a job search context. Resume and cover letter generation already handle tailoring more usefully.",
        lesson:
          "Scope is a product decision. Not every technically interesting feature belongs in the product.",
      },
      {
        tag: "PRODUCT",
        title: "From credible outputs to a clear next action",
        body: "Once trust and structure were solid, conversion was the bottleneck. The hiring brief gained compact summary mode, role-specific CTA wording, and explicit contact fallback order: Calendly first, then LinkedIn, then email. Outbound links gained consistent UTM tagging so MCP traffic is attributable.",
        lesson:
          "A portfolio MCP is still a product surface. If the next step is fuzzy, the artifact does not ship its full value.",
      },
    ],
    shippedCards: [
      {
        title: "Ten structured tools",
        body: "Profile, project list and detail, metrics (with trust metadata), skills, first-person voice, FAQ by topic, recruiter hiring brief, resume and cover letter generation—outputs as Zod-validated document JSON with fact verification and ATS-oriented plain modes.",
      },
      {
        title: "Generation pipeline (Phases 0–4)",
        body: "Configurable models, retries, privacy-safe stderr telemetry, optional POST /mcp rate limit; long JDs get a validated JSON extract to JOB SIGNALS; machine-validated JSON then deterministic Markdown or ATS plain text; corpus-backed fact drift errors; profile-owned resume header.",
      },
      {
        title: "HTTP MCP and Railway",
        body: "Streamable Express transport for Claude.ai, Zod on all inputs, /health and diagnostics, auto-deploy on push—stateless, no database, facts in hannah-data.ts at compile time.",
      },
      {
        title: "Modular codebase and tests",
        body: "Handlers in src/tool-handlers, shared logic in src/lib, npm test for regressions, sample JSON shapes documented in-repo.",
      },
    ],
    stackHighlighted: [
      "MCP SDK (@modelcontextprotocol/sdk) — Claude.ai connector compatibility",
      "HTTP streamable transport (Express) — required for public registration; stdio only locally",
      "Zod — schema enforcement on all tool inputs before handler execution",
      "Anthropic Messages API — document JSON, Phase 3 fact checks, Phase 4 atsMode; optional JD extract",
    ],
    stackStandard: [
      "Node.js 20",
      "TypeScript",
      "hannah-data.ts (compile-time data layer)",
      "Railway (auto-deploy, HTTPS)",
      "src/lib, src/tool-handlers",
    ],
    whatThisDemonstrates: [
      {
        title: "Live agentic infrastructure",
        tag: "FULL-STACK",
        body: "Built a live MCP server, deployed it to production, registered it as a Claude.ai connector—functional proof she builds for the agentic AI layer, not just chat UIs.",
      },
      {
        title: "Generation and trust discipline",
        tag: "TECHNICAL",
        body: "Strict generation contracts, Zod-validated document JSON, deterministic rendering, corpus-backed fact verification, ATS modes, privacy-safe telemetry—without logging job posting bodies.",
      },
      {
        title: "Portfolio as product surface",
        tag: "PRODUCT",
        body: "Closed the static-portfolio gap for AI PM roles; cut liability features; hiring brief and conversion path so screening does not dead-end; scoped for hiring managers already inside Claude.",
      },
      {
        title: "Schema as UX",
        tag: "DESIGN",
        body: "Field names and return shapes are design decisions: profile facts versus first-person voice shape how synthesized output reads to humans.",
      },
      {
        title: "Proof, not revenue",
        tag: "PRODUCT",
        body: "A job-search artifact and portfolio proof point: value is that using it demonstrates the claims about the builder—not commercial revenue.",
      },
    ],
    honestSummary: {
      technical: {
        label: "Technical understanding",
        body: "Understands MCP transport architecture well enough to identify and fix the stdio versus public HTTP mismatch that blocked registration. Applied strict generation contracts and standardized error handling to resume and cover letter tools. Phase 0 generation operations add env-configurable models, bounded retries on transient API failures, privacy-safe stderr telemetry (lengths and timings, not job description text), and an optional /mcp rate limit behind Railway-friendly proxy trust settings. Phase 1 adds a validated JSON extraction pass for long job descriptions so the main generator sees compact JOB SIGNALS instead of raw posting walls, with excerpt fallback and separate jd_extract logs. Phase 2 makes resume and cover letter outputs machine-validated JSON first, then deterministic Markdown, with the resume header and contact lines owned by the server from hannah-data so the model cannot rewrite identity fields. Phase 3 adds a deterministic verification layer on model-owned prose and bullets so invented dollar amounts, percentages, banned references, and the wrong experience-year framing fail closed before the user sees output. Phase 4 adds ATS-oriented plain-text modes with separate prompt rules and structured metadata so the same JSON can be emitted as human Markdown or parser-friendly text without changing the fact floor. Refactored into modules with tests so changes do not regress silently. Stateless by design was a conscious tradeoff, not a gap.",
      },
      product: {
        label: "Product understanding",
        body: "Scoped out a fit-scoring tool that would have been technically interesting but created product liability in a job search context. Made the voice tool distinct from the profile tool because the downstream synthesis use case for each is different. Added a hiring brief and conversion path so screening does not dead-end after reading. Designed for a specific user journey: hiring manager opens Claude, connects the server, asks questions, gets grounded answers, moves to outreach.",
      },
      design: {
        label: "Design understanding",
        body: 'The UX of an MCP tool is its schema. Field names, return shape, and the structure of voice answers are all design decisions that affect how the synthesized output reads to a human. "She has 17 years of experience" is a third-person summary. "I did not come to AI from a whiteboard. I came from the floor." is a voice statement. Same fact, different tool, different output. That distinction was designed, not accidental.',
      },
    },
    impactLine:
      "Any hiring manager with a Claude.ai account can connect this server right now and ask it anything. It will answer from structured data Hannah controls. That is a different kind of leave-behind.",
    impactQuote:
      "Any hiring manager with a Claude.ai account can connect this server right now and ask it anything. It will answer from structured data Hannah controls. That is a different kind of leave-behind.",
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
      "Voice: MediaRecorder to /api/transcribe (Whisper) for server-side transcription versus browser-native speech recognition; IVR playback via /api/speak (OpenAI TTS), fetch to Blob URL, HTMLAudioElement.play() for reliable iOS Safari tap-to-play. OpenAI Realtime for Live Call: /api/realtime-session token, RealtimeSession WebSocket lifecycle.",
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
      body: "When the bereavement utterance fires, the system suppresses account verification, routes to a senior specialist, and the entire application turns purple. The UI does not just label sentiment. It inhabits it.",
      verdict:
        "That is not decoration. That is the proof that emotional state handling was designed in, not added on.",
    },
    stats: [
      {
        number: "11",
        label: "sample utterances covering emotional edge cases",
        source: "ClearChannel product scope",
      },
      {
        number: "5",
        label: "sentiment states driving the full CSS token system",
        source: "Design system",
      },
      {
        number: "18",
        label: "classified intents with priority override rules",
        source: "NLU architecture",
      },
    ],
    processStepsInteractive: [
      {
        number: "01",
        label: "Brief",
        phase: "STEP 01 — THE BRIEF",
        title: "The brief and constraint set",
        body: "An enterprise conversational channels team needed a designer who understood IVR, chatbot, and agent assist as a system. I read that requirement as a product spec and built the tool that would make a hiring team say she already understands our system. The lab opens empty: no pre-seeded result, two paths — open a sample or start a Live Call. The first screen is the brief.",
      },
      {
        number: "02",
        label: "SSE",
        phase: "STEP 02 — STREAMING",
        title: "SSE streaming architecture",
        body: "One Claude API call (claude-sonnet-4-6) streams over SSE. The client accumulates the text stream and extracts complete JSON sections as braces close. Intent bar and channel panels fill progressively as each block arrives. The streaming implementation matches the product argument: one utterance, three channels, unfolding simultaneously.",
      },
      {
        number: "03",
        label: "Sentiment",
        phase: "STEP 03 — THEMING",
        title: "Sentiment theming system",
        body: "The data-sentiment CSS token architecture drives every color surface from a single attribute on the root element. Five states: neutral (teal), concerned (amber), distressed (purple), urgent (red), confused (blue). When the system classifies an utterance, the override fires in the prompt logic and the CSS attribute changes simultaneously. The environment echoes the emotional state at a glance.",
      },
      {
        number: "04",
        label: "Voice",
        phase: "STEP 04 — VOICE",
        title: "Voice input and OpenAI Realtime",
        body: "Voice input uses MediaRecorder and OpenAI Whisper via /api/transcribe for reliable server-side transcription. IVR audio uses OpenAI TTS via /api/speak with a Blob URL and HTMLAudioElement specifically for iOS Safari reliability. Live Call uses the OpenAI Realtime API for a persistent WebSocket session: a second input mode that shows what a real contact-center conversation feels like alongside designed edge case utterances.",
      },
      {
        number: "05",
        label: "Pivots",
        phase: "STEP 05 — PIVOTS",
        title: "Pivot stories",
        body: "Six documented pivots: empty state over pre-seeded dashboard, SSE streaming for progressive fill, Blob URL for iOS IVR audio, sentiment as full-environment signal, mobile welcome craft, and Live Call promotion to first-class CTA. Each is a product decision with a real tradeoff, not a technical accident.",
      },
    ],
    pivots: [
      {
        tag: "DESIGN",
        title: "Empty state instead of pre-seeded dashboard",
        body: "The lab originally opened with a pre-loaded analysis result. A busy first screen read as a data dump on mobile and bypassed the product story. The decision was to start empty with two paths: open a sample or start a Live Call. Analysis only appears after the user acts.",
        lesson:
          "We chose clarity over looking live on load. The first screen is the brief.",
      },
      {
        tag: "TECHNICAL",
        title: "SSE streaming for progressive panel fill",
        body: "Analysis originally waited for one full JSON response before rendering. The thesis is one utterance, many channels simultaneously. A blocking response hides that structure. Moving to SSE with progressive section extraction makes the parallel outputs visible as they arrive.",
        lesson:
          "Align implementation with the product argument. The same reasoning surfaces across all channels, not as a sequential reveal, but as one response unfolding in real time.",
      },
      {
        tag: "TECHNICAL",
        title: "IVR audio and iOS Safari",
        body: "IVR audio originally used AudioContext and decoded buffers. On iOS Safari, user-gesture chains break across await, causing silent failures on tap-to-play. The pattern was changed to fetch to Blob URL to HTMLAudioElement.play() with cleanup on end and unmount.",
        lesson:
          "IVR is audible-first. Mobile playback is a product requirement, not a nice-to-have.",
      },
      {
        tag: "DESIGN",
        title: "Sentiment as full-environment signal",
        body: "The original design used a small badge to label sentiment state. If only a badge changes color, reviewers miss the point that emotional state changes routing, copy, and system behavior. Semantic CSS variables driven by data-sentiment now retint background, topbar, accents, panels, and prosody indicators with smooth transitions.",
        lesson:
          "The UI does not just label sentiment. It inhabits it.",
      },
      {
        tag: "DESIGN",
        title: "Welcome flow and mobile craft",
        body: "The welcome experience could not be scrolled to completion on small screens and several controls did not meet 44px touch targets. Rebuilt with backdrop scrolling (not a trapped modal), 100dvh, 44px touch targets throughout, and readable label sizes on small screens.",
        lesson:
          "Portfolio demos are shipped software. Onboarding and thumb-sized UI are part of the proof.",
      },
      {
        tag: "PRODUCT",
        title: "Live Call as first-class story",
        body: "Live Call originally lived in an easy-to-miss location. Typed samples show NLU design. Live voice shows contact-center reality. Promoted to the empty-state hero as a primary CTA alongside sample utterances, with stronger topbar control and a header layout that does not break on narrow widths.",
        lesson:
          "We run two proofs in one lab: designed utterances for edge cases, and live speech for what a call feels like.",
      },
    ],
    shippedCards: [
      {
        title: "Sample coverage",
        body: "IRA to brokerage fund transfer. Unauthorized transaction / fraud detection. Balance inquiry (baseline). Retirement planning. Bereavement / beneficiary update (death of spouse). Market anxiety / panic-selling. Repeat caller frustration. Barge-in escalation. Vague distress. Cognitive accessibility (family member managing account). Time pressure / urgent deadline.",
      },
      {
        title: "Channel outputs",
        body: "IVR: spoken script with prosody annotations, entities, routing, fallback. Chatbot: bot response, quick replies, containment decision, handoff context. Agent Assist: suggested script, policy references, compliance flags, escalation path.",
      },
      {
        title: "NLU architecture",
        body: "18 intents with priority override rules. Confidence score and threshold visualization. Entity schema. Training phrase suggestions. Collapsible four-column grid.",
      },
      {
        title: "Sentiment theming",
        body: "Five states: neutral (teal #0891B2), concerned (amber #D97706), distressed (purple #7C3AED), urgent (red #DC2626), confused (blue #3B82F6). data-sentiment attribute cascades through all CSS token surfaces. Smooth transitions on topbar, background, accents, borders, pills, prosody indicators.",
      },
      {
        title: "Override rules",
        body: "Bereavement: verification suppressed, senior specialist routing, distressed theme. Fraud escalation: urgent theme. Market anxiety behavioral coaching guardrail: concerned theme. Barge-in interruption detection.",
      },
      {
        title: "Voice and audio",
        body: "MediaRecorder plus OpenAI Whisper (/api/transcribe) for voice input. OpenAI TTS (/api/speak) plus Blob URL plus HTMLAudioElement for IVR playback. OpenAI Realtime (/api/realtime-session) for persistent Live Call mode. SSE streaming with progressive panel fill.",
      },
      {
        title: "Design artifact page",
        body: "/design-artifact: static page, no API calls. Intent taxonomy: all 18 intents with category, threshold, sentiment state. Override priority rules with structural changes and channel behavior. Entity schema with intent associations. Channel routing matrix. Sentiment state map with design token swatches from globals.css. Data from lib/designArtifactData.ts.",
      },
      {
        title: "Infrastructure",
        body: "Next.js 16, React 19, TypeScript, Tailwind CSS. Claude API (claude-sonnet-4-6), structured JSON, SSE streaming. OpenAI Whisper, TTS, Realtime. Vercel.",
      },
    ],
    stackHighlighted: [
      "Claude API (claude-sonnet-4-6, SSE streaming, progressive panel fill)",
      "OpenAI (Whisper · TTS · Realtime)",
      "data-sentiment CSS token architecture (five emotional state themes)",
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
        body: "IVR, Chatbot, and Agent Assist as a unified architecture from one utterance, not three separate demos.",
      },
      {
        title: "Semantic CSS token architecture",
        tag: "DESIGN",
        body: "Emotional state-driven UI theming across five states from a single root data-sentiment attribute.",
      },
      {
        title: "NLU architecture storytelling",
        tag: "TECHNICAL",
        body: "18 intents, entity schema, confidence threshold, priority override rules surfaced as practitioner-readable evidence.",
      },
      {
        title: "Full voice pipeline",
        tag: "TECHNICAL",
        body: "MediaRecorder, OpenAI Whisper, TTS audio playback, OpenAI Realtime Live Call.",
      },
      {
        title: "SSE streaming and progressive UI",
        tag: "TECHNICAL",
        body: "Progressive fill aligned to the product thesis: parallel outputs visible as they stream.",
      },
      {
        title: "Visual NLU documentation",
        tag: "DESIGN",
        body: "Design artifact page and lib/designArtifactData.ts as a second deliverable.",
      },
      {
        title: "Six documented pivots",
        tag: "PRODUCT",
        body: "Each pivot documents a real constraint, decision, and tradeoff.",
      },
      {
        title: "Honest status matrix",
        tag: "PRODUCT",
        body: "Acknowledges what is and is not implemented: simulated NLU via Claude, parse failure UX gap, no Dialogflow or LUIS integration.",
      },
    ],
    honestSummary: {
      technical: {
        label: "For engineers",
        body: "The Claude API call (claude-sonnet-4-6) streams over SSE. The client accumulates the text stream and extracts complete JSON sections as braces close, allowing progressive panel fill without blocking. There is no server-side JSON repair pass. A final JSON.parse on the accumulated stream fails silently with no user-facing error state. That is the honest current implementation and it is in the status matrix. Voice uses MediaRecorder and OpenAI Whisper server-side via /api/transcribe, not browser Web Speech. IVR audio uses OpenAI TTS via /api/speak with a Blob URL and HTMLAudioElement specifically for iOS Safari reliability. OpenAI Realtime manages a persistent WebSocket session for Live Call mode, a distinct architecture from the standard transcribe-then-analyze path.",
      },
      product: {
        label: "For product",
        body: "This project is built from a product brief: an enterprise conversational channels team that needed a designer who understood IVR, chatbot, and agent assist as a unified system. The six pivot stories each represent a real product decision with a real tradeoff: empty state, SSE streaming, iOS audio path, full-environment sentiment theming, mobile craft, and Live Call promotion. The design artifact page at /design-artifact is a second deliverable produced from the same build, demonstrating that this designer thinks about conversation architecture as a documentation problem, not just an implementation problem.",
      },
      design: {
        label: "For design",
        body: "The CSS token architecture is the design centerpiece. Five named sentiment states, each driving a complete color system through a single data-sentiment attribute on the root. IBM Plex Sans for interface text, IBM Plex Mono for financial data and classification output. Navy #1B2E4B, teal #0891B2 as the base palette. The panel layout hierarchy reflects practitioner reading order: IVR at 44%, Chatbot and Agent Assist stacked on the right, NLU collapsible below. Mobile is a drawer, not a collapsed state. 44px touch targets, 100dvh, backdrop scrolling.",
      },
    },
    impactQuote:
      "The bereavement utterance fires. The system suppresses account verification, routes to a senior specialist, and the entire application turns purple. That is not decoration. That is the proof that emotional state handling was designed in, not added on.",
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
