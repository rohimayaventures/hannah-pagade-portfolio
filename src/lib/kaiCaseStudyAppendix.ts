import { caseStudies, type CaseStudy } from "@/content/caseStudies";

/** Kai appendix: keep each block small so system prompt stays predictable for cost and focus. */
const MAX_PROOF_BODY = 500;
const MAX_PROOF_VERDICT = 180;
const MAX_PIVOT_LESSON = 120;
const MAX_ITEM_BODY = 145;
const MAX_CARD_SUMMARY = 300;
const MAX_KEY_OUTCOME = 200;
const MAX_ONE_LINER = 220;
const MAX_TAGLINE = 120;
const MAX_STAT_LABEL = 100;
const MAX_STAT_SOURCE = 52;
const MAX_STATS_PER_STUDY = 2;
const MAX_PIVOTS = 5;
const MAX_SHIPPED_CARDS = 4;
const MAX_WHAT_DEMONSTRATES = 5;

/** Hard ceiling on the full appendix string (UTF-16-ish length); CI enforces this. */
export /** CI fails above this; raise only after trimming case study copy or tightening caps above. */
const KAI_APPENDIX_MAX_CHARS = 14_600;

function trunc(s: string, max: number): string {
  const t = s.trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max - 1).trim()}…`;
}

function formatStudy(study: CaseStudy): string {
  const lines: string[] = [];
  const url =
    study.liveUrl?.replace(/\/$/, "") ||
    study.embedUrl?.replace(/\/$/, "") ||
    "";

  lines.push(`## ${study.title}`);
  lines.push(`Slug: ${study.slug} | Status: ${study.status}${url ? ` | URL: ${url}` : ""}`);
  if (study.tagline) lines.push(`Tagline: ${trunc(study.tagline, MAX_TAGLINE)}`);
  if (study.role) lines.push(`Role: ${study.role}`);
  if (study.timeline) lines.push(`Timeline: ${study.timeline}`);
  if (study.keyOutcome) {
    lines.push(`Key outcome: ${trunc(study.keyOutcome, MAX_KEY_OUTCOME)}`);
  }
  if (study.cardSummary) {
    lines.push(`Card summary: ${trunc(study.cardSummary, MAX_CARD_SUMMARY)}`);
  } else if (study.subtitle) {
    lines.push(`Subtitle: ${trunc(study.subtitle, MAX_CARD_SUMMARY)}`);
  }

  if (study.proofPoint) {
    lines.push(
      `Proof point (${study.proofPoint.label}): ${trunc(study.proofPoint.body, MAX_PROOF_BODY)}`,
    );
    lines.push(`Verdict: ${trunc(study.proofPoint.verdict, MAX_PROOF_VERDICT)}`);
  }

  if (study.stats?.length) {
    lines.push(
      "Stats:",
      ...study.stats.slice(0, MAX_STATS_PER_STUDY).map(
        (s) =>
          `  - ${s.number} - ${trunc(s.label, MAX_STAT_LABEL)} (${trunc(s.source, MAX_STAT_SOURCE)})`,
      ),
    );
  }

  if (study.processAngle) {
    lines.push(`Process angle: ${trunc(study.processAngle, MAX_ONE_LINER)}`);
  }
  if (study.impactLine) {
    lines.push(`Impact line: ${trunc(study.impactLine, MAX_ONE_LINER)}`);
  }
  if (study.impactQuote) {
    lines.push(`Impact quote: ${trunc(study.impactQuote, MAX_ONE_LINER)}`);
  }

  if (study.pivots?.length) {
    lines.push("Pivots:");
    for (const p of study.pivots.slice(0, MAX_PIVOTS)) {
      lines.push(
        `  - [${p.tag}] ${p.title}. Lesson: ${trunc(p.lesson, MAX_PIVOT_LESSON)}`,
      );
    }
  }

  if (study.shippedCards?.length) {
    lines.push("What shipped (titles):");
    lines.push(
      ...study.shippedCards
        .slice(0, MAX_SHIPPED_CARDS)
        .map((c) => `  - ${c.title}: ${trunc(c.body, MAX_ITEM_BODY)}`),
    );
  }

  if (study.whatThisDemonstrates?.length) {
    lines.push("What this demonstrates:");
    for (const w of study.whatThisDemonstrates.slice(0, MAX_WHAT_DEMONSTRATES)) {
      lines.push(
        `  - [${w.tag}] ${w.title}: ${trunc(w.body, MAX_ITEM_BODY)}`,
      );
    }
  }

  if (study.honestSummary) {
    lines.push("Honest summary:");
    lines.push(
      `  - ${study.honestSummary.technical.label}: ${trunc(study.honestSummary.technical.body, MAX_ITEM_BODY)}`,
      `  - ${study.honestSummary.product.label}: ${trunc(study.honestSummary.product.body, MAX_ITEM_BODY)}`,
      `  - ${study.honestSummary.design.label}: ${trunc(study.honestSummary.design.body, MAX_ITEM_BODY)}`,
    );
  }

  return lines.filter(Boolean).join("\n");
}

/**
 * Compact case study depth for Kai. Built from the same `caseStudies` data as
 * the public `/work/*` pages so it tracks the website. Root `*-CASE-STUDY.md`
 * files are authoring references; when long-form docs add facts not here,
 * extend `content/caseStudies.ts` or add a short manual block to SYSTEM_PROMPT.
 */
export function buildKaiCaseStudyAppendix(): string {
  const sorted = [...caseStudies].sort((a, b) => a.order - b.order);
  const body = sorted.map(formatStudy).join("\n\n---\n\n");
  const head =
    "CASE STUDY DEPTH (same source as portfolio work pages; facts here should match what visitors read on the site):\n\n";
  return `${head}${body}`;
}
