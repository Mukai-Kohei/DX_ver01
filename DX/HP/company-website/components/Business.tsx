'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Business() {
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
      const images = imagesRef.current?.querySelectorAll('.business-image');
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
      id="business"
    >
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Text */}
          <div ref={textRef} className="space-y-6">
            <div>
              <p className="font-en text-sm text-primary font-semibold tracking-widest mb-2">
                BUSINESS
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-main">
                事業内容
              </h2>
            </div>

            <div className="space-y-4 text-text-sub leading-relaxed">
              <p>
                私たちは、幅広い事業領域でお客様の課題解決に貢献しています。
                それぞれの分野で専門性を活かし、最高のサービスを提供します。
              </p>
              <p>
                サービスデザイン、システム開発、コンサルティング、クラウドソリューションなど、
                多岐にわたる事業でお客様のビジネスを支援します。
              </p>
            </div>

            <div className="pt-4">
              <a href="#service" className="btn btn-primary">
                VIEW MORE
              </a>
            </div>
          </div>

          {/* Right: Collage Images */}
          <div ref={imagesRef} className="relative h-[400px] md:h-[500px]">
            {/* Image 1 */}
            <div
              className="business-image absolute top-0 left-0 w-[45%] h-[50%] rounded-xl overflow-hidden shadow-lg"
              style={{ transform: 'rotate(3deg)' }}
            >
              <Image
                src="https://placehold.co/400x500/0057B8/FFFFFF?text=Service+Design"
                alt="サービスデザイン"
                fill
                className="object-cover"
              />
            </div>

            {/* Image 2 */}
            <div
              className="business-image absolute top-[20%] right-0 w-[50%] h-[55%] rounded-xl overflow-hidden shadow-lg"
              style={{ transform: 'rotate(-2deg)' }}
            >
              <Image
                src="https://placehold.co/400x500/00A0E9/FFFFFF?text=System+Dev"
                alt="システム開発"
                fill
                className="object-cover"
              />
            </div>

            {/* Image 3 */}
            <div
              className="business-image absolute bottom-0 left-[15%] w-[48%] h-[48%] rounded-xl overflow-hidden shadow-lg"
              style={{ transform: 'rotate(4deg)' }}
            >
              <Image
                src="https://placehold.co/400x500/003D82/FFFFFF?text=Consulting"
                alt="コンサルティング"
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
