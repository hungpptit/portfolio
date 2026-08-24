import { Project, SkillGroup, ExperienceItem } from '../types';
import { Language } from '../context/LanguageContext';

export interface PersonalInfoType {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  university: string;
  major: string;
  gpa: string;
  graduation: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  status: string;
  stats: { value: string; label: string }[];
}

export const PERSONAL_INFO: Record<Language, PersonalInfoType> = {
  vi: {
    name: "Phạm Tuấn Hưng",
    role: "Kỹ sư Phần mềm & Lập trình viên Backend (Software Engineer & Backend Developer)",
    tagline: "Cung cấp giải pháp kỹ thuật toàn diện, thiết kế kiến trúc backend tin cậy & tối ưu hiệu năng.",
    bio: "Software engineer & Backend developer tại TP. Hồ Chí Minh — chuyên cung cấp các giải pháp kỹ thuật và kiến trúc phần mềm tin cậy, biến các bài toán nghiệp vụ thực tế thành những hệ thống backend mượt mà, tối ưu hiệu năng, bảo mật và sẵn sàng mở rộng.",
    university: "Học viện Công nghệ Bưu chính Viễn thông (PTIT TP.HCM)",
    major: "Kỹ thuật Phần mềm (Software Engineering)",
    gpa: "3.2 / 4.0",
    graduation: "Dự kiến 2027",
    email: "phamtuanhung242004@gmail.com",
    phone: "0785535224",
    location: "TP. Hồ Chí Minh, Việt Nam",
    github: "https://github.com/hungpptit",
    linkedin: "https://linkedin.com/in/hungpptit",
    status: "Sẵn sàng tiếp nhận cơ hội Software Engineer / Backend Developer (Intern & Fresher)",
    stats: [
      { value: "1+", label: "Năm kinh nghiệm thực tế" },
      { value: "5+", label: "Hệ thống đã kiến trúc" },
      { value: "6+", label: "Vi dịch vụ (Microservices)" },
      { value: "3.2", label: "Điểm tích lũy GPA (PTIT)" },
    ]
  },
  en: {
    name: "Pham Tuan Hung",
    role: "Software Engineer & Backend Developer",
    tagline: "Delivering comprehensive engineering solutions, robust backend architecture & performance optimization.",
    bio: "Software engineer & Backend developer based in Ho Chi Minh City — delivering robust engineering solutions and reliable software architectures, turning real-world business requirements into high-performance, secure, and scalable backend systems.",
    university: "Posts and Telecommunications Institute of Technology (PTIT HCMC)",
    major: "Software Engineering",
    gpa: "3.2 / 4.0",
    graduation: "Expected 2027",
    email: "phamtuanhung242004@gmail.com",
    phone: "0785535224",
    location: "Ho Chi Minh City, Vietnam",
    github: "https://github.com/hungpptit",
    linkedin: "https://linkedin.com/in/hungpptit",
    status: "Available for Software Engineer / Backend Developer (Internship & Fresher roles)",
    stats: [
      { value: "1+", label: "Years practical exp" },
      { value: "5+", label: "Systems architected" },
      { value: "6+", label: "Microservices deployed" },
      { value: "3.2", label: "Cumulative GPA (PTIT)" },
    ]
  }
};

export const PROJECTS: Record<Language, Project[]> = {
  vi: [
    {
      id: "smart-logistics",
      title: "Smart Logistics Platform",
      subtitle: "Hệ thống điều vận và tối ưu hóa tuyến đường giao hàng tự động (Công ty TNHH CITARES)",
      description: "Nền tảng logistics cấp doanh nghiệp được thiết kế theo Kiến trúc phần mềm sạch (Clean Architecture) và Phương pháp thiết kế hướng miền (Domain-Driven Design - DDD), phát triển tại Công ty TNHH CITARES. Tự động hóa toàn bộ chuỗi cung ứng: gom hàng, phân loại kho, trung chuyển liên kho, tối ưu giao hàng chặng cuối bằng đường ống 4 thuật toán Trí tuệ nhân tạo (AI Pipeline) thuần TypeScript.",
      category: "backend",
      tags: ["Node.js / TypeScript", "PostgreSQL 15 / PostGIS", "Redis 7", "Socket.io", "Genetic Algorithm", "DBSCAN", "K-Means", "Hungarian Algorithm", "Prisma ORM", "RabbitMQ", "Docker", "Flutter"],
      architectureHighlights: [
        "Đường ống Trí tuệ nhân tạo (AI Pipeline) 4 thuật toán thuần TypeScript: DBSCAN → K-Means → Giải thuật Di truyền (GA) → Thuật toán ghép cặp Hungarian.",
        "Đường ống xử lý tọa độ định vị toàn cầu (GPS Telemetry) trên bộ nhớ đệm Redis tiếp nhận 1,321 điểm/giây với độ trễ P99 dưới 1 mili-giây.",
        "Kiến trúc 38 bảng cơ sở dữ liệu PostgreSQL chuẩn hóa bậc 3 (3NF), tách biệt thông tin cá nhân (PII), kiểm soát 17 trạng thái vòng đời đơn và đảm bảo tính toàn vẹn giao dịch (ACID).",
        "Vi dịch vụ tính toán AI độc lập (Dedicated AI Microservice) tách rời tải nặng qua hàng đợi thông điệp RabbitMQ.",
      ],
      metrics: "Hệ thống Doanh nghiệp • Giảm 58.2% quãng đường giao hàng",
      githubUrl: "https://github.com/hungpptit/smart-logistics-platform/tree/SWE_BE",
      demoUrl: "https://github.com/hungpptit/smart-logistics-platform/tree/SWE_BE",
      hasDetailPage: true
    },
    {
      id: "movie-ticket-booking",
      title: "Online Movie Ticket Booking System",
      subtitle: "Hệ thống đặt vé xem phim trực tuyến phân tán với giải pháp chống trùng ghế (Anti Double-Booking) — 6 Microservices · 9+ Design Patterns · 25/25 Unit Tests",
      description: "Nền tảng đặt vé xem phim trực tuyến phân tán dựa trên Kiến trúc Vi dịch vụ (Microservices) độc lập với 6 dịch vụ tự chủ (Database-per-Service). Giải quyết triệt để bài toán hàng ngàn người dùng cùng tranh chấp chọn một ghế tại cùng một thời điểm bằng Khóa phân tán (Redis Distributed Lock - Lệnh SET NX EX) TTL 10 phút. Áp dụng 9+ mẫu thiết kế hệ thống phân tán và đạt 25/25 Unit Tests (100%) trên 3 service.",
      category: "backend",
      featured: true,
      branch: "tree/SWE_BE_1",
      tags: ["Microservices", "Redis Distributed Lock", "RabbitMQ", "SQL Server", "Node.js / Express.js", "ZaloPay QR", "JWT Auth", "Jest Unit Tests", "React"],
      architectureHighlights: [
        "Kiến trúc Vi dịch vụ (Microservices) 6 dịch vụ tự chủ hoàn toàn (Database-per-Service): API Gateway (JWT Auth + Reverse Proxy), User, Movie (Cache-Aside Redis), Seat, Booking, Payment và Notification Service.",
        "Cơ chế Khóa phân tán (Redis Distributed Lock - Lệnh SET NX EX) TTL 10 phút ngăn chặn triệt để lỗi bán trùng ghế (Zero Double-Booking Race Condition); tự động fallback sang Pessimistic Lock cơ sở dữ liệu (Sequelize t.LOCK.UPDATE) khi Redis ngoại tuyến.",
        "Luồng thông báo bất đồng bộ: Booking Service phát sự kiện lên RabbitMQ Queue (ticket.notifications), Notification Service tiêu thụ độc lập — sinh QR Code vé và gửi email xác nhận qua Nodemailer không làm chậm luồng phản hồi chính.",
        "Tích hợp ZaloPay Sandbox Dynamic QR Code với xác thực chữ ký HMAC-SHA256 trên mọi Webhook callback. Đạt 25/25 Unit Tests (100% PASS) bằng Jest 29 trên Booking, Payment và Movie Service."
      ],
      metrics: "Zero Double-Booking · 25/25 Unit Tests · 9+ Design Patterns",
      githubUrl: "https://github.com/hungpptit/XEMPHIM/tree/SWE_BE_1",
      demoUrl: "https://github.com/hungpptit/XEMPHIM/tree/SWE_BE_1",
      hasDetailPage: true
    },
    {
      id: "toeic-ai-microservices",
      title: "TOEIC Learning & AI Chatbot Ecosystem",
      subtitle: "Hệ sinh thái luyện thi TOEIC — 6 Vi dịch vụ · Google Gemini 2.5 Flash · Python ML Pipeline · ZaloPay QR",
      description: "Hệ sinh thái học và luyện thi chứng chỉ TOEIC cấp sản xuất theo Kiến trúc Vi dịch vụ (6 dịch vụ độc lập, Database-per-Service) với 4 CSDL SQL Server 2022 cách ly hoàn toàn. Tích hợp Trợ lý Trí tuệ Nhân tạo Google Gemini 2.5 Flash hội thoại đa lượt có ngữ cảnh, Đường ống Học máy (Python Flask + scikit-learn) tự động huấn luyện lại hàng ngày lúc 2:00 AM để dự đoán điểm thi và chẩn đoán kỹ năng yếu, cùng Cổng thanh toán ZaloPay Dynamic QR xác thực chữ ký số HMAC-SHA256 chống giả mạo Webhook. Toàn bộ hệ thống gồm 9 Docker containers khởi động bằng 1 lệnh duy nhất với 55+ API endpoints có tài liệu Swagger/OpenAPI 3 tự động.",
      category: "ai",
      featured: false,
      branch: "tree/SWE_BE3",
      tags: ["Microservices", "Docker Compose", "Node.js 20", "SQL Server 2022", "Google Gemini AI", "Python ML", "ZaloPay QR", "RabbitMQ", "Flutter 3"],
      architectureHighlights: [
        "Kiến trúc 6 Vi dịch vụ tự chủ (Database-per-Service) với 4 CSDL SQL Server 2022 cách ly hoàn toàn qua Cổng API Nginx duy nhất, đóng gói đồng nhất 9 container bằng Docker Compose.",
        "Trợ lý AI Chatbot gia sư tiếng Anh tích hợp Google Gemini 2.5 Flash hỗ trợ hội thoại đa lượt có ngữ cảnh từ CSDL; cơ chế xoay vòng khóa API (Round-Robin Key Rotation) phân tán tải và VIP Check Middleware xuyên dịch vụ.",
        "Đường ống Học máy (Python Flask + scikit-learn) tự động huấn luyện lại hàng ngày lúc 2:00 AM (Cron Job) thu thập dữ liệu TestAttempts để dự đoán điểm TOEIC và phân tích kỹ năng yếu theo từng Part.",
        "Cổng thanh toán ZaloPay Sandbox Dynamic QR Code với xác thực chữ ký HMAC-SHA256 trên mọi Webhook callback, chống Replay Attack và tích lũy hạn VIP cộng dồn; hàng đợi RabbitMQ gửi email OTP & thông báo bất đồng bộ."
      ],
      metrics: "6 Microservices · 55+ Endpoints · 9 Containers · 51/51 Tests",
      githubUrl: "https://github.com/hungpptit/chatbot-toeic-flutter/tree/SWE_BE3",
      demoUrl: "https://github.com/hungpptit/chatbot-toeic-flutter/tree/SWE_BE3",
      hasDetailPage: true
    },
    {
      id: "smart-library",
      title: "Smart Library Management System",
      subtitle: "Hệ thống quản trị thư viện cấp doanh nghiệp · Giao dịch ACID · Hàng đợi FIFO · Máy trạng thái",
      description: "Hệ thống Quản lý Thư viện cấp doanh nghiệp (Enterprise-Grade LMS) xây dựng bằng NestJS + TypeORM. Giải quyết trọn vẹn bài toán: vòng đời mượn/trả sách theo Máy trạng thái (State Machine), hàng đợi duyệt FIFO, kiểm soát hạn ngạch 5 cuốn/độc giả, tính phạt tự động (Hỏng 50% | Mất 150%), đảm bảo toàn vẹn dữ liệu bằng Database Transactions (ACID) và Guarded Soft Delete. Đạt 95/95 Test Cases (100% PASS).",
      category: "backend",
      featured: false,
      tags: ["NestJS", "TypeORM", "TypeScript", "ACID Transactions", "FIFO Queue", "RBAC", "Jest 95 Tests", "SQL Server", "React"],
      architectureHighlights: [
        "Kiến trúc Module hóa Phân tầng (Controller → Service → Repository → Entity) với NestJS IoC Container và Dependency Injection.",
        "Giao dịch CSDL nguyên tử (ACID Transactions) bọc đồng thời FineLog + Loan Status + Book Inventory trong 1 transaction.",
        "Hàng đợi duyệt mượn FIFO Enforcement — bắt buộc duyệt theo thứ tự thời gian gửi yêu cầu, kèm tính năng queue_position thời gian thực.",
        "Xóa mềm có ràng buộc (Guarded Soft Delete) chặn 100% thao tác xóa sách/độc giả đang có giao dịch hoạt động."
      ],
      metrics: "95/95 Tests · ACID Transactions · FIFO Queue · Soft Delete Guard",
      githubUrl: "https://github.com/hungpptit/library-management-system/tree/SWE_BE4",
      demoUrl: "https://github.com/hungpptit/library-management-system/tree/SWE_BE4",
      hasDetailPage: true
    },
    {
      id: "tech-store-ecosystem",
      title: "Tech Store Android & Web Ecosystem",
      subtitle: "Hệ sinh thái bán lẻ công nghệ kết hợp Ứng dụng Di động Android & Bảng Quản trị Web",
      description: "Hệ sinh thái bán hàng công nghệ hoàn chỉnh gồm ứng dụng khách hàng di động Android Native (Java hướng đối tượng OOP) và Bảng điều khiển quản trị web (Next.js Dashboard) quản lý kho hàng và đơn hàng theo thời gian thực.",
      category: "mobile",
      featured: false,
      tags: ["Java (Android Studio)", "Next.js", "Firebase FCM", "Firestore", "Stripe Payment", "Tailwind CSS"],
      architectureHighlights: [
        "Ứng dụng Android chuẩn Lập trình hướng đối tượng (OOP) với mô hình kiến trúc MVC/MVVM và xử lý lưu đệm ngoại tuyến (Offline Caching).",
        "Tích hợp cổng thanh toán thẻ quốc tế Stripe API bảo mật cao.",
        "Hệ thống thông báo đẩy di động thời gian thực qua Firebase Cloud Messaging (FCM).",
        "Bảng điều khiển Web đồng bộ trạng thái đơn hàng và tồn kho tức thì."
      ],
      metrics: "Đồng bộ thời gian thực & Thanh toán quốc tế Stripe",
      githubUrl: "https://github.com/hungpptit/tech-store-mobile",
      demoUrl: "https://github.com/hungpptit/tech-store-mobile",
      hasDetailPage: true
    }
  ],
  en: [
    {
      id: "smart-logistics",
      title: "Smart Logistics Platform",
      subtitle: "Enterprise automated dispatching & AI route optimization system (CITARES Co., Ltd.)",
      description: "Enterprise-grade logistics platform engineered with Clean Architecture & Domain-Driven Design (DDD), deployed at CITARES Co., Ltd. Automates end-to-end supply chain execution: pickup dispatch, zone sorting, line-haul transfers, and last-mile route optimization via a pure TypeScript 4-module AI pipeline.",
      category: "backend",
      tags: ["Node.js / TypeScript", "PostgreSQL 15 / PostGIS", "Redis 7", "Socket.io", "Genetic Algorithm", "DBSCAN", "K-Means", "Hungarian Algorithm", "Prisma ORM", "RabbitMQ", "Docker", "Flutter"],
      architectureHighlights: [
        "Pure TypeScript 4-Module AI Pipeline: DBSCAN spatial clustering → K-Means capacity partition → Genetic Algorithm (GA) CVRP+VRPTW solver → Hungarian bipartite driver matching.",
        "Redis In-Memory GPS Telemetry pipeline handling 1,321 pings/sec with sub-millisecond P99 latency.",
        "38-table PostgreSQL 3NF schema featuring PII data separation, 17-state Order FSM, and strict ACID transaction guarantees.",
        "Dedicated AI Microservice offloading heavy computational workloads asynchronously via RabbitMQ queues.",
      ],
      metrics: "Enterprise Grade • –58.2% Total Travel Distance",
      githubUrl: "https://github.com/hungpptit/smart-logistics-platform/tree/SWE_BE",
      demoUrl: "https://github.com/hungpptit/smart-logistics-platform/tree/SWE_BE",
      hasDetailPage: true
    },
    {
      id: "movie-ticket-booking",
      title: "Online Movie Ticket Booking System",
      subtitle: "Distributed cinema booking platform — 6 Microservices · 9+ Design Patterns · 25/25 Unit Tests (100%)",
      description: "Distributed cinema ticket booking platform built on an autonomous Microservices architecture with 6 fully decoupled services (Database-per-Service pattern). Eliminates severe double-booking race conditions when thousands of users concurrently contend for the same seat using Redis Distributed Locking (atomic SET NX EX) with a 10-minute TTL. Implements 9+ distributed system design patterns and achieves 25/25 unit tests (100% pass rate) across 3 services using Jest 29.",
      category: "backend",
      featured: true,
      branch: "tree/SWE_BE_1",
      tags: ["Microservices", "Redis Distributed Lock", "RabbitMQ", "SQL Server", "Node.js / Express.js", "ZaloPay QR", "JWT Auth", "Jest Unit Tests", "React"],
      architectureHighlights: [
        "Fully autonomous 6-service Microservices architecture (Database-per-Service): API Gateway (JWT Auth + Reverse Proxy), User, Movie (Cache-Aside Redis), Seat, Booking, Payment, and Notification Service.",
        "Redis Distributed Locking (atomic SET NX EX) with 10-minute TTL guarantees Zero Double-Booking under extreme concurrency; auto-fallback to Sequelize Pessimistic DB Lock (t.LOCK.UPDATE) when Redis is offline.",
        "Event-Driven async notification pipeline: Booking Service publishes to RabbitMQ (ticket.notifications queue); Notification Service independently consumes — generates QR ticket image and dispatches confirmation email via Nodemailer without blocking the response path.",
        "ZaloPay Sandbox Dynamic QR Code payment integration with HMAC-SHA256 signature verification on all Webhook callbacks. Achieves 25/25 Unit Tests (100% PASS) via Jest 29 across Booking, Payment, and Movie Services."
      ],
      metrics: "Zero Double-Booking · 25/25 Unit Tests · 9+ Design Patterns",
      githubUrl: "https://github.com/hungpptit/XEMPHIM/tree/SWE_BE_1",
      demoUrl: "https://github.com/hungpptit/XEMPHIM/tree/SWE_BE_1",
      hasDetailPage: true
    },
    {
      id: "toeic-ai-microservices",
      title: "TOEIC Learning & AI Chatbot Ecosystem",
      subtitle: "TOEIC Preparation Ecosystem — 6 Microservices · Google Gemini 2.5 Flash · Python ML Pipeline · ZaloPay QR",
      description: "Production-grade TOEIC certification learning platform engineered with a Microservices architecture (6 independent services, Database-per-Service pattern) and 4 isolated SQL Server 2022 databases behind an Nginx API Gateway. Features a Google Gemini 2.5 Flash AI Chatbot with database-persisted multi-turn context, a Python Flask + scikit-learn ML pipeline with automated daily retraining at 2:00 AM for score prediction and weak skill diagnosis, and a ZaloPay Dynamic QR payment gateway secured with HMAC-SHA256 signature verification. Spans 9 Docker containers deployable via single command, exposing 55+ RESTful API endpoints with Swagger/OpenAPI 3 documentation.",
      category: "ai",
      featured: false,
      branch: "tree/SWE_BE3",
      tags: ["Microservices", "Docker Compose", "Node.js 20", "SQL Server 2022", "Google Gemini AI", "Python ML", "ZaloPay QR", "RabbitMQ", "Flutter 3"],
      architectureHighlights: [
        "6 autonomous Microservices (Database-per-Service) with 4 isolated SQL Server 2022 databases behind a unified Nginx API Gateway, orchestrated via Docker Compose (9 containers).",
        "Google Gemini 2.5 Flash AI Tutoring Chatbot with multi-turn conversation context; Round-Robin API Key Rotation and VIP Check Middleware enforcing 15 msgs/day free tier limit across service boundaries.",
        "Python Flask + scikit-learn ML Pipeline with automated daily retraining at 2:00 AM (Cron Job) collecting TestAttempts data for score prediction and per-Part weak skill diagnosis.",
        "ZaloPay Sandbox Dynamic QR Code payment with HMAC-SHA256 signature verification on all Webhook callbacks, Replay Attack prevention, and cumulative VIP expiry extension; RabbitMQ async email worker."
      ],
      metrics: "6 Microservices · 55+ Endpoints · 9 Containers · 51/51 Tests",
      githubUrl: "https://github.com/hungpptit/chatbot-toeic-flutter/tree/SWE_BE3",
      demoUrl: "https://github.com/hungpptit/chatbot-toeic-flutter/tree/SWE_BE3",
      hasDetailPage: true
    },
    {
      id: "smart-library",
      title: "Smart Library Management System",
      subtitle: "Enterprise-Grade LMS · ACID Transactions · FIFO Queue · State Machine",
      description: "Enterprise-Grade Library Management System built with NestJS + TypeORM. Solves complex business challenges: loan lifecycle via State Machine, FIFO Queue Enforcement for fair borrow processing, quota control (max 5 active loans), automated penalty engine (Damaged 50% | Lost 150%), guaranteed data integrity through ACID Database Transactions and Guarded Soft Delete. Achieved 95/95 Test Cases (100% PASS rate).",
      category: "backend",
      featured: false,
      tags: ["NestJS", "TypeORM", "TypeScript", "ACID Transactions", "FIFO Queue", "RBAC", "Jest 95 Tests", "SQL Server", "React"],
      architectureHighlights: [
        "Layered Modular Architecture (Controller → Service → Repository → Entity) with NestJS IoC Container and Dependency Injection.",
        "ACID Database Transactions wrapping FineLog creation + Loan status transition + Book inventory adjustment in a single atomic operation.",
        "FIFO Queue Enforcement — forces chronological approval order for pending borrow requests, with real-time queue_position computation.",
        "Guarded Soft Delete blocking 100% of delete operations on books/readers with active loan transactions."
      ],
      metrics: "95/95 Tests · ACID Transactions · FIFO Queue · Soft Delete Guard",
      githubUrl: "https://github.com/hungpptit/library-management-system/tree/SWE_BE4",
      demoUrl: "https://github.com/hungpptit/library-management-system/tree/SWE_BE4",
      hasDetailPage: true
    },
    {
      id: "tech-store-ecosystem",
      title: "Tech Store Android & Web Ecosystem",
      subtitle: "Retail e-commerce ecosystem with Native Android Mobile App & Web Admin Dashboard",
      description: "Production-ready tech retail ecosystem comprising a native Android mobile application (OOP Java) for shoppers and a responsive Next.js Web Admin Dashboard for real-time inventory and order lifecycle tracking.",
      category: "mobile",
      featured: false,
      tags: ["Java (Android Studio)", "Next.js", "Firebase FCM", "Firestore", "Stripe Payment", "Tailwind CSS"],
      architectureHighlights: [
        "Native Android OOP implementation utilizing MVC/MVVM patterns with local SQLite/Room offline caching.",
        "Integrated Stripe Payment Gateway API for secure international credit card transactions.",
        "Real-time push notification and order tracking pipeline via Firebase Cloud Messaging (FCM).",
        "Reactive Next.js Web Admin Dashboard with instant inventory and revenue metrics synchronization."
      ],
      metrics: "Real-time Sync & International Stripe Checkout",
      githubUrl: "https://github.com/hungpptit/tech-store-mobile",
      demoUrl: "https://github.com/hungpptit/tech-store-mobile",
      hasDetailPage: true
    }
  ]
};

export const SKILL_GROUPS: Record<Language, SkillGroup[]> = {
  vi: [
    {
      category: "Phát triển Backend & Kiến trúc Hệ thống",
      description: "Xây dựng logic máy chủ vững chắc, kiến trúc vi dịch vụ (Microservices) và xử lý phân tán hiệu năng cao.",
      skills: [
        { name: "Node.js / Express.js / NestJS", level: "Trọng tâm", tag: "Chính" },
        { name: "Java (OOP / Lập trình Android)", level: "Trọng tâm", tag: "Chính" },
        { name: "TypeScript / JavaScript (ES6+)", level: "Trọng tâm", tag: "Chính" },
        { name: "C / C++ (Cấu trúc dữ liệu & Giải thuật)", level: "Thành thạo" },
        { name: "RESTful API / Webhooks", level: "Nâng cao" },
        { name: "Kiến trúc Vi dịch vụ (Microservices)", level: "Trọng tâm", tag: "Hệ thống" }
      ]
    },
    {
      category: "Cơ sở Dữ liệu, Bộ nhớ đệm & Hàng đợi Thông điệp",
      description: "Thiết kế mô hình dữ liệu, tối ưu hóa truy vấn, xử lý tranh chấp đồng thời và tác vụ bất đồng bộ.",
      skills: [
        { name: "SQL Server (T-SQL, Index, Window Functions)", level: "Nâng cao", tag: "CSDL" },
        { name: "PostgreSQL 15 / MySQL / PostGIS", level: "Thành thạo", tag: "CSDL" },
        { name: "Redis 7 (Distributed Lock, TTL, Cache)", level: "Trọng tâm", tag: "Hiệu năng cao" },
        { name: "RabbitMQ (Message Broker / Hàng đợi)", level: "Trọng tâm", tag: "Bất đồng bộ" },
        { name: "Google Firebase (Firestore, FCM, Auth)", level: "Thành thạo" }
      ]
    },
    {
      category: "Giao diện Web & Hệ sinh thái Ứng dụng Di động",
      description: "Phát triển giao diện người dùng hiện đại, tương thích đa thiết bị và chuyển động mượt mà.",
      skills: [
        { name: "React.js / Next.js", level: "Thành thạo", tag: "Web" },
        { name: "Flutter (Ngôn ngữ Dart)", level: "Thành thạo", tag: "Di động" },
        { name: "Android Studio (Ngôn ngữ Java thuần)", level: "Trọng tâm", tag: "Di động" },
        { name: "Tailwind CSS / Thiết kế giao diện hiện đại", level: "Nâng cao" }
      ]
    },
    {
      category: "Trí tuệ Nhân tạo, Công cụ & Quy trình Vận hành (DevOps)",
      description: "Tích hợp mô hình AI/NLP, quản lý mã nguồn và tự động hóa quy trình triển khai.",
      skills: [
        { name: "Google Gemini API & Tác tử Trí tuệ Nhân tạo (LLM Agents)", level: "Trọng tâm", tag: "AI" },
        { name: "Mô hình BERT / Xử lý Ngôn ngữ Tự nhiên (NLP)", level: "Thành thạo", tag: "AI" },
        { name: "Docker & Đóng gói Container", level: "Trọng tâm", tag: "DevOps" },
        { name: "Git / GitHub / GitHub Actions (CI/CD)", level: "Nâng cao", tag: "Tự động hóa" },
        { name: "Postman & Kiểm thử Giao diện API", level: "Nâng cao" }
      ]
    }
  ],
  en: [
    {
      category: "Backend & Distributed Systems",
      description: "Engineering server-side business logic, microservices architecture, and distributed concurrency control.",
      skills: [
        { name: "Node.js / Express.js / NestJS", level: "Core", tag: "Primary" },
        { name: "Java (OOP / Android Studio)", level: "Core", tag: "Primary" },
        { name: "TypeScript / JavaScript (ES6+)", level: "Core", tag: "Primary" },
        { name: "C / C++ (Algorithms & DSA)", level: "Proficient" },
        { name: "RESTful API / Webhooks", level: "Advanced" },
        { name: "Microservices Architecture", level: "Core", tag: "Architecture" }
      ]
    },
    {
      category: "Databases, Caching & Message Queuing",
      description: "Relational data modeling, query optimization, high-throughput caching, and async pipelines.",
      skills: [
        { name: "SQL Server (T-SQL, Indexing, Window Func)", level: "Advanced", tag: "RDBMS" },
        { name: "PostgreSQL 15 / MySQL / PostGIS", level: "Proficient", tag: "RDBMS" },
        { name: "Redis 7 (Distributed Lock, TTL, Cache)", level: "Core", tag: "High Perf" },
        { name: "RabbitMQ (Message Broker / Queue)", level: "Core", tag: "Async" },
        { name: "Google Firebase (Firestore, FCM, Auth)", level: "Proficient" }
      ]
    },
    {
      category: "Web Frontend & Mobile Ecosystem",
      description: "Building responsive, modern, and fluid user interfaces across desktop browsers and mobile devices.",
      skills: [
        { name: "React.js / Next.js", level: "Proficient", tag: "Web" },
        { name: "Flutter (Dart Language)", level: "Proficient", tag: "Mobile" },
        { name: "Android Studio (Native Java)", level: "Core", tag: "Mobile" },
        { name: "Tailwind CSS / Glassmorphism UI", level: "Advanced" }
      ]
    },
    {
      category: "AI Engineering, DevOps & Toolchain",
      description: "Integrating LLM / NLP agents, source versioning, containerization, and automated workflows.",
      skills: [
        { name: "Google Gemini API & LLM Agents", level: "Core", tag: "AI" },
        { name: "BERT / Natural Language Processing (NLP)", level: "Proficient", tag: "AI" },
        { name: "Docker & Containerization", level: "Core", tag: "DevOps" },
        { name: "Git / GitHub / GitHub Actions (CI/CD)", level: "Advanced", tag: "Automation" },
        { name: "Postman & Automated API Testing", level: "Advanced" }
      ]
    }
  ]
};

export const EXPERIENCE_MILESTONES: Record<Language, ExperienceItem[]> = {
  vi: [
    {
      period: "Tháng 06/2026 - Hiện tại",
      role: "Lập trình viên Backend & Kỹ sư Tối ưu hóa Tuyến đường (Backend Developer)",
      organization: "Công ty TNHH CITARES (CITARES Co., Ltd.)",
      location: "TP. Hồ Chí Minh, Việt Nam",
      description: "Phát triển hệ thống điều vận thông minh Smart Logistics Platform (SLP), tự động hóa tối ưu hóa tuyến đường xe giao hàng và xây dựng các dịch vụ backend xử lý dữ liệu định vị địa lý không gian thời gian thực.",
      highlights: [
        "Xây dựng đường ống Trí tuệ nhân tạo (AI Pipeline) 4 thuật toán thuần TypeScript (DBSCAN → K-Means → Giải thuật Di truyền GA → Thuật toán Hungarian) giúp giảm 58.2% tổng quãng đường di chuyển.",
        "Thiết kế cấu trúc 38 bảng cơ sở dữ liệu PostgreSQL chuẩn hóa bậc 3 (3NF) với cơ chế tách biệt thông tin cá nhân (PII), kiểm soát 17 trạng thái đơn hàng (FSM) và kiến trúc phần mềm sạch (Clean Architecture).",
        "Xây dựng đường ống xử lý định vị GPS trên bộ nhớ đệm Redis đạt thông lượng 1,321 điểm tọa độ/giây với độ trễ P99 dưới 1 mili-giây.",
      ]
    },
    {
      period: "2023 - 2027 (Dự kiến)",
      role: "Sinh viên ngành Kỹ thuật Phần mềm (Software Engineering)",
      organization: "Học viện Công nghệ Bưu chính Viễn thông (PTIT TP.HCM)",
      location: "TP. Hồ Chí Minh, Việt Nam",
      description: "Chuyên sâu vào kiến trúc phần mềm, cấu trúc dữ liệu và giải thuật, mạng máy tính, hệ quản trị cơ sở dữ liệu và quy trình phát triển phần mềm chuyên nghiệp.",
      highlights: [
        "Điểm trung bình tích lũy học tập (GPA): 3.2 / 4.0",
        "Thực hiện thành công 5+ hệ thống phân tán, ứng dụng web và di động thực tế tại doanh nghiệp và trường học.",
        "Định hướng nghề nghiệp: Kỹ sư Phần mềm & Lập trình viên Backend (Software Engineer & Backend Developer).",
      ]
    }
  ],
  en: [
    {
      period: "June 2026 - Present",
      role: "Backend Developer & Route Optimization Engineer",
      organization: "CITARES Co., Ltd.",
      location: "Ho Chi Minh City, Vietnam",
      description: "Engineering the Smart Logistics Platform (SLP), automating fleet dispatching and route optimization while building real-time high-throughput geospatial backend microservices.",
      highlights: [
        "Engineered a pure TypeScript 4-module AI Pipeline (DBSCAN → K-Means → Genetic Algorithm GA → Hungarian Algorithm) reducing fleet transit distance by 58.2%.",
        "Architected a 38-table PostgreSQL 3NF schema featuring PII data separation, 17-state Order FSM, and Clean Architecture layer isolation.",
        "Built a Redis In-Memory GPS Telemetry pipeline handling 1,321 coordinates/sec with sub-millisecond P99 latency.",
      ]
    },
    {
      period: "2023 - 2027 (Expected)",
      role: "Software Engineering Student",
      organization: "Posts and Telecommunications Institute of Technology (PTIT HCMC)",
      location: "Ho Chi Minh City, Vietnam",
      description: "Focused on software architecture, data structures & algorithms, computer networking, relational database engineering, and professional agile software development.",
      highlights: [
        "Cumulative Grade Point Average (GPA): 3.2 / 4.0",
        "Successfully engineered 5+ production-grade distributed systems, web platforms, and mobile apps.",
        "Career trajectory: Software Engineer / Backend Developer.",
      ]
    }
  ]
};
