'use client';

import { useEffect } from 'react';
import Link from 'next/link';

/* ────────────────────────────────────────────────────────────
   AX（AI Transformation）推進ページ
──────────────────────────────────────────────────────────── */
export default function AxSolutionPage() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: "var(--f-jp)" }}>

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
                SOLUTION_04 ／ AX推進ソリューション
              </span>
              <h1 style={{ fontSize: 'clamp(18px, 4vw, 26px)', fontWeight: 700, marginBottom: 8, lineHeight: 1.3 }}>
                生成AI活用による業務変革（AX）
              </h1>
              <p style={{ fontSize: 'clamp(12px, 2vw, 14px)', color: 'rgba(255,255,255,0.72)', lineHeight: 1.6, margin: 0 }}>
                属人化したノウハウをAIに載せ替え、組織全体の判断スピードを引き上げる
              </p>
            </div>
            <div style={{ height: 3, background: 'linear-gradient(90deg,#fbbf24,#f59e0b)' }} />
          </header>
        </div>
      </div>

      {/* ── Content area ── */}
      <div style={{ background: '#f5f7fa', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '100%', maxWidth: 1024, padding: '32px 24px 48px', boxSizing: 'border-box' }}>

        {/* ── As-Is ── */}
        <section style={{ marginBottom: 28 }}>
          <SectionLabel color="#dc2626" text="As-Is" label="現状の課題：AIを使いたいが、何から始めればいいか分からない" />
          <div style={{ background: '#fff1f2', border: '1px solid #fecaca', borderRadius: 16, padding: 20 }}>
            <CardRow>
              <IssueCard
                icon={<HeadsetIcon />}
                title="現場担当者"
                badge="同じ質問に何度も対応"
                body="ベテランの頭の中にだけノウハウが眠り、新人が独り立ちするまでに時間がかかる。"
              />
              <Arrow color="#ef4444" />
              <IssueCard
                icon={<DocumentIcon />}
                title="企画・管理部門"
                badge="資料作成に半日"
                body="議事録・報告書・提案書。「作る」だけで一日が終わり、考える時間が残らない。"
              />
              <Arrow color="#ef4444" />
              <IssueCard
                icon={<UserTieIcon />}
                title="経営層（社長）"
                badge="AI活用が定着しない"
                body="ツールは導入したが誰も使わず、投資対効果が見えないまま止まっている。"
                bodyBold
              />
            </CardRow>
          </div>
        </section>

        {/* ── 変革バナー ── */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, marginBottom: 28 }}>
          <div style={{
            background: 'linear-gradient(135deg, #b45309, #d97706)',
            color: '#fff',
            fontWeight: 700,
            padding: '12px 28px',
            borderRadius: 40,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            fontSize: 'clamp(13px, 2.5vw, 15px)',
            boxShadow: '0 4px 12px rgba(180,83,9,0.35)',
            textAlign: 'center',
          }}>
            <SparkIcon />
            生成AI × 社内ナレッジ連携による知識の民主化
          </div>
          <div style={{
            width: 0, height: 0,
            borderLeft: '14px solid transparent',
            borderRight: '14px solid transparent',
            borderTop: '18px solid #d97706',
          }} />
        </div>

        {/* ── To-Be ── */}
        <section style={{ marginBottom: 28 }}>
          <SectionLabel color="#b45309" text="To-Be" label="AX化後の姿：AIを前提とした業務プロセスへ" />
          <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 16, padding: 20 }}>
            <CardRow>
              <SolutionCard
                icon={<ChatBotIcon />}
                title="現場担当者"
                badge="社内AIアシスタント"
                badgeIcon={<MessageIcon />}
                body="過去の事例やマニュアルをAIが即座に回答。入社直後でもベテラン品質の対応ができる。"
              />
              <Arrow color="#d97706" amber />
              <AutoCard />
              <Arrow color="#d97706" amber />
              <SolutionCard
                icon={<TrendUpIcon />}
                title="経営層（社長）"
                badge="AI活用が定着した組織へ"
                badgeIcon={<CheckCircleIcon />}
                badgeGreen
                body="利用状況を可視化し、成果の出た使い方を全社へ展開できる仕組みが回り始める。"
                bodyBold
              />
            </CardRow>
          </div>
        </section>

        {/* ── 効果まとめ ── */}
        <section style={{ position: 'relative', overflow: 'hidden', borderRadius: 16,
          background: 'linear-gradient(135deg,#001D4A 0%,#003D82 45%,#0057B8 100%)',
          padding: '24px', color: '#fff',
        }}>
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)',
            backgroundSize: '60px 60px' }} />
          <div style={{ position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, fontSize: 15, marginBottom: 16 }}>
              <TargetIcon />
              導入により期待される効果
            </div>
            <div className="effects-grid">
              {[
                { label: '問い合わせ対応', value: '即時化', color: '#fde68a' },
                { label: '資料作成の工数', value: '大幅削減', color: '#fde68a' },
                { label: 'ノウハウ継承', value: '仕組み化', color: '#93c5fd' },
              ].map(({ label, value, color }) => (
                <div key={label} style={{
                  background: 'rgba(255,255,255,0.09)',
                  border: '1px solid rgba(255,255,255,0.18)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: 12,
                  padding: '16px 12px',
                  textAlign: 'center',
                }}>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', marginBottom: 6 }}>{label}</p>
                  <p style={{ fontSize: 22, fontWeight: 700, color, margin: 0 }}>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        </div>
      </div>

      {/* ── Contact CTA ── */}
      <div style={{ background: 'linear-gradient(135deg,#002D6E 0%,#0057B8 55%,#006FD6 100%)',
        position: 'relative', overflow: 'hidden', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)',
          backgroundSize: '60px 60px' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: 320, height: 320, pointerEvents: 'none',
          background: 'radial-gradient(circle at 100% 0%, rgba(251,191,36,0.20) 0%, transparent 65%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: 288, height: 288, pointerEvents: 'none',
          background: 'radial-gradient(circle at 0% 100%, rgba(0,61,130,0.40) 0%, transparent 65%)' }} />
        <div style={{ position: 'relative', maxWidth: 480, margin: '0 auto' }}>
          <span style={{ display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.32em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: 14 }}>
            CONTACT US
          </span>
          <h2 style={{ fontSize: 'clamp(24px,5vw,34px)', fontWeight: 700, color: '#fff', marginBottom: 14, lineHeight: 1.2 }}>
            お問い合わせ
          </h2>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: 32 }}>
            サービスに関するご質問やご相談など、<br />お気軽にお問い合わせください。
          </p>
          <a href="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'rgba(255,255,255,0.10)', border: '1px solid rgba(255,255,255,0.25)',
            backdropFilter: 'blur(12px)', color: '#fff', fontWeight: 700,
            padding: '14px 40px', borderRadius: 40, textDecoration: 'none', fontSize: 15,
          }}>
            お問い合わせフォームへ
            <ChevronRight />
          </a>
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

function Arrow({ color, amber = false }: { color: string; amber?: boolean }) {
  return (
    <>
      <div className="arrow-h" style={{ alignItems: 'center', justifyContent: 'center', flexShrink: 0, width: 36 }}>
        <div style={{
          width: 32, height: 32, borderRadius: '50%',
          background: amber ? '#fef3c7' : '#fee2e2',
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
      background: '#fff', border: '2px solid #fde68a', borderRadius: 12,
      padding: '20px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
    }}>
      <div style={{ marginBottom: 10 }}>{icon}</div>
      <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1e293b', marginBottom: 8 }}>{title}</h3>
      <span style={{
        display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', gap: 4,
        background: badgeGreen ? '#dcfce7' : '#fef3c7',
        color: badgeGreen ? '#166534' : '#92400e',
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
      background: 'linear-gradient(145deg,#b45309,#92400e)',
      borderRadius: 12, padding: '20px 16px',
      display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', color: '#fff',
    }}>
      <BotIcon />
      <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>生成AI × 社内ナレッジ基盤</h3>
      <div style={{
        background: 'rgba(0,0,0,0.2)', borderRadius: 6,
        padding: '6px 12px', fontSize: 12, fontWeight: 700,
        width: '100%', marginBottom: 14, boxSizing: 'border-box',
      }}>
        RAG構成で自社データを活用
      </div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, width: '100%', textAlign: 'left', color: '#fde68a' }}>
        {[
          '社内文書・議事録・マニュアルをAIが横断検索',
          '資料のたたき台を数分で自動生成',
          '人は「作る」ではなく「判断する」に集中',
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

function HeadsetIcon() {
  return <svg {...S} stroke="#ef4444"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>;
}
function DocumentIcon() {
  return <svg {...S} stroke="#ef4444"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>;
}
function UserTieIcon() {
  return (
    <svg {...S} stroke="#ef4444">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      <path d="M12 11l-2 4 2 1 2-1-2-4z"/>
    </svg>
  );
}
function ChatBotIcon() {
  return <svg {...S} stroke="#b45309"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><circle cx="9" cy="10" r="1" fill="#b45309" stroke="none"/><circle cx="12" cy="10" r="1" fill="#b45309" stroke="none"/><circle cx="15" cy="10" r="1" fill="#b45309" stroke="none"/></svg>;
}
function BotIcon() {
  return (
    <svg {...S} stroke="#fde68a" style={{ marginBottom: 10 }}>
      <rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/>
      <line x1="12" y1="7" x2="12" y2="11"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/>
    </svg>
  );
}
function TrendUpIcon() {
  return <svg {...S} stroke="#b45309"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;
}
function SparkIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fde68a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4L12 3z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z"/></svg>;
}
function MessageIcon() {
  return <svg {...Sm} stroke="currentColor"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>;
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
