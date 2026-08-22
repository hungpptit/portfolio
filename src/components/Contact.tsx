import React, { useState } from 'react';
import { Copy, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { UI_TRANSLATIONS } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];
  const info = PERSONAL_INFO[language];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(info.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(info.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 md:py-36 border-t border-[#2a2a2a] bg-[#111111]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20">
        
        {/* Section Header */}
        <div className="mb-16 pb-8 border-b border-[#2a2a2a]">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-1.5 h-1.5 bg-[#D4AF37]" />
            <span className="label-caps text-[#D4AF37]">
              {t.contact.badge}
            </span>
          </div>
          <h2 className="display-lg text-[#e4e2e1]">
            {t.contact.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="body-lg text-[#c4c7c7] font-light leading-relaxed mb-10">
                {t.contact.subtitle}
              </p>

              <div className="space-y-4">
                {/* Email Box */}
                <div
                  onClick={handleCopyEmail}
                  className="p-6 border border-[#2a2a2a] bg-[#161616] hover:bg-[#1c1c1c] hover:border-[#D4AF37] transition-all duration-300 cursor-pointer flex items-center justify-between group"
                >
                  <div>
                    <span className="label-caps text-[#8e9192] text-[10px] block mb-1">
                      {language === 'vi' ? 'ĐỊA CHỈ THƯ ĐIỆN TỬ CHÍNH' : 'PRIMARY ELECTRONIC MAIL'}
                    </span>
                    <div className="font-serif-editorial text-lg text-[#e4e2e1] group-hover:text-[#D4AF37] transition-colors">
                      {info.email}
                    </div>
                  </div>
                  <div className="text-xs text-[#8e9192] group-hover:text-[#D4AF37]">
                    {copiedEmail ? (
                      <span className="label-caps text-[10px] text-[#D4AF37] font-bold">
                        {language === 'vi' ? 'ĐÃ SAO CHÉP' : 'COPIED'}
                      </span>
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </div>
                </div>

                {/* Phone Box */}
                <div
                  onClick={handleCopyPhone}
                  className="p-6 border border-[#2a2a2a] bg-[#161616] hover:bg-[#1c1c1c] hover:border-[#D4AF37] transition-all duration-300 cursor-pointer flex items-center justify-between group"
                >
                  <div>
                    <span className="label-caps text-[#8e9192] text-[10px] block mb-1">
                      {language === 'vi' ? 'ĐIỆN THOẠI DI ĐỘNG & ZALO' : 'DIRECT CELLULAR & TELEGRAM'}
                    </span>
                    <div className="font-serif-editorial text-lg text-[#e4e2e1] group-hover:text-[#D4AF37] transition-colors">
                      {info.phone}
                    </div>
                  </div>
                  <div className="text-xs text-[#8e9192] group-hover:text-[#D4AF37]">
                    {copiedPhone ? (
                      <span className="label-caps text-[10px] text-[#D4AF37] font-bold">
                        {language === 'vi' ? 'ĐÃ SAO CHÉP' : 'COPIED'}
                      </span>
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Ledger */}
            <div className="pt-8 mt-8 border-t border-[#222222] flex items-center gap-6">
              <a
                href={info.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs label-caps text-[#8e9192] hover:text-[#D4AF37] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GITHUB</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <a
                href={info.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs label-caps text-[#8e9192] hover:text-[#D4AF37] transition-colors"
              >
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Communication Transmission Form */}
          <div className="lg:col-span-7 p-8 md:p-12 border border-[#2a2a2a] bg-[#161616]">
            {isSubmitted ? (
              <div className="py-16 text-center">
                <div className="w-12 h-12 border border-[#D4AF37] flex items-center justify-center mx-auto mb-6">
                  <span className="w-3 h-3 bg-[#D4AF37]" />
                </div>
                <h3 className="font-serif-editorial text-2xl font-bold text-[#e4e2e1] mb-3">
                  {language === 'vi' ? 'Tin Nhắn Đã Được Gửi' : 'Transmission Dispatched'}
                </h3>
                <p className="body-md text-[#8e9192] max-w-md mx-auto">
                  {t.contact.successMsg}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="label-caps text-[#8e9192] text-[10px] block mb-2 font-bold">
                    {t.contact.nameLabel.toUpperCase()}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-5 py-4 border border-[#2a2a2a] bg-[#121212] text-[#e4e2e1] text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>

                <div>
                  <label className="label-caps text-[#8e9192] text-[10px] block mb-2 font-bold">
                    {t.contact.emailLabel.toUpperCase()}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full px-5 py-4 border border-[#2a2a2a] bg-[#121212] text-[#e4e2e1] text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>

                <div>
                  <label className="label-caps text-[#8e9192] text-[10px] block mb-2 font-bold">
                    {t.contact.messageLabel.toUpperCase()}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full px-5 py-4 border border-[#2a2a2a] bg-[#121212] text-[#e4e2e1] text-sm focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 border border-[#D4AF37] bg-[#D4AF37] text-[#121212] font-semibold label-caps text-xs hover:bg-[#e8c547] transition-colors duration-300 tracking-[0.2em]"
                >
                  {t.contact.sendBtn}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
