import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forge Studio — landing page A/B/C test",
  description:
    "Three live landing-page variants for Forge Studio, each a distinct hero, value proposition, and call to action, served as separate Next.js routes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
