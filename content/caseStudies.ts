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
  processSteps?: [string, string, string];
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
};

export const caseStudies: CaseStudy[] = [
  {
    featured: true,
    order: 1,
    slug: "orixlink-ai",
    title: "OrixLink AI",
    tagline: "Where every symptom finds its answer.",
    subtitle:
      "OrixLink AI accepts any symptom from any person and returns a structured clinical differential with urgency triage, red flag detection, care pathway recommendations, and plain-language reasoning. No login. No prior diagnosis required. Built on Next.js 16 and the Claude API under Rohimaya Health AI.",
    tags: ["CLINICAL-AI", "CONVERSATIONAL", "FULL-STACK"],
    embedType: "live",
    embedUrl: "https://triage.rohimaya.ai",
    liveUrl: "https://triage.rohimaya.ai",
    status: "live",
    coverImage: "/images/orixlink-ai-landing.png",
    projectDescription:
      "OrixLink AI accepts any symptom from any person and returns a structured clinical differential with urgency triage, red flag detection, care pathway recommendations, and plain-language reasoning. No login. No prior diagnosis required. Built on Next.js 16 and the Claude API under Rohimaya Health AI.",
    problemStatement:
      "At least 12 million Americans experience a diagnostic error in outpatient settings each year. Most are preventable. Most begin at the front end of the clinical encounter, before a physician is involved, when a patient with an undifferentiated symptom presentation has no structured tool to help them or their care team reason through what might be happening. OrixLink AI is that tool.",
    processSteps: [
      "The single non-negotiable constraint that shaped everything: any symptom, any person, no prior diagnosis required. Every existing triage tool narrows its scope to reduce complexity. OrixLink accepts the full scope and manages it through prompt engineering rather than feature limitation. The clinical logic — red flag taxonomy, urgency tiers, care pathway language — came directly from 15 years of bedside nursing, not from a product spec.",
      "The core product work was the Claude system prompt. Building a prompt that produces a reliable, structured clinical differential from free-text symptom input, enforces attribution language, surfaces urgency as a discrete field, detects red flag presentations, adapts output across patient and clinician modes, and activates a refusal escalation protocol without hallucinating diagnoses required iterating through dozens of constraint combinations across six architectural layers. The Meridian Oracle design system — obsidian, gold, cream, Cormorant Garamond, DM Sans, DM Mono — was built alongside the product as the visual language for the Rohimaya Health AI brand family.",
      "A live, free, universal triage and diagnosis tool validated against real clinical presentations including forearm compartment syndrome post-cardiac catheterization. Structured differential output, four discrete urgency tiers, red flag detection, care pathway recommendations, role-adaptive output, refusal protocol, and living conversation that updates the assessment as new symptoms arrive. Deployed on Vercel, built on Next.js 16, TypeScript, Tailwind CSS v4, Claude API, and Supabase.",
    ],
    impactLine:
      "OrixLink AI is positioned at the highest-risk moment in the diagnostic process: before the physician encounter, when a patient or caregiver is trying to decide whether this is an emergency or something that can wait until Monday. Getting that decision wrong costs lives. The research agrees, and so does everyone who has worked a clinical floor.",
    processAngle:
      "Built end to end on Claude API, Next.js, Tailwind v4, Supabase, and Vercel. Includes a validated refusal protocol tested against compartment syndrome post-cardiac catheterization.",
    cardSummary:
      "Universal clinical triage. Any symptom, any person. Structured differential, urgency tiers, refusal protocol.",
    role: "Conversation UX Lead & Prompt Architect",
    timeline: "2025 — Present",
    keyOutcome: "Live product with structured differential, four urgency tiers, validated refusal protocol, and Supabase session persistence",
  },
  {
    featured: false,
    order: 2,
    slug: "healthliteracy-ai",
    title: "HealthLiteracy AI",
    tagline: "Your medical records, in your language.",
    subtitle:
      "HealthLiteracy AI translates discharge summaries, lab results, and clinical notes into plain language a patient can actually use. Paste, upload a PDF, or speak. Choose Simple, Clear, or Complete. Twelve languages. Urgent action items surfaced as visual cards before the translation body.",
    tags: ["HEALTH-EQUITY", "AI-PRODUCT", "FULL-STACK", "PATIENT-FACING"],
    embedType: "live",
    embedUrl: "https://literacy.rohimaya.ai",
    liveUrl: "https://literacy.rohimaya.ai",
    status: "live",
    coverImage: "/images/healthliteracy-ai-landing.png",
    projectDescription:
      "HealthLiteracy AI translates discharge summaries, lab results, and clinical notes into plain language a patient can actually use. Paste, upload a PDF, or speak. Choose Simple, Clear, or Complete. Twelve languages. Urgent action items surfaced as visual cards before the translation body.",
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
      "Patient document translation. Twelve languages, three reading levels. Urgent items surfaced first.",
    role: "Product & Conversation Design",
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
    subtitle:
      "ClearChannel is a live NLU routing simulator that classifies investor utterances with confidence scoring and sentiment, then generates simultaneous channel outputs across IVR, chatbot, and agent assist.",
    tags: ["FINSERV", "CONVERSATIONAL-AI", "NLU-ARCHITECTURE"],
    embedType: "live",
    embedUrl: "https://clearchannel-vestara.vercel.app/",
    liveUrl: "https://clearchannel-vestara.vercel.app/",
    status: "live",
    coverImage: "/images/clearchannel-landing.png",
    projectDescription:
      "A real-time conversational design lab for enterprise financial services contact centers. ClearChannel makes NLU routing logic visible and auditable by showing intent, confidence, sentiment, and channel-specific responses in one flow.",
    problemStatement:
      "Enterprise contact centers still struggle with misrouted, emotionally mismatched conversations because intent architecture is often designed separately from downstream channel experiences. In high-stakes contexts like bereavement, fraud, and urgent account events, those first routing decisions directly impact trust and retention.",
    processSteps: [
      "I designed ClearChannel around an architecture gap: product and UX teams rarely get to observe how one utterance propagates through IVR, chatbot, and agent-assist simultaneously. The solution was to treat routing design as a live, testable artifact rather than a hidden configuration layer.",
      "The core system prompt encodes 18 intent categories, confidence logic, and pre-classification emotional override protocols (bereavement, fraud, barge-in). The app pairs Claude-powered intent analysis with voice input and live channel rendering to expose routing behavior in real time for design review.",
      "A deployed, interactive NLU routing simulator that streams intent, confidence, sentiment, and three synchronized channel responses in seconds. Built with Next.js 16, TypeScript, Tailwind CSS v4, Claude API streaming, and realtime voice integration.",
    ],
    impactLine:
      "ClearChannel turns invisible routing logic into a visible design and product decision surface, enabling teams to test emotional-context handling and cross-channel consistency before those decisions affect live customers.",
    processAngle:
      "Designed for enterprise conversational governance: emotional overrides, simultaneous channel outputs, confidence legibility, and verbatim-ready agent assist.",
    cardSummary:
      "Real-time NLU routing lab for financial services across IVR, chatbot, and agent assist.",
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
