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
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { TOEIC_CHATBOT_DETAIL } from '../data/projects/toeicChatbot.data';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from '../components/LanguageToggle';
import { UI_TRANSLATIONS } from '../data/translations';

const ToeicChatbotPage: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('overview');

  const detail = TOEIC_CHATBOT_DETAIL[language];
  const project = PROJECTS[language].find(p => p.id === 'toeic-ai-microservices')!;
  const t = UI_TRANSLATIONS[language];

  const accent = '#A78BFA'; // AI/purple theme

  const TOC_SECTIONS = [
    { id: 'overview', label: language === 'vi' ? 'Tổng quan & Hiệu quả' : 'Overview & Impact' },
    { id: 'context', label: language === 'vi' ? 'Bối cảnh & Đặt vấn đề' : 'Context & Problem Statement' },
    { id: 'scope', label: language === 'vi' ? 'Mục tiêu & Phạm vi dự án' : 'Objectives & Project Scope' },
    { id: 'ownership', label: language === 'vi' ? 'Trách nhiệm kỹ thuật cá nhân' : 'My Engineering Ownership' },
    { id: 'architecture', label: language === 'vi' ? 'Kiến trúc Hệ thống Tổng thể' : 'System Architecture' },
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
                {language === 'vi' ? 'HỆ THỐNG VI DỊCH VỤ · TRÍ TUỆ NHÂN TẠO · HỌC MÁY' : 'MICROSERVICES · AI CHATBOT · MACHINE LEARNING'}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#f3f4f6] tracking-tight mb-6 leading-tight">
              TOEIC Learning &<br />
              <span style={{ color: accent }}>AI Chatbot Ecosystem</span>
            </h1>
            <p className="text-[#d1d5db] leading-relaxed mb-10 max-w-3xl font-normal text-lg">{detail.overview}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: '6', label: language === 'vi' ? 'Vi dịch vụ độc lập' : 'Microservices', color: '#A78BFA' },
                { value: '55+', label: language === 'vi' ? 'API Endpoints' : 'API Endpoints', color: '#4F9CF9' },
                { value: '9', label: language === 'vi' ? 'Docker Containers' : 'Docker Containers', color: '#34D399' },
                { value: '51/51', label: language === 'vi' ? 'Test Cases PASS' : 'Test Cases PASS', color: '#F59E0B' },
              ].map((m, i) => (
                <div key={i} className="p-5 bg-[#121212] border border-[#262626] rounded text-center">
                  <div className="text-2xl font-black font-mono mb-1" style={{ color: m.color }}>{m.value}</div>
                  <div className="text-xs text-[#9ca3af] font-medium leading-tight">{m.label}</div>
                </div>
              ))}
            </div>
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
                  ? 'TOEIC là chứng chỉ tiếng Anh được hàng triệu người lao động và sinh viên Việt Nam theo đuổi, nhưng phần lớn nền tảng luyện thi hiện tại chỉ cung cấp bài thi tĩnh, thiếu công cụ phân tích điểm yếu cá nhân, không có trợ lý AI hỏi đáp tức thì, và chi phí gia sư riêng quá cao.'
                  : 'TOEIC is pursued by millions of Vietnamese workers and students annually, but existing preparation platforms offer only static tests, lack personalized weakness analysis, provide no instant AI tutoring, and private tutoring costs remain prohibitively high.'}
              </p>
            </div>

            {/* Pain Points Grid */}
            <div className="p-6 bg-[#121212] border border-[#262626] rounded mb-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#A78BFA] mb-5 flex items-center gap-2">
                <ChevronRight className="w-4 h-4 shrink-0" />
                {language === 'vi' ? 'Các Vấn đề Người học Gặp phải' : 'Key Pain Points for TOEIC Learners'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    color: '#F472B6',
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
                    color: '#4F9CF9',
                    title: language === 'vi' ? 'Thiếu công cụ hỏi đáp tức thì' : 'No Instant Q&A Capability',
                    detail: language === 'vi'
                      ? 'Khi gặp câu khó, người học không có ai để hỏi ngay lập tức về ngữ pháp, từ vựng hay chiến lược làm bài trong bối cảnh TOEIC.'
                      : 'When stuck on difficult questions, learners have no way to get instant grammar, vocabulary, or strategy explanations in a TOEIC context.',
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
            <div className="p-5 bg-gradient-to-r from-[#1a102e] to-[#121212] border border-[#A78BFA]/40 rounded">
              <div className="flex items-center gap-2.5 mb-2" style={{ color: accent }}>
                <CheckCircle className="w-5 h-5 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider font-mono">
                  {language === 'vi' ? 'GIẢI PHÁP KIẾN TRÚC (ARCHITECTURAL SOLUTION)' : 'ARCHITECTURAL SOLUTION'}
                </span>
              </div>
              <p className="text-base text-[#f3f4f6] font-medium leading-relaxed">
                {language === 'vi'
                  ? 'Xây dựng nền tảng luyện thi TOEIC toàn diện trên Kiến trúc Vi dịch vụ (Microservices) với 3 trụ cột: (1) Động cơ Bài thi TOEIC đầy đủ 7 Parts với chấm điểm tự động, (2) Trợ lý AI Chatbot (Google Gemini 2.5 Flash) hỏi đáp tức thì như gia sư riêng, (3) Đường ống Học máy dự đoán điểm và phân tích kỹ năng yếu cá nhân hóa.'
                  : 'Built a comprehensive TOEIC preparation platform on Microservices Architecture with 3 pillars: (1) Full 7-Part TOEIC test engine with automated scoring, (2) AI Chatbot tutor (Google Gemini 2.5 Flash) for instant personalized Q&A, (3) Machine Learning pipeline for score prediction and personalized weak skill diagnosis.'}
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

            {/* 3 Core Goals */}
            <div className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#9ca3af] mb-4">
                {language === 'vi' ? '3 Trụ cột Kỹ thuật Cốt lõi' : '3 Core Engineering Pillars'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    color: '#4F9CF9', num: '01',
                    title: language === 'vi' ? 'Động cơ Bài thi TOEIC' : 'TOEIC Test Engine',
                    desc: language === 'vi'
                      ? 'Hỗ trợ đầy đủ 7 Parts TOEIC (Listening 1-4, Reading 5-7), chấm điểm tự động, chế độ ôn tập xem đáp án đúng và giải thích chi tiết.'
                      : 'Full 7-Part TOEIC support (Listening 1-4, Reading 5-7), auto-scoring, review mode with correct answers and detailed explanations.',
                  },
                  {
                    color: '#A78BFA', num: '02',
                    title: language === 'vi' ? 'Trợ lý AI Chatbot' : 'AI Chatbot Tutor',
                    desc: language === 'vi'
                      ? 'Google Gemini 2.5 Flash hỗ trợ hội thoại đa lượt có ngữ cảnh, xoay vòng khóa API phân tán tải, giới hạn VIP 15 tin nhắn/ngày cho tài khoản miễn phí.'
                      : 'Google Gemini 2.5 Flash multi-turn context-aware conversations, round-robin API key rotation, VIP gating (15 msgs/day free tier).',
                  },
                  {
                    color: '#34D399', num: '03',
                    title: language === 'vi' ? 'Đường ống Học máy' : 'ML Prediction Pipeline',
                    desc: language === 'vi'
                      ? 'Python Flask + scikit-learn dự đoán điểm TOEIC, phân tích kỹ năng yếu theo Part, tự động huấn luyện lại mô hình hàng ngày lúc 2:00 AM.'
                      : 'Python Flask + scikit-learn TOEIC score prediction, per-Part weak skill analysis, automated daily model retraining at 2:00 AM.',
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
                  { value: '6', label: language === 'vi' ? 'Vi dịch vụ tự chủ' : 'Autonomous Microservices', color: '#A78BFA' },
                  { value: '4', label: language === 'vi' ? 'CSDL cách ly (DB-per-Svc)' : 'Isolated Databases', color: '#4F9CF9' },
                  { value: '51/51', label: language === 'vi' ? 'Test Cases (100% PASS)' : 'Test Cases (100% PASS)', color: '#34D399' },
                  { value: '55+', label: language === 'vi' ? 'API Endpoints (Swagger)' : 'API Endpoints (Swagger)', color: '#F59E0B' },
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
                ? 'Trong nhóm 3 thành viên, tôi đảm nhiệm vai trò Kỹ sư Phần mềm & Lập trình viên Backend chính — phụ trách toàn bộ thiết kế kiến trúc Microservices, phát triển 5 dịch vụ Backend, tích hợp AI Chatbot, ML Pipeline, thanh toán ZaloPay và hạ tầng DevOps Docker.'
                : 'In the 3-person team, I served as the primary Software Engineer & Backend Developer — owning the entire Microservices architecture design, all 5 Backend service implementations, AI Chatbot integration, ML Pipeline, ZaloPay payment, and Docker DevOps infrastructure.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  area: language === 'vi' ? 'Kiến trúc Microservices & Auth Service' : 'Microservices Architecture & Auth Service',
                  badge: '100% Ownership',
                  color: '#A78BFA',
                  items: language === 'vi' ? [
                    'Thiết kế kiến trúc 6 vi dịch vụ độc lập với Database-per-Service pattern (4 CSDL SQL Server cách ly)',
                    'Cấu hình Nginx API Gateway routing theo tiền tố đường dẫn cho toàn bộ hệ thống',
                    'Triển khai JWT dual-token (Access 7d + Refresh 30d), Google OAuth 2.0, OTP Email, RBAC (Admin/User)',
                    'Thiết kế VIP middleware kiểm tra giới hạn tin nhắn Chatbot xuyên dịch vụ (cross-service)',
                  ] : [
                    'Designed 6 autonomous microservices with Database-per-Service pattern (4 isolated SQL Server databases)',
                    'Configured Nginx API Gateway with path-prefix routing for all services',
                    'Implemented JWT dual-token strategy (Access 7d + Refresh 30d), Google OAuth 2.0, Email OTP, RBAC',
                    'Engineered VIP middleware for cross-service chatbot message limit enforcement',
                  ],
                },
                {
                  area: language === 'vi' ? 'Quiz Service & TOEIC Test Engine' : 'Quiz Service & TOEIC Test Engine',
                  badge: language === 'vi' ? 'Core Backend' : 'Core Backend',
                  color: '#4F9CF9',
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
                  color: '#34D399',
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
                ? 'Sơ đồ kiến trúc: Flutter Client → Nginx API Gateway → 6 Vi dịch vụ độc lập → 4 CSDL SQL Server → RabbitMQ Queue → Email Worker → Google Gemini AI & ZaloPay & Python ML Service.'
                : 'Architecture flow: Flutter Client → Nginx API Gateway → 6 Independent Microservices → 4 SQL Server Databases → RabbitMQ Queue → Email Worker → Google Gemini AI & ZaloPay & Python ML Service.'}
            </p>

            {/* Architecture Diagram */}
            <div className="bg-[#0b0c10] border border-[#262626] rounded-xl p-6 md:p-8 overflow-x-auto">
              <div className="max-w-[900px] mx-auto">

                {/* Step 1: Client */}
                <div className="flex justify-center">
                  <div className="px-8 py-4 bg-[#131b2e] border-2 border-[#38BDF8]/50 rounded-xl flex items-center gap-4 shadow-lg shadow-[#38BDF8]/5 max-w-[500px] w-full">
                    <div className="w-11 h-11 rounded-xl bg-[#38BDF8]/15 border border-[#38BDF8]/40 flex items-center justify-center shrink-0">
                      <Globe className="w-6 h-6 text-[#38BDF8]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-bold text-[#38BDF8] bg-[#38BDF8]/15 px-2 py-0.5 rounded-full font-mono">STEP 1</span>
                        <span className="text-sm font-bold text-[#f1f5f9]">
                          {language === 'vi' ? 'Flutter App (Android / iOS / Web)' : 'Flutter App (Android / iOS / Web)'}
                        </span>
                      </div>
                      <p className="text-xs text-[#94a3b8] leading-relaxed">
                        {language === 'vi'
                          ? 'Ứng dụng đa nền tảng từ mã nguồn duy nhất, quản lý trạng thái GetX, phát âm thanh bài nghe, biểu đồ thống kê fl_chart.'
                          : 'Cross-platform app from single codebase, GetX state management, just_audio listening playback, fl_chart statistics.'}
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

                {/* Step 2: Nginx Gateway */}
                <div className="flex justify-center">
                  <div className="px-8 py-4 bg-[#1c1a0e] border-2 border-[#EAB308]/50 rounded-xl flex items-center gap-4 shadow-lg shadow-[#EAB308]/5 max-w-[500px] w-full">
                    <div className="w-11 h-11 rounded-xl bg-[#EAB308]/15 border border-[#EAB308]/40 flex items-center justify-center shrink-0">
                      <Shield className="w-6 h-6 text-[#EAB308]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-bold text-[#EAB308] bg-[#EAB308]/15 px-2 py-0.5 rounded-full font-mono">STEP 2</span>
                        <span className="text-sm font-bold text-[#f1f5f9]">
                          {language === 'vi' ? 'Nginx API Gateway (:8080)' : 'Nginx API Gateway (:8080)'}
                        </span>
                      </div>
                      <p className="text-xs text-[#94a3b8] leading-relaxed">
                        {language === 'vi'
                          ? 'Điểm truy cập duy nhất, định tuyến yêu cầu theo tiền tố đường dẫn, tiêm tiêu đề bảo mật, rate limiting.'
                          : 'Single ingress point, path-prefix routing, security header injection, rate limiting.'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center py-2">
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-4 bg-[#EAB308]/40" />
                    <span className="text-[11px] text-[#94a3b8] font-mono bg-[#141414] px-3 py-0.5 rounded-full border border-[#333] my-1">
                      {language === 'vi' ? 'Phân phối đến 6 dịch vụ độc lập' : 'Distributes to 6 independent services'}
                    </span>
                    <ArrowDown className="w-4 h-4 text-[#A78BFA]" />
                  </div>
                </div>

                {/* Step 3: 6 Microservices */}
                <div className="p-5 bg-[#111116] border-2 border-[#A78BFA]/30 rounded-xl">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold text-[#A78BFA] bg-[#A78BFA]/15 px-2 py-0.5 rounded-full font-mono">STEP 3</span>
                    <span className="text-sm font-bold text-[#f1f5f9]">
                      {language === 'vi' ? '6 Dịch vụ Độc lập — Database-per-Service' : '6 Independent Services — Database-per-Service'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      { icon: <Shield className="w-4 h-4" />, name: language === 'vi' ? 'Xác thực (Auth)' : 'Auth Service', desc: language === 'vi' ? 'JWT, OAuth 2.0, OTP, RBAC' : 'JWT, OAuth 2.0, OTP, RBAC', color: '#C084FC', port: ':8081' },
                      { icon: <BookOpen className="w-4 h-4" />, name: language === 'vi' ? 'Đề thi (Quiz)' : 'Quiz Service', desc: language === 'vi' ? 'TOEIC Engine, Chấm điểm, Thống kê' : 'TOEIC Engine, Scoring, Statistics', color: '#4F9CF9', port: ':8082' },
                      { icon: <MessageSquare className="w-4 h-4" />, name: language === 'vi' ? 'Trợ lý AI (Chatbot)' : 'Chatbot Service', desc: language === 'vi' ? 'Gemini 2.5 Flash, Hội thoại đa lượt' : 'Gemini 2.5 Flash, Multi-turn', color: '#A78BFA', port: ':8084', highlight: true },
                      { icon: <CreditCard className="w-4 h-4" />, name: language === 'vi' ? 'Thanh toán (Payment)' : 'Payment Service', desc: language === 'vi' ? 'ZaloPay QR, HMAC Webhook, VIP' : 'ZaloPay QR, HMAC Webhook, VIP', color: '#F59E0B', port: ':8083' },
                      { icon: <Mail className="w-4 h-4" />, name: language === 'vi' ? 'Email Worker' : 'Email Worker', desc: language === 'vi' ? 'RabbitMQ Consumer, Nodemailer' : 'RabbitMQ Consumer, Nodemailer', color: '#FB923C', port: 'queue' },
                      { icon: <Brain className="w-4 h-4" />, name: language === 'vi' ? 'Học máy (ML)' : 'ML Service', desc: language === 'vi' ? 'Python Flask, scikit-learn, Auto-retrain' : 'Python Flask, scikit-learn, Auto-retrain', color: '#34D399', port: ':5000' },
                    ].map((svc, i) => (
                      <div key={i} className={`p-3 rounded-lg border transition-all ${svc.highlight ? 'ring-1 ring-[#A78BFA]/30' : ''}`}
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
                    <span className="text-[11px] text-[#94a3b8] font-mono bg-[#A78BFA]/10 text-[#A78BFA] px-3 py-1 rounded-full border border-[#A78BFA]/25">
                      {language === 'vi'
                        ? '⚡ Mỗi dịch vụ có Database riêng — hỏng 1 cái không ảnh hưởng 5 cái còn lại'
                        : '⚡ Each service owns its own database — one failure doesn\'t cascade to others'}
                    </span>
                  </div>
                </div>

                <div className="flex justify-center py-2">
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-4 bg-[#A78BFA]/40" />
                    <span className="text-[11px] text-[#94a3b8] font-mono bg-[#141414] px-3 py-0.5 rounded-full border border-[#333] my-1">
                      {language === 'vi' ? 'Kết nối hạ tầng & dịch vụ bên ngoài' : 'Connects to infrastructure & external services'}
                    </span>
                    <ArrowDown className="w-4 h-4 text-[#EF4444]" />
                  </div>
                </div>

                {/* Step 4: Infrastructure */}
                <div className="p-5 bg-[#111111] border border-[#2a2a2a] rounded-xl">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold text-[#EF4444] bg-[#EF4444]/15 px-2 py-0.5 rounded-full font-mono">STEP 4</span>
                    <span className="text-sm font-bold text-[#f1f5f9]">
                      {language === 'vi' ? 'Hạ tầng Lưu trữ & Dịch vụ Bên ngoài' : 'Storage Infrastructure & External Services'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="p-3 rounded-lg bg-[#0e0e12] border border-[#EF4444]/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Database className="w-4 h-4 text-[#EF4444]" />
                        <span className="text-xs font-bold text-[#fca5a5]">SQL Server 2022</span>
                      </div>
                      <p className="text-[11px] text-[#94a3b8] leading-relaxed">
                        {language === 'vi' ? '4 CSDL cách ly hoàn toàn (Auth, Quiz, Chatbot, Payment)' : '4 fully isolated databases (Auth, Quiz, Chatbot, Payment)'}
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-[#0e0e12] border border-[#FB923C]/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Headphones className="w-4 h-4 text-[#FB923C]" />
                        <span className="text-xs font-bold text-[#fdba74]">RabbitMQ</span>
                      </div>
                      <p className="text-[11px] text-[#94a3b8] leading-relaxed">
                        {language === 'vi' ? 'Hàng đợi email bất đồng bộ (OTP, thông báo VIP)' : 'Async email queue (OTP, VIP notifications)'}
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-[#0e0e12] border border-[#A78BFA]/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Cpu className="w-4 h-4 text-[#A78BFA]" />
                        <span className="text-xs font-bold text-[#c4b5fd]">Gemini AI + ZaloPay</span>
                      </div>
                      <p className="text-[11px] text-[#94a3b8] leading-relaxed">
                        {language === 'vi' ? 'AI Chatbot REST API & Cổng thanh toán QR' : 'AI Chatbot REST API & QR Payment Gateway'}
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-[#0e0e12] border border-[#34D399]/30">
                      <div className="flex items-center gap-2 mb-2">
                        <Container className="w-4 h-4 text-[#34D399]" />
                        <span className="text-xs font-bold text-[#86efac]">Docker Compose</span>
                      </div>
                      <p className="text-[11px] text-[#94a3b8] leading-relaxed">
                        {language === 'vi' ? '9 containers, 1 lệnh khởi động toàn bộ' : '9 containers, single-command deployment'}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
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
                ? 'Hệ thống đã trải qua bộ 51 trường hợp kiểm thử (51 Test Cases) bao phủ toàn diện 9 phân hệ chức năng, tính an toàn và bảo mật trên toàn bộ 6 vi dịch vụ với tỷ lệ đạt tuyệt đối 100% PASS.'
                : 'The system underwent a comprehensive 51-test-case validation suite covering all 9 functional and security domains across 6 microservices with a 100% PASS rate.'}
            </p>

            {/* Test Summary Metrics Banner */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { value: '51', label: language === 'vi' ? 'Tổng số Test Cases' : 'Total Test Cases', color: '#4F9CF9' },
                { value: '51', label: language === 'vi' ? 'Đạt (Passed)' : 'Passed (100%)', color: '#34D399' },
                { value: '0', label: language === 'vi' ? 'Lỗi (Failed)' : 'Failed', color: '#8e9192' },
                { value: '100%', label: language === 'vi' ? 'Tỷ lệ Pass' : 'Pass Rate', color: '#A78BFA' },
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
                {language === 'vi' ? 'Phân bổ 51 Test Cases theo 9 Phân hệ' : 'Test Case Distribution across 9 Modules'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  {
                    name: language === 'vi' ? 'Xác thực & Tài khoản (Auth)' : 'Authentication & Accounts',
                    tests: '11/11 PASS',
                    color: '#C084FC',
                    desc: language === 'vi' ? 'JWT, OAuth 2.0, OTP Email, Đổi mật khẩu' : 'JWT, OAuth 2.0, OTP Email, Password reset',
                  },
                  {
                    name: language === 'vi' ? 'Động cơ Bài thi (TOEIC Engine)' : 'TOEIC Test Engine',
                    tests: '9/9 PASS',
                    color: '#4F9CF9',
                    desc: language === 'vi' ? '7 Parts, Bắt đầu, Nộp bài, Chấm điểm tự động' : '7 Parts, start/submit, auto-scoring, review',
                  },
                  {
                    name: language === 'vi' ? 'Trợ lý AI Chatbot (Gemini)' : 'AI Chatbot Assistant',
                    tests: '6/6 PASS',
                    color: '#A78BFA',
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
                    color: '#34D399',
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
                    color: '#34D399',
                    desc: language === 'vi' ? 'Dự đoán điểm TOEIC, Kỹ năng yếu, Retrain cron' : 'Score forecast, weak skill analysis, retrain',
                  },
                  {
                    name: language === 'vi' ? 'Tải lên Media (Cloudinary)' : 'Cloud Media Upload',
                    tests: '3/3 PASS',
                    color: '#F472B6',
                    desc: language === 'vi' ? 'Ảnh câu hỏi, Audio bài nghe + đo thời lượng' : 'Question images, listening audio + duration',
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
                  title: language === 'vi' ? 'Bảo mật Webhook HMAC-SHA256' : 'HMAC-SHA256 Webhook Security',
                  detail: language === 'vi'
                    ? 'Tái tính toán MAC bằng secret key, chặn 100% callback giả mạo và chống Replay Attack qua kiểm tra trùng appTransId.'
                    : 'Recomputes MAC with secret key; rejects 100% forged callbacks and prevents Replay Attacks via appTransId deduplication.',
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

export default ToeicChatbotPage;
