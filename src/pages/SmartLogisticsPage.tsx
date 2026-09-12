import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  Zap,
  Database,
  Server,
  Cpu,
  GitMerge,
  AlertTriangle,
  Layers,
  Smartphone,
  Radio,
  MapPin,
  Share2,
  Workflow,
  Network,
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
  Lock,
  Shield,
  X,
  Maximize2,
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { SMART_LOGISTICS_DETAIL, SmartLogisticsData, ProblemPoint } from '../data/projects/smartLogistics.data';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from '../components/LanguageToggle';
import { UI_TRANSLATIONS } from '../data/translations';
import { ProjectShowcaseGallery } from '../components/ProjectShowcaseGallery';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

// ─── Business Context & Problem Statement ──────────────────────────────────
const BusinessContextSection: React.FC<{ detail: SmartLogisticsData; language: string }> = ({ detail, language }) => {
  const ctx = detail.businessContext;

  const getProblemIcon = (key: ProblemPoint['key']) => {
    switch (key) {
      case 'fleet':
        return {
          icon: <Truck className="w-5 h-5 text-[#EC4899]" />,
          bg: 'bg-pink-50 border-pink-200',
        };
      case 'volume':
        return {
          icon: <Boxes className="w-5 h-5 text-[#F59E0B]" />,
          bg: 'bg-amber-50 border-amber-200',
        };
      case 'route':
        return {
          icon: <Navigation className="w-5 h-5 text-[#10B981]" />,
          bg: 'bg-emerald-50 border-emerald-200',
        };
      case 'cost':
        return {
          icon: <CircleDollarSign className="w-5 h-5 text-[#EF4444]" />,
          bg: 'bg-rose-50 border-rose-200',
        };
      case 'tracking':
      default:
        return {
          icon: <EyeOff className="w-5 h-5 text-[#5E6AD2]" />,
          bg: 'bg-indigo-50 border-indigo-200',
        };
    }
  };

  return (
    <div className="space-y-6">
      {/* Problem Input Banner */}
      <div className="p-5 bg-amber-50/80 border border-amber-200/90 rounded-2xl shadow-xs">
        <div className="flex items-center gap-2.5 mb-2 text-amber-700">
          <AlertTriangle className="w-5 h-5 shrink-0" />
          <span className="text-xs font-bold uppercase tracking-wider font-mono">
            {language === 'vi' ? 'VẤN ĐỀ ĐẶT RA (INPUT PROBLEM)' : 'CORE INPUT PROBLEM'}
          </span>
        </div>
        <p className="text-base text-amber-950 font-medium leading-relaxed">{ctx.inputProblem}</p>
      </div>

      {/* Why 3PL Question & Pain Points Grid */}
      <div className="p-6 bg-white/90 border border-slate-200/80 rounded-2xl shadow-xs backdrop-blur-sm">
        <h3 className="text-sm font-bold uppercase tracking-wider text-[#5E6AD2] mb-5 flex items-center gap-2">
          <HelpCircle className="w-4 h-4 shrink-0" />
          {ctx.whyThirdParty}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ctx.painPoints.map((p, idx) => {
            const { icon, bg } = getProblemIcon(p.key);
            return (
              <div key={idx} className="p-5 bg-slate-50/80 border border-slate-200/80 hover:border-[#5E6AD2]/50 hover:bg-white transition-all rounded-xl flex flex-col gap-3 shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg border flex items-center justify-center shrink-0 ${bg}`}>
                    {icon}
                  </div>
                  <span className="text-sm font-bold text-[#0B0E17] leading-tight">{p.title}</span>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed font-normal">{p.detail}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Output Solution Banner */}
      <div className="p-5 bg-emerald-50/80 border border-emerald-200/90 rounded-2xl shadow-xs">
        <div className="flex items-center gap-2.5 mb-2 text-emerald-700">
          <CheckCircle className="w-5 h-5 shrink-0" />
          <span className="text-xs font-bold uppercase tracking-wider font-mono">
            {language === 'vi' ? 'GIẢI PHÁP ĐƯỢC XÂY DỰNG (OUTPUT SOLUTION)' : 'ARCHITECTED OUTPUT SOLUTION'}
          </span>
        </div>
        <p className="text-base text-emerald-950 font-medium leading-relaxed">{ctx.outputSolution}</p>
      </div>
    </div>
  );
};

// ─── Scope & Nationwide Coverage ───────────────────────────────────────────
const ProjectScopeSection: React.FC<{ detail: SmartLogisticsData; language: string }> = ({ detail, language }) => {
  const scope = detail.projectScope;
  const goalColors = ['#5E6AD2', '#8B5CF6', '#10B981'];
  return (
    <div className="space-y-6">
      {/* 3 Core Goals */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-4">
          {language === 'vi' ? '3 Mục tiêu Cốt lõi của Hệ thống' : '3 Core Architectural Goals'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {scope.goals.map((g, idx) => (
            <div key={idx} className="p-5 bg-white/90 border border-slate-200/80 rounded-2xl shadow-xs flex flex-col justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold font-mono shrink-0"
                  style={{ background: `${goalColors[idx]}15`, color: goalColors[idx] }}>
                  0{idx + 1}
                </span>
                <span className="text-sm font-bold text-[#0B0E17]">{g.title}</span>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed font-normal">{g.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Geographic Scope & Target Users */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Geographic */}
        <div className="p-5 bg-white/90 border border-slate-200/80 rounded-2xl shadow-xs flex flex-col gap-3">
          <div className="flex items-center gap-2 text-[#5E6AD2]">
            <Globe className="w-5 h-5 shrink-0" />
            <span className="text-xs font-bold uppercase tracking-wider font-mono">
              {language === 'vi' ? 'Phạm vi Triển khai Hệ thống' : 'Nationwide System Scope'}
            </span>
          </div>
          <p className="text-sm text-[#334155] leading-relaxed font-normal">{scope.geographicScope}</p>
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
            <span className="text-xs px-2.5 py-1 bg-[#5E6AD2]/10 text-[#5E6AD2] border border-[#5E6AD2]/20 font-mono font-semibold rounded-lg">
              {language === 'vi' ? 'ĐVHC Chuẩn Mới (Sau sáp nhập)' : 'Post-Merger Units'}
            </span>
            <span className="text-xs px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono font-semibold rounded-lg">
              {language === 'vi' ? 'Toàn bộ Phường / Xã mới' : 'Standardized Wards'}
            </span>
            <span className="text-xs px-2.5 py-1 bg-sky-50 text-sky-700 border border-sky-200 font-mono font-semibold rounded-lg">
              {language === 'vi' ? 'Mạng lưới Hub đa cấp' : 'Multi-tier Hub Network'}
            </span>
          </div>
        </div>

        {/* Target Users */}
        <div className="p-5 bg-white/90 border border-slate-200/80 rounded-2xl shadow-xs flex flex-col gap-3">
          <div className="flex items-center gap-2 text-[#5E6AD2]">
            <Users className="w-5 h-5 shrink-0" />
            <span className="text-xs font-bold uppercase tracking-wider font-mono">
              {language === 'vi' ? '4 Nhóm Đối tượng Người dùng Mục tiêu' : '4 Target User Personas'}
            </span>
          </div>
          <div className="space-y-2">
            {scope.targetUsers.map((u, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-[#334155]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5E6AD2] shrink-0" />
                <span>{u}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SLAs / Technical Targets */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {scope.slas.map((sla, idx) => (
          <div key={idx} className="p-4 bg-white/90 border border-slate-200/80 rounded-2xl shadow-xs flex flex-col gap-1">
            <span className="text-xs text-[#64748B] font-medium">{sla.metric}</span>
            <span className="text-base font-bold text-[#0B0E17] font-mono">{sla.target}</span>
            <span className="text-xs text-emerald-600 font-mono font-bold mt-1">✔ {sla.result}</span>
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
      <div className="p-5 bg-gradient-to-r from-[#5E6AD2]/10 via-[#06B6D4]/10 to-[#10B981]/10 border border-[#5E6AD2]/30 rounded-2xl shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Award className="w-8 h-8 text-[#5E6AD2] shrink-0" />
          <div>
            <h3 className="text-base font-bold text-[#0B0E17]">
              {language === 'vi'
                ? 'Kỹ sư Phần mềm Fullstack (Thực tập sinh) — Trọng Tâm Kỹ Thuật & Đóng Góp Cốt Lõi'
                : 'Fullstack Software Engineer (Intern) — Core Engineering Contributions'}
            </h3>
            <p className="text-xs text-[#475569] mt-0.5 font-normal">
              {language === 'vi'
                ? 'Nhiệm vụ kỹ thuật tại CITARES được tập trung vào 3 trụ cột: Tham gia phát triển CSDL PostgreSQL 15 (3NF), Backend DDD & React Dispatcher Dashboard; Xây dựng pipeline 4 thuật toán định tuyến thuần TypeScript (giảm 58.2% km); và Thiết kế đường ống GPS telemetry trên Redis / RabbitMQ tuân thủ quy trình Git branching & PR review.'
                : 'Core engineering responsibilities at CITARES structured into 3 pillars: Contributing to 3NF PostgreSQL 15 schema, DDD backend & React Dispatcher Dashboard; Engineering a 4-stage route optimization pipeline in pure TypeScript (–58.2% km); and Designing GPS telemetry on Redis / RabbitMQ with strict Git branching & PR reviews.'}
            </p>
          </div>
        </div>
        <span className="px-3.5 py-1.5 bg-[#5E6AD2] text-white font-black text-xs font-mono uppercase tracking-wider rounded-xl shadow-xs shrink-0 self-start md:self-auto">
          FULLSTACK CONTRIBUTOR
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {detail.myOwnership.map((pillar, idx) => (
          <div key={idx} className="p-6 bg-white/90 border border-slate-200/80 hover:border-[#5E6AD2]/50 hover:shadow-md transition-all rounded-2xl flex flex-col justify-between gap-4">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 bg-[#5E6AD2]/10 text-[#5E6AD2] border border-[#5E6AD2]/20 rounded-lg">
                  {pillar.badge}
                </span>
                <span className="text-xs font-mono font-bold text-[#94A3B8]">PILLAR 0{idx + 1}</span>
              </div>
              <h4 className="text-base font-bold text-[#0B0E17] mb-2">{pillar.area}</h4>
              <p className="text-xs text-[#475569] mb-4 font-normal leading-relaxed">{pillar.summary}</p>
              <ul className="space-y-2.5">
                {pillar.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2 text-xs text-[#334155] leading-relaxed">
                    <CheckSquare className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
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
    <div className="p-6 md:p-8 bg-white/90 border border-slate-200/80 rounded-2xl shadow-xs space-y-6">

      {/* Sơ đồ tiêu đề */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
        <div>
          <span className="text-xs font-mono font-bold text-[#5E6AD2] uppercase tracking-wider block">
            {language === 'vi' ? 'SƠ ĐỒ LUỒNG KIẾN TRÚC HỆ THỐNG (SYSTEM ARCHITECTURE FLOW)' : 'SYSTEM ARCHITECTURE FLOW DIAGRAM'}
          </span>
          <span className="text-xs text-[#64748B] mt-0.5 block">
            {language === 'vi' ? 'Kiến trúc Modular Monolith & Domain-Driven Design (DDD)' : 'Modular Monolith & Domain-Driven Design (DDD) Architecture'}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg">
            Clean Architecture
          </span>
          <span className="text-xs font-mono px-2.5 py-1 bg-[#5E6AD2]/10 text-[#5E6AD2] border border-[#5E6AD2]/20 rounded-lg">
            10 Bounded Contexts
          </span>
        </div>
      </div>

      {/* FLOW DIAGRAM CONTAINER */}
      <div className="space-y-4">

        {/* ── TẦNG 1: CLIENT APPS ── */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#5E6AD2]">
              {language === 'vi' ? 'TẦNG 1: GIAO DIỆN & ỨNG DỤNG KHÁCH (PRESENTATION LAYER)' : 'TIER 1: CLIENT & PRESENTATION LAYER'}
            </span>
            <span className="text-[11px] text-[#64748B] font-mono">React 19 · Flutter · Vite</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Client 1 */}
            <div className="p-4 bg-slate-50/80 border border-emerald-300 hover:border-emerald-500 transition-colors rounded-xl flex flex-col justify-between gap-2 text-center shadow-2xs">
              <div>
                <span className="text-sm font-bold text-[#0B0E17] block">Web Dispatcher</span>
                <span className="text-xs text-[#64748B] font-mono mt-0.5 block">React 19 + Vite 8 · SPA</span>
              </div>
              <span className="text-[11px] text-emerald-700 font-mono font-semibold">Bản đồ radar điều phối xe</span>
            </div>

            {/* Client 2 */}
            <div className="p-4 bg-slate-50/80 border border-[#5E6AD2]/40 hover:border-[#5E6AD2] transition-colors rounded-xl flex flex-col justify-between gap-2 text-center shadow-2xs">
              <div>
                <span className="text-sm font-bold text-[#0B0E17]">Driver Mobile App</span>
                <span className="text-xs text-[#64748B] font-mono mt-0.5 block">Flutter (Dart) Mobile</span>
              </div>
              <span className="text-[11px] text-[#5E6AD2] font-mono font-semibold">GPS ngầm 5s/lần · Ký số POD</span>
            </div>

            {/* Client 3 */}
            <div className="p-4 bg-slate-50/80 border border-purple-300 hover:border-purple-500 transition-colors rounded-xl flex flex-col justify-between gap-2 text-center shadow-2xs">
              <div>
                <span className="text-sm font-bold text-[#0B0E17]">B2B Merchant Portal</span>
                <span className="text-xs text-[#64748B] font-mono mt-0.5 block">React Web Portal</span>
              </div>
              <span className="text-[11px] text-purple-700 font-mono font-semibold">Tạo đơn Excel hàng loạt</span>
            </div>
          </div>
        </div>

        {/* ── MŨI TÊN KẾT NỐI 1 -> 2 ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-xs font-mono text-[#64748B]">
          <div className="flex flex-col items-center">
            <span className="text-[10px] text-emerald-600 font-semibold">HTTPS / REST</span>
            <span className="text-base leading-none text-emerald-600">↓</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] text-[#5E6AD2] font-semibold">WSS Telemetry (1,321/s)</span>
            <span className="text-base leading-none text-[#5E6AD2]">↓</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] text-purple-600 font-semibold">HTTPS / Upload</span>
            <span className="text-base leading-none text-purple-600">↓</span>
          </div>
        </div>

        {/* ── TẦNG 2: CỔNG API GATEWAY ── */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#5E6AD2]">
              {language === 'vi' ? 'TẦNG 2: CỔNG TIẾP NHẬN & AN NINH (API GATEWAY & INGRESS)' : 'TIER 2: API GATEWAY & SECURITY INGRESS'}
            </span>
            <span className="text-[11px] text-emerald-700 font-mono font-semibold">Express.js + Socket.io</span>
          </div>
          <div className="p-4 bg-slate-50/80 border border-[#5E6AD2]/30 rounded-xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono text-center">
              <div className="p-2.5 bg-white border border-slate-200 rounded-lg text-[#334155] font-semibold shadow-2xs">
                JWT Auth &amp; RBAC 4 Cấp
              </div>
              <div className="p-2.5 bg-white border border-slate-200 rounded-lg text-[#334155] font-semibold shadow-2xs">
                class-validator DTOs
              </div>
              <div className="p-2.5 bg-white border border-slate-200 rounded-lg text-[#334155] font-semibold shadow-2xs">
                Token Bucket Rate Limiter
              </div>
            </div>
          </div>
        </div>

        {/* ── MŨI TÊN PHÂN NHÁNH 2 -> 3 ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-xs font-mono">
          <div className="flex flex-col items-center text-[#5E6AD2]">
            <span className="text-[10px] font-semibold">Sync Domain Dispatch</span>
            <span className="text-base leading-none">↓</span>
          </div>
          <div className="flex flex-col items-center text-[#F59E0B]">
            <span className="text-[10px] font-semibold">Hot Stream / RabbitMQ</span>
            <span className="text-base leading-none">↓</span>
          </div>
          <div className="flex flex-col items-center text-emerald-600">
            <span className="text-[10px] font-semibold">AI Batch Optimization</span>
            <span className="text-base leading-none">↓</span>
          </div>
        </div>

        {/* ── TẦNG 3: 3 PHÂN HỆ XỬ LÝ (CORE - CACHE - AI) ── */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#5E6AD2]">
              {language === 'vi' ? 'TẦNG 3: MIỀN NGHIỆP VỤ & TÍNH TOÁN LÕI (CORE DOMAIN & AI OPTIMIZATION)' : 'TIER 3: CORE DOMAIN & AI OPTIMIZATION LAYER'}
            </span>
            <span className="text-[11px] text-[#64748B] font-mono">FSM · Redis 7 · Pure TS AI</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Module 1: Domain Core */}
            <div className="p-4 bg-slate-50/80 border border-[#5E6AD2]/30 rounded-xl space-y-2 shadow-2xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <span className="text-xs font-bold text-[#5E6AD2] uppercase font-mono">3.1 DOMAIN CORE</span>
                <span className="text-[10px] text-[#64748B] font-mono">DDD Services</span>
              </div>
              <ul className="text-xs text-[#334155] space-y-1.5 leading-relaxed">
                <li>• <strong>Order FSM</strong>: 17 bước chuyển đổi trạng thái</li>
                <li>• <strong>Facility Hub</strong>: Tuyến trung chuyển Line-haul</li>
                <li>• <strong>Tote Bag</strong>: Gom nhiều đơn trong 1 mã sọt</li>
              </ul>
            </div>

            {/* Module 2: Cache & Queue */}
            <div className="p-4 bg-slate-50/80 border border-amber-300 rounded-xl space-y-2 shadow-2xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <span className="text-xs font-bold text-amber-700 uppercase font-mono">3.2 ASYNC &amp; CACHE</span>
                <span className="text-[10px] text-emerald-700 font-mono font-semibold">P99 &lt; 1ms</span>
              </div>
              <ul className="text-xs text-[#334155] space-y-1.5 leading-relaxed">
                <li>• <strong>Redis 7</strong>: Đệm định vị GPS (HSET, GEOADD)</li>
                <li>• <strong>Socket.io</strong>: Phát radar phòng order:&#123;id&#125;</li>
                <li>• <strong>RabbitMQ</strong>: Hàng đợi xử lý tác vụ nền</li>
              </ul>
            </div>

            {/* Module 3: Pure TS AI Engine */}
            <div className="p-4 bg-slate-50/80 border border-emerald-300 rounded-xl space-y-2 shadow-2xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <span className="text-xs font-bold text-emerald-700 uppercase font-mono">3.3 AI ENGINE</span>
                <span className="text-[10px] text-emerald-700 font-mono font-semibold">444ms</span>
              </div>
              <ul className="text-xs text-[#334155] space-y-1.5 leading-relaxed">
                <li>• <strong>Genetic Algorithm</strong>: CVRP + VRPTW (–58.2% km)</li>
                <li>• <strong>DBSCAN + K-Means</strong>: Phân cụm &amp; tải trọng</li>
                <li>• <strong>Hungarian Matching</strong>: Ghép cặp tài xế 1-1</li>
              </ul>
            </div>

          </div>
        </div>

        {/* ── MŨI TÊN KẾT NỐI 3 -> 4 ── */}
        <div className="flex items-center justify-center gap-6 text-center text-xs font-mono text-[#64748B] py-1">
          <div className="flex items-center gap-1.5">
            <span>(Lưu mốc sự kiện &amp; chữ ký POD)</span>
            <span className="text-base leading-none text-[#5E6AD2]">↓</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>(Tính ma trận khoảng cách 3 tầng)</span>
            <span className="text-base leading-none text-[#5E6AD2]">↓</span>
          </div>
        </div>

        {/* ── TẦNG 4: CƠ SỞ DỮ LIỆU & DỊCH VỤ NGOÀI ── */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
              {language === 'vi' ? 'TẦNG 4: CƠ SỞ DỮ LIỆU & DỊCH VỤ NGOÀI (PERSISTENCE & EXTERNAL LAYER)' : 'TIER 4: PERSISTENCE & EXTERNAL LAYER'}
            </span>
            <span className="text-[11px] text-[#64748B] font-mono">PostgreSQL 15 · Goong Maps API</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

            {/* Database (8 cols) */}
            <div className="md:col-span-8 p-4 bg-slate-50/80 border border-[#5E6AD2]/30 rounded-xl space-y-2 shadow-2xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <span className="text-xs font-bold text-[#5E6AD2] uppercase font-mono">
                  4.1 CƠ SỞ DỮ LIỆU QUAN HỆ (POSTGRESQL 15)
                </span>
                <span className="text-xs font-mono text-emerald-700 font-bold">RELATIONAL · 3NF</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#334155]">
                <div>
                  <strong>PostgreSQL 15</strong>: Đảm bảo giao dịch ACID, chuẩn hóa 3NF và liên kết địa giới hành chính (Ward/Province).
                </div>
                <div>
                  <strong>Prisma ORM 5.x Client</strong>: Truy vấn Type-safe 100%, quản lý Migrations tự động và bảo toàn Rollback.
                </div>
              </div>
            </div>

            {/* External Maps (4 cols) */}
            <div className="md:col-span-4 p-4 bg-slate-50/80 border border-slate-200 rounded-xl space-y-2 shadow-2xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <span className="text-xs font-bold text-[#0B0E17] uppercase font-mono">
                  4.2 DỊCH VỤ BẢN ĐỒ
                </span>
                <span className="text-[10px] text-[#5E6AD2] font-mono font-bold">FALLBACK</span>
              </div>
              <div className="text-xs font-mono text-[#475569] space-y-1">
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
  const colors = ['#5E6AD2', '#8B5CF6', '#F59E0B', '#10B981'];
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
              <div className="w-[104px] h-[104px] rounded-full flex flex-col items-center justify-center border-2 mb-3 shadow-sm bg-white"
                style={{ borderColor: colors[idx], color: colors[idx] }}>
                <div className="mb-1">{stepIcons[idx]}</div>
                <span className="text-xs font-bold tracking-wider font-mono">
                  {language === 'vi' ? `BƯỚC ${step.step}` : `MODULE ${step.step}`}
                </span>
              </div>
              <span className="font-bold text-base text-[#0B0E17] text-center mb-1">{step.name}</span>
              <span className="text-xs text-[#64748B] text-center leading-snug h-[44px] flex items-center justify-center px-1">
                {step.algo}
              </span>
            </div>
            {step.timeMs && (
              <span className="px-2.5 py-1 text-xs font-mono font-bold flex items-center gap-1 rounded-lg"
                style={{ background: `${colors[idx]}15`, color: colors[idx] }}>
                <Clock className="w-3.5 h-3.5" />
                <span>{step.timeMs}</span>
              </span>
            )}
          </div>
          <div className="p-5 bg-white/90 border border-slate-200/80 flex-1 flex flex-col justify-between gap-4 rounded-2xl shadow-xs">
            <p className="text-sm text-[#334155] leading-relaxed font-normal min-h-[105px]">{step.description}</p>
            <div className="pt-3 border-t border-slate-100">
              <span className="text-xs text-[#64748B] uppercase tracking-wider font-semibold block mb-1.5">
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
  <div className="p-7 bg-white/90 border border-slate-200/80 rounded-2xl shadow-xs space-y-6">
    {/* Header & Badges */}
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
      <div>
        <p className="text-xs font-bold text-[#5E6AD2] uppercase tracking-wider font-mono">
          {language === 'vi'
            ? 'SƠ ĐỒ LUỒNG DỮ LIỆU ĐƯỜNG ỐNG 2 TẦNG (2-TIER TELEMETRY PIPELINE)'
            : '2-TIER HIGH-FREQUENCY TELEMETRY PIPELINE ARCHITECTURE'}
        </p>
        <p className="text-xs text-[#64748B] mt-1 font-normal">
          {language === 'vi'
            ? 'Cơ chế tách rời luồng ghi GPS tần suất cao khỏi cơ sở dữ liệu quan hệ'
            : 'Decoupling high-frequency continuous GPS ingestion from relational disk storage'}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        <span className="text-xs px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono font-bold rounded-lg">
          P99 &lt; 1ms
        </span>
        <span className="text-xs px-2.5 py-1 bg-[#5E6AD2]/10 text-[#5E6AD2] border border-[#5E6AD2]/20 font-mono font-bold rounded-lg">
          1,321 pings/sec
        </span>
        <span className="text-xs px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-200 font-mono font-bold rounded-lg">
          –99.8% Disk I/O
        </span>
      </div>
    </div>

    {/* Architecture Diagram Canvas */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

      {/* STEP 1: Driver Client (3 cols) */}
      <div className="lg:col-span-3 p-5 bg-slate-50/80 border border-slate-200 rounded-xl flex flex-col gap-3 h-full justify-between shadow-2xs">
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono font-bold px-2 py-0.5 bg-[#5E6AD2]/10 text-[#5E6AD2] border border-[#5E6AD2]/20 rounded-lg">
              PRODUCER
            </span>
            <span className="text-xs text-[#64748B] font-mono">500+ Drivers</span>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-[#5E6AD2]/10 border border-[#5E6AD2]/20 flex items-center justify-center text-[#5E6AD2] shrink-0">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0B0E17]">
                {language === 'vi' ? 'Flutter Driver App' : 'Driver Mobile App'}
              </h4>
              <p className="text-xs text-[#64748B]">
                {language === 'vi' ? 'Ứng dụng tài xế chạy ngầm' : 'Background GPS tracker'}
              </p>
            </div>
          </div>
          <div className="space-y-1.5 text-xs text-[#475569] font-mono bg-white p-2.5 rounded-lg border border-slate-200 shadow-2xs">
            <div>• {language === 'vi' ? 'Chu kỳ: 5 giây / ping' : 'Interval: 5s / ping'}</div>
            <div>• {language === 'vi' ? 'Giao thức: WebSocket (WSS)' : 'Protocol: WSS Stream'}</div>
            <div>• {language === 'vi' ? 'Xác thực: Bearer JWT' : 'Auth: Bearer JWT'}</div>
          </div>
        </div>
        <div className="text-xs text-[#334155] font-normal leading-relaxed pt-2 border-t border-slate-200">
          {language === 'vi'
            ? 'Phát luồng tọa độ GPS (lat, lng, speed, heading) liên tục khi đang thực hiện ca giao hàng.'
            : 'Emits continuous GPS telemetry payloads while on active delivery shifts.'}
        </div>
      </div>

      {/* CONNECTOR 1 -> 2 (1 col) */}
      <div className="lg:col-span-1 hidden lg:flex flex-col items-center justify-center gap-1 text-[#8B5CF6]">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-center leading-none text-[#8B5CF6]">
          WSS
        </span>
        <div className="w-full h-[2px] bg-gradient-to-r from-[#5E6AD2] via-[#8B5CF6] to-[#F59E0B] relative">
          <div className="absolute -right-1.5 -top-1.5 w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-[#8B5CF6]" />
        </div>
        <span className="text-[10px] text-[#64748B] font-mono">1,321/s</span>
      </div>

      {/* STEP 2: Gateway Layer (3 cols) */}
      <div className="lg:col-span-3 p-5 bg-slate-50/80 border border-slate-200 rounded-xl flex flex-col gap-3 h-full justify-between shadow-2xs">
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono font-bold px-2 py-0.5 bg-purple-50 text-purple-700 border border-purple-200 rounded-lg">
              GATEWAY
            </span>
            <span className="text-xs text-emerald-600 font-mono font-bold">● ONLINE</span>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 shrink-0">
              <Radio className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0B0E17]">
                {language === 'vi' ? 'Cổng Telemetry Gateway' : 'Ingestion Gateway'}
              </h4>
              <p className="text-xs text-[#64748B]">Express.js + Socket.io</p>
            </div>
          </div>
          <div className="space-y-1.5 text-xs text-[#475569] font-mono bg-white p-2.5 rounded-lg border border-slate-200 shadow-2xs">
            <div>• Token Bucket Rate Limiter</div>
            <div>• DTO Payload Validation</div>
            <div>• Multiplexed Room Router</div>
          </div>
        </div>
        <div className="text-xs text-[#334155] font-normal leading-relaxed pt-2 border-t border-slate-200">
          {language === 'vi'
            ? 'Tiếp nhận, thẩm định quyền truy cập và phân luồng xử lý thành 3 nhánh song song độc lập.'
            : 'Ingests, validates, and multiplexes payloads into 3 decoupled execution paths.'}
        </div>
      </div>

      {/* CONNECTOR 2 -> 3 (1 col) */}
      <div className="lg:col-span-1 hidden lg:flex flex-col items-center justify-center gap-2 text-[#64748B]">
        <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#5E6AD2]">FAN-OUT</div>
        <div className="w-full h-[2px] bg-slate-300 relative">
          <div className="absolute -right-1.5 -top-1.5 w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-[#5E6AD2]" />
        </div>
        <div className="text-[10px] text-[#64748B] font-mono text-center">3 Luồng</div>
      </div>

      {/* STEP 3: 3 Execution Branches (4 cols) */}
      <div className="lg:col-span-4 flex flex-col gap-3">
        {/* Branch 1: Redis Hot Stream */}
        <div className="p-4 bg-slate-50/80 border-l-4 border-l-emerald-500 border-y border-r border-slate-200 rounded-r-xl flex flex-col gap-2.5 shadow-2xs">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-emerald-700 min-w-0">
              <Zap className="w-4 h-4 shrink-0" />
              <span className="text-xs font-bold uppercase font-mono">
                {language === 'vi' ? '1. Đệm Redis 7 (Hot Stream)' : '1. Redis 7 (Hot Stream)'}
              </span>
            </div>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded whitespace-nowrap shrink-0">
              P99 &lt; 1ms
            </span>
          </div>
          <div className="text-xs font-mono text-[#E2E8F0] bg-[#0F172A] p-2.5 rounded-lg border border-slate-700 space-y-0.5">
            <div><code className="text-emerald-400">HSET driver:location:&#123;id&#125;</code></div>
            <div><code className="text-emerald-400">GEOADD driver:geo &#123;lng&#125; &#123;lat&#125; &#123;id&#125;</code></div>
          </div>
          <p className="text-xs text-[#475569] font-normal leading-relaxed">
            {language === 'vi'
              ? 'Lưu đệm tọa độ thời gian thực với độ trễ siêu thấp, 100% không ghi xuống đĩa cứng.'
              : 'Sub-millisecond driver coordinate buffer driving real-time views without disk I/O.'}
          </p>
        </div>

        {/* Branch 2: Socket.io Room Broadcast */}
        <div className="p-4 bg-slate-50/80 border-l-4 border-l-amber-500 border-y border-r border-slate-200 rounded-r-xl flex flex-col gap-2.5 shadow-2xs">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-amber-700 min-w-0">
              <Radio className="w-4 h-4 shrink-0" />
              <span className="text-xs font-bold uppercase font-mono">
                {language === 'vi' ? '2. Socket.io (Radar Push)' : '2. Socket.io (Radar Push)'}
              </span>
            </div>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-amber-100 text-amber-800 rounded whitespace-nowrap shrink-0">
              RADAR MAP
            </span>
          </div>
          <div className="text-xs font-mono text-[#E2E8F0] bg-[#0F172A] p-2.5 rounded-lg border border-slate-700 space-y-0.5">
            <div><code className="text-amber-400">io.to('order:&#123;id&#125;').emit('driver_moved')</code></div>
            <div><code className="text-amber-400">Flag Drop Event on DELIVERED</code></div>
          </div>
          <p className="text-xs text-[#475569] font-normal leading-relaxed">
            {language === 'vi'
              ? 'Cập nhật trực tiếp vị trí xe lên màn hình radar admin và đổi màu trạng thái giao hàng tức thì.'
              : 'Directly broadcasts live position to admin viewports with instant status flip.'}
          </p>
        </div>

        {/* Branch 3: PostgreSQL Cold Persistence */}
        <div className="p-4 bg-slate-50/80 border-l-4 border-l-[#5E6AD2] border-y border-r border-slate-200 rounded-r-xl flex flex-col gap-2.5 shadow-2xs">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-[#5E6AD2] min-w-0">
              <Database className="w-4 h-4 shrink-0" />
              <span className="text-xs font-bold uppercase font-mono">
                {language === 'vi' ? '3. PostgreSQL (Cold Store)' : '3. PostgreSQL (Cold Store)'}
              </span>
            </div>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-[#5E6AD2]/15 text-[#5E6AD2] rounded whitespace-nowrap shrink-0">
              ACID AUDIT
            </span>
          </div>
          <div className="text-xs font-mono text-[#E2E8F0] bg-[#0F172A] p-2.5 rounded-lg border border-slate-700 space-y-0.5">
            <div><code className="text-indigo-300">Only on: PICKED_UP · AT_HUB · DELIVERED</code></div>
            <div><code className="text-indigo-300">ST_Distance + POD Signature &amp; Photo</code></div>
          </div>
          <p className="text-xs text-[#475569] font-normal leading-relaxed">
            {language === 'vi'
              ? 'Chỉ ghi cố định khi phát sinh mốc nghiệp vụ chính, bảo toàn 100% dữ liệu lịch sử và chữ ký số.'
              : 'Persists strictly on business milestones, saving 99.8% disk I/O while preserving full audit trails.'}
          </p>
        </div>
      </div>

    </div>

    {/* Architecture Summary Callout */}
    <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
        <p className="text-xs text-[#334155] font-normal leading-relaxed">
          <strong className="text-[#0B0E17] font-semibold">
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
  const stageColors = ['#5E6AD2', '#8B5CF6', '#F59E0B', '#10B981', '#EC4899', '#06B6D4', '#FBBF24'];
  return (
    <div className="space-y-2">
      {detail.fulfillmentStages.map((s, i) => (
        <div key={i} className="flex items-start gap-4 p-5 border border-slate-200/80 hover:border-[#5E6AD2]/40 bg-white/90 transition-all rounded-xl shadow-2xs">
          <div className="w-8 h-8 flex items-center justify-center text-xs font-black font-mono shrink-0 mt-0.5 rounded-lg"
            style={{ background: `${stageColors[i]}15`, color: stageColors[i] }}>
            {String(i + 1).padStart(2, '0')}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
              <span className="text-base font-bold text-[#0B0E17]">{s.stage}</span>
              <span className="text-xs px-2 py-0.5 font-mono font-semibold rounded"
                style={{ background: `${stageColors[i]}15`, color: stageColors[i] }}>
                {s.status}
              </span>
            </div>
            <p className="text-sm text-[#475569] leading-relaxed">{s.tech}</p>
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
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const detail = SMART_LOGISTICS_DETAIL[language];
  const project = PROJECTS[language].find(p => p.id === 'smart-logistics')!;
  const t = UI_TRANSLATIONS[language];

  useDocumentTitle(project ? project.title : 'Smart Logistics Platform (SLP)');

  const TOC_SECTIONS = [
    { id: 'overview', label: language === 'vi' ? 'Tổng quan & Hiệu quả' : 'Overview & Impact' },
    { id: 'showcase', label: language === 'vi' ? 'Khung Demo Sản phẩm (PC & Mobile)' : 'Interactive Device Showcase' },
    { id: 'context', label: language === 'vi' ? 'Bối cảnh & Đặt vấn đề' : 'Business Context & Problem' },
    { id: 'scope', label: language === 'vi' ? 'Mục tiêu & Phạm vi toàn quốc' : 'Scope & Nationwide Coverage' },
    { id: 'ownership', label: language === 'vi' ? 'Trách nhiệm kỹ thuật cá nhân' : 'My Engineering Ownership' },
    { id: 'architecture', label: language === 'vi' ? 'Kiến trúc Hệ thống Tổng thể' : 'System Architecture' },
    { id: 'ai', label: language === 'vi' ? 'Thuật toán tối ưu tuyến đường' : 'Route Optimization Pipeline' },
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
    'Thuật toán (Algorithm)': '#8B5CF6',
    'Tích hợp (Integration)': '#10B981',
    'Bảo vệ API (Validation)': '#5E6AD2',
    'Bảo mật (Security)': '#F59E0B',
    'Chịu tải (Load Test)': '#EC4899',
    'Đồng thời (Concurrency)': '#FB923C',
  };

  return (
    <div className="min-h-screen bg-[#FAFAFC] bg-linear-grid text-[#0B0E17]">

      {/* ── Top Nav ── */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
        <div className="max-w-[1500px] mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[#64748B] hover:text-[#5E6AD2] transition-colors text-sm font-bold tracking-wider uppercase cursor-pointer">
            <ArrowLeft className="w-4 h-4" /> {t.detailCommon.backBtn}
          </button>

          <div className="flex items-center gap-3">
            <LanguageToggle />
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100/90 border border-slate-300/80 text-[#475569] rounded-xl text-xs font-semibold shadow-2xs cursor-help"
              title={detail.ndaNotice}
            >
              <Lock className="w-3.5 h-3.5 text-[#64748B]" />
              <span>{language === 'vi' ? 'Mã nguồn Nội bộ (NDA)' : 'Private Repo (NDA)'}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1500px] mx-auto px-6 flex gap-0">

        {/* ── Left Sidebar ── */}
        <aside className="hidden lg:flex flex-col w-[280px] shrink-0">
          <div className="sticky top-[65px] max-h-[calc(100vh-65px)] overflow-y-auto pt-8 pb-10 pr-6 flex flex-col gap-6">

            {/* Quick Info */}
            <div>
              <p className="text-xs text-[#64748B] uppercase tracking-wider font-bold mb-4">{t.detailCommon.quickInfoTitle}</p>
              <div className="space-y-4">
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
                  <p className="text-xs text-[#64748B] mb-1 font-medium">{t.detailCommon.companyLabel}</p>
                  <p className="text-sm text-[#0B0E17] font-semibold">{detail.company}</p>
                  <p className="text-xs text-[#64748B] mt-0.5 font-normal leading-tight">{detail.clientType}</p>
                </div>
                <div>
                  <p className="text-xs text-[#64748B] mb-1 font-medium">{t.detailCommon.roleLabel}</p>
                  <p className="text-sm text-[#0B0E17] font-semibold">{detail.role}</p>
                </div>
                <div>
                  <p className="text-xs text-[#64748B] mb-1 font-medium">{language === 'vi' ? 'Quyền sở hữu mã nguồn' : 'Source Code License'}</p>
                  <p className="text-xs text-[#475569] font-semibold flex items-center gap-1.5">
                    <Lock className="w-3 h-3 text-[#64748B]" />
                    {language === 'vi' ? 'Bảo mật NDA (Nội bộ)' : 'NDA Protected (Internal)'}
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-200/80" />

            {/* TOC */}
            <div>
              <p className="text-xs text-[#64748B] uppercase tracking-wider font-bold mb-4">{t.detailCommon.tocTitle}</p>
              <nav className="space-y-1">
                {TOC_SECTIONS.map(s => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className={`w-full text-left flex items-center gap-2 py-2 px-0 text-sm transition-colors cursor-pointer ${activeSection === s.id
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

        {/* ── Main Content ── */}
        <main className="flex-1 min-w-0 border-l border-slate-200/80 pl-10 py-10 space-y-20">

          {/* ── SECTION 1: EXECUTIVE PROJECT SNAPSHOT (30-Second High-Level Scan) ── */}
          <section id="overview" className="space-y-8">
            {/* Top Card: Visual Showcase + Key Details */}
            <div className="p-6 md:p-8 bg-white border border-slate-200/90 rounded-3xl shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Visual Real Demo Showcase (Smart Logistics Live Route Monitoring & Dispatch) */}
                <div className="lg:col-span-5 flex flex-col gap-3">
                  <div className="border border-slate-200/90 rounded-2xl overflow-hidden bg-white text-[#0B0E17] shadow-sm group">
                    {/* Header */}
                    <div className="bg-slate-50 px-3.5 py-2.5 border-b border-slate-200/80 flex items-center justify-between gap-2 text-xs">
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        </div>
                        <span className="font-mono font-bold text-slate-800 text-[11px] truncate ml-1">
                          {language === 'vi' ? 'GIÁM SÁT LỘ TRÌNH' : 'ROUTE MONITORING'}
                        </span>
                      </div>
                      <span className="font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[10px] whitespace-nowrap shrink-0 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        1,321 PINGS/S · REDIS 7
                      </span>
                    </div>

                    {/* Real Demo Screenshot Showcase */}
                    <div 
                      onClick={() => setPreviewImage('/assets/projects/smart-logistics/desktop2.png')}
                      className="relative overflow-hidden bg-slate-100 aspect-[16/10] cursor-pointer group/img"
                    >
                      <img
                        src="/assets/projects/smart-logistics/desktop2.png"
                        alt={language === 'vi' ? 'Giao diện thực tế Smart Logistics - Bảng điều khiển Giám sát lộ trình giao hàng Goong Map' : 'Smart Logistics Real Demo - Live Route Monitoring & Goong Map'}
                        className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                        loading="eager"
                      />
                      {/* Hover view full badge */}
                      <div className="absolute inset-0 bg-slate-950/0 group-hover/img:bg-slate-950/25 transition-colors duration-300 flex items-center justify-center">
                        <span className="opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 px-3.5 py-2 bg-white/95 backdrop-blur-xs text-slate-900 text-xs font-bold rounded-xl shadow-md flex items-center gap-1.5">
                          <Maximize2 className="w-3.5 h-3.5 text-[#5E6AD2]" />
                          {language === 'vi' ? 'Phóng to ảnh Demo thực tế' : 'Enlarge Demo Screenshot'}
                        </span>
                      </div>
                    </div>

                    {/* Telemetry info bar */}
                    <div className="px-3.5 py-2 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-slate-600 truncate flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                        <span>{language === 'vi' ? 'Bưu cục Đặng Văn Bi · Điều phối giao hàng' : 'Dang Van Bi Hub · Dispatch Radar'}</span>
                      </span>
                      <span className="text-indigo-700 font-bold shrink-0 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200 text-[10px]">
                        {language === 'vi' ? 'AI GOM CỤM DBSCAN' : 'DBSCAN CLUSTERING'}
                      </span>
                    </div>
                  </div>

                  {/* Architecture Callout */}
                  <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">
                      {language === 'vi' ? 'Cấu trúc Hệ thống:' : 'Architecture:'}
                    </span>
                    <span className="font-mono font-bold text-[#5E6AD2]">
                      Clean Architecture · DDD · Redis 7 · PostgreSQL 15
                    </span>
                  </div>
                </div>

                {/* Right Column: Title, Role, Tech Stack Pills, and CTAs */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    {/* Category Badge & NDA */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-full bg-[#5E6AD2] shadow-[0_0_8px_#5E6AD2]" />
                      <span className="text-xs font-bold tracking-wider text-[#5E6AD2] uppercase font-mono">
                        {language === 'vi' ? 'HỆ THỐNG DOANH NGHIỆP · CÔNG TY TNHH CITARES' : 'ENTERPRISE 3PL PLATFORM · CITARES CO., LTD.'}
                      </span>
                      <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[10px] font-semibold flex items-center gap-1 border border-slate-200">
                        <Lock className="w-3 h-3 text-slate-500" /> NDA Protected
                      </span>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-3xl md:text-4xl font-black text-[#0B0E17] tracking-tight mb-2 leading-tight">
                      Smart Logistics Platform (SLP)
                    </h1>

                    {/* Role & Metadata (Clear Intern Label) */}
                    <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-sm text-[#475569] mb-5 font-medium">
                      <span className="text-[#0B0E17] font-bold">
                        {language === 'vi' ? 'Vai trò:' : 'Role:'} {detail.role}
                      </span>
                      <span>•</span>
                      <span>{detail.company}</span>
                      <span>•</span>
                      <span>{detail.duration}</span>
                    </div>

                    {/* Tech Stack Pills (Clean, standardized technologies) */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {[
                        'Node.js & TypeScript',
                        'PostgreSQL 15 (Prisma ORM)',
                        'Redis 7 (Geospatial & Pub/Sub)',
                        'Socket.io (Live Radar)',
                        'React 19 & Vite (Dispatcher UI)',
                        'RabbitMQ (Async Queue)',
                        'Genetic Algorithm (VRPTW Solver)',
                        'Gitflow & PR Reviews',
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
                      <button
                        onClick={() => scrollTo('architecture')}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-50 text-[#0B0E17] border border-slate-300 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-2xs cursor-pointer"
                      >
                        <Layers className="w-4 h-4 text-[#5E6AD2]" />
                        {language === 'vi' ? 'Xem Sơ Đồ Kiến Trúc' : 'System Architecture'}
                      </button>
                      <button
                        onClick={() => scrollTo('ai')}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#5E6AD2]/10 hover:bg-[#5E6AD2]/20 text-[#5E6AD2] border border-[#5E6AD2]/30 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-2xs cursor-pointer"
                      >
                        <Truck className="w-4 h-4" />
                        {language === 'vi' ? 'Thuật Toán Tối Ưu Tuyến' : 'Route Optimization Engine'}
                      </button>
                      <button
                        onClick={() => scrollTo('telemetry')}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-2xs cursor-pointer"
                      >
                        <Radio className="w-4 h-4" />
                        {language === 'vi' ? 'GPS Telemetry Redis' : 'GPS Telemetry'}
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
                      ? 'Smart Logistics Platform (SLP) là nền tảng quản lý điều vận và tối ưu giao hàng cấp doanh nghiệp (3PL Logistics Platform) phát triển tại Công ty TNHH CITARES. Hệ thống số hóa toàn diện 7 giai đoạn chuỗi cung ứng khép kín trên nền tảng Clean Architecture & Domain-Driven Design (DDD): tạo đơn hàng, gom hàng tận nơi, phân loại kho, trung chuyển liên kho, tối ưu tuyến đường giao chặng cuối, chữ ký số điện tử POD và giám sát định vị GPS thời gian thực trên bản đồ radar.'
                      : 'Smart Logistics Platform (SLP) is an enterprise-grade automated dispatching and routing platform (3PL Logistics Platform) developed at CITARES Co., Ltd. Engineered with Clean Architecture and Domain-Driven Design (DDD), it digitizes the end-to-end supply chain across 7 closed-loop fulfillment stages: order ingestion, pickup dispatch, cross-dock facility sorting, line-haul transfers, last-mile route optimization, digital POD, and real-time GPS telemetry radar monitoring.'}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#64748B] font-mono">
                  <span>Architecture: Clean Architecture</span>
                  <span className="text-emerald-700 font-bold">1,321 pings/s GPS</span>
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
                      <span><strong>{language === 'vi' ? 'Đường ống 4 thuật toán tối ưu' : '4-Stage Route Pipeline'}</strong>: DBSCAN → K-Means → Genetic Algorithm → Hungarian (giảm 58.2% quãng đường).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span><strong>{language === 'vi' ? 'GPS Telemetry trên Redis 7' : 'Redis 7 GPS Telemetry'}</strong>: Tiếp nhận 1,321 điểm/giây với độ trễ P99 &lt; 1ms, không nghẽn disk I/O.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span><strong>{language === 'vi' ? 'Socket.io Radar Viewports' : 'Socket.io Fleet Radar'}</strong>: Truyền phát vị trí tài xế và đổi màu trạng thái đơn hàng thời gian thực.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span><strong>{language === 'vi' ? 'Máy trạng thái 17 bước FSM' : '17-State Fulfillment FSM'}</strong>: Kiểm soát nghiêm ngặt toàn bộ hành trình đơn hàng và quét sọt Tote Bag.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span><strong>{language === 'vi' ? 'Kiểm thử 12 kịch bản tự động' : '12 Automated Scenarios'}</strong>: 100% PASS bao phủ routing, rollback ACID và bảo mật RBAC.</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-emerald-800 font-mono font-semibold">
                  {language === 'vi' ? 'Đạt 12/12 Test Scenarios (100% PASS)' : 'Verified: 12/12 Test Scenarios PASS'}
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
                      {language === 'vi' ? 'Thách thức: Nghẽn I/O cơ sở dữ liệu khi nhận luồng GPS liên tục' : 'Challenge: Database Disk I/O GPS Ingestion Bottlenecks'}
                    </strong>
                    {language === 'vi'
                      ? 'Hàng ngàn tài xế gửi tọa độ mỗi 5 giây. Nếu ghi trực tiếp vào PostgreSQL sẽ làm bão hòa Disk I/O và treo toàn bộ các truy vấn tạo/quét đơn hàng của hệ thống.'
                      : 'Thousands of drivers transmitting GPS pings every 5 seconds. Directly persisting to PostgreSQL saturates disk I/O, freezing dispatching operations.'}
                  </p>
                  <p className="text-xs text-[#334155] leading-relaxed">
                    <strong className="text-emerald-900 block mb-1">
                      {language === 'vi' ? 'Giải pháp: Đường ống đệm 2 tầng (Redis Hot Cache + Cold Store)' : 'Solution: 2-Tier Telemetry Architecture'}
                    </strong>
                    {language === 'vi'
                      ? 'Đệm tọa độ trực tiếp vào Redis 7 (HSET/GEOADD) trên RAM và phát sóng qua Socket.io. Chỉ ghi xuống PostgreSQL khi phát sinh sự kiện chuyển mốc trạng thái nghiệp vụ hoặc lưu chữ ký POD.'
                      : 'Buffers high-frequency GPS into Redis 7 RAM (HSET/GEOADD) and broadcasts via Socket.io. Persists to PostgreSQL cold storage only on major milestone state transitions.'}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-amber-800 font-mono">
                  <span>Sub-ms Latency</span>
                  <span className="font-bold">Zero Disk Saturation</span>
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
                      ? 'Bao gồm sơ đồ kiến trúc Clean Architecture, thuật toán định tuyến GA, luồng GPS Telemetry và báo cáo 12 test scenarios.'
                      : 'Comprehensive Clean Architecture diagrams, Genetic Algorithm math models, GPS telemetry pipelines, and test suites.'}
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
                  onClick={() => scrollTo('ai')}
                  className="px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer"
                >
                  {language === 'vi' ? '2. Thuật Toán AI ↓' : '2. Algorithms ↓'}
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
              projectId="smart-logistics"
              desktopSrc="/assets/projects/smart-logistics/desktop.jpg"
              defaultTab="dual"
              availableTabs={['dual', 'desktop', 'mobile', 'terminal']}
              desktopTitle={language === 'vi' ? 'Bảng Điều Phối Trung Tâm & Bản Đồ Radar (React SPA)' : 'Central Dispatcher Dashboard & Radar Map (React SPA)'}
              mobileTitle={language === 'vi' ? 'Nguồn Phát Định Vị GPS Đội Xe (Mô phỏng Mobile Stream 5s/lần)' : 'Courier GPS Telemetry Stream (Mobile Ingestion Source)'}
              desktopUrl="http://localhost:3000"
              themeColor="#5E6AD2"
              terminalCommand="npm test -- --testPathPattern=algorithms.spec.ts"
            />
          </section>

          {/* ── Business Context & Problem Statement ── */}
          <section id="context">
            <SectionTitle icon={<AlertTriangle className="w-5 h-5" />}
              title={language === 'vi' ? 'Bối cảnh Doanh nghiệp & Đặt vấn đề Thực tế (Business Context)' : 'Business Context & 3PL Problem Statement'}
              badge={language === 'vi' ? 'Đặt vấn đề & Giải pháp' : 'Problem vs Solution'} />
            <p className="text-[#334155] text-base mb-8 leading-relaxed font-normal">
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
            <p className="text-[#334155] text-base mb-8 leading-relaxed font-normal">
              {language === 'vi'
                ? 'Định hình 3 mục tiêu cốt lõi của hệ thống, phân loại 4 nhóm người dùng trọng tâm và cam kết các chỉ số kỹ thuật dịch vụ (SLA) cấp doanh nghiệp.'
                : 'Defining the 3 core system objectives, 4 user personas, and strict technical SLA targets for enterprise operations.'}
            </p>
            <ProjectScopeSection detail={detail} language={language} />
          </section>

          {/* ── My Engineering Ownership ── */}
          <section id="ownership">
            <SectionTitle icon={<Award className="w-5 h-5" />}
              title={language === 'vi' ? 'Trách Nhiệm & Đóng Góp Kỹ Thuật Cá Nhân' : 'My Engineering Ownership & Contributions'}
              badge={language === 'vi' ? 'Fullstack & Optimization' : 'Fullstack & Optimization'} />
            <p className="text-[#334155] text-base mb-8 leading-relaxed font-normal">
              {language === 'vi'
                ? 'Nhiệm vụ kỹ thuật của tôi tại CITARES được tập trung vào 3 trụ cột vững chắc: Tham gia phát triển CSDL PostgreSQL 15 chuẩn 3NF & tầng Backend Clean Architecture / DDD, xây dựng React SPA Dispatcher Dashboard; Lập trình pipeline 4 thuật toán định tuyến thuần TypeScript (giảm 58.2% km); và Thiết kế đường ống GPS telemetry trên Redis / RabbitMQ tuân thủ quy trình Git branching & PR review.'
                : 'My engineering contributions at CITARES were focused into 3 solid technical pillars: Participating in developing 3NF PostgreSQL 15 schema, Clean Architecture & DDD backend, crafting the React SPA Dispatcher Dashboard; Engineering a 4-stage route optimization pipeline in pure TypeScript (–58.2% km); and Designing real-time GPS telemetry on Redis / RabbitMQ adhering to professional Git branching and PR reviews.'}
            </p>
            <MyOwnershipSection detail={detail} language={language} />
          </section>

          {/* ── High-Level System Architecture ── */}
          <section id="architecture">
            <SectionTitle icon={<Layers className="w-5 h-5" />}
              title={language === 'vi' ? 'Kiến trúc Hệ thống Tổng thể (High-Level Architecture)' : 'High-Level System Architecture'}
              badge="Clean Architecture & DDD" />
            <p className="text-[#334155] text-base mb-8 leading-relaxed font-normal">
              {language === 'vi'
                ? 'Sơ đồ luồng phân tầng kiến trúc tổng thể toàn hệ thống từ Client, Gateway, 10 phân hệ nghiệp vụ, Động cơ Tối ưu Tuyến đường đến Bộ đệm Redis và CSDL PostgreSQL 15.'
                : 'End-to-end multi-tier architectural flow covering Presentation, Ingress Gateway, Domain Monolith, Pure TS optimization solvers, In-Memory Stream, and Relational Persistence.'}
            </p>
            <SystemArchitectureSection detail={detail} language={language} />
          </section>

          {/* ── Route Optimization Pipeline ── */}
          <section id="ai">
            <SectionTitle icon={<Cpu className="w-5 h-5" />}
              title={language === 'vi' ? 'Đường ống 4 Thuật toán Tối ưu Tuyến đường (Route Optimization Pipeline)' : '4-Module Pure TypeScript Route Optimization Pipeline'}
              badge={language === 'vi' ? '100% Thuần TypeScript' : 'Zero External AI Dependency'} />
            <p className="text-[#334155] text-base mb-8 leading-relaxed font-normal">
              {language === 'vi'
                ? 'Toàn bộ động cơ tối ưu tuyến đường (Route Optimization Engine) được tự phát triển bằng mã nguồn TypeScript thuần mà không phụ thuộc vào thư viện ngoài. Đường ống gồm 4 thuật toán tuần tự phối hợp chặt chẽ nhằm giải quyết bài toán định tuyến xe có giới hạn tải trọng và khung giờ hẹn (Capacitated Vehicle Routing Problem with Time Windows - CVRP/VRPTW) trong vòng chưa tới nửa giây.'
                : 'The entire route optimization engine is engineered in pure TypeScript with zero external black-box dependencies. The 4 sequential algorithms collaborate to solve the NP-Hard Capacitated Vehicle Routing Problem with Time Windows (CVRP+VRPTW) in sub-second execution.'}
            </p>
            <AIPipelineFlow detail={detail} language={language} />
          </section>

          {/* ── GPS Telemetry ── */}
          <section id="telemetry">
            <SectionTitle icon={<Zap className="w-5 h-5" />}
              title={language === 'vi' ? 'Hệ thống Truyền phát Định vị Toàn cầu Thời gian thực (Real-Time GPS Telemetry)' : 'High-Frequency Real-Time GPS Telemetry'} />
            <p className="text-[#334155] text-base mb-8 leading-relaxed font-normal">
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
            <p className="text-[#334155] text-base mb-8 leading-relaxed font-normal">
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
            <p className="text-[#334155] text-base mb-8 font-normal">
              {language === 'vi'
                ? 'CSDL Quan Hệ PostgreSQL 15 Chuẩn 3NF · 10 Phân hệ nghiệp vụ độc lập · Trình ánh xạ Prisma ORM 5.x'
                : '3NF Relational Database Schema · 10 Bounded Domain Contexts · PostgreSQL 15 · Prisma ORM 5.x'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {detail.dbModules.map((mod) => {
                const mColors = ['#5E6AD2', '#8B5CF6', '#10B981', '#F59E0B', '#EC4899', '#06B6D4', '#FBBF24', '#FB923C', '#10B981', '#5E6AD2'];
                const c = mColors[(mod.id - 1) % mColors.length];
                return (
                  <div key={mod.id} className="p-5 bg-white/90 border border-slate-200/80 hover:border-[#5E6AD2]/50 hover:shadow-md transition-all rounded-2xl shadow-xs">
                    <div className="flex items-center gap-2.5 mb-3">
                      <span className="w-6 h-6 text-xs font-black flex items-center justify-center font-mono rounded-lg"
                        style={{ background: `${c}15`, color: c }}>{mod.id}</span>
                      <span className="text-base font-bold text-[#0B0E17]">{mod.name}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {mod.tables.map(tName => (
                        <code key={tName} className="text-xs px-2 py-1 bg-slate-100 border border-slate-200 text-[#475569] font-mono rounded-md">{tName}</code>
                      ))}
                    </div>
                    <p className="text-sm text-[#334155] leading-relaxed font-normal">{mod.keyFeature}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ── Tech Stack ── */}
          <section id="techstack">
            <SectionTitle icon={<Server className="w-5 h-5" />}
              title={language === 'vi' ? 'Ngăn xếp Công nghệ & Nền tảng Kỹ thuật (Technology Stack)' : 'Technology Stack & Engineering Toolchain'} />
            <div className="border border-slate-200/80 overflow-hidden rounded-2xl shadow-xs bg-white">
              <table className="w-full text-base">
                <thead>
                  <tr className="border-b border-slate-200/80 bg-slate-100/80">
                    <th className="text-left px-5 py-3.5 text-xs font-bold text-[#475569] uppercase tracking-wider w-[220px]">
                      {language === 'vi' ? 'Phân tầng kiến trúc' : 'Architectural Layer'}
                    </th>
                    <th className="text-left px-5 py-3.5 text-xs font-bold text-[#475569] uppercase tracking-wider w-[240px]">
                      {language === 'vi' ? 'Công nghệ / Phiên bản' : 'Technology & Version'}
                    </th>
                    <th className="text-left px-5 py-3.5 text-xs font-bold text-[#475569] uppercase tracking-wider">
                      {language === 'vi' ? 'Vai trò & Khả năng đáp ứng' : 'Role & Engineering Capability'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {detail.techStack.map((item, i) => (
                    <tr key={i} className="border-b border-slate-100 hover:bg-slate-50/80 transition-colors">
                      <td className="px-5 py-3.5 text-sm font-bold text-[#5E6AD2]">{item.layer}</td>
                      <td className="px-5 py-3.5">
                        <span className="font-mono text-sm text-[#0B0E17] font-bold">{item.tech}</span>
                        {item.version && item.version !== '—' && (
                          <span className="ml-2 text-xs text-[#64748B] font-mono">({item.version})</span>
                        )}
                      </td>
                      <td className="px-5 py-3.5 text-sm text-[#475569] font-normal leading-relaxed">{item.role}</td>
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
            <p className="text-[#334155] text-base mb-8 font-normal">
              {language === 'vi'
                ? 'Bộ kịch bản kiểm thử tự động toàn diện được khởi chạy qua lệnh npm run test:master, bao phủ 5 tầng kiến trúc từ thuật toán toán học đến tính toàn vẹn cơ sở dữ liệu và bảo mật phân quyền.'
                : 'Automated CI/CD master test suite executed via npm run test:master covering mathematical algorithm convergence, database concurrency, and gateway security.'}
            </p>
            <div className="border border-slate-200/80 overflow-hidden rounded-2xl shadow-xs bg-white">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-100/80 border-b border-slate-200/80">
                    <th className="text-left px-5 py-3 text-xs font-bold text-[#475569] uppercase tracking-wider w-10">#</th>
                    <th className="text-left px-5 py-3 text-xs font-bold text-[#475569] uppercase tracking-wider w-48">
                      {language === 'vi' ? 'Phân nhóm kiểm thử' : 'Test Group'}
                    </th>
                    <th className="text-left px-5 py-3 text-xs font-bold text-[#475569] uppercase tracking-wider">
                      {language === 'vi' ? 'Kịch bản kiểm thử' : 'Test Suite & Assertion'}
                    </th>
                    <th className="text-left px-5 py-3 text-xs font-bold text-[#475569] uppercase tracking-wider w-24">
                      {language === 'vi' ? 'Thời gian' : 'Time'}
                    </th>
                    <th className="text-left px-5 py-3 text-xs font-bold text-[#475569] uppercase tracking-wider w-28">
                      {language === 'vi' ? 'Kết quả' : 'Status'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {detail.testResults.map((tItem, i) => {
                    const c = groupColors[tItem.group] || '#5E6AD2';
                    return (
                      <tr key={i} className="border-b border-slate-100 hover:bg-slate-50/80 transition-colors">
                        <td className="px-5 py-3.5 text-xs text-[#64748B] font-mono">{i + 1}</td>
                        <td className="px-5 py-3.5">
                          <span className="text-xs font-bold px-2.5 py-1 rounded-lg" style={{ background: `${c}15`, color: c }}>{tItem.group}</span>
                        </td>
                        <td className="px-5 py-3.5 text-sm font-medium text-[#0B0E17]">
                          <div>{tItem.name}</div>
                          <div className="text-xs text-[#64748B] font-normal mt-0.5">{tItem.result}</div>
                        </td>
                        <td className="px-5 py-3.5 text-xs font-mono font-bold text-[#64748B]">{tItem.timeMs}</td>
                        <td className="px-5 py-3.5">
                          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 px-2.5 py-1 bg-emerald-50 border border-emerald-200 rounded-lg">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> PASS
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
                <div key={i} className="p-6 bg-white/90 border border-slate-200/80 hover:border-[#5E6AD2]/50 hover:shadow-md transition-all rounded-2xl shadow-xs">
                  <h3 className="text-base font-bold text-[#5E6AD2] mb-4 flex items-center gap-2.5">
                    <span className="w-6 h-6 flex items-center justify-center text-xs font-black font-mono rounded-lg bg-[#5E6AD2]/15 text-[#5E6AD2]">
                      {i + 1}
                    </span>
                    {c.title}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

          {/* ── Tech Tags ── */}
          <section className="border-t border-slate-200/80 pt-12">
            <div className="flex items-center gap-3 mb-5">
              <Layers className="w-5 h-5 text-[#64748B]" />
              <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider">{t.detailCommon.techKeywords}</span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-xs px-3 py-1.5 border border-slate-200/80 bg-white text-[#334155] font-mono hover:border-[#5E6AD2] hover:text-[#5E6AD2] transition-colors cursor-default rounded-lg shadow-2xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="border-t border-slate-200/80 pt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-3 bg-slate-100 border border-slate-200/90 text-[#475569] text-xs font-semibold rounded-xl"
              title={detail.ndaNotice}
            >
              <Lock className="w-4 h-4 text-[#5E6AD2] shrink-0" />
              <span>{language === 'vi' ? 'Mã nguồn Dự án thuộc quyền sở hữu của Doanh nghiệp (Tuân thủ NDA)' : 'Enterprise Source Code Protected Under Commercial NDA Agreement'}</span>
            </div>
            <button onClick={() => navigate(-1)}
              className="btn-linear-primary text-sm px-6 py-3 rounded-xl cursor-pointer">
              <ArrowLeft className="w-4 h-4 mr-1.5" /> {t.detailCommon.backToPortfolioBtn}
            </button>
          </section>

        </main>
      </div>

      {/* Lightbox Preview Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 z-[999] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fadeIn"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-6xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900 text-white text-xs font-mono border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                <span className="font-bold">
                  {language === 'vi' ? 'Smart Logistics · Demo Giao diện Thực tế (Goong Map & Điều vận)' : 'Smart Logistics · Real System Demo (Goong Map & Dispatching)'}
                </span>
              </div>
              <button
                onClick={() => setPreviewImage(null)}
                className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                title="Đóng (Close)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2 bg-slate-950/40">
              <img
                src={previewImage}
                alt="Demo Fullscreen Preview"
                className="w-full h-auto max-h-[82vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ─── Reusable section title ────────────────────────────────────────────────
const SectionTitle: React.FC<{ icon: React.ReactNode; title: string; badge?: string }> = ({ icon, title, badge }) => (
  <div className="flex items-center flex-wrap gap-3 mb-6">
    <span className="text-[#5E6AD2] shrink-0">{icon}</span>
    <h2 className="text-2xl font-black text-[#0B0E17]">{title}</h2>
    {badge && (
      <span className="text-xs px-2.5 py-1 bg-[#5E6AD2]/10 text-[#5E6AD2] border border-[#5E6AD2]/20 font-bold font-mono tracking-wider rounded-lg whitespace-nowrap shrink-0">
        {badge}
      </span>
    )}
  </div>
);

export default SmartLogisticsPage;
