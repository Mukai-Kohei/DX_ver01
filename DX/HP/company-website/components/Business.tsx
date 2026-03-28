'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const businessCards = [
  {
    id: 1,
    number: '01',
    title: 'サービスデザイン',
    description: 'ユーザー体験を重視した、魅力的なサービスをデザインします。',
    image: 'https://placehold.co/600x400/0057B8/FFFFFF?text=Service+Design',
  },
  {
    id: 2,
    number: '02',
    title: 'システム開発',
    description: '最新技術を活用し、高品質なシステムを開発・提供します。',
    image: 'https://placehold.co/600x400/00A0E9/FFFFFF?text=System+Development',
  },
  {
    id: 3,
    number: '03',
    title: 'コンサルティング',
    description: 'ビジネス課題を分析し、最適なIT戦略を立案します。',
    image: 'https://placehold.co/600x400/003D82/FFFFFF?text=Consulting',
  },
  {
    id: 4,
    number: '04',
    title: 'クラウドソリューション',
    description: 'スケーラブルで安全なクラウド環境を構築します。',
    image: 'https://placehold.co/600x400/0057B8/FFFFFF?text=Cloud+Solution',
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

      // 横スクロールの距離を計算（カード幅の合計 - ビューポート幅）
      const scrollWidth = cards.scrollWidth - cards.offsetWidth;

      // 横スクロールアニメーション
      gsap.to(cards, {
        x: -scrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: () => `+=${scrollWidth * 3}`, // スクロール量を十分に確保
          scrub: 1, // スムーズなスクロール連動
          pin: true, // セクションを固定
          anticipatePin: 1,
          onUpdate: (self) => {
            // 進捗に応じてカードインデックスを更新
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
      className="relative bg-bg-light overflow-hidden"
      id="business"
    >
      <div ref={triggerRef} className="relative min-h-screen">
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
                {businessCards.map((card) => (
                  <div
                    key={card.id}
                    className="w-[280px] md:w-[400px] lg:w-[500px] flex-shrink-0"
                  >
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
                      {/* Card Image */}
                      <div className="relative aspect-[3/2]">
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm px-4 py-2 rounded-full">
                          <span className="font-en text-sm font-bold text-primary">
                            {card.number}
                          </span>
                        </div>
                      </div>

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
