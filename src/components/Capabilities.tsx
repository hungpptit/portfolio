import React from 'react';

export const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="py-24 md:py-36 border-t border-[#2a2a2a] bg-[#111111]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20">
        
        {/* Section Header with Left Title and Right Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#2a2a2a] gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-1.5 h-1.5 bg-[#D4AF37]" />
              <span className="label-caps text-[#D4AF37]">
                CORE TECHNICAL COMPETENCIES
              </span>
            </div>
            <h2 className="display-lg text-[#e4e2e1] uppercase tracking-tight">
              MY CAPABILITIES
            </h2>
          </div>
          <p className="body-md text-[#8e9192] max-w-md md:text-right font-light leading-relaxed">
            I am always looking to add more skills. <br className="hidden sm:inline" />
            Here’s what I bring to a build today.
          </p>
        </div>

        {/* Bento Grid Layout matching screenshot */}
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
                  Core & Technical Tools
                </h3>
                <p className="body-md text-[#8e9192] font-light leading-relaxed">
                  Comfortable across the entire backend engineering chain — from distributed architecture design and caching strategies to database query optimization and containerized deployment.
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
                  Architecture & Distributed Systems
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
                  Databases & Storage Infrastructure
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
                  Domain Knowledge
                </h3>

                {/* Pill Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {[
                    'High-Traffic Ticketing',
                    'Logistics & Route Optimization (VRP)',
                    'Real-Time Retail Ecosystems',
                    'Multi-Agent AI Chatbots',
                    'NLP & Intent Recognition (BERT)',
                    'Embedded & Edge AI (ESP32 / TFLite)',
                    'Stripe & ZaloPay QR Payments',
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

          {/* Row 3: Languages & Communication (Compact) + Engineering Practices */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Card 5: Languages */}
            <div className="lg:col-span-4 p-8 md:p-10 border border-[#2a2a2a] bg-[#161616] flex flex-col justify-between group hover:border-[#444748] transition-all duration-300">
              <div>
                <h3 className="font-serif-editorial text-2xl font-bold text-[#e4e2e1] mb-6">
                  Languages
                </h3>

                <div className="space-y-3">
                  <div className="px-4 py-3 border border-[#2a2a2a] bg-[#1c1c1c]">
                    <div className="text-xs font-semibold text-[#e4e2e1]">
                      English
                    </div>
                    <div className="text-[11px] text-[#8e9192] font-light mt-0.5">
                      Professional Working Proficiency
                    </div>
                  </div>

                  <div className="px-4 py-3 border border-[#2a2a2a] bg-[#1c1c1c]">
                    <div className="text-xs font-semibold text-[#e4e2e1]">
                      Vietnamese
                    </div>
                    <div className="text-[11px] text-[#8e9192] font-light mt-0.5">
                      Native Speaker
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
                  Engineering Practices & Delivery
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
