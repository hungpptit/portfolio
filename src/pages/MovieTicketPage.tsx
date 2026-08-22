import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  Lock,
  Server,
  Layers,
  AlertTriangle,
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { MOVIE_TICKET_DETAIL } from '../data/projects/movieTicket.data';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from '../components/LanguageToggle';
import { UI_TRANSLATIONS } from '../data/translations';

const MovieTicketPage: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('overview');

  const detail = MOVIE_TICKET_DETAIL[language];
  const project = PROJECTS[language].find(p => p.id === 'movie-ticket-booking')!;
  const t = UI_TRANSLATIONS[language];

  const TOC_SECTIONS = [
    { id: 'overview',     label: language === 'vi' ? 'Tổng quan dự án' : 'Project Overview' },
    { id: 'architecture', label: language === 'vi' ? 'Kiến trúc Vi dịch vụ' : 'Microservices Architecture' },
    { id: 'concurrency',  label: language === 'vi' ? 'Khóa phân tán chống trùng ghế' : 'Distributed Lock Flow' },
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

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#e4e2e1]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#222222] bg-[#0e0e0e]/95 backdrop-blur-sm">
        <div className="max-w-[1500px] mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[#9ca3af] hover:text-[#D4AF37] transition-colors text-sm font-semibold tracking-wider uppercase">
            <ArrowLeft className="w-4 h-4" /> {t.detailCommon.backBtn}
          </button>
          
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <a href={detail.githubUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold hover:bg-[#D4AF37]/10 transition-colors tracking-wider rounded">
              {t.detailCommon.sourceRepo} <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-[1500px] mx-auto px-6 flex gap-0">
        {/* Left Sidebar */}
        <aside className="hidden lg:flex flex-col w-[280px] shrink-0">
          <div className="sticky top-[65px] pt-10 pb-10 pr-8 flex flex-col gap-8">
            <div>
              <p className="text-xs text-[#9ca3af] uppercase tracking-wider font-bold mb-4">{t.detailCommon.quickInfoTitle}</p>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-[#9ca3af] mb-1 font-medium">{t.detailCommon.statusLabel}</p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#34D399]" />
                    <span className="text-sm text-[#f3f4f6] font-semibold">{t.detailCommon.statusCompleted}</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-[#9ca3af] mb-1 font-medium">{t.detailCommon.durationLabel}</p>
                  <p className="text-sm text-[#f3f4f6] font-semibold">{detail.duration}</p>
                </div>
                <div>
                  <p className="text-xs text-[#9ca3af] mb-1 font-medium">{t.detailCommon.roleLabel}</p>
                  <p className="text-sm text-[#f3f4f6] font-semibold">{detail.role}</p>
                </div>
                <div>
                  <p className="text-xs text-[#9ca3af] mb-1 font-medium">{t.detailCommon.teamLabel}</p>
                  <p className="text-sm text-[#f3f4f6] font-semibold">{detail.teamSize}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-[#222222]" />

            <div>
              <p className="text-xs text-[#9ca3af] uppercase tracking-wider font-bold mb-4">{t.detailCommon.tocTitle}</p>
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
        <main className="flex-1 min-w-0 border-l border-[#222222] pl-10 py-10 space-y-20">
          {/* Hero Overview */}
          <section id="overview">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-[#4F9CF9]" />
              <span className="text-xs font-bold tracking-wider text-[#4F9CF9] uppercase">
                {language === 'vi' ? 'HỆ THỐNG PHÂN TÁN · KIẾN TRÚC VI DỊCH VỤ' : 'DISTRIBUTED SYSTEMS · MICROSERVICES'}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#f3f4f6] tracking-tight mb-6 leading-tight">
              Online Movie Ticket<br />
              <span className="text-[#4F9CF9]">{language === 'vi' ? 'Booking System' : 'Booking Platform'}</span>
            </h1>
            <p className="text-[#d1d5db] leading-relaxed mb-10 max-w-3xl font-normal text-lg">{detail.overview}</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-6 bg-[#121212] border border-[#262626] rounded">
                <span className="text-xs text-[#9ca3af] uppercase tracking-wider block mb-2">{language === 'vi' ? 'Bảo đảm Ghế ngồi' : 'Concurrency Control'}</span>
                <span className="text-2xl font-bold font-mono text-[#34D399]">{language === 'vi' ? 'Không Bán Trùng' : 'Zero Double-Book'}</span>
              </div>
              <div className="p-6 bg-[#121212] border border-[#262626] rounded">
                <span className="text-xs text-[#9ca3af] uppercase tracking-wider block mb-2">{language === 'vi' ? 'Kiến trúc Phân tán' : 'Microservices'}</span>
                <span className="text-2xl font-bold font-mono text-[#4F9CF9]">{language === 'vi' ? '6 Vi dịch vụ' : '6 Autonomous Svcs'}</span>
              </div>
              <div className="p-6 bg-[#121212] border border-[#262626] rounded">
                <span className="text-xs text-[#9ca3af] uppercase tracking-wider block mb-2">{language === 'vi' ? 'Thời hạn giữ chỗ' : 'Lock Expiration TTL'}</span>
                <span className="text-2xl font-bold font-mono text-[#F59E0B]">{language === 'vi' ? '10 Phút Tự Giải Phóng' : '10-Min Auto TTL'}</span>
              </div>
            </div>
          </section>

          {/* Architecture */}
          <section id="architecture">
            <div className="flex items-center gap-3 mb-6">
              <Layers className="w-5 h-5 text-[#4F9CF9]" />
              <h2 className="text-2xl font-black text-[#f3f4f6]">
                {language === 'vi' ? 'Đặc tả Kiến trúc Vi dịch vụ (Microservices Architecture)' : 'Microservices Architecture Specification'}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: language === 'vi' ? 'Cổng API (API Gateway)' : 'API Gateway', role: language === 'vi' ? 'Điều phối yêu cầu, bảo mật JWT, giới hạn tần suất gọi (Rate Limiting)' : 'Dynamic routing, JWT auth verification, rate limiting', color: '#4F9CF9' },
                { name: language === 'vi' ? 'Dịch vụ Đặt vé (Booking Service)' : 'Booking Service', role: language === 'vi' ? 'Quản lý trạng thái ghế, giữ chỗ và áp dụng Khóa phân tán Redis' : 'Seat reservation engine, Redis distributed locking orchestration', color: '#34D399' },
                { name: language === 'vi' ? 'Dịch vụ Thanh toán (Payment Service)' : 'Payment Service', role: language === 'vi' ? 'Sinh mã QR ZaloPay và xử lý phản hồi xác nhận Webhook' : 'Dynamic ZaloPay QR generation, Webhook transaction settlement', color: '#F59E0B' },
                { name: language === 'vi' ? 'Dịch vụ Người dùng (User Service)' : 'User Service', role: language === 'vi' ? 'Quản lý tài khoản, mã băm mật khẩu và phân quyền truy cập' : 'User account lifecycle, password hashing, RBAC scopes', color: '#A78BFA' },
                { name: language === 'vi' ? 'Dịch vụ Phim & Suất chiếu (Movie Service)' : 'Movie Catalog Service', role: language === 'vi' ? 'Quản lý danh mục phim, lịch chiếu và sơ đồ phòng chiếu' : 'Movie metadata, auditorium topologies, showtime scheduling', color: '#F472B6' },
                { name: language === 'vi' ? 'Dịch vụ Thông báo (Notification Service)' : 'Notification Service', role: language === 'vi' ? 'Lắng nghe sự kiện qua RabbitMQ và gửi email vé điện tử tự động' : 'RabbitMQ event consumer, automated electronic ticket mailer', color: '#60A5FA' },
              ].map((svc, i) => (
                <div key={i} className="p-5 bg-[#121212] border border-[#262626] rounded">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: svc.color }} />
                    <span className="font-bold text-base text-[#f3f4f6]">{svc.name}</span>
                  </div>
                  <p className="text-sm text-[#d1d5db] font-normal leading-relaxed">{svc.role}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Concurrency Flow */}
          <section id="concurrency">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-5 h-5 text-[#34D399]" />
              <h2 className="text-2xl font-black text-[#f3f4f6]">
                {language === 'vi' ? 'Quy trình Khóa Phân tán Chống Trùng Ghế (Redis Distributed Locking Flow)' : 'Zero Double-Booking Distributed Locking Protocol'}
              </h2>
            </div>
            <div className="p-7 bg-[#121212] border border-[#262626] space-y-6 rounded">
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-[#181818] border-l-4 border-[#34D399] rounded-r">
                  <span className="w-7 h-7 rounded-full bg-[#34D399]/20 text-[#34D399] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                  <div>
                    <span className="text-sm font-bold text-[#f3f4f6] block mb-1">
                      {language === 'vi' ? 'Yêu cầu giữ ghế tới Cổng API' : 'Seat Reservation Request Arrives at Gateway'}
                    </span>
                    <p className="text-sm text-[#d1d5db] font-normal leading-relaxed">
                      {language === 'vi'
                        ? 'Người dùng chọn ghế và nhấn "Đặt vé". Yêu cầu được gửi kèm mã định danh suất chiếu và mã số ghế.'
                        : 'User selects a seat and clicks "Book". Request dispatches with showtimeId and seatId.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#181818] border-l-4 border-[#4F9CF9] rounded-r">
                  <span className="w-7 h-7 rounded-full bg-[#4F9CF9]/20 text-[#4F9CF9] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                  <div>
                    <span className="text-sm font-bold text-[#f3f4f6] block mb-1">
                      {language === 'vi' ? 'Thực thi lệnh nguyên tử SET NX EX trên Redis' : 'Atomic SET NX EX Execution on Redis'}
                    </span>
                    <p className="text-sm text-[#d1d5db] font-normal leading-relaxed">
                      {language === 'vi'
                        ? 'Thực thi lệnh khóa: SET lock:seat:{showtimeId}:{seatId} {userId} NX EX 600. Chỉ có yêu cầu đến đầu tiên ghi thành công khóa (trả về OK).'
                        : 'Executes atomic lock: SET lock:seat:{showtimeId}:{seatId} {userId} NX EX 600. Exactly 1 request succeeds.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#181818] border-l-4 border-[#F59E0B] rounded-r">
                  <span className="w-7 h-7 rounded-full bg-[#F59E0B]/20 text-[#F59E0B] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                  <div>
                    <span className="text-sm font-bold text-[#f3f4f6] block mb-1">
                      {language === 'vi' ? 'Xử lý phản hồi tranh chấp (Concurrency Handling)' : 'Concurrency Collision Arbitration'}
                    </span>
                    <p className="text-sm text-[#d1d5db] font-normal leading-relaxed">
                      {language === 'vi'
                        ? 'Người dùng giành được khóa tiến hành chuyển sang bước quét mã QR thanh toán. Tất cả người dùng đến sau nhận ngay mã lỗi 409 Conflict thông báo ghế đã có người giữ.'
                        : 'Winner transitions to QR checkout. All concurrent contenders receive immediate HTTP 409 Conflict.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#181818] border-l-4 border-[#A78BFA] rounded-r">
                  <span className="w-7 h-7 rounded-full bg-[#A78BFA]/20 text-[#A78BFA] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">4</span>
                  <div>
                    <span className="text-sm font-bold text-[#f3f4f6] block mb-1">
                      {language === 'vi' ? 'Xác nhận thanh toán hoặc tự động giải phóng khi hết hạn' : 'Settlement or Automated TTL Eviction'}
                    </span>
                    <p className="text-sm text-[#d1d5db] font-normal leading-relaxed">
                      {language === 'vi'
                        ? 'Nếu thanh toán thành công, hệ thống ghi cố định vé vào CSDL SQL Server và đẩy thông điệp vào RabbitMQ để gửi email. Nếu quá 10 phút chưa thanh toán, Redis tự hủy khóa để người khác có thể chọn.'
                        : 'On payment confirmation, ticket commits to SQL Server and RabbitMQ emits email job. On timeout, Redis evicts lock.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section id="techstack">
            <div className="flex items-center gap-3 mb-6">
              <Server className="w-5 h-5 text-[#4F9CF9]" />
              <h2 className="text-2xl font-black text-[#f3f4f6]">
                {language === 'vi' ? 'Ngăn xếp Công nghệ (Technology Stack)' : 'Technology Stack & Engineering Toolchain'}
              </h2>
            </div>
            <div className="border border-[#262626] overflow-hidden rounded">
              <table className="w-full text-base">
                <thead>
                  <tr className="border-b border-[#262626] bg-[#141414]">
                    <th className="text-left px-5 py-3.5 text-xs font-bold text-[#9ca3af] uppercase tracking-wider w-[220px]">
                      {language === 'vi' ? 'Phân tầng kiến trúc' : 'Architectural Layer'}
                    </th>
                    <th className="text-left px-5 py-3.5 text-xs font-bold text-[#9ca3af] uppercase tracking-wider w-[240px]">
                      {language === 'vi' ? 'Công nghệ' : 'Technology'}
                    </th>
                    <th className="text-left px-5 py-3.5 text-xs font-bold text-[#9ca3af] uppercase tracking-wider">
                      {language === 'vi' ? 'Vai trò đảm nhiệm' : 'Role & Responsibility'}
                    </th>
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

          {/* Challenges */}
          <section id="challenges">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-5 h-5 text-[#F59E0B]" />
              <h2 className="text-2xl font-black text-[#f3f4f6]">
                {language === 'vi' ? 'Các Thách thức Kỹ thuật Tiêu biểu & Giải pháp' : 'Engineering Challenges & Applied Solutions'}
              </h2>
            </div>
            <div className="space-y-4">
              {detail.challenges.map((c, i) => (
                <div key={i} className="p-6 bg-[#121212] border border-[#262626] hover:border-[#3a3a3a] transition-colors rounded">
                  <h3 className="text-base font-bold text-[#4F9CF9] mb-4">{c.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-[#1a1215] border border-[#F472B6]/20 rounded">
                      <span className="text-xs font-bold text-[#F472B6] uppercase tracking-wider block mb-2">{t.detailCommon.problemLabel}</span>
                      <p className="text-sm text-[#e5e7eb] leading-relaxed font-normal">{c.problem}</p>
                    </div>
                    <div className="p-4 bg-[#0e1915] border border-[#34D399]/20 rounded">
                      <span className="text-xs font-bold text-[#34D399] uppercase tracking-wider block mb-2">{t.detailCommon.solutionLabel}</span>
                      <p className="text-sm text-[#e5e7eb] leading-relaxed font-normal">{c.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tags + CTA */}
          <section className="border-t border-[#222222] pt-10">
            <div className="flex flex-wrap gap-2.5 mb-8">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-xs px-3 py-1.5 border border-[#2a2a2a] text-[#9ca3af] font-mono rounded">{tag}</span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={detail.githubUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 bg-[#D4AF37] text-[#0e0e0e] font-bold text-sm hover:bg-[#e8c547] transition-colors tracking-wider uppercase rounded">
                {t.detailCommon.viewSourceBtn} <ArrowUpRight className="w-4 h-4" />
              </a>
              <button onClick={() => navigate(-1)}
                className="flex items-center gap-2 px-6 py-3.5 border border-[#333333] text-[#9ca3af] font-semibold text-sm hover:border-[#555] hover:text-[#f3f4f6] transition-colors tracking-wider uppercase rounded">
                <ArrowLeft className="w-4 h-4" /> {t.detailCommon.backToPortfolioBtn}
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default MovieTicketPage;
