import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { UI_TRANSLATIONS } from '../data/translations';

export const Capabilities: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];

  return (
    <section id="capabilities" className="py-20 md:py-32 border-t border-slate-200/80 bg-aurora-section">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-8 border-b border-slate-200/80 gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#5E6AD2] shadow-[0_0_8px_#5E6AD2]" />
              <span className="label-caps text-[#5E6AD2]">
                {t.capabilities.badge}
              </span>
            </div>
            <h2 className="display-lg text-[#0B0E17] uppercase tracking-tight">
              {t.capabilities.title}
            </h2>
          </div>
          <p className="body-md text-[#64748B] max-w-md md:text-right font-normal leading-relaxed">
            {t.capabilities.subtitle}
          </p>
        </div>

        {/* Linear Bento Grid */}
        <div className="space-y-6">
          
          {/* Row 1: Core Tools (Wide) + Architecture (Narrow) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Card 1: Data & Technical Tools */}
            <div className="lg:col-span-7 p-8 md:p-10 linear-card flex flex-col justify-between">
              <div>
                {/* Tech Badges with Clear Labels */}
                <div className="flex items-center flex-wrap gap-2.5 mb-8">
                  {[
                    { label: '.NET / C#', icon: '🔷' },
                    { label: 'Java', icon: '☕' },
                    { label: 'Node.js / TS', icon: '⚡' },
                    { label: 'SQL Server', icon: '🗄️' },
                    { label: 'PostgreSQL', icon: '🐘' },
                    { label: 'Redis', icon: '🔴' },
                    { label: 'RabbitMQ', icon: '🐰' },
                    { label: 'Docker', icon: '🐳' },
                    { label: 'Python', icon: '🐍' },
                  ].map((tech, idx) => (
                    <div
                      key={idx}
                      className="px-3.5 py-2 border border-slate-200/90 bg-white hover:bg-[#5E6AD2]/10 hover:border-[#5E6AD2] rounded-xl flex items-center gap-2 text-xs font-semibold text-[#0B0E17] transition-all duration-200 cursor-default shadow-xs"
                    >
                      <span className="text-base">{tech.icon}</span>
                      <span className="font-mono font-medium">{tech.label}</span>
                    </div>
                  ))}
                </div>

                <h3 className="font-heading text-2xl font-bold text-[#0B0E17] mb-3">
                  {language === 'vi' ? 'Công cụ Kỹ thuật Trọng tâm' : 'Core & Technical Tools'}
                </h3>
                <p className="body-md text-[#475569] font-normal leading-relaxed">
                  {language === 'vi'
                    ? 'Làm chủ toàn bộ chuỗi phát triển Backend — từ thiết kế kiến trúc phân tán, chiến lược lưu đệm cache, đến tối ưu hóa truy vấn cơ sở dữ liệu và đóng gói triển khai Docker.'
                    : 'Comfortable across the entire backend engineering chain — from distributed architecture design and caching strategies to database query optimization and containerized deployment.'}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 label-caps text-[10px] text-[#5E6AD2] font-bold">
                {language === 'vi' ? 'CÔNG NGHỆ THỰC CHIẾN • KIẾN TRÚC PHẦN MỀM SẠCH' : 'PRODUCTION STACK • CLEAN ARCHITECTURE'}
              </div>
            </div>

            {/* Card 2: Architecture & Distributed Systems */}
            <div className="lg:col-span-5 p-8 md:p-10 linear-card flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-2xl font-bold text-[#0B0E17] mb-6">
                  {language === 'vi' ? 'Kiến trúc & Hệ thống Phân tán' : 'Architecture & Distributed Systems'}
                </h3>

                {/* Pill Badges */}
                <div className="flex flex-wrap gap-2">
                  {[
                    language === 'vi' ? 'Kiến trúc Vi dịch vụ (Microservices)' : 'Microservices Architecture',
                    language === 'vi' ? 'Khóa phân tán (Redis Distributed Lock)' : 'Distributed Locking (Redis)',
                    language === 'vi' ? 'Hàng đợi thông điệp (RabbitMQ)' : 'Message Queuing (RabbitMQ)',
                    language === 'vi' ? 'Kiến trúc Hướng sự kiện (Event-Driven)' : 'Event-Driven Systems',
                    language === 'vi' ? 'Thiết kế API Gateway' : 'API Gateway Design',
                    language === 'vi' ? 'Kiểm soát Xung đột Đồng thời (Concurrency)' : 'Concurrency Control',
                    language === 'vi' ? 'Chuẩn RESTful API' : 'RESTful API Standards',
                  ].map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 border border-slate-200/80 bg-white text-xs font-semibold text-[#334155] rounded-xl hover:border-[#5E6AD2] hover:text-[#5E6AD2] hover:bg-[#5E6AD2]/5 transition-all cursor-default shadow-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 label-caps text-[10px] text-[#64748B]">
                {language === 'vi' ? 'XỬ LÝ CHỊU TẢI CAO • CHỊU LỖI PHÂN TÁN' : 'HIGH-THROUGHPUT • FAULT-TOLERANT'}
              </div>
            </div>

          </div>

          {/* Row 2: Databases (Narrow/Medium) + Domain Knowledge (Wide) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Card 3: Databases & Storage Infrastructure */}
            <div className="lg:col-span-6 p-8 md:p-10 linear-card flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-2xl font-bold text-[#0B0E17] mb-6">
                  {language === 'vi' ? 'Cơ sở Dữ liệu & Hạ tầng Lưu trữ' : 'Databases & Storage Infrastructure'}
                </h3>

                {/* Pill Badges */}
                <div className="flex flex-wrap gap-2">
                  {[
                    'SQL Server (T-SQL, CTEs)',
                    language === 'vi' ? 'Chuẩn hóa CSDL (3NF)' : 'Database Normalization (3NF)',
                    'PostgreSQL / PostGIS',
                    language === 'vi' ? 'Bộ nhớ đệm Redis (TTL)' : 'Redis In-Memory Cache (TTL)',
                    language === 'vi' ? 'Giao dịch Toàn vẹn ACID' : 'ACID Transactions & Isolation',
                    'Firebase Firestore & FCM',
                    language === 'vi' ? 'Tối ưu hóa Chỉ mục (Index)' : 'Index Optimization',
                  ].map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 border border-slate-200/80 bg-white text-xs font-semibold text-[#334155] rounded-xl hover:border-[#5E6AD2] hover:text-[#5E6AD2] hover:bg-[#5E6AD2]/5 transition-all cursor-default shadow-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 label-caps text-[10px] text-[#64748B]">
                {language === 'vi' ? 'BẢO TOÀN DỮ LIỆU • QUAN HỆ & PHI QUAN HỆ' : 'ZERO DATA LOSS • RELATIONAL & NOSQL'}
              </div>
            </div>

            {/* Card 4: Domain Knowledge & Complex Systems */}
            <div className="lg:col-span-6 p-8 md:p-10 linear-card flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-2xl font-bold text-[#0B0E17] mb-6">
                  {language === 'vi' ? 'Kiến thức Miền Nghiệp vụ' : 'Domain Knowledge'}
                </h3>

                {/* Pill Badges */}
                <div className="flex flex-wrap gap-2">
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
                      className="px-3.5 py-1.5 border border-slate-200/80 bg-white text-xs font-semibold text-[#334155] rounded-xl hover:border-[#5E6AD2] hover:text-[#5E6AD2] hover:bg-[#5E6AD2]/5 transition-all cursor-default shadow-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 label-caps text-[10px] text-[#64748B]">
                {language === 'vi' ? 'NGHIỆP VỤ HỆ THỐNG THỰC TẾ DOANH NGHIỆP' : 'REAL-WORLD PRODUCTION DOMAINS'}
              </div>
            </div>

          </div>

          {/* Row 3: Languages & Engineering Practices */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Card 5: Languages */}
            <div className="lg:col-span-4 p-8 md:p-10 linear-card flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-2xl font-bold text-[#0B0E17] mb-6">
                  {language === 'vi' ? 'Năng lực Ngôn ngữ' : 'Languages'}
                </h3>

                <div className="space-y-3">
                  <div className="px-4 py-3.5 border border-slate-200/80 bg-white rounded-xl shadow-xs">
                    <div className="text-xs font-bold text-[#0B0E17]">
                      {language === 'vi' ? 'Tiếng Anh (English)' : 'English'}
                    </div>
                    <div className="text-[12px] text-[#64748B] font-normal mt-0.5">
                      {language === 'vi' ? 'Sử dụng thành thạo trong môi trường làm việc chuyên nghiệp' : 'Professional Working Proficiency'}
                    </div>
                  </div>

                  <div className="px-4 py-3.5 border border-slate-200/80 bg-white rounded-xl shadow-xs">
                    <div className="text-xs font-bold text-[#0B0E17]">
                      {language === 'vi' ? 'Tiếng Việt (Vietnamese)' : 'Vietnamese'}
                    </div>
                    <div className="text-[12px] text-[#64748B] font-normal mt-0.5">
                      {language === 'vi' ? 'Tiếng mẹ đẻ (Native Speaker)' : 'Native Speaker'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 label-caps text-[10px] text-[#64748B]">
                {language === 'vi' ? 'SẴN SÀNG HỢP TÁC MÔI TRƯỜNG QUỐC TẾ' : 'GLOBAL COLLABORATION READY'}
              </div>
            </div>

            {/* Card 6: Engineering Practices & Delivery */}
            <div className="lg:col-span-8 p-8 md:p-10 linear-card flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-2xl font-bold text-[#0B0E17] mb-6">
                  {language === 'vi' ? 'Quy trình Kỹ thuật & Bàn giao Phần mềm' : 'Engineering Practices & Delivery'}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {[
                    language === 'vi' ? 'Quy trình Agile / Scrum' : 'Agile / Scrum Methodology',
                    language === 'vi' ? 'Quy trình Git & Monorepo' : 'Git & Monorepo Workflows',
                    language === 'vi' ? 'Tích hợp Đường ống CI/CD' : 'CI/CD Pipeline Integration',
                    language === 'vi' ? 'Mô hình hóa Kiến trúc Hệ thống' : 'System Design & Architecture Modeling',
                    language === 'vi' ? 'Đặc tả Hợp đồng API & Swagger' : 'API Contract & Swagger Documentation',
                    language === 'vi' ? 'Kiểm thử Tự động Unit & Integration' : 'Unit & Integration Testing',
                    language === 'vi' ? 'Nguyên lý Clean Code & SOLID' : 'Clean Code & SOLID Principles',
                    language === 'vi' ? 'Postman & Kiểm thử Tự động' : 'Postman & Automated Testing',
                  ].map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 border border-slate-200/80 bg-white text-xs font-semibold text-[#334155] rounded-xl hover:border-[#5E6AD2] hover:text-[#5E6AD2] hover:bg-[#5E6AD2]/5 transition-all cursor-default shadow-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 label-caps text-[10px] text-[#64748B]">
                {language === 'vi' ? 'QUY TRÌNH CHUẨN • HƯỚNG KIỂM THỬ VÀ ĐỘ TIN CẬY' : 'SDLC • TEST-DRIVEN & RELIABLE'}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
