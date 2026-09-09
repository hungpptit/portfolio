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
            <a href={detail.githubUrl} target="_blank" rel="noopener noreferrer"
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
                <div>
                  <p className="text-xs text-[#64748B] mb-1 font-medium">{t.detailCommon.durationLabel}</p>
                  <p className="text-sm text-[#0B0E17] font-semibold">{detail.duration}</p>
                </div>
                <div>
                  <p className="text-xs text-[#64748B] mb-1 font-medium">{t.detailCommon.roleLabel}</p>
                  <p className="text-sm text-[#0B0E17] font-semibold">{detail.role}</p>
                </div>
                <div>
                  <p className="text-xs text-[#64748B] mb-1 font-medium">{t.detailCommon.teamLabel}</p>
                  <p className="text-sm text-[#0B0E17] font-semibold">{detail.teamSize}</p>
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
                    className={`w-full text-left flex items-center gap-2 py-1.5 px-0 text-sm transition-colors cursor-pointer ${activeSection === s.id
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
        <main className="flex-1 min-w-0 border-l border-slate-200/80 pl-10 py-10 space-y-20">
          {/* Hero Overview */}
          <section id="overview">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#5E6AD2] shadow-[0_0_8px_#5E6AD2]" />
              <span className="text-xs font-bold tracking-wider text-[#5E6AD2] uppercase">
                {language === 'vi' ? 'HỆ THỐNG PHÂN TÁN · KIẾN TRÚC VI DỊCH VỤ' : 'DISTRIBUTED SYSTEMS · MICROSERVICES'}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#0B0E17] tracking-tight mb-6 leading-tight">
              Online Movie Ticket<br />
              <span className="text-[#5E6AD2]">{language === 'vi' ? 'Booking System' : 'Booking Platform'}</span>
            </h1>
            <p className="text-[#334155] leading-relaxed mb-10 max-w-3xl font-normal text-lg">{detail.overview}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-5 bg-white/90 border border-slate-200/80 rounded-2xl shadow-xs">
                <span className="text-xs text-[#64748B] uppercase tracking-wider block mb-2">{language === 'vi' ? 'Bảo đảm Ghế ngồi' : 'Concurrency Control'}</span>
                <span className="text-xl font-bold font-mono text-emerald-700">{language === 'vi' ? 'Chống Bán Trùng' : 'Anti Double-Book'}</span>
              </div>
              <div className="p-5 bg-white/90 border border-slate-200/80 rounded-2xl shadow-xs">
                <span className="text-xs text-[#64748B] uppercase tracking-wider block mb-2">{language === 'vi' ? 'Kiến trúc Phân tán' : 'Microservices'}</span>
                <span className="text-xl font-bold font-mono text-[#5E6AD2]">{language === 'vi' ? '6 Services + Gateway' : '6 Services + Gateway'}</span>
              </div>
              <div className="p-5 bg-white/90 border border-slate-200/80 rounded-2xl shadow-xs">
                <span className="text-xs text-[#64748B] uppercase tracking-wider block mb-2">{language === 'vi' ? 'Giao dịch phân tán' : 'Distributed Consistency'}</span>
                <span className="text-xl font-bold font-mono text-amber-700">SAGA Choreography</span>
              </div>
              <div className="p-5 bg-white/90 border border-slate-200/80 rounded-2xl shadow-xs">
                <span className="text-xs text-[#64748B] uppercase tracking-wider block mb-2">{language === 'vi' ? 'Khả năng phục hồi' : 'Fault Tolerance'}</span>
                <span className="text-xl font-bold font-mono text-purple-700">Circuit Breakers</span>
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
              themeColor="#5E6AD2"
              terminalCommand="npm test -- --coverage --testPathPattern=booking.spec.ts"
            />
          </section>

          {/* ── Business Context & Problem Statement ── */}
          <section id="context">
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="w-5 h-5 text-amber-600" />
              <h2 className="text-2xl font-black text-[#0B0E17]">
                {language === 'vi' ? 'Bối cảnh Bài toán & Lý do Xây dựng Hệ thống' : 'Problem Context & Motivation'}
              </h2>
            </div>
            <p className="text-[#334155] text-base mb-8 leading-relaxed font-normal">
              {language === 'vi'
                ? 'Hệ thống đặt vé xem phim trực tuyến đối mặt với bài toán concurrency cực kỳ khắc nghiệt khi hàng nghìn người dùng cùng truy cập suất chiếu hot cùng lúc. Đây là phân tích gốc rễ của vấn đề và các hạn chế của kiến trúc monolithic truyền thống.'
                : 'Online movie ticket booking faces extreme concurrency challenges when thousands of users simultaneously rush to book the same blockbuster premiere. This section analyzes the root causes and limitations of traditional monolithic approaches.'}
            </p>

            {/* Core Problem Banner */}
            <div className="p-5 bg-amber-50/80 border border-amber-200/90 rounded-2xl shadow-xs mb-6">
              <div className="flex items-center gap-2.5 mb-2 text-amber-700">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider font-mono">
                  {language === 'vi' ? 'VẤN ĐỀ CỐT LÕI (CORE PROBLEM)' : 'ROOT CAUSE PROBLEM'}
                </span>
              </div>
              <p className="text-base text-amber-950 font-medium leading-relaxed">
                {language === 'vi'
                  ? 'Khi một suất chiếu hot mở bán, nhiều người dùng đồng thời nhấn "Đặt vé" cho cùng một ghế trong khoảng thời gian ngắn. Cách tiếp cận READ-THEN-WRITE thông thường không đảm bảo an toàn dưới concurrent requests, có thể dẫn đến Race Condition và Double-Booking.'
                  : 'When a blockbuster premiere goes on sale, multiple users concurrently click "Book" for the same seat within milliseconds. Conventional READ-THEN-WRITE approaches without distributed synchronization fail under high concurrency, resulting in severe Race Conditions and Double-Booking.'}
              </p>
            </div>

            {/* Pain Points Grid */}
            <div className="p-6 bg-white/90 border border-slate-200/80 rounded-2xl shadow-xs mb-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#5E6AD2] mb-5 flex items-center gap-2">
                <ChevronRight className="w-4 h-4 shrink-0" />
                {language === 'vi' ? 'Tại sao Kiến trúc Monolithic Thất bại?' : 'Why Does Monolithic Architecture Fail Here?'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    color: '#EC4899',
                    title: language === 'vi' ? 'Race Condition trên CSDL' : 'Database Race Condition',
                    detail: language === 'vi'
                      ? 'Hai request đọc trạng thái ghế cùng lúc → cùng thấy "trống" → cùng ghi → trùng ghế. READ không phải lệnh nguyên tử.'
                      : 'Two concurrent requests both read seat as "available" simultaneously → both write → collision. Non-atomic READ-WRITE is inherently unsafe.',
                  },
                  {
                    color: '#F59E0B',
                    title: language === 'vi' ? 'Database Lock Contention' : 'Database Lock Contention',
                    detail: language === 'vi'
                      ? 'Khi nhiều request đồng thời tranh chấp cùng tài nguyên, việc phụ thuộc hoàn toàn vào database locking có thể làm tăng lock contention, lock wait và áp lực lên CSDL.'
                      : 'Under high concurrency on identical resources, relying solely on database locking increases lock contention, wait times, and database transaction pressure.',
                  },
                  {
                    color: '#EF4444',
                    title: language === 'vi' ? 'Không thể Scale độc lập' : 'Cannot Scale Independently',
                    detail: language === 'vi'
                      ? 'Monolith scale toàn bộ ứng dụng, tốn kém và không hiệu quả. Không thể chỉ scale riêng Booking Service khi cần.'
                      : 'Monolith requires scaling the entire application even if only the booking module is under load — costly and inefficient.',
                  },
                  {
                    color: '#5E6AD2',
                    title: language === 'vi' ? 'Coupling nghiệp vụ chặt chẽ' : 'Tight Business Domain Coupling',
                    detail: language === 'vi'
                      ? 'Thay đổi logic thanh toán ảnh hưởng trực tiếp đến module đặt vé, phim và người dùng — rủi ro regression cao.'
                      : 'Payment logic changes directly risk breaking booking, movie catalog, and user modules — high regression danger.',
                  },
                ].map((p, idx) => (
                  <div key={idx} className="p-5 bg-slate-50/80 border border-slate-200/80 hover:border-[#5E6AD2]/50 hover:bg-white transition-all rounded-xl flex flex-col gap-3 shadow-2xs">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full shrink-0" style={{ background: p.color }} />
                      <span className="text-sm font-bold text-[#0B0E17] leading-tight">{p.title}</span>
                    </div>
                    <p className="text-xs text-[#475569] leading-relaxed font-normal">{p.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solution Banner */}
            <div className="p-5 bg-emerald-50/80 border border-emerald-200/90 rounded-2xl shadow-xs">
              <div className="flex items-center gap-2.5 mb-2 text-emerald-700">
                <CheckCircle className="w-5 h-5 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider font-mono">
                  {language === 'vi' ? 'GIẢI PHÁP KIẾN TRÚC (ARCHITECTURAL SOLUTION)' : 'ARCHITECTURAL SOLUTION'}
                </span>
              </div>
              <p className="text-base text-emerald-950 font-medium leading-relaxed">
                {language === 'vi'
                  ? 'Xây dựng trên nền Kiến trúc Vi dịch vụ (Microservices) với 6 dịch vụ nghiệp vụ phía sau API Gateway (Database-per-Service). Áp dụng Khóa phân tán Redis (SET NX PX 120s) như lớp đồng bộ hóa nguyên tử tốc độ cao — chỉ request đầu tiên acquire lock thành công; các request tranh chấp còn lại nhận HTTP 409 Conflict ngay tại Redis, giảm tải tối đa cho database.'
                  : 'Engineered with a Microservices Architecture featuring 6 business services behind a centralized API Gateway (Database-per-Service). Applied Redis Distributed Locking (atomic SET NX PX 120s) as an in-memory synchronization layer — only the first request successfully acquires the lock, while concurrent contenders receive an immediate HTTP 409 Conflict at the Redis layer, offloading database pressure.'}
              </p>
            </div>
          </section>

          {/* ── Objectives & Project Scope ── */}
          <section id="scope">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-5 h-5 text-[#8B5CF6]" />
              <h2 className="text-2xl font-black text-[#0B0E17]">
                {language === 'vi' ? 'Mục tiêu Hệ thống & Phạm vi Dự án' : 'System Objectives & Project Scope'}
              </h2>
            </div>
            <p className="text-[#334155] text-base mb-8 leading-relaxed font-normal">
              {language === 'vi'
                ? '3 mục tiêu kỹ thuật cốt lõi, 12+ mẫu kiến trúc & thiết kế phân tán (Architecture & Design Patterns) được áp dụng và các chỉ số kỹ thuật đạt được của dự án.'
                : '3 core engineering objectives, 12+ distributed architecture & design patterns applied, and measurable technical achievements of the project.'}
            </p>

            {/* 3 Core Goals */}
            <div className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-4">
                {language === 'vi' ? '3 Mục tiêu Kỹ thuật Cốt lõi' : '3 Core Engineering Objectives'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    color: '#5E6AD2',
                    num: '01',
                    title: language === 'vi' ? 'Chống Bán Trùng Ghế' : 'Anti Double-Booking',
                    desc: language === 'vi'
                      ? 'Ngăn ngừa tranh chấp và bảo toàn trạng thái ghế đơn dưới tải lượng truy cập đồng thời cao (Concurrency Control).'
                      : 'Prevents seat contention and ensures single-seat reservation integrity under concurrent user traffic.',
                  },
                  {
                    color: '#8B5CF6',
                    num: '02',
                    title: language === 'vi' ? 'Mở rộng Độc lập' : 'Independently Scalable',
                    desc: language === 'vi'
                      ? '6 vi dịch vụ tự chủ (Database-per-Service) phía sau API Gateway, có thể scale riêng lẻ theo tải của từng domain.'
                      : '6 autonomous microservices (Database-per-Service) behind an API Gateway, independently scalable per domain load.',
                  },
                  {
                    color: '#10B981',
                    num: '03',
                    title: language === 'vi' ? 'Chất lượng & Bảo mật' : 'Quality & Security',
                    desc: language === 'vi'
                      ? '25/25 Unit Tests (100% PASS), HMAC-SHA256 trên Webhook ZaloPay, JWT HttpOnly Cookie, bcrypt hash mật khẩu.'
                      : '25/25 Unit Tests (100% PASS), HMAC-SHA256 on ZaloPay Webhooks, JWT HttpOnly Cookies, bcrypt password hashing.',
                  },
                ].map((g, idx) => (
                  <div key={idx} className="p-5 bg-white/90 border border-slate-200/80 rounded-2xl shadow-xs flex flex-col justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-mono shrink-0"
                        style={{ background: `${g.color}15`, color: g.color }}>{g.num}</span>
                      <span className="text-sm font-bold text-[#0B0E17]">{g.title}</span>
                    </div>
                    <p className="text-xs text-[#475569] leading-relaxed font-normal">{g.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Design Patterns Applied */}
            <div className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-4 flex items-center gap-2">
                <GitBranch className="w-3.5 h-3.5" />
                {language === 'vi' ? '12+ Mẫu Kiến trúc & Thiết kế Phân tán (Architecture & Design Patterns)' : '12+ Distributed Architecture & Design Patterns Applied'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  {
                    cat: language === 'vi' ? 'Kiến trúc & Phân rã Domain' : 'Architecture & Domain Decomposition',
                    patterns: [
                      'API Gateway Pattern (Centralized Entry)',
                      'Database-per-Service (Isolated Data Stores)',
                      'Single Source of Truth (Seat Service)',
                      'Event-Driven Architecture (Pub/Sub)'
                    ]
                  },
                  {
                    cat: language === 'vi' ? 'Giao dịch Phân tán & Chịu lỗi' : 'Distributed Transactions & Resilience',
                    patterns: [
                      'SAGA Choreography (RabbitMQ Messaging)',
                      'Compensating Transaction (Auto Refund)',
                      'Circuit Breaker Pattern (Opossum 8.x)',
                      'Distributed Tracing (Correlation ID)'
                    ]
                  },
                  {
                    cat: language === 'vi' ? 'Đồng thời & Tối ưu Hiệu năng' : 'Concurrency & High Performance',
                    patterns: [
                      'Distributed Lock (Redis SET NX PX 120s)',
                      'Pessimistic Concurrency Fallback (DB Lock)',
                      'Batch Query (O(N) → O(1) Network Round Trips)',
                      'Cache-Aside Pattern (Showtime Metadata)'
                    ]
                  },
                ].map((group, idx) => (
                  <div key={idx} className="p-5 bg-white/90 border border-slate-200/80 rounded-2xl shadow-xs">
                    <span className="text-xs font-bold text-[#5E6AD2] uppercase tracking-wider block mb-3 font-mono">{group.cat}</span>
                    <div className="space-y-2">
                      {group.patterns.map((p, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#5E6AD2] shrink-0 mt-1.5" />
                          <span className="text-xs text-[#334155] font-mono">{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Metrics */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-4 flex items-center gap-2">
                <BarChart3 className="w-3.5 h-3.5" />
                {language === 'vi' ? 'Chỉ số Kỹ thuật Đạt được' : 'Technical Achievements'}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { value: '6 + 1', label: language === 'vi' ? 'Microservices + Gateway' : 'Microservices + Gateway', color: '#5E6AD2' },
                  { value: '5', label: language === 'vi' ? 'Database độc lập (Stateless Notification)' : 'Isolated Databases (Stateless Notification)', color: '#8B5CF6' },
                  { value: '25/25', label: language === 'vi' ? 'Unit Tests PASS (100%)' : 'Unit Tests PASS (100%)', color: '#10B981' },
                  { value: '12+', label: language === 'vi' ? 'Architecture & Design Patterns' : 'Architecture & Design Patterns', color: '#F59E0B' },
                ].map((m, i) => (
                  <div key={i} className="p-5 bg-white/90 border border-slate-200/80 rounded-2xl shadow-xs text-center">
                    <div className="text-3xl font-black font-mono mb-1" style={{ color: m.color }}>{m.value}</div>
                    <div className="text-xs text-[#64748B] font-medium leading-tight">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── My Engineering Ownership ── */}
          <section id="ownership">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-5 h-5 text-[#5E6AD2]" />
              <h2 className="text-2xl font-black text-[#0B0E17]">
                {language === 'vi' ? 'Trách nhiệm & Đóng góp Kỹ thuật Cá nhân' : 'My Engineering Ownership & Contributions'}
              </h2>
            </div>
            <p className="text-[#334155] text-base mb-8 leading-relaxed font-normal">
              {language === 'vi'
                ? 'Trong nhóm 3 thành viên, tôi đảm nhiệm vai trò Kỹ sư Phần mềm & Lập trình viên Backend chính — phụ trách toàn bộ kiến trúc hệ thống phân tán, thiết kế CSDL SQL Server, cơ chế Redis Distributed Lock và tích hợp thanh toán ZaloPay.'
                : 'In the 3-person team, I served as the primary Software Engineer & Backend Developer — owning the entire distributed system architecture, SQL Server schema design, Redis Distributed Locking mechanism, and ZaloPay payment integration.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  area: language === 'vi' ? 'Kiến trúc Vi dịch vụ (Microservices)' : 'Microservices Architecture',
                  badge: '100% Ownership',
                  color: '#5E6AD2',
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
                  color: '#10B981',
                  items: language === 'vi' ? [
                    'Triển khai lệnh nguyên tử SET NX PX cho seat locking với TTL 120s',
                    'Xây dựng Cache-Aside pattern cho Movie Service (TTL 5 phút, tránh flood request)',
                    'Fallback tự động sang Sequelize t.LOCK.UPDATE khi Redis ngoại tuyến',
                  ] : [
                    'Implemented atomic SET NX PX seat locking with 120s TTL',
                    'Built Cache-Aside pattern for Movie Service (5-min TTL, preventing request flooding)',
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
                  color: '#8B5CF6',
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
                <div key={idx} className="p-6 bg-white/90 border border-slate-200/80 hover:border-[#5E6AD2]/50 hover:shadow-md transition-all rounded-2xl shadow-xs">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-sm font-bold text-[#0B0E17]">{own.area}</span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-lg font-mono shrink-0"
                      style={{ background: `${own.color}15`, color: own.color }}>{own.badge}</span>
                  </div>
                  <ul className="space-y-2">
                    {own.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ChevronRight className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: own.color }} />
                        <span className="text-xs text-[#475569] leading-relaxed">{item}</span>
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
              <Layers className="w-5 h-5 text-[#5E6AD2]" />
              <h2 className="text-2xl font-black text-[#0B0E17]">
                {language === 'vi' ? 'Kiến trúc Hệ thống Tổng thể (System Architecture)' : 'High-Level System Architecture'}
              </h2>
            </div>
            <p className="text-[#334155] text-base mb-8 leading-relaxed font-normal">
              {language === 'vi'
                ? 'Sơ đồ kiến trúc đầy đủ từ Client → API Gateway (JWT Auth) → 6 Vi dịch vụ độc lập → 5 CSDL SQL Server → Redis (Distributed Lock + Cache) → RabbitMQ Queue → Notification Service.'
                : 'End-to-end architecture diagram: Client → API Gateway (JWT Auth) → 6 Autonomous Microservices → 5 isolated SQL Server databases → Redis (Distributed Lock + Cache) → RabbitMQ Queue → Notification Service.'}
            </p>

            {/* ── Architecture Diagram — Storytelling Flow ── */}
            <div className="bg-white/90 border border-slate-200/80 rounded-2xl p-6 md:p-8 overflow-x-auto shadow-xs">
              <div className="max-w-[900px] mx-auto">

                {/* ─── STEP 1: User ─── */}
                <div className="flex justify-center">
                  <div className="px-8 py-4 bg-sky-50/80 border-2 border-sky-300 rounded-2xl flex items-center gap-4 shadow-2xs max-w-[500px] w-full">
                    <div className="w-11 h-11 rounded-xl bg-white border border-sky-200 flex items-center justify-center shrink-0 shadow-2xs">
                      <Globe className="w-6 h-6 text-sky-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-bold text-sky-700 bg-sky-100 px-2 py-0.5 rounded-full font-mono">STEP 1</span>
                        <span className="text-sm font-bold text-[#0B0E17]">
                          {language === 'vi' ? 'Người dùng mở Website' : 'User Opens Website'}
                        </span>
                      </div>
                      <p className="text-xs text-[#475569] leading-relaxed">
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
                    <div className="w-0.5 h-6 bg-gradient-to-b from-sky-400 to-amber-400" />
                    <ArrowDown className="w-4 h-4 text-amber-500" />
                  </div>
                </div>

                {/* ─── STEP 2: API Gateway ─── */}
                <div className="flex justify-center">
                  <div className="px-8 py-4 bg-amber-50/80 border-2 border-amber-300 rounded-2xl flex items-center gap-4 shadow-2xs max-w-[540px] w-full">
                    <div className="w-11 h-11 rounded-xl bg-white border border-amber-200 flex items-center justify-center shrink-0 shadow-2xs">
                      <Shield className="w-6 h-6 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full font-mono">STEP 2</span>
                        <span className="text-sm font-bold text-[#0B0E17]">
                          {language === 'vi' ? 'Cổng API Gateway & Circuit Breaker' : 'API Gateway & Circuit Breakers'}
                        </span>
                      </div>
                      <p className="text-xs text-[#475569] leading-relaxed">
                        {language === 'vi'
                          ? 'Cổng duy nhất (:8080) xác thực JWT, sinh Correlation ID (x-request-id) để truy vết phân tán xuyên suốt hệ thống. Tích hợp Circuit Breaker (Opossum) với ngưỡng lỗi 50% và timeout 6s; khi downstream vượt ngưỡng lỗi, mạch tự động chuyển sang Open và Gateway trả về HTTP 503, giúp ngăn lỗi lan truyền.'
                          : 'Single entry point (:8080) authenticating JWTs and injecting Correlation IDs (x-request-id) for distributed tracing. Configured with Opossum Circuit Breakers (50% error threshold, 6s timeout) to trip Open and return HTTP 503 when downstream fails, preventing cascading outages.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center py-2">
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-4 bg-amber-300" />
                    <span className="text-[11px] text-[#475569] font-mono bg-slate-100 px-3 py-0.5 rounded-full border border-slate-200 my-1 font-semibold">
                      {language === 'vi' ? 'Phân phối đến 6 dịch vụ độc lập' : 'Distributes to 6 independent services'}
                    </span>
                    <ArrowDown className="w-4 h-4 text-[#8B5CF6]" />
                  </div>
                </div>

                {/* ─── STEP 3: 6 Microservices ─── */}
                <div className="p-6 bg-slate-50/80 border-2 border-[#8B5CF6]/30 rounded-2xl">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full font-mono">STEP 3</span>
                    <span className="text-sm font-bold text-[#0B0E17]">
                      {language === 'vi' ? '6 Dịch vụ Nghiệp vụ phía sau API Gateway (Database-per-Service)' : '6 Business Services behind API Gateway (Database-per-Service)'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      { icon: <User className="w-4 h-4" />, name: language === 'vi' ? 'Người dùng' : 'User Service', desc: language === 'vi' ? 'Đăng ký, đăng nhập, JWT, quản lý profile' : 'Register, login, JWT auth, user profiles', color: '#8B5CF6', port: ':4001' },
                      { icon: <Film className="w-4 h-4" />, name: language === 'vi' ? 'Phim & Suất chiếu' : 'Movie Catalog', desc: language === 'vi' ? 'Danh sách phim, lịch chiếu, Batch API O(1) Round Trips' : 'Movie catalog, showtimes, Batch API O(1) Round Trips', color: '#EC4899', port: ':4002' },
                      { icon: <Grid className="w-4 h-4" />, name: language === 'vi' ? 'Ghế ngồi (Single Source)' : 'Seat Map (Single Source)', desc: language === 'vi' ? 'Sơ đồ phòng chiếu, Single Source of Truth, Batch Seats O(1)' : 'Auditorium layout, Single Source of Truth, Batch Seats O(1)', color: '#06B6D4', port: ':4003', highlight: true },
                      { icon: <Ticket className="w-4 h-4" />, name: language === 'vi' ? 'Đặt vé' : 'Booking Service', desc: language === 'vi' ? 'Khóa phân tán Redis 120s, SAGA consumer, xuất vé' : 'Redis distributed lock 120s, SAGA consumer', color: '#10B981', port: ':4004', highlight: true },
                      { icon: <CreditCard className="w-4 h-4" />, name: language === 'vi' ? 'Thanh toán' : 'Payment Service', desc: language === 'vi' ? 'ZaloPay QR, SAGA Publisher, Compensating Refund' : 'ZaloPay QR, SAGA Publisher, Compensating Refund', color: '#F59E0B', port: ':4005' },
                      { icon: <Bell className="w-4 h-4" />, name: language === 'vi' ? 'Thông báo' : 'Notification Service', desc: language === 'vi' ? 'RabbitMQ async consumer, sinh QR vé, gửi email' : 'RabbitMQ async consumer, QR tickets, emails', color: '#FB923C', port: ':4006' },
                    ].map((svc, i) => (
                      <div key={i} className={`p-4 rounded-xl border bg-white shadow-2xs transition-all ${svc.highlight ? 'ring-2 ring-emerald-400' : ''}`}
                        style={{ borderColor: `${svc.color}40` }}>
                        <div className="flex items-center gap-2 mb-1.5">
                          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `${svc.color}15`, color: svc.color }}>
                            {svc.icon}
                          </div>
                          <div>
                            <span className="text-xs font-bold text-[#0B0E17] block leading-tight">{svc.name}</span>
                            <span className="text-[10px] font-mono font-bold" style={{ color: svc.color }}>{svc.port}</span>
                          </div>
                        </div>
                        <p className="text-[11px] text-[#475569] leading-relaxed">{svc.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 text-center">
                    <span className="text-[11px] font-mono bg-emerald-50 text-emerald-800 px-3.5 py-1.5 rounded-full border border-emerald-200 font-bold shadow-2xs">
                      {language === 'vi'
                        ? '⚡ Database-per-Service: 5 CSDL SQL Server độc lập; Notification Service hoạt động stateless không cần persistent DB — liên kết các domain qua logical IDs'
                        : '⚡ Database-per-Service: 5 isolated SQL Server databases; Notification Service operates statelessly without a persistent DB — domains linked strictly via logical IDs'}
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center py-2">
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-4 bg-purple-300" />
                    <span className="text-[11px] text-[#475569] font-mono bg-slate-100 px-3 py-0.5 rounded-full border border-slate-200 my-1 font-semibold">
                      {language === 'vi' ? 'Kết nối đến hạ tầng bên dưới' : 'Connects to infrastructure below'}
                    </span>
                    <ArrowDown className="w-4 h-4 text-rose-500" />
                  </div>
                </div>

                {/* ─── STEP 4: Infrastructure ─── */}
                <div className="p-6 bg-slate-50/80 border border-slate-200 rounded-2xl">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full font-mono">STEP 4</span>
                    <span className="text-sm font-bold text-[#0B0E17]">
                      {language === 'vi' ? 'Hạ tầng Lưu trữ & Giao dịch Phân tán' : 'Storage & Distributed Messaging Infrastructure'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {/* SQL Server */}
                    <div className="p-4 rounded-xl bg-white border border-rose-200 shadow-2xs">
                      <div className="flex items-center gap-2.5 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center">
                          <Database className="w-4.5 h-4.5 text-rose-600" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#0B0E17]">SQL Server 2022</div>
                          <div className="text-[10px] text-[#64748B] font-mono">5 CSDL riêng biệt</div>
                        </div>
                      </div>
                      <p className="text-[11px] text-[#475569] leading-relaxed">
                        {language === 'vi'
                          ? '5 CSDL riêng biệt: XemPhim_User, Movie, Seat, Booking, Payment. Cô lập schema hoàn toàn; Notification Service chạy stateless không cần persistent DB.'
                          : '5 isolated databases: XemPhim_User, Movie, Seat, Booking, Payment. Complete schema isolation; Notification Service operates statelessly without a persistent DB.'}
                      </p>
                    </div>

                    {/* Redis */}
                    <div className="p-4 rounded-xl bg-white border border-emerald-200 shadow-2xs">
                      <div className="flex items-center gap-2.5 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                          <Zap className="w-4.5 h-4.5 text-emerald-600" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#0B0E17]">Redis 7</div>
                          <div className="text-[10px] text-[#64748B] font-mono">{language === 'vi' ? 'Khóa phân tán & Cache' : 'Distributed Lock & Cache'}</div>
                        </div>
                      </div>
                      <p className="text-[11px] text-[#475569] leading-relaxed">
                        {language === 'vi'
                          ? '2 vai trò: (1) Khóa phân tán SET NX PX (120s) chống bán trùng ghế tại RAM. (2) Cache metadata suất chiếu TTL 5 phút tránh flood request.'
                          : 'Two roles: (1) Atomic SET NX PX lock (120s) eliminating double-booking in RAM. (2) 5-min showtime metadata cache preventing service floods.'}
                      </p>
                    </div>

                    {/* RabbitMQ */}
                    <div className="p-4 rounded-xl bg-white border border-amber-200 shadow-2xs">
                      <div className="flex items-center gap-2.5 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
                          <Radio className="w-4.5 h-4.5 text-amber-600" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#0B0E17]">RabbitMQ (SAGA)</div>
                          <div className="text-[10px] text-[#64748B] font-mono">{language === 'vi' ? 'Giao dịch bù trừ' : 'SAGA Choreography'}</div>
                        </div>
                      </div>
                      <p className="text-[11px] text-[#475569] leading-relaxed">
                        {language === 'vi'
                          ? 'SAGA Choreography (Durable Queues & Message Persistence): (1) payment.successful → Booking xác nhận vé. (2) booking.failed → Payment tự động hoàn tiền ZaloPay bù trừ.'
                          : 'SAGA Choreography (Durable Queues & Message Persistence): (1) payment.successful → Booking confirms ticket. (2) booking.failed → Payment triggers automated ZaloPay refund.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center py-2">
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-4 bg-rose-200" />
                    <ArrowDown className="w-4 h-4 text-sky-500" />
                  </div>
                </div>

                {/* ─── STEP 5: External — ZaloPay ─── */}
                <div className="flex justify-center">
                  <div className="px-8 py-4 bg-sky-50/80 border-2 border-sky-300 rounded-2xl flex items-center gap-4 max-w-[560px] w-full shadow-2xs">
                    <div className="w-11 h-11 rounded-xl bg-white border border-sky-200 flex items-center justify-center shrink-0 shadow-2xs">
                      <CreditCard className="w-6 h-6 text-sky-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-bold text-sky-700 bg-sky-100 px-2 py-0.5 rounded-full font-mono">STEP 5</span>
                        <span className="text-sm font-bold text-[#0B0E17]">
                          {language === 'vi' ? 'Cổng Thanh toán ZaloPay' : 'ZaloPay Payment Gateway'}
                        </span>
                      </div>
                      <p className="text-xs text-[#475569] leading-relaxed">
                        {language === 'vi'
                          ? 'Đối tác ngoại vi: sinh mã Dynamic QR thanh toán, gửi Webhook có chữ ký số HMAC-SHA256, và cung cấp API hoàn tiền tự động khi hủy đơn.'
                          : 'External partner: generates dynamic QR payments, dispatches HMAC-SHA256 verified Webhooks, and processes automated refund transactions.'}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Services quick-ref table below diagram */}
            <div className="mt-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-3 font-mono">
                {language === 'vi' ? 'Bảng tham chiếu nhanh — 6 Vi dịch vụ' : 'Quick Reference — 6 Microservices'}
              </h3>
              <div className="border border-slate-200/80 rounded-2xl bg-white overflow-hidden shadow-xs">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-slate-100/80 border-b border-slate-200/80">
                      <th className="text-left px-4 py-3 text-[#475569] font-bold uppercase tracking-wider">Service</th>
                      <th className="text-left px-4 py-3 text-[#475569] font-bold uppercase tracking-wider">Port</th>
                      <th className="text-left px-4 py-3 text-[#475569] font-bold uppercase tracking-wider">Database</th>
                      <th className="text-left px-4 py-3 text-[#475569] font-bold uppercase tracking-wider">{language === 'vi' ? 'Trách nhiệm kỹ thuật' : 'Technical Responsibility'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'API Gateway', port: ':8080', db: '—', resp: language === 'vi' ? 'JWT Auth · Circuit Breakers (Opossum) · Distributed Tracing (x-request-id) · Reverse Proxy' : 'JWT Auth · Circuit Breakers (Opossum) · Distributed Tracing (x-request-id) · Reverse Proxy', color: '#5E6AD2' },
                      { name: 'User Service', port: ':4001', db: 'XemPhim_User', resp: language === 'vi' ? 'Đăng ký / Đăng nhập · bcrypt hashing · User Profile' : 'Register / Login · bcrypt hashing · User Profiles', color: '#8B5CF6' },
                      { name: 'Movie Service', port: ':4002', db: 'XemPhim_Movie', resp: language === 'vi' ? 'Phim · Suất chiếu · Rạp · Cache-Aside Redis · Batch Showtimes O(1) Round Trips' : 'Movies · Showtimes · Cinemas · Cache-Aside Redis · Batch Showtimes O(1) Round Trips', color: '#EC4899' },
                      { name: 'Seat Service', port: ':4003', db: 'XemPhim_Seat', resp: language === 'vi' ? 'Single Source of Truth cho ghế · Sơ đồ phòng chiếu · Batch Seats O(1) Round Trips' : 'Single Source of Truth for seats · Auditorium layout · Batch Seats O(1) Round Trips', color: '#06B6D4' },
                      { name: 'Booking Service', port: ':4004', db: 'XemPhim_Booking', resp: language === 'vi' ? 'Đặt vé · Khóa phân tán Redis SET NX PX 120s · SAGA Choreography Consumer' : 'Booking · Redis SET NX PX 120s lock · SAGA Choreography Consumer', color: '#10B981' },
                      { name: 'Payment Service', port: ':4005', db: 'XemPhim_Payment', resp: language === 'vi' ? 'ZaloPay QR · HMAC-SHA256 Webhook · SAGA Publisher & Compensating Refund' : 'ZaloPay QR · HMAC-SHA256 Webhook · SAGA Publisher & Compensating Refund', color: '#F59E0B' },
                      { name: 'Notification Svc', port: ':4006', db: '— (Stateless)', resp: language === 'vi' ? 'RabbitMQ Consumer · Sinh QR vé điện tử · Email Nodemailer (Stateless, không CSDL)' : 'RabbitMQ Consumer · QR ticket generator · Email via Nodemailer (Stateless, no DB)', color: '#FB923C' },
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-slate-100 hover:bg-slate-50/80 transition-colors">
                        <td className="px-4 py-3 font-bold font-mono" style={{ color: row.color }}>{row.name}</td>
                        <td className="px-4 py-3 font-mono text-[#0B0E17] font-bold">{row.port}</td>
                        <td className="px-4 py-3 font-mono text-[#64748B]">{row.db}</td>
                        <td className="px-4 py-3 text-[#334155]">{row.resp}</td>
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
              <Lock className="w-5 h-5 text-emerald-600" />
              <h2 className="text-2xl font-black text-[#0B0E17]">
                {language === 'vi' ? 'Quy trình Khóa Phân tán Chống Trùng Ghế (Redis Distributed Locking Flow)' : 'Anti Double-Booking Distributed Locking Protocol'}
              </h2>
            </div>
            <div className="p-7 bg-white/90 border border-slate-200/80 space-y-6 rounded-2xl shadow-xs">
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-emerald-50/70 border-l-4 border-emerald-500 rounded-r-xl">
                  <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                  <div>
                    <span className="text-sm font-bold text-[#0B0E17] block mb-1">
                      {language === 'vi' ? 'Yêu cầu giữ ghế tới Cổng API' : 'Seat Reservation Request Arrives at Gateway'}
                    </span>
                    <p className="text-sm text-[#334155] font-normal leading-relaxed">
                      {language === 'vi'
                        ? 'Người dùng chọn ghế và nhấn "Đặt vé". Yêu cầu được gửi kèm mã định danh suất chiếu và mã số ghế.'
                        : 'User selects a seat and clicks "Book". Request dispatches with showtimeId and seatId.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-indigo-50/70 border-l-4 border-[#5E6AD2] rounded-r-xl">
                  <span className="w-7 h-7 rounded-full bg-[#5E6AD2]/20 text-[#5E6AD2] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                  <div>
                    <span className="text-sm font-bold text-[#0B0E17] block mb-1">
                      {language === 'vi' ? 'Thực thi lệnh nguyên tử SET NX PX trên Redis' : 'Atomic SET NX PX Execution on Redis'}
                    </span>
                    <p className="text-sm text-[#334155] font-normal leading-relaxed">
                      {language === 'vi'
                        ? 'Thực thi lệnh khóa: SET lock:seat:{showtimeId}:{seatId} {userId} NX PX 120000. Chỉ có yêu cầu đến đầu tiên ghi thành công khóa (trả về OK).'
                        : 'Executes atomic lock: SET lock:seat:{showtimeId}:{seatId} {userId} NX PX 120000. Exactly 1 request succeeds.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-amber-50/70 border-l-4 border-amber-500 rounded-r-xl">
                  <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                  <div>
                    <span className="text-sm font-bold text-[#0B0E17] block mb-1">
                      {language === 'vi' ? 'Xử lý phản hồi tranh chấp (Concurrency Handling)' : 'Concurrency Collision Arbitration'}
                    </span>
                    <p className="text-sm text-[#334155] font-normal leading-relaxed">
                      {language === 'vi'
                        ? 'Người dùng giành được khóa tiến hành chuyển sang bước quét mã QR thanh toán. Tất cả người dùng đến sau nhận ngay mã lỗi 409 Conflict thông báo ghế đã có người giữ.'
                        : 'Winner transitions to QR checkout. All concurrent contenders receive immediate HTTP 409 Conflict.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-purple-50/70 border-l-4 border-purple-500 rounded-r-xl">
                  <span className="w-7 h-7 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">4</span>
                  <div>
                    <span className="text-sm font-bold text-[#0B0E17] block mb-1">
                      {language === 'vi' ? 'Xác nhận thanh toán hoặc tự động giải phóng khi hết hạn' : 'Settlement or Automated TTL Eviction'}
                    </span>
                    <p className="text-sm text-[#334155] font-normal leading-relaxed">
                      {language === 'vi'
                        ? 'Nếu thanh toán thành công, hệ thống ghi cố định vé vào CSDL SQL Server và đẩy thông điệp vào RabbitMQ để gửi email. Nếu quá 120 giây chưa thanh toán, Redis tự hủy khóa để người khác có thể chọn.'
                        : 'On payment confirmation, ticket commits to SQL Server and RabbitMQ emits email job. On timeout (120s TTL), Redis evicts lock.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-rose-50/70 border-l-4 border-rose-500 rounded-r-xl">
                  <span className="w-7 h-7 rounded-full bg-rose-100 text-rose-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">5</span>
                  <div>
                    <span className="text-sm font-bold text-[#0B0E17] block mb-1">
                      {language === 'vi' ? 'Thoát web / Đóng tab → Chủ động giải phóng ghế' : 'Browser Exit / Tab Close → Proactive Seat Release'}
                    </span>
                    <p className="text-sm text-[#334155] font-normal leading-relaxed">
                      {language === 'vi'
                        ? 'Khi người dùng đóng tab, F5 hoặc rời trang thanh toán, trình duyệt gửi yêu cầu cancel với keepalive: true; Backend chủ động giải phóng Redis lock. Nếu request không tới được server do mất mạng hoặc ngắt trình duyệt, cơ chế TTL 120s đảm bảo khóa tự động hết hạn.'
                        : 'When user closes tab, refreshes (F5), or leaves payment page, the browser dispatches a cancellation request with keepalive: true, prompting the Backend to proactively delete Redis locks. If network disruption prevents delivery, the 120s TTL fallback guarantees automated lock expiration.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* ── Visual Flow Diagram ── */}
              <div className="mt-6 pt-6 border-t border-slate-200">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-4 font-mono">
                  {language === 'vi' ? 'SƠ ĐỒ LUỒNG HOÀN CHỈNH' : 'COMPLETE FLOW DIAGRAM'}
                </h3>
                <div className="bg-slate-50/80 border border-slate-200 rounded-2xl p-6 overflow-x-auto">
                  <div className="max-w-[800px] mx-auto">

                    {/* Row 1: User Action */}
                    <div className="flex justify-center">
                      <div className="px-5 py-3 bg-white border-2 border-sky-300 rounded-xl flex items-center gap-3 shadow-2xs">
                        <User className="w-5 h-5 text-sky-600" />
                        <span className="text-sm font-bold text-[#0B0E17]">
                          {language === 'vi' ? 'Người dùng chọn ghế → Nhấn "Đặt vé"' : 'User selects seat → Clicks "Book"'}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-center py-1.5"><ArrowDown className="w-4 h-4 text-sky-500" /></div>

                    {/* Row 2: Redis Lock */}
                    <div className="flex justify-center">
                      <div className="px-5 py-3 bg-white border-2 border-emerald-300 rounded-xl text-center shadow-2xs">
                        <div className="text-sm font-bold text-emerald-700 mb-1">Redis SET NX PX 120000</div>
                        <div className="text-xs text-[#64748B] font-mono">lock:showtime:{'{'}id{'}'}:seat:{'{'}id{'}'}</div>
                      </div>
                    </div>
                    <div className="flex justify-center py-1.5"><ArrowDown className="w-4 h-4 text-emerald-600" /></div>

                    {/* Row 3: Branch - Success or Fail */}
                    <div className="flex justify-center gap-6">
                      <div className="px-4 py-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-center flex-1 max-w-[200px] shadow-2xs">
                        <div className="text-xs font-bold text-emerald-700">✓ OK</div>
                        <div className="text-[11px] text-[#475569]">{language === 'vi' ? 'Giành được ghế (RAM)' : 'Lock Acquired (RAM)'}</div>
                      </div>
                      <div className="px-4 py-2.5 bg-rose-50 border border-rose-200 rounded-xl text-center flex-1 max-w-[200px] shadow-2xs">
                        <div className="text-xs font-bold text-rose-700">✗ NULL</div>
                        <div className="text-[11px] text-[#475569]">{language === 'vi' ? 'HTTP 409 → Ghế đang giữ' : 'HTTP 409 → Seat Contended'}</div>
                      </div>
                    </div>
                    <div className="flex justify-center py-1.5"><ArrowDown className="w-4 h-4 text-amber-500" /></div>

                    {/* Row 4: Payment */}
                    <div className="flex justify-center">
                      <div className="px-5 py-3 bg-white border-2 border-amber-300 rounded-xl flex items-center gap-3 shadow-2xs">
                        <CreditCard className="w-5 h-5 text-amber-600" />
                        <span className="text-sm font-bold text-[#0B0E17]">
                          {language === 'vi' ? 'Quét mã QR thanh toán ZaloPay (HMAC-SHA256 Webhook)' : 'Scan ZaloPay Dynamic QR (HMAC-SHA256 Webhook)'}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-center py-1.5"><ArrowDown className="w-4 h-4 text-[#64748B]" /></div>

                    {/* Row 5: 3 Exit Scenarios */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {/* Scenario A: Success */}
                      <div className="p-4 rounded-xl border-2 border-emerald-300 bg-white shadow-2xs">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                          <span className="text-xs font-bold text-emerald-700">
                            {language === 'vi' ? 'SAGA Thành công' : 'SAGA Success'}
                          </span>
                        </div>
                        <div className="space-y-1.5">
                          <div className="text-[11px] text-[#475569] flex items-start gap-1.5">
                            <span className="text-emerald-600 shrink-0 font-bold">→</span>
                            <span>RabbitMQ: payment.successful</span>
                          </div>
                          <div className="text-[11px] text-[#475569] flex items-start gap-1.5">
                            <span className="text-emerald-600 shrink-0 font-bold">→</span>
                            <span>{language === 'vi' ? 'Booking ghi DB + gửi email QR' : 'Booking commits DB + QR email'}</span>
                          </div>
                          <div className="text-[11px] text-[#475569] flex items-start gap-1.5">
                            <span className="text-emerald-600 shrink-0 font-bold">→</span>
                            <span>{language === 'vi' ? 'Giải phóng khóa Redis' : 'Delete Redis lock keys'}</span>
                          </div>
                        </div>
                      </div>

                      {/* Scenario B: Tab Close */}
                      <div className="p-4 rounded-xl border-2 border-rose-300 bg-white shadow-2xs">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle className="w-4 h-4 text-rose-600" />
                          <span className="text-xs font-bold text-rose-700">
                            {language === 'vi' ? 'Đóng tab / Hủy vé' : 'Tab Close / Cancel'}
                          </span>
                        </div>
                        <div className="space-y-1.5">
                          <div className="text-[11px] text-[#475569] flex items-start gap-1.5">
                            <span className="text-rose-600 shrink-0 font-bold">→</span>
                            <span>beforeunload / POST /cancel</span>
                          </div>
                          <div className="text-[11px] text-[#475569] flex items-start gap-1.5">
                            <span className="text-rose-600 shrink-0 font-bold">→</span>
                            <span>releaseSeatLocks()</span>
                          </div>
                          <div className="text-[11px] text-[#475569] flex items-start gap-1.5">
                            <span className="text-rose-600 shrink-0 font-bold">→</span>
                            <span>{language === 'vi' ? 'Chủ động nhả ghế trên Redis' : 'Proactive Redis seat unlock'}</span>
                          </div>
                        </div>
                      </div>

                      {/* Scenario C: Timeout or SAGA Compensating */}
                      <div className="p-4 rounded-xl border-2 border-amber-300 bg-white shadow-2xs">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="w-4 h-4 text-amber-600" />
                          <span className="text-xs font-bold text-amber-700">
                            {language === 'vi' ? 'SAGA Bù trừ / Hết hạn' : 'SAGA Refund / Expiry'}
                          </span>
                        </div>
                        <div className="space-y-1.5">
                          <div className="text-[11px] text-[#475569] flex items-start gap-1.5">
                            <span className="text-amber-600 shrink-0 font-bold">→</span>
                            <span>{language === 'vi' ? 'Hết hạn 120s: Redis tự evict' : '120s TTL: Redis auto-evicts'}</span>
                          </div>
                          <div className="text-[11px] text-[#475569] flex items-start gap-1.5">
                            <span className="text-amber-600 shrink-0 font-bold">→</span>
                            <span>RabbitMQ: booking.failed</span>
                          </div>
                          <div className="text-[11px] text-[#475569] flex items-start gap-1.5">
                            <span className="text-amber-600 shrink-0 font-bold">→</span>
                            <span>{language === 'vi' ? 'ZaloPay Auto Refund hoàn tiền' : 'ZaloPay Auto Refund executed'}</span>
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
              <Server className="w-5 h-5 text-[#5E6AD2]" />
              <h2 className="text-2xl font-black text-[#0B0E17]">
                {language === 'vi' ? 'Ngăn xếp Công nghệ (Technology Stack)' : 'Technology Stack & Engineering Toolchain'}
              </h2>
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

          {/* Challenges */}
          <section id="challenges">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <h2 className="text-2xl font-bold text-[#0B0E17]">
                {language === 'vi' ? 'Các Thách thức Kỹ thuật Tiêu biểu & Giải pháp' : 'Engineering Challenges & Applied Solutions'}
              </h2>
            </div>
            <div className="space-y-4">
              {detail.challenges.map((c, i) => (
                <div key={i} className="p-6 bg-white/90 border border-slate-200/80 hover:border-[#5E6AD2]/50 hover:shadow-md transition-all rounded-2xl shadow-xs">
                  <h3 className="text-base font-bold text-[#5E6AD2] mb-4">{c.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl">
                      <span className="text-xs font-bold text-rose-700 uppercase tracking-wider block mb-2">{t.detailCommon.problemLabel}</span>
                      <p className="text-sm text-rose-950 leading-relaxed font-normal">{c.problem}</p>
                    </div>
                    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                      <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-2">{t.detailCommon.solutionLabel}</span>
                      <p className="text-sm text-emerald-950 leading-relaxed font-normal">{c.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tags + CTA */}
          <section className="border-t border-slate-200/80 pt-10">
            <div className="flex flex-wrap gap-2.5 mb-8">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-xs px-3 py-1.5 border border-slate-200/80 bg-white text-[#334155] font-mono rounded-lg shadow-2xs font-medium">{tag}</span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={detail.githubUrl} target="_blank" rel="noopener noreferrer"
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

export default MovieTicketPage;
