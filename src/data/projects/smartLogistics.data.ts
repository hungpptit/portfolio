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
    overview: "Smart Logistics Platform (SLP) là nền tảng quản lý điều vận và tối ưu giao hàng cấp doanh nghiệp (3PL Logistics Platform). Dự án do Công ty TNHH CITARES tiếp nhận và phát triển cho đối tác vận tải. Trong đội ngũ kỹ thuật của dự án, tôi tham gia với vai trò Kỹ sư Phần mềm Fullstack phụ trách 3 trọng tâm kỹ thuật cốt lõi: Tham gia phát triển CSDL PostgreSQL 15 chuẩn 3NF và tầng Backend (Express.js, TypeScript) theo Clean Architecture & DDD; xây dựng React SPA Dispatcher Dashboard tích hợp bản đồ radar tracking thời gian thực; Xây dựng pipeline thuật toán định tuyến 4 giai đoạn thuần TypeScript (DBSCAN → K-Means → GA → Hungarian Algorithm), giảm 58.2% quãng đường vận chuyển cho 500+ đơn hàng/ngày; và Thiết kế đường ống GPS telemetry trên Redis (1.321 tọa độ/giây, P99 < 1ms) kết hợp hàng đợi RabbitMQ, tuân thủ nghiêm ngặt quy trình Git branching và PR review.",
    role: "Kỹ sư Phần mềm Fullstack (Thực tập sinh — Backend, Thuật toán Định tuyến & Dispatcher Dashboard)",
    company: "Công ty TNHH CITARES",
    clientType: "Dự án nền tảng Vận tải & Logistics Doanh nghiệp (3PL Platform)",
    duration: "Tháng 06/2026 – Hiện tại",
    teamSize: "Đội ngũ Kỹ thuật CITARES (Backend, AI & Client Teams)",
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
        "Nhân viên điều phối trung tâm (Central Dispatcher — người dùng chính của React SPA Dashboard)",
        "Tài xế giao hàng chặng cuối & xe tải trung chuyển (Shipper / Driver nhận lộ trình)",
        "Chủ cửa hàng & Doanh nghiệp gửi hàng (B2B/B2C Khách hàng tạo đơn)",
        "Quản trị viên hệ thống (System Administrator kiểm soát cấu hình & đối soát)"
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
        area: "Tham gia phát triển CSDL PostgreSQL 15 chuẩn 3NF, Tầng Backend & React SPA Dispatcher Dashboard",
        badge: "CSDL 3NF & FULLSTACK",
        summary: "Tham gia xây dựng cấu trúc dữ liệu quan hệ chuẩn hóa bậc 3 (3NF), phát triển tầng dịch vụ Backend Clean Architecture & DDD và bảng điều khiển điều phối React SPA tích hợp radar tracking.",
        items: [
          "Tham gia xây dựng CSDL quan hệ chuẩn 3NF trên PostgreSQL 15: thiết lập các ràng buộc khóa ngoại chặt chẽ, bảo đảm toàn vẹn giao dịch nguyên tử ACID 100% khi cập nhật trạng thái đơn và đối soát tài chính COD.",
          "Ánh xạ CSDL định kiểu an toàn qua Prisma ORM 5.x, hỗ trợ quản lý cấu trúc bảng (Migration) và liên kết dữ liệu địa giới hành chính (Ward/Province) với tọa độ thực tế.",
          "Xây dựng các module Backend & RESTful API Gateway bằng Express.js & TypeScript theo Clean Architecture & DDD, triển khai phân quyền RBAC 4 cấp, bộ lọc DTO Validation và Swagger Docs.",
          "Xây dựng giao diện React SPA Dispatcher Dashboard: tích hợp bản đồ radar tracking giám sát vị trí đội xe theo thời gian thực và công cụ trực quan hóa lộ trình giao hàng.",
          "Lập trình Máy trạng thái hữu hạn (OrderStatus FSM) kiểm soát bất biến các bước chuyển trạng thái đơn hàng (CREATED → IN_TRANSIT → DELIVERED)."
        ]
      },
      {
        area: "Xây dựng Pipeline Thuật toán Định tuyến 4 Giai đoạn Thuần TypeScript (DBSCAN → K-Means → GA → Hungarian)",
        badge: "ROUTING ALGORITHMS",
        summary: "Tự nghiên cứu, mô hình hóa và lập trình bằng TypeScript thuần 4 thuật toán tối ưu hóa tuyến đường phối hợp tuần tự, giảm 58.2% tổng quãng đường di chuyển cho 500+ đơn/ngày.",
        items: [
          "Phân cụm mật độ DBSCAN (Giai đoạn 1): Gom cụm địa lý tự nhiên, tự động phát hiện và cô lập đơn hàng ngoại lai xa khu vực giao hàng trong 3ms.",
          "Phân cụm tải trọng K-Means (Giai đoạn 2): Cân bằng khối lượng và thể tích kiện hàng theo giới hạn sức chứa của phương tiện trong 10ms.",
          "Giải thuật Di truyền - Genetic Algorithm (Giai đoạn 3): Giải bài toán định tuyến đa ràng buộc CVRP + VRPTW, hội tụ sau 444ms, giảm 58.2% tổng quãng đường vận chuyển.",
          "Thuật toán Hungarian / Kuhn-Munkres (Giai đoạn 4): Ghép cặp 1-1 tối ưu chi phí cực tiểu giữa tài xế và cụm lộ trình giao hàng (< 1ms).",
          "Tích hợp ma trận khoảng cách dự phòng 3 tầng (Goong Maps API → OSRM Server → Haversine) đảm bảo tính toán liên tục khi mất kết nối mạng ngoài."
        ]
      },
      {
        area: "Thiết kế Đường ống GPS Telemetry trên Redis (1.321 pings/s), Hàng đợi RabbitMQ & Quy trình Git Chuyên nghiệp",
        badge: "STREAMING & WORKFLOW",
        summary: "Thiết kế hạ tầng đệm định vị thời gian thực giảm tải cho CSDL, tách luồng tính toán nặng bất đồng bộ và tuân thủ quy trình Git branching / PR review.",
        items: [
          "Hiện thực hóa đường ống 2 tầng (2-Tier Pipeline): Đệm tọa độ GPS trực tiếp vào Redis 7 (HSET/GEOADD) đạt thông lượng 1,321 tọa độ/giây với độ trễ P99 < 1ms.",
          "Truyền phát luồng định vị trực tiếp lên bản đồ radar Dispatcher Dashboard qua Socket.io Rooms, chỉ ghi nhận vào PostgreSQL khi phát sinh mốc nghiệp vụ (giảm 99.8% áp lực ghi đĩa).",
          "Tách luồng bất đồng bộ qua RabbitMQ: Tiếp nhận các batch tính toán định tuyến nặng của cả tổng kho và gửi email thông báo, hoàn toàn không nghẽn Event Loop của HTTP thread chính.",
          "Tuân thủ nghiêm ngặt quy trình Git branching (Feature Branch, Gitflow), viết commit message chuẩn Conventional Commits và tạo Pull Request (PR) được peer review chặt chẽ."
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
            { name: "Driver Mobile App", desc: "Ứng dụng tài xế phát luồng định vị GPS tần suất cao về máy chủ", tech: "Mobile Geolocation Telemetry Source" },
            { name: "B2B Customer Portal", desc: "Cổng khách hàng doanh nghiệp tạo đơn hàng loạt qua Excel và tra cứu lộ trình", tech: "React SPA + Responsive UI" }
          ],
          whyUsed: "Giao diện Web SPA React phục vụ nhân viên điều hành cần tốc độ phản hồi tức thì (< 50ms), đồng thời tiếp nhận luồng định vị GPS liên tục từ thiết bị của tài xế."
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
            { name: "Order & Fulfillment FSM", desc: "Máy trạng thái hữu hạn 17 bước kiểm soát nghiêm ngặt vòng đời đơn hàng", tech: "Domain Service + State Pattern" },
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
            { name: "PostgreSQL 15", desc: "CSDL quan hệ chuẩn hóa bậc 3 (3NF), đảm bảo giao dịch ACID và tối ưu chỉ mục truy vấn", tech: "PostgreSQL 15 (Relational Database)" },
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
        result: "Phát hiện chính xác 1 đơn hàng ngoại lai cách 4.2km (vùng rìa giáp ranh bưu cục). Tự động gán lại về cụm giao hàng gần nhất sau khi tối ưu.",
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
      { id: 8, name: "Giám sát, Quét kho & Bằng chứng giao (Tracking & POD)", tables: ["tracking_events", "warehouse_scans", "delivery_proofs"], keyFeature: "Cung cấp dòng thời gian hành trình công khai cho khách hàng tra cứu. Lưu giữ biên bản kiểm toán trạng thái đơn hàng, ảnh chụp bằng chứng giao hàng (POD), chữ ký số và đối soát dòng tiền thu hộ (COD) an toàn nguyên tử" },
      { id: 9, name: "Cấu hình tham số hệ thống (System Configuration)", tables: ["system_settings"], keyFeature: "Lưu trữ tham số động cho thuật toán Trí tuệ nhân tạo (chu kỳ phát GPS, quy mô quần thể, tỷ lệ đột biến di truyền) — cho phép điều chỉnh linh hoạt trên web mà không cần khởi động lại hệ thống" },
      { id: 10, name: "Đơn vị hành chính Việt Nam (Administrative Units)", tables: ["administrative_regions", "administrative_units", "provinces", "wards"], keyFeature: "Dữ liệu địa chính chuẩn quốc gia theo mô hình Đơn vị hành chính mới nhất sau sáp nhập (provinces, wards, administrative_units, administrative_regions), phục vụ chuẩn hóa địa chỉ bưu chính và tự động định tuyến cước phí" },
    ],

    testResults: [
      { group: "Thuật toán (Algorithm)", name: "DBSCAN: Gom cụm theo mật độ & Phát hiện điểm ngoại lai", timeMs: "3ms", result: "Phát hiện 1 cụm chính + 1 đơn hàng ngoại lai giáp ranh (4.2km)", status: "PASS" },
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
      { metric: "Quy trình làm việc nhóm & Kiểm thử", before: "Chưa có quy trình kiểm thử và review", after: "Git branching (Feature branch), PR review và 12 kịch bản tự động", delta: "100% Đạt (PASS)" },
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
        title: "Đơn hàng ngoại lai ở vùng giáp ranh làm sai lệch thuật toán phân cụm",
        problem: "Một số đơn hàng nằm ở vùng rìa giáp ranh (ví dụ cách 4-5km ngoài bán kính giao hàng tập trung) sẽ kéo lệch tâm phân cụm của thuật toán K-Means, làm biến dạng các tuyến đường giao hàng xung quanh.",
        solution: "Bổ sung giai đoạn 1 sử dụng Thuật toán gom cụm theo mật độ (DBSCAN) để tự động nhận diện và tách riêng các đơn hàng ngoại lai xa khu vực. Sau khi các cụm chính được phân chia ổn định, hệ thống mới tự động gán đơn ngoại lai vào tuyến đường phù hợp nhất, đảm bảo 100% đơn hàng đều được xử lý."
      },
      {
        title: "Nguy cơ gián đoạn điều vận khi dịch vụ bản đồ bên ngoài gặp sự cố",
        problem: "Nếu dịch vụ bản đồ trực tuyến (Goong Maps API) bị quá tải hoặc mất kết nối mạng, toàn bộ luồng tính toán định tuyến của hệ thống sẽ bị treo và không thể sinh tuyến đường giao hàng.",
        solution: "Xây dựng cơ chế dự phòng 3 tầng tự động (Fallback Strategy) với thời gian chờ tối đa 5 giây mỗi tầng: Tầng 1 ưu tiên gọi Goong Maps API (dữ liệu giao thông thực tế) → Tầng 2 chuyển sang máy chủ mã nguồn mở OSRM nội bộ → Tầng 3 chuyển sang công thức toán học Haversine. Nhờ đó hệ thống vẫn hoạt động ổn định ngoại tuyến 100%."
      },
      {
        title: "Tranh chấp dữ liệu đồng thời và bảo đảm toàn vẹn giao dịch ACID",
        problem: "Nhiều người dùng và tài xế cùng lúc cập nhật trạng thái đơn hàng hoặc đối soát COD dễ dẫn đến Race Condition hoặc sai lệch số liệu tài chính.",
        solution: "Thiết lập Ràng buộc duy nhất (Unique Constraint) ở tầng CSDL PostgreSQL 15, kết hợp cơ chế giao dịch nguyên tử ACID của Prisma ORM. Hệ thống đảm bảo mọi thao tác tài chính và trạng thái đơn được khóa phân lập, tự động hoàn tác (rollback) an toàn 100% nếu có lỗi."
      },
    ],

    fulfillmentStages: [
      { stage: "1. Tạo đơn & Tiếp nhận thông tin", status: "ĐÃ TẠO ĐƠN → SẴN SÀNG LẤY HÀNG (CREATED → READY_FOR_PICKUP)", tech: "Chụp nhanh địa chỉ bất biến · Tự động tính thời gian giao dự kiến (EDD) · Hỗ trợ tải tệp Excel tạo hàng loạt" },
      { stage: "2. Trí tuệ nhân tạo (AI) chia tuyến lấy hàng", status: "ĐÃ GÁN TUYẾN LẤY HÀNG (PICKUP_ASSIGNED)", tech: "Thuật toán DBSCAN → K-Means → Giải thuật Di truyền (GA) → Hungarian · Cho phép người điều vận xem trước lộ trình" },
      { stage: "3. Tài xế đến lấy hàng tận nơi", status: "ĐANG ĐI LẤY → ĐÃ LẤY HÀNG (PICKING → PICKED_UP)", tech: "Xác nhận nhận hàng · Truyền phát định vị GPS định kỳ 5 giây/lần qua Redis" },
      { stage: "4. Bưu kiện nhập kho trung chuyển", status: "ĐÃ ĐẾN BƯU CỤC GỬI → TẠI KHO (ARRIVED_ORIGIN_FACILITY → AT_HUB)", tech: "Chuyển trạng thái FSM cấp nguyên tử · Giao dịch CSDL ACID ghi nhận mốc lịch sử order_status_history" },
      { stage: "5. Vận chuyển liên kho trung tâm", status: "ĐANG TRUNG CHUYỂN → ĐẾN KHO ĐÍCH (IN_TRANSIT → AT_HUB)", tech: "Cập nhật vị trí trung chuyển · Ghi nhận kiểm toán luân chuyển lưu trữ trên CSDL PostgreSQL" },
      { stage: "6. Trí tuệ nhân tạo (AI) chia tuyến giao chặng cuối", status: "ĐANG ĐI GIAO HÀNG (OUT_FOR_DELIVERY)", tech: "Tối ưu hóa thứ tự giao theo khung giờ hẹn của khách (VRPTW) bằng Giải thuật Di truyền" },
      { stage: "7. Giao hàng thành công & Đối soát", status: "ĐÃ GIAO THÀNH CÔNG (DELIVERED)", tech: "Ghi nhận hoàn tất đơn hàng · Xác thực tọa độ GPS giao hàng · Đối soát dòng tiền thu hộ (COD) an toàn ACID" },
    ],
  },
  en: {
    overview: "Smart Logistics Platform (SLP) is an enterprise-grade automated dispatching and routing platform (3PL Logistics Platform). Developed at CITARES Co., Ltd. for transport operations. In the engineering team, I contributed as a Fullstack Software Engineer Intern focusing on 3 core technical pillars: Participating in developing 3NF normalized PostgreSQL 15 schema and Backend layer (Express.js, TypeScript) following Clean Architecture & DDD; building React SPA Dispatcher Dashboard with real-time radar fleet tracking; Building a 4-stage route optimization pipeline in pure TypeScript (DBSCAN → K-Means → GA → Hungarian Algorithm), reducing transit distance by 58.2% for 500+ orders/day; and Designing a GPS telemetry pipeline on Redis (1,321 pings/sec, P99 < 1ms) with RabbitMQ task queue, strictly adhering to Git branching and PR review workflows.",
    role: "Fullstack Software Engineer (Intern — Backend, Route Optimization & Dispatcher Dashboard)",
    company: "CITARES Co., Ltd.",
    clientType: "Enterprise Transport & Logistics Solution (3PL Platform)",
    duration: "Jun 2026 – Present",
    teamSize: "CITARES Engineering Team (Backend, AI & Client Teams)",
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
        "Central Logistics Dispatchers & Operations Staff (React SPA Dashboard)",
        "Last-Mile Couriers & Line-Haul Drivers (Telemetry GPS Stream Source)",
        "B2B/B2C Merchant Senders (Batch Order Ingestion Portal)",
        "System Administrators (Configuration, Billing & COD Reconciliation)"
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
        area: "Contributed to 3NF PostgreSQL 15 Database, Backend Layer & React SPA Dispatcher Dashboard",
        badge: "3NF DB & FULLSTACK",
        summary: "Participated in developing 3NF normalized relational schema, building Clean Architecture & DDD backend services, and crafting React SPA Dispatcher Dashboard with real-time radar tracking.",
        items: [
          "Participated in developing 3NF normalized relational schema on PostgreSQL 15: defined strict foreign keys, enforced 100% ACID atomic transactions during order status transitions and COD reconciliation.",
          "Integrated type-safe Prisma ORM 5.x, assisted schema migrations, and mapped national administrative units (Ward/Province) to geospatial coordinates.",
          "Engineered Backend & RESTful API Gateway modules using Express.js & TypeScript following Clean Architecture & DDD: 4-tier RBAC authorization, declarative DTO validation, and Swagger OpenAPI docs.",
          "Constructed React SPA Dispatcher Dashboard: integrated real-time radar fleet tracking map and interactive route preview canvas.",
          "Developed Finite State Machine (OrderStatus FSM) strictly enforcing immutable order state transitions (CREATED → IN_TRANSIT → DELIVERED)."
        ]
      },
      {
        area: "Engineered 4-Stage Route Optimization Pipeline in Pure TypeScript (DBSCAN → K-Means → GA → Hungarian)",
        badge: "ROUTING ALGORITHMS",
        summary: "Researched, modeled, and implemented 4 sequential fleet routing algorithms purely in TypeScript with zero external AI dependencies, reducing transit distance by 58.2% for 500+ orders/day.",
        items: [
          "DBSCAN Density Clustering (Stage 1): Identifies natural spatial density clusters and isolates remote geographical outliers in 3ms.",
          "Capacity-Constrained K-Means (Stage 2): Partitions orders based on vehicle weight (kg) and cubic volume (m³) capacity limits in 10ms.",
          "Genetic Algorithm - GA (Stage 3): Evolutionary meta-heuristic solver for CVRP + VRPTW, converging in 444ms and cutting 58.2% total transit distance.",
          "Hungarian Matching / Kuhn-Munkres (Stage 4): Global optimal bipartite 1-to-1 driver-to-route matching with minimal relocation cost in < 1ms.",
          "3-Tier Distance Matrix Engine (Goong Maps API → OSRM Server → Haversine) ensuring continuous dispatch capability even during network loss."
        ]
      },
      {
        area: "Designed GPS Telemetry Pipeline on Redis (1,321 pings/s), RabbitMQ Queue & Professional Git/PR Workflow",
        badge: "STREAMING & WORKFLOW",
        summary: "Designed real-time GPS telemetry buffering to decouple disk I/O, offloaded heavy async compute workloads via RabbitMQ, and strictly followed Git branching and PR review standards.",
        items: [
          "Engineered a 2-tier telemetry pipeline: buffering high-frequency GPS into Redis 7 (HSET/GEOADD) achieving 1,321 pings/sec with sub-millisecond P99 latency.",
          "Streamed live courier locations directly to Dispatcher Dashboard radar via Socket.io Rooms, persisting to PostgreSQL only on business milestones (99.8% disk I/O reduction).",
          "Offloaded heavy asynchronous batch jobs via RabbitMQ: processed large hub-wide routing batches and dispatch notifications without blocking the main HTTP event loop.",
          "Strictly adhered to professional team Git workflows: Feature Branching (Gitflow), Conventional Commits, and mandatory peer PR code reviews."
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
            { name: "React SPA Dispatcher Dashboard", desc: "Interactive dispatching control center & live radar fleet tracking map", tech: "React 19 + Vite 8 SPA" },
            { name: "Driver Telemetry Stream Source", desc: "Background geolocation client emitting GPS coordinates every 5s into telemetry pipeline", tech: "Driver Mobile Client" },
            { name: "B2B Customer Portal", desc: "Batch order creation via Excel upload and shipment tracking timeline", tech: "React Web Portal" }
          ],
          whyUsed: "Decouples fast Web SPA management interfaces for operations dispatchers from driver mobile telemetry sources, ensuring uninterrupted background GPS broadcasting without OS battery throttling."
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
            { name: "Order Lifecycle & FSM Service", desc: "Finite State Machine (OrderStatus FSM) ensuring strict transition invariants", tech: "Domain Service + State Pattern" },
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
            { name: "PostgreSQL 15", desc: "3NF normalized relational schema with strict ACID transactions, foreign keys, and query index tuning", tech: "PostgreSQL 15 (Relational Database)" },
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
        result: "Detected 1 remote outlier order 4.2km away (peripheral boundary zone). Reassigned to nearest optimized cluster post-routing.",
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
      { id: 8, name: "Tracking, Sorting & Proof of Delivery (Tracking & POD)", tables: ["tracking_events", "warehouse_scans", "delivery_proofs"], keyFeature: "Public tracking timeline, order status audit trails, electronic POD signature capture, and atomic Cash-on-Delivery (COD) reconciliation" },
      { id: 9, name: "System Settings (System Configuration)", tables: ["system_settings"], keyFeature: "Dynamic parameter tuning for AI algorithms (GPS broadcast interval, population size, mutation rate) without service restarts" },
      { id: 10, name: "Vietnam Administrative Units (Administrative Units)", tables: ["administrative_regions", "administrative_units", "provinces", "wards"], keyFeature: "Standardized geospatial dataset aligned with post-merger administrative reforms for automated postal zone routing and pricing" },
    ],

    testResults: [
      { group: "Algorithm", name: "DBSCAN: Density Clustering & Outlier Isolation", timeMs: "3ms", result: "Detected 1 main cluster + 1 peripheral outlier (4.2km away)", status: "PASS" },
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
      { metric: "Team Workflow & Code Review", before: "Ad-hoc commits without structured reviews", after: "Git branching (Feature branch), PR peer reviews & 12 test scenarios", delta: "100% PASS & Clean PRs" },
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
        title: "Peripheral outlier orders distorting spatial clustering centroids",
        problem: "Sparse outlier orders located at the peripheral boundary (e.g., 4–5km away from the dense delivery zone) distort standard K-Means centroids, degrading surrounding delivery routes.",
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
      { stage: "4. Hub Inbound & Sorting Invariants", status: "ARRIVED_ORIGIN_FACILITY → AT_HUB", tech: "Atomic FSM transition · ACID database transaction logging audit trail into order_status_history" },
      { stage: "5. Inter-Hub Line-Haul Transfer", status: "IN_TRANSIT → AT_HUB", tech: "Custody transfer state transition · Relational audit tracking on PostgreSQL" },
      { stage: "6. AI-Optimized Last-Mile Delivery Leg", status: "OUT_FOR_DELIVERY", tech: "Genetic Algorithm VRPTW route sequencing respecting customer delivery time windows" },
      { stage: "7. Delivery Confirmation & Digital POD", status: "DELIVERED", tech: "Digital signature · Proof of Delivery (POD) photo capture · On-site GPS coordinate verification · Cash-on-Delivery (COD) reconciliation" },
    ],
  }
};
