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
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-8 md:flex-row md:items-start md:justify-between md:px-16">
        <div>
          <p
            className="font-[family-name:Georgia,serif] text-base tracking-tight"
            style={{ color: "var(--cream)" }}
          >
            Hannah Pagade
          </p>
          <p className="mt-2 max-w-xs font-body text-sm text-mid-gray">
            UX strategist & conversational AI design. Meridian Oracle palette.
          </p>
        </div>
        <nav
          className="flex flex-wrap gap-x-8 gap-y-3 font-body text-[13px] uppercase tracking-widest text-cream/60"
          aria-label="Footer"
        >
          <Link href="/#work" className="transition-opacity hover:opacity-100">
            Work
          </Link>
          <Link href="/about" className="transition-opacity hover:opacity-100">
            About
          </Link>
          <Link href="/contact" className="transition-opacity hover:opacity-100">
            Contact
          </Link>
          <a
            href="https://www.linkedin.com/in/hannah-pagade"
            target="_blank"
            rel="noreferrer"
            className="transition-opacity hover:opacity-100"
          >
            LinkedIn
          </a>
        </nav>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-cream/10 px-8 pt-8 md:px-16">
        <p className="font-body text-xs text-mid-gray">
          © {new Date().getFullYear()} Hannah Pagade. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
