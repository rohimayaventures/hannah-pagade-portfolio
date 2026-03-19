import Link from "next/link";
import type { CaseStudy } from "@/content/caseStudies";
import TagChip from "./TagChip";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
};

export default function CaseStudyCard({
  caseStudy,
}: CaseStudyCardProps) {
  return (
    <Link
      href={`/work/${caseStudy.slug}`}
      className="group block h-full"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-xl border border-light-gray bg-cream transition-colors group-hover:border-gold">
        <div className="relative">
          {caseStudy.coverImage ? (
            // TODO: Add real cover images when assets are ready.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={caseStudy.coverImage}
              alt={caseStudy.title}
              className="h-48 w-full object-cover"
            />
          ) : (
            <div className="h-48 w-full bg-light-gray" />
          )}
        </div>

        <div className="flex flex-1 flex-col gap-4 p-5">
          <div>
            <h3 className="font-display text-xl text-obsidian">
              {caseStudy.title}
            </h3>
            <p className="mt-2 font-body text-sm text-mid-gray">
              {caseStudy.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {caseStudy.tags.map((tag) => (
              <TagChip key={tag} tag={tag} />
            ))}
          </div>

          <div className="mt-auto text-sm font-body text-mid-gray">
            View deep-dive
          </div>
        </div>
      </article>
    </Link>
  );
}

