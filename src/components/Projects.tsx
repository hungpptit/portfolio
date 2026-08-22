import React, { useState } from 'react';
import { ArrowUpRight, GitBranch, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PROJECTS } from '../data/portfolioData';
import { UI_TRANSLATIONS } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import { ProjectCategory } from '../types';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];
  const projectList = PROJECTS[language];

  const filteredProjects = projectList.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'backend') return project.category === 'backend';
    if (activeFilter === 'ai') return project.category === 'ai';
    if (activeFilter === 'mobile') return project.category === 'mobile';
    return true;
  });

  const handleViewDetail = (projectId: string) => {
    navigate(`/project/${projectId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="projects" className="py-24 md:py-36 border-t border-[#2a2a2a]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#2a2a2a] gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-1.5 h-1.5 bg-[#D4AF37]" />
              <span className="label-caps text-[#D4AF37]">
                {t.projects.badge}
              </span>
            </div>
            <h2 className="headline-lg text-[#e4e2e1]">
              {t.projects.title}
            </h2>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center flex-wrap gap-6 border-b md:border-b-0 border-[#2a2a2a] pb-4 md:pb-0">
            {[
              { key: 'all', label: t.projects.all },
              { key: 'backend', label: t.projects.backend },
              { key: 'ai', label: t.projects.ai },
              { key: 'mobile', label: t.projects.mobile },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key as ProjectCategory)}
                className={`relative py-1 text-xs label-caps transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === tab.key
                    ? 'text-[#D4AF37] font-bold'
                    : 'text-[#8e9192] hover:text-[#e4e2e1]'
                }`}
              >
                {activeFilter === tab.key && (
                  <span className="w-1 h-1 bg-[#D4AF37]" />
                )}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {filteredProjects.map((project, idx) => {
            const isFeatured = idx === 0 && activeFilter === 'all';
            const hasDetailPage = !!project.hasDetailPage;

            return (
              <div
                key={project.id}
                className={`p-8 md:p-12 border border-[#2a2a2a] bg-[#161616] hover:bg-[#1b1c1c] transition-all duration-400 flex flex-col justify-between group ${
                  isFeatured ? 'md:col-span-2 border-[#444748] bg-[#191919]' : ''
                }`}
              >
                <div>
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between gap-4 pb-6 mb-6 border-b border-[#2a2a2a]">
                    <div className="flex items-center gap-3">
                      <span className="label-caps text-[#D4AF37] text-[10px]">
                        {project.category.toUpperCase()} / #{String(idx + 1).padStart(2, '0')}
                      </span>
                      {project.branch && (
                        <span className="font-mono-code text-[11px] text-[#8e9192] flex items-center gap-1 border-l border-[#2a2a2a] pl-3">
                          <GitBranch className="w-3 h-3 text-[#8e9192]" />
                          {project.branch}
                        </span>
                      )}
                    </div>
                    {project.metrics && (
                      <span className="label-caps text-[10px] text-[#e4e2e1] bg-[#2a2a2a] px-2.5 py-1">
                        {project.metrics}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="headline-md text-[#e4e2e1] group-hover:text-[#D4AF37] transition-colors duration-300 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#8e9192] font-semibold mb-6">
                    {project.subtitle}
                  </p>

                  <p className="body-md text-[#c4c7c7] mb-8 font-light leading-relaxed">
                    {project.description}
                  </p>

                  {/* Architecture Highlights */}
                  <div className="p-6 bg-[#111111] border border-[#222222] mb-8">
                    <span className="label-caps text-[#8e9192] text-[10px] block mb-4">
                      {language === 'vi' ? 'ĐẶC TẢ ĐIỂM NHẤN KIẾN TRÚC HỆ THỐNG' : 'SYSTEM ARCHITECTURE SPECIFICATION'}
                    </span>
                    <ul className="space-y-3">
                      {project.architectureHighlights.map((hl, hIdx) => (
                        <li key={hIdx} className="text-xs text-[#c4c7c7] flex items-start gap-3 leading-relaxed font-light">
                          <span className="w-1 h-1 bg-[#D4AF37] mt-1.5 shrink-0" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer: Tags & Actions */}
                <div className="pt-6 border-t border-[#2a2a2a] flex flex-col gap-5">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono-code text-[11px] px-2.5 py-1 bg-[#1f2020] border border-[#2a2a2a] text-[#c4c7c7]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    {/* View Detail — primary CTA */}
                    {hasDetailPage ? (
                      <button
                        onClick={() => handleViewDetail(project.id)}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#D4AF37]/10 border border-[#D4AF37]/40 text-[#D4AF37] text-[11px] font-bold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-[#0e0e0e] transition-all duration-200 group/btn"
                      >
                        <ExternalLink className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform" />
                        {t.projects.viewDetails}
                      </button>
                    ) : (
                      <div />
                    )}

                    {/* GitHub link */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 label-caps text-[11px] text-[#8e9192] hover:text-[#D4AF37] transition-colors shrink-0 group/link"
                    >
                      <span>{t.projects.sourceCode}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
