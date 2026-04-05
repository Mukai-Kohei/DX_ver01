'use client';

import Link from 'next/link';

/* ────────────────────────────────────────────────────────────
   マーケティングDX ページ
──────────────────────────────────────────────────────────── */
export default function DigitalMarketingPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#f3f4f6',
        fontFamily: "'Hiragino Kaku Gothic ProN','Noto Sans JP',sans-serif",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* ── 全コンテンツを一つのセンタリングコンテナで包む ── */}
      <div style={{ width: '100%', maxWidth: 1024, padding: '24px 24px 48px', boxSizing: 'border-box' }}>

        {/* ── ナビバー ── */}
        <nav style={{ marginBottom: 16 }}>
          <Link
            href="/"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#64748b', textDecoration: 'none' }}
          >
            <ChevronLeft />
            トップページに戻る
          </Link>
        </nav>

        {/* ── ページヘッダー（丸角カード） ── */}
        <header style={{ background: '#1e293b', color: '#fff', borderRadius: 16, overflow: 'hidden', marginBottom: 28 }}>
          <div style={{ padding: '28px 28px 24px' }}>
            <h1 style={{ fontSize: 'clamp(20px, 4vw, 28px)', fontWeight: 700, marginBottom: 8, lineHeight: 1.3 }}>
              マーケティングDX
            </h1>
            <p style={{ fontSize: 'clamp(12px, 2vw, 14px)', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
              MA（マーケティングオートメーション）× LINE活用による「集客・育成・ファン化」の自動仕組み化
            </p>
          </div>
          <div style={{ height: 4, background: 'linear-gradient(90deg, #0057B8, #10b981)' }} />
        </header>

        {/* ── As-Is ── */}
        <section style={{ marginBottom: 28 }}>
          <SectionLabel color="#dc2626" text="As-Is" label="現状の課題：集客のバラつきと追客漏れによる機会損失" />
          <div style={{ background: '#fff1f2', border: '1px solid #fecaca', borderRadius: 16, padding: 20 }}>
            <CardRow>
              <IssueCard
                icon={<MegaphoneIcon />}
                title="認知・集客"
                badge="単発の広告・宣伝"
                body="チラシやSNSで発信しても、興味を持った人を「顧客データ」として蓄積できていない。"
              />
              <Arrow color="#ef4444" />
              <IssueCard
                icon={<UserMinusIcon />}
                title="リード育成（追客）"
                badge="待ちの姿勢・アナログ"
                body="体験会に来た人へのフォローが手動。継続的なアプローチができず、熱が冷めてしまう。"
              />
              <Arrow color="#ef4444" />
              <IssueCard
                icon={<FrownIcon />}
                title="会員化・リピート"
                badge="入会率・定着率の低迷"
                body="新規顧客が定着せず、常に「新規獲得」に走り続けなければならない悪循環。"
                bodyBold
              />
            </CardRow>
          </div>
        </section>

        {/* ── 変革バナー ── */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, marginBottom: 28 }}>
          <div style={{
            background: 'linear-gradient(135deg,#059669,#047857)',
            color: '#fff',
            fontWeight: 700,
            padding: '12px 28px',
            borderRadius: 40,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            fontSize: 'clamp(13px, 2.5vw, 15px)',
            boxShadow: '0 4px 12px rgba(5,150,105,0.35)',
            textAlign: 'center',
          }}>
            <SparklesIcon />
            MA × LINEステップ配信による自動ナーチャリング
          </div>
          <div style={{
            width: 0, height: 0,
            borderLeft: '14px solid transparent',
            borderRight: '14px solid transparent',
            borderTop: '18px solid #059669',
          }} />
        </div>

        {/* ── To-Be ── */}
        <section style={{ marginBottom: 28 }}>
          <SectionLabel color="#059669" text="To-Be" label="DX化後の姿：自動で「ファン」が育ち、会員が増え続ける仕組み" />
          <div style={{ background: '#f0fdf4', border: '1px solid #a7f3d0', borderRadius: 16, padding: 20 }}>
            <CardRow>
              <SolutionCard
                icon={<QrCodeIcon />}
                title="LINE友だち登録"
                badge="顧客リストの自動蓄積"
                badgeCheck
                body="SNSや店舗QRからLINEへ。登録と同時にアンケート（ゴルフ歴・悩み）を自動回収。"
              />
              <Arrow color="#059669" green />
              <StepCard />
              <Arrow color="#059669" green />
              <SolutionCard
                icon={<TrophyIcon />}
                title="高LTV会員の創出"
                badge="ストック型収益の安定"
                badgeCheck
                body="自動ナーチャリングにより「通う理由」が醸成され、高い入会率と継続率を実現。"
              />
            </CardRow>
          </div>
        </section>

        {/* ── 効果まとめ ── */}
        <section
          style={{
            background: 'linear-gradient(135deg,#1e293b,#0f172a)',
            borderRadius: 16,
            padding: '20px 24px',
            color: '#fff',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, fontSize: 15, marginBottom: 16 }}>
            <TargetIcon />
            導入により期待される効果
          </div>
          <div className="effects-grid">
            {[
              { label: '追客漏れ', value: 'ゼロへ', color: '#6ee7b7' },
              { label: '体験→入会率', value: '1.5倍〜', color: '#6ee7b7' },
              { label: '販促業務', value: '完全自動化', color: '#fde68a' },
            ].map(({ label, value, color }) => (
              <div
                key={label}
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 12,
                  padding: '14px 12px',
                  textAlign: 'center',
                }}
              >
                <p style={{ fontSize: 12, color: '#94a3b8', marginBottom: 4 }}>{label}</p>
                <p style={{ fontSize: 20, fontWeight: 700, color, margin: 0 }}>{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <p style={{ fontSize: 13, color: '#64748b', marginBottom: 16 }}>
            この仕組みを貴社でも導入してみませんか？
          </p>
          <Link
            href="/#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: '#0057B8',
              color: '#fff',
              fontWeight: 700,
              padding: '12px 32px',
              borderRadius: 40,
              textDecoration: 'none',
              fontSize: 14,
              boxShadow: '0 4px 12px rgba(0,87,184,0.35)',
            }}
          >
            お問い合わせはこちら
            <ChevronRight />
          </Link>
        </div>
      </div>

      {/* ── responsive styles ── */}
      <style>{`
        .card-row {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .card-row > .card-item {
          width: 100%;
        }
        .card-row > .arrow-h { display: none; }
        .card-row > .arrow-v { display: flex; }
        .effects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
        }
        @media (min-width: 640px) {
          .effects-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (min-width: 900px) {
          .card-row {
            flex-direction: row;
            align-items: stretch;
          }
          .card-row > .card-item {
            flex: 1;
          }
          .card-row > .arrow-h { display: flex; }
          .card-row > .arrow-v { display: none; }
        }
      `}</style>
    </div>
  );
}

/* ────────────── Layout helpers ────────────── */

function SectionLabel({ color, text, label }: { color: string; text: string; label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
      <span style={{
        background: color,
        color: '#fff',
        fontSize: 13,
        fontWeight: 700,
        padding: '3px 14px',
        borderRadius: 20,
        whiteSpace: 'nowrap',
        flexShrink: 0,
      }}>
        {text}
      </span>
      <span style={{ fontSize: 'clamp(13px, 2.5vw, 16px)', fontWeight: 700, color: '#334155' }}>
        {label}
      </span>
    </div>
  );
}

function CardRow({ children }: { children: React.ReactNode }) {
  return <div className="card-row">{children}</div>;
}

function Arrow({ color, green = false }: { color: string; green?: boolean }) {
  return (
    <>
      {/* horizontal arrow (desktop) */}
      <div className="arrow-h" style={{ alignItems: 'center', justifyContent: 'center', flexShrink: 0, width: 36 }}>
        <div style={{
          width: 32, height: 32, borderRadius: '50%',
          background: green ? '#d1fae5' : '#fee2e2',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </div>
      </div>
      {/* vertical arrow (mobile) */}
      <div className="arrow-v" style={{ justifyContent: 'center' }}>
        <div style={{
          width: 0, height: 0,
          borderLeft: '10px solid transparent',
          borderRight: '10px solid transparent',
          borderTop: `14px solid ${color}`,
          opacity: 0.5,
        }} />
      </div>
    </>
  );
}

/* ────────────── Card components ────────────── */

function IssueCard({
  icon, title, badge, body, bodyBold = false,
}: {
  icon: React.ReactNode; title: string; badge: string; body: string; bodyBold?: boolean;
}) {
  return (
    <div className="card-item" style={{
      background: '#fff',
      border: '1px solid #fecaca',
      borderRadius: 12,
      padding: '20px 16px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    }}>
      <div style={{ marginBottom: 10 }}>{icon}</div>
      <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1e293b', marginBottom: 8 }}>{title}</h3>
      <span style={{
        display: 'block', width: '100%',
        background: '#fee2e2', color: '#991b1b',
        fontSize: 12, fontWeight: 700,
        padding: '6px 12px', borderRadius: 20, marginBottom: 10,
      }}>
        {badge}
      </span>
      <p style={{ fontSize: 13, lineHeight: 1.7, margin: 0, color: bodyBold ? '#dc2626' : '#64748b', fontWeight: bodyBold ? 600 : 400 }}>
        {body}
      </p>
    </div>
  );
}

function SolutionCard({
  icon, title, badge, badgeCheck = false, body,
}: {
  icon: React.ReactNode; title: string; badge: string; badgeCheck?: boolean; body: string;
}) {
  return (
    <div className="card-item" style={{
      background: '#fff',
      border: '2px solid #a7f3d0',
      borderRadius: 12,
      padding: '20px 16px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    }}>
      <div style={{ marginBottom: 10 }}>{icon}</div>
      <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1e293b', marginBottom: 8 }}>{title}</h3>
      <span style={{
        display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', gap: 4,
        background: '#d1fae5', color: '#065f46',
        fontSize: 12, fontWeight: 700,
        padding: '6px 12px', borderRadius: 20, marginBottom: 10,
        boxSizing: 'border-box',
      }}>
        {badgeCheck && <CheckIcon />}
        {badge}
      </span>
      <p style={{ fontSize: 13, lineHeight: 1.7, margin: 0, color: '#4b5563' }}>
        {body}
      </p>
    </div>
  );
}

function StepCard() {
  return (
    <div className="card-item" style={{
      background: 'linear-gradient(145deg,#059669,#047857)',
      borderRadius: 12,
      padding: '20px 16px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      color: '#fff',
    }}>
      <BotIcon />
      <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>ステップ配信（MA）</h3>
      <div style={{
        background: 'rgba(0,0,0,0.2)',
        borderRadius: 6,
        padding: '6px 12px',
        fontSize: 12,
        fontWeight: 700,
        width: '100%',
        marginBottom: 14,
        boxSizing: 'border-box',
      }}>
        シナリオ別の自動教育
      </div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, width: '100%', textAlign: 'left', color: '#d1fae5' }}>
        {[
          '1日目：歓迎動画とクーポン配布',
          '3日目：最新シミュレーターの凄さ',
          '7日目：会員限定の体験会招待',
        ].map((s) => (
          <li key={s} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8, fontSize: 13 }}>
            <span style={{
              flexShrink: 0, width: 16, height: 16, marginTop: 1,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 9, color: '#fff',
            }}>✓</span>
            {s}
          </li>
        ))}
        <li style={{ fontSize: 11, opacity: 0.6, paddingLeft: 24 }}>※未開封者には別ルートで再送</li>
      </ul>
    </div>
  );
}

/* ────────────── Icons ────────────── */

const S = { width: 36, height: 36, viewBox: '0 0 24 24', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

function MegaphoneIcon() {
  return <svg {...S} stroke="#ef4444"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>;
}
function UserMinusIcon() {
  return (
    <svg {...S} stroke="#ef4444">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="22" y1="11" x2="16" y2="11"/>
    </svg>
  );
}
function FrownIcon() {
  return (
    <svg {...S} stroke="#ef4444">
      <circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
    </svg>
  );
}
function QrCodeIcon() {
  return (
    <svg {...S} stroke="#059669">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      <rect x="14" y="14" width="3" height="3"/><line x1="17" y1="17" x2="20" y2="17"/><line x1="20" y1="14" x2="20" y2="17"/>
    </svg>
  );
}
function BotIcon() {
  return (
    <svg {...S} stroke="#fde68a" style={{ marginBottom: 10 }}>
      <rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/>
      <line x1="12" y1="7" x2="12" y2="11"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/>
    </svg>
  );
}
function TrophyIcon() {
  return (
    <svg {...S} stroke="#059669">
      <polyline points="8 21 12 17 16 21"/><line x1="12" y1="17" x2="12" y2="11"/>
      <path d="M7 4H4a2 2 0 0 0-2 2v2c0 4 3 7 7 7s7-3 7-7V6a2 2 0 0 0-2-2h-3"/>
      <rect x="7" y="2" width="10" height="4" rx="1"/>
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}
function SparklesIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fde68a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z"/>
    </svg>
  );
}
function TargetIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
    </svg>
  );
}
function ChevronLeft() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6"/>
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  );
}
