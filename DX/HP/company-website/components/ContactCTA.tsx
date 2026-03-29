'use client';

export default function ContactCTA() {
  return (
    <section className="relative py-12 md:py-16 bg-primary overflow-hidden" id="contact">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      {/* Radial glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(0,160,233,0.25) 0%, transparent 65%)' }}
      />
      {/* SVG decorative circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
          <circle cx="300" cy="300" r="280" fill="none" stroke="white" strokeWidth="1"/>
          <circle cx="300" cy="300" r="220" fill="none" stroke="white" strokeWidth="1"/>
          <circle cx="300" cy="300" r="160" fill="none" stroke="white" strokeWidth="1"/>
        </svg>
      </div>
      {/* Wave Background SVG */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div>
            <p className="font-en text-sm text-white font-semibold tracking-widest mb-3 opacity-90">
              CONTACT US
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              お問い合わせ
            </h2>
            <p className="text-white text-base opacity-90 leading-relaxed">
              サービスに関するご質問やご相談など、
              <br className="hidden sm:block" />
              お気軽にお問い合わせください。
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="#"
              className="btn bg-white text-primary hover:bg-opacity-90 px-10 py-3 text-base"
            >
              お問い合わせフォーム
            </a>
            <a
              href="tel:03-1234-5678"
              className="btn btn-outline px-10 py-3 text-base"
            >
              <span className="font-en">TEL: 03-1234-5678</span>
            </a>
          </div>

          <p className="text-white text-sm opacity-75 pt-2">
            受付時間: 平日 9:00〜18:00（土日祝日を除く）
          </p>
        </div>
      </div>
    </section>
  );
}
