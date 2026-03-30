'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function NodeIcon({ type, cx, cy }: { type: string; cx: number; cy: number }) {
  const s = '#0D60B8';
  if (type === 'web') {
    return (
      <g stroke={s} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x={cx - 12} y={cy - 9} width="24" height="16" rx="2" />
        <line x1={cx} y1={cy + 7} x2={cx} y2={cy + 11} />
        <line x1={cx - 6} y1={cy + 11} x2={cx + 6} y2={cy + 11} />
      </g>
    );
  }
  if (type === 'server') {
    return (
      <g stroke={s} strokeWidth="1.4" fill="none" strokeLinecap="round">
        <rect x={cx - 11} y={cy - 10} width="22" height="7" rx="1.5" />
        <rect x={cx - 11} y={cy - 1} width="22" height="7" rx="1.5" />
        <circle cx={cx + 7} cy={cy - 6.5} r="1.8" fill="#0D60B8" stroke="none" />
        <circle cx={cx + 7} cy={cy + 2.5} r="1.8" fill="#0D60B8" stroke="none" />
      </g>
    );
  }
  // gear / consulting
  const teeth = Array.from({ length: 6 }, (_, i) => {
    const a = (i * 60 * Math.PI) / 180;
    return { x1: cx + 8 * Math.cos(a), y1: cy + 8 * Math.sin(a), x2: cx + 12 * Math.cos(a), y2: cy + 12 * Math.sin(a) };
  });
  return (
    <g stroke={s} fill="none">
      <circle cx={cx} cy={cy} r="7.5" strokeWidth="1.5" />
      <circle cx={cx} cy={cy} r="3.5" fill="rgba(126,200,240,0.45)" strokeWidth={0} />
      {teeth.map((t, i) => (
        <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} strokeWidth="2.8" strokeLinecap="round" />
      ))}
    </g>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const catchCopyRef = useRef<HTMLDivElement>(null);
  const diagramRef = useRef<HTMLDivElement>(null);
  const scrollDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = catchCopyRef.current?.querySelectorAll('.catch-line');
      if (lines?.length) {
        gsap.fromTo(lines,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.25, ease: 'power2.out', delay: 0.4 }
        );
      }

      gsap.fromTo(diagramRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out', delay: 1.4 }
      );

      const nodes = diagramRef.current?.querySelectorAll('.orbit-node');
      if (nodes?.length) {
        gsap.fromTo(nodes,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, ease: 'power2.out', delay: 1.9 }
        );
      }

      gsap.fromTo(scrollDownRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, delay: 2.8 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden flex items-center"
      id="hero"
    >
      {/* ===== BACKGROUND LAYERS ===== */}

      {/* Deep navy gradient */}
      <div className="absolute inset-0 z-0" style={{
        background: 'linear-gradient(135deg, #1A60C8 0%, #2196F3 45%, #42B4F8 72%, #72CBFF 100%)',
      }} />

      {/* Grid overlay — 5% opacity (ux-ui-design guideline) */}
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      {/* Depth: vignette — edges darker, creates 3D depth */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 50% 50%, transparent 35%, rgba(8,35,100,0.28) 100%)',
      }} />

      {/* Depth: left-side shadow — reinforces light-source-from-right feel */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{
        background: 'linear-gradient(to right, rgba(10,40,110,0.22) 0%, transparent 50%)',
      }} />

      {/* Depth: center-right spotlight — lights up the diagram area */}
      <div className="absolute z-0 pointer-events-none" style={{
        top: '5%', right: '5%', width: '55%', height: '90%',
        background: 'radial-gradient(ellipse at 60% 45%, rgba(100,185,255,0.18) 0%, transparent 60%)',
      }} />

      {/* Decorative circles */}
      <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <circle cx="1200" cy="180" r="130" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
        <circle cx="1200" cy="180" r="220" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
        <circle cx="180"  cy="760" r="100" fill="none" stroke="rgba(0,144,210,0.10)" strokeWidth="1"/>
        <circle cx="180"  cy="760" r="180" fill="none" stroke="rgba(0,144,210,0.06)" strokeWidth="1"/>
        <circle cx="1300" cy="580" r="2.5" fill="rgba(0,160,233,0.35)"/>
        <circle cx="145"  cy="210" r="2.5" fill="rgba(0,160,233,0.35)"/>
      </svg>

      {/* Radial glows */}
      <div className="absolute z-0 pointer-events-none" style={{
        top: '-5%', right: '-5%', width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(0,100,200,0.14) 0%, transparent 65%)',
        borderRadius: '50%', filter: 'blur(50px)',
      }} />
      <div className="absolute z-0 pointer-events-none" style={{
        bottom: '-10%', left: '-5%', width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(0,55,130,0.22) 0%, transparent 65%)',
        borderRadius: '50%', filter: 'blur(70px)',
      }} />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 w-full">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

            {/* Left: Catch Copy */}
            <div ref={catchCopyRef} className="text-center md:text-left">
              <h1 className="font-en font-bold text-white">
                <div className="catch-line opacity-0 text-3xl md:text-4xl lg:text-5xl mb-2" style={{ letterSpacing: '0.04em' }}>
                  What the future
                </div>
                <div className="catch-line opacity-0 text-3xl md:text-4xl lg:text-5xl mb-2" style={{ letterSpacing: '0.04em' }}>
                  of IT needs is
                </div>
                <div
                  className="catch-line opacity-0 text-4xl md:text-5xl lg:text-6xl"
                  style={{
                    background: 'linear-gradient(90deg, #ffffff 0%, #7EC8F0 50%, #ffffff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    letterSpacing: '0.02em',
                  }}
                >
                  &quot;charm.&quot;
                </div>
              </h1>
              <p
                className="catch-line opacity-0 mt-6 text-sm md:text-base leading-relaxed mx-auto md:mx-0 max-w-xs"
                style={{ color: 'rgba(255,255,255,0.70)' }}
              >
                デジタルトランスフォーメーションで<br className="hidden md:block" />
                お客様のビジネスに新たな価値を。
              </p>
            </div>

            {/* Right: Orbit Diagram */}
            <div ref={diagramRef} className="opacity-0 flex justify-center">
              <svg
                viewBox="0 0 400 370"
                className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[540px]"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer atmosphere circle */}
                <circle cx="200" cy="200" r="175" fill="rgba(60,130,240,0.22)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>

                {/* Orbit ring — dashed */}
                <circle cx="200" cy="200" r="140" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="1" strokeDasharray="5 9"/>

                {/* Center circle */}
                <circle cx="200" cy="200" r="56" fill="rgba(140,205,255,0.52)" stroke="rgba(220,240,255,0.68)" strokeWidth="1.8"/>
                <circle cx="200" cy="200" r="44" fill="rgba(170,220,255,0.28)"/>
                <text x="200" y="191" textAnchor="middle" fill="rgba(10,60,140,0.80)" fontSize="9" fontFamily="Montserrat, monospace" letterSpacing="3">[ 03 ]</text>
                <text x="200" y="205" textAnchor="middle" fill="#0D47A1" fontSize="12" fontWeight="700" fontFamily="Montserrat, sans-serif" letterSpacing="1.5">SERVICES</text>
                <text x="200" y="219" textAnchor="middle" fill="rgba(10,60,140,0.60)" fontSize="8" fontFamily="Montserrat, sans-serif" letterSpacing="1.5">DX · SOLUTIONS</text>

                {/* Node 1: Top — Web App (label above) */}
                <g className="orbit-node">
                  <circle cx="200" cy="60" r="40" fill="rgba(140,205,255,0.52)" stroke="rgba(220,240,255,0.72)" strokeWidth="2"/>
                  <circle cx="200" cy="60" r="29" fill="rgba(175,225,255,0.28)"/>
                  <NodeIcon type="web" cx={200} cy={60} />
                  <text x="200" y="15" textAnchor="middle" fill="rgba(255,255,255,0.88)" fontSize="10.5" fontFamily="'Noto Sans JP', sans-serif">Webアプリ開発</text>
                  {/* small tick below label */}
                  <line x1="200" y1="19" x2="200" y2="20" stroke="rgba(0,160,233,0.4)" strokeWidth="1"/>
                </g>

                {/* Node 2: Bottom-Right — System/Cloud */}
                <g className="orbit-node">
                  <circle cx="321" cy="270" r="40" fill="rgba(140,205,255,0.52)" stroke="rgba(220,240,255,0.72)" strokeWidth="2"/>
                  <circle cx="321" cy="270" r="29" fill="rgba(175,225,255,0.28)"/>
                  <NodeIcon type="server" cx={321} cy={270} />
                  <text x="321" y="322" textAnchor="middle" fill="rgba(255,255,255,0.88)" fontSize="10.5" fontFamily="'Noto Sans JP', sans-serif">システム開発</text>
                  <text x="321" y="336" textAnchor="middle" fill="rgba(255,255,255,0.88)" fontSize="10.5" fontFamily="'Noto Sans JP', sans-serif">・クラウド</text>
                </g>

                {/* Node 3: Bottom-Left — DX Consulting */}
                <g className="orbit-node">
                  <circle cx="79" cy="270" r="40" fill="rgba(140,205,255,0.52)" stroke="rgba(220,240,255,0.72)" strokeWidth="2"/>
                  <circle cx="79" cy="270" r="29" fill="rgba(175,225,255,0.28)"/>
                  <NodeIcon type="consulting" cx={79} cy={270} />
                  <text x="79" y="322" textAnchor="middle" fill="rgba(255,255,255,0.88)" fontSize="10.5" fontFamily="'Noto Sans JP', sans-serif">DX</text>
                  <text x="79" y="336" textAnchor="middle" fill="rgba(255,255,255,0.88)" fontSize="10.5" fontFamily="'Noto Sans JP', sans-serif">コンサルティング</text>
                </g>
              </svg>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        ref={scrollDownRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 opacity-0 flex flex-col items-center gap-3"
      >
        <span className="font-en text-xs text-white tracking-[0.35em] opacity-50 font-light">SCROLL</span>
        <div className="relative w-px h-16 overflow-hidden">
          <div
            className="absolute top-0 w-full bg-gradient-to-b from-transparent via-white to-transparent"
            style={{ height: '60%', animation: 'scrollLine 1.8s ease-in-out infinite' }}
          />
        </div>
      </div>

      {/* Bottom wave into white */}
      <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none">
        <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block">
          <path d="M0,72 L0,36 Q360,-4 720,36 Q1080,76 1440,36 L1440,72 Z" fill="white"/>
        </svg>
      </div>

      <style jsx>{`
        @keyframes scrollLine {
          0%   { transform: translateY(-100%); opacity: 0; }
          30%  { opacity: 1; }
          70%  { opacity: 1; }
          100% { transform: translateY(200%);  opacity: 0; }
        }
        .orbit-node {
          transform-box: fill-box;
          transform-origin: center;
          cursor: pointer;
          transition: transform 0.22s ease-out, filter 0.22s ease-out;
        }
        .orbit-node:hover {
          transform: scale(1.13);
          filter: drop-shadow(0 0 10px rgba(180,225,255,0.70));
        }
      `}</style>
    </section>
  );
}
