import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, AlertTriangle, Server, Layers } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { OTHER_PROJECTS_DETAIL } from '../data/projects/otherProjects.data';

const GenericProjectPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === id);

  const [activeSection, setActiveSection] = useState('overview');

  const TOC_SECTIONS = [
    { id: 'overview',     label: 'Tổng quan dự án' },
    { id: 'architecture', label: 'Điểm nhấn kiến trúc hệ thống' },
    { id: 'techstack',    label: 'Ngăn xếp công nghệ' },
    { id: 'challenges',   label: 'Thách thức kỹ thuật & Giải pháp' },
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
      <div className="min-h-screen bg-[#0e0e0e] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#9ca3af] mb-4 text-base">Không tìm thấy thông tin dự án yêu cầu</p>
          <button onClick={() => navigate('/')} className="text-[#D4AF37] underline text-sm font-semibold">Quay lại Trang chủ Danh mục Dự án</button>
        </div>
      </div>
    );
  }

  const detail = id ? OTHER_PROJECTS_DETAIL[id] : undefined;
  const catColors: Record<string, string> = {
    backend: '#4F9CF9', ai: '#A78BFA', mobile: '#34D399', microservices: '#F59E0B', fullstack: '#F472B6'
  };
  const accent = catColors[project.category] || '#D4AF37';

  const scrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#e4e2e1]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#222] bg-[#0e0e0e]/95 backdrop-blur-sm">
        <div className="max-w-[1500px] mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[#9ca3af] hover:text-[#D4AF37] transition-colors text-sm font-semibold tracking-wider uppercase">
            <ArrowLeft className="w-4 h-4" /> Quay lại danh sách dự án
          </button>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold hover:bg-[#D4AF37]/10 transition-colors tracking-wider rounded">
            MÃ NGUỒN DỰ ÁN (SOURCE REPO) <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      <div className="max-w-[1500px] mx-auto px-6 flex gap-0">
        {/* Left Sidebar */}
        <aside className="hidden lg:flex flex-col w-[280px] shrink-0">
          <div className="sticky top-[65px] pt-10 pb-10 pr-8 flex flex-col gap-8">
            <div>
              <p className="text-xs text-[#9ca3af] uppercase tracking-wider font-bold mb-4">Thông tin tóm tắt</p>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-[#9ca3af] mb-1 font-medium">Trạng thái dự án</p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#34D399]" />
                    <span className="text-sm text-[#f3f4f6] font-semibold">Đã hoàn thành & Kiểm thử</span>
                  </div>
                </div>
                {detail?.duration && (
                  <div>
                    <p className="text-xs text-[#9ca3af] mb-1 font-medium">Thời gian thực hiện</p>
                    <p className="text-sm text-[#f3f4f6] font-semibold">{detail.duration}</p>
                  </div>
                )}
                {detail?.role && (
                  <div>
                    <p className="text-xs text-[#9ca3af] mb-1 font-medium">Vai trò đảm nhiệm</p>
                    <p className="text-sm text-[#f3f4f6] font-semibold">{detail.role}</p>
                  </div>
                )}
                {detail?.teamSize && (
                  <div>
                    <p className="text-xs text-[#9ca3af] mb-1 font-medium">Quy mô nhóm</p>
                    <p className="text-sm text-[#f3f4f6] font-semibold">{detail.teamSize}</p>
                  </div>
                )}
                <div>
                  <p className="text-xs text-[#9ca3af] mb-1 font-medium">Phân loại chuyên môn</p>
                  <p className="text-sm font-mono font-bold uppercase" style={{ color: accent }}>{project.category}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-[#222]" />

            <div>
              <p className="text-xs text-[#9ca3af] uppercase tracking-wider font-bold mb-4">Mục lục nội dung</p>
              <nav className="space-y-1">
                {TOC_SECTIONS.map(s => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className={`w-full text-left flex items-center gap-2 py-2 px-0 text-sm transition-colors ${
                      activeSection === s.id
                        ? 'text-[#D4AF37] font-bold'
                        : 'text-[#9ca3af] hover:text-[#f3f4f6]'
                    }`}
                  >
                    {activeSection === s.id && (
                      <span className="w-3.5 h-[2px] bg-[#D4AF37] shrink-0" />
                    )}
                    <span>{s.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 border-l border-[#222] pl-10 py-10 space-y-20">
          {/* Hero */}
          <section id="overview">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2" style={{ background: accent }} />
              <span className="text-xs font-bold tracking-wider uppercase" style={{ color: accent }}>
                DỰ ÁN CHUYÊN SÂU · {project.category.toUpperCase()}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#f3f4f6] tracking-tight mb-6 leading-tight">
              {project.title.split(' ').slice(0, -1).join(' ')}<br />
              <span style={{ color: accent }}>{project.title.split(' ').slice(-1)}</span>
            </h1>
            <p className="text-[#d1d5db] leading-relaxed mb-10 max-w-3xl font-normal text-lg">
              {detail?.overview || project.description}
            </p>

            {project.metrics && (
              <div className="p-5 bg-[#121212] border border-[#262626] inline-flex items-center gap-3 rounded">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9ca3af]">Điểm nhấn kiến trúc:</span>
                <span className="text-base font-bold font-mono" style={{ color: accent }}>{project.metrics}</span>
              </div>
            )}
          </section>

          {/* Architecture Highlights */}
          <section id="architecture">
            <div className="flex items-center gap-3 mb-6">
              <Layers className="w-5 h-5" style={{ color: accent }} />
              <h2 className="text-2xl font-black text-[#f3f4f6]">Đặc tả Kiến trúc Hệ thống (System Architecture Specification)</h2>
            </div>
            <div className="p-7 bg-[#121212] border border-[#262626] rounded">
              <ul className="space-y-4">
                {project.architectureHighlights.map((hl, i) => (
                  <li key={i} className="text-base text-[#d1d5db] flex items-start gap-3.5 leading-relaxed font-normal">
                    <span className="w-2 h-2 mt-2 shrink-0 rounded-full" style={{ background: accent }} />
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
                <h2 className="text-2xl font-black text-[#f3f4f6]">Ngăn xếp Công nghệ (Technology Stack)</h2>
              </div>
              <div className="border border-[#262626] overflow-hidden rounded">
                <table className="w-full text-base">
                  <thead>
                    <tr className="border-b border-[#262626] bg-[#141414]">
                      <th className="text-left px-5 py-3.5 text-xs font-bold text-[#9ca3af] uppercase tracking-wider w-[220px]">Phân tầng kiến trúc</th>
                      <th className="text-left px-5 py-3.5 text-xs font-bold text-[#9ca3af] uppercase tracking-wider w-[240px]">Công nghệ</th>
                      <th className="text-left px-5 py-3.5 text-xs font-bold text-[#9ca3af] uppercase tracking-wider">Vai trò đảm nhiệm</th>
                    </tr>
                  </thead>
                  <tbody>
                    {detail.techStack.map((item, i) => (
                      <tr key={i} className="border-b border-[#1c1c1c] hover:bg-[#161616] transition-colors">
                        <td className="px-5 py-3.5 text-sm font-semibold text-[#D4AF37]">{item.layer}</td>
                        <td className="px-5 py-3.5 font-mono text-sm text-[#f3f4f6] font-semibold">{item.tech}</td>
                        <td className="px-5 py-3.5 text-sm text-[#d1d5db] font-normal leading-relaxed">{item.role}</td>
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
                <h2 className="text-2xl font-black text-[#f3f4f6]">Các Thách thức Kỹ thuật Tiêu biểu & Giải pháp (Engineering Challenges)</h2>
              </div>
              <div className="space-y-4">
                {detail.challenges.map((c, i) => (
                  <div key={i} className="p-6 bg-[#121212] border border-[#262626] hover:border-[#3a3a3a] transition-colors rounded">
                    <h3 className="text-base font-bold mb-4" style={{ color: accent }}>{c.title}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-4 bg-[#1a1215] border border-[#F472B6]/20 rounded">
                        <span className="text-xs font-bold text-[#F472B6] uppercase tracking-wider block mb-2">Thách thức kỹ thuật đặt ra</span>
                        <p className="text-sm text-[#e5e7eb] leading-relaxed font-normal">{c.problem}</p>
                      </div>
                      <div className="p-4 bg-[#0e1915] border border-[#34D399]/20 rounded">
                        <span className="text-xs font-bold text-[#34D399] uppercase tracking-wider block mb-2">Giải pháp kiến trúc & Triển khai</span>
                        <p className="text-sm text-[#e5e7eb] leading-relaxed font-normal">{c.solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Tags + CTA */}
          <section className="border-t border-[#222] pt-10">
            <div className="flex flex-wrap gap-2.5 mb-8">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-xs px-3 py-1.5 border border-[#2a2a2a] text-[#9ca3af] font-mono rounded">{tag}</span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 bg-[#D4AF37] text-[#0e0e0e] font-bold text-sm hover:bg-[#e8c547] transition-colors tracking-wider uppercase rounded">
                Xem Mã nguồn Dự án trên GitHub <ArrowUpRight className="w-4 h-4" />
              </a>
              <button onClick={() => navigate(-1)}
                className="flex items-center gap-2 px-6 py-3.5 border border-[#333] text-[#9ca3af] font-semibold text-sm hover:border-[#555] hover:text-[#f3f4f6] transition-colors tracking-wider uppercase rounded">
                <ArrowLeft className="w-4 h-4" /> Quay lại Danh mục Dự án
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default GenericProjectPage;
