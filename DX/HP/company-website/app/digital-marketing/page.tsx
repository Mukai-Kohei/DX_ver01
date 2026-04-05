'use client';

import Link from 'next/link';

/* ────────────────────────────────────────────────────────────
   屋内ゴルフ事業 マーケティングDX
──────────────────────────────────────────────────────────── */
export default function DigitalMarketingPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: 'linear-gradient(160deg, #f0f4f8 0%, #e8eef5 100%)',
        fontFamily: "'Hiragino Kaku Gothic ProN','Noto Sans JP',sans-serif",
      }}
    >
      {/* ── ナビ ── */}
      <nav className="sticky top-0 z-20 bg-white/90 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 md:px-8 h-14 flex items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
          >
            <ChevronLeft />
            トップページに戻る
          </Link>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12 space-y-8 md:space-y-10">

        {/* ── ページタイトル ── */}
        <header className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg, #0057B8, #10b981)' }} />
          <div className="p-6 md:p-8">
            <span
              className="inline-block text-xs font-bold tracking-widest mb-3 px-3 py-1 rounded-full"
              style={{ background: '#ecfdf5', color: '#059669' }}
            >
              SOLUTION_02 ／ デジタルマーケティング支援
            </span>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 mb-2 leading-snug">
              屋内ゴルフ事業のマーケティングDX
            </h1>
            <p className="text-sm md:text-base text-slate-500 leading-relaxed">
              MA（マーケティングオートメーション）× LINE活用による<br className="hidden sm:block" />
              「集客・育成・ファン化」の自動仕組み化
            </p>
          </div>
        </header>

        {/* ── As-Is ── */}
        <section>
          <SectionLabel color="#dc2626" text="As-Is" />
          <h2 className="text-base sm:text-lg font-bold text-slate-700 mb-4">
            現状の課題：集客のバラつきと追客漏れによる機会損失
          </h2>

          <div
            className="rounded-2xl p-4 md:p-6 space-y-3 md:space-y-0 md:grid md:grid-cols-3 md:gap-4"
            style={{ background: '#fff5f5', border: '1px solid #fecaca' }}
          >
            <IssueCard
              icon={<MegaphoneIcon color="#dc2626" />}
              title="認知・集客"
              badge="単発の広告・宣伝"
              badgeColor="red"
              body="チラシやSNSで発信しても、興味を持った人を「顧客データ」として蓄積できていない。"
            />
            <MobileDownArrow />
            <IssueCard
              icon={<UserMinusIcon color="#dc2626" />}
              title="リード育成（追客）"
              badge="待ちの姿勢・アナログ"
              badgeColor="red"
              body="体験会に来た人へのフォローが手動。継続的なアプローチができず、熱が冷めてしまう。"
              arrow
            />
            <MobileDownArrow />
            <IssueCard
              icon={<FrownIcon color="#dc2626" />}
              title="会員化・リピート"
              badge="入会率・定着率の低迷"
              badgeColor="red"
              body="新規顧客が定着せず、常に「新規獲得」に走り続けなければならない悪循環。"
              bodyBold
              arrow
            />
          </div>
        </section>

        {/* ── 変革バナー ── */}
        <div className="flex flex-col items-center gap-2">
          <div
            className="w-full sm:w-auto text-center text-white font-bold py-3 px-6 rounded-xl shadow-md flex items-center justify-center gap-2 flex-wrap text-sm md:text-base"
            style={{ background: 'linear-gradient(135deg,#059669,#047857)' }}
          >
            <SparklesIcon />
            MA × LINEステップ配信による自動ナーチャリング
          </div>
          <DownArrow color="#059669" />
        </div>

        {/* ── To-Be ── */}
        <section>
          <SectionLabel color="#059669" text="To-Be" />
          <h2 className="text-base sm:text-lg font-bold text-slate-700 mb-4">
            DX化後の姿：自動で「ファン」が育ち、会員が増え続ける仕組み
          </h2>

          <div
            className="rounded-2xl p-4 md:p-6 space-y-3 md:space-y-0 md:grid md:grid-cols-3 md:gap-4 md:items-stretch"
            style={{ background: '#f0fdf4', border: '1px solid #a7f3d0' }}
          >
            {/* LINE登録 */}
            <SolutionCard
              icon={<QrCodeIcon />}
              title="LINE友だち登録"
              badge="顧客リストの自動蓄積"
              body="SNSや店舗QRからLINEへ。登録と同時にアンケート（ゴルフ歴・悩み）を自動回収。"
            />

            {/* モバイル矢印 */}
            <MobileDownArrow green />

            {/* ステップ配信 — 強調カード */}
            <div
              className="relative rounded-xl p-5 flex flex-col items-center text-center text-white shadow-lg"
              style={{ background: 'linear-gradient(145deg,#059669,#047857)' }}
            >
              <DesktopArrow />
              <BotIcon />
              <h3 className="font-bold text-lg mb-2">ステップ配信（MA）</h3>
              <div
                className="text-xs font-bold py-1.5 px-3 rounded mb-4 w-full"
                style={{ background: 'rgba(0,0,0,0.2)' }}
              >
                シナリオ別の自動教育
              </div>
              <ul className="text-sm text-left w-full space-y-2" style={{ color: '#d1fae5' }}>
                {[
                  '1日目：歓迎動画とクーポン配布',
                  '3日目：最新シミュレーターの凄さ',
                  '7日目：会員限定の体験会招待',
                ].map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-white" style={{ background: 'rgba(255,255,255,0.25)', fontSize: 9 }}>✓</span>
                    {s}
                  </li>
                ))}
                <li className="text-xs opacity-60 pl-6">※未開封者には別ルートで再送</li>
              </ul>
            </div>

            {/* モバイル矢印 */}
            <MobileDownArrow green />

            {/* 高LTV会員 */}
            <SolutionCard
              icon={<TrophyIcon />}
              title="高LTV会員の創出"
              badge="ストック型収益の安定"
              badgeCheck
              body="自動ナーチャリングにより「通う理由」が醸成され、高い入会率と継続率を実現。"
              arrow
            />
          </div>
        </section>

        {/* ── 効果まとめ ── */}
        <section
          className="rounded-2xl p-5 md:p-6 text-white"
          style={{ background: 'linear-gradient(135deg,#1e293b,#0f172a)' }}
        >
          <div className="flex items-center gap-2 font-bold text-base mb-4">
            <TargetIcon />
            導入により期待される効果
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { label: '追客漏れ', value: 'ゼロへ', color: '#6ee7b7' },
              { label: '体験→入会率', value: '1.5倍〜', color: '#6ee7b7' },
              { label: '販促業務', value: '完全自動化', color: '#fde68a' },
            ].map(({ label, value, color }) => (
              <div
                key={label}
                className="rounded-xl p-4 text-center"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <p className="text-xs text-slate-400 mb-1">{label}</p>
                <p className="text-xl font-bold" style={{ color }}>{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── フッターCTA ── */}
        <div className="text-center pb-4">
          <p className="text-sm text-slate-500 mb-4">
            この仕組みを貴社でも導入してみませんか？
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-white font-bold py-3 px-8 rounded-full shadow-md transition-transform hover:scale-105"
            style={{ background: '#0057B8' }}
          >
            お問い合わせはこちら
            <ChevronRight />
          </Link>
        </div>

      </div>
    </div>
  );
}

/* ────────────── Layout helpers ────────────── */

function SectionLabel({ color, text }: { color: string; text: string }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span
        className="text-white text-sm font-bold py-0.5 px-4 rounded-full"
        style={{ background: color }}
      >
        {text}
      </span>
      <div className="flex-1 h-px" style={{ background: `${color}40` }} />
    </div>
  );
}

function MobileDownArrow({ green = false }: { green?: boolean }) {
  return (
    <div className="flex justify-center md:hidden">
      <div style={{
        width: 0, height: 0,
        borderLeft: '10px solid transparent',
        borderRight: '10px solid transparent',
        borderTop: `14px solid ${green ? '#059669' : '#dc2626'}`,
        opacity: 0.4,
      }} />
    </div>
  );
}

function DownArrow({ color }: { color: string }) {
  return (
    <div style={{
      width: 0, height: 0,
      borderLeft: '14px solid transparent',
      borderRight: '14px solid transparent',
      borderTop: `18px solid ${color}`,
    }} />
  );
}

/* Desktop right-arrow connector (absolute, only on md+) */
function DesktopArrow() {
  return (
    <div className="hidden md:flex absolute top-1/2 -left-5 -translate-y-1/2 z-10 items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"/>
      </svg>
    </div>
  );
}

/* ────────────── Card components ────────────── */

function IssueCard({
  icon, title, badge, badgeColor, body, bodyBold = false, arrow = false,
}: {
  icon: React.ReactNode; title: string; badge: string;
  badgeColor: 'red' | 'green'; body: string; bodyBold?: boolean; arrow?: boolean;
}) {
  return (
    <div className="bg-white rounded-xl p-5 flex flex-col items-center text-center relative shadow-sm" style={{ border: '1px solid #fee2e2' }}>
      {arrow && (
        <div className="hidden md:flex absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 rounded-full bg-white items-center justify-center shadow-sm z-10">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </div>
      )}
      <div className="mb-3">{icon}</div>
      <h3 className="font-bold text-base mb-2 text-slate-800">{title}</h3>
      <span
        className="text-xs font-bold py-1.5 px-3 rounded-full mb-3 w-full block"
        style={badgeColor === 'red'
          ? { background: '#fee2e2', color: '#991b1b' }
          : { background: '#d1fae5', color: '#065f46' }}
      >
        {badge}
      </span>
      <p className={`text-sm leading-relaxed ${bodyBold ? 'font-semibold text-red-600' : 'text-slate-500'}`}>
        {body}
      </p>
    </div>
  );
}

function SolutionCard({
  icon, title, badge, badgeCheck = false, body, arrow = false,
}: {
  icon: React.ReactNode; title: string; badge: string;
  badgeCheck?: boolean; body: string; arrow?: boolean;
}) {
  return (
    <div className="bg-white rounded-xl p-5 flex flex-col items-center text-center relative shadow-sm" style={{ border: '2px solid #a7f3d0' }}>
      {arrow && <DesktopArrow />}
      <div className="mb-3">{icon}</div>
      <h3 className="font-bold text-base mb-2 text-slate-800">{title}</h3>
      <span
        className="text-xs font-bold py-1.5 px-3 rounded-full mb-3 w-full flex items-center justify-center gap-1"
        style={{ background: '#d1fae5', color: '#065f46' }}
      >
        {badgeCheck && (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        )}
        {badge}
      </span>
      <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
    </div>
  );
}

/* ────────────── Icons ────────────── */

const I = { width: 40, height: 40, viewBox: '0 0 24 24', fill: 'none', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

function MegaphoneIcon({ color }: { color: string }) {
  return <svg {...I} stroke={color}><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>;
}
function UserMinusIcon({ color }: { color: string }) {
  return (
    <svg {...I} stroke={color}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="22" y1="11" x2="16" y2="11"/>
    </svg>
  );
}
function FrownIcon({ color }: { color: string }) {
  return (
    <svg {...I} stroke={color}>
      <circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
    </svg>
  );
}
function QrCodeIcon() {
  return (
    <svg {...I} stroke="#059669">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      <rect x="14" y="14" width="3" height="3"/><line x1="17" y1="17" x2="20" y2="17"/><line x1="20" y1="14" x2="20" y2="17"/>
    </svg>
  );
}
function BotIcon() {
  return (
    <svg {...I} stroke="#fde68a" className="mb-3">
      <rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/>
      <line x1="12" y1="7" x2="12" y2="11"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/>
    </svg>
  );
}
function TrophyIcon() {
  return (
    <svg {...I} stroke="#059669">
      <polyline points="8 21 12 17 16 21"/><line x1="12" y1="17" x2="12" y2="11"/>
      <path d="M7 4H4a2 2 0 0 0-2 2v2c0 4 3 7 7 7s7-3 7-7V6a2 2 0 0 0-2-2h-3"/>
      <rect x="7" y="2" width="10" height="4" rx="1"/>
    </svg>
  );
}
function SparklesIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fde68a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z"/>
    </svg>
  );
}
function TargetIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
    </svg>
  );
}
function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6"/>
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  );
}
