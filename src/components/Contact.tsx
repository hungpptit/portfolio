import React, { useState } from 'react';
import { Copy, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
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
              SECTION 04 — COMMENCE A DIALOGUE
            </span>
          </div>
          <h2 className="display-lg text-[#e4e2e1]">
            Initiate Connection
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="body-lg text-[#c4c7c7] font-light leading-relaxed mb-10">
                Currently open to select <strong className="text-[#e4e2e1] font-medium">Software Engineer</strong> and <strong className="text-[#e4e2e1] font-medium">Backend Developer</strong> opportunities. Whether discussing distributed systems or exploring potential collaboration, inquiries are welcome.
              </p>

              <div className="space-y-4">
                {/* Email Box */}
                <div
                  onClick={handleCopyEmail}
                  className="p-6 border border-[#2a2a2a] bg-[#161616] hover:bg-[#1c1c1c] hover:border-[#D4AF37] transition-all duration-300 cursor-pointer flex items-center justify-between group"
                >
                  <div>
                    <span className="label-caps text-[#8e9192] text-[10px] block mb-1">
                      PRIMARY ELECTRONIC MAIL
                    </span>
                    <div className="font-serif-editorial text-lg text-[#e4e2e1] group-hover:text-[#D4AF37] transition-colors">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                  <div className="text-xs text-[#8e9192] group-hover:text-[#D4AF37]">
                    {copiedEmail ? (
                      <span className="label-caps text-[10px] text-[#D4AF37]">COPIED</span>
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
                      DIRECT CELLULAR & TELEGRAM
                    </span>
                    <div className="font-serif-editorial text-lg text-[#e4e2e1] group-hover:text-[#D4AF37] transition-colors">
                      {PERSONAL_INFO.phone}
                    </div>
                  </div>
                  <div className="text-xs text-[#8e9192] group-hover:text-[#D4AF37]">
                    {copiedPhone ? (
                      <span className="label-caps text-[10px] text-[#D4AF37]">COPIED</span>
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </div>
                </div>

                {/* Location */}
                <div className="p-6 border border-[#2a2a2a] bg-[#161616]">
                  <span className="label-caps text-[#8e9192] text-[10px] block mb-1">
                    PRIMARY BASE
                  </span>
                  <div className="font-serif-editorial text-lg text-[#e4e2e1]">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-[#2a2a2a] flex items-center gap-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 label-caps text-[11px] text-[#8e9192] hover:text-[#D4AF37] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GITHUB / HUNG PPTIT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Minimalist Bottom-Border Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-12 border border-[#2a2a2a] bg-[#161616]">
              <span className="label-caps text-[#8e9192] text-[10px] block mb-2">
                TRANSMISSION DISPATCH
              </span>
              <h3 className="headline-md text-[#e4e2e1] mb-8">
                Send a Direct Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="label-caps text-[#8e9192] text-[10px] block mb-2">
                    YOUR NAME OR ORGANIZATION
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Engineering Lead / Technical Recruiter"
                    className="input-editorial"
                  />
                </div>

                <div>
                  <label className="label-caps text-[#8e9192] text-[10px] block mb-2">
                    YOUR ELECTRONIC MAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.com"
                    className="input-editorial"
                  />
                </div>

                <div>
                  <label className="label-caps text-[#8e9192] text-[10px] block mb-2">
                    MESSAGE / PROJECT SCOPE
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Outline your engineering requirement or inquiry..."
                    className="input-editorial resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="btn-gold-outline w-full py-4 text-xs tracking-[0.2em]"
                >
                  {isSubmitted ? 'MESSAGE TRANSMITTED WITH SUCCESS' : 'TRANSMIT INQUIRY'}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
