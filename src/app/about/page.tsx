import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hannah Kraulik Pagade, LPN and founder of Rohimaya Health AI. Live AI products: OrixLink AI, HealthLiteracy AI, ClearChannel. MS AI/ML at CU Boulder (in progress). hannahkraulikpagade.com.",
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
  "Supabase",
  "Vercel",
  "Python",
  "Figma",
  "Cursor",
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero section */}
      <section
        className="relative w-full overflow-hidden px-6 py-16 sm:px-8 md:px-16"
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
              className="mb-4 text-xs font-body uppercase tracking-[0.2em]"
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
            <div
              className="mt-4 h-px w-16 opacity-60"
              style={{ backgroundColor: "var(--gold)" }}
            />
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed" style={{ color: "rgba(244, 239, 230, 0.9)" }}>
              I&apos;m a Licensed Practical Nurse at PAM Health Rehabilitation
              Hospital of Westminster in Westminster, Colorado. I&apos;m also
              the founder of Rohimaya Health AI, where I design and build live AI
              products with working URLs, not mockups. I work in Cursor and ship
              with the Claude API. I&apos;m pursuing an MS in Artificial
              Intelligence and Machine Learning at CU Boulder, expected 2026
              (in progress, not completed). I co-founded Two Peaks Chai Co. with
              my husband Prasad: an artisan chai brand here in Westminster, rooted
              in my Southern US roots and his Mumbai heritage.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-6 max-w-2xl font-body leading-relaxed" style={{ color: "rgba(244, 239, 230, 0.75)" }}>
              Portfolio:{" "}
              <a
                href="https://hannahkraulikpagade.com"
                className="underline underline-offset-4 transition-opacity hover:opacity-90"
                style={{ color: "var(--gold)" }}
              >
                hannahkraulikpagade.com
              </a>
              . LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/hannah-pagade"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 transition-opacity hover:opacity-90"
                style={{ color: "var(--gold)" }}
              >
                linkedin.com/in/hannah-pagade
              </a>
              .
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What I built */}
      <section
        className="w-full px-6 py-16 sm:px-8 md:px-16"
        style={{ backgroundColor: "#0a0f18" }}
      >
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="font-display text-2xl" style={{ color: "var(--cream)" }}>
              What I built and shipped
            </h2>
            <div
              className="mt-3 h-px w-10 opacity-50"
              style={{ backgroundColor: "var(--gold)" }}
            />
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mt-8 max-w-2xl font-body leading-relaxed" style={{ color: "rgba(244, 239, 230, 0.85)" }}>
              <a
                href="https://triage.rohimaya.ai"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 transition-opacity hover:opacity-90"
                style={{ color: "var(--gold)" }}
              >
                OrixLink AI
              </a>{" "}
              at triage.rohimaya.ai: a universal triage and diagnosis tool built
              on the Claude API. Any symptom, any person, no prior diagnosis
              required.
            </p>
            <p className="mt-5 max-w-2xl font-body leading-relaxed" style={{ color: "rgba(244, 239, 230, 0.85)" }}>
              <a
                href="https://literacy.rohimaya.ai"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 transition-opacity hover:opacity-90"
                style={{ color: "var(--gold)" }}
              >
                HealthLiteracy AI
              </a>{" "}
              at literacy.rohimaya.ai: a free patient-facing tool that translates
              clinical discharge documents into plain language at three reading
              levels across 12 languages.
            </p>
            <p className="mt-5 max-w-2xl font-body leading-relaxed" style={{ color: "rgba(244, 239, 230, 0.85)" }}>
              <a
                href="https://clearchannel-vestara.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 transition-opacity hover:opacity-90"
                style={{ color: "var(--gold)" }}
              >
                ClearChannel by Vestara
              </a>{" "}
              at clearchannel-vestara.vercel.app: an enterprise NLU routing
              simulator for a fictional financial services firm, with IVR,
              chatbot, and agent assist channel handling. Built with 18-intent NLU
              architecture and OpenAI voice integration.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* My background */}
      <section
        className="w-full px-6 py-16 sm:px-8 md:px-16"
        style={{ backgroundColor: "#0a0f18" }}
      >
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="font-display text-2xl" style={{ color: "var(--cream)" }}>
              My background
            </h2>
            <div
              className="mt-3 h-px w-10 opacity-50"
              style={{ backgroundColor: "var(--gold)" }}
            />
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mt-8 max-w-2xl font-body leading-relaxed" style={{ color: "rgba(244, 239, 230, 0.85)" }}>
              I have 15 years of healthcare operations leadership across acute
              care, post-acute rehabilitation, and senior living, and 15 years
              bedside and in operations. Real employers include Amberwood Post
              Acute Rehabilitation, Center at Northridge, and a senior living
              facility in Denver. I managed 130+ staff, achieved $1.2M in cost
              savings through workflow optimization, and maintained 96%
              regulatory audit success rates.
            </p>
            <p className="mt-6 max-w-2xl font-body leading-relaxed" style={{ color: "rgba(244, 239, 230, 0.85)" }}>
              I did not come from a product whiteboard. I came from the floor.
              Those 15 years were field research.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Role targets */}
      <section
        className="w-full px-6 py-16 sm:px-8 md:px-16"
        style={{ backgroundColor: "#0c1119" }}
      >
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="font-display text-2xl" style={{ color: "var(--cream)" }}>
              What I&apos;m looking for
            </h2>
            <div
              className="mt-3 h-px w-10 opacity-50"
              style={{ backgroundColor: "var(--gold)" }}
            />
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mt-8 max-w-2xl font-body leading-relaxed" style={{ color: "rgba(244, 239, 230, 0.85)" }}>
              I&apos;m targeting AI Product Manager, Head of Product,
              Conversational UX Strategist, Conversational AI Designer, and
              Founding PM roles. I&apos;m open to relocation. If this sounds like
              a fit, use the{" "}
              <Link
                href="/contact"
                className="underline underline-offset-4 transition-opacity hover:opacity-90"
                style={{ color: "var(--gold)" }}
              >
                contact form
              </Link>{" "}
              or{" "}
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

      {/* Skills sections */}
      <section
        className="w-full px-6 py-16 sm:px-8 md:px-16"
        style={{ backgroundColor: "#0a0f18" }}
      >
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="font-display text-2xl" style={{ color: "var(--cream)" }}>
              Product
            </h2>
            <div
              className="mt-3 h-px w-10 opacity-50"
              style={{ backgroundColor: "var(--gold)" }}
            />
            <div className="mt-6 flex flex-wrap gap-2.5">
              {productSkills.map((skill) => (
                <span
                  key={skill}
                  className="skill-chip inline-block rounded-full border px-4 py-2 font-body text-[13px]"
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

          <FadeIn delay={150}>
            <h2
              className="mt-14 font-display text-2xl"
              style={{ color: "var(--cream)" }}
            >
              Conversational AI &amp; UX
            </h2>
            <div
              className="mt-3 h-px w-10 opacity-50"
              style={{ backgroundColor: "var(--gold)" }}
            />
            <div className="mt-6 flex flex-wrap gap-2.5">
              {aiUxSkills.map((skill) => (
                <span
                  key={skill}
                  className="skill-chip inline-block rounded-full border px-4 py-2 font-body text-[13px]"
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

          <FadeIn delay={300}>
            <h2
              className="mt-14 font-display text-2xl"
              style={{ color: "var(--cream)" }}
            >
              Technical Stack
            </h2>
            <div
              className="mt-3 h-px w-10 opacity-50"
              style={{ backgroundColor: "var(--gold)" }}
            />
            <div className="mt-6 flex flex-wrap gap-2.5">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="skill-chip inline-block rounded-full border px-4 py-2 font-body text-[13px] font-mono"
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
        className="w-full px-6 py-16 sm:px-8 md:px-16"
        style={{ backgroundColor: "var(--obsidian)" }}
      >
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="font-display text-2xl" style={{ color: "var(--cream)" }}>
              Get in touch
            </h2>
            <div
              className="mt-3 h-px w-10 opacity-50"
              style={{ backgroundColor: "var(--gold)" }}
            />
            <p className="mt-6 max-w-2xl font-body leading-relaxed" style={{ color: "rgba(244, 239, 230, 0.9)" }}>
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
              , and{" "}
              <a
                href="https://clearchannel-vestara.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 transition-opacity hover:opacity-90"
                style={{ color: "var(--gold)" }}
              >
                ClearChannel by Vestara
              </a>
              .
            </p>
            <p className="mt-4 font-body text-sm italic" style={{ color: "rgba(244, 239, 230, 0.5)" }}>
              Resume available on request.
            </p>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="mt-12">
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 rounded-sm border px-6 py-3 font-body text-sm uppercase tracking-widest transition-all duration-200 hover:-translate-y-0.5"
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
