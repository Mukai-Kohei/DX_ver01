'use client';

export default function ContactCTA() {
  return (
    <section className="relative section-padding bg-primary overflow-hidden" id="contact">
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
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div>
            <p className="font-en text-sm text-white font-semibold tracking-widest mb-4 opacity-90">
              CONTACT US
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              お問い合わせ
            </h2>
            <p className="text-white text-lg opacity-90 leading-relaxed">
              サービスに関するご質問やご相談など、
              <br className="hidden sm:block" />
              お気軽にお問い合わせください。
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#"
              className="btn bg-white text-primary hover:bg-opacity-90 px-12 py-4 text-lg"
            >
              お問い合わせフォーム
            </a>
            <a
              href="tel:03-1234-5678"
              className="btn btn-outline px-12 py-4 text-lg"
            >
              <span className="font-en">TEL: 03-1234-5678</span>
            </a>
          </div>

          <p className="text-white text-sm opacity-75 pt-4">
            受付時間: 平日 9:00〜18:00（土日祝日を除く）
          </p>
        </div>
      </div>
    </section>
  );
}
