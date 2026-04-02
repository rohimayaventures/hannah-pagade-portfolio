import Link from "next/link";

type ImpactCloseProps = {
  quote: string;
  primaryLabel?: string;
  primaryHref?: string;
  outlineLabel?: string;
  outlineHref?: string;
  id?: string;
};

function isInternal(href: string) {
  return href.startsWith("/");
}

export default function ImpactClose({
  quote,
  primaryLabel,
  primaryHref,
  outlineLabel,
  outlineHref,
  id = "impact",
}: ImpactCloseProps) {
  const primaryClasses =
    "inline-flex min-h-[44px] items-center justify-center rounded-full px-6 py-2.5 font-body text-sm text-obsidian transition-colors hover:opacity-95";
  const outlineClasses =
    "inline-flex min-h-[44px] items-center justify-center rounded-full border border-gold px-6 py-2.5 font-body text-sm text-gold transition-colors hover:bg-[rgba(200,169,110,0.08)]";

  return (
    <section
      id={id}
      className="w-full bg-[rgba(200,169,110,0.04)]"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div className="mx-auto max-w-3xl px-6 py-14 text-center sm:px-8 md:py-16">
        <blockquote
          className="break-words font-display text-lg font-light italic leading-relaxed text-cream sm:text-xl md:text-2xl lg:text-3xl"
          style={{ color: "rgba(244, 239, 230, 0.85)" }}
        >
          {quote}
        </blockquote>

        {(primaryHref && primaryLabel) || (outlineHref && outlineLabel) ? (
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            {primaryHref && primaryLabel ?
              isInternal(primaryHref) ?
                <Link
                  href={primaryHref}
                  className={primaryClasses}
                  style={{ backgroundColor: "#C8A96E" }}
                >
                  {primaryLabel}
                </Link>
              : <a
                  href={primaryHref}
                  className={primaryClasses}
                  style={{ backgroundColor: "#C8A96E" }}
                  target="_blank"
                  rel="noreferrer"
                >
                  {primaryLabel}
                </a>

            : null}
            {outlineHref && outlineLabel ?
              isInternal(outlineHref) ?
                <Link href={outlineHref} className={outlineClasses}>
                  {outlineLabel}
                </Link>
              : <a
                  href={outlineHref}
                  className={outlineClasses}
                  target="_blank"
                  rel="noreferrer"
                >
                  {outlineLabel}
                </a>

            : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
