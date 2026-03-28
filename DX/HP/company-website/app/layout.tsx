import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "企業サイト | TOPページ",
  description: "Next.js + TypeScript + Tailwind CSS + GSAP で構築された企業サイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
