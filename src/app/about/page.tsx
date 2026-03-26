import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Product and UX strategist — conversational AI, dialogue systems, intent architecture, and high-stakes clinical UX. 15 years healthcare operations.",
};

const productSkills = [
  "0-to-1 Product Development",
  "Discovery & User Research",
  "Outcome-Driven Roadmapping",
  "Stakeholder Alignment",
  "Clinical Workflow Analysis",
  "Regulatory-Aware Strategy",
  "Cross-Functional Leadership",
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
  "Enterprise Application Design",
];

const techStack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "React",
  "Claude API",
  "Supabase",
  "Vercel",
  "Python",
  "Figma",
  "FHIR",
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
            <h1 className="font-display text-4xl text-cream md:text-5xl">
              Hannah Kraulik Pagade
            </h1>
            <div
              className="mt-4 h-px w-16 opacity-60"
              style={{ backgroundColor: "var(--gold)" }}
            />
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-cream/90">
              Product and UX strategist who builds AI products from zero to one
              and designs the conversation systems that make them work in
              high-stakes, regulated environments.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-6 max-w-2xl font-body text-cream/75 leading-relaxed">
              I designed and shipped the complete conversation UX for OrixLink
              AI, a live clinical triage product on the Claude API — including
              NLU-informed intent modeling, escalation patterns, and prompt
              architecture across mobile and web. I bring 15 years of enterprise
              stakeholder facilitation and a track record of translating complex
              business requirements into intuitive conversational experiences.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Skills sections */}
      <section
        className="w-full px-6 py-16 sm:px-8 md:px-16"
        style={{ backgroundColor: "#0c1119" }}
      >
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="font-display text-2xl text-cream">Product</h2>
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
            <h2 className="mt-14 font-display text-2xl text-cream">
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
            <h2 className="mt-14 font-display text-2xl text-cream">
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
            <h2 className="font-display text-2xl text-cream">Get in touch</h2>
            <div
              className="mt-3 h-px w-10 opacity-50"
              style={{ backgroundColor: "var(--gold)" }}
            />
            <p className="mt-6 max-w-2xl font-body text-cream/90 leading-relaxed">
              Use the{" "}
              <Link
                href="/contact"
                className="text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
              >
                contact form
              </Link>{" "}
              to reach me, or connect on{" "}
              <a
                href="https://www.linkedin.com/in/hannah-pagade"
                target="_blank"
                rel="noreferrer"
                className="text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
              >
                LinkedIn
              </a>
              . Explore the live products:{" "}
              <a
                href="https://orixlink.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
              >
                OrixLink AI
              </a>
              ,{" "}
              <a
                href="https://health-literacy-ai.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
              >
                HealthLiteracy AI
              </a>
              , and{" "}
              <a
                href="https://clearchannel-vestara.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
              >
                ClearChannel by Vestara
              </a>
              .
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
