'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Manifesto() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', once: true },
        }
      );
      gsap.fromTo(
        bodyRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.25,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', once: true },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ background: '#FAFAF6', padding: 'clamp(100px, 11vw, 160px) 0', borderTop: '1px solid var(--hair)' }}
    >
      <div className="container-custom">
        <div style={{ maxWidth: '960px' }}>
          <p
            style={{
              fontFamily: 'var(--f-mono)',
              fontSize: '10px',
              letterSpacing: '0.16em',
              color: 'var(--accent)',
              textTransform: 'uppercase',
              marginBottom: '40px',
            }}
          >
            — Manifesto
          </p>
          <blockquote
            ref={quoteRef}
            style={{
              opacity: 0,
              fontFamily: 'var(--f-jp)',
              fontWeight: 900,
              fontSize: 'clamp(28px, 4vw, 60px)',
              lineHeight: 1.5,
              color: 'var(--ink)',
              marginBottom: '56px',
              letterSpacing: '-0.03em',
              margin: 0,
            }}
          >
            地方には、まだ語られて
            <br />
            いない事業がある。
          </blockquote>
          <div
            ref={bodyRef}
            className="manifesto-body"
            style={{ opacity: 0, marginTop: '56px', maxWidth: '680px' }}
          >
            <p style={{ fontFamily: 'var(--f-jp)', fontSize: '15px', lineHeight: 2.0, color: 'var(--ink-sub)' }}>
              大都市に集中するDX推進の波は、地方企業の多くにまだ届いていません。
              しかし、地方にこそ独自の強みがあり、デジタル技術によって新たな価値を生み出せる可能性が眠っています。
              私たちは、地域に根ざした企業と共に、その可能性を形にしていきます。
              テクノロジーは手段であり、目的は人と地域の豊かさです。
            </p>
            <p style={{ marginTop: '32px', fontFamily: 'var(--f-mono)', fontSize: '12px', color: 'var(--ink-mute)', letterSpacing: '0.06em' }}>
              — 代表取締役 舟木 南生
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
