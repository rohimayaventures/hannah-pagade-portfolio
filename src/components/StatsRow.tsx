"use client";

import { useEffect, useMemo, useState } from "react";

export type StatItem = {
  number: string;
  label: string;
  source: string;
};

type StatsRowProps = {
  stats: StatItem[];
};

const ANIM_MS = 1400;

function parseStatNumber(raw: string): {
  endValue: number;
  decimals: number;
  render: (n: number) => string;
} {
  const trimmed = raw.trim();
  const pct = trimmed.endsWith("%");
  const plus = trimmed.endsWith("+");
  let core = trimmed;
  if (pct) core = core.slice(0, -1);
  if (plus) core = core.slice(0, -1);

  const mPlusMatch = trimmed.match(/^([\d.]+)M\+$/i);
  if (mPlusMatch) {
    const n = Number.parseFloat(mPlusMatch[1]);
    return {
      endValue: Number.isFinite(n) ? n : 0,
      decimals: mPlusMatch[1].includes(".") ? 1 : 0,
      render: (v) =>
        `${mPlusMatch[1].includes(".") ? v.toFixed(1) : Math.round(v)}M+`,
    };
  }

  const mMatch = core.match(/^([\d.]+)\s*M$/i);
  if (mMatch) {
    const n = Number.parseFloat(mMatch[1]);
    return {
      endValue: Number.isFinite(n) ? n : 0,
      decimals: core.includes(".") ? 1 : 0,
      render: (n) => `${n.toFixed(core.includes(".") ? 1 : 0)}M${plus ? "+" : ""}`,
    };
  }

  const kMatch = core.match(/^([\d.]+)\s*K$/i);
  if (kMatch) {
    const n = Number.parseFloat(kMatch[1]);
    return {
      endValue: Number.isFinite(n) ? n : 0,
      decimals: core.includes(".") ? 1 : 0,
      render: (n) => `${n.toFixed(core.includes(".") ? 1 : 0)}K${plus ? "+" : ""}`,
    };
  }

  const num = Number.parseFloat(core.replace(/,/g, ""));
  if (!Number.isFinite(num)) {
    return {
      endValue: 0,
      decimals: 0,
      render: () => raw,
    };
  }

  const dec = core.includes(".") ? 1 : 0;
  return {
    endValue: num,
    decimals: dec,
    render: (n) =>
      `${dec ? n.toFixed(1) : Math.round(n).toString()}${pct ? "%" : ""}${plus && !pct ? "+" : ""}`,
  };
}

function AnimatedStat({ stat }: { stat: StatItem }) {
  const parsed = useMemo(() => parseStatNumber(stat.number), [stat.number]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    let frame = 0;
    const end = parsed.endValue;

    const step = (ts: number) => {
      if (start === null) start = ts;
      const elapsed = ts - start;
      const t = Math.min(elapsed / ANIM_MS, 1);
      const eased = 1 - (1 - t) ** 3;
      setValue(end * eased);
      if (t < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [parsed.endValue]);

  const display =
    parsed.endValue === 0 && stat.number !== "0" && stat.number !== "0%"
      ? stat.number
      : parsed.render(value);

  return (
    <div className="flex h-full flex-col gap-2 px-4 py-6 sm:px-6">
      <div className="font-display text-3xl text-gold sm:text-4xl md:text-[2.75rem] leading-none">
        {display}
      </div>
      <p
        className="font-body text-xs leading-snug sm:text-sm"
        style={{ color: "rgba(244, 239, 230, 0.5)" }}
      >
        {stat.label}
      </p>
      <p
        className="font-mono text-[10px] leading-snug sm:text-[11px]"
        style={{ color: "rgba(244, 239, 230, 0.35)" }}
      >
        {stat.source}
      </p>
    </div>
  );
}

export default function StatsRow({ stats }: StatsRowProps) {
  return (
    <section
      className="w-full"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 [&>div]:border-r [&>div]:border-[rgba(255,255,255,0.07)] max-lg:[&>div:nth-child(2n)]:border-r-0 lg:[&>div:nth-child(4n)]:border-r-0">
          {stats.map((stat, i) => (
            <div key={`${stat.number}-${stat.label}-${i}`}>
              <AnimatedStat stat={stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
