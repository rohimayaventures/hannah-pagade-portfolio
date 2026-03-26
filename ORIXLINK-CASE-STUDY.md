# OrixLink AI — Portfolio Case Study Documentation
# Hannah Kraulik Pagade | Rohimaya Health AI
# For use in portfolio at hannahkraulikpagade.com

---

## PROJECT METADATA

**Project name:** OrixLink AI
**Tagline:** Where every symptom finds its answer.
**Status:** Live
**Primary URL:** triage.rohimaya.ai
**Vercel URL:** orixlink.vercel.app
**Repo:** github.com/rohimayaventures/orixlink
**Design process page:** hannahkraulikpagade.com/work/orixlink-ai/process
**Tags:** CLINICAL-AI · CONVERSATIONAL · FULL-STACK
**Role:** Conversation UX Lead and Prompt Architect
**Timeline:** 2025 — Present
**Stack:** Next.js 16 · TypeScript · Tailwind CSS v4 · Claude API · Supabase · Vercel

---

## SECTION 1 — THE PROBLEM

### One-sentence framing

Diagnostic errors affect at least 12 million Americans every year. Most happen not because clinicians lack knowledge, but because the current intake process gives them no structured way to connect a patient's full symptom picture to a working differential before the encounter even begins.

### The data

**Diagnostic errors are the most costly and most invisible category of medical error.** The U.S. healthcare system estimates at least 12 million Americans experience a diagnostic error in outpatient settings each year, according to research published in BMJ Quality and Safety. The National Academy of Medicine has concluded that most people will experience a diagnostic error in their lifetime. Costs to the U.S. healthcare system from diagnostic errors may exceed $100 billion per year.

**The consequences are severe.** Diagnosis-related allegations account for the highest proportion of total malpractice payment in the United States at 32.9%, with a total payout of $28.7 billion between 1999 and 2018. Among diagnosis-related malpractice outcomes, 38.9% resulted in death and 36% in disability.

**Triage is where errors begin.** Research published in JAMA Network Open found that undertriage in the emergency department is associated with meaningfully delayed care for high-acuity conditions: patients with aortic dissection who were undertriaged waited an average of 8.9 minutes longer for CT imaging and 33.3 minutes longer for critical medications. In time-sensitive emergencies, these delays are not administrative inconveniences. They are the difference between survival and disability.

**The symptom-to-diagnosis pathway is fragile outside hospital settings.** Diagnostic error rates across 15 serious conditions had a median of 13.6%, ranging from 2.2% for myocardial infarction to 62.1% for spinal abscess. The conditions with the highest diagnostic error rates are also among the least obvious at initial presentation — precisely the context where a structured, AI-assisted triage and differential tool has the most value.

**AI shows clinical-grade diagnostic promise.** Research published in The Lancet Digital Health found that a general-purpose AI language model performed diagnostic tasks at levels comparable to physicians and significantly better than lay individuals. Properly constrained AI in a clinical support context is a viable tool for improving the front end of the diagnostic process, particularly for patients and caregivers navigating symptoms without immediate access to a clinician.

**This is a personal observation.** As a Licensed Practical Nurse at PAM Health Rehabilitation Hospital of Westminster, I work with patients every shift who arrived at their current level of care because something was missed or delayed upstream. OrixLink AI exists to change that front-end encounter.

### Why existing solutions fall short

General-purpose symptom checkers exist but perform inconsistently, particularly for urgent conditions. None of the major EHR-integrated tools are available to patients or caregivers before they reach a clinical setting. No free, universal tool exists that accepts any symptom, from any person, regardless of whether they have a prior diagnosis, and returns a structured clinical differential with triage guidance, urgency flags, and plain-language reasoning — without requiring a login, an appointment, or an existing patient record.

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
- Trust must be established before any clinical content is shown. A medical disclaimer overlay fires on first visit — not buried in a footer, but as the first interaction.

**The Meridian Oracle design system was built as part of this constraint.**

OrixLink required a visual language that communicated precision, authority, and trust at clinical scale. The result was the Meridian Oracle palette: obsidian (#080C14), gold (#C8A96E), and cream (#F4EFE6), with Cormorant Garamond for display headings, DM Sans for body copy, and DM Mono for data labels and metadata. This palette has since become the foundation for the broader Rohimaya Health AI brand family, applied across all three pages in a full visual redesign after the core product shipped.

### Step 2 — Design and Build

**System prompt engineering as clinical product design.**

The core of OrixLink AI is not the UI. It is the Claude system prompt. Designing a prompt that produces a reliable, structured clinical differential from a free-text symptom description required iterating on several specific constraints:

- The model must return a structured differential, not a prose paragraph. Each condition in the differential must include: condition name, probability reasoning, key distinguishing symptoms, and recommended next step.
- Urgency must be returned as a discrete field, not buried in prose. The front end renders urgency as a distinct visual element so it cannot be missed.
- The model must never diagnose. It must reason through differentials and recommend care pathways. The language throughout is "this may be consistent with" rather than "you have."
- Red flag symptoms must be explicitly flagged. If the symptom profile includes features associated with time-sensitive emergencies, those flags must appear at the top of the output regardless of the overall differential.
- The model must explain its reasoning in plain language alongside the clinical reasoning.

**Role-adaptive output across three user modes.**

OrixLink adapts its output based on who is asking. Patient mode returns plain-language output at a 6th-grade reading level with no clinical abbreviations. Family mode adds care coordination language. Clinician mode returns SBAR-formatted output with clinical terminology, ICD-10 context, and lab and imaging considerations. The same symptom input produces structurally different outputs across modes.

**The refusal protocol — the most iterated prompt layer.**

When a patient declines the recommended care pathway, the system shifts from recommendation framing to consequence framing without repeating the recommendation. Specific hours-to-harm timelines for the top differential diagnosis are surfaced. If refusal persists across two consecutive turns, the system moves to direct 911 instruction. This layer went through 11 prompt iterations before the compartment syndrome validation scenario passed.

**Three pages, each with a distinct purpose.**

OrixLink ships with three routes:

- `/` — Landing page with trust signals, clear product framing, and a prominent disclaimer before any clinical content
- `/assessment` — Three-step intake: role selection, situation framing (8 categories), and free-text symptom input. Simplified from 7 intake steps to 3 through iterative research.
- `/assessment/results` — Structured output with urgency banner, ranked differential cards, red flag tracker, care pathway, and the living conversation thread

**Architecture decisions:**

- Claude API route at `/api/assess`. Full conversation history appended to every call — not summarized, not truncated. Assessment continuity is architectural.
- Follow-up chips appear as first-person symptom statements the user taps to add, not questions Claude asks. Each addition re-sends the full history and Claude updates the assessment in place.
- Supabase connected with sessions and messages tables. Share feature in progress — generates a UUID-based link so a user can share their assessment with a doctor or family member.
- Legal overlay on first visit using sessionStorage so it only fires once per session.

### Step 3 — What shipped

A live, free, universal triage and diagnosis tool with:

- Structured differential output with ranked conditions and supporting evidence
- Four discrete urgency tiers: Monitor at Home / See Your Doctor Soon / Urgent Care Today / Emergency Department Now
- Red flag tracker per symptom — Present / Absent / Unknown, updated in real time
- Care pathway recommendation with plain-language reasoning
- Role-adaptive output across patient, family, and clinician modes
- Living conversation — assessment updates as new symptoms arrive
- Refusal protocol — validated hours-to-harm escalation sequence
- Medical disclaimer overlay on first visit
- Supabase session persistence (share feature in progress)

Deployed on Vercel at `triage.rohimaya.ai`. Built on Next.js 16, TypeScript, Tailwind CSS v4, Claude API, and Supabase.

---

## SECTION 3 — VALIDATION

### Compartment syndrome test case

**Patient:** 38-year-old male
**Context:** Day 7 post-radial artery cardiac catheterization and stent placement
**Presenting symptoms:** Forearm swelling, hard and woody texture, pain returned after initial improvement, waking from sleep, difficulty gripping, finger numbness

**OrixLink output:**
- Top differential: Forearm Compartment Syndrome — HIGH confidence
- Red flags confirmed: 6 of 6
- Urgency assigned: Emergency Department Now
- Refusal protocol: Activated and validated when patient hesitancy language was introduced

This was not a synthetic test case. It was a real clinical presentation involving Hannah's husband Prasad following a cardiac procedure. OrixLink's output was validated against the actual clinical outcome. The product existed and performed correctly on a real emergency presentation before it was declared ready for public use.

### AFib test case

Validated separately against an atrial fibrillation presentation with appropriate urgency classification and care pathway output.

---

## SECTION 4 — OUTCOMES AND IMPACT

### What this demonstrates as a portfolio project

**Production-grade prompt engineering for clinical AI.** The OrixLink system prompt is the most technically demanding prompt engineering work in the Rohimaya portfolio. It must produce structured output, enforce clinical attribution language, surface urgency discretely, handle role-adaptive output across three user modes, and manage a refusal escalation protocol — all without hallucinating diagnoses or creating liability exposure.

**Universal scope as a product decision.** "Any symptom, any person, no prior diagnosis required" is a positioning choice that most clinical AI products explicitly avoid. Existing tools narrow their scope to reduce liability and engineering complexity. OrixLink accepts the full scope and manages it through prompt constraint rather than feature limitation.

**Design systems thinking at brand scale.** Meridian Oracle was not designed for OrixLink alone. It was designed as the foundation for the Rohimaya Health AI brand family, with patient-facing products using a distinct but related system. The ability to maintain visual coherence across multiple products while differentiating by audience is a Head of Product competency, not just a design competency.

**Clinical knowledge as a product constraint.** OrixLink was built by someone who has worked clinical floors for 15 years. The red flag logic, the urgency taxonomy, the care pathway recommendations, and the attribution language all reflect real clinical knowledge. That is not replicable by a product manager without clinical experience, and it shows in the output quality.

**Documented design process.** A full design process artifact page documents all five design artifacts: before and after comparison, user flow, urgency tier system, escalation protocol, and prompt architecture. Available at the design process link above.

### Metrics to add once instrumented

- Assessments run per day
- Most common presenting symptom clusters
- Urgency distribution across four tiers
- Red flag trigger rate
- Session-to-share conversion once share feature ships

---

## SECTION 5 — SCHOLARLY CITATIONS

1. Singh, H., Meyer, A. N., & Thomas, E. J. (2014). The frequency of diagnostic errors in outpatient care. BMJ Quality and Safety, 23(9), 727–731.

2. National Academy of Medicine. (2015). Improving Diagnosis in Health Care. The National Academies Press.

3. Newman-Toker, D. E., et al. (2021). Rate of diagnostic errors and serious misdiagnosis-related harms for major vascular events, infections, and cancers. Diagnosis, 8(1), 67–84.

4. Gunderson, C. G., et al. (2020). Prevalence of harmful diagnostic errors in hospitalised adults. BMJ Quality and Safety, 29(12), 1008–1018.

5. Sax, D. R., et al. (2025). Emergency department triage accuracy and delays in care for high-risk conditions. JAMA Network Open.

6. Levine, D. M., et al. (2024). The diagnostic and triage accuracy of the GPT-3 artificial intelligence model. The Lancet Digital Health, 6(10).

7. PSNet, AHRQ. Diagnostic errors. Agency for Healthcare Research and Quality Patient Safety Network.

---

## SECTION 6 — PORTFOLIO PAGE COPY (READY TO DROP IN)

### Status badge
Live

### Role and timeline
Conversation UX Lead and Prompt Architect · 2025 — Present

### Key outcome
Live product with structured differential, four urgency tiers, validated refusal protocol, and Supabase session persistence

### Card summary (scan-friendly, for project grid)
Universal clinical triage. Any symptom, any person. Structured differential, urgency tiers, refusal protocol.

### Project description (for case study hero)
OrixLink AI accepts any symptom from any person and returns a structured clinical differential with urgency triage, red flag detection, care pathway recommendations, and plain-language reasoning. No login. No prior diagnosis required. Built on Next.js 16 and the Claude API under Rohimaya Health AI.

### Problem statement (for case study hero)
At least 12 million Americans experience a diagnostic error in outpatient settings each year. Most are preventable. Most begin at the front end of the clinical encounter, before a physician is involved, when a patient with an undifferentiated symptom presentation has no structured tool to help them or their care team reason through what might be happening. OrixLink AI is that tool.

### Process Step 1 — Discovery
The single non-negotiable constraint that shaped everything: any symptom, any person, no prior diagnosis required. Every existing triage tool narrows its scope to reduce complexity. OrixLink accepts the full scope and manages it through prompt engineering rather than feature limitation. The clinical logic — red flag taxonomy, urgency tiers, care pathway language — came directly from 15 years of bedside nursing, not from a product spec.

### Process Step 2 — Design and Build
The core product work was the Claude system prompt. Building a prompt that produces a reliable, structured clinical differential from free-text symptom input, enforces attribution language, surfaces urgency as a discrete field, detects red flag presentations, adapts output across patient and clinician modes, and activates a refusal escalation protocol without hallucinating diagnoses required iterating through dozens of constraint combinations across six architectural layers. The Meridian Oracle design system — obsidian, gold, cream, Cormorant Garamond, DM Sans, DM Mono — was built alongside the product as the visual language for the Rohimaya Health AI brand family.

### Process Step 3 — What shipped
A live, free, universal triage and diagnosis tool validated against real clinical presentations including forearm compartment syndrome post-cardiac catheterization. Structured differential output, four discrete urgency tiers, red flag detection, care pathway recommendations, role-adaptive output, refusal protocol, and living conversation that updates the assessment as new symptoms arrive. Deployed on Vercel, built on Next.js 16, TypeScript, Tailwind CSS v4, Claude API, and Supabase.

### Impact line
OrixLink AI is positioned at the highest-risk moment in the diagnostic process: before the physician encounter, when a patient or caregiver is trying to decide whether this is an emergency or something that can wait until Monday. Getting that decision wrong costs lives. The research agrees, and so does everyone who has worked a clinical floor.

---

*Case study documentation updated March 2026.*
*Hannah Kraulik Pagade, Pagade Ventures / Rohimaya Health AI.*