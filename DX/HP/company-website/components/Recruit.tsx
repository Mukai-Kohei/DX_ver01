'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Recruit() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current || !imagesRef.current) return;

    const ctx = gsap.context(() => {
      // テキストアニメーション
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

      // 画像のstaggerアニメーション
      const images = imagesRef.current?.querySelectorAll('.recruit-image');
      if (images && images.length > 0) {
        gsap.fromTo(
          images,
          {
            opacity: 0,
            scale: 0.8,
            rotate: 0,
          },
          {
            opacity: 1,
            scale: 1,
            rotate: (index) => [3, -2, 4][index] || 0,
            duration: 0.6,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: imagesRef.current,
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
      id="recruit"
    >
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Text */}
          <div ref={textRef} className="space-y-6">
            <div>
              <p className="font-en text-sm text-primary font-semibold tracking-widest mb-2">
                RECRUIT
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-main">
                採用情報
              </h2>
            </div>

            <div className="space-y-4 text-text-sub leading-relaxed">
              <p>
                私たちと一緒に、ITの未来を創りませんか？
                挑戦を楽しみ、成長を続けられる環境がここにあります。
              </p>
              <p>
                経験者はもちろん、未経験からでも活躍できるサポート体制を整えています。
                あなたの「やりたいこと」を実現できる場所です。
              </p>
            </div>

            <div className="pt-4">
              <a href="#" className="btn btn-primary">
                採用情報はこちら
              </a>
            </div>
          </div>

          {/* Right: Collage Images */}
          <div ref={imagesRef} className="relative h-[400px] md:h-[500px]">
            {/* Image 1 */}
            <div
              className="recruit-image absolute top-0 left-0 w-[45%] h-[50%] rounded-xl overflow-hidden shadow-lg"
              style={{ transform: 'rotate(3deg)' }}
            >
              <Image
                src="https://placehold.co/400x500/0057B8/FFFFFF?text=Team+1"
                alt="チーム写真1"
                fill
                className="object-cover"
              />
            </div>

            {/* Image 2 */}
            <div
              className="recruit-image absolute top-[20%] right-0 w-[50%] h-[55%] rounded-xl overflow-hidden shadow-lg"
              style={{ transform: 'rotate(-2deg)' }}
            >
              <Image
                src="https://placehold.co/400x500/00A0E9/FFFFFF?text=Team+2"
                alt="チーム写真2"
                fill
                className="object-cover"
              />
            </div>

            {/* Image 3 */}
            <div
              className="recruit-image absolute bottom-0 left-[15%] w-[48%] h-[48%] rounded-xl overflow-hidden shadow-lg"
              style={{ transform: 'rotate(4deg)' }}
            >
              <Image
                src="https://placehold.co/400x500/003D82/FFFFFF?text=Team+3"
                alt="チーム写真3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
