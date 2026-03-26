import GoldRule from "./GoldRule";

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
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="font-display text-2xl text-cream">
            Process
          </h2>
          <GoldRule />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-light-gray bg-white/5 p-6">
          <div className="font-display text-lg text-cream">
            Step 1
          </div>
          <div className="mt-3 font-body text-cream/80">
            {steps[0]}
          </div>
        </div>
        <div className="rounded-xl border border-light-gray bg-white/5 p-6">
          <div className="font-display text-lg text-cream">
            Step 2
          </div>
          <div className="mt-3 font-body text-cream/80">
            {steps[1]}
          </div>
        </div>
        <div className="rounded-xl border border-light-gray bg-white/5 p-6">
          <div className="font-display text-lg text-cream">
            Step 3
          </div>
          <div className="mt-3 font-body text-cream/80">
            {steps[2]}
          </div>
        </div>
      </div>

      {impactLine ? (
        <div className="mt-8 rounded-xl border border-light-gray bg-white/5 p-6">
          <div className="font-display text-lg text-cream">
            Impact
          </div>
          <p className="mt-3 font-body text-cream/80">
            {impactLine}
          </p>
        </div>
      ) : null}
    </section>
  );
}

