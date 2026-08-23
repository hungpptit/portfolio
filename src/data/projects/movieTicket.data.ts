import { TechStackItem, ProjectChallenge } from '../../types';
import { Language } from '../../context/LanguageContext';

export interface MovieTicketData {
  overview: string;
  role: string;
  duration: string;
  teamSize: string;
  branch: string;
  githubUrl: string;
  techStack: TechStackItem[];
  challenges: ProjectChallenge[];
}

export const MOVIE_TICKET_DETAIL: Record<Language, MovieTicketData> = {
  vi: {
    overview: "Hệ thống đặt vé xem phim trực tuyến phân tán dựa trên Kiến trúc Vi dịch vụ (Microservices) với 6 dịch vụ tự chủ hoàn toàn (Database-per-Service). Giải quyết triệt để bài toán đồng thời (Concurrency) khi hàng ngàn người dùng cùng tranh chấp chọn một ghế trong cùng suất chiếu tại một thời điểm. Hệ thống áp dụng Cơ chế Khóa phân tán (Distributed Lock - Lệnh SET NX EX) với Thời gian tồn tại tự động (Time-to-Live - TTL) 10 phút trên bộ nhớ đệm Redis đảm bảo tuyệt đối không bao giờ xảy ra lỗi trùng ghế (Zero Double-Booking) ngay cả dưới tải đỉnh điểm. Áp dụng 9+ mẫu thiết kế hệ thống phân tán và đạt 25/25 Unit Tests (100% PASS) bằng Jest 29 trên 3 service chời trọc.",
    role: "Kỹ sư Phần mềm & Lập trình viên Backend (Software Engineer & Backend Developer)",
    duration: "3 tháng",
    teamSize: "3 thành viên",
    branch: "tree/SWE_BE_1",
    githubUrl: "https://github.com/hungpptit/XEMPHIM/tree/SWE_BE_1",

    techStack: [
      { layer: "Kiến trúc hệ thống", tech: "Kiến trúc Vi dịch vụ (Microservices)", version: "—", role: "Tách biệt 6 dịch vụ tự chủ (Database-per-Service): Cổng API (API Gateway), Dịch vụ Người dùng (User), Dịch vụ Phim (Movie), Dịch vụ Đặt vé (Booking), Dịch vụ Thanh toán (Payment), Dịch vụ Thông báo (Notification)" },
      { layer: "Nền tảng thực thi Backend", tech: "Node.js + Express.js", version: "v18+ LTS", role: "Xây dựng các giao diện lập trình ứng dụng (RESTful API) riêng biệt cho từng vi dịch vụ; ORM Sequelize 6.x kết nối SQL Server" },
      { layer: "Khóa phân tán (Distributed Lock)", tech: "Redis 7 (Lệnh SET NX EX)", version: "Redis 7", role: "Khóa giữ ghế nguyên tử trong thời gian tồn tại (TTL) 10 phút, tự động giải phóng ghế khi người dùng hết hạn thanh toán; fallback sang Pessimistic Lock (Sequelize t.LOCK.UPDATE) khi Redis ngoại tuyến" },
      { layer: "Bộ nhớ đệm và Cache", tech: "Redis 7 (Cache-Aside Pattern)", version: "Redis 7", role: "Cache danh sách phim và suất chiếu (TTL 3600 giây), tự động Invalidation khi quản trị viên cập nhật dữ liệu" },
      { layer: "Hàng đợi thông điệp bất đồng bộ", tech: "RabbitMQ Message Broker", version: "^3.x", role: "Xử lý hàng đợi gửi email vé điện tử và phát thông báo thanh toán mà không làm chậm luồng phản hồi đặt vé" },
      { layer: "Cơ sở dữ liệu quan hệ", tech: "Microsoft SQL Server (T-SQL)", version: "2022", role: "5 database riêng biệt (Database-per-Service); Thiết lập mức cô lập giao dịch (Transaction Isolation) nghiêm ngặt để quản lý trạng thái ghế" },
      { layer: "Cổng thanh toán trực tuyến", tech: "ZaloPay Dynamic QR Code API", version: "Sandbox", role: "Sinh mã phản hồi nhanh (QR Code) động theo từng đơn đặt vé thời gian thực; xác nhận thanh toán tự động qua Webhook với chữ ký HMAC-SHA256" },
      { layer: "Xác thực & Bảo mật", tech: "JWT + bcrypt", version: "—", role: "HttpOnly Cookie JWT 7 ngày hiệu lực xác thực tập trung tại API Gateway; bcrypt hash mật khẩu (salt rounds=10); CORS whitelist" },
      { layer: "Kiểm thử & Chất lượng", tech: "Jest 29 (Unit Tests)", version: "Jest 29", role: "25/25 Unit Tests (100% PASS) trên 3 service: Booking (4 tests), Payment/ZaloPay (13 tests), Movie/Cache (8 tests)" },
      { layer: "Giao diện người dùng (Web)", tech: "React.js SPA", version: "^18", role: "Trang web đơn trang (Single Page Application - SPA) hiển thị sơ đồ ghế và cập nhật trạng thái giữ chỗ trực tiếp" },
    ],

    challenges: [
      {
        title: "Tranh chấp đặt trùng ghế dưới tải lượng người dùng đồng thời cao (Double-Booking Race Condition)",
        problem: "Khi hơn 1,000 người dùng cùng nhấn nút đặt một chiếc ghế VIP trong khoảng thời gian 50 mili-giây, nếu chỉ kiểm tra bằng truy vấn cơ sở dữ liệu thông thường thì sẽ xảy ra hiện tượng tranh chấp (Race Condition), dẫn đến bán 2 vé cho cùng 1 ghế.",
        solution: "Triển khai Cơ chế Khóa phân tán (Distributed Lock) bằng lệnh nguyên tử Redis SET NX EX với thời hạn 10 phút: Chỉ duy nhất 1 yêu cầu đầu tiên giành được khóa thành công, 999 yêu cầu còn lại nhận ngay phản hồi báo trùng (HTTP 409 Conflict). Nếu sau 10 phút người dùng không hoàn tất thanh toán, Redis tự động giải phóng khóa để người khác có thể đặt. Khi Redis ngoại tuyến, hệ thống tự động fallback sang Pessimistic Lock mức cơ sở dữ liệu (Sequelize t.LOCK.UPDATE) đảm bảo tính toàn vẹn."
      },
      {
        title: "Dữ liệu trạng thái sơ đồ ghế bị trễ so với thực tế (Stale State trên màn hình người dùng)",
        problem: "Khi Người dùng A đang trong quá trình giữ ghế để thanh toán, màn hình của Người dùng B nếu không được cập nhật sẽ vẫn hiển thị chiếc ghế đó màu xanh (ghế trống), gây trải nghiệm thất vọng khi bấm vào.",
        solution: "Ứng dụng cơ chế Phát và Đăng ký nhận tin tức thời (Publish/Subscribe - PubSub) trên Redis kết hợp WebSocket. Ngay khi có lệnh giữ ghế, hệ thống phát thông báo tới toàn bộ các trình duyệt đang xem cùng suất chiếu để chuyển màu ghế sang màu vàng (đang giữ chỗ) ngay lập tức."
      },
      {
        title: "Bảo mật Webhook ZaloPay và kiểm thử toàn diện các luồng thanh toán",
        problem: "Callback Webhook từ ZaloPay có thể bị giả mạo (forged), dẫn đến xác nhận đặt vé không hợp lệ. Bên cạnh đó, các luồng thanh toán (tạo đơn, hoàn tiền, xử lý lỗi) cần kiểm thử đầy đủ để đảm bảo độ tin cậy trước khi triển khai sản xuất.",
        solution: "Triển khai xác thực chữ ký HMAC-SHA256 trên toàn bộ Webhook callback của ZaloPay, chặn triệt để yêu cầu giả mạo. Viết bộ 25 Unit Tests bằng Jest 29 bao gồm: 13 tests Payment Service (verifyCallback MAC, createOrder, refundOrder), 8 tests Movie Service (Cache-Aside, Invalidation), 4 tests Booking Service (đặt vé và hủy). Tất cả 25/25 (100% PASS)."
      },
    ],
  },
  en: {
    overview: "Distributed cinema ticket booking platform built on an autonomous Microservices architecture with 6 fully decoupled services (Database-per-Service pattern). Eliminates severe concurrency race conditions when thousands of users contend for the same VIP seat simultaneously during blockbuster premiere showtimes. Leverages Redis Distributed Locking (atomic SET NX EX) with a 10-minute Time-to-Live (TTL) to guarantee absolute Zero Double-Booking integrity under peak load, with automatic fallback to Sequelize Pessimistic DB Lock (t.LOCK.UPDATE) when Redis is offline. Implements 9+ distributed system design patterns and achieves 25/25 Unit Tests (100% PASS rate) across 3 services using Jest 29.",
    role: "Software Engineer & Backend Developer",
    duration: "3 months",
    teamSize: "3 members",
    branch: "tree/SWE_BE_1",
    githubUrl: "https://github.com/hungpptit/XEMPHIM/tree/SWE_BE_1",

    techStack: [
      { layer: "System Architecture", tech: "Microservices Architecture", version: "—", role: "Decoupled 6 autonomous services (Database-per-Service): API Gateway, User Service, Movie Catalog (Cache-Aside Redis), Seat Service, Booking Service, Payment Gateway, and Notification Service" },
      { layer: "Backend Runtime", tech: "Node.js + Express.js", version: "v18+ LTS", role: "High-performance non-blocking RESTful API services per bounded context; Sequelize 6.x ORM connecting to SQL Server" },
      { layer: "Distributed Locking", tech: "Redis 7 (Atomic SET NX EX)", version: "Redis 7", role: "Atomic seat lock with a 10-minute TTL, automatically releasing seats upon payment timeout; auto-fallback to Sequelize Pessimistic DB Lock (t.LOCK.UPDATE) when Redis is offline" },
      { layer: "Cache Layer", tech: "Redis 7 (Cache-Aside Pattern)", version: "Redis 7", role: "Cache-Aside pattern for movie listings and showtimes (TTL 3600s) with automatic invalidation on admin data updates" },
      { layer: "Message Queuing", tech: "RabbitMQ Message Broker", version: "^3.x", role: "Asynchronous task queue for electronic ticket QR generation and email notification dispatch without blocking the booking response path" },
      { layer: "Relational Database", tech: "Microsoft SQL Server (T-SQL)", version: "2022", role: "5 isolated databases (Database-per-Service); strict transaction isolation levels guaranteeing persistent seat inventory integrity" },
      { layer: "Payment Integration", tech: "ZaloPay Dynamic QR API", version: "Sandbox", role: "Dynamic QR code payment generation with automated asynchronous Webhook callbacks verified via HMAC-SHA256 signature" },
      { layer: "Auth & Security", tech: "JWT + bcrypt", version: "—", role: "HttpOnly Cookie JWT (7-day expiry) validated centrally at API Gateway; bcrypt password hashing (salt rounds=10); CORS whitelist" },
      { layer: "Testing & Quality", tech: "Jest 29 (Unit Tests)", version: "Jest 29", role: "25/25 Unit Tests (100% PASS): Booking Service (4 tests), Payment/ZaloPay Service (13 tests), Movie/Cache Service (8 tests)" },
      { layer: "Web Frontend", tech: "React.js SPA", version: "^18", role: "Interactive real-time seat map updating reservation colors instantly via React state management" },
    ],

    challenges: [
      {
        title: "Double-Booking Race Condition under Extreme Concurrency",
        problem: "When over 1,000 users click to reserve the same VIP seat within a 50ms window, traditional database read-check queries fail due to race conditions, causing duplicate ticket sales for the exact same physical seat.",
        solution: "Implemented Redis Distributed Locks using the atomic SET NX EX key command with a 10-minute TTL: Exactly 1 incoming request acquires the reservation lock; the remaining 999+ concurrent requests receive an immediate HTTP 409 Conflict. If payment is uncompleted after 10 minutes, Redis automatically evicts the lock key. When Redis is offline, the system auto-falls back to Sequelize Pessimistic DB Lock (t.LOCK.UPDATE) ensuring full ACID integrity as a second safety layer."
      },
      {
        title: "Stale Seat Map State on Active Client Viewports",
        problem: "When User A holds a seat, other active viewers watching the same showtime would still see the seat as vacant (green), leading to repeated collision attempts.",
        solution: "Implemented Redis PubSub coupled with WebSocket broadcasting. The instant a seat lock is registered, an event broadcasts to all connected clients in the showtime room, flipping the seat indicator to yellow (Reserved) in real-time."
      },
      {
        title: "ZaloPay Webhook Security & Comprehensive Payment Flow Testing",
        problem: "ZaloPay Webhook callbacks could be forged by malicious actors, leading to invalid booking confirmations. Additionally, all payment flows (order creation, refund, error handling) required comprehensive automated testing before production deployment.",
        solution: "Implemented HMAC-SHA256 signature verification on all ZaloPay Webhook callbacks to block forged requests. Authored 25 Unit Tests with Jest 29: 13 Payment Service tests (verifyCallback MAC integrity, createOrder, refundOrder), 8 Movie Service tests (Cache-Aside hit/miss, key invalidation), 4 Booking Service tests (booking lifecycle, cancellation). All 25/25 achieved 100% PASS rate."
      },
    ],
  }
};
