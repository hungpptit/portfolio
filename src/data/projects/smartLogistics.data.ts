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
  githubUrl: string;
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
    role: "Kỹ sư Phần mềm & Lập trình viên Backend (Software Engineer & Backend Developer)",
    company: "Công ty TNHH CITARES",
    clientType: "Dự án nhận thầu cho Đơn vị Vận tải & Logistics (3PL Platform)",
    duration: "Tháng 06/2026 – Đã hoàn thành",
    teamSize: "4 thành viên",
    githubUrl: "https://github.com/hungpptit/smart-logistics-platform/tree/SWE_BE",

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
        area: "Kiến trúc Hệ thống & Toàn bộ Backend (100% Core Backend Ownership)",
        badge: "LEAD BACKEND ARCHITECT",
        summary: "Thiết kế và triển khai toàn bộ nền tảng Backend API, cơ sở dữ liệu và bảo mật từ con số 0.",
        items: [
          "Thiết kế kiến trúc Clean Architecture & Domain-Driven Design (DDD) phân tách độc lập 10 phân hệ nghiệp vụ logistics.",
          "Thiết kế 38 bảng cơ sở dữ liệu PostgreSQL chuẩn hóa bậc 3 (3NF), tích hợp tiện ích không gian PostGIS (ST_Distance, GIST Index) và ánh xạ qua Prisma ORM.",
          "Xây dựng API Gateway (Express.js + TypeScript), phân quyền chi tiết Role-Based Access Control (RBAC) cho 4 nhóm người dùng, bộ lọc DTO Validation (class-validator) và tài liệu Swagger.",
          "Bảo đảm tính toàn vẹn giao dịch (ACID) đa bảng và thiết lập khóa Unique Constraint chống tranh chấp (Race Condition) khi nhiều thủ kho cùng quét hàng."
        ]
      },
      {
        area: "Nghiên cứu & Lập trình Động cơ Trí tuệ Nhân tạo (100% AI & Optimization Engine)",
        badge: "ALGORITHM ENGINEER",
        summary: "Tự nghiên cứu, mô hình hóa toán học và lập trình thuần TypeScript 4 thuật toán tối ưu hóa tuyến đường.",
        items: [
          "Phân cụm mật độ DBSCAN: Tự động gom cụm địa lý tự nhiên và phát hiện, cô lập đơn hàng ngoại lai xa khu vực (18km) trong 3 mili-giây.",
          "Phân cụm tải trọng K-Means: Cân bằng khối lượng và thể tích kiện hàng theo sức chứa của phương tiện trong 10 mili-giây.",
          "Giải thuật Di truyền (Genetic Algorithm): Giải bài toán định tuyến đa ràng buộc CVRP + VRPTW, giảm 58.2% tổng quãng đường trong 444 mili-giây.",
          "Thuật toán Hungarian (Kuhn-Munkres): Ghép cặp 1-1 tối ưu chi phí cực tiểu toàn cục giữa tài xế và lộ trình trong dưới 1 mili-giây.",
          "Động cơ ma trận khoảng cách 3 tầng dự phòng (Goong Maps API → OSRM Server → Haversine) đảm bảo tính toán liên tục ngay cả khi mất kết nối mạng bên ngoài."
        ]
      },
      {
        area: "Động cơ Telemetry Thời gian thực & Hạ tầng Hàng đợi (100% Real-time & Queuing)",
        badge: "HIGH-LOAD STREAMING",
        summary: "Giải quyết bài toán nghẽn Disk I/O khi hàng trăm tài xế gửi tọa độ liên tục bằng kiến trúc 2 tầng.",
        items: [
          "Thiết kế đường ống 2 tầng (2-Tier Pipeline): Đệm tọa độ GPS trực tiếp vào Redis 7 (HSET/GEOADD) đạt thông lượng 1,321 pings/giây với độ trễ P99 < 1ms.",
          "Chỉ ghi lưu trữ cố định vào PostgreSQL khi phát sinh các sự kiện mốc nghiệp vụ (PICKED_UP, AT_HUB, DELIVERED, lưu ảnh chữ ký điện tử POD).",
          "Cấu hình Socket.io Server phân phòng (Rooms & Namespaces) truyền phát luồng vị trí và phát sự kiện hạ cờ (Flag Drop Event) cập nhật màu điểm giao tức thì.",
          "Tích hợp Message Broker RabbitMQ xử lý tác vụ bất đồng bộ nặng (phân luồng tính toán AI theo lô, gửi email thông báo trạng thái đơn hàng)."
        ]
      },
      {
        area: "Quy trình Nghiệp vụ Logistics & Bộ Kiểm thử Tự động (100% Domain & Testing)",
        badge: "QUALITY ASSURANCE & CI/CD",
        summary: "Số hóa trọn vẹn vòng đời bưu kiện và viết bộ kiểm thử tự động toàn diện chuẩn Senior Engineer.",
        items: [
          "Thiết kế Máy trạng thái hữu hạn 17 bước (17-state OrderStatus FSM) quản lý chặt chẽ hành trình kiện hàng từ Tạo đơn đến Giao thành công.",
          "Xây dựng cơ chế gom sọt tập kết (Tote Bag): Quét 1 mã sọt gom cập nhật trạng thái hàng loạt đơn hàng, giảm 95% thao tác thủ công.",
          "Lập trình toàn bộ kịch bản Master Test Suite (run_master_test_suite.ts) gồm 12 bài test bao phủ 5 tầng kiến trúc đạt tỷ lệ 100% PASS."
        ]
      }
    ],

    systemArchitecture: {
      overview: "Hệ thống được thiết kế theo Kiến trúc Phần mềm Sạch (Clean Architecture) và Phương pháp Thiết kế Hướng miền nghiệp vụ (Domain-Driven Design - DDD) dưới dạng Khối đơn nhân phân tầng (Modular Monolith). Kiến trúc phân tách rõ ràng trách nhiệm giữa Tầng Giao diện (Presentation), Cổng An ninh (API Gateway), Miền Nghiệp vụ Lõi (Domain Logic), Động cơ AI (Optimization Solvers), Hạ tầng Hàng đợi & Bộ nhớ đệm (Async & Cache) và CSDL Lưu trữ Bền vững (PostgreSQL/PostGIS).",
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
            { name: "PostgreSQL 15 + PostGIS", desc: "38 bảng chuẩn hóa bậc 3 (3NF), đảm bảo giao dịch ACID và lập chỉ mục không gian", tech: "PostgreSQL 15 + PostGIS Extension" },
            { name: "Prisma ORM Client", desc: "Trình ánh xạ CSDL an toàn kiểu dữ liệu (Type-safe), quản lý tự động Migration", tech: "Prisma ORM 5.x" },
            { name: "Container Orchestration", desc: "Đóng gói toàn bộ dịch vụ backend, redis, rabbitmq và database đồng nhất", tech: "Docker + Docker Compose" }
          ],
          whyUsed: "PostgreSQL đảm bảo tính toàn vẹn tuyệt đối của các giao dịch tài chính thu hộ (COD) và mốc lịch sử đơn hàng; PostGIS xử lý tối ưu các phép toán không gian địa lý; Prisma ORM loại bỏ 100% lỗi sai kiểu dữ liệu giữa TypeScript và CSDL."
        }
      ],
      decisions: [
        {
          question: "Tại sao chọn Kiến trúc Modular Monolith + Clean Architecture thay vì Microservices phân tán ngay từ đầu?",
          decision: "Thiết kế hệ thống dưới dạng Modular Monolith tuân thủ nghiêm ngặt ranh giới nghiệp vụ (Bounded Contexts) của Domain-Driven Design.",
          rationale: "Với quy mô nhóm 4 thành viên và yêu cầu bàn giao nghiệm thu đúng hạn cho doanh nghiệp đối tác, Modular Monolith giúp loại bỏ chi phí vận hành mạng (network latency), tránh phân tán hạ tầng phức tạp và không gặp bài toán phân tán giao dịch (Distributed Transaction / 2PC), trong khi code vẫn được phân tách 10 module độc lập để sẵn sàng tách thành Microservices khi lưu lượng bùng nổ.",
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
      { layer: "Cơ sở dữ liệu quan hệ", tech: "PostgreSQL 15 + PostGIS", version: "PG 15", role: "Thiết kế 38 bảng chuẩn hóa bậc 3 (3NF), đảm bảo tính toàn vẹn giao dịch (ACID), tính toán hàm địa lý không gian (ST_Distance, GEOADD)" },
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
      { layer: "Đóng gói & Triển khai", tech: "Docker + Docker Compose", version: "—", role: "Đóng gói đồng nhất môi trường dịch vụ Backend, cơ sở dữ liệu PostgreSQL/PostGIS và Redis" },
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
    role: "Software Engineer & Backend Developer",
    company: "CITARES Co., Ltd.",
    clientType: "Contracted Enterprise Solution for Logistics & Transport Partner (3PL)",
    duration: "June 2026 – Completed",
    teamSize: "4 members",
    githubUrl: "https://github.com/hungpptit/smart-logistics-platform/tree/SWE_BE",

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
      outputSolution: "Architecting Smart Logistics Platform (SLP) — An enterprise automated dispatching ecosystem that solves shipping challenges for merchants nationwide: automated spatial clustering, multi-constraint route optimization, and live radar fleet tracking."
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
        area: "System Architecture & Complete Backend (100% Core Backend Ownership)",
        badge: "LEAD BACKEND ARCHITECT",
        summary: "Architected and implemented the entire Backend API platform, database, and security framework from ground up.",
        items: [
          "Engineered Clean Architecture & Domain-Driven Design (DDD) modular monolith covering 10 business domains.",
          "Architected 38-table PostgreSQL 3NF schema, leveraging PostGIS spatial functions (ST_Distance, GIST Index) and strict foreign key cascades via Prisma ORM.",
          "Implemented RESTful API Gateway (Express.js/TypeScript), 4-tier RBAC authorization (ADMIN, STAFF, CUSTOMER, SHIPPER), declarative DTO guarding (class-validator), and automated Swagger OpenAPI specs.",
          "Enforced multi-table ACID transaction safety with Prisma ORM and @unique constraints to prevent concurrent package assignment race conditions."
        ]
      },
      {
        area: "Core AI & Route Optimization Engine (100% Algorithm Engineering)",
        badge: "ALGORITHM ENGINEER",
        summary: "Independently researched, mathematically modeled, and implemented pure TypeScript meta-heuristic algorithms.",
        items: [
          "DBSCAN Density Clustering: Automatically identifies natural geographic clusters and isolates remote outlier orders (18km) in 3ms.",
          "Capacity-Constrained K-Means: Partitions orders based on vehicle weight and cubic volume limits in 10ms.",
          "Genetic Algorithm (GA): CVRP + VRPTW meta-heuristic solver reducing total transit distance by 58.2% in 444ms.",
          "Hungarian Matching (Kuhn-Munkres): Global optimal bipartite driver-route assignment with minimal relocation cost in < 1ms.",
          "3-Tier Distance Matrix Engine (Goong Maps API → OSRM Server → Haversine) ensuring 100% offline dispatch availability."
        ]
      },
      {
        area: "Real-Time Telemetry & Asynchronous Infrastructure (100% Ingestion & Streaming)",
        badge: "HIGH-LOAD STREAMING",
        summary: "Eliminated relational database I/O bottlenecks from continuous driver GPS transmissions using a 2-tier architecture.",
        items: [
          "Architected a 2-tier telemetry pipeline: buffering high-frequency GPS into Redis 7 (HSET/GEOADD) achieving 1,321 pings/sec with sub-millisecond P99 latency.",
          "Persisted data to PostgreSQL strictly on business milestone events (PICKED_UP, AT_HUB, DELIVERED, digital POD photo/signature).",
          "Engineered Socket.io room broadcasting (order:{id}) with instant flag-drop delivery state transitions on live radar maps.",
          "Integrated RabbitMQ message broker for decoupled asynchronous execution: offloading heavy AI jobs and transactional email notifications."
        ]
      },
      {
        area: "Logistics Domain Modeling & Master Test Suite (100% QA & Domain Modeling)",
        badge: "QUALITY ASSURANCE & CI/CD",
        summary: "Digitized complete parcel lifecycles and authored a senior-grade master automated test suite.",
        items: [
          "Modeled a 17-state Finite State Machine (OrderStatus FSM) with immutable address snapshotting and digital custodial handshakes.",
          "Engineered Tote Bag consolidation: 1 scan aggregates N packages, reducing manual warehouse handling by 95%.",
          "Developed the comprehensive automated master test suite (run_master_test_suite.ts) with 12 end-to-end scenarios achieving a 100% PASS rate across all 5 architectural tiers."
        ]
      }
    ],

    systemArchitecture: {
      overview: "The platform is engineered following Clean Architecture and Domain-Driven Design (DDD) principles implemented as a high-performance Modular Monolith. The system enforces strict separation of concerns across 5 distinct tiers: Presentation Layer, Ingress API Gateway, Core Domain Services, Pure TypeScript AI Engine, Async Queuing & Hot Cache, and Relational PostGIS Persistence.",
      layers: [
        {
          tier: 1,
          name: "Client & Presentation Layer",
          badge: "PRESENTATION",
          components: [
            { name: "Admin Dispatcher Dashboard", desc: "Central real-time operations dashboard with interactive fleet radar viewport", tech: "React 19 + Vite 8 + Tailwind CSS" },
            { name: "Flutter Driver Mobile App", desc: "Background GPS tracking (5s interval), QR code barcode scanner, and digital POD signature", tech: "Flutter (Dart) + Background Geolocation" },
            { name: "B2B Merchant Portal", desc: "Bulk order ingestion via Excel upload and public parcel tracking timeline", tech: "React SPA + Responsive UI" }
          ],
          whyUsed: "Decoupling responsive Single Page Applications for dispatch operators (<50ms latency) from a unified Flutter codebase optimized for persistent background geolocation tracking on both iOS and Android."
        },
        {
          tier: 2,
          name: "API Gateway & Security Layer",
          badge: "INGRESS & AUTH",
          components: [
            { name: "RESTful API Gateway", desc: "Centralized request routing, middleware pipeline, and global exception handling", tech: "Express.js + TypeScript" },
            { name: "Security & Authorization Guard", desc: "Stateless JWT token authentication and 4-tier granular RBAC authorization", tech: "JWT + Custom RBAC Middleware" },
            { name: "DTO Validation & Rate Limiter", desc: "Declarative request payload validation and Token Bucket DDoS rate protection", tech: "class-validator + express-rate-limit" }
          ],
          whyUsed: "Guarantees 100% of incoming payloads are strictly validated at the boundary before reaching domain services, preventing injection attacks and enforcing role boundaries."
        },
        {
          tier: 3,
          name: "Core Domain & AI Optimization Engine",
          badge: "DOMAIN & AI CORE",
          components: [
            { name: "Order & Fulfillment FSM", desc: "17-state finite state machine governing parcel lifecycles and Tote Bag aggregation", tech: "Domain Service + State Pattern" },
            { name: "Pure TypeScript AI Routing Engine", desc: "4-stage meta-heuristic optimization solver for multi-constraint CVRP + VRPTW", tech: "DBSCAN + K-Means + GA + Hungarian" },
            { name: "Distance Matrix Engine", desc: "3-tier intelligent fallback matrix calculation ensuring offline continuity", tech: "Goong Maps → OSRM → Haversine" }
          ],
          whyUsed: "Clean Architecture and DDD isolate domain business rules from external frameworks and database changes, enabling 100% deterministic automated testing without external dependencies."
        },
        {
          tier: 4,
          name: "Asynchronous Queuing & Real-Time Cache Layer",
          badge: "ASYNC & CACHE",
          components: [
            { name: "Redis 7 In-Memory Hot Buffer", desc: "High-frequency GPS coordinate buffer (HSET/GEOADD) achieving 1,321 pings/s, P99 < 1ms", tech: "Redis 7 (In-Memory Data Store)" },
            { name: "Socket.io Room Multiplexing", desc: "Targeted WebSocket room broadcasting (order:{id}, fleet:radar) for live radar map", tech: "Socket.io WebSockets" },
            { name: "RabbitMQ Message Broker", desc: "Decoupled asynchronous background task offloading for batch AI jobs and email alerts", tech: "RabbitMQ (amqplib)" }
          ],
          whyUsed: "Offloads heavy compute tasks (AI optimization, email dispatch) and continuous GPS ingestion away from the main HTTP thread, keeping REST API latency strictly under 50ms."
        },
        {
          tier: 5,
          name: "Data Persistence & Infrastructure Layer",
          badge: "DATA & INFRA",
          components: [
            { name: "PostgreSQL 15 + PostGIS", desc: "38-table 3NF schema with ACID transaction isolation and geospatial GIST indexing", tech: "PostgreSQL 15 + PostGIS Extension" },
            { name: "Prisma ORM Client", desc: "End-to-end type-safe database access client with automated schema migrations", tech: "Prisma ORM 5.x" },
            { name: "Container Orchestration", desc: "Unified containerized deployment for Backend API, Redis 7, RabbitMQ, and PostgreSQL", tech: "Docker + Docker Compose" }
          ],
          whyUsed: "PostgreSQL guarantees 100% ACID compliance for financial COD reconciliations; PostGIS accelerates proximity queries; Prisma ORM eliminates type mismatches between TypeScript and SQL."
        }
      ],
      decisions: [
        {
          question: "Why Modular Monolith + Clean Architecture over Distributed Microservices?",
          decision: "Structured as a Clean Architecture Modular Monolith with strict DDD bounded domain contexts.",
          rationale: "Given a 4-person engineering team and client delivery deadlines, a Modular Monolith eliminates distributed networking overhead, latency, and complex two-phase commit (2PC) transactions, while maintaining modular boundaries ready for future microservices extraction.",
          impact: "Reduced development cycle by 40%, maintained 100% ACID data integrity, and maximized raw computational throughput."
        },
        {
          question: "Why Pure TypeScript AI Engine over External Python Services?",
          decision: "Engineered all 4 optimization solvers (DBSCAN, K-Means, GA, Hungarian) natively in pure TypeScript.",
          rationale: "Executing the AI solvers directly within the Node.js runtime allows direct in-memory heap data sharing, eliminating inter-process RPC network serialization latency and removing dedicated Python server infrastructure costs.",
          impact: "Achieved sub-500ms (444ms) route convergence time with zero external machine learning dependencies."
        },
        {
          question: "Why Hybrid Redis In-Memory + PostgreSQL Storage (2-Tier Hot/Cold Model)?",
          decision: "Implemented a 2-tier storage pipeline: Redis 7 as an In-Memory Hot Store and PostgreSQL 15 as an Event-Driven Cold Store.",
          rationale: "500+ couriers emitting coordinates every 5 seconds generate 6,000+ writes/min. Direct disk writes to PostgreSQL cause severe I/O queue bottlenecks. Redis buffers telemetry in RAM (P99 < 1ms), while PostgreSQL persists strictly on milestone transitions (PICKED_UP, AT_HUB, DELIVERED).",
          impact: "Eliminated 99.8% of database disk write operations, easily sustaining 1,321 pings/sec write throughput."
        }
      ]
    },

    techStack: [
      { layer: "Nền tảng thực thi (Runtime)", tech: "Node.js + TypeScript", version: "v20 LTS / TS 5.x", role: "Xử lý bất đồng bộ không chặn I/O, kiểm soát kiểu dữ liệu chặt chẽ cho toàn bộ logic nghiệp vụ" },
      { layer: "Khung phát triển API", tech: "Express.js", version: "^4.19", role: "Cổng giao diện lập trình ứng dụng (RESTful API Gateway), kiểm soát luồng trung gian (Middleware), tự động sinh tài liệu Swagger" },
      { layer: "Trình ánh xạ CSDL (ORM)", tech: "Prisma ORM", version: "^5.12", role: "Ánh xạ cơ sở dữ liệu định kiểu an toàn (Type-safe), quản lý phiên bản cấu trúc bảng (Migration)" },
      { layer: "Cơ sở dữ liệu quan hệ", tech: "PostgreSQL 15 + PostGIS", version: "PG 15", role: "Thiết kế 38 bảng chuẩn hóa bậc 3 (3NF), đảm bảo tính toàn vẹn giao dịch (ACID), tính toán hàm địa lý không gian (ST_Distance, GEOADD)" },
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
      { layer: "Đóng gói & Triển khai", tech: "Docker + Docker Compose", version: "—", role: "Đóng gói đồng nhất môi trường dịch vụ Backend, cơ sở dữ liệu PostgreSQL/PostGIS và Redis" },
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
  }
};
