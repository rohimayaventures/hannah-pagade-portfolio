"use client";

import { useState } from "react";

type SummaryBlock = {
  label: string;
  body: string;
};

type HonestSummaryProps = {
  summary: {
    technical: SummaryBlock;
    product: SummaryBlock;
    design: SummaryBlock;
  };
};

const CARDS: Array<{
  key: "technical" | "product" | "design";
  tagLabel: string;
  styles: { bg: string; color: string; border: string };
}> = [
  {
    key: "technical",
    tagLabel: "TECHNICAL UNDERSTANDING",
    styles: {
      bg: "rgba(100,220,160,0.1)",
      color: "#6DDFA0",
      border: "rgba(100,220,160,0.2)",
    },
  },
  {
    key: "product",
    tagLabel: "PRODUCT UNDERSTANDING",
    styles: {
      bg: "rgba(100,160,255,0.1)",
      color: "#7EB8FF",
      border: "rgba(100,160,255,0.2)",
    },
  },
  {
    key: "design",
    tagLabel: "DESIGN UNDERSTANDING",
    styles: {
      bg: "rgba(200,169,110,0.1)",
      color: "#C8A96E",
      border: "rgba(200,169,110,0.2)",
    },
  },
];

export default function HonestSummary({ summary }: HonestSummaryProps) {
  const [openKey, setOpenKey] = useState<
    "technical" | "product" | "design" | null
  >(null);

  return (
    <section className="mt-12 w-full">
      <div className="mx-auto max-w-6xl">
        <p
          className="font-mono text-[10px] uppercase tracking-[0.2em]"
          style={{ color: "rgba(244, 239, 230, 0.5)" }}
        >
          The honest summary
        </p>
        <h2 className="font-display mt-4 text-2xl text-cream md:text-3xl">
          Three ways to understand this work
        </h2>

        <div className="mt-8 grid grid-cols-1 items-start gap-5 md:grid-cols-3 md:gap-6">
          {CARDS.map(({ key, tagLabel, styles }) => {
            const block = summary[key];
            const expanded = openKey === key;
            return (
              <div
                key={key}
                className="flex h-full flex-col rounded-xl p-5 md:p-6"
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                  backgroundColor: "rgba(255,255,255,0.04)",
                  alignSelf: "start",
                }}
              >
                <span
                  className="inline-flex w-fit rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider"
                  style={{
                    backgroundColor: styles.bg,
                    color: styles.color,
                    borderColor: styles.border,
                  }}
                >
                  {tagLabel}
                </span>
                <h3 className="font-display mt-4 text-lg leading-snug text-cream md:text-xl">
                  {block.label}
                </h3>
                <div
                  className="mt-4 h-px w-full"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                />
                <div
                  className={`font-body mt-4 text-sm leading-relaxed md:text-[15px] ${expanded ? "" : "line-clamp-3 max-md:line-clamp-none"}`}
                  style={{ color: "rgba(244, 239, 230, 0.72)" }}
                >
                  {block.body}
                </div>
                <button
                  type="button"
                  className="mt-4 inline-flex min-h-[44px] w-fit items-center font-body text-left text-sm text-gold transition-opacity hover:opacity-90"
                  onClick={() => setOpenKey(expanded ? null : key)}
                >
                  {expanded ? "Show less" : "Read more"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
