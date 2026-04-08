'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// registerPlugin は page.tsx で一元管理

const companyInfo = [
  { label: '会社名',     value: '株式会社COMPANY' },
  { label: '代表取締役', value: '山田 太郎' },
  { label: '事業内容',   value: 'システム開発・Webサービス・コンサルティング' },
  { label: '所在地',     value: '〒100-0001 東京都千代田区千代田1-1-1 サンプルビル10F' },
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
    <section ref={sectionRef} id="company" style={{
      background: 'linear-gradient(135deg,#001D4A 0%,#003D82 45%,#0057B8 100%)',
      position: 'relative', overflow: 'hidden',
    }} className="section-padding">
      {/* grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)',
        backgroundSize: '60px 60px',
      }} />
      {/* corner glow */}
      <div className="absolute bottom-0 left-0 w-72 h-72 pointer-events-none" style={{
        background: 'radial-gradient(circle at 0% 100%, rgba(0,61,130,0.50) 0%, transparent 65%)',
      }} />
      <div className="container-custom relative">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* Left: Title */}
          <div ref={textRef} className="space-y-6">
            <div>
              <p className="font-en text-sm font-semibold tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.55)' }}>
                COMPANY
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: '#fff' }}>
                企業情報
              </h2>
            </div>
          </div>

          {/* Right: Table */}
          <div ref={tableRef} style={{
            background: 'rgba(255,255,255,0.09)', backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.18)', borderRadius: 16, overflow: 'hidden',
          }}>
            <dl>
              {companyInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex gap-4 px-5 py-4"
                  style={{
                    borderBottom: index < companyInfo.length - 1 ? '1px solid rgba(255,255,255,0.10)' : 'none',
                  }}
                >
                  <dt className="w-24 shrink-0 text-sm font-bold" style={{ color: 'rgba(255,255,255,0.90)' }}>
                    {info.label}
                  </dt>
                  <dd className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>
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
