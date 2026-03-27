/** Canonical site URL for absolute links (env in prod, sensible default locally). */
export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://hannahkraulikpagade.com")
  );
}

/** Open Graph and Twitter descriptions are best kept short for link previews. */
export function ogDescription(text: string, maxLen = 160): string {
  const t = text.trim().replace(/\s+/g, " ");
  if (t.length <= maxLen) return t;
  return `${t.slice(0, maxLen - 1).trimEnd()}…`;
}
