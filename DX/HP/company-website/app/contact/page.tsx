'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const [form, setForm] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const FORMSPREE_ID = 'xlgovpvb';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          company: form.company,
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          _subject: `【お問い合わせ】${form.company ? form.company + ' / ' : ''}${form.name}様`,
          _replyto: form.email,
        }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ company: '', name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: "'Hiragino Kaku Gothic ProN','Noto Sans JP',sans-serif" }}>

      {/* ── Blue gradient header band ── */}
      <div style={{ background: 'linear-gradient(135deg,#001D4A 0%,#003D82 45%,#0057B8 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)',
          backgroundSize: '60px 60px' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: 320, height: 320, pointerEvents: 'none',
          background: 'radial-gradient(circle at 100% 0%, rgba(0,160,233,0.22) 0%, transparent 65%)' }} />
        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto', padding: '20px 24px 36px', boxSizing: 'border-box' }}>
          <nav style={{ marginBottom: 20 }}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'rgba(255,255,255,0.70)', textDecoration: 'none' }}>
              <ChevronLeft />トップページに戻る
            </Link>
          </nav>
          <header style={{ background: 'rgba(255,255,255,0.09)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 16, overflow: 'hidden', color: '#fff' }}>
            <div style={{ padding: '28px 28px 24px' }}>
              <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.90)', padding: '3px 12px', borderRadius: 20, marginBottom: 12 }}>
                CONTACT US
              </span>
              <h1 style={{ fontSize: 'clamp(20px, 4vw, 28px)', fontWeight: 700, marginBottom: 8, lineHeight: 1.3 }}>
                お問い合わせ
              </h1>
              <p style={{ fontSize: 'clamp(12px, 2vw, 14px)', color: 'rgba(255,255,255,0.72)', lineHeight: 1.6, margin: 0 }}>
                サービスに関するご質問・ご相談など、お気軽にお問い合わせください。
              </p>
            </div>
            <div style={{ height: 3, background: 'linear-gradient(90deg,#00A0E9,#2563eb)' }} />
          </header>
        </div>
      </div>

      {/* ── Form area ── */}
      <div style={{ background: '#f5f7fa', flex: 1 }}>
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '40px 24px 64px', boxSizing: 'border-box' }}>

          {status === 'success' ? (
            <div style={{
              background: '#fff', borderRadius: 16, padding: '48px 32px', textAlign: 'center',
              border: '1px solid #bfdbfe', boxShadow: '0 4px 24px rgba(0,87,184,0.08)',
            }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg,#0057B8,#0ea5e9)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <CheckIcon />
              </div>
              <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1e293b', marginBottom: 10 }}>送信完了しました</h2>
              <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7, marginBottom: 28 }}>
                お問い合わせありがとうございます。<br />
                内容を確認のうえ、担当者よりご連絡いたします。
              </p>
              <Link href="/" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600,
                color: '#0057B8', textDecoration: 'none',
              }}>
                <ChevronLeft />トップページに戻る
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: '#fff', borderRadius: 16, padding: 'clamp(20px, 5vw, 36px) clamp(16px, 4vw, 32px)', boxShadow: '0 4px 24px rgba(0,87,184,0.08)', border: '1px solid #e2e8f0' }}>

              <div style={{ display: 'grid', gap: 20 }}>
                {/* 会社名 */}
                <Field label="会社名" required>
                  <input
                    type="text" name="company" value={form.company}
                    onChange={handleChange} placeholder="株式会社〇〇"
                    required style={inputStyle}
                  />
                </Field>

                {/* お名前 */}
                <Field label="お名前" required>
                  <input
                    type="text" name="name" value={form.name}
                    onChange={handleChange} placeholder="山田 太郎"
                    required style={inputStyle}
                  />
                </Field>

                {/* メールアドレス */}
                <Field label="メールアドレス" required>
                  <input
                    type="email" name="email" value={form.email}
                    onChange={handleChange} placeholder="example@company.com"
                    required style={inputStyle}
                  />
                </Field>

                {/* 電話番号 */}
                <Field label="電話番号" hint="任意">
                  <input
                    type="tel" name="phone" value={form.phone}
                    onChange={handleChange} placeholder="090-0000-0000"
                    style={inputStyle}
                  />
                </Field>

                {/* お問い合わせ内容 */}
                <Field label="お問い合わせ内容" required>
                  <textarea
                    name="message" value={form.message}
                    onChange={handleChange}
                    placeholder="サービスについてのご質問、導入のご相談など、お気軽にご記入ください。"
                    required rows={6}
                    style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.7 }}
                  />
                </Field>
              </div>

              {status === 'error' && (
                <p style={{ color: '#dc2626', fontSize: 13, marginTop: 16, textAlign: 'center' }}>
                  送信に失敗しました。しばらくしてから再度お試しください。
                </p>
              )}

              <div style={{ marginTop: 28, textAlign: 'center' }}>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 10,
                    background: status === 'loading' ? '#94a3b8' : 'linear-gradient(135deg,#0057B8,#0ea5e9)',
                    color: '#fff', fontWeight: 700, fontSize: 15,
                    padding: '14px 48px', borderRadius: 40, border: 'none',
                    cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                    boxShadow: status === 'loading' ? 'none' : '0 4px 16px rgba(0,87,184,0.35)',
                    transition: 'opacity 0.2s',
                  }}
                >
                  {status === 'loading' ? '送信中...' : '送信する'}
                  {status !== 'loading' && <SendIcon />}
                </button>
                <p style={{ fontSize: 12, color: '#94a3b8', marginTop: 12 }}>
                  送信後、担当者より2営業日以内にご連絡いたします。
                </p>
              </div>
            </form>
          )}
        </div>
      </div>

      <style>{`
        input:focus, textarea:focus {
          outline: none;
          border-color: #0057B8 !important;
          box-shadow: 0 0 0 3px rgba(0,87,184,0.12);
        }
      `}</style>
    </div>
  );
}

/* ── Field wrapper ── */
function Field({ label, required, hint, children }: { label: string; required?: boolean; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600, color: '#334155', marginBottom: 8 }}>
        {label}
        {required && <span style={{ fontSize: 10, fontWeight: 700, background: '#0057B8', color: '#fff', padding: '2px 8px', borderRadius: 10 }}>必須</span>}
        {hint && <span style={{ fontSize: 11, color: '#94a3b8' }}>{hint}</span>}
      </label>
      {children}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%', fontSize: 14, color: '#1e293b',
  border: '1.5px solid #e2e8f0', borderRadius: 10,
  padding: '12px 14px', background: '#f8fafc',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  boxSizing: 'border-box',
};

/* ── Icons ── */
function ChevronLeft() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>;
}
function SendIcon() {
  return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>;
}
function CheckIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>;
}
