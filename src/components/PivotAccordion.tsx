"use client";

import { useState } from "react";

export type PivotItem = {
  tag: string;
  title: string;
  body: string;
  lesson: string;
};

type PivotAccordionProps = {
  pivots: PivotItem[];
  id?: string;
};

function tagStyles(tag: string): {
  bg: string;
  color: string;
  border: string;
} {
  switch (tag.toUpperCase()) {
    case "ENFORCEMENT":
      return {
        bg: "rgba(100,220,160,0.1)",
        color: "#6DDFA0",
        border: "rgba(100,220,160,0.2)",
      };
    case "BILLING":
      return {
        bg: "rgba(100,160,255,0.1)",
        color: "#7EB8FF",
        border: "rgba(100,160,255,0.2)",
      };
    case "DATABASE":
    case "DESIGN":
      return {
        bg: "rgba(200,169,110,0.1)",
        color: "#C8A96E",
        border: "rgba(200,169,110,0.2)",
      };
    default:
      return {
        bg: "rgba(255,255,255,0.06)",
        color: "rgba(244, 239, 230, 0.7)",
        border: "rgba(255,255,255,0.12)",
      };
  }
}

export default function PivotAccordion({
  pivots,
  id = "pivots",
}: PivotAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div id={id} className="flex flex-col gap-[10px]">
      {pivots.map((pivot, i) => {
        const open = openIndex === i;
        const styles = tagStyles(pivot.tag);
        return (
          <div
            key={`${pivot.tag}-${pivot.title}-${i}`}
            className="overflow-hidden rounded-xl"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              backgroundColor: "rgba(255,255,255,0.04)",
            }}
          >
            <button
              type="button"
              className="flex min-h-[44px] w-full flex-wrap items-center gap-2 px-4 py-4 text-left md:gap-3 md:px-5"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
            >
              <span
                className="shrink-0 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider"
                style={{
                  backgroundColor: styles.bg,
                  color: styles.color,
                  borderColor: styles.border,
                }}
              >
                {pivot.tag}
              </span>
              <span className="min-w-0 flex-1 basis-[min(100%,12rem)] break-words font-body text-sm font-medium text-cream md:basis-auto md:text-base">
                {pivot.title}
              </span>
              <span
                className="shrink-0 font-mono text-gold transition-transform duration-300"
                style={{
                  transform: open ? "rotate(180deg)" : "rotate(0deg)",
                  opacity: 0.8,
                }}
                aria-hidden
              >
                ▼
              </span>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            >
              <div className="min-h-0 overflow-hidden">
                <div
                  className="border-t px-4 pb-5 pt-2 md:px-5"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <p
                    className="font-body text-sm leading-relaxed md:text-[15px]"
                    style={{ color: "rgba(244, 239, 230, 0.72)" }}
                  >
                    {pivot.body}
                  </p>
                  <p
                    className="font-body mt-4 border-l-2 border-gold pl-4 text-sm italic text-gold md:text-base"
                    style={{ borderLeftWidth: 2 }}
                  >
                    {pivot.lesson}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
