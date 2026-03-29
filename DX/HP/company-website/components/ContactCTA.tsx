'use client';

export default function ContactCTA() {
  return (
    <section className="relative section-padding overflow-hidden" id="contact">
      {/* ===== BACKGROUND ===== */}

      {/* Deep gradient base */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #003D82 0%, #0057B8 50%, #0070CC 100%)',
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* SVG geometric decorations */}
      <svg
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Large circle — top left */}
        <circle cx="100" cy="100" r="180" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
        <circle cx="100" cy="100" r="280" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
        {/* Large circle — bottom right */}
        <circle cx="1340" cy="500" r="200" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
        <circle cx="1340" cy="500" r="320" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
        {/* Diagonal lines */}
        <line x1="600" y1="0" x2="1440" y2="400" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
        <line x1="400" y1="0" x2="1440" y2="600" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
      </svg>

      {/* Radial glow — center */}
      <div
        className="absolute z-0 pointer-events-none"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(0,160,233,0.25) 0%, transparent 65%)',
          filter: 'blur(30px)',
        }}
      />

      {/* Top wave from previous section */}
      <div className="absolute top-0 left-0 w-full z-10 pointer-events-none">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block">
          <path d="M0,0 Q360,60 720,30 Q1080,0 1440,40 L1440,0 Z" fill="white"/>
        </svg>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="container-custom relative z-20">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div>
            <p className="font-en text-sm text-white font-semibold tracking-widest mb-4 opacity-80">
              — CONTACT US —
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              お問い合わせ
            </h2>
            <p className="text-white text-lg opacity-85 leading-relaxed">
              サービスに関するご質問やご相談など、
              <br className="hidden sm:block" />
              お気軽にお問い合わせください。
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#"
              className="btn px-12 py-4 text-lg"
              style={{
                background: 'white',
                color: 'var(--color-primary)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
              }}
            >
              お問い合わせフォーム
            </a>
            <a
              href="tel:03-1234-5678"
              className="btn btn-outline px-12 py-4 text-lg"
              style={{
                borderColor: 'rgba(255,255,255,0.6)',
              }}
            >
              <span className="font-en">TEL: 03-1234-5678</span>
            </a>
          </div>

          <p className="text-white text-sm opacity-60 pt-4">
            受付時間: 平日 9:00〜18:00（土日祝日を除く）
          </p>
        </div>
      </div>
    </section>
  );
}
