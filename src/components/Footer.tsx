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
    <footer className="py-14 border-t border-slate-200/80 bg-white/80 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-200/70">
          
          <div className="flex items-center gap-3.5">
            <div className="w-8 h-8 bg-gradient-to-br from-[#5E6AD2] to-[#4338CA] text-white rounded-lg flex items-center justify-center shadow-xs">
              <span className="font-heading text-xs font-black text-white">
                TH
              </span>
            </div>
            <div>
              <div className="font-heading text-base font-bold text-[#0B0E17]">
                {info.name}
              </div>
              <div className="label-caps text-[9px] text-[#64748B]">
                {t.footer.role.toUpperCase()} — 2026
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs">
            <a
              href="#hero"
              className="label-caps text-[#64748B] hover:text-[#5E6AD2] transition-colors font-bold"
            >
              INDEX
            </a>
            <a
              href="#projects"
              className="label-caps text-[#64748B] hover:text-[#5E6AD2] transition-colors font-bold"
            >
              {t.nav.works}
            </a>
            <a
              href="#capabilities"
              className="label-caps text-[#64748B] hover:text-[#5E6AD2] transition-colors font-bold"
            >
              {t.nav.capabilities}
            </a>
            <a
              href={info.github}
              target="_blank"
              rel="noopener noreferrer"
              className="label-caps text-[#64748B] hover:text-[#5E6AD2] transition-colors font-bold"
            >
              GITHUB
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 label-caps text-[#5E6AD2] hover:text-[#4338CA] transition-colors font-bold cursor-pointer"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>

        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <div>
            &copy; {new Date().getFullYear()} {info.name}. {t.footer.rights}
          </div>
          <div className="label-caps text-[10px] text-[#64748B] font-semibold">
            STATUS: <span className="text-[#10B981] font-bold">ACTIVE DEPLOYMENT</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
