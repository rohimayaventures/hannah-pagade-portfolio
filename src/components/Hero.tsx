"use client";

import Link from "next/link";
import { useCallback, useState, type MouseEvent } from "react";

const focusPills = [
  { label: "Product & discovery", href: "/#work" },
  { label: "Conversational AI", href: "/#work" },
  { label: "Agentic & MCP", href: "/work/ask-hannah-mcp" },
  { label: "Clinical & high-stakes UX", href: "/about" },
] as const;

export default function Hero() {
  const [glow, setGlow] = useState({ x: 50, y: 45 });

  const onMove = useCallback((e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setGlow({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    });
  }, []);

  return (
    <section
      className="hero-shell relative w-full overflow-hidden px-6 pt-20 pb-20 sm:px-8 sm:pt-24 sm:pb-24 md:px-16 md:pb-28"
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
        <h1
          className="font-display tracking-tight"
          style={{ color: "var(--cream)" }}
        >
          <span className="mb-5 block text-4xl leading-[1.06] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Hannah Kraulik Pagade
          </span>
          <span className="mb-3 block text-3xl leading-[1.08] sm:text-4xl md:text-5xl lg:text-6xl">
            AI product leader
          </span>
        </h1>
        <p
          className="mb-6 font-display text-2xl leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl"
        >
          <span className="hero-gradient-text">
            Product management &amp; UX design
          </span>
        </p>
        <p
          className="mb-8 max-w-2xl font-body text-base leading-relaxed opacity-90 sm:text-lg md:text-xl"
          style={{ color: "var(--cream)" }}
        >
          I own strategy and launch for AI products: priorities and rollout, plus
          multi-turn and high-stakes experience design—not only screens and
          prototypes. Live work across health, finance, and enterprise
          conversation, plus agentic infrastructure (Ask Hannah MCP: live HTTP MCP
          on Railway, registered in Claude.ai), with hands-on execution when the
          team is small.
        </p>

        {/* Interactive focus chips */}
        <div className="mb-10 flex flex-wrap gap-2 md:gap-3">
          {focusPills.map((pill) => (
            <Link
              key={pill.label}
              href={pill.href}
              className="hero-pill group inline-flex min-h-[44px] items-center rounded-full border px-4 py-2.5 text-[11px] font-body uppercase tracking-widest shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-gold hover:shadow-[0_0_24px_rgba(200,169,110,0.24)] active:scale-[0.98]"
              style={{
                borderColor: "rgba(200, 169, 110, 0.42)",
                backgroundColor: "rgba(8, 12, 20, 0.88)",
                color: "var(--cream)",
              }}
            >
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full transition-transform group-hover:scale-125" style={{ backgroundColor: "rgba(200, 169, 110, 0.8)" }} />
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
        <div className="flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:gap-4">
          <Link
            href="/#work"
            className="hero-cta-primary inline-flex min-h-[44px] w-full items-center justify-center rounded-sm border px-5 py-3 text-[13px] font-body uppercase tracking-widest transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-12px_rgba(200,169,110,0.55)] sm:w-auto sm:px-6 sm:py-3.5 sm:text-sm"
            style={{
              borderColor: "var(--gold)",
              backgroundColor: "var(--gold)",
              color: "var(--obsidian)",
            }}
          >
            View Work
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-sm border px-5 py-3 text-[13px] font-body uppercase tracking-widest transition-all duration-200 hover:-translate-y-0.5 sm:w-auto sm:px-6 sm:py-3.5 sm:text-sm"
            style={{
              borderColor: "rgba(244,239,230,0.65)",
              backgroundColor: "rgba(8, 12, 20, 0.92)",
              color: "var(--cream)",
            }}
          >
            Contact
          </Link>
          <a
            href="https://www.linkedin.com/in/hannah-pagade"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-sm border px-5 py-3 text-[13px] font-body uppercase tracking-widest transition-all duration-200 hover:-translate-y-0.5 sm:w-auto sm:px-6 sm:py-3.5 sm:text-sm"
            style={{
              borderColor: "rgba(200, 169, 110, 0.45)",
              color: "var(--cream)",
              backgroundColor: "rgba(200, 169, 110, 0.06)",
            }}
          >
            LinkedIn →
          </a>
        </div>
      </div>
    </section>
  );
}
