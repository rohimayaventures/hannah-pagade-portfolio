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
  const ordered = [...caseStudies].sort((a, b) => {
    const soon = (s: CaseStudy["status"]) => (s === "coming-soon" ? 1 : 0);
    const byStatus = soon(a.status) - soon(b.status);
    if (byStatus !== 0) return byStatus;
    return a.order - b.order;
  });
  const idx = ordered.findIndex((s) => s.slug === current.slug);
  const next = idx >= 0 ? ordered[(idx + 1) % ordered.length] : null;

  if (!next) return null;

  return (
    <section
      className="mt-14 w-full max-w-full rounded-xl p-6"
      style={{
        border: "1px solid rgba(200, 169, 110, 0.2)",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
      }}
    >
      <div className="font-display text-xl text-cream">
        Next Project
      </div>

      <div className="mt-4">
        <Link
          href={`/work/${next.slug}`}
          className="group block min-w-0"
        >
          <div className="flex min-w-0 flex-col gap-4">
            <div className="min-w-0">
              <div className="break-words font-display text-2xl text-cream">
                {next.title}
              </div>
              <div
                className="mt-2 break-words font-body"
                style={{ color: "rgba(244, 239, 230, 0.8)" }}
              >
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
