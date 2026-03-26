import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="border-t py-12"
      style={{
        borderColor: "rgba(200, 169, 110, 0.15)",
        backgroundColor: "var(--obsidian)",
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 sm:px-8 md:flex-row md:items-start md:justify-between md:px-16">
        <div>
          <p
            className="font-display text-base tracking-tight"
            style={{ color: "var(--cream)" }}
          >
            Hannah Pagade
          </p>
          <p
            className="mt-2 max-w-xs font-body text-sm leading-relaxed"
            style={{ color: "rgba(244, 239, 230, 0.7)" }}
          >
            Product &amp; UX strategist. Conversational AI design for
            high-stakes environments.
          </p>
        </div>
        <nav
          className="flex flex-wrap gap-x-8 gap-y-1 font-body text-[13px] uppercase tracking-widest"
          aria-label="Footer"
        >
          <Link
            href="/#work"
            className="inline-block py-2 no-underline transition-opacity hover:opacity-100"
            style={{ color: "rgba(244, 239, 230, 0.85)" }}
          >
            Work
          </Link>
          <Link
            href="/about"
            className="inline-block py-2 no-underline transition-opacity hover:opacity-100"
            style={{ color: "rgba(244, 239, 230, 0.85)" }}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="inline-block py-2 no-underline transition-opacity hover:opacity-100"
            style={{ color: "rgba(244, 239, 230, 0.85)" }}
          >
            Contact
          </Link>
          <a
            href="https://www.linkedin.com/in/hannah-pagade"
            target="_blank"
            rel="noreferrer"
            className="inline-block py-2 no-underline transition-opacity hover:opacity-100"
            style={{ color: "rgba(244, 239, 230, 0.85)" }}
          >
            LinkedIn
          </a>
        </nav>
      </div>
      <div
        className="mx-auto mt-10 max-w-6xl px-6 pt-8 sm:px-8 md:px-16"
        style={{ borderTop: "1px solid rgba(244, 239, 230, 0.1)" }}
      >
        <p
          className="font-body text-xs"
          style={{ color: "rgba(244, 239, 230, 0.7)" }}
        >
          © {new Date().getFullYear()} Hannah Pagade. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
