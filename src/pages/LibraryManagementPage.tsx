import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  Server,
  Layers,
  AlertTriangle,
  HelpCircle,
  CheckCircle,
  Target,
  Award,
  BarChart3,
  ChevronRight,
  Shield,
  Globe,
  Database,
  ArrowDown,
  BookOpen,
  Users,
  FileCheck,
  GitBranch,
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { LIBRARY_MANAGEMENT_DETAIL } from '../data/projects/libraryManagement.data';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from '../components/LanguageToggle';
import { UI_TRANSLATIONS } from '../data/translations';
import { ProjectShowcaseGallery } from '../components/ProjectShowcaseGallery';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const LibraryManagementPage: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('overview');

  const detail = LIBRARY_MANAGEMENT_DETAIL[language];
  const project = PROJECTS[language].find(p => p.id === 'smart-library')!;
  const t = UI_TRANSLATIONS[language];

  useDocumentTitle(project ? project.title : 'Smart Library Management System');

  const accent = '#34D399'; // Green/Enterprise theme

  const TOC_SECTIONS = [
    { id: 'overview', label: language === 'vi' ? 'Tổng quan & Hiệu quả' : 'Overview & Impact' },
    { id: 'showcase', label: language === 'vi' ? 'Khung Demo Sản phẩm (PC & Terminal)' : 'Interactive Device Showcase' },
    { id: 'context', label: language === 'vi' ? 'Bối cảnh & Đặt vấn đề' : 'Context & Problem Statement' },
    { id: 'scope', label: language === 'vi' ? 'Mục tiêu & Phạm vi dự án' : 'Objectives & Project Scope' },
    { id: 'ownership', label: language === 'vi' ? 'Trách nhiệm kỹ thuật cá nhân' : 'My Engineering Ownership' },
    { id: 'architecture', label: language === 'vi' ? 'Kiến trúc Hệ thống Tổng thể' : 'System Architecture' },
    { id: 'lifecycle', label: language === 'vi' ? 'Sơ đồ Vòng đời Mượn/Trả' : 'Loan Lifecycle State Machine' },
    { id: 'techstack', label: language === 'vi' ? 'Ngăn xếp công nghệ' : 'Technology Stack' },
    { id: 'testing', label: language === 'vi' ? 'Kiểm thử & Đảm bảo chất lượng' : 'Testing & Quality Assurance' },
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
              <span className="w-2 h-2" style={{ background: accent }} />
              <span className="text-xs font-bold tracking-wider uppercase" style={{ color: accent }}>
                {language === 'vi' ? 'KIẾN TRÚC MODULE HÓA · GIAO DỊCH ACID · KIỂM THỬ TỰ ĐỘNG' : 'MODULAR ARCHITECTURE · ACID TRANSACTIONS · AUTOMATED TESTING'}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#f3f4f6] tracking-tight mb-6 leading-tight">
              Smart Library<br />
              <span style={{ color: accent }}>{language === 'vi' ? 'Management System' : 'Management Platform'}</span>
            </h1>
            <p className="text-[#d1d5db] leading-relaxed mb-10 max-w-3xl font-normal text-lg">{detail.overview}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: '95/95', label: language === 'vi' ? 'Test Cases (100% PASS)' : 'Test Cases (100% PASS)', color: '#34D399' },
                { value: '3', label: language === 'vi' ? 'Module nghiệp vụ độc lập' : 'Business Modules', color: '#4F9CF9' },
                { value: '85%+', label: language === 'vi' ? 'Code Coverage nghiệp vụ' : 'Business Code Coverage', color: '#A78BFA' },
                { value: 'ACID', label: language === 'vi' ? 'Transaction toàn vẹn' : 'Transaction Integrity', color: '#F59E0B' },
              ].map((m, i) => (
                <div key={i} className="p-5 bg-[#121212] border border-[#262626] rounded text-center">
                  <div className="text-2xl font-black font-mono mb-1" style={{ color: m.color }}>{m.value}</div>
                  <div className="text-xs text-[#9ca3af] font-medium leading-tight">{m.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section: Interactive Device Mockup Showcase ── */}
          <section id="showcase" className="space-y-6">
            <ProjectShowcaseGallery
              projectId="smart-library"
              defaultTab="desktop"
              availableTabs={['desktop', 'terminal']}
              desktopTitle={language === 'vi' ? 'Cổng Quản Trị Thư Viện Doanh Nghiệp (React Web)' : 'Enterprise Library Management Portal (React Web)'}
              desktopUrl="http://localhost:3000"
              themeColor="#34D399"
              terminalCommand="npm test -- --coverage --verbose --detectOpenHandles"
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
                  ? 'Các hệ thống thư viện truyền thống (Legacy Systems) xử lý nghiệp vụ mượn/trả sách bằng các truy vấn tuần tự riêng lẻ (non-transactional). Khi thủ thư xác nhận trả sách hoặc báo sách hỏng/mất, hệ thống phải cập nhật đồng thời FineLog + Loan Status + Book Inventory — nếu server crash giữa chừng, dữ liệu bị lệch: tiền phạt đã ghi nhận nhưng kho sách chưa cập nhật, gây thất thoát tài sản và sai lệch sổ sách kế toán.'
                  : 'Traditional library legacy systems process borrow/return operations using sequential non-transactional queries. When confirming returns or reporting damage/loss, the system must simultaneously update FineLog + Loan Status + Book Inventory — if the server crashes mid-operation, data becomes inconsistent: fines recorded but inventory not adjusted, causing asset loss and accounting discrepancies.'}
              </p>
            </div>

            {/* Pain Points Grid */}
            <div className="p-6 bg-[#121212] border border-[#262626] rounded mb-6">
              <h3 className="text-sm font-bold uppercase tracking-wider mb-5 flex items-center gap-2" style={{ color: accent }}>
                <ChevronRight className="w-4 h-4 shrink-0" />
                {language === 'vi' ? 'Các Bài toán Kỹ thuật Cốt lõi' : 'Core Technical Challenges'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    color: '#F472B6',
                    title: language === 'vi' ? 'Tranh chấp tài nguyên (Concurrency)' : 'Resource Concurrency & Fairness',
                    detail: language === 'vi'
                      ? 'Nhiều độc giả cùng đặt mượn 1 cuốn sách có số lượng hữu hạn. Cần cơ chế xếp hàng công bằng, minh bạch (FIFO) thay vì duyệt ngẫu nhiên.'
                      : 'Multiple readers simultaneously request a limited-stock book. Requires fair, transparent queuing (FIFO) instead of arbitrary approval order.',
                  },
                  {
                    color: '#F59E0B',
                    title: language === 'vi' ? 'Toàn vẹn dữ liệu khi trả/phạt (ACID)' : 'Data Integrity During Return/Penalty',
                    detail: language === 'vi'
                      ? 'Khi sách bị mất hoặc hỏng, hệ thống phải vừa ghi nhận tiền phạt, vừa đổi trạng thái phiếu, vừa trừ kho vật lý trong 1 thao tác nguyên tử. Nếu 1 bước lỗi sẽ gây sai lệch sổ sách.'
                      : 'When a book is lost/damaged, the system must atomically record fines, transition loan status, and adjust inventory. Any partial failure corrupts accounting records.',
                  },
                  {
                    color: '#EF4444',
                    title: language === 'vi' ? 'Nguy cơ đứt gãy dữ liệu (Referential Integrity)' : 'Referential Integrity Breakage',
                    detail: language === 'vi'
                      ? 'Xóa một độc giả hoặc cuốn sách trong CSDL sẽ phá vỡ toàn bộ lịch sử mượn trả và các báo cáo thống kê trước đó — không thể truy vết ai đã mượn sách nào.'
                      : 'Physically deleting a reader or book destroys all historical transaction records and statistical reports — making audit trails impossible.',
                  },
                  {
                    color: '#4F9CF9',
                    title: language === 'vi' ? 'Bảo mật & Xác thực Client (XSS)' : 'Client Authentication Security (XSS)',
                    detail: language === 'vi'
                      ? 'Lưu trữ Token ở LocalStorage phía Client tiềm ẩn nguy cơ bị đánh cắp bởi mã độc JavaScript (XSS). Secret Key JWT bị gán cứng trong mã nguồn.'
                      : 'Storing tokens in LocalStorage exposes them to XSS attacks. JWT Secret Key was hardcoded directly in source code, enabling token forgery.',
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
            <div className="p-5 bg-gradient-to-r from-[#0e1f1a] to-[#121212] border border-[#34D399]/40 rounded">
              <div className="flex items-center gap-2.5 mb-2" style={{ color: accent }}>
                <CheckCircle className="w-5 h-5 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider font-mono">
                  {language === 'vi' ? 'GIẢI PHÁP KIẾN TRÚC (ARCHITECTURAL SOLUTION)' : 'ARCHITECTURAL SOLUTION'}
                </span>
              </div>
              <p className="text-base text-[#f3f4f6] font-medium leading-relaxed">
                {language === 'vi'
                  ? 'Xây dựng hệ thống trên Kiến trúc Module hóa Phân tầng (Layered Modular Architecture) với NestJS và TypeORM, bao gồm 3 trụ cột: (1) Máy trạng thái quản lý vòng đời phiếu mượn (Pending → Borrowing → Returned | Damaged | Lost) với hàng đợi FIFO, (2) Giao dịch CSDL nguyên tử (ACID Transactions) bọc đồng thời FineLog + Loan + Book trong 1 transaction, (3) Xóa mềm có ràng buộc (Guarded Soft Delete) bảo vệ toàn vẹn lịch sử và tài sản thư viện.'
                  : 'Built on Layered Modular Architecture with NestJS and TypeORM, featuring 3 pillars: (1) State Machine managing loan lifecycle (Pending → Borrowing → Returned | Damaged | Lost) with FIFO queue enforcement, (2) ACID Database Transactions atomically wrapping FineLog + Loan + Book updates, (3) Guarded Soft Delete preserving historical integrity and preventing library asset loss.'}
              </p>
            </div>
          </section>

          {/* ── Objectives & Project Scope ── */}
          <section id="scope">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-5 h-5" style={{ color: accent }} />
              <h2 className="text-2xl font-black text-[#f3f4f6]">
                {language === 'vi' ? 'Mục tiêu Hệ thống & Phạm vi Dự án' : 'System Objectives & Project Scope'}
              </h2>
            </div>

            {/* 3 Core Pillars */}
            <div className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#9ca3af] mb-4">
                {language === 'vi' ? '3 Trụ cột Kỹ thuật Cốt lõi' : '3 Core Engineering Pillars'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    color: '#4F9CF9', num: '01',
                    title: language === 'vi' ? 'Máy trạng thái Mượn/Trả' : 'Loan State Machine & FIFO',
                    desc: language === 'vi'
                      ? 'Quản lý vòng đời phiếu mượn (Pending → Borrowing → Returned | Damaged | Lost), hàng đợi duyệt FIFO bắt buộc thủ thư xử lý theo thứ tự, kiểm soát hạn ngạch 5 cuốn/độc giả, chặn mượn khi thẻ hết hạn hoặc nợ quá hạn.'
                      : 'Full loan lifecycle (Pending → Borrowing → Returned | Damaged | Lost), FIFO approval enforcement, 5-book quota control per reader, blocks borrowing when card expired or overdue debts exist.',
                  },
                  {
                    color: '#34D399', num: '02',
                    title: language === 'vi' ? 'Giao dịch ACID & Tính phạt' : 'ACID Transactions & Penalties',
                    desc: language === 'vi'
                      ? 'Bọc đồng thời FineLog + Loan Status + Book Inventory trong 1 transaction duy nhất. Tính phạt tự động: Quá hạn 5%/ngày, Hỏng 50%, Mất 150% giá sách + trừ kho vĩnh viễn. Auto-Rollback khi có sự cố.'
                      : 'Wraps FineLog + Loan Status + Book Inventory in a single atomic transaction. Auto-penalty: Overdue 5%/day, Damaged 50%, Lost 150% of book price + permanent inventory deduction. Auto-rollback on failure.',
                  },
                  {
                    color: '#F59E0B', num: '03',
                    title: language === 'vi' ? 'Bảo mật & Xóa mềm' : 'Security & Guarded Soft Delete',
                    desc: language === 'vi'
                      ? 'JWT HttpOnly Cookie chống XSS + Dual-Source Token Extraction + RBAC @Roles(). Xóa mềm có ràng buộc: chặn xóa sách/độc giả đang có giao dịch hoạt động, bảo vệ lịch sử kiểm toán.'
                      : 'JWT HttpOnly Cookie (XSS-proof) + Dual-Source Token Extraction + RBAC @Roles(). Guarded Soft Delete: blocks deletion of books/readers with active transactions, preserving audit trails.',
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

            {/* Key Metrics */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#9ca3af] mb-4 flex items-center gap-2">
                <BarChart3 className="w-3.5 h-3.5" />
                {language === 'vi' ? 'Chỉ số Kỹ thuật Đạt được' : 'Technical Achievements'}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { value: '3', label: language === 'vi' ? 'Module nghiệp vụ NestJS' : 'NestJS Business Modules', color: '#34D399' },
                  { value: '8', label: language === 'vi' ? 'Test Suites (Jest 29)' : 'Test Suites (Jest 29)', color: '#4F9CF9' },
                  { value: '95/95', label: language === 'vi' ? 'Test Cases (100% PASS)' : 'Test Cases (100% PASS)', color: '#A78BFA' },
                  { value: '20+', label: language === 'vi' ? 'RESTful API Endpoints' : 'RESTful API Endpoints', color: '#F59E0B' },
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
                ? 'Trong nhóm 3 thành viên, tôi đảm nhiệm vai trò Kỹ sư Phần mềm & Lập trình viên Backend chính — phụ trách toàn bộ thiết kế kiến trúc phân tầng, trực tiếp phát triển 3 module nghiệp vụ cốt lõi (Users, Books, Loans), triển khai cơ chế bảo mật đa lớp, và xây dựng bộ 95 Test Cases kiểm thử tự động.'
                : 'In the 3-person team, I served as the Lead Software Engineer & Backend Developer — owning the entire layered architecture design, directly developing all 3 core business modules (Users, Books, Loans), implementing multi-layer security mechanisms, and building the complete 95-test automated testing suite.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  area: language === 'vi' ? 'Kiến trúc Hệ thống & RESTful API' : 'System Architecture & RESTful API Design',
                  badge: '100% Ownership',
                  color: '#34D399',
                  items: language === 'vi' ? [
                    'Thiết kế kiến trúc Module hóa Phân tầng 3 module nghiệp vụ (UsersModule, BooksModule, LoansModule) với NestJS IoC Container',
                    'Xây dựng hệ thống DTOs chuẩn hóa đầy đủ (7 DTOs) kết hợp ValidationPipe toàn cục chặn dữ liệu rác ngay tại cổng HTTP',
                    'Thiết kế Entity đa quan hệ với TypeORM: OneToMany, ManyToOne, ManyToMany tự động ánh xạ bảng trung gian Book_Authors',
                    'Cấu trúc Monorepo (npm workspaces) quản lý đồng thời Backend NestJS và Frontend React Vite',
                  ] : [
                    'Designed Layered Modular Architecture with 3 business modules (UsersModule, BooksModule, LoansModule) using NestJS IoC Container',
                    'Built comprehensive DTO system (7 DTOs) with global ValidationPipe blocking malicious input at HTTP Gateway',
                    'Designed multi-relation Entity schema with TypeORM: OneToMany, ManyToOne, ManyToMany with auto-mapped Book_Authors junction table',
                    'Structured Monorepo (npm workspaces) managing Backend NestJS and Frontend React Vite concurrently',
                  ],
                },
                {
                  area: language === 'vi' ? 'Giao dịch ACID & Máy trạng thái Mượn/Trả' : 'ACID Transactions & Loan State Machine',
                  badge: 'Core Backend',
                  color: '#4F9CF9',
                  items: language === 'vi' ? [
                    'Triển khai DataSource.transaction() bọc đồng thời FineLog + Loan Status + Book Inventory trong 1 transaction nguyên tử',
                    'Thiết kế luồng State Machine: Pending → Borrowing → Returned | Damaged | Lost với kiểm soát chặt chẽ mỗi bước chuyển',
                    'Xây dựng thuật toán FIFO Enforcement: bắt buộc thủ thư duyệt phiếu mượn theo thứ tự issue_date ASC',
                    'Triển khai Penalty Engine tự động: Quá hạn 5%/ngày + Hỏng 50% + Mất 150% giá sách + trừ kho vĩnh viễn',
                  ] : [
                    'Implemented DataSource.transaction() atomically wrapping FineLog + Loan Status + Book Inventory in a single transaction',
                    'Designed State Machine flow: Pending → Borrowing → Returned | Damaged | Lost with strict transition guards',
                    'Built FIFO Enforcement algorithm: forces librarian to approve pending requests in chronological order (issue_date ASC)',
                    'Implemented auto Penalty Engine: Overdue 5%/day + Damaged 50% + Lost 150% of book price + permanent inventory deduction',
                  ],
                },
                {
                  area: language === 'vi' ? 'Bảo mật Đa lớp & Xóa mềm Thông minh' : 'Multi-Layer Security & Smart Soft Delete',
                  badge: 'Security',
                  color: '#A78BFA',
                  items: language === 'vi' ? [
                    'Triển khai AuthGuard trích xuất Token kép (Dual-Source): Cookie httpOnly (chống XSS) + fallback Bearer Header (Mobile/Postman)',
                    'Xây dựng RolesGuard + Custom Decorator @Roles() phân quyền RBAC nghiêm ngặt (admin / reader)',
                    'Áp dụng Guarded Soft Delete: chặn xóa sách/độc giả đang có phiếu mượn hoạt động (Pending/Borrowing/Overdue)',
                    'Di chuyển JWT Secret Key từ hardcoded sang process.env.JWT_SECRET, đồng bộ auth.guard.ts và users.module.ts',
                  ] : [
                    'Implemented Dual-Source AuthGuard: HttpOnly Cookie extraction (XSS-proof) + Bearer Header fallback (Mobile/Postman)',
                    'Built RolesGuard + Custom @Roles() Decorator for strict RBAC enforcement (admin / reader)',
                    'Applied Guarded Soft Delete: blocks deletion of books/readers with active loans (Pending/Borrowing/Overdue)',
                    'Migrated JWT Secret Key from hardcoded to process.env.JWT_SECRET, synchronized across auth.guard.ts and users.module.ts',
                  ],
                },
                {
                  area: language === 'vi' ? 'Kiểm thử Tự động & Đảm bảo Chất lượng' : 'Automated Testing & Quality Assurance',
                  badge: 'QA Lead',
                  color: '#F59E0B',
                  items: language === 'vi' ? [
                    'Thiết lập hạ tầng kiểm thử Jest 29 + ts-jest cho toàn bộ hệ thống Backend NestJS',
                    'Trực tiếp viết 95 Test Cases bao phủ: Unit Tests, Integration Logic Tests, Guard Tests, Boundary Exception Tests',
                    'Đạt Code Coverage chuẩn cao: Users Service 98.98%, Guards & DTOs 100%, Loans Service 87.15%',
                    'Viết kịch bản tự động xuất báo cáo coverage (run-test-runner.js) và file log test-results.log',
                  ] : [
                    'Established Jest 29 + ts-jest testing infrastructure for the entire NestJS Backend system',
                    'Directly authored 95 test cases covering: Unit Tests, Integration Logic Tests, Guard Tests, Boundary Exception Tests',
                    'Achieved high-standard coverage: Users Service 98.98%, Guards & DTOs 100%, Loans Service 87.15%',
                    'Built automated coverage report generation script (run-test-runner.js) and test-results.log output',
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

          {/* ── System Architecture ── */}
          <section id="architecture">
            <div className="flex items-center gap-3 mb-2">
              <Layers className="w-5 h-5" style={{ color: accent }} />
              <h2 className="text-2xl font-black text-[#f3f4f6]">
                {language === 'vi' ? 'Kiến trúc Hệ thống Tổng thể (System Architecture)' : 'High-Level System Architecture'}
              </h2>
            </div>
            <p className="text-[#d1d5db] text-base mb-8 leading-relaxed font-normal">
              {language === 'vi'
                ? 'Sơ đồ kiến trúc phân tầng: Client Applications → NestJS Backend Gateway (AuthGuard + RolesGuard + ValidationPipe) → 3 Module nghiệp vụ (Controller → Service → Repository) → Data Access Layer (TypeORM Transactions) → Dual Database (SQL Server / PostgreSQL).'
                : 'Layered architecture flow: Client Applications → NestJS Backend Gateway (AuthGuard + RolesGuard + ValidationPipe) → 3 Business Modules (Controller → Service → Repository) → Data Access Layer (TypeORM Transactions) → Dual Database (SQL Server / PostgreSQL).'}
            </p>

            {/* Architecture Diagram */}
            <div className="bg-[#0b0c10] border border-[#262626] rounded-xl p-6 md:p-8 overflow-x-auto">
              <div className="max-w-[900px] mx-auto">

                {/* Layer 1: Client */}
                <div className="flex justify-center">
                  <div className="px-8 py-4 bg-[#131b2e] border-2 border-[#38BDF8]/50 rounded-xl flex items-center gap-4 shadow-lg shadow-[#38BDF8]/5 max-w-[500px] w-full">
                    <div className="w-11 h-11 rounded-xl bg-[#38BDF8]/15 border border-[#38BDF8]/40 flex items-center justify-center shrink-0">
                      <Globe className="w-6 h-6 text-[#38BDF8]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-bold text-[#38BDF8] bg-[#38BDF8]/15 px-2 py-0.5 rounded-full font-mono">LAYER 1</span>
                        <span className="text-sm font-bold text-[#f1f5f9]">
                          {language === 'vi' ? 'Client Applications (React Web / Postman)' : 'Client Applications (React Web / Postman)'}
                        </span>
                      </div>
                      <p className="text-xs text-[#94a3b8] leading-relaxed">
                        {language === 'vi'
                          ? 'Ứng dụng React SPA (Vite + TypeScript) cho Thủ thư và Độc giả; Postman / Thunder Client cho kiểm thử API.'
                          : 'React SPA (Vite + TypeScript) for Librarians and Readers; Postman / Thunder Client for API testing.'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center py-2">
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-6 bg-gradient-to-b from-[#38BDF8]/60 to-[#EAB308]/60" />
                    <ArrowDown className="w-4 h-4 text-[#EAB308]" />
                  </div>
                </div>

                {/* Layer 2: Gateway */}
                <div className="flex justify-center">
                  <div className="px-8 py-4 bg-[#1c1a0e] border-2 border-[#EAB308]/50 rounded-xl flex items-center gap-4 shadow-lg shadow-[#EAB308]/5 max-w-[500px] w-full">
                    <div className="w-11 h-11 rounded-xl bg-[#EAB308]/15 border border-[#EAB308]/40 flex items-center justify-center shrink-0">
                      <Shield className="w-6 h-6 text-[#EAB308]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-bold text-[#EAB308] bg-[#EAB308]/15 px-2 py-0.5 rounded-full font-mono">LAYER 2</span>
                        <span className="text-sm font-bold text-[#f1f5f9]">
                          {language === 'vi' ? 'NestJS Backend Gateway (/api)' : 'NestJS Backend Gateway (/api)'}
                        </span>
                      </div>
                      <p className="text-xs text-[#94a3b8] leading-relaxed">
                        {language === 'vi'
                          ? 'Global Prefix /api + ValidationPipe (whitelist) + Dual-Source AuthGuard (Cookie + Bearer) + RBAC RolesGuard (@Roles).'
                          : 'Global Prefix /api + ValidationPipe (whitelist) + Dual-Source AuthGuard (Cookie + Bearer) + RBAC RolesGuard (@Roles).'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center py-2">
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-4 bg-[#EAB308]/40" />
                    <span className="text-[11px] text-[#94a3b8] font-mono bg-[#141414] px-3 py-0.5 rounded-full border border-[#333] my-1">
                      {language === 'vi' ? 'Phân phối đến 3 module nghiệp vụ' : 'Distributes to 3 business modules'}
                    </span>
                    <ArrowDown className="w-4 h-4" style={{ color: accent }} />
                  </div>
                </div>

                {/* Layer 3: Business Modules */}
                <div className="p-5 bg-[#111116] border-2 rounded-xl" style={{ borderColor: `${accent}30` }}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold bg-[#34D399]/15 px-2 py-0.5 rounded-full font-mono" style={{ color: accent }}>LAYER 3</span>
                    <span className="text-sm font-bold text-[#f1f5f9]">
                      {language === 'vi' ? '3 Module Nghiệp vụ — Controller → Service → Repository' : '3 Business Modules — Controller → Service → Repository'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                      { icon: <Users className="w-4 h-4" />, name: language === 'vi' ? 'Users Module' : 'Users Module', desc: language === 'vi' ? 'Đăng ký, JWT Login, Bcrypt, RBAC, Soft Delete' : 'Register, JWT Login, Bcrypt, RBAC, Soft Delete', color: '#C084FC', port: ':3001' },
                      { icon: <BookOpen className="w-4 h-4" />, name: language === 'vi' ? 'Books Module' : 'Books Module', desc: language === 'vi' ? 'CRUD, Find-or-Create, ILike Search, ISBN Check' : 'CRUD, Find-or-Create, ILike Search, ISBN Check', color: '#4F9CF9', port: ':3001' },
                      { icon: <FileCheck className="w-4 h-4" />, name: language === 'vi' ? 'Loans Module' : 'Loans Module', desc: language === 'vi' ? 'FIFO Queue, ACID Transaction, State Machine, Phạt' : 'FIFO Queue, ACID Transaction, State Machine, Fines', color: '#34D399', port: ':3001', highlight: true },
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
                </div>

                <div className="flex justify-center py-2">
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-4" style={{ background: `${accent}40` }} />
                    <span className="text-[11px] text-[#94a3b8] font-mono bg-[#141414] px-3 py-0.5 rounded-full border border-[#333] my-1">
                      {language === 'vi' ? 'TypeORM Data Access Layer (Transactions)' : 'TypeORM Data Access Layer (Transactions)'}
                    </span>
                    <ArrowDown className="w-4 h-4 text-[#EF4444]" />
                  </div>
                </div>

                {/* Layer 4: Database */}
                <div className="p-5 bg-[#111111] border border-[#2a2a2a] rounded-xl">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold text-[#EF4444] bg-[#EF4444]/15 px-2 py-0.5 rounded-full font-mono">LAYER 4</span>
                    <span className="text-sm font-bold text-[#f1f5f9]">
                      {language === 'vi' ? 'Tầng Cơ sở Dữ liệu (Dual-Database Support)' : 'Database Storage Layer (Dual-Database Support)'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-[#0e0e12] border border-[#EF4444]/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Database className="w-4 h-4 text-[#EF4444]" />
                        <span className="text-xs font-bold text-[#fca5a5]">MS SQL Server 2019+</span>
                      </div>
                      <p className="text-[11px] text-[#94a3b8] leading-relaxed">
                        {language === 'vi' ? 'Phát triển cục bộ (Local Dev), Trigger đồng bộ kho tồn, Clustered PKs, Indexes' : 'Local Development, inventory sync Triggers, Clustered PKs, Indexes'}
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-[#0e0e12] border border-[#34D399]/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Database className="w-4 h-4 text-[#34D399]" />
                        <span className="text-xs font-bold text-[#86efac]">PostgreSQL 14+ (Cloud)</span>
                      </div>
                      <p className="text-[11px] text-[#94a3b8] leading-relaxed">
                        {language === 'vi' ? 'Triển khai Production (Neon.tech / Supabase), Connection Pool SSL, Code-level inventory sync' : 'Cloud Production (Neon.tech / Supabase), SSL Connection Pool, Code-level inventory sync'}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ── Loan Lifecycle State Machine Diagram ── */}
          <section id="lifecycle">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold tracking-wider uppercase text-[#9ca3af] font-mono">
                {language === 'vi' ? 'SƠ ĐỒ HỆ THỐNG' : 'SYSTEM DIAGRAM'}
              </span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <GitBranch className="w-5 h-5" style={{ color: accent }} />
              <h2 className="text-2xl font-black text-[#f3f4f6]">
                {language === 'vi' ? 'Sơ đồ trạng thái vòng đời mượn sách' : 'Loan Lifecycle State Machine Diagram'}
              </h2>
            </div>
            <p className="text-[#d1d5db] text-base mb-8 leading-relaxed font-normal">
              {language === 'vi'
                ? 'Toàn bộ quy trình mượn - trả sách được mô hình hóa qua Máy trạng thái 6 trạng thái độc lập. Hệ thống kết hợp hàng đợi FIFO khi duyệt và bọc toàn bộ các thao tác cập nhật đa bảng vào Giao dịch CSDL nguyên tử (ACID Transaction) để đảm bảo không bị sai lệch số lượng tồn kho hay tiền phạt.'
                : 'The entire borrow-return workflow is modeled as a 6-state finite state machine. The system enforces strict FIFO queue order during approvals and encapsulates multi-table mutations within atomic ACID Database Transactions to prevent inventory or fine discrepancies.'}
            </p>

            {/* State Machine Visual Diagram */}
            <div className="p-6 md:p-8 bg-[#0c100e] border border-[#1e3325] rounded-2xl mb-6 shadow-xl">
              <div className="overflow-x-auto">
                <div className="min-w-[860px] flex justify-center">
                  <svg viewBox="0 0 900 350" className="w-full max-w-[900px] h-auto select-none font-sans">
                    <defs>
                      {/* Arrow Markers */}
                      <marker id="sm-arrow-green" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                        <path d="M1,1 L7,4 L1,7 Z" fill="#4ade80" />
                      </marker>
                      <marker id="sm-arrow-orange" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                        <path d="M1,1 L7,4 L1,7 Z" fill="#fb923c" />
                      </marker>
                    </defs>

                    {/* ── Transition Lines ── */}
                    {/* 1. Chờ duyệt -> Đang mượn (Solid Green) */}
                    <line x1="220" y1="65" x2="340" y2="65" stroke="#4ade80" strokeWidth="2.5" markerEnd="url(#sm-arrow-green)" />
                    <text x="280" y="52" fill="#9ca3af" fontSize="12" textAnchor="middle" fontWeight="500">
                      {language === 'vi' ? 'duyệt · FIFO' : 'approve · FIFO'}
                    </text>

                    {/* 2. Chờ duyệt -> Đã hủy (Dashed Orange Down) */}
                    <line x1="125" y1="105" x2="125" y2="235" stroke="#fb923c" strokeWidth="2" strokeDasharray="5,4" markerEnd="url(#sm-arrow-orange)" />
                    <text x="125" y="175" fill="#fb923c" fontSize="12" textAnchor="middle" fontWeight="500">
                      {language === 'vi' ? 'từ chối' : 'reject'}
                    </text>

                    {/* 3. Đang mượn -> Quá hạn (Solid Green) */}
                    <line x1="540" y1="65" x2="660" y2="65" stroke="#4ade80" strokeWidth="2.5" markerEnd="url(#sm-arrow-green)" />
                    <text x="600" y="52" fill="#9ca3af" fontSize="12" textAnchor="middle" fontWeight="500">
                      {language === 'vi' ? 'quá hạn' : 'overdue'}
                    </text>

                    {/* 4. Đang mượn -> Đã trả (Solid Green Down) */}
                    <line x1="445" y1="105" x2="445" y2="235" stroke="#4ade80" strokeWidth="2.5" markerEnd="url(#sm-arrow-green)" />
                    <text x="445" y="175" fill="#9ca3af" fontSize="12" textAnchor="middle" fontWeight="500">
                      {language === 'vi' ? 'trả sách' : 'return book'}
                    </text>

                    {/* 5. Đang mượn -> Hư hỏng / Mất (Dashed Orange Diagonal) */}
                    <line x1="495" y1="105" x2="685" y2="235" stroke="#fb923c" strokeWidth="2" strokeDasharray="5,4" markerEnd="url(#sm-arrow-orange)" />
                    <text x="635" y="195" fill="#fb923c" fontSize="12" textAnchor="middle" fontWeight="500">
                      {language === 'vi' ? 'báo hư hỏng' : 'report damage'}
                    </text>

                    {/* 6. Quá hạn -> Đã trả (Solid Green Diagonal) */}
                    <line x1="710" y1="105" x2="520" y2="235" stroke="#4ade80" strokeWidth="2.5" markerEnd="url(#sm-arrow-green)" />
                    <text x="645" y="145" fill="#9ca3af" fontSize="12" textAnchor="middle" fontWeight="500">
                      {language === 'vi' ? 'trả sách · phí trễ hạn' : 'return · late fine'}
                    </text>

                    {/* 7. Quá hạn -> Hư hỏng / Mất (Dashed Orange Down) */}
                    <line x1="765" y1="105" x2="765" y2="235" stroke="#fb923c" strokeWidth="2" strokeDasharray="5,4" markerEnd="url(#sm-arrow-orange)" />
                    <text x="765" y="175" fill="#fb923c" fontSize="12" textAnchor="middle" fontWeight="500">
                      {language === 'vi' ? 'báo hư hỏng' : 'report damage'}
                    </text>

                    {/* ── Top Row Nodes ── */}

                    {/* Node 1: Chờ duyệt */}
                    <g transform="translate(30, 25)">
                      <rect width="190" height="80" rx="14" fill="#132418" stroke="#4ade80" strokeWidth="2.2" />
                      <text x="95" y="38" fill="#f3f4f6" fontSize="16" fontWeight="bold" textAnchor="middle">
                        {language === 'vi' ? 'Chờ duyệt' : 'Pending'}
                      </text>
                      <text x="95" y="60" fill="#9ca3af" fontSize="12" textAnchor="middle" fontFamily="monospace">
                        reader borrow()
                      </text>
                    </g>

                    {/* Node 2: Đang mượn */}
                    <g transform="translate(350, 25)">
                      <rect width="190" height="80" rx="14" fill="#132418" stroke="#4ade80" strokeWidth="2.2" />
                      <text x="95" y="38" fill="#f3f4f6" fontSize="16" fontWeight="bold" textAnchor="middle">
                        {language === 'vi' ? 'Đang mượn' : 'Borrowing'}
                      </text>
                      <text x="95" y="60" fill="#9ca3af" fontSize="12" textAnchor="middle" fontFamily="monospace">
                        admin approve() · FIFO
                      </text>
                    </g>

                    {/* Node 3: Quá hạn */}
                    <g transform="translate(670, 25)">
                      <rect width="190" height="80" rx="14" fill="#132418" stroke="#4ade80" strokeWidth="2.2" />
                      <text x="95" y="38" fill="#f3f4f6" fontSize="16" fontWeight="bold" textAnchor="middle">
                        {language === 'vi' ? 'Quá hạn' : 'Overdue'}
                      </text>
                      <text x="95" y="60" fill="#9ca3af" fontSize="12" textAnchor="middle" fontFamily="monospace">
                        {language === 'vi' ? 'quá due_date' : 'past due_date'}
                      </text>
                    </g>

                    {/* ── Bottom Row Nodes ── */}

                    {/* Node 4: Đã hủy */}
                    <g transform="translate(30, 240)">
                      <rect width="190" height="80" rx="14" fill="#1e222a" stroke="#64748b" strokeWidth="2" />
                      <text x="95" y="38" fill="#e2e8f0" fontSize="16" fontWeight="bold" textAnchor="middle">
                        {language === 'vi' ? 'Đã hủy' : 'Cancelled'}
                      </text>
                      <text x="95" y="60" fill="#94a3b8" fontSize="12" textAnchor="middle" fontFamily="monospace">
                        admin reject()
                      </text>
                    </g>

                    {/* Node 5: Đã trả */}
                    <g transform="translate(350, 240)">
                      <rect width="190" height="80" rx="14" fill="#132418" stroke="#4ade80" strokeWidth="2.2" />
                      <text x="95" y="38" fill="#f3f4f6" fontSize="16" fontWeight="bold" textAnchor="middle">
                        {language === 'vi' ? 'Đã trả' : 'Returned'}
                      </text>
                      <text x="95" y="60" fill="#9ca3af" fontSize="12" textAnchor="middle">
                        {language === 'vi' ? 'sách trả về, không hư hỏng' : 'clean return, no damage'}
                      </text>
                    </g>

                    {/* Node 6: Hư hỏng / Mất */}
                    <g transform="translate(670, 240)">
                      <rect width="190" height="80" rx="14" fill="#241818" stroke="#f87171" strokeWidth="2" />
                      <text x="95" y="38" fill="#fee2e2" fontSize="16" fontWeight="bold" textAnchor="middle">
                        {language === 'vi' ? 'Hư hỏng / Mất' : 'Damaged / Lost'}
                      </text>
                      <text x="95" y="60" fill="#fca5a5" fontSize="12" textAnchor="middle">
                        {language === 'vi' ? 'phạt 50% – 150%' : 'fine 50% – 150%'}
                      </text>
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            {/* State Machine Transition Breakdown Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  state: language === 'vi' ? 'Duyệt mượn công bằng (FIFO)' : 'Fair FIFO Approval',
                  tag: 'Pending → Borrowing',
                  color: '#4ade80',
                  desc: language === 'vi'
                    ? 'Bắt buộc thủ thư duyệt phiếu mượn sớm nhất trước (issue_date ASC). Tính toán thứ tự hàng đợi queue_position thời gian thực cho từng độc giả.'
                    : 'Forces librarian to approve earliest request first (issue_date ASC). Calculates real-time queue_position for waiting readers.',
                },
                {
                  state: language === 'vi' ? 'Giao dịch trả sạch (Clean Return)' : 'Clean Return Transaction',
                  tag: 'Borrowing / Overdue → Returned',
                  color: '#34D399',
                  desc: language === 'vi'
                    ? 'Bọc trong Database Transaction: Cập nhật return_date, chuyển trạng thái Returned, tự động cộng lại tồn kho (+1 available). Auto-Rollback nếu lỗi.'
                    : 'Encapsulated in Database Transaction: Sets return_date, transitions to Returned, increments stock (+1 available). Auto-rollbacks on error.',
                },
                {
                  state: language === 'vi' ? 'Xử lý phạt & Trừ kho (Fines & Loss)' : 'Penalty & Inventory Loss',
                  tag: 'Borrowing / Overdue → Damaged / Lost',
                  color: '#fb923c',
                  desc: language === 'vi'
                    ? 'Tạo FineLog (Quá hạn 5%/ngày + Hỏng 50% / Mất 150% giá sách). Trường hợp mất sách tự động trừ vĩnh viễn tổng kho (quantity - 1) trong transaction.'
                    : 'Creates FineLog (5%/day overdue + 50% damaged / 150% lost). Permanently deducts total inventory (quantity - 1) for lost books in transaction.',
                },
              ].map((item, idx) => (
                <div key={idx} className="p-4 bg-[#121212] border border-[#262626] rounded-xl flex flex-col justify-between gap-3">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-sm font-bold text-[#f3f4f6]">{item.state}</span>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded shrink-0"
                        style={{ background: `${item.color}20`, color: item.color }}>
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs text-[#9ca3af] leading-relaxed font-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack */}
          <section id="techstack">
            <div className="flex items-center gap-3 mb-6">
              <Server className="w-5 h-5" style={{ color: accent }} />
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

          {/* Testing & QA */}
          <section id="testing">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="w-5 h-5 text-[#34D399]" />
              <h2 className="text-2xl font-black text-[#f3f4f6]">
                {language === 'vi' ? 'Kiểm thử & Đảm bảo Chất lượng (Testing & Quality Assurance)' : 'Testing & Quality Assurance'}
              </h2>
            </div>
            <p className="text-[#d1d5db] text-base mb-8 leading-relaxed font-normal">
              {language === 'vi'
                ? 'Hệ thống đã trải qua bộ 95 trường hợp kiểm thử tự động (95 Test Cases) bao phủ toàn diện 8 Test Suites trên toàn bộ 3 module nghiệp vụ với tỷ lệ đạt tuyệt đối 100% PASS và độ bao phủ mã nguồn nghiệp vụ trên 85%.'
                : 'The system underwent a comprehensive 95-test-case automated validation suite covering all 8 Test Suites across 3 business modules with a 100% PASS rate and 85%+ core business logic code coverage.'}
            </p>

            {/* Test Summary Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { value: '95', label: language === 'vi' ? 'Tổng số Test Cases' : 'Total Test Cases', color: '#4F9CF9' },
                { value: '95', label: language === 'vi' ? 'Đạt (Passed)' : 'Passed (100%)', color: '#34D399' },
                { value: '0', label: language === 'vi' ? 'Lỗi (Failed)' : 'Failed', color: '#8e9192' },
                { value: '80.6%', label: language === 'vi' ? 'Overall Coverage' : 'Overall Coverage', color: '#A78BFA' },
              ].map((m, i) => (
                <div key={i} className="p-4 bg-[#121212] border border-[#262626] rounded text-center">
                  <div className="text-2xl font-black font-mono mb-1" style={{ color: m.color }}>{m.value}</div>
                  <div className="text-xs text-[#9ca3af] font-medium leading-tight">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Test Breakdown Grid */}
            <div className="p-6 bg-[#121212] border border-[#262626] rounded mb-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#9ca3af] mb-4">
                {language === 'vi' ? 'Phân bổ Test Cases theo Phân hệ & Code Coverage' : 'Test Case Distribution & Code Coverage'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  {
                    name: language === 'vi' ? 'Users Service (Auth & Profile)' : 'Users Service (Auth & Profile)',
                    tests: '21/21 PASS',
                    color: '#C084FC',
                    desc: language === 'vi' ? 'Đăng ký Bcrypt, trùng Email/StudentID, JWT Login, Soft Delete Guard | Coverage: 98.98%' : 'Bcrypt registration, Email/StudentID conflict, JWT Login, Soft Delete Guard | Coverage: 98.98%',
                  },
                  {
                    name: language === 'vi' ? 'Books Service (Catalog & Search)' : 'Books Service (Catalog & Search)',
                    tests: '16/16 PASS',
                    color: '#4F9CF9',
                    desc: language === 'vi' ? 'Find-or-Create Author/NXB/Category, ISBN 409 Conflict, ILike Search, Xóa mềm | Coverage: 84.15%' : 'Find-or-Create Author/Publisher/Category, ISBN 409 Conflict, ILike Search, Soft Delete | Coverage: 84.15%',
                  },
                  {
                    name: language === 'vi' ? 'Loans Service (Transactions & Rules)' : 'Loans Service (Transactions & Rules)',
                    tests: '28/28 PASS',
                    color: '#34D399',
                    desc: language === 'vi' ? 'Hạn ngạch 5 cuốn, Hạn thẻ, Chặn nợ quá hạn, FIFO, Trả sạch, Phạt hỏng 50%, Mất 150% (Transaction) | Coverage: 87.15%' : 'Quota 5 books, Card expiry, Overdue block, FIFO, Clean return, Damaged 50%, Lost 150% (Transaction) | Coverage: 87.15%',
                  },
                  {
                    name: language === 'vi' ? 'Guards (AuthGuard & RolesGuard)' : 'Guards (AuthGuard & RolesGuard)',
                    tests: '12/12 PASS',
                    color: '#F59E0B',
                    desc: language === 'vi' ? 'Cookie HttpOnly extraction, Bearer fallback, RBAC Admin/Reader, Token giả mạo 401 | Coverage: 100%' : 'Cookie HttpOnly extraction, Bearer fallback, RBAC Admin/Reader, Tampered token 401 | Coverage: 100%',
                  },
                  {
                    name: language === 'vi' ? 'Controllers (Routing & DTOs)' : 'Controllers (Routing & DTOs)',
                    tests: '18/18 PASS',
                    color: '#FB923C',
                    desc: language === 'vi' ? 'Định tuyến endpoint Users/Books/Loans, DTO Validation, Status codes, Cookie Set/Clear | Coverage: 93-100%' : 'Users/Books/Loans endpoint routing, DTO Validation, Status codes, Cookie Set/Clear | Coverage: 93-100%',
                  },
                ].map((cat, idx) => (
                  <div key={idx} className="p-3.5 bg-[#181818] border border-[#262626] rounded flex flex-col justify-between gap-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-[#f3f4f6] truncate">{cat.name}</span>
                      <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded shrink-0"
                        style={{ background: `${cat.color}20`, color: cat.color }}>
                        {cat.tests}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#9ca3af] leading-relaxed">{cat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Quality Verifications */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: language === 'vi' ? 'Giao dịch ACID — Auto Rollback' : 'ACID Transaction — Auto Rollback',
                  detail: language === 'vi'
                    ? 'Toàn bộ thao tác trả sách/phạt được bọc trong DataSource.transaction(). Nếu 1 bước lỗi, TypeORM tự động Rollback — không có dữ liệu nào bị commit giữa chừng.'
                    : 'All return/penalty operations wrapped in DataSource.transaction(). If any step fails, TypeORM auto-rolls back — zero partial commits.',
                },
                {
                  title: language === 'vi' ? 'Guarded Soft Delete — Chặn thất thoát' : 'Guarded Soft Delete — Asset Protection',
                  detail: language === 'vi'
                    ? 'Chặn 100% thao tác xóa sách/độc giả đang có phiếu mượn hoạt động (Pending/Borrowing/Overdue). Bảo vệ toàn vẹn lịch sử kiểm toán.'
                    : 'Blocks 100% of delete operations on books/readers with active loans (Pending/Borrowing/Overdue). Preserves complete audit history.',
                },
                {
                  title: language === 'vi' ? 'Dual-Source AuthGuard — Chống XSS' : 'Dual-Source AuthGuard — XSS Protection',
                  detail: language === 'vi'
                    ? 'Trích xuất JWT từ Cookie httpOnly (chống XSS) + fallback Bearer Header. Kết hợp RolesGuard RBAC chặn user thường vào route admin (403).'
                    : 'Extracts JWT from httpOnly Cookie (XSS-proof) + Bearer Header fallback. Combined with RolesGuard RBAC blocking reader tokens on admin routes (403).',
                },
              ].map((v, i) => (
                <div key={i} className="p-4 bg-[#141414] border border-[#2a2a2a] rounded">
                  <div className="flex items-center gap-2 mb-2 text-[#34D399]">
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <span className="text-xs font-bold text-[#f3f4f6]">{v.title}</span>
                  </div>
                  <p className="text-xs text-[#9ca3af] leading-relaxed">{v.detail}</p>
                </div>
              ))}
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
                  <h3 className="text-base font-bold mb-4" style={{ color: accent }}>{c.title}</h3>
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

export default LibraryManagementPage;
