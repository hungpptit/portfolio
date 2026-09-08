import React from 'react';
import { EXPERIENCE_MILESTONES } from '../data/portfolioData';
import { UI_TRANSLATIONS } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';

export const Experience: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];
  const list = EXPERIENCE_MILESTONES[language];

  return (
    <section id="experience" className="py-20 md:py-32 border-t border-slate-200/80 bg-aurora-section">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-8 border-b border-slate-200/80 gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#5E6AD2] shadow-[0_0_8px_#5E6AD2]" />
              <span className="label-caps text-[#5E6AD2]">
                {t.experience.badge}
              </span>
            </div>
            <h2 className="headline-lg text-[#0B0E17]">
              {t.experience.title}
            </h2>
          </div>
          <p className="body-md text-[#64748B] max-w-md">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Timeline Matrix */}
        <div className="space-y-6">
          {list.map((item, idx) => (
            <div
              key={idx}
              className="p-8 md:p-10 linear-card"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                
                {/* Left Column: Period & Organization */}
                <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-slate-200/80 pb-6 md:pb-0 md:pr-8">
                  <span className="label-caps text-[#5E6AD2] text-[11px] block mb-2 font-bold">
                    {item.period}
                  </span>
                  <div className="font-heading text-2xl font-bold text-[#0B0E17] mb-2">
                    {item.organization}
                  </div>
                  <div className="text-xs text-[#64748B] uppercase tracking-wider font-semibold">
                    {item.location}
                  </div>
                </div>

                {/* Right Column: Role & Key Highlights */}
                <div className="md:col-span-8">
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-[#0B0E17] mb-3">
                    {item.role}
                  </h3>
                  <p className="body-md text-[#334155] font-normal leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="p-6 bg-slate-50/80 border border-slate-200/70 rounded-2xl">
                    <span className="label-caps text-[#64748B] text-[10px] block mb-3 font-bold">
                      {language === 'vi' ? 'KẾT QUẢ & ĐIỂM NHẤN CỐT LÕI' : 'KEY ACHIEVEMENTS & MILESTONES'}
                    </span>
                    <ul className="space-y-2.5">
                      {item.highlights.map((hl, hIdx) => (
                        <li key={hIdx} className="text-xs text-[#334155] flex items-start gap-2.5 font-normal leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#5E6AD2] mt-1.5 shrink-0 shadow-[0_0_6px_#5E6AD2]" />
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
