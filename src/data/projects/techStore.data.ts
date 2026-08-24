import { TechStackItem, ProjectChallenge } from '../../types';
import { Language } from '../../context/LanguageContext';

export interface TechStoreData {
  overview: string;
  role: string;
  duration: string;
  teamSize: string;
  branch: string;
  githubUrl: string;
  githubAdminUrl: string;
  techStack: TechStackItem[];
  challenges: ProjectChallenge[];
}

export const TECH_STORE_DETAIL: Record<Language, TechStoreData> = {
  vi: {
    overview: "Hệ sinh thái Thương mại điện tử Bán lẻ Thiết bị Công nghệ đa nền tảng kết hợp giữa Ứng dụng di động khách hàng, Bảng điều khiển quản trị doanh nghiệp và Dịch vụ Backend chuyên dụng. Hệ thống số hóa toàn diện quy trình bán lẻ công nghệ: từ duyệt sản phẩm và xử lý giỏ hàng, khóa tồn kho chống bán vượt trong đợt giảm giá cao điểm, thanh toán thẻ quốc tế an toàn, đến chăm sóc khách hàng và kiểm toán biến động kho thời gian thực. Toàn bộ nền tảng đảm bảo tính toàn vẹn dữ liệu và trải nghiệm mượt mà, được kiểm chứng qua 57/57 Test Cases (100% PASS) kiểm thử tự động.",
    role: "Kỹ sư Phần mềm & Lập trình viên Backend chính (Software Engineer & Lead Backend Developer)",
    duration: "3 tháng",
    teamSize: "3 thành viên",
    branch: "tree/SWE_BE5",
    githubUrl: "https://github.com/hungpptit/tech-store-mobile",
    githubAdminUrl: "https://github.com/hungpptit/tech-store-web-admin",

    techStack: [
      { layer: "Kiến trúc hệ thống", tech: "Mô hình Lai (Hybrid Cloud & Micro-Backend Ecosystem)", version: "—", role: "Tách biệt rõ ràng trách nhiệm giữa Android Mobile Client, Web Admin ERP Dashboard và Node.js Micro-Backend; kết nối đồng bộ dữ liệu thời gian thực qua Cloud Firestore và sự kiện FCM" },
      { layer: "Ứng dụng Di động (Client)", tech: "Android Native (Java 11) + Clean Architecture (MVVM)", version: "API 24+ / Target 36", role: "Thiết kế chuẩn OOP & MVVM, Material Design 3, ViewPager2, RecyclerView, Glide CDN Image Caching; tích hợp Stripe Android SDK và Vietnam Provinces Open API" },
      { layer: "Dịch vụ Micro-Backend", tech: "Node.js 20+ / Express.js 4.21 / TypeScript 5", version: "Node 20+", role: "Backend chuyên trách xử lý thanh toán nhạy cảm (Stripe Customer Vault, Payment Intent), Cron Reconciliation Worker quét giải phóng tồn kho mỗi 60s, và In-Memory Lookup Caching" },
      { layer: "Cổng Thanh toán Quốc tế", tech: "Stripe API & SDK (PCI-DSS Level 1 Compliant)", version: "Stripe 17.6", role: "Tokenization thẻ thanh toán một lần (tok_...), lưu trữ PaymentMethod trong Vault bảo mật, quy trình hoàn tất đơn hàng nguyên tử 2 giai đoạn (Two-Phase Finalization via WriteBatch)" },
      { layer: "Cơ sở dữ liệu đám mây", tech: "Google Cloud Firestore (NoSQL ACID)", version: "—", role: "14 Collections/Sub-collections NoSQL; ACID Transactions kiểm soát khóa tồn kho; Snapshot Listeners đồng bộ giỏ hàng, kho và tin nhắn CSKH tức thì" },
      { layer: "Xác thực & Thông báo", tech: "Firebase Auth (Scrypt) + Firebase Cloud Messaging (FCM)", version: "—", role: "Xác thực người dùng bảo mật, phân quyền RBAC; Tự động kích hoạt Push Notification đến điện thoại khi đơn hàng chuyển trạng thái hoặc nhận tin nhắn CSKH từ Admin" },
      { layer: "Bảng Quản trị Web (Admin)", tech: "React 18 + Vite 5 + TypeScript + Ant Design 5", version: "React 18", role: "Hệ thống Mini-ERP quản trị toàn diện: Sổ nhật ký biến động kho (Stock Movement Ledger), Điều phối đơn hàng State Machine, Hộp thư CSKH đa kênh và Báo cáo BI Recharts" },
      { layer: "Kiểm thử tự động & QA", tech: "Jest 30 + Supertest + JUnit 4 (JVM) + Python Benchmark", version: "Jest 30", role: "7 Test Suites với 57 Test Cases tự động (100% PASS); Độ bao phủ mã nguồn Web Admin Backend đạt 100% Statements / Lines / Functions; Latency phản hồi API trung bình ~12.56ms" },
      { layer: "Lưu trữ Media & CDN", tech: "Cloudinary Media CDN SDK", version: "—", role: "Tối ưu hóa và phân phối hình ảnh sản phẩm, avatar người dùng và banner khuyến mãi với tốc độ tải cao" },
    ],

    challenges: [
      {
        title: "Khóa tồn kho chống bán vượt (Overselling) khi nhiều người cùng mua Flash Sale",
        problem: "Khi một sản phẩm chỉ còn 1 chiếc nhưng có hàng trăm khách hàng cùng bấm 'Thanh toán' trong đợt giảm giá, việc tranh chấp dữ liệu (Race Condition) dễ dẫn đến tình trạng bán âm kho, gây khiếu nại và tổn hại uy tín doanh nghiệp.",
        solution: "Thiết kế cơ chế Khóa tồn kho bi quan (Pessimistic Reservation) bằng Firestore ACID Transaction trước khi mở cổng thanh toán (giữ kho với TTL 5 phút). Đồng thời xây dựng Cron Worker chạy ngầm mỗi 60 giây trên Backend để tự động hoàn trả hàng về kho nếu khách hàng không hoàn tất giao dịch."
      },
      {
        title: "Bảo mật thanh toán thẻ tín dụng quốc tế tuân thủ tiêu chuẩn PCI-DSS",
        problem: "Lưu trữ hoặc để số thẻ tín dụng thô (PAN/CVV) đi qua máy chủ ứng dụng tiềm ẩn nguy cơ rò rỉ dữ liệu tài chính nghiêm trọng và vi phạm quy định an ninh thẻ quốc tế.",
        solution: "Áp dụng kỹ thuật Mã hóa tại thiết bị đầu cuối (Client-Side Tokenization) qua Stripe SDK: thông tin thẻ thô gửi trực tiếp lên Stripe để đổi lấy mã Token đại diện một lần. Backend chỉ lưu trữ mã tham chiếu PaymentMethod trong Vault, kết hợp ghi dữ liệu đơn hàng bằng WriteBatch nguyên tử 4 bảng."
      },
      {
        title: "Triệt tiêu N+1 Query và tối ưu chi phí đọc trên Cơ sở dữ liệu NoSQL Firestore",
        problem: "Khi hiển thị danh sách hàng trăm đơn hàng trên Web Admin, việc mỗi đơn hàng lại truy vấn thêm một lần sang bảng người dùng để lấy họ tên/email (hiện tượng N+1 Query) làm tăng vọt chi phí đọc của Cloud Firestore và khiến bảng tải chậm.",
        solution: "Xây dựng cơ chế Bộ nhớ đệm tra cứu trong bộ nhớ (In-Memory Lookup Caching) tại tầng Controller. Các yêu cầu trùng người dùng được phục vụ ngay từ cache bộ nhớ (giảm 50%+ số lượng truy vấn đọc Firestore) và loại bỏ sạch các trường dữ liệu thừa trước khi lưu."
      },
      {
        title: "Đồng bộ tin nhắn CSKH tức thì và Đánh thức ứng dụng di động nhận thông báo",
        problem: "Nhân viên hỗ trợ trên Web Admin gửi tin nhắn phản hồi nhưng khách hàng đã tắt ứng dụng Android thì không nhận được, dẫn đến gián đoạn quy trình tư vấn và giảm tỷ lệ chốt đơn.",
        solution: "Kết hợp cơ chế Firestore Snapshot Listener (đồng bộ tin nhắn <100ms khi mở app) với Hệ thống kích hoạt thông báo sự kiện (Event-Driven Pipeline qua FCM): Khi Admin gửi tin hoặc đổi trạng thái đơn, Backend tự động phát thông báo đẩy (Push Notification) đánh thức máy khách ngay lập tức."
      },
    ],
  },
  en: {
    overview: "Multi-platform Tech Retail E-Commerce Ecosystem seamlessly uniting a Customer Mobile App, an Enterprise Web Admin Portal, and a dedicated Backend Service. The platform comprehensively streamlines end-to-end retail operations: from catalog browsing and smart cart management, pessimistic stock reservation preventing flash-sale overselling, and secure international card checkout, to real-time omnichannel customer support and stock movement audit trails. The system guarantees absolute data integrity and high availability, verified by 57/57 automated test cases (100% PASS rate).",
    role: "Software Engineer & Lead Backend Developer",
    duration: "3 months",
    teamSize: "3 members",
    branch: "tree/SWE_BE5",
    githubUrl: "https://github.com/hungpptit/tech-store-mobile",
    githubAdminUrl: "https://github.com/hungpptit/tech-store-web-admin",

    techStack: [
      { layer: "System Architecture", tech: "Hybrid Cloud & Micro-Backend Ecosystem", version: "—", role: "Strict separation of concerns between Android Client, Web Admin ERP Dashboard, and Node.js Micro-Backend; real-time bidirectional data synchronization via Cloud Firestore and FCM push triggers" },
      { layer: "Mobile Client App", tech: "Android Native (Java 11) + Clean Architecture (MVVM)", version: "API 24+ / Target 36", role: "Object-Oriented Programming (OOP) & MVVM pattern, Material Design 3, ViewPager2, RecyclerView, Glide CDN Image Caching; integrated Stripe Android SDK and Vietnam Provinces Open API" },
      { layer: "Micro-Backend Service", tech: "Node.js 20+ / Express.js 4.21 / TypeScript 5", version: "Node 20+", role: "Handles sensitive payment operations (Stripe Customer Vault, Payment Intent creation), automated Cron Reconciliation Worker (60s interval) for stock release, and In-Memory Lookup Caching" },
      { layer: "Payment Gateway", tech: "Stripe API & SDK (PCI-DSS Level 1 Compliant)", version: "Stripe 17.6", role: "Client-side one-time card tokenization (tok_...), secure PaymentMethod Customer Vault, and Two-Phase Atomic Order Finalization via Firebase WriteBatch" },
      { layer: "Cloud Database", tech: "Google Cloud Firestore (NoSQL ACID)", version: "—", role: "14 NoSQL Collections/Sub-collections; ACID Transactions for inventory locking; Snapshot Listeners for real-time cart, stock, and customer support chat synchronization" },
      { layer: "Auth & Notification", tech: "Firebase Auth (Scrypt) + Firebase Cloud Messaging (FCM)", version: "—", role: "Secure authentication, RBAC authorization; event-driven push notification pipeline dispatching alerts to Android devices on order milestone updates or CSKH agent replies" },
      { layer: "Web Admin Dashboard", tech: "React 18 + Vite 5 + TypeScript + Ant Design 5", version: "React 18", role: "Comprehensive Mini-ERP portal: Stock Movement Ledger Audit Trail, Order State Machine orchestrator, Omnichannel Real-time Inbox, and Executive BI Analytics via Recharts" },
      { layer: "Testing & QA", tech: "Jest 30 + Supertest + JUnit 4 (JVM) + Python Benchmark", version: "Jest 30", role: "7 Test Suites with 57 automated test cases (100% PASS); 100% Statements / Lines / Functions code coverage on Web Admin Backend; average API latency ~12.56ms" },
      { layer: "Media CDN Storage", tech: "Cloudinary Media CDN SDK", version: "—", role: "Asset optimization, fast CDN delivery for product catalog images, user avatars, and promotional campaign banners" },
    ],

    challenges: [
      {
        title: "Pessimistic Stock Reservation Preventing Flash Sale Overselling",
        problem: "When hundreds of concurrent shoppers contend for the last available item during flash sales, race conditions risk overselling physical stock, triggering customer disputes and inventory discrepancies.",
        solution: "Architected a Pessimistic Stock Reservation mechanism using Firestore ACID Transactions before entering checkout (locks stock with a 5-minute TTL). Built a background Cron Reconciliation Worker on Node.js running every 60s to automatically release expired reservations back to inventory."
      },
      {
        title: "PCI-DSS Compliant Credit Card Payment Pipeline via Stripe",
        problem: "Allowing raw credit card data (PAN/CVV) to touch internal backend servers violates PCI-DSS security standards and exposes the platform to catastrophic financial data breaches.",
        solution: "Implemented client-side tokenization via Stripe SDK: raw credentials are directly exchanged with Stripe for one-time tokens (tok_...). The backend only stores vault PaymentMethod IDs, finalizing orders through atomic 4-document WriteBatch operations."
      },
      {
        title: "Eliminating N+1 Queries & Optimizing Read Costs on NoSQL Firestore",
        problem: "Rendering hundreds of orders on the Web Admin portal caused repetitive queries to the user collection for customer names/emails (N+1 Query issue), creating latency and driving up cloud read costs.",
        solution: "Implemented an In-Memory Lookup Cache (userCache) at the controller layer. Duplicate customer queries are served instantaneously in-memory (saving 50%+ Firestore read operations) and payloads are sanitized before persistence."
      },
      {
        title: "Real-Time CSKH Omnichannel Sync & Background Mobile Wakeup",
        problem: "When support agents reply from the Web Admin, mobile users who have minimized or closed the Android app fail to receive responses, causing dropped inquiries and lost sales opportunities.",
        solution: "Combined Firestore Snapshot Listeners (sub-100ms real-time chat while active) with an Event-Driven Notification Pipeline via FCM: when agents send messages or update order states, the backend dispatches high-priority push notifications that immediately alert the mobile device."
      },
    ],
  },
};
