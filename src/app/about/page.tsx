import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import type { Metadata } from "next";

const aboutDesc =
  "Hannah Kraulik Pagade: AI product leader spanning product management and UX design for LLM-powered products. Seventeen years in healthcare operations; shipped live apps in clinical, patient, fintech, enterprise conversation, and agentic infrastructure (OrixLink, HealthLiteracy, ClearChannel, FinanceLens, Ask Hannah MCP). MS AI/ML, CU Boulder (in progress). Open to AI PM and AI product design roles.";

export const metadata: Metadata = {
  title: "About",
  description: aboutDesc,
  openGraph: {
    title: "About",
    description: aboutDesc,
    url: "/about",
    type: "website",
    siteName: "Hannah Kraulik Pagade",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Hannah Kraulik Pagade — AI product leader, PM and UX design for live AI products and MCP infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Hannah Kraulik Pagade",
    description: aboutDesc,
    images: ["/opengraph-image"],
  },
};

const productSkills = [
  "0-to-1 Product Development",
  "Discovery & Problem Framing",
  "Roadmapping & Prioritization",
  "PRDs & Acceptance Criteria",
  "AI Product Strategy",
  "Stakeholder Alignment",
  "Regulated & High-Stakes Domains",
  "Workflow Analysis",
  "Cross-Functional Leadership",
  "Sprint Planning & Delivery",
];

const aiUxSkills = [
  "UX for LLM Products",
  "Conversation Design",
  "Intent & NLU Architecture",
  "Prompt Engineering",
  "Agentic Workflows & MCP Surfaces",
  "Tool Schema Design for Downstream AI",
  "Trust, Safety & Guardrail UX",
  "Multi-Turn & Voice UX",
  "IVR, Chatbot & Agent Assist",
  "Role-Adaptive Flows",
  "Escalation Design",
];

const techStackCore = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Claude API",
  "OpenAI API",
  "Supabase",
  "Stripe",
  "Zod",
  "Vercel",
  "Figma",
  "Git",
];

const techStackAlso =
  "Python · FastAPI · Cloudflare · ElevenLabs · pdf-lib · pptxgenjs · Cursor · Node.js · Express · MCP SDK · Railway — see case studies for product-specific stacks.";

type AboutProduct = {
  name: string;
  url: string;
  urlDisplay: string;
  slug: string;
  summary: string;
  productDecision: string;
  designCall: string;
  stack: string;
};

const products: AboutProduct[] = [
  {
    name: "OrixLink AI",
    url: "https://triage.rohimaya.ai",
    urlDisplay: "triage.rohimaya.ai",
    slug: "orixlink-ai",
    summary:
      "Clinical intake and triage: structured assessment, red-flag surfacing, urgency tiers, history, and billing. Early commercial pilot with subscriptions, credit packs, and server-side usage enforcement.",
    productDecision:
      "Defined paid vs. free tiers, credit packs, and enforcement that moved server-side after real per-session cost exposure—not pricing on slides only.",
    designCall:
      "Meridian Oracle system across funnel, errors, and email so the product reads as clinical authority without feeling cold; typed assessment output reviewers can audit, not an unstructured chat log.",
    stack:
      "Next.js 16 · TypeScript · Tailwind v4 · Claude API (Sonnet/Haiku) · Supabase · Stripe · Resend · Vercel",
  },
  {
    name: "HealthLiteracy AI",
    url: "https://literacy.rohimaya.ai",
    urlDisplay: "literacy.rohimaya.ai",
    slug: "healthliteracy-ai",
    summary:
      "Free, no-login translation of clinical documents into plain language—twelve languages, Simple / Clear / Complete reading levels, urgent items first, user-initiated verification, 90-day shareable sessions.",
    productDecision:
      "Shipped user-initiated verification (Check for Missing Info) with issue cards instead of silently re-running every translation—traded always-on latency and cost for patient control and trust.",
    designCall:
      "Plain reading-level labels (not grade numbers) and THOROUGH CHECK / PARTIAL CHECK / QUICK CHECK badges so verification is legible; side-by-side and accessibility patterns as launch requirements.",
    stack:
      "Next.js 15 · Claude Sonnet · Zod (API requests) · Supabase (90-day) · Web Speech API · Vercel",
  },
  {
    name: "ClearChannel by Vestara",
    url: "https://clearchannel-vestara.vercel.app",
    urlDisplay: "clearchannel-vestara.vercel.app",
    slug: "clearchannel-vestara",
    summary:
      "Conversational lab: one utterance drives IVR, chatbot, and agent assist in parallel with NLU surfaced; SSE streaming, five sentiment themes, Whisper transcription, OpenAI Realtime Live Call.",
    productDecision:
      "Empty state plus Live Call as primary paths so the story reads on mobile; SSE so parallel channels unfold in real time instead of one blocking JSON blob.",
    designCall:
      "data-sentiment retints the full chrome—bereavement and urgency are environmental, as on the bereavement path—not a badge bolted on after layout.",
    stack:
      "Next.js 16 · Claude (SSE) · OpenAI Whisper · TTS · Realtime · Vercel",
  },
  {
    name: "FinanceLens AI",
    url: "https://financelens-ai.vercel.app",
    urlDisplay: "financelens-ai.vercel.app",
    slug: "financelens-ai",
    summary:
      "Six-section structured intelligence for earnings calls and filings—not a summary—plus compare-with-accordion, branded PDF/PPTX, 30-day Supabase deck URLs. Assistive only, not financial advice.",
    productDecision:
      "When Canva Connect was blocked, owned the deck layer: Claude outline, pptxgenjs, pdf-lib, and a custom /deck viewer—removed dependency on a vendor gate.",
    designCall:
      "Source anchors prompt-pushed with schema-soft validation; compare opens highest-signal deltas first so users scan before they deep-read.",
    stack:
      "Next.js 16 · React 19 · Claude Sonnet · Zod · Supabase · pdf-lib · pptxgenjs · Vercel",
  },
  {
    name: "Ask Hannah MCP",
    url: "https://ask-hannah-mcp-production.up.railway.app",
    urlDisplay: "ask-hannah-mcp-production.up.railway.app",
    slug: "ask-hannah-mcp",
    summary:
      "Live Model Context Protocol server on Railway: ten tools expose profile, projects, metrics, skills, voice, FAQ, a recruiter hiring brief, and resume and cover letter generation from structured data. Registered as a public connector in Claude.ai so hiring managers can query Hannah's professional facts inside the tools they already use.",
    productDecision:
      "Scoped for connector reality (HTTP streamable MCP, not stdio-only), strict generation contracts, and conversion (hiring brief contact ordering, UTM tagging)—a portfolio surface that still behaves like a product.",
    designCall:
      "The UX of an MCP tool is its schema: field shapes and first-person voice data are designed so downstream synthesis reads correctly to humans, not like a press release.",
    stack:
      "Node.js 20 · TypeScript · MCP SDK · Express · Zod · Anthropic API · Railway",
  },
];

const ABOUT_TOC = [
  { id: "at-a-glance", label: "At a glance" },
  { id: "how-i-work", label: "How I work" },
  { id: "what-i-built", label: "What I built & shipped" },
  { id: "my-background", label: "My background" },
  { id: "looking-for", label: "What I'm looking for" },
  { id: "skills", label: "Skills" },
  { id: "get-in-touch", label: "Get in touch" },
] as const;

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative w-full overflow-hidden px-6 py-14 sm:px-8 sm:py-16 md:px-16"
        style={{ backgroundColor: "var(--obsidian)" }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(200, 169, 110, 0.1) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl">
          <FadeIn>
            <p
              className="mb-3 text-xs font-body uppercase tracking-[0.2em]"
              style={{ color: "var(--gold)", opacity: 0.8 }}
            >
              About
            </p>
            <h1
              className="font-display text-3xl sm:text-4xl md:text-5xl"
              style={{ color: "var(--cream)" }}
            >
              Hannah Kraulik Pagade
            </h1>
            <p
              className="mt-2 font-body text-xs uppercase tracking-[0.14em]"
              style={{ color: "var(--gold)", opacity: 0.75 }}
            >
              AI product leader&nbsp;&nbsp;·&nbsp;&nbsp;Product management
              &amp; UX design
            </p>
            <div
              className="mt-4 h-px w-14 opacity-60"
              style={{ backgroundColor: "var(--gold)" }}
            />
          </FadeIn>

          <FadeIn delay={100}>
            <p
              className="mt-8 max-w-2xl font-body text-base leading-relaxed sm:text-lg"
              style={{ color: "rgba(244, 239, 230, 0.92)" }}
            >
              I own strategy and launch for AI products in high-stakes domains:
              what to ship first, what success means, and how users should trust
              model output. My proof is live software—clinical intake, patient
              literacy, regulated-style document intelligence,
              enterprise-style conversational channels, and agentic infrastructure
              (Ask Hannah MCP: a live HTTP MCP server on Railway, registered in
              Claude.ai, with ten structured tools)—not decks alone.
            </p>
            <p
              className="mt-6 max-w-2xl font-body text-base leading-relaxed sm:text-lg"
              style={{ color: "rgba(244, 239, 230, 0.88)" }}
            >
              On product management, I frame scope, priorities, and tradeoffs
              with engineering. On design, I define flows, empty and failure
              states, and how the AI behaves in the UI. On solo or early work I
              hold both; on a team I partner and flex where the gap is largest.
            </p>
            <p
              className="mt-6 max-w-2xl font-body text-sm leading-relaxed sm:text-base"
              style={{ color: "rgba(244, 239, 230, 0.85)" }}
            >
              I&apos;m a Licensed Practical Nurse at PAM Health Rehabilitation
              Hospital of Westminster, Colorado, and founder of Rohimaya Health
              AI. I prototype and ship in the stack when the team is
              small—Next.js, Vercel, Claude API—so product decisions are tested
              against real documents, transcripts, and utterances, not theory
              alone. MS in Artificial Intelligence and Machine Learning at CU
              Boulder, expected 2026 (in progress).
            </p>
            <p
              className="mt-4 max-w-2xl font-body text-sm leading-relaxed sm:text-base"
              style={{ color: "rgba(244, 239, 230, 0.72)" }}
            >
              Outside tech: co-founded{" "}
              <a
                href="https://twopeakschai.com"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 transition-opacity hover:opacity-90"
                style={{ color: "var(--gold)" }}
              >
                Two Peaks Chai Co.
              </a>{" "}
              with my spouse—artisan chai in Westminster.
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <div
              className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-body text-sm"
              style={{ color: "rgba(244, 239, 230, 0.65)" }}
            >
              <a
                href="https://hannahkraulikpagade.com"
                className="underline underline-offset-4 transition-opacity hover:opacity-90"
                style={{ color: "var(--gold)" }}
              >
                hannahkraulikpagade.com
              </a>
              <a
                href="https://www.linkedin.com/in/hannah-pagade"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 transition-opacity hover:opacity-90"
                style={{ color: "var(--gold)" }}
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/rohimayaventures"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 transition-opacity hover:opacity-90"
                style={{ color: "var(--gold)" }}
              >
                GitHub
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={260}>
            <nav
              aria-label="On this page"
              className="mt-12 border-t border-white/10 pt-8"
            >
              <p
                className="mb-3 font-body text-[10px] uppercase tracking-[0.2em]"
                style={{ color: "rgba(244, 239, 230, 0.45)" }}
              >
                On this page
              </p>
              <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2">
                {ABOUT_TOC.map(({ id, label }) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="inline-flex min-h-[44px] items-center font-body text-sm underline-offset-4 transition-opacity hover:opacity-90 hover:underline"
                      style={{ color: "rgba(244, 239, 230, 0.82)" }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </FadeIn>
        </div>
      </section>

      {/* At a glance */}
      <section
        id="at-a-glance"
        className="scroll-mt-24 w-full px-6 py-12 sm:px-8 sm:py-14 md:px-16"
        style={{ backgroundColor: "#0c1119" }}
      >
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2
              className="font-display text-xl sm:text-2xl"
              style={{ color: "var(--cream)" }}
            >
              At a glance
            </h2>
            <div
              className="mt-3 h-px w-10 opacity-50"
              style={{ backgroundColor: "var(--gold)" }}
            />
            <ul
              className="mt-6 list-none space-y-3 font-body text-sm leading-relaxed sm:text-base"
              style={{ color: "rgba(244, 239, 230, 0.88)" }}
            >
              <li className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: "var(--gold)" }}
                  aria-hidden
                />
                <span>
                  <span style={{ color: "var(--cream)" }}>Five live AI surfaces</span>{" "}
                  on the work page—clinical triage, patient literacy, enterprise
                  conversation lab, financial document intelligence, and Ask
                  Hannah MCP (live MCP on Railway, registered in Claude.ai).{" "}
                  <Link
                    href="/work/onboarding-agent"
                    className="underline underline-offset-4 transition-opacity hover:opacity-90"
                    style={{ color: "var(--gold)" }}
                  >
                    Onboarding Agent
                  </Link>{" "}
                  is in build (coming soon).
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: "var(--gold)" }}
                  aria-hidden
                />
                <span>
                  <span style={{ color: "var(--cream)" }}>17 years</span> in
                  healthcare operations leadership—staff scale, audits, cost
                  outcomes—before shipping software; domain judgment carries into
                  product and UX calls.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: "var(--gold)" }}
                  aria-hidden
                />
                <span>
                  <span style={{ color: "var(--cream)" }}>MS AI/ML</span> at CU
                  Boulder (in progress, expected 2026); founder of Rohimaya Health
                  AI.
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: "var(--gold)" }}
                  aria-hidden
                />
                <span>
                  <span style={{ color: "var(--cream)" }}>Hiring target:</span>{" "}
                  AI Product Manager and/or AI product design roles; open to
                  relocation. Full case studies on this site.
                </span>
              </li>
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* How I work */}
      <section
        id="how-i-work"
        className="scroll-mt-24 w-full px-6 py-14 sm:px-8 sm:py-16 md:px-16"
        style={{ backgroundColor: "#0c1119" }}
      >
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2
              className="font-display text-2xl"
              style={{ color: "var(--cream)" }}
            >
              How I work
            </h2>
            <div
              className="mt-3 h-px w-10 opacity-50"
              style={{ backgroundColor: "var(--gold)" }}
            />
          </FadeIn>
          <FadeIn delay={80}>
            <ol
              className="mt-8 list-decimal space-y-4 pl-5 font-body text-sm leading-relaxed sm:text-base"
              style={{ color: "rgba(244, 239, 230, 0.88)" }}
            >
              <li>
                <span style={{ color: "var(--cream)" }}>I start from constraints, not feature lists.</span>{" "}
                Safety and governance, who the product is for, what “good” output looks like,
                and when the model must stay assistive instead of authoritative. The
                constraint set is the spec, whether the domain is clinical, financial, or
                enterprise conversational.
              </li>
              <li>
                <span style={{ color: "var(--cream)" }}>I design the intelligence layer first.</span>{" "}
                Structured outputs, attribution language, and guardrails in the prompts
                before the UI does the selling. If the model behavior is not trustworthy,
                the interface cannot fix it.
              </li>
              <li>
                <span style={{ color: "var(--cream)" }}>I ship in small loops.</span>{" "}
                I build in Cursor, deploy to Vercel or Railway, and test on real documents, transcripts,
                and utterances. Then I iterate on the failure modes users would actually
                hit in production, not just demo paths.
              </li>
              <li>
                <span style={{ color: "var(--cream)" }}>I treat host integrations as the spec.</span>{" "}
                When the distribution surface is a connector (for example Claude.ai and MCP),
                the platform integration requirements win over the quickest SDK path. That
                is how stdio-only prototypes become HTTP MCP, Zod-guarded tool inputs, and
                deployments that still behave after redeploy.
              </li>
              <li>
                <span style={{ color: "var(--cream)" }}>I judge success by clarity of scope.</span>{" "}
                Someone using the product should know what it does, what it refuses to do,
                and what to do next, without mistaking an assistive tool for an authority
                they should not rely on alone.
              </li>
              <li>
                <span style={{ color: "var(--cream)" }}>I collaborate like a product partner.</span>{" "}
                Specs, acceptance criteria, and review of model behavior with engineering;
                design feedback that accounts for latency, cost, and failure modes—not
                only ideal paths.
              </li>
            </ol>
          </FadeIn>
        </div>
      </section>

      {/* What I built */}
      <section
        id="what-i-built"
        className="scroll-mt-24 w-full px-6 py-14 sm:px-8 sm:py-16 md:px-16"
        style={{ backgroundColor: "#0a0f18" }}
      >
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2
              className="font-display text-2xl"
              style={{ color: "var(--cream)" }}
            >
              What I built and shipped
            </h2>
            <div
              className="mt-3 h-px w-10 opacity-50"
              style={{ backgroundColor: "var(--gold)" }}
            />
          </FadeIn>

          <div className="mt-8 flex flex-col gap-8">
            {products.map((p, i) => (
              <FadeIn key={p.name} delay={i * 80}>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-body text-base font-medium underline underline-offset-4 transition-opacity hover:opacity-90"
                      style={{ color: "var(--gold)" }}
                    >
                      {p.name}
                    </a>
                    <span
                      className="font-body text-xs"
                      style={{ color: "rgba(200,169,110,0.5)" }}
                    >
                      {p.urlDisplay}
                    </span>
                  </div>
                  <p
                    className="mt-2 max-w-2xl font-body text-sm leading-relaxed sm:text-base"
                    style={{ color: "rgba(244, 239, 230, 0.85)" }}
                  >
                    {p.summary}
                  </p>
                  <p
                    className="mt-3 max-w-2xl font-body text-sm leading-relaxed sm:text-[13px]"
                    style={{ color: "rgba(244, 239, 230, 0.78)" }}
                  >
                    <span style={{ color: "var(--cream)" }}>Product: </span>
                    {p.productDecision}
                  </p>
                  <p
                    className="mt-2 max-w-2xl font-body text-sm leading-relaxed sm:text-[13px]"
                    style={{ color: "rgba(244, 239, 230, 0.78)" }}
                  >
                    <span style={{ color: "var(--cream)" }}>UX &amp; AI behavior: </span>
                    {p.designCall}
                  </p>
                  <p
                    className="mt-3 font-body text-xs"
                    style={{ color: "rgba(244, 239, 230, 0.4)" }}
                  >
                    {p.stack}
                  </p>
                  <p className="mt-2">
                    <Link
                      href={`/work/${p.slug}`}
                      className="font-body text-xs underline underline-offset-4 transition-opacity hover:opacity-90 sm:text-[13px]"
                      style={{ color: "rgba(200, 169, 110, 0.85)" }}
                    >
                      Case study →
                    </Link>
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={300}>
            <p
              className="mt-8 font-body text-xs"
              style={{ color: "rgba(244, 239, 230, 0.4)" }}
            >
              All code at{" "}
              <a
                href="https://github.com/rohimayaventures"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 transition-opacity hover:opacity-80"
                style={{ color: "rgba(200,169,110,0.65)" }}
              >
                github.com/rohimayaventures
              </a>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Background */}
      <section
        id="my-background"
        className="scroll-mt-24 w-full px-6 py-14 sm:px-8 sm:py-16 md:px-16"
        style={{ backgroundColor: "#0a0f18" }}
      >
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2
              className="font-display text-2xl"
              style={{ color: "var(--cream)" }}
            >
              My background
            </h2>
            <div
              className="mt-3 h-px w-10 opacity-50"
              style={{ backgroundColor: "var(--gold)" }}
            />
          </FadeIn>
          <FadeIn delay={100}>
            <p
              className="mt-8 max-w-2xl font-body text-sm leading-relaxed sm:text-base"
              style={{ color: "rgba(244, 239, 230, 0.85)" }}
            >
              I have 17 years of healthcare operations leadership across acute
              care, post-acute rehabilitation, and senior living. Real employers
              include Amberwood Post Acute Rehabilitation, Center at Northridge,
              and a senior living facility in the Westminster area. I managed
              130+ staff, achieved $1.2M in cost savings through workflow
              optimization, and maintained 96% regulatory audit success rates.
            </p>
            <p
              className="mt-6 max-w-2xl font-body text-sm leading-relaxed sm:text-base"
              style={{ color: "rgba(244, 239, 230, 0.85)" }}
            >
              That work trained the muscles product teams need: operating under
              regulation, aligning nursing and leadership under pressure,
              communicating risk clearly, and improving workflows when the
              downside of a bad decision is real—not a postmortem slide.
            </p>
            <p
              className="mt-6 max-w-2xl font-body text-sm leading-relaxed sm:text-base"
              style={{ color: "rgba(244, 239, 230, 0.85)" }}
            >
              I did not come from a product whiteboard. I came from the floor.
              Those 17 years were field research.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Looking for */}
      <section
        id="looking-for"
        className="scroll-mt-24 w-full px-6 py-14 sm:px-8 sm:py-16 md:px-16"
        style={{ backgroundColor: "#0c1119" }}
      >
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2
              className="font-display text-2xl"
              style={{ color: "var(--cream)" }}
            >
              What I&apos;m looking for
            </h2>
            <div
              className="mt-3 h-px w-10 opacity-50"
              style={{ backgroundColor: "var(--gold)" }}
            />
          </FadeIn>
          <FadeIn delay={100}>
            <p
              className="mt-8 max-w-2xl font-body text-sm leading-relaxed sm:text-base"
              style={{ color: "rgba(244, 239, 230, 0.85)" }}
            >
              I&apos;m focused on AI Product Manager and senior AI product design
              roles (product designer or UX designer owning AI-native flows). I
              also consider founding PM and Head of Product where scope includes
              both strategy and hands-on AI UX. Open to relocation and hybrid.
              If this sounds like a fit, use the{" "}
              <Link
                href="/contact"
                className="underline underline-offset-4 transition-opacity hover:opacity-90"
                style={{ color: "var(--gold)" }}
              >
                contact form
              </Link>{" "}
              or connect on{" "}
              <a
                href="https://www.linkedin.com/in/hannah-pagade"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 transition-opacity hover:opacity-90"
                style={{ color: "var(--gold)" }}
              >
                LinkedIn
              </a>
              .
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="scroll-mt-24 w-full px-6 py-14 sm:px-8 sm:py-16 md:px-16"
        style={{ backgroundColor: "#0a0f18" }}
      >
        <div className="mx-auto max-w-3xl space-y-12">

          <FadeIn>
            <h2
              className="font-display text-2xl"
              style={{ color: "var(--cream)" }}
            >
              Product &amp; strategy
            </h2>
            <div
              className="mt-3 h-px w-10 opacity-50"
              style={{ backgroundColor: "var(--gold)" }}
            />
            <div className="mt-6 flex flex-wrap gap-2">
              {productSkills.map((skill) => (
                <span
                  key={skill}
                  className="inline-block rounded-full border px-3 py-1.5 font-body text-xs sm:text-[13px]"
                  style={{
                    borderColor: "rgba(200, 169, 110, 0.25)",
                    color: "var(--cream)",
                    backgroundColor: "rgba(200, 169, 110, 0.04)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h2
              className="font-display text-2xl"
              style={{ color: "var(--cream)" }}
            >
              AI &amp; product design
            </h2>
            <div
              className="mt-3 h-px w-10 opacity-50"
              style={{ backgroundColor: "var(--gold)" }}
            />
            <div className="mt-6 flex flex-wrap gap-2">
              {aiUxSkills.map((skill) => (
                <span
                  key={skill}
                  className="inline-block rounded-full border px-3 py-1.5 font-body text-xs sm:text-[13px]"
                  style={{
                    borderColor: "rgba(200, 169, 110, 0.25)",
                    color: "var(--cream)",
                    backgroundColor: "rgba(200, 169, 110, 0.04)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <h2
              className="font-display text-2xl"
              style={{ color: "var(--cream)" }}
            >
              Core technical stack
            </h2>
            <p
              className="mt-3 max-w-2xl font-body text-sm leading-relaxed"
              style={{ color: "rgba(244, 239, 230, 0.55)" }}
            >
              Execution leverage with engineering—not a backend specialist.
              Depth varies by product; case studies list the exact bindings.
            </p>
            <div
              className="mt-3 h-px w-10 opacity-50"
              style={{ backgroundColor: "var(--gold)" }}
            />
            <div className="mt-6 flex flex-wrap gap-2">
              {techStackCore.map((tech) => (
                <span
                  key={tech}
                  className="inline-block rounded-full border px-3 py-1.5 font-body font-mono text-xs sm:text-[13px]"
                  style={{
                    borderColor: "rgba(200, 169, 110, 0.2)",
                    color: "rgba(200, 169, 110, 0.85)",
                    backgroundColor: "rgba(200, 169, 110, 0.03)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
            <p
              className="mt-5 max-w-2xl font-body text-xs leading-relaxed sm:text-[13px]"
              style={{ color: "rgba(244, 239, 230, 0.45)" }}
            >
              {techStackAlso}
            </p>
          </FadeIn>

        </div>
      </section>

      {/* Get in touch */}
      <section
        id="get-in-touch"
        className="scroll-mt-24 w-full px-6 py-14 sm:px-8 sm:py-16 md:px-16"
        style={{ backgroundColor: "var(--obsidian)" }}
      >
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2
              className="font-display text-2xl"
              style={{ color: "var(--cream)" }}
            >
              Get in touch
            </h2>
            <div
              className="mt-3 h-px w-10 opacity-50"
              style={{ backgroundColor: "var(--gold)" }}
            />
            <p
              className="mt-6 max-w-2xl font-body text-sm leading-relaxed sm:text-base"
              style={{ color: "rgba(244, 239, 230, 0.9)" }}
            >
              I&apos;m interested in conversations about AI product management,
              AI product design, and founding-team roles where both strategy and
              shipped UX matter. Recruiters: share the stack, stage, and how AI
              shows up in the roadmap.
            </p>
            <p
              className="mt-5 max-w-2xl font-body text-sm leading-relaxed sm:text-base"
              style={{ color: "rgba(244, 239, 230, 0.9)" }}
            >
              Use the{" "}
              <Link
                href="/contact"
                className="underline underline-offset-4 transition-opacity hover:opacity-90"
                style={{ color: "var(--gold)" }}
              >
                contact form
              </Link>{" "}
              to reach me, or connect on{" "}
              <a
                href="https://www.linkedin.com/in/hannah-pagade"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 transition-opacity hover:opacity-90"
                style={{ color: "var(--gold)" }}
              >
                LinkedIn
              </a>
              . Explore the live products:{" "}
              <a
                href="https://triage.rohimaya.ai"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 transition-opacity hover:opacity-90"
                style={{ color: "var(--gold)" }}
              >
                OrixLink AI
              </a>
              ,{" "}
              <a
                href="https://literacy.rohimaya.ai"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 transition-opacity hover:opacity-90"
                style={{ color: "var(--gold)" }}
              >
                HealthLiteracy AI
              </a>
              ,{" "}
              <a
                href="https://clearchannel-vestara.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 transition-opacity hover:opacity-90"
                style={{ color: "var(--gold)" }}
              >
                ClearChannel by Vestara
              </a>
              ,{" "}
              <a
                href="https://financelens-ai.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 transition-opacity hover:opacity-90"
                style={{ color: "var(--gold)" }}
              >
                FinanceLens AI
              </a>
              , and{" "}
              <a
                href="https://ask-hannah-mcp-production.up.railway.app"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 transition-opacity hover:opacity-90"
                style={{ color: "var(--gold)" }}
              >
                Ask Hannah MCP
              </a>
              .
            </p>
            <p
              className="mt-4 font-body text-sm italic"
              style={{ color: "rgba(244, 239, 230, 0.5)" }}
            >
              Resume available on request.
            </p>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="mt-10">
              <Link
                href="/#work"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-sm border px-5 py-3 font-body text-xs uppercase tracking-widest transition-all duration-200 hover:-translate-y-0.5 sm:px-6 sm:text-sm"
                style={{
                  borderColor: "rgba(200, 169, 110, 0.4)",
                  color: "var(--gold)",
                }}
              >
                View selected work →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}