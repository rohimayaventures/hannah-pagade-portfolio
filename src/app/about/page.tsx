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
              AI product manager, conversational UX strategist, and builder. I
              take products from zero to one and design the conversation systems,
              intent architectures, and multi-turn flows that make AI work in
              complex, regulated environments.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-6 max-w-2xl font-body text-cream/75 leading-relaxed">
              Three live products in production right now:{" "}
              <a
                href="https://triage.rohimaya.ai"
                target="_blank"
                rel="noreferrer"
                className="text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
              >
                OrixLink AI
              </a>{" "}
              (clinical triage and diagnosis),{" "}
              <a
                href="https://literacy.rohimaya.ai"
                target="_blank"
                rel="noreferrer"
                className="text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
              >
                HealthLiteracy AI
              </a>{" "}
              (patient document translation across 12 languages), and{" "}
              <a
                href="https://clearchannel-vestara.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
              >
                ClearChannel by Vestara
              </a>{" "}
              (enterprise NLU routing for financial services). Each one built end
              to end: product strategy, conversation design, prompt architecture,
              and full-stack delivery.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Background narrative */}
      <section
        className="w-full px-6 py-16 sm:px-8 md:px-16"
        style={{ backgroundColor: "#0a0f18" }}
      >
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="font-display text-2xl text-cream">Background</h2>
            <div
              className="mt-3 h-px w-10 opacity-50"
              style={{ backgroundColor: "var(--gold)" }}
            />
          </FadeIn>
          <FadeIn delay={100}>
            <p className="mt-8 max-w-2xl font-body text-cream/80 leading-relaxed">
              I spent 15 years in enterprise operations and healthcare leadership
              across acute care, rehabilitation, and post-acute settings. I led
              EHR implementations, care coordination platform rollouts, and
              cross-functional programs spanning clinical, IT, compliance, and
              operations teams. That work taught me how complex organizations
              actually make decisions, where technology fails its users, and what
              it takes to ship in regulated environments.
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-6 max-w-2xl font-body text-cream/80 leading-relaxed">
              I left the bedside to build the products that should have existed
              all along. Now I design conversational AI systems, intent
              architectures, and multi-turn dialogue flows for healthcare,
              financial services, and enterprise SaaS. I bring discovery
              research, stakeholder facilitation, and product strategy together
              with the technical ability to ship what I design.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              <div>
                <p
                  className="font-body text-xs uppercase tracking-widest"
                  style={{ color: "var(--gold)", opacity: 0.7 }}
                >
                  Education
                </p>
                <p className="mt-2 font-body text-sm text-cream/90 leading-relaxed">
                  MS, Artificial Intelligence &amp; Machine Learning
                  <br />
                  <span className="text-cream/60">
                    University of Colorado Boulder — Expected 2026
                  </span>
                </p>
              </div>
              <div>
                <p
                  className="font-body text-xs uppercase tracking-widest"
                  style={{ color: "var(--gold)", opacity: 0.7 }}
                >
                  Location
                </p>
                <p className="mt-2 font-body text-sm text-cream/90 leading-relaxed">
                  Westminster, CO
                  <br />
                  <span className="text-cream/60">
                    Open to SF, remote, and hybrid
                  </span>
                </p>
              </div>
            </div>
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
                href="https://triage.rohimaya.ai"
                target="_blank"
                rel="noreferrer"
                className="text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
              >
                OrixLink AI
              </a>
              ,{" "}
              <a
                href="https://literacy.rohimaya.ai"
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
            <p className="mt-4 font-body text-sm text-cream/50 italic">
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
