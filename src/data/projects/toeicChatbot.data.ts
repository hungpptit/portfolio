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
    overview: "Hệ sinh thái học tập và luyện thi chứng chỉ Tiếng Anh Giao tiếp Quốc tế (TOEIC) toàn diện, giải quyết triệt để bài toán thiếu tương tác cá nhân hóa và chi phí gia sư đắt đỏ của các nền tảng luyện thi truyền thống. Hệ thống kết hợp ba trụ cột cốt lõi: Động cơ thi thử chuẩn hóa 7 Parts với chấm điểm tự động, Trợ lý AI gia sư thông minh (Google Gemini) giải thích ngữ pháp và đối thoại ngữ cảnh tức thì, cùng Đường ống Học máy (Machine Learning Pipeline) tự động chẩn đoán điểm yếu và dự đoán điểm thi của học viên. Nền tảng được vận hành trên Kiến trúc Vi dịch vụ (Microservices) tự chủ hoàn toàn với Cổng thanh toán trực tuyến ZaloPay an toàn, đạt 51/51 Test Cases (100% PASS) kiểm thử toàn diện trên toàn bộ hệ thống API.",
    role: "Kỹ sư Phần mềm & Lập trình viên Backend (Software Engineer & Backend Developer)",
    duration: "4 tháng",
    teamSize: "3 thành viên",
    branch: "tree/SWE_BE3",
    githubUrl: "https://github.com/hungpptit/chatbot-toeic-flutter/tree/SWE_BE3",

    techStack: [
      { layer: "Kiến trúc hệ thống", tech: "Kiến trúc Vi dịch vụ (Microservices)", version: "—", role: "Phân tách 6 dịch vụ tự chủ hoàn toàn (Database-per-Service): Cổng API Nginx (API Gateway), Dịch vụ Xác thực (Auth), Dịch vụ Ngân hàng Đề thi (Quiz), Dịch vụ Trợ lý AI (Chatbot), Dịch vụ Thanh toán (Payment), Dịch vụ Email Bất đồng bộ (Email Worker)" },
      { layer: "Nền tảng thực thi Backend", tech: "Node.js + Express 5", version: "v20 LTS", role: "Xây dựng 55+ điểm cuối giao diện lập trình ứng dụng RESTful API v1 có phiên bản hóa đường dẫn (Path Versioning), hỗ trợ phân trang (Pagination), phong bì phản hồi nhất quán (Response Envelope), kèm bộ tài liệu tương tác Swagger/OpenAPI 3" },
      { layer: "Trình ánh xạ CSDL (ORM)", tech: "Sequelize ORM", version: "^6.x", role: "Ánh xạ quan hệ đối tượng (Object-Relational Mapping) cho Microsoft SQL Server, quản lý phiên bản cấu trúc bảng (Migration), truy vấn có tham số hóa (Parameterized Queries) ngăn ngừa tấn công SQL Injection" },
      { layer: "Cơ sở dữ liệu quan hệ", tech: "Microsoft SQL Server 2022", version: "2022", role: "4 cơ sở dữ liệu cách ly hoàn toàn (Database-per-Service): ChatbotToeic_Auth, ChatbotToeic_Quiz, ChatbotToeic_Chatbot, ChatbotToeic_Payment; lập chỉ mục trên các trường truy vấn nóng (userId, testId, status, createdAt)" },
      { layer: "Cổng API & Cân bằng tải", tech: "Nginx Alpine (Reverse Proxy)", version: "Alpine", role: "Điểm truy cập duy nhất cho toàn bộ ứng dụng khách, định tuyến yêu cầu theo tiền tố đường dẫn (Path Prefix Routing), tiêm tiêu đề bảo mật (X-Frame-Options, X-XSS-Protection, X-Content-Type-Options)" },
      { layer: "Trợ lý Trí tuệ nhân tạo", tech: "Google Gemini 2.5 Flash (REST API)", version: "2.5 Flash", role: "Trợ lý AI gia sư TOEIC hỗ trợ hội thoại đa lượt (Multi-turn Conversation) với lịch sử ngữ cảnh lưu trữ trong CSDL; Cơ chế xoay vòng khóa API (Round-Robin Key Rotation) phân tán giới hạn tốc độ" },
      { layer: "Đường ống Học máy (ML Pipeline)", tech: "Python 3.11 + Flask + scikit-learn", version: "Python 3.11", role: "Vi dịch vụ dự đoán điểm TOEIC sử dụng mô hình Random Forest Regressor; tự động huấn luyện lại hàng ngày lúc 2:00 AM qua tác vụ định kỳ (Cron Job); phân tích kỹ năng yếu (Weak Skill Analysis) theo từng Part" },
      { layer: "Hàng đợi thông điệp bất đồng bộ", tech: "RabbitMQ Message Broker", version: "^3.x", role: "Xử lý hàng đợi gửi email xác nhận OTP đăng ký và thông báo thanh toán VIP mà không làm chậm luồng phản hồi API chính" },
      { layer: "Cổng thanh toán trực tuyến", tech: "ZaloPay Dynamic QR Code API", version: "Sandbox", role: "Sinh mã thanh toán QR động theo từng đơn hàng thời gian thực; xác nhận thanh toán tự động qua Webhook với chữ ký số HMAC-SHA256; tích lũy hạn VIP cộng dồn (Cumulative VIP Expiry)" },
      { layer: "Xác thực & Bảo mật", tech: "JWT Dual-Token + bcrypt + Google OAuth 2.0", version: "—", role: "Chiến lược mã xác thực kép (Access Token 7 ngày + Refresh Token 30 ngày xoay vòng); Mã xác minh một lần OTP qua Email (TTL 10 phút); Phân quyền vai trò RBAC (Admin/User); bcrypt hash mật khẩu; express-rate-limit chống tấn công DDoS" },
      { layer: "Lưu trữ đa phương tiện đám mây", tech: "Cloudinary CDN", version: "—", role: "Tải lên và phân phối hình ảnh câu hỏi và tệp âm thanh bài nghe TOEIC qua Mạng phân phối nội dung (CDN); tự động nhận diện thời lượng âm thanh; hỗ trợ tải hàng loạt từ đường dẫn cục bộ cho Quản trị viên" },
      { layer: "Giao diện đa nền tảng (Mobile)", tech: "Flutter 3 + Dart (GetX State)", version: "^3.x", role: "Ứng dụng di động đa nền tảng (Android, iOS, Web) từ một mã nguồn duy nhất; quản lý trạng thái bằng GetX; phát âm thanh bài nghe bằng just_audio; biểu đồ thống kê bằng fl_chart" },
      { layer: "Đóng gói & Triển khai", tech: "Docker + Docker Compose", version: "—", role: "Đóng gói và điều phối đồng nhất 9 container (5 Node.js + 1 Python ML + 1 Nginx + 1 SQL Server + 1 RabbitMQ); khởi động toàn bộ hệ thống bằng 1 lệnh duy nhất; tự động khởi tạo lược đồ CSDL và dữ liệu mẫu (Seed Data) khi khởi động lần đầu" },
    ],

    challenges: [
      {
        title: "Kiểm tra trạng thái VIP xuyên dịch vụ khi Chatbot Service không có quyền truy cập CSDL Auth (Cross-Service VIP Check)",
        problem: "Dịch vụ Chatbot (chatbot-service) cần xác minh trạng thái đăng ký VIP của người dùng để giới hạn 15 tin nhắn/ngày cho tài khoản miễn phí, nhưng theo nguyên tắc Database-per-Service, dịch vụ này không có quyền truy cập trực tiếp vào cơ sở dữ liệu của dịch vụ Xác thực (auth-service) nơi lưu trữ thông tin VIP.",
        solution: "Thiết kế tầng trung gian (VIP Check Middleware) trong chatbot-service: Trước mỗi yêu cầu gửi tin nhắn AI, middleware tự động gọi điểm cuối nội bộ GET /api/v1/internal/users/:userId trên auth-service (chỉ truy cập được trong mạng Docker nội bộ). Nếu người dùng là VIP còn hạn thì cho phép không giới hạn, nếu là tài khoản miễn phí thì đếm số tin nhắn hôm nay từ bảng Messages và trả về HTTP 429 khi vượt quá 15 tin nhắn/ngày."
      },
      {
        title: "Lỗi khởi động dây chuyền (Race Condition) khi SQL Server chưa sẵn sàng nhận kết nối từ các dịch vụ Node.js",
        problem: "Khi khởi động Docker Compose lần đầu, các dịch vụ Node.js (auth, quiz, chatbot, payment) khởi động nhanh hơn SQL Server 2022 (mất 30–60 giây để khởi tạo hoàn tất), dẫn đến lỗi Connection Refused hàng loạt trên tất cả dịch vụ và hệ thống không thể hoạt động.",
        solution: "Triển khai cơ chế 3 lớp: (1) Kịch bản đợi CSDL sẵn sàng (wait-for-db.sh) kiểm tra kết nối SQL Server trước khi khởi động ứng dụng Node.js; (2) Chính sách tự động khởi động lại (restart: always) trong Docker Compose đảm bảo dịch vụ tự phục hồi sau khi SQL Server sẵn sàng; (3) Kịch bản khởi tạo CSDL tự động (import-data.sh) tạo lược đồ bảng và dữ liệu mẫu khi phát hiện CSDL trống."
      },
      {
        title: "Bảo mật Webhook ZaloPay chống giả mạo và tấn công phát lại (Replay Attack) kích hoạt VIP gian lận",
        problem: "Webhook callback từ ZaloPay có thể bị kẻ tấn công giả mạo (Forged Request) hoặc phát lại (Replay Attack) bằng cách gửi lại payload callback hợp lệ trước đó, dẫn đến kích hoạt VIP không hợp lệ hoặc gia hạn VIP trùng lặp nhiều lần.",
        solution: "Triển khai xác thực chữ ký số HMAC-SHA256 trên toàn bộ Webhook callback: Tính toán lại mã MAC từ trường data bằng KEY2 bí mật và so sánh với MAC nhận được — nếu không khớp trả về return_code: -1 (từ chối). Chống Replay Attack bằng cách kiểm tra trùng lặp mã giao dịch (appTransId) trong bảng Transactions trước khi xử lý — nếu đã tồn tại trả về return_code: 0 (đã xử lý). Logic gia hạn VIP tích lũy cộng dồn: nếu VIP hiện tại còn hạn thì cộng thêm từ ngày hết hạn hiện tại, không ghi đè từ ngày hôm nay."
      },
      {
        title: "Giới hạn tốc độ (Rate Limit) của Google Gemini API gây gián đoạn trải nghiệm Chatbot AI",
        problem: "Một khóa API Google Gemini duy nhất có giới hạn số lượng yêu cầu mỗi phút. Khi nhiều người dùng VIP cùng gửi tin nhắn Chatbot AI đồng thời, khóa API bị quá tải và trả về lỗi HTTP 429 (Too Many Requests), khiến tất cả người dùng không thể sử dụng chatbot trong thời gian hồi phục.",
        solution: "Triển khai cơ chế Xoay vòng khóa API (Round-Robin API Key Rotation): Biến môi trường GEMINI_API_KEYS chấp nhận danh sách khóa phân tách bằng dấu phẩy. Mỗi yêu cầu AI sẽ tự động sử dụng khóa tiếp theo trong vòng quay, phân tán đều tải giữa các khóa. Kết hợp với cơ chế express-rate-limit giới hạn 200 yêu cầu/15 phút trên API Gateway để bảo vệ toàn bộ hệ thống."
      },
      {
        title: "Khởi động nguội (Cold Start) mô hình Học máy khi triển khai lần đầu không có dữ liệu huấn luyện",
        problem: "Khi triển khai hệ thống lần đầu tiên, chưa có bất kỳ dữ liệu lịch sử làm bài nào của người dùng, khiến mô hình Machine Learning (scikit-learn Random Forest) không thể huấn luyện và trả về lỗi khi gọi API dự đoán điểm.",
        solution: "Gieo sẵn tập dữ liệu mẫu (Seed Dataset) thông qua kịch bản khởi tạo CSDL của Docker (db-init) và tiền huấn luyện (Pre-train) một mô hình mặc định (.pkl) có sẵn trong ảnh Docker. Tác vụ định kỳ mlRetrainCron.js chạy tự động hàng ngày lúc 2:00 AM thu thập dữ liệu mới từ bảng TestAttempts và huấn luyện lại mô hình, đảm bảo độ chính xác dự đoán cải thiện dần theo thời gian khi có thêm dữ liệu người dùng thực."
      },
    ],
  },
  en: {
    overview: "Comprehensive TOEIC certification examination and learning ecosystem engineered to solve the critical challenges of static learning materials, lack of personalized feedback, and prohibitive 1-on-1 tutoring expenses. The platform harmoniously unites three core pillars: an automated 7-Part TOEIC simulation and scoring engine, an intelligent AI tutor (Google Gemini) delivering instant contextual grammar explanations and multi-turn conversational reasoning, and an automated Machine Learning pipeline for personalized weakness diagnosis and score forecasting. Built on an autonomous Microservices architecture with secure ZaloPay payment integration, verified through 51/51 automated and functional test cases (100% PASS rate) across all 55+ API endpoints.",
    role: "Software Engineer & Backend Developer",
    duration: "4 months",
    teamSize: "3 members",
    branch: "tree/SWE_BE3",
    githubUrl: "https://github.com/hungpptit/chatbot-toeic-flutter/tree/SWE_BE3",

    techStack: [
      { layer: "System Architecture", tech: "Microservices Architecture", version: "—", role: "Decoupled 6 autonomous services (Database-per-Service): Nginx API Gateway, Auth Service, Quiz Service (Tests, Courses, Statistics, Media Upload), Chatbot Service (Gemini AI), Payment Service (ZaloPay), Async Email Worker (RabbitMQ Consumer)" },
      { layer: "Backend Runtime", tech: "Node.js + Express 5", version: "v20 LTS", role: "55+ versioned RESTful API v1 endpoints with consistent response envelope, cursor/offset pagination, and auto-generated interactive Swagger/OpenAPI 3 documentation" },
      { layer: "Database ORM", tech: "Sequelize ORM", version: "^6.x", role: "Object-Relational Mapping for Microsoft SQL Server with automated schema migrations and parameterized queries preventing SQL injection attacks" },
      { layer: "Relational Database", tech: "Microsoft SQL Server 2022", version: "2022", role: "4 fully isolated databases (Database-per-Service): ChatbotToeic_Auth, ChatbotToeic_Quiz, ChatbotToeic_Chatbot, ChatbotToeic_Payment; indexed on hot query fields (userId, testId, status, createdAt)" },
      { layer: "API Gateway & Load Balancing", tech: "Nginx Alpine (Reverse Proxy)", version: "Alpine", role: "Single client ingress point with path-prefix routing to internal services, security header injection (X-Frame-Options, X-XSS-Protection, X-Content-Type-Options), and keepalive connection pooling" },
      { layer: "AI Conversational Agent", tech: "Google Gemini 2.5 Flash (REST API)", version: "2.5 Flash", role: "Multi-turn TOEIC tutoring chatbot with database-persisted conversation history; Round-Robin API Key Rotation distributing rate limits across multiple keys" },
      { layer: "Machine Learning Pipeline", tech: "Python 3.11 + Flask + scikit-learn", version: "Python 3.11", role: "TOEIC score prediction microservice using Random Forest Regressor; automated daily model retraining at 2:00 AM via cron job; per-part weak skill analysis with hybrid collaborative filtering" },
      { layer: "Asynchronous Message Queue", tech: "RabbitMQ Message Broker", version: "^3.x", role: "Decoupled async email delivery queue for OTP registration verification and VIP payment confirmation notifications without blocking API response paths" },
      { layer: "Payment Integration", tech: "ZaloPay Dynamic QR API", version: "Sandbox", role: "Real-time dynamic QR code payment generation per transaction; automated webhook callback verification via HMAC-SHA256 signature; cumulative VIP expiry extension (additive, not overwriting)" },
      { layer: "Auth & Security", tech: "JWT Dual-Token + bcrypt + Google OAuth 2.0", version: "—", role: "Dual-token strategy (Access Token 7-day + rotating Refresh Token 30-day); Email OTP verification (10-min TTL); Role-Based Access Control (Admin/User); bcrypt password hashing; express-rate-limit DDoS protection (20 req/15min auth, 200 req/15min general)" },
      { layer: "Cloud Media Storage", tech: "Cloudinary CDN", version: "—", role: "Managed CDN for TOEIC question images and listening audio files; automatic audio duration detection; batch upload from local paths for Admin workflows" },
      { layer: "Cross-Platform Frontend", tech: "Flutter 3 + Dart (GetX State)", version: "^3.x", role: "Single-codebase cross-platform application (Android, iOS, Web) with GetX state management, just_audio listening playback, fl_chart statistics visualization, and flutter_secure_storage for JWT token persistence" },
      { layer: "Containerization & Orchestration", tech: "Docker + Docker Compose", version: "—", role: "Unified containerized deployment of 9 services (5 Node.js + 1 Python ML + 1 Nginx + 1 SQL Server + 1 RabbitMQ); one-command startup; automated schema initialization and seed data on first boot" },
    ],

    challenges: [
      {
        title: "Cross-Service VIP Status Verification Without Direct Database Access (Database-per-Service Boundary)",
        problem: "The Chatbot Service needs to enforce a 15 messages/day limit for free-tier users by checking their VIP subscription status, but the Database-per-Service pattern strictly prohibits direct access to the Auth Service database where VIP information resides.",
        solution: "Engineered a VIP Check Middleware layer in the Chatbot Service: Before each AI message request, the middleware performs an internal REST call to GET /api/v1/internal/users/:userId on the Auth Service (accessible only within the Docker internal network). VIP users with active subscriptions are granted unlimited access; free-tier users have their daily message count queried from the Messages table with a today-date filter, returning HTTP 429 when the 15-message threshold is exceeded."
      },
      {
        title: "Cascading Startup Failure When Node.js Services Boot Before SQL Server Initialization Completes",
        problem: "On initial Docker Compose startup, Node.js services (auth, quiz, chatbot, payment) start significantly faster than SQL Server 2022 (which requires 30–60 seconds for full initialization), causing Connection Refused errors across all services and rendering the entire system inoperable.",
        solution: "Implemented a 3-layer resilience strategy: (1) A wait-for-db.sh startup probe script that polls SQL Server connectivity before launching Node.js applications; (2) Docker Compose restart: always policy ensuring services automatically recover after SQL Server becomes ready; (3) An automated database initialization script (import-data.sh) that creates schemas and seeds sample data upon detecting empty databases."
      },
      {
        title: "ZaloPay Webhook Security Against Forged Requests and Transaction Replay Attacks",
        problem: "ZaloPay webhook callbacks could be exploited through forged payloads (sending fabricated payment confirmations) or replay attacks (resending previously valid callback payloads), leading to unauthorized VIP activation or duplicate subscription extensions.",
        solution: "Implemented HMAC-SHA256 signature verification on all webhook callbacks: the server recomputes the MAC from the data field using the secret KEY2 and compares it against the received MAC — mismatches return return_code: -1 (rejected). Replay attack prevention is achieved by checking for duplicate transaction IDs (appTransId) in the Transactions table before processing — duplicates return return_code: 0 (already processed). VIP expiry uses cumulative additive logic: if the current VIP is still active, the new duration extends from the existing expiry date rather than overwriting from today."
      },
      {
        title: "Google Gemini API Rate Limiting Disrupting AI Chatbot Availability Under Concurrent User Load",
        problem: "A single Google Gemini API key has strict per-minute request rate limits. When multiple VIP users simultaneously send chatbot messages, the API key becomes throttled and returns HTTP 429 (Too Many Requests), blocking all chatbot functionality during the cooldown period.",
        solution: "Implemented Round-Robin API Key Rotation: the GEMINI_API_KEYS environment variable accepts a comma-separated list of API keys, and each incoming AI request automatically cycles to the next key in the rotation, evenly distributing load across all available keys. Combined with express-rate-limit middleware enforcing 200 requests/15 minutes at the API Gateway level to protect the entire system from abuse."
      },
      {
        title: "Machine Learning Model Cold Start on First Deployment With Zero Training Data",
        problem: "On initial system deployment, no historical user test attempt data exists, causing the scikit-learn Random Forest model to fail training and return errors when the TOEIC score prediction API is called.",
        solution: "Pre-seeded a baseline training dataset via the Docker database initialization script (db-init) and pre-trained a default model artifact (.pkl) bundled within the Docker image. The mlRetrainCron.js cron job runs automatically daily at 2:00 AM, harvesting new data from the TestAttempts table and retraining the model, ensuring prediction accuracy continuously improves as real user data accumulates over time."
      },
    ],
  }
};
