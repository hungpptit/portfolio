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
    overview: "Hệ thống đặt vé xem phim trực tuyến phân tán xây dựng theo Kiến trúc Vi dịch vụ (Microservices Architecture) gồm 6 service nghiệp vụ phía sau API Gateway tập trung (Database-per-Service). Xử lý tranh chấp giữ ghế dưới tải đồng thời bằng Khóa phân tán Redis (SET NX PX) kết hợp Database Pessimistic Lock dự phòng. Đảm bảo tính nhất quán giữa Thanh toán và Đặt vé qua SAGA Choreography trên RabbitMQ, kèm cơ chế hoàn tiền bù trừ tự động. Tích hợp Circuit Breaker chống lỗi lan tầng, Distributed Tracing (x-request-id), Batch API giảm network round trips từ O(N) xuống O(1), và đạt 25/25 Unit Tests (100% PASS) bằng Jest 29.",
    role: "Trưởng nhóm Kỹ thuật & Thiết kế Hệ thống (Technical Lead & System Designer)",
    duration: "3 tháng",
    teamSize: "3 thành viên",
    branch: "tree/SWE_BE_1",
    githubUrl: "https://github.com/hungpptit/XEMPHIM/tree/SWE_BE_1",

    techStack: [
      { layer: "Kiến trúc hệ thống", tech: "Microservices Architecture", version: "—", role: "6 vi dịch vụ nghiệp vụ phía sau API Gateway (Database-per-Service): User, Movie, Seat, Booking, Payment, Notification; loại bỏ liên kết cơ sở dữ liệu chéo (cross-service DB coupling)" },
      { layer: "Cổng API & Khả năng phục hồi", tech: "API Gateway + Opossum Circuit Breaker", version: "Opossum 8.x", role: "Reverse proxy tập trung (express-http-proxy), xác thực JWT HttpOnly Cookie, tích hợp Circuit Breaker (Opossum) với ngưỡng lỗi 50% và timeout 6s; khi downstream vượt ngưỡng lỗi, mạch chuyển sang Open và trả về HTTP 503, giúp ngăn lỗi lan truyền" },
      { layer: "Giao dịch phân tán & Messaging", tech: "RabbitMQ (SAGA Choreography)", version: "RabbitMQ 3.x", role: "SAGA Choreography (Durable Queues & Message Persistence): Payment phát payment.successful → Booking xác nhận vé → Notification gửi QR email; tự động phát booking.failed để Payment hoàn tiền bù trừ qua ZaloPay API" },
      { layer: "Truy vết phân tán (Tracing)", tech: "Distributed Tracing (Correlation ID)", version: "UUID v4", role: "Sinh và truyền x-request-id xuyên suốt từ Gateway qua các HTTP proxies, headers của RabbitMQ và gắn tiền tố [Trace: ID] vào log của background consumers để debug chính xác từng luồng" },
      { layer: "Khóa phân tán (Distributed Lock)", tech: "Redis 7 (SET NX PX)", version: "Redis 7", role: "Khóa giữ ghế nguyên tử trong bộ nhớ RAM (TTL 120s), tự động giải phóng khi hết hạn; tự động fallback sang Pessimistic Lock (Sequelize t.LOCK.UPDATE) ở tầng CSDL khi Redis offline" },
      { layer: "Tối ưu I/O & Bộ nhớ đệm", tech: "Batch APIs + Redis Metadata Cache", version: "ioredis 5.x", role: "Endpoint Batch POST /api/seats/batch và /api/showtimes/batch giảm network round trips từ O(N) xuống O(1); cache metadata suất chiếu 5 phút tránh flood request" },
      { layer: "Cơ sở dữ liệu quan hệ", tech: "Microsoft SQL Server (5 CSDL độc lập)", version: "2022", role: "5 database riêng biệt: XemPhim_User, XemPhim_Movie, XemPhim_Seat, XemPhim_Booking, XemPhim_Payment; Notification Service hoạt động stateless không cần persistent DB; liên kết các domain qua logical IDs" },
      { layer: "Cổng thanh toán trực tuyến", tech: "ZaloPay Dynamic QR API", version: "Sandbox", role: "Sinh mã QR động theo từng đơn đặt vé thời gian thực; xác thực thanh toán tự động qua Webhook bằng HMAC-SHA256; API hoàn tiền tự động khi hủy vé" },
      { layer: "Đóng gói & Triển khai", tech: "Docker & Docker Compose", version: "v2", role: "Docker hóa toàn bộ hệ thống gồm Frontend, API Gateway, 6 services, Redis và RabbitMQ trên bridge network xemphim-network, bảo mật biến môi trường qua .env" },
      { layer: "Kiểm thử & Chất lượng", tech: "Jest 29 (Unit Tests)", version: "Jest 29", role: "25/25 Unit Tests (100% PASS) trên 3 service: Booking (4 tests), Payment/ZaloPay (13 tests), Movie/Cache (8 tests)" },
    ],

    challenges: [
      {
        title: "Tranh chấp đặt trùng ghế dưới tải lượng người dùng đồng thời cao (Double-Booking Race Condition)",
        problem: "Khi nhiều người dùng cùng nhấn nút đặt một chiếc ghế trong khoảng thời gian ngắn, nếu chỉ kiểm tra bằng truy vấn đọc-ghi cơ sở dữ liệu thông thường thì sẽ xảy ra hiện tượng tranh chấp (Race Condition), dẫn đến bán 2 vé cho cùng 1 ghế.",
        solution: "Triển khai Cơ chế Khóa phân tán (Distributed Lock) bằng lệnh nguyên tử Redis SET NX PX với thời hạn 120s: Chỉ duy nhất yêu cầu đầu tiên giành được khóa thành công, các yêu cầu đến sau nhận phản hồi báo bận (HTTP 409 Conflict) ngay tại RAM mà không gây tải cho DB. Khi Redis ngoại tuyến, hệ thống tự động fallback sang Pessimistic Lock mức cơ sở dữ liệu (Sequelize t.LOCK.UPDATE) để bảo toàn tính toàn vẹn."
      },
      {
        title: "Nhất quán dữ liệu phân tán giữa Thanh toán & Đặt vé (Distributed Transactions & SAGA)",
        problem: "Trong kiến trúc Microservices với Database-per-Service, không thể dùng giao dịch 2 pha (2PC) vì gây khóa tài nguyên lâu và nghẽn hệ thống. Nếu người dùng thanh toán ZaloPay thành công nhưng giữ chỗ ghế bị hết hạn hoặc lỗi mạng, hệ thống có nguy cơ mất tiền của khách.",
        solution: "Áp dụng mẫu thiết kế SAGA Choreography qua RabbitMQ với Durable Queues và Message Persistence: Khi ZaloPay gửi Webhook thành công, Payment Service ghi nhận trạng thái và phát sự kiện payment.successful (kèm cơ chế HTTP fallback dự phòng nếu RabbitMQ offline). Booking Service tiêu thụ sự kiện với prefetch(1) và explicit ACK để xác nhận vé. Nếu xuất vé thất bại (hết hạn giữ chỗ), Booking Service lập tức phát sự kiện booking.failed để Payment Service kích hoạt Giao dịch bù trừ (Compensating Transaction) tự động gọi API hoàn tiền ZaloPay cho khách hàng."
      },
      {
        title: "Hiện tượng sập dây chuyền (Cascading Failure) & Lặp request liên dịch vụ (Repeated Inter-Service Calls)",
        problem: "Khi gọi liên dịch vụ (ví dụ Booking cần thông tin của N ghế từ Seat Service), việc gọi lặp HTTP GET từng ghế gây ra độ trễ mạng O(N) round trips. Hơn nữa, nếu một service downstream bị chậm hoặc chết, các request tích tụ sẽ làm cạn kiệt tài nguyên của Gateway và làm sập toàn bộ hệ thống.",
        solution: "Thiết kế các endpoint Batch API (POST /api/seats/batch, POST /api/showtimes/batch) gom N requests thành 1 request O(1) duy nhất, kết hợp bộ đệm Redis metadata TTL 5 phút. Tại API Gateway, tích hợp Circuit Breaker (Opossum) với ngưỡng lỗi 50% và timeout 6s: khi downstream gặp sự cố, mạch tự động chuyển sang Open và trả về HTTP 503 ngay lập tức, giúp ngăn lỗi lan truyền sang các service khác."
      },
    ],
  },
  en: {
    overview: "Distributed cinema ticket booking platform built with a Microservices Architecture featuring 6 business services behind a centralized API Gateway (Database-per-Service pattern). Mitigates concurrent seat contention using Redis Distributed Locks (SET NX PX) with database pessimistic lock fallback. Ensures consistency between Payment and Booking via SAGA Choreography over RabbitMQ, with automated compensating refunds. Features Circuit Breakers against cascading failures, Distributed Tracing (x-request-id), Batch APIs reducing network round trips from O(N) down to O(1), and achieves 25/25 Unit Tests (100% PASS) using Jest 29.",
    role: "Technical Lead & System Designer",
    duration: "3 months",
    teamSize: "3 members",
    branch: "tree/SWE_BE_1",
    githubUrl: "https://github.com/hungpptit/XEMPHIM/tree/SWE_BE_1",

    techStack: [
      { layer: "System Architecture", tech: "Microservices Architecture", version: "—", role: "6 business microservices behind a centralized API Gateway (Database-per-Service): User, Movie, Seat, Booking, Payment, Notification; eliminating cross-service database coupling" },
      { layer: "API Gateway & Resilience", tech: "API Gateway + Opossum Circuit Breaker", version: "Opossum 8.x", role: "Centralized reverse proxy (express-http-proxy), JWT HttpOnly Cookie auth, and Circuit Breakers (50% error threshold, 6s timeout) tripping Open to return graceful HTTP 503 and prevent cascading failures" },
      { layer: "Distributed Messaging", tech: "RabbitMQ (SAGA Choreography)", version: "RabbitMQ 3.x", role: "SAGA Choreography (Durable Queues & Message Persistence): Payment emits payment.successful → Booking confirms ticket → Notification dispatches QR email; emits booking.failed on allocation error to trigger automated Compensating Refund via ZaloPay API" },
      { layer: "Distributed Tracing", tech: "Distributed Tracing (Correlation ID)", version: "UUID v4", role: "Generates and propagates x-request-id across Gateway, HTTP proxies, and RabbitMQ message headers, prefixing [Trace: ID] in consumer logs for end-to-end distributed observability" },
      { layer: "Distributed Locking", tech: "Redis 7 (Atomic SET NX PX)", version: "Redis 7", role: "In-memory atomic seat locking with 120s TTL, auto-releasing expired holds; automatic fallback to Sequelize Pessimistic DB Lock (t.LOCK.UPDATE) when Redis is offline" },
      { layer: "I/O & Latency Tuning", tech: "Batch APIs + Redis Metadata Cache", version: "ioredis 5.x", role: "Batch endpoints POST /api/seats/batch & /api/showtimes/batch reduce network round trips from O(N) down to O(1); 5-min Redis metadata cache prevents movie-service request flooding" },
      { layer: "Relational Databases", tech: "Microsoft SQL Server (5 Isolated DBs)", version: "2022", role: "5 dedicated databases: XemPhim_User, XemPhim_Movie, XemPhim_Seat, XemPhim_Booking, XemPhim_Payment; Notification Service operates statelessly without a persistent DB; domain data linked strictly via logical IDs" },
      { layer: "Payment Gateway", tech: "ZaloPay Dynamic QR API", version: "Sandbox", role: "Dynamic QR code generation per checkout; automated asynchronous Webhook callbacks verified via HMAC-SHA256 signature; automated refund API integration" },
      { layer: "Containerization & DevOps", tech: "Docker & Docker Compose", version: "v2", role: "Dockerized entire system including Frontend, API Gateway, 6 microservices, Redis, and RabbitMQ across an isolated bridge network with secure .env interpolation" },
      { layer: "Testing & Quality", tech: "Jest 29 (Unit Tests)", version: "Jest 29", role: "25/25 Unit Tests (100% PASS rate): Booking Service (4 tests), Payment/ZaloPay Service (13 tests), Movie/Cache Service (8 tests)" },
    ],

    challenges: [
      {
        title: "Double-Booking Race Condition under Concurrent Contention",
        problem: "When concurrent users click to reserve the same seat simultaneously within a tight window, traditional database read-check queries fail due to race conditions, risking duplicate bookings for the exact same physical seat.",
        solution: "Implemented Redis Distributed Locks using the atomic SET NX PX command with a 120-second TTL: Exactly 1 incoming request acquires the reservation lock in RAM; remaining concurrent requests receive an immediate HTTP 409 Conflict without touching SQL Server. When Redis is offline, the system auto-falls back to Sequelize Pessimistic DB Lock (t.LOCK.UPDATE) ensuring ACID integrity."
      },
      {
        title: "Distributed Data Consistency between Payment & Booking (SAGA Pattern)",
        problem: "In a microservices architecture with Database-per-Service, 2-Phase Commit (2PC) is impractical due to blocking and poor scalability. If a user completes ZaloPay payment but seat allocation fails or expires due to network delays, customers risk losing money without receiving a ticket.",
        solution: "Applied the SAGA Choreography pattern over RabbitMQ with Durable Queues and Message Persistence: When ZaloPay delivers a verified Webhook, Payment Service publishes payment.successful (with an HTTP fallback if RabbitMQ is offline). Booking Service consumes this event with prefetch(1) and explicit ACK to finalize ticket generation. If finalization fails (hold expired), Booking Service immediately emits booking.failed, instructing Payment Service to execute an automated Compensating Transaction calling ZaloPay's refund API."
      },
      {
        title: "Cascading Failures & Repeated Inter-Service Calls (Inter-Service Network Overhead)",
        problem: "Inter-service queries (such as Booking querying N individual seats from Seat Service) incurred severe O(N) network round trips. Furthermore, if a downstream service experienced slowdown or downtime, queued requests would exhaust Gateway thread pools, causing cascading outages.",
        solution: "Engineered Batch API endpoints (POST /api/seats/batch, POST /api/showtimes/batch) consolidating N roundtrips into a single O(1) request, combined with 5-minute Redis metadata caching. At the API Gateway, configured Opossum Circuit Breakers (50% error threshold, 6s timeout) to trip Open and fail fast with HTTP 503 when downstream encounters issues, preventing cascading outages across services."
      },
    ],
  }
};
