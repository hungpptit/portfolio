import React from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';
import { UI_TRANSLATIONS } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';

export const Skills: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];
  const groups = SKILL_GROUPS[language];

  return (
    <section id="skills" className="py-20 md:py-32 border-t border-[#E2E8F0] bg-[#F8FAFC]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-8 border-b border-[#E2E8F0] gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <span className="label-caps text-[#2563EB]">
                {t.skills.badge}
              </span>
            </div>
            <h2 className="headline-lg text-[#0F172A]">
              {t.skills.title}
            </h2>
          </div>
          <p className="body-md text-[#64748B] max-w-md">
            {language === 'vi'
              ? 'Tổng quan về kiến trúc hệ thống, ngôn ngữ lập trình, cơ sở dữ liệu quan hệ, bộ nhớ đệm và công cụ kỹ thuật Backend.'
              : 'A comprehensive overview of architectural proficiencies, languages, distributed caches, and backend engineering tools.'}
          </p>
        </div>

        {/* 4 Group Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-[#E2E8F0] divide-y md:divide-y-0 md:divide-x divide-[#E2E8F0] bg-white rounded-2xl shadow-xs overflow-hidden">
          {groups.map((group, idx) => (
            <div key={idx} className="p-8 flex flex-col justify-between group hover:bg-[#F8FAFC] transition-colors duration-300">
              <div>
                <span className="label-caps text-[#2563EB] text-[10px] block mb-4 font-bold">
                  DOM. 0{idx + 1}
                </span>
                
                <h3 className="font-heading text-xl font-bold text-[#0F172A] mb-2">
                  {group.category}
                </h3>
                
                <p className="text-xs text-[#64748B] font-normal leading-relaxed mb-6">
                  {group.description}
                </p>

                {/* Skill List */}
                <div className="space-y-2.5 pt-5 border-t border-[#F1F5F9]">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center justify-between py-1.5 border-b border-[#F8FAFC]">
                      <span className="text-xs text-[#334155] font-semibold">
                        {skill.name}
                      </span>
                      <span className="label-caps text-[9px] text-[#2563EB] bg-[#EFF6FF] px-2 py-0.5 rounded border border-[#DBEAFE] font-bold">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
                <span className="label-caps text-[9px] text-[#64748B]">STATUS</span>
                <span className="label-caps text-[9px] text-[#2563EB] font-bold">PRODUCTION READY</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
