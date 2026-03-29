# HealthLiteracy AI — Portfolio Case Study Documentation
# Hannah Kraulik Pagade | Rohimaya Health AI
# For use in portfolio at hannahkraulikpagade.com

---

## PROJECT METADATA

**Project name:** HealthLiteracy AI
**Tagline:** Your medical records, in your language.
**Status:** Live
**Primary URL:** literacy.rohimaya.ai
**Vercel URL:** health-literacy-ai.vercel.app
**Repo:** github.com/rohimayaventures/healthliteracy-ai
**Tags:** HEALTH-EQUITY · AI-PRODUCT · FULL-STACK · PATIENT-FACING
**Role:** Product and Conversation Design
**Timeline:** 2025 — Present
**Key outcome:** Twelve-language translation with AI verification, three reading levels, and shareable sessions
**Stack:** Next.js 15 · TypeScript · Tailwind CSS v4 · Claude API · Supabase · Vercel

---

## SECTION 1 — THE PROBLEM

### One-sentence framing

Clinical documentation is written for providers. Patients are handed the same documents at discharge, often scared, sometimes in pain, frequently in a language they do not read fluently, and expected to manage their own care from them.

### The data

**88% of American adults have less-than-proficient health literacy.** Only 12% of U.S. adults meet the threshold for proficient health literacy, according to the U.S. Department of Health and Human Services. This is not a fringe population. It is nearly everyone.

**Discharge instructions are written at the wrong level — consistently.** The American Medical Association, the Department of Health and Human Services, and the National Institutes of Health all recommend patient-facing materials be written at or below a sixth-grade reading level. Research published in the Journal of General Internal Medicine found that 88.7% of discharge instructions analyzed were inaccessible to the patients they were intended for, with a mean Flesch-Kincaid grade level of 9.1. Only 11.3% of instructions fell within recommended guidelines.

**Most patients are not given materials in their language.** A 2025 study in the American Journal of Medicine examined 1,511 Epic discharge documents and found that easy-to-read versions existed for only one in five documents, and were available almost exclusively in English and Spanish. Nearly 13% of Americans are Spanish speakers, and 44% of Hispanic and Latino adults read at a below-basic English level compared with 15% of non-Hispanic counterparts.

**Comprehension gaps lead directly to worse outcomes.** At least 78% of patients discharged from the emergency department exhibit comprehension deficits for at least one component of their discharge instructions. Patients who clearly understand their after-hospital care instructions are 30% less likely to be readmitted or return to the ED. Low health literacy is associated with more hospitalizations, greater emergency care use, reduced adherence to medication instructions, and higher mortality rates in elderly populations.

**This is a personal observation, not just a literature finding.** As a Licensed Practical Nurse working at PAM Health Rehabilitation Hospital of Westminster, I watch this happen on every shift. Patients nod when we go over discharge instructions. They leave with a folder of papers written at a 10th-grade level. Some of them read at a 4th-grade level. Some of them do not read English at all. The gap between what we hand them and what they can use is not a policy failure. It is a product failure.

### Why existing solutions fall short

The EHR vendors have not solved this. Epic's easy-to-read document versions cover 20% of documents and are limited to English and Spanish. Professional medical interpreters are available in hospitals but are not accessible at home after discharge, at midnight when a patient is trying to figure out if their new symptom is a reason to call 911. Google Translate is general-purpose and does not preserve clinical meaning or urgency. No free, patient-facing tool exists that handles the full problem: any document, any language, any reading level, with urgent items surfaced separately so a patient who reads the first three sentences and stops still knows the two things they must do.

---

## SECTION 2 — THE PROCESS

### Step 1 — Discovery and Constraints

**Clinical observation as primary research.** This project did not begin with user interviews. It began with years of bedside nursing. The constraints were known before a line of code was written:

- Patients are often discharged when they are tired, medicated, or in pain. They will not read a long document twice.
- The most dangerous information — return precautions, medication changes, follow-up dates — is buried in paragraph five of a clinical note.
- A patient whose first language is Haitian Creole and whose spouse does not speak English either needs a tool that works at home, days after discharge, without a translator.
- Low health literacy carries stigma. Patients will not ask for help they are embarrassed to need. The tool must not require them to identify as having low literacy.

**Constraint set that shaped every design decision:**

- Input must require zero setup. No account, no login, no intake form. Paste and go.
- Output must surface the most critical information at the top, visually distinct, before the patient reaches the translation body.
- Language translation must be built-in, not a secondary step.
- The tool must be free. Health equity tools paywalled behind subscriptions serve the wrong population.

**Technical constraints identified upfront:**

- PDF parsing must happen server-side to keep the client lightweight and handle large PDFs via pdf-parse with Node.js runtime. Edge runtime was explicitly excluded to prevent parsing failures.
- Voice input via Web Speech API eliminates a third-party dependency for MVP.
- Claude API (claude-sonnet-4-20250514) selected for its structured output reliability and quality of plain-language generation at scale.
- Supabase selected for session persistence without requiring user authentication, enabling shareable URLs with no login barrier.

### Step 2 — Design and Product Iteration

**System prompt engineering as the core product decision.**

The most consequential product work in this build was the Claude system prompt. A general-purpose summarization prompt produces a translation. A carefully constrained clinical prompt produces a translation that a nurse would trust to hand to a patient.

Key system prompt rules iterated through testing:

- Every medical term must be explained in the same sentence, in parentheses. Not at the end of the paragraph — in the same sentence. A patient who stops reading mid-paragraph has still received the explanation.
- Urgent items are returned as a structured array, separate from the translation body. This was a deliberate architectural choice. It means the front end can render urgent items as distinct visual cards before the translation, regardless of where they appeared in the original document. A patient who reads only the urgent cards still knows the two things they must do.
- Attribution language is mandatory. "Your care team says" rather than "you have." This is not stylistic. It prevents the tool from functioning as a diagnostic instrument.
- Translation happens on the plain-language output, not the original clinical text. Translating clinical jargon directly into another language preserves the jargon. The pipeline is: clinical document, plain English, then target language.
- A reverse-check pass runs as a second API call after translation. Claude is prompted to act as a QA auditor comparing the translation against the original for omissions and inaccuracies, returning a structured pass/fail result with itemized flags.

**Design system: Candlelight Clarity.**

OrixLink AI uses the Meridian Oracle palette — obsidian (#080C14), gold (#C8A96E), cream (#F4EFE6) — which signals institutional authority and precision, appropriate for clinical staff and the diagnostic context.

HealthLiteracy AI is patient-facing and required a distinct system. Candlelight Clarity was designed to communicate warmth, safety, and accessibility:

- Background: cream (#F4EFE6) — warm, not clinical white
- Primary: deep forest green (#0F3D34) — calm, trustworthy, not alarming
- Accent: warm amber (#D4882A) — primary actions and urgent indicators
- Typography: Cormorant Garamond for display headings, DM Sans for body, DM Mono for labels and metadata
- WCAG AA contrast compliance throughout
- A continuous ring motion animation in the hero section — calm, rhythmic, not urgent — that establishes the warm-clinical register of the product before any content loads

The urgent flag cards use a warm amber border on a light background rather than clinical red. The intent was to convey importance without triggering the alarm response a red warning card produces. A patient reading about their own health does not need more anxiety. They need clarity.

Both Meridian Oracle and Candlelight Clarity share the same font stack — Cormorant Garamond, DM Sans, DM Mono — which maintains brand coherence across the Rohimaya portfolio while the palette distinguishes the product context.

**Input method decisions.**

Three inputs were built at launch rather than shipping paste-only and adding others later. The population this tool serves skews toward lower device capability and lower typing comfort. Voice input via Web Speech API covers patients who type slowly, patients dictating on a phone, and patients reading a physical paper who want to speak it aloud. PDF upload covers patients whose hospital sent discharge papers as a PDF attachment. All three inputs populate the same textarea, keeping the processing pipeline identical regardless of input method.

**The reading level selector redesign.**

An early iteration used grade-level labels (5th Grade, 8th Grade, College). These were replaced with descriptive labels (Simple, Clear, Complete) because grade levels require meta-cognition — a patient has to assess their own reading ability and select accordingly. Descriptive labels communicate the output quality, not a judgment about the reader. A patient picking Simple is choosing a format, not identifying a deficit.

### Step 3 — What Shipped

**Core product:**
- Three input methods: paste text, upload PDF (server-side extraction via pdf-parse), voice input (Web Speech API)
- Reading level selector: Simple, Clear, Complete
- Twelve-language output: English, Spanish, Haitian Creole, Portuguese, French, Mandarin, Vietnamese, Tagalog, Korean, Arabic, Hindi, Russian
- Urgent item cards rendered above the translation body, surfacing follow-up appointments, medication changes, and return precautions
- Side-by-side view: original clinical document left panel, plain-language translation right panel
- Copy to clipboard and shareable URL generation via Supabase-persisted sessions
- Reverse-check verification: second Claude API call auditing the translation for omissions and inaccuracies, with confidence level and itemized flags
- Hero with continuous ring motion animation communicating calm, warmth, and motion without urgency

**Technical stack:**
- Next.js 15 App Router, TypeScript, Tailwind CSS v4
- Claude API (claude-sonnet-4-20250514) for translation and verification
- Supabase with Row Level Security — public read by ID, public insert, no auth required
- pdf-parse with Node.js runtime (edge runtime explicitly excluded)
- Vercel deployment at literacy.rohimaya.ai

---

## SECTION 3 — OUTCOMES AND IMPACT

### What this demonstrates as a portfolio project

**AI architecture decisions.** The two-call pipeline (translate, then verify) and the structured JSON output design demonstrate understanding of how to constrain LLM behavior for clinical contexts. This is not a chatbot. It is a deterministic document processing pipeline with AI as the processing engine.

**Health equity as a product value, not a feature.** Twelve languages were included at launch rather than starting with English only. Voice input was built at launch rather than deferred. Reading level was made accessible via descriptive labels rather than grade levels. Each of these decisions required explicit prioritization against faster-to-ship alternatives.

**Separation of concerns in prompt engineering.** The system prompt is maintained as a standalone TypeScript module rather than inline in the API route. The verification prompt is a separate system prompt with different constraints. This reflects production-grade thinking about prompt versioning and auditability.

**Design system differentiation across a product family.** Candlelight Clarity and Meridian Oracle share font stack but differ entirely in palette and emotional register. This demonstrates the ability to maintain brand coherence across multiple products while differentiating by audience and use context — a product leadership competency, not just a design one.

**Portfolio breadth signal.** HealthLiteracy AI demonstrates the same AI document-processing pattern as OrixLink applied to a patient-facing context rather than a clinical assessment context. Together they show range within a single domain. ClearChannel by Vestara extends the same architectural thinking outside healthcare entirely.

### Metrics to add once instrumented

- Sessions created
- Most-used language (expected: Spanish)
- Most-used reading level (expected: Simple)
- Verification pass rate — what percentage of translations pass the reverse-check with no flags
- Share URL generation rate — proxy for whether users intend to share with a family member or caregiver

---

## SECTION 4 — SCHOLARLY CITATIONS

1. Kutner, M., Greenberg, E., Jin, Y., & Paulsen, C. (2006). The health literacy of America's adults: Results from the 2003 National Assessment of Adult Literacy. Institute of Education Sciences, NCES 2006-483.

2. U.S. Department of Health and Human Services. (2010). National Action Plan to Improve Health Literacy. Office of Disease Prevention and Health Promotion.

3. Center for Health Care Strategies. (2025). Health Literacy Fact Sheets. chcs.org/resource/health-literacy-fact-sheets

4. Zhong, A., et al. (2021). Readability of patient discharge instructions. Journal of General Internal Medicine, 37(3), 567–572. PMC9130361.

5. Castel, L. et al. (2025). Language and readability barriers in discharge instructions: A call to improve patient aftercare. The American Journal of Medicine. doi:10.1016/j.amjmed.2025.00196

6. Menchine, M., & Baraff, L. (1994). Comprehension of discharge instructions by patients in an urban emergency department. Annals of Emergency Medicine. PubMed 7802373.

7. Agency for Healthcare Research and Quality. (2020). Findings from a study on patient understanding of after-hospital care instructions and 30-day readmission rates. AHRQ Publication.

8. Berkman, N. D., et al. (2011). Low health literacy and health outcomes: An updated systematic review. Annals of Internal Medicine, 155(2), 97–107.

9. Woods, N. K. (2023). Health literacy, health outcomes and equity: A trend analysis based on a population survey. Journal of Primary Care and Community Health, 14. PMC10071098.

---

## SECTION 5 — PORTFOLIO PAGE COPY (READY TO DROP IN)

### Status badge
Live

### Role and timeline
Product and Conversation Design · 2025 — Present

### Key outcome
Twelve-language translation with AI verification, three reading levels, and shareable sessions

### Card summary (scan-friendly, for project grid)
Patient document translation. Twelve languages, three reading levels. Urgent items surfaced first.

### Project description (short, for card view)
HealthLiteracy AI translates discharge summaries, lab results, and clinical notes into plain language a patient can actually use. Paste, upload a PDF, or speak. Choose Simple, Clear, or Complete. Twelve languages. Urgent action items surfaced as visual cards before the translation body.

### Problem statement (for case study hero)
88% of Americans have less-than-proficient health literacy. The average discharge summary is written at a 9th or 10th grade reading level. The average patient reads at an 8th grade level at best — often lower — and may not read English at home. Patients who understand their discharge instructions are 30% less likely to be readmitted. That gap is a product problem.

### Process Step 1 — Discovery
I did not need to conduct user research for this project. I have conducted it for 15 years on every shift. The constraints were clear before the first line of code: no login, no setup, urgent items at the top, built-in translation in the languages my actual patients speak. The tool had to serve patients who might be scared, tired, medicated, or not literate in English — all at once.

### Process Step 2 — Design and Build
The core product decision was the Claude system prompt. Translation is easy. A translation that a nurse would trust to hand to a patient requires specific constraints: every medical term explained in the same sentence, urgent items returned as a structured array separate from the translation body, attribution language that prevents the tool from being read as a diagnosis, and a verification pass that checks its own work for omissions. Twelve languages and voice input were built at launch, not deferred, because the population this serves is not well-served by English-only MVP thinking.

### Process Step 3 — What shipped
A free, no-login patient document translation tool with three input methods, twelve languages, three reading levels, urgent item cards, side-by-side view, copy and share, and a built-in AI verification pass that checks the translation against the original for omissions. Deployed on Vercel at literacy.rohimaya.ai, sessions persisted in Supabase, built on Next.js 15 and the Claude API.

### Impact line
If someone cannot read or act on discharge instructions, the care plan never really starts. HealthLiteracy is built so plain language, reading level, language, and urgent items are part of the product, not an afterthought.

---

*Case study documentation updated March 2026.*
*Hannah Kraulik Pagade, Pagade Ventures / Rohimaya Health AI.*