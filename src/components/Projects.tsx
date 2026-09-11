import React, { useState } from 'react';
import { GitBranch, ExternalLink, Lock, Code2, Eye } from 'lucide-react';
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

        {/* Projects Showcase (Horizontal Cards matching Reference in Image 2) */}
        <div className="space-y-10 lg:space-y-14">
          {filteredProjects.map((project, idx) => {
            const hasDetailPage = !!project.hasDetailPage;
            const isImageLeft = idx % 2 === 0;

            return (
              <div
                key={project.id}
                className="p-6 md:p-8 lg:p-10 bg-white border border-slate-200/90 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-6 ${
                      isImageLeft ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div
                      onClick={() => hasDetailPage && handleViewDetail(project.id)}
                      className="relative rounded-2xl overflow-hidden border border-slate-200/90 bg-slate-900 shadow-xs cursor-pointer group/img aspect-[16/10]"
                    >
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400 font-mono text-xs">
                          Preview Unavailable
                        </div>
                      )}
                      {/* Subtle hover overlay */}
                      <div className="absolute inset-0 bg-slate-950/0 group-hover/img:bg-slate-950/25 transition-colors duration-300 flex items-center justify-center">
                        <span className="opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 px-4 py-2 bg-white/95 backdrop-blur-xs text-slate-900 text-xs font-bold rounded-xl shadow-md flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5 text-[#5E6AD2]" />
                          {language === 'vi' ? 'Xem chi tiết dự án' : 'View Project Details'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-6 flex flex-col justify-between space-y-4 ${
                      isImageLeft ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div>
                      {/* Top Metadata */}
                      <div className="flex items-center justify-between gap-3 mb-2.5">
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#5E6AD2] bg-[#5E6AD2]/10 px-2.5 py-0.5 rounded-md border border-[#5E6AD2]/20">
                            {project.category.toUpperCase()} / #{String(idx + 1).padStart(2, '0')}
                          </span>
                          {project.branch && (
                            <span className="font-mono text-[11px] text-slate-500 flex items-center gap-1">
                              <GitBranch className="w-3.5 h-3.5 text-slate-400" />
                              {project.branch}
                            </span>
                          )}
                        </div>
                        {project.metrics && (
                          <span className="hidden sm:inline-block text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-md font-semibold">
                            {project.metrics}
                          </span>
                        )}
                      </div>

                      {/* Main Title */}
                      <h3
                        onClick={() => hasDetailPage && handleViewDetail(project.id)}
                        className="text-2xl md:text-3xl font-black text-[#0B0E17] group-hover:text-[#5E6AD2] transition-colors duration-200 cursor-pointer tracking-tight"
                      >
                        {project.title}
                      </h3>

                      {/* Short Overview Description */}
                      <p className="text-sm md:text-base text-slate-600 font-normal leading-relaxed mt-2.5">
                        {project.description}
                      </p>

                      {/* Role Line */}
                      {project.role && (
                        <p className="text-sm text-slate-800 font-medium mt-3">
                          <span className="font-bold text-slate-900">
                            {language === 'vi' ? 'Vai trò:' : 'Role:'}
                          </span>{' '}
                          {project.role}
                        </p>
                      )}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="font-mono text-xs px-2.5 py-1 bg-slate-100/90 text-slate-800 rounded-lg border border-slate-200/90 font-medium shadow-2xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons Row */}
                    <div className="flex items-center flex-wrap gap-3 pt-3 border-t border-slate-100">
                      {hasDetailPage && (
                        <button
                          onClick={() => handleViewDetail(project.id)}
                          className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0B0E17] hover:bg-[#1E293B] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm cursor-pointer"
                        >
                          <Code2 className="w-3.5 h-3.5" />
                          <span>{language === 'vi' ? 'Xem Chi Tiết' : 'View Details'}</span>
                        </button>
                      )}

                      {project.isPrivateRepo ? (
                        <span
                          title={
                            language === 'vi'
                              ? 'Mã nguồn nội bộ thuộc sở hữu của CITARES Co., Ltd. (Bảo mật theo thỏa thuận NDA)'
                              : 'Proprietary enterprise source code protected by CITARES Co., Ltd. NDA policy'
                          }
                          className="inline-flex items-center gap-1.5 text-xs text-slate-500 bg-slate-100 border border-slate-200 px-3 py-2 rounded-xl font-medium cursor-help"
                        >
                          <Lock className="w-3.5 h-3.5 text-slate-400" />
                          <span>{language === 'vi' ? 'Mã nguồn Nội bộ (NDA)' : 'Private Repo (NDA)'}</span>
                        </span>
                      ) : (
                        project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3.5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 hover:text-[#0B0E17] border border-slate-300 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-2xs"
                          >
                            <GitBranch className="w-3.5 h-3.5 text-slate-500" />
                            <span>GitHub</span>
                          </a>
                        )
                      )}

                      {project.demoUrl && !project.isPrivateRepo && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={(project.id === 'movie-ticket-booking' || project.id === 'smart-library') ? (language === 'vi' ? 'Xem Demo Giao diện UX/UI (Frontend)' : 'Live UX/UI Demo (Frontend Only)') : undefined}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-white hover:bg-slate-50 text-slate-700 hover:text-[#5E6AD2] border border-slate-300 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-2xs"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                          <span>{(project.id === 'movie-ticket-booking' || project.id === 'smart-library') ? (language === 'vi' ? 'Demo UX/UI' : 'UX/UI Demo') : 'Live Demo'}</span>
                        </a>
                      )}
                    </div>
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
