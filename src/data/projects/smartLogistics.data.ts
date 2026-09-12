import { TechStackItem, AIPipelineStep, DBModule, TestResult, BusinessImpact, ProjectChallenge } from '../../types';
import { Language } from '../../context/LanguageContext';

export interface FulfillmentStage {
  stage: string;
  status: string;
  tech: string;
}

export interface ProblemPoint {
  key: 'fleet' | 'volume' | 'route' | 'cost' | 'tracking';
  title: string;
  detail: string;
}

export interface SystemGoal {
  title: string;
  desc: string;
}

export interface MyOwnership {
  area: string;
  badge: string;
  summary: string;
  items: string[];
}

export interface SLAItem {
  metric: string;
  target: string;
  result: string;
}

export interface ArchitectureLayer {
  tier: number;
  name: string;
  badge: string;
  components: { name: string; desc: string; tech: string }[];
  whyUsed: string;
}

export interface ArchitectureDecision {
  question: string;
  decision: string;
  rationale: string;
  impact: string;
}

export interface SystemArchitectureData {
  overview: string;
  layers: ArchitectureLayer[];
  decisions: ArchitectureDecision[];
}

export interface SmartLogisticsData {
  overview: string;
  role: string;
  company: string;
  clientType: string;
  duration: string;
  teamSize: string;
  githubUrl?: string;
  isPrivateRepo: boolean;
  ndaNotice: string;
  businessContext: {
    inputProblem: string;
    whyThirdParty: string;
    painPoints: ProblemPoint[];
    outputSolution: string;
  };
  projectScope: {
    goals: SystemGoal[];
    geographicScope: string;
    targetUsers: string[];
    slas: SLAItem[];
  };
  myOwnership: MyOwnership[];
  systemArchitecture: SystemArchitectureData;
  techStack: TechStackItem[];
  aiPipeline: AIPipelineStep[];
  dbModules: DBModule[];
  testResults: TestResult[];
  businessImpact: BusinessImpact[];
  challenges: ProjectChallenge[];
  fulfillmentStages: FulfillmentStage[];
}

export const SMART_LOGISTICS_DETAIL: Record<Language, SmartLogisticsData> = {
  vi: {
    overview: "Smart Logistics Platform (SLP) là nền tảng quản lý điều vận và tối ưu giao hàng cấp doanh nghiệp (3PL Logistics Platform), được thiết kế theo Kiến trúc phần mềm sạch (Clean Architecture) và Phương pháp thiết kế hướng miền nghiệp vụ (Domain-Driven Design - DDD). Dự án do Công ty TNHH CITARES tiếp nhận và phát triển cho đối tác vận tải, đã hoàn thành và xác nhận nghiệm thu. Hệ thống số hóa toàn diện chuỗi cung ứng logistics gồm 7 giai đoạn khép kín: tạo đơn hàng, gom hàng tận nơi (Pickup), phân loại bưu kiện tại kho bãi (Zone Sorting), trung chuyển liên bưu cục (Line-haul), tối ưu tuyến đường giao chặng cuối (Last-Mile), ký nhận bằng chứng giao hàng điện tử (Proof of Delivery - POD), và giám sát vị trí định vị toàn cầu (GPS) theo thời gian thực trên bản đồ số radar.",
    role: "Thực tập sinh Lập trình Fullstack (Fullstack Developer Intern — Core Contributor)",
    company: "Công ty TNHH CITARES",
    clientType: "Dự án nhận thầu cho Đơn vị Vận tải & Logistics (3PL Platform)",
    duration: "Tháng 03/2026 – Tháng 08/2026 (Hoàn thành)",
    teamSize: "Đội ngũ Kỹ thuật CITARES (Backend & Client Teams)",
    isPrivateRepo: true,
    ndaNotice: "Mã nguồn nội bộ thuộc quyền sở hữu của CITARES Co., Ltd. và đối tác vận tải. Tuân thủ thỏa thuận bảo mật thương mại (NDA), toàn bộ sơ đồ kiến trúc và giải pháp được đúc kết trong Case Study này nhằm mục đích minh chứng năng lực kỹ thuật.",

    businessContext: {
      inputProblem: "Các cửa hàng kinh doanh, đại lý bán lẻ và doanh nghiệp B2B/B2C phát sinh nhu cầu gửi hàng hóa số lượng lớn tới tay khách hàng mỗi ngày nhưng thiếu hạ tầng điều vận chuyên nghiệp.",
      whyThirdParty: "Tại sao các cửa hàng cần một hệ thống điều vận trung gian (Third-Party 3PL)?",
      painPoints: [
        {
          key: "fleet",
          title: "Thiếu nguồn lực phương tiện & nhân sự",
          detail: "Cửa hàng vừa và nhỏ không đủ ngân sách đầu tư đội xe tải/xe máy và tuyển dụng đội ngũ tài xế riêng."
        },
        {
          key: "volume",
          title: "Quá tải điều phối khi lượng đơn lớn",
          detail: "Số lượng đơn hàng lớn với hàng trăm điểm giao phân tán, không thể phân bổ và sắp xếp thủ công bằng kinh nghiệm hay bảng tính Excel."
        },
        {
          key: "route",
          title: "Tự tìm lộ trình → Lãng phí xăng & Giao trễ",
          detail: "Tài xế tự tìm đường di chuyển dẫn đến đi vòng, lãng phí 40–60% chi phí xăng xe, kéo dài thời gian giao và dễ vi phạm khung giờ hẹn của khách."
        },
        {
          key: "cost",
          title: "Chi phí vận hành cố định đè nặng",
          detail: "Tự duy trì đội giao hàng tạo áp lực chi phí cố định cực lớn (lương cứng nhân sự, khấu hao phương tiện, bảo trì định kỳ, bảo hiểm)."
        },
        {
          key: "tracking",
          title: "Không có công cụ theo dõi & Giám sát trạng thái",
          detail: "Thiếu hệ thống số hóa để theo dõi tọa độ tài xế thời gian thực, khó kiểm soát lộ trình, đối soát dòng tiền thu hộ (COD) và tỷ lệ thất thoát hàng hóa cao."
        }
      ],
      outputSolution: "Xây dựng Smart Logistics Platform (SLP) — Nền tảng điều vận tự động hóa toàn diện giúp giải quyết triệt để bài toán giao nhận hàng hóa của các cửa hàng trên toàn quốc: Tự động gom cụm đơn hàng, tối ưu hóa lộ trình xe đa ràng buộc và giám sát hành trình trực tiếp trên bản đồ số."
    },

    projectScope: {
      goals: [
        {
          title: "Tự động hóa khâu gom cụm đơn hàng",
          desc: "Phân vùng địa lý tự nhiên bằng DBSCAN, cô lập đơn ngoại lai và tự động chia cụm theo giới hạn tải trọng xe máy/xe tải (Capacity-Constrained K-Means)."
        },
        {
          title: "Tối ưu hóa tuyến đường giao hàng",
          desc: "Giải thuật Di truyền (Genetic Algorithm) giải bài toán định tuyến xe có giới hạn tải trọng và khung giờ hẹn (CVRP + VRPTW), giảm 58.2% tổng quãng đường di chuyển."
        },
        {
          title: "Giám sát hành trình tài xế thời gian thực trên bản đồ",
          desc: "Thu nhận luồng định vị GPS tần suất cao qua Redis In-Memory Hot Cache và phát sóng tức thì lên bản đồ số radar qua WebSockets (Socket.io Rooms)."
        }
      ],
      geographicScope: "Sử dụng trên toàn lãnh thổ Việt Nam — CSDL địa chính chuẩn hóa theo mô hình Đơn vị hành chính mới nhất (sau sáp nhập các tỉnh/thành và xã/phường), hỗ trợ mạng lưới bưu cục đa cấp (Trung tâm phân loại tổng miền → Hub trung chuyển → Bưu cục phát chặng cuối).",
      targetUsers: [
        "Chủ cửa hàng & Doanh nghiệp gửi hàng (B2B/B2C Customer Portal)",
        "Nhân viên điều vận trung tâm (Central Dispatcher)",
        "Nhân viên thủ kho & Bàn phân loại bưu cục (Warehouse & Sorting Staff)",
        "Tài xế giao hàng chặng cuối & Tài xế xe tải trung chuyển (Shipper / Driver)"
      ],
      slas: [
        { metric: "Độ trễ xử lý GPS (P99)", target: "< 1 mili-giây", result: "Đạt chuẩn Sub-ms (Redis 7)" },
        { metric: "Thời gian hội tụ AI Routing", target: "< 500 mili-giây", result: "444ms (Genetic Algorithm)" },
        { metric: "Khả năng tiếp nhận GPS Stream", target: "> 1,000 pings/giây", result: "1,321 pings/giây (Benchmark)" },
        { metric: "Độ tin cậy giao dịch ACID", target: "100% Rollback an toàn", result: "12/12 Test Scenarios PASS" }
      ]
    },

    myOwnership: [
      {
        area: "Phát triển Dịch vụ Backend, RESTful API & Giao diện Điều phối (Fullstack & API Modules)",
        badge: "FULLSTACK CONTRIBUTOR",
        summary: "Được hướng dẫn bởi các kỹ sư đàn anh, tham gia xây dựng các dịch vụ Backend & RESTful API nghiệp vụ, phân quyền bảo mật, đồng thời hỗ trợ phát triển giao diện điều phối Dispatcher Dashboard.",
        items: [
          "Áp dụng Kiến trúc Clean Architecture & Domain-Driven Design (DDD) để phát triển các module dịch vụ điều vận, tạo đơn và phân loại bằng Express.js & TypeScript.",
          "Hỗ trợ xây dựng các thành phần giao diện React SPA Dispatcher Dashboard (bản đồ radar giám sát đội xe và danh sách điều phối bưu kiện thời gian thực).",
          "Tham gia xây dựng CSDL quan hệ PostgreSQL, thiết kế cấu trúc chuẩn hóa 3NF, chuẩn hóa địa giới hành chính (Ward/Province) và ánh xạ qua Prisma ORM.",
          "Xây dựng các RESTful API Gateway, triển khai phân quyền RBAC 4 cấp, bộ lọc DTO Validation, Swagger và kiểm soát giao dịch ACID chống Race Condition khi quét đơn đồng thời."
        ]
      },
      {
        area: "Hiện thực hóa Động cơ Thuật toán Tối ưu Tuyến đường (Route Optimization Engine)",
        badge: "ALGORITHM INTEGRATION",
        summary: "Tham gia nghiên cứu, mô hình hóa và lập trình bằng TypeScript 4 thuật toán tối ưu hóa tuyến đường theo yêu cầu bài toán điều vận.",
        items: [
          "Phân cụm mật độ DBSCAN: Gom cụm địa lý tự nhiên và phát hiện, cô lập đơn hàng ngoại lai xa khu vực giao hàng.",
          "Phân cụm tải trọng K-Means: Cân bằng khối lượng và thể tích kiện hàng theo sức chứa của phương tiện.",
          "Giải thuật Di truyền (Genetic Algorithm): Giải bài toán định tuyến đa ràng buộc CVRP + VRPTW, giảm 58.2% tổng quãng đường di chuyển.",
          "Thuật toán Hungarian (Kuhn-Munkres): Ghép cặp 1-1 tối ưu chi phí cực tiểu giữa tài xế và lộ trình giao hàng.",
          "Tích hợp ma trận khoảng cách dự phòng (Goong Maps API → OSRM Server → Haversine) đảm bảo hệ thống tính toán liên tục khi mất kết nối mạng bên ngoài."
        ]
      },
      {
        area: "Luồng Xử lý Dữ liệu Định vị Thời gian thực & Hàng đợi (Telemetry Streaming & Message Queue)",
        badge: "REAL-TIME STREAMING",
        summary: "Xây dựng giải pháp đệm và phát sóng tọa độ GPS thời gian thực giảm tải cho cơ sở dữ liệu chính.",
        items: [
          "Hiện thực hóa đường ống 2 tầng (2-Tier Pipeline): Đệm tọa độ GPS trực tiếp vào Redis 7 (HSET/GEOADD) đạt thông lượng 1,321 pings/giây với độ trễ P99 < 1ms.",
          "Chỉ ghi nhận lưu trữ cố định vào PostgreSQL khi phát sinh các mốc trạng thái nghiệp vụ (PICKED_UP, AT_HUB, DELIVERED, lưu ảnh chữ ký điện tử POD).",
          "Xây dựng Socket.io Server phân phòng (Rooms) truyền phát luồng vị trí thời gian thực và cập nhật màu trạng thái điểm giao trên bản đồ.",
          "Tích hợp Message Broker RabbitMQ tiếp nhận các tác vụ xử lý bất đồng bộ (tính toán AI theo lô, gửi email thông báo trạng thái đơn)."
        ]
      },
      {
        area: "Nghiệp vụ Vận hành & Kịch bản Kiểm thử Tự động (Domain Logic & Automated Testing)",
        badge: "AUTOMATED QA & TESTING",
        summary: "Hiện thực hóa logic vòng đời đơn hàng và xây dựng bộ kiểm thử tự động đảm bảo chất lượng hệ thống.",
        items: [
          "Lập trình Máy trạng thái hữu hạn 17 bước (17-state OrderStatus FSM) quản lý chặt chẽ hành trình kiện hàng từ Tạo đơn đến Giao thành công.",
          "Xây dựng cơ chế gom sọt tập kết (Tote Bag): Quét 1 mã sọt gom cập nhật trạng thái hàng loạt đơn hàng, giảm 95% thao tác thủ công.",
          "Xây dựng bộ kiểm thử tự động toàn diện (12 Test Scenarios) kiểm tra 100% kịch bản định tuyến, rollback giao dịch ACID và phân quyền bảo mật."
        ]
      }
    ],

    systemArchitecture: {
      overview: "Hệ thống được thiết kế theo Kiến trúc Phần mềm Sạch (Clean Architecture) và Phương pháp Thiết kế Hướng miền nghiệp vụ (Domain-Driven Design - DDD) dưới dạng Khối đơn nhân phân tầng (Modular Monolith). Kiến trúc phân tách rõ ràng trách nhiệm giữa Tầng Giao diện (Presentation), Cổng An ninh (API Gateway), Miền Nghiệp vụ Lõi (Domain Logic), Động cơ AI (Optimization Solvers), Hạ tầng Hàng đợi & Bộ nhớ đệm (Async & Cache) và CSDL Lưu trữ Bền vững (PostgreSQL 15).",
      layers: [
        {
          tier: 1,
          name: "Tầng Trình diễn & Ứng dụng Khách (Client Layer)",
          badge: "PRESENTATION",
          components: [
            { name: "Admin Dispatcher Dashboard", desc: "Bảng điều khiển điều phối & bản đồ radar đội xe theo thời gian thực", tech: "React 19 + Vite 8 + Tailwind CSS" },
            { name: "Flutter Driver Mobile App", desc: "Ứng dụng tài xế chạy ngầm phát GPS 5s/lần, quét QR và ký nhận điện tử POD", tech: "Flutter (Dart) + Background Geolocation" },
            { name: "B2B Customer Portal", desc: "Cổng khách hàng doanh nghiệp tạo đơn hàng loạt qua Excel và tra cứu lộ trình", tech: "React SPA + Responsive UI" }
          ],
          whyUsed: "Phân tách giao diện Web SPA cho nhân viên điều hành cần tốc độ phản hồi tức thì (< 50ms) và ứng dụng Flutter đa nền tảng tối ưu việc truyền phát GPS ngầm liên tục trên cả Android/iOS mà không bị hệ điều hành tắt tiết kiệm pin."
        },
        {
          tier: 2,
          name: "Tầng Cổng API & An ninh Hệ thống (API Gateway & Security Layer)",
          badge: "INGRESS & AUTH",
          components: [
            { name: "RESTful API Gateway", desc: "Cổng tiếp nhận yêu cầu, định tuyến endpoint và xử lý lỗi tập trung", tech: "Express.js + TypeScript" },
            { name: "Security & Authorization Guard", desc: "Xác thực JWT Token, phân quyền chi tiết RBAC 4 cấp vai trò", tech: "JWT + Custom RBAC Middleware" },
            { name: "DTO Validation & Rate Limiter", desc: "Kiểm tra chặt chẽ cấu trúc JSON đầu vào và chống tấn công DDoS/Spam", tech: "class-validator + express-rate-limit" }
          ],
          whyUsed: "Đảm bảo 100% dữ liệu gửi từ Client được thẩm định hợp lệ ngay tại cửa ngõ trước khi vào tầng nghiệp vụ lõi, chặn đứng hoàn toàn injection và kiểm soát quyền truy cập chặt chẽ của từng nhóm người dùng."
        },
        {
          tier: 3,
          name: "Tầng Nghiệp vụ Lõi & Động cơ AI (Core Domain & Optimization Engine)",
          badge: "DOMAIN & AI CORE",
          components: [
            { name: "Order & Fulfillment FSM", desc: "Máy trạng thái hữu hạn 17 bước kiểm soát vòng đời đơn hàng và gom sọt Tote Bag", tech: "Domain Service + State Pattern" },
            { name: "Pure TypeScript AI Routing Engine", desc: "Bộ 4 thuật toán tối ưu hóa phân cụm và chia tuyến đa ràng buộc CVRP/VRPTW", tech: "DBSCAN + K-Means + GA + Hungarian" },
            { name: "Distance Matrix Engine", desc: "Cơ chế tính ma trận khoảng cách dự phòng 3 tầng thông minh", tech: "Goong Maps → OSRM → Haversine" }
          ],
          whyUsed: "Áp dụng Clean Architecture & DDD giúp đóng gói toàn bộ logic nghiệp vụ logistics độc lập với cơ sở dữ liệu và framework bên ngoài, cho phép kiểm thử tự động 100% (Unit/Integration Test) mà không cần phụ thuộc mạng."
        },
        {
          tier: 4,
          name: "Tầng Xử lý Bất đồng bộ & Bộ nhớ đệm (Async Queuing & In-Memory Layer)",
          badge: "ASYNC & CACHE",
          components: [
            { name: "Redis 7 In-Memory Hot Buffer", desc: "Đệm tọa độ GPS tốc độ cao (HSET/GEOADD) đạt thông lượng 1,321 pings/s, P99 < 1ms", tech: "Redis 7 (In-Memory Data Store)" },
            { name: "Socket.io Room Multiplexing", desc: "Kênh phát sóng WebSockets theo phòng (order:{id}, fleet:radar) cập nhật radar", tech: "Socket.io WebSockets" },
            { name: "RabbitMQ Message Broker", desc: "Hàng đợi xử lý tác vụ nền: phân luồng tính toán AI theo lô và gửi email thông báo", tech: "RabbitMQ (amqplib)" }
          ],
          whyUsed: "Tách rời hoàn toàn các tác vụ nặng (tính toán tuyến đường, gửi email) và luồng dữ liệu tần suất cao (GPS) khỏi luồng chính của HTTP Request/Response, giúp API luôn phản hồi dưới 50ms và không làm nghẽn ổ đĩa CSDL."
        },
        {
          tier: 5,
          name: "Tầng Cơ sở Dữ liệu & Hạ tầng Bền vững (Persistence & Infrastructure Layer)",
          badge: "DATA & INFRA",
          components: [
            { name: "PostgreSQL 15", desc: "38 bảng chuẩn hóa bậc 3 (3NF), đảm bảo giao dịch ACID và tối ưu chỉ mục truy vấn", tech: "PostgreSQL 15 (Relational Database)" },
            { name: "Prisma ORM Client", desc: "Trình ánh xạ CSDL an toàn kiểu dữ liệu (Type-safe), quản lý tự động Migration", tech: "Prisma ORM 5.x" },
            { name: "Container Orchestration", desc: "Đóng gói toàn bộ dịch vụ backend, redis, rabbitmq và database đồng nhất", tech: "Docker + Docker Compose" }
          ],
          whyUsed: "PostgreSQL đảm bảo tính toàn vẹn tuyệt đối của các giao dịch tài chính thu hộ (COD) và mốc lịch sử đơn hàng; Prisma ORM loại bỏ 100% lỗi sai kiểu dữ liệu giữa TypeScript và CSDL."
        }
      ],
      decisions: [
        {
          question: "Tại sao chọn Kiến trúc Modular Monolith + Clean Architecture thay vì Microservices phân tán ngay từ đầu?",
          decision: "Thiết kế hệ thống dưới dạng Modular Monolith tuân thủ nghiêm ngặt ranh giới nghiệp vụ (Bounded Contexts) của Domain-Driven Design.",
          rationale: "Với yêu cầu triển khai nhanh và bàn giao nghiệm thu đúng hạn cho doanh nghiệp đối tác, việc lựa chọn kiến trúc Modular Monolith giúp đội ngũ kỹ thuật loại bỏ chi phí vận hành mạng (network latency), tránh phân tán hạ tầng phức tạp và không gặp bài toán phân tán giao dịch (Distributed Transaction / 2PC), trong khi code vẫn được phân tách 10 module độc lập để sẵn sàng tách thành Microservices khi lưu lượng bùng nổ.",
          impact: "Rút ngắn 40% thời gian phát triển, 100% giao dịch ACID an toàn tuyệt đối và đạt hiệu năng tối đa."
        },
        {
          question: "Tại sao tự nghiên cứu & lập trình Động cơ AI thuần TypeScript thay vì dùng Service bên thứ ba hoặc Python backend riêng?",
          decision: "Tự viết thuần 4 thuật toán tối ưu hóa (DBSCAN, K-Means, GA, Hungarian) trực tiếp bằng ngôn ngữ TypeScript.",
          rationale: "Việc chạy trực tiếp AI Engine trong cùng tiến trình Node.js giúp chia sẻ bộ nhớ chung (In-Memory Heap), loại bỏ độ trễ truyền dữ liệu qua mạng (Network Overhead) khi gọi sang Python RPC Service, đồng thời không phát sinh chi phí duy trì cụm máy chủ AI riêng biệt.",
          impact: "Thời gian hội tụ AI CVRP/VRPTW đạt 444ms, giải quyết trọn vẹn bài toán chia tuyến đa ràng buộc trong vòng chưa tới nửa giây."
        },
        {
          question: "Tại sao kết hợp cả Redis In-Memory và PostgreSQL Relational Database (Mô hình 2 Tầng Hot/Cold)?",
          decision: "Áp dụng mô hình lưu trữ phân tầng: Redis 7 làm vùng đệm nóng thời gian thực (Hot Store) và PostgreSQL 15 làm kho lưu trữ bền vững (Cold Store).",
          rationale: "Hơn 500 tài xế gửi tọa độ định kỳ 5 giây/lần tạo ra hơn 6,000 lượt ghi mỗi phút. Nếu ghi trực tiếp vào đĩa cứng của PostgreSQL sẽ làm nghẽn hàng đợi Disk I/O và làm sập CSDL. Redis lưu tạm trên RAM với độ trễ P99 < 1ms, còn PostgreSQL chỉ ghi khi có sự kiện thay đổi mốc nghiệp vụ (PICKED_UP, AT_HUB, DELIVERED).",
          impact: "Giảm 99.8% áp lực ghi đĩa cứng xuống PostgreSQL, đảm bảo hệ thống chịu tải 1,321 pings/giây mượt mà."
        }
      ]
    },

    techStack: [
      { layer: "Nền tảng thực thi (Runtime)", tech: "Node.js + TypeScript", version: "v20 LTS / TS 5.x", role: "Xử lý bất đồng bộ không chặn I/O, kiểm soát kiểu dữ liệu chặt chẽ cho toàn bộ logic nghiệp vụ" },
      { layer: "Khung phát triển API", tech: "Express.js", version: "^4.19", role: "Cổng giao diện lập trình ứng dụng (RESTful API Gateway), kiểm soát luồng trung gian (Middleware), tự động sinh tài liệu Swagger" },
      { layer: "Trình ánh xạ CSDL (ORM)", tech: "Prisma ORM", version: "^5.12", role: "Ánh xạ cơ sở dữ liệu định kiểu an toàn (Type-safe), quản lý phiên bản cấu trúc bảng (Migration)" },
      { layer: "Cơ sở dữ liệu quan hệ", tech: "PostgreSQL 15", version: "PG 15", role: "Cơ sở dữ liệu chuẩn hóa bậc 3 (3NF), tham gia xây dựng và tối ưu câu truy vấn, đảm bảo tính toàn vẹn giao dịch (ACID) và lưu trữ tọa độ trắc địa" },
      { layer: "Bộ nhớ đệm tốc độ cao", tech: "Redis 7 (In-Memory)", version: "^4.6", role: "Lưu trữ tọa độ GPS thời gian thực (HSET, GEOADD), xử lý giới hạn tần suất gọi API (Rate Limiting), độ trễ dưới 1 mili-giây" },
      { layer: "Giao tiếp thời gian thực", tech: "Socket.io (WebSocket)", version: "^4.7", role: "Truyền phát luồng tọa độ tài xế hai chiều liên tục, phát sự kiện giao hàng thành công tức thì không cần tải lại trang" },
      { layer: "Hàng đợi thông điệp", tech: "RabbitMQ (amqplib)", version: "^2.0", role: "Tách rời xử lý bất đồng bộ: gửi email thông báo, điều phối tác vụ tính toán thuật toán AI nặng" },
      { layer: "AI Phân cụm mật độ", tech: "DBSCAN (TypeScript thuần)", version: "—", role: "Thuật toán gom cụm không gian theo mật độ (DBSCAN), tự động phát hiện và cô lập đơn hàng ngoại lai xa khu vực (3ms)" },
      { layer: "AI Phân cụm tải trọng", tech: "K-Means (TypeScript thuần)", version: "—", role: "Thuật toán phân cụm địa lý theo giới hạn tải trọng xe (K-Means Clustering), cân bằng khối lượng đơn (10ms)" },
      { layer: "AI Tối ưu tuyến đường", tech: "Giải thuật Di truyền (Genetic Algorithm - GA)", version: "—", role: "Giải bài toán định tuyến xe có giới hạn tải trọng và khung giờ giao (CVRP + VRPTW), giảm 58.2% tổng quãng đường (444ms)" },
      { layer: "AI Ghép cặp tài xế", tech: "Thuật toán Hungarian (Kuhn-Munkres)", version: "—", role: "Ghép cặp tối ưu 1-1 giữa tài xế và cụm tuyến đường với tổng chi phí di chuyển nhỏ nhất toàn cục (< 1ms)" },
      { layer: "Tính toán ma trận khoảng cách", tech: "Goong Maps → OSRM → Haversine", version: "—", role: "Cơ chế dự phòng 3 tầng thông minh (thời gian chờ tối đa 5 giây mỗi tầng), đảm bảo tính toán liên tục ngay cả khi mất mạng" },
      { layer: "Giao diện quản trị (Web)", tech: "React 19 + Vite 8 + Tailwind CSS v4", version: "—", role: "Trang web quản trị đơn trang (Single Page Application - SPA), tích hợp bản đồ số radar theo dõi đội xe trực quan" },
      { layer: "Ứng dụng di động (Mobile)", tech: "Flutter (Dart)", version: "—", role: "Ứng dụng tài xế chạy ngầm phát GPS liên tục, quét mã phản hồi nhanh (QR Code), chụp ảnh và ký nhận điện tử (POD)" },
      { layer: "Đóng gói & Triển khai", tech: "Docker + Docker Compose", version: "—", role: "Đóng gói đồng nhất môi trường dịch vụ Backend, cơ sở dữ liệu PostgreSQL 15 và Redis" },
    ],

    aiPipeline: [
      {
        step: 1,
        name: "DBSCAN Clustering",
        algo: "Thuật toán gom cụm không gian theo mật độ (Density-Based Spatial Clustering - DBSCAN)",
        description: "Tính toán trước ma trận khoảng cách địa lý theo công thức Haversine. Phân vùng đơn hàng tự nhiên theo mật độ địa lý và tự động cô lập các đơn hàng ngoại lai ở vùng xa trước khi đưa vào chia tuyến.",
        result: "Phát hiện chính xác 1 đơn hàng ngoại lai cách 18km (khu vực Hóc Môn). Tự động gán lại về cụm giao hàng gần nhất sau khi tối ưu.",
        timeMs: "3 mili-giây"
      },
      {
        step: 2,
        name: "K-Means Capacity",
        algo: "Thuật toán phân cụm địa lý theo giới hạn tải trọng xe (Capacity-Constrained K-Means)",
        description: "Tự động tính toán số lượng cụm (K) tối ưu dựa trên tổng tải trọng và thể tích đơn hàng so với sức chứa của xe. Phân loại tọa độ lấy hàng hoặc giao hàng tương ứng theo từng giai đoạn đơn.",
        result: "Phân bổ 4 đơn hàng vào 2 cụm giao cân bằng tải trọng xe, không bị vượt quá sức chứa phương tiện.",
        timeMs: "10 mili-giây"
      },
      {
        step: 3,
        name: "Genetic Algorithm (GA)",
        algo: "Giải thuật Di truyền giải Bài toán định tuyến xe đa ràng buộc (CVRP + VRPTW)",
        description: "Sử dụng ma trận khoảng cách 3 tầng (bản đồ đường bộ Goong Maps API → OSRM → công thức Haversine). Ứng dụng hàm phạt điểm cho các vi phạm vượt tải trọng hoặc trễ khung giờ hẹn của khách. Hội tụ tìm lộ trình tối ưu dưới 100 thế hệ tiến hóa.",
        result: "Giảm 58.2% tổng quãng đường di chuyển so với phương pháp phân công thủ công truyền thống.",
        timeMs: "444 mili-giây"
      },
      {
        step: 4,
        name: "Hungarian Matching",
        algo: "Thuật toán ghép cặp đồ thị hai phía tối ưu toàn cục (Kuhn-Munkres / Hungarian Algorithm)",
        description: "Thiết lập ma trận chi phí gồm khoảng cách từ vị trí GPS hiện tại của tài xế đến tâm cụm giao hàng, cộng mức phạt tải trọng xe. Áp dụng quy trình 2 lượt quét đảm bảo 100% tài xế và tuyến đường đều được ghép cặp tối ưu.",
        result: "Ghép nối thành công 3 tài xế với 3 cụm tuyến đường với tổng chi phí di chuyển thấp nhất toàn cục.",
        timeMs: "< 1 mili-giây"
      }
    ],

    dbModules: [
      { id: 1, name: "Xác thực & Phân quyền (Auth & RBAC)", tables: ["users", "roles", "permissions", "role_permissions"], keyFeature: "Tách biệt thông tin cá nhân (PII): bảng người dùng (users) chỉ lưu tài khoản và mã băm mật khẩu. Phân quyền chi tiết cho 4 nhóm vai trò: Quản trị viên (ADMIN), Nhân viên điều vận (STAFF), Khách hàng (CUSTOMER), Tài xế (SHIPPER)" },
      { id: 2, name: "Khách hàng & Sổ địa chỉ (Customers & Addresses)", tables: ["customers", "addresses", "customer_addresses"], keyFeature: "Hồ sơ khách hàng (customers) liên kết 1-1 an toàn với tài khoản (users). Quản lý sổ địa chỉ đa điểm (1-N / N-N qua bảng customer_addresses), lưu trữ tọa độ địa lý kinh độ/vĩ độ chuẩn xác kèm mã Place ID bản đồ số" },
      { id: 3, name: "Mạng lưới bưu cục & Kho bãi (Facility Network)", tables: ["facility_types", "facilities", "facility_zones"], keyFeature: "Mô hình mạng lưới đa cấp (Trung tâm phân loại tổng → Bưu cục giao hàng chặng cuối). Quản lý 6 phân khu chức năng trong kho: Nhập hàng, Phân loại, Xuất hàng, Lưu trữ, Hoàn trả, Cách ly" },
      { id: 4, name: "Đơn hàng & Gói cước (Orders & Services - Lõi)", tables: ["services", "orders", "packages", "order_payments", "order_status_history"], keyFeature: "Kiểm soát vòng đời đơn qua Máy trạng thái hữu hạn 17 bước (17-state Finite State Machine - FSM). Chụp nhanh bất biến (Snapshot) địa chỉ và thông tin người nhận tại thời điểm tạo đơn để không bị ảnh hưởng khi dữ liệu gốc thay đổi" },
      { id: 5, name: "Vận đơn & Chuyến xe gom (Shipment Management)", tables: ["shipments", "shipment_packages", "shipment_transfers"], keyFeature: "Đảm bảo tính cô lập tuyệt đối: một kiện hàng chỉ nằm trong duy nhất một chuyến xe đang hoạt động nhờ ràng buộc duy nhất (Unique Constraint). Lưu vết bàn giao hàng hóa giữa các kho có chữ ký điện tử" },
      { id: 6, name: "Đội xe & Tài xế (Fleet & Driver Management)", tables: ["staff", "staff_driver_types", "vehicle_types", "vehicles", "driver_vehicle_assignments", "driver_locations"], keyFeature: "Quản lý hồ sơ nhân sự, giấy phép lái xe đa hạng (A1, B2, C, FC), phân công ca trực xe và lưu trữ vùng đệm vị trí GPS thời gian thực của tài xế" },
      { id: 7, name: "Điều vận & Tuyến đường AI (Routing & Dispatch Engine)", tables: ["routes", "route_stops", "dispatch_tasks", "route_optimizations", "route_adjustment_logs"], keyFeature: "Lưu trữ tuyến đường do Trí tuệ nhân tạo (AI) tính toán kèm thứ tự điểm dừng tối ưu. Tự động ghi nhật ký kiểm toán khi có sự cố phát sinh cần điều phối đổi tài xế giữa đường" },
      { id: 8, name: "Giám sát, Quét kho & Bằng chứng giao (Tracking & POD)", tables: ["tracking_events", "warehouse_scans", "tote_bags", "delivery_proofs"], keyFeature: "Cung cấp dòng thời gian hành trình công khai cho khách hàng tra cứu. Quản lý sọt hàng gom tập kết (Tote Bag) giúp gom nhiều đơn trong 1 lần quét mã. Lưu giữ ảnh chụp bằng chứng giao hàng, chữ ký số và đối soát tiền thu hộ (COD)" },
      { id: 9, name: "Cấu hình tham số hệ thống (System Configuration)", tables: ["system_settings"], keyFeature: "Lưu trữ tham số động cho thuật toán Trí tuệ nhân tạo (chu kỳ phát GPS, quy mô quần thể, tỷ lệ đột biến di truyền) — cho phép điều chỉnh linh hoạt trên web mà không cần khởi động lại hệ thống" },
      { id: 10, name: "Đơn vị hành chính Việt Nam (Administrative Units)", tables: ["administrative_regions", "administrative_units", "provinces", "wards"], keyFeature: "Dữ liệu địa chính chuẩn quốc gia theo mô hình Đơn vị hành chính mới nhất sau sáp nhập (provinces, wards, administrative_units, administrative_regions), phục vụ chuẩn hóa địa chỉ bưu chính và tự động định tuyến cước phí" },
    ],

    testResults: [
      { group: "Thuật toán (Algorithm)", name: "DBSCAN: Gom cụm theo mật độ & Phát hiện điểm ngoại lai", timeMs: "3ms", result: "Phát hiện 1 cụm chính + 1 đơn hàng ngoại lai xa 18km", status: "PASS" },
      { group: "Thuật toán (Algorithm)", name: "K-Means: Phân cụm địa lý theo giới hạn tải trọng xe", timeMs: "10ms", result: "Phân bổ 4 đơn hàng vào 2 cụm cân bằng tải trọng xe", status: "PASS" },
      { group: "Thuật toán (Algorithm)", name: "Genetic Algorithm: Giải thuật di truyền tối ưu lộ trình", timeMs: "444ms", result: "Hội tụ dưới 100 thế hệ, giảm 58.2% tổng quãng đường", status: "PASS" },
      { group: "Thuật toán (Algorithm)", name: "Hungarian: Ghép cặp tối ưu toàn cục tài xế - tuyến đường", timeMs: "< 1ms", result: "Ghép nối thành công 3 tài xế với 3 cụm tuyến tối ưu chi phí", status: "PASS" },
      { group: "Tích hợp (Integration)", name: "Kết nối CSDL PostgreSQL 15 & Trình ánh xạ Prisma ORM", timeMs: "80ms", result: "Bể kết nối (Connection Pool) 25 kết nối, truy vấn an toàn", status: "PASS" },
      { group: "Tích hợp (Integration)", name: "Bộ nhớ đệm Redis 7: Ghi và đọc dữ liệu tốc độ cao", timeMs: "9ms", result: "Ghi và đọc dữ liệu bộ nhớ đệm thành công với thời gian hết hạn (TTL)", status: "PASS" },
      { group: "Tích hợp (Integration)", name: "Ma trận khoảng cách không gian đa tầng (Goong → OSRM → Haversine)", timeMs: "137ms", result: "Đo chính xác khoảng cách 6,923 mét và thời gian 1,336 giây", status: "PASS" },
      { group: "Bảo vệ API (Validation)", name: "Xác thực dữ liệu đầu vào tự động (class-validator DTO Guard)", timeMs: "8ms", result: "Chặn đứng 100% các dữ liệu gửi sai định dạng tại cửa ngõ API", status: "PASS" },
      { group: "Bảo mật (Security)", name: "Kiểm tra phân quyền theo vai trò (Role-Based Access Control - RBAC)", timeMs: "11ms", result: "Xác thực chính xác quyền hạn chi tiết cho cả 4 nhóm người dùng", status: "PASS" },
      { group: "Chịu tải (Load Test)", name: "Kiểm thử luồng GPS tần suất cao (1,000 lượt gửi liên tục)", timeMs: "779ms", result: "Đạt thông lượng 1,321 yêu cầu/giây, độ trễ P99 dưới 1 mili-giây", status: "PASS" },
      { group: "Đồng thời (Concurrency)", name: "Tính toàn vẹn giao dịch đa bảng (ACID Atomic Rollback)", timeMs: "12ms", result: "Tự động hoàn tác 100% dữ liệu khi có một thao tác con bị lỗi", status: "PASS" },
      { group: "Đồng thời (Concurrency)", name: "Chống tranh chấp ghi đè dữ liệu (Unique Constraint Guard)", timeMs: "12ms", result: "Ngăn chặn triệt để trùng lặp mã đơn và mã kiện hàng khi nhiều người cùng thao tác", status: "PASS" },
    ],

    businessImpact: [
      { metric: "Tổng quãng đường giao hàng mỗi ca", before: "Chia tuyến thủ công theo kinh nghiệm", after: "Thuật toán AI tự động tối ưu hóa lộ trình", delta: "Giảm 58.2%" },
      { metric: "Độ trễ truyền phát định vị GPS", before: "Chưa có hệ thống giám sát trực tiếp", after: "Truyền phát thời gian thực qua Redis & Socket.io", delta: "Dưới 1 mili-giây (P99)" },
      { metric: "Năng lực tiếp nhận tọa độ định vị", before: "0 (không hỗ trợ)", after: "Xử lý vùng đệm qua bộ nhớ đệm Redis", delta: "1,321 điểm/giây" },
      { metric: "Thao tác quét mã chuyển kho bãi", before: "Quét thủ công từng kiện hàng đơn lẻ", after: "Quét 1 mã sọt gom (Tote Bag) cập nhật hàng loạt đơn", delta: "Giảm 95% thao tác" },
      { metric: "Tạo đơn hàng loạt cho doanh nghiệp", before: "Nhập liệu thủ công từng đơn", after: "Tải tệp bảng tính Excel xử lý tự động", delta: "20 đơn / 2 giây" },
      { metric: "Độ tin cậy kiểm thử tự động", before: "0% (chưa có quy trình kiểm thử)", after: "Bộ kiểm thử tự động 12 kịch bản toàn diện", delta: "100% Đạt (PASS)" },
    ],

    challenges: [
      {
        title: "Quá tải ghi dữ liệu vào CSDL do hàng trăm tài xế gửi tọa độ liên tục",
        problem: "Hơn 500 tài xế gửi tọa độ định vị GPS định kỳ 5 giây/lần tạo ra hơn 6,000 lượt ghi mỗi phút. Nếu ghi trực tiếp vào cơ sở dữ liệu quan hệ PostgreSQL sẽ gây nghẽn hàng đợi ổ đĩa (I/O) và làm sập hệ thống máy chủ.",
        solution: "Thiết kế kiến trúc đường ống 2 tầng (2-Tier Pipeline): Tọa độ định vị GPS được tiếp nhận và lưu tạm thời vào bộ nhớ đệm tốc độ cao Redis (độ trễ dưới 1 mili-giây) để phục vụ hiển thị bản đồ thời gian thực. Hệ thống chỉ ghi cố định vào CSDL PostgreSQL khi phát sinh các mốc sự kiện nghiệp vụ quan trọng (đã lấy hàng, đã nhập kho, đã giao hàng thành công)."
      },
      {
        title: "Bài toán định tuyến giao hàng đa điểm dừng và đa ràng buộc (VRP/VRPTW)",
        problem: "Tìm thứ tự tối ưu để giao hàng chục điểm dừng vừa đảm bảo không vượt quá tải trọng xe (theo khối lượng kg và thể tích m³), vừa phải đến đúng khung giờ hẹn trước của từng khách hàng — đây là bài toán tối ưu tổ hợp phức tạp (NP-Hard).",
        solution: "Áp dụng Giải thuật Di truyền (Genetic Algorithm - GA) kết hợp hàm phạt điểm linh hoạt cho các ràng buộc tải trọng và thời gian. Thuật toán tiến hóa qua các bước chọn lọc, lai ghép và đột biến để tìm ra tuyến đường tối ưu nhất trong vòng chưa tới nửa giây (444 mili-giây), giúp tiết kiệm 58.2% quãng đường di chuyển thực tế."
      },
      {
        title: "Đơn hàng ngoại lai ở vùng thưa dân làm sai lệch thuật toán phân cụm",
        problem: "Một số đơn hàng nằm cách xa trung tâm (ví dụ cách 18km ở vùng ngoại thành) sẽ kéo lệch tâm phân cụm của thuật toán K-Means, làm biến dạng toàn bộ các tuyến đường giao hàng xung quanh.",
        solution: "Bổ sung giai đoạn 1 sử dụng Thuật toán gom cụm theo mật độ (DBSCAN) để tự động nhận diện và tách riêng các đơn hàng ngoại lai xa khu vực. Sau khi các cụm chính được phân chia ổn định, hệ thống mới tự động gán đơn ngoại lai vào tuyến đường phù hợp nhất, đảm bảo 100% đơn hàng đều được xử lý."
      },
      {
        title: "Nguy cơ gián đoạn điều vận khi dịch vụ bản đồ bên ngoài gặp sự cố",
        problem: "Nếu dịch vụ bản đồ trực tuyến (Goong Maps API) bị quá tải hoặc mất kết nối mạng, toàn bộ luồng tính toán định tuyến của hệ thống sẽ bị treo và không thể sinh tuyến đường giao hàng.",
        solution: "Xây dựng cơ chế dự phòng 3 tầng tự động (Fallback Strategy) với thời gian chờ tối đa 5 giây mỗi tầng: Tầng 1 ưu tiên gọi Goong Maps API (dữ liệu giao thông thực tế) → Tầng 2 chuyển sang máy chủ mã nguồn mở OSRM nội bộ → Tầng 3 chuyển sang công thức toán học Haversine. Nhờ đó hệ thống vẫn hoạt động ổn định ngoại tuyến 100%."
      },
      {
        title: "Tranh chấp dữ liệu (Race Condition) khi nhiều nhân viên cùng gom hàng",
        problem: "Nhiều nhân viên thủ kho tại các bàn phân loại khác nhau có thể đồng thời quét và thêm cùng một kiện hàng vào hai chuyến xe trung chuyển khác nhau, gây sai lệch số liệu tồn kho nghiêm trọng.",
        solution: "Thiết lập Ràng buộc duy nhất (Unique Constraint) trên trường mã kiện hàng trong bảng liên kết vận đơn ở tầng CSDL PostgreSQL, kết hợp cơ chế bắt lỗi ngoại lệ cấp giao dịch của Prisma ORM. Hệ thống đảm bảo mỗi kiện hàng chỉ có thể thuộc về duy nhất một chuyến xe đang hoạt động tại một thời điểm."
      },
    ],

    fulfillmentStages: [
      { stage: "1. Tạo đơn & In tem mã vạch QR A6", status: "ĐÃ TẠO ĐƠN → SẴN SÀNG LẤY HÀNG (CREATED → READY_FOR_PICKUP)", tech: "Chụp nhanh địa chỉ bất biến · Tự động tính thời gian giao dự kiến (EDD) · Hỗ trợ tải tệp Excel tạo hàng loạt" },
      { stage: "2. Trí tuệ nhân tạo (AI) chia tuyến lấy hàng", status: "ĐÃ GÁN TUYẾN LẤY HÀNG (PICKUP_ASSIGNED)", tech: "Thuật toán DBSCAN → K-Means → Giải thuật Di truyền (GA) → Hungarian · Cho phép người điều vận xem trước lộ trình" },
      { stage: "3. Tài xế đến lấy hàng tận nơi", status: "ĐANG ĐI LẤY → ĐÃ LẤY HÀNG (PICKING → PICKED_UP)", tech: "Quét mã phản hồi nhanh (QR Code) xác nhận · Truyền phát định vị GPS định kỳ 5 giây/lần qua Redis" },
      { stage: "4. Phân loại bưu kiện & Đóng sọt gom", status: "ĐÃ ĐẾN BƯU CỤC GỬI → TẠI KHO (ARRIVED_ORIGIN_FACILITY → AT_HUB)", tech: "Quét 1 mã sọt gom (Tote Bag) cập nhật hàng loạt đơn · Giao dịch CSDL nguyên tử đảm bảo toàn vẹn dữ liệu" },
      { stage: "5. Xe tải trung chuyển liên bưu cục (Line-haul)", status: "ĐANG TRUNG CHUYỂN → ĐẾN KHO ĐÍCH (IN_TRANSIT → AT_HUB)", tech: "Quét mã QR bàn giao hàng hóa hai chiều · Lưu vết biên bản giao nhận điện tử giữa các kho" },
      { stage: "6. Trí tuệ nhân tạo (AI) chia tuyến giao chặng cuối", status: "ĐANG ĐI GIAO HÀNG (OUT_FOR_DELIVERY)", tech: "Tối ưu hóa thứ tự giao theo khung giờ hẹn của khách (VRPTW) bằng Giải thuật Di truyền" },
      { stage: "7. Giao hàng thành công & Ký nhận điện tử (POD)", status: "ĐÃ GIAO THÀNH CÔNG (DELIVERED)", tech: "Chữ ký số · Chụp ảnh bằng chứng giao hàng (POD) · Xác thực tọa độ GPS tại chỗ · Đối soát tiền thu hộ (COD)" },
    ],
  },
  en: {
    overview: "Smart Logistics Platform (SLP) is an enterprise-grade automated dispatching and routing platform (3PL Logistics Platform) engineered with Clean Architecture and Domain-Driven Design (DDD) principles. Contracted and developed by CITARES Co., Ltd. for a logistics partner, the system is fully completed and verified. It digitizes the entire supply chain across 7 closed-loop phases: order intake, door-to-door pickup dispatch, cross-dock facility zone sorting, line-haul inter-hub transfers, last-mile route optimization, digital Proof of Delivery (POD), and high-frequency real-time GPS telemetry monitoring on live radar maps.",
    role: "Fullstack Developer Intern (Core Contributor — Backend & Optimization Focus)",
    company: "CITARES Co., Ltd.",
    clientType: "Contracted Enterprise Solution for Logistics & Transport Partner (3PL)",
    duration: "Mar 2026 – Aug 2026 (Completed)",
    teamSize: "CITARES Engineering Team (Backend & Client Teams)",
    isPrivateRepo: true,
    ndaNotice: "Proprietary enterprise codebase owned by CITARES Co., Ltd. and transport partners. Protected under commercial Non-Disclosure Agreements (NDA); architectural workflows and algorithms are synthesized in this case study for technical evaluation purposes.",

    businessContext: {
      inputProblem: "Retail merchants, distributors, and B2B/B2C enterprises generate high daily shipping volumes but lack dedicated enterprise logistics infrastructure.",
      whyThirdParty: "Why do merchants need a dedicated Third-Party Logistics (3PL) Platform?",
      painPoints: [
        {
          key: "fleet",
          title: "Resource & Fleet Constraints",
          detail: "Small/medium merchants lack capital expenditure to procure dedicated transport fleets and maintain in-house driver payrolls."
        },
        {
          key: "volume",
          title: "Manual Dispatch Overload",
          detail: "High order volumes across distributed geo-coordinates make manual spreadsheet or phone-call dispatching impossible to scale."
        },
        {
          key: "route",
          title: "Sub-optimal Routing & Delivery Delays",
          detail: "Ad-hoc driver routing leads to 40–60% wasted fuel, excessive transit delays, and missed customer delivery time windows."
        },
        {
          key: "cost",
          title: "High Fixed Operational Costs",
          detail: "Managing an in-house fleet creates heavy overhead: fixed driver salaries, vehicle depreciation, maintenance, and insurance."
        },
        {
          key: "tracking",
          title: "Zero Visibility & High Loss Risk",
          detail: "Lack of real-time telemetry tracking, high parcel shrinkage risk, and opaque Cash-on-Delivery (COD) reconciliation."
        }
      ],
      outputSolution: "Smart Logistics Platform (SLP) — An enterprise automated dispatching ecosystem that solves shipping challenges for merchants nationwide: automated spatial clustering, multi-constraint route optimization, and live radar fleet tracking."
    },

    projectScope: {
      goals: [
        {
          title: "Automated Spatial Clustering & Ingestion",
          desc: "Density-based spatial partitioning (DBSCAN), isolating sparse outliers, and balancing vehicle payload constraints (Capacity-Constrained K-Means)."
        },
        {
          title: "Multi-Constraint Route Optimization",
          desc: "Genetic Algorithm solver for CVRP + VRPTW, reducing transit distance by 58.2% while strictly satisfying delivery time windows."
        },
        {
          title: "Real-Time Telemetry & Radar Fleet Monitoring",
          desc: "High-frequency driver GPS stream ingestion into Redis hot cache with instant live map viewport broadcasts via Socket.io Rooms."
        }
      ],
      geographicScope: "Nationwide Vietnam Deployment — Standardized geospatial dataset aligned with the latest National Administrative Reorganization & Mergers (Post-Merger Provinces & Wards), supporting a hierarchical multi-tier logistics network (Regional Sorting Center → Hub → Station).",
      targetUsers: [
        "Merchant Senders & Enterprise Clients (B2B/B2C Customer Portal)",
        "Central Logistics Dispatchers (Operations Staff)",
        "Warehouse & Cross-dock Operators (Sorting Staff)",
        "Last-Mile Motorcycle Couriers & Line-Haul Truck Drivers"
      ],
      slas: [
        { metric: "GPS Telemetry Latency (P99)", target: "< 1 ms", result: "Verified Sub-ms (Redis 7)" },
        { metric: "AI Route Convergence Time", target: "< 500 ms", result: "444ms (Genetic Algorithm)" },
        { metric: "GPS Stream Write Throughput", target: "> 1,000 pings/sec", result: "1,321 pings/sec (Benchmark)" },
        { metric: "ACID Transaction Reliability", target: "100% Atomic Rollback", result: "12/12 Test Scenarios PASS" }
      ]
    },

    myOwnership: [
      {
        area: "Backend Services, RESTful APIs & Dispatcher UI (Fullstack & API Modules)",
        badge: "FULLSTACK CONTRIBUTOR",
        summary: "Mentored by senior engineers, participated in developing core backend & RESTful API services, role-based security, and supported dispatcher UI development.",
        items: [
          "Applied Clean Architecture & Domain-Driven Design (DDD) principles to build dispatching, order creation, and sorting modules using Express.js & TypeScript.",
          "Supported developing React SPA Dispatcher Dashboard components (real-time fleet radar monitoring map and batch parcel dispatch list).",
          "Participated in developing relational PostgreSQL schema, designing 3NF normalized structures, administrative units mapping, and Prisma ORM integration.",
          "Built RESTful API Gateway modules, 4-tier RBAC authorization, declarative DTO validation, Swagger docs, and enforced ACID transactions preventing concurrent scanning race conditions."
        ]
      },
      {
        area: "Route Optimization Algorithm Integration (Optimization Engine)",
        badge: "ALGORITHM INTEGRATION",
        summary: "Collaborated on mathematical modeling and TypeScript implementation of 4 fleet routing algorithms.",
        items: [
          "DBSCAN Density Clustering: Identifies natural geographic clusters and isolates remote outlier orders in 3ms.",
          "Capacity-Constrained K-Means: Partitions orders based on vehicle weight and cubic volume limits in 10ms.",
          "Genetic Algorithm (GA): CVRP + VRPTW meta-heuristic solver reducing total transit distance by 58.2% in 444ms.",
          "Hungarian Matching (Kuhn-Munkres): Global optimal bipartite driver-route assignment with minimal relocation cost in < 1ms.",
          "3-Tier Distance Matrix Engine (Goong Maps API → OSRM Server → Haversine) ensuring continuous offline dispatch availability."
        ]
      },
      {
        area: "Real-Time Telemetry & Asynchronous Infrastructure (Ingestion & Streaming)",
        badge: "REAL-TIME STREAMING",
        summary: "Engineered buffering and streaming solutions for high-frequency GPS coordinate broadcasts.",
        items: [
          "Implemented a 2-tier telemetry pipeline: buffering high-frequency GPS into Redis 7 (HSET/GEOADD) achieving 1,321 pings/sec with sub-millisecond P99 latency.",
          "Persisted telemetry to PostgreSQL strictly on business milestone events (PICKED_UP, AT_HUB, DELIVERED, digital POD photo/signature).",
          "Engineered Socket.io room broadcasting (order:{id}) with instant delivery state transitions on live radar maps.",
          "Integrated RabbitMQ message broker for decoupled asynchronous execution: offloading heavy AI jobs and transactional notifications."
        ]
      },
      {
        area: "Domain Logic & Automated Testing Suites (FSM & Automated QA)",
        badge: "AUTOMATED QA & TESTING",
        summary: "Implemented 17-state order lifecycle state machines and authored end-to-end automated testing suites.",
        items: [
          "Engineered 17-state Finite State Machine (OrderStatus FSM) ensuring strict transition invariants from CREATED to DELIVERED.",
          "Built batch Tote Bag aggregation mechanism: single QR scan updates batches of parcels simultaneously, reducing manual touches by 95%.",
          "Authored 12 automated test scenarios covering routing convergence, ACID rollback on failures, and RBAC security guards (100% PASS)."
        ]
      }
    ],

    systemArchitecture: {
      overview: "Engineered with Clean Architecture and Domain-Driven Design (DDD) principles as a Modular Monolith. Strict layer decoupling separates Presentation, API Gateway, Core Domain Logic, AI Optimization Engine, Asynchronous Message Queues & Cache, and Persistent Relational Storage.",
      layers: [
        {
          tier: 1,
          name: "Client Presentation & Mobile Layer",
          badge: "PRESENTATION",
          components: [
            { name: "Admin Dispatcher Dashboard", desc: "Operations control dashboard & live radar fleet tracking map", tech: "React 19 + Vite 8 + Tailwind CSS" },
            { name: "Flutter Driver Mobile App", desc: "Background geolocation app transmitting GPS pings every 5s, QR scanner, and digital POD signature capture", tech: "Flutter (Dart) + Background Geolocation" },
            { name: "B2B Customer Portal", desc: "Batch order creation via Excel and public tracking timeline", tech: "React SPA + Responsive UI" }
          ],
          whyUsed: "Decouples fast Web SPA management interfaces for operations dispatchers from cross-platform mobile apps for couriers ensuring uninterrupted background GPS broadcasting without OS battery throttling."
        },
        {
          tier: 2,
          name: "API Gateway & Security Layer",
          badge: "INGRESS & AUTH",
          components: [
            { name: "RESTful API Gateway", desc: "Centralized request routing, centralized error handling, and Swagger OpenAPI docs", tech: "Express.js + TypeScript" },
            { name: "Security & Authorization Guard", desc: "JWT token verification with granular 4-tier Role-Based Access Control (RBAC)", tech: "JWT + Custom RBAC Middleware" },
            { name: "DTO Validation & Rate Limiter", desc: "Strict payload sanitization and DDoS/burst protection", tech: "class-validator + express-rate-limit" }
          ],
          whyUsed: "Ensures 100% of ingress requests are validated at the perimeter before hitting core domain services, eliminating injection vulnerabilities and enforcing granular permissions."
        },
        {
          tier: 3,
          name: "Core Domain Logic & Optimization Engine",
          badge: "DOMAIN & AI CORE",
          components: [
            { name: "Order & Fulfillment FSM", desc: "17-state order lifecycle machine and tote bag consolidation logic", tech: "Domain Service + State Pattern" },
            { name: "Pure TypeScript AI Routing Engine", desc: "4-stage spatial clustering and multi-constraint CVRP/VRPTW optimization pipeline", tech: "DBSCAN + K-Means + GA + Hungarian" },
            { name: "Distance Matrix Engine", desc: "3-tier intelligent distance matrix fallback mechanism", tech: "Goong Maps → OSRM → Haversine" }
          ],
          whyUsed: "Clean Architecture & DDD encapsulate core business logic independently of external databases and frameworks, enabling 100% isolated unit and integration testing without network dependencies."
        },
        {
          tier: 4,
          name: "Asynchronous Queuing & In-Memory Layer",
          badge: "ASYNC & CACHE",
          components: [
            { name: "Redis 7 In-Memory Hot Buffer", desc: "High-throughput GPS telemetry buffer (HSET/GEOADD) achieving 1,321 pings/sec with sub-millisecond P99 latency", tech: "Redis 7 (In-Memory Data Store)" },
            { name: "Socket.io Room Multiplexing", desc: "Real-time WebSocket room broadcasting (order:{id}, fleet:radar) for live map updates", tech: "Socket.io WebSockets" },
            { name: "RabbitMQ Message Broker", desc: "Asynchronous task queue for heavy AI batch computation and transactional email notifications", tech: "RabbitMQ (amqplib)" }
          ],
          whyUsed: "Decouples heavy compute workloads and high-frequency GPS writes from the primary HTTP request/response cycle, keeping API responses under 50ms and preventing disk I/O bottlenecks."
        },
        {
          tier: 5,
          name: "Persistence & Infrastructure Layer",
          badge: "DATA & INFRA",
          components: [
            { name: "PostgreSQL 15", desc: "38-table 3NF relational schema with strict ACID transactions and query index tuning", tech: "PostgreSQL 15 (Relational Database)" },
            { name: "Prisma ORM Client", desc: "Type-safe database client and automated schema migration management", tech: "Prisma ORM 5.x" },
            { name: "Container Orchestration", desc: "Unified containerized deployment across backend, cache, message broker, and relational database", tech: "Docker + Docker Compose" }
          ],
          whyUsed: "PostgreSQL guarantees strict financial integrity for COD collections and order audit logs; Prisma ORM eliminates type mismatches."
        }
      ],
      decisions: [
        {
          question: "Why choose Modular Monolith + Clean Architecture instead of distributed Microservices?",
          decision: "Structured the system as a Modular Monolith with strict DDD Bounded Contexts.",
          rationale: "To meet client delivery milestones efficiently, the engineering team adopted a Modular Monolith architecture, eliminating inter-service network latency, infrastructure overhead, and distributed transaction complexity (2PC), while keeping 10 domain modules strictly isolated for future microservice extraction.",
          impact: "Accelerated development timeline by 40%, guaranteed 100% ACID transaction safety, and maximized execution performance."
        },
        {
          question: "Why write the AI Optimization Engine in pure TypeScript instead of Python microservices?",
          decision: "Implemented all 4 optimization solvers (DBSCAN, K-Means, GA, Hungarian) directly in TypeScript within the Node.js runtime.",
          rationale: "Running the AI engine directly in the Node.js process shares in-memory heap data, eliminating network serialization overhead from Python RPC calls and removing extra server maintenance costs.",
          impact: "Achieved 444ms convergence time for complex CVRP/VRPTW routing, solving multi-constraint dispatching in under half a second."
        },
        {
          question: "Why combine Redis In-Memory and PostgreSQL (2-Tier Hot/Cold Storage)?",
          decision: "Adopted a 2-tier storage pipeline: Redis 7 as the real-time hot store and PostgreSQL 15 as the persistent cold store.",
          rationale: "500+ drivers transmitting coordinates every 5s generate over 6,000 writes/min. Direct disk writes to PostgreSQL would cause heavy disk I/O saturation. Redis buffers GPS pings in RAM (P99 < 1ms), while PostgreSQL persists only key lifecycle milestone events (PICKED_UP, AT_HUB, DELIVERED).",
          impact: "Eliminated 99.8% of database disk write operations, easily sustaining 1,321 pings/sec write throughput."
        }
      ]
    },

    techStack: [
      { layer: "Execution Runtime", tech: "Node.js + TypeScript", version: "v20 LTS / TS 5.x", role: "Non-blocking asynchronous I/O runtime with strict end-to-end type safety across domain modules" },
      { layer: "API Framework", tech: "Express.js", version: "^4.19", role: "RESTful API Gateway, middleware orchestration, and automated Swagger OpenAPI documentation" },
      { layer: "Object-Relational Mapping (ORM)", tech: "Prisma ORM", version: "^5.12", role: "Type-safe database querying, declarative schema management, and automated database migrations" },
      { layer: "Relational Database", tech: "PostgreSQL 15", version: "PG 15", role: "3NF normalized relational database, participated in query optimization, ACID transaction integrity, and coordinate persistence" },
      { layer: "High-Speed In-Memory Cache", tech: "Redis 7 (In-Memory)", version: "^4.6", role: "Real-time GPS telemetry hot buffering (HSET, GEOADD) and sub-millisecond API rate limiting" },
      { layer: "Real-Time Communication", tech: "Socket.io (WebSocket)", version: "^4.7", role: "Bi-directional WebSocket streaming for courier locations and instant live map state transitions" },
      { layer: "Message Broker Queue", tech: "RabbitMQ (amqplib)", version: "^2.0", role: "Asynchronous task offloading: batch AI route computation and transactional email dispatch" },
      { layer: "Density Clustering Solver", tech: "DBSCAN (Pure TypeScript)", version: "—", role: "Density-based spatial clustering solver detecting and isolating remote geographical outliers (3ms)" },
      { layer: "Payload Capacity Solver", tech: "K-Means (Pure TypeScript)", version: "—", role: "Capacity-constrained vehicle routing partitioner balancing package weight and cubic volume (10ms)" },
      { layer: "Multi-Constraint Route Solver", tech: "Genetic Algorithm (GA)", version: "—", role: "Evolutionary meta-heuristic solver for CVRP + VRPTW, reducing fleet travel distance by 58.2% (444ms)" },
      { layer: "Bipartite Matching Solver", tech: "Hungarian Algorithm (Kuhn-Munkres)", version: "—", role: "Optimal 1-to-1 global bipartite driver-to-route assignment with minimal relocation overhead (< 1ms)" },
      { layer: "Distance Matrix Computation", tech: "Goong Maps → OSRM → Haversine", version: "—", role: "3-tier intelligent fallback mechanism (5s timeout per tier) ensuring 100% offline dispatch reliability" },
      { layer: "Operations Dashboard (Web)", tech: "React 19 + Vite 8 + Tailwind CSS v4", version: "—", role: "Single Page Application (SPA) dispatcher dashboard with live radar fleet monitoring maps" },
      { layer: "Courier Mobile App (Mobile)", tech: "Flutter (Dart)", version: "—", role: "Background GPS tracking mobile application with QR scanning and digital Proof-of-Delivery (POD) capture" },
      { layer: "Containerization & Deployment", tech: "Docker + Docker Compose", version: "—", role: "Containerized deployment orchestrating Backend services, PostgreSQL 15, and Redis" },
    ],

    aiPipeline: [
      {
        step: 1,
        name: "DBSCAN Density Clustering",
        algo: "Density-Based Spatial Clustering of Applications with Noise (DBSCAN)",
        description: "Pre-computes pairwise Haversine distance matrix. Groups orders into natural spatial density clusters and isolates remote geographical outliers before route generation.",
        result: "Detected 1 remote outlier order 18km away (Hoc Mon district). Reassigned to nearest optimized cluster post-routing.",
        timeMs: "3 ms"
      },
      {
        step: 2,
        name: "Capacity-Constrained K-Means",
        algo: "Capacity-Constrained K-Means Spatial Partitioning",
        description: "Calculates optimal cluster count (K) based on total package weight and cubic volume against vehicle payload limits for pickup or delivery legs.",
        result: "Balanced 4 orders into 2 capacity-compliant delivery clusters without vehicle overload.",
        timeMs: "10 ms"
      },
      {
        step: 3,
        name: "Genetic Algorithm (GA)",
        algo: "Evolutionary Meta-Heuristic Solver for CVRP + VRPTW",
        description: "Uses 3-tier distance matrix with penalty functions for vehicle payload breaches or customer time window violations. Converges within 100 evolution generations.",
        result: "Reduced total delivery transit distance by 58.2% compared to traditional manual dispatching.",
        timeMs: "444 ms"
      },
      {
        step: 4,
        name: "Hungarian Bipartite Matching",
        algo: "Kuhn-Munkres Global Optimal Bipartite Matching Algorithm",
        description: "Constructs cost matrix evaluating driver distance to cluster centroids plus payload penalties. 2-pass matching ensures 100% driver-route pair assignment.",
        result: "Successfully matched 3 couriers to 3 optimized route clusters with minimal global relocation cost.",
        timeMs: "< 1 ms"
      }
    ],

    dbModules: [
      { id: 1, name: "Authentication & Authorization (Auth & RBAC)", tables: ["users", "roles", "permissions", "role_permissions"], keyFeature: "PII separation: users table stores only credentials and password hashes. Granular RBAC for 4 roles: ADMIN, STAFF, CUSTOMER, SHIPPER" },
      { id: 2, name: "Customers & Address Book (Customers & Addresses)", tables: ["customers", "addresses", "customer_addresses"], keyFeature: "1-1 safe linkage with users. Multi-point address book with latitude/longitude coordinates and map Place ID integration" },
      { id: 3, name: "Hub Network & Facilities (Facility Network)", tables: ["facility_types", "facilities", "facility_zones"], keyFeature: "Hierarchical network (Regional Sort Center → Last-Mile Hub). 6 warehouse functional zones: Inbound, Sorting, Outbound, Storage, Return, Quarantine" },
      { id: 4, name: "Orders & Services Core (Orders & Services)", tables: ["services", "orders", "packages", "order_payments", "order_status_history"], keyFeature: "17-state Finite State Machine (FSM) tracking. Immutable address snapshots upon creation to protect historical integrity" },
      { id: 5, name: "Shipments & Master Consignments (Shipment Management)", tables: ["shipments", "shipment_packages", "shipment_transfers"], keyFeature: "Unique constraints guarantee a package belongs to strictly one active shipment at any moment. Digital handover audit logs between hubs" },
      { id: 6, name: "Fleet & Couriers (Fleet & Driver Management)", tables: ["staff", "staff_driver_types", "vehicle_types", "vehicles", "driver_vehicle_assignments", "driver_locations"], keyFeature: "Staff records, driving license classes (A1, B2, C, FC), shift assignments, and real-time GPS coordinate telemetry buffer" },
      { id: 7, name: "AI Dispatch & Routing (Routing & Dispatch Engine)", tables: ["routes", "route_stops", "dispatch_tasks", "route_optimizations", "route_adjustment_logs"], keyFeature: "Stores AI-generated routes with optimal stop sequences. Comprehensive audit logs for manual reassignment during in-transit incidents" },
      { id: 8, name: "Tracking, Sorting & Proof of Delivery (Tracking & POD)", tables: ["tracking_events", "warehouse_scans", "tote_bags", "delivery_proofs"], keyFeature: "Public tracking timeline, batch Tote Bag scanning, electronic POD signature capture, and Cash-on-Delivery (COD) reconciliation" },
      { id: 9, name: "System Settings (System Configuration)", tables: ["system_settings"], keyFeature: "Dynamic parameter tuning for AI algorithms (GPS broadcast interval, population size, mutation rate) without service restarts" },
      { id: 10, name: "Vietnam Administrative Units (Administrative Units)", tables: ["administrative_regions", "administrative_units", "provinces", "wards"], keyFeature: "Standardized geospatial dataset aligned with post-merger administrative reforms for automated postal zone routing and pricing" },
    ],

    testResults: [
      { group: "Algorithm", name: "DBSCAN: Density Clustering & Outlier Isolation", timeMs: "3ms", result: "Detected 1 main cluster + 1 remote outlier (18km away)", status: "PASS" },
      { group: "Algorithm", name: "K-Means: Capacity-Constrained Geographic Partitioning", timeMs: "10ms", result: "Partitioned 4 orders into 2 balanced payload clusters", status: "PASS" },
      { group: "Algorithm", name: "Genetic Algorithm: CVRP/VRPTW Route Optimization", timeMs: "444ms", result: "Converged in <100 generations, reducing distance by 58.2%", status: "PASS" },
      { group: "Algorithm", name: "Hungarian: Global Optimal Driver-Route Matching", timeMs: "< 1ms", result: "Matched 3 couriers to 3 route clusters with minimum global cost", status: "PASS" },
      { group: "Integration", name: "PostgreSQL 15 & Prisma ORM Connection Pool", timeMs: "80ms", result: "25-connection pool verified with safe type-checked queries", status: "PASS" },
      { group: "Integration", name: "Redis 7 In-Memory Hot Buffer Read/Write", timeMs: "9ms", result: "Verified cache read/write operations with proper TTL expiration", status: "PASS" },
      { group: "Integration", name: "3-Tier Spatial Distance Matrix (Goong → OSRM → Haversine)", timeMs: "137ms", result: "Measured 6,923 meters in 1,336 seconds accurately", status: "PASS" },
      { group: "API Guard", name: "Declarative DTO Input Validation (class-validator)", timeMs: "8ms", result: "100% of malformed ingress payloads rejected at perimeter", status: "PASS" },
      { group: "Security", name: "Role-Based Access Control Middleware (RBAC)", timeMs: "11ms", result: "Verified granular authorization for all 4 user roles", status: "PASS" },
      { group: "Load Testing", name: "High-Frequency GPS Stream Ingestion (1,000 pings)", timeMs: "779ms", result: "Achieved 1,321 requests/sec with sub-millisecond P99 latency", status: "PASS" },
      { group: "Concurrency", name: "Multi-Table Transaction Integrity (ACID Rollback)", timeMs: "12ms", result: "100% atomic rollback on partial sub-operation failure", status: "PASS" },
      { group: "Concurrency", name: "Data Overwrite Protection (Unique Constraint Guard)", timeMs: "12ms", result: "Prevented duplicate package assignments during concurrent scanning", status: "PASS" },
    ],

    businessImpact: [
      { metric: "Total Travel Distance per Shift", before: "Manual dispatching based on intuition", after: "Automated AI multi-constraint route optimization", delta: "–58.2% Distance" },
      { metric: "GPS Telemetry Latency (P99)", before: "No live telemetry infrastructure", after: "Real-time streaming via Redis & Socket.io", delta: "Sub-ms (< 1ms)" },
      { metric: "GPS Stream Write Throughput", before: "0 (unsupported)", after: "Buffered high-frequency ingestion via Redis", delta: "1,321 pings/sec" },
      { metric: "Warehouse Scanning Touchpoints", before: "Manual individual parcel scanning", after: "Single Tote Bag scan for batch updates", delta: "–95% Manual Touches" },
      { metric: "B2B Enterprise Batch Ingestion", before: "Single manual order entry", after: "Automated batch Excel file upload", delta: "20 orders / 2 sec" },
      { metric: "Automated Testing Coverage", before: "0% (no automated QA suites)", after: "Comprehensive 12 automated test scenarios", delta: "100% PASS" },
    ],

    challenges: [
      {
        title: "Database write saturation from high-frequency GPS telemetry streams",
        problem: "500+ active couriers transmitting coordinates every 5s produce over 6,000 writes/min. Direct disk writes to PostgreSQL cause heavy I/O bottlenecks and server degradation.",
        solution: "Implemented a 2-tier telemetry pipeline: GPS coordinates buffer into high-speed Redis RAM (sub-millisecond P99 latency) for real-time live map rendering. Coordinates persist to PostgreSQL only on business milestone events (PICKED_UP, AT_HUB, DELIVERED)."
      },
      {
        title: "NP-hard multi-constraint vehicle routing problem (CVRP / VRPTW)",
        problem: "Finding the optimal stop sequence across dozens of delivery points while respecting vehicle payload constraints (weight in kg and volume in m³) and strict customer time windows is a complex combinatorial optimization problem.",
        solution: "Engineered a Genetic Algorithm (GA) solver with adaptive penalty functions for payload and time violations. Evolutionary selection, crossover, and mutation converge to near-optimal routes in 444ms, saving 58.2% in total travel distance."
      },
      {
        title: "Remote outlier orders distorting spatial clustering centroids",
        problem: "Sparse outlier orders far from urban clusters (e.g., 18km in suburban areas) distort standard K-Means centroids, degrading all surrounding delivery routes.",
        solution: "Integrated a pre-processing DBSCAN step to detect and isolate remote outliers before route creation. Once core clusters are established, outliers are reassigned to the nearest optimal route, ensuring 100% order fulfillment."
      },
      {
        title: "Dispatch engine resilience during third-party mapping API outages",
        problem: "If the external routing API (Goong Maps) experiences rate limiting or downtime, automated dispatch calculations stall completely.",
        solution: "Built a 3-tier fallback matrix with 5s timeout per tier: Tier 1 calls Goong Maps API (live traffic) → Tier 2 falls back to self-hosted OSRM server → Tier 3 defaults to pure Haversine mathematical matrix. Enables 100% offline dispatch availability."
      },
      {
        title: "Concurrent warehouse sorting race conditions during cross-docking",
        problem: "Multiple warehouse operators scanning packages concurrently at different tables could assign the same parcel to conflicting transfer shipments.",
        solution: "Enforced PostgreSQL @unique constraints on the shipment package relation combined with Prisma ORM transactional error trapping. Guarantees a parcel belongs to strictly one active shipment at any moment."
      },
    ],

    fulfillmentStages: [
      { stage: "1. Order Creation & QR Label Generation", status: "CREATED → READY_FOR_PICKUP", tech: "Immutable address snapshot · Estimated Delivery Date (EDD) computation · Batch Excel ingestion" },
      { stage: "2. AI-Powered Pickup Route Dispatch", status: "PICKUP_ASSIGNED", tech: "DBSCAN → K-Means → Genetic Algorithm (GA) → Hungarian matching · Dispatcher route preview" },
      { stage: "3. Courier Doorstep Pickup Leg", status: "PICKING → PICKED_UP", tech: "Courier QR scan confirmation · 5-second GPS telemetry broadcasting via Redis" },
      { stage: "4. Cross-Dock Sorting & Tote Bag Aggregation", status: "ARRIVED_ORIGIN_FACILITY → AT_HUB", tech: "Single Tote Bag scan for batch order updates · Atomic multi-table database transactions" },
      { stage: "5. Inter-Hub Line-Haul Transfer Leg", status: "IN_TRANSIT → AT_HUB", tech: "Two-way QR scan verification · Digital custody transfer audit logging between facilities" },
      { stage: "6. AI-Optimized Last-Mile Delivery Leg", status: "OUT_FOR_DELIVERY", tech: "Genetic Algorithm VRPTW route sequencing respecting customer delivery time windows" },
      { stage: "7. Delivery Confirmation & Digital POD", status: "DELIVERED", tech: "Digital signature · Proof of Delivery (POD) photo capture · On-site GPS coordinate verification · Cash-on-Delivery (COD) reconciliation" },
    ],
  }
};
