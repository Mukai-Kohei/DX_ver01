'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
        }
      );
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.3,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      style={{
        background: 'var(--bg)',
        padding: 'clamp(120px, 14vw, 200px) 0',
        borderTop: '1px solid var(--hair)',
        textAlign: 'center',
      }}
    >
      <div className="container-custom">
        <p
          style={{
            fontFamily: 'var(--f-mono)',
            fontSize: '10px',
            letterSpacing: '0.16em',
            color: 'var(--ink-mute)',
            textTransform: 'uppercase',
            marginBottom: '40px',
          }}
        >
          — Get Started
        </p>
        <h2
          ref={titleRef}
          style={{
            opacity: 0,
            fontFamily: 'var(--f-display)',
            fontSize: 'clamp(56px, 10vw, 160px)',
            lineHeight: 1.0,
            color: 'var(--ink)',
            marginBottom: '56px',
            fontWeight: 400,
            letterSpacing: '-0.03em',
          }}
        >
          <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Let&apos;s</em> start.
        </h2>
        <a
          ref={ctaRef}
          href="/contact"
          className="final-cta-btn"
          style={{
            opacity: 0,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            fontFamily: 'var(--f-mono)',
            fontSize: '13px',
            letterSpacing: '0.08em',
            background: 'var(--ink)',
            color: '#fff',
            padding: '18px 40px',
            borderRadius: '9999px',
            textDecoration: 'none',
            transition: 'transform 0.25s ease, background 0.25s ease',
          }}
        >
          お問い合わせはこちら
          <span aria-hidden>→</span>
        </a>
      </div>
      <style>{`
        .final-cta-btn:hover {
          background: #222 !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
