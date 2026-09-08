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
    <section id="hero" className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-aurora-hero">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20">
        
        {/* Overline & Volume Marker */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-10 border-b border-slate-200/80">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#5E6AD2] shadow-[0_0_8px_#5E6AD2]" />
            <span className="label-caps text-[#5E6AD2] tracking-[0.16em]">
              PORTFOLIO PROFILE & VALUE PROPOSITION
            </span>
          </div>
          <div className="flex items-center gap-2 label-caps text-[#64748B] text-[10px]">
            <MapPin className="w-3.5 h-3.5 text-[#5E6AD2]" />
            <span>{info.location.toUpperCase()} • PTIT CLASS OF 2027</span>
          </div>
        </div>

        {/* Main Introduction */}
        <div className="max-w-4xl mb-14">
          {/* Status / Role Pill Badge with green dot */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-slate-200/90 bg-white/80 backdrop-blur-md mb-8 shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] shrink-0 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            <span className="label-caps text-[#0B0E17] text-[11px] font-bold tracking-[0.14em]">
              {language === 'vi' ? 'KỸ SƯ PHẦN MỀM & LẬP TRÌNH VIÊN BACKEND' : 'SOFTWARE ENGINEER & BACKEND DEVELOPER'}
            </span>
          </div>

          {/* Big Headline */}
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-[72px] font-extrabold text-[#0B0E17] mb-8 uppercase tracking-tight leading-[1.08]">
            {language === 'vi' ? 'CHÀO BẠN, MÌNH LÀ ' : "HI THERE, I'M "}
            <span className="text-iris-gradient whitespace-nowrap">{info.name.toUpperCase()}.</span>
          </h1>

          {/* Value-Driven Paragraph */}
          <p className="body-lg text-[#334155] text-lg sm:text-xl font-normal leading-relaxed max-w-3xl mb-10">
            {info.bio}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-linear-primary">
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

        {/* Linear Glass Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6">
          {info.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 linear-card flex flex-col justify-between"
            >
              <div className="font-heading text-3xl sm:text-5xl font-extrabold text-iris-gradient mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-[#64748B] font-medium leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
