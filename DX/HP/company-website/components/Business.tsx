'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function DesignPanel({ variant }: { variant: 1 | 2 | 3 }) {
  if (variant === 1) {
    return (
      <div className="w-full h-full" style={{ background: 'linear-gradient(135deg, #1a0a3e 0%, #3730a3 50%, #0057B8 100%)' }}>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1.5px, transparent 1.5px)', backgroundSize: '20px 20px' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#a5b4fc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"/>
              <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
            </svg>
          </div>
          <span className="font-en text-xs font-bold tracking-widest text-indigo-200">DX SOLUTION</span>
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(99,102,241,0.3) 0%, transparent 60%)' }} />
      </div>
    );
  }
  if (variant === 2) {
    return (
      <div className="w-full h-full" style={{ background: 'linear-gradient(135deg, #020E28 0%, #01234F 60%, #003D82 100%)' }}>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(0,160,233,0.1) 1.5px, transparent 1.5px)', backgroundSize: '20px 20px' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(0,160,233,0.12)', border: '1px solid rgba(0,160,233,0.3)' }}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#00A0E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
          </div>
          <span className="font-en text-xs font-bold tracking-widest text-sky-300">DIGITAL MARKETING</span>
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(0,160,233,0.2) 0%, transparent 60%)' }} />
      </div>
    );
  }
  return (
    <div className="w-full h-full" style={{ background: 'linear-gradient(135deg, #002020 0%, #065f46 60%, #0d9488 100%)' }}>
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(52,211,153,0.1) 1.5px, transparent 1.5px)', backgroundSize: '20px 20px' }} />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(52,211,153,0.12)', border: '1px solid rgba(52,211,153,0.3)' }}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
        </div>
        <span className="font-en text-xs font-bold tracking-widest text-emerald-300">RELATIONSHIP</span>
      </div>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(52,211,153,0.2) 0%, transparent 60%)' }} />
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
          { opacity: 0, scale: 0.8, rotate: 0 },
          {
            opacity: 1, scale: 1,
            rotate: (index) => [3, -2, 4][index] || 0,
            duration: 0.6, stagger: 0.2, ease: 'power2.out',
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

            <div className="pt-4">
              <a href="#service" className="btn btn-primary">
                VIEW MORE
              </a>
            </div>
          </div>

          {/* Right: Collage Panels */}
          <div ref={imagesRef} className="relative h-[400px] md:h-[500px]">
            {/* Panel 1 — DX SOLUTION (clickable) */}
            <Link
              href="/dx-solution"
              className="business-image absolute top-0 left-0 w-[45%] h-[50%] rounded-xl overflow-hidden shadow-lg block group"
              style={{ transform: 'rotate(3deg)' }}
              title="DX推進ソリューションの詳細を見る"
            >
              <DesignPanel variant={1} />
              <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ background: 'linear-gradient(to top, rgba(99,102,241,0.85) 0%, transparent 55%)' }}>
                <span className="text-white text-xs font-bold tracking-widest flex items-center gap-1">
                  詳細を見る
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </span>
              </div>
            </Link>

            {/* Panel 2 — DIGITAL MARKETING (clickable) */}
            <Link
              href="/digital-marketing"
              className="business-image absolute top-[20%] right-0 w-[50%] h-[55%] rounded-xl overflow-hidden shadow-lg block group"
              style={{ transform: 'rotate(-2deg)' }}
              title="デジタルマーケティング支援の詳細を見る"
            >
              <DesignPanel variant={2} />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ background: 'linear-gradient(to top, rgba(3,105,161,0.85) 0%, transparent 55%)' }}>
                <span className="text-white text-xs font-bold tracking-widest flex items-center gap-1">
                  詳細を見る
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </span>
              </div>
            </Link>

            {/* Panel 3 */}
            <div
              className="business-image absolute bottom-0 left-[15%] w-[48%] h-[48%] rounded-xl overflow-hidden shadow-lg"
              style={{ transform: 'rotate(4deg)' }}
            >
              <DesignPanel variant={3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
