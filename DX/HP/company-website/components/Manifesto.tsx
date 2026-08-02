'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Manifesto() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const imgInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      /* ── Quote reveals line by line from behind a mask ── */
      gsap.fromTo(
        sectionRef.current!.querySelectorAll('.mq-inner'),
        { yPercent: 115 },
        {
          yPercent: 0,
          duration: 1.0,
          stagger: 0.16,
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
          delay: 0.35,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', once: true },
        }
      );
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 1.0,
          ease: 'power2.out',
          delay: 0.1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', once: true },
        }
      );

      if (!prefersReduce) {
        /* ── Photo drifts slowly against the scroll (parallax) ── */
        gsap.fromTo(
          imgInnerRef.current,
          { y: -36 },
          {
            y: 36,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        background: '#FAF9F4',
        padding: 'clamp(100px, 11vw, 160px) 0',
        borderTop: '1px solid var(--hair)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Soft accent blob behind the photo */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '10%',
          right: '-160px',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 50% 50%, rgba(46,110,255,0.10) 0%, transparent 65%)',
          filter: 'blur(56px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        <div className="manifesto-layout" style={{ display: 'grid', gridTemplateColumns: '1fr minmax(0, 420px)', gap: 'clamp(48px, 6vw, 100px)', alignItems: 'center' }}>

          {/* Left: text */}
          <div>
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
              style={{
                fontFamily: 'var(--f-jp)',
                fontWeight: 700,
                fontSize: 'clamp(28px, 4vw, 60px)',
                lineHeight: 1.5,
                color: 'var(--ink)',
                letterSpacing: '-0.03em',
                margin: 0,
              }}
            >
              <span className="mq-line">
                <span className="mq-inner">地方には、まだ語られて</span>
              </span>
              <span className="mq-line">
                <span className="mq-inner">いない事業がある。</span>
              </span>
            </blockquote>
            <div
              ref={bodyRef}
              className="manifesto-body"
              style={{ opacity: 0, marginTop: '48px', maxWidth: '560px' }}
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

          {/* Right: image with scroll parallax */}
          <div
            ref={imgRef}
            className="manifesto-img-wrap"
            style={{
              opacity: 0,
              position: 'relative',
              height: 'clamp(360px, 44vw, 580px)',
              borderRadius: '4px',
              overflow: 'hidden',
            }}
          >
            {/* Inner layer is taller than the frame so the parallax shift never reveals edges */}
            <div
              ref={imgInnerRef}
              style={{ position: 'absolute', inset: '-48px 0', willChange: 'transform' }}
            >
              <Image
                src="/images/manifesto.jpg"
                alt="日本の地方の風景"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="(max-width: 900px) 100vw, 420px"
              />
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .mq-line {
          display: block;
          overflow: hidden;
        }
        .mq-inner {
          display: inline-block;
          transform: translateY(115%);
          will-change: transform;
        }
        @media (max-width: 900px) {
          .manifesto-layout {
            grid-template-columns: 1fr !important;
          }
          .manifesto-img-wrap {
            height: clamp(240px, 60vw, 400px) !important;
            order: -1;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .mq-inner { transform: none !important; }
        }
      `}</style>
    </section>
  );
}
