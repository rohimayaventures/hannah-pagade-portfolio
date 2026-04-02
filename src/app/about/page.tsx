import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import type { Metadata } from "next";

const aboutDesc =
  "Hannah Kraulik Pagade, LPN and founder of Rohimaya Health AI. Live AI products: OrixLink AI, HealthLiteracy AI, ClearChannel, FinanceLens AI. MS AI/ML at CU Boulder (in progress). hannahkraulikpagade.com.";

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
        alt: "Hannah Kraulik Pagade — LPN, Rohimaya Health AI, live AI products",
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
  "Discovery & User Research",
  "Outcome-Driven Roadmapping",
  "Data-Informed Prioritization",
  "Stakeholder Alignment",
  "Workflow Analysis & Redesign",
  "Regulated Environments",
  "Cross-Functional Leadership",
  "User Story Mapping",
  "Sprint Planning & Delivery",
  "AI Product Strategy",
];

const aiUxSkills = [
  "Conversation Design",
  "IVR & Chatbot Design",
  "Agent Assist UX",
  "Intent Architecture",
  "NLU Model Development",
  "Prompt Engineering",
  "Multi-Turn Dialogue Systems",
  "Role-Adaptive Flows",
  "Escalation Design",
  "Voice UX & TTS",
];

const techStack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "React",
  "Claude API",
  "OpenAI API",
  "FastAPI",
  "Python",
  "ElevenLabs",
  "Supabase",
  "Cloudflare",
  "Stripe",
  "Vercel",
  "Figma",
  "Cursor",
  "Git",
];

const products = [
  {
    name: "OrixLink AI",
    url: "https://triage.rohimaya.ai",
    urlDisplay: "triage.rohimaya.ai",
    description:
      "Universal clinical triage: structured differential, red flags, four-tier urgency, follow-up chat. Early commercial pilot with Stripe subscriptions, credit packs, usage caps, and email reminders.",
    stack:
      "Next.js 16 · TypeScript · Tailwind v4 · Claude API (Sonnet/Haiku) · Supabase · Stripe · Resend · Vercel",
  },
  {
    name: "HealthLiteracy AI",
    url: "https://literacy.rohimaya.ai",
    urlDisplay: "literacy.rohimaya.ai",
    description:
      "Free patient-facing tool that translates clinical discharge documents into plain language at three reading levels across 12 languages.",
    stack: "Next.js · Claude API · Supabase · PDF upload · Voice input",
  },
  {
    name: "ClearChannel by Vestara",
    url: "https://clearchannel-vestara.vercel.app",
    urlDisplay: "clearchannel-vestara.vercel.app",
    description:
      "Enterprise NLU routing simulator demonstrating IVR, chatbot, and agent assist channel handling for a fictional financial services firm. 18-intent NLU architecture with OpenAI voice integration.",
    stack: "Next.js 15 · Claude API · OpenAI Whisper · TTS",
  },
  {
    name: "FinanceLens AI",
    url: "https://financelens-ai.vercel.app",
    urlDisplay: "financelens-ai.vercel.app",
    description:
      "Structured analysis for filings and calls: drift, anchors, confidence rubric, compare mode, branded PDF, PPTX decks, 30-day share links. Assistive only, not financial advice.",
    stack: "Next.js 16 · React 19 · Claude API · Zod · Supabase · pdf-lib · pptxgenjs",
  },
];

const ABOUT_TOC = [
  { id: "how-i-work", label: "How I work" },
  { id: "what-i-built", label: "What I built" },
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
              AI Product Manager&nbsp;&nbsp;·&nbsp;&nbsp;AI Builder&nbsp;&nbsp;·&nbsp;&nbsp;UX Strategist
            </p>
            <div
              className="mt-4 h-px w-14 opacity-60"
              style={{ backgroundColor: "var(--gold)" }}
            />
          </FadeIn>

          <FadeIn delay={100}>
            <p
              className="mt-8 max-w-2xl font-body text-base leading-relaxed sm:text-lg"
              style={{ color: "rgba(244, 239, 230, 0.9)" }}
            >
              I&apos;m a Licensed Practical Nurse at PAM Health Rehabilitation
              Hospital of Westminster in Westminster, Colorado. I&apos;m also
              the founder of Rohimaya Health AI, where I design and build live
              AI products with working URLs, not mockups. I work in Cursor and
              ship with the Claude API. I&apos;m pursuing an MS in Artificial
              Intelligence and Machine Learning at CU Boulder, expected 2026
              (in progress, not completed). I co-founded Two Peaks Chai Co.
              with my spouse: a live artisan chai brand here in
              Westminster, rooted in my Southern US roots and his Mumbai
              heritage. Customers can order at{" "}
              <a
                href="https://twopeakschai.com"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 transition-opacity hover:opacity-90"
                style={{ color: "var(--gold)" }}
              >
                twopeakschai.com
              </a>
              .
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
                I build in Cursor, deploy to Vercel, and test on real documents, transcripts,
                and utterances. Then I iterate on the failure modes users would actually
                hit in production, not just demo paths.
              </li>
              <li>
                <span style={{ color: "var(--cream)" }}>I judge success by clarity of scope.</span>{" "}
                Someone using the product should know what it does, what it refuses to do,
                and what to do next, without mistaking an assistive tool for an authority
                they should not rely on alone.
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
                    {p.description}
                  </p>
                  <p
                    className="mt-1.5 font-body text-xs"
                    style={{ color: "rgba(244, 239, 230, 0.4)" }}
                  >
                    {p.stack}
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
              I have 15 years of healthcare operations leadership across acute
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
              I did not come from a product whiteboard. I came from the floor.
              Those 15 years were field research.
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
              I&apos;m targeting AI Product Manager, Head of Product, UX
              Strategist, Conversational AI Designer, and Founding PM roles.
              I&apos;m open to relocation. If this sounds like a fit, use the{" "}
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
              Product
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
              Conversational AI &amp; UX
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
              Technical Stack
            </h2>
            <div
              className="mt-3 h-px w-10 opacity-50"
              style={{ backgroundColor: "var(--gold)" }}
            />
            <div className="mt-6 flex flex-wrap gap-2">
              {techStack.map((tech) => (
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
              , and{" "}
              <a
                href="https://financelens-ai.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 transition-opacity hover:opacity-90"
                style={{ color: "var(--gold)" }}
              >
                FinanceLens AI
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