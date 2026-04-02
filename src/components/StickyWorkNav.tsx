"use client";

import { useEffect, useState } from "react";

export type WorkNavSection = {
  id: string;
  label: string;
};

type StickyWorkNavProps = {
  sections: WorkNavSection[];
};

export default function StickyWorkNav({ sections }: StickyWorkNavProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    if (sections.length === 0) return;

    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              a.target.getBoundingClientRect().top -
              b.target.getBoundingClientRect().top,
          );
        if (visible.length === 0) return;
        const id = visible[0].target.id;
        if (id) setActiveId(id);
      },
      {
        root: null,
        rootMargin: "-18% 0px -42% 0px",
        threshold: [0, 0.05, 0.1, 0.2, 0.35, 0.5, 0.75, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  if (sections.length === 0) return null;

  return (
    <nav
      className="sticky top-24 z-10 w-[10.5rem] shrink-0 self-start"
      aria-label="On this page"
    >
      <ul className="flex flex-col gap-1">
        {sections.map((s) => {
          const active = activeId === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`block border-l-2 py-2 pl-3 font-mono text-[10px] uppercase leading-snug tracking-[0.14em] transition-colors ${
                  active ?
                    "border-gold text-gold"
                  : "border-transparent text-[rgba(244,239,230,0.42)] hover:text-[rgba(244,239,230,0.72)]"
                } `}
              >
                {s.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
