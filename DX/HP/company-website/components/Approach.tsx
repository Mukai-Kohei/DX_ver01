'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll('.approach-item'),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="approach"
      style={{
        background: '#EEF3FF',
        padding: 'clamp(80px, 10vw, 140px) 0',
      }}
    >
      <div className="container-custom">
        <div style={{ marginBottom: '64px', display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
          <div style={{ maxWidth: '420px' }}>
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
              — Approach
            </p>
            <h2
              style={{
                fontFamily: 'var(--f-jp)',
                fontWeight: 900,
                fontSize: 'clamp(32px, 4vw, 56px)',
                color: 'var(--ink)',
                lineHeight: 1.2,
                letterSpacing: '-0.03em',
              }}
            >
              私たちの
              <br />
              進め方
            </h2>
          </div>
          <p
            style={{
              fontFamily: 'var(--f-jp)',
              fontSize: '14px',
              color: 'var(--ink-mute)',
              lineHeight: 1.9,
              maxWidth: '460px',
              paddingBottom: '8px',
            }}
          >
            一方的な提案ではなく、対話を重ねながら価値を形にしていく4つのステップ。
            短期的な成果と長期的な成長を両立させる伴走型のプロセスです。
          </p>
        </div>

        <div
          className="approach-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            background: 'var(--hair)',
            border: '1px solid var(--hair)',
          }}
        >
          {steps.map((step) => (
            <div
              key={step.no}
              className="approach-item"
              style={{ background: '#EEF3FF', padding: '48px 32px', opacity: 0 }}
            >
              <p
                style={{
                  fontFamily: 'var(--f-mono)',
                  fontSize: '11px',
                  color: 'var(--accent)',
                  letterSpacing: '0.1em',
                  marginBottom: '24px',
                }}
              >
                {step.no}
              </p>
              <h3
                style={{
                  fontFamily: 'var(--f-jp)',
                  fontSize: 'clamp(28px, 3vw, 44px)',
                  fontWeight: 900,
                  color: 'var(--ink)',
                  lineHeight: 1.1,
                  marginBottom: '8px',
                  letterSpacing: '-0.02em',
                }}
              >
                {step.ja}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--f-display)',
                  fontSize: '16px',
                  fontStyle: 'italic',
                  color: 'var(--ink-mute)',
                  marginBottom: '22px',
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                }}
              >
                {step.en}
              </p>
              <p
                style={{
                  fontFamily: 'var(--f-jp)',
                  fontSize: '13px',
                  color: 'var(--ink-mute)',
                  lineHeight: 1.85,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .approach-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 520px) {
          .approach-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
