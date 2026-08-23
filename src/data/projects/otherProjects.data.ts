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
      overview: "Hệ thống quản trị thư viện số toàn diện dành cho trường học và tổ chức giáo dục: quản lý mượn/trả sách, kiểm soát tài nguyên, tự động tính phí phạt quá hạn, và Phân quyền truy cập dựa trên vai trò (Role-Based Access Control - RBAC). Hệ thống được chuẩn hóa cơ sở dữ liệu quan hệ theo chuẩn bậc 3 (Third Normal Form - 3NF) và áp dụng cơ chế Giao dịch toàn vẹn (ACID Transactions) để đảm bảo dữ liệu luôn chính xác tuyệt đối.",
      role: "Lập trình viên Backend & Thiết kế Cơ sở Dữ liệu (Backend Developer & Database Designer)",
      duration: "2 tháng",
      teamSize: "2 thành viên",
      techStack: [
        { layer: "Cơ sở dữ liệu quan hệ", tech: "Microsoft SQL Server (T-SQL)", version: "—", role: "Thiết kế CSDL chuẩn hóa bậc 3 (3NF), viết thủ tục lưu trữ (Stored Procedures), trình kích hoạt (Triggers), tối ưu chỉ mục (Indexes)" },
        { layer: "Nền tảng thực thi Backend", tech: "Node.js + Express.js", version: "v18", role: "Xây dựng các giao diện lập trình ứng dụng RESTful API phục vụ nghiệp vụ mượn/trả" },
        { layer: "Xác thực & Phân quyền", tech: "Mã xác thực JWT & Phân quyền RBAC", version: "—", role: "Kiểm soát quyền hạn chặt chẽ theo 3 cấp độ: Quản trị viên (Admin), Thủ thư, Độc giả" },
        { layer: "Giao diện người dùng", tech: "React.js", version: "^18", role: "Bảng điều khiển quản lý dành cho thủ thư và cổng tra cứu sách trực tuyến cho độc giả" },
      ],
      challenges: [
        {
          title: "Xử lý tranh chấp khi hai thủ thư cùng thao tác mượn cuốn sách cuối cùng còn lại trong kho",
          problem: "Khi số lượng sách chỉ còn lại 1 cuốn, nếu 2 thủ thư tại 2 quầy khác nhau cùng nhấn nút 'Mượn sách' tại cùng một thời điểm thì có thể dẫn đến việc hệ thống ghi nhận mượn thành công cho cả 2 người, gây âm số lượng sách trong kho.",
          solution: "Ứng dụng cơ chế khóa mức dòng (Row-Level Locking) kết hợp mức cô lập giao dịch tuần tự nghiêm ngặt (SERIALIZABLE Isolation Level) trong thủ tục lưu trữ SQL Server. Đảm bảo số lượng sách trong kho luôn được khấu trừ chính xác tuyệt đối."
        },
      ],
    },
    "tech-store-ecosystem": {
      id: "tech-store-ecosystem",
      overview: "Hệ sinh thái thương mại điện tử bán lẻ thiết bị công nghệ hoàn chỉnh, bao gồm Ứng dụng di động thuần Android (Android Native - Java hướng đối tượng OOP) dành cho khách hàng mua sắm và Bảng điều khiển quản trị web (Next.js Dashboard) dành cho quản trị viên quản lý kho hàng và đơn hàng theo thời gian thực.",
      role: "Lập trình viên Di động & Toàn diện (Mobile & Full-stack Developer)",
      duration: "3 tháng",
      teamSize: "2 thành viên",
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
      overview: "Comprehensive digital library management platform for educational institutions: catalog management, circulation checkout/returns, automated overdue penalty calculations, and Role-Based Access Control (RBAC). Engineered with a 3NF normalized schema and ACID transactions.",
      role: "Backend Developer & Database Designer",
      duration: "2 months",
      teamSize: "2 members",
      techStack: [
        { layer: "Relational Database", tech: "Microsoft SQL Server (T-SQL)", version: "—", role: "3NF normalized schema, stored procedures, triggers, and query index tuning" },
        { layer: "Backend Runtime", tech: "Node.js + Express.js", version: "v18", role: "RESTful API services managing circulation and inventory workflows" },
        { layer: "Auth & Permissions", tech: "JWT & Role-Based Access Control (RBAC)", version: "—", role: "Granular access tiers for Administrators, Librarians, and Students" },
        { layer: "Web Frontend", tech: "React.js SPA", version: "^18", role: "Librarian administration portal and reader catalog discovery interface" },
      ],
      challenges: [
        {
          title: "Concurrent Checkout Race Condition on Single-Inventory Book Copies",
          problem: "When only 1 copy of a high-demand book remained, two librarians simultaneously clicking 'Issue Book' could cause inventory deficit anomalies.",
          solution: "Implemented Row-Level Locking coupled with SERIALIZABLE transaction isolation within SQL Server stored procedures, guaranteeing zero inventory drift."
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
