import React from 'react';
import { EXPERIENCE_MILESTONES } from '../data/portfolioData';
import { UI_TRANSLATIONS } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';

export const Experience: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];
  const list = EXPERIENCE_MILESTONES[language];

  return (
    <section id="experience" className="py-24 md:py-36 border-t border-[#2a2a2a]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#2a2a2a] gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-1.5 h-1.5 bg-[#D4AF37]" />
              <span className="label-caps text-[#D4AF37]">
                {t.experience.badge}
              </span>
            </div>
            <h2 className="headline-lg text-[#e4e2e1]">
              {t.experience.title}
            </h2>
          </div>
          <p className="body-md text-[#8e9192] max-w-md">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Editorial Timeline Matrix */}
        <div className="space-y-8">
          {list.map((item, idx) => (
            <div
              key={idx}
              className="p-8 md:p-12 border border-[#2a2a2a] bg-[#161616] hover:bg-[#1c1c1c] transition-all duration-400"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                
                {/* Left Column: Period & Organization */}
                <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-[#2a2a2a] pb-6 md:pb-0 md:pr-8">
                  <span className="label-caps text-[#D4AF37] text-[10px] block mb-2 font-bold">
                    {item.period}
                  </span>
                  <div className="font-serif-editorial text-2xl font-bold text-[#e4e2e1] mb-2">
                    {item.organization}
                  </div>
                  <div className="text-xs text-[#8e9192] uppercase tracking-wider">
                    {item.location}
                  </div>
                </div>

                {/* Right Column: Role & Key Highlights */}
                <div className="md:col-span-8">
                  <h3 className="font-serif-editorial text-xl md:text-2xl font-semibold text-[#e4e2e1] mb-3">
                    {item.role}
                  </h3>
                  <p className="body-md text-[#c4c7c7] font-light leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="p-6 bg-[#111111] border border-[#222222]">
                    <span className="label-caps text-[#8e9192] text-[10px] block mb-3">
                      {language === 'vi' ? 'KẾT QUẢ & ĐIỂM NHẤN CỐT LÕI' : 'KEY ACHIEVEMENTS & MILESTONES'}
                    </span>
                    <ul className="space-y-2.5">
                      {item.highlights.map((hl, hIdx) => (
                        <li key={hIdx} className="text-xs text-[#c4c7c7] flex items-start gap-3 font-light leading-relaxed">
                          <span className="w-1 h-1 bg-[#D4AF37] mt-1.5 shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
