'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    glow: 'rgba(109,40,217,0.28)',
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
    glow: 'rgba(29,78,216,0.28)',
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
    glow: 'rgba(15,118,110,0.28)',
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
      /* ── Parallax band: back layers lag furthest behind the scroll ── */
      const stage = sectionRef.current!.querySelector('[data-parallax-layers]');
      if (stage && !prefersReduce) {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: stage, start: '0% 0%', end: '100% 0%', scrub: 0 },
        });
        const layers = [
          { layer: '1', yPercent: 38 },
          { layer: '2', yPercent: 26 },
          { layer: '3', yPercent: 14 },
          { layer: '4', yPercent: 4 },
        ];
        layers.forEach((l, i) => {
          tl.to(
            stage.querySelectorAll(`[data-parallax-layer="${l.layer}"]`),
            { yPercent: l.yPercent, ease: 'none' },
            i === 0 ? undefined : '<'
          );
        });
      }

      /* ── Floating background blobs — slow drifting motion ── */
      if (!prefersReduce) {
        gsap.to('.works-blob-1', {
          y: 46, x: 28, duration: 11, yoyo: true, repeat: -1, ease: 'sine.inOut',
        });
        gsap.to('.works-blob-2', {
          y: -38, x: -22, duration: 9, yoyo: true, repeat: -1, ease: 'sine.inOut',
        });
      }

      /* ── Cards fade up on entry ── */
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

  return (
    <section
      ref={sectionRef}
      id="works"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F5F8FF 40%, #EAF0FF 100%)',
        position: 'relative',
        overflow: 'hidden',
        paddingBottom: 'clamp(80px, 10vw, 140px)',
      }}
    >
      {/* ── Drifting background blobs ── */}
      <div
        aria-hidden
        className="works-blob-1"
        style={{
          position: 'absolute',
          top: '30%',
          left: '-140px',
          width: '460px',
          height: '460px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 50% 50%, rgba(109,40,217,0.13) 0%, transparent 65%)',
          filter: 'blur(52px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        aria-hidden
        className="works-blob-2"
        style={{
          position: 'absolute',
          bottom: '-100px',
          right: '-120px',
          width: '520px',
          height: '520px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 50% 50%, rgba(46,110,255,0.16) 0%, transparent 65%)',
          filter: 'blur(56px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* ────────── Parallax header band ────────── */}
      <div
        data-parallax-layers
        className="works-parallax"
        style={{
          position: 'relative',
          height: 'clamp(260px, 32vh, 360px)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
        }}
      >
        {/* Layer 1 — furthest back: soft accent glow */}
        <div data-parallax-layer="1" aria-hidden className="works-layer">
          <div
            style={{
              width: 'clamp(340px, 46vw, 600px)',
              height: 'clamp(340px, 46vw, 600px)',
              borderRadius: '50%',
              background:
                'radial-gradient(circle at 50% 50%, rgba(46,110,255,0.24) 0%, rgba(46,110,255,0.07) 45%, transparent 70%)',
              filter: 'blur(46px)',
            }}
          />
        </div>

        {/* Layer 2 — dashed orbit rings */}
        <div data-parallax-layer="2" aria-hidden className="works-layer">
          <svg
            viewBox="0 0 560 560"
            fill="none"
            style={{ width: 'clamp(280px, 38vw, 460px)', height: 'auto', opacity: 0.45 }}
          >
            <circle cx="280" cy="280" r="272" stroke="rgba(46,110,255,0.20)" strokeWidth="1" />
            <circle
              cx="280"
              cy="280"
              r="196"
              stroke="rgba(46,110,255,0.28)"
              strokeWidth="1"
              strokeDasharray="4 12"
            />
            <circle cx="280" cy="280" r="120" stroke="rgba(46,110,255,0.14)" strokeWidth="1" />
          </svg>
        </div>

        {/* Layer 3 — title block */}
        <div data-parallax-layer="3" className="works-layer">
          <div className="container-custom" style={{ width: '100%' }}>
            <p
              style={{
                fontFamily: 'var(--f-mono)',
                fontSize: '10px',
                letterSpacing: '0.16em',
                color: 'var(--accent)',
                textTransform: 'uppercase',
                marginBottom: '14px',
              }}
            >
              — Works
            </p>
            <h2
              style={{
                fontFamily: 'var(--f-jp)',
                fontWeight: 700,
                fontSize: 'clamp(32px, 4.6vw, 60px)',
                color: 'var(--ink)',
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: '16px',
              }}
            >
              実績
            </h2>
            <p
              style={{
                fontFamily: 'var(--f-jp)',
                fontSize: '15px',
                color: 'var(--ink-sub)',
                lineHeight: 1.9,
                maxWidth: '540px',
              }}
            >
              地方の現場で、実際に動いているものを。
              <br className="works-br" />
              業種も規模も異なる課題に、一つずつ向き合ってきました。
            </p>
          </div>
        </div>

        {/* Layer 4 — foreground marker, tracks the scroll most closely */}
        <div
          data-parallax-layer="4"
          aria-hidden
          className="works-layer"
          style={{ alignItems: 'flex-end', paddingBottom: '26px' }}
        >
          <div className="container-custom" style={{ width: '100%' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                fontFamily: 'var(--f-mono)',
                fontSize: '10px',
                letterSpacing: '0.18em',
                color: 'var(--ink-mute)',
                textTransform: 'uppercase',
              }}
            >
              Selected Projects
              <span style={{ flex: 1, maxWidth: '160px', height: '1px', background: 'var(--hair)' }} />
            </div>
          </div>
        </div>
      </div>

      {/* ────────── Work cards ────────── */}
      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
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
        .works-layer {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          will-change: transform;
        }
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
        @media (max-width: 900px) {
          .works-grid { grid-template-columns: 1fr !important; }
          .works-br { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .works-layer { transform: none !important; }
          .work-card,
          .work-card.is-live { transform: none !important; transition: none; }
          .work-card.is-live .wc-bar { animation: none; }
        }
      `}</style>
    </section>
  );
}
