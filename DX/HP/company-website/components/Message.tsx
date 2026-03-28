'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

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
      className="section-padding bg-white"
      id="message"
    >
      <div className="container-custom">
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

          {/* Right: Image with Mask Animation */}
          <div
            ref={imageWrapperRef}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl"
          >
            {/* Image */}
            <div
              ref={imageRef}
              className="w-full h-full opacity-0"
            >
              <Image
                src="https://placehold.co/800x600/0057B8/FFFFFF?text=Message+Image"
                alt="メッセージ画像"
                fill
                className="object-cover"
              />
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
