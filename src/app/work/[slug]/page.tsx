import { notFound } from "next/navigation";
import Layout from "@/components/Layout";
import CaseStudyHero from "@/components/CaseStudyHero";
import EmbedBlock from "@/components/EmbedBlock";
import ProcessSection from "@/components/ProcessSection";
import NextStudyCard from "@/components/NextStudyCard";
import MetaTag from "@/components/MetaTag";
import {
  caseStudies,
  getCaseStudyBySlug,
} from "@/content/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) notFound();

  return (
    <Layout>
      <MetaTag
        title={`${study.title} | Hannah Pagade`}
        description={study.subtitle}
      />

      <article className="bg-obsidian text-cream">
        <CaseStudyHero caseStudy={study} />

        <div className="mx-auto max-w-6xl px-4 pb-16 pt-10">
          <EmbedBlock
            embedType={study.embedType}
            embedUrl={study.embedUrl}
            title={study.title}
          />
          <ProcessSection />
          <NextStudyCard current={study} />
        </div>
      </article>
    </Layout>
  );
}

