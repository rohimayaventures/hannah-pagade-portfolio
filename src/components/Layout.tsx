import type { ReactNode } from "react";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-obsidian text-cream">
      <Nav />
      <main
        id="main-content"
        tabIndex={-1}
        className="min-w-0 overflow-x-hidden"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}

