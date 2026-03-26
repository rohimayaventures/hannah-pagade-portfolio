"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 w-full px-6 py-4 sm:px-8 sm:py-5 md:px-16"
      style={{
        backgroundColor: "var(--obsidian)",
        borderBottom: "1px solid rgba(200, 169, 110, 0.15)",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link
          href="/"
          className="text-base font-display no-underline tracking-tight transition-opacity hover:opacity-90"
          style={{ color: "var(--cream)" }}
        >
          Hannah Pagade
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-body uppercase tracking-widest no-underline transition-opacity hover:opacity-100"
              style={{ color: "var(--cream)" }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.linkedin.com/in/hannah-pagade"
            target="_blank"
            rel="noreferrer"
            className="text-[13px] font-body uppercase tracking-widest no-underline transition-opacity hover:opacity-100"
            style={{ color: "var(--cream)" }}
          >
            LinkedIn
          </a>
        </div>

        {/* Hamburger: mobile only */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[5px] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className="block h-[2px] w-5 rounded-full transition-all duration-300"
            style={{
              backgroundColor: "var(--cream)",
              transform: open ? "rotate(45deg) translate(2.5px, 2.5px)" : "none",
            }}
          />
          <span
            className="block h-[2px] w-5 rounded-full transition-all duration-300"
            style={{
              backgroundColor: "var(--cream)",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block h-[2px] w-5 rounded-full transition-all duration-300"
            style={{
              backgroundColor: "var(--cream)",
              transform: open ? "rotate(-45deg) translate(2.5px, -2.5px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className="overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out md:hidden"
        style={{
          maxHeight: open ? "320px" : "0px",
          opacity: open ? 1 : 0,
        }}
      >
        <div className="flex flex-col gap-6 pt-8 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-[15px] font-body uppercase tracking-widest no-underline transition-opacity hover:opacity-100"
              style={{ color: "var(--cream)" }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.linkedin.com/in/hannah-pagade"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="block py-3 text-[15px] font-body uppercase tracking-widest no-underline transition-opacity hover:opacity-100"
            style={{ color: "var(--cream)" }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
}
