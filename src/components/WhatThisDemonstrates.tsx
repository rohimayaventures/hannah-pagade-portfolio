"use client";

import { useState } from "react";

export type DemonstratesItem = {
  title: string;
  tag: string;
  body: string;
};

type WhatThisDemonstratesProps = {
  items: DemonstratesItem[];
};

function tagStyles(tag: string): {
  bg: string;
  color: string;
  border: string;
} {
  switch (tag.toUpperCase()) {
    case "PRODUCT":
      return {
        bg: "rgba(100,160,255,0.1)",
        color: "#7EB8FF",
        border: "rgba(100,160,255,0.2)",
      };
    case "TECHNICAL":
      return {
        bg: "rgba(100,220,160,0.1)",
        color: "#6DDFA0",
        border: "rgba(100,220,160,0.2)",
      };
    case "DESIGN":
      return {
        bg: "rgba(200,169,110,0.1)",
        color: "#C8A96E",
        border: "rgba(200,169,110,0.2)",
      };
    case "FULL-STACK":
      return {
        bg: "rgba(100,200,180,0.1)",
        color: "#64C8B4",
        border: "rgba(100,200,180,0.2)",
      };
    default:
      return {
        bg: "rgba(255,255,255,0.06)",
        color: "rgba(244, 239, 230, 0.7)",
        border: "rgba(255,255,255,0.12)",
      };
  }
}

export default function WhatThisDemonstrates({
  items,
}: WhatThisDemonstratesProps) {
  const [open, setOpen] = useState<Record<number, boolean>>({});

  const toggle = (i: number) => {
    setOpen((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = !!open[i];
        const styles = tagStyles(item.tag);
        return (
          <div
            key={`${item.title}-${i}`}
            className="overflow-hidden rounded-xl"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              backgroundColor: "rgba(255,255,255,0.04)",
            }}
          >
            <button
              type="button"
              className="flex w-full items-start justify-between gap-4 px-4 py-4 text-left md:px-5"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
            >
              <span className="font-body text-sm font-medium text-cream md:text-base">
                {item.title}
              </span>
              <span
                className="shrink-0 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider"
                style={{
                  backgroundColor: styles.bg,
                  color: styles.color,
                  borderColor: styles.border,
                }}
              >
                {item.tag}
              </span>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="min-h-0 overflow-hidden">
                <div
                  className="border-t px-4 pb-4 pt-2 md:px-5"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <p
                    className="font-body text-sm leading-relaxed md:text-[15px]"
                    style={{ color: "rgba(244, 239, 230, 0.72)" }}
                  >
                    {item.body}
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
