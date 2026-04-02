"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { EmbedType } from "@/content/caseStudies";

type LoadStatus = "loading" | "loaded" | "slow" | "blocked";

type EmbedBlockProps = {
  embedType: EmbedType;
  embedUrl: string;
  title: string;
  id?: string;
};

const SLOW_AFTER_MS = 6_000;
const BLOCKED_AFTER_MS = 14_000;

export default function EmbedBlock({
  embedType,
  embedUrl,
  title,
  id = "live-demo",
}: EmbedBlockProps) {
  void embedType;
  const [loadStatus, setLoadStatus] = useState<LoadStatus>("loading");
  const timersRef = useRef<{ slow: number | null; blocked: number | null }>({
    slow: null,
    blocked: null,
  });

  const resolvedUrl = useMemo(() => {
    if (!embedUrl) return "";
    return embedUrl;
  }, [embedUrl]);

  useEffect(() => {
    if (!resolvedUrl) return;

    const { current: t } = timersRef;
    if (t.slow) window.clearTimeout(t.slow);
    if (t.blocked) window.clearTimeout(t.blocked);

    t.slow = window.setTimeout(() => {
      setLoadStatus((s) => (s === "loaded" ? "loaded" : "slow"));
    }, SLOW_AFTER_MS);

    t.blocked = window.setTimeout(() => {
      setLoadStatus((s) => (s === "loaded" ? "loaded" : "blocked"));
    }, BLOCKED_AFTER_MS);

    return () => {
      if (t.slow) window.clearTimeout(t.slow);
      if (t.blocked) window.clearTimeout(t.blocked);
      t.slow = null;
      t.blocked = null;
    };
  }, [resolvedUrl]);

  const handleIframeLoad = () => {
    setLoadStatus("loaded");
    const { current: t } = timersRef;
    if (t.slow) window.clearTimeout(t.slow);
    if (t.blocked) window.clearTimeout(t.blocked);
    t.slow = null;
    t.blocked = null;
  };

  if (!resolvedUrl) {
    return (
      <section
        id={id}
        className="rounded-xl p-6"
        style={{
          border: "1px solid rgba(200, 169, 110, 0.2)",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
        }}
      >
        <div className="font-display text-xl text-cream">Live demo</div>
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

  const openInNewTabClass =
    "inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-full border border-gold bg-obsidian px-4 py-2.5 text-center text-sm font-body text-cream transition-colors hover:bg-gold hover:text-obsidian max-sm:w-full sm:min-w-[10rem]";

  return (
    <section
      id={id}
      className="rounded-xl p-0"
      style={{
        border: "1px solid rgba(200, 169, 110, 0.2)",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
      }}
    >
      <div
        className="flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
        style={{ borderBottom: "1px solid rgba(200, 169, 110, 0.2)" }}
      >
        <div
          className="min-w-0 font-body text-sm"
          style={{ color: "rgba(244, 239, 230, 0.8)" }}
        >
          Live demo: {title}
        </div>
        <a
          className={openInNewTabClass}
          href={resolvedUrl}
          target="_blank"
          rel="noreferrer"
        >
          Open in new tab
        </a>
      </div>

      {loadStatus === "slow" && (
        <div
          className="border-b px-6 py-2.5 font-body text-xs sm:text-sm"
          style={{
            borderColor: "rgba(200, 169, 110, 0.15)",
            color: "rgba(244, 239, 230, 0.75)",
            backgroundColor: "rgba(200, 169, 110, 0.06)",
          }}
          role="status"
          aria-live="polite"
        >
          Still loading. Slow connections can take a bit. Use{" "}
          <strong className="font-medium text-cream">Open in new tab</strong>{" "}
          anytime.
        </div>
      )}

      {loadStatus === "blocked" ? (
        <div className="flex min-h-[min(22rem,50dvh)] flex-col items-start justify-center px-6 py-10">
          <div className="font-display text-xl text-cream">
            Could not load embed
          </div>
          <div
            className="mt-2 max-w-prose font-body"
            style={{ color: "rgba(244, 239, 230, 0.8)" }}
          >
            The demo did not finish loading in time (it may be blocked by your
            browser, the host site, or a slow network). Open it in a new tab for
            the full experience.
          </div>
          <a
            className={`${openInNewTabClass} mt-6`}
            href={resolvedUrl}
            target="_blank"
            rel="noreferrer"
          >
            Open in new tab
          </a>
        </div>
      ) : (
        <div className="relative w-full overflow-hidden">
          <iframe
            title={`${title} embed`}
            src={resolvedUrl}
            className="h-[min(520px,72dvh)] w-full min-h-[280px] border-0 bg-obsidian"
            onLoad={handleIframeLoad}
          />
        </div>
      )}
    </section>
  );
}
