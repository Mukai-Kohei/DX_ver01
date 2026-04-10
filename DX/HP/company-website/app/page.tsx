'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '@/components/Header';
import Loading from '@/components/Loading';
import Hero from '@/components/Hero';
import Business from '@/components/Business';
import Company from '@/components/Company';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // リロード時に必ずトップに戻る
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);
    }

    // タッチデバイス（スマホ・タブレット）ではネイティブスクロールを使用。
    // Lenis は html に height:100vh を付与し、touchmove を passive:false で登録するため
    // モバイルのネイティブスクロールを完全に破壊する。
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    // Lenis を GSAP ticker に統合する公式パターン
    // 独自RAFループを使わず、GSAPのticker(ScrollTriggerも使用)に一本化することで
    // 二重スクロール計算の競合を防ぐ
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // LenisのscrollイベントでScrollTriggerを更新
    lenis.on('scroll', ScrollTrigger.update);

    // GSAP tickerでLenisを駆動（RAFを一本化）
    const tickerFn = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0); // ラグ補正を無効化してスムーズに

    return () => {
      gsap.ticker.remove(tickerFn);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Loading />
      <Header />
      <main>
        <Hero />
        <Business />
        <Company />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
