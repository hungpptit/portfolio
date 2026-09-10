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
  MessageSquare,
  Brain,
  CreditCard,
  Mail,
  Database,
  ArrowDown,
  BookOpen,
  Cpu,
  Headphones,
  Container,
  Network,
  Zap,
  GitBranch,
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { TOEIC_CHATBOT_DETAIL } from '../data/projects/toeicChatbot.data';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from '../components/LanguageToggle';
import { UI_TRANSLATIONS } from '../data/translations';
import { ProjectShowcaseGallery } from '../components/ProjectShowcaseGallery';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const ToeicChatbotPage: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('overview');

  const detail = TOEIC_CHATBOT_DETAIL[language];
  const project = PROJECTS[language].find(p => p.id === 'toeic-ai-microservices')!;
  const t = UI_TRANSLATIONS[language];

  useDocumentTitle(project ? project.title : 'TOEIC AI Microservices');

  const TOC_SECTIONS = [
    { id: 'overview', label: language === 'vi' ? 'Tổng quan & Hiệu quả' : 'Overview & Impact' },
    { id: 'showcase', label: language === 'vi' ? 'Khung Demo Sản phẩm (PC & Mobile)' : 'Interactive Device Showcase' },
    { id: 'context', label: language === 'vi' ? 'Bối cảnh & Đặt vấn đề' : 'Context & Problem Statement' },
    { id: 'scope', label: language === 'vi' ? 'Mục tiêu & Phạm vi dự án' : 'Objectives & Project Scope' },
    { id: 'ownership', label: language === 'vi' ? 'Trách nhiệm kỹ thuật cá nhân' : 'My Engineering Ownership' },
    { id: 'architecture', label: language === 'vi' ? 'Kiến trúc Hệ thống Tổng thể' : 'System Architecture' },
    { id: 'coordination', label: language === 'vi' ? 'Cơ chế Phối hợp & Chịu lỗi Liên dịch vụ' : 'Inter-Service Coordination & Resilience' },
    { id: 'techstack', label: language === 'vi' ? 'Ngăn xếp công nghệ' : 'Technology Stack' },
    { id: 'testing', label: language === 'vi' ? 'Báo cáo Kiểm thử Tự động' : 'Automated Testing Report' },
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
                
                {/* Left Column: Visual AI Chatbot & ML Pipeline Mockup (Light Modern Theme) */}
                <div className="lg:col-span-5 flex flex-col gap-3">
                  <div className="border border-slate-200/90 rounded-2xl overflow-hidden bg-white text-[#0B0E17] shadow-sm">
                    {/* Chatbot Header */}
                    <div className="bg-slate-50 px-4 py-3 border-b border-slate-200/80 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_#10B981]" />
                        <span className="font-mono font-bold text-slate-800">GEMINI 2.5 FLASH · AI TUTOR</span>
                      </div>
                      <span className="font-mono text-cyan-800 font-bold bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">
                        {language === 'vi' ? 'ML INFERENCE: 18ms' : 'ML INFERENCE: 18ms'}
                      </span>
                    </div>

                    {/* Interactive Chat & ML Preview Box */}
                    <div className="p-4 space-y-3 font-sans text-xs">
                      {/* User message */}
                      <div className="flex items-start gap-2.5 justify-end">
                        <div className="bg-[#5E6AD2] text-white p-3 rounded-2xl rounded-tr-xs max-w-[85%] shadow-xs leading-relaxed font-medium">
                          {language === 'vi' 
                            ? 'Giải thích giúp mình câu 105 Part 5 đề ETS 2024 vừa làm với ạ?' 
                            : 'Can you explain Question 105 Part 5 from the test I just took?'}
                        </div>
                      </div>

                      {/* AI Agent Thinking & Internal Smart-Context Call */}
                      <div className="p-2.5 bg-slate-50 border border-slate-200/80 rounded-xl text-[11px] font-mono text-slate-600 flex items-center justify-between">
                        <span className="text-amber-700 flex items-center gap-1.5 font-semibold">
                          <Zap className="w-3.5 h-3.5" />
                          <span>REST /api/v1/internal/smart-context</span>
                        </span>
                        <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">200 OK (3ms)</span>
                      </div>

                      {/* AI Response message */}
                      <div className="flex items-start gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center shrink-0 text-[#5E6AD2] font-bold shadow-2xs">
                          <Brain className="w-4 h-4" />
                        </div>
                        <div className="bg-slate-50/80 text-[#334155] p-3.5 rounded-2xl rounded-tl-xs max-w-[88%] border border-slate-200/90 leading-relaxed space-y-1.5 shadow-2xs">
                          <p className="font-bold text-[#0B0E17]">
                            {language === 'vi' ? 'Câu 105 (Từ loại - Word Form):' : 'Question 105 (Word Form):'}
                          </p>
                          <p className="text-[#334155]">
                            {language === 'vi' 
                              ? 'Chỗ trống đứng sau mạo từ "the" và trước giới từ "of" nên cần một Danh từ → Đáp án là (C) decision.' 
                              : 'The blank follows the article "the" and precedes "of", requiring a Noun → Correct option is (C) decision.'}
                          </p>
                          <div className="pt-1.5 border-t border-slate-200 flex items-center justify-between text-[10px] font-mono text-[#64748B]">
                            <span>GaussianNB ML: Part 5 Acc 64%</span>
                            <span className="text-[#5E6AD2] font-bold">Weak Skill: Word Form</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Microservices Architecture Callout */}
                  <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">
                      {language === 'vi' ? 'Cấu trúc Hệ thống:' : 'Architecture:'}
                    </span>
                    <span className="font-mono font-bold text-[#5E6AD2]">
                      6 Services · Nginx Gateway · 4 DBs · ML Pipeline
                    </span>
                  </div>
                </div>

                {/* Right Column: Title, Role, Tech Stack Pills, and CTAs */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    {/* Category Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-[#5E6AD2] shadow-[0_0_8px_#5E6AD2]" />
                      <span className="text-xs font-bold tracking-wider text-[#5E6AD2] uppercase font-mono">
                        {language === 'vi' ? 'HỆ THỐNG VI DỊCH VỤ · TRÍ TUỆ NHÂN TẠO · HỌC MÁY' : 'MICROSERVICES · AI CHATBOT · MACHINE LEARNING'}
                      </span>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-3xl md:text-4xl font-black text-[#0B0E17] tracking-tight mb-2 leading-tight">
                      TOEIC Learning &amp; AI Chatbot Ecosystem
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
                        'Google Gemini 2.5 Flash API',
                        'Python Flask & scikit-learn',
                        'Node.js & Express Microservices',
                        'Flutter 3 (Mobile Client)',
                        'RabbitMQ Message Broker',
                        'Microsoft SQL Server 2022',
                        'Nginx Reverse Proxy & Gateway',
                        'Docker Compose (9 Containers)',
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
                        onClick={() => scrollTo('coordination')}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#5E6AD2]/10 hover:bg-[#5E6AD2]/20 text-[#5E6AD2] border border-[#5E6AD2]/30 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-2xs cursor-pointer"
                      >
                        <Brain className="w-4 h-4" />
                        {language === 'vi' ? 'Trợ Lý AI & ML Pipeline' : 'AI & ML Pipeline'}
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
                      ? 'Hệ sinh thái luyện thi TOEIC toàn diện giải quyết thách thức học thụ động và thiếu gia sư kèm cặp. Hệ thống sử dụng kiến trúc Microservices với 6 dịch vụ độc lập xây dựng bằng Node.js / Express phía sau Nginx API Gateway và ứng dụng Flutter đa nền tảng. Dự án tích hợp Google Gemini 2.5 Flash làm trợ lý AI ngữ cảnh nội bộ qua REST endpoint (/api/v1/internal/smart-context), kết hợp Stateless ML Pipeline (scikit-learn) chẩn đoán điểm yếu thời gian thực và hàng đợi RabbitMQ kích hoạt tài khoản VIP bất đồng bộ trên 4 CSDL SQL Server biệt lập.'
                      : 'Comprehensive TOEIC preparation platform built to replace static exam drilling with personalized AI tutoring. The application leverages a Microservices architecture consisting of 6 decoupled services built with Node.js / Express behind an Nginx API Gateway and Flutter mobile client. It integrates Google Gemini 2.5 Flash for context-aware question explanations via internal REST endpoints (/api/v1/internal/smart-context), a Stateless ML Pipeline (scikit-learn) for in-memory weakness diagnosis, and RabbitMQ message queues for asynchronous VIP account activation across 4 isolated SQL Server databases.'}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#64748B] font-mono">
                  <span>Architecture: 6 Microservices</span>
                  <span className="text-emerald-700 font-bold">51/51 Tests PASS</span>
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
                      <span><strong>{language === 'vi' ? 'Trợ lý AI Gemini 2.5 Flash' : 'Gemini 2.5 Flash AI Tutor'}</strong>: Tra cứu ngữ cảnh đề thi nội bộ qua REST & xoay vòng API Key.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span><strong>{language === 'vi' ? 'Stateless ML Pipeline' : 'Stateless ML Pipeline'}</strong>: GaussianNB suy luận in-memory & tự động fallback Rule-based.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span><strong>{language === 'vi' ? 'RabbitMQ Event-Driven' : 'RabbitMQ Event-Driven'}</strong>: Kích hoạt VIP & gửi mail bất đồng bộ kèm HTTP sync fallback.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span><strong>{language === 'vi' ? '4 CSDL SQL Server biệt lập' : '4 Isolated SQL Server DBs'}</strong>: Tuân thủ nghiêm ngặt Database-per-Service.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span><strong>{language === 'vi' ? 'Thanh toán ZaloPay Sandbox' : 'ZaloPay Dynamic QR'}</strong>: Chữ ký HMAC-SHA256 & Idempotency chống replay callback.</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-emerald-800 font-mono font-semibold">
                  {language === 'vi' ? 'Đạt 51/51 Test Cases (100% PASS)' : 'Verified: 51/51 Automated Tests PASS'}
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
                      {language === 'vi' ? 'Thách thức: Đồng bộ giao dịch kích hoạt VIP xuyên CSDL' : 'Challenge: Cross-Database VIP Activation'}
                    </strong>
                    {language === 'vi'
                      ? 'Payment Service và Auth Service sở hữu 2 CSDL riêng biệt. Nếu gọi HTTP đồng bộ khi mạng chập chờn, khách hàng thanh toán thành công nhưng tài khoản không được nâng VIP.'
                      : 'Payment and Auth Services own isolated databases. Direct sync HTTP calls fail under network partitions, risking paid users losing VIP entitlements.'}
                  </p>
                  <p className="text-xs text-[#334155] leading-relaxed">
                    <strong className="text-emerald-900 block mb-1">
                      {language === 'vi' ? 'Giải pháp: Event-Driven 2 lớp (RabbitMQ + HTTP Fallback)' : 'Solution: 2-Tier Event-Driven Architecture'}
                    </strong>
                    {language === 'vi'
                      ? 'Payment phát sự kiện vào RabbitMQ queue bền vững (Durable) với Ack/Nack, tự động kích hoạt HTTP Sync Fallback nếu Broker mất kết nối; kết hợp kiểm tra Idempotency chống duplicate callback.'
                      : 'Payment publishes events to durable RabbitMQ queues with Ack/Nack and auto HTTP sync fallback upon broker outage, coupled with HMAC-SHA256 idempotency checks.'}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-amber-800 font-mono">
                  <span>Eventual Consistency</span>
                  <span className="font-bold">Zero VIP Lost</span>
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
                      ? 'Bao gồm sơ đồ kiến trúc 6 vi dịch vụ, cơ chế phối hợp liên service, pipeline Machine Learning và kết quả 51/51 tests.'
                      : 'Comprehensive 6-microservice architecture diagrams, inter-service coordination, ML pipeline, and test suites.'}
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
                  onClick={() => scrollTo('coordination')}
                  className="px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer"
                >
                  {language === 'vi' ? '2. Phối Hợp Service ↓' : '2. Coordination ↓'}
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
              projectId="toeic-chatbot"
              defaultTab="dual"
              availableTabs={['dual', 'desktop', 'mobile', 'terminal']}
              desktopTitle={language === 'vi' ? 'Bảng Điều Khiển Swagger API Gateway & Python ML Pipeline' : 'API Gateway Swagger & Python ML Pipeline'}
              mobileTitle={language === 'vi' ? 'App Gia Sư Luyện Thi & Chatbot Gemini (Flutter)' : 'Flutter AI Tutoring & Gemini Chatbot App'}
              desktopUrl="http://localhost:8000/docs"
              themeColor="#5E6AD2"
              terminalCommand="docker compose ps && curl -s http://localhost:8080/health"
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
                  ? 'TOEIC là chứng chỉ tiếng Anh được hàng triệu người lao động và sinh viên Việt Nam theo đuổi, nhưng phần lớn nền tảng luyện thi hiện tại chỉ cung cấp bài thi tĩnh, thiếu công cụ phân tích điểm yếu cá nhân, không có trợ lý AI hỏi đáp tức thì, và chi phí gia sư riêng quá cao.'
                  : 'TOEIC is pursued by millions of Vietnamese workers and students annually, but existing preparation platforms offer only static tests, lack personalized weakness analysis, provide no instant AI tutoring, and private tutoring costs remain prohibitively high.'}
              </p>
            </div>

            {/* Pain Points Grid */}
            <div className="p-6 bg-white/90 border border-slate-200/80 rounded-2xl shadow-xs mb-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#5E6AD2] mb-5 flex items-center gap-2">
                <ChevronRight className="w-4 h-4 shrink-0" />
                {language === 'vi' ? 'Các Vấn đề Người học Gặp phải' : 'Key Pain Points for TOEIC Learners'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    color: '#EC4899',
                    title: language === 'vi' ? 'Bài thi tĩnh, không cá nhân hóa' : 'Static Tests, No Personalization',
                    detail: language === 'vi'
                      ? 'Các nền tảng luyện thi TOEIC hiện tại chỉ cung cấp bộ đề cố định, không phản hồi riêng cho từng người học, không phân tích Part nào cần cải thiện.'
                      : 'Current TOEIC platforms offer fixed question banks with no individualized feedback, no analysis of which Parts need improvement.',
                  },
                  {
                    color: '#F59E0B',
                    title: language === 'vi' ? 'Không biết điểm yếu của mình' : 'Cannot Identify Personal Weaknesses',
                    detail: language === 'vi'
                      ? 'Người học khó xác định được Part nào (Listening Parts 1-4, Reading Parts 5-7) là điểm yếu cần tập trung ôn luyện.'
                      : 'Learners struggle to identify which of the 7 TOEIC Parts (Listening 1-4, Reading 5-7) represent their weakest areas.',
                  },
                  {
                    color: '#EF4444',
                    title: language === 'vi' ? 'Chi phí gia sư 1-1 quá cao' : 'Prohibitive 1-on-1 Tutoring Costs',
                    detail: language === 'vi'
                      ? 'Việc được hướng dẫn cá nhân đòi hỏi chi phí lớn và không linh hoạt về thời gian, không phải ai cũng có điều kiện tiếp cận.'
                      : 'Private tutoring demands significant costs and inflexible scheduling, making quality guidance inaccessible for most learners.',
                  },
                  {
                    color: '#5E6AD2',
                    title: language === 'vi' ? 'Thiếu công cụ hỏi đáp tức thì' : 'No Instant Q&A Capability',
                    detail: language === 'vi'
                      ? 'Khi gặp câu khó, người học không có ai để hỏi ngay lập tức về ngữ pháp, từ vựng hay chiến lược làm bài trong bối cảnh TOEIC.'
                      : 'When stuck on difficult questions, learners have no way to get instant grammar, vocabulary, or strategy explanations in a TOEIC context.',
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
                  ? 'Thiết kế nền tảng luyện thi TOEIC theo Kiến trúc Vi dịch vụ (Microservices), triển khai 3 năng lực cốt lõi: (1) TOEIC Exam Engine hỗ trợ đầy đủ 7 Parts và tự động chấm điểm, (2) AI Chatbot tích hợp Google Gemini 2.5 Flash để cung cấp hỏi đáp theo ngữ cảnh, và (3) ML Pipeline dự đoán điểm số và phân tích kỹ năng yếu phục vụ cá nhân hóa học tập.'
                  : 'Architected a TOEIC preparation platform on a Microservices Architecture, implementing 3 core capabilities: (1) TOEIC Exam Engine supporting all 7 Parts with automated scoring, (2) AI Chatbot integrating Google Gemini 2.5 Flash for context-aware Q&A, and (3) ML Pipeline for score forecasting and weak-skill diagnosis to power personalized learning.'}
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

            {/* 3 Core Goals */}
            <div className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-4">
                {language === 'vi' ? '3 Trụ cột Kỹ thuật Cốt lõi' : '3 Core Engineering Pillars'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    color: '#5E6AD2', num: '01',
                    title: language === 'vi' ? 'Động cơ Bài thi TOEIC' : 'TOEIC Test Engine',
                    desc: language === 'vi'
                      ? 'Hỗ trợ đầy đủ 7 Parts TOEIC (Listening 1-4, Reading 5-7), chấm điểm tự động, chế độ ôn tập xem đáp án đúng và giải thích chi tiết.'
                      : 'Full 7-Part TOEIC support (Listening 1-4, Reading 5-7), auto-scoring, review mode with correct answers and detailed explanations.',
                  },
                  {
                    color: '#8B5CF6', num: '02',
                    title: language === 'vi' ? 'Trợ lý AI Chatbot' : 'AI Chatbot Tutor',
                    desc: language === 'vi'
                      ? 'Google Gemini 2.5 Flash hỗ trợ hội thoại đa lượt có ngữ cảnh, xoay vòng khóa API phân tán tải, giới hạn VIP 15 tin nhắn/ngày cho tài khoản miễn phí.'
                      : 'Google Gemini 2.5 Flash multi-turn context-aware conversations, round-robin API key rotation, VIP gating (15 msgs/day free tier).',
                  },
                  {
                    color: '#10B981', num: '03',
                    title: language === 'vi' ? 'Đường ống Học máy' : 'ML Prediction Pipeline',
                    desc: language === 'vi'
                      ? 'Python Flask + scikit-learn dự đoán điểm TOEIC, phân tích kỹ năng yếu theo Part, tự động huấn luyện lại mô hình hàng ngày lúc 2:00 AM.'
                      : 'Python Flask + scikit-learn TOEIC score prediction, per-Part weak skill analysis, automated daily model retraining at 2:00 AM.',
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
                  { value: '6', label: language === 'vi' ? 'Vi dịch vụ tự chủ' : 'Autonomous Microservices', color: '#5E6AD2' },
                  { value: '4', label: language === 'vi' ? 'CSDL (Database-per-Service)' : 'DBs (Database-per-Service)', color: '#06B6D4' },
                  { value: '51/51', label: language === 'vi' ? 'Test Cases (100% PASS)' : 'Test Cases (100% PASS)', color: '#10B981' },
                  { value: '55+', label: language === 'vi' ? 'API Endpoints (Swagger)' : 'API Endpoints (Swagger)', color: '#F59E0B' },
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
                ? 'Trong nhóm 3 thành viên, tôi đảm nhiệm vai trò Trưởng nhóm Kỹ thuật & Thiết kế Hệ thống (Technical Lead & System Designer) — chịu trách nhiệm thiết kế toàn bộ kiến trúc Microservices, phát triển 5 dịch vụ Backend, tích hợp AI Chatbot, ML Pipeline, thanh toán ZaloPay và hạ tầng DevOps Docker.'
                : 'In the 3-person team, I served as the Technical Lead & System Designer — owning the entire Microservices architecture design, all 5 Backend service implementations, AI Chatbot integration, ML Pipeline, ZaloPay payment, and Docker DevOps infrastructure.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  area: language === 'vi' ? 'Kiến trúc Microservices & Auth Service' : 'Microservices Architecture & Auth Service',
                  badge: '100% Ownership',
                  color: '#5E6AD2',
                  items: language === 'vi' ? [
                    'Thiết kế kiến trúc 6 vi dịch vụ độc lập với Database-per-Service pattern (4 CSDL SQL Server sở hữu riêng theo domain)',
                    'Cấu hình Nginx API Gateway routing theo tiền tố đường dẫn cho toàn bộ hệ thống',
                    'Triển khai JWT dual-token (Access 7d + Refresh 30d), Google OAuth 2.0, OTP Email, RBAC (Admin/User)',
                    'Thiết kế VIP middleware kiểm tra giới hạn tin nhắn Chatbot xuyên dịch vụ (cross-service)',
                  ] : [
                    'Designed 6 autonomous microservices with Database-per-Service pattern (4 domain-owned SQL Server databases)',
                    'Configured Nginx API Gateway with path-prefix routing for all services',
                    'Implemented JWT dual-token strategy (Access 7d + Refresh 30d), Google OAuth 2.0, Email OTP, RBAC',
                    'Engineered VIP middleware for cross-service chatbot message limit enforcement',
                  ],
                },
                {
                  area: language === 'vi' ? 'Quiz Service & TOEIC Test Engine' : 'Quiz Service & TOEIC Test Engine',
                  badge: language === 'vi' ? 'Core Backend' : 'Core Backend',
                  color: '#06B6D4',
                  items: language === 'vi' ? [
                    'Xây dựng Engine chấm điểm TOEIC tự động theo 7 Parts với lifecycle quản lý attempt (start → in-progress → submitted)',
                    'Tích hợp Cloudinary CDN upload hình ảnh và âm thanh bài nghe, batch upload cho Admin',
                    'Triển khai Swagger/OpenAPI 3 documentation cho 55+ endpoints',
                    'Thiết kế Statistics API: tổng hợp điểm, tỷ lệ đúng theo Part, biểu đồ xu hướng theo thời gian',
                  ] : [
                    'Built TOEIC auto-scoring engine for all 7 Parts with attempt lifecycle (start → in-progress → submitted)',
                    'Integrated Cloudinary CDN for image and audio upload with Admin batch upload support',
                    'Deployed interactive Swagger/OpenAPI 3 documentation for 55+ endpoints',
                    'Designed Statistics APIs: aggregate scores, per-Part accuracy, configurable accuracy trend charts',
                  ],
                },
                {
                  area: language === 'vi' ? 'AI Chatbot (Gemini) & ML Pipeline' : 'AI Chatbot (Gemini) & ML Pipeline',
                  badge: language === 'vi' ? 'AI & ML' : 'AI & ML',
                  color: '#10B981',
                  items: language === 'vi' ? [
                    'Tích hợp Google Gemini 2.5 Flash REST API với hội thoại đa lượt có ngữ cảnh từ CSDL',
                    'Triển khai Round-Robin API Key Rotation phân tán giới hạn tốc độ giữa nhiều khóa',
                    'Tích hợp Python Flask ML Service (scikit-learn) vào hệ thống microservices',
                    'Xây dựng mlRetrainCron.js tự động huấn luyện lại mô hình hàng ngày lúc 2:00 AM',
                  ] : [
                    'Integrated Google Gemini 2.5 Flash REST API with database-persisted multi-turn conversation context',
                    'Implemented Round-Robin API Key Rotation distributing rate limits across multiple keys',
                    'Integrated Python Flask ML Service (scikit-learn) into the microservices ecosystem',
                    'Built mlRetrainCron.js for automated daily model retraining at 2:00 AM',
                  ],
                },
                {
                  area: language === 'vi' ? 'ZaloPay Payment & DevOps Docker' : 'ZaloPay Payment & Docker DevOps',
                  badge: language === 'vi' ? 'Tích hợp & Hạ tầng' : 'Integration & Infra',
                  color: '#F59E0B',
                  items: language === 'vi' ? [
                    'Tích hợp ZaloPay Sandbox Dynamic QR API với HMAC-SHA256 Webhook, logic VIP tích lũy cộng dồn',
                    'Xây dựng Email Worker qua RabbitMQ xử lý gửi OTP và thông báo thanh toán bất đồng bộ',
                    'Viết Dockerfile cho 5 Node.js services, cấu hình docker-compose.yml điều phối 9 containers',
                    'Thiết kế MSSQL init script tự động tạo schema và seed data khi khởi động lần đầu',
                  ] : [
                    'Integrated ZaloPay Sandbox Dynamic QR API with HMAC-SHA256 Webhook and cumulative VIP expiry logic',
                    'Built async Email Worker via RabbitMQ for OTP delivery and payment notification dispatch',
                    'Authored Dockerfiles for 5 Node.js services, docker-compose.yml orchestrating 9 containers',
                    'Designed MSSQL init script with automated schema creation and data seeding on first boot',
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
                ? 'Sơ đồ kiến trúc: Flutter Client → Nginx API Gateway → 6 Vi dịch vụ độc lập → 4 CSDL SQL Server → RabbitMQ Queue → Email Worker → Google Gemini AI & ZaloPay & Python ML Service.'
                : 'Architecture flow: Flutter Client → Nginx API Gateway → 6 Independent Microservices → 4 SQL Server Databases → RabbitMQ Queue → Email Worker → Google Gemini AI & ZaloPay & Python ML Service.'}
            </p>

            {/* Architecture Diagram */}
            <div className="bg-white/90 border border-slate-200/80 rounded-2xl p-6 md:p-8 overflow-x-auto shadow-xs">
              <div className="max-w-[900px] mx-auto">

                {/* Step 1: Client */}
                <div className="flex justify-center">
                  <div className="px-8 py-4 bg-sky-50/80 border-2 border-sky-300 rounded-2xl flex items-center gap-4 shadow-2xs max-w-[500px] w-full">
                    <div className="w-11 h-11 rounded-xl bg-white border border-sky-200 flex items-center justify-center shrink-0 shadow-2xs">
                      <Globe className="w-6 h-6 text-sky-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-bold text-sky-700 bg-sky-100 px-2 py-0.5 rounded-full font-mono">STEP 1</span>
                        <span className="text-sm font-bold text-[#0B0E17]">
                          {language === 'vi' ? 'Flutter App (Android / iOS / Web)' : 'Flutter App (Android / iOS / Web)'}
                        </span>
                      </div>
                      <p className="text-xs text-[#475569] leading-relaxed">
                        {language === 'vi'
                          ? 'Ứng dụng đa nền tảng từ mã nguồn duy nhất, quản lý trạng thái GetX, phát âm thanh bài nghe, biểu đồ thống kê fl_chart.'
                          : 'Cross-platform app from single codebase, GetX state management, just_audio listening playback, fl_chart statistics.'}
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

                {/* Step 2: Nginx Gateway */}
                <div className="flex justify-center">
                  <div className="px-8 py-4 bg-amber-50/80 border-2 border-amber-300 rounded-2xl flex items-center gap-4 shadow-2xs max-w-[500px] w-full">
                    <div className="w-11 h-11 rounded-xl bg-white border border-amber-200 flex items-center justify-center shrink-0 shadow-2xs">
                      <Shield className="w-6 h-6 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full font-mono">STEP 2</span>
                        <span className="text-sm font-bold text-[#0B0E17]">
                          {language === 'vi' ? 'Nginx API Gateway (:8080)' : 'Nginx API Gateway (:8080)'}
                        </span>
                      </div>
                      <p className="text-xs text-[#475569] leading-relaxed">
                        {language === 'vi'
                          ? 'Điểm truy cập duy nhất, định tuyến yêu cầu theo tiền tố đường dẫn, tiêm tiêu đề bảo mật, rate limiting.'
                          : 'Single ingress point, path-prefix routing, security header injection, rate limiting.'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center py-2">
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-4 bg-amber-300" />
                    <span className="text-[11px] text-[#475569] font-mono bg-slate-100 px-3 py-0.5 rounded-full border border-slate-200 my-1 font-semibold">
                      {language === 'vi' ? 'Phân phối đến 6 dịch vụ độc lập' : 'Distributes to 6 independent services'}
                    </span>
                    <ArrowDown className="w-4 h-4 text-[#8B5CF6]" />
                  </div>
                </div>

                {/* Step 3: 6 Microservices */}
                <div className="p-6 bg-slate-50/80 border-2 border-[#8B5CF6]/30 rounded-2xl">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full font-mono">STEP 3</span>
                    <span className="text-sm font-bold text-[#0B0E17]">
                      {language === 'vi' ? '6 Dịch vụ Độc lập — Database-per-Service' : '6 Independent Services — Database-per-Service'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      { icon: <Shield className="w-4 h-4" />, name: language === 'vi' ? 'Xác thực (Auth)' : 'Auth Service', desc: language === 'vi' ? 'JWT, OAuth 2.0, OTP, RBAC' : 'JWT, OAuth 2.0, OTP, RBAC', color: '#8B5CF6', port: ':8081' },
                      { icon: <BookOpen className="w-4 h-4" />, name: language === 'vi' ? 'Đề thi (Quiz)' : 'Quiz Service', desc: language === 'vi' ? 'TOEIC Engine, Chấm điểm, Thống kê' : 'TOEIC Engine, Scoring, Statistics', color: '#06B6D4', port: ':8082' },
                      { icon: <MessageSquare className="w-4 h-4" />, name: language === 'vi' ? 'Trợ lý AI (Chatbot)' : 'Chatbot Service', desc: language === 'vi' ? 'Gemini 2.5 Flash, Hội thoại đa lượt' : 'Gemini 2.5 Flash, Multi-turn', color: '#5E6AD2', port: ':8084', highlight: true },
                      { icon: <CreditCard className="w-4 h-4" />, name: language === 'vi' ? 'Thanh toán (Payment)' : 'Payment Service', desc: language === 'vi' ? 'ZaloPay QR, HMAC Webhook, VIP' : 'ZaloPay QR, HMAC Webhook, VIP', color: '#F59E0B', port: ':8083' },
                      { icon: <Mail className="w-4 h-4" />, name: language === 'vi' ? 'Email Worker' : 'Email Worker', desc: language === 'vi' ? 'RabbitMQ Consumer, Nodemailer' : 'RabbitMQ Consumer, Nodemailer', color: '#FB923C', port: 'queue' },
                      { icon: <Brain className="w-4 h-4" />, name: language === 'vi' ? 'Học máy (ML)' : 'ML Service', desc: language === 'vi' ? 'Python Flask, scikit-learn, Auto-retrain' : 'Python Flask, scikit-learn, Auto-retrain', color: '#10B981', port: ':5000' },
                    ].map((svc, i) => (
                      <div key={i} className={`p-4 rounded-xl border bg-white shadow-2xs transition-all ${svc.highlight ? 'ring-2 ring-[#5E6AD2]/50' : ''}`}
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
                    <span className="text-[11px] font-mono bg-purple-50 text-purple-800 px-3.5 py-1.5 rounded-full border border-purple-200 font-bold shadow-2xs">
                      {language === 'vi'
                        ? 'Database-per-Service: Mỗi service sở hữu database riêng — giảm coupling và giới hạn blast radius giữa các domain'
                        : 'Database-per-Service: Each service owns its database — reducing coupling and bounding failure blast radius across domains'}
                    </span>
                  </div>
                </div>

                <div className="flex justify-center py-2">
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-4 bg-purple-300" />
                    <span className="text-[11px] text-[#475569] font-mono bg-slate-100 px-3 py-0.5 rounded-full border border-slate-200 my-1 font-semibold">
                      {language === 'vi' ? 'Kết nối hạ tầng & dịch vụ bên ngoài' : 'Connects to infrastructure & external services'}
                    </span>
                    <ArrowDown className="w-4 h-4 text-rose-500" />
                  </div>
                </div>

                {/* Step 4: Infrastructure */}
                <div className="p-6 bg-slate-50/80 border border-slate-200 rounded-2xl">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full font-mono">STEP 4</span>
                    <span className="text-sm font-bold text-[#0B0E17]">
                      {language === 'vi' ? 'Hạ tầng Lưu trữ & Dịch vụ Bên ngoài' : 'Storage Infrastructure & External Services'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="p-4 rounded-xl bg-white border border-rose-200 shadow-2xs">
                      <div className="flex items-center gap-2 mb-2">
                        <Database className="w-4 h-4 text-rose-600" />
                        <span className="text-xs font-bold text-[#0B0E17]">SQL Server 2022</span>
                      </div>
                      <p className="text-[11px] text-[#475569] leading-relaxed">
                        {language === 'vi'
                          ? '4 CSDL độc lập (Auth, Quiz, Chatbot, Payment) — không cross-DB joins'
                          : '4 independent databases (Auth, Quiz, Chatbot, Payment) — zero cross-DB joins'}
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-amber-200 shadow-2xs">
                      <div className="flex items-center gap-2 mb-2">
                        <Headphones className="w-4 h-4 text-amber-600" />
                        <span className="text-xs font-bold text-[#0B0E17]">RabbitMQ</span>
                      </div>
                      <p className="text-[11px] text-[#475569] leading-relaxed">
                        {language === 'vi'
                          ? 'Hàng đợi event kích hoạt VIP & email worker bất đồng bộ'
                          : 'Async VIP activation event queue & email worker'}
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-[#5E6AD2]/30 shadow-2xs">
                      <div className="flex items-center gap-2 mb-2">
                        <Cpu className="w-4 h-4 text-[#5E6AD2]" />
                        <span className="text-xs font-bold text-[#0B0E17]">Gemini AI + ZaloPay</span>
                      </div>
                      <p className="text-[11px] text-[#475569] leading-relaxed">
                        {language === 'vi'
                          ? 'AI Chatbot Smart Context & Thanh toán ZaloPay HMAC Idempotent'
                          : 'Smart Context AI Chatbot & Idempotent HMAC ZaloPay'}
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-emerald-200 shadow-2xs">
                      <div className="flex items-center gap-2 mb-2">
                        <Container className="w-4 h-4 text-emerald-600" />
                        <span className="text-xs font-bold text-[#0B0E17]">Docker Compose</span>
                      </div>
                      <p className="text-[11px] text-[#475569] leading-relaxed">
                        {language === 'vi'
                          ? '9 containers điều phối đồng nhất (5 Node + 1 Python + 1 Nginx + 1 SQL + 1 MQ)'
                          : '9 orchestrated containers (5 Node + 1 Python + 1 Nginx + 1 SQL + 1 MQ)'}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ── Inter-Service Coordination & Fault-Tolerant Resilience ── */}
          <section id="coordination">
            <div className="flex items-center gap-3 mb-2">
              <Network className="w-5 h-5 text-[#5E6AD2]" />
              <h2 className="text-2xl font-black text-[#0B0E17]">
                {language === 'vi'
                  ? 'Cơ chế Phối hợp & Chịu lỗi Liên dịch vụ (Inter-Service Coordination & Resilience)'
                  : 'Inter-Service Coordination & Fault-Tolerant Resilience'}
              </h2>
            </div>
            <p className="text-[#334155] text-base mb-8 leading-relaxed font-normal">
              {language === 'vi'
                ? 'Đặc tả 3 mẫu hình kiến trúc then chốt giải quyết bài toán phân lập dữ liệu (Database-per-Service), đảm bảo tính nhất quán cuối cùng và ngăn ngừa lỗi dây chuyền (Cascading Failure) trên toàn hệ thống.'
                : 'Architectural specifications of 3 critical inter-service interaction patterns enabling strict Database-per-Service isolation, eventual consistency, and cascading failure prevention.'}
            </p>

            <div className="space-y-6">
              {/* Pattern 1: RabbitMQ Event-Driven VIP Activation */}
              <div className="p-6 bg-white/90 border border-slate-200/80 rounded-2xl shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center font-mono text-xs font-bold shrink-0 border border-purple-200">
                      01
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-[#0B0E17]">
                        {language === 'vi'
                          ? 'Luồng Kích hoạt VIP Bất đồng bộ qua RabbitMQ (Event-Driven + HTTP Sync Fallback)'
                          : 'Asynchronous Event-Driven VIP Activation via RabbitMQ with HTTP Sync Fallback'}
                      </h3>
                      <p className="text-xs text-[#64748B] font-mono">payment-service ➔ rabbitmq (vip_activation_queue) ➔ auth-service</p>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full font-mono font-bold bg-purple-100 text-purple-800 border border-purple-200">
                    Two-Layer Resilience
                  </span>
                </div>

                {/* Visual Pipeline Flow */}
                <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 mb-4 border border-slate-800 shadow-md">
                  <div className="flex flex-wrap items-center justify-between pb-3 border-b border-slate-800/80 mb-4 gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
                      <span className="text-xs font-mono font-bold text-purple-300 uppercase tracking-wider">
                        {language === 'vi' ? 'Quy trình Điều phối Bất đồng bộ (Happy Path)' : 'Event Pipeline (Happy Path)'}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2.5 py-0.5 rounded-full border border-slate-700">
                      Payment ➔ RabbitMQ ➔ Auth
                    </span>
                  </div>

                  {/* Steps Flow Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                    <div className="p-3.5 bg-slate-800/70 rounded-xl border border-slate-700/70 flex flex-col justify-between hover:border-purple-500/50 transition-colors">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono font-bold text-purple-300 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-800">
                            {language === 'vi' ? 'BƯỚC 1' : 'STEP 1'}
                          </span>
                          <CreditCard className="w-3.5 h-3.5 text-purple-400" />
                        </div>
                        <div className="text-xs font-bold text-white mb-1">ZaloPay Webhook</div>
                        <p className="text-[11px] text-slate-300 leading-snug">
                          {language === 'vi'
                            ? 'Xác thực HMAC-SHA256, kiểm tra idempotency và commit giao dịch vào CSDL ChatbotToeic_Payment.'
                            : 'Verifies HMAC-SHA256 signature, checks idempotency, and commits transaction into ChatbotToeic_Payment.'}
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 bg-slate-800/70 rounded-xl border border-slate-700/70 flex flex-col justify-between hover:border-purple-500/50 transition-colors">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono font-bold text-purple-300 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-800">
                            {language === 'vi' ? 'BƯỚC 2' : 'STEP 2'}
                          </span>
                          <Layers className="w-3.5 h-3.5 text-purple-400" />
                        </div>
                        <div className="text-xs font-bold text-white mb-1">RabbitMQ Publish</div>
                        <p className="text-[11px] text-slate-300 leading-snug">
                          {language === 'vi'
                            ? 'Bắn event vào hàng đợi vip_activation_queue với cờ persistent (durable) đảm bảo an toàn dữ liệu.'
                            : 'Publishes event to vip_activation_queue with message persistence flags enabled.'}
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 bg-slate-800/70 rounded-xl border border-slate-700/70 flex flex-col justify-between hover:border-purple-500/50 transition-colors">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono font-bold text-purple-300 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-800">
                            {language === 'vi' ? 'BƯỚC 3' : 'STEP 3'}
                          </span>
                          <Server className="w-3.5 h-3.5 text-purple-400" />
                        </div>
                        <div className="text-xs font-bold text-white mb-1">Auth Worker Consume</div>
                        <p className="text-[11px] text-slate-300 leading-snug">
                          {language === 'vi'
                            ? 'Auth Service nhận message, tính hạn VIP cộng dồn tiếp nối ngày cũ và cập nhật DB người dùng.'
                            : 'Auth Service consumes event, computes cumulative VIP expiry date, and updates user DB record.'}
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 bg-slate-800/70 rounded-xl border border-slate-700/70 flex flex-col justify-between hover:border-emerald-500/50 transition-colors">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono font-bold text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                            {language === 'vi' ? 'HOÀN TẤT' : 'FINISH'}
                          </span>
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                        </div>
                        <div className="text-xs font-bold text-white mb-1">
                          {language === 'vi' ? 'Xác nhận & Gửi Email' : 'Ack & Queue Email'}
                        </div>
                        <p className="text-[11px] text-slate-300 leading-snug">
                          {language === 'vi'
                            ? 'Gửi channel.ack() giải phóng message khỏi queue; đẩy tác vụ gửi email thông báo sang email_queue.'
                            : 'Sends channel.ack() to remove message from queue; dispatches congratulatory email task to email_queue.'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Resilience Fallback Track */}
                  <div className="p-3.5 bg-amber-950/40 border border-amber-500/40 rounded-xl flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400 shrink-0 mt-0.5">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div className="text-xs leading-relaxed">
                      <span className="font-bold text-amber-300 block mb-0.5">
                        {language === 'vi'
                          ? 'Lớp Dự phòng Sự cố (Resilience Fallback): HTTP Sync Fallback'
                          : 'Resilience Fallback Path: HTTP Sync Fallback'}
                      </span>
                      <p className="text-slate-300 text-[11px] leading-relaxed">
                        {language === 'vi'
                          ? 'Nếu broker RabbitMQ ngắt kết nối hoặc lỗi kết nối mạng, Payment Service tự động kích hoạt chế độ dự phòng gọi trực tiếp endpoint nội bộ PATCH /api/v1/internal/users/:userId sang Auth Service, đảm bảo gói VIP của khách hàng luôn được kích hoạt ngay.'
                          : 'If RabbitMQ broker is temporarily unreachable, Payment Service automatically triggers a direct HTTP call to PATCH /api/v1/internal/users/:userId on Auth Service, ensuring instant VIP activation with zero customer impact.'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl">
                    <span className="font-bold text-purple-700 block mb-1">
                      {language === 'vi' ? 'Ngăn chặn Lỗi dây chuyền' : 'Zero Cascading Failures'}
                    </span>
                    <p className="text-[#475569] leading-relaxed">
                      {language === 'vi'
                        ? 'Nếu Auth Service tạm thời ngắt kết nối hoặc khởi động lại, message vẫn được lưu trữ bền vững (persistent) trên RabbitMQ chờ xử lý, không làm mất giao dịch của khách hàng.'
                        : 'If Auth Service restarts or undergoes brief network partitions, messages remain safely queued and persistent in RabbitMQ without dropping user transactions.'}
                    </p>
                  </div>
                  <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl">
                    <span className="font-bold text-purple-700 block mb-1">
                      {language === 'vi' ? 'HTTP Sync Fallback Tự động' : 'Auto HTTP Sync Fallback'}
                    </span>
                    <p className="text-[#475569] leading-relaxed">
                      {language === 'vi'
                        ? 'Khi broker RabbitMQ gặp sự cố, payment-service tự động kích hoạt lớp dự phòng gọi trực tiếp HTTP internal endpoint sang Auth Service để kích hoạt ngay.'
                        : 'If the RabbitMQ broker itself becomes unreachable, payment-service activates a secondary fallback calling Auth Service internal REST endpoint directly.'}
                    </p>
                  </div>
                  <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl">
                    <span className="font-bold text-purple-700 block mb-1">
                      {language === 'vi' ? 'Tính toán Gia hạn Cộng dồn' : 'Additive VIP Duration'}
                    </span>
                    <p className="text-[#475569] leading-relaxed">
                      {language === 'vi'
                        ? 'Hạn sử dụng VIP được cộng dồn tiếp nối từ thời điểm vipExpireAt hiện tại nếu gói cũ còn hiệu lực, tránh ghi đè làm thiệt thòi ngày sử dụng của người dùng.'
                        : 'VIP expiration dates extend additively from the active vipExpireAt rather than overwriting from today, preserving remaining user subscription days.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Pattern 2: Stateless ML Pipeline & Rule-based Fallback */}
              <div className="p-6 bg-white/90 border border-slate-200/80 rounded-2xl shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-mono text-xs font-bold shrink-0 border border-emerald-200">
                      02
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-[#0B0E17]">
                        {language === 'vi'
                          ? 'Đường ống Học máy Stateless In-Memory & Tự suy thoái Rule-based (Graceful Fallback)'
                          : 'Stateless In-Memory ML Pipeline with Rule-Based Fallback (Graceful Fallback)'}
                      </h3>
                      <p className="text-xs text-[#64748B] font-mono">quiz-service ➔ HTTP POST /predict ➔ python-ml-service (:5000)</p>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                    Stateless Inference
                  </span>
                </div>

                {/* Visual Pipeline Flow */}
                <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 mb-4 border border-slate-800 shadow-md">
                  <div className="flex flex-wrap items-center justify-between pb-3 border-b border-slate-800/80 mb-4 gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider">
                        {language === 'vi' ? 'Đường ống Dự đoán Học máy (ML Pipeline Flow)' : 'ML Pipeline Flow (Happy Path)'}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2.5 py-0.5 rounded-full border border-slate-700">
                      Quiz ➔ setImmediate ➔ Flask ML ➔ Quiz DB
                    </span>
                  </div>

                  {/* Steps Flow Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                    <div className="p-3.5 bg-slate-800/70 rounded-xl border border-slate-700/70 flex flex-col justify-between hover:border-emerald-500/50 transition-colors">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono font-bold text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                            {language === 'vi' ? 'BƯỚC 1' : 'STEP 1'}
                          </span>
                          <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                        </div>
                        <div className="text-xs font-bold text-white mb-1">
                          {language === 'vi' ? 'Nộp Bài Thi' : 'Submit Test Attempt'}
                        </div>
                        <p className="text-[11px] text-slate-300 leading-snug">
                          {language === 'vi'
                            ? 'Quiz Service lưu kết quả thi của học viên vào CSDL ChatbotToeic_Quiz và trả phản hồi ngay.'
                            : 'Quiz Service stores student test attempt into ChatbotToeic_Quiz and responds promptly.'}
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 bg-slate-800/70 rounded-xl border border-slate-700/70 flex flex-col justify-between hover:border-emerald-500/50 transition-colors">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono font-bold text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                            {language === 'vi' ? 'BƯỚC 2' : 'STEP 2'}
                          </span>
                          <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                        </div>
                        <div className="text-xs font-bold text-white mb-1">
                          {language === 'vi' ? 'Tách Luồng Nền' : 'Background Offload'}
                        </div>
                        <p className="text-[11px] text-slate-300 leading-snug">
                          {language === 'vi'
                            ? 'Đẩy tác vụ qua setImmediate(), trích xuất đặc trưng điểm số & độ chính xác 7 Parts ra khỏi request path.'
                            : 'Offloaded via setImmediate(), extracting 7-Part accuracy feature vectors outside request path.'}
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 bg-slate-800/70 rounded-xl border border-slate-700/70 flex flex-col justify-between hover:border-emerald-500/50 transition-colors">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono font-bold text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                            {language === 'vi' ? 'BƯỚC 3' : 'STEP 3'}
                          </span>
                          <Brain className="w-3.5 h-3.5 text-emerald-400" />
                        </div>
                        <div className="text-xs font-bold text-white mb-1">In-Memory Inference</div>
                        <p className="text-[11px] text-slate-300 leading-snug">
                          {language === 'vi'
                            ? 'Gửi POST /predict (JSON) sang Python Flask; model scikit-learn suy luận in-memory không cần DB.'
                            : 'POST /predict (JSON) to Python Flask; scikit-learn executes purely in RAM without database queries.'}
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 bg-slate-800/70 rounded-xl border border-slate-700/70 flex flex-col justify-between hover:border-emerald-500/50 transition-colors">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono font-bold text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                            {language === 'vi' ? 'KẾT QUẢ' : 'RESULT'}
                          </span>
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                        </div>
                        <div className="text-xs font-bold text-white mb-1">
                          {language === 'vi' ? 'Cập Nhật & Gợi Ý' : 'Forecast & Suggest'}
                        </div>
                        <p className="text-[11px] text-slate-300 leading-snug">
                          {language === 'vi'
                            ? 'Lưu điểm dự đoán và tự động sinh danh sách đề xuất ID câu hỏi ôn luyện tập trung theo kỹ năng yếu.'
                            : 'Stores forecasted score and generates recommended practice question IDs targeting weak skills.'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Resilience Fallback Track */}
                  <div className="p-3.5 bg-amber-950/40 border border-amber-500/40 rounded-xl flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400 shrink-0 mt-0.5">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div className="text-xs leading-relaxed">
                      <span className="font-bold text-amber-300 block mb-0.5">
                        {language === 'vi'
                          ? 'Lớp Dự phòng Sự cố (Resilience Fallback): Rule-Based Fallback'
                          : 'Resilience Fallback Path: Rule-Based Fallback'}
                      </span>
                      <p className="text-slate-300 text-[11px] leading-relaxed">
                        {language === 'vi'
                          ? 'Nếu Python ML Service gặp sự cố hoặc timeout quá 3 giây, Quiz Service tự động áp dụng bộ luật heuristic nội bộ (đánh dấu kỹ năng yếu cho mọi Part có độ chính xác < 50%), đảm bảo học viên luôn nhận được báo cáo mà không bao giờ gặp lỗi.'
                          : 'If Python ML Service times out or goes offline, Quiz Service automatically falls back to internal heuristics (classifying any Part with < 50% accuracy as a weak skill), guaranteeing continuous diagnosis.'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl">
                    <span className="font-bold text-emerald-700 block mb-1">
                      {language === 'vi' ? 'Suy luận Thuần túy trên RAM' : 'Pure In-Memory Inference'}
                    </span>
                    <p className="text-[#475569] leading-relaxed">
                      {language === 'vi'
                        ? 'Python ML Service không kết nối CSDL trong luồng dự đoán; nhận toàn bộ đặc trưng qua REST JSON và chạy mô hình trong bộ nhớ, dễ dàng scale ngang nhiều instance.'
                        : 'Python ML Service makes zero database queries during inference; it ingests features via JSON and evaluates models purely in-memory, scaling horizontally effortlessly.'}
                    </p>
                  </div>
                  <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl">
                    <span className="font-bold text-emerald-700 block mb-1">
                      {language === 'vi' ? 'Non-Blocking Background Job' : 'Non-Blocking Execution'}
                    </span>
                    <p className="text-[#475569] leading-relaxed">
                      {language === 'vi'
                        ? 'Đẩy tác vụ chẩn đoán ML chạy nền qua setImmediate() ra khỏi request-response path, giúp giảm latency của API nộp bài thi.'
                        : 'Score forecasting is offloaded to the background via setImmediate(), decoupling ML inference from the request-response path and minimizing test submission latency.'}
                    </p>
                  </div>
                  <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl">
                    <span className="font-bold text-emerald-700 block mb-1">
                      {language === 'vi' ? 'Tự động Huấn luyện lại (Auto-Retrain)' : 'Scheduled Retraining'}
                    </span>
                    <p className="text-[#475569] leading-relaxed">
                      {language === 'vi'
                        ? 'Tác vụ Cron Job tự động kích hoạt POST /retrain trên ML service định kỳ, thu hoạch dữ liệu bài thi mới để tái huấn luyện và cải thiện độ chính xác.'
                        : 'A scheduled cron job triggers POST /retrain on the ML service, harvesting fresh test attempt datasets to continuously improve prediction accuracy.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Pattern 3: Context-Aware AI Chatbot with Graceful Degradation */}
              <div className="p-6 bg-white/90 border border-slate-200/80 rounded-2xl shadow-xs">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center font-mono text-xs font-bold shrink-0 border border-sky-200">
                      03
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-[#0B0E17]">
                        {language === 'vi'
                          ? 'Trợ lý AI Chatbot với Context Retrieval Liên dịch vụ & Suy thoái Mềm (Graceful Degradation)'
                          : 'Context-Aware AI Chatbot with Inter-Service Retrieval & Graceful Degradation'}
                      </h3>
                      <p className="text-xs text-[#64748B] font-mono">chatbot-service ➔ internal REST ➔ quiz-service ➔ Gemini 2.5 Flash</p>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full font-mono font-bold bg-sky-100 text-sky-800 border border-sky-200">
                    Smart RAG Context
                  </span>
                </div>

                {/* Visual Pipeline Flow */}
                <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 mb-4 border border-slate-800 shadow-md">
                  <div className="flex flex-wrap items-center justify-between pb-3 border-b border-slate-800/80 mb-4 gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
                      <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-wider">
                        {language === 'vi' ? 'Quy trình Tra Cứu Ngữ Cảnh Đề Thi (Smart Context Flow)' : 'Smart Context Retrieval Flow (Happy Path)'}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-2.5 py-0.5 rounded-full border border-slate-700">
                      Chatbot ➔ Quiz REST ➔ Gemini 2.5 Flash
                    </span>
                  </div>

                  {/* Steps Flow Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                    <div className="p-3.5 bg-slate-800/70 rounded-xl border border-slate-700/70 flex flex-col justify-between hover:border-sky-500/50 transition-colors">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono font-bold text-sky-300 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-800">
                            {language === 'vi' ? 'BƯỚC 1' : 'STEP 1'}
                          </span>
                          <MessageSquare className="w-3.5 h-3.5 text-sky-400" />
                        </div>
                        <div className="text-xs font-bold text-white mb-1">
                          {language === 'vi' ? 'Gửi Câu Hỏi & Gating' : 'Question & VIP Gating'}
                        </div>
                        <p className="text-[11px] text-slate-300 leading-snug">
                          {language === 'vi'
                            ? 'Chatbot Service nhận tin nhắn, gọi Auth Service kiểm tra quota và quyền hạn gói VIP.'
                            : 'Chatbot Service receives message, verifies user quota and active VIP status with Auth Service.'}
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 bg-slate-800/70 rounded-xl border border-slate-700/70 flex flex-col justify-between hover:border-sky-500/50 transition-colors">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono font-bold text-sky-300 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-800">
                            {language === 'vi' ? 'BƯỚC 2' : 'STEP 2'}
                          </span>
                          <Network className="w-3.5 h-3.5 text-sky-400" />
                        </div>
                        <div className="text-xs font-bold text-white mb-1">Internal REST Call</div>
                        <p className="text-[11px] text-slate-300 leading-snug">
                          {language === 'vi'
                            ? 'Gọi endpoint nội bộ POST /api/v1/internal/smart-context sang Quiz Service (:8082).'
                            : 'Calls internal endpoint POST /api/v1/internal/smart-context on Quiz Service (:8082).'}
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 bg-slate-800/70 rounded-xl border border-slate-700/70 flex flex-col justify-between hover:border-sky-500/50 transition-colors">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono font-bold text-sky-300 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-800">
                            {language === 'vi' ? 'BƯỚC 3' : 'STEP 3'}
                          </span>
                          <Database className="w-3.5 h-3.5 text-sky-400" />
                        </div>
                        <div className="text-xs font-bold text-white mb-1">
                          {language === 'vi' ? 'Trích Xuất Ground-Truth' : 'Ground-Truth Extraction'}
                        </div>
                        <p className="text-[11px] text-slate-300 leading-snug">
                          {language === 'vi'
                            ? 'Quiz Service trích xuất nội dung câu hỏi, 4 phương án, đáp án đúng và giải thích ngữ pháp từ CSDL Quiz.'
                            : 'Quiz Service extracts question stem, 4 options, official answer, and grammar rationale from Quiz DB.'}
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 bg-slate-800/70 rounded-xl border border-slate-700/70 flex flex-col justify-between hover:border-sky-500/50 transition-colors">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono font-bold text-sky-300 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-800">
                            {language === 'vi' ? 'PHẢN HỒI' : 'REPLY'}
                          </span>
                          <Brain className="w-3.5 h-3.5 text-sky-400" />
                        </div>
                        <div className="text-xs font-bold text-white mb-1">Gemini 2.5 Flash</div>
                        <p className="text-[11px] text-slate-300 leading-snug">
                          {language === 'vi'
                            ? 'Nạp ngữ cảnh đề thi vào Prompt gửi Gemini (có cơ chế xoay vòng Key), phản hồi chính xác đến học viên.'
                            : 'Injects exam context into Gemini prompt (with Key Rotation), returning grounded explanations to learner.'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Resilience Fallback Track */}
                  <div className="p-3.5 bg-amber-950/40 border border-amber-500/40 rounded-xl flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400 shrink-0 mt-0.5">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div className="text-xs leading-relaxed">
                      <span className="font-bold text-amber-300 block mb-0.5">
                        {language === 'vi'
                          ? 'Lớp Dự phòng Sự cố (Resilience Fallback): General-AI Fallback'
                          : 'Resilience Fallback Path: General-AI Fallback'}
                      </span>
                      <p className="text-slate-300 text-[11px] leading-relaxed">
                        {language === 'vi'
                          ? 'Nếu Quiz Service bận hoặc timeout không lấy được ngữ cảnh đề thi, Chatbot tự động chuyển sang chế độ General-AI, trợ lý tiếp tục đối thoại giải thích ngữ pháp tổng quát mà không ngắt quãng trải nghiệm của người học.'
                          : 'If Quiz Service times out or fails to fetch question context, Chatbot gracefully degrades to General-AI mode, allowing Gemini to explain general concepts without throwing 500 errors.'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl">
                    <span className="font-bold text-sky-700 block mb-1">
                      {language === 'vi' ? 'Ngữ cảnh Đề thi Thực tế' : 'Ground-Truth Context'}
                    </span>
                    <p className="text-[#475569] leading-relaxed">
                      {language === 'vi'
                        ? 'Thay vì hỏi AI trả lời chung chung, hệ thống trích xuất câu hỏi gốc, đáp án chính thức và giải thích ngữ pháp từ CSDL Quiz để cung cấp ngữ cảnh từ dữ liệu đề thi nội bộ, giúp giảm câu trả lời chung chung và hallucination.'
                        : 'Instead of generic AI output, the system retrieves ground-truth question items, official answers, and grammar explanations from Quiz Service to provide internal context, reducing generic responses and LLM hallucinations.'}
                    </p>
                  </div>
                  <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl">
                    <span className="font-bold text-sky-700 block mb-1">
                      {language === 'vi' ? 'Suy thoái Mềm (Graceful Degradation)' : 'Graceful Degradation'}
                    </span>
                    <p className="text-[#475569] leading-relaxed">
                      {language === 'vi'
                        ? 'Khi Quiz Service gặp sự cố hoặc quá tải, Chatbot Service không báo lỗi mà tự động chuyển sang chế độ General-AI, đảm bảo cuộc trò chuyện diễn ra liên tục.'
                        : 'If Quiz Service times out or fails, Chatbot Service does not error out; it gracefully degrades to General-AI mode, ensuring an uninterrupted chat experience.'}
                    </p>
                  </div>
                  <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl">
                    <span className="font-bold text-sky-700 block mb-1">
                      {language === 'vi' ? 'Dự phòng Xoay vòng Khóa API' : 'API Key Fallback Rotation'}
                    </span>
                    <p className="text-[#475569] leading-relaxed">
                      {language === 'vi'
                        ? 'Vòng lặp tự động chuyển tiếp sang khóa tiếp theo trong GEMINI_API_KEYS khi gặp lỗi HTTP 429 hoặc quota, duy trì khả năng phục vụ liên tục.'
                        : 'Automatic failover iteration through GEMINI_API_KEYS upon HTTP 429 or quota exhaustion, maintaining continuous AI availability.'}
                    </p>
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
                ? 'Hệ thống được xác thực qua bộ 51 trường hợp kiểm thử (51 Test Cases) bao phủ các workflow chức năng, integration và security chính trên toàn bộ 6 vi dịch vụ với tỷ lệ đạt 100% PASS.'
                : 'The system is verified through a 51-test-case validation suite covering primary functional workflows, inter-service integration, and security across 6 microservices with a 100% PASS rate.'}
            </p>

            {/* Test Summary Metrics Banner */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { value: '51', label: language === 'vi' ? 'Tổng số Test Cases' : 'Total Test Cases', color: '#5E6AD2' },
                { value: '51', label: language === 'vi' ? 'Đạt (Passed)' : 'Passed (100%)', color: '#10B981' },
                { value: '0', label: language === 'vi' ? 'Lỗi (Failed)' : 'Failed', color: '#64748B' },
                { value: '100%', label: language === 'vi' ? 'Tỷ lệ Pass' : 'Pass Rate', color: '#8B5CF6' },
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
                {language === 'vi' ? 'Phân bổ 51 Test Cases theo 9 Phân hệ' : 'Test Case Distribution across 9 Modules'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  {
                    name: language === 'vi' ? 'Xác thực & Tài khoản (Auth)' : 'Authentication & Accounts',
                    tests: '11/11 PASS',
                    color: '#8B5CF6',
                    desc: language === 'vi' ? 'JWT, OAuth 2.0, OTP Email, Đổi mật khẩu' : 'JWT, OAuth 2.0, OTP Email, Password reset',
                  },
                  {
                    name: language === 'vi' ? 'Động cơ Bài thi (TOEIC Engine)' : 'TOEIC Test Engine',
                    tests: '9/9 PASS',
                    color: '#06B6D4',
                    desc: language === 'vi' ? '7 Parts, Bắt đầu, Nộp bài, Chấm điểm tự động' : '7 Parts, start/submit, auto-scoring, review',
                  },
                  {
                    name: language === 'vi' ? 'Trợ lý AI Chatbot (Gemini)' : 'AI Chatbot Assistant',
                    tests: '6/6 PASS',
                    color: '#5E6AD2',
                    desc: language === 'vi' ? 'Ngữ cảnh đa lượt, Xoay vòng Key, Gating VIP' : 'Multi-turn context, key rotation, VIP limit',
                  },
                  {
                    name: language === 'vi' ? 'Thanh toán ZaloPay (Payment)' : 'ZaloPay Payment Gateway',
                    tests: '6/6 PASS',
                    color: '#F59E0B',
                    desc: language === 'vi' ? 'Mã QR động, HMAC-SHA256, Cộng dồn VIP' : 'Dynamic QR, HMAC Webhook, VIP extension',
                  },
                  {
                    name: language === 'vi' ? 'An toàn & Bảo mật (Security)' : 'Security & Protection',
                    tests: '5/5 PASS',
                    color: '#10B981',
                    desc: language === 'vi' ? 'CORS whitelist, JWT Tampering 401, Rate Limit' : 'CORS, JWT Tamper 401, RBAC 403, Rate Limit',
                  },
                  {
                    name: language === 'vi' ? 'Quản trị viên (Admin API)' : 'Admin Management',
                    tests: '4/4 PASS',
                    color: '#FB923C',
                    desc: language === 'vi' ? 'Khóa tài khoản, Phân quyền Admin, Quản lý đề' : 'Account lock, role change, test moderation',
                  },
                  {
                    name: language === 'vi' ? 'Thống kê & Báo cáo (Statistics)' : 'Statistics & Analytics',
                    tests: '4/4 PASS',
                    color: '#60A5FA',
                    desc: language === 'vi' ? 'Tỷ lệ đúng theo Part, Biểu đồ xu hướng điểm' : 'Per-Part accuracy, score trend chart, streaks',
                  },
                  {
                    name: language === 'vi' ? 'Dự đoán Điểm (ML Service)' : 'ML Score Prediction',
                    tests: '3/3 PASS',
                    color: '#10B981',
                    desc: language === 'vi' ? 'Dự đoán điểm TOEIC, Kỹ năng yếu, Retrain cron' : 'Score forecast, weak skill analysis, retrain',
                  },
                  {
                    name: language === 'vi' ? 'Tải lên Media (Cloudinary)' : 'Cloud Media Upload',
                    tests: '3/3 PASS',
                    color: '#EC4899',
                    desc: language === 'vi' ? 'Ảnh câu hỏi, Audio bài nghe + đo thời lượng' : 'Question images, listening audio + duration',
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
                  title: language === 'vi' ? 'Bảo mật Webhook & Idempotency' : 'Webhook Security & Idempotency',
                  detail: language === 'vi'
                    ? 'Tái tính toán MAC bằng secret key loại bỏ callback giả mạo; kiểm tra Idempotency trên bảng Transactions chống xử lý trùng lặp webhook.'
                    : 'Recomputes MAC with secret key rejecting forged callbacks; enforces database-level Idempotency on Transactions table against duplicate webhook deliveries.',
                },
                {
                  title: language === 'vi' ? 'Gating VIP Xuyên Dịch Vụ' : 'Cross-Service VIP Gating',
                  detail: language === 'vi'
                    ? 'VIP Check Middleware tự động chặn tài khoản miễn phí vượt quá 15 tin nhắn/ngày (HTTP 429), cho phép VIP dùng không giới hạn.'
                    : 'VIP Check Middleware enforces 15 msgs/day threshold for free tier (HTTP 429) while granting unlimited access to VIP accounts.',
                },
                {
                  title: language === 'vi' ? 'Phòng vệ Endpoint & Token' : 'Endpoint & Token Hardening',
                  detail: language === 'vi'
                    ? 'Từ chối tức thì token JWT bị chỉnh sửa (HTTP 401), cấm user thường truy cập admin route (HTTP 403), rate limit 200 req/15min.'
                    : 'Immediate rejection of tampered JWTs (HTTP 401), strict RBAC blocking user tokens on admin routes (HTTP 403), 200 req/15min rate limiting.',
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

export default ToeicChatbotPage;
