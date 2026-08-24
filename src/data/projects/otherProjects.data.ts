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
      overview: "Hệ sinh thái thương mại điện tử bán lẻ thiết bị công nghệ hoàn chỉnh, bao gồm Ứng dụng di động thuần Android (Android Native - Java hướng đối tượng OOP) dành cho khách hàng mua sắm và Bảng điều khiển quản trị web (Next.js Dashboard) dành cho quản trị viên quản lý kho hàng và đơn hàng theo thời gian thực.",
      role: "Lập trình viên Di động & Toàn diện (Mobile & Full-stack Developer)",
      duration: "3 tháng",
      teamSize: "3 thành viên",
      techStack: [
        { layer: "Ứng dụng Di động", tech: "Android Studio (Ngôn ngữ Java thuần)", version: "API 31+", role: "Lập trình hướng đối tượng (OOP), mô hình kiến trúc MVC/MVVM, lưu đệm ngoại tuyến (Offline Caching)" },
        { layer: "Bảng điều khiển Quản trị", tech: "Next.js + Tailwind CSS", version: "^14", role: "Bảng điều khiển theo dõi doanh thu, cập nhật trạng thái đơn hàng và kiểm soát tồn kho tức thì" },
        { layer: "Cơ sở dữ liệu thời gian thực", tech: "Google Firebase Firestore", version: "—", role: "Đồng bộ danh mục sản phẩm và trạng thái đơn hàng theo thời gian thực hai chiều" },
        { layer: "Thông báo đẩy di động", tech: "Firebase Cloud Messaging (FCM)", version: "—", role: "Gửi thông báo đẩy về trạng thái giao hàng và chương trình khuyến mãi đến điện thoại người dùng" },
        { layer: "Cổng thanh toán quốc tế", tech: "Stripe Payment Gateway API", version: "—", role: "Tích hợp thanh toán thẻ quốc tế bảo mật chuẩn PCI-DSS, tự động xác nhận qua Webhook" },
      ],
      challenges: [
        {
          title: "Đảm bảo trải nghiệm mua sắm mượt mà ngay cả khi thiết bị mất kết nối mạng (Offline-First)",
          problem: "Khi người dùng đi vào khu vực sóng yếu hoặc mất mạng đột ngột, nếu không có cơ chế lưu trữ cục bộ thì ứng dụng sẽ bị trắng màn hình và giỏ hàng bị mất dữ liệu.",
          solution: "Tích hợp Cơ sở dữ liệu cục bộ Room (SQLite) trên thiết bị Android để lưu đệm toàn bộ danh mục sản phẩm đã xem, kết hợp cơ chế tự động đồng bộ chênh lệch (Delta Sync) của Firebase Firestore ngay khi có mạng trở lại."
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
        { layer: "Backend Runtime", tech: "Node.js + Express 5", version: "v20 LTS", role: "55+ versioned RESTful API v1 endpoints with auto-generated Swagger/OpenAPI 3 docs" },
        { layer: "Database ORM", tech: "Sequelize ORM", version: "^6.x", role: "Object-Relational Mapping for SQL Server with parameterized queries preventing SQL injection" },
        { layer: "Relational Database", tech: "Microsoft SQL Server 2022", version: "2022", role: "4 isolated databases: ChatbotToeic_Auth, Quiz, Chatbot, Payment" },
        { layer: "API Gateway", tech: "Nginx Alpine (Reverse Proxy)", version: "Alpine", role: "Single ingress point, path-prefix routing, security header injection, rate limiting" },
        { layer: "AI Conversational Agent", tech: "Google Gemini 2.5 Flash", version: "2.5 Flash", role: "Multi-turn tutoring chatbot with DB context; Round-Robin API Key Rotation" },
        { layer: "Machine Learning Pipeline", tech: "Python 3.11 + Flask + scikit-learn", version: "3.11", role: "Score prediction & weak skill analysis; automated daily retrain at 2:00 AM" },
        { layer: "Message Broker", tech: "RabbitMQ Message Broker", version: "^3.x", role: "Async email delivery queue for OTP registration and VIP payment notices" },
        { layer: "Payment Gateway", tech: "ZaloPay Dynamic QR API", version: "Sandbox", role: "Dynamic QR codes; HMAC-SHA256 Webhook validation; cumulative VIP expiry extension" },
        { layer: "Auth & Security", tech: "JWT Dual-Token + bcrypt + OAuth 2.0", version: "—", role: "Access Token 7d + Refresh Token 30d; OTP Email 10m; RBAC Admin/User; rate limiting" },
        { layer: "Cross-Platform Frontend", tech: "Flutter 3 + Dart (GetX)", version: "^3.x", role: "Cross-platform (Android, iOS, Web) from single codebase with GetX state" },
        { layer: "Containerization", tech: "Docker + Docker Compose", version: "—", role: "9 containers deployed via single command with automated schema/seed data initialization" },
      ],
      challenges: [
        {
          title: "Cross-Service VIP Status Verification Without Direct Database Access",
          problem: "Chatbot Service needs to enforce 15 msgs/day limit for free users, but Database-per-Service prohibits direct access to Auth DB.",
          solution: "Engineered VIP Check Middleware making internal REST calls to GET /api/v1/internal/users/:userId on Auth Service within Docker network."
        },
        {
          title: "Cascading Startup Failure When Node.js Services Boot Before SQL Server",
          problem: "Node.js services start faster than SQL Server 2022 (30-60s), causing Connection Refused errors across all services.",
          solution: "Implemented wait-for-db.sh probe + Docker Compose restart: always + import-data.sh auto-initialization script."
        },
        {
          title: "ZaloPay Webhook Security Against Forged Requests and Replay Attacks",
          problem: "Callbacks could be forged or replayed to fraudulently activate or duplicate VIP subscriptions.",
          solution: "HMAC-SHA256 signature verification; appTransId deduplication in Transactions table; cumulative additive VIP expiry logic."
        },
        {
          title: "Google Gemini API Rate Limiting Disrupting Chatbot Availability",
          problem: "Single API key hits rate limits under concurrent VIP traffic, returning HTTP 429.",
          solution: "Round-Robin API Key Rotation distributing load across multiple keys + 200 req/15min gateway rate limiting."
        },
        {
          title: "Machine Learning Model Cold Start on First Deployment",
          problem: "No initial user test attempt data exists, causing model training to fail on first boot.",
          solution: "Pre-seeded training dataset via db-init + pre-trained model artifact (.pkl); automated daily cron at 2:00 AM retrains on real data."
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
      overview: "Full-cycle tech retail e-commerce ecosystem consisting of an Android Native mobile app (OOP Java) for consumer purchasing and a reactive Next.js Web Admin Dashboard for real-time inventory and order fulfillment management.",
      role: "Mobile & Full-stack Developer",
      duration: "3 months",
      teamSize: "2 members",
      techStack: [
        { layer: "Mobile Application", tech: "Android Studio (Native Java)", version: "API 31+", role: "Object-Oriented Programming (OOP), MVC/MVVM patterns, local SQLite/Room caching" },
        { layer: "Admin Web Portal", tech: "Next.js + Tailwind CSS", version: "^14", role: "Real-time revenue metrics, order pipeline management, and stock auditing" },
        { layer: "Real-time Database", tech: "Google Firebase Firestore", version: "—", role: "Bidirectional real-time data sync for product catalogs and order status updates" },
        { layer: "Push Notifications", tech: "Firebase Cloud Messaging (FCM)", version: "—", role: "Dispatches automated order milestone alerts and promotional notifications" },
        { layer: "Payment Integration", tech: "Stripe Payment Gateway API", version: "—", role: "PCI-DSS compliant international credit card processing with Webhook validation" },
      ],
      challenges: [
        {
          title: "Offline-First Mobile Cart and Catalog Availability",
          problem: "When users entered poor network zones, unhandled network drops caused blank screen states and lost shopping carts.",
          solution: "Integrated an offline-first SQLite/Room cache on the Android client, paired with Firestore delta synchronization to reconcile data seamlessly upon reconnecting."
        },
      ],
    }
  }
};
