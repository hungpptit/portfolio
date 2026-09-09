import { TechStackItem, ProjectChallenge } from '../../types';
import { Language } from '../../context/LanguageContext';

export interface ToeicChatbotData {
  overview: string;
  role: string;
  duration: string;
  teamSize: string;
  branch: string;
  githubUrl: string;
  techStack: TechStackItem[];
  challenges: ProjectChallenge[];
}

export const TOEIC_CHATBOT_DETAIL: Record<Language, ToeicChatbotData> = {
  vi: {
    overview: "Hệ sinh thái học tập và luyện thi chứng chỉ Tiếng Anh Giao tiếp Quốc tế (TOEIC) toàn diện, giải quyết bài toán thiếu tương tác cá nhân hóa và chi phí gia sư đắt đỏ của các nền tảng truyền thống. Hệ thống được kiến trúc theo mô hình Microservices với 6 dịch vụ độc lập phía sau Cổng API Nginx, áp dụng triệt để nguyên tắc Database-per-Service với 4 CSDL SQL Server 2022, mỗi service sở hữu dữ liệu riêng và không thực hiện cross-database joins. Nền tảng kết hợp ba trụ cột kỹ thuật: Động cơ thi thử chuẩn hóa 7 Parts với chấm điểm tự động; Trợ lý AI gia sư thông minh (Google Gemini 2.5 Flash) có khả năng gọi REST nội bộ tra cứu ngữ cảnh đề thi thực tế; Đường ống Học máy (Python Flask + scikit-learn) suy luận Stateless In-Memory chẩn đoán kỹ năng yếu kèm cơ chế Rule-based Fallback; cùng luồng kích hoạt VIP bất đồng bộ qua hàng đợi thông điệp RabbitMQ. Hệ thống được xác thực qua 51/51 Test Cases (100% PASS) bao phủ các workflow chức năng, integration và security chính.",
    role: "Kỹ sư Phần mềm & Lập trình viên Backend (Software Engineer & Backend Developer)",
    duration: "4 tháng",
    teamSize: "3 thành viên",
    branch: "tree/SWE_BE3",
    githubUrl: "https://github.com/hungpptit/chatbot-toeic-flutter/tree/SWE_BE3",

    techStack: [
      { layer: "Kiến trúc hệ thống", tech: "Kiến trúc Vi dịch vụ (Microservices)", version: "—", role: "Phân tách 6 dịch vụ độc lập theo nguyên tắc Database-per-Service: Auth Service (:8081), Quiz Service (:8082), Payment Service (:8083), Chatbot Service (:8084), Email Worker (Queue), ML Service (:5000); điều phối tập trung qua Cổng API Nginx" },
      { layer: "Nền tảng thực thi Backend", tech: "Node.js + Express 5", version: "v20 LTS", role: "Xây dựng 55+ điểm cuối RESTful API v1 có phiên bản hóa đường dẫn (Path Versioning), hỗ trợ phân trang (Pagination), phong bì phản hồi nhất quán (Response Envelope), kèm tài liệu tương tác Swagger/OpenAPI 3" },
      { layer: "Cơ sở dữ liệu quan hệ", tech: "Microsoft SQL Server 2022", version: "2022", role: "4 cơ sở dữ liệu cách ly logic hoàn toàn (Database-per-Service): ChatbotToeic_Auth, ChatbotToeic_Quiz, ChatbotToeic_Chatbot, ChatbotToeic_Payment; triệt tiêu 100% cross-database queries/joins; lập chỉ mục trên các trường truy vấn nóng" },
      { layer: "Trình ánh xạ CSDL (ORM)", tech: "Sequelize ORM", version: "^6.x", role: "Ánh xạ quan hệ đối tượng cho SQL Server, quản lý lược đồ bảng riêng biệt cho từng service, truy vấn tham số hóa (Parameterized Queries) ngăn ngừa SQL Injection" },
      { layer: "Hàng đợi thông điệp (Message Broker)", tech: "RabbitMQ (AMQP)", version: "^3.x", role: "Xử lý giao dịch phân tán hướng sự kiện (Event-Driven): kích hoạt VIP bất đồng bộ qua queue vip_activation_queue (kèm Ack/Nack, retry & HTTP sync fallback); tách biệt worker gửi email/OTP qua email_queue" },
      { layer: "Cổng API & Reverse Proxy", tech: "Nginx Alpine", version: "Alpine", role: "Điểm truy cập duy nhất (Cổng :8080), định tuyến yêu cầu theo tiền tố đường dẫn đến các microservice nội bộ, ẩn giấu cấu trúc mạng phía sau, tiêm tiêu đề bảo mật (X-Frame-Options, X-Content-Type-Options)" },
      { layer: "Trợ lý Trí tuệ nhân tạo (AI)", tech: "Google Gemini 2.5 Flash", version: "2.5 Flash", role: "Trợ lý AI gia sư TOEIC hỗ trợ hội thoại đa lượt có ngữ cảnh; gọi REST nội bộ (/api/v1/internal/smart-context) lấy đề thi từ Quiz Service; cơ chế xoay vòng và dự phòng khóa API (Key Fallback Rotation)" },
      { layer: "Đường ống Học máy (ML Pipeline)", tech: "Python 3.11 + Flask + scikit-learn", version: "Python 3.11", role: "Dịch vụ Stateless ML qua POST /predict suy luận in-memory (GaussianNB + Unified Model); phân tích kỹ năng yếu theo Part; cơ chế tự động suy thoái Rule-based Fallback khi mất kết nối; Cron Job tự động huấn luyện lại" },
      { layer: "Cổng thanh toán trực tuyến", tech: "ZaloPay Dynamic QR API", version: "Sandbox", role: "Sinh mã QR thanh toán động theo từng đơn hàng; xác thực Webhook bằng chữ ký số HMAC-SHA256; kiểm tra idempotency trạng thái giao dịch chống xử lý trùng lặp callback; tích lũy hạn VIP cộng dồn" },
      { layer: "Xác thực & Bảo mật", tech: "JWT Dual-Token + bcrypt + OAuth 2.0", version: "—", role: "Mã xác thực kép (Access Token 7 ngày + Refresh Token 30 ngày); Mã xác minh OTP qua Email (TTL 10 phút); Phân quyền RBAC (Admin/User); bcrypt hash mật khẩu; rate limiting chống lạm dụng API" },
      { layer: "Lưu trữ đa phương tiện đám mây", tech: "Cloudinary CDN", version: "—", role: "Phân phối hình ảnh câu hỏi và tệp âm thanh bài nghe TOEIC qua CDN; tự động nhận diện thời lượng âm thanh; hỗ trợ tải hàng loạt từ đường dẫn cục bộ cho Quản trị viên" },
      { layer: "Giao diện đa nền tảng (Mobile)", tech: "Flutter 3 + Dart (GetX State)", version: "^3.x", role: "Ứng dụng đa nền tảng (Android, iOS, Web) từ một mã nguồn duy nhất; quản lý trạng thái bằng GetX; phát âm thanh bài nghe bằng just_audio; hiển thị biểu đồ thống kê bằng fl_chart" },
      { layer: "Đóng gói & Điều phối hạ tầng", tech: "Docker + Docker Compose", version: "—", role: "Đóng gói và điều phối đồng nhất 9 containers (5 Node.js + 1 Python ML + 1 Nginx + 1 SQL Server + 1 RabbitMQ); khởi động toàn bộ hệ thống bằng 1 lệnh duy nhất kèm script khởi tạo CSDL tự động" },
    ],

    challenges: [
      {
        title: "Kích hoạt VIP bất đồng bộ qua RabbitMQ & Đảm bảo tính nhất quán dữ liệu (Event-Driven vs HTTP Sync Fallback)",
        problem: "Sau khi người dùng thanh toán thành công qua ZaloPay, Payment Service cần cập nhật thời hạn VIP cho tài khoản bên Auth Service. Do hai service sở hữu 2 CSDL riêng biệt (ChatbotToeic_Payment và ChatbotToeic_Auth), việc gọi HTTP đồng bộ trực tiếp có nguy cơ thất bại do nghẽn mạng hoặc Auth Service bận, gây mất quyền lợi VIP của khách hàng.",
        solution: "Thiết kế kiến trúc hướng sự kiện (Event-Driven) 2 lớp: (1) Sau khi xác nhận giao dịch thành công trong Payment DB, service phát sự kiện vào RabbitMQ queue vip_activation_queue với message bền vững (durable). Auth Service lắng nghe, cập nhật hạn VIP cộng dồn và gửi Ack; (2) Nếu RabbitMQ gặp sự cố kết nối, hệ thống tự động kích hoạt cơ chế dự phòng (HTTP Sync Fallback) gọi trực tiếp PATCH /api/v1/internal/users/:userId để đảm bảo tài khoản người dùng luôn được kích hoạt VIP tức thì."
      },
      {
        title: "Kiểm tra trạng thái VIP xuyên dịch vụ khi Chatbot Service không có quyền truy cập CSDL Auth (Cross-Service VIP Gating)",
        problem: "Dịch vụ Chatbot (chatbot-service) cần xác minh trạng thái VIP để giới hạn 15 tin nhắn/ngày cho tài khoản miễn phí. Tuy nhiên, theo nguyên tắc Database-per-Service, Chatbot Service hoàn toàn không có quyền truy cập CSDL Auth Service nơi lưu trữ thông tin isVip và vipExpireAt.",
        solution: "Triển khai tầng trung gian VIP Check Middleware trong chatbot-service: Trước mỗi yêu cầu chat AI, middleware tự động gọi HTTP GET /api/v1/auth/me với token người dùng sang Auth Service (qua mạng Docker nội bộ). Nếu tài khoản là VIP còn hạn, hệ thống bỏ qua kiểm tra; nếu là tài khoản miễn phí, middleware đếm số tin nhắn gửi trong ngày hôm nay từ bảng Messages nội bộ và trả về HTTP 429 khi vượt quá hạn ngạch 15 tin nhắn/ngày."
      },
      {
        title: "Tách rời hoàn toàn ML Service thành Stateless Inference & Cơ chế Chịu lỗi (Stateless ML & Rule-Based Fallback)",
        problem: "Mô hình Học máy dự đoán điểm TOEIC ban đầu đòi hỏi kết nối trực tiếp vào CSDL để đọc lịch sử bài thi, làm vi phạm tính độc lập của dịch vụ và gây tắc nghẽn I/O khi nhiều yêu cầu dự đoán diễn ra đồng thời.",
        solution: "Tái cấu trúc ML Service thành dịch vụ suy luận hoàn toàn không trạng thái (Stateless Inference) qua endpoint POST /predict. Quiz Service tự trích xuất vector đặc trưng (tổng câu hỏi, độ chính xác, số ngày hoạt động, điểm từng Part) từ DB của mình và gửi qua payload JSON. ML Service chạy thuật toán dự đoán (GaussianNB cho học viên mới, Unified Model cho học viên trên 10 bài làm) hoàn toàn trên RAM. Nếu ML Service gặp sự cố hoặc timeout, hệ thống tự động kích hoạt Rule-based Fallback (dựa trên ngưỡng accuracy < 50%) để luôn trả kết quả chẩn đoán mà không làm gián đoạn trải nghiệm người dùng."
      },
      {
        title: "Bảo mật Webhook ZaloPay: Xác thực chữ ký HMAC-SHA256 kết hợp kiểm tra Idempotency chống Duplicate Callback",
        problem: "Webhook callback từ cổng thanh toán có nguy cơ bị giả mạo dữ liệu hoặc bị mạng viễn thông gửi lại nhiều lần (duplicate webhook / replay), dẫn đến nguy cơ kích hoạt tài khoản trái phép hoặc bị cộng dồn hạn VIP sai lệch.",
        solution: "Triển khai cơ chế bảo mật kép: (1) Tính toán lại mã MAC bằng thuật toán HMAC-SHA256 từ payload data với secret KEY2 và so sánh với MAC nhận được — nếu không khớp lập tức từ chối với return_code: -1; (2) Cơ chế kiểm tra Idempotency tại CSDL: Kiểm tra trạng thái giao dịch trong bảng Transactions, nếu transaction.status đã là 'success' thì lập tức trả về mã xác nhận đã xử lý thành công mà không cộng thêm hạn VIP lần hai; (3) Thuật toán cộng dồn hạn VIP: Nếu tài khoản đang còn hạn VIP thì cộng dồn tiếp từ ngày hết hạn hiện tại thay vì ghi đè từ ngày hôm nay."
      },
      {
        title: "Tra cứu ngữ cảnh câu hỏi TOEIC thời gian thực cho Chatbot qua Internal REST Endpoint & Graceful Degradation",
        problem: "Người học thường hỏi chatbot giải thích các câu hỏi TOEIC cụ thể, nhưng Gemini AI mặc định không có ngữ cảnh về đề thi trong ngân hàng câu hỏi nội bộ, dễ dẫn đến câu trả lời chung chung hoặc ảo giác (hallucination).",
        solution: "Thiết kế đường ống trích xuất ngữ cảnh liên dịch vụ (Internal Context Retrieval): Khi người dùng gửi câu hỏi, Chatbot Service gọi REST nội bộ sang Quiz Service qua POST /api/v1/internal/smart-context/:conversationId. Quiz Service phân tích câu hỏi, truy vấn CSDL để lấy đáp án chính xác, lời giải thích và từ vựng liên quan rồi chuyển thành ngữ cảnh bổ sung cho Gemini sinh phản hồi. Nếu Quiz Service tạm thời không phản hồi, Chatbot Service tự động suy thoái mềm (Graceful Degradation) chuyển sang chế độ General-AI giải thích theo kiến thức chung, đảm bảo cuộc trò chuyện không bị gián đoạn."
      },
    ],
  },
  en: {
    overview: "Comprehensive TOEIC certification examination and learning ecosystem engineered to solve the critical challenges of static learning materials, lack of personalized feedback, and prohibitive 1-on-1 tutoring expenses. Built on a Microservices Architecture featuring 6 independent services behind a unified Nginx API Gateway, strictly applying the Database-per-Service pattern with 4 SQL Server 2022 databases, each service owning its data domain without cross-database joins. The platform harmoniously unites three technical pillars: an automated 7-Part TOEIC simulation and scoring engine; an intelligent AI tutor (Google Gemini 2.5 Flash) with internal REST context retrieval from the question bank; a Stateless Machine Learning Pipeline (Python Flask + scikit-learn) for in-memory score forecasting and weak skill diagnosis with automatic Rule-based Fallback; and asynchronous VIP activation via RabbitMQ message broker. Verified through 51/51 automated test cases (100% PASS rate) covering core functional, integration, and security workflows.",
    role: "Software Engineer & Backend Developer",
    duration: "4 months",
    teamSize: "3 members",
    branch: "tree/SWE_BE3",
    githubUrl: "https://github.com/hungpptit/chatbot-toeic-flutter/tree/SWE_BE3",

    techStack: [
      { layer: "System Architecture", tech: "Microservices Architecture", version: "—", role: "Decoupled 6 autonomous services (Database-per-Service): Auth Service (:8081), Quiz Service (:8082), Payment Service (:8083), Chatbot Service (:8084), Email Worker (Queue), ML Service (:5000); unified ingress via Nginx API Gateway" },
      { layer: "Backend Runtime", tech: "Node.js + Express 5", version: "v20 LTS", role: "55+ versioned RESTful API v1 endpoints with path versioning, pagination, uniform response envelope, and auto-generated interactive Swagger/OpenAPI 3 documentation" },
      { layer: "Relational Database", tech: "Microsoft SQL Server 2022", version: "2022", role: "4 logically isolated databases (Database-per-Service): ChatbotToeic_Auth, ChatbotToeic_Quiz, ChatbotToeic_Chatbot, ChatbotToeic_Payment; zero cross-database queries/joins; indexed on hot query fields" },
      { layer: "Database ORM", tech: "Sequelize ORM", version: "^6.x", role: "Object-Relational Mapping for SQL Server with isolated schema definitions per service, migrations, and parameterized queries preventing SQL injection attacks" },
      { layer: "Message Broker", tech: "RabbitMQ (AMQP)", version: "^3.x", role: "Event-Driven transaction processing: asynchronous VIP activation queue (vip_activation_queue) with message Ack/Nack, retry policies, and sync HTTP fallback; decoupled async email/OTP queue (email_queue)" },
      { layer: "API Gateway & Reverse Proxy", tech: "Nginx Alpine", version: "Alpine", role: "Single ingress entry point (:8080), path-prefix routing to internal microservices, infrastructure abstraction, and security header injection (X-Frame-Options, X-Content-Type-Options)" },
      { layer: "AI Conversational Agent", tech: "Google Gemini 2.5 Flash", version: "2.5 Flash", role: "Multi-turn context-aware TOEIC tutoring chatbot; inter-service REST integration (/api/v1/internal/smart-context) retrieving question bank context from Quiz Service; API Key Fallback Rotation" },
      { layer: "Machine Learning Pipeline", tech: "Python 3.11 + Flask + scikit-learn", version: "Python 3.11", role: "Stateless ML inference via POST /predict performing pure in-memory prediction (GaussianNB + Unified Model); weak skill diagnosis; automated Rule-based Fallback upon failure; daily retraining Cron Job" },
      { layer: "Payment Integration", tech: "ZaloPay Dynamic QR API", version: "Sandbox", role: "Real-time dynamic QR code generation per transaction; webhook callback verification via HMAC-SHA256 signature; transaction idempotency check preventing duplicate processing; cumulative VIP extension" },
      { layer: "Auth & Security", tech: "JWT Dual-Token + bcrypt + OAuth 2.0", version: "—", role: "Dual-token strategy (Access Token 7-day + Refresh Token 30-day); Email OTP verification (10-min TTL); Role-Based Access Control (Admin/User); bcrypt password hashing; rate limiting protection" },
      { layer: "Cloud Media Storage", tech: "Cloudinary CDN", version: "—", role: "Managed CDN for TOEIC question images and listening audio files; automatic audio duration detection; batch upload from local paths for Admin workflows" },
      { layer: "Cross-Platform Frontend", tech: "Flutter 3 + Dart (GetX State)", version: "^3.x", role: "Single-codebase cross-platform application (Android, iOS, Web) with GetX state management, just_audio listening playback, fl_chart statistics visualization, and flutter_secure_storage" },
      { layer: "Containerization & Orchestration", tech: "Docker + Docker Compose", version: "—", role: "Unified deployment orchestrating 9 containers (5 Node.js + 1 Python ML + 1 Nginx + 1 SQL Server + 1 RabbitMQ); single-command initialization with automated database schema migration scripts" },
    ],

    challenges: [
      {
        title: "Asynchronous VIP Activation via RabbitMQ & Eventual Data Consistency (Event-Driven vs Sync HTTP Fallback)",
        problem: "After a successful ZaloPay payment, the Payment Service needs to update the user's VIP subscription in the Auth Service. Because each service strictly owns its separate database (ChatbotToeic_Payment and ChatbotToeic_Auth), relying solely on synchronous HTTP calls risks transaction failures during network blips or Auth Service restarts, potentially denying paying users their VIP benefits.",
        solution: "Engineered a two-layer Event-Driven architecture: (1) After committing the local transaction in Payment DB, the service publishes a persistent event to the RabbitMQ vip_activation_queue. The Auth Service consumes this event, calculates cumulative VIP expiration dates, and issues an explicit Ack; (2) If RabbitMQ connection is unavailable, an automatic synchronous HTTP fallback triggers PATCH /api/v1/internal/users/:userId directly, guaranteeing immediate VIP activation under all network conditions."
      },
      {
        title: "Cross-Service VIP Status Verification Without Direct Database Access (Database-per-Service Boundary)",
        problem: "The Chatbot Service needs to enforce a 15 messages/day limit for free-tier users by checking their VIP subscription status, but the Database-per-Service pattern strictly prohibits direct access to the Auth Service database where isVip and vipExpireAt are stored.",
        solution: "Engineered a VIP Check Middleware layer in the Chatbot Service: Before each AI message request, the middleware calls GET /api/v1/auth/me on the Auth Service via the internal Docker network. If the user has an active VIP subscription, unrestricted chat is granted; if the user is on the free tier, the middleware counts messages sent today from the local Messages table and returns HTTP 429 when exceeding the 15-message daily quota."
      },
      {
        title: "Decoupling Machine Learning into Stateless Inference & Fault-Tolerant Resilience (Stateless ML & Rule-Based Fallback)",
        problem: "The original ML score prediction model required direct SQL connections to query test attempt histories, violating service isolation and creating database I/O bottlenecks during concurrent prediction requests.",
        solution: "Refactored the Python ML service into a purely Stateless Inference API via POST /predict. The Quiz Service extracts feature vectors (question counts, accuracy, active days, per-Part performance) from its own database and transmits them via JSON payload. The ML service performs prediction (GaussianNB for newcomers, Unified Model for users with >= 10 tests) entirely in-memory. If the ML service is unreachable or errors, an automated Rule-based Fallback (accuracy < 50%) generates instant diagnoses without interrupting user workflows."
      },
      {
        title: "ZaloPay Webhook Security: HMAC-SHA256 Verification & Transaction Idempotency Checks Against Duplicate Callbacks",
        problem: "Payment gateway webhooks are vulnerable to data forgery or repeated network callbacks (duplicate webhook deliveries / replay attacks), risking unauthorized VIP activation or incorrect additive duration extensions.",
        solution: "Implemented dual-layer security: (1) Recomputes the MAC signature from the raw data payload using HMAC-SHA256 with secret KEY2 and rejects mismatches with return_code: -1; (2) Database-level Idempotency Check: Verifies the transaction status in the Transactions table — if already marked as 'success', it immediately returns success acknowledgment without applying duplicate VIP duration; (3) Cumulative VIP logic: If a user's VIP is currently active, new durations extend from the existing expiry date rather than overwriting from today."
      },
      {
        title: "Real-Time Question Bank Context Retrieval for Chatbot via Internal REST Endpoint & Graceful Degradation",
        problem: "Learners frequently ask the AI chatbot to explain specific TOEIC exam questions, but vanilla Gemini AI lacks internal exam database context, resulting in generic explanations or hallucinations.",
        solution: "Engineered an inter-service context retrieval pipeline: When an exam-related question is submitted, Chatbot Service calls Quiz Service via POST /api/v1/internal/smart-context/:conversationId. Quiz Service analyzes the question, retrieves exact question text, verified answers, explanations, and vocabulary definitions from its database, and injects them as augmented context for Gemini. If Quiz Service is unreachable, Chatbot Service automatically degrades gracefully to General-AI mode, ensuring an uninterrupted conversational experience."
      },
    ],
  }
};
