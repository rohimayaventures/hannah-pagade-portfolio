import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main
        id="main-content"
        tabIndex={-1}
        className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center"
        style={{ backgroundColor: "var(--cream)" }}
      >
        <p
          className="mb-4 font-mono text-sm uppercase tracking-widest"
          style={{ color: "var(--gold-on-light)" }}
        >
          404
        </p>
        <h1
          className="mb-4 font-display text-4xl sm:text-5xl"
          style={{ color: "var(--obsidian)" }}
        >
          Page not found
        </h1>
        <p
          className="mx-auto mb-10 max-w-md font-body text-base leading-relaxed"
          style={{ color: "var(--mid-gray)" }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-sm px-6 py-3 font-body text-sm font-medium tracking-wide transition-colors duration-200"
            style={{
              backgroundColor: "var(--gold)",
              color: "var(--obsidian)",
            }}
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="rounded-sm border px-6 py-3 font-body text-sm font-medium tracking-wide transition-colors duration-200"
            style={{
              borderColor: "var(--gold-on-light)",
              color: "var(--gold-on-light)",
            }}
          >
            Get in Touch
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
