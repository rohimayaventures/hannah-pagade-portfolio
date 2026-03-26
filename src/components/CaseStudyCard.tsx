"use client";

import Link from "next/link";
import Image from "next/image";
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
  const displaySummary =
    summary.length > 120 ? `${summary.slice(0, 120).trim()}…` : summary;

  return (
    <Link
      href={`/work/${study.slug}`}
      className="group block overflow-hidden rounded-md border shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-gold/80 hover:shadow-[0_20px_50px_-20px_rgba(8,12,20,0.25),0_0_0_1px_rgba(200,169,110,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      style={{
        backgroundColor: "var(--white)",
        borderColor: "var(--light-gray)",
      }}
    >
      <div
        className="relative h-[200px] w-full overflow-hidden"
        style={{ backgroundColor: "var(--obsidian)" }}
      >
        {study.coverImage ? (
          <Image
            src={study.coverImage}
            alt={study.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div
            className="flex h-full w-full items-end p-5"
            style={{
              background:
                "linear-gradient(135deg, var(--obsidian) 0%, #0f1623 60%, #1a1f2e 100%)",
            }}
          >
            <span
              className="font-display text-[48px] leading-none tracking-tight opacity-30"
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
          className="absolute right-3 top-3 flex items-center gap-1.5 rounded-sm border px-2.5 py-1"
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
          <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-0 font-body text-xs" style={{ color: "var(--mid-gray)" }}>
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
          style={{
            color: "var(--obsidian)",
          }}
        >
          {study.title}
        </h3>
        {study.keyOutcome && (
          <p className="mb-2 font-body text-sm font-medium text-obsidian/90">
            {study.keyOutcome}
          </p>
        )}
        <p
          className="mb-4 font-body text-sm leading-relaxed"
          style={{ color: "var(--mid-gray)" }}
        >
          {displaySummary}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {study.tags.map((tag) => (
            <TagChip key={tag} tag={tag} />
          ))}
        </div>
      </div>
    </Link>
  );
}
