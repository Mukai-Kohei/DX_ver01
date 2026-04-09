'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// registerPlugin は page.tsx で一元管理

const companyInfo = [
  { label: '代表取締役', value: '舟木 南生' },
  { label: '事業内容',   value: 'DX推進支援・デジタルマーケティング支援・DX×マーケティング融合サービス' },
];

export default function Company() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
        }
      );
      gsap.fromTo(
        tableRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, delay: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-bg-light" id="company">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* Left: Title */}
          <div ref={textRef} className="space-y-6">
            <div>
              <p className="font-en text-sm text-primary font-semibold tracking-widest mb-2">
                COMPANY
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-main">
                企業情報
              </h2>
            </div>
          </div>

          {/* Right: Table */}
          <div ref={tableRef} className="bg-white rounded-2xl overflow-hidden shadow-md">
            <dl className="divide-y divide-border">
              {companyInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex gap-4 px-5 py-4 hover:bg-bg-light transition-colors duration-200"
                >
                  <dt className="w-24 shrink-0 text-sm font-bold text-text-main">
                    {info.label}
                  </dt>
                  <dd className="text-sm text-text-sub leading-relaxed">
                    {info.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

        </div>
      </div>
    </section>
  );
}
