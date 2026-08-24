import React, { useState, useEffect } from 'react';
import {
  Maximize2,
  X,
  Lock,
  Copy,
  Check,
  Smartphone,
  Monitor,
  Wifi,
  Battery,
  Signal,
  Info,
  Eye,
} from 'lucide-react';

// ─── Lightbox Modal Component ───────────────────────────────────────────────
export interface LightboxProps {
  isOpen: boolean;
  src: string;
  alt?: string;
  title?: string;
  caption?: string;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxProps> = ({
  isOpen,
  src,
  alt = 'Project Screenshot Preview',
  title,
  caption,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-6xl w-full max-h-[92vh] flex flex-col bg-[#141414] border border-[#333] rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#262626] bg-[#1a1a1a]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
            <h4 className="text-sm font-semibold text-[#f3f4f6] tracking-wide">
              {title || 'Ảnh Minh Họa / Screenshot Chi Tiết'}
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#9ca3af] hover:text-white hover:bg-[#2a2a2a] transition-colors"
              title="Đóng (ESC)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Image Body */}
        <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-[#0d0d0d] min-h-[300px]">
          <img
            src={src}
            alt={alt}
            className="max-h-[75vh] w-auto max-w-full object-contain rounded shadow-lg border border-[#222]"
          />
        </div>

        {/* Modal Caption Footer */}
        {caption && (
          <div className="px-5 py-3 border-t border-[#262626] bg-[#161616] flex items-center justify-between text-xs text-[#9ca3af]">
            <span>{caption}</span>
            <span className="font-mono text-[11px] text-[#6b7280]">Nhấn ESC hoặc click ngoài để đóng</span>
          </div>
        )}
      </div>
    </div>
  );
};

// ─── Browser / Desktop PC Mockup Frame ─────────────────────────────────────
export interface BrowserMockupProps {
  src?: string | string[];
  alt?: string;
  url?: string;
  title?: string;
  caption?: string;
  badge?: string;
  themeColor?: string;
  aspectRatio?: string;
  className?: string;
  placeholderSubtitle?: string;
  placeholderHintPath?: string;
  onZoom?: (src: string) => void;
}

export const BrowserMockup: React.FC<BrowserMockupProps> = ({
  src,
  alt = 'Web Application Interface',
  url = 'http://localhost:3000',
  title = 'Web Application & Dashboard Portal',
  caption,
  badge = 'WEB ADMIN / DESKTOP',
  themeColor = '#D4AF37',
  aspectRatio = 'aspect-[16/10]',
  className = '',
  placeholderSubtitle = 'Ảnh chụp màn hình Giao diện Web / Dashboard Quản trị',
  placeholderHintPath = 'public/assets/projects/...',
  onZoom,
}) => {
  const sources = Array.isArray(src) ? src : src ? [src] : [];
  const [srcIndex, setSrcIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [copied, setCopied] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activeSrc = sources[srcIndex];

  const handleImageError = () => {
    if (srcIndex < sources.length - 1) {
      setSrcIndex((prev) => prev + 1);
    } else {
      setHasError(true);
    }
  };

  const handleCopyUrl = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleImageClick = () => {
    if (activeSrc && !hasError) {
      if (onZoom) onZoom(activeSrc);
      else setLightboxOpen(true);
    }
  };

  return (
    <>
      <div className={`flex flex-col rounded-xl border border-[#2e2e2e] bg-[#141414] overflow-hidden shadow-2xl transition-colors duration-200 hover:border-[#444] ${className}`}>
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#1c1c1c] border-b border-[#282828] select-none gap-2">
          {/* Traffic light window controls */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#EF4444]/90 border border-[#DC2626]/50 shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-[#F59E0B]/90 border border-[#D97706]/50 shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-[#10B981]/90 border border-[#059669]/50 shadow-sm" />
          </div>

          {/* Browser URL Bar */}
          <div
            onClick={handleCopyUrl}
            className="flex-1 max-w-xl mx-2 flex items-center justify-between px-3 py-1.5 rounded-md bg-[#0f0f0f] border border-[#2c2c2c] hover:border-[#444] cursor-pointer text-xs transition-colors group/url"
            title="Click để sao chép URL"
          >
            <div className="flex items-center gap-2 truncate text-[#9ca3af] group-hover/url:text-[#e4e2e1]">
              <Lock className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
              <span className="font-mono text-[11px] truncate">{url}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#6b7280] group-hover/url:text-[#D4AF37] shrink-0 pl-2">
              {copied ? (
                <span className="text-[10px] text-[#10B981] font-mono flex items-center gap-1">
                  <Check className="w-3 h-3" /> Copied
                </span>
              ) : (
                <Copy className="w-3 h-3 opacity-60 group-hover/url:opacity-100 transition-opacity" />
              )}
            </div>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider font-semibold border border-[#333] text-[#8e9192]"
                  style={{ color: themeColor, borderColor: `${themeColor}40` }}>
              {badge}
            </span>
            {activeSrc && !hasError && (
              <button
                onClick={handleImageClick}
                className="p-1 rounded text-[#8e9192] hover:text-white hover:bg-[#2a2a2a] transition-colors"
                title="Phóng to ảnh"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Screen Display Area */}
        <div
          className={`relative w-full ${aspectRatio} bg-[#0b0b0b] overflow-hidden flex items-center justify-center cursor-pointer group`}
          onClick={handleImageClick}
        >
          {activeSrc && !hasError ? (
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={activeSrc}
                alt={alt}
                onError={handleImageError}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
                <span className="px-4 py-2 rounded-full bg-black/85 text-white text-xs font-semibold flex items-center gap-2 border border-white/20 backdrop-blur-sm shadow-xl pointer-events-none">
                  <Eye className="w-4 h-4 text-[#D4AF37]" /> Click để phóng to
                </span>
              </div>
            </div>
          ) : (
            /* Technical Wireframe Placeholder when no image is supplied */
            <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-[#111] via-[#0d0d0d] to-[#080808]">
              {/* Background Grid Accent */}
              <div
                className="absolute inset-0 opacity-[0.07] pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(${themeColor} 1px, transparent 1px)`,
                  backgroundSize: '24px 24px',
                }}
              />

              {/* Wireframe Mock Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#222]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#1e1e1e] border border-[#333] flex items-center justify-center text-xs font-mono font-bold"
                       style={{ color: themeColor }}>
                    UI
                  </div>
                  <div>
                    <div className="h-3 w-32 bg-[#262626] rounded animate-pulse mb-1.5" />
                    <div className="h-2 w-20 bg-[#1e1e1e] rounded" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-16 bg-[#1f1f1f] rounded border border-[#2a2a2a]" />
                  <div className="h-6 w-20 bg-[#252525] rounded border border-[#333]" />
                </div>
              </div>

              {/* Center Upload & Blueprint Guide */}
              <div className="my-auto flex flex-col items-center justify-center text-center py-6 px-4 z-10">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 border shadow-xl transition-transform group-hover:scale-105 duration-300"
                  style={{
                    backgroundColor: `${themeColor}15`,
                    borderColor: `${themeColor}40`,
                    color: themeColor,
                  }}
                >
                  <Monitor className="w-7 h-7" />
                </div>

                <h4 className="text-sm sm:text-base font-bold text-[#f3f4f6] mb-1.5 tracking-wide">
                  {title}
                </h4>
                <p className="text-xs text-[#9ca3af] max-w-md mb-4 leading-relaxed">
                  {placeholderSubtitle}
                </p>

                <div className="px-3.5 py-2 rounded-md bg-[#161616] border border-[#2a2a2a] text-[11px] font-mono text-[#a3a3a3] flex items-center gap-2 max-w-sm text-left">
                  <Info className="w-3.5 h-3.5 shrink-0 text-[#D4AF37]" />
                  <span className="truncate">
                    Đặt ảnh vào: <code className="text-[#e4e2e1] font-bold">{placeholderHintPath}</code>
                  </span>
                </div>
              </div>

              {/* Wireframe Mock Bottom Widgets */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#1e1e1e]">
                <div className="h-10 bg-[#171717] rounded border border-[#242424] p-2 flex items-center justify-between">
                  <div className="h-2 w-12 bg-[#2a2a2a] rounded" />
                  <div className="h-3 w-6 bg-[#333] rounded" />
                </div>
                <div className="h-10 bg-[#171717] rounded border border-[#242424] p-2 flex items-center justify-between">
                  <div className="h-2 w-12 bg-[#2a2a2a] rounded" />
                  <div className="h-3 w-6 bg-[#333] rounded" />
                </div>
                <div className="h-10 bg-[#171717] rounded border border-[#242424] p-2 flex items-center justify-between">
                  <div className="h-2 w-12 bg-[#2a2a2a] rounded" />
                  <div className="h-3 w-6 bg-[#333] rounded" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Caption Bar */}
        {caption && (
          <div className="px-4 py-2.5 bg-[#121212] border-t border-[#222] text-xs text-[#8e9192] flex items-center justify-between">
            <span>{caption}</span>
            <span className="font-mono text-[10px] text-[#555]">SCREENSHOT FRAME</span>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {activeSrc && (
        <LightboxModal
          isOpen={lightboxOpen}
          src={activeSrc}
          alt={alt}
          title={title}
          caption={caption}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
};

// ─── Smartphone / Mobile App Mockup Frame ──────────────────────────────────
export interface MobileMockupProps {
  src?: string | string[];
  alt?: string;
  appName?: string;
  title?: string;
  caption?: string;
  badge?: string;
  themeColor?: string;
  className?: string;
  placeholderSubtitle?: string;
  placeholderHintPath?: string;
  onZoom?: (src: string) => void;
}

export const MobileMockup: React.FC<MobileMockupProps> = ({
  src,
  alt = 'Mobile Application Screen',
  appName = 'Mobile App',
  title = 'Ứng dụng Di động (Mobile App UI)',
  caption,
  badge = 'MOBILE APP',
  themeColor = '#3B82F6',
  className = '',
  placeholderSubtitle = 'Ảnh chụp màn hình App Android / Flutter trên thiết bị thật',
  placeholderHintPath = 'public/assets/projects/.../mobile.png',
  onZoom,
}) => {
  const sources = Array.isArray(src) ? src : src ? [src] : [];
  const [srcIndex, setSrcIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activeSrc = sources[srcIndex];

  const handleImageError = () => {
    if (srcIndex < sources.length - 1) {
      setSrcIndex((prev) => prev + 1);
    } else {
      setHasError(true);
    }
  };

  const handleImageClick = () => {
    if (activeSrc && !hasError) {
      if (onZoom) onZoom(activeSrc);
      else setLightboxOpen(true);
    }
  };

  return (
    <>
      <div className={`flex flex-col items-center ${className}`}>
        {/* Mobile Phone Chassis */}
        <div
          className="relative w-full max-w-[320px] aspect-[9/19.5] rounded-[44px] p-3 bg-gradient-to-b from-[#2a2a2a] via-[#1a1a1a] to-[#111] border-2 border-[#383838] shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-colors duration-200 hover:border-[#555]"
        >
          {/* Outer Side Buttons Details */}
          <div className="absolute -left-[5px] top-24 w-[3px] h-9 bg-[#444] rounded-l-sm" />
          <div className="absolute -left-[5px] top-36 w-[3px] h-12 bg-[#444] rounded-l-sm" />
          <div className="absolute -left-[5px] top-52 w-[3px] h-12 bg-[#444] rounded-l-sm" />
          <div className="absolute -right-[5px] top-32 w-[3px] h-16 bg-[#444] rounded-r-sm" />

          {/* Inner Phone Screen */}
          <div
            className="relative w-full h-full rounded-[34px] bg-[#0c0c0c] overflow-hidden flex flex-col justify-between border border-[#222] cursor-pointer group"
            onClick={handleImageClick}
          >
            {/* Status Bar + Dynamic Island */}
            <div className="absolute top-0 inset-x-0 z-30 px-6 pt-3 pb-2 flex items-center justify-between text-[10px] font-semibold text-[#f3f4f6] select-none bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
              <span>09:41</span>
              {/* Dynamic Island Capsule */}
              <div className="w-20 h-4 bg-black rounded-full border border-[#282828] flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-[#1a1a1a] border border-[#333]" />
              </div>
              <div className="flex items-center gap-1.5">
                <Signal className="w-3 h-3 text-[#f3f4f6]" />
                <Wifi className="w-3 h-3 text-[#f3f4f6]" />
                <Battery className="w-3.5 h-3.5 text-[#f3f4f6]" />
              </div>
            </div>

            {/* Screen Content */}
            <div className="relative w-full h-full pt-10 pb-6 overflow-hidden flex items-center justify-center">
              {activeSrc && !hasError ? (
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={activeSrc}
                    alt={alt}
                    onError={handleImageError}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
                    <span className="px-3 py-1.5 rounded-full bg-black/85 text-white text-[11px] font-semibold flex items-center gap-1.5 border border-white/20 backdrop-blur-sm pointer-events-none">
                      <Eye className="w-3.5 h-3.5 text-[#3B82F6]" /> Phóng to
                    </span>
                  </div>
                </div>
              ) : (
                /* Mobile Wireframe Placeholder */
                <div className="w-full h-full p-5 flex flex-col justify-between relative bg-gradient-to-b from-[#141414] to-[#090909]">
                  {/* Top Bar Mock */}
                  <div className="pt-2 flex items-center justify-between border-b border-[#222] pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#222] border border-[#333] flex items-center justify-center text-[10px] font-bold"
                           style={{ color: themeColor }}>
                        📱
                      </div>
                      <span className="text-xs font-bold text-[#f3f4f6]">{appName}</span>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-[#1e1e1e] border border-[#333]" />
                  </div>

                  {/* Center Placeholder Notice */}
                  <div className="my-auto flex flex-col items-center justify-center text-center px-2 py-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3 border shadow-lg"
                      style={{
                        backgroundColor: `${themeColor}15`,
                        borderColor: `${themeColor}40`,
                        color: themeColor,
                      }}
                    >
                      <Smartphone className="w-6 h-6" />
                    </div>
                    <h5 className="text-xs font-bold text-[#f3f4f6] mb-1">{title}</h5>
                    <p className="text-[10px] text-[#9ca3af] mb-3 leading-relaxed">
                      {placeholderSubtitle}
                    </p>
                    <div className="px-2.5 py-1.5 rounded bg-[#161616] border border-[#2a2a2a] text-[9px] font-mono text-[#a3a3a3] flex items-center gap-1 max-w-[200px] text-left truncate">
                      <Info className="w-3.5 h-3.5 shrink-0 text-[#D4AF37]" />
                      <span className="truncate">{placeholderHintPath}</span>
                    </div>
                  </div>

                  {/* Bottom Navigation Mock */}
                  <div className="pt-2 border-t border-[#1e1e1e] flex items-center justify-around">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-4 h-4 rounded-sm bg-[#3B82F6]" />
                      <div className="w-6 h-1 bg-[#3B82F6] rounded-full" />
                    </div>
                    <div className="flex flex-col items-center gap-1 opacity-40">
                      <div className="w-4 h-4 rounded-sm bg-[#555]" />
                      <div className="w-6 h-1 bg-[#444] rounded-full" />
                    </div>
                    <div className="flex flex-col items-center gap-1 opacity-40">
                      <div className="w-4 h-4 rounded-sm bg-[#555]" />
                      <div className="w-6 h-1 bg-[#444] rounded-full" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Home Indicator Bar */}
            <div className="absolute bottom-1.5 inset-x-0 z-30 flex justify-center pointer-events-none">
              <div className="w-28 h-1 bg-white/40 rounded-full" />
            </div>
          </div>
        </div>

        {/* Mobile Caption / Badge */}
        {badge && (
          <div className="mt-3 text-center">
            <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider font-semibold border border-[#333] text-[#8e9192]"
                  style={{ color: themeColor, borderColor: `${themeColor}40` }}>
              {badge}
            </span>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {activeSrc && (
        <LightboxModal
          isOpen={lightboxOpen}
          src={activeSrc}
          alt={alt}
          title={title}
          caption={caption}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
};

// ─── Dual Showcase Mockup (Desktop + Mobile side-by-side) ───────────────────
export interface DualMockupProps {
  desktopSrc?: string | string[];
  mobileSrc?: string | string[];
  desktopTitle?: string;
  mobileTitle?: string;
  desktopUrl?: string;
  caption?: string;
  themeColor?: string;
  className?: string;
  desktopHintPath?: string;
  mobileHintPath?: string;
}

export const DualMockup: React.FC<DualMockupProps> = ({
  desktopSrc,
  mobileSrc,
  desktopTitle = 'Web Management Portal',
  mobileTitle = 'Client Mobile App',
  desktopUrl = 'http://localhost:3000',
  themeColor = '#D4AF37',
  className = '',
  desktopHintPath = 'public/assets/projects/.../desktop.png',
  mobileHintPath = 'public/assets/projects/.../mobile.png',
}) => {
  return (
    <div className={`relative flex flex-col items-center rounded-2xl bg-[#0f0f0f] border border-[#262626] p-6 sm:p-8 overflow-hidden shadow-2xl ${className}`}>
      {/* Background Ambient Glow */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ backgroundColor: themeColor }}
      />

      <div className="w-full relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-8">
        {/* Desktop Mockup (Left) */}
        <div className="w-full lg:w-[68%] shrink-0">
          <BrowserMockup
            src={desktopSrc}
            title={desktopTitle}
            url={desktopUrl}
            badge="WEB ADMIN / DESKTOP"
            themeColor={themeColor}
            aspectRatio="aspect-[16/10]"
            placeholderSubtitle="Giao diện Web Admin / Quản trị Doanh nghiệp"
            placeholderHintPath={desktopHintPath}
          />
        </div>

        {/* Mobile Mockup (Right - Stable position, zero jitter) */}
        <div className="w-full sm:w-[280px] lg:w-[32%] shrink-0 flex justify-center z-10">
          <MobileMockup
            src={mobileSrc}
            title={mobileTitle}
            appName={mobileTitle}
            badge="MOBILE APP"
            themeColor="#3B82F6"
            placeholderSubtitle="Giao diện App Di động"
            placeholderHintPath={mobileHintPath}
          />
        </div>
      </div>
    </div>
  );
};

// ─── Terminal / Test Runner Mockup Frame ────────────────────────────────────
export interface TerminalMockupProps {
  title?: string;
  command?: string;
  output?: React.ReactNode;
  statusBadge?: string;
  className?: string;
}

export const TerminalMockup: React.FC<TerminalMockupProps> = ({
  title = 'Automated Test Runner & Pipeline Verification',
  command = 'npm test -- --coverage --verbose',
  output,
  statusBadge = '100% PASS RATE',
  className = '',
}) => {
  return (
    <div className={`rounded-xl border border-[#2e2e2e] bg-[#0c0d0e] overflow-hidden shadow-2xl font-mono text-xs ${className}`}>
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#17181a] border-b border-[#262729] select-none">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
          <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
          <span className="w-3 h-3 rounded-full bg-[#10B981]/80" />
          <span className="text-[11px] text-[#9ca3af] font-medium ml-2">{title}</span>
        </div>
        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#10B981]/15 text-[#34D399] border border-[#10B981]/30">
          {statusBadge}
        </span>
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-5 text-[#d1d5db] space-y-3 leading-relaxed overflow-x-auto">
        <div className="flex items-center gap-2 text-[#9ca3af]">
          <span className="text-[#34D399] font-bold">hung@ptit-swe:~/backend$</span>
          <span className="text-[#f3f4f6] font-bold">{command}</span>
        </div>

        {output ? (
          output
        ) : (
          <div className="space-y-1.5 text-[11px] text-[#9ca3af]">
            <p className="text-[#34D399]">✓ All test suites passed successfully.</p>
            <p className="text-[#9ca3af]">Test Suites: <span className="text-[#34D399] font-bold">100% passed</span></p>
            <p className="text-[#9ca3af]">Coverage: <span className="text-[#34D399] font-bold">100% Statements / 100% Branches / 100% Functions</span></p>
            <p className="text-[#6b7280]">Time: 1.428s, estimated memory usage: 48.2 MB</p>
          </div>
        )}
      </div>
    </div>
  );
};
