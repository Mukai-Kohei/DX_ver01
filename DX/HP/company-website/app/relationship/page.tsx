'use client';

import { useEffect } from 'react';
import Link from 'next/link';

/* ────────────────────────────────────────────────────────────
   事前承認デジタルウォレットDX ページ（リレーションシップ構築）
──────────────────────────────────────────────────────────── */
export default function RelationshipPage() {
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
                SOLUTION_03 ／ DX × MARKETING
              </span>
              <h1 style={{ fontSize: 'clamp(18px, 4vw, 26px)', fontWeight: 700, marginBottom: 8, lineHeight: 1.3 }}>
                事前承認ウォレットによる経費精算DX
              </h1>
              <p style={{ fontSize: 'clamp(12px, 2vw, 14px)', color: 'rgba(255,255,255,0.72)', lineHeight: 1.6, margin: 0 }}>
                LINEで申請・AI承認・スマホ決済で、立て替えと月末精算を完全消滅させる
              </p>
            </div>
            <div style={{ height: 3, background: 'linear-gradient(90deg,#00A0E9,#7c3aed)' }} />
          </header>
        </div>
      </div>

      {/* ── Content area ── */}
      <div style={{ background: '#f5f7fa', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '100%', maxWidth: 1024, padding: '32px 24px 48px', boxSizing: 'border-box' }}>

        {/* ── As-Is ── */}
        <section style={{ marginBottom: 28 }}>
          <SectionLabel color="#dc2626" text="As-Is" label="現状の泥臭いフロー：関わる人間が多く、ストレスと無駄な時間が蔓延" />
          <div style={{ background: '#fff1f2', border: '1px solid #fecaca', borderRadius: 16, padding: 20 }}>
            <CardRow>
              <IssueCard
                icon={<WalletIcon />}
                title="現場スタッフ"
                badge="自腹立て替えの不満"
                body="なけなしの小遣いから業務資材を立て替え。クシャクシャのレシートを保管し、月末にエクセルで精算書を作成。"
              />
              <Arrow color="#ef4444" />
              <IssueCard
                icon={<SpreadsheetIcon />}
                title="社長・経理"
                badge="虚無の確認・振込作業"
                body="月末に山のようなレシートの束をチェックし、従業員一人ひとりの口座へ小口現金を振り込む手間が発生。"
              />
              <Arrow color="#ef4444" />
              <IssueCard
                icon={<KeyboardIcon />}
                title="税理士・会計"
                badge="転記の手入力"
                body="提出されたレシートを見ながら会計ソフトに手入力。【関わる人間：3人 / 所要：数日】"
                bodyBold
              />
            </CardRow>
          </div>
        </section>

        {/* ── 変革バナー ── */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, marginBottom: 28 }}>
          <div style={{
            background: 'linear-gradient(135deg, #6d28d9, #7c3aed)',
            color: '#fff',
            fontWeight: 700,
            padding: '12px 28px',
            borderRadius: 40,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            fontSize: 'clamp(13px, 2.5vw, 15px)',
            boxShadow: '0 4px 12px rgba(124,58,237,0.35)',
            textAlign: 'center',
          }}>
            <BlocksIcon />
            LINE × AI自動審査 × スマホ決済 × 自動記帳
          </div>
          <div style={{
            width: 0, height: 0,
            borderLeft: '14px solid transparent',
            borderRight: '14px solid transparent',
            borderTop: '18px solid #7c3aed',
          }} />
        </div>

        {/* ── To-Be ── */}
        <section style={{ marginBottom: 28 }}>
          <SectionLabel color="#7c3aed" text="To-Be" label="DX化後の姿：「事前承認」だから安心。決済と記帳がその場で完了" />
          <div style={{ background: '#faf5ff', border: '1px solid #e9d5ff', borderRadius: 16, padding: 20 }}>
            <CardRow>
              <SolutionCard
                icon={<MessageCircleIcon />}
                title="① LINEでサクッと申請"
                badge="いつものアプリを使うだけ"
                badgeIcon={<SmartphoneSmIcon />}
                body={<>現場のスタッフは、新しいアプリを入れる必要はありません。いつも使っているLINEから<strong>「ロープ代 3,000円」</strong>とメッセージを送るだけです。</>}
              />
              <Arrow color="#7c3aed" purple />
              <AiApprovalCard />
              <Arrow color="#7c3aed" purple />
              <SolutionCard
                icon={<CreditCardIcon />}
                title="③ レジで決済 ＆ 自動記帳"
                badge="立て替え・月末精算ゼロ"
                badgeIcon={<CheckCircleSmIcon />}
                badgeGreen
                body={<>レジでスマホをかざして支払い完了。支払いが終わると同時に、会計ソフトへ<strong>「消耗品費 3,000円」として自動で記帳</strong>されます。月末の精算業務は消滅します。</>}
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
              導入により双方が得る「強烈なメリット」
            </div>
            <div className="effects-grid-rel">
              {[
                { label: '従業員', value: '立て替えの苦痛が完全に消滅', color: '#93c5fd' },
                { label: '社長', value: '月末の精算・振込作業がゼロに', color: '#fde68a' },
                { label: '経営', value: '事前承認で不正利用100%防止', color: '#86efac' },
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
                  <p style={{ fontSize: 15, fontWeight: 700, color, margin: 0 }}>{value}</p>
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
          background: 'radial-gradient(circle at 100% 0%, rgba(0,160,233,0.22) 0%, transparent 65%)' }} />
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
        .card-row-rel {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .card-row-rel > .card-item-rel {
          width: 100%;
        }
        .card-row-rel > .arrow-h-rel { display: none; }
        .card-row-rel > .arrow-v-rel { display: flex; }
        .effects-grid-rel {
          display: grid;
          grid-template-columns: 1fr;
          gap: 10px;
        }
        @media (min-width: 640px) {
          .effects-grid-rel { grid-template-columns: repeat(3, 1fr); }
        }
        @media (min-width: 900px) {
          .card-row-rel {
            flex-direction: row;
            align-items: stretch;
          }
          .card-row-rel > .card-item-rel {
            flex: 1;
            min-width: 0;
          }
          .card-row-rel > .arrow-h-rel { display: flex; }
          .card-row-rel > .arrow-v-rel { display: none; }
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
      <span style={{ fontSize: 'clamp(13px, 2.5vw, 15px)', fontWeight: 700, color: '#334155' }}>
        {label}
      </span>
    </div>
  );
}

function CardRow({ children }: { children: React.ReactNode }) {
  return <div className="card-row-rel">{children}</div>;
}

function Arrow({ color, purple = false }: { color: string; purple?: boolean }) {
  return (
    <>
      <div className="arrow-h-rel" style={{ alignItems: 'center', justifyContent: 'center', flexShrink: 0, width: 36 }}>
        <div style={{
          width: 32, height: 32, borderRadius: '50%',
          background: purple ? '#ede9fe' : '#fee2e2',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </div>
      </div>
      <div className="arrow-v-rel" style={{ justifyContent: 'center' }}>
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
    <div className="card-item-rel" style={{
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
  icon, title, badge, badgeIcon, badgeGreen = false, body,
}: {
  icon: React.ReactNode; title: string; badge: string; badgeIcon?: React.ReactNode;
  badgeGreen?: boolean; body: React.ReactNode;
}) {
  return (
    <div className="card-item-rel" style={{
      background: '#fff', border: '2px solid #e9d5ff', borderRadius: 12,
      padding: '20px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
    }}>
      <div style={{ marginBottom: 10 }}>{icon}</div>
      <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1e293b', marginBottom: 8 }}>{title}</h3>
      <span style={{
        display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', gap: 4,
        background: badgeGreen ? '#dcfce7' : '#ede9fe',
        color: badgeGreen ? '#166534' : '#5b21b6',
        fontSize: 12, fontWeight: 700, padding: '6px 12px', borderRadius: 20, marginBottom: 10,
        boxSizing: 'border-box',
      }}>
        {badgeIcon}
        {badge}
      </span>
      <p style={{ fontSize: 13, lineHeight: 1.7, margin: 0, color: '#4b5563', textAlign: 'left' }}>
        {body}
      </p>
    </div>
  );
}

function AiApprovalCard() {
  return (
    <div className="card-item-rel" style={{
      background: 'linear-gradient(145deg,#6d28d9,#5b21b6)',
      borderRadius: 12, padding: '20px 16px', color: '#fff',
      display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
    }}>
      <ShieldCheckIcon />
      <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>② AIが即時承認 ＆ 枠付与</h3>
      <div style={{
        background: 'rgba(0,0,0,0.22)', borderRadius: 6,
        padding: '6px 12px', fontSize: 12, fontWeight: 700,
        width: '100%', marginBottom: 12, boxSizing: 'border-box',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4,
      }}>
        <LockOpenIcon />
        不正利用を100%防ぐ仕組み
      </div>
      {/* ロック解除の視覚表現 */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
        background: 'rgba(255,255,255,0.1)', borderRadius: 8,
        padding: '8px 12px', width: '100%', marginBottom: 12, boxSizing: 'border-box',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <LockIcon />
          <span style={{ fontSize: 10, fontWeight: 700, color: '#c4b5fd' }}>普段は0円</span>
        </div>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fde68a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <UnlockIcon />
          <span style={{ fontSize: 10, fontWeight: 700, color: '#fde68a' }}>3,000円分 解放!</span>
        </div>
      </div>
      <p style={{ fontSize: 12, lineHeight: 1.7, margin: 0, color: '#ede9fe', textAlign: 'left' }}>
        AIが会社のルール（上限金額や用途）を瞬時にチェック。承認された瞬間だけ、スタッフのスマホ決済（Apple Pay等）に<strong>必要な金額だけがチャージ（ロック解除）</strong>されます。
      </p>
    </div>
  );
}

/* ────────────── Icons ────────────── */

const S = { width: 36, height: 36, viewBox: '0 0 24 24', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
const Sm = { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

function WalletIcon() {
  return <svg {...S} stroke="#ef4444"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/></svg>;
}
function SpreadsheetIcon() {
  return <svg {...S} stroke="#ef4444"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/></svg>;
}
function KeyboardIcon() {
  return <svg {...S} stroke="#ef4444"><rect x="2" y="6" width="20" height="12" rx="2"/><line x1="6" y1="10" x2="6" y2="10"/><line x1="10" y1="10" x2="10" y2="10"/><line x1="14" y1="10" x2="14" y2="10"/><line x1="18" y1="10" x2="18" y2="10"/><line x1="6" y1="14" x2="18" y2="14"/></svg>;
}
function MessageCircleIcon() {
  return <svg {...S} stroke="#22c55e"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
}
function CreditCardIcon() {
  return <svg {...S} stroke="#7c3aed"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>;
}
function ShieldCheckIcon() {
  return <svg {...S} stroke="#fde68a" style={{ marginBottom: 10 }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>;
}
function BlocksIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fde68a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>;
}
function LockIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c4b5fd" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
}
function UnlockIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fde68a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>;
}
function LockOpenIcon() {
  return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#86efac" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>;
}
function SmartphoneSmIcon() {
  return <svg {...Sm} stroke="currentColor"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>;
}
function CheckCircleSmIcon() {
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
