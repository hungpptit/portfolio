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
      className={`inline-flex items-center p-0.5 border border-[#2a2a2a] bg-[#141414] rounded-full transition-all duration-300 ${className}`}
      role="group"
      aria-label="Language selector"
    >
      {showIcon && (
        <span className="pl-2 pr-1 text-[#8e9192]">
          <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
        </span>
      )}
      <button
        type="button"
        onClick={() => setLanguage('vi')}
        className={`px-2.5 py-1 text-xs font-mono font-bold rounded-full transition-all duration-200 ${
          language === 'vi'
            ? 'bg-[#D4AF37] text-[#0e0e0e] shadow-sm'
            : 'text-[#8e9192] hover:text-[#e4e2e1]'
        }`}
        title="Tiếng Việt"
      >
        VI
      </button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 text-xs font-mono font-bold rounded-full transition-all duration-200 ${
          language === 'en'
            ? 'bg-[#D4AF37] text-[#0e0e0e] shadow-sm'
            : 'text-[#8e9192] hover:text-[#e4e2e1]'
        }`}
        title="English"
      >
        EN
      </button>
    </div>
  );
};
