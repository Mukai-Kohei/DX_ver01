'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '#business', label: 'Business' },
  { href: '#company', label: 'Company' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        background: scrolled ? 'rgba(255,255,255,0.90)' : 'rgba(255,255,255,0.65)',
        borderBottom: scrolled ? '1px solid var(--hair)' : '1px solid transparent',
        transition: 'background 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div className="container-custom">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
          {/* Brand */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--accent)', fontSize: '8px' }}>●</span>
            <span
              style={{
                fontFamily: 'var(--f-mono)',
                fontSize: '9px',
                color: 'var(--ink-mute)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
              className="hidden sm:block"
            >
              DIGITAL TRANSFORMATION STUDIO
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex" style={{ alignItems: 'center', gap: '36px' }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                style={{
                  fontFamily: 'var(--f-mono)',
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  color: 'var(--ink-mute)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="contact-pill"
              style={{
                fontFamily: 'var(--f-mono)',
                fontSize: '12px',
                letterSpacing: '0.06em',
                color: 'var(--ink)',
                textDecoration: 'none',
                border: '1px solid var(--ink)',
                borderRadius: '9999px',
                padding: '8px 20px',
                transition: 'background 0.2s ease, color 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              Contact <span aria-hidden>→</span>
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="flex md:hidden flex-col gap-1.5 w-7 h-7 justify-center items-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(255,255,255,0.98)', zIndex: 90 }}
        onClick={() => setMobileMenuOpen(false)}
      >
        <nav
          className="flex flex-col items-center justify-center h-full gap-10"
          onClick={(e) => e.stopPropagation()}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--f-jp)',
                fontSize: '28px',
                fontWeight: 700,
                color: 'var(--ink)',
                textDecoration: 'none',
                letterSpacing: '-0.02em',
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              fontFamily: 'var(--f-mono)',
              fontSize: '13px',
              color: '#fff',
              background: 'var(--ink)',
              padding: '14px 32px',
              borderRadius: '9999px',
              textDecoration: 'none',
              letterSpacing: '0.08em',
              marginTop: '20px',
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact →
          </a>
        </nav>
      </div>

      <style>{`
        .nav-link:hover { color: var(--ink) !important; }
        .contact-pill:hover { background: var(--ink); color: #fff !important; }
      `}</style>
    </header>
  );
}
