'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Business from '@/components/Business';
import Works from '@/components/Works';
import Approach from '@/components/Approach';
import Company from '@/components/Company';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);
    }

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tickerFn = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    // Dialogs (e.g. the Business service modal) ask us to freeze the page.
    const stop = () => lenis.stop();
    const start = () => lenis.start();
    window.addEventListener('lenis:stop', stop);
    window.addEventListener('lenis:start', start);

    return () => {
      window.removeEventListener('lenis:stop', stop);
      window.removeEventListener('lenis:start', start);
      gsap.ticker.remove(tickerFn);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Business />
        <Works />
        <Approach />
        <Company />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
