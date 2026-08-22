import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
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
                {PERSONAL_INFO.name}
              </div>
              <div className="label-caps text-[9px] text-[#8e9192]">
                AURELIAN EDITORIAL MONOGRAPH — 2026
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
              WORKS
            </a>
            <a
              href="#skills"
              className="label-caps text-[#8e9192] hover:text-[#D4AF37] transition-colors"
            >
              EXPERTISE
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="label-caps text-[#8e9192] hover:text-[#D4AF37] transition-colors"
            >
              GITHUB
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 label-caps text-[#D4AF37] hover:text-[#e4e2e1] transition-colors cursor-pointer"
            >
              <span>ASCEND</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8e9192]">
          <div className="label-caps text-[10px]">
            ALL RIGHTS RESERVED • PHAM TUAN HUNG © {new Date().getFullYear()}
          </div>
          <div className="label-caps text-[10px] text-[#8e9192]">
            STYLED UNDER AURELIAN EDITORIAL DISCIPLINE
          </div>
        </div>

      </div>
    </footer>
  );
};
