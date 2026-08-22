import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { UI_TRANSLATIONS } from '../data/translations';

export const Capabilities: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];

  return (
    <section id="capabilities" className="py-24 md:py-36 border-t border-[#2a2a2a] bg-[#111111]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20">
        
        {/* Section Header with Left Title and Right Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#2a2a2a] gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-1.5 h-1.5 bg-[#D4AF37]" />
              <span className="label-caps text-[#D4AF37]">
                {t.capabilities.badge}
              </span>
            </div>
            <h2 className="display-lg text-[#e4e2e1] uppercase tracking-tight">
              {t.capabilities.title}
            </h2>
          </div>
          <p className="body-md text-[#8e9192] max-w-md md:text-right font-light leading-relaxed">
            {t.capabilities.subtitle}
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="space-y-6">
          
          {/* Row 1: Core Tools (Wide) + Architecture (Narrow) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Card 1: Data & Technical Tools */}
            <div className="lg:col-span-7 p-8 md:p-10 border border-[#2a2a2a] bg-[#161616] flex flex-col justify-between group hover:border-[#444748] transition-all duration-300">
              <div>
                {/* Tech Badges Icon Row */}
                <div className="flex items-center flex-wrap gap-3 mb-8">
                  {[
                    { label: 'Java', icon: '☕' },
                    { label: 'Node / TS', icon: '⚡' },
                    { label: 'SQL Server', icon: '🗄️' },
                    { label: 'Redis', icon: '🔴' },
                    { label: 'RabbitMQ', icon: '🐰' },
                    { label: 'Docker', icon: '🐳' },
                    { label: 'Python', icon: '🐍' },
                    { label: 'C++', icon: '⚙️' },
                  ].map((tech, idx) => (
                    <div
                      key={idx}
                      className="w-11 h-11 border border-[#2a2a2a] bg-[#1d1d1d] hover:bg-[#252525] hover:border-[#D4AF37] flex items-center justify-center text-base transition-all cursor-default"
                      title={tech.label}
                    >
                      <span>{tech.icon}</span>
                    </div>
                  ))}
                </div>

                <h3 className="font-serif-editorial text-2xl font-bold text-[#e4e2e1] mb-3">
                  {language === 'vi' ? 'Công cụ Kỹ thuật Trọng tâm' : 'Core & Technical Tools'}
                </h3>
                <p className="body-md text-[#8e9192] font-light leading-relaxed">
                  {language === 'vi'
                    ? 'Làm chủ toàn bộ chuỗi phát triển Backend — từ thiết kế kiến trúc phân tán, chiến lược lưu đệm cache, đến tối ưu hóa truy vấn cơ sở dữ liệu và đóng gói triển khai Docker.'
                    : 'Comfortable across the entire backend engineering chain — from distributed architecture design and caching strategies to database query optimization and containerized deployment.'}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#222222] label-caps text-[9px] text-[#D4AF37]">
                PRODUCTION STACK • CLEAN ARCHITECTURE
              </div>
            </div>

            {/* Card 2: Architecture & Distributed Systems */}
            <div className="lg:col-span-5 p-8 md:p-10 border border-[#2a2a2a] bg-[#161616] flex flex-col justify-between group hover:border-[#444748] transition-all duration-300">
              <div>
                <h3 className="font-serif-editorial text-2xl font-bold text-[#e4e2e1] mb-6">
                  {language === 'vi' ? 'Kiến trúc & Hệ thống Phân tán' : 'Architecture & Distributed Systems'}
                </h3>

                {/* Pill Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {[
                    'Microservices Architecture',
                    'Distributed Locking (Redis)',
                    'Message Queuing (RabbitMQ)',
                    'Event-Driven Systems',
                    'API Gateway Design',
                    'Concurrency Control',
                    'RESTful API Standards',
                  ].map((item, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 border border-[#2a2a2a] bg-[#1c1c1c] text-xs font-medium text-[#e4e2e1] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#222222] label-caps text-[9px] text-[#8e9192]">
                HIGH-THROUGHPUT • FAULT-TOLERANT
              </div>
            </div>

          </div>

          {/* Row 2: Databases (Narrow/Medium) + Domain Knowledge (Wide) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Card 3: Databases & Storage Infrastructure */}
            <div className="lg:col-span-6 p-8 md:p-10 border border-[#2a2a2a] bg-[#161616] flex flex-col justify-between group hover:border-[#444748] transition-all duration-300">
              <div>
                <h3 className="font-serif-editorial text-2xl font-bold text-[#e4e2e1] mb-6">
                  {language === 'vi' ? 'Cơ sở Dữ liệu & Hạ tầng Lưu trữ' : 'Databases & Storage Infrastructure'}
                </h3>

                {/* Pill Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {[
                    'SQL Server (T-SQL, CTEs)',
                    'Database Normalization (3NF)',
                    'PostgreSQL / PostGIS',
                    'Redis In-Memory Cache (TTL)',
                    'ACID Transactions & Isolation',
                    'Firebase Firestore & FCM',
                    'Index Optimization',
                  ].map((item, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 border border-[#2a2a2a] bg-[#1c1c1c] text-xs font-medium text-[#e4e2e1] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#222222] label-caps text-[9px] text-[#8e9192]">
                ZERO DATA LOSS • RELATIONAL & NOSQL
              </div>
            </div>

            {/* Card 4: Domain Knowledge & Complex Systems */}
            <div className="lg:col-span-6 p-8 md:p-10 border border-[#2a2a2a] bg-[#161616] flex flex-col justify-between group hover:border-[#444748] transition-all duration-300">
              <div>
                <h3 className="font-serif-editorial text-2xl font-bold text-[#e4e2e1] mb-6">
                  {language === 'vi' ? 'Kiến thức Miền Nghiệp vụ' : 'Domain Knowledge'}
                </h3>

                {/* Pill Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {[
                    language === 'vi' ? 'Đặt vé Phim Chịu tải Cao' : 'High-Traffic Ticketing',
                    language === 'vi' ? 'Định tuyến Logistics & VRP' : 'Logistics & Route Optimization (VRP)',
                    language === 'vi' ? 'Thương mại Điện tử Thời gian thực' : 'Real-Time Retail Ecosystems',
                    language === 'vi' ? 'Trợ lý Trí tuệ Nhân tạo Đa tác tử' : 'Multi-Agent AI Chatbots',
                    language === 'vi' ? 'Nhận diện Ý định Người dùng (BERT)' : 'NLP & Intent Recognition (BERT)',
                    language === 'vi' ? 'AI Nhúng & Thiết bị Cạnh (ESP32)' : 'Embedded & Edge AI (ESP32 / TFLite)',
                    language === 'vi' ? 'Cổng thanh toán Stripe & ZaloPay QR' : 'Stripe & ZaloPay QR Payments',
                  ].map((item, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 border border-[#2a2a2a] bg-[#1c1c1c] text-xs font-medium text-[#e4e2e1] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#222222] label-caps text-[9px] text-[#8e9192]">
                REAL-WORLD PRODUCTION DOMAINS
              </div>
            </div>

          </div>

          {/* Row 3: Languages & Engineering Practices */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Card 5: Languages */}
            <div className="lg:col-span-4 p-8 md:p-10 border border-[#2a2a2a] bg-[#161616] flex flex-col justify-between group hover:border-[#444748] transition-all duration-300">
              <div>
                <h3 className="font-serif-editorial text-2xl font-bold text-[#e4e2e1] mb-6">
                  {language === 'vi' ? 'Năng lực Ngôn ngữ' : 'Languages'}
                </h3>

                <div className="space-y-3">
                  <div className="px-4 py-3 border border-[#2a2a2a] bg-[#1c1c1c]">
                    <div className="text-xs font-semibold text-[#e4e2e1]">
                      {language === 'vi' ? 'Tiếng Anh (English)' : 'English'}
                    </div>
                    <div className="text-[11px] text-[#8e9192] font-light mt-0.5">
                      {language === 'vi' ? 'Sử dụng thành thạo trong môi trường làm việc chuyên nghiệp' : 'Professional Working Proficiency'}
                    </div>
                  </div>

                  <div className="px-4 py-3 border border-[#2a2a2a] bg-[#1c1c1c]">
                    <div className="text-xs font-semibold text-[#e4e2e1]">
                      {language === 'vi' ? 'Tiếng Việt (Vietnamese)' : 'Vietnamese'}
                    </div>
                    <div className="text-[11px] text-[#8e9192] font-light mt-0.5">
                      {language === 'vi' ? 'Tiếng mẹ đẻ (Native Speaker)' : 'Native Speaker'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#222222] label-caps text-[9px] text-[#8e9192]">
                GLOBAL COLLABORATION READY
              </div>
            </div>

            {/* Card 6: Engineering Practices & Delivery */}
            <div className="lg:col-span-8 p-8 md:p-10 border border-[#2a2a2a] bg-[#161616] flex flex-col justify-between group hover:border-[#444748] transition-all duration-300">
              <div>
                <h3 className="font-serif-editorial text-2xl font-bold text-[#e4e2e1] mb-6">
                  {language === 'vi' ? 'Quy trình Kỹ thuật & Bàn giao Phần mềm' : 'Engineering Practices & Delivery'}
                </h3>

                <div className="flex flex-wrap gap-2.5">
                  {[
                    'Agile / Scrum Methodology',
                    'Git & Monorepo Workflows',
                    'CI/CD Pipeline Integration',
                    'System Design & Architecture Modeling',
                    'API Contract & Swagger Documentation',
                    'Unit & Integration Testing',
                    'Clean Code & SOLID Principles',
                    'Postman & Automated Testing',
                  ].map((item, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 border border-[#2a2a2a] bg-[#1c1c1c] text-xs font-medium text-[#c4c7c7] hover:text-[#e4e2e1] hover:border-[#D4AF37] transition-all cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#222222] label-caps text-[9px] text-[#8e9192]">
                SDLC • TEST-DRIVEN & RELIABLE
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
