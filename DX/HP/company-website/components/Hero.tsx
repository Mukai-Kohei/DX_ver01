'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// registerPlugin は page.tsx で一元管理

export default function Hero() {
  const heroRef      = useRef<HTMLDivElement>(null);
  const catchCopyRef = useRef<HTMLDivElement>(null);
  const diagramRef   = useRef<HTMLDivElement>(null);
  const scrollDownRef = useRef<HTMLDivElement>(null);

  // Orbit refs
  const orbitRingRef = useRef<HTMLDivElement>(null);
  const inner0Ref    = useRef<HTMLDivElement>(null);
  const inner1Ref    = useRef<HTMLDivElement>(null);
  const inner2Ref    = useRef<HTMLDivElement>(null);
  const cNumRef      = useRef<HTMLSpanElement>(null);
  const wmRef        = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    /* ── Step state (outside gsap.context so wheel handler can access) ── */
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
      if (wmRef.current) {
        gsap.to(wmRef.current, {
          opacity: 0, scale: 0.94, duration: 0.18, overwrite: 'auto',
          onComplete() {
            if (wmRef.current) {
              wmRef.current.textContent = `0${newStep + 1}`;
              gsap.to(wmRef.current, { opacity: 1, scale: 1, duration: 0.28, ease: 'power2.out', overwrite: 'auto' });
            }
          }
        });
      }
    }

    /* タッチデバイス（スマホ・タブレット）ではピン・ホイール無効 */
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isDesktop = !isTouch;

    const ctx = gsap.context(() => {
      /* ── Intro animations ── */
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
      gsap.fromTo(scrollDownRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, delay: 2.8 }
      );

      /* ── Initial counter-rotations ── */
      gsap.set(inner0Ref.current, { rotation:    0 });
      gsap.set(inner1Ref.current, { rotation: -120 });
      gsap.set(inner2Ref.current, { rotation: -240 });

      /*
        Pin the section.
        end: +=120vh → after the wheel-interceptor releases control (node3 dwell done),
        a few natural scroll gestures advance the pin and it releases cleanly.
        No snap / no onUpdate — node selection is 100% wheel-event driven.
      */
      /* Desktop only (>= 1024px): mobile scrolls freely */
      if (isDesktop && window.innerWidth >= 1024) {
        ScrollTrigger.create({
          trigger: heroRef.current,
          start:   'top top',
          end:     '+=120vh',
          pin:     true,
          anticipatePin: 1,
        });
      }
    }, heroRef);

    /* ── Wheel interceptor ──────────────────────────────────────────────
       capture: true  → runs before Lenis's bubble listener
       stopPropagation → Lenis never sees the event → scroll stays frozen
       preventDefault  → no native scroll either

       Logic:
         node 0 or 1 + scroll down  → advance node (block scroll)
         node 0 or 1 + scroll up    → go back  (block scroll)
         node 0          + scroll up  → let through (go back above hero)
         node 2          + scroll down → count dwell (block until threshold)
         dwell exhausted             → stop blocking → Lenis advances normally
    ──────────────────────────────────────────────────────────────────── */
    let node3Dwell = 0;
    const NODE3_DWELL = 6; // wheel events to hold on node 3 before releasing

    /* Cooldown: prevent trackpad momentum from skipping node 02.
       Each step requires the user to pause scrolling for STEP_COOLDOWN ms. */
    let lastStepTime = 0;
    const STEP_COOLDOWN = 900; // ms between node advances

    const isHeroPinned = () => {
      const rect = heroRef.current?.getBoundingClientRect();
      return rect ? rect.top > -4 && rect.top < 4 : false;
    };

    const handleWheel = (e: WheelEvent) => {
      if (!isHeroPinned()) return;

      const now = Date.now();
      const ready = !isAnimating && (now - lastStepTime) >= STEP_COOLDOWN;

      if (e.deltaY > 0) {
        /* ── Scroll DOWN ── */
        if (currentStep < 2) {
          e.preventDefault();
          e.stopPropagation();
          if (ready) {
            lastStepTime = now;
            executeRotate(currentStep + 1);
          }
        } else {
          /* On node 3: count dwell then release */
          node3Dwell++;
          if (node3Dwell <= NODE3_DWELL) {
            e.preventDefault();
            e.stopPropagation();
          }
          /* After dwell: event reaches Lenis → scroll advances → pin releases */
        }
      } else {
        /* ── Scroll UP ── */
        if (currentStep > 0) {
          e.preventDefault();
          e.stopPropagation();
          if (ready) {
            lastStepTime = now;
            executeRotate(currentStep - 1);
            node3Dwell = 0;
          }
        }
        /* currentStep === 0 + scroll up → let through (hero scrolls away upward) */
      }
    };

    /* Wheel interceptor: desktop only. On mobile, touch-scroll must not be blocked. */
    if (isDesktop) {
      window.addEventListener('wheel', handleWheel, { passive: false, capture: true });
    }

    /* ── Auto-cycle + tap-to-cycle (モバイル専用) ──
       3秒ごとにオービットを自動で進める。タップ・スワイプ後はタイマーリセット。 */
    let autoCycleTimer: ReturnType<typeof setInterval> | null = null;
    let handleOrbitClick: ((e: MouseEvent) => void) | null = null;
    let startAutoCycle: (() => void) | null = null;

    /* ── 横スワイプでノード切り替え（モバイル専用）──
       縦スワイプ = ページスクロール（そのまま）
       横スワイプ = オービット切り替え（|dx| > |dy| のとき）        */
    let touchStartX = 0;
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const dx = touchStartX - e.changedTouches[0].clientX;
      const dy = touchStartY - e.changedTouches[0].clientY;
      // 縦スワイプ優勢 or 移動量が小さいときは無視（閾値 20px に引き下げ）
      if (Math.abs(dx) < 20 || Math.abs(dx) < Math.abs(dy)) return;
      const now = Date.now();
      if (isAnimating || (now - lastStepTime) < STEP_COOLDOWN) return;
      lastStepTime = now;
      if (dx > 0 && currentStep < 2) { executeRotate(currentStep + 1); startAutoCycle?.(); } // 左スワイプ → 次へ
      if (dx < 0 && currentStep > 0) { executeRotate(currentStep - 1); node3Dwell = 0; startAutoCycle?.(); } // 右スワイプ → 前へ
    };
    if (heroRef.current) {
      heroRef.current.addEventListener('touchstart', handleTouchStart, { passive: true });
      heroRef.current.addEventListener('touchend',   handleTouchEnd,   { passive: true });
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
      heroRef.current?.removeEventListener('touchend',   handleTouchEnd);
      gsap.killTweensOf([
        orbitRingRef.current, inner0Ref.current, inner1Ref.current,
        inner2Ref.current, cNumRef.current, wmRef.current,
      ]);
      ctx.revert();
    };
  }, []);

  /* ── Icon helpers ── */
  const WebIcon = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
         stroke="#0D60B8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
      <line x1="8"  y1="21" x2="16" y2="21"/>
    </svg>
  );
  const ServerIcon = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
         stroke="#0D60B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3"  width="20" height="7"  rx="1.5"/>
      <rect x="2" y="12" width="20" height="7"  rx="1.5"/>
      <circle cx="18" cy="6.5"  r="1.8" fill="#0D60B8" stroke="none"/>
      <circle cx="18" cy="15.5" r="1.8" fill="#0D60B8" stroke="none"/>
    </svg>
  );
  const GearIcon = () => (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
         stroke="#0D60B8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
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
      className="relative w-full flex items-center"
      style={{ minHeight: '100vh', overflowX: 'hidden', background: 'linear-gradient(135deg, #1A60C8 0%, #2196F3 45%, #42B4F8 72%, #72CBFF 100%)' }}
      id="hero"
    >
      {/* ===== BACKGROUND LAYERS ===== */}
      <div className="absolute inset-0 z-0" style={{
        background: 'linear-gradient(135deg, #1A60C8 0%, #2196F3 45%, #42B4F8 72%, #72CBFF 100%)',
      }} />
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />
      <div className="absolute inset-0 z-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 50% 50%, transparent 35%, rgba(8,35,100,0.28) 100%)',
      }} />
      <div className="absolute inset-0 z-0 pointer-events-none" style={{
        background: 'linear-gradient(to right, rgba(10,40,110,0.22) 0%, transparent 50%)',
      }} />
      <div className="absolute z-0 pointer-events-none" style={{
        top: '5%', right: '5%', width: '55%', height: '90%',
        background: 'radial-gradient(ellipse at 60% 45%, rgba(100,185,255,0.18) 0%, transparent 60%)',
      }} />

      <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <circle cx="1200" cy="180" r="130" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
        <circle cx="1200" cy="180" r="220" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
        <circle cx="180"  cy="760" r="100" fill="none" stroke="rgba(0,144,210,0.10)"  strokeWidth="1"/>
        <circle cx="180"  cy="760" r="180" fill="none" stroke="rgba(0,144,210,0.06)"  strokeWidth="1"/>
        <circle cx="1300" cy="580" r="2.5" fill="rgba(0,160,233,0.35)"/>
        <circle cx="145"  cy="210" r="2.5" fill="rgba(0,160,233,0.35)"/>
      </svg>

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

      {/* ===== WATERMARK ===== */}
      <div
        ref={wmRef}
        className="absolute right-[2%] top-1/2 z-[1] pointer-events-none select-none"
        style={{
          transform: 'translateY(-55%) scale(1)',
          fontSize: 'clamp(140px, 18vw, 260px)',
          fontWeight: 900,
          color: 'rgba(255,255,255,0.13)',
          letterSpacing: '-0.06em',
          lineHeight: 1,
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        01
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 w-full">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

            {/* Left: Catch Copy */}
            <div ref={catchCopyRef} className="text-center md:text-left">

              {/* Eyebrow */}
              <div className="catch-line opacity-0 flex items-center gap-3 justify-center md:justify-start mb-7">
                <span style={{ flexShrink: 0, display: 'inline-block', width: 28, height: 1.5, background: 'rgba(173,224,255,0.65)' }} />
                <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.24em', color: 'rgba(173,224,255,0.80)', textTransform: 'uppercase' }}>
                  Digital Transformation
                </span>
              </div>

              {/* Main headline — intentional 2-line split */}
              <h1 className="catch-line opacity-0 font-bold mb-6" style={{ lineHeight: 1.08 }}>
                <span style={{
                  display: 'block',
                  fontSize: 'clamp(2.6rem, 5vw, 4.2rem)',
                  color: 'rgba(255,255,255,0.95)',
                  letterSpacing: '-0.025em',
                }}>踏み出す、</span>
                <span style={{
                  display: 'block',
                  fontSize: 'clamp(2.6rem, 5vw, 4.2rem)',
                  letterSpacing: '-0.025em',
                  background: 'linear-gradient(95deg, #ADE0FF 0%, #e8f5ff 65%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>はみ出す。</span>
              </h1>

              {/* Divider */}
              <div className="catch-line opacity-0 flex justify-center md:justify-start mb-5">
                <div style={{ width: 40, height: 2, background: 'rgba(255,255,255,0.28)', borderRadius: 1 }} />
              </div>

              {/* Subtitle */}
              <p className="catch-line opacity-0 mb-3" style={{
                fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
                color: 'rgba(255,255,255,0.90)',
                fontWeight: 500,
                lineHeight: 1.75,
              }}>
                既存のルールから抜け出し、新しいビジネスの形へ。
              </p>

              {/* Body */}
              <p className="catch-line opacity-0" style={{
                fontSize: 'clamp(0.8rem, 1.1vw, 0.88rem)',
                color: 'rgba(255,255,255,0.52)',
                lineHeight: 1.95,
                letterSpacing: '0.02em',
              }}>
                次の一歩と地方の未来を、共に創り上げるITパートナー。
              </p>
            </div>

            {/* Right: Orbit Diagram */}
            <div ref={diagramRef} className="opacity-0 flex flex-col items-center">
              {/*
                orbit-clip-wrapper: constrains layout footprint to the scaled visual size.
                orbit-stage: fixed 500×500 px coordinate space, scaled via CSS transform.
                Orbit ring r=170 → items at ±170px from center (250,250).
              */}
              <div className="orbit-clip-wrapper">
              <div className="orbit-stage relative flex-shrink-0" style={{ width: 500, height: 500 }}>

                {/* Decorative SVG rings (static, never rotated) */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 500 500" fill="none"
                >
                  <circle cx="250" cy="250" r="235"
                          fill="rgba(60,130,240,0.22)"
                          stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
                  <circle cx="250" cy="250" r="170"
                          fill="none"
                          stroke="rgba(255,255,255,0.14)" strokeWidth="1"
                          strokeDasharray="4 11"/>
                </svg>

                {/* Center circle — text updated by JS */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex flex-col items-center justify-center text-center z-[2]"
                  style={{
                    width: 120, height: 120,
                    background: 'rgba(140,205,255,0.52)',
                    border: '2px solid rgba(220,240,255,0.68)',
                    boxShadow: '0 0 32px rgba(100,180,255,0.22), inset 0 1px 0 rgba(255,255,255,0.20)',
                    gap: 2,
                  }}
                >
                  <span
                    ref={cNumRef}
                    style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.25em', color: 'rgba(10,60,140,0.80)' }}
                  >
                    [ 01 ]
                  </span>
                  <span style={{ fontSize: 13, fontWeight: 800, color: '#0D47A1', letterSpacing: '0.08em' }}>
                    SERVICES
                  </span>
                  <span style={{ fontSize: 7.5, letterSpacing: '0.15em', color: 'rgba(10,60,140,0.55)', textTransform: 'uppercase' }}>
                    DX · SOLUTIONS
                  </span>
                </div>

                {/* ═══ ORBIT RING — GSAP rotates this ═══
                    transform-origin: 50% 50% = center (250,250).
                    Items inside are zero-size anchors positioned on the circle
                    via CSS: rotate(--a) translateY(calc(var(--r) * -1))        */}
                <div ref={orbitRingRef} className="absolute inset-0">

                  {/* Item 0 — top (--a=0°) — Webアプリ開発 */}
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

                  {/* Item 1 — lower-right (--a=120°) — システム開発・クラウド */}
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

                  {/* Item 2 — lower-left (--a=240°) — DXコンサルティング */}
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

                </div>{/* /orbit-ring */}
              </div>{/* /orbit-stage */}
              </div>{/* /orbit-clip-wrapper */}

              {/* Mobile tap/swipe hint */}
              <p
                className="md:hidden mt-2 text-center select-none pointer-events-none"
                style={{ fontSize: 10, letterSpacing: '0.18em', color: 'rgba(255,255,255,0.40)' }}
              >
                TAP · SWIPE
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Down Indicator — desktop only (mobile uses TAP · SWIPE hint) */}
      <div
        ref={scrollDownRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 opacity-0 hidden md:flex flex-col items-center gap-3"
      >
        <span className="font-en text-xs text-white tracking-[0.35em] opacity-50 font-light">SCROLL</span>
        <div className="relative w-px h-16 overflow-hidden">
          <div
            className="absolute top-0 w-full bg-gradient-to-b from-transparent via-white to-transparent"
            style={{ height: '60%', animation: 'scrollLine 1.8s ease-in-out infinite' }}
          />
        </div>
      </div>

      {/* Bottom white fade — blends hero cyan gradient into white before the wave.
          On tall viewports the centered content leaves 80-150px of cyan gap; this covers it. */}
      <div
        className="absolute bottom-0 left-0 w-full z-[9] pointer-events-none"
        style={{
          height: '320px',
          background: 'linear-gradient(to bottom, transparent 0%, white 100%)',
        }}
      />

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none">
        <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block" style={{ height: 72, display: 'block' }}>
          <path d="M0,72 L0,36 Q360,-4 720,36 Q1080,76 1440,36 L1440,72 Z" fill="white"/>
        </svg>
      </div>

      <style jsx>{`
        @keyframes scrollLine {
          0%   { transform: translateY(-100%); opacity: 0; }
          30%  { opacity: 1; }
          70%  { opacity: 1; }
          100% { transform: translateY(200%); opacity: 0; }
        }

        /* ── Orbit clip wrapper: layout footprint matches scaled visual size ── */
        .orbit-clip-wrapper {
          overflow: hidden;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 500px; height: 500px;
        }
        @media (max-width: 1200px) { .orbit-clip-wrapper { width: 410px; height: 410px; } }
        @media (max-width:  900px) { .orbit-clip-wrapper { width: 310px; height: 310px; } }
        @media (max-width:  480px) { .orbit-clip-wrapper { width: 260px; height: 260px; } }

        /* ── Orbit stage responsive scaling ── */
        .orbit-stage { transform-origin: center center; flex-shrink: 0; }
        @media (max-width: 1200px) { .orbit-stage { transform: scale(0.82); } }
        @media (max-width:  900px) { .orbit-stage { transform: scale(0.62); } }
        @media (max-width:  480px) { .orbit-stage { transform: scale(0.52); } }

        /* ── Orbit item: zero-size anchor, CSS-positioned on ring ──
           rotate(--a) places it on the circle;
           translateY(-r) moves it to the correct radius.          */
        .orbit-item {
          position: absolute;
          top: 50%; left: 50%;
          width: 0; height: 0;
          overflow: visible;
          transform: rotate(var(--a)) translateY(calc(var(--r) * -1));
        }

        /* ── Orbit inner: icon circle + label.
           GSAP counter-rotates this to keep content upright.
           transform-origin = center of node circle (60px, 50px).  */
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

        /* ── Node circle ── */
        .node-circle {
          width: 100px; height: 100px;
          border-radius: 50%; flex-shrink: 0;
          background: rgba(140,205,255,0.52);
          border: 2px solid rgba(220,240,255,0.72);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 4px;
          transition: background .40s, border-color .40s, box-shadow .40s, transform .40s;
        }
        .orbit-item.is-active .node-circle {
          background: rgba(210,240,255,0.96);  /* fully opaque — hides ring behind */
          border-color: rgba(255,255,255,0.95);
          box-shadow: 0 0 0 5px rgba(255,255,255,0.22), 0 0 32px rgba(180,228,255,0.65);
          transform: scale(1.18);
        }
        .orbit-item.is-dim .node-circle {
          background: rgba(140,205,255,0.32);
          border-color: rgba(220,240,255,0.36);
          opacity: 0.55;
        }

        /* ── Node label ── */
        .node-label {
          font-size: 13px; line-height: 1.5;
          font-weight: 500;
          text-align: center; white-space: nowrap;
          color: rgba(255,255,255,0.90);
          transition: opacity .40s, font-size .25s, font-weight .25s;
        }
        .orbit-item.is-active .node-label {
          color: #fff; font-weight: 700; font-size: 13.5px;
          text-shadow: 0 0 12px rgba(180,230,255,0.6);
        }
        .orbit-item.is-dim    .node-label { opacity: 0.45; font-size: 12px; }
      `}</style>
    </section>
  );
}
