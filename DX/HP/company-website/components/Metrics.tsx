'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const metrics = [
  { value: '3', unit: '領域', label: 'Business Areas', desc: 'DX / マーケティング / 融合。3軸で地方企業の成長を支援します。' },
  { value: '1:1', unit: '', label: 'Partner Ratio', desc: '担当者との1対1。深く理解し、伴走するサポート体制を築きます。' },
  { value: '∞', unit: '', label: 'Possibilities', desc: 'テクノロジーが広げる可能性に限界はない。共に未来を描きます。' },
];

export default function Metrics() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll('.metric-item'),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.18,
          ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ background: 'var(--bg)', padding: 'clamp(80px, 9vw, 120px) 0', borderTop: '1px solid var(--hair)' }}
    >
      <div className="container-custom">
        <div style={{ marginBottom: '48px' }}>
          <p
            style={{
              fontFamily: 'var(--f-mono)',
              fontSize: '10px',
              letterSpacing: '0.16em',
              color: 'var(--ink-mute)',
              textTransform: 'uppercase',
              marginBottom: '10px',
            }}
          >
            — Numbers
          </p>
          <h2
            style={{
              fontFamily: 'var(--f-jp)',
              fontWeight: 700,
              fontSize: '22px',
              color: 'var(--ink)',
              letterSpacing: '-0.01em',
            }}
          >
            数字で見るDX_ver01
          </h2>
        </div>

        <div
          className="metrics-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            borderTop: '1px solid var(--hair)',
            borderLeft: '1px solid var(--hair)',
          }}
        >
          {metrics.map((m, i) => (
            <div
              key={i}
              className="metric-item"
              style={{
                padding: '56px 40px',
                borderRight: '1px solid var(--hair)',
                borderBottom: '1px solid var(--hair)',
                opacity: 0,
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--f-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.14em',
                  color: 'var(--ink-mute)',
                  textTransform: 'uppercase',
                  marginBottom: '28px',
                }}
              >
                {m.label}
              </p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '20px' }}>
                <span
                  style={{
                    fontFamily: 'var(--f-display)',
                    fontSize: 'clamp(64px, 8vw, 120px)',
                    fontStyle: 'italic',
                    color: 'var(--ink)',
                    lineHeight: 1.0,
                    fontWeight: 400,
                  }}
                >
                  {m.value}
                </span>
                {m.unit && (
                  <span style={{ fontFamily: 'var(--f-jp)', fontSize: '18px', color: 'var(--ink-mute)' }}>
                    {m.unit}
                  </span>
                )}
              </div>
              <p style={{ fontFamily: 'var(--f-jp)', fontSize: '13px', color: 'var(--ink-mute)', lineHeight: 1.85 }}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .metrics-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
