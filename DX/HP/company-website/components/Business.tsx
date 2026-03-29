'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type CardVisualConfig = {
  bg: string;
  svgContent: React.ReactNode;
};

function CardVisual({ config, number }: { config: CardVisualConfig; number: string }) {
  return (
    <div className="relative aspect-[3/2] overflow-hidden" style={{ background: config.bg }}>
      <svg
        viewBox="0 0 600 400"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {config.svgContent}
      </svg>
      <div className="absolute top-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm px-4 py-2 rounded-full">
        <span className="font-en text-sm font-bold text-primary">{number}</span>
      </div>
    </div>
  );
}

const cardVisuals: CardVisualConfig[] = [
  // 01 サービスデザイン — purple-blue + UI wireframe
  {
    bg: 'linear-gradient(135deg, #1a0533 0%, #3b1f8c 50%, #0057B8 100%)',
    svgContent: (
      <>
        {/* Grid */}
        <g stroke="rgba(255,255,255,0.06)" strokeWidth="1">
          {[0,60,120,180,240,300,360,420,480,540,600].map(x => <line key={`v${x}`} x1={x} y1="0" x2={x} y2="400"/>)}
          {[0,80,160,240,320,400].map(y => <line key={`h${y}`} x1="0" y1={y} x2="600" y2={y}/>)}
        </g>
        {/* Wireframe browser window */}
        <rect x="120" y="60" width="360" height="260" rx="8" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
        <rect x="120" y="60" width="360" height="32" rx="8" fill="rgba(255,255,255,0.1)"/>
        <circle cx="145" cy="76" r="6" fill="rgba(255,100,100,0.6)"/>
        <circle cx="165" cy="76" r="6" fill="rgba(255,200,0,0.6)"/>
        <circle cx="185" cy="76" r="6" fill="rgba(0,220,100,0.6)"/>
        {/* Content blocks */}
        <rect x="140" y="112" width="140" height="12" rx="4" fill="rgba(255,255,255,0.25)"/>
        <rect x="140" y="134" width="100" height="8" rx="3" fill="rgba(255,255,255,0.12)"/>
        <rect x="140" y="154" width="120" height="8" rx="3" fill="rgba(255,255,255,0.12)"/>
        <rect x="300" y="110" width="160" height="100" rx="6" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
        <rect x="140" y="176" width="80" height="28" rx="14" fill="rgba(0,160,233,0.6)"/>
        {/* Cursor */}
        <polygon points="370,240 370,280 380,272 386,286 392,284 386,270 398,270" fill="rgba(255,255,255,0.7)" stroke="rgba(0,0,50,0.4)" strokeWidth="1"/>
        {/* Glow */}
        <radialGradient id="biz01glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0"/>
        </radialGradient>
        <circle cx="300" cy="200" r="200" fill="url(#biz01glow)"/>
      </>
    ),
  },
  // 02 システム開発 — dark navy + code motif
  {
    bg: 'linear-gradient(135deg, #030b1a 0%, #001847 50%, #003d82 100%)',
    svgContent: (
      <>
        {/* Dot grid */}
        {[80,160,240,320,400,480,560].flatMap(x =>
          [60,140,220,300,380].map(y => (
            <circle key={`d${x}${y}`} cx={x} cy={y} r="1.5" fill="rgba(0,160,233,0.2)"/>
          ))
        )}
        {/* Code bracket large */}
        <text x="100" y="260" fontFamily="monospace" fontSize="160" fill="rgba(0,160,233,0.12)" fontWeight="bold">{'<'}</text>
        <text x="370" y="260" fontFamily="monospace" fontSize="160" fill="rgba(0,160,233,0.12)" fontWeight="bold">{'>'}</text>
        {/* Code lines */}
        <g fontFamily="monospace" fill="rgba(255,255,255,0.7)" fontSize="13">
          <text x="140" y="130" fill="rgba(100,180,255,0.8)">{'function'} <tspan fill="rgba(255,220,100,0.9)">{'build'}</tspan>{'() {'}</text>
          <text x="160" y="155" fill="rgba(255,255,255,0.6)">{'const'} <tspan fill="rgba(150,240,180,0.9)">{'future'}</tspan> = [];</text>
          <text x="160" y="178" fill="rgba(255,255,255,0.6)">{'return'} <tspan fill="rgba(0,200,255,0.9)">{'future'}</tspan>;</text>
          <text x="140" y="200" fill="rgba(255,255,255,0.7)">{'}'}</text>
        </g>
        {/* Terminal cursor blink */}
        <rect x="140" y="215" width="9" height="16" rx="1" fill="rgba(0,220,180,0.7)"/>
        {/* Glow */}
        <radialGradient id="biz02glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0057B8" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#0057B8" stopOpacity="0"/>
        </radialGradient>
        <circle cx="300" cy="200" r="200" fill="url(#biz02glow)"/>
      </>
    ),
  },
  // 03 コンサルティング — teal + bar chart
  {
    bg: 'linear-gradient(135deg, #002a2a 0%, #005f5f 50%, #0099a0 100%)',
    svgContent: (
      <>
        {/* Grid lines */}
        <g stroke="rgba(255,255,255,0.06)" strokeWidth="1">
          {[0,100,200,300].map(y => <line key={y} x1="80" y1={y+50} x2="520" y2={y+50}/>)}
        </g>
        {/* Bar chart */}
        {[
          {x:110, h:80,  color:'rgba(0,220,200,0.6)'},
          {x:170, h:140, color:'rgba(0,220,200,0.7)'},
          {x:230, h:100, color:'rgba(0,220,200,0.6)'},
          {x:290, h:180, color:'rgba(0,240,220,0.8)'},
          {x:350, h:130, color:'rgba(0,220,200,0.6)'},
          {x:410, h:220, color:'rgba(0,255,240,0.85)'},
        ].map((b, i) => (
          <g key={i}>
            <rect x={b.x} y={350-b.h} width="44" height={b.h} rx="4" fill={b.color}/>
            <rect x={b.x} y={350-b.h} width="44" height="4" rx="2" fill="rgba(255,255,255,0.5)"/>
          </g>
        ))}
        {/* Trend line */}
        <polyline
          points="132,270 192,210 252,250 312,170 372,220 432,130"
          fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeDasharray="6,3"
        />
        {[132,192,252,312,372,432].map((x,i) => {
          const ys = [270,210,250,170,220,130];
          return <circle key={i} cx={x} cy={ys[i]} r="5" fill="white" stroke="rgba(0,220,200,0.8)" strokeWidth="1.5"/>;
        })}
        {/* Arrow up */}
        <polygon points="432,90 445,120 418,120" fill="rgba(255,255,255,0.8)"/>
        {/* Glow */}
        <radialGradient id="biz03glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#009999" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="#009999" stopOpacity="0"/>
        </radialGradient>
        <circle cx="300" cy="200" r="200" fill="url(#biz03glow)"/>
      </>
    ),
  },
  // 04 クラウドソリューション — deep blue + cloud/network
  {
    bg: 'linear-gradient(135deg, #020d1f 0%, #0057B8 60%, #00A0E9 100%)',
    svgContent: (
      <>
        {/* Dot grid */}
        {[60,140,220,300,380,460,540].flatMap(x =>
          [50,130,210,290,370].map(y => (
            <circle key={`d${x}${y}`} cx={x} cy={y} r="1.5" fill="rgba(255,255,255,0.1)"/>
          ))
        )}
        {/* Cloud shape */}
        <g transform="translate(150, 80)" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5">
          <path d="M60,120 Q20,120 20,85 Q20,50 55,50 Q58,20 90,20 Q120,20 130,45 Q155,35 160,65 Q185,65 185,90 Q185,120 145,120 Z"/>
        </g>
        {/* Nodes below cloud */}
        {[
          {cx:200, cy:240}, {cx:300, cy:280}, {cx:400, cy:240}, {cx:150, cy:310}, {cx:450, cy:310}
        ].map((n, i) => (
          <g key={i}>
            <circle cx={n.cx} cy={n.cy} r="16" fill="rgba(0,160,233,0.25)" stroke="rgba(0,160,233,0.5)" strokeWidth="1"/>
            <circle cx={n.cx} cy={n.cy} r="6" fill="rgba(0,160,233,0.9)"/>
          </g>
        ))}
        {/* Lines from cloud to nodes */}
        <g stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="5,4">
          <line x1="240" y1="196" x2="200" y2="224"/>
          <line x1="280" y1="196" x2="300" y2="264"/>
          <line x1="310" y1="196" x2="400" y2="224"/>
          <line x1="200" y1="256" x2="150" y2="294"/>
          <line x1="400" y1="256" x2="450" y2="294"/>
        </g>
        {/* Glow */}
        <radialGradient id="biz04glow" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#00A0E9" stopOpacity="0.35"/>
          <stop offset="100%" stopColor="#00A0E9" stopOpacity="0"/>
        </radialGradient>
        <ellipse cx="300" cy="160" rx="240" ry="180" fill="url(#biz04glow)"/>
      </>
    ),
  },
];

const businessCards = [
  {
    id: 1,
    number: '01',
    title: 'サービスデザイン',
    description: 'ユーザー体験を重視した、魅力的なサービスをデザインします。',
  },
  {
    id: 2,
    number: '02',
    title: 'システム開発',
    description: '最新技術を活用し、高品質なシステムを開発・提供します。',
  },
  {
    id: 3,
    number: '03',
    title: 'コンサルティング',
    description: 'ビジネス課題を分析し、最適なIT戦略を立案します。',
  },
  {
    id: 4,
    number: '04',
    title: 'クラウドソリューション',
    description: 'スケーラブルで安全なクラウド環境を構築します。',
  },
];

export default function Business() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    if (!sectionRef.current || !triggerRef.current || !cardsContainerRef.current) return;

    const ctx = gsap.context(() => {
      const cards = cardsContainerRef.current;
      if (!cards) return;

      const scrollWidth = cards.scrollWidth - cards.offsetWidth;

      gsap.to(cards, {
        x: -scrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: () => `+=${scrollWidth * 3}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const index = Math.min(
              Math.floor(progress * businessCards.length) + 1,
              businessCards.length
            );
            setCurrentIndex(index);
          },
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      id="business"
      style={{
        background: 'linear-gradient(160deg, #f0f4f9 0%, #e8f0f8 50%, #f5f7fa 100%)',
      }}
    >
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,87,184,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,87,184,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Glow accent */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,160,233,0.12) 0%, transparent 65%)',
        }}
      />
      <div ref={triggerRef} className="relative min-h-screen z-10">
        <div className="container-custom h-screen flex items-center">
          <div className="w-full grid md:grid-cols-12 gap-8 items-center">
            {/* Left Column: Fixed Info */}
            <div className="md:col-span-4 space-y-6 z-10">
              <div>
                <p className="font-en text-sm text-primary font-semibold tracking-widest mb-2">
                  BUSINESS
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-main">
                  事業内容
                </h2>
              </div>

              <p className="text-text-sub leading-relaxed">
                私たちは、幅広い事業領域でお客様の課題解決に貢献しています。
                それぞれの分野で専門性を活かし、最高のサービスを提供します。
              </p>

              {/* Progress Indicator */}
              <div className="flex items-center gap-3">
                <span className="font-en text-xl font-bold text-primary">
                  {String(currentIndex).padStart(2, '0')}
                </span>
                <div className="h-px flex-1 bg-border" />
                <span className="font-en text-sm text-text-light">
                  {String(businessCards.length).padStart(2, '0')}
                </span>
              </div>

              <div className="pt-4">
                <a href="#service" className="btn btn-primary inline-block">
                  VIEW MORE
                </a>
              </div>
            </div>

            {/* Right Column: Horizontal Scroll Cards */}
            <div className="md:col-span-8 relative overflow-hidden">
              <div
                ref={cardsContainerRef}
                className="flex gap-6 md:gap-8"
                style={{ width: 'max-content' }}
              >
                {businessCards.map((card, i) => (
                  <div
                    key={card.id}
                    className="w-[280px] md:w-[400px] lg:w-[500px] flex-shrink-0"
                  >
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
                      {/* Card Visual */}
                      <CardVisual config={cardVisuals[i]} number={card.number} />

                      {/* Card Content */}
                      <div className="p-6 space-y-3">
                        <h3 className="text-xl md:text-2xl font-bold text-text-main">
                          {card.title}
                        </h3>
                        <p className="text-text-sub leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
