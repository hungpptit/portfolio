import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  Lock,
  Server,
  Layers,
  AlertTriangle,
  HelpCircle,
  CheckCircle,
  Target,
  Award,
  BarChart3,
  ChevronRight,
  GitBranch,
  Globe,
  Shield,
  User,
  Film,
  Grid,
  Ticket,
  CreditCard,
  Bell,
  Database,
  Zap,
  Radio,
  ArrowDown,
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { MOVIE_TICKET_DETAIL } from '../data/projects/movieTicket.data';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from '../components/LanguageToggle';
import { UI_TRANSLATIONS } from '../data/translations';
import { ProjectShowcaseGallery } from '../components/ProjectShowcaseGallery';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const MovieTicketPage: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('overview');

  const detail = MOVIE_TICKET_DETAIL[language];
  const project = PROJECTS[language].find(p => p.id === 'movie-ticket-booking')!;
  const t = UI_TRANSLATIONS[language];

  useDocumentTitle(project ? project.title : 'Movie Ticket Booking System');

  const TOC_SECTIONS = [
    { id: 'overview', label: language === 'vi' ? 'Tổng quan & Hiệu quả' : 'Overview & Impact' },
    { id: 'showcase', label: language === 'vi' ? 'Khung Demo Sản phẩm (PC Web)' : 'Interactive Web Showcase' },
    { id: 'context', label: language === 'vi' ? 'Bối cảnh & Đặt vấn đề' : 'Context & Problem Statement' },
    { id: 'scope', label: language === 'vi' ? 'Mục tiêu & Phạm vi dự án' : 'Objectives & Project Scope' },
    { id: 'ownership', label: language === 'vi' ? 'Trách nhiệm kỹ thuật cá nhân' : 'My Engineering Ownership' },
    { id: 'architecture', label: language === 'vi' ? 'Kiến trúc Hệ thống Tổng thể' : 'System Architecture' },
    { id: 'concurrency', label: language === 'vi' ? 'Khóa phân tán chống trùng ghế' : 'Distributed Lock Protocol' },
    { id: 'techstack', label: language === 'vi' ? 'Ngăn xếp công nghệ' : 'Technology Stack' },
    { id: 'challenges', label: language === 'vi' ? 'Thách thức kỹ thuật & Giải pháp' : 'Engineering Challenges' },
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
          <div className="sticky top-[65px] max-h-[calc(100vh-65px)] overflow-y-auto pt-8 pb-10 pr-6 flex flex-col gap-6">
            <div>
              <p className="text-xs text-[#9ca3af] uppercase tracking-wider font-bold mb-3">{t.detailCommon.quickInfoTitle}</p>
              <div className="space-y-3">
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
              <p className="text-xs text-[#9ca3af] uppercase tracking-wider font-bold mb-3">{t.detailCommon.tocTitle}</p>
              <nav className="space-y-1">
                {TOC_SECTIONS.map(s => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className={`w-full text-left flex items-center gap-2 py-1.5 px-0 text-sm transition-colors ${activeSection === s.id
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

          {/* ── Section: Interactive Device Mockup Showcase ── */}
          <section id="showcase" className="space-y-6">
            <ProjectShowcaseGallery
              projectId="movie-ticket"
              defaultTab="desktop"
              availableTabs={['desktop', 'terminal']}
              desktopTitle={language === 'vi' ? 'Sơ Đồ Chọn Ghế Trực Tuyến & Cổng Thanh Toán (Web App)' : 'Real-time Cinema Seat Picker & Checkout (Web App)'}
              desktopUrl="http://localhost:3000"
              themeColor="#4F9CF9"
              terminalCommand="npm test -- --coverage --testPathPattern=booking.spec.ts"
            />
          </section>

          {/* ── Business Context & Problem Statement ── */}
          <section id="context">
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="w-5 h-5 text-[#F59E0B]" />
              <h2 className="text-2xl font-black text-[#f3f4f6]">
                {language === 'vi' ? 'Bối cảnh Bài toán & Lý do Xây dựng Hệ thống' : 'Problem Context & Motivation'}
              </h2>
            </div>
            <p className="text-[#d1d5db] text-base mb-8 leading-relaxed font-normal">
              {language === 'vi'
                ? 'Hệ thống đặt vé xem phim trực tuyến đối mặt với bài toán concurrency cực kỳ khắc nghiệt khi hàng nghìn người dùng cùng truy cập suất chiếu hot cùng lúc. Đây là phân tích gốc rễ của vấn đề và các hạn chế của kiến trúc monolithic truyền thống.'
                : 'Online movie ticket booking faces extreme concurrency challenges when thousands of users simultaneously rush to book the same blockbuster premiere. This section analyzes the root causes and limitations of traditional monolithic approaches.'}
            </p>

            {/* Core Problem Banner */}
            <div className="p-5 bg-[#161616] border border-[#2a2a2a] rounded mb-6">
              <div className="flex items-center gap-2.5 mb-2 text-[#F59E0B]">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider font-mono">
                  {language === 'vi' ? 'VẤN ĐỀ CỐT LÕI (CORE PROBLEM)' : 'ROOT CAUSE PROBLEM'}
                </span>
              </div>
              <p className="text-base text-[#f3f4f6] font-medium leading-relaxed">
                {language === 'vi'
                  ? 'Khi một suất chiếu hot mở bán, hàng ngàn người dùng đồng thời nhấn "Đặt vé" cho cùng một ghế trong khoảng thời gian 50ms. Kiến trúc Monolithic truyền thống với READ-THEN-WRITE không thể xử lý Race Condition này — dẫn đến bán 2 vé cho cùng 1 ghế (Double-Booking).'
                  : 'When a blockbuster premiere goes on sale, thousands of users simultaneously click "Book" for the same seat within a 50ms window. Traditional Monolithic READ-THEN-WRITE architecture cannot handle this Race Condition — resulting in duplicate ticket sales for the same physical seat (Double-Booking).'}
              </p>
            </div>

            {/* Pain Points Grid */}
            <div className="p-6 bg-[#121212] border border-[#262626] rounded mb-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#4F9CF9] mb-5 flex items-center gap-2">
                <ChevronRight className="w-4 h-4 shrink-0" />
                {language === 'vi' ? 'Tại sao Kiến trúc Monolithic Thất bại?' : 'Why Does Monolithic Architecture Fail Here?'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    color: '#F472B6',
                    title: language === 'vi' ? 'Race Condition trên CSDL' : 'Database Race Condition',
                    detail: language === 'vi'
                      ? 'Hai request đọc trạng thái ghế cùng lúc → cùng thấy "trống" → cùng ghi → trùng ghế. READ không phải lệnh nguyên tử.'
                      : 'Two concurrent requests both read seat as "available" simultaneously → both write → collision. Non-atomic READ-WRITE is inherently unsafe.',
                  },
                  {
                    color: '#F59E0B',
                    title: language === 'vi' ? 'Bottleneck giao dịch CSDL' : 'Database Transaction Bottleneck',
                    detail: language === 'vi'
                      ? 'Transaction-level locking toàn bảng hoặc toàn hàng gây nghẽn cổ chai nghiêm trọng khi có hàng nghìn concurrent users.'
                      : 'Table-level or row-level DB transaction locks create catastrophic throughput bottlenecks under thousands of concurrent sessions.',
                  },
                  {
                    color: '#EF4444',
                    title: language === 'vi' ? 'Không thể Scale độc lập' : 'Cannot Scale Independently',
                    detail: language === 'vi'
                      ? 'Monolith scale toàn bộ ứng dụng, tốn kém và không hiệu quả. Không thể chỉ scale riêng Booking Service khi cần.'
                      : 'Monolith requires scaling the entire application even if only the booking module is under load — costly and inefficient.',
                  },
                  {
                    color: '#4F9CF9',
                    title: language === 'vi' ? 'Coupling nghiệp vụ chặt chẽ' : 'Tight Business Domain Coupling',
                    detail: language === 'vi'
                      ? 'Thay đổi logic thanh toán ảnh hưởng trực tiếp đến module đặt vé, phim và người dùng — rủi ro regression cao.'
                      : 'Payment logic changes directly risk breaking booking, movie catalog, and user modules — high regression danger.',
                  },
                ].map((p, idx) => (
                  <div key={idx} className="p-5 bg-[#181818] border border-[#262626] hover:border-[#3a3a3a] transition-colors rounded flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full shrink-0" style={{ background: p.color }} />
                      <span className="text-sm font-bold text-[#f3f4f6] leading-tight">{p.title}</span>
                    </div>
                    <p className="text-xs text-[#9ca3af] leading-relaxed font-normal">{p.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solution Banner */}
            <div className="p-5 bg-gradient-to-r from-[#0f1e2e] to-[#121212] border border-[#4F9CF9]/40 rounded">
              <div className="flex items-center gap-2.5 mb-2 text-[#4F9CF9]">
                <CheckCircle className="w-5 h-5 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider font-mono">
                  {language === 'vi' ? 'GIẢI PHÁP KIẾN TRÚC (ARCHITECTURAL SOLUTION)' : 'ARCHITECTURAL SOLUTION'}
                </span>
              </div>
              <p className="text-base text-[#f3f4f6] font-medium leading-relaxed">
                {language === 'vi'
                  ? 'Xây dựng lại hoàn toàn trên nền Kiến trúc Vi dịch vụ (Microservices) với 6 dịch vụ độc lập (Database-per-Service). Áp dụng Khóa phân tán Redis (SET NX EX) như lớp đồng bộ hóa nguyên tử tốc độ cao — chỉ 1 trong 1,000 request giành được ghế, 999 request còn lại nhận 409 Conflict ngay lập tức, không cần chờ DB.'
                  : 'Rebuilt entirely on Microservices Architecture with 6 autonomous services (Database-per-Service). Applied Redis Distributed Locking (atomic SET NX EX) as a high-speed atomic synchronization layer — exactly 1 of 1,000 concurrent requests acquires the seat, 999 receive immediate HTTP 409 Conflict without touching the database.'}
              </p>
            </div>
          </section>

          {/* ── Objectives & Project Scope ── */}
          <section id="scope">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-5 h-5 text-[#A78BFA]" />
              <h2 className="text-2xl font-black text-[#f3f4f6]">
                {language === 'vi' ? 'Mục tiêu Hệ thống & Phạm vi Dự án' : 'System Objectives & Project Scope'}
              </h2>
            </div>
            <p className="text-[#d1d5db] text-base mb-8 leading-relaxed font-normal">
              {language === 'vi'
                ? '3 mục tiêu kỹ thuật cốt lõi, 9+ mẫu thiết kế hệ thống phân tán được áp dụng và các chỉ số kỹ thuật đạt được của dự án.'
                : '3 core engineering objectives, 9+ distributed system design patterns applied, and measurable technical achievements of the project.'}
            </p>

            {/* 3 Core Goals */}
            <div className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#9ca3af] mb-4">
                {language === 'vi' ? '3 Mục tiêu Kỹ thuật Cốt lõi' : '3 Core Engineering Objectives'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    color: '#4F9CF9',
                    num: '01',
                    title: language === 'vi' ? 'Zero Double-Booking' : 'Zero Double-Booking',
                    desc: language === 'vi'
                      ? 'Tuyệt đối không xảy ra lỗi bán trùng ghế dưới bất kỳ mức tải đồng thời nào, kể cả khi 1,000 users cùng tranh 1 ghế trong 50ms.'
                      : 'Absolute zero duplicate seat sales under any concurrency level, including 1,000 users contending for 1 seat within 50ms.',
                  },
                  {
                    color: '#A78BFA',
                    num: '02',
                    title: language === 'vi' ? 'Kiến trúc có thể Mở rộng' : 'Independently Scalable',
                    desc: language === 'vi'
                      ? 'Mỗi vi dịch vụ tự chủ hoàn toàn (Database-per-Service), có thể scale độc lập theo nhu cầu tải của từng domain nghiệp vụ.'
                      : 'Each microservice fully autonomous (Database-per-Service), independently scalable per domain load without affecting others.',
                  },
                  {
                    color: '#34D399',
                    num: '03',
                    title: language === 'vi' ? 'Chất lượng & Bảo mật' : 'Quality & Security',
                    desc: language === 'vi'
                      ? '25/25 Unit Tests (100% PASS), HMAC-SHA256 trên Webhook ZaloPay, JWT HttpOnly Cookie, bcrypt hash mật khẩu.'
                      : '25/25 Unit Tests (100% PASS), HMAC-SHA256 on ZaloPay Webhooks, JWT HttpOnly Cookies, bcrypt password hashing.',
                  },
                ].map((g, idx) => (
                  <div key={idx} className="p-5 bg-[#121212] border border-[#262626] rounded flex flex-col justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-mono shrink-0"
                        style={{ background: `${g.color}20`, color: g.color }}>{g.num}</span>
                      <span className="text-sm font-bold text-[#f3f4f6]">{g.title}</span>
                    </div>
                    <p className="text-xs text-[#9ca3af] leading-relaxed font-normal">{g.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Design Patterns Applied */}
            <div className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#9ca3af] mb-4 flex items-center gap-2">
                <GitBranch className="w-3.5 h-3.5" />
                {language === 'vi' ? '9+ Mẫu Thiết kế Hệ thống Phân tán được Áp dụng' : '9+ Distributed System Design Patterns Applied'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { cat: language === 'vi' ? 'Kiến trúc' : 'Architectural', patterns: ['API Gateway Pattern', 'Database-per-Service', 'Event-Driven (Pub/Sub)'] },
                  { cat: language === 'vi' ? 'Đồng thời & Phân tán' : 'Concurrency & Distributed', patterns: ['Distributed Lock (Redis SET NX)', 'Pessimistic Concurrency Control', 'Cache-Aside (Lazy Loading)'] },
                  { cat: language === 'vi' ? 'Cấu trúc & Hành vi' : 'Structural & Behavioral', patterns: ['Singleton (DB/Redis conn)', 'Factory Method (Sequelize Model)', 'Facade (bookingService)', 'Adapter (ZaloPay)', 'Chain of Responsibility (Middleware)', 'Resilience + Fallback'] },
                ].map((group, idx) => (
                  <div key={idx} className="p-4 bg-[#121212] border border-[#262626] rounded">
                    <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider block mb-3">{group.cat}</span>
                    <div className="space-y-1.5">
                      {group.patterns.map((p, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4F9CF9] shrink-0 mt-1.5" />
                          <span className="text-xs text-[#d1d5db] font-mono">{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Metrics */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#9ca3af] mb-4 flex items-center gap-2">
                <BarChart3 className="w-3.5 h-3.5" />
                {language === 'vi' ? 'Chỉ số Kỹ thuật Đạt được' : 'Technical Achievements'}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { value: '6', label: language === 'vi' ? 'Vi dịch vụ độc lập' : 'Autonomous Microservices', color: '#4F9CF9' },
                  { value: '5', label: language === 'vi' ? 'Database riêng biệt' : 'Isolated Databases', color: '#A78BFA' },
                  { value: '25/25', label: language === 'vi' ? 'Unit Tests PASS' : 'Unit Tests PASS', color: '#34D399' },
                  { value: '9+', label: language === 'vi' ? 'Design Patterns' : 'Design Patterns', color: '#F59E0B' },
                ].map((m, i) => (
                  <div key={i} className="p-5 bg-[#121212] border border-[#262626] rounded text-center">
                    <div className="text-3xl font-black font-mono mb-1" style={{ color: m.color }}>{m.value}</div>
                    <div className="text-xs text-[#9ca3af] font-medium leading-tight">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── My Engineering Ownership ── */}
          <section id="ownership">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-5 h-5 text-[#D4AF37]" />
              <h2 className="text-2xl font-black text-[#f3f4f6]">
                {language === 'vi' ? 'Trách nhiệm & Đóng góp Kỹ thuật Cá nhân' : 'My Engineering Ownership & Contributions'}
              </h2>
            </div>
            <p className="text-[#d1d5db] text-base mb-8 leading-relaxed font-normal">
              {language === 'vi'
                ? 'Trong nhóm 3 thành viên, tôi đảm nhiệm vai trò Kỹ sư Phần mềm & Lập trình viên Backend chính — phụ trách toàn bộ kiến trúc hệ thống phân tán, thiết kế CSDL SQL Server, cơ chế Redis Distributed Lock và tích hợp thanh toán ZaloPay.'
                : 'In the 3-person team, I served as the primary Software Engineer & Backend Developer — owning the entire distributed system architecture, SQL Server schema design, Redis Distributed Locking mechanism, and ZaloPay payment integration.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  area: language === 'vi' ? 'Kiến trúc Vi dịch vụ (Microservices)' : 'Microservices Architecture',
                  badge: '100% Ownership',
                  color: '#4F9CF9',
                  items: language === 'vi' ? [
                    'Thiết kế và triển khai 6 vi dịch vụ độc lập với Database-per-Service pattern',
                    'Xây dựng API Gateway (JWT Auth + Reverse Proxy) dùng express-http-proxy',
                    'Cấu hình CORS whitelist tập trung tại Gateway, ẩn toàn bộ port nội bộ',
                  ] : [
                    'Designed and implemented 6 autonomous microservices with Database-per-Service isolation',
                    'Built API Gateway (JWT Auth + Reverse Proxy) using express-http-proxy',
                    'Centralized CORS whitelist at Gateway, concealing all internal service ports',
                  ],
                },
                {
                  area: language === 'vi' ? 'Redis Distributed Lock & Cache' : 'Redis Distributed Lock & Cache',
                  badge: language === 'vi' ? 'Core Backend' : 'Core Backend',
                  color: '#34D399',
                  items: language === 'vi' ? [
                    'Triển khai lệnh nguyên tử SET NX EX cho seat locking với TTL 10 phút',
                    'Xây dựng Cache-Aside pattern cho Movie Service (TTL 3600s, auto-invalidation)',
                    'Fallback tự động sang Sequelize t.LOCK.UPDATE khi Redis ngoại tuyến',
                  ] : [
                    'Implemented atomic SET NX EX seat locking with 10-minute TTL',
                    'Built Cache-Aside pattern for Movie Service (TTL 3600s, auto-invalidation)',
                    'Automatic fallback to Sequelize t.LOCK.UPDATE when Redis is offline',
                  ],
                },
                {
                  area: language === 'vi' ? 'ZaloPay Payment & Bảo mật' : 'ZaloPay Payment & Security',
                  badge: language === 'vi' ? 'Tích hợp' : 'Integration',
                  color: '#F59E0B',
                  items: language === 'vi' ? [
                    'Tích hợp ZaloPay Sandbox Dynamic QR Code API với HMAC-SHA256 Webhook verification',
                    'JWT HttpOnly Cookie authentication (7-day expiry) + bcrypt password hashing',
                    'Thiết kế luồng hoàn tiền (Refund Flow) và phân tích RefundRequests schema',
                  ] : [
                    'Integrated ZaloPay Sandbox Dynamic QR Code API with HMAC-SHA256 Webhook verification',
                    'JWT HttpOnly Cookie authentication (7-day expiry) + bcrypt password hashing',
                    'Designed refund flow architecture and RefundRequests database schema',
                  ],
                },
                {
                  area: language === 'vi' ? 'RabbitMQ Async & Kiểm thử Jest' : 'RabbitMQ Async & Jest Testing',
                  badge: language === 'vi' ? 'Backend + QA' : 'Backend + QA',
                  color: '#A78BFA',
                  items: language === 'vi' ? [
                    'Xây dựng Pub/Sub pipeline: Booking Service publish → ticket.notifications queue → Notification Service consume',
                    'Nodemailer gửi email xác nhận kèm QR Code vé điện tử bất đồng bộ',
                    'Viết 25 Unit Tests (Jest 29): Booking (4), Payment/ZaloPay (13), Movie/Cache (8) — 100% PASS',
                  ] : [
                    'Built Pub/Sub pipeline: Booking Service publishes → ticket.notifications queue → Notification Service consumes',
                    'Nodemailer dispatches confirmation emails with QR ticket asynchronously',
                    'Authored 25 Unit Tests (Jest 29): Booking (4), Payment/ZaloPay (13), Movie/Cache (8) — 100% PASS',
                  ],
                },
              ].map((own, idx) => (
                <div key={idx} className="p-5 bg-[#121212] border border-[#262626] hover:border-[#3a3a3a] transition-colors rounded">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-sm font-bold text-[#f3f4f6]">{own.area}</span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded font-mono shrink-0"
                      style={{ background: `${own.color}20`, color: own.color }}>{own.badge}</span>
                  </div>
                  <ul className="space-y-2">
                    {own.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ChevronRight className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: own.color }} />
                        <span className="text-xs text-[#9ca3af] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Architecture */}
          <section id="architecture">
            <div className="flex items-center gap-3 mb-2">
              <Layers className="w-5 h-5 text-[#4F9CF9]" />
              <h2 className="text-2xl font-black text-[#f3f4f6]">
                {language === 'vi' ? 'Kiến trúc Hệ thống Tổng thể (System Architecture)' : 'High-Level System Architecture'}
              </h2>
            </div>
            <p className="text-[#d1d5db] text-base mb-8 leading-relaxed font-normal">
              {language === 'vi'
                ? 'Sơ đồ kiến trúc đầy đủ từ Client → API Gateway (JWT Auth) → 6 Vi dịch vụ độc lập → 5 CSDL SQL Server → Redis (Distributed Lock + Cache) → RabbitMQ Queue → Notification Service.'
                : 'End-to-end architecture diagram: Client → API Gateway (JWT Auth) → 6 Autonomous Microservices → 5 isolated SQL Server databases → Redis (Distributed Lock + Cache) → RabbitMQ Queue → Notification Service.'}
            </p>

            {/* ── Architecture Diagram — Storytelling Flow ── */}
            <div className="bg-[#0b0c10] border border-[#262626] rounded-xl p-6 md:p-8 overflow-x-auto">
              <div className="max-w-[900px] mx-auto">

                {/* ─── STEP 1: User ─── */}
                <div className="flex justify-center">
                  <div className="px-8 py-4 bg-[#131b2e] border-2 border-[#38BDF8]/50 rounded-xl flex items-center gap-4 shadow-lg shadow-[#38BDF8]/5 max-w-[500px] w-full">
                    <div className="w-11 h-11 rounded-xl bg-[#38BDF8]/15 border border-[#38BDF8]/40 flex items-center justify-center shrink-0">
                      <Globe className="w-6 h-6 text-[#38BDF8]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-bold text-[#38BDF8] bg-[#38BDF8]/15 px-2 py-0.5 rounded-full font-mono">STEP 1</span>
                        <span className="text-sm font-bold text-[#f1f5f9]">
                          {language === 'vi' ? 'Người dùng mở Website' : 'User Opens Website'}
                        </span>
                      </div>
                      <p className="text-xs text-[#94a3b8] leading-relaxed">
                        {language === 'vi'
                          ? 'Trình duyệt tải ứng dụng React (Port :3000), hiển thị danh sách phim, chọn suất chiếu và sơ đồ ghế ngồi.'
                          : 'Browser loads React app (Port :3000), displaying movie listings, showtime selection, and interactive seat map.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center py-2">
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-6 bg-gradient-to-b from-[#38BDF8]/60 to-[#EAB308]/60" />
                    <ArrowDown className="w-4 h-4 text-[#EAB308]" />
                  </div>
                </div>

                {/* ─── STEP 2: API Gateway ─── */}
                <div className="flex justify-center">
                  <div className="px-8 py-4 bg-[#1c1a0e] border-2 border-[#EAB308]/50 rounded-xl flex items-center gap-4 shadow-lg shadow-[#EAB308]/5 max-w-[500px] w-full">
                    <div className="w-11 h-11 rounded-xl bg-[#EAB308]/15 border border-[#EAB308]/40 flex items-center justify-center shrink-0">
                      <Shield className="w-6 h-6 text-[#EAB308]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-bold text-[#EAB308] bg-[#EAB308]/15 px-2 py-0.5 rounded-full font-mono">STEP 2</span>
                        <span className="text-sm font-bold text-[#f1f5f9]">
                          {language === 'vi' ? 'Cổng Bảo vệ Trung tâm (API Gateway)' : 'Central Security Gateway'}
                        </span>
                      </div>
                      <p className="text-xs text-[#94a3b8] leading-relaxed">
                        {language === 'vi'
                          ? 'Mọi yêu cầu đều phải đi qua cổng duy nhất (Port :8080). Tại đây hệ thống xác minh danh tính người dùng (JWT Token) rồi điều hướng đến đúng dịch vụ phụ trách.'
                          : 'Every request passes through a single entry point (Port :8080). The gateway verifies user identity (JWT Token) then routes to the correct responsible service.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center py-2">
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-4 bg-[#EAB308]/40" />
                    <span className="text-[11px] text-[#94a3b8] font-mono bg-[#141414] px-3 py-0.5 rounded-full border border-[#333] my-1">
                      {language === 'vi' ? 'Phân phối đến 6 dịch vụ độc lập' : 'Distributes to 6 independent services'}
                    </span>
                    <ArrowDown className="w-4 h-4 text-[#A78BFA]" />
                  </div>
                </div>

                {/* ─── STEP 3: 6 Microservices ─── */}
                <div className="p-5 bg-[#111116] border-2 border-[#A78BFA]/30 rounded-xl">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold text-[#A78BFA] bg-[#A78BFA]/15 px-2 py-0.5 rounded-full font-mono">STEP 3</span>
                    <span className="text-sm font-bold text-[#f1f5f9]">
                      {language === 'vi' ? '6 Dịch vụ Độc lập — Mỗi dịch vụ làm đúng 1 việc' : '6 Independent Services — Each Does Exactly One Job'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      { icon: <User className="w-4 h-4" />, name: language === 'vi' ? 'Người dùng' : 'User', desc: language === 'vi' ? 'Đăng ký, đăng nhập, quản lý tài khoản' : 'Register, login, account management', color: '#C084FC', port: ':4001' },
                      { icon: <Film className="w-4 h-4" />, name: language === 'vi' ? 'Phim & Suất chiếu' : 'Movie Catalog', desc: language === 'vi' ? 'Danh sách phim, lịch chiếu, tìm kiếm' : 'Movie listings, showtimes, search', color: '#F472B6', port: ':4002' },
                      { icon: <Grid className="w-4 h-4" />, name: language === 'vi' ? 'Ghế ngồi' : 'Seat Map', desc: language === 'vi' ? 'Sơ đồ phòng chiếu, trạng thái từng ghế' : 'Auditorium layout, per-seat availability', color: '#60A5FA', port: ':4003' },
                      { icon: <Ticket className="w-4 h-4" />, name: language === 'vi' ? 'Đặt vé' : 'Booking', desc: language === 'vi' ? 'Giữ chỗ ghế, chống bán trùng, tạo vé' : 'Seat reservation, anti-collision, ticketing', color: '#34D399', port: ':4004', highlight: true },
                      { icon: <CreditCard className="w-4 h-4" />, name: language === 'vi' ? 'Thanh toán' : 'Payment', desc: language === 'vi' ? 'Tạo mã QR ZaloPay, xác nhận giao dịch' : 'ZaloPay QR generation, settlement', color: '#F59E0B', port: ':4005' },
                      { icon: <Bell className="w-4 h-4" />, name: language === 'vi' ? 'Thông báo' : 'Notification', desc: language === 'vi' ? 'Gửi email vé điện tử kèm mã QR' : 'Sends e-ticket email with QR code', color: '#FB923C', port: ':4006' },
                    ].map((svc, i) => (
                      <div key={i} className={`p-3 rounded-lg border transition-all ${svc.highlight ? 'ring-1 ring-[#34D399]/30' : ''}`}
                        style={{ background: '#0e0e12', borderColor: `${svc.color}40` }}>
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `${svc.color}18`, color: svc.color }}>
                            {svc.icon}
                          </div>
                          <div>
                            <span className="text-xs font-bold text-[#f1f5f9] block leading-tight">{svc.name}</span>
                            <span className="text-[10px] font-mono" style={{ color: svc.color }}>{svc.port}</span>
                          </div>
                        </div>
                        <p className="text-[11px] text-[#94a3b8] leading-relaxed">{svc.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-[11px] text-[#94a3b8] font-mono bg-[#34D399]/10 text-[#34D399] px-3 py-1 rounded-full border border-[#34D399]/25">
                      {language === 'vi'
                        ? '⚡ Mỗi dịch vụ có Database riêng — hỏng 1 cái không ảnh hưởng 5 cái còn lại'
                        : '⚡ Each service owns its own database — one failure doesn\'t cascade to others'}
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center py-2">
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-4 bg-[#A78BFA]/40" />
                    <span className="text-[11px] text-[#94a3b8] font-mono bg-[#141414] px-3 py-0.5 rounded-full border border-[#333] my-1">
                      {language === 'vi' ? 'Kết nối đến hạ tầng bên dưới' : 'Connects to infrastructure below'}
                    </span>
                    <ArrowDown className="w-4 h-4 text-[#EF4444]" />
                  </div>
                </div>

                {/* ─── STEP 4: Infrastructure ─── */}
                <div className="p-5 bg-[#111111] border border-[#2a2a2a] rounded-xl">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold text-[#EF4444] bg-[#EF4444]/15 px-2 py-0.5 rounded-full font-mono">STEP 4</span>
                    <span className="text-sm font-bold text-[#f1f5f9]">
                      {language === 'vi' ? 'Hạ tầng Lưu trữ & Giao tiếp' : 'Storage & Communication Infrastructure'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {/* SQL Server */}
                    <div className="p-4 rounded-lg bg-[#0e0e12] border border-[#EF4444]/30">
                      <div className="flex items-center gap-2.5 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-[#EF4444]/15 flex items-center justify-center">
                          <Database className="w-4.5 h-4.5 text-[#EF4444]" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#fca5a5]">SQL Server 2022</div>
                          <div className="text-[10px] text-[#94a3b8] font-mono">5 CSDL riêng biệt</div>
                        </div>
                      </div>
                      <p className="text-[11px] text-[#94a3b8] leading-relaxed">
                        {language === 'vi'
                          ? 'Lưu trữ dữ liệu vĩnh viễn: người dùng, phim, ghế, vé đã đặt, giao dịch thanh toán. Mỗi dịch vụ chỉ truy cập Database của riêng mình.'
                          : 'Persistent data storage: users, movies, seats, bookings, payment transactions. Each service can only access its own database.'}
                      </p>
                    </div>

                    {/* Redis */}
                    <div className="p-4 rounded-lg bg-[#0e0e12] border border-[#34D399]/30">
                      <div className="flex items-center gap-2.5 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-[#34D399]/15 flex items-center justify-center">
                          <Zap className="w-4.5 h-4.5 text-[#34D399]" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#86efac]">Redis</div>
                          <div className="text-[10px] text-[#94a3b8] font-mono">{language === 'vi' ? 'Bộ nhớ siêu nhanh' : 'In-memory speed layer'}</div>
                        </div>
                      </div>
                      <p className="text-[11px] text-[#94a3b8] leading-relaxed">
                        {language === 'vi'
                          ? '2 vai trò: (1) Khóa phân tán — đảm bảo chỉ 1 người giữ được 1 ghế cùng lúc. (2) Bộ đệm — tăng tốc truy vấn danh sách phim.'
                          : 'Two roles: (1) Distributed Lock — ensures only 1 person holds a seat at a time. (2) Cache — speeds up movie catalog queries.'}
                      </p>
                    </div>

                    {/* RabbitMQ */}
                    <div className="p-4 rounded-lg bg-[#0e0e12] border border-[#FB923C]/30">
                      <div className="flex items-center gap-2.5 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-[#FB923C]/15 flex items-center justify-center">
                          <Radio className="w-4.5 h-4.5 text-[#FB923C]" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#fdba74]">RabbitMQ</div>
                          <div className="text-[10px] text-[#94a3b8] font-mono">{language === 'vi' ? 'Hàng đợi tin nhắn' : 'Message queue'}</div>
                        </div>
                      </div>
                      <p className="text-[11px] text-[#94a3b8] leading-relaxed">
                        {language === 'vi'
                          ? 'Khi đặt vé xong, hệ thống gửi tin nhắn \"hãy gửi email vé\" vào hàng đợi. Dịch vụ thông báo nhận và gửi email — không làm chậm người dùng.'
                          : 'After booking, the system queues a "send ticket email" message. Notification service picks it up and sends email — without slowing the user down.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center py-2">
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-4 bg-[#EF4444]/30" />
                    <ArrowDown className="w-4 h-4 text-[#38BDF8]" />
                  </div>
                </div>

                {/* ─── STEP 5: External — ZaloPay ─── */}
                <div className="flex justify-center">
                  <div className="px-8 py-4 bg-gradient-to-r from-[#0d1b2e] via-[#10223a] to-[#0d1b2e] border-2 border-[#38BDF8]/40 rounded-xl flex items-center gap-4 max-w-[560px] w-full shadow-lg shadow-[#38BDF8]/5">
                    <div className="w-11 h-11 rounded-xl bg-[#38BDF8]/15 border border-[#38BDF8]/40 flex items-center justify-center shrink-0">
                      <CreditCard className="w-6 h-6 text-[#38BDF8]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-bold text-[#38BDF8] bg-[#38BDF8]/15 px-2 py-0.5 rounded-full font-mono">STEP 5</span>
                        <span className="text-sm font-bold text-[#f1f5f9]">
                          {language === 'vi' ? 'Cổng Thanh toán ZaloPay' : 'ZaloPay Payment Gateway'}
                        </span>
                      </div>
                      <p className="text-xs text-[#94a3b8] leading-relaxed">
                        {language === 'vi'
                          ? 'Dịch vụ bên ngoài: tạo mã QR để quét thanh toán, sau đó gọi ngược lại xác nhận giao dịch thành công (Webhook).'
                          : 'External partner: generates QR code for payment scanning, then calls back to confirm successful transaction (Webhook).'}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Services quick-ref table below diagram */}
            <div className="mt-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#9ca3af] mb-3 font-mono">
                {language === 'vi' ? 'Bảng tham chiếu nhanh — 6 Vi dịch vụ' : 'Quick Reference — 6 Microservices'}
              </h3>
              <div className="border border-[#262626] rounded overflow-hidden">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-[#141414] border-b border-[#262626]">
                      <th className="text-left px-4 py-2.5 text-[#9ca3af] font-bold uppercase tracking-wider">Service</th>
                      <th className="text-left px-4 py-2.5 text-[#9ca3af] font-bold uppercase tracking-wider">Port</th>
                      <th className="text-left px-4 py-2.5 text-[#9ca3af] font-bold uppercase tracking-wider">Database</th>
                      <th className="text-left px-4 py-2.5 text-[#9ca3af] font-bold uppercase tracking-wider">{language === 'vi' ? 'Trách nhiệm' : 'Responsibility'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'API Gateway', port: ':8080', db: '—', resp: language === 'vi' ? 'JWT Auth · CORS · Reverse Proxy → các service' : 'JWT Auth · CORS · Reverse Proxy to services', color: '#D4AF37' },
                      { name: 'User Service', port: ':4001', db: 'XemPhim_User', resp: language === 'vi' ? 'Đăng ký / Đăng nhập · bcrypt · Profile' : 'Register / Login · bcrypt · Profile', color: '#A78BFA' },
                      { name: 'Movie Service', port: ':4002', db: 'XemPhim_Movie', resp: language === 'vi' ? 'Phim · Suất chiếu · Cache-Aside Redis (TTL 3600s)' : 'Movies · Showtimes · Cache-Aside Redis (TTL 3600s)', color: '#F472B6' },
                      { name: 'Seat Service', port: ':4003', db: 'XemPhim_Seat', resp: language === 'vi' ? 'Sơ đồ ghế · Trạng thái khả dụng · Phòng chiếu' : 'Seat map · Availability status · Auditorium layout', color: '#60A5FA' },
                      { name: 'Booking Service', port: ':4004', db: 'XemPhim_Booking', resp: language === 'vi' ? 'Đặt vé · Redis SET NX EX Lock (TTL 10m) · RabbitMQ publish' : 'Booking · Redis SET NX EX Lock (TTL 10m) · RabbitMQ publish', color: '#34D399' },
                      { name: 'Payment Service', port: ':4005', db: 'XemPhim_Payment', resp: language === 'vi' ? 'ZaloPay QR · HMAC-SHA256 Webhook · Refund Flow' : 'ZaloPay QR · HMAC-SHA256 Webhook · Refund Flow', color: '#F59E0B' },
                      { name: 'Notification Svc', port: ':4006', db: '—', resp: language === 'vi' ? 'RabbitMQ consume · QR vé · Email Nodemailer (bất đồng bộ)' : 'RabbitMQ consume · QR ticket · Email via Nodemailer (async)', color: '#FB923C' },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-[#1c1c1c] hover:bg-[#161616] transition-colors">
                        <td className="px-4 py-2.5 font-bold font-mono" style={{ color: row.color }}>{row.name}</td>
                        <td className="px-4 py-2.5 font-mono text-[#f3f4f6]">{row.port}</td>
                        <td className="px-4 py-2.5 font-mono text-[#9ca3af]">{row.db}</td>
                        <td className="px-4 py-2.5 text-[#d1d5db]">{row.resp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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

                <div className="flex items-start gap-4 p-4 bg-[#181818] border-l-4 border-[#EF4444] rounded-r">
                  <span className="w-7 h-7 rounded-full bg-[#EF4444]/20 text-[#EF4444] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">5</span>
                  <div>
                    <span className="text-sm font-bold text-[#f3f4f6] block mb-1">
                      {language === 'vi' ? 'Thoát web / Đóng tab → Nhả ghế ngay lập tức' : 'Browser Exit / Tab Close → Instant Seat Release'}
                    </span>
                    <p className="text-sm text-[#d1d5db] font-normal leading-relaxed">
                      {language === 'vi'
                        ? 'Khi người dùng đóng tab, F5, hoặc rời trang thanh toán → trình duyệt bắn sự kiện beforeunload → gọi API cancel booking (keepalive: true) → Backend chạy releaseSeatLocks() xóa khóa Redis ngay lập tức → ghế trở lại trạng thái khả dụng gần như realtime. Nếu mất mạng, Redis tự hủy khóa sau 10 phút (TTL fallback).'
                        : 'When user closes tab, refreshes (F5), or leaves payment page → browser fires beforeunload → calls cancel booking API (keepalive: true) → Backend runs releaseSeatLocks() deleting Redis keys immediately → seat becomes available in near-realtime. If network fails, Redis auto-evicts lock after 10 min (TTL fallback).'}
                    </p>
                  </div>
                </div>
              </div>

              {/* ── Visual Flow Diagram ── */}
              <div className="mt-6 pt-6 border-t border-[#262626]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#9ca3af] mb-4 font-mono">
                  {language === 'vi' ? 'SƠ ĐỒ LUỒNG HOÀN CHỈNH' : 'COMPLETE FLOW DIAGRAM'}
                </h3>
                <div className="bg-[#0b0c10] border border-[#262626] rounded-xl p-6 overflow-x-auto">
                  <div className="max-w-[800px] mx-auto">

                    {/* Row 1: User Action */}
                    <div className="flex justify-center">
                      <div className="px-5 py-3 bg-[#131b2e] border-2 border-[#38BDF8]/50 rounded-lg flex items-center gap-3">
                        <User className="w-5 h-5 text-[#38BDF8]" />
                        <span className="text-sm font-bold text-[#f1f5f9]">
                          {language === 'vi' ? 'Người dùng chọn ghế → Nhấn "Đặt vé"' : 'User selects seat → Clicks "Book"'}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-center py-1.5"><ArrowDown className="w-4 h-4 text-[#38BDF8]" /></div>

                    {/* Row 2: Redis Lock */}
                    <div className="flex justify-center">
                      <div className="px-5 py-3 bg-[#0f241a] border-2 border-[#34D399]/50 rounded-lg text-center">
                        <div className="text-sm font-bold text-[#34D399] mb-1">Redis SET NX EX 600</div>
                        <div className="text-xs text-[#94a3b8] font-mono">lock:showtime:{'{'}id{'}'}:seat:{'{'}id{'}'}</div>
                      </div>
                    </div>
                    <div className="flex justify-center py-1.5"><ArrowDown className="w-4 h-4 text-[#34D399]" /></div>

                    {/* Row 3: Branch - Success or Fail */}
                    <div className="flex justify-center gap-6">
                      <div className="px-4 py-2.5 bg-[#34D399]/10 border border-[#34D399]/40 rounded-lg text-center flex-1 max-w-[200px]">
                        <div className="text-xs font-bold text-[#34D399]">✓ OK</div>
                        <div className="text-[11px] text-[#94a3b8]">{language === 'vi' ? 'Giành được ghế' : 'Lock Acquired'}</div>
                      </div>
                      <div className="px-4 py-2.5 bg-[#EF4444]/10 border border-[#EF4444]/40 rounded-lg text-center flex-1 max-w-[200px]">
                        <div className="text-xs font-bold text-[#EF4444]">✗ NULL</div>
                        <div className="text-[11px] text-[#94a3b8]">{language === 'vi' ? 'HTTP 409 → Ghế đã bị giữ' : 'HTTP 409 → Seat Taken'}</div>
                      </div>
                    </div>
                    <div className="flex justify-center py-1.5"><ArrowDown className="w-4 h-4 text-[#F59E0B]" /></div>

                    {/* Row 4: Payment */}
                    <div className="flex justify-center">
                      <div className="px-5 py-3 bg-[#241d10] border-2 border-[#F59E0B]/50 rounded-lg flex items-center gap-3">
                        <CreditCard className="w-5 h-5 text-[#F59E0B]" />
                        <span className="text-sm font-bold text-[#f1f5f9]">
                          {language === 'vi' ? 'Quét mã QR thanh toán ZaloPay' : 'Scan ZaloPay QR Payment'}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-center py-1.5"><ArrowDown className="w-4 h-4 text-[#94a3b8]" /></div>

                    {/* Row 5: 3 Exit Scenarios */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {/* Scenario A: Success */}
                      <div className="p-3.5 rounded-lg border-2 border-[#34D399]/50 bg-[#0f241a]">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle className="w-4 h-4 text-[#34D399]" />
                          <span className="text-xs font-bold text-[#34D399]">
                            {language === 'vi' ? 'Thanh toán OK' : 'Payment OK'}
                          </span>
                        </div>
                        <div className="space-y-1.5">
                          <div className="text-[11px] text-[#94a3b8] flex items-start gap-1.5">
                            <span className="text-[#34D399] shrink-0">→</span>
                            <span>{language === 'vi' ? 'Ghi vé vào SQL Server' : 'Commit ticket to SQL Server'}</span>
                          </div>
                          <div className="text-[11px] text-[#94a3b8] flex items-start gap-1.5">
                            <span className="text-[#34D399] shrink-0">→</span>
                            <span>{language === 'vi' ? 'Gửi email qua RabbitMQ' : 'Queue email via RabbitMQ'}</span>
                          </div>
                          <div className="text-[11px] text-[#94a3b8] flex items-start gap-1.5">
                            <span className="text-[#34D399] shrink-0">→</span>
                            <span>{language === 'vi' ? 'Xóa khóa Redis' : 'Delete Redis lock'}</span>
                          </div>
                        </div>
                      </div>

                      {/* Scenario B: Tab Close */}
                      <div className="p-3.5 rounded-lg border-2 border-[#EF4444]/50 bg-[#190c0c]">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle className="w-4 h-4 text-[#EF4444]" />
                          <span className="text-xs font-bold text-[#EF4444]">
                            {language === 'vi' ? 'Đóng tab / Thoát' : 'Tab Close / Exit'}
                          </span>
                        </div>
                        <div className="space-y-1.5">
                          <div className="text-[11px] text-[#94a3b8] flex items-start gap-1.5">
                            <span className="text-[#EF4444] shrink-0">→</span>
                            <span>beforeunload event</span>
                          </div>
                          <div className="text-[11px] text-[#94a3b8] flex items-start gap-1.5">
                            <span className="text-[#EF4444] shrink-0">→</span>
                            <span>POST /cancel (keepalive)</span>
                          </div>
                          <div className="text-[11px] text-[#94a3b8] flex items-start gap-1.5">
                            <span className="text-[#EF4444] shrink-0">→</span>
                            <span>{language === 'vi' ? 'Redis DEL → Nhả ghế ngay' : 'Redis DEL → Instant release'}</span>
                          </div>
                        </div>
                      </div>

                      {/* Scenario C: Timeout */}
                      <div className="p-3.5 rounded-lg border-2 border-[#F59E0B]/50 bg-[#241d10]">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="w-4 h-4 text-[#F59E0B]" />
                          <span className="text-xs font-bold text-[#F59E0B]">
                            {language === 'vi' ? 'Hết 10 phút (TTL)' : '10-Min Timeout (TTL)'}
                          </span>
                        </div>
                        <div className="space-y-1.5">
                          <div className="text-[11px] text-[#94a3b8] flex items-start gap-1.5">
                            <span className="text-[#F59E0B] shrink-0">→</span>
                            <span>{language === 'vi' ? 'Redis tự hủy khóa (EX)' : 'Redis auto-evicts key (EX)'}</span>
                          </div>
                          <div className="text-[11px] text-[#94a3b8] flex items-start gap-1.5">
                            <span className="text-[#F59E0B] shrink-0">→</span>
                            <span>{language === 'vi' ? 'Booking → status: expired' : 'Booking → status: expired'}</span>
                          </div>
                          <div className="text-[11px] text-[#94a3b8] flex items-start gap-1.5">
                            <span className="text-[#F59E0B] shrink-0">→</span>
                            <span>{language === 'vi' ? 'Ghế mở khóa tự động' : 'Seat unlocked automatically'}</span>
                          </div>
                        </div>
                      </div>
                    </div>

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
