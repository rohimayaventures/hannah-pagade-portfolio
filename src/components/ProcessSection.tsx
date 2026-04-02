"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import GoldRule from "./GoldRule";

const stepLabels3 = ["Discovery", "Design & Build", "What Shipped"] as const;
const stepLabels4 = [
  "Discovery",
  "Design & build",
  "Architecture",
  "Delivery",
] as const;

function MobileProcessStep({
  step,
  label,
  index,
}: {
  step: string;
  label: string;
  index: number;
}) {
  const [expanded, setExpanded] = useState(true);

  return (
    <details
      className="process-step-mobile md:hidden rounded-xl"
      style={{
        border: "1px solid rgba(200, 169, 110, 0.2)",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
      }}
      open={expanded}
      onToggle={(e) => setExpanded(e.currentTarget.open)}
    >
      <summary className="flex min-h-[44px] cursor-pointer items-center justify-between gap-3 px-4 py-3 text-left select-none">
        <span className="flex min-w-0 items-center gap-3">
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-body"
            style={{
              borderColor: "rgba(200, 169, 110, 0.4)",
              color: "var(--gold)",
              backgroundColor: "rgba(200, 169, 110, 0.06)",
            }}
            aria-hidden
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-display text-base leading-snug text-cream">
            {label}
          </span>
        </span>
        <span
          className="shrink-0 font-body text-[10px] uppercase tracking-widest"
          style={{ color: "var(--gold)", opacity: 0.75 }}
          aria-hidden
        >
          Tap
        </span>
      </summary>
      <div
        className="border-t px-4 pb-4 pt-3 font-body text-[15px] leading-relaxed sm:text-base"
        style={{
          borderColor: "rgba(200, 169, 110, 0.12)",
          color: "rgba(244, 239, 230, 0.85)",
        }}
      >
        {step}
      </div>
    </details>
  );
}

type ProcessSectionProps = {
  steps: [string, string, string] | [string, string, string, string];
  impactLine?: string;
};

export default function ProcessSection({
  steps,
  impactLine,
}: ProcessSectionProps) {
  const labels =
    steps.length === 4 ? stepLabels4 : stepLabels3;
  const gridClass =
    steps.length === 4
      ? "mt-8 flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-5"
      : "mt-8 flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-5";

  return (
    <section className="mt-12">
      <FadeIn>
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl text-cream">Process</h2>
            <GoldRule />
          </div>
        </div>
      </FadeIn>

      <div className={gridClass}>
        {steps.map((step, i) => (
          <FadeIn key={i} delay={i * 120}>
            <div className="process-step">
              <MobileProcessStep
                step={step}
                label={labels[i] ?? `Step ${i + 1}`}
                index={i}
              />

              {/* Desktop: three-column layout */}
              <div className="hidden gap-4 md:flex md:flex-col md:gap-0">
                <div className="mb-4 flex flex-row items-center gap-3">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-sm font-body"
                    style={{
                      borderColor: "rgba(200, 169, 110, 0.4)",
                      color: "var(--gold)",
                      backgroundColor: "rgba(200, 169, 110, 0.06)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <span
                    className="text-[10px] font-body uppercase tracking-widest"
                    style={{ color: "var(--gold)", opacity: 0.7 }}
                  >
                    {labels[i] ?? `Step ${i + 1}`}
                  </span>
                </div>
                <div
                  className="rounded-xl p-6"
                  style={{
                    border: "1px solid rgba(200, 169, 110, 0.2)",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <h3 className="mb-3 font-display text-lg leading-snug text-cream">
                    {labels[i] ?? `Step ${i + 1}`}
                  </h3>
                  <div
                    className="font-body text-[15px] leading-relaxed md:text-base"
                    style={{ color: "rgba(244, 239, 230, 0.8)" }}
                  >
                    {step}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {impactLine && (
        <FadeIn delay={400}>
          <div
            className="mt-8 rounded-xl p-6"
            style={{
              border: "1px solid rgba(200, 169, 110, 0.2)",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
            }}
          >
            <div className="mb-3 flex items-center gap-3">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(200, 169, 110, 0.1)" }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M7 1v12M1 7h12"
                    stroke="#C8A96E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="font-display text-lg text-cream">Impact</div>
            </div>
            <p
              className="font-body leading-relaxed"
              style={{ color: "rgba(244, 239, 230, 0.8)" }}
            >
              {impactLine}
            </p>
          </div>
        </FadeIn>
      )}
    </section>
  );
}
