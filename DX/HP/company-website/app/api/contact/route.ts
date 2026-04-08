import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { company, name, email, phone, message } = await req.json();

  // ── Validation ──────────────────────────────────────
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const TO_EMAIL       = process.env.CONTACT_TO_EMAIL;

  if (!RESEND_API_KEY || !TO_EMAIL) {
    // 環境変数未設定時はコンソールに出力してOKを返す（開発用フォールバック）
    console.log('Contact form submission:', { company, name, email, phone, message });
    return NextResponse.json({ ok: true });
  }

  // ── Send via Resend ──────────────────────────────────
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'お問い合わせフォーム <onboarding@resend.dev>',
      to: [TO_EMAIL],
      reply_to: email,
      subject: `【お問い合わせ】${company ? company + ' / ' : ''}${name}様`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#0057B8;border-bottom:2px solid #0057B8;padding-bottom:8px;">お問い合わせが届きました</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px 0;color:#64748b;width:140px;">会社名</td><td style="padding:10px 0;font-weight:600;">${company || '—'}</td></tr>
            <tr style="background:#f8fafc;"><td style="padding:10px 8px;color:#64748b;">お名前</td><td style="padding:10px 8px;font-weight:600;">${name}</td></tr>
            <tr><td style="padding:10px 0;color:#64748b;">メール</td><td style="padding:10px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr style="background:#f8fafc;"><td style="padding:10px 8px;color:#64748b;">電話番号</td><td style="padding:10px 8px;">${phone || '—'}</td></tr>
          </table>
          <h3 style="color:#334155;margin-top:24px;">お問い合わせ内容</h3>
          <div style="background:#f8fafc;padding:16px;border-radius:8px;line-height:1.7;">${message.replace(/\n/g, '<br>')}</div>
        </div>
      `,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error('Resend error:', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
