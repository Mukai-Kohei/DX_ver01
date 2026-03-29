'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Message() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current || !imageRef.current || !maskRef.current) return;

    const ctx = gsap.context(() => {
      // テキストのフェードアップ
      gsap.fromTo(
        textRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );

      // 画像マスクアニメーション
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: imageWrapperRef.current,
          start: 'top 80%',
          once: true,
        },
      });

      // カラーブロックがスライドして通過
      tl.fromTo(
        maskRef.current,
        {
          x: '0%',
        },
        {
          x: '100%',
          duration: 0.8,
          ease: 'power2.inOut',
        }
      ).fromTo(
        imageRef.current,
        {
          opacity: 0,
          scale: 1.1,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
        },
        '-=0.4'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-white relative overflow-hidden"
      id="message"
    >
      {/* Decorative background glow — top right */}
      <div
        className="absolute top-0 right-0 w-[480px] h-[480px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at top right, rgba(0,160,233,0.08) 0%, transparent 65%)',
        }}
      />
      {/* Decorative background glow — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-[360px] h-[360px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at bottom left, rgba(0,87,184,0.07) 0%, transparent 65%)',
        }}
      />
      {/* Subtle dot pattern — right half */}
      <div
        className="absolute inset-y-0 right-0 w-1/2 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(rgba(0,87,184,0.1) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Text */}
          <div ref={textRef} className="space-y-6">
            <div>
              <p className="font-en text-sm text-primary font-semibold tracking-widest mb-2">
                MESSAGE
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-main">
                メッセージ
              </h2>
            </div>

            <div className="space-y-4 text-text-sub leading-relaxed">
              <p>
                私たちは、テクノロジーの力で未来を創造します。
                常に挑戦し続け、新しい価値を生み出すことで、
                社会に貢献していきます。
              </p>
              <p>
                お客様のビジネスを成功に導くため、
                最新の技術と豊富な経験を活かし、
                最適なソリューションを提供します。
              </p>
              <p>
                一人ひとりの「魅力」を大切にし、
                チーム全体で成長し続ける企業文化を築いています。
              </p>
            </div>

            <div className="pt-4">
              <a
                href="#company"
                className="btn btn-primary inline-block"
              >
                会社情報を見る
              </a>
            </div>
          </div>

          {/* Right: SVG Tech Illustration with Mask Animation */}
          <div
            ref={imageWrapperRef}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl"
          >
            {/* SVG Illustration */}
            <div ref={imageRef} className="w-full h-full opacity-0">
              <svg
                viewBox="0 0 800 600"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <linearGradient id="msgBg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#001236"/>
                    <stop offset="100%" stopColor="#0057B8"/>
                  </linearGradient>
                  <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#00A0E9" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#00A0E9" stopOpacity="0"/>
                  </radialGradient>
                </defs>

                {/* Background */}
                <rect width="800" height="600" fill="url(#msgBg)"/>

                {/* Grid */}
                <g stroke="rgba(255,255,255,0.05)" strokeWidth="1">
                  {[0,80,160,240,320,400,480,560,640,720,800].map(x => (
                    <line key={`v${x}`} x1={x} y1="0" x2={x} y2="600"/>
                  ))}
                  {[0,80,160,240,320,400,480,560,600].map(y => (
                    <line key={`h${y}`} x1="0" y1={y} x2="800" y2={y}/>
                  ))}
                </g>

                {/* Connection lines */}
                <g stroke="rgba(0,160,233,0.25)" strokeWidth="1">
                  <line x1="400" y1="300" x2="160" y2="140"/>
                  <line x1="400" y1="300" x2="640" y2="160"/>
                  <line x1="400" y1="300" x2="680" y2="420"/>
                  <line x1="400" y1="300" x2="200" y2="460"/>
                  <line x1="400" y1="300" x2="100" y2="300"/>
                  <line x1="400" y1="300" x2="700" y2="300"/>
                  <line x1="160" y1="140" x2="640" y2="160"/>
                  <line x1="200" y1="460" x2="680" y2="420"/>
                  <line x1="100" y1="300" x2="200" y2="460"/>
                  <line x1="640" y1="160" x2="700" y2="300"/>
                </g>

                {/* Central node glow */}
                <circle cx="400" cy="300" r="60" fill="url(#nodeGlow)"/>
                {/* Pulse rings */}
                <circle cx="400" cy="300" r="45" fill="none" stroke="rgba(0,160,233,0.4)" strokeWidth="1"/>
                <circle cx="400" cy="300" r="60" fill="none" stroke="rgba(0,160,233,0.2)" strokeWidth="1"/>
                <circle cx="400" cy="300" r="80" fill="none" stroke="rgba(0,160,233,0.1)" strokeWidth="1"/>
                {/* Central dot */}
                <circle cx="400" cy="300" r="10" fill="#00A0E9"/>
                <circle cx="400" cy="300" r="5" fill="white"/>

                {/* Satellite nodes */}
                {[
                  {cx:160, cy:140, r:7, color:'#00A0E9'},
                  {cx:640, cy:160, r:6, color:'rgba(255,255,255,0.8)'},
                  {cx:680, cy:420, r:8, color:'#00A0E9'},
                  {cx:200, cy:460, r:6, color:'rgba(255,255,255,0.8)'},
                  {cx:100, cy:300, r:5, color:'rgba(0,160,233,0.7)'},
                  {cx:700, cy:300, r:5, color:'rgba(0,160,233,0.7)'},
                ].map((n, i) => (
                  <g key={i}>
                    <circle cx={n.cx} cy={n.cy} r={n.r + 6} fill="none" stroke={n.color} strokeWidth="1" opacity="0.4"/>
                    <circle cx={n.cx} cy={n.cy} r={n.r} fill={n.color}/>
                  </g>
                ))}

                {/* Decorative text labels */}
                <g fontFamily="monospace" fill="rgba(0,160,233,0.5)" fontSize="10">
                  <text x="110" y="130">DATA</text>
                  <text x="650" y="155">CLOUD</text>
                  <text x="690" y="440">SYSTEM</text>
                  <text x="140" y="490">DESIGN</text>
                </g>

                {/* Bottom bar chart accent */}
                <g fill="rgba(0,160,233,0.2)" stroke="rgba(0,160,233,0.4)" strokeWidth="1">
                  <rect x="540" y="520" width="20" height="60"/>
                  <rect x="568" y="500" width="20" height="80"/>
                  <rect x="596" y="510" width="20" height="70"/>
                  <rect x="624" y="490" width="20" height="90"/>
                  <rect x="652" y="505" width="20" height="75"/>
                  <rect x="680" y="480" width="20" height="100"/>
                  <rect x="708" y="460" width="20" height="120"/>
                </g>

                {/* Corner decoration — top left */}
                <g stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none">
                  <rect x="20" y="20" width="60" height="60"/>
                  <line x1="20" y1="20" x2="50" y2="50"/>
                  <circle cx="80" cy="20" r="4" fill="rgba(0,160,233,0.5)" stroke="none"/>
                  <circle cx="20" cy="80" r="3" fill="rgba(255,255,255,0.3)" stroke="none"/>
                </g>
              </svg>
            </div>

            {/* Color Mask */}
            <div
              ref={maskRef}
              className="absolute inset-0 bg-primary z-10"
              style={{ transform: 'translateX(0%)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

