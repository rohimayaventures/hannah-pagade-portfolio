import type { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Layout from "@/components/Layout";
import CaseStudyHero from "@/components/CaseStudyHero";
import EmbedBlock from "@/components/EmbedBlock";
import HonestSummary from "@/components/HonestSummary";
import ImpactClose from "@/components/ImpactClose";
import NextStudyCard from "@/components/NextStudyCard";
import PivotAccordion from "@/components/PivotAccordion";
import ProcessSection from "@/components/ProcessSection";
import ProcessSideNav from "@/components/ProcessSideNav";
import ProofPointBlock from "@/components/ProofPointBlock";
import ShippedGrid from "@/components/ShippedGrid";
import StackRow from "@/components/StackRow";
import StatsRow from "@/components/StatsRow";
import WhatThisDemonstrates from "@/components/WhatThisDemonstrates";
import { caseStudies, getCaseStudyBySlug } from "@/content/caseStudies";
import { ogDescription } from "@/lib/seo";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

/** Cancels root `mt-12` on ProcessSection / ProcessSideNav / ShippedGrid / StackRow / HonestSummary when using parent `gap-12` (matches ProcessSection vertical rhythm). */
function StripSectionTopMargin({ children }: { children: ReactNode }) {
  return <div className="[&>section]:mt-0">{children}</div>;
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

  const hasInteractive =
    study.processStepsInteractive &&
    study.processStepsInteractive.length > 0;
  const showStackRow =
    (study.stackHighlighted && study.stackHighlighted.length > 0) ||
    (study.stackStandard && study.stackStandard.length > 0);

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
            <div className="flex flex-col gap-12">
              {study.proofPoint ?
                <ProofPointBlock proofPoint={study.proofPoint} />
              : null}

              {study.stats && study.stats.length > 0 ?
                <StatsRow stats={study.stats} />
              : null}

              <EmbedBlock
                key={study.slug}
                embedType={study.embedType}
                embedUrl={study.embedUrl}
                title={study.title}
              />

              {hasInteractive ?
                <StripSectionTopMargin>
                  <ProcessSideNav steps={study.processStepsInteractive!} />
                </StripSectionTopMargin>
              : study.processSteps ?
                <StripSectionTopMargin>
                  <ProcessSection
                    steps={study.processSteps}
                    impactLine={study.impactLine}
                  />
                </StripSectionTopMargin>
              : null}

              {study.pivots && study.pivots.length > 0 ?
                <PivotAccordion pivots={study.pivots} />
              : null}

              {study.shippedCards && study.shippedCards.length > 0 ?
                <StripSectionTopMargin>
                  <ShippedGrid cards={study.shippedCards} />
                </StripSectionTopMargin>
              : null}

              {showStackRow ?
                <StripSectionTopMargin>
                  <StackRow
                    highlighted={study.stackHighlighted ?? []}
                    standard={study.stackStandard ?? []}
                  />
                </StripSectionTopMargin>
              : null}

              {study.whatThisDemonstrates &&
              study.whatThisDemonstrates.length > 0 ?
                <WhatThisDemonstrates items={study.whatThisDemonstrates} />
              : null}

              {study.honestSummary ?
                <StripSectionTopMargin>
                  <HonestSummary summary={study.honestSummary} />
                </StripSectionTopMargin>
              : null}

              {study.impactQuote ?
                <ImpactClose
                  quote={study.impactQuote}
                  primaryLabel={
                    study.liveUrl?.trim() ?
                      `Try ${study.title}`
                    : undefined
                  }
                  primaryHref={
                    study.liveUrl?.trim() ? study.liveUrl : undefined
                  }
                />
              : null}
            </div>
          )}
          <NextStudyCard current={study} />
        </div>
      </article>
    </Layout>
  );
}
