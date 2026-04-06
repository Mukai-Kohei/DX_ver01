'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Loading() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef    = useRef<HTMLDivElement>(null);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!overlayRef.current || !logoRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // cleanup returnでも戻すが、アニメーション完了時に確実に解除
          setIsComplete(true);
        },
      });

      tl.fromTo(logoRef.current,
        { opacity: 0, scale: 0.88, y: 8 },
        { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: 'power2.out' }
      )
      .to({}, { duration: 0.9 })
      .to(overlayRef.current, { y: '-100%', duration: 0.85, ease: 'power3.inOut' });
    }, overlayRef);

    if (typeof document !== 'undefined') document.body.style.overflow = 'hidden';
    return () => {
      ctx.revert();
      if (typeof document !== 'undefined') document.body.style.overflow = 'auto';
    };
  }, []);

  if (isComplete) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: 'linear-gradient(145deg, #001236 0%, #0057B8 100%)' }}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div ref={logoRef} className="flex flex-col items-center gap-5 opacity-0">

        {/* ── Brand card ── */}
        <div
          className="w-36 h-36 md:w-44 md:h-44 rounded-2xl flex flex-col items-center justify-center gap-3 relative overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, #001847 0%, #002D7A 60%, #003D82 100%)',
            border: '1px solid rgba(255,255,255,0.18)',
            boxShadow: '0 0 48px rgba(0,87,184,0.5), 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.12)',
          }}
        >
          {/* Inner glow */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(circle at 50% 40%, rgba(0,160,233,0.18) 0%, transparent 65%)',
          }} />

          {/* Orbit-node SVG mark — mirrors hero animation visual language */}
          <svg width="54" height="54" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
            {/* Dashed orbit ring */}
            <circle cx="32" cy="32" r="22" stroke="rgba(255,255,255,0.30)" strokeWidth="1" strokeDasharray="3 6"/>
            {/* Connection lines from center to satellites */}
            <line x1="32" y1="23" x2="32" y2="14" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="39" y1="37" x2="47" y2="42" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="25" y1="37" x2="17" y2="42" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" strokeLinecap="round"/>
            {/* Satellite nodes */}
            <circle cx="32" cy="10" r="3.5" fill="rgba(255,255,255,0.85)"/>
            <circle cx="51" cy="43" r="3.5" fill="rgba(255,255,255,0.85)"/>
            <circle cx="13" cy="43" r="3.5" fill="rgba(255,255,255,0.85)"/>
            {/* Center ring */}
            <circle cx="32" cy="32" r="9" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5"/>
            {/* Center dot */}
            <circle cx="32" cy="32" r="4.5" fill="white"/>
          </svg>

          {/* Company name */}
          <div className="text-center relative z-10">
            <p className="font-en font-bold tracking-[0.22em] text-white" style={{ fontSize: 11 }}>
              COMPANY
            </p>
            <p className="tracking-widest text-white/45 mt-0.5" style={{ fontSize: 8 }}>
              株式会社
            </p>
          </div>
        </div>

        {/* ── Progress bar ── */}
        <div className="w-24 h-px bg-white/15 rounded-full overflow-hidden">
          <div
            className="h-full bg-white/70 rounded-full"
            style={{ animation: 'loadBar 1.6s ease-out forwards' }}
          />
        </div>

        <style jsx>{`
          @keyframes loadBar {
            from { width: 0%; }
            to   { width: 100%; }
          }
        `}</style>
      </div>
    </div>
  );
}
