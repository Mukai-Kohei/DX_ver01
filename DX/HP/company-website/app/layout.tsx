import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://dxcom.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "株式会社KARAKURI | DX推進・デジタルマーケティング支援",
    template: "%s | 株式会社KARAKURI",
  },
  description:
    "株式会社KARAKURIは地方企業のDX推進・デジタルマーケティング支援を行う伴走型ITパートナー。業務改善・システム導入からSNS運用・MA・SEOまで、貴社固有の戦略を共に設計・実装します。",
  keywords: [
    "株式会社KARAKURI",
    "KARAKURI",
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
  creator: "株式会社KARAKURI",
  publisher: "株式会社KARAKURI",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "株式会社KARAKURI",
    title: "株式会社KARAKURI | DX推進・デジタルマーケティング支援",
    description:
      "株式会社KARAKURIは地方企業のDX推進・デジタルマーケティング支援を行う伴走型ITパートナー。業務改善からSNS・MA・SEOまで一気通貫でサポートします。",
    images: [
      {
        url: "/images/manifesto.jpg",
        width: 1200,
        height: 630,
        alt: "株式会社KARAKURI",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "株式会社KARAKURI | DX推進・デジタルマーケティング支援",
    description:
      "株式会社KARAKURIは地方企業のDX推進・デジタルマーケティング支援を行う伴走型ITパートナー。",
    images: ["/images/manifesto.jpg"],
  },

  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "株式会社KARAKURI",
  alternateName: "KARAKURI",
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  description:
    "地方企業のDX推進・デジタルマーケティング支援を行う伴走型ITパートナー。業務改善・システム導入からSNS運用・MA・SEOまで貴社固有の戦略を共に設計・実装します。",
  foundingDate: "2026",
  areaServed: "JP",
  serviceType: ["DX推進支援", "デジタルマーケティング支援", "DX×マーケティング融合"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    areaServed: "JP",
    availableLanguage: "Japanese",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
