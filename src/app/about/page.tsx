import Layout from "@/components/Layout";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Product and UX strategist — conversational AI, dialogue systems, intent architecture, and high-stakes clinical UX. 15 years healthcare operations.",
};

export default function AboutPage() {
  return (
    <Layout>
      <section
        id="about"
        className="mx-auto max-w-3xl px-8 py-16 md:px-12"
      >
        <h1 className="font-display text-4xl text-cream">
          About
        </h1>
        <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-cream/90">
          UX strategist and conversational AI designer who builds multi-turn
          dialogue systems, intent architectures, and role-adaptive conversation
          flows for high-stakes environments.
        </p>
        <p className="mt-6 max-w-2xl font-body text-cream/80">
          I designed and shipped the complete conversation UX for OrixLink AI, a
          live clinical triage product on the Claude API — including
          NLU-informed intent modeling, escalation patterns, and prompt
          architecture across mobile and web. I bring 15 years of enterprise
          stakeholder facilitation and a track record of translating complex
          business requirements into intuitive conversational experiences.
        </p>

        <h2 className="mt-12 font-display text-2xl text-cream">
          Core Competencies
        </h2>
        <ul className="mt-4 space-y-2 font-body text-cream/80">
          <li>• Conversation design: IVR, chatbot, AI-driven interfaces</li>
          <li>• Intent architecture, entity design, NLU model development</li>
          <li>• AI prompt writing and generative AI conversational strategy</li>
          <li>• Multi-turn dialogue systems and role-adaptive response architecture</li>
          <li>• Escalation interaction design and high-stakes conversational UX</li>
          <li>• Discovery facilitation and cross-functional stakeholder alignment</li>
          <li>• Enterprise-scale application design and delivery</li>
        </ul>

        <h2 className="mt-12 font-display text-2xl text-cream">
          Get in touch
        </h2>
        <p className="mt-4 font-body text-cream/90">
          Use the{" "}
          <Link href="/contact" className="text-gold underline hover:no-underline">
            contact form
          </Link>{" "}
          to reach me, or connect on{" "}
          <a
            href="https://www.linkedin.com/in/hannah-pagade"
            target="_blank"
            rel="noreferrer"
            className="text-gold underline hover:no-underline"
          >
            LinkedIn
          </a>
          . You can also explore{" "}
          <a
            href="https://orixlink.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="text-gold underline hover:no-underline"
          >
            OrixLink AI
          </a>{" "}
          (live product).
        </p>

        <div className="mt-12">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-body text-sm uppercase tracking-widest text-gold transition-opacity hover:opacity-80"
          >
            View selected work →
          </Link>
        </div>
      </section>
    </Layout>
  );
}
