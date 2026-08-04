'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WaveBackground } from './ui/WaveBackground';

const companyInfo = [
  { label: '会社名', value: 'からくり' },
  { label: '代表取締役', value: '舟木 南生' },
  { label: '事業内容', value: 'DX推進支援・デジタルマーケティング支援・AX（AI Transformation）推進支援' },
  { label: '設立', value: '2026年' },
  { label: '所在地', value: '日本国内（全国対応）' },
];

export default function Company() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, x: 24 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.company-grid', start: 'top 85%', once: true },
        }
      );
      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.company-grid', start: 'top 85%', once: true },
        }
      );
      gsap.fromTo(
        sectionRef.current!.querySelectorAll('.company-row'),
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.07,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.company-info', start: 'top 92%', once: true },
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
        padding: 'clamp(56px, 5.5vw, 88px) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Slow drifting waves */}
      <WaveBackground color="#FFFFFF" intensity={0.85} speed={1.2} style={{ zIndex: 0 }} />

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
        {/* Header row — same structure as the Business and Works sections */}
        <div
          className="company-header"
          style={{ display: 'flex', gap: '40px', marginBottom: '52px', alignItems: 'flex-start' }}
        >
          <div style={{ width: '180px', flexShrink: 0 }}>
            <p
              style={{
                fontFamily: 'var(--f-mono)',
                fontSize: '10px',
                letterSpacing: '0.16em',
                color: 'var(--accent)',
                textTransform: 'uppercase',
                marginBottom: '10px',
              }}
            >
              — Company
            </p>
            <h2
              style={{
                fontFamily: 'var(--f-jp)',
                fontWeight: 700,
                fontSize: 'clamp(32px, 4vw, 52px)',
                color: 'var(--ink)',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                whiteSpace: 'nowrap',
              }}
            >
              企業情報
            </h2>
          </div>
          <div style={{ flex: 1, paddingTop: '4px', maxWidth: '640px' }}>
            <p
              style={{
                fontFamily: 'var(--f-jp)',
                fontSize: '15px',
                color: 'var(--ink-sub)',
                lineHeight: 1.9,
              }}
            >
              地方企業の「次の一歩」と共に未来を創り上げる、伴走型のITパートナーとして事業を展開しています。
            </p>
          </div>
        </div>

        {/* Statement + details (left) / photo (right) */}
        <div
          className="company-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr minmax(0, 440px)',
            gap: 'clamp(32px, 4.5vw, 72px)',
            alignItems: 'stretch',
          }}
        >
          <div>
            <blockquote
              ref={quoteRef}
              style={{
                opacity: 0,
                fontFamily: 'var(--f-jp)',
                fontWeight: 700,
                fontSize: 'clamp(22px, 2.6vw, 34px)',
                lineHeight: 1.55,
                color: 'var(--ink)',
                letterSpacing: '-0.03em',
                margin: '0 0 20px',
              }}
            >
              地方には、まだ語られて
              <br />
              いない事業がある。
            </blockquote>

            <p
              style={{
                fontFamily: 'var(--f-jp)',
                fontSize: '14px',
                lineHeight: 1.95,
                color: 'var(--ink-sub)',
                maxWidth: '540px',
                marginBottom: '14px',
              }}
            >
              大都市に集中するDX推進の波は、地方企業の多くにまだ届いていません。
              しかし地方にこそ独自の強みがあり、デジタル技術で新たな価値を生み出せる可能性が眠っています。
              テクノロジーは手段であり、目的は人と地域の豊かさです。
            </p>
            <p
              style={{
                fontFamily: 'var(--f-mono)',
                fontSize: '11px',
                color: 'var(--ink-mute)',
                letterSpacing: '0.06em',
                marginBottom: 'clamp(32px, 3.5vw, 48px)',
              }}
            >
              — 代表取締役 舟木 南生
            </p>

            {/* Details table */}
            <dl className="company-info" style={{ borderTop: '1px solid var(--hair)', margin: 0 }}>
              {companyInfo.map((info, index) => (
                <div
                  key={index}
                  className="company-row"
                  style={{
                    display: 'flex',
                    gap: '24px',
                    padding: '12px 4px',
                    borderBottom: '1px solid var(--hair)',
                    alignItems: 'flex-start',
                  }}
                >
                  <dt
                    style={{
                      width: '116px',
                      flexShrink: 0,
                      fontFamily: 'var(--f-mono)',
                      fontSize: '10px',
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
                      fontSize: '13.5px',
                      color: 'var(--ink)',
                      lineHeight: 1.75,
                      fontWeight: 500,
                      margin: 0,
                    }}
                  >
                    {info.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Photo — stretches to the left column's height */}
          <div
            ref={imgRef}
            className="company-img-wrap"
            style={{
              opacity: 0,
              position: 'relative',
              minHeight: 'clamp(340px, 40vw, 560px)',
              borderRadius: '6px',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/images/manifesto.jpg"
              alt="日本の地方の風景"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              sizes="(max-width: 900px) 100vw, 440px"
            />
          </div>
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
        @media (max-width: 980px) {
          .company-header {
            flex-direction: column !important;
            gap: 16px !important;
          }
          .company-header > div:first-child {
            width: auto !important;
          }
        }
        @media (max-width: 900px) {
          .company-grid {
            grid-template-columns: 1fr !important;
          }
          .company-img-wrap {
            min-height: clamp(220px, 52vw, 340px) !important;
            order: -1;
          }
        }
        @media (max-width: 560px) {
          .company-row {
            flex-direction: column;
            gap: 4px !important;
          }
          .company-row dt { width: auto !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .company-row,
          .company-row:hover { transform: none !important; transition: none; }
        }
      `}</style>
    </section>
  );
}
