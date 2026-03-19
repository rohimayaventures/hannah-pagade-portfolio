export type EmbedType = "live" | "figma" | "loom" | "mixed";
export type CaseStudyStatus = "live" | "in-progress" | "concept";

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  coverImage: string;
  order: number;
  featured: boolean;
  embedType: EmbedType;
  embedUrl: string;
  liveUrl: string;
  status: CaseStudyStatus;
  processAngle: string;
};

// `coverImage` and embed publish URLs are placeholders until final assets/links are added.
export const caseStudies: CaseStudy[] = [
  {
    featured: true,
    order: 1,
    slug: "orixlink-ai",
    title: "OrixLink AI",
    subtitle:
      "Universal clinical triage and diagnosis. Any symptom, any person, no prior diagnosis required.",
    tags: ["clinical-ai", "product-design", "full-stack"],
    embedType: "live",
    embedUrl: "https://orixlink.vercel.app",
    liveUrl: "https://orixlink.vercel.app",
    status: "live",
    coverImage: "",
    processAngle:
      "Built end to end on Claude API, Next.js, Tailwind v4, Supabase, and Vercel. Includes a production refusal protocol designed around compartment syndrome false-negative risk.",
  },
  {
    order: 2,
    featured: false,
    slug: "ai-lab",
    title: "AI Lab",
    subtitle:
      "Four live AI consoles spanning computer vision, RAG, clinical triage, and voice sales.",
    tags: ["ai-product", "full-stack", "product-design"],
    embedType: "live",
    embedUrl: "https://www.moonlstudios.com/ai-lab",
    liveUrl: "https://www.moonlstudios.com/ai-lab",
    status: "live",
    coverImage: "",
    processAngle:
      "Gryffindor, Ravenclaw, Hufflepuff, and Slytherin themed consoles. Each demo is a distinct AI modality built and deployed independently.",
  },
  {
    order: 3,
    featured: false,
    embedType: "figma",
    embedUrl: "",
    liveUrl: "",
    status: "in-progress",
    slug: "meridian-oracle",
    title: "Meridian Oracle Design System",
    subtitle:
      "A full design system built for clinical AI products. Obsidian, gold, and cream with Georgia and Arial type pairing.",
    tags: ["design-systems", "product-design", "brand"],
    coverImage: "",
    processAngle:
      "Token-based color system, typography scale, component library, and documentation. Figma publish pending.",
  },
  {
    featured: false,
    order: 4,
    slug: "clinical-triage-dashboard",
    title: "Clinical Triage Dashboard",
    subtitle:
      "Live triage dashboard demo built for acute care and post-acute settings.",
    tags: ["clinical-ai", "product-design", "ux-research"],
    embedType: "live",
    embedUrl: "https://moonlitstudios.com",
    liveUrl: "https://moonlitstudios.com",
    status: "live",
    coverImage: "",
    processAngle:
      "Designed from 15 years of acute rehab and post-acute operations. Built to surface what charge nurses actually need, not what EHR vendors assume they need.",
  },
  {
    embedUrl: "",
    featured: false,
    order: 5,
    slug: "project-moonfire",
    title: "Project Moonfire",
    subtitle:
      "A streaming platform UX concept. Interaction design, information architecture, and visual systems for a premium content experience.",
    tags: ["product-design", "ux-research", "figma"],
    embedType: "figma",
    liveUrl: "",
    status: "concept",
    coverImage: "",
    processAngle:
      "Concept not yet built. Figma file in progress. This case study will be updated with embed URL once the Figma publish is complete.",
  },
];

export function getFeaturedCaseStudies() {
  return [...caseStudies]
    .sort((a, b) => a.order - b.order)
    .filter((c) => c.featured);
}

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

// FLEX MECHANIC: To reorder without a rebuild, change the `order` field values above.
// featured: true forces full-width treatment on the homepage grid.
//
// STARZ application order: STARZ (1, featured), Meridian Oracle (2), Clinical Triage (3), OrixLink (4), AI Lab (5)
// Sully.ai / clinical AI order: OrixLink (1, featured), Clinical Triage (2), AI Lab (3), Meridian Oracle (4), STARZ (5)
// Default launch order: OrixLink (1, featured), AI Lab (2), Meridian Oracle (3), Clinical Triage (4), STARZ (5)
