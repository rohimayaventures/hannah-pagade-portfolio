import {
  caseStudies,
  getCaseStudyBySlug,
} from "../content/caseStudies";

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
}

console.log(`[verify-content] OK — ${caseStudies.length} case studies.`);
