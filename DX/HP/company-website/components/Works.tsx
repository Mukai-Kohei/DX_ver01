'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WaveBackground } from './ui/WaveBackground';

gsap.registerPlugin(ScrollTrigger);

/**
 * 実績。クライアント名は業種・規模の表記に置き換えて掲載しています。
 */
const works = [
  {
    no: '01',
    title: 'シフト作成の自動化',
    client: 'グループホーム運営事業者様（入居者90名・9棟）',
    tag: 'SYSTEM / AUTOMATION',
    summary:
      '属人化していた月次のシフト作成を、勤務希望からの自動生成に。人員の過不足と、雇用形態ごとの労働時間の上限も、その場で判定します。',
    results: ['作成時間を短縮', '属人化を解消', '現在も自社で運用中'],
    accent: '#6d28d9',
    accentSoft: 'rgba(109,40,217,0.08)',
    glow: 'rgba(109,40,217,0.20)',
    ring: 'rgba(167,139,250,0.65)',
  },
  {
    no: '02',
    title: '訪問美容師の派遣マッチング',
    client: '訪問美容サービス事業者様 ／ 提携美容室様',
    tag: 'LINE / MATCHING',
    summary:
      '予約の電話対応と美容師の手配を、公式LINEだけで完結する仕組みに。24時間受付・即時通知に加え、書類の発行とキャンセル時の再募集も自動化しました。',
    results: ['電話対応が不要に', '手配を当日中に確定', '書類の発行も自動化'],
    accent: '#1d4ed8',
    accentSoft: 'rgba(29,78,216,0.08)',
    glow: 'rgba(29,78,216,0.20)',
    ring: 'rgba(96,165,250,0.65)',
  },
  {
    no: '03',
    title: 'ホームページ制作',
    client: '焙煎珈琲店様（栃木）／ 地域イベント支援会社様 ほか',
    tag: 'WEB / DESIGN',
    summary:
      '何をしている会社かが伝わらない——その課題から逆算して構成を設計。つくり手の世界観や強みを、10秒で伝わる形に組み立てています。',
    results: ['BtoC・BtoBを問わず対応', '業種ごとに構成を設計', '自社サイトも自社で運用'],
    accent: '#0f766e',
    accentSoft: 'rgba(15,118,110,0.08)',
    glow: 'rgba(15,118,110,0.20)',
    ring: 'rgba(20,184,166,0.60)',
  },
];

export default function Works() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [liveIdx, setLiveIdx] = useState(0);
  const hoverRef = useRef(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll('.work-card'),
        { opacity: 0, y: 26 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.works-grid', start: 'top 85%', once: true },
        }
      );
    }, sectionRef);

    /* ── Auto-cycling highlight: keeps the grid alive without user input ── */
    const interval = prefersReduce
      ? undefined
      : setInterval(() => {
          if (!hoverRef.current) setLiveIdx((i) => (i + 1) % works.length);
        }, 3600);

    return () => {
      if (interval) clearInterval(interval);
      ctx.revert();
    };
  }, []);

  const current = works[liveIdx];

  return (
    <section
      ref={sectionRef}
      id="works"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FAFCFF 50%, #EEF3FF 100%)',
        padding: 'clamp(80px, 10vw, 140px) 0 clamp(60px, 8vw, 100px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Slow drifting waves */}
      <WaveBackground color="#DCE7FF" intensity={0.55} speed={1.15} style={{ zIndex: 0 }} />

      {/* Soft accent glow that shifts with the highlighted card */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '520px',
          height: '520px',
          background: `radial-gradient(circle at 50% 50%, ${current.glow} 0%, transparent 68%)`,
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
          transition: 'background 0.8s ease',
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header row — same structure as the Business section */}
        <div
          className="works-header"
          style={{ display: 'flex', gap: '40px', marginBottom: '72px', alignItems: 'flex-start' }}
        >
          <div style={{ width: '180px', flexShrink: 0 }}>
            <p
              style={{
                fontFamily: 'var(--f-mono)',
                fontSize: '10px',
                letterSpacing: '0.16em',
                color: 'var(--accent)',
                textTransform: 'uppercase',
                marginBottom: '10px',
              }}
            >
              — Works
            </p>
            <h2
              style={{
                fontFamily: 'var(--f-jp)',
                fontWeight: 700,
                fontSize: 'clamp(32px, 4vw, 52px)',
                color: 'var(--ink)',
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                whiteSpace: 'nowrap',
              }}
            >
              実績
            </h2>
          </div>
          <div style={{ flex: 1, paddingTop: '4px', maxWidth: '640px' }}>
            <p
              style={{
                fontFamily: 'var(--f-jp)',
                fontSize: '15px',
                color: 'var(--ink-sub)',
                lineHeight: 1.9,
              }}
            >
              地方の現場で、実際に動いているものを。業種も規模も異なる課題に、一つずつ向き合ってきました。
              ここでは、実際に稼働している取り組みを3つご紹介します。
            </p>
          </div>
        </div>

        {/* ────────── Work cards ────────── */}
        <div
          className="works-grid"
          onMouseEnter={() => { hoverRef.current = true; }}
          onMouseLeave={() => { hoverRef.current = false; }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(16px, 1.8vw, 24px)',
            alignItems: 'stretch',
          }}
        >
          {works.map((w, i) => (
            <article
              key={w.no}
              className={`work-card ${i === liveIdx ? 'is-live' : ''}`}
              onMouseEnter={() => setLiveIdx(i)}
              style={
                {
                  opacity: 0,
                  background: 'rgba(255,255,255,0.92)',
                  backdropFilter: 'blur(6px)',
                  WebkitBackdropFilter: 'blur(6px)',
                  border: '1px solid var(--hair)',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  '--wc-ring': w.ring,
                  '--wc-glow': w.glow,
                } as React.CSSProperties
              }
            >
              {/* Accent bar — shimmers while the card is live */}
              <div
                aria-hidden
                className="wc-bar"
                style={{
                  height: '3px',
                  background: `linear-gradient(90deg, ${w.accent} 0%, ${w.ring} 50%, ${w.accent} 100%)`,
                  backgroundSize: '200% 100%',
                  flexShrink: 0,
                }}
              />

              {/* Ghost number */}
              <span
                aria-hidden
                className="wc-ghost"
                style={{
                  position: 'absolute',
                  top: '2px',
                  right: '10px',
                  fontFamily: 'var(--f-display)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(72px, 7vw, 104px)',
                  lineHeight: 1,
                  color: w.accent,
                  opacity: 0.07,
                  pointerEvents: 'none',
                  userSelect: 'none',
                }}
              >
                {w.no}
              </span>

              <div
                style={{
                  padding: 'clamp(22px, 2.4vw, 30px)',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  position: 'relative',
                }}
              >
                {/* Meta row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                    marginBottom: '16px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--f-mono)',
                      fontSize: '12px',
                      letterSpacing: '0.08em',
                      color: w.accent,
                    }}
                  >
                    {w.no}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--f-mono)',
                      fontSize: '9.5px',
                      letterSpacing: '0.10em',
                      color: w.accent,
                      background: w.accentSoft,
                      borderRadius: '4px',
                      padding: '4px 9px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {w.tag}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--f-jp)',
                    fontSize: 'clamp(19px, 1.7vw, 23px)',
                    fontWeight: 700,
                    color: 'var(--ink)',
                    lineHeight: 1.35,
                    letterSpacing: '-0.02em',
                    marginBottom: '8px',
                  }}
                >
                  {w.title}
                </h3>

                {/* Client */}
                <p
                  style={{
                    fontFamily: 'var(--f-jp)',
                    fontSize: '12px',
                    color: 'var(--ink-mute)',
                    lineHeight: 1.7,
                    marginBottom: '18px',
                  }}
                >
                  {w.client}
                </p>

                {/* Summary */}
                <p
                  style={{
                    fontFamily: 'var(--f-jp)',
                    fontSize: '13.5px',
                    color: 'var(--ink-sub)',
                    lineHeight: 1.9,
                    marginBottom: '22px',
                    flex: 1,
                  }}
                >
                  {w.summary}
                </p>

                {/* Results — hairline-divided list */}
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {w.results.map((r) => (
                    <li
                      key={r}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '11px 0',
                        borderBottom: '1px solid var(--hair)',
                        fontFamily: 'var(--f-jp)',
                        fontSize: '13px',
                        color: 'var(--ink-sub)',
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        aria-hidden
                        style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          background: w.accent,
                          flexShrink: 0,
                        }}
                      />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <p
          style={{
            fontFamily: 'var(--f-jp)',
            fontSize: '12px',
            color: 'var(--ink-mute)',
            lineHeight: 1.9,
            marginTop: '24px',
          }}
        >
          ※ 掲載にあたり、クライアント名は業種・規模の表記に置き換えています。
        </p>
      </div>

      <style>{`
        .work-card {
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 0.4s ease, border-color 0.4s ease;
        }
        .work-card.is-live {
          transform: translateY(-6px);
          border-color: var(--wc-ring);
          box-shadow: 0 18px 44px -16px var(--wc-glow);
        }
        .work-card.is-live .wc-bar {
          animation: wcShimmer 2.4s linear infinite;
        }
        @keyframes wcShimmer {
          0%   { background-position: 0% 0; }
          100% { background-position: -200% 0; }
        }
        @media (max-width: 980px) {
          .works-header {
            flex-direction: column !important;
            gap: 16px !important;
          }
          .works-header > div:first-child {
            width: auto !important;
          }
        }
        @media (max-width: 900px) {
          .works-grid { grid-template-columns: 1fr !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .work-card,
          .work-card.is-live { transform: none !important; transition: none; }
          .work-card.is-live .wc-bar { animation: none; }
        }
      `}</style>
    </section>
  );
}
