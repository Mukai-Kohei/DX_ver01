'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const catchCopyRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const scrollDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!catchCopyRef.current || !logoRef.current || !scrollDownRef.current) return;

    const ctx = gsap.context(() => {
      const lines = catchCopyRef.current?.querySelectorAll('.catch-line');

      if (!lines || lines.length === 0) return;

      gsap.fromTo(
        lines,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.3,
          ease: 'power2.out',
          delay: 0.5,
        }
      );

      gsap.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
          delay: 2.2,
        }
      );

      gsap.fromTo(
        scrollDownRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, delay: 2.5 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* ===== BACKGROUND LAYERS ===== */}

      {/* Layer 1: Deep dark gradient base */}
      <div className="absolute inset-0 z-0" style={{
        background: 'linear-gradient(135deg, #040812 0%, #001236 40%, #003d82 80%, #00518c 100%)'
      }} />

      {/* Layer 2: Grid pattern overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Layer 3: SVG geometric decorations */}
      <svg
        className="absolute inset-0 w-full h-full z-0"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Diagonal lines */}
        <line x1="-100" y1="900" x2="1340" y2="0" stroke="rgba(0,160,233,0.2)" strokeWidth="1"/>
        <line x1="100" y1="900" x2="1540" y2="0" stroke="rgba(0,160,233,0.15)" strokeWidth="1"/>
        <line x1="300" y1="900" x2="1740" y2="0" stroke="rgba(0,160,233,0.1)" strokeWidth="1"/>
        <line x1="-300" y1="900" x2="1140" y2="0" stroke="rgba(0,160,233,0.1)" strokeWidth="1"/>

        {/* Circle decorations — top right */}
        <circle cx="1200" cy="180" r="130" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
        <circle cx="1200" cy="180" r="220" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
        <circle cx="1200" cy="180" r="320" fill="none" stroke="rgba(0,160,233,0.08)" strokeWidth="1"/>

        {/* Circle decorations — bottom left */}
        <circle cx="180" cy="740" r="90" fill="none" stroke="rgba(0,160,233,0.2)" strokeWidth="1"/>
        <circle cx="180" cy="740" r="160" fill="none" stroke="rgba(0,160,233,0.12)" strokeWidth="1"/>

        {/* Dot accents */}
        <circle cx="1300" cy="600" r="3" fill="rgba(0,160,233,0.5)"/>
        <circle cx="1320" cy="620" r="2" fill="rgba(0,160,233,0.4)"/>
        <circle cx="1280" cy="630" r="2" fill="rgba(255,255,255,0.3)"/>
        <circle cx="140" cy="200" r="3" fill="rgba(0,160,233,0.5)"/>
        <circle cx="160" cy="180" r="2" fill="rgba(255,255,255,0.3)"/>
        <circle cx="120" cy="220" r="2" fill="rgba(0,160,233,0.4)"/>
      </svg>

      {/* Layer 4: Radial glow — top right */}
      <div
        className="absolute z-0 pointer-events-none"
        style={{
          top: '-5%',
          right: '-5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(0,160,233,0.2) 0%, transparent 65%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
        }}
      />

      {/* Layer 5: Radial glow — bottom left */}
      <div
        className="absolute z-0 pointer-events-none"
        style={{
          bottom: '-10%',
          left: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(0,87,184,0.35) 0%, transparent 65%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
        }}
      />

      {/* Layer 6: Center subtle spotlight */}
      <div
        className="absolute z-0 pointer-events-none"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '500px',
          background: 'radial-gradient(ellipse, rgba(0,87,184,0.15) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 text-center px-4">
        {/* Catch Copy */}
        <div ref={catchCopyRef} className="mb-12">
          <h1 className="font-en font-bold text-white">
            <div className="catch-line text-3xl md:text-5xl lg:text-6xl mb-2 opacity-0">
              What the future
            </div>
            <div className="catch-line text-3xl md:text-5xl lg:text-6xl mb-2 opacity-0">
              of IT needs is
            </div>
            <div
              className="catch-line text-4xl md:text-6xl lg:text-7xl opacity-0"
              style={{
                background: 'linear-gradient(90deg, #ffffff 0%, #00A0E9 60%, #ffffff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              &quot;charm.&quot;
            </div>
          </h1>
        </div>

        {/* Logo / Brand */}
        <div ref={logoRef} className="opacity-0">
          <div className="inline-flex items-center justify-center px-8 py-4 rounded-lg"
            style={{
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            }}
          >
            <span className="font-en text-xl md:text-2xl font-bold text-white tracking-wider">
              COMPANY LOGO
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        ref={scrollDownRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 opacity-0 flex flex-col items-center gap-3"
      >
        <span className="font-en text-xs text-white tracking-[0.3em] opacity-60">
          SCROLL
        </span>
        <div className="relative w-px h-16 overflow-hidden">
          <div
            className="absolute top-0 w-full bg-gradient-to-b from-transparent via-white to-transparent"
            style={{
              height: '60%',
              animation: 'scrollLine 1.8s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      {/* Bottom wave shape into white */}
      <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 72"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full block"
        >
          <path
            d="M0,72 L0,36 Q360,-4 720,36 Q1080,76 1440,36 L1440,72 Z"
            fill="white"
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); opacity: 0; }
          30% { opacity: 1; }
          70% { opacity: 1; }
          100% { transform: translateY(200%); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
