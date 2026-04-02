"use client";

import { useState } from "react";

export type ProcessInteractiveStep = {
  number: string;
  label: string;
  phase: string;
  title: string;
  body: string;
};

type ProcessSideNavProps = {
  steps: ProcessInteractiveStep[];
};

export default function ProcessSideNav({ steps }: ProcessSideNavProps) {
  const [active, setActive] = useState(0);
  const current = steps[active];

  return (
    <section className="mt-12 w-full">
      <div
        className="flex flex-col overflow-hidden rounded-xl md:flex-row"
        style={{
          border: "1px solid rgba(255,255,255,0.08)",
          backgroundColor: "rgba(255,255,255,0.04)",
        }}
      >
        <nav
          className="flex w-full shrink-0 flex-row gap-1 overflow-x-auto border-[rgba(255,255,255,0.08)] p-3 md:w-[160px] md:flex-col md:gap-0 md:border-r md:p-0"
          aria-label="Process steps"
        >
          {steps.map((step, i) => {
            const isActive = i === active;
            return (
              <button
                key={`${step.number}-${step.label}`}
                type="button"
                onClick={() => setActive(i)}
                className="flex min-w-[120px] flex-col items-start gap-1 rounded-md border-l-2 border-transparent px-3 py-3 text-left transition-colors md:w-full md:rounded-none md:px-4"
                style={{
                  borderLeftColor: isActive ? "#C8A96E" : "transparent",
                  backgroundColor: isActive
                    ? "rgba(200, 169, 110, 0.08)"
                    : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor =
                      "rgba(255,255,255,0.04)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }
                }}
              >
                <span
                  className="font-mono text-xs text-gold"
                  style={{ opacity: isActive ? 1 : 0.65 }}
                >
                  {step.number}
                </span>
                <span
                  className="font-body text-sm"
                  style={{
                    color: isActive
                      ? "#F4EFE6"
                      : "rgba(244, 239, 230, 0.65)",
                  }}
                >
                  {step.label}
                </span>
              </button>
            );
          })}
        </nav>

        <div
          className="min-h-[320px] flex-1 border-t p-6 md:border-l md:border-t-0 md:p-8"
          style={{
            borderColor: "rgba(255,255,255,0.08)",
          }}
        >
          {current ? (
            <>
              <p
                className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold"
                style={{ opacity: 0.85 }}
              >
                {current.phase}
              </p>
              <h3 className="font-display mt-4 text-2xl text-cream md:text-3xl">
                {current.title}
              </h3>
              <p
                className="font-body mt-4 max-w-3xl text-[15px] leading-relaxed md:text-base"
                style={{ color: "rgba(244, 239, 230, 0.72)" }}
              >
                {current.body}
              </p>
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}
