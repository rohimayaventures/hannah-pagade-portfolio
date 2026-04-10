"use client";

import Image from "next/image";
import "./AskHannahMcpCardCover.css";

/**
 * Case study card hero for Ask Hannah MCP: same orbital rings + gold core as the
 * Kai widget launcher, with hannah-avatar.jpg inside (object-top like the widget).
 */
export default function AskHannahMcpCardCover() {
  return (
    <div className="ah-mcp-cover" aria-hidden>
      <div className="ah-mcp-cover__row">
        <div className="ah-mcp-cover__photo">
          <div className="flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105">
            <div className="ah-mcp-launcher">
              <span className="ah-mcp-aura ah-mcp-aura--0" />
              <span className="ah-mcp-aura ah-mcp-aura--1" />
              <span className="ah-mcp-aura ah-mcp-aura--2" />

              <span className="ah-mcp-ring ah-mcp-ring--1">
                <span className="ah-mcp-ring-dot ah-mcp-ring-dot--lg" />
              </span>
              <span className="ah-mcp-ring ah-mcp-ring--2">
                <span className="ah-mcp-ring-dot ah-mcp-ring-dot--sm" />
              </span>
              <span className="ah-mcp-ring ah-mcp-ring--3">
                <span className="ah-mcp-ring-dot ah-mcp-ring-dot--sm" />
              </span>

              <span className="ah-mcp-core">
                <Image
                  src="/images/hannah-avatar.jpg"
                  alt=""
                  width={74}
                  height={74}
                  className="h-full w-full rounded-full object-cover object-top"
                  sizes="74px"
                />
              </span>
            </div>
          </div>
        </div>

        <div className="ah-mcp-cover__panel">
          <div className="ah-mcp-cover__title">
            <span
              className="ah-mcp-cover__headline font-display text-xl leading-tight tracking-tight sm:text-2xl"
              style={{ color: "var(--cream)" }}
            >
              Ask Hannah MCP
            </span>
            <span className="ah-mcp-cover__sub font-body text-[10px] uppercase tracking-[0.2em] text-gold sm:text-[11px]">
              Live server · Claude · Ten tools
            </span>
            <span className="font-body text-xs leading-snug text-cream/45 sm:text-[13px]">
              AI systems query Hannah&apos;s professional data directly
            </span>
          </div>
        </div>
      </div>

      {/* Same full-width footer bar as CaseStudyCardCoverImage (live). */}
      <div className="ah-mcp-cover__strip">
        <p
          className="font-body text-[11px] font-semibold uppercase leading-snug tracking-[0.14em] sm:text-xs sm:tracking-[0.16em]"
          style={{
            color: "#f4efe6",
            textShadow: "0 1px 2px rgba(0,0,0,0.85)",
          }}
        >
          Case study
          <span style={{ color: "#e8d4b0" }}> · Live product inside</span>
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
  );
}
