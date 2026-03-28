'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '#message', label: 'MESSAGE' },
  { href: '#business', label: 'BUSINESS' },
  { href: '#service', label: 'SERVICE' },
  { href: '#news', label: 'NEWS' },
  { href: '#company', label: 'COMPANY' },
  { href: '#recruit', label: 'RECRUIT' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'h-16 md:h-20' : 'h-16 md:h-20'
          }`}
        >
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-en text-sm font-medium link-underline hover:opacity-80 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact Button + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="#contact"
              className={`btn transition-all duration-300 ${
                scrolled
                  ? 'bg-primary text-white hover:bg-primary-dark'
                  : 'bg-white text-primary hover:bg-opacity-90'
              } px-6 py-2 md:px-8 md:py-3 text-sm md:text-base`}
            >
              CONTACT
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden flex flex-col gap-1.5 w-6 h-6 justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-full transition-all duration-300 ${
                  scrolled ? 'bg-text-main' : 'bg-white'
                } ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`block h-0.5 w-full transition-all duration-300 ${
                  scrolled ? 'bg-text-main' : 'bg-white'
                } ${mobileMenuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block h-0.5 w-full transition-all duration-300 ${
                  scrolled ? 'bg-text-main' : 'bg-white'
                } ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-16 md:top-20 left-0 w-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-custom py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-en text-sm font-medium text-text-main hover:text-primary transition-colors py-2 border-b border-border"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
