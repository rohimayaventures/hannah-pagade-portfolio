import Link from "next/link";
import { caseStudies } from "@/content/caseStudies";
import type { CaseStudy } from "@/content/caseStudies";
import TagChip from "./TagChip";

type NextStudyCardProps = {
  current: CaseStudy;
};

export default function NextStudyCard({
  current,
}: NextStudyCardProps) {
  const ordered = [...caseStudies].sort((a, b) => a.order - b.order);
  const idx = ordered.findIndex((s) => s.slug === current.slug);
  const next = idx >= 0 ? ordered[(idx + 1) % ordered.length] : null;

  if (!next) return null;

  return (
    <section className="mt-14 rounded-xl border border-light-gray bg-white/5 p-6">
      <div className="font-display text-xl text-cream">
        Next Project
      </div>

      <div className="mt-4">
        <Link
          href={`/work/${next.slug}`}
          className="group block"
        >
          <div className="flex flex-col gap-4">
            <div>
              <div className="font-display text-2xl text-cream">
                {next.title}
              </div>
              <div className="mt-2 font-body text-mid-gray">
                {next.subtitle}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {next.tags.slice(0, 3).map((tag) => (
                <TagChip key={tag} tag={tag} />
              ))}
            </div>

            <div className="font-body text-gold transition-colors group-hover:text-cream">
              View deep-dive →
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

