'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const diagramRef = useRef<HTMLDivElement>(null);

  // Orbit refs
  const orbitRingRef = useRef<HTMLDivElement>(null);
  const inner0Ref = useRef<HTMLDivElement>(null);
  const inner1Ref = useRef<HTMLDivElement>(null);
  const inner2Ref = useRef<HTMLDivElement>(null);
  const cNumRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    let currentStep = 0;
    let isAnimating = false;

    function executeRotate(newStep: number) {
      currentStep = newStep;
      isAnimating = true;

      gsap.to(orbitRingRef.current, {
        rotation: newStep * -120,
        duration: 0.65, ease: 'power2.inOut', overwrite: 'auto',
        onComplete() { isAnimating = false; },
      });
      gsap.to(inner0Ref.current, { rotation: newStep * 120,       duration: 0.65, ease: 'power2.inOut', overwrite: 'auto' });
      gsap.to(inner1Ref.current, { rotation: newStep * 120 - 120, duration: 0.65, ease: 'power2.inOut', overwrite: 'auto' });
      gsap.to(inner2Ref.current, { rotation: newStep * 120 - 240, duration: 0.65, ease: 'power2.inOut', overwrite: 'auto' });

      const nodes = orbitRingRef.current?.querySelectorAll<HTMLElement>('.orbit-item');
      nodes?.forEach((el, i) => {
        el.classList.toggle('is-active', i === newStep);
        el.classList.toggle('is-dim',    i !== newStep);
      });

      if (cNumRef.current) {
        gsap.to(cNumRef.current, {
          opacity: 0, y: 4, duration: 0.16, ease: 'power1.in', overwrite: 'auto',
          onComplete() {
            if (cNumRef.current) cNumRef.current.textContent = `[ 0${newStep + 1} ]`;
            gsap.to(cNumRef.current, { opacity: 1, y: 0, duration: 0.20, ease: 'power1.out', overwrite: 'auto' });
          }
        });
      }
    }

    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isDesktop = !isTouch && window.innerWidth >= 1024;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo(metaRef.current, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.1 }, '-=0.2')
        .fromTo(rightRef.current, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.9 }, '-=0.7')
        .fromTo(diagramRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.9 }, '-=0.6');

      gsap.set(inner0Ref.current, { rotation:    0 });
      gsap.set(inner1Ref.current, { rotation: -120 });
      gsap.set(inner2Ref.current, { rotation: -240 });

      if (isDesktop) {
        ScrollTrigger.create({
          trigger: heroRef.current,
          start: 'top top',
          end: '+=120vh',
          pin: true,
          anticipatePin: 1,
        });
      }
    }, heroRef);

    let node3Dwell = 0;
    const NODE3_DWELL = 6;
    let lastStepTime = 0;
    const STEP_COOLDOWN = 900;

    const isHeroPinned = () => {
      const rect = heroRef.current?.getBoundingClientRect();
      return rect ? rect.top > -4 && rect.top < 4 : false;
    };

    const handleWheel = (e: WheelEvent) => {
      if (!isHeroPinned()) return;
      const now = Date.now();
      const ready = !isAnimating && (now - lastStepTime) >= STEP_COOLDOWN;

      if (e.deltaY > 0) {
        if (currentStep < 2) {
          e.preventDefault();
          e.stopPropagation();
          if (ready) {
            lastStepTime = now;
            executeRotate(currentStep + 1);
          }
        } else {
          node3Dwell++;
          if (node3Dwell <= NODE3_DWELL) {
            e.preventDefault();
            e.stopPropagation();
          }
        }
      } else {
        if (currentStep > 0) {
          e.preventDefault();
          e.stopPropagation();
          if (ready) {
            lastStepTime = now;
            executeRotate(currentStep - 1);
            node3Dwell = 0;
          }
        }
      }
    };

    if (isDesktop) {
      window.addEventListener('wheel', handleWheel, { passive: false, capture: true });
    }

    let autoCycleTimer: ReturnType<typeof setInterval> | null = null;
    let handleOrbitClick: ((e: MouseEvent) => void) | null = null;
    let startAutoCycle: (() => void) | null = null;

    let touchStartX = 0;
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const dx = touchStartX - e.changedTouches[0].clientX;
      const dy = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(dx) < 20 || Math.abs(dx) < Math.abs(dy)) return;
      const now = Date.now();
      if (isAnimating || (now - lastStepTime) < STEP_COOLDOWN) return;
      lastStepTime = now;
      if (dx > 0 && currentStep < 2) { executeRotate(currentStep + 1); startAutoCycle?.(); }
      if (dx < 0 && currentStep > 0) { executeRotate(currentStep - 1); node3Dwell = 0; startAutoCycle?.(); }
    };
    if (heroRef.current) {
      heroRef.current.addEventListener('touchstart', handleTouchStart, { passive: true });
      heroRef.current.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    if (!isDesktop) {
      startAutoCycle = () => {
        if (autoCycleTimer) clearInterval(autoCycleTimer);
        autoCycleTimer = setInterval(() => {
          if (!isAnimating) executeRotate(currentStep < 2 ? currentStep + 1 : 0);
        }, 3000);
      };
      startAutoCycle();

      handleOrbitClick = () => {
        const now = Date.now();
        if (isAnimating || (now - lastStepTime) < STEP_COOLDOWN) return;
        lastStepTime = now;
        executeRotate(currentStep < 2 ? currentStep + 1 : 0);
        startAutoCycle?.();
      };
      diagramRef.current?.addEventListener('click', handleOrbitClick);
    }

    return () => {
      if (autoCycleTimer) clearInterval(autoCycleTimer);
      if (handleOrbitClick) diagramRef.current?.removeEventListener('click', handleOrbitClick);
      if (isDesktop) {
        window.removeEventListener('wheel', handleWheel, { capture: true });
      }
      heroRef.current?.removeEventListener('touchstart', handleTouchStart);
      heroRef.current?.removeEventListener('touchend', handleTouchEnd);
      gsap.killTweensOf([
        orbitRingRef.current, inner0Ref.current, inner1Ref.current,
        inner2Ref.current, cNumRef.current,
      ]);
      ctx.revert();
    };
  }, []);

  const WebIcon = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
         stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
    </svg>
  );
  const ServerIcon = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
         stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="7" rx="1.5"/>
      <rect x="2" y="12" width="20" height="7" rx="1.5"/>
      <circle cx="18" cy="6.5" r="1.8" fill="var(--accent)" stroke="none"/>
      <circle cx="18" cy="15.5" r="1.8" fill="var(--accent)" stroke="none"/>
    </svg>
  );
  const GearIcon = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
         stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83
               2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33
               1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09
               A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06
               a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15
               a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09
               A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06
               a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68
               a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09
               a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06
               a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9
               a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09
               a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
  );

  return (
    <section
      ref={heroRef}
      id="hero"
      style={{
        background: 'var(--bg)',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Spatial Orb */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          right: '-80px',
          top: '60px',
          width: '520px',
          height: '520px',
          background: 'radial-gradient(circle at 50% 50%, rgba(46,110,255,0.22) 0%, rgba(46,110,255,0.08) 40%, rgba(46,110,255,0) 72%)',
          filter: 'blur(40px)',
          opacity: 0.8,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Meta bar */}
      <div
        ref={metaRef}
        className="hero-meta"
        style={{
          opacity: 0,
          fontFamily: 'var(--f-mono)',
          fontSize: '11px',
          letterSpacing: '0.08em',
          color: 'var(--ink-mute)',
          padding: '24px clamp(20px, 4vw, 48px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          position: 'relative',
          zIndex: 2,
          flexWrap: 'wrap',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ color: 'var(--accent)', fontSize: '8px' }}>●</span>
          [ DX_VER01 / 2026 RELEASE ]
        </span>
        <span>BASED IN JAPAN · SERVING NATIONWIDE</span>
      </div>

      {/* Main content */}
      <div
        className="hero-main"
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(24px, 4vw, 80px)',
          padding: 'clamp(40px, 6vw, 80px) clamp(20px, 4vw, 48px)',
          position: 'relative',
          zIndex: 1,
          alignItems: 'center',
        }}
      >
        {/* Left: Big title + sub content */}
        <div className="hero-left">
          <h1
            ref={titleRef}
            style={{
              opacity: 0,
              fontFamily: 'var(--f-jp)',
              fontWeight: 900,
              fontSize: 'clamp(52px, 8vw, 128px)',
              letterSpacing: '-0.04em',
              lineHeight: 1.0,
              margin: 0,
            }}
          >
            <span style={{ display: 'block', color: 'var(--ink)' }}>踏み出す、</span>
            <span
              style={{
                display: 'block',
                paddingLeft: 'clamp(28px, 6vw, 100px)',
                color: 'var(--accent)',
              }}
            >
              はみ出す。
            </span>
          </h1>

          <div
            ref={rightRef}
            className="hero-sub"
            style={{
              opacity: 0,
              marginTop: 'clamp(36px, 5vw, 64px)',
              maxWidth: '520px',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--f-mono)',
                fontSize: '11px',
                letterSpacing: '0.12em',
                color: 'var(--ink-mute)',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textTransform: 'uppercase',
              }}
            >
              <span style={{ width: '24px', height: '1px', background: 'var(--ink-mute)' }} />
              SINCE 2024 / DX PARTNER
            </p>
            <h2
              style={{
                fontFamily: 'var(--f-jp)',
                fontWeight: 700,
                fontSize: 'clamp(16px, 1.5vw, 22px)',
                lineHeight: 1.7,
                color: 'var(--ink)',
                marginBottom: '16px',
                letterSpacing: '-0.01em',
              }}
            >
              既存のルールから抜け出し、
              <br />
              新しいビジネスの形へ。
            </h2>
            <p
              style={{
                fontFamily: 'var(--f-jp)',
                fontSize: '13px',
                lineHeight: 1.9,
                color: 'var(--ink-mute)',
              }}
            >
              DX推進、デジタルマーケティング、そしてその融合。
              <br />
              地方企業の「次の一歩」と共に未来を創り上げる、伴走型のITパートナーです。
            </p>
          </div>
        </div>

        {/* Right: Orbit diagram */}
        <div ref={diagramRef} className="hero-orbit-wrap" style={{ opacity: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div className="orbit-clip-wrapper">
            <div className="orbit-stage relative" style={{ width: 500, height: 500 }}>

              {/* Decorative rings */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 500 500" fill="none"
              >
                <circle cx="250" cy="250" r="235"
                        fill="rgba(46,110,255,0.04)"
                        stroke="var(--hair)" strokeWidth="1"/>
                <circle cx="250" cy="250" r="170"
                        fill="none"
                        stroke="var(--hair)" strokeWidth="1"
                        strokeDasharray="4 11"/>
              </svg>

              {/* Center circle */}
              <div
                className="orbit-center"
                style={{
                  position: 'absolute',
                  top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 120, height: 120,
                  borderRadius: '50%',
                  background: '#fff',
                  border: '1px solid var(--hair)',
                  boxShadow: '0 8px 32px rgba(46,110,255,0.08)',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  gap: 4,
                  zIndex: 2,
                }}
              >
                <span
                  ref={cNumRef}
                  style={{
                    fontFamily: 'var(--f-mono)',
                    fontSize: 9, fontWeight: 700,
                    letterSpacing: '0.25em',
                    color: 'var(--ink-mute)',
                  }}
                >
                  [ 01 ]
                </span>
                <span style={{
                  fontFamily: 'var(--f-mono)',
                  fontSize: 12, fontWeight: 800,
                  color: 'var(--ink)',
                  letterSpacing: '0.10em',
                }}>
                  SERVICES
                </span>
                <span style={{
                  fontFamily: 'var(--f-mono)',
                  fontSize: 7.5,
                  letterSpacing: '0.15em',
                  color: 'var(--ink-mute)',
                  textTransform: 'uppercase',
                }}>
                  DX · SOLUTIONS
                </span>
              </div>

              {/* Orbit ring */}
              <div ref={orbitRingRef} className="absolute inset-0">
                <div
                  className="orbit-item is-active"
                  style={{ '--a': '0deg', '--r': '170px' } as React.CSSProperties}
                >
                  <div ref={inner0Ref} className="orbit-inner">
                    <div className="node-circle">
                      <WebIcon />
                    </div>
                    <span className="node-label">DX推進<br />ソリューション</span>
                  </div>
                </div>

                <div
                  className="orbit-item is-dim"
                  style={{ '--a': '120deg', '--r': '170px' } as React.CSSProperties}
                >
                  <div ref={inner1Ref} className="orbit-inner">
                    <div className="node-circle">
                      <ServerIcon />
                    </div>
                    <span className="node-label">デジタル<br />マーケティング</span>
                  </div>
                </div>

                <div
                  className="orbit-item is-dim"
                  style={{ '--a': '240deg', '--r': '170px' } as React.CSSProperties}
                >
                  <div ref={inner2Ref} className="orbit-inner">
                    <div className="node-circle">
                      <GearIcon />
                    </div>
                    <span className="node-label">DX×<br />マーケ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p
            className="orbit-hint"
            style={{
              marginTop: 8,
              fontFamily: 'var(--f-mono)',
              fontSize: 10,
              letterSpacing: '0.18em',
              color: 'var(--ink-mute)',
            }}
          >
            SCROLL · TAP · SWIPE
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-main {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .hero-meta {
            font-size: 10px !important;
          }
        }

        .orbit-clip-wrapper {
          overflow: hidden;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 500px; height: 500px;
        }
        @media (max-width: 1200px) { .orbit-clip-wrapper { width: 410px; height: 410px; } }
        @media (max-width:  900px) { .orbit-clip-wrapper { width: 340px; height: 340px; } }
        @media (max-width:  480px) { .orbit-clip-wrapper { width: 280px; height: 280px; } }

        .orbit-stage { transform-origin: center center; flex-shrink: 0; }
        @media (max-width: 1200px) { .orbit-stage { transform: scale(0.82); } }
        @media (max-width:  900px) { .orbit-stage { transform: scale(0.68); } }
        @media (max-width:  480px) { .orbit-stage { transform: scale(0.56); } }

        .orbit-item {
          position: absolute;
          top: 50%; left: 50%;
          width: 0; height: 0;
          overflow: visible;
          transform: rotate(var(--a)) translateY(calc(var(--r) * -1));
        }

        .orbit-inner {
          position: absolute;
          width: 120px; height: 160px;
          top: 0; left: 0;
          margin-top: -50px;
          margin-left: -60px;
          display: flex; flex-direction: column;
          align-items: center; gap: 8px;
          transform-origin: 60px 50px;
        }

        .node-circle {
          width: 100px; height: 100px;
          border-radius: 50%; flex-shrink: 0;
          background: #fff;
          border: 1px solid var(--hair);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 4px;
          transition: background .40s, border-color .40s, box-shadow .40s, transform .40s;
        }
        .orbit-item.is-active .node-circle {
          background: #fff;
          border-color: var(--accent);
          box-shadow: 0 0 0 4px rgba(46,110,255,0.08), 0 8px 28px rgba(46,110,255,0.18);
          transform: scale(1.14);
        }
        .orbit-item.is-dim .node-circle {
          background: #fff;
          border-color: var(--hair);
          opacity: 0.55;
        }

        .node-label {
          font-family: var(--f-jp);
          font-size: 13px; line-height: 1.5;
          font-weight: 500;
          text-align: center; white-space: nowrap;
          color: var(--ink-sub);
          transition: opacity .40s, font-size .25s, font-weight .25s, color .40s;
        }
        .orbit-item.is-active .node-label {
          color: var(--ink); font-weight: 700; font-size: 13.5px;
        }
        .orbit-item.is-dim .node-label { opacity: 0.55; font-size: 12px; }
      `}</style>
    </section>
  );
}
