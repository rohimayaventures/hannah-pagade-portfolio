import { readFileSync } from "node:fs";
import { join } from "node:path";
import {
  caseStudies,
  getCaseStudyBySlug,
} from "../content/caseStudies";
import {
  buildKaiCaseStudyAppendix,
  KAI_APPENDIX_MAX_CHARS,
} from "../src/lib/kaiCaseStudyAppendix";

const caseStudiesPath = join(__dirname, "../content/caseStudies.ts");
const caseStudiesRaw = readFileSync(caseStudiesPath, "utf8");

/** Hosts and legacy URLs Kai must never promote; keep out of public case study data. */
const FORBIDDEN_IN_CASE_STUDIES = [
  "orixlink.vercel.app",
  "health-literacy-ai.vercel.app",
  "moonlstudios.com",
] as const;

for (const needle of FORBIDDEN_IN_CASE_STUDIES) {
  if (caseStudiesRaw.toLowerCase().includes(needle)) {
    console.error(
      `[verify-content] Forbidden fragment in content/caseStudies.ts: ${needle} (Kai and the site use canonical rohimaya.ai / hannahkraulikpagade.com URLs). Remove or replace it.`,
    );
    process.exit(1);
  }
}

const appendix = buildKaiCaseStudyAppendix();
if (appendix.length > KAI_APPENDIX_MAX_CHARS) {
  console.error(
    `[verify-content] Kai case study appendix is ${appendix.length} chars (max ${KAI_APPENDIX_MAX_CHARS}). Tighten caps in src/lib/kaiCaseStudyAppendix.ts or trim content/caseStudies.ts.`,
  );
  process.exit(1);
}

const slugs = new Set<string>();

for (const study of caseStudies) {
  if (!study.slug?.trim()) {
    console.error("[verify-content] Missing slug on a case study entry.");
    process.exit(1);
  }
  if (slugs.has(study.slug)) {
    console.error(`[verify-content] Duplicate slug: ${study.slug}`);
    process.exit(1);
  }
  slugs.add(study.slug);

  const resolved = getCaseStudyBySlug(study.slug);
  if (!resolved || resolved !== study) {
    console.error(
      `[verify-content] getCaseStudyBySlug("${study.slug}") mismatch.`
    );
    process.exit(1);
  }

  if (!study.title?.trim() || !study.subtitle?.trim()) {
    console.error(`[verify-content] Missing title or subtitle: ${study.slug}`);
    process.exit(1);
  }

  const embed = study.embedUrl?.trim();
  if (embed && !embed.startsWith("https://")) {
    console.error(
      `[verify-content] embedUrl must use https:// for ${study.slug}`
    );
    process.exit(1);
  }
}

console.log(
  `[verify-content] OK — ${caseStudies.length} case studies, Kai appendix ${appendix.length}/${KAI_APPENDIX_MAX_CHARS} chars.`,
);
