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
    bio: "Kỹ sư Phần mềm & Lập trình viên Backend tại TP. Hồ Chí Minh — chuyên cung cấp các giải pháp kỹ thuật và kiến trúc phần mềm tin cậy, biến các bài toán nghiệp vụ thực tế thành những hệ thống backend mượt mà, tối ưu hiệu năng, bảo mật và sẵn sàng mở rộng.",
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
    bio: "Software engineer & Backend developer based in Ho Chi Minh City — delivering robust engineering solutions and reliable software architectures, turning real-world business requirements into high-performance, secure, and scalable backend systems.",
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
      subtitle: "Hệ thống điều vận và tối ưu hóa tuyến đường giao hàng tự động (Dự án Doanh nghiệp tại CITARES)",
      description: "Nền tảng logistics cấp doanh nghiệp được thiết kế theo Kiến trúc phần mềm sạch (Clean Architecture) và Phương pháp thiết kế hướng miền (Domain-Driven Design - DDD), phát triển tại Công ty TNHH CITARES. Tự động hóa chuỗi cung ứng: gom hàng, phân loại kho, trung chuyển liên kho, tối ưu giao hàng chặng cuối bằng đường ống 4 thuật toán Trí tuệ nhân tạo (AI Pipeline) thuần TypeScript.",
      category: "backend",
      tags: ["Node.js / TypeScript", "PostgreSQL 15 / PostGIS", "Redis 7", "Socket.io", "Genetic Algorithm", "DBSCAN", "K-Means", "Hungarian Algorithm", "Prisma ORM", "RabbitMQ", "Docker", "Flutter"],
      architectureHighlights: [
        "Tham gia hiện thực hóa đường ống Trí tuệ nhân tạo (AI Pipeline) 4 thuật toán thuần TypeScript: DBSCAN → K-Means → Giải thuật Di truyền (GA) → Thuật toán ghép cặp Hungarian.",
        "Xây dựng đường ống xử lý tọa độ định vị toàn cầu (GPS Telemetry) trên bộ nhớ đệm Redis tiếp nhận 1,321 điểm/giây với độ trễ P99 dưới 1 mili-giây.",
        "Tham gia phát triển và tối ưu cấu trúc cơ sở dữ liệu PostgreSQL chuẩn hóa bậc 3 (3NF), kiểm soát 17 trạng thái vòng đời đơn và đảm bảo tính toàn vẹn giao dịch (ACID).",
        "Tích hợp vi dịch vụ tính toán AI độc lập tách rời tải nặng qua hàng đợi thông điệp RabbitMQ.",
      ],
      metrics: "Hệ thống Doanh nghiệp • Giảm 58.2% quãng đường giao hàng",
      isPrivateRepo: true,
      hasDetailPage: true
    },
    {
      id: "movie-ticket-booking",
      title: "Online Movie Ticket Booking System",
      subtitle: "Hệ thống đặt vé xem phim phân tán — 6 Microservices behind API Gateway · SAGA Pattern · Redis Lock · 25/25 Tests",
      description: "Nền tảng đặt vé xem phim trực tuyến xây dựng theo Kiến trúc Vi dịch vụ gồm 6 service nghiệp vụ phía sau API Gateway tập trung (Database-per-Service). Xử lý tranh chấp giữ ghế dưới tải đồng thời bằng Khóa phân tán Redis (SET NX PX) kết hợp Database Pessimistic Lock dự phòng. Đảm bảo tính nhất quán giữa Thanh toán và Đặt vé qua SAGA Choreography trên RabbitMQ, kèm cơ chế hoàn tiền bù trừ tự động. Tích hợp Circuit Breaker chống lỗi lan tầng, Distributed Tracing (x-request-id) và xác thực thanh toán ZaloPay bằng HMAC-SHA256.",
      category: "backend",
      featured: true,
      branch: "tree/SWE_BE_1",
      tags: ["Microservices", "API Gateway", "SAGA Pattern", "RabbitMQ", "Redis Distributed Lock", "Circuit Breaker", "SQL Server", "ZaloPay QR", "Docker Compose", "Jest Tests", "React"],
      architectureHighlights: [
        "Kiến trúc 6 vi dịch vụ nghiệp vụ phía sau API Gateway (Database-per-Service): tách biệt User, Movie, Seat, Booking, Payment, Notification; loại bỏ liên kết cơ sở dữ liệu chéo (cross-service DB coupling).",
        "Khóa phân tán Redis (SET NX PX 120s) chống đặt trùng ghế dưới tải đồng thời cao (Concurrency Control), tự động fallback sang Pessimistic Lock tại CSDL khi Redis mất kết nối.",
        "Điều phối giao dịch SAGA Choreography qua RabbitMQ (Durable Queues & Message Persistence): xử lý sự kiện payment.successful và tự động hoàn tiền ZaloPay qua giao dịch bù trừ (Compensating Transaction) khi giữ vé thất bại.",
        "Tăng cường độ tin cậy và hiệu năng: Cấu hình Circuit Breaker (Opossum) tại Gateway ngăn lỗi dây chuyền; gắn Correlation ID (x-request-id) truy vết luồng; tối ưu Batch API, giảm network round trips từ O(N) xuống O(1) và Redis cache.",
      ],
      metrics: "Anti Double-Booking · SAGA Pattern · Circuit Breaker · 25/25 Tests",
      githubUrl: "https://github.com/hungpptit/XEMPHIM/tree/SWE_BE_1",
      demoUrl: "https://github.com/hungpptit/XEMPHIM/tree/SWE_BE_1",
      hasDetailPage: true
    },
    {
      id: "toeic-ai-microservices",
      title: "TOEIC Learning & AI Chatbot Ecosystem",
      subtitle: "Hệ sinh thái học và luyện thi TOEIC xây dựng theo kiến trúc Microservices · Database-per-Service · Event-Driven · AI/ML · ZaloPay",
      description: "Hệ thống được thiết kế theo kiến trúc Microservices với 6 dịch vụ độc lập phía sau Nginx API Gateway, áp dụng mô hình Database-per-Service với 4 CSDL SQL Server 2022 được sở hữu và quản lý độc lập bởi từng domain, không sử dụng cross-database queries/joins. Các service giao tiếp bất đồng bộ qua RabbitMQ cho các luồng nghiệp vụ như kích hoạt VIP và gửi email, đồng thời duy trì cơ chế retry và HTTP sync fallback nhằm tăng khả năng chịu lỗi. Hệ sinh thái tích hợp Stateless ML Service (Python Flask + scikit-learn) suy luận hoàn toàn in-memory để dự đoán điểm thi và kỹ năng yếu kèm cơ chế Rule-based Fallback; Trợ lý AI Chatbot Google Gemini 2.5 Flash truy xuất ngữ cảnh đề thi nội bộ; cùng Cổng thanh toán ZaloPay Dynamic QR xác thực chữ ký HMAC-SHA256 kết hợp kiểm tra idempotency.",
      category: "ai",
      featured: false,
      branch: "tree/SWE_BE3",
      tags: ["Microservices", "API Gateway", "Database-per-Service", "RabbitMQ", "SQL Server 2022", "Google Gemini AI", "Python ML", "ZaloPay QR", "Docker Compose", "Flutter 3"],
      architectureHighlights: [
        "Microservices & Database-per-Service: 6 application services độc lập (Auth, Quiz, Payment, Chatbot, Email, ML); mỗi service sở hữu dữ liệu riêng, loại bỏ hoàn toàn cross-database queries/joins; toàn bộ application stack đóng gói 9 containers qua Docker Compose.",
        "Event-Driven Processing: RabbitMQ AMQP xử lý workflow kích hoạt VIP và gửi email bất đồng bộ với cơ chế Ack/Nack, retry và synchronous HTTP fallback đảm bảo tính sẵn sàng cao.",
        "Stateless ML Inference: Python Flask + scikit-learn cung cấp endpoint POST /predict suy luận in-memory; Rule-based Fallback đảm bảo trả kết quả dự đoán ngay cả khi ML service ngắt kết nối, kèm Cron Job tự động huấn luyện lại.",
        "Context-Aware AI Chatbot: Gemini 2.5 Flash kết hợp dữ liệu ngữ cảnh đề thi từ Quiz Service thông qua internal REST API (/api/v1/internal/smart-context), hỗ trợ hội thoại đa lượt, fallback sang General-AI và cơ chế xoay vòng khóa API (Key Fallback).",
        "Payment Integration: ZaloPay Sandbox Dynamic QR với xác thực chữ ký HMAC-SHA256 kết hợp kiểm tra idempotency trạng thái giao dịch chống xử lý trùng lặp webhook callback."
      ],
      metrics: "Microservices · Database-per-Service · RabbitMQ Event-Driven · Stateless ML · 51/51 Tests",
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
      subtitle: "Hệ sinh thái Bán lẻ Công nghệ — Android Client · Node.js Backend · Stripe PCI-DSS · 57/57 Tests",
      description: "Hệ sinh thái thương mại điện tử bán lẻ thiết bị công nghệ đa nền tảng kết hợp giữa ứng dụng di động khách hàng, Bảng điều khiển quản trị doanh nghiệp và Dịch vụ Backend chuyên dụng. Giải quyết trọn vẹn bài toán khóa tồn kho bi quan chống bán vượt trong đợt giảm giá cao điểm, cổng thanh toán thẻ quốc tế Stripe bảo mật chuẩn PCI-DSS và trung tâm CSKH thời gian thực tích hợp Firebase FCM.",
      category: "mobile",
      featured: false,
      tags: ["Android (Java 11)", "Node.js Micro-Backend", "Firestore ACID", "Stripe PCI-DSS", "Firebase FCM", "React 18 / Vite Admin", "57/57 Tests"],
      architectureHighlights: [
        "Cơ chế khóa tồn kho bi quan (Pessimistic Reservation) bằng Firestore ACID Transactions với TTL 5 phút; Cron Worker giải phóng kho tự động mỗi 60s.",
        "Pipeline thanh toán thẻ quốc tế Stripe SDK bảo mật chuẩn PCI-DSS (Zero Raw Card Exposure); hoàn tất đơn hàng nguyên tử 4 bảng qua WriteBatch.",
        "Hộp thư CSKH đa kênh đồng bộ thời gian thực (Firestore onSnapshot độ trễ <100ms) kết hợp tự động phát thông báo đẩy Firebase FCM.",
        "Đạt 57/57 Test Cases (100% PASS Rate) trên cả Node.js Native Runner, Android JUnit 4 JVM và Jest 30 (100% Statements Coverage trên Web Admin Backend)."
      ],
      metrics: "57/57 Tests · Pessimistic Lock · Stripe Vault · FCM Push",
      githubUrl: "https://github.com/hungpptit/tech-store-mobile",
      demoUrl: "https://github.com/hungpptit/tech-store-mobile",
      hasDetailPage: true
    }
  ],
  en: [
    {
      id: "smart-logistics",
      title: "Smart Logistics Platform",
      subtitle: "Enterprise automated dispatching & AI route optimization system (Enterprise Project at CITARES)",
      description: "Enterprise-grade logistics platform engineered with Clean Architecture & Domain-Driven Design (DDD), deployed at CITARES Co., Ltd. Automates end-to-end supply chain execution: pickup dispatch, zone sorting, line-haul transfers, and last-mile route optimization via a pure TypeScript 4-module AI pipeline.",
      category: "backend",
      tags: ["Node.js / TypeScript", "PostgreSQL 15 / PostGIS", "Redis 7", "Socket.io", "Genetic Algorithm", "DBSCAN", "K-Means", "Hungarian Algorithm", "Prisma ORM", "RabbitMQ", "Docker", "Flutter"],
      architectureHighlights: [
        "Contributed to implementing the pure TypeScript 4-module AI pipeline: DBSCAN spatial clustering → K-Means capacity partition → Genetic Algorithm (GA) CVRP+VRPTW solver → Hungarian driver matching.",
        "Engineered high-throughput GPS Telemetry streaming over Redis in-memory cache, ingesting 1,321 coordinates/sec with sub-millisecond P99 latency.",
        "Participated in developing and tuning 38-table PostgreSQL 3NF schema, handling 17-state order lifecycle state machines and ensuring strict ACID transaction integrity.",
        "Integrated asynchronous AI microservice workload offloading via RabbitMQ message queues.",
      ],
      metrics: "Enterprise Grade • –58.2% Total Travel Distance",
      isPrivateRepo: true,
      hasDetailPage: true
    },
    {
      id: "movie-ticket-booking",
      title: "Online Movie Ticket Booking System",
      subtitle: "Distributed Cinema Booking Platform — 6 Microservices behind API Gateway · SAGA Pattern · Redis Lock · 25/25 Tests",
      description: "Distributed cinema ticket booking platform built with a Microservices Architecture featuring 6 business services behind a centralized API Gateway (Database-per-Service pattern). Mitigates concurrent seat contention using Redis Distributed Locks (SET NX PX) with database pessimistic lock fallback. Ensures consistency between Payment and Booking via SAGA Choreography over RabbitMQ, with automated compensating refunds. Features Circuit Breakers against cascading failures, Distributed Tracing (x-request-id), and HMAC-SHA256 ZaloPay payment verification.",
      category: "backend",
      featured: true,
      branch: "tree/SWE_BE_1",
      tags: ["Microservices", "API Gateway", "SAGA Pattern", "RabbitMQ", "Redis Distributed Lock", "Circuit Breaker", "SQL Server", "ZaloPay QR", "Docker Compose", "Jest Tests", "React"],
      architectureHighlights: [
        "6 business microservices behind a centralized API Gateway (Database-per-Service): User, Movie, Seat, Booking, Payment, Notification; eliminating cross-service database coupling.",
        "Redis Distributed Locking (atomic SET NX PX 120s) preventing double-booking under concurrent requests, with automatic fallback to database pessimistic transaction locking.",
        "Asynchronous SAGA Choreography over RabbitMQ (Durable Queues & Message Persistence): handles payment.successful and executes automated compensating refunds via ZaloPay API upon booking failures.",
        "Reliability & Latency Tuning: Configured Opossum Circuit Breakers at Gateway against cascading failures; end-to-end Distributed Tracing (x-request-id); Batch APIs reducing network round trips from O(N) down to O(1), and Redis caching.",
      ],
      metrics: "Anti Double-Booking · SAGA Pattern · Circuit Breaker · 25/25 Tests",
      githubUrl: "https://github.com/hungpptit/XEMPHIM/tree/SWE_BE_1",
      demoUrl: "https://github.com/hungpptit/XEMPHIM/tree/SWE_BE_1",
      hasDetailPage: true
    },
    {
      id: "toeic-ai-microservices",
      title: "TOEIC Learning & AI Chatbot Ecosystem",
      subtitle: "TOEIC Preparation Ecosystem engineered with Microservices · Database-per-Service · Event-Driven · AI/ML · ZaloPay",
      description: "Engineered with a Microservices Architecture comprising 6 independent services behind a unified Nginx API Gateway, strictly applying the Database-per-Service pattern with 4 SQL Server 2022 databases independently owned by each domain, eliminating cross-database queries/joins. Services communicate asynchronously via RabbitMQ for workflows such as VIP activation and transactional emails, accompanied by retry policies and synchronous HTTP fallbacks for resilience. Integrates a Stateless ML Service (Python Flask + scikit-learn) executing in-memory inference with Rule-based Fallback, a Google Gemini 2.5 Flash AI Chatbot with inter-service smart context lookup, and ZaloPay Dynamic QR payment with HMAC-SHA256 signature verification and idempotency checks.",
      category: "ai",
      featured: false,
      branch: "tree/SWE_BE3",
      tags: ["Microservices", "API Gateway", "Database-per-Service", "RabbitMQ", "SQL Server 2022", "Google Gemini AI", "Python ML", "ZaloPay QR", "Docker Compose", "Flutter 3"],
      architectureHighlights: [
        "Microservices & Database-per-Service: 6 independent application services (Auth, Quiz, Payment, Chatbot, Email, ML); each owning isolated data without cross-database queries/joins; entire application stack containerized across 9 Docker containers.",
        "Event-Driven Processing: RabbitMQ AMQP handles asynchronous VIP activation and email delivery with Ack/Nack, retry, and synchronous HTTP fallback ensuring high fault tolerance.",
        "Stateless ML Inference: Python Flask + scikit-learn exposes POST /predict for in-memory score and skill diagnosis; Rule-based Fallback guarantees continuous service during outages, with scheduled retraining Cron Jobs.",
        "Context-Aware AI Chatbot: Gemini 2.5 Flash integrates live TOEIC question context from Quiz Service via internal REST API (/api/v1/internal/smart-context), multi-turn conversations, General-AI fallback, and API Key Fallback Rotation.",
        "Payment Integration: ZaloPay Sandbox Dynamic QR with HMAC-SHA256 signature verification coupled with transaction idempotency checks preventing duplicate webhook processing."
      ],
      metrics: "Microservices · Database-per-Service · RabbitMQ Event-Driven · Stateless ML · 51/51 Tests",
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
      subtitle: "Retail E-Commerce Ecosystem — Android Client · Node.js Backend · Stripe PCI-DSS · 57/57 Tests",
      description: "Multi-platform tech retail ecosystem combining a customer mobile app, an enterprise web admin portal, and a dedicated backend service. Solves flash-sale overselling via pessimistic stock reservation with a 60s background Cron worker, guarantees PCI-DSS compliant card tokenization via Stripe Vault, and provides real-time omnichannel support with Firebase FCM.",
      category: "mobile",
      featured: false,
      tags: ["Android (Java 11)", "Node.js Micro-Backend", "Firestore ACID", "Stripe PCI-DSS", "Firebase FCM", "React 18 / Vite Admin", "57/57 Tests"],
      architectureHighlights: [
        "Pessimistic Stock Reservation mechanism via Firestore ACID Transactions with 5-minute TTL; automated 60-second Cron worker for expired stock reconciliation.",
        "PCI-DSS Level 1 compliant Stripe SDK payment pipeline (Zero Raw Card Exposure); atomic 4-document order finalization via Firebase WriteBatch.",
        "Omnichannel real-time customer support inbox (Firestore onSnapshot sub-100ms latency) with event-driven Firebase FCM push notifications.",
        "Achieved 57/57 automated test cases (100% PASS rate) across Node.js Native Runner, Android JUnit 4 JVM, and Jest 30 (100% Statements Coverage on Web Admin Backend)."
      ],
      metrics: "57/57 Tests · Pessimistic Lock · Stripe Vault · FCM Push",
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
      period: "Tháng 03/2026 - Tháng 08/2026",
      role: "Thực tập sinh Lập trình Backend (Backend Developer Intern)",
      organization: "Công ty TNHH CITARES (CITARES Co., Ltd.)",
      location: "TP. Hồ Chí Minh, Việt Nam",
      description: "Tham gia cùng nhóm kỹ thuật Backend phát triển nền tảng điều vận thông minh Smart Logistics Platform (SLP), tập trung vào hiện thực hóa các module API nghiệp vụ, tích hợp giải thuật tối ưu tuyến đường và xử lý luồng dữ liệu định vị thời gian thực.",
      highlights: [
        "Tham gia lập trình các API dịch vụ nghiệp vụ điều vận, kiểm soát vòng đời 17 trạng thái đơn hàng (FSM) và phân quyền người dùng (RBAC) bằng Node.js & TypeScript theo kiến trúc Clean Architecture & DDD.",
        "Hiện thực hóa và tích hợp đường ống 4 thuật toán tối ưu tuyến đường (DBSCAN, K-Means, Genetic Algorithm, Hungarian) bằng TypeScript, giúp giảm 58.2% tổng quãng đường di chuyển của đội xe.",
        "Xây dựng luồng tiếp nhận định vị GPS thời gian thực qua Redis In-Memory & Socket.io (độ trễ P99 < 1ms), hỗ trợ tối ưu các câu truy vấn PostgreSQL và viết bộ kịch bản kiểm thử tự động (12 Test Scenarios) bảo đảm tính toàn vẹn giao dịch (ACID)."
      ]
    },
    {
      period: "Tháng 08/2025 - Tháng 02/2026",
      role: "Thực tập sinh Lập trình Backend (Backend Developer Intern)",
      organization: "Công ty Cổ phần Phước Thành Việt Nam (PHUOC THANH VIET NAM JSC)",
      location: "TP. Hồ Chí Minh, Việt Nam",
      description: "Tham gia phát triển website cổng thông tin doanh nghiệp và xây dựng hệ thống phần mềm Quản lý Chấm công & Nhân sự (HRM & Attendance System) phục vụ số hóa quy trình vận hành nội bộ.",
      highlights: [
        "Thiết kế và xây dựng các dịch vụ RESTful API bằng Node.js (NestJS/Express) & SQL Server phục vụ quản lý hồ sơ nhân viên, quy trình xin nghỉ phép và chấm công.",
        "Triển khai hệ thống phân quyền đa cấp (RBAC) kết hợp máy trạng thái (State Machine) kiểm soát luồng phê duyệt đơn từ (Pending → Approved → Rejected) minh bạch.",
        "Xây dựng tác vụ tự động hóa (Cron Job Worker) đối soát dữ liệu check-in/check-out hàng ngày và xuất báo cáo bảng công, phiếu lương định kỳ (Excel/PDF) chính xác 100%."
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
      role: "Backend Developer Intern",
      organization: "CITARES Co., Ltd.",
      location: "Ho Chi Minh City, Vietnam",
      description: "Participated in engineering the Smart Logistics Platform (SLP) within the backend team, focusing on implementing core business API modules, integrating vehicle routing optimization algorithms, and building real-time GPS telemetry pipelines.",
      highlights: [
        "Developed dispatch management RESTful APIs, handled 17-state order lifecycle state machines (FSM), and enforced RBAC security using Node.js & TypeScript under Clean Architecture & DDD.",
        "Collaborated on implementing the 4-stage algorithmic routing pipeline in TypeScript (DBSCAN, K-Means, Genetic Algorithm, Hungarian), achieving a 58.2% reduction in fleet transit distance.",
        "Engineered real-time GPS telemetry ingestion via Redis In-Memory & Socket.io (sub-millisecond P99 latency), assisted in PostgreSQL query tuning, and authored 12 automated test scenarios (100% PASS)."
      ]
    },
    {
      period: "Aug 2025 - Feb 2026",
      role: "Backend Developer Intern",
      organization: "Phuoc Thanh Viet Nam Joint Stock Company (PHUOC THANH VIET NAM JSC)",
      location: "Ho Chi Minh City, Vietnam",
      description: "Contributed to developing the corporate web portal and engineered the internal Human Resource & Timekeeping Management System (HRM) to digitize enterprise operations.",
      highlights: [
        "Designed and implemented layered RESTful APIs using Node.js (NestJS/Express) & SQL Server for employee profiling, leave management, and daily attendance tracking.",
        "Engineered granular Role-Based Access Control (RBAC) and approval workflow state machines (Pending → Approved → Rejected) across departmental hierarchies.",
        "Built automated Cron Job workers for daily check-in/out reconciliation, timesheet aggregation, and automated payroll report generation (Excel/PDF)."
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
