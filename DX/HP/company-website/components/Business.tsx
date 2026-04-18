'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const services = [
  {
    no: '01',
    titleHtml: 'DX <em>Solution</em>',
    ja: 'DX推進支援',
    desc: '業務フローのデジタル化から組織変革まで、貴社の課題に合わせたDX戦略を設計・実装します。',
    tags: ['業務改善', 'システム導入', '組織変革'],
    href: '/dx-solution',
  },
  {
    no: '02',
    titleHtml: 'Digital <em>Marketing</em>',
    ja: 'デジタルマーケティング支援',
    desc: 'SNS・Web広告・SEOを一体化したデータドリブンなマーケティング施策で、顧客獲得を最大化。',
    tags: ['SNS運用', 'Web広告', 'SEO'],
    href: '/digital-marketing',
  },
  {
    no: '03',
    titleHtml: 'DX × <em>Marketing</em>',
    ja: 'DX×マーケティング融合サービス',
    desc: 'テクノロジーと顧客体験を融合させた独自アプローチで、地方企業に新たな成長モデルを提供。',
    tags: ['CX設計', 'データ活用', '成長戦略'],
    href: '/relationship',
  },
];

export default function Business() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll('.service-row'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="business" style={{ background: 'var(--bg)', padding: 'clamp(80px, 10vw, 140px) 0 clamp(60px, 8vw, 100px)' }}>
      <div className="container-custom">
        {/* Header row */}
        <div className="business-header" style={{ display: 'flex', gap: '40px', marginBottom: '72px', alignItems: 'flex-start' }}>
          <div style={{ width: '180px', flexShrink: 0 }}>
            <p
              style={{
                fontFamily: 'var(--f-mono)',
                fontSize: '10px',
                letterSpacing: '0.16em',
                color: 'var(--ink-mute)',
                textTransform: 'uppercase',
                marginBottom: '10px',
              }}
            >
              — Business
            </p>
            <h2
              style={{
                fontFamily: 'var(--f-jp)',
                fontWeight: 700,
                fontSize: '22px',
                color: 'var(--ink)',
                lineHeight: 1.4,
                letterSpacing: '-0.01em',
              }}
            >
              事業内容
            </h2>
          </div>
          <div style={{ flex: 1, paddingTop: '4px', maxWidth: '640px' }}>
            <p style={{ fontFamily: 'var(--f-jp)', fontSize: '14px', color: 'var(--ink-mute)', lineHeight: 1.9 }}>
              私たちが挑み続けるフィールド——DX推進による業務変革、デジタルマーケティングによる顧客体験の最大化、
              そしてDX×マーケティングの融合が生む新たな価値創造。この3つの領域で、地域企業の未来を共に創ります。
            </p>
          </div>
        </div>

        {/* Service list */}
        <div style={{ borderTop: '1px solid var(--hair)' }}>
          {services.map((service, i) => (
            <ServiceRow key={i} service={service} last={i === services.length - 1} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .business-header {
            flex-direction: column !important;
            gap: 16px !important;
          }
          .business-header > div:first-child {
            width: auto !important;
          }
          .service-row {
            flex-direction: column !important;
            gap: 12px !important;
          }
          .service-row .service-no-col {
            width: auto !important;
          }
          .service-row .service-arrow {
            align-self: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}

function ServiceRow({ service, last }: { service: (typeof services)[0]; last: boolean }) {
  const rowRef = useRef<HTMLAnchorElement>(null);

  const onEnter = () => {
    const row = rowRef.current;
    if (!row) return;
    row.style.paddingLeft = '20px';
    const ja = row.querySelector<HTMLElement>('.service-ja');
    if (ja) ja.style.color = 'var(--accent)';
    const arrow = row.querySelector<HTMLElement>('.service-arrow');
    if (arrow) {
      arrow.style.borderColor = 'var(--ink)';
      arrow.style.color = 'var(--ink)';
    }
  };
  const onLeave = () => {
    const row = rowRef.current;
    if (!row) return;
    row.style.paddingLeft = '0';
    const ja = row.querySelector<HTMLElement>('.service-ja');
    if (ja) ja.style.color = 'var(--ink)';
    const arrow = row.querySelector<HTMLElement>('.service-arrow');
    if (arrow) {
      arrow.style.borderColor = 'var(--hair)';
      arrow.style.color = 'var(--ink-mute)';
    }
  };

  return (
    <Link
      href={service.href}
      ref={rowRef}
      className="service-row"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        display: 'flex',
        gap: '40px',
        padding: '40px 0',
        borderBottom: last ? 'none' : '1px solid var(--hair)',
        textDecoration: 'none',
        transition: 'padding-left 0.35s cubic-bezier(0.34,1.56,0.64,1)',
        alignItems: 'flex-start',
      }}
    >
      {/* Number */}
      <div className="service-no-col" style={{ width: '180px', flexShrink: 0, paddingTop: '8px' }}>
        <span
          style={{
            fontFamily: 'var(--f-mono)',
            fontSize: '12px',
            color: 'var(--ink-mute)',
            letterSpacing: '0.08em',
          }}
        >
          {service.no}
        </span>
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        <h3
          className="service-title"
          style={{
            fontFamily: 'var(--f-display)',
            fontSize: 'clamp(26px, 3vw, 44px)',
            color: 'var(--ink)',
            lineHeight: 1.15,
            marginBottom: '10px',
            fontWeight: 400,
            letterSpacing: '-0.01em',
          }}
          dangerouslySetInnerHTML={{ __html: service.titleHtml }}
        />
        <p
          className="service-ja"
          style={{
            fontFamily: 'var(--f-jp)',
            fontSize: '13px',
            color: 'var(--ink)',
            marginBottom: '14px',
            transition: 'color 0.3s',
            fontWeight: 700,
            letterSpacing: '0.02em',
          }}
        >
          {service.ja}
        </p>
        <p
          style={{
            fontFamily: 'var(--f-jp)',
            fontSize: '14px',
            color: 'var(--ink-mute)',
            lineHeight: 1.9,
            marginBottom: '18px',
            maxWidth: '560px',
          }}
        >
          {service.desc}
        </p>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {service.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: 'var(--f-mono)',
                fontSize: '10px',
                letterSpacing: '0.06em',
                border: '1px solid var(--hair)',
                borderRadius: '4px',
                padding: '4px 10px',
                color: 'var(--ink-mute)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Arrow */}
      <div style={{ display: 'flex', alignItems: 'center', paddingTop: '8px' }}>
        <div
          className="service-arrow"
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            border: '1px solid var(--hair)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--ink-mute)',
            transition: 'border-color 0.2s ease, color 0.2s ease',
            fontSize: '14px',
          }}
        >
          →
        </div>
      </div>

      <style>{`
        .service-title em { font-style: italic; color: var(--accent); }
      `}</style>
    </Link>
  );
}
