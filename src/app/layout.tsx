import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null);

const defaultTitle =
  "Hannah Pagade | Product & UX Strategist, Conversational AI Designer";

const defaultDescription =
  "Product and UX strategist shipping conversational AI in healthcare and high-stakes environments. OrixLink AI, HealthLiteracy AI — discovery, intent architecture, prompt design, and live products.";

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: defaultTitle,
    template: "%s | Hannah Pagade",
  },
  description: defaultDescription,
  keywords: [
    "Product",
    "Product strategy",
    "UX strategy",
    "Conversational AI",
    "AI product",
    "Healthcare AI",
    "Clinical AI",
    "Prompt architecture",
    "Dialogue design",
    "Health tech",
  ],
  authors: [{ name: "Hannah Pagade" }],
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    type: "website",
    locale: "en_US",
    siteName: "Hannah Pagade",
  },
  twitter: {
    card: "summary",
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
    <html lang="en">
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
