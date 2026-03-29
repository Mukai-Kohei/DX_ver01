'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import Header from '@/components/Header';
import Loading from '@/components/Loading';
import Hero from '@/components/Hero';
import Business from '@/components/Business';
import Service from '@/components/Service';
import PickupProduct from '@/components/PickupProduct';
import News from '@/components/News';
import Company from '@/components/Company';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    // Lenisスムーススクロールの初期化
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
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
        <Service />
        <PickupProduct />
        <News />
        <Company />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
