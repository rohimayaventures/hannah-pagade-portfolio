import GoldRule from "./GoldRule";

export default function ProcessSection() {
  return (
    <section className="mt-12">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="font-display text-2xl text-cream">
            Process
          </h2>
          <GoldRule />
        </div>
        <div className="text-sm font-body text-mid-gray">
          Placeholder content zone
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-light-gray bg-white/5 p-6">
          <div className="font-display text-lg text-cream">
            Step 1
          </div>
          <div className="mt-3 font-body text-mid-gray">
            TODO: Add discovery/constraints section for each case
            study.
          </div>
        </div>
        <div className="rounded-xl border border-light-gray bg-white/5 p-6">
          <div className="font-display text-lg text-cream">
            Step 2
          </div>
          <div className="mt-3 font-body text-mid-gray">
            TODO: Add design/system/product iteration details.
          </div>
        </div>
        <div className="rounded-xl border border-light-gray bg-white/5 p-6">
          <div className="font-display text-lg text-cream">
            Step 3
          </div>
          <div className="mt-3 font-body text-mid-gray">
            TODO: Add outcomes/impact and what shipped.
          </div>
        </div>
      </div>
    </section>
  );
}

