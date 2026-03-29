import { caseStudies } from "@/content/caseStudies";
import CaseStudyCard from "./CaseStudyCard";
import FadeIn from "./FadeIn";

export default function CaseStudyGrid() {
  const sorted = [...caseStudies].sort((a, b) => a.order - b.order);

  return (
    <section
      id="work"
      className="work-section relative w-full overflow-hidden px-6 py-20 sm:px-8 md:px-16"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[rgba(8,12,20,0.05)] to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(rgba(8, 12, 20, 0.06) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-12 md:mb-14">
            <p className="mb-3 font-body text-[11px] uppercase tracking-[0.2em] text-gold-on-light">
              Selected Work
            </p>
            <h2 className="max-w-xl font-display text-2xl leading-tight text-obsidian md:text-3xl">
              Live products and case studies
            </h2>
            <div
              className="mt-4 h-0.5 w-12 rounded-full bg-gradient-to-r from-gold-on-light to-gold-on-light/25"
              aria-hidden
            />
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
          {sorted.map((study, i) => (
            <FadeIn key={study.slug} delay={i * 100}>
              <CaseStudyCard study={study} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
