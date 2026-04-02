"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

const MOBILE_NAV_ID = "site-mobile-nav";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => {
    setOpen(false);
    queueMicrotask(() => menuBtnRef.current?.focus());
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onMq = () => setOpen(false);
    mq.addEventListener("change", onMq);
    return () => mq.removeEventListener("change", onMq);
  }, []);

  useEffect(() => {
    if (!open) return;

    const getTrapEls = (): HTMLElement[] => {
      const btn = menuBtnRef.current;
      const drawer = drawerRef.current;
      if (!btn || !drawer) return [];
      const links = [...drawer.querySelectorAll<HTMLElement>("a[href]")];
      return [btn, ...links];
    };

    const t = window.setTimeout(() => {
      drawerRef.current?.querySelector<HTMLElement>("a[href]")?.focus();
    }, 0);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeMenu();
        return;
      }
      if (e.key !== "Tab") return;

      const els = getTrapEls();
      if (els.length === 0) return;
      const active = document.activeElement as HTMLElement | null;
      if (!active || !els.includes(active)) return;

      const first = els[0];
      const last = els[els.length - 1];

      if (e.shiftKey) {
        if (active === first) {
          e.preventDefault();
          last.focus();
        }
      } else if (active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown, true);
    return () => {
      window.clearTimeout(t);
      document.removeEventListener("keydown", onKeyDown, true);
    };
  }, [open, closeMenu]);

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
          Hannah Kraulik Pagade
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-2 md:flex md:gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex min-h-[44px] items-center px-1 text-[13px] font-body uppercase tracking-widest no-underline transition-opacity hover:opacity-100 lg:px-2"
              style={{ color: "var(--cream)" }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.linkedin.com/in/hannah-pagade"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[44px] items-center px-1 text-[13px] font-body uppercase tracking-widest no-underline transition-opacity hover:opacity-100 lg:px-2"
            style={{ color: "var(--cream)" }}
          >
            LinkedIn
          </a>
        </div>

        {/* Hamburger: mobile only */}
        <button
          ref={menuBtnRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[5px] md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls={MOBILE_NAV_ID}
        >
          <span
            className="block h-[2px] w-5 rounded-full transition-all duration-300"
            style={{
              backgroundColor: "var(--cream)",
              transform: open ? "rotate(45deg) translate(2.5px, 2.5px)" : "none",
            }}
            aria-hidden
          />
          <span
            className="block h-[2px] w-5 rounded-full transition-all duration-300"
            style={{
              backgroundColor: "var(--cream)",
              opacity: open ? 0 : 1,
            }}
            aria-hidden
          />
          <span
            className="block h-[2px] w-5 rounded-full transition-all duration-300"
            style={{
              backgroundColor: "var(--cream)",
              transform: open ? "rotate(-45deg) translate(2.5px, -2.5px)" : "none",
            }}
            aria-hidden
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        ref={drawerRef}
        id={MOBILE_NAV_ID}
        className="overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out md:hidden"
        style={{
          maxHeight: open ? "320px" : "0px",
          opacity: open ? 1 : 0,
        }}
        aria-hidden={!open}
        {...(open ? {} : { inert: true })}
      >
        <div className="flex flex-col gap-6 pt-8 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              tabIndex={open ? undefined : -1}
              onClick={() => setOpen(false)}
              className="flex min-h-[44px] items-center py-3 text-[15px] font-body uppercase tracking-widest no-underline transition-opacity hover:opacity-100"
              style={{ color: "var(--cream)" }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.linkedin.com/in/hannah-pagade"
            target="_blank"
            rel="noreferrer"
            tabIndex={open ? undefined : -1}
            onClick={() => setOpen(false)}
            className="flex min-h-[44px] items-center py-3 text-[15px] font-body uppercase tracking-widest no-underline transition-opacity hover:opacity-100"
            style={{ color: "var(--cream)" }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
}
