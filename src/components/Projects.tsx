import React, { useState } from 'react';
import { ArrowUpRight, GitBranch, ExternalLink, Lock } from 'lucide-react';
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
    <section id="projects" className="py-20 md:py-32 border-t border-slate-200/80 bg-white/40">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-8 border-b border-slate-200/80 gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#5E6AD2] shadow-[0_0_8px_#5E6AD2]" />
              <span className="label-caps text-[#5E6AD2]">
                {t.projects.badge}
              </span>
            </div>
            <h2 className="headline-lg text-[#0B0E17]">
              {t.projects.title}
            </h2>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center flex-wrap gap-2.5 border-b md:border-b-0 border-slate-200/80 pb-4 md:pb-0">
            {[
              { key: 'all', label: t.projects.all },
              { key: 'backend', label: t.projects.backend },
              { key: 'ai', label: t.projects.ai },
              { key: 'mobile', label: t.projects.mobile },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key as ProjectCategory)}
                className={`relative py-1.5 px-3.5 rounded-xl text-xs label-caps transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  activeFilter === tab.key
                    ? 'bg-[#5E6AD2]/10 text-[#5E6AD2] font-bold border border-[#5E6AD2]/30 shadow-xs'
                    : 'text-[#64748B] hover:text-[#0B0E17] hover:bg-slate-100/80'
                }`}
              >
                {activeFilter === tab.key && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5E6AD2]" />
                )}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => {
            const isFeatured = idx === 0 && activeFilter === 'all';
            const hasDetailPage = !!project.hasDetailPage;

            return (
              <div
                key={project.id}
                className={`p-8 md:p-10 linear-card flex flex-col justify-between group ${
                  isFeatured ? 'md:col-span-2 border-[#5E6AD2]/35 bg-gradient-to-b from-white/95 to-[#5E6AD2]/5' : ''
                }`}
              >
                <div>
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between gap-4 pb-5 mb-6 border-b border-slate-200/70">
                    <div className="flex items-center gap-3">
                      <span className="label-caps text-[#5E6AD2] text-[10px] font-bold">
                        {project.category.toUpperCase()} / #{String(idx + 1).padStart(2, '0')}
                      </span>
                      {project.branch && (
                        <span className="font-mono-code text-[11px] text-[#64748B] flex items-center gap-1 border-l border-slate-200 pl-3">
                          <GitBranch className="w-3.5 h-3.5 text-[#64748B]" />
                          {project.branch}
                        </span>
                      )}
                    </div>
                    {project.metrics && (
                      <span className="label-caps text-[10px] text-[#5E6AD2] bg-gradient-to-r from-[#5E6AD2]/10 to-[#06B6D4]/10 border border-[#5E6AD2]/25 px-3 py-1 rounded-lg font-bold shadow-2xs">
                        {project.metrics}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="headline-md text-[#0B0E17] group-hover:text-[#5E6AD2] transition-colors duration-200 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#64748B] font-bold mb-5">
                    {project.subtitle}
                  </p>

                  <p className="body-md text-[#334155] mb-6 font-normal leading-relaxed">
                    {project.description}
                  </p>

                  {/* Architecture Highlights */}
                  <div className="p-6 bg-slate-50/80 border border-slate-200/70 rounded-2xl mb-6">
                    <span className="label-caps text-[#64748B] text-[10px] block mb-3 font-bold">
                      {language === 'vi' ? 'ĐẶC TẢ ĐIỂM NHẤN KIẾN TRÚC HỆ THỐNG' : 'SYSTEM ARCHITECTURE SPECIFICATION'}
                    </span>
                    <ul className="space-y-2.5">
                      {project.architectureHighlights.map((hl, hIdx) => (
                        <li key={hIdx} className="text-xs text-[#334155] flex items-start gap-2.5 leading-relaxed font-normal">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#5E6AD2] mt-1.5 shrink-0 shadow-[0_0_6px_#5E6AD2]" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer: Tags & Actions */}
                <div className="pt-6 border-t border-slate-200/70 flex flex-col gap-5">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono-code text-[11px] px-2.5 py-1 bg-white border border-slate-200/80 text-[#334155] rounded-lg font-medium shadow-2xs"
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
                        className="btn-linear-primary text-[11px] px-4 py-2.5 rounded-xl group/btn"
                      >
                        <ExternalLink className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform mr-1.5" />
                        {t.projects.viewDetails}
                      </button>
                    ) : (
                      <div />
                    )}

                    {/* GitHub link or Private NDA badge */}
                    {project.isPrivateRepo ? (
                      <span
                        title={language === 'vi' ? 'Mã nguồn nội bộ thuộc sở hữu của CITARES Co., Ltd. & Khách hàng 3PL (Bảo mật theo thỏa thuận NDA)' : 'Proprietary enterprise source code protected by CITARES Co., Ltd. NDA policy'}
                        className="inline-flex items-center gap-1.5 text-[11px] text-[#64748B] bg-slate-100/90 border border-slate-200/80 px-2.5 py-1 rounded-lg font-semibold cursor-help"
                      >
                        <Lock className="w-3.5 h-3.5 text-[#64748B]" />
                        <span>{language === 'vi' ? 'Mã nguồn Nội bộ (NDA)' : 'Private Repo (NDA)'}</span>
                      </span>
                    ) : (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 label-caps text-[11px] text-[#64748B] hover:text-[#5E6AD2] transition-colors shrink-0 group/link font-semibold"
                      >
                        <span>{t.projects.sourceCode}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
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
