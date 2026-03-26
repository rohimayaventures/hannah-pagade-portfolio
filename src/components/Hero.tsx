"use client";

import Link from "next/link";
import { useCallback, useState } from "react";

const focusPills = [
  { label: "Product & discovery", href: "/#work" },
  { label: "Conversational AI", href: "/#work" },
  { label: "Clinical & high-stakes UX", href: "/about" },
] as const;

export default function Hero() {
  const [glow, setGlow] = useState({ x: 50, y: 45 });

  const onMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setGlow({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  }, []);

  return (
    <section
      className="hero-shell relative w-full overflow-hidden px-8 pt-24 pb-24 md:px-16 md:pb-28"
      style={{ backgroundColor: "var(--obsidian)" }}
      onMouseMove={onMove}
      onMouseLeave={() => setGlow({ x: 50, y: 45 })}
    >
      {/* Ambient orbs */}
      <div
        className="hp-orb hp-orb-a pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full blur-3xl md:h-[520px] md:w-[520px]"
        style={{
          background:
            "radial-gradient(circle, rgba(200, 169, 110, 0.22) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div
        className="hp-orb hp-orb-b pointer-events-none absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full blur-3xl md:h-[480px] md:w-[480px]"
        style={{
          background:
            "radial-gradient(circle, rgba(100, 130, 180, 0.12) 0%, transparent 68%)",
        }}
        aria-hidden
      />
      {/* Cursor-follow spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-[background] duration-300 ease-out"
        style={{
          background: `radial-gradient(520px circle at ${glow.x}% ${glow.y}%, rgba(200, 169, 110, 0.14) 0%, transparent 55%)`,
        }}
        aria-hidden
      />
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(rgba(200, 169, 110, 0.12) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-4xl">
        <p
          className="mb-5 text-xs font-[family-name:Arial,sans-serif] uppercase tracking-[0.2em] opacity-90"
          style={{ color: "var(--gold)" }}
        >
          Hannah Pagade
        </p>
        <h1
          className="mb-3 text-4xl leading-[1.08] tracking-tight md:text-6xl lg:text-7xl"
          style={{ fontFamily: "Georgia, serif", color: "var(--cream)" }}
        >
          Product &amp; UX Strategist
        </h1>
        <p
          className="mb-6 text-3xl leading-tight tracking-tight md:text-5xl lg:text-6xl"
          style={{ fontFamily: "Georgia, serif" }}
        >
          <span className="hero-gradient-text">Conversational AI</span>
          <span style={{ color: "var(--cream)" }}> designer</span>
        </p>
        <p
          className="mb-8 max-w-2xl text-lg leading-relaxed opacity-90 md:text-xl"
          style={{ color: "var(--cream)", fontFamily: "Arial, sans-serif" }}
        >
          From discovery and prioritization to shipped AI products: multi-turn
          dialogue, intent architecture, and role-adaptive flows in regulated,
          high-stakes environments. Live work: OrixLink AI &amp; HealthLiteracy
          AI. 15 years in healthcare operations.
        </p>

        {/* Interactive focus chips */}
        <div className="mb-10 flex flex-wrap gap-2 md:gap-3">
          {focusPills.map((pill) => (
            <Link
              key={pill.label}
              href={pill.href}
              className="hero-pill group inline-flex items-center rounded-full border px-4 py-2.5 text-[11px] font-[family-name:Arial,sans-serif] uppercase tracking-widest shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-gold hover:shadow-[0_0_24px_rgba(200,169,110,0.24)] active:scale-[0.98]"
              style={{
                borderColor: "rgba(200, 169, 110, 0.42)",
                backgroundColor: "rgba(8, 12, 20, 0.88)",
                color: "var(--cream)",
              }}
            >
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-gold/80 transition-transform group-hover:scale-125 group-hover:bg-gold" />
              {pill.label}
            </Link>
          ))}
        </div>

        <div
          className="mb-10 h-px w-20 opacity-70"
          style={{
            background:
              "linear-gradient(90deg, var(--gold), rgba(200, 169, 110, 0.15))",
          }}
        />
        <div className="flex flex-wrap gap-4">
          <Link
            href="/#work"
            className="hero-cta-primary inline-flex items-center rounded-sm border border-gold bg-gold/10 px-6 py-3.5 text-sm font-[family-name:Arial,sans-serif] uppercase tracking-widest text-gold shadow-[0_0_0_1px_rgba(200,169,110,0.15)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold hover:text-obsidian hover:shadow-[0_12px_40px_-12px_rgba(200,169,110,0.55)]"
          >
            View Work
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-sm border px-6 py-3.5 text-sm font-[family-name:Arial,sans-serif] uppercase tracking-widest text-cream transition-all duration-200 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
            style={{ borderColor: "rgba(244,239,230,0.35)" }}
          >
            Contact
          </Link>
          <a
            href="https://www.linkedin.com/in/hannah-pagade"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-6 py-3.5 text-sm font-[family-name:Arial,sans-serif] uppercase tracking-widest text-cream/75 transition-all duration-200 hover:-translate-y-0.5 hover:text-cream"
          >
            LinkedIn →
          </a>
        </div>
      </div>
    </section>
  );
}
