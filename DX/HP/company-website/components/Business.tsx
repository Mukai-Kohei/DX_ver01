'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const services = [
  {
    no: '01',
    titleHtml: 'DX <em>Solution</em>',
    ja: 'DX推進支援',
    desc: '業務フローのデジタル化から組織変革まで、貴社の課題に合わせたDX戦略を設計・実装します。',
    tags: ['業務改善', 'システム導入', '組織変革'],
    href: '/dx-solution',
    accent: '#6d28d9',
    accentSoft: 'rgba(109,40,217,0.14)',
    accentRing: 'rgba(167,139,250,0.55)',
  },
  {
    no: '02',
    titleHtml: 'Digital <em>Marketing</em>',
    ja: 'デジタルマーケティング支援',
    desc: 'SNS・Web広告・SEOを一体化したデータドリブンなマーケティング施策で、顧客獲得を最大化。',
    tags: ['SNS運用', 'Web広告', 'SEO'],
    href: '/digital-marketing',
    accent: '#1d4ed8',
    accentSoft: 'rgba(29,78,216,0.14)',
    accentRing: 'rgba(96,165,250,0.55)',
  },
  {
    no: '03',
    titleHtml: 'DX × <em>Marketing</em>',
    ja: 'DX×マーケティング融合サービス',
    desc: 'テクノロジーと顧客体験を融合させた独自アプローチで、地方企業に新たな成長モデルを提供。',
    tags: ['CX設計', 'データ活用', '成長戦略'],
    href: '/relationship',
    accent: '#0369a1',
    accentSoft: 'rgba(3,105,161,0.14)',
    accentRing: 'rgba(103,232,249,0.55)',
  },
];

export default function Business() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const orbitRingRef = useRef<HTMLDivElement>(null);
  const inner0Ref = useRef<HTMLDivElement>(null);
  const inner1Ref = useRef<HTMLDivElement>(null);
  const inner2Ref = useRef<HTMLDivElement>(null);
  const cNumRef = useRef<HTMLSpanElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const activeRef = useRef(0);
  const isAnimatingRef = useRef(false);

  const rotateTo = (newStep: number) => {
    if (isAnimatingRef.current || newStep === activeRef.current) return;
    isAnimatingRef.current = true;
    activeRef.current = newStep;
    setActiveStep(newStep);

    gsap.to(orbitRingRef.current, {
      rotation: newStep * -120,
      duration: 0.7, ease: 'power2.inOut', overwrite: 'auto',
      onComplete() { isAnimatingRef.current = false; },
    });
    gsap.to(inner0Ref.current, { rotation: newStep * 120,       duration: 0.7, ease: 'power2.inOut', overwrite: 'auto' });
    gsap.to(inner1Ref.current, { rotation: newStep * 120 - 120, duration: 0.7, ease: 'power2.inOut', overwrite: 'auto' });
    gsap.to(inner2Ref.current, { rotation: newStep * 120 - 240, duration: 0.7, ease: 'power2.inOut', overwrite: 'auto' });

    if (cNumRef.current) {
      gsap.to(cNumRef.current, {
        opacity: 0, y: 4, duration: 0.18, ease: 'power1.in', overwrite: 'auto',
        onComplete() {
          if (cNumRef.current) cNumRef.current.textContent = `[ 0${newStep + 1} ]`;
          gsap.to(cNumRef.current, { opacity: 1, y: 0, duration: 0.22, ease: 'power1.out', overwrite: 'auto' });
        },
      });
    }
  };

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.set(inner0Ref.current, { rotation: 0 });
      gsap.set(inner1Ref.current, { rotation: -120 });
      gsap.set(inner2Ref.current, { rotation: -240 });

      gsap.fromTo(
        sectionRef.current!.querySelectorAll('.service-row, .orbit-col'),
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', once: true },
        }
      );
    }, sectionRef);

    const auto = setInterval(() => {
      if (!isAnimatingRef.current) {
        const next = (activeRef.current + 1) % services.length;
        rotateTo(next);
      }
    }, 3800);

    let touchStartX = 0;
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const dx = touchStartX - e.changedTouches[0].clientX;
      const dy = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(dx) < 20 || Math.abs(dx) < Math.abs(dy)) return;
      if (dx > 0) rotateTo((activeRef.current + 1) % services.length);
      if (dx < 0) rotateTo((activeRef.current - 1 + services.length) % services.length);
    };
    const stage = sectionRef.current?.querySelector('.orbit-stage');
    stage?.addEventListener('touchstart', handleTouchStart as EventListener, { passive: true });
    stage?.addEventListener('touchend', handleTouchEnd as EventListener, { passive: true });

    return () => {
      clearInterval(auto);
      stage?.removeEventListener('touchstart', handleTouchStart as EventListener);
      stage?.removeEventListener('touchend', handleTouchEnd as EventListener);
      ctx.revert();
    };
  }, []);

  const WebIcon = ({ c }: { c: string }) => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
         stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
    </svg>
  );
  const ServerIcon = ({ c }: { c: string }) => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
         stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="7" rx="1.5"/>
      <rect x="2" y="12" width="20" height="7" rx="1.5"/>
      <circle cx="18" cy="6.5" r="1.8" fill={c} stroke="none"/>
      <circle cx="18" cy="15.5" r="1.8" fill={c} stroke="none"/>
    </svg>
  );
  const GearIcon = ({ c }: { c: string }) => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
         stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
  );

  const icons = [WebIcon, ServerIcon, GearIcon];
  const current = services[activeStep];

  return (
    <section ref={sectionRef} id="business" style={{ background: 'var(--bg)', padding: 'clamp(80px, 10vw, 140px) 0 clamp(60px, 8vw, 100px)', position: 'relative', overflow: 'hidden' }}>
      {/* Soft accent glow that shifts by active service */}
      <div
        aria-hidden
        className="business-glow"
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '520px',
          height: '520px',
          background: `radial-gradient(circle at 50% 50%, ${current.accentSoft} 0%, transparent 68%)`,
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
          transition: 'background 0.8s ease',
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header row */}
        <div className="business-header" style={{ display: 'flex', gap: '40px', marginBottom: '72px', alignItems: 'flex-start' }}>
          <div style={{ width: '180px', flexShrink: 0 }}>
            <p style={{ fontFamily: 'var(--f-mono)', fontSize: '10px', letterSpacing: '0.16em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '10px' }}>
              — Business
            </p>
            <h2 style={{ fontFamily: 'var(--f-jp)', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 52px)', color: 'var(--ink)', lineHeight: 1.2, letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>
              事業内容
            </h2>
          </div>
          <div style={{ flex: 1, paddingTop: '4px', maxWidth: '640px' }}>
            <p style={{ fontFamily: 'var(--f-jp)', fontSize: '14px', color: 'var(--ink-mute)', lineHeight: 1.9 }}>
              私たちが挑み続けるフィールド——DX推進による業務変革、デジタルマーケティングによる顧客体験の最大化、
              そしてDX×マーケティングの融合が生む新たな価値創造。この3つの領域で、地域企業の未来を共に創ります。
            </p>
          </div>
        </div>

        {/* Orbit + Services */}
        <div
          className="business-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(360px, 1fr) 1.2fr',
            gap: 'clamp(32px, 5vw, 80px)',
            alignItems: 'center',
          }}
        >
          {/* Orbit column */}
          <div className="orbit-col" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
            <div className="orbit-clip-wrapper">
              <div className="orbit-stage relative" style={{ width: 440, height: 440 }}>
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 440 440" fill="none">
                  <circle cx="220" cy="220" r="208"
                          fill={current.accentSoft}
                          stroke="var(--hair)" strokeWidth="1"
                          style={{ transition: 'fill 0.8s ease' }}/>
                  <circle cx="220" cy="220" r="150"
                          fill="none"
                          stroke="var(--hair)" strokeWidth="1"
                          strokeDasharray="4 11"/>
                </svg>

                {/* Center */}
                <div
                  className="orbit-center"
                  style={{
                    position: 'absolute',
                    top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 116, height: 116,
                    borderRadius: '50%',
                    background: '#fff',
                    border: `1px solid ${current.accentRing}`,
                    boxShadow: `0 0 0 4px ${current.accentSoft}, 0 10px 30px rgba(0,0,0,0.06)`,
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    gap: 4,
                    zIndex: 2,
                    transition: 'border-color 0.8s ease, box-shadow 0.8s ease',
                  }}
                >
                  <span ref={cNumRef} style={{ fontFamily: 'var(--f-mono)', fontSize: 9, fontWeight: 700, letterSpacing: '0.25em', color: 'var(--ink-mute)' }}>
                    [ 01 ]
                  </span>
                  <span style={{ fontFamily: 'var(--f-mono)', fontSize: 12, fontWeight: 800, color: 'var(--ink)', letterSpacing: '0.10em' }}>
                    SERVICES
                  </span>
                  <span style={{ fontFamily: 'var(--f-mono)', fontSize: 7.5, letterSpacing: '0.15em', color: 'var(--ink-mute)', textTransform: 'uppercase' }}>
                    DX · SOLUTIONS
                  </span>
                </div>

                {/* Orbit ring */}
                <div ref={orbitRingRef} className="absolute inset-0">
                  {services.map((s, i) => {
                    const Icon = icons[i];
                    const innerRef = i === 0 ? inner0Ref : i === 1 ? inner1Ref : inner2Ref;
                    const isActive = i === activeStep;
                    return (
                      <div
                        key={i}
                        className={`orbit-item ${isActive ? 'is-active' : 'is-dim'}`}
                        style={{ '--a': `${i * 120}deg`, '--r': '150px' } as React.CSSProperties}
                      >
                        <div ref={innerRef} className="orbit-inner">
                          <button
                            type="button"
                            onClick={() => rotateTo(i)}
                            className="node-circle"
                            style={{
                              background: '#fff',
                              borderColor: isActive ? s.accentRing : 'var(--hair)',
                              boxShadow: isActive
                                ? `0 0 0 4px ${s.accentSoft}, 0 10px 28px rgba(0,0,0,0.10)`
                                : 'none',
                              transform: isActive ? 'scale(1.14)' : 'scale(1)',
                              cursor: 'pointer',
                            }}
                            aria-label={s.ja}
                          >
                            <Icon c={isActive ? s.accent : '#555'} />
                          </button>
                          <span className="node-label" style={{ color: isActive ? 'var(--ink)' : 'var(--ink-mute)', fontWeight: isActive ? 700 : 500 }}>
                            {s.ja.replace('支援', '').replace('融合サービス', '')}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>

          {/* Service list */}
          <div style={{ borderTop: '1px solid var(--hair)' }}>
            {services.map((service, i) => (
              <ServiceRow
                key={i}
                service={service}
                last={i === services.length - 1}
                active={i === activeStep}
                onHover={() => rotateTo(i)}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .business-grid {
            grid-template-columns: 1fr !important;
          }
          .business-header {
            flex-direction: column !important;
            gap: 16px !important;
          }
          .business-header > div:first-child {
            width: auto !important;
          }
          .service-row {
            flex-direction: column !important;
            gap: 12px !important;
          }
          .service-row .service-no-col {
            width: auto !important;
          }
          .service-row .service-arrow {
            align-self: flex-start !important;
          }
        }

        .orbit-clip-wrapper {
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 440px; height: 440px;
        }
        @media (max-width: 1200px) { .orbit-clip-wrapper { width: 380px; height: 380px; } }
        @media (max-width:  900px) { .orbit-clip-wrapper { width: 340px; height: 340px; } }
        @media (max-width:  480px) { .orbit-clip-wrapper { width: 280px; height: 280px; } }

        .orbit-stage { transform-origin: center center; flex-shrink: 0; }
        @media (max-width: 1200px) { .orbit-stage { transform: scale(0.86); } }
        @media (max-width:  900px) { .orbit-stage { transform: scale(0.78); } }
        @media (max-width:  480px) { .orbit-stage { transform: scale(0.64); } }

        .orbit-item {
          position: absolute;
          top: 50%; left: 50%;
          width: 0; height: 0;
          overflow: visible;
          transform: rotate(var(--a)) translateY(calc(var(--r) * -1));
        }

        .orbit-inner {
          position: absolute;
          width: 120px; height: 160px;
          top: 0; left: 0;
          margin-top: -50px;
          margin-left: -60px;
          display: flex; flex-direction: column;
          align-items: center; gap: 8px;
          transform-origin: 60px 50px;
        }

        .node-circle {
          width: 92px; height: 92px;
          border-radius: 50%; flex-shrink: 0;
          border: 1px solid var(--hair);
          padding: 0;
          display: flex; align-items: center; justify-content: center;
          transition: background .40s, border-color .40s, box-shadow .40s, transform .40s;
        }

        .node-label {
          font-family: var(--f-jp);
          font-size: 12.5px; line-height: 1.45;
          text-align: center; white-space: nowrap;
          transition: color .35s, font-weight .35s;
        }
      `}</style>
    </section>
  );
}

function ServiceRow({
  service,
  last,
  active,
  onHover,
}: {
  service: (typeof services)[0];
  last: boolean;
  active: boolean;
  onHover: () => void;
}) {
  const rowRef = useRef<HTMLAnchorElement>(null);

  return (
    <Link
      href={service.href}
      ref={rowRef}
      className="service-row"
      onMouseEnter={onHover}
      style={{
        display: 'flex',
        gap: '32px',
        padding: '28px 0 28px 20px',
        borderBottom: last ? 'none' : '1px solid var(--hair)',
        borderLeft: `2px solid ${active ? service.accent : 'transparent'}`,
        textDecoration: 'none',
        transition: 'border-color 0.45s ease, padding-left 0.35s cubic-bezier(0.34,1.56,0.64,1), background 0.35s',
        alignItems: 'flex-start',
        background: active ? service.accentSoft : 'transparent',
      }}
    >
      <div className="service-no-col" style={{ width: '56px', flexShrink: 0, paddingTop: '6px' }}>
        <span style={{ fontFamily: 'var(--f-mono)', fontSize: '12px', color: active ? service.accent : 'var(--ink-mute)', letterSpacing: '0.08em', transition: 'color 0.35s' }}>
          {service.no}
        </span>
      </div>

      <div style={{ flex: 1 }}>
        <h3
          className="service-title"
          style={{
            fontFamily: 'var(--f-display)',
            fontSize: 'clamp(22px, 2.4vw, 34px)',
            color: 'var(--ink)',
            lineHeight: 1.15,
            marginBottom: '6px',
            fontWeight: 400,
            letterSpacing: '-0.01em',
          }}
          dangerouslySetInnerHTML={{ __html: service.titleHtml }}
        />
        <p style={{ fontFamily: 'var(--f-jp)', fontSize: '16px', color: active ? service.accent : 'var(--ink-sub)', marginBottom: '10px', transition: 'color 0.35s', fontWeight: 700, letterSpacing: '0.01em' }}>
          {service.ja}
        </p>
        <p style={{ fontFamily: 'var(--f-jp)', fontSize: '13px', color: 'var(--ink-mute)', lineHeight: 1.85, marginBottom: '12px', maxWidth: '520px' }}>
          {service.desc}
        </p>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {service.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: 'var(--f-mono)',
                fontSize: '10px',
                letterSpacing: '0.06em',
                border: '1px solid var(--hair)',
                borderRadius: '4px',
                padding: '3px 9px',
                color: 'var(--ink-mute)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', paddingTop: '6px' }}>
        <div
          className="service-arrow"
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            border: `1px solid ${active ? service.accent : 'var(--hair)'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: active ? service.accent : 'var(--ink-mute)',
            transition: 'border-color 0.35s, color 0.35s',
            fontSize: '13px',
          }}
        >
          →
        </div>
      </div>

      <style>{`
        .service-title em { font-style: italic; color: var(--accent); }
      `}</style>
    </Link>
  );
}
