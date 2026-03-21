import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch about product, UX strategy, conversational AI design, or collaboration.",
};

export default function ContactPage() {
  return (
    <Layout>
      <section
        className="w-full px-8 py-16 md:px-16"
        style={{ backgroundColor: "var(--obsidian)" }}
      >
        <div className="mx-auto max-w-4xl">
          <p
            className="mb-4 text-xs font-[family-name:Arial,sans-serif] uppercase tracking-[0.2em] opacity-80"
            style={{ color: "var(--gold)" }}
          >
            Contact
          </p>
          <h1
            className="mb-6 text-4xl leading-tight md:text-5xl"
            style={{ color: "var(--cream)", fontFamily: "Georgia, serif" }}
          >
            Let&apos;s talk
          </h1>
          <p
            className="mb-8 max-w-2xl text-lg leading-relaxed opacity-90"
            style={{ color: "var(--cream)", fontFamily: "Arial, sans-serif" }}
          >
            Interested in working together? Send a message — I&apos;ll respond
            from my inbox. For a faster connection, you can also reach me on
            LinkedIn.
          </p>
          <div
            className="mb-10 h-px w-16 opacity-60"
            style={{ backgroundColor: "var(--gold)" }}
          />

          <div
            className="max-w-xl rounded-sm border p-8 md:p-10"
            style={{
              borderColor: "rgba(200, 169, 110, 0.25)",
              backgroundColor: "rgba(8, 12, 20, 0.6)",
            }}
          >
            <ContactForm />
          </div>

          <p
            className="mt-10 max-w-xl font-body text-sm opacity-70"
            style={{ color: "var(--cream)" }}
          >
            Prefer LinkedIn?{" "}
            <a
              href="https://www.linkedin.com/in/hannah-pagade"
              target="_blank"
              rel="noreferrer"
              className="text-gold transition-opacity hover:opacity-80"
            >
              Connect with me there
            </a>
            .
          </p>

          <div className="mt-14">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 font-body text-sm uppercase tracking-widest text-gold transition-opacity hover:opacity-80"
            >
              View selected work →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
