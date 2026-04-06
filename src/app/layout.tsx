import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Cormorant_Garamond, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import KaiWidget from "@/components/KaiWidget";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

const monoFont = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://hannahkraulikpagade.com");

const defaultTitle =
  "Hannah Kraulik Pagade | Rohimaya Health AI, Live AI Products, Conversational Design";

const defaultDescription =
  "LPN, founder of Rohimaya Health AI. Live products: OrixLink AI, HealthLiteracy AI, ClearChannel, FinanceLens AI (financial document intelligence at financelens-ai.vercel.app). MS AI/ML at CU Boulder in progress. Portfolio: hannahkraulikpagade.com.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Hannah Kraulik Pagade",
  },
  description: defaultDescription,
  keywords: [
    "Clinical AI",
    "Healthcare AI product",
    "Conversational AI designer",
    "NLU architecture",
    "AI product manager",
    "Healthcare UX",
    "Prompt engineering",
    "OrixLink AI",
    "HealthLiteracy AI",
    "ClearChannel Vestara",
    "FinanceLens AI",
  ],
  authors: [{ name: "Hannah Kraulik Pagade" }],
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    type: "website",
    locale: "en_US",
    siteName: "Hannah Kraulik Pagade",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
      <body className="font-body antialiased">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[10001] inline-flex min-h-[44px] -translate-y-[150%] items-center justify-center rounded-sm bg-gold px-4 py-2.5 font-body text-sm font-medium text-obsidian shadow-md transition-transform focus:translate-y-4 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-obsidian"
        >
          Skip to main content
        </a>
        {children}
        <KaiWidget />
        <Analytics />
      </body>
    </html>
  );
}