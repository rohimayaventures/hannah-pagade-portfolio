import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Layout from "@/components/Layout";
import AskHannahMcpConnectSection from "@/components/AskHannahMcpConnectSection";
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
import TagChip from "@/components/TagChip";
import StickyWorkNav from "@/components/StickyWorkNav";
import WhatThisDemonstrates from "@/components/WhatThisDemonstrates";
import { caseStudies, getCaseStudyBySlug } from "@/content/caseStudies";
import { ogDescription } from "@/lib/seo";

const comingSoonNotifyButtonClass =
  "inline-flex min-h-[44px] items-center justify-center rounded-full border border-gold px-6 py-2.5 font-body text-sm text-gold transition-colors hover:bg-[rgba(200,169,110,0.08)]";

const arcPreviewPoints = [
  "Ori — real-time Claude-powered agent, one question per turn",
  "Live architecture panel — builds as you talk, not after you finish",
  "Shareable URL — every completed session gets a permanent link",
] as const;

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

  const workNavSectionDefs = [
    {
      id: "proof-point",
      label: "Proof point",
      show: Boolean(study.proofPoint),
    },
    {
      id: "the-problem",
      label: "The problem",
      show: Boolean(study.stats?.length),
    },
    {
      id: "mcp-connect",
      label: "Use in Claude",
      show: study.slug === "ask-hannah-mcp",
    },
    {
      id: "live-demo",
      label: "Live demo",
      show:
        study.status === "live" && study.slug !== "ask-hannah-mcp",
    },
    {
      id: "process",
      label: "Process",
      show: Boolean(
        study.processStepsInteractive?.length || study.processSteps?.length,
      ),
    },
    {
      id: "pivots",
      label: "Pivots",
      show: Boolean(study.pivots?.length),
    },
    {
      id: "what-shipped",
      label: "What shipped",
      show: Boolean(study.shippedCards?.length),
    },
    {
      id: "tech-stack",
      label: "Tech stack",
      show: Boolean(
        study.stackHighlighted?.length || study.stackStandard?.length,
      ),
    },
    {
      id: "what-this-demonstrates",
      label: "What this demonstrates",
      show: Boolean(study.whatThisDemonstrates?.length),
    },
    {
      id: "the-honest-summary",
      label: "The honest summary",
      show: Boolean(study.honestSummary),
    },
    {
      id: "impact",
      label: "Impact",
      show: Boolean(study.impactQuote),
    },
  ] as const;

  const workNavSections = workNavSectionDefs
    .filter((s) => s.show)
    .map(({ id, label }) => ({ id, label }));

  const showWorkNav =
    !isComingSoon && workNavSections.length >= 2;

  return (
    <Layout>
      <article className="bg-obsidian text-cream">
        <CaseStudyHero caseStudy={study} />

        <div
          className={
            showWorkNav ?
              "mx-auto flex w-full max-w-6xl flex-col px-6 pb-16 pt-10 sm:px-8 md:px-16 lg:max-w-[calc(72rem+2.5rem+10.5rem)] lg:flex-row lg:items-start lg:gap-10"
            : "mx-auto max-w-6xl px-6 pb-16 pt-10 sm:px-8 md:px-16"
          }
        >
          {showWorkNav ?
            <aside className="hidden shrink-0 lg:block">
              <StickyWorkNav sections={workNavSections} />
            </aside>
          : null}
          <div
            className={
              showWorkNav ? "min-w-0 flex-1 max-w-6xl" : undefined
            }
          >
          {isComingSoon ? (
            <div className="flex flex-col gap-12">
              <section className="mt-0">
                <div
                  className="rounded-xl p-6 md:p-8"
                  style={{
                    border: "1px solid rgba(200, 169, 110, 0.2)",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <span
                    className="inline-flex items-center rounded-full border px-3 py-1 font-body text-[10px] uppercase tracking-widest"
                    style={{
                      borderColor: "rgba(200, 169, 110, 0.4)",
                      color: "var(--gold)",
                      backgroundColor: "rgba(200, 169, 110, 0.06)",
                    }}
                  >
                    In development
                  </span>
                  <p
                    className="mt-6 max-w-3xl font-body text-[15px] leading-relaxed md:text-base"
                    style={{ color: "rgba(244, 239, 230, 0.85)" }}
                  >
                    {study.projectDescription}
                  </p>
                  <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                    {arcPreviewPoints.map((line) => (
                      <div
                        key={line}
                        className="rounded-xl p-6"
                        style={{
                          border: "1px solid rgba(200, 169, 110, 0.2)",
                          backgroundColor: "rgba(255, 255, 255, 0.05)",
                        }}
                      >
                        <p
                          className="font-body text-[15px] leading-relaxed md:text-base"
                          style={{ color: "rgba(244, 239, 230, 0.85)" }}
                        >
                          {line}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p
                    className="mt-8 font-body text-sm md:text-base"
                    style={{ color: "rgba(244, 239, 230, 0.72)" }}
                  >
                    Full build and live demo in progress.
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/contact"
                      className={comingSoonNotifyButtonClass}
                    >
                      Get notified when it launches
                    </Link>
                  </div>
                </div>
              </section>

              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <TagChip key={tag} tag={tag} />
                ))}
              </div>

              <NextStudyCard current={study} />
            </div>
          ) : (
            <div className="flex flex-col gap-12">
              {study.proofPoint ?
                <ProofPointBlock proofPoint={study.proofPoint} />
              : null}

              {study.stats && study.stats.length > 0 ?
                <StatsRow
                  stats={study.stats}
                  eyebrow="The problem"
                  title="The stakes are not abstract"
                />
              : null}

              {study.slug === "ask-hannah-mcp" ?
                <AskHannahMcpConnectSection />
              : null}

              {study.slug !== "ask-hannah-mcp" ?
                <EmbedBlock
                  key={study.slug}
                  embedType={study.embedType}
                  embedUrl={study.embedUrl}
                  title={study.title}
                />
              : null}

              {hasInteractive ?
                <StripSectionTopMargin>
                  <ProcessSideNav
                    steps={study.processStepsInteractive!}
                    eyebrow="Process"
                    title="How it was built"
                  />
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
                <PivotAccordion
                  pivots={study.pivots}
                  eyebrow="Pivots"
                  title="What changed and why"
                />
              : null}

              {study.shippedCards && study.shippedCards.length > 0 ?
                <StripSectionTopMargin>
                  <ShippedGrid
                    cards={study.shippedCards}
                    eyebrow="What shipped"
                    title="Every layer, production-ready"
                  />
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
                <WhatThisDemonstrates
                  items={study.whatThisDemonstrates}
                  eyebrow="What this demonstrates"
                  title="For every audience"
                />
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
          {!isComingSoon ?
            <NextStudyCard current={study} />
          : null}
          </div>
        </div>
      </article>
    </Layout>
  );
}
