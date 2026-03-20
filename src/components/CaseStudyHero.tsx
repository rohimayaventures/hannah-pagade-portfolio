import GoldRule from "./GoldRule";
import TagChip from "./TagChip";
import type { CaseStudy } from "@/content/caseStudies";

type CaseStudyHeroProps = {
  caseStudy: CaseStudy;
};

export default function CaseStudyHero({
  caseStudy,
}: CaseStudyHeroProps) {
  const statusLabel = caseStudy.status === "live" ? "Live" : "Coming Soon";

  return (
    <header className="w-full bg-obsidian">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-col gap-6">
          <div>
            {caseStudy.tagline ? (
              <p className="mb-4 font-body text-sm uppercase tracking-[0.12em] text-gold">
                {caseStudy.tagline}
              </p>
            ) : null}
            <h1 className="font-display text-4xl leading-tight text-cream md:text-6xl">
              {caseStudy.title}
            </h1>
            <GoldRule />
            <p className="mt-6 max-w-3xl font-body text-lg text-mid-gray md:text-2xl">
              {caseStudy.problemStatement ?? caseStudy.subtitle}
            </p>
          </div>

          {(caseStudy.role || caseStudy.timeline) && (
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-body text-sm text-mid-gray">
              {caseStudy.role && <span>{caseStudy.role}</span>}
              {caseStudy.timeline && <span>{caseStudy.timeline}</span>}
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {caseStudy.tags.map((tag) => (
              <TagChip key={tag} tag={tag} />
            ))}
          </div>

          <div className="rounded-xl border border-light-gray bg-white/5 px-4 py-3 text-sm font-body text-mid-gray">
            Status: {statusLabel}
          </div>
        </div>
      </div>
    </header>
  );
}

