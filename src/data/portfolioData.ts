import { Project, SkillGroup, ExperienceItem } from '../types';

export const PERSONAL_INFO = {
  name: "Phạm Tuấn Hưng",
  role: "Kỹ sư Phần mềm & Lập trình viên Backend (Software Engineer & Backend Developer)",
  tagline: "Xây dựng các hệ thống phân tán hiệu năng cao, tối ưu hóa xử lý đồng thời & kiến trúc Vi dịch vụ (Microservices).",
  bio: "Sinh viên năm cuối ngành Kỹ thuật Phần mềm tại Học viện Công nghệ Bưu chính Viễn thông (PTIT TP.HCM). Đam mê thiết kế kiến trúc hệ thống Backend (Kiến trúc Vi dịch vụ - Microservices, Khóa phân tán - Distributed Locking, Hàng đợi thông điệp - Message Queue), tối ưu hóa cơ sở dữ liệu quan hệ và giải quyết các bài toán định tuyến, điều vận logistics thực tế tại doanh nghiệp.",
  university: "Học viện Công nghệ Bưu chính Viễn thông (PTIT TP.HCM)",
  major: "Kỹ thuật Phần mềm (Software Engineering)",
  gpa: "3.2 / 4.0",
  graduation: "Dự kiến 2027",
  email: "phamtuanhung242004@gmail.com",
  phone: "0785535224",
  location: "TP. Hồ Chí Minh, Việt Nam",
  github: "https://github.com/hungpptit",
  linkedin: "https://linkedin.com/in/hungpptit",
  status: "Sẵn sàng ứng tuyển vị trí Thực tập sinh / Nhân viên chính thức Kỹ sư Phần mềm & Lập trình viên Backend (Intern / Fresher Software Engineer & Backend Developer)",
  stats: [
    { value: "1+", label: "Năm kinh nghiệm thực tế" },
    { value: "5+", label: "Hệ thống đã kiến trúc" },
    { value: "6+", label: "Vi dịch vụ (Microservices)" },
    { value: "3.2", label: "Điểm trung bình GPA (PTIT)" },
  ]
};

export const PROJECTS: Project[] = [
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
    subtitle: "Hệ thống đặt vé xem phim trực tuyến phân tán với giải pháp chống trùng ghế (Anti Double-Booking)",
    description: "Nền tảng đặt vé xem phim trực tuyến phân tán dựa trên Kiến trúc Vi dịch vụ (Microservices) độc lập. Giải quyết triệt để bài toán hàng ngàn người dùng cùng tranh chấp chọn một ghế tại cùng một thời điểm bằng giải pháp Khóa phân tán (Distributed Lock) thời gian thực.",
    category: "backend",
    featured: true,
    branch: "tree/kientruc",
    tags: ["Microservices", "Redis Distributed Lock", "RabbitMQ", "SQL Server", "Express.js", "ZaloPay QR", "React"],
    architectureHighlights: [
      "Kiến trúc Vi dịch vụ (Microservices) gồm 6 dịch vụ độc lập: Cổng API (API Gateway), Người dùng, Phim, Đặt vé, Thanh toán và Thông báo.",
      "Cơ chế Khóa phân tán (Distributed Lock) trên Redis với thời hạn tự giải phóng (TTL) ngăn chặn triệt để tình trạng bán trùng vé dưới tải lượng truy cập đồng thời cao.",
      "Xử lý hàng đợi bất đồng bộ với RabbitMQ để gửi email vé và thông báo thanh toán tức thì.",
      "Tích hợp luồng thanh toán động ZaloPay Dynamic QR Code và tự động giải phóng ghế khi hết hạn giữ chỗ."
    ],
    metrics: "Không xảy ra trùng ghế dưới tải cao (Zero Double-Booking)",
    githubUrl: "https://github.com/hungpptit/XEMPHIM/tree/kientruc",
    demoUrl: "https://github.com/hungpptit/XEMPHIM/tree/kientruc",
    hasDetailPage: true
  },
  {
    id: "toeic-ai-microservices",
    title: "TOEIC Learning & AI Chatbot Ecosystem",
    subtitle: "Hệ thống luyện thi chứng chỉ TOEIC thông minh kết hợp Vi dịch vụ & Trợ lý Trí tuệ Nhân tạo",
    description: "Hệ thống học và luyện thi chứng chỉ tiếng Anh (TOEIC) toàn diện kết hợp Trợ lý Trí tuệ nhân tạo (AI Chatbot) thông minh. Ứng dụng mô hình Xử lý Ngôn ngữ Tự nhiên (NLP) chuẩn BERT để nhận diện ý định học viên và thuật toán Học máy đề xuất lộ trình ôn tập cá nhân hóa.",
    category: "ai",
    featured: false,
    tags: ["Microservices", "Flutter", "Gemini API", "BERT NLP", "Naïve Bayes", "kNN", "Node.js"],
    architectureHighlights: [
      "Kiến trúc dịch vụ phân tán tách biệt: Dịch vụ Xác thực (Auth), Dịch vụ Đề thi (Quiz Engine), Dịch vụ Trợ lý AI (AI Agent).",
      "Ứng dụng Di động đa nền tảng viết bằng Flutter mang lại trải nghiệm mượt mà 60 khung hình/giây (60 FPS).",
      "Tích hợp Google Gemini AI & mô hình BERT phân loại ý định người học và giải thích đáp án chi tiết theo ngữ cảnh.",
      "Thuật toán Học máy (Naïve Bayes + k-Nearest Neighbors) phân tích điểm yếu để tự động đề xuất đề thi phù hợp."
    ],
    metrics: "Cá nhân hóa lộ trình học thông minh bằng AI",
    githubUrl: "https://github.com/hungpptit/chatbot-toeic-flutter/tree/microservice",
    demoUrl: "https://github.com/hungpptit/chatbot-toeic/tree/master",
    hasDetailPage: true
  },
  {
    id: "smart-library",
    title: "Smart Library Management System",
    subtitle: "Hệ thống quản trị thư viện số & kiểm soát tài nguyên chặt chẽ",
    description: "Hệ thống quản lý mượn/trả sách, độc giả, danh mục và phạt quá hạn. Thiết kế mô hình cơ sở dữ liệu quan hệ chuẩn hóa bậc 3 (3NF), đảm bảo tính toàn vẹn dữ liệu giao dịch (ACID) và Phân quyền truy cập dựa trên vai trò (Role-Based Access Control - RBAC).",
    category: "backend",
    featured: false,
    tags: ["Database Normalization", "SQL Server", "RBAC Auth", "Transaction Management", "Node.js", "React"],
    architectureHighlights: [
      "Thiết kế cơ sở dữ liệu quan hệ chuẩn hóa bậc 3 (3NF) với cơ chế giao dịch an toàn khi nhiều thủ thư cùng thao tác.",
      "Hệ thống phân quyền Role-Based Access Control (RBAC) chặt chẽ cho 3 cấp độ: Quản trị viên, Thủ thư, Độc giả.",
      "Tự động tính toán phí phạt quá hạn và gửi thông báo nhắc nhở ngày trả.",
      "Báo cáo thống kê tần suất mượn sách và danh mục sách được quan tâm nhất."
    ],
    metrics: "Giao dịch toàn vẹn ACID & Phân quyền bảo mật RBAC",
    githubUrl: "https://github.com/hungpptit/library-management-system",
    demoUrl: "https://github.com/hungpptit/library-management-system",
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
];

export const SKILL_GROUPS: SkillGroup[] = [
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
];

export const EXPERIENCE_MILESTONES: ExperienceItem[] = [
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
];
