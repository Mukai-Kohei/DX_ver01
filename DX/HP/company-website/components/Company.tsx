'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const companyInfo = [
  { label: '会社名', value: 'からくり' },
  { label: '代表取締役', value: '舟木 南生' },
  { label: '事業内容', value: 'DX推進支援・デジタルマーケティング支援・DX×マーケティング融合・AX（AI Transformation）推進支援' },
  { label: '設立', value: '2026年' },
  { label: '所在地', value: '日本国内（全国対応）' },
];

export default function Company() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll('.company-row'),
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
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
      id="company"
      style={{
        background: '#F5F7FA',
        padding: 'clamp(80px, 10vw, 140px) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Watermark */}
      <span
        aria-hidden
        style={{
          position: 'absolute',
          bottom: '-30px',
          right: '-10px',
          fontFamily: 'var(--f-display)',
          fontStyle: 'italic',
          fontSize: 'clamp(96px, 14vw, 200px)',
          lineHeight: 1,
          color: 'rgba(10,22,40,0.045)',
          pointerEvents: 'none',
          userSelect: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        Company
      </span>

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        <div className="company-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '60px', alignItems: 'flex-start' }}>
          {/* Left */}
          <div>
            <p
              style={{
                fontFamily: 'var(--f-mono)',
                fontSize: '10px',
                letterSpacing: '0.16em',
                color: 'var(--accent)',
                textTransform: 'uppercase',
                marginBottom: '14px',
              }}
            >
              — Company
            </p>
            <h2
              style={{
                fontFamily: 'var(--f-jp)',
                fontWeight: 700,
                fontSize: 'clamp(32px, 4vw, 56px)',
                color: 'var(--ink)',
                lineHeight: 1.2,
                letterSpacing: '-0.03em',
                marginBottom: '24px',
              }}
            >
              企業情報
            </h2>
            <p style={{ fontFamily: 'var(--f-jp)', fontSize: '15px', color: 'var(--ink-sub)', lineHeight: 1.9, maxWidth: '360px' }}>
              地方企業の「次の一歩」と共に未来を創り上げる、伴走型のITパートナーとして事業を展開しています。
            </p>
          </div>

          {/* Right: Table */}
          <dl style={{ borderTop: '1px solid var(--hair)' }}>
            {companyInfo.map((info, index) => (
              <div
                key={index}
                className="company-row"
                style={{
                  display: 'flex',
                  gap: '32px',
                  padding: '22px 4px',
                  borderBottom: '1px solid var(--hair)',
                  alignItems: 'flex-start',
                }}
              >
                <dt
                  style={{
                    width: '140px',
                    flexShrink: 0,
                    fontFamily: 'var(--f-mono)',
                    fontSize: '11px',
                    letterSpacing: '0.08em',
                    color: 'var(--ink-mute)',
                    textTransform: 'uppercase',
                    paddingTop: '4px',
                  }}
                >
                  {info.label}
                </dt>
                <dd
                  style={{
                    fontFamily: 'var(--f-jp)',
                    fontSize: '14px',
                    color: 'var(--ink)',
                    lineHeight: 1.8,
                    fontWeight: 500,
                  }}
                >
                  {info.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <style>{`
        .company-row {
          transition: transform 0.3s ease, background 0.3s ease;
        }
        .company-row:hover {
          transform: translateX(6px);
          background: rgba(46,110,255,0.045);
        }
        @media (max-width: 900px) {
          .company-layout {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .company-row,
          .company-row:hover { transform: none !important; transition: none; }
        }
      `}</style>
    </section>
  );
}
