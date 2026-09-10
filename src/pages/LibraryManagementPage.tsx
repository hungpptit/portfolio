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
  Lock,
  LayoutDashboard,
  Copy,
  Maximize2,
  AlertCircle,
  TrendingUp,
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
          {/* ── SECTION 1: EXECUTIVE PROJECT SNAPSHOT (30-Second High-Level Scan) ── */}
          <section id="overview" className="space-y-8">
            {/* Top Card: Visual Showcase + Key Details */}
            <div className="p-6 md:p-8 bg-white border border-slate-200/90 rounded-3xl shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Authentic Light Theme Web Admin Mockup (Matching User App Screenshot) */}
                <div className="lg:col-span-6 flex flex-col gap-3">
                  <div className="border border-slate-200/90 rounded-2xl overflow-hidden bg-white text-[#0B0E17] shadow-md">
                    {/* Browser Chrome Header */}
                    <div className="bg-[#1E1E24] px-4 py-2.5 flex items-center justify-between text-xs">
                      {/* Window Controls */}
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block" />
                      </div>

                      {/* URL Bar */}
                      <div className="bg-slate-800/90 border border-slate-700/60 text-slate-300 px-3 py-0.5 rounded-md text-[11px] font-mono flex items-center gap-1.5 max-w-[260px] w-full justify-between shadow-inner">
                        <div className="flex items-center gap-1.5 truncate">
                          <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                          <span className="truncate">http://localhost:3000</span>
                        </div>
                        <Copy className="w-2.5 h-2.5 text-slate-400 shrink-0 opacity-60" />
                      </div>

                      {/* Right Tags */}
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[9px] font-bold text-sky-400 bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-400/20">
                          WEB ADMIN / DESKTOP
                        </span>
                        <Maximize2 className="w-3 h-3 text-slate-400" />
                      </div>
                    </div>

                    {/* App Internal Navigation Bar */}
                    <div className="bg-white border-b border-slate-100 px-4 py-2 flex items-center justify-center gap-6 text-xs">
                      <div className="flex items-center gap-1.5 text-sky-600 font-semibold border-b-2 border-sky-500 pb-1 -mb-2">
                        <LayoutDashboard className="w-3.5 h-3.5" />
                        <span>Dashboard</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400 hover:text-slate-600">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Books</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400 hover:text-slate-600">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Loans</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400 hover:text-slate-600">
                        <Users className="w-3.5 h-3.5" />
                        <span>Readers</span>
                      </div>
                    </div>

                    {/* App Dashboard Canvas */}
                    <div className="p-4 space-y-3 bg-[#F8FAFC]">
                      {/* Top KPI Stat Cards (4 in a row) */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {/* Total Books */}
                        <div className="bg-white border border-slate-200/90 rounded-xl p-2.5 shadow-2xs flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                            <BookOpen className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-[9px] uppercase tracking-wider font-bold text-sky-600 font-mono">TOTAL BOOKS</p>
                            <p className="text-base font-black text-slate-900 leading-tight">33</p>
                          </div>
                        </div>

                        {/* Total Readers */}
                        <div className="bg-white border border-slate-200/90 rounded-xl p-2.5 shadow-2xs flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                            <Users className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-[9px] uppercase tracking-wider font-bold text-emerald-600 font-mono">TOTAL READERS</p>
                            <p className="text-base font-black text-slate-900 leading-tight">10</p>
                          </div>
                        </div>

                        {/* Active Loans */}
                        <div className="bg-white border border-slate-200/90 rounded-xl p-2.5 shadow-2xs flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                            <TrendingUp className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-[9px] uppercase tracking-wider font-bold text-amber-600 font-mono">ACTIVE LOANS</p>
                            <p className="text-base font-black text-slate-900 leading-tight">1</p>
                          </div>
                        </div>

                        {/* Overdue */}
                        <div className="bg-white border border-slate-200/90 rounded-xl p-2.5 shadow-2xs flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                            <AlertCircle className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-[9px] uppercase tracking-wider font-bold text-rose-600 font-mono">OVERDUE</p>
                            <p className="text-base font-black text-slate-900 leading-tight">1</p>
                          </div>
                        </div>
                      </div>

                      {/* Split Analytics & Most Borrowed View */}
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-stretch">
                        {/* Left: Borrowing Trends Chart */}
                        <div className="sm:col-span-7 bg-white border border-slate-200/90 rounded-xl p-3 shadow-2xs flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between">
                              <h4 className="text-xs font-bold text-slate-900">Borrowing Trends</h4>
                              <span className="text-[9px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                                ACID Safe
                              </span>
                            </div>
                            <p className="text-[10px] text-slate-400">Number of books borrowed in the last 7 days</p>
                          </div>

                          {/* Chart SVG */}
                          <div className="relative h-18 w-full mt-2">
                            <svg className="w-full h-full overflow-visible" viewBox="0 0 200 55" preserveAspectRatio="none">
                              <defs>
                                <linearGradient id="libTrendGrad" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.25" />
                                  <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.0" />
                                </linearGradient>
                              </defs>
                              <path d="M 0,48 L 20,48 Q 45,48 55,16 Q 65,16 75,48 L 200,48 Z" fill="url(#libTrendGrad)" />
                              <path d="M 0,48 L 20,48 Q 45,48 55,16 Q 65,16 75,48 L 200,48" fill="none" stroke="#0ea5e9" strokeWidth="2.2" strokeLinecap="round" />
                              <circle cx="55" cy="16" r="3" fill="#0284c7" stroke="#fff" strokeWidth="1.5" />
                            </svg>
                            <div className="flex justify-between text-[9px] font-mono text-slate-400 border-t border-slate-100 pt-1">
                              <span>Aug 18</span>
                              <span className="font-bold text-sky-600">Aug 19</span>
                              <span>Aug 20</span>
                              <span>Aug 22</span>
                              <span>Aug 24</span>
                            </div>
                          </div>
                        </div>

                        {/* Right: Most Borrowed Book Card */}
                        <div className="sm:col-span-5 bg-white border border-slate-200/90 rounded-xl p-3 shadow-2xs flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="text-xs font-bold text-slate-900">Most Borrowed</h4>
                              <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 font-mono">
                                AVAILABLE
                              </span>
                            </div>
                            <p className="text-[10px] text-slate-400">Top books in demand</p>
                          </div>

                          <div className="p-2 bg-slate-50 border border-slate-100 rounded-lg flex items-center gap-2 mt-2">
                            <div className="w-10 h-14 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded border border-slate-700 shadow-xs flex flex-col items-center justify-center p-1 shrink-0">
                              <div className="w-4 h-0.5 bg-amber-400 mb-1" />
                              <span className="text-[6px] text-amber-200 font-serif text-center uppercase tracking-tighter leading-tight">Gatsby</span>
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-[11px] font-bold text-slate-900 truncate">The Great Gatsby</p>
                              <p className="text-[10px] text-slate-500 truncate">F. Scott Fitzgerald</p>
                              <p className="text-[9px] font-mono text-indigo-600 font-semibold mt-0.5">FIFO Queue: 0 Wait</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Engineering Status Strip */}
                    <div className="bg-slate-50 px-3.5 py-2 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-slate-500 font-medium flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        NestJS 10 · TypeORM · ACID Transactions
                      </span>
                      <span className="text-emerald-700 font-bold">100% Concurrency Safe</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Title, Role, Tech Stack Pills, and CTAs */}
                <div className="lg:col-span-6 flex flex-col justify-between h-full">
                  <div>
                    {/* Category Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-[#5E6AD2] shadow-[0_0_8px_#5E6AD2]" />
                      <span className="text-xs font-bold tracking-wider text-[#5E6AD2] uppercase font-mono">
                        {language === 'vi' ? 'KIẾN TRÚC MODULE HÓA · GIAO DỊCH ACID · KIỂM THỬ TỰ ĐỘNG' : 'MODULAR ARCHITECTURE · ACID TRANSACTIONS · AUTOMATED TESTING'}
                      </span>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-3xl md:text-4xl font-black text-[#0B0E17] tracking-tight mb-2 leading-tight">
                      Smart Library Management System
                    </h1>

                    {/* Role & Metadata */}
                    <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-sm text-[#475569] mb-5 font-medium">
                      <span className="text-[#0B0E17] font-bold">
                        {language === 'vi' ? 'Vai trò:' : 'Role:'} {detail.role}
                      </span>
                      <span>•</span>
                      <span>{detail.duration}</span>
                      <span>•</span>
                      <span>{detail.teamSize}</span>
                    </div>

                    {/* Tech Stack Pills (Clean, standardized technologies) */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {[
                        'NestJS 10',
                        'TypeScript 5',
                        'TypeORM v0.3',
                        'PostgreSQL & MS SQL Server',
                        'JWT HttpOnly & RBAC',
                        'class-validator & DTOs',
                        'Jest & Supertest',
                        'Docker Compose',
                      ].map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-mono font-medium rounded-lg bg-slate-100/90 hover:bg-slate-200/80 text-slate-800 border border-slate-200/90 shadow-2xs transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <a
                        href={detail.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0B0E17] hover:bg-[#1E293B] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm"
                      >
                        <GitBranch className="w-4 h-4" /> {t.detailCommon.sourceRepo}
                      </a>
                      <button
                        onClick={() => scrollTo('architecture')}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-50 text-[#0B0E17] border border-slate-300 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-2xs cursor-pointer"
                      >
                        <Layers className="w-4 h-4 text-[#5E6AD2]" />
                        {language === 'vi' ? 'Xem Sơ Đồ Kiến Trúc' : 'System Architecture'}
                      </button>
                      <button
                        onClick={() => scrollTo('fifo')}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#5E6AD2]/10 hover:bg-[#5E6AD2]/20 text-[#5E6AD2] border border-[#5E6AD2]/30 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-2xs cursor-pointer"
                      >
                        <Shield className="w-4 h-4" />
                        {language === 'vi' ? 'Hàng Đợi FIFO & ACID' : 'FIFO & ACID Protocol'}
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick 3-Block Summary (Overview - Key Features - Core Challenge) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Block 1: Overview */}
              <div className="p-6 bg-white border border-slate-200/90 rounded-2xl shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3 text-[#5E6AD2]">
                    <Globe className="w-4 h-4" />
                    <h3 className="text-xs font-bold uppercase tracking-wider font-mono">
                      {language === 'vi' ? 'TỔNG QUAN BÀI TOÁN (OVERVIEW)' : 'EXECUTIVE OVERVIEW'}
                    </h3>
                  </div>
                  <p className="text-sm text-[#334155] leading-relaxed font-normal">
                    {language === 'vi'
                      ? 'Hệ thống Quản lý Thư viện cấp doanh nghiệp (Enterprise-Grade LMS) được xây dựng trên nền tảng NestJS 10 và TypeORM nhằm giải quyết triệt để các bài toán vận hành phức tạp: kiểm soát vòng đời mượn trả bằng Máy trạng thái, hàng đợi ưu tiên duyệt mượn FIFO tránh thiên vị, giới hạn hạn ngạch 5 cuốn/độc giả, tự động tính phạt khi làm hỏng hoặc mất sách, và đảm bảo toàn vẹn dữ liệu đa bảng bằng ACID Transactions và Guarded Soft Delete.'
                      : 'Enterprise-Grade Library Management System engineered with NestJS 10 and TypeORM to resolve complex operational challenges: loan lifecycle management via State Machines, FIFO Queue Enforcement for fair borrow approvals, quota caps (max 5 active loans), automated damage/loss penalty calculation, and strict multi-table data integrity backed by ACID Transactions and Guarded Soft Deletes.'}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#64748B] font-mono">
                  <span>Architecture: Modular Monolith</span>
                  <span className="text-emerald-700 font-bold">95/95 Tests PASS</span>
                </div>
              </div>

              {/* Block 2: Key Features */}
              <div className="p-6 bg-white border border-slate-200/90 rounded-2xl shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3 text-emerald-700">
                    <CheckCircle className="w-4 h-4" />
                    <h3 className="text-xs font-bold uppercase tracking-wider font-mono">
                      {language === 'vi' ? 'ĐIỂM NHẤN KỸ THUẬT (KEY FEATURES)' : 'KEY ENGINEERING HIGHLIGHTS'}
                    </h3>
                  </div>
                  <ul className="space-y-2 text-xs text-[#334155] leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span><strong>{language === 'vi' ? 'Hàng đợi FIFO Enforcement' : 'FIFO Queue Enforcement'}</strong>: Bắt buộc duyệt mượn công bằng theo mốc thời gian.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span><strong>{language === 'vi' ? 'Giao dịch ACID nguyên tử' : 'ACID Atomic Transactions'}</strong>: Bọc đồng thời cập nhật kho + biên lai phạt + đổi trạng thái.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span><strong>{language === 'vi' ? 'Xóa mềm có điều kiện' : 'Guarded Soft Delete'}</strong>: Chặn 100% xóa tài liệu hoặc độc giả có giao dịch chưa hoàn tất.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span><strong>{language === 'vi' ? 'Kiến trúc Module hóa NestJS' : 'Layered Modular NestJS'}</strong>: Controller → Service → Repository với IoC Container.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span><strong>{language === 'vi' ? 'Kiểm thử tự động Jest' : 'Jest Test Suites'}</strong>: Đạt 95/95 Test Cases (100% PASS), 85%+ Code Coverage.</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-emerald-800 font-mono font-semibold">
                  {language === 'vi' ? 'Đạt 95/95 Test Cases (100% PASS)' : 'Verified: 95/95 Automated Tests PASS'}
                </div>
              </div>

              {/* Block 3: Challenges & Solution */}
              <div className="p-6 bg-white border border-slate-200/90 rounded-2xl shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3 text-amber-700">
                    <Shield className="w-4 h-4" />
                    <h3 className="text-xs font-bold uppercase tracking-wider font-mono">
                      {language === 'vi' ? 'THỬ THÁCH LỚN NHẤT & GIẢI PHÁP' : 'CORE CHALLENGE & SOLUTION'}
                    </h3>
                  </div>
                  <p className="text-xs text-[#334155] leading-relaxed mb-3">
                    <strong className="text-amber-900 block mb-1">
                      {language === 'vi' ? 'Thách thức: Toàn vẹn dữ liệu khi Trả sách & Tính phạt đồng thời' : 'Challenge: Multi-Table Transaction Integrity'}
                    </strong>
                    {language === 'vi'
                      ? 'Khi độc giả trả sách hoặc báo mất/hỏng, hệ thống phải cập nhật song song kho sách, tạo biên lai phạt và chuyển trạng thái phiếu. Nếu đứt mạng giữa chừng sẽ gây lệch số liệu tài chính.'
                      : 'Returning damaged/lost books requires concurrently updating stock inventory, issuing fine logs, and altering loan states. Mid-stream failures cause serious financial discrepancies.'}
                  </p>
                  <p className="text-xs text-[#334155] leading-relaxed">
                    <strong className="text-emerald-900 block mb-1">
                      {language === 'vi' ? 'Giải pháp: ACID Transaction bọc nguyên tử qua TypeORM' : 'Solution: Atomic ACID Database Transactions'}
                    </strong>
                    {language === 'vi'
                      ? 'Bọc toàn bộ chuỗi ghi vào DataSource Transaction Manager. Bất kỳ bước con nào phát sinh lỗi đều kích hoạt Rollback hoàn tác 100%, bảo vệ dữ liệu kho và tiền phạt an toàn tuyệt đối.'
                      : 'Encapsulated multi-step mutations within TypeORM DataSource Transaction Manager. Any failure triggers 100% rollback, ensuring absolute financial and inventory consistency.'}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-amber-800 font-mono">
                  <span>ACID Rollback</span>
                  <span className="font-bold">Zero Data Drift</span>
                </div>
              </div>

            </div>

            {/* Transition Banner: Deep-Dive Indicator */}
            <div className="p-5 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl text-white shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#5E6AD2]/30 border border-[#5E6AD2]/50 flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5 text-indigo-300" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider font-mono text-indigo-200">
                    {language === 'vi' ? 'PHÂN TÍCH KỸ THUẬT CHUYÊN SÂU (ENGINEERING DEEP DIVE)' : 'DETAILED TECHNICAL DEEP DIVE'}
                  </h4>
                  <p className="text-xs text-slate-300 font-normal">
                    {language === 'vi'
                      ? 'Bao gồm sơ đồ kiến trúc module hóa NestJS, lược đồ ERD quan hệ bảng, giao dịch ACID và kết quả 95/95 tests.'
                      : 'Comprehensive NestJS modular diagrams, ERD schema, ACID transaction flows, and 95 test case reports.'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => scrollTo('architecture')}
                  className="px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer"
                >
                  {language === 'vi' ? '1. Kiến Trúc ↓' : '1. Architecture ↓'}
                </button>
                <button
                  onClick={() => scrollTo('fifo')}
                  className="px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer"
                >
                  {language === 'vi' ? '2. Hàng Đợi FIFO ↓' : '2. FIFO Queue ↓'}
                </button>
                <button
                  onClick={() => scrollTo('challenges')}
                  className="px-3 py-1.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg text-xs font-mono font-semibold transition-all shadow-xs cursor-pointer"
                >
                  {language === 'vi' ? '3. Thách Thức & Giải Pháp ↓' : '3. Challenges ↓'}
                </button>
              </div>
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
              themeColor="#5E6AD2"
              terminalCommand="npm test -- --coverage --verbose --detectOpenHandles"
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
                  ? 'Các hệ thống thư viện truyền thống (Legacy Systems) xử lý nghiệp vụ mượn/trả sách bằng các truy vấn tuần tự riêng lẻ (non-transactional). Khi thủ thư xác nhận trả sách hoặc báo sách hỏng/mất, hệ thống phải cập nhật đồng thời FineLog + Loan Status + Book Inventory — nếu server crash giữa chừng, dữ liệu bị lệch: tiền phạt đã ghi nhận nhưng kho sách chưa cập nhật, gây thất thoát tài sản và sai lệch sổ sách kế toán.'
                  : 'Traditional library legacy systems process borrow/return operations using sequential non-transactional queries. When confirming returns or reporting damage/loss, the system must simultaneously update FineLog + Loan Status + Book Inventory — if the server crashes mid-operation, data becomes inconsistent: fines recorded but inventory not adjusted, causing asset loss and accounting discrepancies.'}
              </p>
            </div>

            {/* Pain Points Grid */}
            <div className="p-6 bg-white/90 border border-slate-200/80 rounded-2xl shadow-xs mb-6">
              <h3 className="text-sm font-bold uppercase tracking-wider mb-5 flex items-center gap-2 text-[#5E6AD2]">
                <ChevronRight className="w-4 h-4 shrink-0" />
                {language === 'vi' ? 'Các Bài toán Kỹ thuật Cốt lõi' : 'Core Technical Challenges'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    color: '#EC4899',
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
                    color: '#5E6AD2',
                    title: language === 'vi' ? 'Bảo mật & Xác thực Client (XSS)' : 'Client Authentication Security (XSS)',
                    detail: language === 'vi'
                      ? 'Lưu trữ Token ở LocalStorage phía Client tiềm ẩn nguy cơ bị đánh cắp bởi mã độc JavaScript (XSS). Secret Key JWT bị gán cứng trong mã nguồn.'
                      : 'Storing tokens in LocalStorage exposes them to XSS attacks. JWT Secret Key was hardcoded directly in source code, enabling token forgery.',
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
                  ? 'Xây dựng hệ thống trên Kiến trúc Module hóa Phân tầng (Layered Modular Architecture) với NestJS và TypeORM, bao gồm 3 trụ cột: (1) Máy trạng thái quản lý vòng đời phiếu mượn (Pending → Borrowing → Returned | Damaged | Lost) với hàng đợi FIFO, (2) Giao dịch CSDL nguyên tử (ACID Transactions) bọc đồng thời FineLog + Loan + Book trong 1 transaction, (3) Xóa mềm có ràng buộc (Guarded Soft Delete) bảo vệ toàn vẹn lịch sử và tài sản thư viện.'
                  : 'Built on Layered Modular Architecture with NestJS and TypeORM, featuring 3 pillars: (1) State Machine managing loan lifecycle (Pending → Borrowing → Returned | Damaged | Lost) with FIFO queue enforcement, (2) ACID Database Transactions atomically wrapping FineLog + Loan + Book updates, (3) Guarded Soft Delete preserving historical integrity and preventing library asset loss.'}
              </p>
            </div>
          </section>

          {/* ── Objectives & Project Scope ── */}
          <section id="scope">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-5 h-5 text-[#5E6AD2]" />
              <h2 className="text-2xl font-black text-[#0B0E17]">
                {language === 'vi' ? 'Mục tiêu Hệ thống & Phạm vi Dự án' : 'System Objectives & Project Scope'}
              </h2>
            </div>

            {/* 3 Core Pillars */}
            <div className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-4">
                {language === 'vi' ? '3 Trụ cột Kỹ thuật Cốt lõi' : '3 Core Engineering Pillars'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    color: '#5E6AD2', num: '01',
                    title: language === 'vi' ? 'Máy trạng thái Mượn/Trả' : 'Loan State Machine & FIFO',
                    desc: language === 'vi'
                      ? 'Quản lý vòng đời phiếu mượn (Pending → Borrowing → Returned | Damaged | Lost), hàng đợi duyệt FIFO bắt buộc thủ thư xử lý theo thứ tự, kiểm soát hạn ngạch 5 cuốn/độc giả, chặn mượn khi thẻ hết hạn hoặc nợ quá hạn.'
                      : 'Full loan lifecycle (Pending → Borrowing → Returned | Damaged | Lost), FIFO approval enforcement, 5-book quota control per reader, blocks borrowing when card expired or overdue debts exist.',
                  },
                  {
                    color: '#10B981', num: '02',
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
                      : 'JWT HttpOnly Cookie (XSS-proof) + Dual-Source Token Extraction + RBAC @Roles(). Guarded Soft Delete: blocks deletion of books/readers with active loans (Pending/Borrowing/Overdue), preserving audit trails.',
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

            {/* Key Metrics */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-4 flex items-center gap-2">
                <BarChart3 className="w-3.5 h-3.5" />
                {language === 'vi' ? 'Chỉ số Kỹ thuật Đạt được' : 'Technical Achievements'}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { value: '3', label: language === 'vi' ? 'Module nghiệp vụ NestJS' : 'NestJS Business Modules', color: '#10B981' },
                  { value: '8', label: language === 'vi' ? 'Test Suites (Jest 29)' : 'Test Suites (Jest 29)', color: '#5E6AD2' },
                  { value: '95/95', label: language === 'vi' ? 'Test Cases (100% PASS)' : 'Test Cases (100% PASS)', color: '#8B5CF6' },
                  { value: '20+', label: language === 'vi' ? 'RESTful API Endpoints' : 'RESTful API Endpoints', color: '#F59E0B' },
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
                ? 'Trong nhóm 3 thành viên, tôi đảm nhiệm vai trò Trưởng nhóm Kỹ thuật & Thiết kế Hệ thống (Technical Lead & System Designer) — chịu trách nhiệm thiết kế toàn bộ kiến trúc phân tầng, trực tiếp phát triển 3 module nghiệp vụ cốt lõi (Users, Books, Loans), triển khai cơ chế bảo mật đa lớp, và xây dựng bộ 95 Test Cases kiểm thử tự động.'
                : 'In the 3-person team, I served as the Technical Lead & System Designer — owning the entire layered architecture design, directly developing all 3 core business modules (Users, Books, Loans), implementing multi-layer security mechanisms, and building the complete 95-test automated testing suite.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  area: language === 'vi' ? 'Kiến trúc Hệ thống & RESTful API' : 'System Architecture & RESTful API Design',
                  badge: '100% Ownership',
                  color: '#10B981',
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
                  color: '#5E6AD2',
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
                  color: '#8B5CF6',
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

          {/* ── System Architecture ── */}
          <section id="architecture">
            <div className="flex items-center gap-3 mb-2">
              <Layers className="w-5 h-5 text-[#5E6AD2]" />
              <h2 className="text-2xl font-black text-[#0B0E17]">
                {language === 'vi' ? 'Kiến trúc Hệ thống Tổng thể (System Architecture)' : 'High-Level System Architecture'}
              </h2>
            </div>
            <p className="text-[#334155] text-base mb-8 leading-relaxed font-normal">
              {language === 'vi'
                ? 'Sơ đồ kiến trúc phân tầng: Client Applications → NestJS Backend Gateway (AuthGuard + RolesGuard + ValidationPipe) → 3 Module nghiệp vụ (Controller → Service → Repository) → Data Access Layer (TypeORM Transactions) → Dual Database (SQL Server / PostgreSQL).'
                : 'Layered architecture flow: Client Applications → NestJS Backend Gateway (AuthGuard + RolesGuard + ValidationPipe) → 3 Business Modules (Controller → Service → Repository) → Data Access Layer (TypeORM Transactions) → Dual Database (SQL Server / PostgreSQL).'}
            </p>

            {/* Architecture Diagram */}
            <div className="bg-white/90 border border-slate-200/80 rounded-2xl p-6 md:p-8 overflow-x-auto shadow-xs">
              <div className="max-w-[900px] mx-auto">

                {/* Layer 1: Client */}
                <div className="flex justify-center">
                  <div className="px-8 py-4 bg-sky-50/80 border-2 border-sky-300 rounded-2xl flex items-center gap-4 shadow-2xs max-w-[500px] w-full">
                    <div className="w-11 h-11 rounded-xl bg-white border border-sky-200 flex items-center justify-center shrink-0 shadow-2xs">
                      <Globe className="w-6 h-6 text-sky-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-bold text-sky-700 bg-sky-100 px-2 py-0.5 rounded-full font-mono">LAYER 1</span>
                        <span className="text-sm font-bold text-[#0B0E17]">
                          {language === 'vi' ? 'Client Applications (React Web / Postman)' : 'Client Applications (React Web / Postman)'}
                        </span>
                      </div>
                      <p className="text-xs text-[#475569] leading-relaxed">
                        {language === 'vi'
                          ? 'Ứng dụng React SPA (Vite + TypeScript) cho Thủ thư và Độc giả; Postman / Thunder Client cho kiểm thử API.'
                          : 'React SPA (Vite + TypeScript) for Librarians and Readers; Postman / Thunder Client for API testing.'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center py-2">
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-6 bg-gradient-to-b from-sky-400 to-amber-400" />
                    <ArrowDown className="w-4 h-4 text-amber-500" />
                  </div>
                </div>

                {/* Layer 2: Gateway */}
                <div className="flex justify-center">
                  <div className="px-8 py-4 bg-amber-50/80 border-2 border-amber-300 rounded-2xl flex items-center gap-4 shadow-2xs max-w-[500px] w-full">
                    <div className="w-11 h-11 rounded-xl bg-white border border-amber-200 flex items-center justify-center shrink-0 shadow-2xs">
                      <Shield className="w-6 h-6 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full font-mono">LAYER 2</span>
                        <span className="text-sm font-bold text-[#0B0E17]">
                          {language === 'vi' ? 'NestJS Backend Gateway (/api)' : 'NestJS Backend Gateway (/api)'}
                        </span>
                      </div>
                      <p className="text-xs text-[#475569] leading-relaxed">
                        {language === 'vi'
                          ? 'Global Prefix /api + ValidationPipe (whitelist) + Dual-Source AuthGuard (Cookie + Bearer) + RBAC RolesGuard (@Roles).'
                          : 'Global Prefix /api + ValidationPipe (whitelist) + Dual-Source AuthGuard (Cookie + Bearer) + RBAC RolesGuard (@Roles).'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center py-2">
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-4 bg-amber-300" />
                    <span className="text-[11px] text-[#475569] font-mono bg-slate-100 px-3 py-0.5 rounded-full border border-slate-200 my-1 font-semibold">
                      {language === 'vi' ? 'Phân phối đến 3 module nghiệp vụ' : 'Distributes to 3 business modules'}
                    </span>
                    <ArrowDown className="w-4 h-4 text-[#5E6AD2]" />
                  </div>
                </div>

                {/* Layer 3: Business Modules */}
                <div className="p-6 bg-slate-50/80 border-2 border-[#5E6AD2]/30 rounded-2xl">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold bg-[#5E6AD2]/15 px-2 py-0.5 rounded-full font-mono text-[#5E6AD2]">LAYER 3</span>
                    <span className="text-sm font-bold text-[#0B0E17]">
                      {language === 'vi' ? '3 Module Nghiệp vụ — Controller → Service → Repository' : '3 Business Modules — Controller → Service → Repository'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                      { icon: <Users className="w-4 h-4" />, name: language === 'vi' ? 'Users Module' : 'Users Module', desc: language === 'vi' ? 'Đăng ký, JWT Login, Bcrypt, RBAC, Soft Delete' : 'Register, JWT Login, Bcrypt, RBAC, Soft Delete', color: '#8B5CF6', port: ':3001' },
                      { icon: <BookOpen className="w-4 h-4" />, name: language === 'vi' ? 'Books Module' : 'Books Module', desc: language === 'vi' ? 'CRUD, Find-or-Create, ILike Search, ISBN Check' : 'CRUD, Find-or-Create, ILike Search, ISBN Check', color: '#06B6D4', port: ':3001' },
                      { icon: <FileCheck className="w-4 h-4" />, name: language === 'vi' ? 'Loans Module' : 'Loans Module', desc: language === 'vi' ? 'FIFO Queue, ACID Transaction, State Machine, Phạt' : 'FIFO Queue, ACID Transaction, State Machine, Fines', color: '#10B981', port: ':3001', highlight: true },
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
                </div>

                <div className="flex justify-center py-2">
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-4 bg-indigo-300" />
                    <span className="text-[11px] text-[#475569] font-mono bg-slate-100 px-3 py-0.5 rounded-full border border-slate-200 my-1 font-semibold">
                      {language === 'vi' ? 'TypeORM Data Access Layer (Transactions)' : 'TypeORM Data Access Layer (Transactions)'}
                    </span>
                    <ArrowDown className="w-4 h-4 text-rose-500" />
                  </div>
                </div>

                {/* Layer 4: Database */}
                <div className="p-6 bg-slate-50/80 border border-slate-200 rounded-2xl">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full font-mono">LAYER 4</span>
                    <span className="text-sm font-bold text-[#0B0E17]">
                      {language === 'vi' ? 'Tầng Cơ sở Dữ liệu (Dual-Database Support)' : 'Database Storage Layer (Dual-Database Support)'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl bg-white border border-rose-200 shadow-2xs">
                      <div className="flex items-center gap-2 mb-2">
                        <Database className="w-4 h-4 text-rose-600" />
                        <span className="text-xs font-bold text-[#0B0E17]">MS SQL Server 2019+</span>
                      </div>
                      <p className="text-[11px] text-[#475569] leading-relaxed">
                        {language === 'vi' ? 'Phát triển cục bộ (Local Dev), Trigger đồng bộ kho tồn, Clustered PKs, Indexes' : 'Local Development, inventory sync Triggers, Clustered PKs, Indexes'}
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-emerald-200 shadow-2xs">
                      <div className="flex items-center gap-2 mb-2">
                        <Database className="w-4 h-4 text-emerald-600" />
                        <span className="text-xs font-bold text-[#0B0E17]">PostgreSQL 14+ (Cloud)</span>
                      </div>
                      <p className="text-[11px] text-[#475569] leading-relaxed">
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
              <span className="text-xs font-bold tracking-wider uppercase text-[#5E6AD2] font-mono">
                {language === 'vi' ? 'SƠ ĐỒ HỆ THỐNG' : 'SYSTEM DIAGRAM'}
              </span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <GitBranch className="w-5 h-5 text-[#5E6AD2]" />
              <h2 className="text-2xl font-black text-[#0B0E17]">
                {language === 'vi' ? 'Sơ đồ trạng thái vòng đời mượn sách' : 'Loan Lifecycle State Machine Diagram'}
              </h2>
            </div>
            <p className="text-[#334155] text-base mb-8 leading-relaxed font-normal">
              {language === 'vi'
                ? 'Toàn bộ quy trình mượn - trả sách được mô hình hóa qua Máy trạng thái 6 trạng thái độc lập. Hệ thống kết hợp hàng đợi FIFO khi duyệt và bọc toàn bộ các thao tác cập nhật đa bảng vào Giao dịch CSDL nguyên tử (ACID Transaction) để đảm bảo không bị sai lệch số lượng tồn kho hay tiền phạt.'
                : 'The entire borrow-return workflow is modeled as a 6-state finite state machine. The system enforces strict FIFO queue order during approvals and encapsulates multi-table mutations within atomic ACID Database Transactions to prevent inventory or fine discrepancies.'}
            </p>

            {/* State Machine Visual Diagram */}
            <div className="p-6 md:p-8 bg-white/90 border border-slate-200/80 rounded-2xl mb-6 shadow-xs">
              <div className="overflow-x-auto">
                <div className="min-w-[860px] flex justify-center">
                  <svg viewBox="0 0 900 350" className="w-full max-w-[900px] h-auto select-none font-sans">
                    <defs>
                      {/* Arrow Markers */}
                      <marker id="sm-arrow-green" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                        <path d="M1,1 L7,4 L1,7 Z" fill="#059669" />
                      </marker>
                      <marker id="sm-arrow-orange" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                        <path d="M1,1 L7,4 L1,7 Z" fill="#D97706" />
                      </marker>
                    </defs>

                    {/* ── Transition Lines ── */}
                    {/* 1. Chờ duyệt -> Đang mượn (Solid Green) */}
                    <line x1="220" y1="65" x2="340" y2="65" stroke="#059669" strokeWidth="2.5" markerEnd="url(#sm-arrow-green)" />
                    <text x="280" y="52" fill="#475569" fontSize="12" textAnchor="middle" fontWeight="600">
                      {language === 'vi' ? 'duyệt · FIFO' : 'approve · FIFO'}
                    </text>

                    {/* 2. Chờ duyệt -> Đã hủy (Dashed Orange Down) */}
                    <line x1="125" y1="105" x2="125" y2="235" stroke="#D97706" strokeWidth="2" strokeDasharray="5,4" markerEnd="url(#sm-arrow-orange)" />
                    <text x="125" y="175" fill="#D97706" fontSize="12" textAnchor="middle" fontWeight="600">
                      {language === 'vi' ? 'từ chối' : 'reject'}
                    </text>

                    {/* 3. Đang mượn -> Quá hạn (Solid Green) */}
                    <line x1="540" y1="65" x2="660" y2="65" stroke="#059669" strokeWidth="2.5" markerEnd="url(#sm-arrow-green)" />
                    <text x="600" y="52" fill="#475569" fontSize="12" textAnchor="middle" fontWeight="600">
                      {language === 'vi' ? 'quá hạn' : 'overdue'}
                    </text>

                    {/* 4. Đang mượn -> Đã trả (Solid Green Down) */}
                    <line x1="445" y1="105" x2="445" y2="235" stroke="#059669" strokeWidth="2.5" markerEnd="url(#sm-arrow-green)" />
                    <text x="445" y="175" fill="#475569" fontSize="12" textAnchor="middle" fontWeight="600">
                      {language === 'vi' ? 'trả sách' : 'return book'}
                    </text>

                    {/* 5. Đang mượn -> Hư hỏng / Mất (Dashed Orange Diagonal) */}
                    <line x1="495" y1="105" x2="685" y2="235" stroke="#D97706" strokeWidth="2" strokeDasharray="5,4" markerEnd="url(#sm-arrow-orange)" />
                    <text x="635" y="195" fill="#D97706" fontSize="12" textAnchor="middle" fontWeight="600">
                      {language === 'vi' ? 'báo hư hỏng' : 'report damage'}
                    </text>

                    {/* 6. Quá hạn -> Đã trả (Solid Green Diagonal) */}
                    <line x1="710" y1="105" x2="520" y2="235" stroke="#059669" strokeWidth="2.5" markerEnd="url(#sm-arrow-green)" />
                    <text x="645" y="145" fill="#475569" fontSize="12" textAnchor="middle" fontWeight="600">
                      {language === 'vi' ? 'trả sách · phí trễ hạn' : 'return · late fine'}
                    </text>

                    {/* 7. Quá hạn -> Hư hỏng / Mất (Dashed Orange Down) */}
                    <line x1="765" y1="105" x2="765" y2="235" stroke="#D97706" strokeWidth="2" strokeDasharray="5,4" markerEnd="url(#sm-arrow-orange)" />
                    <text x="765" y="175" fill="#D97706" fontSize="12" textAnchor="middle" fontWeight="600">
                      {language === 'vi' ? 'báo hư hỏng' : 'report damage'}
                    </text>

                    {/* ── Top Row Nodes ── */}

                    {/* Node 1: Chờ duyệt */}
                    <g transform="translate(30, 25)">
                      <rect width="190" height="80" rx="14" fill="#ECFDF5" stroke="#059669" strokeWidth="2.2" />
                      <text x="95" y="38" fill="#0B0E17" fontSize="16" fontWeight="bold" textAnchor="middle">
                        {language === 'vi' ? 'Chờ duyệt' : 'Pending'}
                      </text>
                      <text x="95" y="60" fill="#047857" fontSize="12" textAnchor="middle" fontFamily="monospace" fontWeight="600">
                        reader borrow()
                      </text>
                    </g>

                    {/* Node 2: Đang mượn */}
                    <g transform="translate(350, 25)">
                      <rect width="190" height="80" rx="14" fill="#EEF2FF" stroke="#5E6AD2" strokeWidth="2.2" />
                      <text x="95" y="38" fill="#0B0E17" fontSize="16" fontWeight="bold" textAnchor="middle">
                        {language === 'vi' ? 'Đang mượn' : 'Borrowing'}
                      </text>
                      <text x="95" y="60" fill="#4338CA" fontSize="12" textAnchor="middle" fontFamily="monospace" fontWeight="600">
                        admin approve() · FIFO
                      </text>
                    </g>

                    {/* Node 3: Quá hạn */}
                    <g transform="translate(670, 25)">
                      <rect width="190" height="80" rx="14" fill="#FEF3C7" stroke="#D97706" strokeWidth="2.2" />
                      <text x="95" y="38" fill="#0B0E17" fontSize="16" fontWeight="bold" textAnchor="middle">
                        {language === 'vi' ? 'Quá hạn' : 'Overdue'}
                      </text>
                      <text x="95" y="60" fill="#B45309" fontSize="12" textAnchor="middle" fontFamily="monospace" fontWeight="600">
                        {language === 'vi' ? 'quá due_date' : 'past due_date'}
                      </text>
                    </g>

                    {/* ── Bottom Row Nodes ── */}

                    {/* Node 4: Đã hủy */}
                    <g transform="translate(30, 240)">
                      <rect width="190" height="80" rx="14" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="2" />
                      <text x="95" y="38" fill="#0B0E17" fontSize="16" fontWeight="bold" textAnchor="middle">
                        {language === 'vi' ? 'Đã hủy' : 'Cancelled'}
                      </text>
                      <text x="95" y="60" fill="#64748B" fontSize="12" textAnchor="middle" fontFamily="monospace" fontWeight="600">
                        admin reject()
                      </text>
                    </g>

                    {/* Node 5: Đã trả */}
                    <g transform="translate(350, 240)">
                      <rect width="190" height="80" rx="14" fill="#ECFDF5" stroke="#059669" strokeWidth="2.2" />
                      <text x="95" y="38" fill="#0B0E17" fontSize="16" fontWeight="bold" textAnchor="middle">
                        {language === 'vi' ? 'Đã trả' : 'Returned'}
                      </text>
                      <text x="95" y="60" fill="#047857" fontSize="12" textAnchor="middle" fontWeight="600">
                        {language === 'vi' ? 'sách trả về, không hư hỏng' : 'clean return, no damage'}
                      </text>
                    </g>

                    {/* Node 6: Hư hỏng / Mất */}
                    <g transform="translate(670, 240)">
                      <rect width="190" height="80" rx="14" fill="#FFF1F2" stroke="#E11D48" strokeWidth="2" />
                      <text x="95" y="38" fill="#0B0E17" fontSize="16" fontWeight="bold" textAnchor="middle">
                        {language === 'vi' ? 'Hư hỏng / Mất' : 'Damaged / Lost'}
                      </text>
                      <text x="95" y="60" fill="#BE123C" fontSize="12" textAnchor="middle" fontWeight="600">
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
                  color: '#059669',
                  desc: language === 'vi'
                    ? 'Bắt buộc thủ thư duyệt phiếu mượn sớm nhất trước (issue_date ASC). Tính toán thứ tự hàng đợi queue_position thời gian thực cho từng độc giả.'
                    : 'Forces librarian to approve earliest request first (issue_date ASC). Calculates real-time queue_position for waiting readers.',
                },
                {
                  state: language === 'vi' ? 'Giao dịch trả sạch (Clean Return)' : 'Clean Return Transaction',
                  tag: 'Borrowing / Overdue → Returned',
                  color: '#5E6AD2',
                  desc: language === 'vi'
                    ? 'Bọc trong Database Transaction: Cập nhật return_date, chuyển trạng thái Returned, tự động cộng lại tồn kho (+1 available). Auto-Rollback nếu lỗi.'
                    : 'Encapsulated in Database Transaction: Sets return_date, transitions to Returned, increments stock (+1 available). Auto-rollbacks on error.',
                },
                {
                  state: language === 'vi' ? 'Xử lý phạt & Trừ kho (Fines & Loss)' : 'Penalty & Inventory Loss',
                  tag: 'Borrowing / Overdue → Damaged / Lost',
                  color: '#D97706',
                  desc: language === 'vi'
                    ? 'Tạo FineLog (Quá hạn 5%/ngày + Hỏng 50% / Mất 150% giá sách). Trường hợp mất sách tự động trừ vĩnh viễn tổng kho (quantity - 1) trong transaction.'
                    : 'Creates FineLog (5%/day overdue + 50% damaged / 150% lost). Permanently deducts total inventory (quantity - 1) for lost books in transaction.',
                },
              ].map((item, idx) => (
                <div key={idx} className="p-5 bg-white/90 border border-slate-200/80 rounded-2xl flex flex-col justify-between gap-3 shadow-xs">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-sm font-bold text-[#0B0E17]">{item.state}</span>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-lg shrink-0"
                        style={{ background: `${item.color}15`, color: item.color }}>
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs text-[#475569] leading-relaxed font-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
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

          {/* Testing & QA */}
          <section id="testing">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <h2 className="text-2xl font-black text-[#0B0E17]">
                {language === 'vi' ? 'Kiểm thử & Đảm bảo Chất lượng (Testing & Quality Assurance)' : 'Testing & Quality Assurance'}
              </h2>
            </div>
            <p className="text-[#334155] text-base mb-8 leading-relaxed font-normal">
              {language === 'vi'
                ? 'Hệ thống đã trải qua bộ 95 trường hợp kiểm thử tự động (95 Test Cases) bao phủ toàn diện 8 Test Suites trên toàn bộ 3 module nghiệp vụ với tỷ lệ đạt tuyệt đối 100% PASS và độ bao phủ mã nguồn nghiệp vụ trên 85%.'
                : 'The system underwent a comprehensive 95-test-case automated validation suite covering all 8 Test Suites across 3 business modules with a 100% PASS rate and 85%+ core business logic code coverage.'}
            </p>

            {/* Test Summary Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { value: '95', label: language === 'vi' ? 'Tổng số Test Cases' : 'Total Test Cases', color: '#5E6AD2' },
                { value: '95', label: language === 'vi' ? 'Đạt (Passed)' : 'Passed (100%)', color: '#10B981' },
                { value: '0', label: language === 'vi' ? 'Lỗi (Failed)' : 'Failed', color: '#64748B' },
                { value: '80.6%', label: language === 'vi' ? 'Overall Coverage' : 'Overall Coverage', color: '#8B5CF6' },
              ].map((m, i) => (
                <div key={i} className="p-5 bg-white/90 border border-slate-200/80 rounded-2xl shadow-xs text-center">
                  <div className="text-2xl font-black font-mono mb-1" style={{ color: m.color }}>{m.value}</div>
                  <div className="text-xs text-[#64748B] font-medium leading-tight">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Test Breakdown Grid */}
            <div className="p-6 bg-white/90 border border-slate-200/80 rounded-2xl shadow-xs mb-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-4">
                {language === 'vi' ? 'Phân bổ Test Cases theo Phân hệ & Code Coverage' : 'Test Case Distribution & Code Coverage'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  {
                    name: language === 'vi' ? 'Users Service (Auth & Profile)' : 'Users Service (Auth & Profile)',
                    tests: '21/21 PASS',
                    color: '#8B5CF6',
                    desc: language === 'vi' ? 'Đăng ký Bcrypt, trùng Email/StudentID, JWT Login, Soft Delete Guard | Coverage: 98.98%' : 'Bcrypt registration, Email/StudentID conflict, JWT Login, Soft Delete Guard | Coverage: 98.98%',
                  },
                  {
                    name: language === 'vi' ? 'Books Service (Catalog & Search)' : 'Books Service (Catalog & Search)',
                    tests: '16/16 PASS',
                    color: '#06B6D4',
                    desc: language === 'vi' ? 'Find-or-Create Author/NXB/Category, ISBN 409 Conflict, ILike Search, Xóa mềm | Coverage: 84.15%' : 'Find-or-Create Author/Publisher/Category, ISBN 409 Conflict, ILike Search, Soft Delete | Coverage: 84.15%',
                  },
                  {
                    name: language === 'vi' ? 'Loans Service (Transactions & Rules)' : 'Loans Service (Transactions & Rules)',
                    tests: '28/28 PASS',
                    color: '#10B981',
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
                  <div key={idx} className="p-4 bg-slate-50/80 border border-slate-200/80 rounded-xl flex flex-col justify-between gap-2 shadow-2xs">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-[#0B0E17] truncate">{cat.name}</span>
                      <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-lg shrink-0"
                        style={{ background: `${cat.color}15`, color: cat.color }}>
                        {cat.tests}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#475569] leading-relaxed">{cat.desc}</p>
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
                <div key={i} className="p-5 bg-white/90 border border-slate-200/80 rounded-2xl shadow-xs">
                  <div className="flex items-center gap-2 mb-2 text-emerald-700">
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <span className="text-xs font-bold text-[#0B0E17]">{v.title}</span>
                  </div>
                  <p className="text-xs text-[#475569] leading-relaxed">{v.detail}</p>
                </div>
              ))}
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
                  <h3 className="text-base font-bold mb-4 text-[#5E6AD2]">{c.title}</h3>
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
                <span key={i} className="text-xs px-3 py-1.5 border border-slate-200/80 bg-white text-[#334155] font-mono rounded-lg font-medium shadow-2xs">{tag}</span>
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

export default LibraryManagementPage;
