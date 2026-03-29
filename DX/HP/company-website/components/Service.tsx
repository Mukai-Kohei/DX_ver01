'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// SVG icon paths (24×24 viewBox, stroke-based)
const icons: Record<string, React.ReactNode> = {
  web: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </g>
  ),
  mobile: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2"/>
      <circle cx="12" cy="17" r="1" fill="currentColor"/>
    </g>
  ),
  design: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
    </g>
  ),
  data: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/>
      <line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/>
    </g>
  ),
  security: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </g>
  ),
  infra: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="4" rx="1"/>
      <rect x="2" y="9" width="20" height="4" rx="1"/>
      <rect x="2" y="15" width="20" height="4" rx="1"/>
      <circle cx="18" cy="5" r="0.8" fill="currentColor"/>
      <circle cx="18" cy="11" r="0.8" fill="currentColor"/>
      <circle cx="18" cy="17" r="0.8" fill="currentColor"/>
    </g>
  ),
  devops: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c-1.66 0-3-4-3-9s1.34-9 3-9m0 18c1.66 0 3-4 3-9s-1.34-9-3-9m-9 9a9 9 0 0 1 9-9"/>
    </g>
  ),
  support: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </g>
  ),
};

type ServiceVisualConfig = {
  gradient: string;
  patternColor: string;
  iconKey: string;
  accentColor: string;
};

const serviceVisuals: ServiceVisualConfig[] = [
  { gradient: 'linear-gradient(135deg, #001847 0%, #0057B8 100%)', patternColor: 'rgba(0,160,233,0.15)', iconKey: 'web',      accentColor: '#00A0E9' },
  { gradient: 'linear-gradient(135deg, #0a0a2e 0%, #3730a3 100%)', patternColor: 'rgba(99,102,241,0.2)',  iconKey: 'mobile',   accentColor: '#818cf8' },
  { gradient: 'linear-gradient(135deg, #0a2a1a 0%, #059669 100%)', patternColor: 'rgba(16,185,129,0.2)', iconKey: 'design',   accentColor: '#34d399' },
  { gradient: 'linear-gradient(135deg, #1a0f00 0%, #d97706 100%)', patternColor: 'rgba(245,158,11,0.2)', iconKey: 'data',     accentColor: '#fbbf24' },
  { gradient: 'linear-gradient(135deg, #1a0010 0%, #9d174d 100%)', patternColor: 'rgba(236,72,153,0.2)', iconKey: 'security', accentColor: '#f472b6' },
  { gradient: 'linear-gradient(135deg, #001a2e 0%, #0369a1 100%)', patternColor: 'rgba(14,165,233,0.2)', iconKey: 'infra',    accentColor: '#38bdf8' },
  { gradient: 'linear-gradient(135deg, #0a1a10 0%, #16a34a 100%)', patternColor: 'rgba(34,197,94,0.2)',  iconKey: 'devops',   accentColor: '#4ade80' },
  { gradient: 'linear-gradient(135deg, #1a1000 0%, #b45309 100%)', patternColor: 'rgba(217,119,6,0.2)',  iconKey: 'support',  accentColor: '#fcd34d' },
];

function ServiceVisual({ config, number }: { config: ServiceVisualConfig; number: string }) {
  return (
    <div
      className="relative aspect-[4/3] overflow-hidden"
      style={{ background: config.gradient }}
    >
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(${config.patternColor} 1.5px, transparent 1.5px)`,
          backgroundSize: '24px 24px',
        }}
      />
      {/* Center icon */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ color: config.accentColor }}
      >
        <div
          className="rounded-2xl flex items-center justify-center"
          style={{
            width: '64px',
            height: '64px',
            background: `rgba(255,255,255,0.08)`,
            border: `1px solid ${config.accentColor}40`,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            width="32"
            height="32"
          >
            {icons[config.iconKey]}
          </svg>
        </div>
      </div>
      {/* Radial glow behind icon */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${config.accentColor}20 0%, transparent 60%)`,
        }}
      />
      {/* Number badge */}
      <div className="absolute top-3 left-3 bg-white bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full">
        <span className="font-en text-xs font-bold text-primary">{number}</span>
      </div>
    </div>
  );
}

const services = [
  { id: 1, number: 'SERVICES_01', title: 'Webアプリケーション開発',    description: 'モダンな技術スタックを活用した、高性能なWebアプリケーションを開発します。' },
  { id: 2, number: 'SERVICES_02', title: 'モバイルアプリ開発',          description: 'iOS・Android対応のネイティブ・クロスプラットフォームアプリを開発します。' },
  { id: 3, number: 'SERVICES_03', title: 'UI/UXデザイン',               description: 'ユーザー中心設計に基づいた、使いやすく美しいインターフェースを提供します。' },
  { id: 4, number: 'SERVICES_04', title: 'データ分析・AI',              description: '機械学習・AIを活用したデータ分析とビジネスインサイトを提供します。' },
  { id: 5, number: 'SERVICES_05', title: 'セキュリティ対策',            description: '最新のセキュリティ技術で、システムとデータを保護します。' },
  { id: 6, number: 'SERVICES_06', title: 'インフラ構築・運用',          description: 'クラウド・オンプレミス問わず、最適なインフラ環境を構築します。' },
  { id: 7, number: 'SERVICES_07', title: 'DevOps・CI/CD',               description: '開発から運用まで、効率的な自動化パイプラインを構築します。' },
  { id: 8, number: 'SERVICES_08', title: '保守・サポート',              description: 'システム稼働後の継続的な保守・サポートで、安定運用をサポートします。' },
];

export default function Service() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current || !cardsRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
        }
      );

      const cards = cardsRef.current?.querySelectorAll('.service-card');
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
            scrollTrigger: { trigger: cardsRef.current, start: 'top 80%', once: true },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-pattern-dots relative overflow-hidden"
      id="service"
    >
      {/* Top wave from white */}
      <div className="absolute top-0 left-0 w-full pointer-events-none">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block">
          <path d="M0,0 Q720,60 1440,0 L1440,0 L0,0 Z" fill="white"/>
        </svg>
      </div>
      {/* Bottom wave to white */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block">
          <path d="M0,60 Q720,0 1440,60 L1440,60 L0,60 Z" fill="white"/>
        </svg>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-12 md:mb-16 space-y-4">
          <p className="font-en text-sm text-primary font-semibold tracking-widest">
            WHAT_WE_DO
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-main">
            サービス内容
          </h2>
          <p className="font-en text-sm text-text-sub tracking-wider">
            &lt;SOLUTION&gt; コサウェルのソリューションサービス
          </p>
        </div>

        {/* Service Cards Grid */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="service-card bg-white border border-border rounded-xl overflow-hidden card-hover"
            >
              {/* Visual */}
              <ServiceVisual config={serviceVisuals[i]} number={service.number} />

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-text-main">
                  {service.title}
                </h3>
                <p className="text-sm text-text-sub leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
