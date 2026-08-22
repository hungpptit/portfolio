import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#capabilities', label: 'CAPABILITIES' },
    { href: '#projects', label: 'WORKS' },
    { href: '#experience', label: 'FOUNDATION' },
    { href: '#contact', label: 'CONTACT' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-400">
      <div
        className={`w-full border-b transition-all duration-400 ${
          isScrolled
            ? 'bg-[#131313]/90 backdrop-blur-[20px] border-[#2a2a2a] py-4'
            : 'bg-[#131313]/50 backdrop-blur-[10px] border-[#1f2020] py-6'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20 flex items-center justify-between">
          
          {/* Brand Monogram & Title */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-8 h-8 border border-[#D4AF37] flex items-center justify-center transition-colors duration-400 group-hover:bg-[#D4AF37]">
              <span className="font-serif-editorial text-xs font-bold text-[#D4AF37] group-hover:text-[#121212] transition-colors duration-400">
                TH
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif-editorial text-sm font-semibold tracking-wide text-[#e4e2e1] group-hover:text-[#D4AF37] transition-colors duration-300">
                PHAM TUAN HUNG
              </span>
              <span className="label-caps text-[9px] text-[#8e9192]">
                SWE / BACKEND
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with Gold Dot indicator on hover */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-2 group text-[#c4c7c7] hover:text-[#e4e2e1] transition-colors duration-300 flex flex-col items-center"
              >
                {/* Gold Dot on Hover / Active */}
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-1" />
                <span className="label-caps text-[11px] font-medium tracking-[0.18em]">
                  {link.label}
                </span>
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border border-[#2a2a2a] text-[#8e9192] hover:text-[#e4e2e1] hover:border-[#D4AF37] transition-all duration-300"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="btn-gold-outline text-[10px] py-2.5 px-5"
            >
              <span>GET IN TOUCH</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#e4e2e1] border border-[#2a2a2a] hover:border-[#D4AF37]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#131313] border-b border-[#2a2a2a] px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="label-caps text-xs text-[#c4c7c7] hover:text-[#D4AF37] flex items-center gap-3 py-2 border-b border-[#1f2020]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span>{link.label}</span>
            </a>
          ))}
          <div className="pt-4 flex items-center justify-between">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-[#8e9192] hover:text-[#e4e2e1]"
            >
              <GithubIcon className="w-4 h-4" />
              <span className="label-caps text-[10px]">HUNG PPTIT</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-gold-outline text-[10px] py-2 px-4"
            >
              CONTACT
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
