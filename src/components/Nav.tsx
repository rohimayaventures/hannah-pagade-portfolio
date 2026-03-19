import Link from "next/link";

export default function Nav() {
  return (
    <nav className="border-b border-gold/30 bg-obsidian text-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="font-display text-lg tracking-wide text-cream hover:text-gold"
        >
          Hannah Pagade
        </Link>

        <Link
          href="/about"
          className="font-body text-sm text-mid-gray transition-colors hover:text-gold"
        >
          About
        </Link>
      </div>
    </nav>
  );
}

