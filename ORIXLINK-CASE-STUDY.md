# OrixLink AI — Portfolio Case Study Documentation
# Hannah Kraulik Pagade | Rohimaya Health AI
# For use in portfolio at hannah-pagade-portfolio.vercel.app

---

## PROJECT METADATA

**Project name:** OrixLink AI
**Tagline:** Where every symptom finds its answer.
**Status:** Live
**URL:** orixlink.vercel.app
**Repo:** github.com/rohimayaventures/orixlink
**Tags:** CLINICAL-AI · PRODUCT-DESIGN · FULL-STACK

---

## SECTION 1 — THE PROBLEM

### One-sentence framing (hero copy)

Diagnostic errors affect at least 12 million Americans every year. Most happen not because clinicians lack knowledge, but because the current intake process gives them no structured way to connect a patient's full symptom picture to a working differential before the encounter even begins.

### The data

**Diagnostic errors are the most costly and most invisible category of medical error.** The U.S. healthcare system estimates at least 12 million Americans experience a diagnostic error in outpatient settings each year, according to research published in BMJ Quality and Safety. The National Academy of Medicine has concluded that most people will experience a diagnostic error in their lifetime. Costs to the U.S. healthcare system from diagnostic errors may exceed $100 billion per year.

**The consequences are severe.** Diagnosis-related allegations account for the highest proportion of total malpractice payment in the United States at 32.9%, with a total payout of $28.7 billion between 1999 and 2018. Among diagnosis-related malpractice outcomes, 38.9% resulted in death and 36% in disability. A 2024 BMJ Quality and Safety study found that harmful diagnostic errors may occur in as many as 1 in every 14 hospital patients receiving general medical care, with 85% of those errors assessed as likely preventable.

**Triage is where errors begin.** Research published in JAMA Network Open found that undertriage in the emergency department is associated with meaningfully delayed care for high-acuity conditions: patients with aortic dissection who were undertriaged waited an average of 8.9 minutes longer for CT imaging and 33.3 minutes longer for critical medications. For subarachnoid hemorrhage, undertriage delayed CT orders by 2.4 minutes and medication orders by 17.6 minutes. In time-sensitive emergencies, these delays are not administrative inconveniences. They are the difference between survival and disability.

**The symptom-to-diagnosis pathway is fragile outside hospital settings.** Diagnostic error rates across 15 serious conditions had a median of 13.6%, ranging from 2.2% for myocardial infarction to 62.1% for spinal abscess, according to Johns Hopkins researchers analyzing 28 studies representing over 91,000 patients. The conditions with the highest diagnostic error rates are also among the least obvious at initial presentation, which is precisely the context where a structured, AI-assisted triage and differential tool has the most value.

**AI shows clinical-grade diagnostic promise.** Research published in The Lancet Digital Health found that a general-purpose AI language model performed diagnostic tasks at levels comparable to physicians and significantly better than lay individuals, though triage performance remained inferior to physicians. The implication is clear: properly constrained AI in a clinical support context is a viable tool for improving the front end of the diagnostic process, particularly for patients and caregivers navigating symptoms without immediate access to a clinician.

**This is a personal observation.** As a Licensed Practical Nurse at PAM Health Rehabilitation Hospital of Westminster, I work with patients every shift who arrived at their current level of care because something was missed or delayed upstream. A patient presenting with nonspecific complaints at an urgent care clinic that does not have a structured way to think through a differential is a patient at risk. OrixLink AI exists to change that front-end encounter.

### Why existing solutions fall short

General-purpose symptom checkers exist but perform inconsistently, particularly for urgent conditions. Research on a leading AI symptom checker used directly by ED patients found that while it could produce reasonable diagnostic suggestions, its triage performance was inferior to emergency physicians. None of the major EHR-integrated tools are available to patients or caregivers before they reach a clinical setting. No free, universal tool exists that accepts any symptom, from any person, regardless of whether they have a prior diagnosis, and returns a structured clinical differential with triage guidance, urgency flags, and plain-language reasoning — without requiring a login, an appointment, or an existing patient record.

---

## SECTION 2 — THE PROCESS

### Step 1 — Discovery and Constraints

**The constraint that shaped everything: no prior diagnosis required.**

Every existing triage and diagnostic support tool assumes prior context. EHR decision support tools assume a patient record. Symptom checkers assume the user knows enough to select from a list. Chatbot-based tools drift toward generalist health information rather than clinical reasoning.

OrixLink AI was designed with a single non-negotiable constraint: any symptom, any person, no prior diagnosis required. That constraint eliminates the patient record as a dependency and puts the entire diagnostic intelligence burden on the AI layer.

**Additional constraints identified in discovery:**

- The tool must reason like a clinician, not like a search engine. Output must be structured: differential diagnosis, urgency level, recommended care pathway, and plain-language explanation.
- Urgency must be surfaced unambiguously. A patient or caregiver reading the output needs to know immediately whether this is a "call your doctor Monday" situation or a "go to the ER now" situation.
- The interface must not feel like a form. Clinical intake forms create cognitive friction and produce incomplete data. The input should feel like describing symptoms to a nurse.
- The design system must signal clinical authority without feeling cold. Clinicians and patients occupy the same interface. The aesthetic needs to work for both.

**The Meridian Oracle design system was built as part of this constraint.**

OrixLink required a visual language that communicated precision, authority, and trust at clinical scale. The result was the Meridian Oracle palette: obsidian (#0A0A0A), gold (#C9A84C), and cream (#F5F0E8), with Cormorant Garamond for display headings, DM Sans for body copy, and DM Mono for data labels and metadata. This palette has since become the foundation for the broader Rohimaya Health AI brand family.

### Step 2 — Design and Build

**System prompt engineering as clinical product design.**

The core of OrixLink AI is not the UI. It is the Claude system prompt. Designing a prompt that produces a reliable, structured clinical differential from a free-text symptom description required iterating on several specific constraints:

- The model must return a structured differential, not a prose paragraph. Each condition in the differential must include: condition name, probability reasoning, key distinguishing symptoms, and recommended next step.
- Urgency must be returned as a discrete field, not buried in prose. The front end renders urgency as a distinct visual element so it cannot be missed.
- The model must never diagnose. It must reason through differentials and recommend care pathways. The language throughout is "this may be consistent with" rather than "you have."
- Red flag symptoms must be explicitly flagged. If the symptom profile includes features associated with time-sensitive emergencies (chest pain with radiation, worst headache of life, sudden onset neurological symptoms), those flags must appear at the top of the output regardless of the overall differential.
- The model must explain its reasoning in plain language alongside the clinical reasoning. A nurse reviewing the output and a patient reviewing the same output must both find it useful.

**The Meridian Oracle design applied to three distinct pages.**

OrixLink AI ships with three pages, each serving a distinct user need:

- **Assessment page:** The primary interface. Free-text symptom input with optional structured fields (age, sex, known conditions). Output renders as a structured differential with urgency indicator, red flag section, care pathway recommendation, and plain-language summary.
- **Conditions reference:** A searchable library of conditions with plain-language descriptions, typical presentations, and when-to-seek-care guidance. Populated by Claude API on demand.
- **About page:** Brand and mission context, linking to Rohimaya Health AI.

The Meridian Oracle system was applied consistently across all three pages in March 2026, establishing visual coherence across the product.

**Technical architecture decisions.**

The stack was chosen to match OrixLink's requirements for fast iteration, serverless scale, and zero infrastructure overhead:

- Next.js 16 App Router for the front end and API routes
- TypeScript for type safety across the client-server boundary
- Tailwind CSS v4 for styling with the Meridian Oracle tokens
- Claude API (claude-sonnet-4-20250514) for all AI inference
- Supabase for session storage and planned assessment history
- Vercel for deployment with automatic preview environments

**Claude API over fine-tuned models — a deliberate product decision.**

OrixLink AI does not use a fine-tuned or domain-specific medical model. It uses the Claude API with a carefully engineered system prompt. This is a product decision, not a shortcut. Fine-tuned models require labeled clinical training data, infrastructure for model hosting, and ongoing retraining as clinical guidelines evolve. A well-constrained general-purpose model with a production-grade system prompt can achieve clinical-grade output quality while remaining maintainable by a single-engineer team. The system prompt is the product IP.

### Step 3 — What Shipped

**Live at launch:**
- Universal symptom assessment: any symptom, any person, no prior diagnosis required
- Structured differential diagnosis output with probability reasoning per condition
- Urgency indicator: self-monitor, see a doctor soon, urgent care today, emergency room now
- Red flag detection: symptoms consistent with time-sensitive emergencies flagged at the top of output, separate from the differential
- Plain-language summary alongside clinical reasoning
- Care pathway recommendation per differential item
- Meridian Oracle design system applied across all three pages
- Supabase session storage (share and save planned)

**Next development priorities (as of March 2026):**
- Share Assessment button with Supabase-persisted session URL
- Session history for returning users

---

## SECTION 3 — OUTCOMES AND IMPACT

### What this demonstrates as a portfolio project

**Production-grade prompt engineering for clinical AI.** The OrixLink system prompt is the most technically demanding prompt engineering work in the Rohimaya portfolio. It must produce structured output, enforce clinical attribution language, surface urgency discretely, and handle the full range of symptom presentations from benign to life-threatening without hallucinating diagnoses or missing red flags. That is a different problem than summarization or translation, and it requires a different level of constraint design.

**Universal scope as a product decision.** "Any symptom, any person, no prior diagnosis required" is a positioning choice that most clinical AI products explicitly avoid. Existing tools narrow their scope to reduce liability and engineering complexity. OrixLink accepts the full scope and manages it through prompt constraint rather than feature limitation. That is a more ambitious product bet and a stronger portfolio signal.

**Design systems thinking at brand scale.** Meridian Oracle was not designed for OrixLink alone. It was designed as the foundation for the Rohimaya Health AI brand family, with patient-facing products (HealthLiteracy AI) using a distinct but related system (Candlelight Clarity). The ability to maintain visual coherence across multiple products while differentiating by audience is a Head of Product competency, not just a design competency.

**Clinical knowledge as a product constraint.** OrixLink was built by someone who has worked clinical floors for 15 years. The red flag logic, the urgency taxonomy, the care pathway recommendations, and the attribution language all reflect real clinical knowledge. That is not replicable by a product manager without clinical experience, and it shows in the output quality.

### Metrics to add once instrumented

- Assessments run per day
- Most common presenting symptom clusters
- Urgency distribution (what percentage of assessments return each urgency tier)
- Red flag trigger rate
- Session-to-share conversion (once share feature ships)

---

## SECTION 4 — SCHOLARLY CITATIONS

All citations are peer-reviewed or from federal health agencies and major medical institutions.

1. Singh, H., Meyer, A. N., & Thomas, E. J. (2014). The frequency of diagnostic errors in outpatient care: Estimations from three large observational studies involving US adult populations. BMJ Quality and Safety, 23(9), 727–731. PMC4145460.

2. National Academy of Medicine. (2015). Improving Diagnosis in Health Care. Committee on Diagnostic Error in Health Care. The National Academies Press. doi:10.17226/21794.

3. Newman-Toker, D. E., et al. (2021). Rate of diagnostic errors and serious misdiagnosis-related harms for major vascular events, infections, and cancers: Toward a national incidence estimate using the "Big Three." Diagnosis, 8(1), 67–84. PubMed 32412440. doi:10.1515/dx-2019-0104.

4. Gunderson, C. G., et al. (2020). Prevalence of harmful diagnostic errors in hospitalised adults: A systematic review and meta-analysis. BMJ Quality and Safety, 29(12), 1008–1018.

5. BMJ Group. (2024). Harmful diagnostic errors may occur in 1 in every 14 general medical hospital patients. BMJ Quality and Safety. bmjgroup.com.

6. Patient Safety Journal. (2024). Characteristics and trends of medical diagnostic errors in the United States. Patient Safety, 6(4). patientsafetyj.com/article/123603.

7. Sax, D. R., et al. (2025). Emergency department triage accuracy and delays in care for high-risk conditions. JAMA Network Open. PMC12048854. doi:10.1001/jamanetworkopen.

8. Suamchaiyaphum, K., Jones, A. R., & Markaki, A. (2024). Triage accuracy of emergency nurses: An evidence-based review. Journal of Emergency Nursing, 50(1), 44–54. PubMed 37930287. doi:10.1016/j.jen.2023.10.001.

9. Tipping, M. D., et al. (2025). Development and internal validation of an AI-based emergency triage model for predicting critical outcomes in the emergency department. Scientific Reports. doi:10.1038/s41598-025-17180-1.

10. Levine, D. M., et al. (2024). The diagnostic and triage accuracy of the GPT-3 artificial intelligence model: An observational study. The Lancet Digital Health, 6(10). doi:10.1016/S2589-7500(24)00097-9.

11. PSNet, AHRQ. Diagnostic errors. Agency for Healthcare Research and Quality Patient Safety Network. psnet.ahrq.gov/primer/diagnostic-errors.

12. Singh, H., et al. (2013). Types and origins of diagnostic errors in primary care settings. JAMA Internal Medicine, 173(6), 418–425.

---

## SECTION 5 — PORTFOLIO PAGE COPY (READY TO DROP IN)

### Status badge
Live

### Project description (short, for card view)
OrixLink AI accepts any symptom from any person and returns a structured clinical differential with urgency triage, red flag detection, care pathway recommendations, and plain-language reasoning. No login. No prior diagnosis required. Built on Next.js 16 and the Claude API under Rohimaya Health AI.

### Problem statement (for case study hero)
At least 12 million Americans experience a diagnostic error in outpatient settings each year. Most are preventable. Most begin at the front end of the clinical encounter, before a physician is involved, when a patient with an undifferentiated symptom presentation has no structured tool to help them or their care team reason through what might be happening. OrixLink AI is that tool.

### Process Step 1 — Discovery
The single non-negotiable constraint that shaped everything: any symptom, any person, no prior diagnosis required. Every existing triage tool narrows its scope to reduce complexity. OrixLink accepts the full scope and manages it through prompt engineering rather than feature limitation. The clinical logic — red flag taxonomy, urgency tiers, care pathway language — came directly from 15 years of bedside nursing, not from a product spec.

### Process Step 2 — Design and Build
The core product work was the Claude system prompt. Building a prompt that produces a reliable, structured clinical differential from free-text symptom input, enforces attribution language, surfaces urgency as a discrete field, and detects red flag presentations without hallucinating diagnoses required iterating through dozens of constraint combinations. The Meridian Oracle design system (obsidian, gold, cream) was built alongside the product as the visual language for the Rohimaya Health AI brand family, designed to signal clinical authority to both clinicians and patients.

### Process Step 3 — What shipped
A live, free, universal triage and diagnosis tool with structured differential output, discrete urgency tiers, red flag detection, care pathway recommendations, and plain-language reasoning alongside clinical reasoning. Deployed on Vercel, built on Next.js 16, TypeScript, Tailwind CSS v4, Claude API, and Supabase.

### Impact line (closing statement)
OrixLink AI is positioned at the highest-risk moment in the diagnostic process: before the physician encounter, when a patient or caregiver is trying to decide whether this is an emergency or something that can wait until Monday. Getting that decision wrong costs lives. The research agrees, and so does everyone who has worked a clinical floor.

---

*Case study documentation prepared March 2026.*
*Hannah Kraulik Pagade, Pagade Ventures / Rohimaya Health AI.*
