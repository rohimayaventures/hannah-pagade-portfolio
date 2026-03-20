import Layout from "@/components/Layout";
import Link from "next/link";

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
        <p className="mt-6 max-w-2xl font-body text-mid-gray">
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
        <ul className="mt-4 space-y-2 font-body text-mid-gray">
          <li>• Conversation design: IVR, chatbot, AI-driven interfaces</li>
          <li>• Intent architecture, entity design, NLU model development</li>
          <li>• AI prompt writing and generative AI conversational strategy</li>
          <li>• Multi-turn dialogue systems and role-adaptive response architecture</li>
          <li>• Escalation interaction design and high-stakes conversational UX</li>
          <li>• Discovery facilitation and cross-functional stakeholder alignment</li>
          <li>• Enterprise-scale application design and delivery</li>
        </ul>

        <h2 id="contact" className="mt-12 font-display text-2xl text-cream">
          Contact
        </h2>
        <div className="mt-6 flex flex-col gap-3 font-body text-cream/90">
          <a
            href="mailto:hannah.pagade@gmail.com"
            className="transition-opacity hover:opacity-80"
          >
            hannah.pagade@gmail.com
          </a>
          <a
            href="tel:+19107894647"
            className="transition-opacity hover:opacity-80"
          >
            (910) 789-4647
          </a>
          <a
            href="https://linkedin.com/in/hannah-pagade"
            target="_blank"
            rel="noreferrer"
            className="transition-opacity hover:opacity-80"
          >
            LinkedIn
          </a>
          <a
            href="https://orixlink.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="transition-opacity hover:opacity-80"
          >
            OrixLink AI (live product)
          </a>
        </div>

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
