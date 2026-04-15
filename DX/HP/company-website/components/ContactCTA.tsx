'use client';

export default function ContactCTA() {
  return (
    <section
      className="relative pt-52 pb-24 md:pt-60 md:pb-36 overflow-hidden"
      id="contact"
      style={{
        background: 'linear-gradient(to bottom, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.45) 8%, rgba(255,255,255,0.08) 18%, rgba(255,255,255,0) 26%), linear-gradient(135deg, #002D6E 0%, #0057B8 55%, #006FD6 100%)',
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
        <div className="flex justify-center">

          {/* — Form — */}
          <a
            href="/contact"
            className="cta-card group flex flex-col items-center gap-5 p-8 rounded-2xl text-center cursor-pointer w-full max-w-sm"
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

        </div>
      </div>
    </section>
  );
}
