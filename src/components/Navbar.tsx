import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { UI_TRANSLATIONS } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];
  const info = PERSONAL_INFO[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#capabilities', label: t.nav.capabilities },
    { href: '#projects', label: t.nav.works },
    { href: '#experience', label: t.nav.foundation },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      <div
        className={`w-full border-b transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] py-3.5'
            : 'bg-white/40 backdrop-blur-md border-slate-200/40 py-5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20 flex items-center justify-between">
          
          {/* Brand Monogram & Title */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-gradient-to-br from-[#5E6AD2] to-[#4338CA] rounded-xl flex items-center justify-center shadow-sm shadow-[#5E6AD2]/25 group-hover:scale-105 transition-all duration-300">
              <span className="font-heading text-xs font-black text-white tracking-wider">
                TH
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-sm font-bold tracking-tight text-[#0B0E17] group-hover:text-[#5E6AD2] transition-colors duration-300">
                {info.name.toUpperCase()}
              </span>
              <span className="label-caps text-[9px] text-[#64748B]">
                {t.nav.role}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-2 group text-[#475569] hover:text-[#0B0E17] transition-colors duration-300 flex flex-col items-center font-medium"
              >
                {/* Iris Glow Dot */}
                <span className="w-1.5 h-1.5 rounded-full bg-[#5E6AD2] shadow-[0_0_8px_#5E6AD2] opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-1" />
                <span className="label-caps text-[11px] font-semibold tracking-[0.12em]">
                  {link.label}
                </span>
              </a>
            ))}
          </nav>

          {/* Right Action: Language Toggle + GitHub + Contact */}
          <div className="hidden sm:flex items-center gap-3.5">
            <LanguageToggle />
            <a
              href={info.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-slate-200/80 bg-white/90 backdrop-blur-md rounded-xl text-[#64748B] hover:text-[#5E6AD2] hover:border-[#5E6AD2]/40 hover:bg-[#5E6AD2]/5 transition-all duration-300 shadow-xs"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="btn-linear-primary text-[11px] py-2 px-4.5"
            >
              <span>{t.nav.contact}</span>
            </a>
          </div>

          {/* Mobile Menu & Toggle */}
          <div className="md:hidden flex items-center gap-2.5">
            <LanguageToggle showIcon={false} />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0B0E17] border border-slate-200 bg-white/90 rounded-xl hover:border-[#5E6AD2] transition-colors shadow-xs"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200 px-6 py-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="label-caps text-xs text-[#334155] hover:text-[#5E6AD2] flex items-center gap-3 py-2.5 border-b border-slate-100"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#5E6AD2]" />
              <span>{link.label}</span>
            </a>
          ))}
          <div className="pt-2 flex items-center justify-between">
            <a
              href={info.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-[#64748B] hover:text-[#0B0E17]"
            >
              <GithubIcon className="w-4 h-4" />
              <span className="label-caps text-[10px]">HUNG PPTIT</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-linear-primary text-[10px] py-2 px-4"
            >
              {t.nav.contact}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
