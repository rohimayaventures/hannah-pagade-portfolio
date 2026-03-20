# HealthLiteracy AI — Portfolio Case Study Documentation
# Hannah Kraulik Pagade | Rohimaya Health AI
# For use in portfolio at hannah-pagade-portfolio.vercel.app

---

## PROJECT METADATA

**Project name:** HealthLiteracy AI
**Tagline:** Your medical records, in your language.
**Status:** Live
**URL:** healthliteracy.vercel.app
**Repo:** github.com/rohimayaventures/healthliteracy-ai
**Tags:** HEALTH-EQUITY · AI-PRODUCT · FULL-STACK · PATIENT-FACING

---

## SECTION 1 — THE PROBLEM

### One-sentence framing (hero copy)

Clinical documentation is written for providers. Patients are handed the same documents at discharge, often scared, sometimes in pain, frequently in a language they do not read fluently, and expected to manage their own care from them.

### The data

**88% of American adults have less-than-proficient health literacy.** Only 12% of U.S. adults meet the threshold for proficient health literacy, according to the U.S. Department of Health and Human Services. This is not a fringe population. It is nearly everyone.

**Discharge instructions are written at the wrong level — consistently.** The American Medical Association, the Department of Health and Human Services, and the National Institutes of Health all recommend patient-facing materials be written at or below a sixth-grade reading level. Research published in the Journal of General Internal Medicine found that 88.7% of discharge instructions analyzed were inaccessible to the patients they were intended for, with a mean Flesch-Kincaid grade level of 9.1, indicating 10th to 12th grade readability. Only 11.3% of instructions fell within recommended guidelines.

**Most patients are not given materials in their language.** A 2025 study in the American Journal of Medicine examined 1,511 Epic discharge documents — the most widely used EHR system in the United States — and found that easy-to-read versions existed for only one in five documents, and were available almost exclusively in English and Spanish. Nearly 13% of Americans are Spanish speakers, and 44% of Hispanic and Latino adults read at a below-basic English level compared with 15% of non-Hispanic counterparts.

**Comprehension gaps lead directly to worse outcomes.** Research shows that at least 78% of patients discharged from the emergency department exhibit comprehension deficits for at least one component of their discharge instructions. Patients who clearly understand their after-hospital care instructions are 30% less likely to be readmitted or return to the ED, according to research funded by the Agency for Healthcare Research and Quality. Low health literacy is associated with more hospitalizations, greater emergency care use, reduced adherence to medication instructions, and higher mortality rates in elderly populations.

**This is a personal observation, not just a literature finding.** As a Licensed Practical Nurse working at PAM Health Rehabilitation Hospital of Westminster, I watch this happen on every shift. Patients nod when we go over discharge instructions. They leave with a folder of papers written at a 10th-grade level. Some of them read at a 4th-grade level. Some of them do not read English at all. The gap between what we hand them and what they can use is not a policy failure. It is a product failure.

### Why existing solutions fall short

The EHR vendors have not solved this. Epic's easy-to-read document versions cover 20% of documents and are limited to English and Spanish. Professional medical interpreters are available in hospitals but are not accessible at home after discharge, at midnight when a patient is trying to figure out if their new symptom is a reason to call 911. Google Translate is general-purpose and does not preserve clinical meaning or urgency. No free, patient-facing tool exists that handles the full problem: any document, any language, any reading level, with urgent items surfaced separately so a patient who reads the first three sentences and stops still knows to call their doctor tomorrow.

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

- PDF parsing must happen server-side to keep the client lightweight and handle large scanned-adjacent PDFs
- Voice input via Web Speech API eliminates a third-party dependency for MVP
- Claude API (claude-sonnet-4-20250514) selected for its structured output reliability and quality of plain-language generation at scale
- Supabase selected for session persistence without requiring user authentication, enabling shareable URLs with no login barrier

### Step 2 — Design and Product Iteration

**System prompt engineering as the core product decision.**

The most consequential product work in this build was the Claude system prompt. A general-purpose summarization prompt produces a translation. A carefully constrained clinical prompt produces a translation that a nurse would trust.

Key system prompt rules that were iterated through testing:

- Every medical term must be explained in the same sentence, in parentheses. Not at the end of the paragraph. In the same sentence. A patient who stops reading mid-paragraph has still received the explanation.
- Urgent items are returned as a structured array, separate from the translation body. This was a deliberate architectural choice. It means the front end can render urgent items as distinct visual cards before the translation, regardless of where they appeared in the original document. A patient who reads only the urgent cards still knows the two things they must do.
- Attribution language is mandatory. "Your care team says" rather than "you have." This is not stylistic. It prevents the tool from functioning as a diagnostic instrument.
- Translation happens on the plain-language output, not the original clinical text. Translating clinical jargon directly into another language preserves the jargon. The pipeline is: clinical document, plain English, target language.
- A reverse-check pass runs as a second API call after translation. Claude is prompted to act as a QA auditor comparing the translation against the original for omissions and inaccuracies, returning a structured pass/fail result with itemized flags.

**Design system: Candlelight Clarity.**

OrixLink AI (the clinical-staff-facing product in the Rohimaya portfolio) uses the Meridian Oracle palette: obsidian, gold, cream. That palette signals institutional authority and precision, appropriate for clinical staff.

HealthLiteracy AI is patient-facing and needed a distinct system. Candlelight Clarity was designed to communicate warmth, safety, and accessibility:

- Background: #FAFAF8 (warm off-white, not clinical white)
- Primary: #2C7A6E (forest teal, calm and trustworthy)
- Accent: #C2662B (warm terracotta, for primary actions and urgent indicators)
- Typography: Cormorant Garamond for display headings (familiar, editorial warmth), DM Sans for body (highly legible at all sizes), DM Mono for labels and metadata (clinical precision without harshness)
- WCAG AA contrast compliance throughout

The urgent flag cards use a warm terracotta border on a light background rather than clinical red. The intent was to convey importance without triggering the alarm response that a red warning card produces. A patient reading about their own health does not need more anxiety. They need clarity.

**Input method decisions.**

Three inputs were built at launch rather than shipping paste-only and adding others later. The rationale: the population this tool serves skews toward lower device capability and lower typing comfort. Voice input via Web Speech API covers patients who type slowly, patients dictating on a phone, and patients reading a physical paper who want to speak it aloud. PDF upload covers patients whose hospital sent discharge papers as a PDF attachment. All three inputs populate the same textarea, keeping the processing pipeline identical regardless of input method.

**The reading level selector redesign.**

An early iteration used grade-level labels (5th Grade, 8th Grade, College). These were replaced with descriptive labels (Simple, Clear, Complete) because grade levels require meta-cognition: a patient has to assess their own reading ability and select accordingly. Descriptive labels communicate the output quality, not a judgment about the reader. A patient picking "Simple" is choosing a format, not identifying a deficit.

### Step 3 — What Shipped

**Core product:**
- Three input methods: paste text, upload PDF (server-side extraction via pdf-parse), voice input (Web Speech API)
- Reading level selector: Simple, Clear, Complete
- Eight-language output: English, Spanish, Haitian Creole, Portuguese, French, Mandarin, Vietnamese, Tagalog
- Urgent item cards rendered above the translation body, surfacing follow-up appointments, medication changes, and return precautions
- Side-by-side view: original clinical document left panel, plain-language translation right panel
- Copy to clipboard and shareable URL generation via Supabase-persisted sessions
- Reverse-check verification: second Claude API call auditing the translation for omissions and inaccuracies, with confidence level and itemized flags

**Technical stack shipped:**
- Next.js 15 App Router, TypeScript, Tailwind CSS v4
- Claude API (claude-sonnet-4-20250514) for translation and verification
- Supabase for session persistence and share URL storage with Row Level Security (public read by ID, public insert, no auth required)
- pdf-parse with Node.js runtime (edge runtime explicitly excluded to prevent parsing failure)
- Vercel deployment

---

## SECTION 3 — OUTCOMES AND IMPACT

### What this demonstrates as a portfolio project

**AI architecture decisions.** The two-call pipeline (translate, then verify) and the structured JSON output design demonstrate understanding of how to constrain LLM behavior for clinical contexts. This is not a chatbot. It is a deterministic document processing pipeline with AI as the processing engine.

**Health equity as a product value, not a feature.** Eight languages were included at launch rather than starting with English only. Voice input was built at launch rather than deferred. Reading level was made accessible via descriptive labels rather than grade levels. Each of these decisions required explicit prioritization against faster-to-ship alternatives.

**Separation of concerns in prompt engineering.** The system prompt is maintained as a standalone TypeScript module (lib/system-prompt.ts) rather than inline in the API route. The verification prompt is a separate system prompt with different constraints. This reflects production-grade thinking about prompt versioning and auditability.

**Portfolio breadth signal.** HealthLiteracy AI demonstrates the same AI document-processing pattern as OrixLink AI applied to a patient-facing context rather than a clinical-staff context. Together they show range within a single domain. The subsequent portfolio projects (Onboarding Agent, FinanceLens AI) will show the same pattern applied outside healthcare entirely.

### Metrics that matter (to add once live)

- Sessions created
- Most-used language (expected: Spanish)
- Most-used reading level (expected: Simple)
- Verification pass rate (what percentage of translations pass the reverse-check with no flags)
- Share URL generation rate (proxy for whether users intend to share with a family member or caregiver)

---

## SECTION 4 — SCHOLARLY CITATIONS

All citations are peer-reviewed or from federal health agencies. For use in portfolio case study footnotes, README, or press materials.

1. Kutner, M., Greenberg, E., Jin, Y., & Paulsen, C. (2006). The health literacy of America's adults: Results from the 2003 National Assessment of Adult Literacy. Institute of Education Sciences, National Center for Education Statistics. NCES 2006-483.

2. U.S. Department of Health and Human Services. (2010). National Action Plan to Improve Health Literacy. Office of Disease Prevention and Health Promotion.

3. Center for Health Care Strategies. (2025). Health Literacy Fact Sheets. chcs.org/resource/health-literacy-fact-sheets

4. McDonald, M., & Shenkman, L. J. Health literacy and health outcomes of adults in the United States. International Journal of Allied Health Sciences and Practice, 16(4). Nova Southeastern University.

5. Yin, H. S., et al. (2019). Assessment of readability, understandability, and completeness of pediatric hospital medicine discharge instructions. Hospital Pediatrics, 9(1). PMC6327837.

6. Zhong, A., et al. (2021). Readability of patient discharge instructions. Journal of General Internal Medicine, 37(3), 567–572. PMC9130361. doi:10.1007/s11606-021-06988-y

7. Castel, L. et al. (2025). Language and readability barriers in discharge instructions: A call to improve patient aftercare. The American Journal of Medicine. doi:10.1016/j.amjmed.2025.00196

8. Menchine, M., & Baraff, L. (1994). Comprehension of discharge instructions by patients in an urban emergency department. Annals of Emergency Medicine. PubMed 7802373.

9. Kessels, R. P. (2003). Patients' memory for medical information. Journal of the Royal Society of Medicine, 96(5), 219–222. PMC539473.

10. Agency for Healthcare Research and Quality. (2020). Findings from a study on patient understanding of after-hospital care instructions and 30-day readmission rates. AHRQ Publication.

11. Berkman, N. D., et al. (2011). Low health literacy and health outcomes: An updated systematic review. Annals of Internal Medicine, 155(2), 97–107.

12. Woods, N. K. (2023). Health literacy, health outcomes and equity: A trend analysis based on a population survey. Journal of Primary Care and Community Health, 14. PMC10071098. doi:10.1177/21501319231156132

13. ThoroughCare. (2024). What is health literacy and why is it important to patient outcomes? thoroughcare.net/blog/health-literacy-important-patient-outcomes

---

## SECTION 5 — PORTFOLIO PAGE COPY (READY TO DROP IN)

### Status badge
Live

### Project description (short, for card view)
HealthLiteracy AI translates discharge summaries, lab results, and clinical notes into plain language a patient can actually use. Paste, upload a PDF, or speak. Choose Simple, Clear, or Complete. Eight languages. Urgent action items surfaced as visual cards before the translation body.

### Problem statement (for case study hero)
88% of Americans have less-than-proficient health literacy. The average discharge summary is written at a 9th or 10th grade reading level. The average patient reads at an 8th grade level at best — often lower — and may not read English at home. Patients who understand their discharge instructions are 30% less likely to be readmitted. That gap is a product problem.

### Process Step 1 — Discovery
I did not need to conduct user research for this project. I have conducted it for 15 years on every shift. The constraints were clear before the first line of code: no login, no setup, urgent items at the top, built-in translation in the languages my actual patients speak. The tool had to serve patients who might be scared, tired, medicated, or not literate in English — all at once.

### Process Step 2 — Design and Build
The core product decision was the Claude system prompt. Translation is easy. A translation that a nurse would trust to hand to a patient requires specific constraints: every medical term explained in the same sentence, urgent items returned as a structured array separate from the translation body, attribution language that prevents the tool from being read as a diagnosis, and a verification pass that checks its own work for omissions. The eight-language requirement and voice input were built at launch, not deferred, because the population this serves is not well-served by English-only MVP thinking.

### Process Step 3 — What shipped
A free, no-login patient document translation tool with three input methods, eight languages, three reading levels, urgent item cards, side-by-side view, copy and share, and a built-in AI verification pass that checks the translation against the original for omissions. Deployed on Vercel, sessions persisted in Supabase, built on Next.js 15 and the Claude API.

### Impact line (closing statement)
This project exists because discharge instructions written at a 12th-grade reading level do not help a patient who reads at a 5th-grade level, speaks Haitian Creole at home, and is scared. That gap is preventable with a two-second API call. The research agrees.

---

*Case study documentation prepared March 2026.*
*Hannah Kraulik Pagade, Pagade Ventures / Rohimaya Health AI.*
