'use client';

import { HandWrittenBrand } from './ui/HandWritingText';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      style={{
        background: 'var(--ink)',
        color: 'rgba(255,255,255,0.65)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div className="container-custom" style={{ padding: '56px 20px 40px' }}>
        <div
          className="footer-top"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '40px',
            flexWrap: 'wrap',
            marginBottom: '40px',
          }}
        >
          <div>
            <HandWrittenBrand
              text="KARAKURI"
              strokeColor="rgba(255,255,255,0.55)"
              strokeWidth={3}
              inView={true}
              style={{ marginBottom: '6px' }}
              textStyle={{
                fontFamily: 'var(--f-mono)',
                fontSize: '16px',
                fontWeight: 700,
                color: '#fff',
                letterSpacing: '0.10em',
              }}
            />
            <p
              style={{
                fontFamily: 'var(--f-mono)',
                fontSize: '9px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.40)',
              }}
            >
              株式会社KARAKURI
            </p>
          </div>
          <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
            {[
              { href: '#business', label: 'Business' },
              { href: '#approach', label: 'Approach' },
              { href: '#company', label: 'Company' },
              { href: '#contact', label: 'Contact' },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: 'var(--f-mono)',
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  color: 'rgba(255,255,255,0.65)',
                  textDecoration: 'none',
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.10)',
            paddingTop: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'var(--f-mono)',
            fontSize: '10px',
            letterSpacing: '0.06em',
            color: 'rgba(255,255,255,0.45)',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          <p>© {currentYear} All Rights Reserved.</p>
          <p>BASED IN JAPAN · SERVING NATIONWIDE</p>
        </div>
      </div>
    </footer>
  );
}
