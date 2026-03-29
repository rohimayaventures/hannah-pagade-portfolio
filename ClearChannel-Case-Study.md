# ClearChannel by Vestara
## Designing Real-Time NLU Routing Intelligence for Enterprise Financial Services Contact Centers

**Built by Hannah Kraulik Pagade** · Rohimaya Health AI · 2025

**Live Demo:** [clearchannel-vestara.vercel.app](https://clearchannel-vestara.vercel.app)

---

## Executive Summary

ClearChannel is a live, AI-powered NLU routing simulator that demonstrates how a single investor utterance is classified, scored for confidence, and transformed into simultaneous channel-specific responses across three enterprise contact center channels: IVR (Interactive Voice Response), digital Chatbot, and live Agent Assist.

The system was built in response to a documented gap in enterprise conversational AI practice: the design of NLU routing logic is rarely visible to the teams who govern it. Product managers, UX researchers, and conversational designers make architecture decisions that affect millions of customer interactions with little ability to observe or test how intent classification behaves across channels simultaneously.

ClearChannel makes that logic visible, interactive, and auditable in real time. It is not a prototype of a future system. It is a working artifact built on the Claude API with OpenAI Realtime voice integration, deployed at clearchannel-vestara.vercel.app.

Built as a portfolio demonstration of enterprise conversational AI design across IVR, Chatbot, and Agent Assist channels simultaneously.

| | |
|---|---|
| **18 intents** | Classified with confidence scoring and sentiment detection |
| **3 channels** | Simultaneous IVR, Chatbot, and Agent Assist responses per utterance |
| **< 2 seconds** | Streaming response latency via Claude API Server-Sent Events |

---

## The Problem: What Breaks in the First 3 Seconds

The financial services contact center is one of the most consequential UX environments in consumer technology. When an investor calls about a deceased spouse, an unauthorized transaction, or impending market losses, what happens in the first three seconds of that interaction determines whether they feel heard or hang up. The research on this is consistent and alarming.

### IVR Failure Is a Known, Unresolved Crisis

A 2019 survey by Vonage of 4,019 adults in the US and UK found that **81% had abandoned at least one call to a business in the past year because they reached an IVR.** More strikingly, 51% reported having stopped using a business entirely as a direct result of a frustrating IVR interaction. These are not edge cases. They represent structural design failures at scale.

> Vonage Research (2019). IVR Customer Experience Survey. Opinion Matters agency. n=4,019 adults, UK and US.

The drivers of IVR abandonment are well-documented: confusing menu structures, a lack of emotional context awareness, poor routing logic that fails to match caller intent to the correct agent, and the absence of any continuity across channels.

For financial services specifically, where callers often contact a firm during moments of acute stress including bereavement, fraud, and market anxiety, the cost of that friction is compounded. Industry benchmarks target abandonment rates below 3% in the BFSI (Banking, Financial Services, and Insurance) sector. The average contact center, however, operates at 12–20% according to a 2025 American Express industry study.

> Brightmetrics (2025). Reducing Call Center Abandonment Rates: What Actually Works. Citing American Express industry benchmarking data.

### The NLU Architecture Gap

Natural language understanding — the AI capability that enables a system to classify what a caller actually *means* rather than just what they literally said — is now central to enterprise contact center strategy. The global NLU market was valued at $18.34 billion in 2023 and is projected to reach $65.9 billion by 2030, growing at a CAGR of 20.1%.

> Grand View Research (2024). Natural Language Understanding Market Size & Outlook, 2030.

Despite this investment, a critical design problem persists: NLU architecture is typically designed in isolation from the channel experience it produces. Intent taxonomies are built by technical teams, routing logic is configured by operations teams, and the actual language experience — the IVR script, the chatbot response, the agent script — is authored by yet another team. The result is that routing decisions are made without visibility into their downstream conversational consequences.

Peer-reviewed research published in *Pattern Analysis and Applications* (Springer, 2023) reviewed 125 papers on NLP in contact center automation published between 2003 and 2023. The review identified a consistent gap: while NLP capabilities have advanced substantially, the integration of those capabilities into coherent multi-channel design practice remains underdeveloped.

> Springer Nature (2023). A review of natural language processing in contact centre automation. *Pattern Analysis and Applications.* Papers reviewed: 125, spanning 2003–2023. DOI: 10.1007/s10044-023-01182-8

### The Enterprise Context

Financial services contact centers manage some of the highest-stakes customer interactions in consumer technology. Firms managing retirement savings for millions of customers face a direct link between conversation design quality and institutional trust. When a customer calls during bereavement, a fraud event, or a market downturn, what happens in the first three seconds determines whether they feel heard or escalate.

ClearChannel was built to demonstrate what best-in-class multi-channel NLU routing design looks like in that environment — visible, interactive, and auditable in real time.

---

## Research Foundation

### Generative AI and Contact Center Agent Performance

The most rigorous real-world study of generative AI in contact center environments was conducted by Li, Brynjolfsson, and Raymond (2023), published through the National Bureau of Economic Research. The study examined the staggered deployment of a generative AI conversational assistant across 5,179 customer support agents at a Fortune 500 enterprise software firm.

**Key findings:**

- Agents with access to the AI assistant were **14% more productive** on average, measured as issues resolved per hour
- Less experienced workers improved by **34–35%**, with agents at two months of tenure performing at the level of agents with six months of experience who lacked AI access
- Customer sentiment improved: **requests to speak to a manager declined by 25%**
- Worker turnover decreased, suggesting that AI assistance reduced the emotional burden of handling difficult calls

> Li, D., Brynjolfsson, E., & Raymond, L. (2023). Generative AI at Work. NBER Working Paper 31161. Data: 5,179 agents, 3 million+ customer interactions.

The mechanism behind these gains is directly relevant to ClearChannel's design rationale. The AI model learned from the behavior of the most skilled agents and made those best practices available to less experienced workers in real time. ClearChannel encodes this same principle architecturally: Agent Assist surfaces verbatim scripts and auto-surfaced policy at the moment of need, not after training.

### NLU Models in Financial Services

Research by Varun Kumar Tambi (PhilArchive, 2024) on NLU models for personalized financial services identifies contextual awareness as the defining capability gap in current deployments. The paper argues that financial service interactions require deep understanding of user intent, transactional behavior, and conversational cues that static intent taxonomies cannot capture.

> Tambi, V.K. (2024). Natural Language Understanding Models for Personalized Financial Services. PhilArchive.

ClearChannel directly addresses this finding through its intent taxonomy, which was designed to prioritize emotional and contextual signal over lexical trigger words. The BEREAVEMENT DETECTION override activates on semantic context — a caller saying *my husband is gone* triggers the same protocol as one who says *my husband passed away last week.*

### NLP in Finance: The State of the Field

A 2024 survey published in *Information Fusion* (Elsevier) by Du et al. provides a comprehensive review of NLP applications across the financial sector. The survey identifies intent classification, sentiment analysis, and entity extraction as the three core NLP capabilities driving enterprise financial AI adoption. The authors note that the integration of large language models into financial NLP represents a qualitative shift from rule-based systems to context-aware reasoning, with implications for regulatory compliance, customer experience, and operational efficiency.

> Du, K. et al. (2024). Natural language processing in finance: A survey. *Information Fusion*, Elsevier. DOI: 10.1016/j.inffus.2024.102414

---

## Design Rationale: Why ClearChannel Was Built This Way

### Principle 1: Emotional Context Must Override Intent Classification

Standard NLU systems classify intent based on the dominant signal in an utterance. ClearChannel inverts this priority for high-stakes emotional contexts. The system implements three hard override rules that fire *before* any intent classification logic:

**BEREAVEMENT DETECTION** — Any utterance containing grief or loss language routes to `BENEFICIARY_UPDATE` with a distressed sentiment flag, regardless of any other intent signals. The IVR opens with a condolence and a minimum 800ms pause before any transactional language.

**FRAUD DETECTION** — Any utterance containing unauthorized transaction language routes immediately to `UNAUTHORIZED_TRANSACTION` with full escalation. No containment attempt is made.

**BARGE-IN DETECTION** — Any utterance expressing frustration with the IVR itself routes to `BARGE_IN_ESCALATION`. The IVR response is capped at 40 words and transfers immediately.

This design is grounded in clinical operations practice. Just as a triage nurse is trained to recognize a life-threatening presentation before completing a standard intake, a contact center NLU system must recognize emotional emergencies before completing a standard routing decision.

### Principle 2: Channel Responses Must Be Generated Simultaneously

Existing NLU design tools typically allow practitioners to design one channel at a time. A conversation designer builds an IVR flow, then separately designs a chatbot flow, then separately writes agent scripts. The design consequences of routing decisions are not visible across channels simultaneously.

ClearChannel generates IVR script, chatbot response, and agent assist content in a single API call. The practitioner sees all three responses appear on screen within seconds of submitting an utterance. This makes design tradeoffs visible that are typically invisible: a containment decision that looks reasonable in the chatbot panel may produce an agent assist script that contradicts it.

### Principle 3: Confidence Must Be Made Legible

Confidence scores in NLU systems are typically hidden from the practitioners who govern them. ClearChannel surfaces confidence prominently in two locations: the intent bar at the top of the screen and within the NLU architecture section. The system implements intent-specific confidence thresholds — bereavement, fraud, and barge-in intents are set to lower thresholds so weaker signal still triggers the correct protocol.

### Principle 4: Agent Scripts Must Be Verbatim-Ready

One of the most consistent failures in contact center AI is the gap between what an AI system suggests and what an agent can actually say. Systems that surface policy summaries or recommended actions leave the translation from recommendation to spoken language entirely to the agent — which fails under pressure.

ClearChannel's Agent Assist panel surfaces verbatim scripts written in natural spoken English, not formal written language, alongside auto-surfaced policy references and compliance flags. An agent can read the suggested script directly, without reformulation.

---

## Technical Architecture

ClearChannel is built on a Next.js 16 / TypeScript / Tailwind CSS v4 stack, deployed on Vercel. All analysis is performed via real API calls with no mocked data.

### Core AI Pipeline

- **Intent Analysis** — Claude Sonnet 4.6 via Anthropic API with a 200+ line enterprise system prompt encoding 18 intent categories, 3 override protocols, containment rules, and emotional sensitivity guidelines. Response is streamed via Server-Sent Events for progressive panel hydration.
- **Voice Input** — OpenAI Whisper API for speech-to-text transcription of spoken investor utterances.
- **IVR Text-to-Speech** — OpenAI TTS-1 with alloy voice, served as streaming audio via Blob URL for cross-platform mobile compatibility.
- **Live Voice Session** — OpenAI Realtime API for full bidirectional voice conversation with a Vestara AI persona, enabling live call simulation from the browser.

### Sentiment-Driven UI Architecture

The application implements a five-state sentiment system tied to the intent classification result. Each sentiment state — neutral, concerned, urgent, distressed, and confused — triggers a complete UI theme shift via CSS custom properties. The topbar, accent colors, background, and intent display all transition simultaneously when a new result arrives.

This design choice is deliberate: visual state changes that alert agents to the emotional tenor of a call before they read any script are a documented best practice in contact center operations. ClearChannel demonstrates this principle architecturally.

### Streaming Response Architecture

The analyze API route uses `client.messages.stream()` to return a Server-Sent Events stream rather than a blocking JSON response. The client implements a brace-depth JSON section extractor that fires `setResult` for each completed section — IVR, chatbot, agent_assist, NLU — as its closing brace arrives in the stream. This produces progressive panel hydration with perceived latency under two seconds for the first panel, versus six to eight seconds for a blocking response.

---

## Implications for Enterprise Conversational AI at Scale

| Design Principle | Enterprise Application |
|---|---|
| Emotional override protocols | Ensures bereavement, fraud, and barge-in scenarios are never mis-classified as routine transactions. Critical for investor trust and regulatory compliance. |
| Simultaneous multi-channel generation | Eliminates the design lag that produces inconsistent messaging across IVR, digital, and live agent channels. Enables rapid intent taxonomy iteration. |
| Verbatim agent scripts | Reduces cognitive load on agents during emotionally charged calls, consistent with research showing AI assistance improves agent performance most dramatically in high-stress scenarios. |
| Confidence threshold differentiation | Allows operations teams to tune sensitivity per intent category, accepting lower confidence thresholds for high-stakes intents rather than applying a single threshold system-wide. |
| Sentiment-aware UI state | Provides supervisors and quality teams with immediate visual signal about call tenor, enabling faster intervention without waiting for transcript review. |

---

## Builder Context: From Clinical Floor to Conversational AI

ClearChannel was not designed from a whiteboard. It was designed from 15 years of frontline healthcare operations, including work as a Licensed Practical Nurse — a role in which the first contact between a patient and the healthcare system, the triage interaction, determines everything that follows.

The parallels between clinical triage and contact center NLU routing are not metaphorical. Both systems must classify a presenting concern, assess urgency, route to the appropriate level of care, and generate a response calibrated to the emotional state of the person presenting. Both systems fail in characteristic ways when classification is wrong: in clinical triage, under-triage sends a critical patient to a low-acuity queue; in contact center NLU, misclassification routes a grieving investor to an account verification flow.

This perspective — built from years of navigating those failure modes in clinical settings — informs every design decision in ClearChannel. The bereavement protocol, which opens with *I am so sorry for your loss* followed by an 800ms pause before any transactional language, reflects the same principle that governs clinical communication with a family who has just received a difficult diagnosis: acknowledgment before action, always.

> ClearChannel is one project in a broader portfolio of conversational AI products. OrixLink AI addresses clinical triage intelligence. HealthLiteracy AI addresses medical document translation. The conversation design architecture principles demonstrated here apply across all three.

---

## SECTION 5 — STATUS MATRIX

### What works

- Live demo at clearchannel-vestara.vercel.app — no login required, no setup
- 18 intent categories with confidence scoring and sentiment detection
- Three simultaneous channel outputs per utterance: IVR, Chatbot, Agent Assist
- NLU architecture card per utterance: intent taxonomy, entity schema, training phrases, confidence thresholds
- Three hard override rules: bereavement detection, fraud detection, barge-in detection
- Sentiment-driven UI theme system: five states (neutral, concerned, urgent, distressed, confused) trigger full CSS variable swap
- Streaming response via Claude API Server-Sent Events with brace-depth section extractor for progressive panel hydration
- Voice input via OpenAI Whisper with IVR spoken response via OpenAI TTS (alloy voice)
- OpenAI Realtime API bidirectional voice session for full live call simulation
- 11 curated sample utterances covering standard and edge-case emotional scenarios
- Mobile-compatible audio via Blob URL
- Vestara Institutional design system consistent across all surfaces

### Known gaps and roadmap

| Gap | Status | Notes |
|-----|--------|-------|
| Rate limiting on API routes | Not implemented | Appropriate before any public traffic push beyond portfolio use |
| Persistence / session history | Not built | All analysis is stateless — no Supabase layer. Portfolio artifact scope. |
| Multi-turn conversation memory | Not built | Each utterance is analyzed independently. Full conversation memory is Phase 2. |
| Mobile layout | Partial | Two-panel layout degrades gracefully but is not fully optimized for small screens |
| Confidence calibration | Rubric only | Scores reflect the system prompt rubric, not calibrated cross-model benchmarks |
| Additional channel types | Roadmap | SMS, email, and push notification channel outputs are planned for a future version |

## SECTION 6 — PORTFOLIO COPY

### Card summary

Enterprise NLU routing simulator. One utterance drives three simultaneous channel outputs — IVR, Chatbot, Agent Assist — with full intent taxonomy, confidence scoring, sentiment detection, and three emotional override protocols.

### Project description (card view)

ClearChannel demonstrates what it means to design a conversational AI system for all channels simultaneously rather than one at a time. Type or speak any investor utterance and watch Claude generate IVR script, Chatbot response, and Agent Assist content in real time, with a full NLU architecture breakdown per utterance. Three override protocols handle bereavement, fraud, and barge-in before any intent classification runs.

### Problem statement (case study hero)

Most conversational AI design optimizes for one channel. Enterprise contact centers run three simultaneously. A customer who calls about a deceased spouse is also potentially in the chatbot, and a live agent may be watching the same interaction. The design consequences of routing decisions are invisible across channels unless you can see all three fire at once. ClearChannel makes that visible, interactive, and auditable.

### The design decisions that matter

The three hard override rules are the most important product decisions in this build. Bereavement, fraud, and barge-in fire before intent classification — because in enterprise financial services, getting those wrong is not a UX failure, it is an institutional trust failure. The bereavement protocol opens with acknowledgment and an 800ms pause before any transactional language, which mirrors the same principle used in clinical communication: acknowledgment before action, always.

The streaming architecture was chosen because perceived latency matters more than actual latency in a design tool. A practitioner watching three panels populate progressively at under two seconds engages differently with the output than one waiting six seconds for a blocking response. The brace-depth section extractor that fires setResult per completed JSON section was the key implementation decision.

### One honest line for interviews

ClearChannel demonstrates multi-channel conversational AI system design: simultaneous NLU routing across IVR, Chatbot, and Agent Assist with emotional override protocols, streaming architecture, sentiment-driven UI state, and voice input/output — built as a live, portable portfolio artifact with no login barrier.

### What I would build next

- Supabase session persistence with shareable utterance analysis URLs
- Full conversation memory across a multi-turn session
- SMS and email channel outputs as additional panels
- Confidence threshold adjustment UI so practitioners can tune per intent in real time
- Side-by-side A/B comparison of two utterances through the same intent taxonomy

---

## References

1. Li, D., Brynjolfsson, E., & Raymond, L. (2023). Generative AI at Work. *National Bureau of Economic Research Working Paper 31161.* https://www.nber.org/papers/w31161

2. Vonage (2019). IVR Customer Experience Survey. Administered by Opinion Matters research agency. n=4,019 adults, UK and US.

3. Grand View Research (2024). Natural Language Understanding Market Size & Outlook, 2030. https://www.grandviewresearch.com/industry-analysis/natural-language-understanding-market-report

4. MIT Sloan Management Review (2024). Scaling AI for Results. Research on enterprise AI adoption and operational impact in large organizations. https://mitsloan.mit.edu

5. Du, K. et al. (2024). Natural language processing in finance: A survey. *Information Fusion*, Elsevier. DOI: 10.1016/j.inffus.2024.102414

6. Springer Nature (2023). A review of natural language processing in contact centre automation. *Pattern Analysis and Applications.* DOI: 10.1007/s10044-023-01182-8

7. Tambi, V.K. (2024). Natural Language Understanding Models for Personalized Financial Services. PhilArchive. https://philarchive.org/rec/VARNLU

8. Brightmetrics (2025). Reducing Call Center Abandonment Rates in 2025: What Actually Works. https://brightmetrics.com/blog/reducing-call-center-abandonment-rates-in-2025-what-actually-works

9. Markets and Data (2023). Natural Language Understanding Market Size & Trends 2031.

---

*Built by Hannah Kraulik Pagade · hannahkraulikpagade.com*
