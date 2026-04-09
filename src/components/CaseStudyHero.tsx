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
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 md:py-14">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="w-full">
            {caseStudy.tagline ? (
              <p className="mb-4 font-body text-sm uppercase tracking-[0.12em] text-gold">
                {caseStudy.tagline}
              </p>
            ) : null}
            <h1 className="break-words font-display text-3xl leading-tight text-cream sm:text-4xl md:text-6xl">
              {caseStudy.title}
            </h1>
            <GoldRule centered />
            <p
              className="mx-auto mt-6 max-w-3xl break-words font-body text-base sm:text-lg md:text-2xl"
              style={{ color: "rgba(244, 239, 230, 0.8)" }}
            >
              {caseStudy.problemStatement ?? caseStudy.subtitle}
            </p>
          </div>

          {(caseStudy.role || caseStudy.timeline) && (
            <div
              className="flex min-w-0 flex-wrap items-center justify-center gap-x-4 gap-y-1 font-body text-sm"
              style={{ color: "rgba(244, 239, 230, 0.8)" }}
            >
              {caseStudy.role && (
                <span className="min-w-0 break-words">{caseStudy.role}</span>
              )}
              {caseStudy.timeline && (
                <span className="min-w-0 shrink-0 break-words">
                  {caseStudy.timeline}
                </span>
              )}
            </div>
          )}

          <div className="flex flex-wrap justify-center gap-2">
            {caseStudy.tags.map((tag) => (
              <TagChip key={tag} tag={tag} />
            ))}
          </div>

          <div
            className="max-w-md rounded-xl px-4 py-3 text-sm font-body"
            style={{
              border: "1px solid rgba(200, 169, 110, 0.2)",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              color: "rgba(244, 239, 230, 0.8)",
            }}
          >
            Status: {statusLabel}
          </div>
        </div>
      </div>
    </header>
  );
}
