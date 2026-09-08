import React, { useState } from 'react';
import {
  Monitor,
  Smartphone,
  Layers,
  Terminal,
  Sparkles,
} from 'lucide-react';
import {
  BrowserMockup,
  MobileMockup,
  DualMockup,
  TerminalMockup
} from './DeviceMockup';
import { useLanguage } from '../context/LanguageContext';

export interface ProjectShowcaseGalleryProps {
  projectId: string;
  defaultTab?: 'dual' | 'desktop' | 'mobile' | 'terminal';
  availableTabs?: ('dual' | 'desktop' | 'mobile' | 'terminal')[];
  desktopSrc?: string | string[];
  mobileSrc?: string | string[];
  desktopUrl?: string;
  desktopTitle?: string;
  mobileTitle?: string;
  terminalCommand?: string;
  terminalOutput?: React.ReactNode;
  themeColor?: string;
  caption?: string;
  className?: string;
}

export const ProjectShowcaseGallery: React.FC<ProjectShowcaseGalleryProps> = ({
  projectId,
  defaultTab = 'dual',
  availableTabs = ['dual', 'desktop', 'mobile', 'terminal'],
  desktopSrc,
  mobileSrc,
  desktopUrl = 'http://localhost:3000',
  desktopTitle = 'Web Management & Dashboard',
  mobileTitle = 'Mobile Client Application',
  terminalCommand = 'npm test -- --coverage',
  terminalOutput,
  themeColor = '#2563EB',
  caption,
  className = '',
}) => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'dual' | 'desktop' | 'mobile' | 'terminal'>(
    availableTabs.includes(defaultTab) ? defaultTab : availableTabs[0]
  );

  const TAB_LABELS = {
    vi: {
      dual: 'Hệ Sinh Thái Kép (PC + Mobile)',
      desktop: 'Màn Hình PC / Web Portal',
      mobile: 'Màn Hình App Di Động',
      terminal: 'Test Runner & Terminal Log',
      hint: 'Bạn có thể phóng to hình ảnh bằng cách nhấp trực tiếp vào khung màn hình.',
    },
    en: {
      dual: 'Dual Showcase (PC + Mobile)',
      desktop: 'PC Web Screen / Portal',
      mobile: 'Mobile App Screen',
      terminal: 'Test Runner & CLI Logs',
      hint: 'Click directly on any device frame to view fullscreen screenshot.',
    },
  };

  const t = TAB_LABELS[language];

  // Automatic candidate file formats: .jpg -> .png -> .jpeg -> .webp
  const defaultDesktopSources = [
    `/assets/projects/${projectId}/desktop.jpg`,
    `/assets/projects/${projectId}/desktop.png`,
    `/assets/projects/${projectId}/desktop.jpeg`,
    `/assets/projects/${projectId}/desktop.webp`,
  ];

  const defaultMobileSources = [
    `/assets/projects/${projectId}/mobile.jpg`,
    `/assets/projects/${projectId}/mobile.png`,
    `/assets/projects/${projectId}/mobile.jpeg`,
    `/assets/projects/${projectId}/mobile.webp`,
  ];

  const resolvedDesktopSrc = desktopSrc || defaultDesktopSources;
  const resolvedMobileSrc = mobileSrc || defaultMobileSources;

  return (
    <div className={`flex flex-col gap-6 p-6 sm:p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-md ${className}`}>
      {/* Gallery Header & Device Selector Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E2E8F0]">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center border text-xs font-bold"
            style={{
              backgroundColor: `${themeColor}15`,
              borderColor: `${themeColor}40`,
              color: themeColor,
            }}
          >
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-[#0F172A] tracking-wide uppercase font-mono">
              {language === 'vi' ? 'Khung Trực Quan Hóa Sản Phẩm (Device Showcase)' : 'Interactive Device Mockup & Visuals'}
            </h3>
            <p className="text-xs text-[#64748B]">
              {t.hint}
            </p>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-[#F1F5F9] border border-[#E2E8F0] rounded-xl overflow-x-auto">
          {availableTabs.includes('dual') && (
            <button
              onClick={() => setActiveTab('dual')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'dual'
                  ? 'bg-white text-[#2563EB] shadow-xs font-bold'
                  : 'text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="hidden sm:inline">{t.dual}</span>
              <span className="sm:hidden">Dual</span>
            </button>
          )}

          {availableTabs.includes('desktop') && (
            <button
              onClick={() => setActiveTab('desktop')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'desktop'
                  ? 'bg-white text-[#2563EB] shadow-xs font-bold'
                  : 'text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              <Monitor className="w-3.5 h-3.5 text-[#2563EB]" />
              <span className="hidden sm:inline">{t.desktop}</span>
              <span className="sm:hidden">PC Web</span>
            </button>
          )}

          {availableTabs.includes('mobile') && (
            <button
              onClick={() => setActiveTab('mobile')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'mobile'
                  ? 'bg-white text-[#2563EB] shadow-xs font-bold'
                  : 'text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5 text-[#10B981]" />
              <span className="hidden sm:inline">{t.mobile}</span>
              <span className="sm:hidden">Mobile</span>
            </button>
          )}

          {availableTabs.includes('terminal') && (
            <button
              onClick={() => setActiveTab('terminal')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'terminal'
                  ? 'bg-white text-[#2563EB] shadow-xs font-bold'
                  : 'text-[#64748B] hover:text-[#0F172A]'
              }`}
            >
              <Terminal className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span className="hidden sm:inline">{t.terminal}</span>
              <span className="sm:hidden">Terminal</span>
            </button>
          )}
        </div>
      </div>

      {/* Active Tab View */}
      <div className="w-full">
        {activeTab === 'dual' && (
          <DualMockup
            desktopSrc={resolvedDesktopSrc}
            mobileSrc={resolvedMobileSrc}
            desktopTitle={desktopTitle}
            mobileTitle={mobileTitle}
            desktopUrl={desktopUrl}
            themeColor={themeColor}
            caption={caption}
            desktopHintPath={`public/assets/projects/${projectId}/desktop.jpg`}
            mobileHintPath={`public/assets/projects/${projectId}/mobile.jpg`}
          />
        )}

        {activeTab === 'desktop' && (
          <BrowserMockup
            src={resolvedDesktopSrc}
            title={desktopTitle}
            url={desktopUrl}
            themeColor={themeColor}
            aspectRatio="aspect-[16/9]"
            caption={caption}
            placeholderHintPath={`public/assets/projects/${projectId}/desktop.jpg`}
          />
        )}

        {activeTab === 'mobile' && (
          <div className="flex justify-center py-4">
            <MobileMockup
              src={resolvedMobileSrc}
              title={mobileTitle}
              appName={mobileTitle}
              themeColor={themeColor}
              caption={caption}
              placeholderHintPath={`public/assets/projects/${projectId}/mobile.jpg`}
            />
          </div>
        )}

        {activeTab === 'terminal' && (
          <TerminalMockup
            title={`${desktopTitle} • Test Runner`}
            command={terminalCommand}
            output={terminalOutput}
          />
        )}
      </div>
    </div>
  );
};
