import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  className?: string;
  showIcon?: boolean;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ className = '', showIcon = true }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center p-0.5 border border-slate-200/90 bg-white/90 backdrop-blur-md rounded-full shadow-xs transition-all duration-300 ${className}`}
      role="group"
      aria-label="Language selector"
    >
      {showIcon && (
        <span className="pl-2 pr-1 text-[#64748B]">
          <Globe className="w-3.5 h-3.5 text-[#5E6AD2]" />
        </span>
      )}
      <button
        type="button"
        onClick={() => setLanguage('vi')}
        className={`px-2.5 py-1 text-xs font-mono font-bold rounded-full transition-all duration-200 cursor-pointer ${
          language === 'vi'
            ? 'bg-gradient-to-r from-[#5E6AD2] to-[#4F46E5] text-white shadow-xs'
            : 'text-[#64748B] hover:text-[#0B0E17]'
        }`}
        title="Tiếng Việt"
      >
        VI
      </button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 text-xs font-mono font-bold rounded-full transition-all duration-200 cursor-pointer ${
          language === 'en'
            ? 'bg-gradient-to-r from-[#5E6AD2] to-[#4F46E5] text-white shadow-xs'
            : 'text-[#64748B] hover:text-[#0B0E17]'
        }`}
        title="English"
      >
        EN
      </button>
    </div>
  );
};
