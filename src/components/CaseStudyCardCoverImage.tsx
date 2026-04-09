"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { CaseStudy } from "@/content/caseStudies";

type Props = {
  study: Pick<CaseStudy, "title" | "coverImage" | "status" | "liveUrl">;
};

/**
 * Static landing screenshot with light pointer parallax and a hover scrim,
 * aligned with Meridian / work section cues (no nested links).
 */
export default function CaseStudyCardCoverImage({ study }: Props) {
  const [reduceMotion, setReduceMotion] = useState(true);
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reduceMotion) return;
      const r = e.currentTarget.getBoundingClientRect();
      setPointer({
        x: (e.clientX - r.left) / r.width,
        y: (e.clientY - r.top) / r.height,
      });
    },
    [reduceMotion]
  );

  const onLeave = useCallback(() => {
    setPointer({ x: 0.5, y: 0.5 });
  }, []);

  const tx = reduceMotion ? 0 : (pointer.x - 0.5) * 14;
  const ty = reduceMotion ? 0 : (pointer.y - 0.5) * 14;

  const liveHint =
    study.status === "live" && study.liveUrl?.trim().length > 0;

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform: reduceMotion ? undefined : `translate(${tx}px, ${ty}px)`,
        }}
      >
        <div className="relative h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.06]">
          <Image
            src={study.coverImage}
            alt={study.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Hover: slightly dim the hero screenshot for depth (text lives in solid bar below). */}
      <div
        className="pointer-events-none absolute inset-0 bg-[rgba(8,12,20,0)] transition-colors duration-300 group-hover:bg-[rgba(8,12,20,0.12)]"
        aria-hidden
      />

      {/* Always-visible bar so copy is readable on busy screenshots (not hover-only). */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[6] border-t transition-[border-color,background-color] duration-300"
        style={{
          borderColor: "rgba(200, 169, 110, 0.28)",
          backgroundColor: "rgba(8, 12, 20, 0.94)",
          boxShadow: "0 -12px 28px rgba(8, 12, 20, 0.45)",
        }}
        aria-hidden
      >
        <div className="px-3 py-2.5 sm:py-2.5">
          <p
            className="font-body text-[11px] font-semibold uppercase leading-snug tracking-[0.14em] sm:text-xs sm:tracking-[0.16em]"
            style={{
              color: "#f4efe6",
              textShadow: "0 1px 2px rgba(0,0,0,0.85)",
            }}
          >
            {liveHint ? (
              <>
                Case study
                <span style={{ color: "#e8d4b0" }}> · Live product inside</span>
              </>
            ) : (
              "View case study"
            )}
          </p>
          <p
            className="mt-0.5 font-body text-[11px] leading-snug sm:text-[12px]"
            style={{
              color: "rgba(244, 239, 230, 0.92)",
              textShadow: "0 1px 2px rgba(0,0,0,0.75)",
            }}
          >
            Open for story, stack, and proof points →
          </p>
        </div>
      </div>
    </div>
  );
}
