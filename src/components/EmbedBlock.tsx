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
  void embedType;
  const [iframeStatus, setIframeStatus] = useState<
    "idle" | "loading" | "loaded" | "blocked"
  >("idle");

  const resolvedUrl = useMemo(() => {
    if (!embedUrl) return "";
    return embedUrl;
  }, [embedUrl]);

  useEffect(() => {
    if (!resolvedUrl) return;

    const t = window.setTimeout(() => {
      setIframeStatus((s) => (s === "loaded" ? "loaded" : "blocked"));
    }, 3500);

    return () => window.clearTimeout(t);
  }, [resolvedUrl]);

  if (!resolvedUrl) {
    return (
      <section
        className="rounded-xl p-6"
        style={{
          border: "1px solid rgba(200, 169, 110, 0.2)",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
        }}
      >
        <div className="font-display text-xl text-cream">
          Live demo
        </div>
        <div
          className="mt-2 font-body"
          style={{ color: "rgba(244, 239, 230, 0.8)" }}
        >
          A live embed for this project will be available when the demo is
          published.
        </div>
      </section>
    );
  }

  return (
    <section
      className="rounded-xl p-0"
      style={{
        border: "1px solid rgba(200, 169, 110, 0.2)",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
      }}
    >
      <div
        className="flex items-center justify-between gap-4 px-6 py-4"
        style={{ borderBottom: "1px solid rgba(200, 169, 110, 0.2)" }}
      >
        <div
          className="font-body text-sm"
          style={{ color: "rgba(244, 239, 230, 0.8)" }}
        >
          Live demo — {title}
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
          <div
            className="mt-2 font-body"
            style={{ color: "rgba(244, 239, 230, 0.8)" }}
          >
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
