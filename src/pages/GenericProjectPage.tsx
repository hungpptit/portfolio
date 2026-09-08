import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, AlertTriangle, Server, Layers } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { OTHER_PROJECTS_DETAIL } from '../data/projects/otherProjects.data';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from '../components/LanguageToggle';
import { UI_TRANSLATIONS } from '../data/translations';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const GenericProjectPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];

  const project = PROJECTS[language].find(p => p.id === id);
  const detail = id ? OTHER_PROJECTS_DETAIL[language]?.[id] : undefined;

  useDocumentTitle(project ? project.title : (language === 'vi' ? 'Chi tiết dự án' : 'Project Details'));

  const [activeSection, setActiveSection] = useState('overview');

  const TOC_SECTIONS = [
    { id: 'overview',     label: language === 'vi' ? 'Tổng quan dự án' : 'Project Overview' },
    { id: 'architecture', label: language === 'vi' ? 'Điểm nhấn kiến trúc hệ thống' : 'Architecture Highlights' },
    { id: 'techstack',    label: language === 'vi' ? 'Ngăn xếp công nghệ' : 'Technology Stack' },
    { id: 'challenges',   label: language === 'vi' ? 'Thách thức kỹ thuật & Giải pháp' : 'Engineering Challenges' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offsets = TOC_SECTIONS.map(s => {
        const el = document.getElementById(s.id);
        return el ? { id: s.id, top: el.getBoundingClientRect().top } : { id: s.id, top: Infinity };
      });
      const active = offsets.filter(s => s.top <= 140).at(-1);
      if (active) setActiveSection(active.id);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#FAFAFC] bg-linear-grid flex items-center justify-center">
        <div className="text-center p-8 linear-card max-w-md mx-auto">
          <p className="text-[#64748B] mb-4 text-base">
            {language === 'vi' ? 'Không tìm thấy thông tin dự án yêu cầu' : 'Project specification not found'}
          </p>
          <button onClick={() => navigate('/')} className="btn-linear-primary text-xs cursor-pointer">
            {language === 'vi' ? 'Quay lại Trang chủ Danh mục Dự án' : 'Return to Portfolio Home'}
          </button>
        </div>
      </div>
    );
  }

  const catColors: Record<string, string> = {
    backend: '#5E6AD2', ai: '#8B5CF6', mobile: '#10B981', microservices: '#F59E0B', fullstack: '#EC4899'
  };
  const accent = catColors[project.category] || '#5E6AD2';

  const scrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFC] bg-linear-grid text-[#0B0E17]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
        <div className="max-w-[1500px] mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[#64748B] hover:text-[#5E6AD2] transition-colors text-sm font-bold tracking-wider uppercase cursor-pointer">
            <ArrowLeft className="w-4 h-4" /> {t.detailCommon.backBtn}
          </button>

          <div className="flex items-center gap-4">
            <LanguageToggle />
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              className="btn-linear-primary text-xs py-2 px-4 shadow-xs">
              {t.detailCommon.sourceRepo} <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-[1500px] mx-auto px-6 flex gap-0">
        {/* Left Sidebar */}
        <aside className="hidden lg:flex flex-col w-[280px] shrink-0">
          <div className="sticky top-[65px] max-h-[calc(100vh-65px)] overflow-y-auto pt-8 pb-10 pr-6 flex flex-col gap-6">
            <div>
              <p className="text-xs text-[#64748B] uppercase tracking-wider font-bold mb-3">{t.detailCommon.quickInfoTitle}</p>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-[#64748B] mb-1 font-medium">{t.detailCommon.statusLabel}</p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    <span className="text-sm text-[#0B0E17] font-bold">{t.detailCommon.statusCompleted}</span>
                  </div>
                </div>
                {detail?.duration && (
                  <div>
                    <p className="text-xs text-[#64748B] mb-1 font-medium">{t.detailCommon.durationLabel}</p>
                    <p className="text-sm text-[#0B0E17] font-semibold">{detail.duration}</p>
                  </div>
                )}
                {detail?.role && (
                  <div>
                    <p className="text-xs text-[#64748B] mb-1 font-medium">{t.detailCommon.roleLabel}</p>
                    <p className="text-sm text-[#0B0E17] font-semibold">{detail.role}</p>
                  </div>
                )}
                {detail?.teamSize && (
                  <div>
                    <p className="text-xs text-[#64748B] mb-1 font-medium">{t.detailCommon.teamLabel}</p>
                    <p className="text-sm text-[#0B0E17] font-semibold">{detail.teamSize}</p>
                  </div>
                )}
                <div>
                  <p className="text-xs text-[#64748B] mb-1 font-medium">{t.detailCommon.categoryLabel}</p>
                  <p className="text-sm font-mono font-bold uppercase" style={{ color: accent }}>{project.category}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200/80" />

            <div>
              <p className="text-xs text-[#64748B] uppercase tracking-wider font-bold mb-3">{t.detailCommon.tocTitle}</p>
              <nav className="space-y-1">
                {TOC_SECTIONS.map(s => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className={`w-full text-left flex items-center gap-2 py-1.5 px-0 text-sm transition-colors cursor-pointer ${
                      activeSection === s.id
                        ? 'text-[#5E6AD2] font-bold'
                        : 'text-[#64748B] hover:text-[#0B0E17]'
                    }`}
                  >
                    {activeSection === s.id && (
                      <span className="w-3.5 h-[2px] bg-[#5E6AD2] shrink-0" />
                    )}
                    <span>{s.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 border-l border-slate-200/80 pl-10 py-10 space-y-16">
          {/* Hero */}
          <section id="overview">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full" style={{ background: accent }} />
              <span className="text-xs font-bold tracking-wider uppercase" style={{ color: accent }}>
                {language === 'vi' ? 'DỰ ÁN CHUYÊN SÂU' : 'SPECIALIZED SYSTEM'} · {project.category.toUpperCase()}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#0B0E17] tracking-tight mb-6 leading-tight">
              {project.title.split(' ').slice(0, -1).join(' ')}<br />
              <span style={{ color: accent }}>{project.title.split(' ').slice(-1)}</span>
            </h1>
            <p className="text-[#334155] leading-relaxed mb-8 max-w-3xl font-normal text-lg">
              {detail?.overview || project.description}
            </p>

            {project.metrics && (
              <div className="p-4 bg-gradient-to-r from-[#5E6AD2]/10 to-[#06B6D4]/10 border border-[#5E6AD2]/25 inline-flex items-center gap-3 rounded-xl shadow-xs">
                <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">{t.detailCommon.highlightsTitle}</span>
                <span className="text-base font-bold font-mono text-[#5E6AD2]">{project.metrics}</span>
              </div>
            )}
          </section>

          {/* Architecture Highlights */}
          <section id="architecture">
            <div className="flex items-center gap-3 mb-6">
              <Layers className="w-5 h-5" style={{ color: accent }} />
              <h2 className="text-2xl font-bold text-[#0B0E17]">{t.detailCommon.systemArchTitle}</h2>
            </div>
            <div className="p-7 linear-card">
              <ul className="space-y-4">
                {project.architectureHighlights.map((hl, i) => (
                  <li key={i} className="text-base text-[#334155] flex items-start gap-3.5 leading-relaxed font-normal">
                    <span className="w-2 h-2 mt-2 shrink-0 rounded-full shadow-[0_0_6px_#5E6AD2]" style={{ background: accent }} />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Tech Stack */}
          {detail?.techStack && (
            <section id="techstack">
              <div className="flex items-center gap-3 mb-6">
                <Server className="w-5 h-5" style={{ color: accent }} />
                <h2 className="text-2xl font-bold text-[#0B0E17]">{t.detailCommon.techStackTitle}</h2>
              </div>
              <div className="border border-slate-200/80 overflow-hidden rounded-2xl shadow-xs bg-white">
                <table className="w-full text-base">
                  <thead>
                    <tr className="border-b border-slate-200/80 bg-slate-100/80">
                      <th className="text-left px-5 py-3.5 text-xs font-bold text-[#475569] uppercase tracking-wider w-[220px]">
                        {language === 'vi' ? 'Phân tầng kiến trúc' : 'Architectural Layer'}
                      </th>
                      <th className="text-left px-5 py-3.5 text-xs font-bold text-[#475569] uppercase tracking-wider w-[240px]">
                        {language === 'vi' ? 'Công nghệ' : 'Technology'}
                      </th>
                      <th className="text-left px-5 py-3.5 text-xs font-bold text-[#475569] uppercase tracking-wider">
                        {language === 'vi' ? 'Vai trò đảm nhiệm' : 'Role & Responsibility'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {detail.techStack.map((item, i) => (
                      <tr key={i} className="border-b border-slate-100 hover:bg-slate-50/80 transition-colors">
                        <td className="px-5 py-3.5 text-sm font-bold text-[#5E6AD2]">{item.layer}</td>
                        <td className="px-5 py-3.5 font-mono text-sm text-[#0B0E17] font-bold">{item.tech}</td>
                        <td className="px-5 py-3.5 text-sm text-[#475569] font-normal leading-relaxed">{item.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Challenges */}
          {detail?.challenges && (
            <section id="challenges">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-5 h-5 text-[#F59E0B]" />
                <h2 className="text-2xl font-bold text-[#0B0E17]">{t.detailCommon.challengesTitle}</h2>
              </div>
              <div className="space-y-4">
                {detail.challenges.map((c, i) => (
                  <div key={i} className="p-6 linear-card">
                    <h3 className="text-base font-bold mb-4" style={{ color: accent }}>{c.title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="p-4 bg-[#FFF1F2] border border-[#FECDD3] rounded-xl">
                        <span className="text-xs font-bold text-[#E11D48] uppercase tracking-wider block mb-2">{t.detailCommon.problemLabel}</span>
                        <p className="text-sm text-[#4C0519] leading-relaxed font-normal">{c.problem}</p>
                      </div>
                      <div className="p-4 bg-[#ECFDF5] border border-[#A7F3D0] rounded-xl">
                        <span className="text-xs font-bold text-[#059669] uppercase tracking-wider block mb-2">{t.detailCommon.solutionLabel}</span>
                        <p className="text-sm text-[#064E3B] leading-relaxed font-normal">{c.solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Tags + CTA */}
          <section className="border-t border-slate-200/80 pt-10">
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-xs px-3 py-1.5 border border-slate-200/80 bg-white text-[#334155] font-mono rounded-lg font-medium shadow-2xs">{tag}</span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                className="btn-linear-primary text-sm px-6 py-3.5 rounded-xl shadow-xs">
                {t.detailCommon.viewSourceBtn} <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </a>
              <button onClick={() => navigate(-1)}
                className="btn-neutral-outline text-sm px-6 py-3.5 rounded-xl cursor-pointer">
                <ArrowLeft className="w-4 h-4 mr-1.5" /> {t.detailCommon.backToPortfolioBtn}
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default GenericProjectPage;
