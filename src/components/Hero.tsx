import React from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { UI_TRANSLATIONS } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];
  const info = PERSONAL_INFO[language];

  return (
    <section id="hero" className="relative pt-36 pb-20 md:pt-48 md:pb-28 bg-editorial-gradient">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20">
        
        {/* Editorial Overline & Volume Marker */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-12 border-b border-[#2a2a2a]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#D4AF37]" />
            <span className="label-caps text-[#D4AF37] tracking-[0.2em]">
              PORTFOLIO PROFILE & VALUE PROPOSITION
            </span>
          </div>
          <div className="flex items-center gap-2 label-caps text-[#8e9192] text-[10px]">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{info.location.toUpperCase()} • PTIT CLASS OF 2027</span>
          </div>
        </div>

        {/* Main Introduction */}
        <div className="max-w-4xl mb-12">
          {/* Status / Role Pill Badge with glowing dot */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 border border-[#2a2a2a] bg-[#1a1a1a] mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
            </span>
            <span className="label-caps text-[#e4e2e1] text-[11px] font-semibold tracking-[0.18em]">
              {language === 'vi' ? 'KỸ SƯ PHẦN MỀM & LẬP TRÌNH VIÊN BACKEND' : 'SOFTWARE ENGINEER & BACKEND DEVELOPER'}
            </span>
          </div>

          {/* Big Editorial Headline */}
          <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold text-[#e4e2e1] mb-8 uppercase tracking-tight leading-[1.08]">
            {language === 'vi' ? 'XIN CHÀO, TÔI LÀ ' : 'HI, I AM '}
            <span className="text-[#D4AF37] italic font-normal whitespace-nowrap">{info.name.toUpperCase()}.</span>
          </h1>

          {/* Value-Driven Paragraph */}
          <p className="body-lg text-[#c4c7c7] text-lg sm:text-xl font-light leading-relaxed max-w-3xl mb-10">
            {info.bio}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-gold-outline">
              <span>{t.hero.exploreBtn}</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </a>

            <a
              href={info.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neutral-outline"
            >
              <GithubIcon className="w-4 h-4 mr-2" />
              <span>GITHUB PROFILE</span>
            </a>

            <a href="#contact" className="btn-neutral-outline">
              <span>{t.hero.contactBtn}</span>
            </a>
          </div>
        </div>

        {/* Clean Stats Row */}
        <div className="pt-16 mt-16 border-t border-[#2a2a2a] grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {info.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-bold text-[#D4AF37] mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-[#8e9192] font-light leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
