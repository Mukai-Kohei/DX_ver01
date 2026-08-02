'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    no: '01',
    en: 'Listen',
    ja: '傾聴',
    desc: '現場の声を徹底的に聞き、課題の本質を把握します。表面的な問題の背後にある本当のニーズを見極めます。',
  },
  {
    no: '02',
    en: 'Design',
    ja: '設計',
    desc: '業界知識とデジタル技術を組み合わせ、貴社固有の解決策を設計。押しつけではなく、一緒に考えます。',
  },
  {
    no: '03',
    en: 'Build',
    ja: '実装',
    desc: 'スピードと品質を両立した実装。小さく始めて素早く検証し、確実に成果につなげます。',
  },
  {
    no: '04',
    en: 'Grow',
    ja: '成長',
    desc: '導入後も継続的にモニタリング・改善。長期的なパートナーとして共に成長を目指します。',
  },
];

export default function Approach() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      /* ── Cards fade up ── */
      gsap.fromTo(
        sectionRef.current!.querySelectorAll('.approach-item'),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
        }
      );

      if (!prefersReduce) {
        /* ── Connector line draws itself as the section scrolls in ── */
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: '.approach-grid',
              start: 'top 85%',
              end: 'top 35%',
              scrub: true,
            },
          }
        );

        /* ── Slow drifting glow orbs ── */
        gsap.to('.approach-orb-1', {
          y: 40, x: 24, duration: 10, yoyo: true, repeat: -1, ease: 'sine.inOut',
        });
        gsap.to('.approach-orb-2', {
          y: -34, x: -18, duration: 12, yoyo: true, repeat: -1, ease: 'sine.inOut',
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="approach"
      style={{
        background: 'linear-gradient(160deg, #EEF3FF 0%, #DDE6FF 55%, #EBE6FF 100%)',
        padding: 'clamp(80px, 10vw, 140px) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Glow orbs ── */}
      <div
        aria-hidden
        className="approach-orb-1"
        style={{
          position: 'absolute',
          top: '-120px',
          right: '-100px',
          width: '480px',
          height: '480px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 50% 50%, rgba(46,110,255,0.16) 0%, transparent 65%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden
        className="approach-orb-2"
        style={{
          position: 'absolute',
          bottom: '-140px',
          left: '-120px',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 50% 50%, rgba(109,40,217,0.12) 0%, transparent 65%)',
          filter: 'blur(64px)',
          pointerEvents: 'none',
        }}
      />
      {/* Fine grid texture */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage:
            'linear-gradient(rgba(46,110,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(46,110,255,0.035) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ marginBottom: '52px' }}>
          <p style={{ fontFamily: 'var(--f-mono)', fontSize: '10px', letterSpacing: '0.16em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '14px' }}>
            — Approach
          </p>
          <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
            <h2 style={{ fontFamily: 'var(--f-jp)', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 56px)', color: 'var(--ink)', lineHeight: 1.2, letterSpacing: '-0.03em', flexShrink: 0 }}>
              私たちの<br />進め方
            </h2>
            <p style={{ fontFamily: 'var(--f-jp)', fontSize: '15px', color: 'var(--ink-sub)', lineHeight: 1.9, flex: 1, minWidth: '260px', paddingBottom: '6px' }}>
              一方的な提案ではなく、対話を重ねながら価値を形にしていく4つのステップ。短期的な成果と長期的な成長を両立させる伴走型のプロセスです。
            </p>
          </div>
        </div>

        {/* Connector line — draws left to right on scroll */}
        <div
          aria-hidden
          style={{ position: 'relative', height: '2px', marginBottom: '28px', background: 'rgba(46,110,255,0.12)', borderRadius: '2px', overflow: 'hidden' }}
        >
          <div
            ref={lineRef}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, #2E6EFF 0%, #6D8FFF 60%, rgba(109,143,255,0.25) 100%)',
              transformOrigin: 'left center',
              transform: 'scaleX(0)',
            }}
          />
        </div>

        {/* Cards */}
        <div
          className="approach-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'clamp(12px, 1.4vw, 20px)',
          }}
        >
          {steps.map((step) => (
            <div
              key={step.no}
              className="approach-item"
              style={{
                background: 'rgba(255,255,255,0.82)',
                border: '1px solid rgba(46,110,255,0.14)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                borderRadius: '14px',
                padding: 'clamp(26px, 2.6vw, 38px) clamp(20px, 2vw, 28px)',
                opacity: 0,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Ghost step number */}
              <span
                aria-hidden
                style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '6px',
                  fontFamily: 'var(--f-display)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(64px, 6vw, 92px)',
                  lineHeight: 1,
                  color: 'var(--accent)',
                  opacity: 0.08,
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}
              >
                {step.no}
              </span>

              <p style={{ fontFamily: 'var(--f-mono)', fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: '20px' }}>
                {step.no}
              </p>
              <h3 style={{ fontFamily: 'var(--f-jp)', fontSize: 'clamp(24px, 2.6vw, 38px)', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.15, marginBottom: '8px', letterSpacing: '-0.02em' }}>
                {step.ja}
              </h3>
              <p style={{ fontFamily: 'var(--f-display)', fontSize: '15px', fontStyle: 'italic', color: 'var(--ink-mute)', marginBottom: '20px', fontWeight: 400 }}>
                {step.en}
              </p>
              <p style={{ fontFamily: 'var(--f-jp)', fontSize: '13.5px', color: 'var(--ink-sub)', lineHeight: 1.9 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .approach-item {
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
                      background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
        }
        .approach-item:hover {
          transform: translateY(-5px);
          background: #FFFFFF !important;
          border-color: rgba(46,110,255,0.38) !important;
          box-shadow: 0 18px 40px -18px rgba(46,110,255,0.35);
        }
        @media (max-width: 900px) {
          .approach-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 520px) {
          .approach-grid { grid-template-columns: 1fr !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .approach-item,
          .approach-item:hover { transform: none !important; transition: none; }
        }
      `}</style>
    </section>
  );
}
