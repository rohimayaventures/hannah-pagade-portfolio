"use client";

import Link from "next/link";
import Image from "next/image";
import AskHannahMcpCardCover from "./AskHannahMcpCardCover";
import TagChip from "./TagChip";
import type { CaseStudy } from "@/content/caseStudies";

const statusLabel: Record<string, string> = {
  live: "Live",
  "coming-soon": "Coming Soon",
};

const statusDot: Record<string, string> = {
  live: "#4ade80",
  "coming-soon": "#C8A96E",
};

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  const summary = study.cardSummary ?? study.subtitle;
  /** `cardSummary` is written for the grid card; showing `keyOutcome` too usually duplicates it. */
  const showKeyOutcome =
    Boolean(study.keyOutcome) && study.cardSummary == null;

  return (
    <Link
      href={`/work/${study.slug}`}
      className="group block overflow-hidden rounded-md border shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-16px_rgba(8,12,20,0.3),0_0_0_1px_rgba(200,169,110,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      style={{
        backgroundColor: "var(--white)",
        borderColor: "var(--light-gray)",
      }}
    >
      <div
        className="card-image-wrap relative h-[200px] w-full overflow-hidden"
        style={{ backgroundColor: "var(--obsidian)" }}
      >
        {study.slug === "ask-hannah-mcp" && study.coverImage ? (
          <AskHannahMcpCardCover />
        ) : study.coverImage ? (
          <Image
            src={study.coverImage}
            alt={study.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="transition-transform duration-500 ease-out group-hover:scale-105"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div
            className="relative flex h-full w-full items-end p-5"
            style={{
              background:
                "linear-gradient(135deg, var(--obsidian) 0%, #0f1623 40%, #141d2e 70%, #1a2438 100%)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(200, 169, 110, 0.2) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div
              className="pointer-events-none absolute right-6 top-6 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              style={{ background: "rgba(200, 169, 110, 0.15)" }}
            />
            <span
              className="font-display text-[56px] leading-none tracking-tight opacity-20 transition-opacity duration-300 group-hover:opacity-35"
              style={{
                color: "var(--gold)",
                letterSpacing: "-0.04em",
              }}
            >
              {study.title.charAt(0)}
            </span>
          </div>
        )}
        <div
          className="absolute right-3 top-3 z-10 flex items-center gap-1.5 rounded-sm border px-2.5 py-1"
          style={{
            backgroundColor: "rgba(8, 12, 20, 0.85)",
            borderColor: "rgba(200, 169, 110, 0.3)",
          }}
        >
          <div
            className="h-1.5 w-1.5 shrink-0 rounded-full"
            style={{
              backgroundColor: statusDot[study.status] ?? "#9ca3af",
            }}
          />
          <span
            className="text-[10px] font-body uppercase tracking-wider"
            style={{ color: "var(--cream)" }}
          >
            {statusLabel[study.status] ?? study.status}
          </span>
        </div>
      </div>

      <div className="p-5 pt-5">
        {(study.role || study.timeline) && (
          <div
            className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-0 font-body text-xs"
            style={{ color: "rgba(8, 12, 20, 0.72)" }}
          >
            {study.role && <span>{study.role}</span>}
            {study.role && study.timeline && (
              <span aria-hidden className="opacity-50">
                ·
              </span>
            )}
            {study.timeline && <span>{study.timeline}</span>}
          </div>
        )}
        <h3
          className="mb-2 font-display text-xl leading-snug"
          style={{ color: "var(--obsidian)" }}
        >
          {study.title}
        </h3>
        {showKeyOutcome && (
          <p className="mb-2 font-body text-sm font-medium" style={{ color: "rgba(8, 12, 20, 0.9)" }}>
            {study.keyOutcome}
          </p>
        )}
        <p
          className="mb-4 break-words font-body text-sm leading-relaxed"
          style={{ color: "rgba(8, 12, 20, 0.72)" }}
        >
          {summary}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {study.tags.map((tag) => (
              <TagChip key={tag} tag={tag} />
            ))}
          </div>
          <span
            className="text-xs font-body opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ color: "var(--gold-on-light)" }}
          >
            View →
          </span>
        </div>
      </div>
    </Link>
  );
}
