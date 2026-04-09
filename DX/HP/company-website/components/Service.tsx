'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const icons: Record<string, React.ReactNode> = {
  web: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
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
  support: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </g>
  ),
};

const services = [
  {
    id: 1,
    number: 'SOLUTION_01',
    title: 'DX推進ソリューション',
    description: 'テクノロジーの導入により既存の業務プロセスをアップデートし、企業が次なる成長へ投資するための「リソース」と「余白」を創出します。',
    gradient: 'linear-gradient(135deg, #001847 0%, #0057B8 100%)',
    patternColor: 'rgba(0,160,233,0.15)',
    iconKey: 'web',
    accentColor: '#00A0E9',
  },
  {
    id: 2,
    number: 'SOLUTION_02',
    title: 'デジタルマーケティング支援',
    description: '時代に即したデジタル接点（Web・SNS）の再構築を通じて顧客体験を最大化し、ビジネスの持続的な成長を伴走型でご支援します。',
    gradient: 'linear-gradient(135deg, #001a2e 0%, #0369a1 100%)',
    patternColor: 'rgba(14,165,233,0.2)',
    iconKey: 'infra',
    accentColor: '#38bdf8',
  },
  {
    id: 3,
    number: 'SOLUTION_03',
    title: 'DX × MARKETING',
    description: 'DX推進とデジタルマーケティングを融合し、業務変革と顧客体験の最大化を同時に実現。デジタルの力で事業成長を加速します。',
    gradient: 'linear-gradient(135deg, #020E28 0%, #003D82 100%)',
    patternColor: 'rgba(99,102,241,0.18)',
    iconKey: 'support',
    accentColor: '#818cf8',
  },
];

// Duplicate for seamless marquee loop
const marqueeItems = [...services, ...services];

export default function Service() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeAnim = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current || !marqueeRef.current) return;

    const ctx = gsap.context(() => {
      // Title fade-in
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
        }
      );

      // Marquee: animate the inner track to -50% (one full set width)
      const track = marqueeRef.current?.querySelector('.marquee-track');
      if (track) {
        marqueeAnim.current = gsap.to(track, {
          x: '-50%',
          duration: 28,
          ease: 'none',
          repeat: -1,
        });
      }
    }, sectionRef);

    return () => {
      marqueeAnim.current?.kill();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-pattern-dots relative overflow-hidden"
      id="service"
    >
      {/* Top wave */}
      <div className="absolute top-0 left-0 w-full pointer-events-none">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block">
          <path d="M0,0 Q720,60 1440,0 L1440,0 L0,0 Z" fill="white"/>
        </svg>
      </div>
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block">
          <path d="M0,60 Q720,0 1440,60 L1440,60 L0,60 Z" fill="white"/>
        </svg>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div ref={titleRef} className="container-custom text-center mb-12 md:mb-16 space-y-3">
          <p className="font-en text-sm text-primary font-semibold tracking-widest">
            SERVICE
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-main">
            ソリューション
          </h2>
          <p className="text-sm text-text-sub tracking-wider">
            私たちが提供する3つのフィールド
          </p>
        </div>

        {/* Infinite Marquee */}
        <div ref={marqueeRef} className="overflow-hidden">
          <div className="marquee-track flex gap-6 w-max">
            {marqueeItems.map((service, i) => (
              <div
                key={`${service.id}-${i}`}
                className="flex-shrink-0 w-[82vw] sm:w-[420px] lg:w-[480px] bg-white border border-border rounded-2xl overflow-hidden shadow-md"
              >
                {/* Visual Panel */}
                <div
                  className="relative h-48 sm:h-56 overflow-hidden"
                  style={{ background: service.gradient }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `radial-gradient(${service.patternColor} 1.5px, transparent 1.5px)`,
                      backgroundSize: '24px 24px',
                    }}
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ color: service.accentColor }}
                  >
                    <div
                      className="rounded-2xl flex items-center justify-center"
                      style={{
                        width: '72px', height: '72px',
                        background: 'rgba(255,255,255,0.08)',
                        border: `1px solid ${service.accentColor}40`,
                      }}
                    >
                      <svg viewBox="0 0 24 24" width="36" height="36">
                        {icons[service.iconKey]}
                      </svg>
                    </div>
                  </div>
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 50% 50%, ${service.accentColor}20 0%, transparent 60%)` }}
                  />
                  {/* Number badge */}
                  <div className="absolute top-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="font-en text-xs font-bold text-primary">{service.number}</span>
                  </div>
                </div>

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
      </div>
    </section>
  );
}
