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
  status: CaseStudyStatus;
};

// Placeholder `coverImage` for now. Card visuals will be updated later.
export const caseStudies: CaseStudy[] = [
  {
    slug: "orixlink",
    title: "OrixLink AI",
    subtitle: "Universal triage and diagnosis for any symptom, any person",
    tags: ["clinical-ai", "product", "full-stack"],
    coverImage: "",
    order: 1,
    featured: true,
    embedType: "mixed",
    embedUrl: "https://orixlink.vercel.app",
    status: "live",
  },
  {
    slug: "starz-concept",
    title: "STARZ Concept",
    subtitle: "A product design concept for streaming discovery and subscriber experience",
    tags: ["product-design", "consumer", "entertainment"],
    coverImage: "",
    order: 2,
    featured: false,
    embedType: "figma",
    embedUrl: "",
    status: "concept",
  },
  {
    slug: "meridian-oracle",
    title: "Meridian Oracle Design System",
    subtitle: "A design system built for clinical AI products and brand work",
    tags: ["design-system", "brand", "tokens"],
    coverImage: "",
    order: 3,
    featured: false,
    embedType: "figma",
    embedUrl: "",
    status: "in-progress",
  },
  {
    slug: "two-peaks-chai",
    title: "Two Peaks Chai Co.",
    subtitle: "Brand identity and ecommerce for a Denver-Mumbai wellness chai brand",
    tags: ["brand", "ecommerce", "product-design"],
    coverImage: "",
    order: 4,
    featured: false,
    embedType: "mixed",
    embedUrl: "",
    status: "live",
  },
  {
    slug: "eclipselink",
    title: "EclipseLink AI",
    subtitle: "Hospital handoff intelligence that cuts 45-minute handoffs to under 9 minutes",
    tags: ["clinical-ai", "research", "methodology"],
    coverImage: "",
    order: 5,
    featured: false,
    embedType: "loom",
    embedUrl: "",
    status: "in-progress",
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

