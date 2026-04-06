'use client';

export default function ContactCTA() {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      id="contact"
      style={{
        background: 'linear-gradient(135deg, #002D6E 0%, #0057B8 55%, #006FD6 100%)',
      }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Corner glows — keep decoration to two spots only */}
      <div
        className="absolute top-0 right-0 w-80 h-80 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 100% 0%, rgba(0,160,233,0.22) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 0% 100%, rgba(0,61,130,0.40) 0%, transparent 65%)',
        }}
      />

      <div className="container-custom relative z-10">

        {/* ── Section header ── */}
        <div className="text-center mb-12">
          <span className="inline-block font-en text-xs font-bold tracking-[0.32em] uppercase mb-4"
            style={{ color: 'rgba(255,255,255,0.55)' }}>
            CONTACT US
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            お問い合わせ
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.78)' }}>
            サービスに関するご質問やご相談など、
            <br className="hidden sm:block" />
            お気軽にお問い合わせください。
          </p>
        </div>

        {/* ── CTA Cards ── */}
        <style>{`
          .cta-card {
            background: rgba(255,255,255,0.10);
            border: 1px solid rgba(255,255,255,0.18);
            transition: background 250ms ease, border-color 250ms ease;
          }
          .cta-card:hover {
            background: rgba(255,255,255,0.16);
            border-color: rgba(255,255,255,0.32);
          }
        `}</style>
        <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-4">

          {/* — Form — */}
          <a
            href="#"
            className="cta-card group flex flex-col items-center gap-5 p-8 rounded-2xl text-center cursor-pointer"
          >
            {/* Icon */}
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(255,255,255,0.14)' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>

            {/* Text */}
            <div className="space-y-1">
              <p className="text-white font-bold text-lg">お問い合わせフォーム</p>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.60)' }}>
                24時間受け付けています
              </p>
            </div>

            {/* Arrow CTA */}
            <span
              className="flex items-center gap-2 text-sm font-semibold"
              style={{ color: 'rgba(255,255,255,0.90)' }}
            >
              フォームへ進む
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:translate-x-1">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </span>
          </a>

          {/* — Phone — */}
          <a
            href="tel:03-1234-5678"
            className="cta-card group flex flex-col items-center gap-5 p-8 rounded-2xl text-center cursor-pointer"
          >
            {/* Icon */}
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(255,255,255,0.14)' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12
                  a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1h3a2 2 0 0 1 2 1.72
                  c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.1a16 16 0 0 0 6 6
                  l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>

            {/* Text */}
            <div className="space-y-1">
              <p className="text-white font-bold text-lg">お電話でのお問い合わせ</p>
              <p className="font-en text-2xl font-bold text-white tracking-wide">
                03-1234-5678
              </p>
            </div>

            {/* Hours */}
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.60)' }}>
              平日 9:00〜18:00（土日祝日を除く）
            </p>
          </a>

        </div>
      </div>
    </section>
  );
}
