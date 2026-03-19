import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hannah Pagade Portfolio",
  description: "Clinical AI, product design, and healthcare operations work.",
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
