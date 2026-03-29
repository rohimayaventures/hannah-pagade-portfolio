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
import { ogDescription } from "@/lib/seo";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return { title: "Not Found" };

  const descSource = study.cardSummary ?? study.subtitle;
  const description = ogDescription(descSource);
  const pageTitle = study.title;
  const ogTitle = `${pageTitle} | Hannah Kraulik Pagade`;
  const ogImagePath = study.coverImage || "/opengraph-image";
  const ogImage =
    study.coverImage ?
      {
        url: study.coverImage,
        alt: `${study.title} — case study preview`,
      }
    : {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${study.title} — Hannah Kraulik Pagade portfolio`,
      };

  return {
    title: pageTitle,
    description,
    openGraph: {
      title: ogTitle,
      description,
      url: `/work/${study.slug}`,
      type: "article",
      siteName: "Hannah Kraulik Pagade",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [ogImagePath],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
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
                key={study.slug}
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

