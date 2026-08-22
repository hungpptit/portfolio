import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowUpRight, 
  CheckCircle, 
  Shield, 
  Zap, 
  Server, 
  AlertTriangle, 
  GitBranch, 
  Users,
  GitFork,
  Lock,
  CreditCard,
  Mail,
  Radio,
  Database,
  Layers
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { MOVIE_TICKET_DETAIL as detail } from '../data/projects/movieTicket.data';

const project = PROJECTS.find(p => p.id === 'movie-ticket-booking')!;

const TOC_SECTIONS = [
  { id: 'overview',     label: 'Tổng quan hệ thống' },
  { id: 'architecture', label: 'Kiến trúc Vi dịch vụ (Microservices)' },
  { id: 'concurrency',  label: 'Luồng chống trùng vé (Distributed Lock)' },
  { id: 'techstack',    label: 'Ngăn xếp công nghệ' },
  { id: 'challenges',   label: 'Thách thức kỹ thuật & Giải pháp' },
];

// ─── Seat Booking Flow Diagram ─────────────────────────────────────────────
const BookingFlow: React.FC = () => {
  const steps = [
    { step: 1, label: "Hơn 1,000 người dùng cùng lúc bấm chọn chiếc ghế VIP A5", color: "#4F9CF9", icon: <Users className="w-5 h-5" /> },
    { step: 2, label: "Cổng API Gateway điều hướng yêu cầu đến Dịch vụ Đặt vé (Booking Service)", color: "#A78BFA", icon: <GitFork className="w-5 h-5" /> },
    { step: 3, label: "Bộ nhớ đệm Redis thực thi lệnh nguyên tử SET NX EX 600 (Khóa phân tán - Distributed Lock)", color: "#F59E0B", sub: "Chỉ duy nhất 1 yêu cầu đầu tiên giành được quyền giữ chỗ — 999+ yêu cầu còn lại nhận ngay thông báo trùng ghế (Mã lỗi HTTP 409 Conflict)", icon: <Lock className="w-5 h-5" /> },
    { step: 4, label: "Dịch vụ Thanh toán (Payment Service) tạo mã QR động ZaloPay", color: "#34D399", sub: "Thời hạn giữ ghế 10 phút: Nếu người dùng không hoàn tất thanh toán, hệ thống tự động giải phóng ghế cho người khác", icon: <CreditCard className="w-5 h-5" /> },
    { step: 5, label: "Hàng đợi RabbitMQ chuyển tiếp tác vụ gửi email vé & thông báo", color: "#F472B6", sub: "Xử lý bất đồng bộ trong nền giúp luồng phản hồi đặt vé trả về cho người dùng tức thì mà không bị nghẽn", icon: <Mail className="w-5 h-5" /> },
    { step: 6, label: "Truyền phát sơ đồ ghế thời gian thực qua Redis PubSub & WebSocket", color: "#60A5FA", sub: "Màn hình của toàn bộ người dùng đang xem cùng suất chiếu lập tức chuyển ghế sang màu vàng (đang giữ) hoặc màu đỏ (đã bán)", icon: <Radio className="w-5 h-5" /> },
  ];

  return (
    <div className="p-7 bg-[#121212] border border-[#262626] rounded">
      <p className="text-xs font-bold text-[#9ca3af] uppercase tracking-wider mb-6">Luồng xử lý đồng thời & Cơ chế Khóa phân tán (Seat Booking Concurrency Flow)</p>
      <div className="flex flex-col gap-3">
        {steps.map(s => (
          <div key={s.step} className="flex items-start gap-4 p-4 border border-[#262626] bg-[#161616] rounded">
            <div className="w-10 h-10 rounded flex items-center justify-center shrink-0"
              style={{ background: `${s.color}15`, border: `1px solid ${s.color}35`, color: s.color }}>
              {s.icon}
            </div>
            <div className="flex-1">
              <p className="text-base font-semibold" style={{ color: s.color }}>{s.label}</p>
              {s.sub && <p className="text-sm text-[#9ca3af] mt-1 font-normal leading-relaxed">{s.sub}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Microservices Architecture Diagram ────────────────────────────────────
const MicroservicesArch: React.FC = () => {
  const services = [
    { name: "Cổng API (API Gateway)", color: "#4F9CF9", desc: "Giới hạn tần suất gọi (Rate Limiting), Xác thực mã bảo mật (JWT Guard), Điều hướng phân tải" },
    { name: "Dịch vụ Người dùng (User Service)", color: "#A78BFA", desc: "Đăng ký, Đăng nhập, Hồ sơ cá nhân, Lịch sử đặt vé" },
    { name: "Dịch vụ Phim (Movie Service)", color: "#34D399", desc: "Danh mục phim, Lịch chiếu, Ma trận trạng thái sơ đồ ghế" },
    { name: "Dịch vụ Đặt vé (Booking Service)", color: "#F59E0B", desc: "Khóa giữ ghế nguyên tử, Tạo mã đặt vé, Tự động giải phóng ghế hết hạn" },
    { name: "Dịch vụ Thanh toán (Payment Service)", color: "#F472B6", desc: "Tích hợp cổng ZaloPay Dynamic QR Code, Xử lý Webhook xác nhận" },
    { name: "Dịch vụ Thông báo (Notification Service)", color: "#60A5FA", desc: "Gửi email vé điện tử kèm mã QR, Tin nhắn SMS, Thông báo đẩy ứng dụng" },
  ];
  return (
    <div className="p-7 bg-[#121212] border border-[#262626] rounded">
      <p className="text-xs font-bold text-[#9ca3af] uppercase tracking-wider mb-6">Sơ đồ Kiến trúc Vi dịch vụ Phân tán (Microservices Architecture)</p>
      <div className="flex flex-col items-center gap-4">
        {/* Client */}
        <div className="flex gap-4">
          {['Giao diện Web (React.js SPA)', 'Ứng dụng Di động (Mobile App)'].map(c => (
            <div key={c} className="px-5 py-2.5 bg-[#1a1a1a] border border-[#333] text-sm text-[#f3f4f6] font-semibold rounded">{c}</div>
          ))}
        </div>
        <div className="w-[2px] h-6 bg-[#333]" />
        {/* Gateway */}
        <div className="px-8 py-3 bg-[#4F9CF9]/15 border border-[#4F9CF9]/40 text-sm font-bold text-[#4F9CF9] tracking-wider uppercase rounded">
          Cổng kết nối tập trung API Gateway (Express.js + JWT Guard + Rate Limiting)
        </div>
        <div className="flex gap-2 flex-wrap justify-center">
          {[0,1,1,1,1].map((_, i) => <div key={i} className="w-[2px] h-5 bg-[#333]" />)}
        </div>
        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
          {services.map(s => (
            <div key={s.name} className="p-4 border rounded flex flex-col gap-1.5"
              style={{ background: `${s.color}08`, borderColor: `${s.color}25` }}>
              <span className="text-sm font-bold" style={{ color: s.color }}>{s.name}</span>
              <span className="text-xs text-[#9ca3af] font-normal leading-relaxed">{s.desc}</span>
            </div>
          ))}
        </div>
        {/* DB + Queue */}
        <div className="flex flex-wrap gap-3 justify-center w-full pt-3">
          {[
            { label: 'CSDL Microsoft SQL Server', color: '#4F9CF9', icon: <Database className="w-4 h-4" /> },
            { label: 'Khóa phân tán Redis Lock', color: '#F59E0B', icon: <Zap className="w-4 h-4" /> },
            { label: 'Hàng đợi thông điệp RabbitMQ', color: '#A78BFA', icon: <Layers className="w-4 h-4" /> },
            { label: 'Cổng thanh toán ZaloPay API', color: '#34D399', icon: <CreditCard className="w-4 h-4" /> },
          ].map(d => (
            <div key={d.label} className="px-4 py-2 border text-xs font-semibold flex items-center gap-2 rounded"
              style={{ borderColor: `${d.color}35`, color: d.color, background: `${d.color}08` }}>
              <span>{d.icon}</span> {d.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MovieTicketPage: React.FC = () => {
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

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#e4e2e1]">
      <header className="sticky top-0 z-50 border-b border-[#222] bg-[#0e0e0e]/95 backdrop-blur-sm">
        <div className="max-w-[1500px] mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[#9ca3af] hover:text-[#D4AF37] transition-colors text-sm font-semibold tracking-wider uppercase">
            <ArrowLeft className="w-4 h-4" /> Quay lại danh sách dự án
          </button>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold hover:bg-[#D4AF37]/10 transition-colors tracking-wider rounded">
            MÃ NGUỒN DỰ ÁN (SOURCE REPO) <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      <div className="max-w-[1500px] mx-auto px-6 flex gap-0">
        {/* Left Sidebar */}
        <aside className="hidden lg:flex flex-col w-[280px] shrink-0">
          <div className="sticky top-[65px] pt-10 pb-10 pr-8 flex flex-col gap-8">
            <div>
              <p className="text-xs text-[#9ca3af] uppercase tracking-wider font-bold mb-4">Thông tin tóm tắt</p>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-[#9ca3af] mb-1 font-medium">Trạng thái dự án</p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#34D399]" />
                    <span className="text-sm text-[#f3f4f6] font-semibold">Đã hoàn thành & Kiểm thử</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-[#9ca3af] mb-1 font-medium">Thời gian thực hiện</p>
                  <p className="text-sm text-[#f3f4f6] font-semibold">{detail.duration}</p>
                </div>
                <div>
                  <p className="text-xs text-[#9ca3af] mb-1 font-medium">Vai trò đảm nhiệm</p>
                  <p className="text-sm text-[#f3f4f6] font-semibold">Lập trình viên Backend & Thiết kế Kiến trúc</p>
                </div>
                <div>
                  <p className="text-xs text-[#9ca3af] mb-1 font-medium">Quy mô nhóm</p>
                  <p className="text-sm text-[#f3f4f6] font-semibold">{detail.teamSize}</p>
                </div>
              </div>
            </div>

            <div className="border-t border-[#222]" />

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
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 border-l border-[#222] pl-10 py-10 space-y-20">
          {/* Hero */}
          <section id="overview">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-[#D4AF37]" />
              <span className="text-xs font-bold tracking-wider text-[#D4AF37] uppercase">Hệ thống Phân tán · Xử lý Đồng thời Cao (High Concurrency)</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#f3f4f6] tracking-tight mb-6 leading-tight">
              Online Movie Ticket<br /><span className="text-[#D4AF37]">Booking System</span>
            </h1>
            <p className="text-[#d1d5db] leading-relaxed mb-10 max-w-3xl font-normal text-lg">{detail.overview}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { val: '0 Lỗi', sub: 'Trùng vé (Zero Double-Booking)', color: '#34D399', icon: <CheckCircle className="w-5 h-5" /> },
                { val: 'Redis', sub: 'Khóa phân tán (Distributed Lock)', color: '#F59E0B', icon: <Shield className="w-5 h-5" /> },
                { val: '6 Dịch vụ', sub: 'Kiến trúc Vi dịch vụ (Microservices)', color: '#A78BFA', icon: <Server className="w-5 h-5" /> },
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

          {/* Architecture */}
          <section id="architecture">
            <div className="flex items-center gap-3 mb-6">
              <Server className="w-5 h-5 text-[#4F9CF9]" />
              <h2 className="text-2xl font-black text-[#f3f4f6]">Kiến trúc Vi dịch vụ Độc lập (Microservices Architecture)</h2>
            </div>
            <MicroservicesArch />
          </section>

          {/* Booking Flow */}
          <section id="concurrency">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-5 h-5 text-[#F59E0B]" />
              <h2 className="text-2xl font-black text-[#f3f4f6]">Cơ chế Khóa Phân tán Chống Trùng Ghế (Anti Double-Booking Flow)</h2>
              <span className="text-xs px-2.5 py-1 bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30 font-bold tracking-wider rounded">Lệnh REDIS SET NX EX</span>
            </div>
            <BookingFlow />
          </section>

          {/* Tech Stack */}
          <section id="techstack">
            <div className="flex items-center gap-3 mb-6">
              <GitBranch className="w-5 h-5 text-[#A78BFA]" />
              <h2 className="text-2xl font-black text-[#f3f4f6]">Ngăn xếp Công nghệ (Technology Stack)</h2>
            </div>
            <div className="border border-[#262626] overflow-hidden rounded">
              <table className="w-full text-base">
                <thead>
                  <tr className="border-b border-[#262626] bg-[#141414]">
                    <th className="text-left px-5 py-3.5 text-xs font-bold text-[#9ca3af] uppercase tracking-wider w-[220px]">Phân tầng kiến trúc</th>
                    <th className="text-left px-5 py-3.5 text-xs font-bold text-[#9ca3af] uppercase tracking-wider w-[240px]">Công nghệ</th>
                    <th className="text-left px-5 py-3.5 text-xs font-bold text-[#9ca3af] uppercase tracking-wider">Vai trò đảm nhiệm</th>
                  </tr>
                </thead>
                <tbody>
                  {detail.techStack!.map((item, i) => (
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
              <h2 className="text-2xl font-black text-[#f3f4f6]">Các Thách thức Kỹ thuật Tiêu biểu & Giải pháp (Engineering Challenges)</h2>
            </div>
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

          {/* Tags */}
          <section className="border-t border-[#222] pt-10">
            <div className="flex flex-wrap gap-2.5 mb-8">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-xs px-3 py-1.5 border border-[#2a2a2a] text-[#9ca3af] font-mono rounded">{tag}</span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 bg-[#D4AF37] text-[#0e0e0e] font-bold text-sm hover:bg-[#e8c547] transition-colors tracking-wider uppercase rounded">
                Xem Mã nguồn Dự án trên GitHub <ArrowUpRight className="w-4 h-4" />
              </a>
              <button onClick={() => navigate(-1)}
                className="flex items-center gap-2 px-6 py-3.5 border border-[#333] text-[#9ca3af] font-semibold text-sm hover:border-[#555] hover:text-[#f3f4f6] transition-colors tracking-wider uppercase rounded">
                <ArrowLeft className="w-4 h-4" /> Quay lại Danh mục Dự án
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default MovieTicketPage;
