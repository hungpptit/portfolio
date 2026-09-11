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
    bio: "Sinh viên ngành Kỹ thuật Phần mềm tại Học viện Công nghệ Bưu chính Viễn thông (PTIT TP.HCM) với nền tảng cốt lõi về phát triển hệ thống Backend, kiến trúc phân tán và tự động hóa tích hợp AI. Có kinh nghiệm thiết kế cơ sở dữ liệu chuyên sâu (PostgreSQL, SQL Server), tối ưu API hiệu năng cao (Node.js, Spring Boot, Python) và tích hợp các mô hình ngôn ngữ lớn (Gemini LLM) vào bài toán thực tế. Sẵn sàng mang tư duy giải quyết vấn đề kỹ thuật và định hướng sản phẩm đóng góp cho các đội ngũ công nghệ năng động.",
    university: "Học viện Công nghệ Bưu chính Viễn thông (PTIT TP.HCM)",
    major: "Kỹ thuật Phần mềm (Software Engineering)",
    gpa: "3.2 / 4.0",
    graduation: "Dự kiến 2026",
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
    bio: "Software Engineering student at PTIT with a strong foundation in backend development, scalable architectures, and AI-integrated automation. Experienced in designing robust databases (PostgreSQL, SQL Server), optimizing high-performance APIs (Node.js, Spring Boot, Python), and integrating Large Language Model (LLM) APIs (Vertex AI/Gemini) into real-world workflows. Eager to bring strong technical problem-solving skills and a product-focused mindset to fast-paced engineering teams.",
    university: "Posts and Telecommunications Institute of Technology (PTIT HCMC)",
    major: "Software Engineering",
    gpa: "3.2 / 4.0",
    graduation: "Expected 2026",
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
      subtitle: "Hệ thống điều vận và tối ưu hóa tuyến đường giao hàng tự động",
      description: "Nền tảng logistics cấp doanh nghiệp phát triển tại CITARES Co., Ltd. Tự động hóa chuỗi cung ứng điều vận và tối ưu tuyến đường giao hàng qua đường ống giải thuật di truyền (GA) và xử lý GPS thời gian thực.",
      category: "backend",
      role: "Thực tập sinh Lập trình Fullstack (Fullstack Developer Intern)",
      image: "/assets/projects/smart-logistics/desktop.jpg",
      tags: ["Node.js / TypeScript", "PostgreSQL 15 / PostGIS", "Redis 7", "Socket.io", "Genetic Algorithm", "RabbitMQ", "Docker", "React SPA", "Flutter"],
      architectureHighlights: [
        "Tham gia hiện thực hóa đường ống 4 thuật toán tối ưu tuyến đường thuần TypeScript: DBSCAN → K-Means → Giải thuật Di truyền (GA) → Thuật toán ghép cặp Hungarian.",
        "Xây dựng đường ống xử lý tọa độ định vị toàn cầu (GPS Telemetry) trên bộ nhớ đệm Redis tiếp nhận 1,321 điểm/giây với độ trễ P99 dưới 1 mili-giây.",
        "Tham gia phát triển module Backend & RESTful API (Clean Architecture & DDD), thiết kế CSDL quan hệ PostgreSQL/PostGIS và hỗ trợ xây dựng React SPA Dispatcher Dashboard.",
        "Tích hợp dịch vụ tính toán định tuyến tách rời tải nặng qua hàng đợi thông điệp RabbitMQ.",
      ],
      metrics: "Hệ thống Doanh nghiệp • Giảm 58.2% quãng đường",
      isPrivateRepo: true,
      hasDetailPage: true
    },
    {
      id: "movie-ticket-booking",
      title: "Online Movie Ticket Booking System",
      subtitle: "Hệ thống đặt vé xem phim phân tán Microservices",
      description: "Nền tảng đặt vé xem phim trực tuyến xây dựng theo kiến trúc 6 Vi dịch vụ độc lập. Xử lý giữ ghế đồng thời bằng Khóa phân tán Redis, điều phối giao dịch thanh toán SAGA qua RabbitMQ và tích hợp ZaloPay Dynamic QR.",
      category: "backend",
      featured: true,
      branch: "tree/SWE_BE_1",
      role: "Trưởng nhóm Kỹ thuật & Thiết kế Hệ thống (Technical Lead & System Designer)",
      image: "/assets/projects/movie-ticket/demo2.png",
      tags: ["Node.js & Express", "React 18", "Microservices (6 Services)", "Redis Distributed Lock", "RabbitMQ SAGA", "SQL Server", "ZaloPay QR", "Docker Compose"],
      architectureHighlights: [
        "Kiến trúc 6 vi dịch vụ nghiệp vụ phía sau API Gateway (Database-per-Service): tách biệt User, Movie, Seat, Booking, Payment, Notification; loại bỏ liên kết cơ sở dữ liệu chéo (cross-service DB coupling).",
        "Khóa phân tán Redis (SET NX PX 120s) chống đặt trùng ghế dưới tải đồng thời cao (Concurrency Control), tự động fallback sang Pessimistic Lock tại CSDL khi Redis mất kết nối.",
        "Điều phối giao dịch SAGA Choreography qua RabbitMQ (Durable Queues & Message Persistence): xử lý sự kiện payment.successful và tự động hoàn tiền ZaloPay qua giao dịch bù trừ (Compensating Transaction) khi giữ vé thất bại.",
        "Tăng cường độ tin cậy và hiệu năng: Cấu hình Circuit Breaker (Opossum) tại Gateway ngăn lỗi dây chuyền; gắn Correlation ID (x-request-id) truy vết luồng; tối ưu Batch API, giảm network round trips từ O(N) xuống O(1) và Redis cache.",
      ],
      metrics: "Anti Double-Booking · SAGA Pattern · 25/25 Tests",
      githubUrl: "https://github.com/hungpptit/XEMPHIM/tree/SWE_BE_1",
      demoUrl: "https://xemphim-three.vercel.app/",
      hasDetailPage: true
    },
    {
      id: "toeic-ai-microservices",
      title: "TOEIC Learning & AI Chatbot Ecosystem",
      subtitle: "Hệ sinh thái học và luyện thi TOEIC thông minh",
      description: "Hệ sinh thái luyện thi TOEIC kết hợp kiến trúc Microservices và Trợ lý AI Gemini 2.5 Flash. Tích hợp mô hình học máy (ML) in-memory dự đoán điểm thi và quy trình kích hoạt VIP bất đồng bộ qua RabbitMQ.",
      category: "ai",
      featured: false,
      branch: "tree/SWE_BE3",
      role: "Trưởng nhóm Kỹ thuật & Thiết kế Hệ thống (Technical Lead & System Designer)",
      image: "/assets/projects/toeic-chatbot/desktop.png",
      tags: ["Google Gemini AI", "Python ML", "Node.js Microservices", "RabbitMQ", "SQL Server 2022", "Flutter 3", "Docker Compose"],
      architectureHighlights: [
        "Microservices & Database-per-Service: 6 application services độc lập (Auth, Quiz, Payment, Chatbot, Email, ML); mỗi service sở hữu dữ liệu riêng, loại bỏ hoàn toàn cross-database queries/joins; toàn bộ application stack đóng gói 9 containers qua Docker Compose.",
        "Event-Driven Processing: RabbitMQ AMQP xử lý workflow kích hoạt VIP và gửi email bất đồng bộ với cơ chế Ack/Nack, retry và synchronous HTTP fallback giúp tăng khả năng chịu lỗi của workflow.",
        "Stateless ML Inference: Python Flask + scikit-learn cung cấp endpoint POST /predict suy luận in-memory; Rule-based Fallback đảm bảo trả kết quả dự đoán ngay cả khi ML service ngắt kết nối, kèm Cron Job tự động huấn luyện lại.",
        "Context-Aware AI Chatbot: Gemini 2.5 Flash kết hợp dữ liệu ngữ cảnh đề thi từ Quiz Service thông qua internal REST API (/api/v1/internal/smart-context), hỗ trợ hội thoại đa lượt, fallback sang General-AI và cơ chế xoay vòng khóa API (Key Fallback).",
        "Payment Integration: ZaloPay Sandbox Dynamic QR với xác thực chữ ký HMAC-SHA256 kết hợp kiểm tra idempotency trạng thái giao dịch chống xử lý trùng lặp webhook callback."
      ],
      metrics: "Database-per-Service · Gemini AI · 51/51 Tests",
      githubUrl: "https://github.com/hungpptit/chatbot-toeic-flutter/tree/SWE_BE3",
      demoUrl: "https://github.com/hungpptit/chatbot-toeic-flutter/tree/SWE_BE3",
      hasDetailPage: true
    },
    {
      id: "smart-library",
      title: "Smart Library Management System",
      subtitle: "Hệ thống quản trị thư viện số cấp doanh nghiệp",
      description: "Hệ thống quản lý thư viện số hóa toàn diện quy trình mượn - trả sách. Đảm bảo toàn vẹn dữ liệu với giao dịch CSDL nguyên tử (ACID), hàng đợi duyệt FIFO tự động và cơ chế xóa mềm an toàn.",
      category: "backend",
      featured: false,
      branch: "tree/SWE_BE4",
      role: "Trưởng nhóm Kỹ thuật & Thiết kế Hệ thống (Technical Lead & System Designer)",
      image: "/assets/projects/smart-library/desktop.png",
      tags: ["NestJS 10", "TypeORM v0.3", "TypeScript 5", "PostgreSQL & MSSQL", "FIFO Queue", "ACID Transactions", "Jest 95 Tests"],
      architectureHighlights: [
        "Kiến trúc Module hóa Phân tầng (Controller → Service → Repository → Entity) với NestJS IoC Container và Dependency Injection.",
        "Giao dịch CSDL nguyên tử (ACID Transactions) bọc đồng thời FineLog + Loan Status + Book Inventory trong 1 transaction.",
        "Hàng đợi duyệt mượn FIFO Enforcement — bắt buộc duyệt theo thứ tự thời gian gửi yêu cầu, kèm tính năng queue_position thời gian thực.",
        "Xóa mềm có ràng buộc (Guarded Soft Delete) chặn 100% thao tác xóa sách/độc giả đang có giao dịch hoạt động."
      ],
      metrics: "ACID Transactions · FIFO Queue · 95/95 Tests",
      githubUrl: "https://github.com/hungpptit/library-management-system/tree/SWE_BE4",
      demoUrl: "https://library-management-system-frontend-three-beryl.vercel.app/",
      hasDetailPage: true
    },
    {
      id: "tech-store-ecosystem",
      title: "Tech Store Android & Web Ecosystem",
      subtitle: "Hệ sinh thái thương mại điện tử bán lẻ thiết bị công nghệ",
      description: "Hệ sinh thái bán lẻ đa nền tảng kết hợp ứng dụng Android Native (Java 11) và Web Admin React 18. Khóa tồn kho bi quan chống bán vượt Flash Sale và tích hợp cổng thanh toán quốc tế Stripe PCI-DSS.",
      category: "mobile",
      featured: false,
      branch: "tree/SWE_BE5",
      role: "Trưởng nhóm Kỹ thuật & Thiết kế Hệ thống (Technical Lead & System Designer)",
      image: "/assets/projects/tech-store/desktop.png",
      tags: ["Android (Java 11)", "Node.js 20 & Express", "React 18 & TypeScript", "Cloud Firestore", "Stripe SDK", "Firebase FCM"],
      architectureHighlights: [
        "Cơ chế khóa tồn kho bi quan (Pessimistic Reservation) bằng Firestore ACID Transactions với TTL 5 phút; Cron Worker giải phóng kho tự động mỗi 60s.",
        "Pipeline thanh toán thẻ quốc tế Stripe SDK bảo mật chuẩn PCI-DSS (Zero Raw Card Exposure); hoàn tất đơn hàng nguyên tử 4 bảng qua WriteBatch.",
        "Hộp thư CSKH đa kênh đồng bộ thời gian thực (Firestore onSnapshot độ trễ <100ms) kết hợp tự động phát thông báo đẩy Firebase FCM.",
        "Đạt 57/57 Test Cases (100% PASS Rate) trên cả Node.js Native Runner, Android JUnit 4 JVM và Jest 30 (100% Statements Coverage trên Web Admin Backend)."
      ],
      metrics: "Pessimistic Lock · Stripe Vault · 57/57 Tests",
      githubUrl: "https://github.com/hungpptit/tech-store-mobile",
      demoUrl: "https://github.com/hungpptit/tech-store-mobile",
      hasDetailPage: true
    }
  ],
  en: [
    {
      id: "smart-logistics",
      title: "Smart Logistics Platform",
      subtitle: "Enterprise automated dispatching & route optimization system",
      description: "Enterprise-grade logistics platform engineered at CITARES Co., Ltd. Automates supply chain dispatching and route optimization through a pure TypeScript genetic algorithm pipeline and real-time GPS telemetry.",
      category: "backend",
      role: "Fullstack Developer Intern",
      image: "/assets/projects/smart-logistics/desktop.jpg",
      tags: ["Node.js / TypeScript", "PostgreSQL 15 / PostGIS", "Redis 7", "Socket.io", "Genetic Algorithm", "RabbitMQ", "Docker", "React SPA", "Flutter"],
      architectureHighlights: [
        "Contributed to implementing the pure TypeScript 4-module route optimization pipeline: DBSCAN spatial clustering → K-Means capacity partition → Genetic Algorithm (GA) CVRP+VRPTW solver → Hungarian driver matching.",
        "Engineered high-throughput GPS Telemetry streaming over Redis in-memory cache, ingesting 1,321 coordinates/sec with sub-millisecond P99 latency.",
        "Participated in developing backend modules (Clean Architecture & DDD), relational PostgreSQL/PostGIS schema, and assisted in building the React SPA Dispatcher Dashboard.",
        "Integrated asynchronous route optimization workload offloading via RabbitMQ message queues.",
      ],
      metrics: "Enterprise Grade • –58.2% Travel Distance",
      isPrivateRepo: true,
      hasDetailPage: true
    },
    {
      id: "movie-ticket-booking",
      title: "Online Movie Ticket Booking System",
      subtitle: "Distributed Cinema Booking Platform (Microservices)",
      description: "Distributed cinema ticket booking platform built with 6 independent microservices. Handles concurrent seat booking via Redis Distributed Lock, coordinates SAGA transactions over RabbitMQ, and integrates ZaloPay QR.",
      category: "backend",
      featured: true,
      branch: "tree/SWE_BE_1",
      role: "Technical Lead & System Designer",
      image: "/assets/projects/movie-ticket/demo2.png",
      tags: ["Node.js & Express", "React 18", "Microservices (6 Services)", "Redis Distributed Lock", "RabbitMQ SAGA", "SQL Server", "ZaloPay QR", "Docker Compose"],
      architectureHighlights: [
        "6 business microservices behind a centralized API Gateway (Database-per-Service): User, Movie, Seat, Booking, Payment, Notification; eliminating cross-service database coupling.",
        "Redis Distributed Locking (atomic SET NX PX 120s) preventing double-booking under concurrent requests, with automatic fallback to database pessimistic transaction locking.",
        "Asynchronous SAGA Choreography over RabbitMQ (Durable Queues & Message Persistence): handles payment.successful and executes automated compensating refunds via ZaloPay API upon booking failures.",
        "Reliability & Latency Tuning: Configured Opossum Circuit Breakers at Gateway against cascading failures; end-to-end Distributed Tracing (x-request-id); Batch APIs reducing network round trips from O(N) down to O(1), and Redis caching.",
      ],
      metrics: "Anti Double-Booking · SAGA Pattern · 25/25 Tests",
      githubUrl: "https://github.com/hungpptit/XEMPHIM/tree/SWE_BE_1",
      demoUrl: "https://xemphim-three.vercel.app/",
      hasDetailPage: true
    },
    {
      id: "toeic-ai-microservices",
      title: "TOEIC Learning & AI Chatbot Ecosystem",
      subtitle: "AI-Powered TOEIC Examination Ecosystem",
      description: "Smart TOEIC preparation ecosystem uniting Microservices and Gemini 2.5 Flash AI Assistant. Features in-memory ML inference for score prediction and asynchronous VIP workflow over RabbitMQ.",
      category: "ai",
      featured: false,
      branch: "tree/SWE_BE3",
      role: "Technical Lead & System Designer",
      image: "/assets/projects/toeic-chatbot/desktop.png",
      tags: ["Google Gemini AI", "Python ML", "Node.js Microservices", "RabbitMQ", "SQL Server 2022", "Flutter 3", "Docker Compose"],
      architectureHighlights: [
        "Microservices & Database-per-Service: 6 independent application services (Auth, Quiz, Payment, Chatbot, Email, ML); each owning isolated data without cross-database queries/joins; entire application stack containerized across 9 Docker containers.",
        "Event-Driven Processing: RabbitMQ AMQP handles asynchronous VIP activation and email delivery with Ack/Nack, retry, and synchronous HTTP fallback to enhance workflow fault tolerance.",
        "Stateless ML Inference: Python Flask + scikit-learn exposes POST /predict for in-memory score and skill diagnosis; Rule-based Fallback guarantees continuous service during outages, with scheduled retraining Cron Jobs.",
        "Context-Aware AI Chatbot: Gemini 2.5 Flash integrates live TOEIC question context from Quiz Service via internal REST API (/api/v1/internal/smart-context), multi-turn conversations, General-AI fallback, and API Key Fallback Rotation.",
        "Payment Integration: ZaloPay Sandbox Dynamic QR with HMAC-SHA256 signature verification coupled with transaction idempotency checks preventing duplicate webhook processing."
      ],
      metrics: "Database-per-Service · Gemini AI · 51/51 Tests",
      githubUrl: "https://github.com/hungpptit/chatbot-toeic-flutter/tree/SWE_BE3",
      demoUrl: "https://github.com/hungpptit/chatbot-toeic-flutter/tree/SWE_BE3",
      hasDetailPage: true
    },
    {
      id: "smart-library",
      title: "Smart Library Management System",
      subtitle: "Enterprise LMS with ACID Transactions",
      description: "Enterprise library management system digitizing end-to-end circulation workflows. Guarantees absolute data integrity with ACID transactions, automated FIFO queue approval, and guarded soft deletes.",
      category: "backend",
      featured: false,
      branch: "tree/SWE_BE4",
      role: "Technical Lead & System Designer",
      image: "/assets/projects/smart-library/desktop.png",
      tags: ["NestJS 10", "TypeORM v0.3", "TypeScript 5", "PostgreSQL & MSSQL", "FIFO Queue", "ACID Transactions", "Jest 95 Tests"],
      architectureHighlights: [
        "Layered Modular Architecture (Controller → Service → Repository → Entity) with NestJS IoC Container and Dependency Injection.",
        "ACID Database Transactions wrapping FineLog creation + Loan status transition + Book inventory adjustment in a single atomic operation.",
        "FIFO Queue Enforcement — forces chronological approval order for pending borrow requests, with real-time queue_position computation.",
        "Guarded Soft Delete blocking 100% of delete operations on books/readers with active loan transactions."
      ],
      metrics: "ACID Transactions · FIFO Queue · 95/95 Tests",
      githubUrl: "https://github.com/hungpptit/library-management-system/tree/SWE_BE4",
      demoUrl: "https://library-management-system-frontend-three-beryl.vercel.app/",
      hasDetailPage: true
    },
    {
      id: "tech-store-ecosystem",
      title: "Tech Store Android & Web Ecosystem",
      subtitle: "Retail E-Commerce Ecosystem & Cloud Backend",
      description: "Multi-platform retail e-commerce ecosystem combining Android Native and React 18 Web Admin. Features pessimistic stock reservation preventing flash-sale overselling and PCI-DSS Stripe card checkout.",
      category: "mobile",
      featured: false,
      branch: "tree/SWE_BE5",
      role: "Technical Lead & System Designer",
      image: "/assets/projects/tech-store/desktop.png",
      tags: ["Android (Java 11)", "Node.js 20 & Express", "React 18 & TypeScript", "Cloud Firestore", "Stripe SDK", "Firebase FCM"],
      architectureHighlights: [
        "Pessimistic Stock Reservation mechanism via Firestore ACID Transactions with 5-minute TTL; automated 60-second Cron worker for expired stock reconciliation.",
        "PCI-DSS Level 1 compliant Stripe SDK payment pipeline (Zero Raw Card Exposure); atomic 4-document order finalization via Firebase WriteBatch.",
        "Omnichannel real-time customer support inbox (Firestore onSnapshot sub-100ms latency) with event-driven Firebase FCM push notifications.",
        "Achieved 57/57 automated test cases (100% PASS rate) across Node.js Native Runner, Android JUnit 4 JVM, and Jest 30 (100% Statements Coverage on Web Admin Backend)."
      ],
      metrics: "Pessimistic Lock · Stripe Vault · 57/57 Tests",
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
        { name: "C# / .NET (ASP.NET Core / Web API)", level: "Trọng tâm", tag: "Chính" },
        { name: "Node.js / Express.js / NestJS", level: "Trọng tâm", tag: "Chính" },
        { name: "Java (OOP / Core Java)", level: "Trọng tâm", tag: "Chính" },
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
        { name: "C# / .NET (ASP.NET Core / Web API)", level: "Core", tag: "Primary" },
        { name: "Node.js / Express.js / NestJS", level: "Core", tag: "Primary" },
        { name: "Java (OOP / Core Java)", level: "Core", tag: "Primary" },
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
      period: "Tháng 03/2026 - Tháng 08/2026",
      role: "Thực tập sinh Lập trình Fullstack (Fullstack Developer Intern)",
      organization: "Công ty TNHH CITARES (CITARES Co., Ltd.)",
      location: "TP. Hồ Chí Minh, Việt Nam",
      description: "Tham gia cùng nhóm kỹ thuật phát triển nền tảng điều vận thông minh Smart Logistics Platform (SLP), tập trung vào hiện thực hóa các module Backend & RESTful API, tích hợp giải thuật tối ưu tuyến đường, xử lý luồng dữ liệu định vị thời gian thực và hỗ trợ giao diện điều phối.",
      highlights: [
        "Tham gia phát triển các module Backend & RESTful API bằng Express.js/TypeScript theo Clean Architecture & DDD; thiết kế CSDL PostgreSQL/PostGIS (chuẩn 3NF, GIST), phân quyền RBAC 4 cấp, giao dịch ACID và hỗ trợ xây dựng React SPA Dispatcher Dashboard.",
        "Hiện thực hóa pipeline 4 thuật toán tối ưu tuyến đường thuần TypeScript (DBSCAN → Capacity K-Means → Genetic Algorithm → Hungarian) kèm ma trận khoảng cách 3 tầng, giúp giảm 58.2% tổng quãng đường di chuyển cho 500+ đơn/ngày.",
        "Xây dựng pipeline xử lý GPS telemetry thời gian thực với Redis In-Memory (1.321 pings/giây, P99 < 1ms) và Socket.io; triển khai FSM 17 bước, cơ chế gom Tote Bag giảm 95% thao tác và đạt 12/12 kịch bản kiểm thử ACID (100% PASS)."
      ]
    },
    {
      period: "Tháng 08/2025 - Tháng 02/2026",
      role: "Thực tập sinh Lập trình Fullstack (Fullstack Developer Intern)",
      organization: "Công ty Cổ phần Phước Thành Việt Nam (PHUOC THANH VIET NAM JSC)",
      location: "TP. Hồ Chí Minh, Việt Nam",
      description: "Tham gia phát triển website cổng thông tin doanh nghiệp và xây dựng hệ thống phần mềm Quản lý Chấm công & Nhân sự (HRM & Attendance System) phục vụ số hóa quy trình vận hành nội bộ.",
      highlights: [
        "Thiết kế và xây dựng các dịch vụ RESTful API bằng ASP.NET Core (.NET 8 / C#) & SQL Server kết hợp phát triển giao diện React & TypeScript phục vụ chấm công và quản trị nhân sự cho 200+ nhân viên.",
        "Triển khai hệ thống phân quyền đa cấp (RBAC) kết hợp máy trạng thái (State Machine) kiểm soát luồng phê duyệt đơn từ (Pending → Approved → Rejected) minh bạch.",
        "Xây dựng các tác vụ tự động hóa (Background Worker / Cron Job) đối soát dữ liệu check-in/check-out hàng ngày và xuất báo cáo bảng công, phiếu lương định kỳ (Excel/PDF) chính xác 100%."
      ]
    },
    {
      period: "2022 - 2026 (Dự kiến)",
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
      period: "Mar 2026 - Aug 2026",
      role: "Fullstack Developer Intern",
      organization: "CITARES Co., Ltd.",
      location: "Ho Chi Minh City, Vietnam",
      description: "Collaborated with the engineering team to build the Smart Logistics Platform (SLP), focusing on developing backend modules & RESTful APIs, vehicle routing optimization algorithms, real-time GPS telemetry, and supporting dispatcher UI development.",
      highlights: [
        "Contributed to engineering backend modules & RESTful APIs using Express.js & TypeScript under Clean Architecture & DDD; designed PostgreSQL schema with PostGIS spatial indexing (GIST), 4-tier RBAC, ACID transactions, and supported developing the React SPA Dispatcher Dashboard.",
        "Implemented a pure TypeScript 4-stage route optimization pipeline (DBSCAN spatial clustering → Capacity K-Means → Genetic Algorithm CVRP/VRPTW → Hungarian driver matching) with 3-tier distance fallback, reducing transit distance by 58.2% across 500+ daily orders.",
        "Engineered real-time GPS telemetry pipeline buffering into Redis In-Memory (1,321 pings/s, P99 < 1ms) with Socket.io radar tracking; built 17-state OrderStatus FSM, tote aggregation cutting 95% manual touches, and achieved 12/12 ACID tests (100% PASS)."
      ]
    },
    {
      period: "Aug 2025 - Feb 2026",
      role: "Fullstack Developer Intern",
      organization: "Phuoc Thanh Viet Nam Joint Stock Company (PHUOC THANH VIET NAM JSC)",
      location: "Ho Chi Minh City, Vietnam",
      description: "Contributed to developing the corporate web portal and engineered the internal Human Resource & Timekeeping Management System (HRM) to digitize enterprise operations.",
      highlights: [
        "Designed and implemented RESTful APIs using ASP.NET Core (.NET 8, C#) & SQL Server alongside developing React & TypeScript frontend modules for biometric attendance tracking across 200+ employees.",
        "Engineered granular Role-Based Access Control (RBAC) and approval workflow state machines (Pending → Approved → Rejected) across departmental hierarchies.",
        "Built automated background workers and scheduled tasks for daily check-in/out reconciliation, timesheet aggregation, and automated payroll report generation (Excel/PDF)."
      ]
    },
    {
      period: "2022 - 2026 (Expected)",
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
