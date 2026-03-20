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
    subtitle:
      "OrixLink AI accepts any symptom from any person and returns a structured clinical differential with urgency triage, red flag detection, care pathway recommendations, and plain-language reasoning. No login. No prior diagnosis required. Built on Next.js 16 and the Claude API under Rohimaya Health AI.",
    tags: ["CLINICAL-AI", "PRODUCT-DESIGN", "FULL-STACK"],
    embedType: "live",
    embedUrl: "https://orixlink.vercel.app",
    liveUrl: "https://orixlink.vercel.app",
    status: "live",
    coverImage: "",
    projectDescription:
      "OrixLink AI accepts any symptom from any person and returns a structured clinical differential with urgency triage, red flag detection, care pathway recommendations, and plain-language reasoning. No login. No prior diagnosis required. Built on Next.js 16 and the Claude API under Rohimaya Health AI.",
    problemStatement:
      "At least 12 million Americans experience a diagnostic error in outpatient settings each year. Most are preventable. Most begin at the front end of the clinical encounter, before a physician is involved, when a patient with an undifferentiated symptom presentation has no structured tool to help them or their care team reason through what might be happening. OrixLink AI is that tool.",
    processSteps: [
      "The single non-negotiable constraint that shaped everything: any symptom, any person, no prior diagnosis required. Every existing triage tool narrows its scope to reduce complexity. OrixLink accepts the full scope and manages it through prompt engineering rather than feature limitation. The clinical logic — red flag taxonomy, urgency tiers, care pathway language — came directly from 15 years of bedside nursing, not from a product spec.",
      "The core product work was the Claude system prompt. Building a prompt that produces a reliable, structured clinical differential from free-text symptom input, enforces attribution language, surfaces urgency as a discrete field, and detects red flag presentations without hallucinating diagnoses required iterating through dozens of constraint combinations. The Meridian Oracle design system (obsidian, gold, cream) was built alongside the product as the visual language for the Rohimaya Health AI brand family, designed to signal clinical authority to both clinicians and patients.",
      "A live, free, universal triage and diagnosis tool with structured differential output, discrete urgency tiers, red flag detection, care pathway recommendations, and plain-language reasoning alongside clinical reasoning. Deployed on Vercel, built on Next.js 16, TypeScript, Tailwind CSS v4, Claude API, and Supabase.",
    ],
    impactLine:
      "OrixLink AI is positioned at the highest-risk moment in the diagnostic process: before the physician encounter, when a patient or caregiver is trying to decide whether this is an emergency or something that can wait until Monday. Getting that decision wrong costs lives. The research agrees, and so does everyone who has worked a clinical floor.",
    processAngle:
      "Built end to end on Claude API, Next.js, Tailwind v4, Supabase, and Vercel. Includes a production refusal protocol designed around compartment syndrome false-negative risk.",
    cardSummary:
      "Universal clinical triage. Any symptom, any person. Structured differential, urgency tiers, refusal protocol.",
    role: "Conversation UX Lead & Prompt Architect",
    timeline: "2025 — Present",
    keyOutcome: "Live product with structured differential, urgency tiers, and production refusal protocol",
  },
  {
    featured: false,
    order: 2,
    slug: "healthliteracy-ai",
    title: "HealthLiteracy AI",
    tagline: "Your medical records, in your language.",
    subtitle:
      "HealthLiteracy AI translates discharge summaries, lab results, and clinical notes into plain language a patient can actually use. Paste, upload a PDF, or speak. Choose Simple, Clear, or Complete. Eight languages. Urgent action items surfaced as visual cards before the translation body.",
    tags: ["HEALTH-EQUITY", "AI-PRODUCT", "FULL-STACK"],
    embedType: "live",
    embedUrl: "https://health-literacy-ai.vercel.app",
    liveUrl: "https://health-literacy-ai.vercel.app",
    status: "live",
    coverImage: "",
    projectDescription:
      "HealthLiteracy AI translates discharge summaries, lab results, and clinical notes into plain language a patient can actually use. Paste, upload a PDF, or speak. Choose Simple, Clear, or Complete. Eight languages. Urgent action items surfaced as visual cards before the translation body.",
    problemStatement:
      "88% of Americans have less-than-proficient health literacy. The average discharge summary is written at a 9th or 10th grade reading level. The average patient reads at an 8th grade level at best — often lower — and may not read English at home. Patients who understand their discharge instructions are 30% less likely to be readmitted. That gap is a product problem.",
    processSteps: [
      "I did not need to conduct user research for this project. I have conducted it for 15 years on every shift. The constraints were clear before the first line of code: no login, no setup, urgent items at the top, built-in translation in the languages my actual patients speak. The tool had to serve patients who might be scared, tired, medicated, or not literate in English — all at once.",
      "The core product decision was the Claude system prompt. Translation is easy. A translation that a nurse would trust to hand to a patient requires specific constraints: every medical term explained in the same sentence, urgent items returned as a structured array separate from the translation body, attribution language that prevents the tool from being read as a diagnosis, and a verification pass that checks its own work for omissions. The eight-language requirement and voice input were built at launch, not deferred, because the population this serves is not well-served by English-only MVP thinking.",
      "A free, no-login patient document translation tool with three input methods, eight languages, three reading levels, urgent item cards, side-by-side view, copy and share, and a built-in AI verification pass that checks the translation against the original for omissions. Deployed on Vercel, sessions persisted in Supabase, built on Next.js 15 and the Claude API.",
    ],
    impactLine:
      "This project exists because discharge instructions written at a 12th-grade reading level do not help a patient who reads at a 5th-grade level, speaks Haitian Creole at home, and is scared. That gap is preventable with a two-second API call. The research agrees.",
    processAngle:
      "Built around health equity constraints with eight-language output, low-friction input modes, and AI verification for omission checking.",
    cardSummary:
      "Patient document translation. Eight languages, three reading levels. Urgent items surfaced first.",
    role: "Product & Conversation Design",
    timeline: "2025 — Present",
    keyOutcome: "Eight-language translation with AI verification and shareable sessions",
  },
  {
    order: 3,
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
    order: 4,
    slug: "financelens-ai",
    title: "FinanceLens AI",
    subtitle:
      "FinanceLens AI translates earnings call transcripts, 10-K filings, and regulatory notices into plain language. Paste or upload. The Claude-powered output surfaces what the company said, what it actually means, key numbers with context, and items worth a closer look.",
    tags: ["FINTECH", "AI-PRODUCT", "FULL-STACK"],
    embedType: "coming-soon",
    embedUrl: "",
    liveUrl: "",
    status: "coming-soon",
    coverImage: "",
    projectDescription:
      "FinanceLens AI translates earnings call transcripts, 10-K filings, and regulatory notices into plain language. Paste or upload. The Claude-powered output surfaces what the company said, what it actually means, key numbers with context, and items worth a closer look.",
    processAngle: "Coming soon.",
  },
  {
    featured: false,
    order: 5,
    slug: "voice-sdr-demo",
    title: "Voice SDR Demo",
    subtitle:
      "A live inbound voice AI that qualifies leads, answers product questions, and offers to book a meeting, powered by Vapi and Claude. Call a real phone number and experience a full AI sales conversation. After the call, a lead summary is generated and available at a shareable URL.",
    tags: ["GTM", "VOICE-AI", "FULL-STACK"],
    embedType: "coming-soon",
    embedUrl: "",
    liveUrl: "",
    status: "coming-soon",
    coverImage: "",
    projectDescription:
      "A live inbound voice AI that qualifies leads, answers product questions, and offers to book a meeting, powered by Vapi and Claude. Call a real phone number and experience a full AI sales conversation. After the call, a lead summary is generated and available at a shareable URL.",
    processAngle: "Coming soon.",
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
