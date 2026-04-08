'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// registerPlugin は page.tsx で一元管理

function DesignPanel({ variant }: { variant: 1 | 2 | 3 }) {
  if (variant === 1) {
    return (
      <div className="w-full h-full" style={{ background: 'linear-gradient(140deg, #5b21b6 0%, #7c3aed 32%, #2563eb 68%, #0ea5e9 100%)' }}>
        {/* top sheen */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% -10%, rgba(255,255,255,0.22) 0%, transparent 55%)' }} />
        {/* center glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 48%, rgba(147,210,255,0.22) 0%, transparent 52%)' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          {/* gear + circuit icon */}
          <svg viewBox="0 0 64 64" width="52" height="52" fill="none" style={{ filter: 'drop-shadow(0 0 8px rgba(147,210,255,0.65)) drop-shadow(0 0 3px rgba(147,210,255,0.9))' }}>
            {/* gear body */}
            <path d="M27 7.5l-1.2 4.8a13 13 0 0 0-3.8 2.2l-4.7-1.4-4.8 8.3 3.7 3.2a13 13 0 0 0 0 4.8l-3.7 3.2 4.8 8.3 4.7-1.4a13 13 0 0 0 3.8 2.2l1.2 4.8h10l1.2-4.8a13 13 0 0 0 3.8-2.2l4.7 1.4 4.8-8.3-3.7-3.2a13 13 0 0 0 0-4.8l3.7-3.2-4.8-8.3-4.7 1.4a13 13 0 0 0-3.8-2.2L37 7.5z" stroke="rgba(167,220,255,0.88)" strokeWidth="1.4" fill="rgba(147,210,255,0.10)" strokeLinejoin="round"/>
            {/* inner circle / scope */}
            <circle cx="32" cy="32" r="9.5" stroke="rgba(167,220,255,0.88)" strokeWidth="1.4" fill="rgba(147,210,255,0.08)"/>
            {/* center dot */}
            <circle cx="32" cy="32" r="3.2" fill="rgba(167,220,255,0.85)"/>
            {/* circuit — upper right branch */}
            <polyline points="39,25 45,19 52,19" stroke="rgba(167,220,255,0.75)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="52" cy="19" r="2.4" fill="rgba(167,220,255,0.9)"/>
            {/* circuit — right branch */}
            <polyline points="41.5,32 50,32 50,26" stroke="rgba(167,220,255,0.65)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="50" cy="26" r="1.8" fill="rgba(167,220,255,0.8)"/>
            {/* circuit — upper dot */}
            <line x1="32" y1="22.5" x2="32" y2="16" stroke="rgba(167,220,255,0.65)" strokeWidth="1.1" strokeLinecap="round"/>
            <circle cx="32" cy="14.5" r="1.8" fill="rgba(167,220,255,0.7)"/>
          </svg>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 15, fontWeight: 800, letterSpacing: '0.12em', color: '#e8f4ff', textShadow: '0 0 14px rgba(147,210,255,0.7)', marginBottom: 3 }}>DX SOLUTION</p>
            <p style={{ fontSize: 9.5, letterSpacing: '0.04em', color: 'rgba(190,230,255,0.78)' }}>デジタルトランスフォーメーション</p>
          </div>
        </div>
      </div>
    );
  }
  if (variant === 2) {
    return (
      <div className="w-full h-full" style={{ background: 'linear-gradient(140deg, #0a1628 0%, #1e3a8a 38%, #0369a1 72%, #06b6d4 100%)' }}>
        {/* top sheen */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% -10%, rgba(255,255,255,0.18) 0%, transparent 55%)' }} />
        {/* center glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 48%, rgba(56,211,241,0.20) 0%, transparent 52%)' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <svg viewBox="0 0 72 60" width="58" height="48" fill="none" style={{ filter: 'drop-shadow(0 0 8px rgba(56,211,241,0.65)) drop-shadow(0 0 3px rgba(56,211,241,0.9))' }}>
            {/* bar chart */}
            <rect x="10" y="38" width="8" height="12" rx="1.5" stroke="rgba(100,230,255,0.88)" strokeWidth="1.4" fill="rgba(56,211,241,0.12)"/>
            <rect x="21" y="28" width="8" height="22" rx="1.5" stroke="rgba(100,230,255,0.88)" strokeWidth="1.4" fill="rgba(56,211,241,0.12)"/>
            <rect x="32" y="20" width="8" height="30" rx="1.5" stroke="rgba(100,230,255,0.88)" strokeWidth="1.4" fill="rgba(56,211,241,0.12)"/>
            {/* trend arrow */}
            <polyline points="10,42 21,30 32,22 46,12" stroke="rgba(100,230,255,0.90)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="42,10 46,12 44,16" stroke="rgba(100,230,255,0.90)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            {/* target bullseye */}
            <circle cx="57" cy="20" r="10" stroke="rgba(100,230,255,0.85)" strokeWidth="1.4" fill="rgba(56,211,241,0.08)"/>
            <circle cx="57" cy="20" r="5.5" stroke="rgba(100,230,255,0.75)" strokeWidth="1.2" fill="rgba(56,211,241,0.06)"/>
            <circle cx="57" cy="20" r="2" fill="rgba(100,230,255,0.9)"/>
            {/* arrow in target */}
            <line x1="50" y1="20" x2="55.2" y2="20" stroke="rgba(100,230,255,0.92)" strokeWidth="1.4" strokeLinecap="round"/>
            <polyline points="53.5,18 55.5,20 53.5,22" stroke="rgba(100,230,255,0.92)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            {/* circuit nodes left */}
            <circle cx="5" cy="28" r="2.2" fill="rgba(100,230,255,0.85)"/>
            <polyline points="5,28 7,34 10,38" stroke="rgba(100,230,255,0.60)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="4" cy="20" r="1.6" fill="rgba(100,230,255,0.70)"/>
            <line x1="5" y1="28" x2="4" y2="20" stroke="rgba(100,230,255,0.55)" strokeWidth="1" strokeLinecap="round"/>
            {/* circuit nodes right */}
            <circle cx="68" cy="30" r="2" fill="rgba(100,230,255,0.80)"/>
            <line x1="67" y1="30" x2="64" y2="24" stroke="rgba(100,230,255,0.60)" strokeWidth="1.1" strokeLinecap="round"/>
            <circle cx="68" cy="38" r="1.6" fill="rgba(100,230,255,0.65)"/>
            <line x1="68" y1="30" x2="68" y2="38" stroke="rgba(100,230,255,0.50)" strokeWidth="1" strokeLinecap="round"/>
          </svg>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.10em', color: '#d0f4ff', textShadow: '0 0 14px rgba(56,211,241,0.75)', marginBottom: 3 }}>DIGITAL MARKETING</p>
            <p style={{ fontSize: 9.5, letterSpacing: '0.04em', color: 'rgba(160,235,255,0.78)' }}>デジタルマーケティング</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full h-full" style={{ background: 'linear-gradient(140deg, #052e16 0%, #065f46 38%, #0f766e 72%, #14b8a6 100%)' }}>
      {/* top sheen */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% -10%, rgba(255,255,255,0.16) 0%, transparent 55%)' }} />
      {/* center glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 48%, rgba(52,211,153,0.22) 0%, transparent 52%)' }} />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        {/* wallet + connection nodes icon */}
        <svg viewBox="0 0 64 64" width="52" height="52" fill="none" style={{ filter: 'drop-shadow(0 0 8px rgba(52,211,153,0.65)) drop-shadow(0 0 3px rgba(52,211,153,0.9))' }}>
          {/* wallet body */}
          <rect x="10" y="20" width="36" height="26" rx="3.5" stroke="rgba(110,231,183,0.88)" strokeWidth="1.4" fill="rgba(52,211,153,0.10)"/>
          {/* wallet flap */}
          <path d="M10 27h36" stroke="rgba(110,231,183,0.75)" strokeWidth="1.2" strokeLinecap="round"/>
          {/* coin slot */}
          <rect x="34" y="29" width="12" height="9" rx="2" stroke="rgba(110,231,183,0.85)" strokeWidth="1.2" fill="rgba(52,211,153,0.12)"/>
          <circle cx="40" cy="33.5" r="2" fill="rgba(110,231,183,0.80)"/>
          {/* circuit — upper left */}
          <polyline points="10,20 6,14 10,9" stroke="rgba(110,231,183,0.65)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="10" cy="9" r="2.2" fill="rgba(110,231,183,0.85)"/>
          <circle cx="5" cy="9" r="1.5" fill="rgba(110,231,183,0.65)"/>
          <line x1="10" y1="9" x2="5" y2="9" stroke="rgba(110,231,183,0.55)" strokeWidth="1" strokeLinecap="round"/>
          {/* circuit — upper right */}
          <polyline points="46,20 50,14 55,14" stroke="rgba(110,231,183,0.65)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="55" cy="14" r="2.2" fill="rgba(110,231,183,0.85)"/>
          <circle cx="55" cy="8" r="1.5" fill="rgba(110,231,183,0.65)"/>
          <line x1="55" y1="14" x2="55" y2="8" stroke="rgba(110,231,183,0.55)" strokeWidth="1" strokeLinecap="round"/>
          {/* circuit — lower */}
          <polyline points="20,46 18,52 24,56" stroke="rgba(110,231,183,0.60)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="24" cy="56" r="2" fill="rgba(110,231,183,0.75)"/>
          <polyline points="36,46 40,52 46,52" stroke="rgba(110,231,183,0.55)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="46" cy="52" r="1.8" fill="rgba(110,231,183,0.70)"/>
        </svg>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: 14, fontWeight: 800, letterSpacing: '0.12em', color: '#d1fae5', textShadow: '0 0 14px rgba(52,211,153,0.75)', marginBottom: 3 }}>RELATIONSHIP</p>
          <p style={{ fontSize: 9.5, letterSpacing: '0.04em', color: 'rgba(167,243,208,0.78)' }}>リレーションシップ構築</p>
        </div>
      </div>
    </div>
  );
}

export default function Business() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current || !imagesRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
        }
      );

      const images = imagesRef.current?.querySelectorAll('.business-image');
      if (images && images.length > 0) {
        gsap.fromTo(
          images,
          { opacity: 0, scale: 0.85 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: { trigger: imagesRef.current, start: 'top 80%', once: true },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-white" id="business">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Text */}
          <div ref={textRef} className="space-y-6">
            <div>
              <p className="font-en text-sm text-primary font-semibold tracking-widest mb-2">
                BUSINESS
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-main">
                事業内容
              </h2>
            </div>

            <div className="space-y-4 text-text-sub leading-relaxed">
              <p className="text-text-main font-semibold text-lg">
                私たちが挑み続けるフィールド――
              </p>
              <p>
                DX推進による業務変革、デジタルマーケティングによる顧客体験の最大化、そして多様な才能が交わるリレーションシップの構築。
                この3つのフィールドで、地域企業の成長と未来を共に創ります。
              </p>
            </div>

          </div>

          {/* Right: Collage Panels */}
          <div ref={imagesRef} className="relative h-[400px] md:h-[500px]">
            {/* Panel 1 — DX SOLUTION (clickable) */}
            <Link
              href="/dx-solution"
              className="business-image bp1 absolute top-0 left-0 w-[45%] h-[50%] rounded-xl overflow-hidden block group"
              style={{ transform: 'rotate(3deg)', boxShadow: '0 8px 28px rgba(99,60,220,0.45), 0 2px 8px rgba(0,0,0,0.3)' }}
              title="DX推進ソリューションの詳細を見る"
            >
              <DesignPanel variant={1} />
              {/* always-visible tap hint */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center pb-3 pt-6"
                style={{ background: 'linear-gradient(to top, rgba(80,20,180,0.72) 0%, transparent 100%)' }}>
                <span className="text-white text-xs font-bold tracking-widest flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity duration-200">
                  詳細を見る
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-0.5">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </span>
              </div>
            </Link>

            {/* Panel 2 — DIGITAL MARKETING (clickable) */}
            <Link
              href="/digital-marketing"
              className="business-image bp2 absolute top-[20%] right-0 w-[50%] h-[55%] rounded-xl overflow-hidden block group"
              style={{ transform: 'rotate(-2deg)', boxShadow: '0 8px 28px rgba(0,80,180,0.40), 0 2px 8px rgba(0,0,0,0.3)' }}
              title="デジタルマーケティング支援の詳細を見る"
            >
              <DesignPanel variant={2} />
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center pb-3 pt-6"
                style={{ background: 'linear-gradient(to top, rgba(3,60,130,0.72) 0%, transparent 100%)' }}>
                <span className="text-white text-xs font-bold tracking-widest flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity duration-200">
                  詳細を見る
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-0.5">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </span>
              </div>
            </Link>

            {/* Panel 3 — RELATIONSHIP (clickable) */}
            <Link
              href="/relationship"
              className="business-image bp3 absolute bottom-0 left-[15%] w-[48%] h-[48%] rounded-xl overflow-hidden block group"
              style={{ transform: 'rotate(4deg)', boxShadow: '0 8px 28px rgba(20,100,80,0.40), 0 2px 8px rgba(0,0,0,0.3)' }}
              title="リレーションシップ構築の詳細を見る"
            >
              <DesignPanel variant={3} />
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center pb-3 pt-6"
                style={{ background: 'linear-gradient(to top, rgba(4,60,40,0.72) 0%, transparent 100%)' }}>
                <span className="text-white text-xs font-bold tracking-widest flex items-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity duration-200">
                  詳細を見る
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-0.5">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .business-image { transition: transform 0.28s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.28s ease; cursor: pointer; }
        .bp1:hover { transform: rotate(3deg) scale(1.06) !important; box-shadow: 0 18px 48px rgba(99,60,220,0.65), 0 4px 16px rgba(0,0,0,0.35) !important; }
        .bp2:hover { transform: rotate(-2deg) scale(1.06) !important; box-shadow: 0 18px 48px rgba(0,80,180,0.60), 0 4px 16px rgba(0,0,0,0.35) !important; }
        .bp3:hover { transform: rotate(4deg) scale(1.06) !important; box-shadow: 0 18px 48px rgba(20,100,80,0.60), 0 4px 16px rgba(0,0,0,0.35) !important; }
      `}</style>
    </section>
  );
}
