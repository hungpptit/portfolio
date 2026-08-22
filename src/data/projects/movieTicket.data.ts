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
    overview: "Hệ thống đặt vé xem phim trực tuyến phân tán dựa trên Kiến trúc Vi dịch vụ (Microservices), giải quyết triệt để bài toán đồng thời (Concurrency) khi hàng ngàn người dùng cùng tranh chấp chọn một ghế trong cùng suất chiếu tại một thời điểm. Hệ thống áp dụng Cơ chế khóa phân tán (Distributed Lock) với Thời gian tồn tại tự động (Time-to-Live - TTL) trên bộ nhớ đệm Redis nhằm đảm bảo không bao giờ xảy ra lỗi trùng ghế (Zero Double-Booking) ngay cả dưới tải đỉnh điểm.",
    role: "Lập trình viên Backend & Thiết kế Kiến trúc Hệ thống (Backend Developer & System Architect)",
    duration: "3 tháng",
    teamSize: "3 thành viên",
    branch: "tree/kientruc",
    githubUrl: "https://github.com/hungpptit/XEMPHIM/tree/kientruc",

    techStack: [
      { layer: "Kiến trúc hệ thống", tech: "Kiến trúc Vi dịch vụ (Microservices)", version: "—", role: "Tách biệt 6 dịch vụ độc lập: Cổng API (API Gateway), Dịch vụ Người dùng (User), Dịch vụ Phim (Movie), Dịch vụ Đặt vé (Booking), Dịch vụ Thanh toán (Payment), Dịch vụ Thông báo (Notification)" },
      { layer: "Nền tảng thực thi Backend", tech: "Node.js + Express.js", version: "v20 LTS", role: "Xây dựng các giao diện lập trình ứng dụng (RESTful API) riêng biệt cho từng vi dịch vụ" },
      { layer: "Khóa phân tán (Distributed Lock)", tech: "Redis 7 (Lệnh SET NX EX)", version: "Redis 7", role: "Khóa giữ ghế nguyên tử trong thời gian tồn tại (TTL) 10 phút, tự động giải phóng ghế khi người dùng hết hạn thanh toán" },
      { layer: "Hàng đợi thông điệp bất đồng bộ", tech: "RabbitMQ Message Broker", version: "^3.x", role: "Xử lý hàng đợi gửi email vé điện tử và phát thông báo thanh toán mà không làm chậm luồng phản hồi đặt vé" },
      { layer: "Cơ sở dữ liệu quan hệ", tech: "Microsoft SQL Server (T-SQL)", version: "—", role: "Thiết lập mức cô lập giao dịch (Transaction Isolation) nghiêm ngặt để quản lý trạng thái ghế" },
      { layer: "Cổng thanh toán trực tuyến", tech: "ZaloPay Dynamic QR Code API", version: "—", role: "Sinh mã phản hồi nhanh (QR Code) động theo từng đơn đặt vé thời gian thực, xác nhận thanh toán tự động qua Webhook" },
      { layer: "Giao diện người dùng (Web)", tech: "React.js", version: "^18", role: "Trang web đơn trang (Single Page Application - SPA) hiển thị sơ đồ ghế và cập nhật trạng thái giữ chỗ trực tiếp" },
    ],

    challenges: [
      {
        title: "Tranh chấp đặt trùng ghế dưới tải lượng người dùng đồng thời cao (Double-Booking Race Condition)",
        problem: "Khi hơn 1,000 người dùng cùng nhấn nút đặt một chiếc ghế VIP trong khoảng thời gian 50 mili-giây, nếu chỉ kiểm tra bằng truy vấn cơ sở dữ liệu thông thường thì sẽ xảy ra hiện tượng tranh chấp (Race Condition), dẫn đến bán 2 vé cho cùng 1 ghế.",
        solution: "Triển khai Cơ chế Khóa phân tán (Distributed Lock) bằng lệnh nguyên tử Redis SET NX EX với thời hạn 10 phút: Chỉ duy nhất 1 yêu cầu đầu tiên giành được khóa thành công, 999 yêu cầu còn lại nhận ngay phản hồi báo trùng (HTTP 409 Conflict). Nếu sau 10 phút người dùng không hoàn tất thanh toán, Redis tự động giải phóng khóa để người khác có thể đặt."
      },
      {
        title: "Dữ liệu trạng thái sơ đồ ghế bị trễ so với thực tế (Stale State trên màn hình người dùng)",
        problem: "Khi Người dùng A đang trong quá trình giữ ghế để thanh toán, màn hình của Người dùng B nếu không được cập nhật sẽ vẫn hiển thị chiếc ghế đó màu xanh (ghế trống), gây trải nghiệm thất vọng khi bấm vào.",
        solution: "Ứng dụng cơ chế Phát và Đăng ký nhận tin tức thời (Publish/Subscribe - PubSub) trên Redis kết hợp WebSocket. Ngay khi có lệnh giữ ghế, hệ thống phát thông báo tới toàn bộ các trình duyệt đang xem cùng suất chiếu để chuyển màu ghế sang màu vàng (đang giữ chỗ) ngay lập tức."
      },
    ],
  },
  en: {
    overview: "Distributed cinema ticket booking platform built on an autonomous Microservices architecture. Eliminates severe concurrency race conditions when thousands of users contend for the same VIP seat simultaneously during blockbuster premiere showtimes. Leverages Redis Distributed Locking with Time-to-Live (TTL) auto-expiration to guarantee absolute Zero Double-Booking integrity under peak load.",
    role: "Backend Developer & Systems Architect",
    duration: "3 months",
    teamSize: "3 members",
    branch: "tree/kientruc",
    githubUrl: "https://github.com/hungpptit/XEMPHIM/tree/kientruc",

    techStack: [
      { layer: "System Architecture", tech: "Microservices Architecture", version: "—", role: "Decoupled 6 autonomous services: API Gateway, User Service, Movie Catalog, Booking Service, Payment Gateway, and Notification Service" },
      { layer: "Backend Runtime", tech: "Node.js + Express.js", version: "v20 LTS", role: "High-performance non-blocking RESTful API services per bounded context" },
      { layer: "Distributed Locking", tech: "Redis 7 (Atomic SET NX EX)", version: "Redis 7", role: "Atomic seat lock with a 10-minute TTL, automatically releasing seats upon payment timeout" },
      { layer: "Message Queuing", tech: "RabbitMQ Message Broker", version: "^3.x", role: "Asynchronous task queue for electronic ticket generation and notification dispatch" },
      { layer: "Relational Database", tech: "Microsoft SQL Server (T-SQL)", version: "—", role: "Strict transaction isolation levels guaranteeing persistent seat inventory integrity" },
      { layer: "Payment Integration", tech: "ZaloPay Dynamic QR API", version: "—", role: "Dynamic QR code payment generation with automated asynchronous Webhook callbacks" },
      { layer: "Web Frontend", tech: "React.js SPA", version: "^18", role: "Interactive real-time seat map updating reservation colors instantly" },
    ],

    challenges: [
      {
        title: "Double-Booking Race Condition under Extreme Concurrency",
        problem: "When over 1,000 users click to reserve the same VIP seat within a 50ms window, traditional database read-check queries fail due to race conditions, causing duplicate ticket sales for the exact same physical seat.",
        solution: "Implemented Redis Distributed Locks using the atomic SET NX EX key command with a 10-minute TTL: Exactly 1 incoming request acquires the reservation lock; the remaining 999+ concurrent requests receive an immediate HTTP 409 Conflict. If payment is uncompleted after 10 minutes, Redis automatically evicts the lock key."
      },
      {
        title: "Stale Seat Map State on Active Client Viewports",
        problem: "When User A holds a seat, other active viewers watching the same showtime would still see the seat as vacant (green), leading to repeated collision attempts.",
        solution: "Implemented Redis PubSub coupled with WebSocket broadcasting. The instant a seat lock is registered, an event broadcasts to all connected clients in the showtime room, flipping the seat indicator to yellow (Reserved) in real-time."
      },
    ],
  }
};
