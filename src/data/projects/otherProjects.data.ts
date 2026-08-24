import { TechStackItem, ProjectChallenge } from '../../types';
import { Language } from '../../context/LanguageContext';

export interface GenericProjectDetail {
  id: string;
  overview: string;
  role: string;
  duration?: string;
  teamSize?: string;
  techStack?: TechStackItem[];
  challenges?: ProjectChallenge[];
}

export const OTHER_PROJECTS_DETAIL: Record<Language, Record<string, GenericProjectDetail>> = {
  vi: {
    "toeic-ai-microservices": {
      id: "toeic-ai-microservices",
      overview: "Hệ sinh thái học tập và luyện thi chứng chỉ Tiếng Anh Giao tiếp Quốc tế (TOEIC) toàn diện, giải quyết triệt để bài toán thiếu tương tác cá nhân hóa và chi phí gia sư đắt đỏ của các nền tảng luyện thi truyền thống. Hệ thống kết hợp ba trụ cột cốt lõi: Động cơ thi thử chuẩn hóa 7 Parts với chấm điểm tự động, Trợ lý AI gia sư thông minh (Google Gemini) giải thích ngữ pháp và đối thoại ngữ cảnh tức thì, cùng Đường ống Học máy (Machine Learning Pipeline) tự động chẩn đoán điểm yếu và dự đoán điểm thi của học viên. Nền tảng được vận hành trên Kiến trúc Vi dịch vụ (Microservices) tự chủ hoàn toàn với Cổng thanh toán trực tuyến ZaloPay an toàn, đạt 51/51 Test Cases (100% PASS) kiểm thử toàn diện trên toàn bộ hệ thống API.",
      role: "Kỹ sư Phần mềm & Lập trình viên Backend (Software Engineer & Backend Developer)",
      duration: "4 tháng",
      teamSize: "3 thành viên",
      techStack: [
        { layer: "Kiến trúc hệ thống", tech: "Kiến trúc Vi dịch vụ (Microservices)", version: "—", role: "Phân tách 6 dịch vụ tự chủ hoàn toàn (Database-per-Service): Nginx API Gateway, Auth, Quiz, Chatbot, Payment, Email Worker" },
        { layer: "Nền tảng thực thi Backend", tech: "Node.js + Express 5", version: "v20 LTS", role: "55+ điểm cuối RESTful API v1 có tài liệu Swagger/OpenAPI 3 tự động" },
        { layer: "Trình ánh xạ CSDL (ORM)", tech: "Sequelize ORM", version: "^6.x", role: "Ánh xạ quan hệ đối tượng cho SQL Server, parameterized queries chống SQL Injection" },
        { layer: "Cơ sở dữ liệu quan hệ", tech: "Microsoft SQL Server 2022", version: "2022", role: "4 CSDL cách ly hoàn toàn: ChatbotToeic_Auth, Quiz, Chatbot, Payment" },
        { layer: "Cổng API & Cân bằng tải", tech: "Nginx Alpine (Reverse Proxy)", version: "Alpine", role: "Điểm truy cập duy nhất, định tuyến yêu cầu theo tiền tố đường dẫn, tiêm tiêu đề bảo mật" },
        { layer: "Trợ lý Trí tuệ nhân tạo", tech: "Google Gemini 2.5 Flash", version: "2.5 Flash", role: "AI gia sư TOEIC hội thoại đa lượt có ngữ cảnh CSDL; Round-Robin API Key Rotation" },
        { layer: "Đường ống Học máy", tech: "Python 3.11 + Flask + scikit-learn", version: "3.11", role: "Dự đoán điểm TOEIC & phân tích kỹ năng yếu; tự động retrain hàng ngày lúc 2:00 AM" },
        { layer: "Hàng đợi thông điệp bất đồng bộ", tech: "RabbitMQ Message Broker", version: "^3.x", role: "Xử lý hàng đợi gửi email xác nhận OTP và thông báo thanh toán VIP" },
        { layer: "Cổng thanh toán trực tuyến", tech: "ZaloPay Dynamic QR API", version: "Sandbox", role: "Mã QR động thời gian thực; Webhook HMAC-SHA256; tích lũy hạn VIP cộng dồn" },
        { layer: "Xác thực & Bảo mật", tech: "JWT Dual-Token + bcrypt + OAuth 2.0", version: "—", role: "Access Token 7d + Refresh Token 30d; OTP Email 10m; RBAC Admin/User; rate-limit" },
        { layer: "Giao diện đa nền tảng", tech: "Flutter 3 + Dart (GetX)", version: "^3.x", role: "Ứng dụng di động đa nền tảng (Android, iOS, Web) từ một mã nguồn duy nhất" },
        { layer: "Đóng gói & Triển khai", tech: "Docker + Docker Compose", version: "—", role: "Điều phối đồng nhất 9 container; 1 lệnh khởi động toàn bộ kèm auto-seed CSDL" },
      ],
      challenges: [
        {
          title: "Kiểm tra trạng thái VIP xuyên dịch vụ (Cross-Service VIP Check)",
          problem: "Dịch vụ Chatbot cần xác minh trạng thái VIP để giới hạn 15 tin nhắn/ngày, nhưng Database-per-Service cấm truy cập trực tiếp CSDL Auth.",
          solution: "Thiết kế VIP Check Middleware gọi điểm cuối nội bộ GET /api/v1/internal/users/:userId trên auth-service trong mạng Docker nội bộ."
        },
        {
          title: "Lỗi khởi động dây chuyền khi SQL Server chưa sẵn sàng",
          problem: "Node.js khởi động nhanh hơn SQL Server 2022 (cần 30-60s), gây Connection Refused hàng loạt.",
          solution: "Triển khai wait-for-db.sh probe kết nối + Docker Compose restart: always + import-data.sh tự động tạo schema & seed data."
        },
        {
          title: "Bảo mật Webhook ZaloPay chống giả mạo và Replay Attack",
          problem: "Webhook có thể bị làm giả hoặc gửi lại payload cũ để kích hoạt VIP gian lận.",
          solution: "Xác thực HMAC-SHA256 tái tính toán MAC; kiểm tra trùng appTransId trong Transactions table; logic VIP cộng dồn không ghi đè."
        },
        {
          title: "Giới hạn tốc độ của Google Gemini API",
          problem: "Nhiều người dùng gửi tin nhắn AI đồng thời gây HTTP 429 Too Many Requests.",
          solution: "Cơ chế Round-Robin API Key Rotation phân tán đều yêu cầu giữa nhiều API keys kết hợp rate limiting 200 req/15min."
        },
        {
          title: "Khởi động nguội mô hình Machine Learning",
          problem: "Hệ thống mới triển khai chưa có dữ liệu làm bài để huấn luyện mô hình scikit-learn.",
          solution: "Gieo sẵn Seed Dataset qua db-init + pre-train model mặc định; cron job lúc 2:00 AM tự động thu thập data mới để retrain hàng ngày."
        },
      ],
    },
    "smart-library": {
      id: "smart-library",
      overview: "Hệ thống Quản lý Thư viện cấp doanh nghiệp (Enterprise-Grade LMS) xây dựng bằng NestJS + TypeORM. Giải quyết trọn vẹn bài toán: vòng đời mượn/trả theo Máy trạng thái (Pending → Borrowing → Returned | Damaged | Lost), hàng đợi duyệt FIFO, hạn ngạch 5 cuốn/độc giả, tính phạt tự động (Hỏng 50% | Mất 150%), đảm bảo toàn vẹn bằng ACID Transactions và Guarded Soft Delete. Đạt 95/95 Test Cases (100% PASS).",
      role: "Kỹ sư Phần mềm & Lập trình viên Backend chính (Lead Backend Developer)",
      duration: "2 tháng",
      teamSize: "3 thành viên",
      techStack: [
        { layer: "Backend Framework", tech: "NestJS v10 + TypeScript 5", version: "NestJS 10", role: "Kiến trúc Module hóa Phân tầng (Controller → Service → Repository → Entity) với IoC Container, Guards, Pipes, ValidationPipe toàn cục" },
        { layer: "Trình ánh xạ CSDL", tech: "TypeORM v0.3", version: "^0.3", role: "Entity Relationships đa bảng, @DeleteDateColumn Soft Delete, DataSource Transaction Manager (ACID)" },
        { layer: "CSDL quan hệ", tech: "MS SQL Server / PostgreSQL", version: "—", role: "Dual-Database: SQL Server (Local Dev + Trigger) / PostgreSQL (Cloud Production)" },
        { layer: "Xác thực & Bảo mật", tech: "JWT HttpOnly Cookie + bcrypt + RBAC", version: "—", role: "Dual-Source Token (Cookie + Bearer), @Roles() Decorator + RolesGuard, bcrypt hash" },
        { layer: "Kiểm thử tự động", tech: "Jest 29 + ts-jest", version: "Jest 29", role: "8 Test Suites, 95 Test Cases (100% PASS), Code Coverage 85%+ trên nghiệp vụ cốt lõi" },
      ],
      challenges: [
        {
          title: "Đảm bảo toàn vẹn dữ liệu khi Trả sách và Tính phạt nhiều bảng cùng lúc",
          problem: "Khi độc giả trả sách hoặc báo mất/hỏng, hệ thống phải cập nhật đồng thời tiền phạt, trạng thái phiếu và kho sách. Nếu xảy ra lỗi mạng giữa chừng, dữ liệu sẽ bị sai lệch (ví dụ: đã thu tiền phạt nhưng kho sách chưa được hoàn trả).",
          solution: "Bọc toàn bộ thao tác vào Giao dịch CSDL nguyên tử (ACID Transaction). Nếu bất kỳ bước nào phát sinh lỗi, hệ thống tự động hoàn tác (Rollback) toàn bộ về ban đầu, đảm bảo số liệu kho và tài chính luôn chính xác tuyệt đối."
        },
        {
          title: "Xử lý công bằng khi nhiều độc giả cùng đặt mượn sách có số lượng giới hạn",
          problem: "Khi một cuốn sách chỉ còn 1 bản nhưng có nhiều người cùng đặt mượn, việc thủ thư duyệt tùy ý dễ gây bất công cho người gửi yêu cầu trước, và độc giả cũng không biết mình đang xếp thứ mấy trong hàng chờ.",
          solution: "Thiết lập cơ chế hàng đợi ưu tiên theo thời gian gửi (FIFO Queue). Bắt buộc thủ thư duyệt đúng người gửi sớm nhất trước, đồng thời tự động tính và hiển thị số thứ tự hàng chờ thời gian thực cho độc giả."
        },
        {
          title: "Chặn nguy cơ mất dấu lịch sử mượn trả khi xóa tài khoản hoặc đầu sách",
          problem: "Nếu xóa vĩnh viễn (Hard Delete) một độc giả hoặc cuốn sách đang có giao dịch, toàn bộ lịch sử mượn trả và biên lai phạt cũ sẽ bị mất, gây thất thoát tài sản thư viện và không thể đối soát.",
          solution: "Áp dụng cơ chế Xóa mềm có điều kiện (Guarded Soft Delete): Hệ thống tự động kiểm tra và chặn 100% thao tác xóa nếu còn phiếu mượn chưa hoàn tất. Dữ liệu sau khi xóa chỉ bị ẩn khỏi giao diện nhưng vẫn được lưu trữ an toàn để phục vụ kiểm toán."
        },
        {
          title: "Bảo vệ phiên đăng nhập an toàn chống đánh cắp mã xác thực (XSS)",
          problem: "Lưu trữ mã xác thực JWT ở bộ nhớ trình duyệt (LocalStorage) dễ bị mã độc JavaScript đánh cắp (tấn công XSS), dẫn đến nguy cơ bị chiếm quyền tài khoản quản trị viên.",
          solution: "Chuyển sang lưu trữ token trong Cookie bảo mật (HttpOnly Cookie) — trình duyệt tự động gửi kèm nhưng mã độc không thể đọc được. Kết hợp phân quyền đa tầng (RBAC) để chặn người dùng thường truy cập trái phép vào các trang quản trị."
        },
      ],
    },
    "tech-store-ecosystem": {
      id: "tech-store-ecosystem",
      overview: "Hệ sinh thái Thương mại điện tử Bán lẻ Thiết bị Công nghệ đa nền tảng kết hợp giữa Ứng dụng di động khách hàng, Bảng điều khiển quản trị doanh nghiệp và Dịch vụ Backend chuyên dụng. Hệ thống số hóa toàn diện quy trình bán lẻ công nghệ: từ duyệt sản phẩm và xử lý giỏ hàng, khóa tồn kho chống bán vượt trong đợt giảm giá cao điểm, thanh toán thẻ quốc tế an toàn, đến chăm sóc khách hàng và kiểm toán biến động kho thời gian thực. Toàn bộ nền tảng đảm bảo tính toàn vẹn dữ liệu và trải nghiệm mượt mà, được kiểm chứng qua 57/57 Test Cases (100% PASS) kiểm thử tự động.",
      role: "Kỹ sư Phần mềm & Lập trình viên Backend chính (Lead Backend Engineer)",
      duration: "3 tháng",
      teamSize: "3 thành viên",
      techStack: [
        { layer: "Kiến trúc hệ thống", tech: "Hybrid Cloud & Micro-Backend", version: "—", role: "Tách biệt rõ ràng trách nhiệm giữa Android Client, Web Admin ERP và Node.js Micro-Backend" },
        { layer: "Ứng dụng Di động", tech: "Android Native (Java 11) + MVVM", version: "API 24+", role: "OOP, MVVM, Material Design 3, Glide CDN Caching, Stripe Android SDK" },
        { layer: "Micro-Backend Service", tech: "Node.js 20+ / Express 4.21 / TS", version: "Node 20+", role: "Stripe Customer Vault, Payment Intent API, Cron Worker giải phóng kho 60s, In-Memory Caching" },
        { layer: "Cổng Thanh toán Quốc tế", tech: "Stripe API & SDK (PCI-DSS)", version: "Stripe 17.6", role: "Client Tokenization (tok_...), Stripe Customer Vault, Atomic WriteBatch 4 bảng" },
        { layer: "Cơ sở dữ liệu Đám mây", tech: "Google Cloud Firestore (NoSQL ACID)", version: "—", role: "14 Collections NoSQL, ACID Transactions kiểm soát khóa kho, Snapshot Listeners" },
        { layer: "Kiểm thử tự động & QA", tech: "Jest 30 + Supertest + JUnit 4", version: "Jest 30", role: "7 Test Suites với 57 Test Cases tự động (100% PASS), 100% Statements Coverage" },
      ],
      challenges: [
        {
          title: "Khóa tồn kho chống bán vượt (Overselling) khi nhiều người cùng mua Flash Sale",
          problem: "Khi một sản phẩm chỉ còn 1 chiếc nhưng có hàng trăm khách hàng cùng bấm 'Thanh toán' trong đợt giảm giá, việc tranh chấp dữ liệu (Race Condition) dễ dẫn đến tình trạng bán âm kho.",
          solution: "Thiết kế cơ chế Khóa tồn kho bi quan (Pessimistic Reservation) bằng Firestore ACID Transaction trước khi mở cổng thanh toán (TTL 5 phút), kết hợp Cron Worker ngầm quét giải phóng kho mỗi 60s."
        },
        {
          title: "Bảo mật thanh toán thẻ tín dụng quốc tế tuân thủ tiêu chuẩn PCI-DSS",
          problem: "Lưu trữ hoặc để số thẻ tín dụng thô (PAN/CVV) đi qua máy chủ ứng dụng tiềm ẩn nguy cơ rò rỉ dữ liệu tài chính nghiêm trọng và vi phạm quy định an ninh thẻ quốc tế.",
          solution: "Áp dụng kỹ thuật Mã hóa tại thiết bị đầu cuối (Client-Side Tokenization) qua Stripe SDK: thông tin thẻ thô gửi trực tiếp lên Stripe để lấy Token đại diện một lần. Backend chỉ lưu trữ mã tham chiếu PaymentMethod trong Vault."
        },
        {
          title: "Triệt tiêu N+1 Query và tối ưu chi phí đọc trên Cơ sở dữ liệu NoSQL Firestore",
          problem: "Khi hiển thị danh sách hàng trăm đơn hàng trên Web Admin, mỗi đơn lại truy vấn thêm một lần sang bảng người dùng làm tăng vọt chi phí đọc của Cloud Firestore.",
          solution: "Xây dựng cơ chế Bộ nhớ đệm tra cứu trong bộ nhớ (In-Memory Lookup Caching userCache) tại tầng Controller, giảm 50%+ số lượng truy vấn đọc Firestore và làm sạch dữ liệu trước khi lưu."
        },
        {
          title: "Đồng bộ tin nhắn CSKH tức thì và Đánh thức ứng dụng di động nhận thông báo",
          problem: "Nhân viên hỗ trợ trên Web Admin phản hồi nhưng khách hàng đã tắt ứng dụng Android thì không nhận được tin nhắn, làm gián đoạn tư vấn.",
          solution: "Kết hợp Firestore Snapshot Listener (đồng bộ tin nhắn <100ms khi mở app) với Hệ thống kích hoạt thông báo sự kiện qua FCM: Backend tự động phát Push Notification đánh thức điện thoại ngay lập tức."
        },
      ],
    }
  },
  en: {
    "toeic-ai-microservices": {
      id: "toeic-ai-microservices",
      overview: "Comprehensive TOEIC certification examination and learning ecosystem engineered to solve the critical challenges of static learning materials, lack of personalized feedback, and prohibitive 1-on-1 tutoring expenses. The platform harmoniously unites three core pillars: an automated 7-Part TOEIC simulation and scoring engine, an intelligent AI tutor (Google Gemini) delivering instant contextual grammar explanations and multi-turn conversational reasoning, and an automated Machine Learning pipeline for personalized weakness diagnosis and score forecasting. Built on an autonomous Microservices architecture with secure ZaloPay payment integration, verified through 51/51 automated and functional test cases (100% PASS rate) across all 55+ API endpoints.",
      role: "Software Engineer & Backend Developer",
      duration: "4 months",
      teamSize: "3 members",
      techStack: [
        { layer: "System Architecture", tech: "Microservices Architecture", version: "—", role: "Decoupled 6 autonomous services (Database-per-Service): Nginx Gateway, Auth, Quiz, Chatbot, Payment, Email Worker" },
        { layer: "Backend Runtime", tech: "Node.js 20 LTS + Express.js", version: "Node 20", role: "High-throughput asynchronous event-driven I/O engine powering microservices" },
        { layer: "AI & Machine Learning", tech: "Google Gemini 2.5 Flash + Python Flask + scikit-learn", version: "Gemini 2.5", role: "Multi-turn tutoring chatbot and ML weakness prediction model with daily 2:00 AM auto-retrain cron" },
        { layer: "Relational Databases", tech: "Microsoft SQL Server 2022 (4 Isolated DBs)", version: "MSSQL 2022", role: "Database-per-Service pattern ensuring strict domain isolation and data consistency" },
        { layer: "Payment Integration", tech: "ZaloPay Sandbox Gateway API", version: "—", role: "Dynamic QR Code creation with HMAC-SHA256 signature verification and Replay Attack protection" },
        { layer: "Testing & QA", tech: "Jest 29 + Supertest + Python unittest", version: "Jest 29", role: "51/51 automated and functional test cases (100% PASS rate) across all 55+ endpoints" },
      ],
      challenges: [
        {
          title: "Synchronizing Multi-Turn Chatbot State Across Distributed Microservices",
          problem: "Maintaining coherent multi-turn AI context across independent stateless HTTP requests without overloading memory.",
          solution: "Architected Chatbot Service with dual-layer state persistence: short-term sliding context window in-memory and long-term history in dedicated SQL Server database."
        },
        {
          title: "Dynamic QR Code Payment Security & Replay Attack Defense",
          problem: "Preventing transaction forgery and replay attacks on asynchronous payment callbacks.",
          solution: "Enforced HMAC-SHA256 signature validation with dynamic app_trans_id, strict timestamp TTL verification, and idempotency checks before granting VIP privileges."
        },
        {
          title: "Automated ML Pipeline Retraining with Cold Start Handling",
          problem: "Cold-start lack of training samples and keeping score prediction models updated with fresh user test attempts.",
          solution: "Seeded initial dataset via db-init + default pre-trained model; automated 2:00 AM Cron Job collecting new test attempts to retrain the scikit-learn model daily."
        },
      ],
    },
    "smart-library": {
      id: "smart-library",
      overview: "Enterprise-Grade Library Management System built with NestJS + TypeORM. Solves complex business challenges: loan lifecycle via State Machine (Pending → Borrowing → Returned | Damaged | Lost), FIFO Queue Enforcement, 5-book quota control, automated penalty engine (Damaged 50% | Lost 150%), guaranteed data integrity through ACID Transactions and Guarded Soft Delete. Achieved 95/95 Test Cases (100% PASS).",
      role: "Software Engineer & Lead Backend Developer",
      duration: "2 months",
      teamSize: "3 members",
      techStack: [
        { layer: "Backend Framework", tech: "NestJS v10 + TypeScript 5", version: "NestJS 10", role: "Layered Modular Architecture (Controller → Service → Repository → Entity) with IoC Container, Guards, Pipes, Global ValidationPipe" },
        { layer: "Database ORM", tech: "TypeORM v0.3", version: "^0.3", role: "Multi-table Entity Relationships, @DeleteDateColumn Soft Delete, DataSource Transaction Manager (ACID)" },
        { layer: "Relational Database", tech: "MS SQL Server / PostgreSQL", version: "—", role: "Dual-Database: SQL Server (Local Dev + Triggers) / PostgreSQL (Cloud Production)" },
        { layer: "Auth & Security", tech: "JWT HttpOnly Cookie + bcrypt + RBAC", version: "—", role: "Dual-Source Token (Cookie + Bearer), @Roles() Decorator + RolesGuard, bcrypt hash" },
        { layer: "Testing & QA", tech: "Jest 29 + ts-jest", version: "Jest 29", role: "8 Test Suites, 95 Test Cases (100% PASS), 85%+ core business logic coverage" },
      ],
      challenges: [
        {
          title: "Multi-Table Data Integrity During Book Return & Penalty Processing",
          problem: "When returning books or reporting damage/loss, the system must atomically record fines, transition loan statuses, and update physical stock. A network drop mid-process causes data inconsistency (e.g. fines collected but inventory not restored).",
          solution: "Encapsulated all mutation steps within an atomic ACID Database Transaction. Any runtime failure triggers an immediate automatic rollback, guaranteeing zero discrepancies between inventory and financial records."
        },
        {
          title: "Fair Queue Enforcement for Concurrent Borrow Requests on Limited Stock",
          problem: "When multiple readers contend for the last available copy of a popular book, arbitrary approval orders cause unfairness for earlier applicants, while readers lack visibility into their waiting queue position.",
          solution: "Implemented FIFO Queue Enforcement forcing chronological approval order based on request timestamps, paired with real-time queue position computation displayed on the reader dashboard."
        },
        {
          title: "Preventing Audit Trail Loss When Deleting Active Readers or Book Records",
          problem: "Physically hard-deleting a user account or book with active borrow records permanently destroys loan histories and penalty logs, making financial reconciliation and asset tracking impossible.",
          solution: "Enforced Guarded Soft Delete: the system strictly blocks deletion attempts if active loans exist. Deleted records are marked inactive and hidden from active views while remaining intact in the database for auditing."
        },
        {
          title: "Hardening JWT Authentication Against Client-Side Token Theft (XSS)",
          problem: "Storing JWT tokens in browser LocalStorage exposes authentication sessions to Cross-Site Scripting (XSS) attacks, risking unauthorized administrative privilege escalation.",
          solution: "Migrated token storage to secure HttpOnly Cookies (inaccessible to JavaScript) with Dual-Source extraction fallback, combined with strict Role-Based Access Control (RBAC) guards protecting admin endpoints."
        },
      ],
    },
    "tech-store-ecosystem": {
      id: "tech-store-ecosystem",
      overview: "Multi-platform Tech Retail E-Commerce Ecosystem seamlessly uniting a Customer Mobile App, an Enterprise Web Admin Portal, and a dedicated Backend Service. The platform comprehensively streamlines end-to-end retail operations: from catalog browsing and smart cart management, pessimistic stock reservation preventing flash-sale overselling, and secure international card checkout, to real-time omnichannel customer support and stock movement audit trails. The system guarantees absolute data integrity and high availability, verified by 57/57 automated test cases (100% PASS rate).",
      role: "Software Engineer & Lead Backend Developer",
      duration: "3 months",
      teamSize: "3 members",
      techStack: [
        { layer: "System Architecture", tech: "Hybrid Cloud & Micro-Backend", version: "—", role: "Strict separation of concerns between Android Client, Web Admin ERP, and Node.js Micro-Backend" },
        { layer: "Mobile Client App", tech: "Android Native (Java 11) + MVVM", version: "API 24+", role: "OOP, MVVM, Material Design 3, Glide CDN Caching, Stripe Android SDK" },
        { layer: "Micro-Backend Service", tech: "Node.js 20+ / Express 4.21 / TS", version: "Node 20+", role: "Stripe Customer Vault, Payment Intent API, Cron Worker for stock release 60s, In-Memory Caching" },
        { layer: "Payment Gateway", tech: "Stripe API & SDK (PCI-DSS)", version: "Stripe 17.6", role: "Client Tokenization (tok_...), Stripe Customer Vault, Atomic WriteBatch across 4 documents" },
        { layer: "Cloud Database", tech: "Google Cloud Firestore (NoSQL ACID)", version: "—", role: "14 NoSQL Collections, ACID Transactions for stock reservation, Snapshot Listeners" },
        { layer: "Testing & QA", tech: "Jest 30 + Supertest + JUnit 4", version: "Jest 30", role: "7 Test Suites with 57 automated test cases (100% PASS), 100% Statements Coverage" },
      ],
      challenges: [
        {
          title: "Pessimistic Stock Reservation Preventing Flash Sale Overselling",
          problem: "When hundreds of concurrent shoppers contend for the last available item during flash sales, race conditions risk overselling physical stock.",
          solution: "Architected a Pessimistic Stock Reservation mechanism using Firestore ACID Transactions before checkout (TTL 5 minutes), paired with a 60-second background Cron worker for automatic stock recovery."
        },
        {
          title: "PCI-DSS Compliant Credit Card Payment Pipeline via Stripe",
          problem: "Allowing raw credit card data (PAN/CVV) to touch internal backend servers violates PCI-DSS security standards and exposes the platform to financial data leaks.",
          solution: "Implemented client-side tokenization via Stripe SDK: raw credentials are exchanged for one-time tokens directly with Stripe. The backend only stores vault PaymentMethod references."
        },
        {
          title: "Eliminating N+1 Queries & Optimizing Read Costs on NoSQL Firestore",
          problem: "Rendering hundreds of orders on the Web Admin portal caused repetitive queries to the user collection for customer names/emails (N+1 Query issue).",
          solution: "Implemented an In-Memory Lookup Cache (userCache) at the controller layer, saving 50%+ Firestore read operations and sanitizing payloads before persistence."
        },
        {
          title: "Real-Time CSKH Omnichannel Sync & Background Mobile Wakeup",
          problem: "When support agents reply from the Web Admin, mobile users who have closed the Android app fail to receive responses.",
          solution: "Combined Firestore Snapshot Listeners (sub-100ms real-time chat while active) with an Event-Driven Notification Pipeline via FCM to wake up background devices immediately."
        },
      ],
    }
  }
};
