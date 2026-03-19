import type { ReactNode } from "react";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-obsidian text-cream">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

