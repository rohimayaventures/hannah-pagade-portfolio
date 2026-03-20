import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="w-full px-8 pt-24 pb-20 md:px-16"
      style={{ backgroundColor: "var(--obsidian)" }}
    >
      <div className="mx-auto max-w-4xl">
        <p
          className="mb-6 text-xs font-[family-name:Arial,sans-serif] uppercase tracking-[0.2em] opacity-80"
          style={{ color: "var(--gold)" }}
        >
          Hannah Pagade
        </p>
        <h1
          className="mb-6 text-5xl leading-tight md:text-7xl"
          style={{ color: "var(--cream)", fontFamily: "Georgia, serif" }}
        >
          UX Strategist & Conversational AI Designer
        </h1>
        <p
          className="mb-8 max-w-2xl text-lg leading-relaxed opacity-90 md:text-xl"
          style={{ color: "var(--cream)", fontFamily: "Arial, sans-serif" }}
        >
          Multi-turn dialogue systems, intent architecture, and role-adaptive
          flows for high-stakes environments. Shipped OrixLink AI and
          HealthLiteracy AI. 15 years healthcare operations.
        </p>
        <div
          className="mb-10 h-px w-16 opacity-60"
          style={{ backgroundColor: "var(--gold)" }}
        />
        <div className="flex flex-wrap gap-4">
          <Link
            href="/#work"
            className="inline-flex items-center rounded-sm border border-gold px-5 py-3 text-sm font-[family-name:Arial,sans-serif] uppercase tracking-widest transition-colors hover:bg-gold hover:text-obsidian"
            style={{ color: "var(--gold)" }}
          >
            View Work
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-sm border border-light-gray px-5 py-3 text-sm font-[family-name:Arial,sans-serif] uppercase tracking-widest transition-colors hover:border-gold hover:text-gold"
            style={{ color: "var(--cream)", borderColor: "rgba(244,239,230,0.4)" }}
          >
            Contact
          </Link>
          <a
            href="https://www.linkedin.com/in/hannah-pagade"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-5 py-3 text-sm font-[family-name:Arial,sans-serif] uppercase tracking-widest opacity-80 transition-opacity hover:opacity-100"
            style={{ color: "var(--cream)" }}
          >
            LinkedIn →
          </a>
        </div>
      </div>
    </section>
  );
}
