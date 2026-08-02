'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * 実績。クライアント名は業種・規模のみに置き換えて掲載しています。
 */
const works = [
  {
    no: '01',
    title: 'シフト作成の自動化',
    client: 'グループホーム運営事業者様（入居者90名・9棟）',
    tag: 'SYSTEM / AUTOMATION',
    issue:
      '毎月のシフト作成が属人化し、担当者ひとりに負荷が集中していました。雇用形態ごとの労働時間の上限管理も、すべて手作業で確認していました。',
    action:
      '勤務希望からシフトのたたき台を自動生成し、人員の不足・超過をその場でアラート表示。雇用形態ごとの労働時間の上限も自動でチェックします。普段お使いのスプレッドシート上で完結する構成にしました。',
    results: ['作成時間を短縮', '属人化を解消', '現在も自社で運用中'],
    accent: '#6d28d9',
    accentSoft: 'rgba(109,40,217,0.10)',
  },
  {
    no: '02',
    title: '訪問美容師の派遣マッチング',
    client: '訪問美容サービス事業者様 ／ 提携美容室様',
    tag: 'LINE / MATCHING',
    issue:
      '予約の電話対応と美容師の手配がすべて手作業で、担当者が確定するまでに時間がかかっていました。書類の発行・送付も都度対応が必要でした。',
    action:
      '公式LINEだけで登録・予約・マッチングまで完結する仕組みを構築。24時間予約を受け付け、確定後は即時通知。登録用QRコードと労働条件通知書のPDFも自動生成し、キャンセル時は自動で代替の美容師を再募集します。',
    results: ['電話対応が不要に', '手配を当日中に確定', '書類の発行・送付も自動化'],
    accent: '#1d4ed8',
    accentSoft: 'rgba(29,78,216,0.10)',
  },
  {
    no: '03',
    title: 'ホームページ制作',
    client: '焙煎珈琲店様（栃木）／ 地域イベント支援会社様 ほか',
    tag: 'WEB / DESIGN',
    issue:
      '何をしている会社なのかが、初めて訪れた人に伝わらない。つくり手のこだわりが、そのまま言葉になっていない状態でした。',
    action:
      'その会社が大事にしていることを起点に構成を設計。つくり手の世界観をそのまま伝えるサイト、10秒で事業内容が伝わるサイトなど、業種ごとの強みから逆算して情報を組み立てました。',
    results: ['BtoCの小売からBtoBの支援業まで', '業種を問わず対応', '自社サイトも自社で制作・運用'],
    accent: '#0f766e',
    accentSoft: 'rgba(15,118,110,0.10)',
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
          { layer: '1', yPercent: 55 },
          { layer: '2', yPercent: 38 },
          { layer: '3', yPercent: 22 },
          { layer: '4', yPercent: 6 },
        ];
        layers.forEach((l, i) => {
          tl.to(
            stage.querySelectorAll(`[data-parallax-layer="${l.layer}"]`),
            { yPercent: l.yPercent, ease: 'none' },
            i === 0 ? undefined : '<'
          );
        });
      }

      /* ── Rows fade up on entry ── */
      gsap.fromTo(
        sectionRef.current!.querySelectorAll('.work-row'),
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.works-list', start: 'top 80%', once: true },
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
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F9FF 42%, #EEF3FF 100%)',
        position: 'relative',
      }}
    >
      {/* ────────── Parallax header band ────────── */}
      <div
        data-parallax-layers
        className="works-parallax"
        style={{
          position: 'relative',
          height: 'clamp(440px, 56vh, 620px)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Layer 1 — furthest back: soft accent glow */}
        <div
          data-parallax-layer="1"
          aria-hidden
          className="works-layer"
          style={{ willChange: 'transform' }}
        >
          <div
            style={{
              width: 'clamp(420px, 60vw, 760px)',
              height: 'clamp(420px, 60vw, 760px)',
              borderRadius: '50%',
              background:
                'radial-gradient(circle at 50% 50%, rgba(46,110,255,0.28) 0%, rgba(46,110,255,0.08) 45%, transparent 70%)',
              filter: 'blur(50px)',
            }}
          />
        </div>

        {/* Layer 2 — dashed orbit rings */}
        <div
          data-parallax-layer="2"
          aria-hidden
          className="works-layer"
          style={{ willChange: 'transform' }}
        >
          <svg
            width="clamp(320px, 48vw, 560px)"
            viewBox="0 0 560 560"
            fill="none"
            style={{ width: 'clamp(320px, 48vw, 560px)', height: 'auto', opacity: 0.5 }}
          >
            <circle cx="280" cy="280" r="272" stroke="rgba(46,110,255,0.22)" strokeWidth="1" />
            <circle
              cx="280"
              cy="280"
              r="196"
              stroke="rgba(46,110,255,0.30)"
              strokeWidth="1"
              strokeDasharray="4 12"
            />
            <circle cx="280" cy="280" r="120" stroke="rgba(46,110,255,0.16)" strokeWidth="1" />
          </svg>
        </div>

        {/* Layer 3 — title block */}
        <div data-parallax-layer="3" className="works-layer" style={{ willChange: 'transform' }}>
          <div
            className="container-custom"
            style={{ width: '100%', textAlign: 'center', pointerEvents: 'auto' }}
          >
            <p
              style={{
                fontFamily: 'var(--f-mono)',
                fontSize: '10px',
                letterSpacing: '0.16em',
                color: 'var(--accent)',
                textTransform: 'uppercase',
                marginBottom: '18px',
              }}
            >
              — Works
            </p>
            <h2
              style={{
                fontFamily: 'var(--f-jp)',
                fontWeight: 900,
                fontSize: 'clamp(40px, 7vw, 92px)',
                color: 'var(--ink)',
                lineHeight: 1.1,
                letterSpacing: '-0.04em',
                marginBottom: '24px',
              }}
            >
              実績
            </h2>
            <p
              style={{
                fontFamily: 'var(--f-jp)',
                fontSize: 'clamp(13px, 1.4vw, 15px)',
                color: 'var(--ink-sub)',
                lineHeight: 2.0,
                maxWidth: '560px',
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
          style={{ alignItems: 'flex-end', paddingBottom: '48px', willChange: 'transform' }}
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
            <span style={{ width: '40px', height: '1px', background: 'var(--hair)' }} />
            Selected Projects
            <span style={{ width: '40px', height: '1px', background: 'var(--hair)' }} />
          </div>
        </div>

        {/* Bottom fade into the list area */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: '140px',
            background: 'linear-gradient(to top, #F7F9FF 0%, rgba(247,249,255,0) 100%)',
            pointerEvents: 'none',
            zIndex: 5,
          }}
        />
      </div>

      {/* ────────── Work list ────────── */}
      <div
        className="container-custom works-list"
        style={{ paddingBottom: 'clamp(80px, 10vw, 140px)', position: 'relative', zIndex: 6 }}
      >
        <div style={{ borderTop: '1px solid var(--hair)' }}>
          {works.map((w) => (
            <article
              key={w.no}
              className="work-row"
              style={{
                opacity: 0,
                display: 'flex',
                gap: 'clamp(20px, 3vw, 44px)',
                padding: 'clamp(32px, 4vw, 52px) 0',
                borderBottom: '1px solid var(--hair)',
              }}
            >
              {/* Number */}
              <div className="work-no-col" style={{ width: '64px', flexShrink: 0 }}>
                <span
                  style={{
                    fontFamily: 'var(--f-mono)',
                    fontSize: '13px',
                    letterSpacing: '0.08em',
                    color: w.accent,
                  }}
                >
                  {w.no}
                </span>
              </div>

              {/* Body */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  className="work-head"
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '16px',
                    flexWrap: 'wrap',
                    marginBottom: '8px',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--f-jp)',
                      fontSize: 'clamp(20px, 2.2vw, 32px)',
                      fontWeight: 700,
                      color: 'var(--ink)',
                      lineHeight: 1.25,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {w.title}
                  </h3>
                  <span
                    style={{
                      fontFamily: 'var(--f-mono)',
                      fontSize: '10px',
                      letterSpacing: '0.10em',
                      color: w.accent,
                      background: w.accentSoft,
                      border: `1px solid ${w.accentSoft.replace('0.10', '0.28')}`,
                      borderRadius: '4px',
                      padding: '4px 10px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {w.tag}
                  </span>
                </div>

                <p
                  style={{
                    fontFamily: 'var(--f-jp)',
                    fontSize: '13px',
                    color: 'var(--ink-mute)',
                    marginBottom: '24px',
                    lineHeight: 1.7,
                  }}
                >
                  {w.client}
                </p>

                <div
                  className="work-cols"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 'clamp(20px, 3vw, 48px)',
                    marginBottom: '24px',
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: 'var(--f-mono)',
                        fontSize: '10px',
                        letterSpacing: '0.14em',
                        color: 'var(--ink-mute)',
                        textTransform: 'uppercase',
                        marginBottom: '10px',
                      }}
                    >
                      課題
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--f-jp)',
                        fontSize: '14px',
                        lineHeight: 1.95,
                        color: 'var(--ink-sub)',
                      }}
                    >
                      {w.issue}
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: 'var(--f-mono)',
                        fontSize: '10px',
                        letterSpacing: '0.14em',
                        color: 'var(--ink-mute)',
                        textTransform: 'uppercase',
                        marginBottom: '10px',
                      }}
                    >
                      打ち手
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--f-jp)',
                        fontSize: '14px',
                        lineHeight: 1.95,
                        color: 'var(--ink-sub)',
                      }}
                    >
                      {w.action}
                    </p>
                  </div>
                </div>

                {/* Results */}
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    gap: '8px',
                    flexWrap: 'wrap',
                    margin: 0,
                    padding: 0,
                  }}
                >
                  {w.results.map((r) => (
                    <li
                      key={r}
                      style={{
                        fontFamily: 'var(--f-jp)',
                        fontSize: '12.5px',
                        color: w.accent,
                        background: w.accentSoft,
                        borderRadius: '9999px',
                        padding: '6px 16px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '7px',
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
            fontSize: '13px',
            color: 'var(--ink-mute)',
            lineHeight: 1.9,
            marginTop: '28px',
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
        }
        @media (max-width: 900px) {
          .work-cols { grid-template-columns: 1fr !important; }
          .works-br { display: none; }
        }
        @media (max-width: 560px) {
          .work-row { gap: 14px !important; }
          .work-no-col { width: 40px !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .works-layer { transform: none !important; }
        }
      `}</style>
    </section>
  );
}
