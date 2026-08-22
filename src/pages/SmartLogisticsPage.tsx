import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle,
  Clock,
  Zap,
  Database,
  Server,
  Cpu,
  GitMerge,
  BarChart3,
  AlertTriangle,
  Layers,
  Building2,
  User,
  Users2,
  Smartphone,
  Radio,
  MapPin,
  Share2,
  Workflow,
  Network,
  ChevronRight,
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { SMART_LOGISTICS_DETAIL as detail } from '../data/projects/smartLogistics.data';

const project = PROJECTS.find(p => p.id === 'smart-logistics')!;

// ─── Sidebar Mục lục (TOC) ──────────────────────────────────────────────────
const TOC_SECTIONS = [
  { id: 'overview',   label: 'Tổng quan dự án' },
  { id: 'ai',         label: 'Thuật toán AI chia tuyến' },
  { id: 'telemetry',  label: 'Định vị GPS thời gian thực' },
  { id: 'lifecycle',  label: 'Quy trình 7 bước giao vận' },
  { id: 'database',   label: 'Kiến trúc Cơ sở dữ liệu' },
  { id: 'techstack',  label: 'Ngăn xếp công nghệ' },
  { id: 'tests',      label: 'Báo cáo kiểm thử tự động' },
  { id: 'impact',     label: 'Hiệu quả kinh doanh & Vận hành' },
  { id: 'challenges', label: 'Thách thức kỹ thuật & Giải pháp' },
];

// ─── AI Pipeline Flow ──────────────────────────────────────────────────────
const AIPipelineFlow: React.FC = () => {
  const colors = ['#4F9CF9', '#A78BFA', '#F59E0B', '#34D399'];
  const stepIcons = [
    <MapPin className="w-7 h-7" />,
    <Share2 className="w-7 h-7" />,
    <Workflow className="w-7 h-7" />,
    <Network className="w-7 h-7" />
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
      {detail.aiPipeline!.map((step, idx) => (
        <div key={step.step} className="relative flex flex-col">
          {idx < 3 && (
            <div className="hidden md:block absolute top-[58px] right-0 w-1/2 h-[2px] z-10"
              style={{ background: `linear-gradient(90deg, ${colors[idx]}, ${colors[idx + 1]})` }} />
          )}
          {idx > 0 && (
            <div className="hidden md:block absolute top-[58px] left-0 w-1/2 h-[2px] z-10"
              style={{ background: `linear-gradient(90deg, ${colors[idx - 1]}, ${colors[idx]})` }} />
          )}
          <div className="relative z-20 flex flex-col items-center mx-2 mb-4">
            <div className="w-[112px] h-[112px] rounded-full flex flex-col items-center justify-center border-2 mb-3 shadow-lg"
              style={{ borderColor: colors[idx], background: `${colors[idx]}15`, color: colors[idx] }}>
              <div className="mb-1">{stepIcons[idx]}</div>
              <span className="text-xs font-bold tracking-wider font-mono">BƯỚC {step.step}</span>
            </div>
            <span className="font-bold text-base text-[#f3f4f6] text-center mb-1">{step.name}</span>
            <span className="text-xs text-[#9ca3af] text-center leading-tight mb-3">{step.algo}</span>
            {step.timeMs && (
              <span className="px-2.5 py-1 text-xs font-mono font-bold flex items-center gap-1 rounded"
                style={{ background: `${colors[idx]}20`, color: colors[idx] }}>
                <Clock className="w-3.5 h-3.5" />
                <span>Thời gian: {step.timeMs}</span>
              </span>
            )}
          </div>
          <div className="p-5 bg-[#121212] border border-[#262626] flex-1 flex flex-col justify-between gap-4 rounded">
            <p className="text-sm text-[#d1d5db] leading-relaxed font-normal">{step.description}</p>
            <div className="pt-3 border-t border-[#262626]">
              <span className="text-xs text-[#9ca3af] uppercase tracking-wider font-semibold block mb-1.5">Kết quả thực tế</span>
              <p className="text-sm font-semibold leading-relaxed" style={{ color: colors[idx] }}>{step.result}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// ─── GPS Telemetry Flow ────────────────────────────────────────────────────
const TelemetryFlow: React.FC = () => (
  <div className="p-7 bg-[#121212] border border-[#262626] rounded">
    <p className="text-xs font-bold text-[#9ca3af] uppercase tracking-wider mb-6">Mô hình đường ống 2 tầng xử lý tọa độ GPS thời gian thực (2-Tier Telemetry Pipeline)</p>
    <div className="flex flex-col lg:flex-row items-start gap-6">
      <div className="flex flex-col items-center gap-2 min-w-[150px]">
        <div className="w-14 h-14 border border-[#333] bg-[#1a1a1a] flex items-center justify-center text-[#4F9CF9] rounded">
          <Smartphone className="w-7 h-7" />
        </div>
        <span className="text-sm text-[#f3f4f6] text-center font-semibold">Ứng dụng Tài xế (Flutter App)</span>
        <span className="text-xs text-[#9ca3af] text-center">Phát GPS định kỳ 5 giây/lần</span>
      </div>
      <div className="flex items-center gap-2 self-center">
        <div className="w-10 h-[2px] bg-gradient-to-r from-[#4F9CF9] to-[#A78BFA]" />
        <span className="text-xs font-mono font-bold text-[#A78BFA] tracking-wider">SOCKET.IO</span>
        <div className="w-10 h-[2px] bg-[#A78BFA]" />
      </div>
      <div className="flex flex-col items-center gap-2 min-w-[150px]">
        <div className="w-14 h-14 border border-[#A78BFA]/40 bg-[#A78BFA]/10 flex items-center justify-center text-[#A78BFA] rounded">
          <Radio className="w-7 h-7" />
        </div>
        <span className="text-sm text-[#A78BFA] font-semibold">Cổng tiếp nhận (Tracking Gateway)</span>
      </div>
      <div className="flex flex-col gap-4 flex-1">
        <div className="p-4 border-l-2 border-[#34D399] bg-[#34D399]/5 pl-5 rounded-r">
          <div className="flex items-center gap-2 mb-2 text-[#34D399]">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-bold">Tầng 1: Bộ nhớ đệm tốc độ cao Redis 7 (In-Memory Stream)</span>
          </div>
          <div className="text-xs text-[#d1d5db] space-y-1 font-mono">
            <div><code className="text-[#34D399] font-bold">HSET driver:location:&#123;id&#125;</code> — Lưu tọa độ GPS tức thời (độ trễ dưới 1 mili-giây)</div>
            <div><code className="text-[#34D399] font-bold">GEOADD driver:geo:&#123;id&#125;</code> — Đánh chỉ mục địa lý không gian (Geospatial Indexing)</div>
          </div>
          <div className="mt-3 flex gap-3">
            <span className="text-xs px-2.5 py-1 bg-[#34D399]/15 text-[#34D399] font-bold font-mono rounded">Độ trễ P99 &lt; 1 mili-giây</span>
            <span className="text-xs px-2.5 py-1 bg-[#34D399]/15 text-[#34D399] font-bold font-mono rounded">Thông lượng: 1,321 điểm tọa độ/giây</span>
          </div>
        </div>
        <div className="p-4 border-l-2 border-[#F59E0B] bg-[#F59E0B]/5 pl-5 rounded-r">
          <div className="flex items-center gap-2 mb-2 text-[#F59E0B]">
            <Radio className="w-4 h-4" />
            <span className="text-sm font-bold">Truyền phát WebSocket qua phòng riêng biệt (Socket.io Rooms)</span>
          </div>
          <div className="text-xs text-[#d1d5db] space-y-1">
            <div>→ Kênh phòng <code className="text-[#F59E0B] font-mono">order:&#123;orderId&#125;</code> → Cập nhật vị trí tài xế trực tiếp lên màn hình radar của người điều vận</div>
            <div>→ <strong className="text-[#F59E0B]">Sự kiện cắm cờ (Flag Drop Event)</strong>: Khi giao hàng thành công, trạng thái trên màn hình radar tự động đổi màu mà không cần người dùng tải lại trang</div>
          </div>
        </div>
        <div className="p-4 border-l-2 border-[#4F9CF9] bg-[#4F9CF9]/5 pl-5 rounded-r">
          <div className="flex items-center gap-2 mb-2 text-[#4F9CF9]">
            <Database className="w-4 h-4" />
            <span className="text-sm font-bold">Tầng 2: Cơ sở dữ liệu PostgreSQL (Chỉ lưu khi phát sinh sự kiện nghiệp vụ)</span>
          </div>
          <div className="text-xs text-[#d1d5db]">
            Chỉ lưu cố định khi có mốc nghiệp vụ: <code className="text-[#4F9CF9] font-mono font-bold">ĐÃ LẤY HÀNG · ĐÃ ĐẾN BƯU CỤC · ĐÃ GIAO THÀNH CÔNG</code> kèm chữ ký số và ảnh chụp bằng chứng giao hàng (POD)
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ─── Fulfillment Lifecycle ─────────────────────────────────────────────────
const FulfillmentFlow: React.FC = () => {
  const stageColors = ['#4F9CF9','#A78BFA','#F59E0B','#34D399','#F472B6','#60A5FA','#FBBF24'];
  return (
    <div className="space-y-2">
      {detail.fulfillmentStages!.map((s, i) => (
        <div key={i} className="flex items-start gap-4 p-5 border border-[#262626] hover:border-[#3a3a3a] bg-[#121212] transition-colors rounded">
          <div className="w-8 h-8 flex items-center justify-center text-xs font-black font-mono shrink-0 mt-0.5 rounded"
            style={{ background: `${stageColors[i]}20`, color: stageColors[i] }}>
            {String(i + 1).padStart(2, '0')}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
              <span className="text-base font-bold text-[#f3f4f6]">{s.stage}</span>
              <span className="text-xs px-2 py-0.5 font-mono font-semibold rounded"
                style={{ background: `${stageColors[i]}15`, color: stageColors[i] }}>
                {s.status}
              </span>
            </div>
            <p className="text-sm text-[#9ca3af] leading-relaxed">{s.tech}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// ─── Main Page ─────────────────────────────────────────────────────────────
const SmartLogisticsPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('overview');

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

  const groupColors: Record<string, string> = {
    'Thuật toán (Algorithm)': '#A78BFA',
    'Tích hợp (Integration)': '#34D399',
    'Bảo vệ API (Validation)': '#4F9CF9',
    'Bảo mật (Security)': '#F59E0B',
    'Chịu tải (Load Test)': '#F472B6',
    'Đồng thời (Concurrency)': '#FB923C',
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#e4e2e1]">

      {/* ── Top Nav ── */}
      <header className="sticky top-0 z-50 border-b border-[#222222] bg-[#0e0e0e]/95 backdrop-blur-sm">
        <div className="max-w-[1500px] mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[#9ca3af] hover:text-[#D4AF37] transition-colors text-sm font-semibold tracking-wider uppercase">
            <ArrowLeft className="w-4 h-4" /> Quay lại danh sách dự án
          </button>
          <a href={detail.githubUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold hover:bg-[#D4AF37]/10 transition-colors tracking-wider rounded">
            MÃ NGUỒN DỰ ÁN (SOURCE REPO) <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      <div className="max-w-[1500px] mx-auto px-6 flex gap-0">

        {/* ── Left Sidebar ── */}
        <aside className="hidden lg:flex flex-col w-[280px] shrink-0">
          <div className="sticky top-[65px] pt-10 pb-10 pr-8 flex flex-col gap-8">

            {/* Quick Info */}
            <div>
              <p className="text-xs text-[#9ca3af] uppercase tracking-wider font-bold mb-4">Thông tin tóm tắt</p>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-[#9ca3af] mb-1 font-medium">Trạng thái dự án</p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#34D399]" />
                    <span className="text-sm text-[#f3f4f6] font-semibold">Đang vận hành thực tế</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-[#9ca3af] mb-1 font-medium">Thời gian phát triển</p>
                  <p className="text-sm text-[#f3f4f6] font-semibold">{detail.duration}</p>
                </div>
                <div>
                  <p className="text-xs text-[#9ca3af] mb-1 font-medium">Doanh nghiệp triển khai</p>
                  <p className="text-sm text-[#f3f4f6] font-semibold">{detail.company}</p>
                </div>
                <div>
                  <p className="text-xs text-[#9ca3af] mb-1 font-medium">Vai trò đảm nhiệm</p>
                  <p className="text-sm text-[#f3f4f6] font-semibold">Kỹ sư Phần mềm & Lập trình viên Backend</p>
                </div>
                <div>
                  <p className="text-xs text-[#9ca3af] mb-1 font-medium">Quy mô nhóm</p>
                  <p className="text-sm text-[#f3f4f6] font-semibold">{detail.teamSize}</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#222222]" />

            {/* TOC */}
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

            {/* Key metrics mini */}
            <div className="border-t border-[#222222] pt-6 space-y-3">
              {[
                { val: 'Giảm 58.2%', label: 'Quãng đường giao hàng', color: '#34D399' },
                { val: '1,321/giây', label: 'Tọa độ GPS tiếp nhận', color: '#4F9CF9' },
                { val: '< 1 mili-giây', label: 'Độ trễ xử lý (P99)', color: '#A78BFA' },
                { val: '12/12 Đạt', label: 'Kiểm thử tự động', color: '#F59E0B' },
              ].map((m, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-xs text-[#9ca3af] font-medium">{m.label}</span>
                  <span className="text-sm font-black font-mono" style={{ color: m.color }}>{m.val}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* ── Main Content ── */}
        <main className="flex-1 min-w-0 border-l border-[#222222] pl-10 py-10 space-y-20">

          {/* ── Overview ── */}
          <section id="overview">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-[#D4AF37]" />
              <span className="text-xs font-bold tracking-wider text-[#D4AF37] uppercase">Hệ thống Cấp Doanh nghiệp · Công ty TNHH CITARES</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[#f3f4f6] tracking-tight mb-6 leading-tight">
              Smart Logistics<br /><span className="text-[#D4AF37]">Platform (SLP)</span>
            </h1>
            <p className="text-[#d1d5db] leading-relaxed mb-10 max-w-3xl font-normal text-lg">{detail.overview}</p>

            {/* Mobile quick info */}
            <div className="lg:hidden flex flex-wrap gap-3 mb-10">
              <span className="flex items-center gap-2 px-3.5 py-2 bg-[#161616] border border-[#262626] text-xs text-[#d1d5db]">
                <Building2 className="w-4 h-4 text-[#D4AF37]" /> {detail.company}
              </span>
              <span className="flex items-center gap-2 px-3.5 py-2 bg-[#161616] border border-[#262626] text-xs text-[#d1d5db]">
                <User className="w-4 h-4 text-[#D4AF37]" /> Kỹ sư Phần mềm & Backend
              </span>
              <span className="flex items-center gap-2 px-3.5 py-2 bg-[#161616] border border-[#262626] text-xs text-[#d1d5db]">
                <Clock className="w-4 h-4 text-[#D4AF37]" /> {detail.duration}
              </span>
              <span className="flex items-center gap-2 px-3.5 py-2 bg-[#161616] border border-[#262626] text-xs text-[#d1d5db]">
                <Users2 className="w-4 h-4 text-[#D4AF37]" /> {detail.teamSize}
              </span>
            </div>

            {/* Metrics cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { val: '–58.2%', sub: 'Quãng đường giao hàng', color: '#34D399', icon: <BarChart3 className="w-5 h-5" /> },
                { val: '1,321', sub: 'Tọa độ GPS / Giây', color: '#4F9CF9', icon: <Zap className="w-5 h-5" /> },
                { val: '< 1ms', sub: 'Độ trễ xử lý (P99)', color: '#A78BFA', icon: <Clock className="w-5 h-5" /> },
                { val: '12/12', sub: 'Kiểm thử đạt (PASS)', color: '#F59E0B', icon: <CheckCircle className="w-5 h-5" /> },
              ].map((m, i) => (
                <div key={i} className="p-6 bg-[#121212] border border-[#262626] flex flex-col gap-2 rounded">
                  <div className="flex items-center gap-2" style={{ color: m.color }}>{m.icon}
                    <span className="text-xs font-bold uppercase tracking-wider">{m.sub}</span>
                  </div>
                  <span className="text-4xl font-black font-mono" style={{ color: m.color }}>{m.val}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── AI Pipeline ── */}
          <section id="ai">
            <SectionTitle icon={<Cpu className="w-5 h-5" />} title="Đường ống 4 Thuật toán Trí tuệ Nhân tạo chia tuyến (AI Routing Pipeline)" badge="100% Thuần TypeScript" />
            <p className="text-[#d1d5db] text-base mb-8 leading-relaxed font-normal">
              Toàn bộ động cơ Trí tuệ nhân tạo (AI Engine) được tự phát triển bằng mã nguồn TypeScript thuần mà không phụ thuộc vào thư viện ngoài. Đường ống gồm 4 thuật toán tuần tự phối hợp chặt chẽ nhằm giải quyết bài toán định tuyến xe có giới hạn tải trọng và khung giờ hẹn (Capacitated Vehicle Routing Problem with Time Windows - CVRP/VRPTW) trong vòng chưa tới nửa giây.
            </p>
            <AIPipelineFlow />
          </section>

          {/* ── GPS Telemetry ── */}
          <section id="telemetry">
            <SectionTitle icon={<Zap className="w-5 h-5" />} title="Hệ thống Truyền phát Định vị Toàn cầu Thời gian thực (Real-Time GPS Telemetry)" badge="1,321 điểm/giây" />
            <p className="text-[#d1d5db] text-base mb-8 leading-relaxed font-normal">
              Với hơn 500 tài xế gửi tọa độ định kỳ 5 giây/lần tạo ra hơn 6,000 lượt ghi mỗi phút, toàn bộ luồng tọa độ được tiếp nhận và xử lý qua kiến trúc bộ nhớ đệm Redis 2 tầng (2-Tier In-Memory Pipeline) nhằm giải tỏa 100% áp lực ghi trực tiếp lên cơ sở dữ liệu quan hệ PostgreSQL.
            </p>
            <TelemetryFlow />
          </section>

          {/* ── Lifecycle ── */}
          <section id="lifecycle">
            <SectionTitle icon={<GitMerge className="w-5 h-5" />} title="Vòng đời 7 Giai đoạn Xử lý Đơn hàng (7-Stage Fulfillment Lifecycle)" />
            <p className="text-[#d1d5db] text-base mb-8 leading-relaxed font-normal">
              Mỗi đơn hàng được kiểm soát nghiêm ngặt qua 7 giai đoạn khép kín theo mô hình Máy trạng thái hữu hạn (Finite State Machine - FSM). Mỗi lần chuyển trạng thái đều được tự động lưu vào bảng nhật ký lịch sử (<code className="text-[#D4AF37] font-mono text-sm px-1.5 py-0.5 bg-[#1a1a1a] rounded">order_status_history</code>), tạo thành biên bản kiểm toán bất biến phục vụ việc đối soát và tra cứu hành trình.
            </p>
            <FulfillmentFlow />
          </section>

          {/* ── Database ── */}
          <section id="database">
            <SectionTitle icon={<Database className="w-5 h-5" />} title="Kiến trúc Cơ sở Dữ liệu Quan hệ (Database Architecture)" />
            <p className="text-[#d1d5db] text-base mb-8 font-normal">Quy mô 38 bảng · 10 Phân hệ nghiệp vụ độc lập · Cơ sở dữ liệu PostgreSQL 15 + PostGIS · Trình ánh xạ quan hệ đối tượng Prisma ORM 5.x</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {detail.dbModules!.map((mod) => {
                const mColors = ['#4F9CF9','#A78BFA','#34D399','#F59E0B','#F472B6','#60A5FA','#FBBF24','#FB923C','#34D399','#A78BFA'];
                const c = mColors[(mod.id - 1) % mColors.length];
                return (
                  <div key={mod.id} className="p-5 bg-[#121212] border border-[#262626] hover:border-[#3a3a3a] transition-colors rounded">
                    <div className="flex items-center gap-2.5 mb-3">
                      <span className="w-6 h-6 text-xs font-black flex items-center justify-center font-mono rounded"
                        style={{ background: `${c}20`, color: c }}>{mod.id}</span>
                      <span className="text-base font-bold text-[#f3f4f6]">{mod.name}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {mod.tables.map(t => (
                        <code key={t} className="text-xs px-2 py-1 bg-[#1a1a1a] border border-[#2a2a2a] text-[#9ca3af] font-mono rounded">{t}</code>
                      ))}
                    </div>
                    <p className="text-sm text-[#d1d5db] leading-relaxed font-normal">{mod.keyFeature}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ── Tech Stack ── */}
          <section id="techstack">
            <SectionTitle icon={<Server className="w-5 h-5" />} title="Ngăn xếp Công nghệ & Nền tảng Kỹ thuật (Technology Stack)" />
            <div className="border border-[#262626] overflow-hidden rounded">
              <table className="w-full text-base">
                <thead>
                  <tr className="border-b border-[#262626] bg-[#141414]">
                    <th className="text-left px-5 py-3.5 text-xs font-bold text-[#9ca3af] uppercase tracking-wider w-[220px]">Phân tầng kiến trúc</th>
                    <th className="text-left px-5 py-3.5 text-xs font-bold text-[#9ca3af] uppercase tracking-wider w-[240px]">Công nghệ / Phiên bản</th>
                    <th className="text-left px-5 py-3.5 text-xs font-bold text-[#9ca3af] uppercase tracking-wider">Vai trò & Khả năng đáp ứng</th>
                  </tr>
                </thead>
                <tbody>
                  {detail.techStack!.map((item, i) => (
                    <tr key={i} className="border-b border-[#1c1c1c] hover:bg-[#161616] transition-colors">
                      <td className="px-5 py-3.5 text-sm font-semibold text-[#D4AF37]">{item.layer}</td>
                      <td className="px-5 py-3.5">
                        <span className="font-mono text-sm text-[#f3f4f6] font-semibold">{item.tech}</span>
                        {item.version && item.version !== '—' && (
                          <span className="ml-2 text-xs text-[#9ca3af] font-mono">({item.version})</span>
                        )}
                      </td>
                      <td className="px-5 py-3.5 text-sm text-[#d1d5db] font-normal leading-relaxed">{item.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Tests ── */}
          <section id="tests">
            <SectionTitle icon={<CheckCircle className="w-5 h-5" />} title="Báo cáo Kiểm thử Tự động Toàn diện (Master Testing Report)" badge="12/12 Kịch bản Đạt (PASS)" />
            <p className="text-[#d1d5db] text-base mb-8 font-normal">
              Bộ kịch bản kiểm thử tự động toàn diện được khởi chạy qua lệnh <code className="text-[#D4AF37] text-sm font-mono px-2 py-0.5 bg-[#1a1a1a] rounded">npm run test:master</code>, bao phủ 5 tầng kiến trúc từ thuật toán toán học đến tính toàn vẹn cơ sở dữ liệu và bảo mật phân quyền.
            </p>
            <div className="border border-[#262626] overflow-hidden rounded">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#141414] border-b border-[#262626]">
                    <th className="text-left px-5 py-3 text-xs font-bold text-[#9ca3af] uppercase tracking-wider w-10">STT</th>
                    <th className="text-left px-5 py-3 text-xs font-bold text-[#9ca3af] uppercase tracking-wider w-48">Phân nhóm kiểm thử</th>
                    <th className="text-left px-5 py-3 text-xs font-bold text-[#9ca3af] uppercase tracking-wider">Kịch bản kiểm thử</th>
                    <th className="text-left px-5 py-3 text-xs font-bold text-[#9ca3af] uppercase tracking-wider w-24">Thời gian</th>
                    <th className="text-left px-5 py-3 text-xs font-bold text-[#9ca3af] uppercase tracking-wider w-28">Kết quả</th>
                  </tr>
                </thead>
                <tbody>
                  {detail.testResults!.map((t, i) => {
                    const c = groupColors[t.group] || '#9ca3af';
                    return (
                      <tr key={i} className="border-b border-[#1c1c1c] hover:bg-[#161616] transition-colors">
                        <td className="px-5 py-3.5 text-xs text-[#9ca3af] font-mono">{i + 1}</td>
                        <td className="px-5 py-3.5">
                          <span className="text-xs font-bold px-2.5 py-1 rounded" style={{ background: `${c}15`, color: c }}>{t.group}</span>
                        </td>
                        <td className="px-5 py-3.5 text-sm font-medium text-[#f3f4f6]">
                          <div>{t.name}</div>
                          <div className="text-xs text-[#9ca3af] font-normal mt-0.5">{t.result}</div>
                        </td>
                        <td className="px-5 py-3.5 text-xs font-mono font-bold text-[#9ca3af]">{t.timeMs}</td>
                        <td className="px-5 py-3.5">
                          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#34D399] px-2.5 py-1 bg-[#34D399]/10 rounded">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" /> ĐẠT (PASS)
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Business Impact ── */}
          <section id="impact">
            <SectionTitle icon={<BarChart3 className="w-5 h-5" />} title="Chỉ số Tác động Doanh nghiệp & Vận hành (Business Impact)" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {detail.businessImpact!.map((b, i) => {
                const colors = ['#34D399','#4F9CF9','#A78BFA','#F59E0B','#F472B6','#34D399'];
                const c = colors[i % colors.length];
                return (
                  <div key={i} className="p-6 bg-[#121212] border border-[#262626] flex flex-col gap-3 rounded">
                    <span className="text-xs font-bold text-[#9ca3af] uppercase tracking-wider">{b.metric}</span>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-[#6b7280] font-normal">{b.before}</span>
                      <ChevronRight className="w-4 h-4 text-[#4b5563]" />
                      <span className="text-[#d1d5db] font-semibold">{b.after}</span>
                    </div>
                    <div className="text-4xl font-black font-mono" style={{ color: c }}>{b.delta}</div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ── Challenges ── */}
          <section id="challenges">
            <SectionTitle icon={<AlertTriangle className="w-5 h-5" />} title="Các Thách thức Kỹ thuật Tiêu biểu & Giải pháp (Engineering Challenges)" />
            <div className="space-y-4">
              {detail.challenges!.map((c, i) => (
                <div key={i} className="p-6 bg-[#121212] border border-[#262626] hover:border-[#3a3a3a] transition-colors rounded">
                  <h3 className="text-base font-bold text-[#D4AF37] mb-4 flex items-center gap-2.5">
                    <span className="w-6 h-6 flex items-center justify-center text-xs font-black font-mono rounded"
                      style={{ background: '#D4AF3720', color: '#D4AF37' }}>{i + 1}</span>
                    {c.title}
                  </h3>
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

          {/* ── Tech Tags ── */}
          <section className="border-t border-[#222222] pt-12">
            <div className="flex items-center gap-3 mb-5">
              <Layers className="w-5 h-5 text-[#9ca3af]" />
              <span className="text-xs font-bold text-[#9ca3af] uppercase tracking-wider">Từ khóa công nghệ trọng tâm</span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-xs px-3 py-1.5 border border-[#2a2a2a] text-[#9ca3af] font-mono hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors cursor-default rounded">
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="border-t border-[#222222] pt-10 flex flex-col sm:flex-row gap-4 items-start">
            <a href={detail.githubUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 bg-[#D4AF37] text-[#0e0e0e] font-bold text-sm hover:bg-[#e8c547] transition-colors tracking-wider uppercase rounded">
              Xem Mã nguồn Dự án trên GitHub <ArrowUpRight className="w-4 h-4" />
            </a>
            <button onClick={() => navigate(-1)}
              className="flex items-center gap-2 px-6 py-3.5 border border-[#333333] text-[#9ca3af] font-semibold text-sm hover:border-[#555] hover:text-[#f3f4f6] transition-colors tracking-wider uppercase rounded">
              <ArrowLeft className="w-4 h-4" /> Quay lại Danh mục Dự án
            </button>
          </section>

        </main>
      </div>
    </div>
  );
};

// ─── Reusable section title ────────────────────────────────────────────────
const SectionTitle: React.FC<{ icon: React.ReactNode; title: string; badge?: string }> = ({ icon, title, badge }) => (
  <div className="flex items-center gap-3 mb-6">
    <span className="text-[#D4AF37]">{icon}</span>
    <h2 className="text-2xl font-black text-[#f3f4f6]">{title}</h2>
    {badge && (
      <span className="text-xs px-2.5 py-1 bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 font-bold tracking-wider rounded">{badge}</span>
    )}
  </div>
);

export default SmartLogisticsPage;
