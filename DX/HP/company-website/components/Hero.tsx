'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo(metaRef.current, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.1 }, '-=0.2')
        .fromTo(rightRef.current, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.9 }, '-=0.7')
        .fromTo(bottomRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.4');
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      style={{
        background: 'linear-gradient(160deg, #FAFCFF 0%, #EDF2FF 60%, #F5F0FF 100%)',
        minHeight: 'calc(100vh - 62px)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Spatial Orb */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          right: '-80px',
          top: '60px',
          width: '520px',
          height: '520px',
          background: 'radial-gradient(circle at 50% 50%, rgba(46,110,255,0.55) 0%, rgba(46,110,255,0.15) 40%, rgba(46,110,255,0) 72%)',
          filter: 'blur(40px)',
          opacity: 0.6,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Meta bar */}
      <div
        ref={metaRef}
        className="hero-meta"
        style={{
          opacity: 0,
          fontFamily: 'var(--f-mono)',
          fontSize: '11px',
          letterSpacing: '0.08em',
          color: 'var(--ink-mute)',
          padding: '24px clamp(20px, 4vw, 48px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          position: 'relative',
          zIndex: 2,
          flexWrap: 'wrap',
        }}
      >
        <span>BASED IN JAPAN · SERVING NATIONWIDE</span>
      </div>

      {/* Main content */}
      <div
        className="hero-main"
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: 'clamp(24px, 4vw, 80px)',
          padding: 'clamp(40px, 6vw, 80px) clamp(20px, 4vw, 48px)',
          position: 'relative',
          zIndex: 1,
          alignItems: 'center',
        }}
      >
        {/* Left: Big title */}
        <div>
          <h1
            ref={titleRef}
            style={{
              opacity: 0,
              fontFamily: 'var(--f-jp)',
              fontWeight: 900,
              fontSize: 'clamp(56px, 9.5vw, 150px)',
              letterSpacing: '-0.04em',
              lineHeight: 1.0,
              margin: 0,
            }}
          >
            <span style={{ display: 'block', color: 'var(--ink)' }}>踏み出す、</span>
            <span
              style={{
                display: 'block',
                paddingLeft: 'clamp(32px, 7vw, 120px)',
                color: 'var(--accent)',
                whiteSpace: 'nowrap',
              }}
            >
              はみ出す。
            </span>
          </h1>
        </div>

        {/* Right: Sub content */}
        <div
          ref={rightRef}
          className="hero-right"
          style={{
            opacity: 0,
            paddingLeft: 'clamp(0px, 2vw, 40px)',
            maxWidth: '480px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--f-mono)',
              fontSize: '11px',
              letterSpacing: '0.12em',
              color: 'var(--ink-mute)',
              marginBottom: '28px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textTransform: 'uppercase',
            }}
          >
            <span style={{ width: '24px', height: '1px', background: 'var(--ink-mute)' }} />
            SINCE 2026 / DX PARTNER
          </p>
          <h2
            style={{
              fontFamily: 'var(--f-jp)',
              fontWeight: 700,
              fontSize: 'clamp(18px, 1.7vw, 26px)',
              lineHeight: 1.6,
              color: 'var(--ink)',
              marginBottom: '20px',
              letterSpacing: '-0.01em',
            }}
          >
            既存のルールから抜け出し、
            <br />
            新しいビジネスの形へ。
          </h2>
          <p
            style={{
              fontFamily: 'var(--f-jp)',
              fontSize: '14px',
              lineHeight: 1.9,
              color: 'var(--ink-mute)',
            }}
          >
            DX推進、デジタルマーケティング、そしてその融合。
            <br />
            地方企業の「次の一歩」と共に未来を創り上げる、伴走型のITパートナーです。
          </p>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div
        ref={bottomRef}
        className="hero-stats"
        style={{
          opacity: 0,
          borderTop: '1px solid var(--hair)',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {[
          { label: 'Business Areas', value: '03', unit: '領域' },
          { label: 'Founded', value: '2026', unit: '' },
          { label: 'Approach', value: '伴走型支援', unit: '' },
          { label: 'Status', value: '受付中', unit: '' },
        ].map((item, i) => (
          <div
            key={i}
            className="hero-stat-item"
            style={{
              padding: '24px clamp(16px, 2.5vw, 32px)',
              borderRight: i < 3 ? '1px solid var(--hair)' : 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--f-mono)',
                fontSize: '10px',
                letterSpacing: '0.14em',
                color: 'var(--ink-mute)',
                textTransform: 'uppercase',
              }}
            >
              {item.label}:
            </p>
            <p style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <span
                style={{
                  fontFamily: item.value.match(/^\d/) ? 'var(--f-display)' : 'var(--f-jp)',
                  fontSize: 'clamp(22px, 2.4vw, 36px)',
                  color: 'var(--ink)',
                  fontStyle: item.value.match(/^\d/) ? 'italic' : 'normal',
                  lineHeight: 1,
                }}
              >
                {item.value}
              </span>
              {item.unit && (
                <span style={{ fontFamily: 'var(--f-jp)', fontSize: '12px', color: 'var(--ink-mute)' }}>
                  {item.unit}
                </span>
              )}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-main {
            grid-template-columns: 1fr !important;
          }
          .hero-right {
            padding-left: 0 !important;
          }
          .hero-stats {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .hero-stat-item {
            border-right: 1px solid var(--hair) !important;
          }
          .hero-stat-item:nth-child(2n) {
            border-right: none !important;
          }
          .hero-stat-item:nth-child(-n+2) {
            border-bottom: 1px solid var(--hair);
          }
        }
        @media (max-width: 600px) {
          .hero-meta {
            font-size: 10px !important;
          }
        }
      `}</style>
    </section>
  );
}
