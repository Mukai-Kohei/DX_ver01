'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const companyInfo = [
  { label: '会社名',    value: '株式会社COMPANY' },
  { label: '設立',      value: '2015年4月1日' },
  { label: '資本金',    value: '5,000万円' },
  { label: '代表取締役', value: '山田 太郎' },
  { label: '従業員数',  value: '120名' },
  { label: '事業内容',  value: 'システム開発・Webサービス・コンサルティング' },
  { label: '所在地',    value: '〒100-0001 東京都千代田区千代田1-1-1 サンプルビル10F' },
];

export default function Company() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-bg-light" id="company">
      <div className="container-custom">
        <div ref={contentRef} className="max-w-2xl mx-auto w-full">
          {/* Header */}
          <div className="text-center mb-10 md:mb-12 space-y-3">
            <p className="font-en text-sm text-primary font-semibold tracking-widest">
              COMPANY
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-main">
              企業情報
            </h2>
          </div>

          {/* Company Info Table */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md">
            <dl className="divide-y divide-border">
              {companyInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-6 px-5 py-4 sm:px-8 sm:py-5 hover:bg-bg-light transition-colors duration-200"
                >
                  <dt className="min-w-[7rem] sm:min-w-[8rem] text-sm font-bold text-text-main shrink-0">
                    {info.label}
                  </dt>
                  <dd className="text-sm sm:text-base text-text-sub leading-relaxed">
                    {info.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-10 md:mt-12">
            <a href="#" className="btn btn-primary text-sm sm:text-base px-8 py-3">
              会社案内PDF
            </a>
            <a href="#" className="btn btn-secondary text-sm sm:text-base px-8 py-3">
              アクセスマップ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
