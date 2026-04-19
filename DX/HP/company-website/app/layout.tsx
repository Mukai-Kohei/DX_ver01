import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://dxcom.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "DIGITAL TRANSFORMATION STUDIO | DX推進・デジタルマーケティング支援",
    template: "%s | DIGITAL TRANSFORMATION STUDIO",
  },
  description:
    "地方企業のDX推進・デジタルマーケティング支援を行う伴走型ITパートナー。業務改善・システム導入からSNS運用・MA・SEOまで、貴社固有の戦略を共に設計・実装します。",
  keywords: [
    "DX推進",
    "デジタルマーケティング",
    "地方企業",
    "DX支援",
    "マーケティングオートメーション",
    "MA",
    "SEO",
    "SNS運用",
    "業務改善",
    "システム導入",
    "伴走型",
    "ITパートナー",
  ],
  authors: [{ name: "舟木 南生" }],
  creator: "DIGITAL TRANSFORMATION STUDIO",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "DIGITAL TRANSFORMATION STUDIO",
    title: "DIGITAL TRANSFORMATION STUDIO | DX推進・デジタルマーケティング支援",
    description:
      "地方企業のDX推進・デジタルマーケティング支援を行う伴走型ITパートナー。業務改善からSNS・MA・SEOまで一気通貫でサポートします。",
    images: [
      {
        url: "/images/manifesto.jpg",
        width: 1200,
        height: 630,
        alt: "DIGITAL TRANSFORMATION STUDIO",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DIGITAL TRANSFORMATION STUDIO | DX推進・デジタルマーケティング支援",
    description:
      "地方企業のDX推進・デジタルマーケティング支援を行う伴走型ITパートナー。",
    images: ["/images/manifesto.jpg"],
  },

  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
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
