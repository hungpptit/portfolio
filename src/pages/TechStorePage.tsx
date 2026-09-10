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
  Shield,
  Globe,
  Database,
  Smartphone,
  CreditCard,
  Lock,
  RefreshCw,
  Cpu,
  GitBranch,
  LayoutDashboard,
  Package,
  Copy,
  Maximize2,
  Zap,
  MessageSquare,
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { TECH_STORE_DETAIL } from '../data/projects/techStore.data';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from '../components/LanguageToggle';
import { UI_TRANSLATIONS } from '../data/translations';
import { ProjectShowcaseGallery } from '../components/ProjectShowcaseGallery';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const TechStorePage: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('overview');

  const detail = TECH_STORE_DETAIL[language];
  const project = PROJECTS[language].find(p => p.id === 'tech-store-ecosystem');
  const t = UI_TRANSLATIONS[language];

  useDocumentTitle(project ? project.title : 'Tech Store Android & Web');

  const TOC_SECTIONS = [
    { id: 'overview', label: language === 'vi' ? 'Tổng quan & Hiệu quả' : 'Overview & Impact' },
    { id: 'showcase', label: language === 'vi' ? 'Khung Demo Sản phẩm (PC & Mobile)' : 'Interactive Device Showcase' },
    { id: 'context', label: language === 'vi' ? 'Bối cảnh & Đặt vấn đề' : 'Context & Problem Statement' },
    { id: 'scope', label: language === 'vi' ? 'Mục tiêu & Phạm vi dự án' : 'Objectives & Project Scope' },
    { id: 'ownership', label: language === 'vi' ? 'Trách nhiệm kỹ thuật cá nhân' : 'My Engineering Ownership' },
    { id: 'architecture', label: language === 'vi' ? 'Kiến trúc Hệ thống Tổng thể' : 'System Architecture' },
    { id: 'reservation-flow', label: language === 'vi' ? 'Sơ đồ Khóa Kho & Thanh toán' : 'Stock Locking & Payment Flow' },
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

          <div className="flex items-center gap-3">
            <LanguageToggle />
            <a href={detail.githubUrl} target="_blank" rel="noopener noreferrer"
              className="btn-linear-primary text-xs py-2 px-3.5 shadow-xs">
              <Smartphone className="w-3.5 h-3.5 mr-1" /> Mobile App <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </a>
            <a href={detail.githubAdminUrl} target="_blank" rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 border border-slate-200 bg-white text-[#334155] text-xs font-bold hover:border-[#5E6AD2] hover:text-[#5E6AD2] transition-all tracking-wider rounded-xl shadow-xs">
              <Globe className="w-3.5 h-3.5" /> Admin Web <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-[1500px] mx-auto px-6 flex gap-0">
        {/* Left Sticky Sidebar */}
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
                
                {/* Left Column: Authentic Light Theme Web Admin & Mobile Ecosystem Mockup */}
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
                          <span className="truncate">http://admin.techstore.vn</span>
                        </div>
                        <Copy className="w-2.5 h-2.5 text-slate-400 shrink-0 opacity-60" />
                      </div>

                      {/* Right Tags */}
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[9px] font-bold text-sky-400 bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-400/20">
                          ERP &amp; ANDROID SYNC
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
                        <Package className="w-3.5 h-3.5" />
                        <span>Products</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400 hover:text-slate-600">
                        <Shield className="w-3.5 h-3.5" />
                        <span>Stock Ledger</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400 hover:text-slate-600">
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Support</span>
                      </div>
                    </div>

                    {/* App Dashboard Canvas */}
                    <div className="p-4 space-y-3 bg-[#F8FAFC]">
                      {/* Top KPI Stat Cards (4 in a row) */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {/* GMV */}
                        <div className="bg-white border border-slate-200/90 rounded-xl p-2.5 shadow-2xs flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                            <Zap className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-[9px] uppercase tracking-wider font-bold text-sky-600 font-mono">TODAY GMV</p>
                            <p className="text-base font-black text-slate-900 leading-tight">$3,450</p>
                          </div>
                        </div>

                        {/* Flash Sale Stock */}
                        <div className="bg-white border border-slate-200/90 rounded-xl p-2.5 shadow-2xs flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                            <Lock className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-[9px] uppercase tracking-wider font-bold text-amber-600 font-mono">STOCK LOCK</p>
                            <p className="text-base font-black text-slate-900 leading-tight">1 Left</p>
                          </div>
                        </div>

                        {/* ACID Safe */}
                        <div className="bg-white border border-slate-200/90 rounded-xl p-2.5 shadow-2xs flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                            <Shield className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-[9px] uppercase tracking-wider font-bold text-emerald-600 font-mono">LOCK TTL</p>
                            <p className="text-base font-black text-slate-900 leading-tight">04:59</p>
                          </div>
                        </div>

                        {/* Stripe Vault */}
                        <div className="bg-white border border-slate-200/90 rounded-xl p-2.5 shadow-2xs flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 text-[#5E6AD2] flex items-center justify-center shrink-0">
                            <CreditCard className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-[9px] uppercase tracking-wider font-bold text-[#5E6AD2] font-mono">STRIPE</p>
                            <p className="text-base font-black text-slate-900 leading-tight">PCI-DSS</p>
                          </div>
                        </div>
                      </div>

                      {/* Split Live Stock & Android Event View */}
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-stretch">
                        {/* Left: Live Stock Reservation */}
                        <div className="sm:col-span-7 bg-white border border-slate-200/90 rounded-xl p-3 shadow-2xs flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between">
                              <h4 className="text-xs font-bold text-slate-900">Flash Sale Stock Reservation</h4>
                              <span className="text-[9px] font-mono text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                                0 Oversell
                              </span>
                            </div>
                            <p className="text-[10px] text-slate-400">Pessimistic ACID lock prevents race conditions</p>
                          </div>

                          <div className="p-2.5 bg-amber-50/70 border border-amber-200/80 rounded-lg flex items-center justify-between mt-2">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 rounded-md bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800">
                                <Lock className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <p className="text-[11px] font-bold text-amber-950">MacBook Pro M3 14"</p>
                                <p className="text-[9px] text-amber-700 font-mono">Cron Reconciler: Sweeps every 60s</p>
                              </div>
                            </div>
                            <span className="px-2 py-0.5 bg-white text-amber-800 font-mono text-[9px] font-bold rounded border border-amber-300 shadow-2xs">
                              HOLDING 5m
                            </span>
                          </div>
                        </div>

                        {/* Right: Omnichannel & Android App Sync */}
                        <div className="sm:col-span-5 bg-white border border-slate-200/90 rounded-xl p-3 shadow-2xs flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="text-xs font-bold text-slate-900">Mobile Client Sync</h4>
                              <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 font-mono">
                                REALTIME
                              </span>
                            </div>
                            <p className="text-[10px] text-slate-400">FCM Push &amp; Firestore Listener</p>
                          </div>

                          <div className="p-2 bg-indigo-50/60 border border-indigo-100 rounded-lg flex items-center gap-2 mt-2">
                            <div className="w-8 h-8 bg-[#5E6AD2] rounded-lg flex items-center justify-center text-white shrink-0 shadow-2xs">
                              <Smartphone className="w-4 h-4" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-[11px] font-bold text-indigo-950 truncate">Android Native (Java 11)</p>
                              <p className="text-[9px] text-indigo-700 truncate font-mono">FCM Push: Order #4092 Paid</p>
                              <p className="text-[9px] font-mono text-emerald-600 font-semibold mt-0.5">Latency &lt; 100ms</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Engineering Status Strip */}
                    <div className="bg-slate-50 px-3.5 py-2 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-slate-500 font-medium flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Node.js 20 · Firestore ACID · Stripe SDK Vault
                      </span>
                      <span className="text-emerald-700 font-bold">57/57 Tests PASS (100%)</span>
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
                        RETAIL E-COMMERCE &amp; CLOUD BACKEND ECOSYSTEM
                      </span>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-3xl md:text-4xl font-black text-[#0B0E17] tracking-tight mb-2 leading-tight">
                      Tech Store Android &amp; Web Ecosystem
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
                        'Android Native (Java 11)',
                        'Node.js 20 & Express',
                        'React 18 & TypeScript',
                        'Google Cloud Firestore',
                        'Stripe Payment SDK',
                        'Firebase Auth & FCM',
                        'Ant Design 5',
                        'Jest & JUnit 4',
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
                        onClick={() => scrollTo('concurrency')}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#5E6AD2]/10 hover:bg-[#5E6AD2]/20 text-[#5E6AD2] border border-[#5E6AD2]/30 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-2xs cursor-pointer"
                      >
                        <Lock className="w-4 h-4" />
                        {language === 'vi' ? 'Khóa Tồn Kho & Stripe' : 'Inventory Lock & Stripe'}
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
                      ? 'Hệ sinh thái Bán lẻ Công nghệ đa nền tảng kết hợp ứng dụng Native Android (Java 11 MVVM) cho khách hàng, Web Admin (React 18) cho quản trị doanh nghiệp và Micro-Backend Node.js 20. Hệ thống giải quyết trọn vẹn bài toán khóa kho bi quan chống bán vượt (Overselling) trong đợt giảm giá Flash Sale, đường ống thanh toán thẻ quốc tế Stripe bảo mật chuẩn PCI-DSS không lưu số thẻ thô, và trung tâm CSKH đa kênh đồng bộ thời gian thực dưới 100ms.'
                      : 'Multi-platform Retail E-Commerce Ecosystem combining Native Android (Java 11 MVVM) for consumers, React 18 Web Admin for ERP operators, and a dedicated Node.js 20 Micro-Backend. Resolves flash-sale overselling through pessimistic stock reservations, guarantees PCI-DSS compliant credit card checkout via Stripe Vault without raw card exposure, and synchronizes omnichannel customer support messages in sub-100ms.'}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#64748B] font-mono">
                  <span>Architecture: Hybrid Micro-Backend</span>
                  <span className="text-emerald-700 font-bold">57/57 Tests PASS</span>
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
                      <span><strong>{language === 'vi' ? 'Khóa kho bi quan (TTL 5m)' : 'Pessimistic Stock Reservation'}</strong>: Firestore ACID Transaction + Cron Worker giải phóng 60s.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span><strong>{language === 'vi' ? 'Cổng thanh toán Stripe PCI-DSS' : 'Stripe PCI-DSS Vault'}</strong>: Mã hóa Client Tokenization, hoàn tất đơn nguyên tử WriteBatch.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span><strong>{language === 'vi' ? 'Triệt tiêu N+1 Query' : 'Eliminate N+1 Queries'}</strong>: In-Memory Lookup Caching (<code className="text-[#5E6AD2]">userCache</code>) giảm 50%+ chi phí đọc.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span><strong>{language === 'vi' ? 'CSKH Real-time & Push FCM' : 'Real-time Chat & Push FCM'}</strong>: Firestore onSnapshot &lt;100ms kết hợp đánh thức thiết bị ngầm.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span><strong>{language === 'vi' ? 'Kiểm thử tự động 3 tầng' : '3-Tier Test Automation'}</strong>: Đạt 57/57 Test Cases (Node Runner + Android JUnit + Jest 30).</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-emerald-800 font-mono font-semibold">
                  {language === 'vi' ? 'Đạt 57/57 Test Cases (100% PASS)' : 'Verified: 57/57 Automated Tests PASS'}
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
                      {language === 'vi' ? 'Thách thức: Tranh chấp bán vượt kho (Overselling) trong Flash Sale' : 'Challenge: Flash-Sale Overselling Race Conditions'}
                    </strong>
                    {language === 'vi'
                      ? 'Hàng trăm khách cùng bấm mua sản phẩm số lượng còn 1. Nếu kiểm tra kho không atomic sẽ bán trùng đơn, trong khi khách giữ giỏ hàng rồi bỏ đi sẽ làm giam kho vô thời hạn.'
                      : 'Hundreds of buyers contending for the final stock unit. Non-atomic inventory checks lead to overselling, while abandoned carts lock inventory indefinitely.'}
                  </p>
                  <p className="text-xs text-[#334155] leading-relaxed">
                    <strong className="text-emerald-900 block mb-1">
                      {language === 'vi' ? 'Giải pháp: Khóa bi quan Firestore + Cron Worker Reconciler' : 'Solution: Pessimistic Reservation + Auto Reconciler'}
                    </strong>
                    {language === 'vi'
                      ? 'Bọc logic trừ kho tạm thời vào Firestore Transaction với TTL 5 phút. Cron Worker chạy ngầm mỗi 60s tự động quét và hoàn trả số lượng cho các đơn quá hạn mà chưa thanh toán.'
                      : 'Guarded stock deductions inside Firestore Transactions with a 5-min TTL. A 60-second background Cron worker scans and reconciles expired reservations back to stock.'}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-amber-800 font-mono">
                  <span>Zero Overselling</span>
                  <span className="font-bold">60s Auto Reconciliation</span>
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
                      ? 'Bao gồm sơ đồ luồng dữ liệu 3 tầng, quy trình thanh toán Stripe Vault, lược đồ NoSQL và kết quả 57/57 tests.'
                      : 'Comprehensive 3-tier architecture flows, Stripe Vault payment pipeline, NoSQL schema, and test suites.'}
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
                  onClick={() => scrollTo('concurrency')}
                  className="px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer"
                >
                  {language === 'vi' ? '2. Khóa Kho & Concurrency ↓' : '2. Concurrency ↓'}
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

          {/* Section: Interactive Device Mockup Showcase */}
          <section id="showcase" className="space-y-6">
            <ProjectShowcaseGallery
              projectId="tech-store"
              defaultTab="dual"
              availableTabs={['dual', 'desktop', 'mobile', 'terminal']}
              desktopTitle={language === 'vi' ? 'Cổng Quản Trị Doanh Nghiệp (React 18 Admin ERP)' : 'Enterprise Admin Web Portal (React 18)'}
              mobileTitle={language === 'vi' ? 'Ứng Dụng Khách Hàng (Native Android Java 11)' : 'Native Android Customer App (Java 11)'}
              desktopUrl="http://localhost:5173"
              themeColor="#5E6AD2"
              terminalCommand="npm test -- --coverage --runInBand"
            />
          </section>

          {/* Section 2: Context & Problem Statement */}
          <section id="context" className="space-y-6">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-[#F59E0B]" />
              <h2 className="text-2xl font-bold text-[#0B0E17]">
                {language === 'vi' ? 'Bối cảnh & Đặt vấn đề' : 'Context & Problem Statement'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: language === 'vi' ? 'Tranh chấp kho hàng trong Flash Sale' : 'Flash Sale Concurrency Bottlenecks',
                  desc: language === 'vi'
                    ? 'Khi hàng trăm người dùng cùng bấm thanh toán 1 sản phẩm có tồn kho giới hạn, thiếu cơ chế khóa kho tức thời dẫn đến bán vượt tồn kho (Overselling), gây đứt gãy trải nghiệm và khiếu nại bồi thường.'
                    : 'When hundreds of concurrent shoppers checkout the same limited item, the lack of atomic locking causes severe overselling, inventory discrepancies, and severe brand damage.',
                  icon: <Zap className="w-5 h-5 text-[#EF4444]" />,
                },
                {
                  title: language === 'vi' ? 'Nguy cơ bảo mật khi lưu trữ thẻ thô' : 'PCI-DSS Compliance & Card Theft Risks',
                  desc: language === 'vi'
                    ? 'Việc ứng dụng tự ý lưu trữ hoặc để số thẻ tín dụng (PAN), mã CVV đi qua server ứng dụng vi phạm tiêu chuẩn PCI-DSS và tạo lỗ hổng bảo mật tài chính nguy hiểm.'
                    : 'Transmitting or storing raw Primary Account Numbers (PAN) and CVV codes on internal app servers violates international PCI-DSS compliance and risks catastrophic leaks.',
                  icon: <Shield className="w-5 h-5 text-[#F59E0B]" />,
                },
                {
                  title: language === 'vi' ? 'Gián đoạn tư vấn CSKH khi đóng ứng dụng' : 'Dropped Omnichannel Inquiries',
                  desc: language === 'vi'
                    ? 'Khi khách hàng tắt ứng dụng di động, các phản hồi từ quản trị viên Web Admin không đến được người dùng kịp thời, làm giảm tỷ lệ chốt đơn và mất khách hàng tiềm năng.'
                    : 'When users close their mobile apps, admin responses on web dashboards are missed, stalling sales conversions and leaving high-intent customers unattended.',
                  icon: <MessageSquare className="w-5 h-5 text-[#5E6AD2]" />,
                },
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-white/90 border border-slate-200/80 hover:border-[#5E6AD2]/50 hover:shadow-md transition-all rounded-2xl flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="mb-3">{item.icon}</div>
                    <h3 className="text-base font-bold text-[#0B0E17] mb-2">{item.title}</h3>
                    <p className="text-xs text-[#475569] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Objectives & Scope */}
          <section id="scope" className="space-y-6">
            <div className="flex items-center gap-3">
              <Target className="w-5 h-5 text-[#10B981]" />
              <h2 className="text-2xl font-bold text-[#0B0E17]">
                {language === 'vi' ? 'Mục tiêu & Phạm vi dự án' : 'Objectives & Project Scope'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white/90 border border-slate-200/80 rounded-2xl shadow-xs">
                <div className="flex items-center gap-2 mb-3 text-[#5E6AD2]">
                  <Smartphone className="w-5 h-5" />
                  <h3 className="font-bold text-sm uppercase tracking-wider">
                    {language === 'vi' ? '1. Ứng dụng Di động Khách hàng (Android Client)' : '1. Customer Mobile Client (Android Native)'}
                  </h3>
                </div>
                <ul className="space-y-2.5 text-xs text-[#334155]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#5E6AD2] font-bold">•</span>
                    <span><strong>Kiến trúc MVVM & Material Design 3:</strong> Trải nghiệm mua sắm mượt mà 60fps, danh mục phân cấp, tìm kiếm tức thì theo từ khóa.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#5E6AD2] font-bold">•</span>
                    <span><strong>Thanh toán thẻ quốc tế Stripe SDK:</strong> Thu thập thông tin thẻ trực tiếp tại Client, đổi lấy Token một lần an toàn tuyệt đối.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#5E6AD2] font-bold">•</span>
                    <span><strong>Địa chính Việt Nam 3 cấp:</strong> Tích hợp Open API tra cứu Tỉnh/Thành ➔ Quận/Huyện ➔ Phường/Xã động.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#5E6AD2] font-bold">•</span>
                    <span><strong>Chat CSKH Real-time & Push FCM:</strong> Đồng bộ tin nhắn Firestore tức thì, hiển thị thông báo đẩy khi có tin mới từ Admin.</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-white/90 border border-slate-200/80 rounded-2xl shadow-xs">
                <div className="flex items-center gap-2 mb-3 text-[#8B5CF6]">
                  <Server className="w-5 h-5" />
                  <h3 className="font-bold text-sm uppercase tracking-wider">
                    {language === 'vi' ? '2. Bảng Quản trị Web & Micro-Backend' : '2. Web Admin ERP & Micro-Backend Service'}
                  </h3>
                </div>
                <ul className="space-y-2.5 text-xs text-[#334155]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B5CF6] font-bold">•</span>
                    <span><strong>Micro-Backend Node.js/TypeScript:</strong> API chuyên trách tạo Stripe Customer Vault, Payment Intent và quản lý Secret Key.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B5CF6] font-bold">•</span>
                    <span><strong>Cron Worker giải phóng kho:</strong> Quét định kỳ mỗi 60 giây, hoàn trả hàng về kho với các đơn giữ chỗ quá hạn 5 phút.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B5CF6] font-bold">•</span>
                    <span><strong>Sổ nhật ký tồn kho (Stock Movement Ledger):</strong> Ghi vết toàn diện lịch sử xuất/nhập kho phục vụ kiểm toán tài sản.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B5CF6] font-bold">•</span>
                    <span><strong>State Machine Đơn hàng:</strong> Tự động kích hoạt luồng thông báo FCM khi đơn hàng chuyển từ Packing ➔ Delivered.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: Engineering Ownership */}
          <section id="ownership" className="space-y-6">
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-[#5E6AD2]" />
              <h2 className="text-2xl font-bold text-[#0B0E17]">
                {language === 'vi' ? 'Trách nhiệm kỹ thuật cá nhân' : 'My Engineering Ownership'}
              </h2>
            </div>

            <div className="p-6 bg-white/90 border border-slate-200/80 rounded-2xl shadow-xs space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="p-2 bg-[#5E6AD2]/10 rounded-xl border border-[#5E6AD2]/20 text-[#5E6AD2]">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#0B0E17]">
                    {language === 'vi' ? 'Trưởng nhóm Kỹ thuật & Thiết kế Hệ thống (Technical Lead & System Designer)' : 'Technical Lead & System Designer'}
                  </h3>
                  <p className="text-xs text-[#64748B]">
                    {language === 'vi' ? 'Trực tiếp thiết kế kiến trúc toàn hệ thống, CSDL NoSQL, Pipeline thanh toán và Chiến lược kiểm thử tự động' : 'Directly engineered end-to-end architecture, NoSQL modeling, payment security pipeline, and automated test suites'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#334155]">
                <div className="space-y-2">
                  <p className="font-bold text-[#5E6AD2] flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" /> {language === 'vi' ? 'Kiến trúc & Tối ưu Backend' : 'Backend & Concurrency Engineering'}
                  </p>
                  <ul className="space-y-1.5 pl-5 list-disc text-[#475569]">
                    {language === 'vi' ? (
                      <>
                        <li>Thiết kế mô hình CSDL NoSQL Firestore gồm 14 collections và sub-collections.</li>
                        <li>Xây dựng thuật toán <strong className="text-[#0B0E17]">Pessimistic Stock Reservation</strong> kèm <strong className="text-[#0B0E17]">TTL 5 phút</strong> và Cron Reconciliation Worker giải phóng kho tự động mỗi 60s.</li>
                        <li>Triệt tiêu bài toán N+1 Query trên Firestore bằng cơ chế <strong className="text-[#0B0E17]">In-Memory Lookup Caching (<code className="text-[#5E6AD2]">userCache</code>)</strong>, tiết kiệm 50%+ số lượng đọc.</li>
                        <li>Phát triển RESTful Backend Service hoàn chỉnh bằng Node.js 20, Express 4.21 và TypeScript 5.</li>
                      </>
                    ) : (
                      <>
                        <li>Designed Cloud Firestore NoSQL schema comprising 14 collections and sub-collections.</li>
                        <li>Engineered <strong className="text-[#0B0E17]">Pessimistic Stock Reservation</strong> with a <strong className="text-[#0B0E17]">5-minute TTL</strong> and 60-second automated Cron reconciliation worker.</li>
                        <li>Eliminated Firestore N+1 queries via <strong className="text-[#0B0E17]">In-Memory Lookup Caching (<code className="text-[#5E6AD2]">userCache</code>)</strong>, reducing read operations by 50%+.</li>
                        <li>Built end-to-end RESTful Backend Service using Node.js 20, Express 4.21, and TypeScript 5.</li>
                      </>
                    )}
                  </ul>
                </div>

                <div className="space-y-2">
                  <p className="font-bold text-emerald-700 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" /> {language === 'vi' ? 'Bảo mật Thanh toán & Kiểm thử QA' : 'Payment Security & QA Testing'}
                  </p>
                  <ul className="space-y-1.5 pl-5 list-disc text-[#475569]">
                    {language === 'vi' ? (
                      <>
                        <li>Triển khai Pipeline thanh toán quốc tế Stripe tuân thủ nghiêm ngặt chuẩn <strong className="text-[#0B0E17]">PCI-DSS Level 1</strong> (Zero Card Data Exposure).</li>
                        <li>Thiết kế cơ chế hoàn tất đơn hàng nguyên tử 4 bảng bằng <strong className="text-[#0B0E17]">Firebase WriteBatch</strong> (Order + Invoice + PaymentLog + Cart cleanup).</li>
                        <li>Tích hợp luồng thông báo sự kiện tự động <strong className="text-[#0B0E17]">Firebase Cloud Messaging (FCM)</strong>.</li>
                        <li>Viết toàn bộ <strong className="text-emerald-700">57/57 Test Cases tự động</strong> (Jest 30, JUnit 4 JVM, Python Benchmark) đạt <strong className="text-emerald-700">100% Pass Rate</strong>.</li>
                      </>
                    ) : (
                      <>
                        <li>Implemented Stripe international payment pipeline adhering strictly to <strong className="text-[#0B0E17]">PCI-DSS Level 1</strong> (Zero Card Data Exposure).</li>
                        <li>Architected atomic 4-document order finalization using <strong className="text-[#0B0E17]">Firebase WriteBatch</strong> (Order + Invoice + PaymentLog + Cart cleanup).</li>
                        <li>Integrated automated event-driven notification triggers via <strong className="text-[#0B0E17]">Firebase Cloud Messaging (FCM)</strong>.</li>
                        <li>Authored all <strong className="text-emerald-700">57/57 automated test cases</strong> (Jest 30, JUnit 4 JVM, Python Benchmark) achieving a <strong className="text-emerald-700">100% Pass Rate</strong>.</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: System Architecture */}
          <section id="architecture" className="space-y-6">
            <div className="flex items-center gap-3">
              <Layers className="w-5 h-5 text-[#5E6AD2]" />
              <h2 className="text-2xl font-bold text-[#0B0E17]">
                {language === 'vi' ? 'Kiến trúc Hệ thống Tổng thể' : 'System Architecture'}
              </h2>
            </div>

            {/* Architecture Box */}
            <div className="p-6 bg-white/90 border border-slate-200/80 rounded-2xl shadow-xs">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-slate-50/80 border border-slate-200/80 rounded-xl shadow-2xs">
                  <div className="flex items-center gap-2 mb-2 text-[#5E6AD2]">
                    <Smartphone className="w-4 h-4" />
                    <span className="font-bold text-xs uppercase tracking-wider">Mobile Client (Java 11)</span>
                  </div>
                  <p className="text-xs text-[#475569]">
                    Clean Architecture &amp; MVVM, Material 3, RecyclerView, Glide CDN Caching, Stripe Android SDK, Vietnam Provinces API.
                  </p>
                </div>

                <div className="p-4 bg-slate-50/80 border border-slate-200/80 rounded-xl shadow-2xs">
                  <div className="flex items-center gap-2 mb-2 text-amber-700">
                    <Server className="w-4 h-4" />
                    <span className="font-bold text-xs uppercase tracking-wider">Node.js Micro-Backend</span>
                  </div>
                  <p className="text-xs text-[#475569]">
                    {language === 'vi'
                      ? 'Stripe Customer Vault, Payment Intent API, Cron Worker giải phóng kho (60s), In-Memory Cache userCache, DTO Sanitizer.'
                      : 'Stripe Customer Vault, Payment Intent API, 60s Cron Stock Release Worker, In-Memory userCache, DTO Sanitizer.'}
                  </p>
                </div>

                <div className="p-4 bg-slate-50/80 border border-slate-200/80 rounded-xl shadow-2xs">
                  <div className="flex items-center gap-2 mb-2 text-emerald-700">
                    <Globe className="w-4 h-4" />
                    <span className="font-bold text-xs uppercase tracking-wider">Web Admin Dashboard</span>
                  </div>
                  <p className="text-xs text-[#475569]">
                    React 18 + Vite 5 + Ant Design 5, Sổ nhật ký biến động kho (Stock Ledger), CSKH Real-time Inbox, Recharts Analytics.
                  </p>
                </div>
              </div>

              {/* Data Flow Diagram Card */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                <p className="text-xs font-mono text-[#5E6AD2] font-bold uppercase tracking-wider">
                  ✦ CLOUD INFRASTRUCTURE &amp; EVENT-DRIVEN BUS:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                  <div className="p-3 bg-white border border-slate-200 rounded-lg shadow-2xs">
                    <Database className="w-4 h-4 mx-auto mb-1 text-[#F59E0B]" />
                    <span className="font-bold text-[#0B0E17]">Cloud Firestore</span>
                    <p className="text-[10px] text-[#64748B]">ACID Transactions &amp; Listeners</p>
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded-lg shadow-2xs">
                    <CreditCard className="w-4 h-4 mx-auto mb-1 text-[#5E6AD2]" />
                    <span className="font-bold text-[#0B0E17]">Stripe Gateway</span>
                    <p className="text-[10px] text-[#64748B]">PCI-DSS Level 1 Vault</p>
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded-lg shadow-2xs">
                    <Zap className="w-4 h-4 mx-auto mb-1 text-[#EC4899]" />
                    <span className="font-bold text-[#0B0E17]">Firebase FCM</span>
                    <p className="text-[10px] text-[#64748B]">Event-Driven Push Notifications</p>
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded-lg shadow-2xs">
                    <Globe className="w-4 h-4 mx-auto mb-1 text-[#06B6D4]" />
                    <span className="font-bold text-[#0B0E17]">Cloudinary CDN</span>
                    <p className="text-[10px] text-[#64748B]">Media &amp; Asset Distribution</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Stock Reservation & Payment Lifecycle Diagram */}
          <section id="reservation-flow" className="space-y-6">
            <div className="flex items-center gap-3">
              <RefreshCw className="w-5 h-5 text-emerald-600" />
              <div>
                <h2 className="text-2xl font-bold text-[#0B0E17]">
                  {language === 'vi' ? 'Sơ đồ Quy trình Khóa Tồn kho & Thanh toán' : 'Stock Reservation & Payment Flow'}
                </h2>
                <p className="text-xs text-[#64748B] mt-0.5">
                  {language === 'vi' ? 'Quy trình Khóa tồn kho bi quan chống Overselling + Pipeline Thanh toán Stripe 2 giai đoạn' : 'Pessimistic Stock Reservation + 2-Phase PCI-DSS Stripe Payment Flow'}
                </p>
              </div>
            </div>

            {/* Interactive SVG Flow Diagram */}
            <div className="p-6 bg-white/90 border border-slate-200/80 rounded-2xl shadow-xs overflow-x-auto">
              <svg viewBox="0 0 920 440" className="w-full min-w-[800px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="blueCard" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#EEF2FF" stopOpacity="1" />
                    <stop offset="100%" stopColor="#E0E7FF" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="yellowCard" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FEF3C7" stopOpacity="1" />
                    <stop offset="100%" stopColor="#FDE68A" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="greenCard" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ECFDF5" stopOpacity="1" />
                    <stop offset="100%" stopColor="#D1FAE5" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="redCard" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFF1F2" stopOpacity="1" />
                    <stop offset="100%" stopColor="#FFE4E6" stopOpacity="1" />
                  </linearGradient>
                  <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                    <polygon points="0 0, 8 3, 0 6" fill="#64748B" />
                  </marker>
                  <marker id="arrowGreen" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                    <polygon points="0 0, 8 3, 0 6" fill="#059669" />
                  </marker>
                  <marker id="arrowRed" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                    <polygon points="0 0, 8 3, 0 6" fill="#E11D48" />
                  </marker>
                </defs>

                {/* Node 1: Cart Checkout */}
                <g transform="translate(30, 40)">
                  <rect width="180" height="90" rx="12" fill="url(#blueCard)" stroke="#5E6AD2" strokeWidth="1.5" />
                  <text x="90" y="30" textAnchor="middle" fill="#5E6AD2" fontSize="11" fontWeight="bold" letterSpacing="0.05em">BƯỚC 1: CHECKOUT</text>
                  <text x="90" y="52" textAnchor="middle" fill="#0B0E17" fontSize="13" fontWeight="bold">Khách đặt mua</text>
                  <text x="90" y="70" textAnchor="middle" fill="#475569" fontSize="10">Android Client gửi yêu cầu</text>
                </g>

                {/* Arrow 1 -> 2 */}
                <line x1="210" y1="85" x2="265" y2="85" stroke="#64748B" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                <text x="238" y="78" textAnchor="middle" fill="#64748B" fontSize="9">ACID Tx</text>

                {/* Node 2: Pessimistic Stock Reservation */}
                <g transform="translate(270, 40)">
                  <rect width="200" height="90" rx="12" fill="url(#yellowCard)" stroke="#F59E0B" strokeWidth="1.5" />
                  <text x="100" y="30" textAnchor="middle" fill="#D97706" fontSize="11" fontWeight="bold" letterSpacing="0.05em">BƯỚC 2: KHÓA TỒN KHO</text>
                  <text x="100" y="52" textAnchor="middle" fill="#0B0E17" fontSize="13" fontWeight="bold">Tạo Reservation</text>
                  <text x="100" y="70" textAnchor="middle" fill="#78350F" fontSize="10">Trừ stockQuantity · TTL 5 Phút</text>
                </g>

                {/* Arrow 2 -> 3 */}
                <line x1="470" y1="85" x2="525" y2="85" stroke="#64748B" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                <text x="498" y="78" textAnchor="middle" fill="#64748B" fontSize="9">Token tok_</text>

                {/* Node 3: Stripe Payment Intent */}
                <g transform="translate(530, 40)">
                  <rect width="200" height="90" rx="12" fill="#F3E8FF" stroke="#8B5CF6" strokeWidth="1.5" />
                  <text x="100" y="30" textAnchor="middle" fill="#7C3AED" fontSize="11" fontWeight="bold" letterSpacing="0.05em">BƯỚC 3: STRIPE VAULT</text>
                  <text x="100" y="52" textAnchor="middle" fill="#0B0E17" fontSize="13" fontWeight="bold">Xử lý Thanh toán</text>
                  <text x="100" y="70" textAnchor="middle" fill="#5B21B6" fontSize="10">Zero PAN · PCI-DSS Compliant</text>
                </g>

                {/* Arrow 3 -> 4 (Success) */}
                <line x1="730" y1="85" x2="750" y2="85" stroke="#059669" strokeWidth="1.5" />
                <line x1="750" y1="85" x2="750" y2="230" stroke="#059669" strokeWidth="1.5" />
                <line x1="750" y1="230" x2="685" y2="230" stroke="#059669" strokeWidth="1.5" markerEnd="url(#arrowGreen)" />
                <text x="790" y="160" textAnchor="middle" fill="#059669" fontSize="10" fontWeight="bold">Thành công (200)</text>

                {/* Node 4: WriteBatch Finalize */}
                <g transform="translate(480, 185)">
                  <rect width="200" height="95" rx="12" fill="url(#greenCard)" stroke="#059669" strokeWidth="1.5" />
                  <text x="100" y="28" textAnchor="middle" fill="#047857" fontSize="11" fontWeight="bold" letterSpacing="0.05em">HOÀN TẤT ĐƠN HÀNG</text>
                  <text x="100" y="48" textAnchor="middle" fill="#0B0E17" fontSize="13" fontWeight="bold">Firebase WriteBatch</text>
                  <text x="100" y="66" textAnchor="middle" fill="#065F46" fontSize="9">Tạo Order + Hóa đơn + Lịch sử</text>
                  <text x="100" y="80" textAnchor="middle" fill="#065F46" fontSize="9">Xóa Cart + Đổi status 'completed'</text>
                </g>

                {/* Arrow 2 -> Cron Expire (Downward to Error Node) */}
                <line x1="370" y1="130" x2="370" y2="200" stroke="#E11D48" strokeWidth="1.5" markerEnd="url(#arrowRed)" strokeDasharray="4 3" />
                <text x="370" y="170" textAnchor="middle" fill="#E11D48" fontSize="9" fontWeight="bold">Hết hạn &gt;5 Phút / Hủy đơn</text>

                {/* Node 5: Cron Reconciliation / Release */}
                <g transform="translate(270, 205)">
                  <rect width="200" height="95" rx="12" fill="url(#redCard)" stroke="#E11D48" strokeWidth="1.5" />
                  <text x="100" y="28" textAnchor="middle" fill="#BE123C" fontSize="11" fontWeight="bold" letterSpacing="0.05em">GIẢI PHÓNG TỒN KHO</text>
                  <text x="100" y="48" textAnchor="middle" fill="#0B0E17" fontSize="13" fontWeight="bold">Cron Worker (60s)</text>
                  <text x="100" y="66" textAnchor="middle" fill="#881337" fontSize="9">ACID Tx: stockQuantity + reqQty</text>
                  <text x="100" y="80" textAnchor="middle" fill="#881337" fontSize="9">Đổi trạng thái: 'released'</text>
                </g>

                {/* Node 6: State Machine Notification Dispatch */}
                <g transform="translate(480, 320)">
                  <rect width="400" height="85" rx="12" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
                  <text x="200" y="26" textAnchor="middle" fill="#5E6AD2" fontSize="11" fontWeight="bold" letterSpacing="0.05em">EVENT-DRIVEN NOTIFICATION PIPELINE</text>
                  <text x="200" y="46" textAnchor="middle" fill="#0B0E17" fontSize="11">Order FSM: Packing ➔ Picked ➔ In Transit ➔ Delivered ➔ Completed</text>
                  <text x="200" y="66" textAnchor="middle" fill="#64748B" fontSize="10">Backend tự động dispatch Firebase FCM Push Notification đánh thức điện thoại</text>
                </g>

                {/* Arrow 4 -> 6 */}
                <line x1="580" y1="280" x2="580" y2="315" stroke="#64748B" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
              </svg>
            </div>

            {/* Explanatory Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 bg-white/90 border border-slate-200/80 rounded-2xl shadow-xs">
                <div className="flex items-center gap-2 mb-2 text-amber-700">
                  <Lock className="w-4 h-4" />
                  <h3 className="font-bold text-xs uppercase tracking-wider">1. Pessimistic Lock &amp; TTL</h3>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {language === 'vi' ? (
                    <>Bọc việc kiểm tra và trừ tồn kho vào một Firestore Transaction nguyên tử. Tạo bản ghi <code className="text-[#5E6AD2] bg-[#5E6AD2]/10 px-1 py-0.5 rounded">stock_reservations</code> với TTL 5 phút. Khóa ngay khi bắt đầu checkout, triệt tiêu 100% rủi ro Overselling.</>
                  ) : (
                    <>Encapsulates stock check and deduction in an atomic Firestore Transaction. Creates a <code className="text-[#5E6AD2] bg-[#5E6AD2]/10 px-1 py-0.5 rounded">stock_reservations</code> record with 5-minute TTL, eliminating 100% overselling risks.</>
                  )}
                </p>
              </div>

              <div className="p-5 bg-white/90 border border-slate-200/80 rounded-2xl shadow-xs">
                <div className="flex items-center gap-2 mb-2 text-[#5E6AD2]">
                  <CreditCard className="w-4 h-4" />
                  <h3 className="font-bold text-xs uppercase tracking-wider">2. Zero Card Data Exposure</h3>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {language === 'vi' ? (
                    <>Số thẻ và CVV được mã hóa ngay tại thiết bị qua Stripe SDK để lấy token <code className="text-[#5E6AD2] bg-[#5E6AD2]/10 px-1 py-0.5 rounded">tok_...</code>. Backend chỉ lưu trữ mã tham chiếu PaymentMethod trong Vault bảo mật, tuyệt đối không lưu số thẻ thô.</>
                  ) : (
                    <>Raw card PAN and CVV are tokenized directly on-device via Stripe SDK to acquire a single-use <code className="text-[#5E6AD2] bg-[#5E6AD2]/10 px-1 py-0.5 rounded">tok_...</code>. The backend only holds vault PaymentMethod references.</>
                  )}
                </p>
              </div>

              <div className="p-5 bg-white/90 border border-slate-200/80 rounded-2xl shadow-xs">
                <div className="flex items-center gap-2 mb-2 text-emerald-700">
                  <RefreshCw className="w-4 h-4" />
                  <h3 className="font-bold text-xs uppercase tracking-wider">3. Cron Auto-Reconciliation</h3>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {language === 'vi' ? (
                    <>Worker ngầm trên Node.js chạy mỗi 60 giây quét toàn bộ các bản ghi <code className="text-emerald-700 bg-emerald-50 px-1 py-0.5 rounded">pending</code> quá hạn 5 phút. Tự động kích hoạt Transaction hoàn trả số lượng hàng về kho mà không cần người dùng thao tác.</>
                  ) : (
                    <>Background Node.js Cron Worker runs every 60 seconds scanning expired <code className="text-emerald-700 bg-emerald-50 px-1 py-0.5 rounded">pending</code> reservations (&gt;5 mins) to auto-restore inventory via ACID Transactions.</>
                  )}
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Technology Stack */}
          <section id="techstack" className="space-y-6">
            <div className="flex items-center gap-3">
              <Server className="w-5 h-5 text-[#5E6AD2]" />
              <h2 className="text-2xl font-bold text-[#0B0E17]">
                {language === 'vi' ? 'Ngăn xếp công nghệ' : 'Technology Stack'}
              </h2>
            </div>

            <div className="border border-slate-200/80 bg-white rounded-2xl shadow-xs overflow-hidden">
              <div className="divide-y divide-slate-100">
                {detail.techStack.map((item, idx) => (
                  <div key={idx} className="p-4 flex flex-col md:flex-row md:items-start gap-4 hover:bg-slate-50/80 transition-colors">
                    <div className="md:w-56 shrink-0">
                      <span className="text-xs font-mono text-[#5E6AD2] font-bold uppercase tracking-wider block mb-1">{item.layer}</span>
                      <span className="text-sm font-bold text-[#0B0E17]">{item.tech}</span>
                      {item.version && item.version !== '—' && (
                        <span className="inline-block ml-2 px-1.5 py-0.5 bg-slate-100 text-[#64748B] text-[10px] font-mono rounded">
                          {item.version}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#475569] leading-relaxed flex-1">
                      {item.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 8: Testing & Quality Assurance */}
          <section id="testing" className="space-y-6">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-emerald-600" />
              <div>
                <h2 className="text-2xl font-bold text-[#0B0E17]">
                  {language === 'vi' ? 'Kiểm thử & Đảm bảo chất lượng' : 'Testing & Quality Assurance'}
                </h2>
                <p className="text-xs text-[#64748B] mt-0.5">
                  {language === 'vi' ? '57/57 Test Cases (100% PASS Rate) trên toàn bộ Mobile Client, Micro-Backend & Web Admin' : '57/57 Automated Test Cases (100% PASS Rate) across Mobile, Micro-Backend & Web Admin'}
                </p>
              </div>
            </div>

            {/* Test Stats Header */}
            <div className="p-5 bg-white/90 border border-slate-200/80 rounded-2xl shadow-xs flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-700">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-[#64748B] uppercase font-bold">{language === 'vi' ? 'Tổng số bài kiểm thử' : 'Total Automated Tests'}</p>
                  <p className="text-2xl font-bold font-mono text-emerald-700">57 / 57 PASSED (100%)</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-xs font-mono">
                <div className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg">
                  <span className="text-[#64748B]">Web Admin Coverage: </span>
                  <span className="text-emerald-700 font-bold">100% Statements</span>
                </div>
                <div className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg">
                  <span className="text-[#64748B]">Avg API Latency: </span>
                  <span className="text-[#5E6AD2] font-bold">12.56 ms</span>
                </div>
                <div className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg">
                  <span className="text-[#64748B]">Total Test Suites: </span>
                  <span className="text-amber-700 font-bold">7 Suites</span>
                </div>
              </div>
            </div>

            {/* Test Breakdown Tables */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mobile & Micro-Backend Tests */}
              <div className="border border-slate-200/80 bg-white rounded-2xl shadow-xs overflow-hidden">
                <div className="p-3.5 bg-slate-100/80 border-b border-slate-200/80 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#5E6AD2] uppercase tracking-wider flex items-center gap-2">
                    <Smartphone className="w-4 h-4" /> Mobile &amp; Stripe Service (31 Tests)
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded font-bold">100% PASS</span>
                </div>
                <div className="divide-y divide-slate-100 text-xs">
                  <div className="p-3.5 flex justify-between items-center">
                    <div>
                      <p className="font-bold text-[#0B0E17]">Node.js Native Runner <span className="font-mono text-[11px] text-[#64748B] font-normal">(api.test.js)</span></p>
                      <p className="text-[11px] text-[#64748B]">Healthcheck, Stripe Card Validation, PaymentIntent</p>
                    </div>
                    <span className="font-mono text-emerald-700 font-bold">7/7</span>
                  </div>
                  <div className="p-3.5 flex justify-between items-center">
                    <div>
                      <p className="font-bold text-[#0B0E17]">Python Automated Benchmark <span className="font-mono text-[11px] text-[#64748B] font-normal">(test_api.py)</span></p>
                      <p className="text-[11px] text-[#64748B]">20 Requests Benchmark, 404 Route Fallbacks, Error Handlers</p>
                    </div>
                    <span className="font-mono text-emerald-700 font-bold">9/9</span>
                  </div>
                  <div className="p-3.5 flex justify-between items-center">
                    <div>
                      <p className="font-bold text-[#0B0E17]">Android JUnit 4 JVM <span className="font-mono text-[11px] text-[#64748B] font-normal">(testDebugUnitTest)</span></p>
                      <p className="text-[11px] text-[#64748B]">OrderSummary, RatingFormat, StockReservation, AddressModel</p>
                    </div>
                    <span className="font-mono text-emerald-700 font-bold">15/15</span>
                  </div>
                </div>
              </div>

              {/* Web Admin Backend Tests */}
              <div className="border border-slate-200/80 bg-white rounded-2xl shadow-xs overflow-hidden">
                <div className="p-3.5 bg-slate-100/80 border-b border-slate-200/80 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#8B5CF6] uppercase tracking-wider flex items-center gap-2">
                    <Server className="w-4 h-4" /> Web Admin Backend Service (26 Tests)
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded font-bold">100% PASS</span>
                </div>
                <div className="divide-y divide-slate-100 text-xs">
                  <div className="p-3.5 flex justify-between items-center">
                    <div>
                      <p className="font-bold text-[#0B0E17]">Dashboard Controller <span className="font-mono text-[11px] text-[#64748B] font-normal">(dashboard.test.ts)</span></p>
                      <p className="text-[11px] text-[#64748B]">KPIs Aggregations, Low Stock Alerts, Best Seller Ranks</p>
                    </div>
                    <span className="font-mono text-emerald-700 font-bold">5/5</span>
                  </div>
                  <div className="p-3.5 flex justify-between items-center">
                    <div>
                      <p className="font-bold text-[#0B0E17]">Order Controller <span className="font-mono text-[11px] text-[#64748B] font-normal">(order.test.ts)</span></p>
                      <p className="text-[11px] text-[#64748B]">In-Memory userCache, Order Status FSM, Auto-Notifications</p>
                    </div>
                    <span className="font-mono text-emerald-700 font-bold">7/7</span>
                  </div>
                  <div className="p-3.5 flex justify-between items-center">
                    <div>
                      <p className="font-bold text-[#0B0E17]">Product Controller <span className="font-mono text-[11px] text-[#64748B] font-normal">(product.test.ts)</span></p>
                      <p className="text-[11px] text-[#64748B]">Stock Import/Export Audit Ledger, Duplicate ID Guard, Sanitizer</p>
                    </div>
                    <span className="font-mono text-emerald-700 font-bold">12/12</span>
                  </div>
                  <div className="p-3.5 flex justify-between items-center">
                    <div>
                      <p className="font-bold text-[#0B0E17]">Category Controller <span className="font-mono text-[11px] text-[#64748B] font-normal">(category.test.ts)</span></p>
                      <p className="text-[11px] text-[#64748B]">DisplayOrder Sorting, Firestore Timeout Exception Handling</p>
                    </div>
                    <span className="font-mono text-emerald-700 font-bold">2/2</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 9: Engineering Challenges */}
          <section id="challenges" className="space-y-6">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-5 h-5 text-rose-600" />
              <h2 className="text-2xl font-bold text-[#0B0E17]">
                {language === 'vi' ? 'Thách thức kỹ thuật & Giải pháp' : 'Engineering Challenges & Solutions'}
              </h2>
            </div>

            <div className="space-y-4">
              {detail.challenges.map((c, idx) => (
                <div key={idx} className="p-6 bg-white/90 border border-slate-200/80 hover:border-[#5E6AD2]/50 hover:shadow-md transition-all rounded-2xl shadow-xs space-y-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-[#5E6AD2]/15 text-[#5E6AD2] font-bold text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <h3 className="font-bold text-base text-[#0B0E17]">{c.title}</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl">
                      <p className="font-bold text-rose-700 mb-1 uppercase tracking-wider">
                        {language === 'vi' ? '✦ Vấn đề đặt ra:' : '✦ The Problem:'}
                      </p>
                      <p className="text-rose-950 leading-relaxed font-normal">{c.problem}</p>
                    </div>

                    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                      <p className="font-bold text-emerald-700 mb-1 uppercase tracking-wider">
                        {language === 'vi' ? '✦ Giải pháp xử lý:' : '✦ The Solution:'}
                      </p>
                      <p className="text-emerald-950 leading-relaxed font-normal">{c.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Footer Back Button */}
          <div className="pt-10 border-t border-slate-200/80 flex justify-between items-center">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-[#64748B] hover:text-[#5E6AD2] transition-colors text-sm font-semibold tracking-wider uppercase cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" /> {t.detailCommon.backBtn}
            </button>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 text-[#64748B] hover:text-[#5E6AD2] transition-colors text-xs font-mono tracking-wider uppercase cursor-pointer"
            >
              ↑ {language === 'vi' ? 'VỀ ĐẦU TRANG' : 'BACK TO TOP'}
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TechStorePage;
