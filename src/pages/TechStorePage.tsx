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
  Zap,
  MessageSquare,
  Cpu,
} from 'lucide-react';
import { TECH_STORE_DETAIL } from '../data/projects/techStore.data';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from '../components/LanguageToggle';
import { UI_TRANSLATIONS } from '../data/translations';
import { ProjectShowcaseGallery } from '../components/ProjectShowcaseGallery';

const TechStorePage: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('overview');

  const detail = TECH_STORE_DETAIL[language];
  const t = UI_TRANSLATIONS[language];

  const accent = '#3B82F6'; // Modern Electric Blue Theme

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
              className="flex items-center gap-2 px-4 py-2 border border-[#3B82F6]/40 text-[#60A5FA] text-xs font-bold hover:bg-[#3B82F6]/10 transition-colors tracking-wider rounded">
              <Smartphone className="w-4 h-4" /> Mobile App Repo <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href={detail.githubAdminUrl} target="_blank" rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold hover:bg-[#D4AF37]/10 transition-colors tracking-wider rounded">
              <Globe className="w-4 h-4" /> Admin Web Repo <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-[1500px] mx-auto px-6 flex gap-0">
        {/* Left Sticky Sidebar */}
        <aside className="hidden lg:flex flex-col w-[280px] shrink-0">
          <div className="sticky top-[65px] max-h-[calc(100vh-65px)] overflow-y-auto pt-8 pb-10 pr-6 flex flex-col gap-6">
            <div>
              <p className="text-xs text-[#9ca3af] uppercase tracking-wider font-bold mb-3">{t.detailCommon.quickInfoTitle}</p>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-[#9ca3af] mb-1 font-medium">{t.detailCommon.statusLabel}</p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
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
                        ? 'text-[#60A5FA] font-bold'
                        : 'text-[#9ca3af] hover:text-[#f3f4f6]'
                      }`}
                  >
                    {activeSection === s.id && (
                      <span className="w-3.5 h-[2px] bg-[#60A5FA] shrink-0" />
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
              <span className="w-2 h-2 rounded-full" style={{ background: accent }} />
              <span className="text-xs uppercase tracking-widest font-bold" style={{ color: accent }}>
                RETAIL E-COMMERCE & CLOUD BACKEND ECOSYSTEM
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-[#f3f4f6]">
              Tech Store Android & Web Ecosystem
            </h1>

            <p className="text-lg text-[#9ca3af] leading-relaxed mb-8 max-w-4xl">
              {detail.overview}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { label: language === 'vi' ? 'Kiểm thử tự động' : 'Automated Tests', value: '57/57 Tests', sub: '100% PASS (7 Suites)', color: '#3B82F6' },
                { label: language === 'vi' ? 'Khóa kho chống Oversell' : 'Stock Lock TTL', value: '5 Phút TTL', sub: 'Pessimistic ACID + Cron 60s', color: '#10B981' },
                { label: language === 'vi' ? 'Chuẩn bảo mật thẻ' : 'Card Security Standard', value: 'PCI-DSS', sub: 'Stripe Vault Zero PAN Exposure', color: '#F59E0B' },
                { label: language === 'vi' ? 'Đồng bộ CSKH Real-time' : 'Real-time CSKH Sync', value: '< 100ms', sub: 'Firestore onSnapshot + FCM', color: '#8B5CF6' },
              ].map((m, i) => (
                <div key={i} className="p-4 border border-[#222222] bg-[#141414] rounded">
                  <p className="text-xs text-[#9ca3af] font-medium mb-1">{m.label}</p>
                  <p className="text-2xl font-bold font-mono" style={{ color: m.color }}>{m.value}</p>
                  <p className="text-xs text-[#9ca3af] mt-1">{m.sub}</p>
                </div>
              ))}
            </div>

            {/* Architecture Highlights Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                'Android Native Java 11 (MVVM)',
                'Node.js 20 Micro-Backend',
                'React 18 / Vite 5 Admin ERP',
                'Stripe Payment Gateway (Vault)',
                'Firestore ACID Transactions',
                'Pessimistic Stock Reservation',
                'Firebase Cloud Messaging (FCM)',
                '100% Test Coverage on Controllers',
              ].map((h, i) => (
                <span key={i} className="px-3 py-1 bg-[#1a1a1a] border border-[#2a2a2a] text-xs text-[#d1d5db] font-mono rounded">
                  {h}
                </span>
              ))}
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
              themeColor="#3B82F6"
              terminalCommand="npm test -- --coverage --runInBand"
            />
          </section>

          {/* Section 2: Context & Problem Statement */}
          <section id="context" className="space-y-6">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-[#F59E0B]" />
              <h2 className="text-2xl font-bold font-serif text-[#f3f4f6]">
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
                  icon: <MessageSquare className="w-5 h-5 text-[#3B82F6]" />,
                },
              ].map((item, idx) => (
                <div key={idx} className="p-5 border border-[#222222] bg-[#141414] rounded flex flex-col justify-between">
                  <div>
                    <div className="mb-3">{item.icon}</div>
                    <h3 className="text-base font-bold text-[#f3f4f6] mb-2">{item.title}</h3>
                    <p className="text-xs text-[#9ca3af] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Objectives & Scope */}
          <section id="scope" className="space-y-6">
            <div className="flex items-center gap-3">
              <Target className="w-5 h-5 text-[#10B981]" />
              <h2 className="text-2xl font-bold font-serif text-[#f3f4f6]">
                {language === 'vi' ? 'Mục tiêu & Phạm vi dự án' : 'Objectives & Project Scope'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 border border-[#222222] bg-[#141414] rounded">
                <div className="flex items-center gap-2 mb-3 text-[#60A5FA]">
                  <Smartphone className="w-5 h-5" />
                  <h3 className="font-bold text-sm uppercase tracking-wider">
                    {language === 'vi' ? '1. Ứng dụng Di động Khách hàng (Android Client)' : '1. Customer Mobile Client (Android Native)'}
                  </h3>
                </div>
                <ul className="space-y-2 text-xs text-[#9ca3af]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#3B82F6] font-bold">•</span>
                    <span><strong>Kiến trúc MVVM & Material Design 3:</strong> Trải nghiệm mua sắm mượt mà 60fps, danh mục phân cấp, tìm kiếm tức thì theo từ khóa.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3B82F6] font-bold">•</span>
                    <span><strong>Thanh toán thẻ quốc tế Stripe SDK:</strong> Thu thập thông tin thẻ trực tiếp tại Client, đổi lấy Token một lần an toàn tuyệt đối.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3B82F6] font-bold">•</span>
                    <span><strong>Địa chính Việt Nam 3 cấp:</strong> Tích hợp Open API tra cứu Tỉnh/Thành ➔ Quận/Huyện ➔ Phường/Xã động.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3B82F6] font-bold">•</span>
                    <span><strong>Chat CSKH Real-time & Push FCM:</strong> Đồng bộ tin nhắn Firestore tức thì, hiển thị thông báo đẩy khi có tin mới từ Admin.</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 border border-[#222222] bg-[#141414] rounded">
                <div className="flex items-center gap-2 mb-3 text-[#D4AF37]">
                  <Server className="w-5 h-5" />
                  <h3 className="font-bold text-sm uppercase tracking-wider">
                    {language === 'vi' ? '2. Bảng Quản trị Web & Micro-Backend' : '2. Web Admin ERP & Micro-Backend Service'}
                  </h3>
                </div>
                <ul className="space-y-2 text-xs text-[#9ca3af]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] font-bold">•</span>
                    <span><strong>Micro-Backend Node.js/TypeScript:</strong> API chuyên trách tạo Stripe Customer Vault, Payment Intent và quản lý Secret Key.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] font-bold">•</span>
                    <span><strong>Cron Worker giải phóng kho:</strong> Quét định kỳ mỗi 60 giây, hoàn trả hàng về kho với các đơn giữ chỗ quá hạn 5 phút.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] font-bold">•</span>
                    <span><strong>Sổ nhật ký tồn kho (Stock Movement Ledger):</strong> Ghi vết toàn diện lịch sử xuất/nhập kho phục vụ kiểm toán tài sản.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D4AF37] font-bold">•</span>
                    <span><strong>State Machine Đơn hàng:</strong> Tự động kích hoạt luồng thông báo FCM khi đơn hàng chuyển từ Packing ➔ Delivered.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: Engineering Ownership */}
          <section id="ownership" className="space-y-6">
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-[#D4AF37]" />
              <h2 className="text-2xl font-bold font-serif text-[#f3f4f6]">
                {language === 'vi' ? 'Trách nhiệm kỹ thuật cá nhân' : 'My Engineering Ownership'}
              </h2>
            </div>

            <div className="p-6 border border-[#222222] bg-[#141414] rounded space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-[#222222]">
                <div className="p-2 bg-[#3B82F6]/10 rounded border border-[#3B82F6]/30 text-[#60A5FA]">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#f3f4f6]">
                    {language === 'vi' ? 'Kỹ sư Phần mềm & Lập trình viên Backend chính (Lead Backend Engineer)' : 'Software Engineer & Lead Backend Developer'}
                  </h3>
                  <p className="text-xs text-[#9ca3af]">
                    {language === 'vi' ? 'Trực tiếp thiết kế kiến trúc toàn hệ thống, CSDL NoSQL, Pipeline thanh toán và Chiến lược kiểm thử tự động' : 'Directly engineered end-to-end architecture, NoSQL modeling, payment security pipeline, and automated test suites'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#d1d5db]">
                <div className="space-y-2">
                  <p className="font-bold text-[#60A5FA] flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" /> {language === 'vi' ? 'Kiến trúc & Tối ưu Backend' : 'Backend & Concurrency Engineering'}
                  </p>
                  <ul className="space-y-1.5 pl-5 list-disc text-[#9ca3af]">
                    {language === 'vi' ? (
                      <>
                        <li>Thiết kế mô hình CSDL NoSQL Firestore gồm 14 collections và sub-collections.</li>
                        <li>Xây dựng thuật toán <strong className="text-[#f3f4f6]">Pessimistic Stock Reservation</strong> kèm <strong className="text-[#f3f4f6]">TTL 5 phút</strong> và Cron Reconciliation Worker giải phóng kho tự động mỗi 60s.</li>
                        <li>Triệt tiêu bài toán N+1 Query trên Firestore bằng cơ chế <strong className="text-[#f3f4f6]">In-Memory Lookup Caching (<code className="text-[#60A5FA]">userCache</code>)</strong>, tiết kiệm 50%+ số lượng đọc.</li>
                        <li>Phát triển RESTful Backend Service hoàn chỉnh bằng Node.js 20, Express 4.21 và TypeScript 5.</li>
                      </>
                    ) : (
                      <>
                        <li>Designed Cloud Firestore NoSQL schema comprising 14 collections and sub-collections.</li>
                        <li>Engineered <strong className="text-[#f3f4f6]">Pessimistic Stock Reservation</strong> with a <strong className="text-[#f3f4f6]">5-minute TTL</strong> and 60-second automated Cron reconciliation worker.</li>
                        <li>Eliminated Firestore N+1 queries via <strong className="text-[#f3f4f6]">In-Memory Lookup Caching (<code className="text-[#60A5FA]">userCache</code>)</strong>, reducing read operations by 50%+.</li>
                        <li>Built end-to-end RESTful Backend Service using Node.js 20, Express 4.21, and TypeScript 5.</li>
                      </>
                    )}
                  </ul>
                </div>

                <div className="space-y-2">
                  <p className="font-bold text-[#10B981] flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" /> {language === 'vi' ? 'Bảo mật Thanh toán & Kiểm thử QA' : 'Payment Security & QA Testing'}
                  </p>
                  <ul className="space-y-1.5 pl-5 list-disc text-[#9ca3af]">
                    {language === 'vi' ? (
                      <>
                        <li>Triển khai Pipeline thanh toán quốc tế Stripe tuân thủ nghiêm ngặt chuẩn <strong className="text-[#f3f4f6]">PCI-DSS Level 1</strong> (Zero Card Data Exposure).</li>
                        <li>Thiết kế cơ chế hoàn tất đơn hàng nguyên tử 4 bảng bằng <strong className="text-[#f3f4f6]">Firebase WriteBatch</strong> (Order + Invoice + PaymentLog + Cart cleanup).</li>
                        <li>Tích hợp luồng thông báo sự kiện tự động <strong className="text-[#f3f4f6]">Firebase Cloud Messaging (FCM)</strong>.</li>
                        <li>Viết toàn bộ <strong className="text-[#10B981]">57/57 Test Cases tự động</strong> (Jest 30, JUnit 4 JVM, Python Benchmark) đạt <strong className="text-[#10B981]">100% Pass Rate</strong>.</li>
                      </>
                    ) : (
                      <>
                        <li>Implemented Stripe international payment pipeline adhering strictly to <strong className="text-[#f3f4f6]">PCI-DSS Level 1</strong> (Zero Card Data Exposure).</li>
                        <li>Architected atomic 4-document order finalization using <strong className="text-[#f3f4f6]">Firebase WriteBatch</strong> (Order + Invoice + PaymentLog + Cart cleanup).</li>
                        <li>Integrated automated event-driven notification triggers via <strong className="text-[#f3f4f6]">Firebase Cloud Messaging (FCM)</strong>.</li>
                        <li>Authored all <strong className="text-[#10B981]">57/57 automated test cases</strong> (Jest 30, JUnit 4 JVM, Python Benchmark) achieving a <strong className="text-[#10B981]">100% Pass Rate</strong>.</li>
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
              <Layers className="w-5 h-5 text-[#60A5FA]" />
              <h2 className="text-2xl font-bold font-serif text-[#f3f4f6]">
                {language === 'vi' ? 'Kiến trúc Hệ thống Tổng thể' : 'System Architecture'}
              </h2>
            </div>

            {/* Architecture Box */}
            <div className="p-6 border border-[#222222] bg-[#141414] rounded">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded">
                  <div className="flex items-center gap-2 mb-2 text-[#60A5FA]">
                    <Smartphone className="w-4 h-4" />
                    <span className="font-bold text-xs uppercase tracking-wider">Mobile Client (Java 11)</span>
                  </div>
                  <p className="text-xs text-[#9ca3af]">
                    Clean Architecture & MVVM, Material 3, RecyclerView, Glide CDN Caching, Stripe Android SDK, Vietnam Provinces API.
                  </p>
                </div>

                <div className="p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded">
                  <div className="flex items-center gap-2 mb-2 text-[#F59E0B]">
                    <Server className="w-4 h-4" />
                    <span className="font-bold text-xs uppercase tracking-wider">Node.js Micro-Backend</span>
                  </div>
                  <p className="text-xs text-[#9ca3af]">
                    {language === 'vi'
                      ? 'Stripe Customer Vault, Payment Intent API, Cron Worker giải phóng kho (60s), In-Memory Cache userCache, DTO Sanitizer.'
                      : 'Stripe Customer Vault, Payment Intent API, 60s Cron Stock Release Worker, In-Memory userCache, DTO Sanitizer.'}
                  </p>
                </div>

                <div className="p-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded">
                  <div className="flex items-center gap-2 mb-2 text-[#10B981]">
                    <Globe className="w-4 h-4" />
                    <span className="font-bold text-xs uppercase tracking-wider">Web Admin Dashboard</span>
                  </div>
                  <p className="text-xs text-[#9ca3af]">
                    React 18 + Vite 5 + Ant Design 5, Sổ nhật ký biến động kho (Stock Ledger), CSKH Real-time Inbox, Recharts Analytics.
                  </p>
                </div>
              </div>

              {/* Data Flow Diagram Card */}
              <div className="p-4 bg-[#0e0e0e] border border-[#222222] rounded space-y-3">
                <p className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider">
                  ✦ CLOUD INFRASTRUCTURE & EVENT-DRIVEN BUS:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                  <div className="p-2 bg-[#171717] border border-[#262626] rounded">
                    <Database className="w-4 h-4 mx-auto mb-1 text-[#F59E0B]" />
                    <span className="font-bold text-[#e5e7eb]">Cloud Firestore</span>
                    <p className="text-[10px] text-[#9ca3af]">ACID Transactions & Listeners</p>
                  </div>
                  <div className="p-2 bg-[#171717] border border-[#262626] rounded">
                    <CreditCard className="w-4 h-4 mx-auto mb-1 text-[#6366F1]" />
                    <span className="font-bold text-[#e5e7eb]">Stripe Gateway</span>
                    <p className="text-[10px] text-[#9ca3af]">PCI-DSS Level 1 Vault</p>
                  </div>
                  <div className="p-2 bg-[#171717] border border-[#262626] rounded">
                    <Zap className="w-4 h-4 mx-auto mb-1 text-[#EC4899]" />
                    <span className="font-bold text-[#e5e7eb]">Firebase FCM</span>
                    <p className="text-[10px] text-[#9ca3af]">Event-Driven Push Notifications</p>
                  </div>
                  <div className="p-2 bg-[#171717] border border-[#262626] rounded">
                    <Globe className="w-4 h-4 mx-auto mb-1 text-[#3B82F6]" />
                    <span className="font-bold text-[#e5e7eb]">Cloudinary CDN</span>
                    <p className="text-[10px] text-[#9ca3af]">Media & Asset Distribution</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Stock Reservation & Payment Lifecycle Diagram */}
          <section id="reservation-flow" className="space-y-6">
            <div className="flex items-center gap-3">
              <RefreshCw className="w-5 h-5 text-[#34D399]" />
              <div>
                <h2 className="text-2xl font-bold font-serif text-[#f3f4f6]">
                  {language === 'vi' ? 'Sơ đồ Quy trình Khóa Tồn kho & Thanh toán' : 'Stock Reservation & Payment Flow'}
                </h2>
                <p className="text-xs text-[#9ca3af] mt-0.5">
                  {language === 'vi' ? 'Quy trình Khóa tồn kho bi quan chống Overselling + Pipeline Thanh toán Stripe 2 giai đoạn' : 'Pessimistic Stock Reservation + 2-Phase PCI-DSS Stripe Payment Flow'}
                </p>
              </div>
            </div>

            {/* Interactive SVG Flow Diagram */}
            <div className="p-6 border border-[#222222] bg-[#141414] rounded overflow-x-auto">
              <svg viewBox="0 0 920 440" className="w-full min-w-[800px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="blueCard" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#172554" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="yellowCard" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#854d0e" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#422006" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="greenCard" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#065f46" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#022c22" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="redCard" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#991b1b" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#450a0a" stopOpacity="0.9" />
                  </linearGradient>
                  <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                    <polygon points="0 0, 8 3, 0 6" fill="#9ca3af" />
                  </marker>
                  <marker id="arrowGreen" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                    <polygon points="0 0, 8 3, 0 6" fill="#34D399" />
                  </marker>
                  <marker id="arrowRed" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                    <polygon points="0 0, 8 3, 0 6" fill="#F87171" />
                  </marker>
                </defs>

                {/* Node 1: Cart Checkout */}
                <g transform="translate(30, 40)">
                  <rect width="180" height="90" rx="8" fill="url(#blueCard)" stroke="#3B82F6" strokeWidth="1.5" />
                  <text x="90" y="30" textAnchor="middle" fill="#60A5FA" fontSize="11" fontWeight="bold" letterSpacing="0.05em">BƯỚC 1: CHECKOUT</text>
                  <text x="90" y="52" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">Khách đặt mua</text>
                  <text x="90" y="70" textAnchor="middle" fill="#93c5fd" fontSize="10">Android Client gửi yêu cầu</text>
                </g>

                {/* Arrow 1 -> 2 */}
                <line x1="210" y1="85" x2="265" y2="85" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                <text x="238" y="78" textAnchor="middle" fill="#9ca3af" fontSize="9">ACID Tx</text>

                {/* Node 2: Pessimistic Stock Reservation */}
                <g transform="translate(270, 40)">
                  <rect width="200" height="90" rx="8" fill="url(#yellowCard)" stroke="#EAB308" strokeWidth="1.5" />
                  <text x="100" y="30" textAnchor="middle" fill="#FDE047" fontSize="11" fontWeight="bold" letterSpacing="0.05em">BƯỚC 2: KHÓA TỒN KHO</text>
                  <text x="100" y="52" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">Tạo Reservation</text>
                  <text x="100" y="70" textAnchor="middle" fill="#fef08a" fontSize="10">Trừ stockQuantity · TTL 5 Phút</text>
                </g>

                {/* Arrow 2 -> 3 */}
                <line x1="470" y1="85" x2="525" y2="85" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                <text x="498" y="78" textAnchor="middle" fill="#9ca3af" fontSize="9">Token tok_</text>

                {/* Node 3: Stripe Payment Intent */}
                <g transform="translate(530, 40)">
                  <rect width="200" height="90" rx="8" fill="#1e1b4b" stroke="#818CF8" strokeWidth="1.5" />
                  <text x="100" y="30" textAnchor="middle" fill="#A5B4FC" fontSize="11" fontWeight="bold" letterSpacing="0.05em">BƯỚC 3: STRIPE VAULT</text>
                  <text x="100" y="52" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">Xử lý Thanh toán</text>
                  <text x="100" y="70" textAnchor="middle" fill="#c7d2fe" fontSize="10">Zero PAN · PCI-DSS Compliant</text>
                </g>

                {/* Arrow 3 -> 4 (Success) */}
                <line x1="730" y1="85" x2="750" y2="85" stroke="#34D399" strokeWidth="1.5" />
                <line x1="750" y1="85" x2="750" y2="230" stroke="#34D399" strokeWidth="1.5" />
                <line x1="750" y1="230" x2="685" y2="230" stroke="#34D399" strokeWidth="1.5" markerEnd="url(#arrowGreen)" />
                <text x="790" y="160" textAnchor="middle" fill="#34D399" fontSize="10" fontWeight="bold">Thành công (200)</text>

                {/* Node 4: WriteBatch Finalize */}
                <g transform="translate(480, 185)">
                  <rect width="200" height="95" rx="8" fill="url(#greenCard)" stroke="#34D399" strokeWidth="1.5" />
                  <text x="100" y="28" textAnchor="middle" fill="#6EE7B7" fontSize="11" fontWeight="bold" letterSpacing="0.05em">HOÀN TẤT ĐƠN HÀNG</text>
                  <text x="100" y="48" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">Firebase WriteBatch</text>
                  <text x="100" y="66" textAnchor="middle" fill="#a7f3d0" fontSize="9">Tạo Order + Hóa đơn + Lịch sử</text>
                  <text x="100" y="80" textAnchor="middle" fill="#a7f3d0" fontSize="9">Xóa Cart + Đổi status 'completed'</text>
                </g>

                {/* Arrow 2 -> Cron Expire (Downward to Error Node) */}
                <line x1="370" y1="130" x2="370" y2="200" stroke="#F87171" strokeWidth="1.5" markerEnd="url(#arrowRed)" strokeDasharray="4 3" />
                <text x="370" y="170" textAnchor="middle" fill="#F87171" fontSize="9" fontWeight="bold">Hết hạn &gt;5 Phút / Hủy đơn</text>

                {/* Node 5: Cron Reconciliation / Release */}
                <g transform="translate(270, 205)">
                  <rect width="200" height="95" rx="8" fill="url(#redCard)" stroke="#F87171" strokeWidth="1.5" />
                  <text x="100" y="28" textAnchor="middle" fill="#FCA5A5" fontSize="11" fontWeight="bold" letterSpacing="0.05em">GIẢI PHÓNG TỒN KHO</text>
                  <text x="100" y="48" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">Cron Worker (60s)</text>
                  <text x="100" y="66" textAnchor="middle" fill="#fecaca" fontSize="9">ACID Tx: stockQuantity + reqQty</text>
                  <text x="100" y="80" textAnchor="middle" fill="#fecaca" fontSize="9">Đổi trạng thái: 'released'</text>
                </g>

                {/* Node 6: State Machine Notification Dispatch */}
                <g transform="translate(480, 320)">
                  <rect width="400" height="85" rx="8" fill="#18181b" stroke="#3F3F46" strokeWidth="1.5" />
                  <text x="200" y="26" textAnchor="middle" fill="#D4AF37" fontSize="11" fontWeight="bold" letterSpacing="0.05em">EVENT-DRIVEN NOTIFICATION PIPELINE</text>
                  <text x="200" y="46" textAnchor="middle" fill="#e4e4e7" fontSize="11">Order FSM: Packing ➔ Picked ➔ In Transit ➔ Delivered ➔ Completed</text>
                  <text x="200" y="66" textAnchor="middle" fill="#a1a1aa" fontSize="10">Backend tự động dispatch Firebase FCM Push Notification đánh thức điện thoại</text>
                </g>

                {/* Arrow 4 -> 6 */}
                <line x1="580" y1="280" x2="580" y2="315" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
              </svg>
            </div>

            {/* Explanatory Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border border-[#222222] bg-[#141414] rounded">
                <div className="flex items-center gap-2 mb-2 text-[#EAB308]">
                  <Lock className="w-4 h-4" />
                  <h3 className="font-bold text-xs uppercase tracking-wider">1. Pessimistic Lock & TTL</h3>
                </div>
                <p className="text-xs text-[#9ca3af] leading-relaxed">
                  {language === 'vi' ? (
                    <>Bọc việc kiểm tra và trừ tồn kho vào một Firestore Transaction nguyên tử. Tạo bản ghi <code className="text-[#FDE047]">stock_reservations</code> với TTL 5 phút. Khóa ngay khi bắt đầu checkout, triệt tiêu 100% rủi ro Overselling.</>
                  ) : (
                    <>Encapsulates stock check and deduction in an atomic Firestore Transaction. Creates a <code className="text-[#FDE047]">stock_reservations</code> record with 5-minute TTL, eliminating 100% overselling risks.</>
                  )}
                </p>
              </div>

              <div className="p-4 border border-[#222222] bg-[#141414] rounded">
                <div className="flex items-center gap-2 mb-2 text-[#818CF8]">
                  <CreditCard className="w-4 h-4" />
                  <h3 className="font-bold text-xs uppercase tracking-wider">2. Zero Card Data Exposure</h3>
                </div>
                <p className="text-xs text-[#9ca3af] leading-relaxed">
                  {language === 'vi' ? (
                    <>Số thẻ và CVV được mã hóa ngay tại thiết bị qua Stripe SDK để lấy token <code className="text-[#A5B4FC]">tok_...</code>. Backend chỉ lưu trữ mã tham chiếu PaymentMethod trong Vault bảo mật, tuyệt đối không lưu số thẻ thô.</>
                  ) : (
                    <>Raw card PAN and CVV are tokenized directly on-device via Stripe SDK to acquire a single-use <code className="text-[#A5B4FC]">tok_...</code>. The backend only holds vault PaymentMethod references.</>
                  )}
                </p>
              </div>

              <div className="p-4 border border-[#222222] bg-[#141414] rounded">
                <div className="flex items-center gap-2 mb-2 text-[#34D399]">
                  <RefreshCw className="w-4 h-4" />
                  <h3 className="font-bold text-xs uppercase tracking-wider">3. Cron Auto-Reconciliation</h3>
                </div>
                <p className="text-xs text-[#9ca3af] leading-relaxed">
                  {language === 'vi' ? (
                    <>Worker ngầm trên Node.js chạy mỗi 60 giây quét toàn bộ các bản ghi <code className="text-[#6EE7B7]">pending</code> quá hạn 5 phút. Tự động kích hoạt Transaction hoàn trả số lượng hàng về kho mà không cần người dùng thao tác.</>
                  ) : (
                    <>Background Node.js Cron Worker runs every 60 seconds scanning expired <code className="text-[#6EE7B7]">pending</code> reservations (&gt;5 mins) to auto-restore inventory via ACID Transactions.</>
                  )}
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Technology Stack */}
          <section id="techstack" className="space-y-6">
            <div className="flex items-center gap-3">
              <Server className="w-5 h-5 text-[#D4AF37]" />
              <h2 className="text-2xl font-bold font-serif text-[#f3f4f6]">
                {language === 'vi' ? 'Ngăn xếp công nghệ' : 'Technology Stack'}
              </h2>
            </div>

            <div className="border border-[#222222] bg-[#141414] rounded overflow-hidden">
              <div className="divide-y divide-[#222222]">
                {detail.techStack.map((item, idx) => (
                  <div key={idx} className="p-4 flex flex-col md:flex-row md:items-start gap-4 hover:bg-[#1a1a1a] transition-colors">
                    <div className="md:w-56 shrink-0">
                      <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider block mb-1">{item.layer}</span>
                      <span className="text-sm font-bold text-[#f3f4f6]">{item.tech}</span>
                      {item.version && item.version !== '—' && (
                        <span className="inline-block ml-2 px-1.5 py-0.5 bg-[#222222] text-[#9ca3af] text-[10px] font-mono rounded">
                          {item.version}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#9ca3af] leading-relaxed flex-1">
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
              <Shield className="w-5 h-5 text-[#10B981]" />
              <div>
                <h2 className="text-2xl font-bold font-serif text-[#f3f4f6]">
                  {language === 'vi' ? 'Kiểm thử & Đảm bảo chất lượng' : 'Testing & Quality Assurance'}
                </h2>
                <p className="text-xs text-[#9ca3af] mt-0.5">
                  {language === 'vi' ? '57/57 Test Cases (100% PASS Rate) trên toàn bộ Mobile Client, Micro-Backend & Web Admin' : '57/57 Automated Test Cases (100% PASS Rate) across Mobile, Micro-Backend & Web Admin'}
                </p>
              </div>
            </div>

            {/* Test Stats Header */}
            <div className="p-4 border border-[#222222] bg-[#141414] rounded flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#10B981]/10 rounded border border-[#10B981]/30 text-[#10B981]">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-[#9ca3af] uppercase font-bold">{language === 'vi' ? 'Tổng số bài kiểm thử' : 'Total Automated Tests'}</p>
                  <p className="text-2xl font-bold font-mono text-[#10B981]">57 / 57 PASSED (100%)</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-xs font-mono">
                <div className="px-3 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded">
                  <span className="text-[#9ca3af]">Web Admin Coverage: </span>
                  <span className="text-[#10B981] font-bold">100% Statements</span>
                </div>
                <div className="px-3 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded">
                  <span className="text-[#9ca3af]">Avg API Latency: </span>
                  <span className="text-[#3B82F6] font-bold">12.56 ms</span>
                </div>
                <div className="px-3 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded">
                  <span className="text-[#9ca3af]">Total Test Suites: </span>
                  <span className="text-[#D4AF37] font-bold">7 Suites</span>
                </div>
              </div>
            </div>

            {/* Test Breakdown Tables */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mobile & Micro-Backend Tests */}
              <div className="border border-[#222222] bg-[#141414] rounded overflow-hidden">
                <div className="p-3.5 bg-[#1a1a1a] border-b border-[#222222] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#60A5FA] uppercase tracking-wider flex items-center gap-2">
                    <Smartphone className="w-4 h-4" /> Mobile & Stripe Service (31 Tests)
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-[#10B981]/20 text-[#10B981] rounded">100% PASS</span>
                </div>
                <div className="divide-y divide-[#222222] text-xs">
                  <div className="p-3 flex justify-between items-center">
                    <div>
                      <p className="font-bold text-[#f3f4f6]">Node.js Native Runner <span className="font-mono text-[11px] text-[#9ca3af] font-normal">(api.test.js)</span></p>
                      <p className="text-[11px] text-[#9ca3af]">Healthcheck, Stripe Card Validation, PaymentIntent</p>
                    </div>
                    <span className="font-mono text-[#10B981] font-bold">7/7</span>
                  </div>
                  <div className="p-3 flex justify-between items-center">
                    <div>
                      <p className="font-bold text-[#f3f4f6]">Python Automated Benchmark <span className="font-mono text-[11px] text-[#9ca3af] font-normal">(test_api.py)</span></p>
                      <p className="text-[11px] text-[#9ca3af]">20 Requests Benchmark, 404 Route Fallbacks, Error Handlers</p>
                    </div>
                    <span className="font-mono text-[#10B981] font-bold">9/9</span>
                  </div>
                  <div className="p-3 flex justify-between items-center">
                    <div>
                      <p className="font-bold text-[#f3f4f6]">Android JUnit 4 JVM <span className="font-mono text-[11px] text-[#9ca3af] font-normal">(testDebugUnitTest)</span></p>
                      <p className="text-[11px] text-[#9ca3af]">OrderSummary, RatingFormat, StockReservation, AddressModel</p>
                    </div>
                    <span className="font-mono text-[#10B981] font-bold">15/15</span>
                  </div>
                </div>
              </div>

              {/* Web Admin Backend Tests */}
              <div className="border border-[#222222] bg-[#141414] rounded overflow-hidden">
                <div className="p-3.5 bg-[#1a1a1a] border-b border-[#222222] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider flex items-center gap-2">
                    <Server className="w-4 h-4" /> Web Admin Backend Service (26 Tests)
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-[#10B981]/20 text-[#10B981] rounded">100% PASS</span>
                </div>
                <div className="divide-y divide-[#222222] text-xs">
                  <div className="p-3 flex justify-between items-center">
                    <div>
                      <p className="font-bold text-[#f3f4f6]">Dashboard Controller <span className="font-mono text-[11px] text-[#9ca3af] font-normal">(dashboard.test.ts)</span></p>
                      <p className="text-[11px] text-[#9ca3af]">KPIs Aggregations, Low Stock Alerts, Best Seller Ranks</p>
                    </div>
                    <span className="font-mono text-[#10B981] font-bold">5/5</span>
                  </div>
                  <div className="p-3 flex justify-between items-center">
                    <div>
                      <p className="font-bold text-[#f3f4f6]">Order Controller <span className="font-mono text-[11px] text-[#9ca3af] font-normal">(order.test.ts)</span></p>
                      <p className="text-[11px] text-[#9ca3af]">In-Memory userCache, Order Status FSM, Auto-Notifications</p>
                    </div>
                    <span className="font-mono text-[#10B981] font-bold">7/7</span>
                  </div>
                  <div className="p-3 flex justify-between items-center">
                    <div>
                      <p className="font-bold text-[#f3f4f6]">Product Controller <span className="font-mono text-[11px] text-[#9ca3af] font-normal">(product.test.ts)</span></p>
                      <p className="text-[11px] text-[#9ca3af]">Stock Import/Export Audit Ledger, Duplicate ID Guard, Sanitizer</p>
                    </div>
                    <span className="font-mono text-[#10B981] font-bold">12/12</span>
                  </div>
                  <div className="p-3 flex justify-between items-center">
                    <div>
                      <p className="font-bold text-[#f3f4f6]">Category Controller <span className="font-mono text-[11px] text-[#9ca3af] font-normal">(category.test.ts)</span></p>
                      <p className="text-[11px] text-[#9ca3af]">DisplayOrder Sorting, Firestore Timeout Exception Handling</p>
                    </div>
                    <span className="font-mono text-[#10B981] font-bold">2/2</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 9: Engineering Challenges */}
          <section id="challenges" className="space-y-6">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-5 h-5 text-[#EF4444]" />
              <h2 className="text-2xl font-bold font-serif text-[#f3f4f6]">
                {language === 'vi' ? 'Thách thức kỹ thuật & Giải pháp' : 'Engineering Challenges & Solutions'}
              </h2>
            </div>

            <div className="space-y-4">
              {detail.challenges.map((c, idx) => (
                <div key={idx} className="p-5 border border-[#222222] bg-[#141414] rounded space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#3B82F6]/20 text-[#60A5FA] font-bold text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <h3 className="font-bold text-base text-[#f3f4f6]">{c.title}</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-3 bg-[#1a1414] border border-[#3f1f1f] rounded">
                      <p className="font-bold text-[#F87171] mb-1 uppercase tracking-wider">
                        {language === 'vi' ? '✦ Vấn đề đặt ra:' : '✦ The Problem:'}
                      </p>
                      <p className="text-[#d1d5db] leading-relaxed">{c.problem}</p>
                    </div>

                    <div className="p-3 bg-[#141a16] border border-[#1f3f26] rounded">
                      <p className="font-bold text-[#34D399] mb-1 uppercase tracking-wider">
                        {language === 'vi' ? '✦ Giải pháp xử lý:' : '✦ The Solution:'}
                      </p>
                      <p className="text-[#d1d5db] leading-relaxed">{c.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Footer Back Button */}
          <div className="pt-10 border-t border-[#222222] flex justify-between items-center">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-[#9ca3af] hover:text-[#D4AF37] transition-colors text-sm font-semibold tracking-wider uppercase"
            >
              <ArrowLeft className="w-4 h-4" /> {t.detailCommon.backBtn}
            </button>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 text-[#9ca3af] hover:text-[#60A5FA] transition-colors text-xs font-mono tracking-wider uppercase"
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
