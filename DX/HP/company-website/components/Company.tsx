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
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
        }
      );
      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          delay: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
        }
      );
      gsap.fromTo(
        sectionRef.current!.querySelectorAll('.company-row'),
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.company-info', start: 'top 90%', once: true },
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
        {/*
          One grid, two rows: the statement sits above the details table on the
          left, and the photo occupies the whole right column across both rows.
          Spanning a single image avoids repeating the only photo we have while
          still filling the space beside the table.
        */}
        <div
          className="company-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr minmax(0, 440px)',
            columnGap: 'clamp(32px, 4.5vw, 72px)',
            rowGap: 'clamp(40px, 4.5vw, 64px)',
          }}
        >
          {/* Left, row 1 — heading + statement */}
          <div style={{ gridColumn: 1, gridRow: 1, alignSelf: 'center' }}>
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
                fontSize: 'clamp(22px, 2.4vw, 30px)',
                color: 'var(--ink)',
                lineHeight: 1.3,
                letterSpacing: '-0.02em',
                marginBottom: '28px',
              }}
            >
              企業情報
            </h2>

            <blockquote
              ref={quoteRef}
              style={{
                opacity: 0,
                fontFamily: 'var(--f-jp)',
                fontWeight: 700,
                fontSize: 'clamp(24px, 3vw, 42px)',
                lineHeight: 1.5,
                color: 'var(--ink)',
                letterSpacing: '-0.03em',
                margin: 0,
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
                marginTop: '24px',
                maxWidth: '520px',
              }}
            >
              大都市に集中するDX推進の波は、地方企業の多くにまだ届いていません。
              しかし地方にこそ独自の強みがあり、デジタル技術で新たな価値を生み出せる可能性が眠っています。
              テクノロジーは手段であり、目的は人と地域の豊かさです。
            </p>
            <p
              style={{
                marginTop: '18px',
                fontFamily: 'var(--f-mono)',
                fontSize: '11px',
                color: 'var(--ink-mute)',
                letterSpacing: '0.06em',
              }}
            >
              — 代表取締役 舟木 南生
            </p>
          </div>

          {/* Right — photo spanning both rows */}
          <div
            ref={imgRef}
            className="company-img-wrap"
            style={{
              opacity: 0,
              gridColumn: 2,
              gridRow: '1 / span 2',
              alignSelf: 'stretch',
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

          {/* Left, row 2 — compact details table */}
          <dl
            className="company-info"
            style={{ gridColumn: 1, gridRow: 2, borderTop: '1px solid var(--hair)', margin: 0 }}
          >
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
          .company-grid {
            grid-template-columns: 1fr !important;
          }
          /* Let the three blocks flow in source order once stacked. */
          .company-grid > * {
            grid-column: 1 !important;
            grid-row: auto !important;
          }
          .company-img-wrap {
            min-height: clamp(220px, 52vw, 340px) !important;
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
