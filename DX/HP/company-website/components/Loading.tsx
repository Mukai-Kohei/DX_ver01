'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Loading() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!overlayRef.current || !logoRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // アニメーション完了後、bodyのoverflow制御を解除
          document.body.classList.remove('loading');
          setIsComplete(true);
        },
      });

      // 1. ロゴアニメーション（フェードイン + スケール）
      tl.fromTo(
        logoRef.current,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
        }
      )
        // 2. 保持
        .to({}, { duration: 0.8 })
        // 3. オーバーレイを上にスライドアウト
        .to(overlayRef.current, {
          y: '-100%',
          duration: 0.8,
          ease: 'power3.inOut',
        });
    }, overlayRef);

    // 初期状態でbodyのスクロールを無効化
    document.body.classList.add('loading');

    return () => {
      ctx.revert();
      document.body.classList.remove('loading');
    };
  }, []);

  // アニメーション完了後はDOMから削除
  if (isComplete) {
    return null;
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] bg-primary flex items-center justify-center"
    >
      <div
        ref={logoRef}
        className="flex flex-col items-center gap-4 opacity-0"
      >
        {/* Logo */}
        <div className="w-32 h-32 md:w-40 md:h-40 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
          <span className="font-en text-3xl md:text-4xl font-bold text-white">
            LOGO
          </span>
        </div>

        {/* Loading Dots */}
        <div className="flex gap-2">
          <div
            className="w-2 h-2 bg-white rounded-full animate-pulse"
            style={{ animationDelay: '0ms' }}
          />
          <div
            className="w-2 h-2 bg-white rounded-full animate-pulse"
            style={{ animationDelay: '150ms' }}
          />
          <div
            className="w-2 h-2 bg-white rounded-full animate-pulse"
            style={{ animationDelay: '300ms' }}
          />
        </div>
      </div>
    </div>
  );
}
