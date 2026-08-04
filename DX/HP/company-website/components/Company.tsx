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
          scrollTrigger: { trigger: '.company-info', start: 'top 88%', once: true },
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

        {/* ── Heading & statement (left) + photo (right) ── */}
        <div
          className="company-top"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr minmax(0, 440px)',
            gap: 'clamp(32px, 4.5vw, 72px)',
            alignItems: 'center',
          }}
        >
          <div>
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

          <div
            ref={imgRef}
            className="company-img-wrap"
            style={{
              opacity: 0,
              position: 'relative',
              height: 'clamp(320px, 38vw, 520px)',
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

        {/* ── Company details ── */}
        <dl
          className="company-info"
          style={{
            borderTop: '1px solid var(--hair)',
            marginTop: 'clamp(44px, 4.5vw, 68px)',
          }}
        >
          {companyInfo.map((info, index) => (
            <div
              key={index}
              className="company-row"
              style={{
                display: 'flex',
                gap: '32px',
                padding: '18px 4px',
                borderBottom: '1px solid var(--hair)',
                alignItems: 'flex-start',
              }}
            >
              <dt
                style={{
                  width: '160px',
                  flexShrink: 0,
                  fontFamily: 'var(--f-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.08em',
                  color: 'var(--ink-mute)',
                  textTransform: 'uppercase',
                  paddingTop: '3px',
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

      <style>{`
        .company-row {
          transition: transform 0.3s ease, background 0.3s ease;
        }
        .company-row:hover {
          transform: translateX(6px);
          background: rgba(46,110,255,0.045);
        }
        @media (max-width: 900px) {
          .company-top {
            grid-template-columns: 1fr !important;
          }
          .company-img-wrap {
            height: clamp(220px, 52vw, 340px) !important;
            order: -1;
          }
          .company-row .company-dt,
          .company-row dt { width: 110px !important; }
        }
        @media (max-width: 560px) {
          .company-row {
            flex-direction: column;
            gap: 6px !important;
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
