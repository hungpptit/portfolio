import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { UI_TRANSLATIONS } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];
  const info = PERSONAL_INFO[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 border-t border-[#2a2a2a] bg-[#0e0e0e]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#1f2020]">
          
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 border border-[#D4AF37] flex items-center justify-center">
              <span className="font-serif-editorial text-xs font-bold text-[#D4AF37]">
                TH
              </span>
            </div>
            <div>
              <div className="font-serif-editorial text-base font-semibold text-[#e4e2e1]">
                {info.name}
              </div>
              <div className="label-caps text-[9px] text-[#8e9192]">
                {t.footer.role.toUpperCase()} — 2026
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-8 text-xs">
            <a
              href="#hero"
              className="label-caps text-[#8e9192] hover:text-[#D4AF37] transition-colors"
            >
              INDEX
            </a>
            <a
              href="#projects"
              className="label-caps text-[#8e9192] hover:text-[#D4AF37] transition-colors"
            >
              {t.nav.works}
            </a>
            <a
              href="#skills"
              className="label-caps text-[#8e9192] hover:text-[#D4AF37] transition-colors"
            >
              {t.nav.capabilities}
            </a>
            <a
              href={info.github}
              target="_blank"
              rel="noopener noreferrer"
              className="label-caps text-[#8e9192] hover:text-[#D4AF37] transition-colors"
            >
              GITHUB
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 label-caps text-[#D4AF37] hover:text-[#e4e2e1] transition-colors"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>

        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8e9192]">
          <div>
            &copy; {new Date().getFullYear()} {info.name}. {t.footer.rights}
          </div>
          <div className="label-caps text-[10px] text-[#8e9192]">
            STATUS: <span className="text-[#34D399]">ACTIVE DEPLOYMENT</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
