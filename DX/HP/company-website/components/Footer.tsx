import Link from 'next/link';

const footerLinks = {
  company: [
    { label: '会社概要', href: '#company' },
    { label: 'アクセス', href: '#' },
    { label: '沿革', href: '#' },
  ],
  service: [
    { label: '事業内容', href: '#business' },
    { label: 'サービス', href: '#service' },
    { label: '実績', href: '#' },
  ],
  recruit: [
    { label: '採用情報', href: '#recruit' },
    { label: '新卒採用', href: '#' },
    { label: 'キャリア採用', href: '#' },
  ],
  other: [
    { label: 'お知らせ', href: '#news' },
    { label: 'お問い合わせ', href: '#contact' },
    { label: 'プライバシーポリシー', href: '#' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark text-white" id="footer">
      <div className="container-custom py-16">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">会社情報</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div>
            <h3 className="font-bold text-lg mb-4">サービス</h3>
            <ul className="space-y-2">
              {footerLinks.service.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recruit */}
          <div>
            <h3 className="font-bold text-lg mb-4">採用</h3>
            <ul className="space-y-2">
              {footerLinks.recruit.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other */}
          <div>
            <h3 className="font-bold text-lg mb-4">その他</h3>
            <ul className="space-y-2">
              {footerLinks.other.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Logo */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex justify-center">
            <Link href="/" className="font-en text-2xl font-bold">
              COMPANY
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-400">
          <p>&copy; {currentYear} COMPANY. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
