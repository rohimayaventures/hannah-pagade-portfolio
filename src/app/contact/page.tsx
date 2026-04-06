import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import type { Metadata } from "next";

const contactDesc =
  "Contact Hannah Kraulik Pagade about AI product management, AI product design, live portfolio work, or collaboration.";

export const metadata: Metadata = {
  title: "Contact",
  description: contactDesc,
  openGraph: {
    title: "Contact",
    description: contactDesc,
    url: "/contact",
    type: "website",
    siteName: "Hannah Kraulik Pagade",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Contact — Hannah Kraulik Pagade",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Hannah Kraulik Pagade",
    description: contactDesc,
    images: ["/opengraph-image"],
  },
};

export default function ContactPage() {
  return (
    <Layout>
      <section
        className="relative w-full overflow-hidden px-6 py-16 sm:px-8 md:px-16"
        style={{ backgroundColor: "var(--obsidian)" }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(200, 169, 110, 0.12) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(200, 169, 110, 0.12) 0%, transparent 70%)",
          }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-4xl">
          <FadeIn>
            <p
              className="mb-4 text-xs font-body uppercase tracking-[0.2em] opacity-80"
              style={{ color: "var(--gold)" }}
            >
              Contact
            </p>
            <h1
              className="mb-6 font-display text-4xl leading-tight md:text-5xl"
              style={{ color: "var(--cream)" }}
            >
              Let&apos;s talk
            </h1>
            <p
              className="mb-8 max-w-2xl font-body text-lg leading-relaxed opacity-90"
              style={{ color: "var(--cream)" }}
            >
              Interested in AI product management, AI product design, or
              collaboration on LLM-powered products? Send a message. I&apos;ll
              respond from my inbox. For a faster connection, reach me on
              LinkedIn.
            </p>
            <div
              className="mb-10 h-px w-16 opacity-60"
              style={{ backgroundColor: "var(--gold)" }}
            />
          </FadeIn>

          <FadeIn delay={150}>
            <div
              className="max-w-xl rounded-md border p-8 shadow-[0_16px_48px_-12px_rgba(0,0,0,0.5)] md:p-10"
              style={{
                borderColor: "rgba(200, 169, 110, 0.25)",
                backgroundColor: "rgba(12, 17, 25, 0.8)",
              }}
            >
              <ContactForm />
            </div>
          </FadeIn>

          <FadeIn delay={250}>
            <p
              className="mt-10 max-w-xl font-body text-sm opacity-70"
              style={{ color: "var(--cream)" }}
            >
              Prefer LinkedIn?{" "}
              <a
                href="https://www.linkedin.com/in/hannah-pagade"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[44px] items-center text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
              >
                Connect with me there
              </a>
              .
            </p>

            <div className="mt-14">
              <Link
                href="/#work"
                className="inline-flex min-h-[44px] items-center gap-2 font-body text-sm uppercase tracking-widest text-gold transition-opacity hover:opacity-80"
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
