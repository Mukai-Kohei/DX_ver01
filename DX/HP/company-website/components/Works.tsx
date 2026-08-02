'use client';

import { useEffect, useRef } from 'react';
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
  },
];

export default function Works() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      /* ── Parallax band: back layers lag furthest behind the scroll ── */
      const stage = sectionRef.current!.querySelector('[data-parallax-layers]');
      if (stage) {
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

      /* ── Cards fade up on entry ── */
      gsap.fromTo(
        sectionRef.current!.querySelectorAll('.work-card'),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.works-grid', start: 'top 85%', once: true },
        }
      );
    }, sectionRef);

    // Reverting the context kills only the ScrollTriggers created inside it,
    // leaving the other sections' triggers (and the page-level Lenis) intact.
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="works"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 45%, #EEF3FF 100%)',
        position: 'relative',
        paddingBottom: 'clamp(80px, 10vw, 140px)',
      }}
    >
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
          <div className="container-custom" style={{ width: '100%', textAlign: 'center' }}>
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
                margin: '0 auto',
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
            <span style={{ width: '32px', height: '1px', background: 'var(--hair)' }} />
            Selected Projects
            <span style={{ width: '32px', height: '1px', background: 'var(--hair)' }} />
          </div>
        </div>
      </div>

      {/* ────────── Work cards ────────── */}
      <div className="container-custom">
        <div
          className="works-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(16px, 1.8vw, 24px)',
            alignItems: 'start',
          }}
        >
          {works.map((w) => (
            <article
              key={w.no}
              className="work-card"
              style={{
                opacity: 0,
                background: '#FFFFFF',
                border: '1px solid var(--hair)',
                borderRadius: '14px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Accent bar */}
              <div aria-hidden style={{ height: '3px', background: w.accent }} />

              <div
                style={{
                  padding: 'clamp(22px, 2.4vw, 30px)',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
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
        @media (max-width: 900px) {
          .works-grid { grid-template-columns: 1fr !important; }
          .works-br { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .works-layer { transform: none !important; }
        }
      `}</style>
    </section>
  );
}
