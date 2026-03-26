"use client";

import FadeIn from "./FadeIn";
import GoldRule from "./GoldRule";

const stepLabels = ["Discovery", "Design & Build", "What Shipped"] as const;

type ProcessSectionProps = {
  steps: [string, string, string];
  impactLine?: string;
};

export default function ProcessSection({
  steps,
  impactLine,
}: ProcessSectionProps) {
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

      <div className="mt-8 flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-5">
        {steps.map((step, i) => (
          <FadeIn key={i} delay={i * 120}>
            <div className="process-step flex gap-4 md:flex-col md:gap-0">
              <div className="flex shrink-0 flex-col items-center md:flex-row md:items-center md:gap-3 md:mb-4">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full border text-sm font-body"
                  style={{
                    borderColor: "rgba(200, 169, 110, 0.4)",
                    color: "var(--gold)",
                    backgroundColor: "rgba(200, 169, 110, 0.06)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span
                  className="mt-2 text-[10px] font-body uppercase tracking-widest md:mt-0"
                  style={{ color: "var(--gold)", opacity: 0.7 }}
                >
                  {stepLabels[i]}
                </span>
              </div>
              <div className="rounded-xl border border-gold/20 bg-white/5 p-6 flex-1">
                <div className="font-body text-cream/80 text-[15px] leading-relaxed">
                  {step}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {impactLine && (
        <FadeIn delay={400}>
          <div className="mt-8 rounded-xl border border-gold/20 bg-white/5 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(200, 169, 110, 0.1)" }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
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
            <p className="font-body text-cream/80 leading-relaxed">
              {impactLine}
            </p>
          </div>
        </FadeIn>
      )}
    </section>
  );
}
