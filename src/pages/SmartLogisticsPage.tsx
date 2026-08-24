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
  Smartphone,
  Radio,
  MapPin,
  Share2,
  Workflow,
  Network,
  ChevronRight,
  HelpCircle,
  Globe,
  Users,
  Award,
  CheckSquare,
  Target,
  Truck,
  Boxes,
  Navigation,
  CircleDollarSign,
  EyeOff,
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { SMART_LOGISTICS_DETAIL, SmartLogisticsData, ProblemPoint } from '../data/projects/smartLogistics.data';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from '../components/LanguageToggle';
import { UI_TRANSLATIONS } from '../data/translations';
import { ProjectShowcaseGallery } from '../components/ProjectShowcaseGallery';

// ─── Business Context & Problem Statement ──────────────────────────────────
const BusinessContextSection: React.FC<{ detail: SmartLogisticsData; language: string }> = ({ detail, language }) => {
  const ctx = detail.businessContext;

  const getProblemIcon = (key: ProblemPoint['key']) => {
    switch (key) {
      case 'fleet':
        return {
          icon: <Truck className="w-5 h-5 text-[#F472B6]" />,
          bg: 'bg-[#F472B6]/10 border-[#F472B6]/30',
        };
      case 'volume':
        return {
          icon: <Boxes className="w-5 h-5 text-[#F59E0B]" />,
          bg: 'bg-[#F59E0B]/10 border-[#F59E0B]/30',
        };
      case 'route':
        return {
          icon: <Navigation className="w-5 h-5 text-[#34D399]" />,
          bg: 'bg-[#34D399]/10 border-[#34D399]/30',
        };
      case 'cost':
        return {
          icon: <CircleDollarSign className="w-5 h-5 text-[#EF4444]" />,
          bg: 'bg-[#EF4444]/10 border-[#EF4444]/30',
        };
      case 'tracking':
      default:
        return {
          icon: <EyeOff className="w-5 h-5 text-[#4F9CF9]" />,
          bg: 'bg-[#4F9CF9]/10 border-[#4F9CF9]/30',
        };
    }
  };

  return (
    <div className="space-y-6">
      {/* Problem Input Banner */}
      <div className="p-5 bg-[#161616] border border-[#2a2a2a] rounded">
        <div className="flex items-center gap-2.5 mb-2 text-[#F59E0B]">
          <AlertTriangle className="w-5 h-5 shrink-0" />
          <span className="text-xs font-bold uppercase tracking-wider font-mono">
            {language === 'vi' ? 'VẤN ĐỀ ĐẶT RA (INPUT PROBLEM)' : 'CORE INPUT PROBLEM'}
          </span>
        </div>
        <p className="text-base text-[#f3f4f6] font-medium leading-relaxed">{ctx.inputProblem}</p>
      </div>

      {/* Why 3PL Question & Pain Points Grid */}
      <div className="p-6 bg-[#121212] border border-[#262626] rounded">
        <h3 className="text-sm font-bold uppercase tracking-wider text-[#D4AF37] mb-5 flex items-center gap-2">
          <HelpCircle className="w-4 h-4 shrink-0" />
          {ctx.whyThirdParty}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ctx.painPoints.map((p, idx) => {
            const { icon, bg } = getProblemIcon(p.key);
            return (
              <div key={idx} className="p-5 bg-[#181818] border border-[#262626] hover:border-[#3a3a3a] transition-colors rounded flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded border flex items-center justify-center shrink-0 ${bg}`}>
                    {icon}
                  </div>
                  <span className="text-sm font-bold text-[#f3f4f6] leading-tight">{p.title}</span>
                </div>
                <p className="text-xs text-[#9ca3af] leading-relaxed font-normal">{p.detail}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Output Solution Banner */}
      <div className="p-5 bg-gradient-to-r from-[#12231c] to-[#121212] border border-[#34D399]/40 rounded">
        <div className="flex items-center gap-2.5 mb-2 text-[#34D399]">
          <CheckCircle className="w-5 h-5 shrink-0" />
          <span className="text-xs font-bold uppercase tracking-wider font-mono">
            {language === 'vi' ? 'GIẢI PHÁP ĐƯỢC XÂY DỰNG (OUTPUT SOLUTION)' : 'ARCHITECTED OUTPUT SOLUTION'}
          </span>
        </div>
        <p className="text-base text-[#f3f4f6] font-medium leading-relaxed">{ctx.outputSolution}</p>
      </div>
    </div>
  );
};

// ─── Scope & Nationwide Coverage ───────────────────────────────────────────
const ProjectScopeSection: React.FC<{ detail: SmartLogisticsData; language: string }> = ({ detail, language }) => {
  const scope = detail.projectScope;
  const goalColors = ['#4F9CF9', '#A78BFA', '#34D399'];
  return (
    <div className="space-y-6">
      {/* 3 Core Goals */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-[#9ca3af] mb-4">
          {language === 'vi' ? '3 Mục tiêu Cốt lõi của Hệ thống' : '3 Core Architectural Goals'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {scope.goals.map((g, idx) => (
            <div key={idx} className="p-5 bg-[#121212] border border-[#262626] rounded flex flex-col justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-mono shrink-0"
                  style={{ background: `${goalColors[idx]}20`, color: goalColors[idx] }}>
                  0{idx + 1}
                </span>
                <span className="text-sm font-bold text-[#f3f4f6]">{g.title}</span>
              </div>
              <p className="text-xs text-[#9ca3af] leading-relaxed font-normal">{g.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Geographic Scope & Target Users */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Geographic */}
        <div className="p-5 bg-[#121212] border border-[#262626] rounded flex flex-col gap-3">
          <div className="flex items-center gap-2 text-[#D4AF37]">
            <Globe className="w-5 h-5 shrink-0" />
            <span className="text-xs font-bold uppercase tracking-wider font-mono">
              {language === 'vi' ? 'Phạm vi Triển khai Hệ thống' : 'Nationwide System Scope'}
            </span>
          </div>
          <p className="text-sm text-[#d1d5db] leading-relaxed font-normal">{scope.geographicScope}</p>
          <div className="flex flex-wrap gap-2 pt-2 border-t border-[#262626]">
            <span className="text-xs px-2.5 py-1 bg-[#1a1a1a] text-[#D4AF37] border border-[#D4AF37]/30 font-mono font-semibold rounded">
              {language === 'vi' ? 'ĐVHC Chuẩn Mới (Sau sáp nhập)' : 'Post-Merger Units'}
            </span>
            <span className="text-xs px-2.5 py-1 bg-[#1a1a1a] text-[#34D399] border border-[#34D399]/30 font-mono font-semibold rounded">
              {language === 'vi' ? 'Toàn bộ Phường / Xã mới' : 'Standardized Wards'}
            </span>
            <span className="text-xs px-2.5 py-1 bg-[#1a1a1a] text-[#4F9CF9] border border-[#4F9CF9]/30 font-mono font-semibold rounded">
              {language === 'vi' ? 'Mạng lưới Hub đa cấp' : 'Multi-tier Hub Network'}
            </span>
          </div>
        </div>

        {/* Target Users */}
        <div className="p-5 bg-[#121212] border border-[#262626] rounded flex flex-col gap-3">
          <div className="flex items-center gap-2 text-[#4F9CF9]">
            <Users className="w-5 h-5 shrink-0" />
            <span className="text-xs font-bold uppercase tracking-wider font-mono">
              {language === 'vi' ? '4 Nhóm Đối tượng Người dùng Mục tiêu' : '4 Target User Personas'}
            </span>
          </div>
          <div className="space-y-2">
            {scope.targetUsers.map((u, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-[#d1d5db]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4F9CF9] shrink-0" />
                <span>{u}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SLAs / Technical Targets */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {scope.slas.map((sla, idx) => (
          <div key={idx} className="p-4 bg-[#141414] border border-[#262626] rounded flex flex-col gap-1">
            <span className="text-xs text-[#9ca3af] font-medium">{sla.metric}</span>
            <span className="text-base font-bold text-[#f3f4f6] font-mono">{sla.target}</span>
            <span className="text-xs text-[#34D399] font-mono font-bold mt-1">✔ {sla.result}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── My Engineering Ownership ──────────────────────────────────────────────
const MyOwnershipSection: React.FC<{ detail: SmartLogisticsData; language: string }> = ({ detail, language }) => {
  return (
    <div className="space-y-5">
      <div className="p-5 bg-[#1a1811] border border-[#D4AF37]/40 rounded flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Award className="w-8 h-8 text-[#D4AF37] shrink-0" />
          <div>
            <h3 className="text-base font-bold text-[#f3f4f6]">
              {language === 'vi'
                ? 'Kỹ sư Phần mềm & Lập trình viên Backend — Phụ trách Khối Kỹ thuật Lõi'
                : 'Lead Backend & AI Algorithm Engineer — 100% Core Technical Ownership'}
            </h3>
            <p className="text-xs text-[#9ca3af] mt-0.5 font-normal">
              {language === 'vi'
                ? 'Chịu trách nhiệm thiết kế kiến trúc hệ thống, cơ sở dữ liệu, động cơ toán học AI và API Contracts.'
                : 'Solely responsible for end-to-end system architecture, database modeling, pure TypeScript AI solvers, and API Contracts.'}
            </p>
          </div>
        </div>
        <span className="px-3.5 py-1.5 bg-[#D4AF37] text-[#0e0e0e] font-black text-xs font-mono uppercase tracking-wider rounded shrink-0 self-start md:self-auto">
          100% BACKEND & AI
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {detail.myOwnership.map((pillar, idx) => (
          <div key={idx} className="p-6 bg-[#121212] border border-[#262626] hover:border-[#3a3a3a] transition-colors rounded flex flex-col justify-between gap-4">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 rounded">
                  {pillar.badge}
                </span>
                <span className="text-xs font-mono font-bold text-[#9ca3af]">PILLAR 0{idx + 1}</span>
              </div>
              <h4 className="text-base font-bold text-[#f3f4f6] mb-2">{pillar.area}</h4>
              <p className="text-xs text-[#9ca3af] mb-4 font-normal leading-relaxed">{pillar.summary}</p>
              <ul className="space-y-2.5">
                {pillar.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2 text-xs text-[#d1d5db] leading-relaxed">
                    <CheckSquare className="w-3.5 h-3.5 text-[#34D399] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── High-Level System Architecture ────────────────────────────────────────
const SystemArchitectureSection: React.FC<{ detail?: SmartLogisticsData; language: string }> = ({ language }) => {
  return (
    <div className="p-6 md:p-8 bg-[#111111] border border-[#262626] rounded space-y-6">

      {/* Sơ đồ tiêu đề */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#222222]">
        <div>
          <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider block">
            {language === 'vi' ? 'SƠ ĐỒ LUỒNG KIẾN TRÚC HỆ THỐNG (SYSTEM ARCHITECTURE FLOW)' : 'SYSTEM ARCHITECTURE FLOW DIAGRAM'}
          </span>
          <span className="text-xs text-[#9ca3af] mt-0.5 block">
            {language === 'vi' ? 'Kiến trúc Modular Monolith & Domain-Driven Design (DDD)' : 'Modular Monolith & Domain-Driven Design (DDD) Architecture'}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono px-2.5 py-1 bg-[#34D399]/15 text-[#34D399] border border-[#34D399]/30 rounded">
            Clean Architecture
          </span>
          <span className="text-xs font-mono px-2.5 py-1 bg-[#4F9CF9]/15 text-[#4F9CF9] border border-[#4F9CF9]/30 rounded">
            10 Bounded Contexts
          </span>
        </div>
      </div>

      {/* FLOW DIAGRAM CONTAINER */}
      <div className="space-y-4">

        {/* ── TẦNG 1: CLIENT APPS ── */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#4F9CF9]">
              {language === 'vi' ? 'TẦNG 1: GIAO DIỆN & ỨNG DỤNG KHÁCH (PRESENTATION LAYER)' : 'TIER 1: CLIENT & PRESENTATION LAYER'}
            </span>
            <span className="text-[11px] text-[#9ca3af] font-mono">React 19 · Flutter · Vite</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Client 1 */}
            <div className="p-4 bg-[#161616] border border-[#34D399]/40 hover:border-[#34D399] transition-colors rounded flex flex-col justify-between gap-2 text-center">
              <div>
                <span className="text-sm font-bold text-[#f3f4f6] block">Web Dispatcher</span>
                <span className="text-xs text-[#9ca3af] font-mono mt-0.5 block">React 19 + Vite 8 · SPA</span>
              </div>
              <span className="text-[11px] text-[#34D399] font-mono">Bản đồ radar điều phối xe</span>
            </div>

            {/* Client 2 */}
            <div className="p-4 bg-[#161616] border border-[#4F9CF9]/40 hover:border-[#4F9CF9] transition-colors rounded flex flex-col justify-between gap-2 text-center">
              <div>
                <span className="text-sm font-bold text-[#f3f4f6]">Driver Mobile App</span>
                <span className="text-xs text-[#9ca3af] font-mono mt-0.5 block">Flutter (Dart) Mobile</span>
              </div>
              <span className="text-[11px] text-[#4F9CF9] font-mono">GPS ngầm 5s/lần · Ký số POD</span>
            </div>

            {/* Client 3 */}
            <div className="p-4 bg-[#161616] border border-[#A78BFA]/40 hover:border-[#A78BFA] transition-colors rounded flex flex-col justify-between gap-2 text-center">
              <div>
                <span className="text-sm font-bold text-[#f3f4f6]">B2B Merchant Portal</span>
                <span className="text-xs text-[#9ca3af] font-mono mt-0.5 block">React Web Portal</span>
              </div>
              <span className="text-[11px] text-[#A78BFA] font-mono">Tạo đơn Excel hàng loạt</span>
            </div>
          </div>
        </div>

        {/* ── MŨI TÊN KẾT NỐI 1 -> 2 ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-xs font-mono text-[#9ca3af]">
          <div className="flex flex-col items-center">
            <span className="text-[10px] text-[#34D399]">HTTPS / REST</span>
            <span className="text-base leading-none text-[#34D399]">↓</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] text-[#4F9CF9]">WSS Telemetry (1,321/s)</span>
            <span className="text-base leading-none text-[#4F9CF9]">↓</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] text-[#A78BFA]">HTTPS / Upload</span>
            <span className="text-base leading-none text-[#A78BFA]">↓</span>
          </div>
        </div>

        {/* ── TẦNG 2: CỔNG API GATEWAY ── */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37]">
              {language === 'vi' ? 'TẦNG 2: CỔNG TIẾP NHẬN & AN NINH (API GATEWAY & INGRESS)' : 'TIER 2: API GATEWAY & SECURITY INGRESS'}
            </span>
            <span className="text-[11px] text-[#34D399] font-mono">Express.js + Socket.io</span>
          </div>
          <div className="p-4 bg-[#161616] border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-colors rounded">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono text-center">
              <div className="p-2.5 bg-[#111111] border border-[#2a2a2a] rounded text-[#d1d5db]">
                JWT Auth &amp; RBAC 4 Cấp
              </div>
              <div className="p-2.5 bg-[#111111] border border-[#2a2a2a] rounded text-[#d1d5db]">
                class-validator DTOs
              </div>
              <div className="p-2.5 bg-[#111111] border border-[#2a2a2a] rounded text-[#d1d5db]">
                Token Bucket Rate Limiter
              </div>
            </div>
          </div>
        </div>

        {/* ── MŨI TÊN PHÂN NHÁNH 2 -> 3 ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-xs font-mono">
          <div className="flex flex-col items-center text-[#4F9CF9]">
            <span className="text-[10px]">Sync Domain Dispatch</span>
            <span className="text-base leading-none">↓</span>
          </div>
          <div className="flex flex-col items-center text-[#F59E0B]">
            <span className="text-[10px]">Hot Stream / RabbitMQ</span>
            <span className="text-base leading-none">↓</span>
          </div>
          <div className="flex flex-col items-center text-[#34D399]">
            <span className="text-[10px]">AI Batch Optimization</span>
            <span className="text-base leading-none">↓</span>
          </div>
        </div>

        {/* ── TẦNG 3: 3 PHÂN HỆ XỬ LÝ (CORE - CACHE - AI) ── */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#D4AF37]">
              {language === 'vi' ? 'TẦNG 3: MIỀN NGHIỆP VỤ & TÍNH TOÁN LÕI (CORE DOMAIN & AI OPTIMIZATION)' : 'TIER 3: CORE DOMAIN & AI OPTIMIZATION LAYER'}
            </span>
            <span className="text-[11px] text-[#9ca3af] font-mono">FSM · Redis 7 · Pure TS AI</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Module 1: Domain Core */}
            <div className="p-4 bg-[#141414] border border-[#4F9CF9]/40 rounded space-y-2">
              <div className="flex items-center justify-between pb-2 border-b border-[#222222]">
                <span className="text-xs font-bold text-[#4F9CF9] uppercase font-mono">3.1 DOMAIN CORE</span>
                <span className="text-[10px] text-[#9ca3af] font-mono">DDD Services</span>
              </div>
              <ul className="text-xs text-[#d1d5db] space-y-1.5 leading-relaxed">
                <li>• <strong>Order FSM</strong>: 17 bước chuyển đổi trạng thái</li>
                <li>• <strong>Facility Hub</strong>: Tuyến trung chuyển Line-haul</li>
                <li>• <strong>Tote Bag</strong>: Gom nhiều đơn trong 1 mã sọt</li>
              </ul>
            </div>

            {/* Module 2: Cache & Queue */}
            <div className="p-4 bg-[#141414] border border-[#F59E0B]/40 rounded space-y-2">
              <div className="flex items-center justify-between pb-2 border-b border-[#222222]">
                <span className="text-xs font-bold text-[#F59E0B] uppercase font-mono">3.2 ASYNC &amp; CACHE</span>
                <span className="text-[10px] text-[#34D399] font-mono">P99 &lt; 1ms</span>
              </div>
              <ul className="text-xs text-[#d1d5db] space-y-1.5 leading-relaxed">
                <li>• <strong>Redis 7</strong>: Đệm định vị GPS (HSET, GEOADD)</li>
                <li>• <strong>Socket.io</strong>: Phát radar phòng order:&#123;id&#125;</li>
                <li>• <strong>RabbitMQ</strong>: Hàng đợi xử lý tác vụ nền</li>
              </ul>
            </div>

            {/* Module 3: Pure TS AI Engine */}
            <div className="p-4 bg-[#141414] border border-[#34D399]/40 rounded space-y-2">
              <div className="flex items-center justify-between pb-2 border-b border-[#222222]">
                <span className="text-xs font-bold text-[#34D399] uppercase font-mono">3.3 AI ENGINE</span>
                <span className="text-[10px] text-[#34D399] font-mono">444ms</span>
              </div>
              <ul className="text-xs text-[#d1d5db] space-y-1.5 leading-relaxed">
                <li>• <strong>Genetic Algorithm</strong>: CVRP + VRPTW (–58.2% km)</li>
                <li>• <strong>DBSCAN + K-Means</strong>: Phân cụm &amp; tải trọng</li>
                <li>• <strong>Hungarian Matching</strong>: Ghép cặp tài xế 1-1</li>
              </ul>
            </div>

          </div>
        </div>

        {/* ── MŨI TÊN KẾT NỐI 3 -> 4 ── */}
        <div className="flex items-center justify-center gap-6 text-center text-xs font-mono text-[#9ca3af] py-1">
          <div className="flex items-center gap-1.5">
            <span>(Lưu mốc sự kiện &amp; chữ ký POD)</span>
            <span className="text-base leading-none text-[#4F9CF9]">↓</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>(Tính ma trận khoảng cách 3 tầng)</span>
            <span className="text-base leading-none text-[#D4AF37]">↓</span>
          </div>
        </div>

        {/* ── TẦNG 4: CƠ SỞ DỮ LIỆU & DỊCH VỤ NGOÀI ── */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#34D399]">
              {language === 'vi' ? 'TẦNG 4: CƠ SỞ DỮ LIỆU & DỊCH VỤ NGOÀI (PERSISTENCE & EXTERNAL LAYER)' : 'TIER 4: PERSISTENCE & EXTERNAL LAYER'}
            </span>
            <span className="text-[11px] text-[#9ca3af] font-mono">PostgreSQL 15 · PostGIS · Goong Maps</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

            {/* Database (8 cols) */}
            <div className="md:col-span-8 p-4 bg-[#141414] border border-[#4F9CF9]/40 rounded space-y-2">
              <div className="flex items-center justify-between pb-2 border-b border-[#222222]">
                <span className="text-xs font-bold text-[#4F9CF9] uppercase font-mono">
                  4.1 CƠ SỞ DỮ LIỆU QUAN HỆ (POSTGRESQL &amp; POSTGIS)
                </span>
                <span className="text-xs font-mono text-[#34D399]">38 TABLES · 3NF</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#d1d5db]">
                <div>
                  <strong>PostgreSQL 15 + PostGIS</strong>: Đảm bảo giao dịch ACID, hàm địa lý ST_Distance &amp; GIST Indexing.
                </div>
                <div>
                  <strong>Prisma ORM 5.x Client</strong>: Truy vấn Type-safe 100%, quản lý Migrations tự động và bảo toàn Rollback.
                </div>
              </div>
            </div>

            {/* External Maps (4 cols) */}
            <div className="md:col-span-4 p-4 bg-[#141414] border border-[#D4AF37]/40 rounded space-y-2">
              <div className="flex items-center justify-between pb-2 border-b border-[#222222]">
                <span className="text-xs font-bold text-[#D4AF37] uppercase font-mono">
                  4.2 DỊCH VỤ BẢN ĐỒ
                </span>
                <span className="text-[10px] text-[#D4AF37] font-mono">FALLBACK</span>
              </div>
              <div className="text-xs font-mono text-[#9ca3af] space-y-1">
                <div>1. Goong Maps API (Live)</div>
                <div>2. OSRM Routing (Self-host)</div>
                <div>3. Haversine Math Formula</div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};

// ─── AI Pipeline Flow ──────────────────────────────────────────────────────
const AIPipelineFlow: React.FC<{ detail: SmartLogisticsData; language: string }> = ({ detail, language }) => {
  const colors = ['#4F9CF9', '#A78BFA', '#F59E0B', '#34D399'];
  const stepIcons = [
    <MapPin className="w-6 h-6" />,
    <Share2 className="w-6 h-6" />,
    <Workflow className="w-6 h-6" />,
    <Network className="w-6 h-6" />
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
      {detail.aiPipeline.map((step, idx) => (
        <div key={step.step} className="relative flex flex-col h-full">
          {idx < 3 && (
            <div className="hidden md:block absolute top-[52px] right-0 w-1/2 h-[2px] z-10"
              style={{ background: `linear-gradient(90deg, ${colors[idx]}, ${colors[idx + 1]})` }} />
          )}
          {idx > 0 && (
            <div className="hidden md:block absolute top-[52px] left-0 w-1/2 h-[2px] z-10"
              style={{ background: `linear-gradient(90deg, ${colors[idx - 1]}, ${colors[idx]})` }} />
          )}
          <div className="relative z-20 flex flex-col items-center mx-2 mb-4 h-[255px] justify-between">
            <div className="flex flex-col items-center w-full">
              <div className="w-[104px] h-[104px] rounded-full flex flex-col items-center justify-center border-2 mb-3 shadow-lg"
                style={{ borderColor: colors[idx], background: `${colors[idx]}15`, color: colors[idx] }}>
                <div className="mb-1">{stepIcons[idx]}</div>
                <span className="text-xs font-bold tracking-wider font-mono">
                  {language === 'vi' ? `BƯỚC ${step.step}` : `MODULE ${step.step}`}
                </span>
              </div>
              <span className="font-bold text-base text-[#f3f4f6] text-center mb-1">{step.name}</span>
              <span className="text-xs text-[#9ca3af] text-center leading-snug h-[44px] flex items-center justify-center px-1">
                {step.algo}
              </span>
            </div>
            {step.timeMs && (
              <span className="px-2.5 py-1 text-xs font-mono font-bold flex items-center gap-1 rounded"
                style={{ background: `${colors[idx]}20`, color: colors[idx] }}>
                <Clock className="w-3.5 h-3.5" />
                <span>{step.timeMs}</span>
              </span>
            )}
          </div>
          <div className="p-5 bg-[#121212] border border-[#262626] flex-1 flex flex-col justify-between gap-4 rounded">
            <p className="text-sm text-[#d1d5db] leading-relaxed font-normal min-h-[105px]">{step.description}</p>
            <div className="pt-3 border-t border-[#262626]">
              <span className="text-xs text-[#9ca3af] uppercase tracking-wider font-semibold block mb-1.5">
                {language === 'vi' ? 'Kết quả thực tế' : 'Verified Output'}
              </span>
              <p className="text-sm font-semibold leading-relaxed min-h-[64px] flex items-start" style={{ color: colors[idx] }}>
                {step.result}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// ─── GPS Telemetry Flow ────────────────────────────────────────────────────
const TelemetryFlow: React.FC<{ language: string }> = ({ language }) => (
  <div className="p-7 bg-[#121212] border border-[#262626] rounded space-y-6">
    {/* Header & Badges */}
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#222222]">
      <div>
        <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider font-mono">
          {language === 'vi'
            ? 'SƠ ĐỒ LUỒNG DỮ LIỆU ĐƯỜNG ỐNG 2 TẦNG (2-TIER TELEMETRY PIPELINE)'
            : '2-TIER HIGH-FREQUENCY TELEMETRY PIPELINE ARCHITECTURE'}
        </p>
        <p className="text-xs text-[#9ca3af] mt-1 font-normal">
          {language === 'vi'
            ? 'Cơ chế tách rời luồng ghi GPS tần suất cao khỏi cơ sở dữ liệu quan hệ'
            : 'Decoupling high-frequency continuous GPS ingestion from relational disk storage'}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        <span className="text-xs px-2.5 py-1 bg-[#34D399]/15 text-[#34D399] border border-[#34D399]/30 font-mono font-bold rounded">
          P99 &lt; 1ms
        </span>
        <span className="text-xs px-2.5 py-1 bg-[#4F9CF9]/15 text-[#4F9CF9] border border-[#4F9CF9]/30 font-mono font-bold rounded">
          1,321 pings/sec
        </span>
        <span className="text-xs px-2.5 py-1 bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30 font-mono font-bold rounded">
          –99.8% Disk I/O
        </span>
      </div>
    </div>

    {/* Architecture Diagram Canvas */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

      {/* STEP 1: Driver Client (3 cols) */}
      <div className="lg:col-span-3 p-5 bg-[#171717] border border-[#2e2e2e] rounded flex flex-col gap-3 h-full justify-between">
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono font-bold px-2 py-0.5 bg-[#4F9CF9]/15 text-[#4F9CF9] border border-[#4F9CF9]/30 rounded">
              PRODUCER
            </span>
            <span className="text-xs text-[#9ca3af] font-mono">500+ Drivers</span>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded bg-[#4F9CF9]/10 border border-[#4F9CF9]/30 flex items-center justify-center text-[#4F9CF9] shrink-0">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#f3f4f6]">
                {language === 'vi' ? 'Flutter Driver App' : 'Driver Mobile App'}
              </h4>
              <p className="text-xs text-[#9ca3af]">
                {language === 'vi' ? 'Ứng dụng tài xế chạy ngầm' : 'Background GPS tracker'}
              </p>
            </div>
          </div>
          <div className="space-y-1.5 text-xs text-[#9ca3af] font-mono bg-[#111111] p-2.5 rounded border border-[#222222]">
            <div>• {language === 'vi' ? 'Chu kỳ: 5 giây / ping' : 'Interval: 5s / ping'}</div>
            <div>• {language === 'vi' ? 'Giao thức: WebSocket (WSS)' : 'Protocol: WSS Stream'}</div>
            <div>• {language === 'vi' ? 'Xác thực: Bearer JWT' : 'Auth: Bearer JWT'}</div>
          </div>
        </div>
        <div className="text-xs text-[#d1d5db] font-normal leading-relaxed pt-2 border-t border-[#262626]">
          {language === 'vi'
            ? 'Phát luồng tọa độ GPS (lat, lng, speed, heading) liên tục khi đang thực hiện ca giao hàng.'
            : 'Emits continuous GPS telemetry payloads while on active delivery shifts.'}
        </div>
      </div>

      {/* CONNECTOR 1 -> 2 (1 col) */}
      <div className="lg:col-span-1 hidden lg:flex flex-col items-center justify-center gap-1 text-[#A78BFA]">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-center leading-none text-[#A78BFA]">
          WSS
        </span>
        <div className="w-full h-[2px] bg-gradient-to-r from-[#4F9CF9] via-[#A78BFA] to-[#F59E0B] relative">
          <div className="absolute -right-1.5 -top-1.5 w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-[#A78BFA]" />
        </div>
        <span className="text-[10px] text-[#9ca3af] font-mono">1,321/s</span>
      </div>

      {/* STEP 2: Gateway Layer (3 cols) */}
      <div className="lg:col-span-3 p-5 bg-[#171717] border border-[#2e2e2e] rounded flex flex-col gap-3 h-full justify-between">
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono font-bold px-2 py-0.5 bg-[#A78BFA]/15 text-[#A78BFA] border border-[#A78BFA]/30 rounded">
              GATEWAY
            </span>
            <span className="text-xs text-[#34D399] font-mono font-bold">● ONLINE</span>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded bg-[#A78BFA]/10 border border-[#A78BFA]/30 flex items-center justify-center text-[#A78BFA] shrink-0">
              <Radio className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#f3f4f6]">
                {language === 'vi' ? 'Cổng Telemetry Gateway' : 'Ingestion Gateway'}
              </h4>
              <p className="text-xs text-[#9ca3af]">Express.js + Socket.io</p>
            </div>
          </div>
          <div className="space-y-1.5 text-xs text-[#9ca3af] font-mono bg-[#111111] p-2.5 rounded border border-[#222222]">
            <div>• Token Bucket Rate Limiter</div>
            <div>• DTO Payload Validation</div>
            <div>• Multiplexed Room Router</div>
          </div>
        </div>
        <div className="text-xs text-[#d1d5db] font-normal leading-relaxed pt-2 border-t border-[#262626]">
          {language === 'vi'
            ? 'Tiếp nhận, thẩm định quyền truy cập và phân luồng xử lý thành 3 nhánh song song độc lập.'
            : 'Ingests, validates, and multiplexes payloads into 3 decoupled execution paths.'}
        </div>
      </div>

      {/* CONNECTOR 2 -> 3 (1 col) */}
      <div className="lg:col-span-1 hidden lg:flex flex-col items-center justify-center gap-2 text-[#9ca3af]">
        <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D4AF37]">FAN-OUT</div>
        <div className="w-full h-[2px] bg-[#333333] relative">
          <div className="absolute -right-1.5 -top-1.5 w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-[#D4AF37]" />
        </div>
        <div className="text-[10px] text-[#9ca3af] font-mono text-center">3 Luồng</div>
      </div>

      {/* STEP 3: 3 Execution Branches (4 cols) */}
      <div className="lg:col-span-4 flex flex-col gap-3">
        {/* Branch 1: Redis Hot Stream */}
        <div className="p-4 bg-[#141414] border-l-4 border-l-[#34D399] border-y border-r border-[#262626] rounded-r flex flex-col gap-2.5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-[#34D399] min-w-0">
              <Zap className="w-4 h-4 shrink-0" />
              <span className="text-xs font-bold uppercase font-mono">
                {language === 'vi' ? '1. Đệm Redis 7 (Hot Stream)' : '1. Redis 7 (Hot Stream)'}
              </span>
            </div>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-[#34D399]/15 text-[#34D399] rounded whitespace-nowrap shrink-0">
              P99 &lt; 1ms
            </span>
          </div>
          <div className="text-xs font-mono text-[#d1d5db] bg-[#0c0c0c] p-2.5 rounded border border-[#222222] space-y-0.5">
            <div><code className="text-[#34D399]">HSET driver:location:&#123;id&#125;</code></div>
            <div><code className="text-[#34D399]">GEOADD driver:geo &#123;lng&#125; &#123;lat&#125; &#123;id&#125;</code></div>
          </div>
          <p className="text-xs text-[#9ca3af] font-normal leading-relaxed">
            {language === 'vi'
              ? 'Lưu đệm tọa độ thời gian thực với độ trễ siêu thấp, 100% không ghi xuống đĩa cứng.'
              : 'Sub-millisecond driver coordinate buffer driving real-time views without disk I/O.'}
          </p>
        </div>

        {/* Branch 2: Socket.io Room Broadcast */}
        <div className="p-4 bg-[#141414] border-l-4 border-l-[#F59E0B] border-y border-r border-[#262626] rounded-r flex flex-col gap-2.5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-[#F59E0B] min-w-0">
              <Radio className="w-4 h-4 shrink-0" />
              <span className="text-xs font-bold uppercase font-mono">
                {language === 'vi' ? '2. Socket.io (Radar Push)' : '2. Socket.io (Radar Push)'}
              </span>
            </div>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-[#F59E0B]/15 text-[#F59E0B] rounded whitespace-nowrap shrink-0">
              RADAR MAP
            </span>
          </div>
          <div className="text-xs font-mono text-[#d1d5db] bg-[#0c0c0c] p-2.5 rounded border border-[#222222] space-y-0.5">
            <div><code className="text-[#F59E0B]">io.to('order:&#123;id&#125;').emit('driver_moved')</code></div>
            <div><code className="text-[#F59E0B]">Flag Drop Event on DELIVERED</code></div>
          </div>
          <p className="text-xs text-[#9ca3af] font-normal leading-relaxed">
            {language === 'vi'
              ? 'Cập nhật trực tiếp vị trí xe lên màn hình radar admin và đổi màu trạng thái giao hàng tức thì.'
              : 'Directly broadcasts live position to admin viewports with instant status flip.'}
          </p>
        </div>

        {/* Branch 3: PostgreSQL Cold Persistence */}
        <div className="p-4 bg-[#141414] border-l-4 border-l-[#4F9CF9] border-y border-r border-[#262626] rounded-r flex flex-col gap-2.5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-[#4F9CF9] min-w-0">
              <Database className="w-4 h-4 shrink-0" />
              <span className="text-xs font-bold uppercase font-mono">
                {language === 'vi' ? '3. PostgreSQL (Cold Store)' : '3. PostgreSQL (Cold Store)'}
              </span>
            </div>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-[#4F9CF9]/15 text-[#4F9CF9] rounded whitespace-nowrap shrink-0">
              ACID AUDIT
            </span>
          </div>
          <div className="text-xs font-mono text-[#d1d5db] bg-[#0c0c0c] p-2.5 rounded border border-[#222222] space-y-0.5">
            <div><code className="text-[#4F9CF9]">Only on: PICKED_UP · AT_HUB · DELIVERED</code></div>
            <div><code className="text-[#4F9CF9]">ST_Distance + POD Signature &amp; Photo</code></div>
          </div>
          <p className="text-xs text-[#9ca3af] font-normal leading-relaxed">
            {language === 'vi'
              ? 'Chỉ ghi cố định khi phát sinh mốc nghiệp vụ chính, bảo toàn 100% dữ liệu lịch sử và chữ ký số.'
              : 'Persists strictly on business milestones, saving 99.8% disk I/O while preserving full audit trails.'}
          </p>
        </div>
      </div>

    </div>

    {/* Architecture Summary Callout */}
    <div className="p-4 bg-[#161616] border border-[#282828] rounded flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse shrink-0" />
        <p className="text-xs text-[#d1d5db] font-normal leading-relaxed">
          <strong className="text-[#f3f4f6] font-semibold">
            {language === 'vi' ? 'Hiệu quả Kiến trúc Kỹ thuật' : 'Architectural Engineering Takeaway'}:
          </strong>{' '}
          {language === 'vi'
            ? 'Thay vì ghi trực tiếp 6,000 lượt/phút vào CSDL gây nghẽn ổ đĩa (Disk I/O), kiến trúc 2 tầng đệm 100% luồng tọa độ vào Redis 7 và chỉ kích hoạt lưu trữ PostgreSQL khi hoàn thành các chặng nghiệp vụ quan trọng.'
            : 'Decoupling 6,000+ writes/min into Redis 7 eliminates relational disk I/O saturation while maintaining sub-millisecond P99 telemetry latency across 500+ active couriers.'}
        </p>
      </div>
    </div>
  </div>
);

// ─── Fulfillment Lifecycle Flow ────────────────────────────────────────────
const FulfillmentFlow: React.FC<{ detail: SmartLogisticsData }> = ({ detail }) => {
  const stageColors = ['#4F9CF9', '#A78BFA', '#F59E0B', '#34D399', '#F472B6', '#60A5FA', '#FBBF24'];
  return (
    <div className="space-y-2">
      {detail.fulfillmentStages.map((s, i) => (
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
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('overview');

  const detail = SMART_LOGISTICS_DETAIL[language];
  const project = PROJECTS[language].find(p => p.id === 'smart-logistics')!;
  const t = UI_TRANSLATIONS[language];

  const TOC_SECTIONS = [
    { id: 'overview', label: language === 'vi' ? 'Tổng quan & Hiệu quả' : 'Overview & Impact' },
    { id: 'showcase', label: language === 'vi' ? 'Khung Demo Sản phẩm (PC & Mobile)' : 'Interactive Device Showcase' },
    { id: 'context', label: language === 'vi' ? 'Bối cảnh & Đặt vấn đề' : 'Business Context & Problem' },
    { id: 'scope', label: language === 'vi' ? 'Mục tiêu & Phạm vi toàn quốc' : 'Scope & Nationwide Coverage' },
    { id: 'ownership', label: language === 'vi' ? 'Trách nhiệm kỹ thuật cá nhân' : 'My Engineering Ownership' },
    { id: 'architecture', label: language === 'vi' ? 'Kiến trúc Hệ thống Tổng thể' : 'System Architecture' },
    { id: 'ai', label: language === 'vi' ? 'Thuật toán AI chia tuyến' : 'AI Routing Pipeline' },
    { id: 'telemetry', label: language === 'vi' ? 'Định vị GPS thời gian thực' : 'Real-Time GPS Telemetry' },
    { id: 'lifecycle', label: language === 'vi' ? 'Quy trình 7 bước giao vận' : '7-Stage Fulfillment' },
    { id: 'database', label: language === 'vi' ? 'Kiến trúc Cơ sở dữ liệu' : 'Database Architecture' },
    { id: 'techstack', label: language === 'vi' ? 'Ngăn xếp công nghệ' : 'Technology Stack' },
    { id: 'tests', label: language === 'vi' ? 'Báo cáo kiểm thử tự động' : 'Testing Report' },
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

        {/* ── Left Sidebar ── */}
        <aside className="hidden lg:flex flex-col w-[280px] shrink-0">
          <div className="sticky top-[65px] max-h-[calc(100vh-65px)] overflow-y-auto pt-8 pb-10 pr-6 flex flex-col gap-6">

            {/* Quick Info */}
            <div>
              <p className="text-xs text-[#9ca3af] uppercase tracking-wider font-bold mb-4">{t.detailCommon.quickInfoTitle}</p>
              <div className="space-y-4">
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
                  <p className="text-xs text-[#9ca3af] mb-1 font-medium">{t.detailCommon.companyLabel}</p>
                  <p className="text-sm text-[#f3f4f6] font-semibold">{detail.company}</p>
                  <p className="text-xs text-[#9ca3af] mt-0.5 font-normal leading-tight">{detail.clientType}</p>
                </div>
                <div>
                  <p className="text-xs text-[#9ca3af] mb-1 font-medium">{t.detailCommon.roleLabel}</p>
                  <p className="text-sm text-[#f3f4f6] font-semibold">{detail.role}</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#222222]" />

            {/* TOC */}
            <div>
              <p className="text-xs text-[#9ca3af] uppercase tracking-wider font-bold mb-4">{t.detailCommon.tocTitle}</p>
              <nav className="space-y-1">
                {TOC_SECTIONS.map(s => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className={`w-full text-left flex items-center gap-2 py-2 px-0 text-sm transition-colors ${activeSection === s.id
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

        {/* ── Main Content ── */}
        <main className="flex-1 min-w-0 border-l border-[#222222] pl-10 py-10 space-y-20">

          {/* ── Overview & Quantifiable Impact ── */}
          <section id="overview">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-[#D4AF37]" />
              <span className="text-xs font-bold tracking-wider text-[#D4AF37] uppercase">
                {language === 'vi' ? 'Hệ thống Cấp Doanh nghiệp · Công ty TNHH CITARES' : 'Enterprise Logistics System · CITARES Co., Ltd.'}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[#f3f4f6] tracking-tight mb-6 leading-tight">
              Smart Logistics<br /><span className="text-[#D4AF37]">Platform (SLP)</span>
            </h1>
            <p className="text-[#d1d5db] leading-relaxed mb-8 max-w-3xl font-normal text-lg">{detail.overview}</p>

            {/* Mobile quick info */}
            <div className="lg:hidden flex flex-wrap gap-3 mb-8">
              <span className="flex items-center gap-2 px-3.5 py-2 bg-[#161616] border border-[#262626] text-xs text-[#d1d5db]">
                <Building2 className="w-4 h-4 text-[#D4AF37]" /> {detail.company}
              </span>
              <span className="flex items-center gap-2 px-3.5 py-2 bg-[#161616] border border-[#262626] text-xs text-[#d1d5db]">
                <User className="w-4 h-4 text-[#D4AF37]" /> {detail.role}
              </span>
              <span className="flex items-center gap-2 px-3.5 py-2 bg-[#161616] border border-[#262626] text-xs text-[#d1d5db]">
                <Clock className="w-4 h-4 text-[#D4AF37]" /> {detail.duration}
              </span>
            </div>

            {/* Business & Operational Impact Cards (Before vs After) */}
            <div className="mt-8">
              <div className="flex items-center gap-2.5 mb-4">
                <BarChart3 className="w-5 h-5 text-[#D4AF37]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] font-mono">
                  {language === 'vi'
                    ? 'CHỈ SỐ TÁC ĐỘNG VẬN HÀNH & DOANH NGHIỆP (BEFORE VS AFTER)'
                    : 'QUANTIFIABLE OPERATIONAL & BUSINESS IMPACT (BEFORE VS AFTER)'}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {detail.businessImpact.map((b, i) => {
                  const colors = ['#34D399', '#4F9CF9', '#A78BFA', '#F59E0B', '#F472B6', '#34D399'];
                  const c = colors[i % colors.length];
                  return (
                    <div key={i} className="p-5 bg-[#121212] border border-[#262626] hover:border-[#3a3a3a] transition-colors flex flex-col justify-between gap-3 rounded">
                      <span className="text-xs font-bold text-[#9ca3af] uppercase tracking-wider">{b.metric}</span>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-[#6b7280] font-normal">{b.before}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-[#4b5563] shrink-0" />
                        <span className="text-[#d1d5db] font-semibold">{b.after}</span>
                      </div>
                      <div className="text-3xl font-black font-mono mt-1" style={{ color: c }}>{b.delta}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ── Section: Interactive Device Mockup Showcase ── */}
          <section id="showcase" className="space-y-6">
            <ProjectShowcaseGallery
              projectId="smart-logistics"
              defaultTab="dual"
              availableTabs={['dual', 'desktop', 'mobile', 'terminal']}
              desktopTitle={language === 'vi' ? 'Trung Tâm Điều Vận Radar & Bản Đồ Số (Web Portal)' : 'Dispatch Radar & Live Geospatial Map (Web Portal)'}
              mobileTitle={language === 'vi' ? 'App Tài Xế & Ký Nhận POD (Flutter Mobile)' : 'Driver Routing & Electronic POD App (Flutter)'}
              desktopUrl="http://localhost:3000"
              themeColor="#34D399"
              terminalCommand="npm test -- --testPathPattern=algorithms.spec.ts"
            />
          </section>

          {/* ── Business Context & Problem Statement ── */}
          <section id="context">
            <SectionTitle icon={<AlertTriangle className="w-5 h-5" />}
              title={language === 'vi' ? 'Bối cảnh Doanh nghiệp & Đặt vấn đề Thực tế (Business Context)' : 'Business Context & 3PL Problem Statement'}
              badge={language === 'vi' ? 'Đặt vấn đề & Giải pháp' : 'Problem vs Solution'} />
            <p className="text-[#d1d5db] text-base mb-8 leading-relaxed font-normal">
              {language === 'vi'
                ? 'Phân tích các rào cản và khó khăn thực tế mà các cửa hàng kinh doanh, đại lý bán lẻ gặp phải khi vận hành quy trình giao nhận hàng hóa truyền thống.'
                : 'Deconstructing real-world logistics bottlenecks and operational friction faced by merchants under traditional unoptimized dispatching models.'}
            </p>
            <BusinessContextSection detail={detail} language={language} />
          </section>

          {/* ── Scope & Nationwide Coverage ── */}
          <section id="scope">
            <SectionTitle icon={<Target className="w-5 h-5" />}
              title={language === 'vi' ? 'Mục tiêu & Phạm vi Triển khai Toàn quốc (Scope & Objectives)' : 'System Objectives & Nationwide Scope'}
              badge={language === 'vi' ? 'Chuẩn ĐVHC mới sau sáp nhập' : 'Post-Merger Geography'} />
            <p className="text-[#d1d5db] text-base mb-8 leading-relaxed font-normal">
              {language === 'vi'
                ? 'Định hình 3 mục tiêu cốt lõi của hệ thống, phân loại 4 nhóm người dùng trọng tâm và cam kết các chỉ số kỹ thuật dịch vụ (SLA) cấp doanh nghiệp.'
                : 'Defining the 3 core system objectives, 4 user personas, and strict technical SLA targets for enterprise operations.'}
            </p>
            <ProjectScopeSection detail={detail} language={language} />
          </section>

          {/* ── My Engineering Ownership ── */}
          <section id="ownership">
            <SectionTitle icon={<Award className="w-5 h-5" />}
              title={language === 'vi' ? 'Trách nhiệm & Đóng góp Kỹ thuật Cá nhân (My Engineering Ownership)' : 'My Engineering Ownership & Contributions'}
              badge="100% Backend & AI" />
            <p className="text-[#d1d5db] text-base mb-8 leading-relaxed font-normal">
              {language === 'vi'
                ? 'Trong nhóm 4 thành viên (gồm Frontend Web & Mobile Flutter), tôi đảm nhiệm vai trò Kỹ sư Phần mềm & Lập trình viên Backend chính, phụ trách 100% toàn bộ nền tảng Backend, CSDL PostgreSQL/PostGIS, Động cơ AI thuần TypeScript và Hệ thống kiểm thử tự động.'
                : 'Across the 4-person engineering team (including Web Frontend and Flutter Mobile), I served as the Lead Backend & Algorithm Engineer, with 100% ownership over system architecture, PostgreSQL/PostGIS schema, pure TypeScript AI solvers, and automated CI/CD suites.'}
            </p>
            <MyOwnershipSection detail={detail} language={language} />
          </section>

          {/* ── High-Level System Architecture ── */}
          <section id="architecture">
            <SectionTitle icon={<Layers className="w-5 h-5" />}
              title={language === 'vi' ? 'Kiến trúc Hệ thống Tổng thể (High-Level Architecture)' : 'High-Level System Architecture'}
              badge="Clean Architecture & DDD" />
            <p className="text-[#d1d5db] text-base mb-8 leading-relaxed font-normal">
              {language === 'vi'
                ? 'Sơ đồ luồng phân tầng kiến trúc tổng thể toàn hệ thống từ Client, Gateway, 10 phân hệ nghiệp vụ, Động cơ AI đến Bộ đệm Redis và CSDL PostgreSQL/PostGIS.'
                : 'End-to-end multi-tier architectural flow covering Presentation, Ingress Gateway, Domain Monolith, Pure TS AI solvers, In-Memory Stream, and Relational Persistence.'}
            </p>
            <SystemArchitectureSection detail={detail} language={language} />
          </section>

          {/* ── AI Pipeline ── */}
          <section id="ai">
            <SectionTitle icon={<Cpu className="w-5 h-5" />}
              title={language === 'vi' ? 'Đường ống 4 Thuật toán Trí tuệ Nhân tạo chia tuyến (AI Routing Pipeline)' : '4-Module Pure TypeScript AI Routing Pipeline'}
              badge={language === 'vi' ? '100% Thuần TypeScript' : 'Zero External AI Dependency'} />
            <p className="text-[#d1d5db] text-base mb-8 leading-relaxed font-normal">
              {language === 'vi'
                ? 'Toàn bộ động cơ Trí tuệ nhân tạo (AI Engine) được tự phát triển bằng mã nguồn TypeScript thuần mà không phụ thuộc vào thư viện ngoài. Đường ống gồm 4 thuật toán tuần tự phối hợp chặt chẽ nhằm giải quyết bài toán định tuyến xe có giới hạn tải trọng và khung giờ hẹn (Capacitated Vehicle Routing Problem with Time Windows - CVRP/VRPTW) trong vòng chưa tới nửa giây.'
                : 'The entire optimization engine is engineered in pure TypeScript with zero external black-box dependencies. The 4 sequential algorithms collaborate to solve the NP-Hard Capacitated Vehicle Routing Problem with Time Windows (CVRP+VRPTW) in sub-second execution.'}
            </p>
            <AIPipelineFlow detail={detail} language={language} />
          </section>

          {/* ── GPS Telemetry ── */}
          <section id="telemetry">
            <SectionTitle icon={<Zap className="w-5 h-5" />}
              title={language === 'vi' ? 'Hệ thống Truyền phát Định vị Toàn cầu Thời gian thực (Real-Time GPS Telemetry)' : 'High-Frequency Real-Time GPS Telemetry'} />
            <p className="text-[#d1d5db] text-base mb-8 leading-relaxed font-normal">
              {language === 'vi'
                ? 'Với hơn 500 tài xế gửi tọa độ định kỳ 5 giây/lần tạo ra hơn 6,000 lượt ghi mỗi phút, toàn bộ luồng tọa độ được tiếp nhận và xử lý qua kiến trúc bộ nhớ đệm Redis 2 tầng (2-Tier In-Memory Pipeline) nhằm giải tỏa 100% áp lực ghi trực tiếp lên cơ sở dữ liệu quan hệ PostgreSQL.'
                : 'With 500+ active couriers pinging GPS coordinates every 5 seconds generating 6,000+ writes/minute, the stream is decoupled through a 2-Tier In-Memory Redis architecture to isolate disk I/O from PostgreSQL.'}
            </p>
            <TelemetryFlow language={language} />
          </section>

          {/* ── Lifecycle ── */}
          <section id="lifecycle">
            <SectionTitle icon={<GitMerge className="w-5 h-5" />}
              title={language === 'vi' ? 'Vòng đời 7 Giai đoạn Xử lý Đơn hàng (7-Stage Fulfillment Lifecycle)' : '7-Stage Supply Chain Fulfillment Lifecycle'} />
            <p className="text-[#d1d5db] text-base mb-8 leading-relaxed font-normal">
              {language === 'vi'
                ? 'Mỗi đơn hàng được kiểm soát nghiêm ngặt qua 7 giai đoạn khép kín theo mô hình Máy trạng thái hữu hạn (Finite State Machine - FSM). Mỗi lần chuyển trạng thái đều được tự động lưu vào bảng nhật ký lịch sử (order_status_history), tạo thành biên bản kiểm toán bất biến phục vụ việc đối soát và tra cứu hành trình.'
                : 'Orders strictly transition across 7 distinct states governed by a Finite State Machine (FSM). Every transition is committed to order_status_history, generating an immutable audit trail.'}
            </p>
            <FulfillmentFlow detail={detail} />
          </section>

          {/* ── Database ── */}
          <section id="database">
            <SectionTitle icon={<Database className="w-5 h-5" />}
              title={language === 'vi' ? 'Kiến trúc Cơ sở Dữ liệu Quan hệ (Database Architecture)' : 'Relational Database Architecture'} />
            <p className="text-[#d1d5db] text-base mb-8 font-normal">
              {language === 'vi'
                ? 'Quy mô 38 bảng · 10 Phân hệ nghiệp vụ độc lập · Cơ sở dữ liệu PostgreSQL 15 + PostGIS · Trình ánh xạ quan hệ đối tượng Prisma ORM 5.x'
                : '38 Tables · 10 Bounded Domain Contexts · PostgreSQL 15 + PostGIS · Prisma ORM 5.x'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {detail.dbModules.map((mod) => {
                const mColors = ['#4F9CF9', '#A78BFA', '#34D399', '#F59E0B', '#F472B6', '#60A5FA', '#FBBF24', '#FB923C', '#34D399', '#A78BFA'];
                const c = mColors[(mod.id - 1) % mColors.length];
                return (
                  <div key={mod.id} className="p-5 bg-[#121212] border border-[#262626] hover:border-[#3a3a3a] transition-colors rounded">
                    <div className="flex items-center gap-2.5 mb-3">
                      <span className="w-6 h-6 text-xs font-black flex items-center justify-center font-mono rounded"
                        style={{ background: `${c}20`, color: c }}>{mod.id}</span>
                      <span className="text-base font-bold text-[#f3f4f6]">{mod.name}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {mod.tables.map(tName => (
                        <code key={tName} className="text-xs px-2 py-1 bg-[#1a1a1a] border border-[#2a2a2a] text-[#9ca3af] font-mono rounded">{tName}</code>
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
            <SectionTitle icon={<Server className="w-5 h-5" />}
              title={language === 'vi' ? 'Ngăn xếp Công nghệ & Nền tảng Kỹ thuật (Technology Stack)' : 'Technology Stack & Engineering Toolchain'} />
            <div className="border border-[#262626] overflow-hidden rounded">
              <table className="w-full text-base">
                <thead>
                  <tr className="border-b border-[#262626] bg-[#141414]">
                    <th className="text-left px-5 py-3.5 text-xs font-bold text-[#9ca3af] uppercase tracking-wider w-[220px]">
                      {language === 'vi' ? 'Phân tầng kiến trúc' : 'Architectural Layer'}
                    </th>
                    <th className="text-left px-5 py-3.5 text-xs font-bold text-[#9ca3af] uppercase tracking-wider w-[240px]">
                      {language === 'vi' ? 'Công nghệ / Phiên bản' : 'Technology & Version'}
                    </th>
                    <th className="text-left px-5 py-3.5 text-xs font-bold text-[#9ca3af] uppercase tracking-wider">
                      {language === 'vi' ? 'Vai trò & Khả năng đáp ứng' : 'Role & Engineering Capability'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {detail.techStack.map((item, i) => (
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
            <SectionTitle icon={<CheckCircle className="w-5 h-5" />}
              title={language === 'vi' ? 'Báo cáo Kiểm thử Tự động Toàn diện (Master Testing Report)' : 'Master Automated Testing Suite Report'}
              badge="12/12 PASS" />
            <p className="text-[#d1d5db] text-base mb-8 font-normal">
              {language === 'vi'
                ? 'Bộ kịch bản kiểm thử tự động toàn diện được khởi chạy qua lệnh npm run test:master, bao phủ 5 tầng kiến trúc từ thuật toán toán học đến tính toàn vẹn cơ sở dữ liệu và bảo mật phân quyền.'
                : 'Automated CI/CD master test suite executed via npm run test:master covering mathematical algorithm convergence, database concurrency, and gateway security.'}
            </p>
            <div className="border border-[#262626] overflow-hidden rounded">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#141414] border-b border-[#262626]">
                    <th className="text-left px-5 py-3 text-xs font-bold text-[#9ca3af] uppercase tracking-wider w-10">#</th>
                    <th className="text-left px-5 py-3 text-xs font-bold text-[#9ca3af] uppercase tracking-wider w-48">
                      {language === 'vi' ? 'Phân nhóm kiểm thử' : 'Test Group'}
                    </th>
                    <th className="text-left px-5 py-3 text-xs font-bold text-[#9ca3af] uppercase tracking-wider">
                      {language === 'vi' ? 'Kịch bản kiểm thử' : 'Test Suite & Assertion'}
                    </th>
                    <th className="text-left px-5 py-3 text-xs font-bold text-[#9ca3af] uppercase tracking-wider w-24">
                      {language === 'vi' ? 'Thời gian' : 'Time'}
                    </th>
                    <th className="text-left px-5 py-3 text-xs font-bold text-[#9ca3af] uppercase tracking-wider w-28">
                      {language === 'vi' ? 'Kết quả' : 'Status'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {detail.testResults.map((tItem, i) => {
                    const c = groupColors[tItem.group] || '#9ca3af';
                    return (
                      <tr key={i} className="border-b border-[#1c1c1c] hover:bg-[#161616] transition-colors">
                        <td className="px-5 py-3.5 text-xs text-[#9ca3af] font-mono">{i + 1}</td>
                        <td className="px-5 py-3.5">
                          <span className="text-xs font-bold px-2.5 py-1 rounded" style={{ background: `${c}15`, color: c }}>{tItem.group}</span>
                        </td>
                        <td className="px-5 py-3.5 text-sm font-medium text-[#f3f4f6]">
                          <div>{tItem.name}</div>
                          <div className="text-xs text-[#9ca3af] font-normal mt-0.5">{tItem.result}</div>
                        </td>
                        <td className="px-5 py-3.5 text-xs font-mono font-bold text-[#9ca3af]">{tItem.timeMs}</td>
                        <td className="px-5 py-3.5">
                          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#34D399] px-2.5 py-1 bg-[#34D399]/10 rounded">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" /> PASS
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Challenges ── */}
          <section id="challenges">
            <SectionTitle icon={<AlertTriangle className="w-5 h-5" />}
              title={language === 'vi' ? 'Các Thách thức Kỹ thuật Tiêu biểu & Giải pháp (Engineering Challenges)' : 'Engineering Challenges & Applied Solutions'} />
            <div className="space-y-4">
              {detail.challenges.map((c, i) => (
                <div key={i} className="p-6 bg-[#121212] border border-[#262626] hover:border-[#3a3a3a] transition-colors rounded">
                  <h3 className="text-base font-bold text-[#D4AF37] mb-4 flex items-center gap-2.5">
                    <span className="w-6 h-6 flex items-center justify-center text-xs font-black font-mono rounded"
                      style={{ background: '#D4AF3720', color: '#D4AF37' }}>{i + 1}</span>
                    {c.title}
                  </h3>
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

          {/* ── Tech Tags ── */}
          <section className="border-t border-[#222222] pt-12">
            <div className="flex items-center gap-3 mb-5">
              <Layers className="w-5 h-5 text-[#9ca3af]" />
              <span className="text-xs font-bold text-[#9ca3af] uppercase tracking-wider">{t.detailCommon.techKeywords}</span>
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
              {t.detailCommon.viewSourceBtn} <ArrowUpRight className="w-4 h-4" />
            </a>
            <button onClick={() => navigate(-1)}
              className="flex items-center gap-2 px-6 py-3.5 border border-[#333333] text-[#9ca3af] font-semibold text-sm hover:border-[#555] hover:text-[#f3f4f6] transition-colors tracking-wider uppercase rounded">
              <ArrowLeft className="w-4 h-4" /> {t.detailCommon.backToPortfolioBtn}
            </button>
          </section>

        </main>
      </div>
    </div>
  );
};

// ─── Reusable section title ────────────────────────────────────────────────
const SectionTitle: React.FC<{ icon: React.ReactNode; title: string; badge?: string }> = ({ icon, title, badge }) => (
  <div className="flex items-center flex-wrap gap-3 mb-6">
    <span className="text-[#D4AF37] shrink-0">{icon}</span>
    <h2 className="text-2xl font-black text-[#f3f4f6]">{title}</h2>
    {badge && (
      <span className="text-xs px-2.5 py-1 bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 font-bold font-mono tracking-wider rounded whitespace-nowrap shrink-0">
        {badge}
      </span>
    )}
  </div>
);

export default SmartLogisticsPage;
