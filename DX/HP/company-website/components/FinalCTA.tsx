'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LampContainer } from './ui/Lamp';

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
        background: '#020617',
        borderTop: 'none',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <LampContainer
        accent="#3B82F6"
        bg="#020617"
        style={{ minHeight: '720px', padding: 'clamp(120px, 14vw, 200px) 0 clamp(80px, 10vw, 140px)' }}
      >
        <div className="container-custom" style={{ textAlign: 'center', transform: 'translateY(-3rem)' }}>
          <p
            style={{
              fontFamily: 'var(--f-mono)',
              fontSize: '10px',
              letterSpacing: '0.16em',
              color: 'rgba(255,255,255,0.55)',
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
              color: '#ffffff',
              marginBottom: '56px',
              fontWeight: 400,
              letterSpacing: '-0.03em',
            }}
          >
            <em style={{ fontStyle: 'italic', color: '#60a5fa' }}>Let&apos;s</em> start.
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
              background: 'var(--accent)',
              color: '#fff',
              padding: '18px 40px',
              borderRadius: '9999px',
              textDecoration: 'none',
              transition: 'transform 0.25s ease, background 0.25s ease',
              boxShadow: '0 0 30px rgba(59,130,246,0.4)',
            }}
          >
            お問い合わせはこちら
            <span aria-hidden>→</span>
          </a>
        </div>
      </LampContainer>
      <style>{`
        .final-cta-btn:hover {
          background: #1a55e0 !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
