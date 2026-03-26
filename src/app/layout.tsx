import type { Metadata } from "next";
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
  "Hannah Kraulik Pagade | Clinical AI Builder, Conversational Designer, Healthcare Product";

const defaultDescription =
  "I build AI products clinical environments demand. 15 years of healthcare operations as field research. Live work: OrixLink AI, HealthLiteracy AI, ClearChannel by Vestara.";

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
        {children}
        <KaiWidget />
      </body>
    </html>
  );
}