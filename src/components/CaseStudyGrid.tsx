import { caseStudies } from "@/content/caseStudies";
import CaseStudyCard from "./CaseStudyCard";

export default function CaseStudyGrid() {
  const studies = [...caseStudies].sort((a, b) => a.order - b.order);

  return (
    <section className="bg-obsidian py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8">
          <h2 className="font-display text-2xl text-cream md:text-3xl">
            Case Studies
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {studies.map((study) => (
            <CaseStudyCard
              key={study.slug}
              caseStudy={study}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

