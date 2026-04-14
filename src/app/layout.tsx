import type { Metadata, Viewport } from "next";
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
  "Hannah Kraulik Pagade | AI Product Leader — Product Management & UX Design";

const defaultDescription =
  "Hannah Kraulik Pagade: AI product leader across product management and UX design for LLM products. LPN; founder of Rohimaya Health AI. Seventeen years healthcare operations leadership. Live: OrixLink, HealthLiteracy, ClearChannel, FinanceLens, Ask Hannah MCP. MS AI/ML at CU Boulder (in progress). hannahkraulikpagade.com.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080C14",
};

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
    "AI product leader",
    "Product management",
    "UX design",
    "Conversational AI",
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
          className="fixed left-[max(1rem,env(safe-area-inset-left,0px))] top-[max(1rem,env(safe-area-inset-top,0px))] z-[10001] inline-flex min-h-[44px] -translate-y-[150%] items-center justify-center rounded-sm bg-gold px-4 py-2.5 font-body text-sm font-medium text-obsidian shadow-md transition-transform focus:translate-y-4 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-obsidian"
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