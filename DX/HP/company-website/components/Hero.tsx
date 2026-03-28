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

      // キャッチコピーのアニメーション
      gsap.fromTo(
        lines,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.3,
          ease: 'power2.out',
          delay: 0.5,
        }
      );

      // ロゴのアニメーション
      gsap.fromTo(
        logoRef.current,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
          delay: 2.2,
        }
      );

      // Scroll Downのアニメーション
      gsap.fromTo(
        scrollDownRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.6,
          delay: 2.5,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-bg-dark"
      id="hero"
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full bg-gradient-to-br from-primary-dark via-primary to-secondary opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Catch Copy */}
        <div ref={catchCopyRef} className="mb-12">
          <h1 className="font-en font-bold text-white">
            <div className="catch-line text-3xl md:text-5xl lg:text-6xl mb-2">
              What the future
            </div>
            <div className="catch-line text-3xl md:text-5xl lg:text-6xl mb-2">
              of IT needs is
            </div>
            <div className="catch-line text-4xl md:text-6xl lg:text-7xl">
              &quot;charm.&quot;
            </div>
          </h1>
        </div>

        {/* Logo */}
        <div ref={logoRef} className="opacity-0">
          <div className="inline-flex items-center justify-center px-8 py-4 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg">
            <span className="font-en text-xl md:text-2xl font-bold text-white tracking-wider">
              COMPANY LOGO
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        ref={scrollDownRef}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 opacity-0"
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="font-en text-xs text-white tracking-widest">
            SCROLL DOWN
          </span>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
