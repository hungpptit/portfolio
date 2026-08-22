import React from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 md:py-36 border-t border-[#2a2a2a] bg-[#111111]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#2a2a2a] gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-1.5 h-1.5 bg-[#D4AF37]" />
              <span className="label-caps text-[#D4AF37]">
                SECTION 02 — TECHNICAL DISCIPLINE
              </span>
            </div>
            <h2 className="headline-lg text-[#e4e2e1]">
              Core Capabilities & Technologies
            </h2>
          </div>
          <p className="body-md text-[#8e9192] max-w-md">
            A comprehensive overview of architectural proficiencies, languages, distributed caches, and backend engineering tools.
          </p>
        </div>

        {/* 4 Group Ledger Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-[#2a2a2a] divide-y md:divide-y-0 md:divide-x divide-[#2a2a2a] bg-[#161616]">
          {SKILL_GROUPS.map((group, idx) => (
            <div key={idx} className="p-8 flex flex-col justify-between group hover:bg-[#1c1c1c] transition-colors duration-400">
              <div>
                <span className="label-caps text-[#D4AF37] text-[10px] block mb-4">
                  DOM. 0{idx + 1}
                </span>
                
                <h3 className="font-serif-editorial text-xl font-bold text-[#e4e2e1] mb-2">
                  {group.category}
                </h3>
                
                <p className="text-xs text-[#8e9192] font-light leading-relaxed mb-8">
                  {group.description}
                </p>

                {/* Skill List */}
                <div className="space-y-3 pt-6 border-t border-[#222222]">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center justify-between py-1.5 border-b border-[#1f2020]">
                      <span className="text-xs text-[#c4c7c7] font-medium">
                        {skill.name}
                      </span>
                      <span className="label-caps text-[9px] text-[#8e9192] bg-[#111111] px-2 py-0.5 border border-[#2a2a2a]">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#222222] flex items-center justify-between">
                <span className="label-caps text-[9px] text-[#8e9192]">STATUS</span>
                <span className="label-caps text-[9px] text-[#D4AF37]">PRODUCTION READY</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
