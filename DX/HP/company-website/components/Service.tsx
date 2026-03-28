'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    number: 'SERVICES_01',
    title: 'Webアプリケーション開発',
    description: 'モダンな技術スタックを活用した、高性能なWebアプリケーションを開発します。',
    image: 'https://placehold.co/400x300/0057B8/FFFFFF?text=Web+App',
  },
  {
    id: 2,
    number: 'SERVICES_02',
    title: 'モバイルアプリ開発',
    description: 'iOS・Android対応のネイティブ・クロスプラットフォームアプリを開発します。',
    image: 'https://placehold.co/400x300/00A0E9/FFFFFF?text=Mobile+App',
  },
  {
    id: 3,
    number: 'SERVICES_03',
    title: 'UI/UXデザイン',
    description: 'ユーザー中心設計に基づいた、使いやすく美しいインターフェースを提供します。',
    image: 'https://placehold.co/400x300/003D82/FFFFFF?text=UI+UX',
  },
  {
    id: 4,
    number: 'SERVICES_04',
    title: 'データ分析・AI',
    description: '機械学習・AIを活用したデータ分析とビジネスインサイトを提供します。',
    image: 'https://placehold.co/400x300/0057B8/FFFFFF?text=Data+AI',
  },
  {
    id: 5,
    number: 'SERVICES_05',
    title: 'セキュリティ対策',
    description: '最新のセキュリティ技術で、システムとデータを保護します。',
    image: 'https://placehold.co/400x300/00A0E9/FFFFFF?text=Security',
  },
  {
    id: 6,
    number: 'SERVICES_06',
    title: 'インフラ構築・運用',
    description: 'クラウド・オンプレミス問わず、最適なインフラ環境を構築します。',
    image: 'https://placehold.co/400x300/003D82/FFFFFF?text=Infrastructure',
  },
  {
    id: 7,
    number: 'SERVICES_07',
    title: 'DevOps・CI/CD',
    description: '開発から運用まで、効率的な自動化パイプラインを構築します。',
    image: 'https://placehold.co/400x300/0057B8/FFFFFF?text=DevOps',
  },
  {
    id: 8,
    number: 'SERVICES_08',
    title: '保守・サポート',
    description: 'システム稼働後の継続的な保守・サポートで、安定運用をサポートします。',
    image: 'https://placehold.co/400x300/00A0E9/FFFFFF?text=Support',
  },
];

export default function Service() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current || !cardsRef.current) return;

    const ctx = gsap.context(() => {
      // タイトルアニメーション
      gsap.fromTo(
        titleRef.current,
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

      // カードのstaggerアニメーション
      const cards = cardsRef.current?.querySelectorAll('.service-card');
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              once: true,
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
      className="section-padding bg-white"
      id="service"
    >
      <div className="container-custom">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-12 md:mb-16 space-y-4">
          <p className="font-en text-sm text-primary font-semibold tracking-widest">
            WHAT_WE_DO
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-main">
            サービス内容
          </h2>
          <p className="font-en text-sm text-text-sub tracking-wider">
            &lt;SOLUTION&gt; コサウェルのソリューションサービス
          </p>
        </div>

        {/* Service Cards Grid */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card bg-white border border-border rounded-xl overflow-hidden card-hover"
            >
              {/* Image */}
              <div className="relative aspect-[4/3]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-white bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="font-en text-xs font-bold text-primary">
                    {service.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-text-main">
                  {service.title}
                </h3>
                <p className="text-sm text-text-sub leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
