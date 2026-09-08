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
    <section id="contact" className="py-20 md:py-32 border-t border-slate-200/80 bg-white/40">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20">
        
        {/* Section Header */}
        <div className="mb-14 pb-8 border-b border-slate-200/80">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#5E6AD2] shadow-[0_0_8px_#5E6AD2]" />
            <span className="label-caps text-[#5E6AD2]">
              {t.contact.badge}
            </span>
          </div>
          <h2 className="display-lg text-[#0B0E17]">
            {t.contact.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="body-lg text-[#334155] font-normal leading-relaxed mb-8">
                {t.contact.subtitle}
              </p>

              <div className="space-y-4">
                {/* Email Box */}
                <div
                  onClick={handleCopyEmail}
                  className="p-6 linear-card cursor-pointer flex items-center justify-between group"
                >
                  <div>
                    <span className="label-caps text-[#64748B] text-[10px] block mb-1 font-bold">
                      {language === 'vi' ? 'ĐỊA CHỈ THƯ ĐIỆN TỬ CHÍNH' : 'PRIMARY ELECTRONIC MAIL'}
                    </span>
                    <div className="font-heading text-lg font-bold text-[#0B0E17] group-hover:text-[#5E6AD2] transition-colors">
                      {info.email}
                    </div>
                  </div>
                  <div className="text-xs text-[#64748B] group-hover:text-[#5E6AD2]">
                    {copiedEmail ? (
                      <span className="label-caps text-[10px] text-[#5E6AD2] font-bold">
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
                  className="p-6 linear-card cursor-pointer flex items-center justify-between group"
                >
                  <div>
                    <span className="label-caps text-[#64748B] text-[10px] block mb-1 font-bold">
                      {language === 'vi' ? 'ĐIỆN THOẠI DI ĐỘNG & ZALO' : 'DIRECT CELLULAR & TELEGRAM'}
                    </span>
                    <div className="font-heading text-lg font-bold text-[#0B0E17] group-hover:text-[#5E6AD2] transition-colors">
                      {info.phone}
                    </div>
                  </div>
                  <div className="text-xs text-[#64748B] group-hover:text-[#5E6AD2]">
                    {copiedPhone ? (
                      <span className="label-caps text-[10px] text-[#5E6AD2] font-bold">
                        {language === 'vi' ? 'ĐÃ SAO CHÉP' : 'COPIED'}
                      </span>
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 mt-8 border-t border-slate-200/80 flex items-center gap-6">
              <a
                href={info.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs label-caps text-[#64748B] hover:text-[#5E6AD2] transition-colors font-bold"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GITHUB</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={info.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs label-caps text-[#64748B] hover:text-[#5E6AD2] transition-colors font-bold"
              >
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Communication Transmission Form */}
          <div className="lg:col-span-7 p-8 md:p-10 linear-card">
            {isSubmitted ? (
              <div className="py-14 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5E6AD2] to-[#4338CA] text-white rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm shadow-[#5E6AD2]/30">
                  <span className="w-3 h-3 rounded-full bg-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#0B0E17] mb-2">
                  {language === 'vi' ? 'Tin Nhắn Đã Được Gửi' : 'Transmission Dispatched'}
                </h3>
                <p className="body-md text-[#64748B] max-w-md mx-auto">
                  {t.contact.successMsg}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="label-caps text-[#475569] text-[10px] block mb-2 font-bold">
                    {t.contact.nameLabel.toUpperCase()}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-4 py-3.5 border border-slate-200 bg-white text-[#0B0E17] rounded-xl text-sm focus:outline-none focus:border-[#5E6AD2] focus:ring-3 focus:ring-[#5E6AD2]/15 transition-all placeholder:text-[#94A3B8]"
                  />
                </div>

                <div>
                  <label className="label-caps text-[#475569] text-[10px] block mb-2 font-bold">
                    {t.contact.emailLabel.toUpperCase()}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full px-4 py-3.5 border border-slate-200 bg-white text-[#0B0E17] rounded-xl text-sm focus:outline-none focus:border-[#5E6AD2] focus:ring-3 focus:ring-[#5E6AD2]/15 transition-all placeholder:text-[#94A3B8]"
                  />
                </div>

                <div>
                  <label className="label-caps text-[#475569] text-[10px] block mb-2 font-bold">
                    {t.contact.messageLabel.toUpperCase()}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full px-4 py-3.5 border border-slate-200 bg-white text-[#0B0E17] rounded-xl text-sm focus:outline-none focus:border-[#5E6AD2] focus:ring-3 focus:ring-[#5E6AD2]/15 transition-all placeholder:text-[#94A3B8] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-linear-primary w-full py-4 text-xs tracking-[0.14em]"
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
