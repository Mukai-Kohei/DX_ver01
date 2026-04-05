'use client';

import Link from 'next/link';

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen p-4 md:p-8" style={{ background: '#f1f5f9', fontFamily: "'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif" }}>
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* ヘッダー */}
        <div className="text-white p-6 border-b-4" style={{ background: '#1e293b', borderBottomColor: '#10b981' }}>
          <Link href="/" className="inline-flex items-center gap-2 text-sm mb-4 opacity-60 hover:opacity-100 transition-opacity">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
            トップページに戻る
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            屋内ゴルフ事業のマーケティングDX
          </h1>
          <p style={{ color: '#94a3b8' }}>
            MA（マーケティングオートメーション）とLINE活用による「集客・育成・ファン化」の自動仕組み化
          </p>
        </div>

        <div className="p-6 md:p-10 space-y-12">

          {/* ── As-Is ── */}
          <div>
            <div className="flex items-center mb-6">
              <span className="text-white font-bold py-1 px-4 rounded-full mr-4 text-base" style={{ background: '#dc2626' }}>As-Is</span>
              <h2 className="text-lg font-bold" style={{ color: '#1f2937' }}>
                現状の課題：集客のバラつきと追客漏れによる機会損失
              </h2>
            </div>

            <div className="rounded-xl p-6" style={{ background: '#fff1f2', border: '1px solid #fecaca' }}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* 認知・集客 */}
                <Card>
                  <MegaphoneIcon />
                  <h3 className="font-bold text-lg mb-2">認知・集客</h3>
                  <BadgeRed>単発の広告・宣伝</BadgeRed>
                  <p className="text-sm" style={{ color: '#4b5563' }}>
                    チラシやSNSで発信しても、興味を持った人を「顧客データ」として蓄積できていない。
                  </p>
                </Card>

                {/* 追客 */}
                <CardWithArrow>
                  <UserMinusIcon />
                  <h3 className="font-bold text-lg mb-2">リード育成（追客）</h3>
                  <BadgeRed>待ちの姿勢・アナログ</BadgeRed>
                  <p className="text-sm" style={{ color: '#4b5563' }}>
                    体験会に来た人へのフォローが手動。継続的なアプローチができず、熱が冷めてしまう。
                  </p>
                </CardWithArrow>

                {/* 成約 */}
                <CardWithArrow>
                  <FrownIcon />
                  <h3 className="font-bold text-lg mb-2">会員化・リピート</h3>
                  <BadgeRed>入会率・定着率の低迷</BadgeRed>
                  <p className="text-sm font-bold" style={{ color: '#dc2626' }}>
                    新規顧客が定着せず、常に「新規獲得」に走り続けなければならない悪循環。
                  </p>
                </CardWithArrow>

              </div>
            </div>
          </div>

          {/* ── 変革矢印 ── */}
          <div className="flex flex-col items-center">
            <div className="text-white font-bold py-3 px-8 rounded-full shadow-lg flex items-center gap-2 mb-2 z-10" style={{ background: '#059669' }}>
              <SparklesIcon />
              MA × LINEステップ配信による自動ナーチャリング
            </div>
            <div style={{
              width: 0, height: 0,
              borderLeft: '15px solid transparent',
              borderRight: '15px solid transparent',
              borderTop: '20px solid #059669',
            }} />
          </div>

          {/* ── To-Be ── */}
          <div>
            <div className="flex items-center mb-6">
              <span className="text-white font-bold py-1 px-4 rounded-full mr-4 text-base" style={{ background: '#059669' }}>To-Be</span>
              <h2 className="text-lg font-bold" style={{ color: '#1f2937' }}>
                DX化後の姿：自動で「ファン」が育ち、会員が増え続ける仕組み
              </h2>
            </div>

            <div className="rounded-xl p-6" style={{ background: '#ecfdf5', border: '1px solid #a7f3d0' }}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

                {/* LINE登録 */}
                <GreenCard>
                  <QrCodeIcon />
                  <h3 className="font-bold text-lg mb-2">LINE友だち登録</h3>
                  <BadgeGreen>顧客リストの自動蓄積</BadgeGreen>
                  <p className="text-sm" style={{ color: '#4b5563' }}>
                    SNSや店舗QRからLINEへ。登録と同時にアンケート（ゴルフ歴、悩み）を自動回収。
                  </p>
                </GreenCard>

                {/* ステップ配信 — 中央強調 */}
                <div className="text-white p-5 rounded-xl shadow-lg flex flex-col items-center text-center md:scale-105 z-10 relative" style={{ background: '#059669' }}>
                  <ArrowCircleLeft />
                  <BotIcon />
                  <h3 className="font-bold text-lg mb-2">ステップ配信（MA）</h3>
                  <div className="font-bold text-sm py-2 px-3 rounded mb-3 w-full" style={{ background: '#065f46' }}>
                    シナリオ別の自動教育
                  </div>
                  <ul className="text-sm text-left list-disc pl-4 space-y-1" style={{ color: '#d1fae5' }}>
                    <li>1日目：歓迎動画とクーポン配布</li>
                    <li>3日目：最新シミュレーターの凄さ</li>
                    <li>7日目：会員限定の体験会招待</li>
                    <li className="opacity-70">※未開封者には別ルートで再送</li>
                  </ul>
                </div>

                {/* 高LTV会員 */}
                <GreenCard>
                  <ArrowCircleLeft />
                  <TrophyIcon />
                  <h3 className="font-bold text-lg mb-2">高LTV会員の創出</h3>
                  <BadgeGreenSolid>ストック型収益の安定</BadgeGreenSolid>
                  <p className="text-sm font-bold" style={{ color: '#374151' }}>
                    自動ナーチャリングにより「通う理由」が醸成され、高い入会率と継続率を実現。
                  </p>
                </GreenCard>

              </div>
            </div>
          </div>

          {/* ── 効果まとめ ── */}
          <div className="rounded-xl p-5 flex flex-col md:flex-row items-center justify-between gap-4 text-white"
            style={{ background: '#1e293b' }}>
            <div className="font-bold text-lg flex items-center gap-2">
              <TargetIcon />
              導入により期待される効果
            </div>
            <div className="flex flex-wrap gap-3 text-sm font-bold justify-center">
              <Chip color="#6ee7b7">✓ 追客漏れ ゼロへ</Chip>
              <Chip color="#6ee7b7">✓ 体験→入会率 1.5倍〜</Chip>
              <Chip color="#fde68a">✓ 販促業務の完全自動化</Chip>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ── Sub-components ── */

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow flex flex-col items-center text-center"
      style={{ border: '1px solid #e5e7eb' }}>
      {children}
    </div>
  );
}

function CardWithArrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow flex flex-col items-center text-center relative"
      style={{ border: '1px solid #e5e7eb' }}>
      <div className="hidden md:block absolute top-1/2 -left-4 -translate-y-1/2" style={{ color: '#9ca3af' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </div>
      {children}
    </div>
  );
}

function GreenCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow flex flex-col items-center text-center relative"
      style={{ border: '2px solid #6ee7b7' }}>
      {children}
    </div>
  );
}

function ArrowCircleLeft() {
  return (
    <div className="hidden md:block absolute top-1/2 -left-5 -translate-y-1/2 z-20 bg-white rounded-full">
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="9 18 15 12 9 6"/>
      </svg>
    </div>
  );
}

function BadgeRed({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-sm py-2 px-3 rounded mb-3 w-full text-center font-medium"
      style={{ background: '#fee2e2', color: '#991b1b' }}>
      {children}
    </div>
  );
}

function BadgeGreen({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-sm py-2 px-3 rounded mb-3 w-full text-center font-bold"
      style={{ background: '#d1fae5', color: '#065f46' }}>
      {children}
    </div>
  );
}

function BadgeGreenSolid({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-sm py-2 px-3 rounded mb-3 w-full text-center font-bold flex items-center justify-center gap-1"
      style={{ background: '#d1fae5', color: '#065f46' }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      {children}
    </div>
  );
}

function Chip({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <span className="py-2 px-4 rounded-full" style={{ background: '#334155', color, border: '1px solid #475569' }}>
      {children}
    </span>
  );
}

/* ── Icons (inline SVG) ── */
const iconProps = { width: 44, height: 44, viewBox: '0 0 24 24', fill: 'none', strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

function MegaphoneIcon() {
  return (
    <svg {...iconProps} stroke="#475569" className="mb-3">
      <path d="M3 11l19-9-9 19-2-8-8-2z"/>
    </svg>
  );
}

function UserMinusIcon() {
  return (
    <svg {...iconProps} stroke="#475569" className="mb-3">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <line x1="22" y1="11" x2="16" y2="11"/>
    </svg>
  );
}

function FrownIcon() {
  return (
    <svg {...iconProps} stroke="#475569" className="mb-3">
      <circle cx="12" cy="12" r="10"/>
      <path d="M16 16s-1.5-2-4-2-4 2-4 2"/>
      <line x1="9" y1="9" x2="9.01" y2="9"/>
      <line x1="15" y1="9" x2="15.01" y2="9"/>
    </svg>
  );
}

function QrCodeIcon() {
  return (
    <svg {...iconProps} stroke="#059669" className="mb-3">
      <rect x="3" y="3" width="7" height="7"/>
      <rect x="14" y="3" width="7" height="7"/>
      <rect x="3" y="14" width="7" height="7"/>
      <rect x="14" y="14" width="3" height="3"/>
      <line x1="14" y1="20" x2="20" y2="20"/>
      <line x1="20" y1="14" x2="20" y2="17"/>
    </svg>
  );
}

function BotIcon() {
  return (
    <svg {...iconProps} stroke="#fde68a" className="mb-3">
      <rect x="3" y="11" width="18" height="10" rx="2"/>
      <circle cx="12" cy="5" r="2"/>
      <line x1="12" y1="7" x2="12" y2="11"/>
      <line x1="8" y1="16" x2="8" y2="16"/>
      <line x1="16" y1="16" x2="16" y2="16"/>
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg {...iconProps} stroke="#059669" className="mb-3">
      <polyline points="8 21 12 17 16 21"/>
      <line x1="12" y1="17" x2="12" y2="11"/>
      <path d="M7 4H4a2 2 0 0 0-2 2v2c0 4 3 7 7 7s7-3 7-7V6a2 2 0 0 0-2-2h-3"/>
      <rect x="7" y="2" width="10" height="4" rx="1"/>
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fde68a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z"/>
      <path d="M19 3l.5 1.5L21 5l-1.5.5L19 7l-.5-1.5L17 5l1.5-.5z"/>
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  );
}
