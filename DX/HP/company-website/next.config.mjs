/** @type {import('next').NextConfig} */
const nextConfig = {
  // GSAP pin/ScrollTrigger は Strict Mode の意図的二重実行と相性が悪いため無効化
  // (pin spacerが二重追加され、ブラウザのレイアウト計算が無限ループしてフリーズする)
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
};

export default nextConfig;
