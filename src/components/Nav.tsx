import Link from "next/link";

export default function Nav() {
  return (
    <nav
      className="sticky top-0 z-50 w-full px-8 py-5 md:px-16"
      style={{
        backgroundColor: "var(--obsidian)",
        borderBottom: "1px solid rgba(200, 169, 110, 0.15)",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link
          href="/"
          className="text-base font-[family-name:Georgia,serif] no-underline tracking-tight transition-opacity hover:opacity-90"
          style={{ color: "var(--cream)" }}
        >
          Hannah Pagade
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href="/#work"
            className="text-[13px] font-[family-name:Arial,sans-serif] uppercase tracking-widest no-underline opacity-70 transition-opacity hover:opacity-100"
            style={{ color: "var(--cream)" }}
          >
            Work
          </Link>
          <Link
            href="/about"
            className="text-[13px] font-[family-name:Arial,sans-serif] uppercase tracking-widest no-underline opacity-70 transition-opacity hover:opacity-100"
            style={{ color: "var(--cream)" }}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-[13px] font-[family-name:Arial,sans-serif] uppercase tracking-widest no-underline opacity-70 transition-opacity hover:opacity-100"
            style={{ color: "var(--cream)" }}
          >
            Contact
          </Link>
          <a
            href="https://www.linkedin.com/in/hannah-pagade"
            target="_blank"
            rel="noreferrer"
            className="text-[13px] font-[family-name:Arial,sans-serif] uppercase tracking-widest no-underline opacity-70 transition-opacity hover:opacity-100"
            style={{ color: "var(--cream)" }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
}
