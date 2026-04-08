'use client';

import { useEffect } from 'react';
import Link from 'next/link';

/* ────────────────────────────────────────────────────────────
   月次決算・経理DX ページ
──────────────────────────────────────────────────────────── */
export default function DxSolutionPage() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: "'Hiragino Kaku Gothic ProN','Noto Sans JP',sans-serif" }}>

      {/* ── Blue gradient header band（TOPヒーローと同じグラデーション） ── */}
      <div style={{ background: 'linear-gradient(135deg,#001D4A 0%,#003D82 45%,#0057B8 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)',
          backgroundSize: '60px 60px' }} />
        <div style={{ position: 'relative', maxWidth: 1024, margin: '0 auto', padding: '20px 24px 36px', boxSizing: 'border-box' }}>
          <nav style={{ marginBottom: 20 }}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'rgba(255,255,255,0.70)', textDecoration: 'none' }}>
              <ChevronLeft />トップページに戻る
            </Link>
          </nav>
          <header style={{ background: 'rgba(255,255,255,0.09)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 16, overflow: 'hidden', color: '#fff' }}>
            <div style={{ padding: '28px 28px 24px' }}>
              <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.90)', padding: '3px 12px', borderRadius: 20, marginBottom: 12 }}>
                SOLUTION_01 ／ DX推進ソリューション
              </span>
              <h1 style={{ fontSize: 'clamp(18px, 4vw, 26px)', fontWeight: 700, marginBottom: 8, lineHeight: 1.3 }}>
                月次決算・経理DXによる自動化
              </h1>
              <p style={{ fontSize: 'clamp(12px, 2vw, 14px)', color: 'rgba(255,255,255,0.72)', lineHeight: 1.6, margin: 0 }}>
                社内業務の煩雑さを解消し、経営判断を加速するリアルタイム決算の実現
              </p>
            </div>
            <div style={{ height: 3, background: 'linear-gradient(90deg,#00A0E9,#2563eb)' }} />
          </header>
        </div>
      </div>

      {/* ── Content area ── */}
      <div style={{ background: '#f5f7fa', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '100%', maxWidth: 1024, padding: '32px 24px 48px', boxSizing: 'border-box' }}>

        {/* ── As-Is ── */}
        <section style={{ marginBottom: 28 }}>
          <SectionLabel color="#dc2626" text="As-Is" label="現状の課題：アナログ・手作業による遅延とミスの発生" />
          <div style={{ background: '#fff1f2', border: '1px solid #fecaca', borderRadius: 16, padding: 20 }}>
            <CardRow>
              <IssueCard
                icon={<HardHatIcon />}
                title="現場・各部署"
                badge="紙の請求書・手書き日報"
                body="本社への提出が遅れる。紛失リスクや社内業務の煩雑さの温床に。"
              />
              <Arrow color="#ef4444" />
              <IssueCard
                icon={<CalculatorIcon />}
                title="経理担当者"
                badge="目視確認 ＆ 手入力"
                body="勘違いによる会計入力ミスが発生。確認・修正作業に膨大な時間を取られる。"
              />
              <Arrow color="#ef4444" />
              <IssueCard
                icon={<UserTieIcon />}
                title="経営層（社長）"
                badge="月次決算の遅れ"
                body="正確な月次数値が欲しいタイミングで出せない。"
                bodyBold
              />
            </CardRow>
          </div>
        </section>

        {/* ── 変革バナー ── */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, marginBottom: 28 }}>
          <div style={{
            background: 'linear-gradient(135deg, #1d4ed8, #2563eb)',
            color: '#fff',
            fontWeight: 700,
            padding: '12px 28px',
            borderRadius: 40,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            fontSize: 'clamp(13px, 2.5vw, 15px)',
            boxShadow: '0 4px 12px rgba(37,99,235,0.35)',
            textAlign: 'center',
          }}>
            <ZapIcon />
            AIワークフロー・クラウドシステム連携による自動化
          </div>
          <div style={{
            width: 0, height: 0,
            borderLeft: '14px solid transparent',
            borderRight: '14px solid transparent',
            borderTop: '18px solid #2563eb',
          }} />
        </div>

        {/* ── To-Be ── */}
        <section style={{ marginBottom: 28 }}>
          <SectionLabel color="#2563eb" text="To-Be" label="DX化後の姿：業務の自動化とリアルタイム経営の実現" />
          <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 16, padding: 20 }}>
            <CardRow>
              <SolutionCard
                icon={<SmartphoneIcon />}
                title="現場・各部署"
                badge="スマホで完結（ペーパーレス）"
                badgeIcon={<UploadCloudIcon />}
                body="現場から領収書をスマホ撮影で即時UP。日報や経費申請もアプリのワークフローから簡単入力。"
              />
              <Arrow color="#2563eb" blue />
              <AutoCard />
              <Arrow color="#2563eb" blue />
              <SolutionCard
                icon={<BarChartIcon />}
                title="経営層（社長）"
                badge="リアルタイム経営判断"
                badgeIcon={<CheckCircleIcon />}
                badgeGreen
                body="いつでもクラウドのダッシュボードで最新の月次業績を確認可能に。"
                bodyBold
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
              { label: '入力ミス', value: 'ゼロへ', color: '#93c5fd' },
              { label: '経理の工数', value: '大幅削減', color: '#93c5fd' },
              { label: '月次決算', value: '早期化', color: '#fde68a' },
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
            min-width: 0;
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
        background: color, color: '#fff', fontSize: 13, fontWeight: 700,
        padding: '3px 14px', borderRadius: 20, whiteSpace: 'nowrap', flexShrink: 0,
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

function Arrow({ color, blue = false }: { color: string; blue?: boolean }) {
  return (
    <>
      <div className="arrow-h" style={{ alignItems: 'center', justifyContent: 'center', flexShrink: 0, width: 36 }}>
        <div style={{
          width: 32, height: 32, borderRadius: '50%',
          background: blue ? '#dbeafe' : '#fee2e2',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </div>
      </div>
      <div className="arrow-v" style={{ justifyContent: 'center' }}>
        <div style={{
          width: 0, height: 0,
          borderLeft: '10px solid transparent', borderRight: '10px solid transparent',
          borderTop: `14px solid ${color}`, opacity: 0.5,
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
      background: '#fff', border: '1px solid #fecaca', borderRadius: 12,
      padding: '20px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
    }}>
      <div style={{ marginBottom: 10 }}>{icon}</div>
      <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1e293b', marginBottom: 8 }}>{title}</h3>
      <span style={{
        display: 'block', width: '100%', background: '#fee2e2', color: '#991b1b',
        fontSize: 12, fontWeight: 700, padding: '6px 12px', borderRadius: 20, marginBottom: 10,
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
  icon, title, badge, badgeIcon, badgeGreen = false, body, bodyBold = false,
}: {
  icon: React.ReactNode; title: string; badge: string; badgeIcon?: React.ReactNode;
  badgeGreen?: boolean; body: string; bodyBold?: boolean;
}) {
  return (
    <div className="card-item" style={{
      background: '#fff', border: '2px solid #bfdbfe', borderRadius: 12,
      padding: '20px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
    }}>
      <div style={{ marginBottom: 10 }}>{icon}</div>
      <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1e293b', marginBottom: 8 }}>{title}</h3>
      <span style={{
        display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', gap: 4,
        background: badgeGreen ? '#dcfce7' : '#dbeafe',
        color: badgeGreen ? '#166534' : '#1e40af',
        fontSize: 12, fontWeight: 700, padding: '6px 12px', borderRadius: 20, marginBottom: 10,
        boxSizing: 'border-box',
      }}>
        {badgeIcon}
        {badge}
      </span>
      <p style={{ fontSize: 13, lineHeight: 1.7, margin: 0, color: '#4b5563', fontWeight: bodyBold ? 600 : 400 }}>
        {body}
      </p>
    </div>
  );
}

function AutoCard() {
  return (
    <div className="card-item" style={{
      background: 'linear-gradient(145deg,#1d4ed8,#1e40af)',
      borderRadius: 12, padding: '20px 16px',
      display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', color: '#fff',
    }}>
      <BotIcon />
      <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>AIワークフロー × クラウド会計</h3>
      <div style={{
        background: 'rgba(0,0,0,0.2)', borderRadius: 6,
        padding: '6px 12px', fontSize: 12, fontWeight: 700,
        width: '100%', marginBottom: 14, boxSizing: 'border-box',
      }}>
        API連携で完全自動化
      </div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, width: '100%', textAlign: 'left', color: '#bfdbfe' }}>
        {[
          '申請から承認までワークフローで電子化しAIが読み取り',
          '銀行/クレカと自動同期し会計システムへ連携',
          '経理は「入力」ではなく「承認」のみ。ミスは激減。',
        ].map((s) => (
          <li key={s} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8, fontSize: 13 }}>
            <span style={{
              flexShrink: 0, width: 16, height: 16, marginTop: 1, borderRadius: '50%',
              background: 'rgba(255,255,255,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, color: '#fff',
            }}>✓</span>
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ────────────── Icons ────────────── */

const S = { width: 36, height: 36, viewBox: '0 0 24 24', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
const Sm = { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

function HardHatIcon() {
  return <svg {...S} stroke="#ef4444"><path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"/><path d="M10 10V5a2 2 0 0 1 4 0v5"/><path d="M3 15v-3a9 9 0 0 1 18 0v3"/></svg>;
}
function CalculatorIcon() {
  return <svg {...S} stroke="#ef4444"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="10" y2="10"/><line x1="14" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="10" y2="14"/><line x1="14" y1="14" x2="16" y2="14"/><line x1="8" y1="18" x2="10" y2="18"/><line x1="14" y1="18" x2="16" y2="18"/></svg>;
}
function UserTieIcon() {
  return (
    <svg {...S} stroke="#ef4444">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      <path d="M12 11l-2 4 2 1 2-1-2-4z"/>
    </svg>
  );
}
function SmartphoneIcon() {
  return <svg {...S} stroke="#2563eb"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>;
}
function BotIcon() {
  return (
    <svg {...S} stroke="#fde68a" style={{ marginBottom: 10 }}>
      <rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/>
      <line x1="12" y1="7" x2="12" y2="11"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/>
    </svg>
  );
}
function BarChartIcon() {
  return <svg {...S} stroke="#2563eb"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>;
}
function ZapIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fde68a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
}
function UploadCloudIcon() {
  return <svg {...Sm} stroke="currentColor"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></svg>;
}
function CheckCircleIcon() {
  return <svg {...Sm} stroke="currentColor"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
}
function TargetIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
}
function ChevronLeft() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>;
}
function ChevronRight() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>;
}
