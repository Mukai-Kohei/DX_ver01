'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '#business', label: 'BUSINESS' },
  { href: '#company',  label: 'COMPANY'  },
  { href: '#contact',  label: 'CONTACT'  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    /* Hero section is pinned for +=500vh — stay transparent until past that zone */
    const update = () => {
      setScrolled(window.scrollY > window.innerHeight * 5.2);
    };

    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md text-text-main'
          : 'bg-transparent text-white'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div
              className={`font-bold font-en text-xl md:text-2xl transition-colors duration-300 ${
                scrolled ? 'text-primary' : 'text-white'
              }`}
            >
              COMPANY
            </div>
          </Link>

          {/* Hamburger only */}
          <button
            className="flex flex-col gap-1.5 w-7 h-7 justify-center items-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                scrolled ? 'bg-text-main' : 'bg-white'
              } ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                scrolled ? 'bg-text-main' : 'bg-white'
              } ${mobileMenuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                scrolled ? 'bg-text-main' : 'bg-white'
              } ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full transition-all duration-500 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(0,18,54,0.97)', zIndex: 90 }}
        onClick={() => setMobileMenuOpen(false)}
      >
        <nav
          className="flex flex-col items-center justify-center h-full gap-8"
          onClick={(e) => e.stopPropagation()}
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-en text-2xl md:text-3xl font-bold text-white tracking-widest transition-all duration-300 hover:text-secondary ${
                mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: mobileMenuOpen ? `${i * 60}ms` : '0ms' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Close button */}
        <button
          className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
          style={{ zIndex: 100 }}
        >
          <span className="block w-6 h-0.5 bg-white rotate-45 absolute" />
          <span className="block w-6 h-0.5 bg-white -rotate-45 absolute" />
        </button>
      </div>
    </header>
  );
}
