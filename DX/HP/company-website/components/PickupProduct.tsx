'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    title: 'プロダクト A',
    category: 'Webサービス',
    image: 'https://placehold.co/400x300/0057B8/FFFFFF?text=Product+A',
  },
  {
    id: 2,
    title: 'プロダクト B',
    category: 'モバイルアプリ',
    image: 'https://placehold.co/400x300/00A0E9/FFFFFF?text=Product+B',
  },
  {
    id: 3,
    title: 'プロダクト C',
    category: 'SaaS',
    image: 'https://placehold.co/400x300/003D82/FFFFFF?text=Product+C',
  },
  {
    id: 4,
    title: 'プロダクト D',
    category: 'AI ソリューション',
    image: 'https://placehold.co/400x300/0057B8/FFFFFF?text=Product+D',
  },
  {
    id: 5,
    title: 'プロダクト E',
    category: 'IoT プラットフォーム',
    image: 'https://placehold.co/400x300/00A0E9/FFFFFF?text=Product+E',
  },
];

export default function PickupProduct() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const marquee = marqueeRef.current;
    const marqueeContent = marquee.querySelector('.marquee-content');
    if (!marqueeContent) return;

    // 無限ループアニメーション
    const animation = gsap.to(marqueeContent, {
      x: '-50%',
      duration: 30,
      ease: 'none',
      repeat: -1,
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-bg-light overflow-hidden"
      id="pickup"
    >
      <div className="container-custom mb-12">
        <div className="text-center space-y-4">
          <p className="font-en text-sm text-primary font-semibold tracking-widest">
            PICKUP PRODUCT
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-main">
            ピックアッププロダクト
          </h2>
        </div>
      </div>

      {/* Infinite Scroll Marquee */}
      <div ref={marqueeRef} className="relative overflow-hidden">
        <div className="marquee-content flex gap-6">
          {/* First set */}
          {products.map((product) => (
            <div
              key={`first-${product.id}`}
              className="flex-shrink-0 w-[300px] md:w-[400px]"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <p className="font-en text-xs text-primary font-semibold tracking-wider">
                    {product.category}
                  </p>
                  <h3 className="text-xl font-bold text-text-main">
                    {product.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {products.map((product) => (
            <div
              key={`second-${product.id}`}
              className="flex-shrink-0 w-[300px] md:w-[400px]"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <p className="font-en text-xs text-primary font-semibold tracking-wider">
                    {product.category}
                  </p>
                  <h3 className="text-xl font-bold text-text-main">
                    {product.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
