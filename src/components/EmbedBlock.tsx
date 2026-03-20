"use client";

import { useEffect, useMemo, useState } from "react";
import type { EmbedType } from "@/content/caseStudies";

type EmbedBlockProps = {
  embedType: EmbedType;
  embedUrl: string;
  title: string;
};

export default function EmbedBlock({
  embedType,
  embedUrl,
  title,
}: EmbedBlockProps) {
  const [iframeStatus, setIframeStatus] = useState<
    "idle" | "loading" | "loaded" | "blocked"
  >("idle");

  const resolvedUrl = useMemo(() => {
    // For now, `mixed` uses `embedUrl` as the primary embed.
    if (!embedUrl) return "";
    return embedUrl;
  }, [embedUrl]);

  useEffect(() => {
    if (!resolvedUrl) return;

    // If the iframe doesn't load within a short window, show a fallback button.
    const t = window.setTimeout(() => {
      setIframeStatus((s) => (s === "loaded" ? "loaded" : "blocked"));
    }, 3500);

    return () => window.clearTimeout(t);
  }, [resolvedUrl]);

  if (!resolvedUrl) {
    return (
      <section className="rounded-xl border border-light-gray bg-white/5 p-6">
        <div className="font-display text-xl text-cream">
          Embed placeholder
        </div>
        <div className="mt-2 font-body text-mid-gray">
          This case study uses embed type <span>{embedType}</span>. The
          `embedUrl` will be added later.
        </div>
      </section>
    );
  }

  return (
    <section className="rounded-xl border border-light-gray bg-white/5 p-0">
      <div className="flex items-center justify-between gap-4 border-b border-light-gray px-6 py-4">
        <div className="font-body text-sm text-mid-gray">
          Embed ({embedType}) - {title}
        </div>

        {iframeStatus === "blocked" ? (
          <a
            className="inline-flex rounded-full border border-gold bg-obsidian px-4 py-2 text-sm font-body text-cream hover:bg-gold hover:text-obsidian"
            href={resolvedUrl}
            target="_blank"
            rel="noreferrer"
          >
            Open embed
          </a>
        ) : null}
      </div>

      {iframeStatus === "blocked" ? (
        <div className="flex min-h-56 flex-col items-start justify-center px-6 py-10">
          <div className="font-display text-xl text-cream">
            Embed blocked
          </div>
          <div className="mt-2 font-body text-mid-gray">
            Your browser may be blocking this iframe. Use the button above
            to open the source link.
          </div>
        </div>
      ) : (
        <div className="relative w-full overflow-hidden">
          <iframe
            title={`${title} embed`}
            src={resolvedUrl}
            className="h-[520px] w-full border-0 bg-obsidian"
            onLoad={() => setIframeStatus("loaded")}
          />
        </div>
      )}
    </section>
  );
}

