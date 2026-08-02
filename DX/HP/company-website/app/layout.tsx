import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://dxcom.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "からくり | DX・AX推進・デジタルマーケティング支援",
    template: "%s | からくり",
  },
  description:
    "からくりは地方企業のDX推進・AX（AI Transformation）推進・デジタルマーケティング支援を行う伴走型ITパートナー。業務改善・システム導入から生成AI活用、SNS運用・MA・SEOまで、貴社固有の戦略を共に設計・実装します。",
  keywords: [
    "からくり",
    "DX推進",
    "AX推進",
    "AI Transformation",
    "生成AI活用",
    "AI導入支援",
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
  creator: "からくり",
  publisher: "からくり",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "からくり",
    title: "からくり | DX・AX推進・デジタルマーケティング支援",
    description:
      "からくりは地方企業のDX推進・AX（AI Transformation）推進・デジタルマーケティング支援を行う伴走型ITパートナー。業務改善から生成AI活用、SNS・MA・SEOまで一気通貫でサポートします。",
    images: [
      {
        url: "/images/manifesto.jpg",
        width: 1200,
        height: 630,
        alt: "からくり",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "からくり | DX・AX推進・デジタルマーケティング支援",
    description:
      "からくりは地方企業のDX推進・AX（AI Transformation）推進・デジタルマーケティング支援を行う伴走型ITパートナー。",
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
  name: "からくり",
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  description:
    "地方企業のDX推進・AX（AI Transformation）推進・デジタルマーケティング支援を行う伴走型ITパートナー。業務改善・システム導入から生成AI活用、SNS運用・MA・SEOまで貴社固有の戦略を共に設計・実装します。",
  foundingDate: "2026",
  areaServed: "JP",
  serviceType: [
    "DX推進支援",
    "デジタルマーケティング支援",
    "DX×マーケティング融合",
    "AX（AI Transformation）推進支援",
  ],
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
