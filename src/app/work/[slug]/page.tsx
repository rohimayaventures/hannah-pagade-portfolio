import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Layout from "@/components/Layout";
import CaseStudyHero from "@/components/CaseStudyHero";
import EmbedBlock from "@/components/EmbedBlock";
import ProcessSection from "@/components/ProcessSection";
import NextStudyCard from "@/components/NextStudyCard";
import {
  caseStudies,
  getCaseStudyBySlug,
} from "@/content/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) return { title: "Not Found" };
  return {
    title: study.title,
    description: study.subtitle,
  };
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) notFound();
  const isComingSoon = study.status === "coming-soon";

  return (
    <Layout>
      <article className="bg-obsidian text-cream">
        <CaseStudyHero caseStudy={study} />

        <div className="mx-auto max-w-6xl px-6 pb-16 pt-10 sm:px-8 md:px-16">
          {isComingSoon ? (
            <section
              className="rounded-xl p-8"
              style={{
                border: "1px solid rgba(200, 169, 110, 0.2)",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
              }}
            >
              <h2 className="font-display text-2xl text-cream">
                In Progress
              </h2>
              <p
                className="mt-4 max-w-3xl font-body"
                style={{ color: "rgba(244, 239, 230, 0.8)" }}
              >
                {study.projectDescription}
              </p>
              <div className="mt-6 inline-flex items-center rounded-full border border-gold px-4 py-2 text-sm font-body text-gold">
                This project is currently in development.
              </div>
            </section>
          ) : (
            <>
              <EmbedBlock
                embedType={study.embedType}
                embedUrl={study.embedUrl}
                title={study.title}
              />
              {study.processSteps ? (
                <ProcessSection
                  steps={study.processSteps}
                  impactLine={study.impactLine}
                />
              ) : null}
            </>
          )}
          <NextStudyCard current={study} />
        </div>
      </article>
    </Layout>
  );
}

