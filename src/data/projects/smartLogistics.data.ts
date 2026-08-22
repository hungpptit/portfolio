import { TechStackItem, AIPipelineStep, DBModule, TestResult, BusinessImpact, ProjectChallenge } from '../../types';
import { Language } from '../../context/LanguageContext';

export interface FulfillmentStage {
  stage: string;
  status: string;
  tech: string;
}

export interface SmartLogisticsData {
  overview: string;
  role: string;
  company: string;
  duration: string;
  teamSize: string;
  githubUrl: string;
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
    overview: "Smart Logistics Platform (SLP) là nền tảng quản lý điều vận và tối ưu giao hàng cấp doanh nghiệp, được thiết kế theo Kiến trúc phần mềm sạch (Clean Architecture) và Phương pháp thiết kế hướng miền nghiệp vụ (Domain-Driven Design - DDD), phát triển và vận hành thực tế tại Công ty TNHH CITARES. Hệ thống số hóa toàn diện chuỗi cung ứng logistics gồm 7 giai đoạn khép kín: tạo đơn hàng, gom hàng tận nơi (Pickup), phân loại bưu kiện tại kho bãi (Zone Sorting), trung chuyển liên bưu cục (Line-haul), tối ưu tuyến đường giao chặng cuối (Last-Mile), ký nhận bằng chứng giao hàng điện tử (Proof of Delivery - POD), và giám sát vị trí định vị toàn cầu (GPS) theo thời gian thực.",
    role: "Kỹ sư Phần mềm & Lập trình viên Backend (Software Engineer & Backend Developer)",
    company: "Công ty TNHH CITARES",
    duration: "Tháng 06/2026 – Hiện tại",
    teamSize: "4 thành viên",
    githubUrl: "https://github.com/hungpptit/smart-logistics-platform/tree/SWE_BE",
    
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
      { id: 2, name: "Khách hàng & Sổ địa chỉ (Customers & Addresses)", tables: ["customers", "addresses", "customer_addresses"], keyFeature: "Liên kết 1-1 an toàn với tài khoản người dùng. Sổ địa chỉ lưu trữ tọa độ địa lý kinh độ/vĩ độ chuẩn xác kèm mã định danh bản đồ số" },
      { id: 3, name: "Mạng lưới bưu cục & Kho bãi (Facility Network)", tables: ["facility_types", "facilities", "facility_zones"], keyFeature: "Mô hình mạng lưới đa cấp (Trung tâm phân loại tổng → Bưu cục giao hàng chặng cuối). Quản lý 6 phân khu chức năng trong kho: Nhập hàng, Phân loại, Xuất hàng, Lưu trữ, Hoàn trả, Cách ly" },
      { id: 4, name: "Đơn hàng & Gói cước (Orders & Services - Lõi)", tables: ["services", "orders", "packages", "order_payments", "order_status_history"], keyFeature: "Kiểm soát vòng đời đơn qua Máy trạng thái hữu hạn 17 bước (17-state Finite State Machine - FSM). Chụp nhanh bất biến (Snapshot) địa chỉ và thông tin người nhận tại thời điểm tạo đơn để không bị ảnh hưởng khi dữ liệu gốc thay đổi" },
      { id: 5, name: "Vận đơn & Chuyến xe gom (Shipment Management)", tables: ["shipments", "shipment_packages", "shipment_transfers"], keyFeature: "Đảm bảo tính cô lập tuyệt đối: một kiện hàng chỉ nằm trong duy nhất một chuyến xe đang hoạt động nhờ ràng buộc duy nhất (Unique Constraint). Lưu vết bàn giao hàng hóa giữa các kho có chữ ký điện tử" },
      { id: 6, name: "Đội xe & Tài xế (Fleet & Driver Management)", tables: ["staff", "staff_driver_types", "vehicle_types", "vehicles", "driver_vehicle_assignments", "driver_locations"], keyFeature: "Quản lý hồ sơ nhân sự, giấy phép lái xe đa hạng (A1, B2, C, FC), phân công ca trực xe và lưu trữ vùng đệm vị trí GPS thời gian thực của tài xế" },
      { id: 7, name: "Điều vận & Tuyến đường AI (Routing & Dispatch Engine)", tables: ["routes", "route_stops", "dispatch_tasks", "route_optimizations", "route_adjustment_logs"], keyFeature: "Lưu trữ tuyến đường do Trí tuệ nhân tạo (AI) tính toán kèm thứ tự điểm dừng tối ưu. Tự động ghi nhật ký kiểm toán khi có sự cố phát sinh cần điều phối đổi tài xế giữa đường" },
      { id: 8, name: "Giám sát, Quét kho & Bằng chứng giao (Tracking & POD)", tables: ["tracking_events", "warehouse_scans", "tote_bags", "delivery_proofs"], keyFeature: "Cung cấp dòng thời gian hành trình công khai cho khách hàng tra cứu. Quản lý sọt hàng gom tập kết (Tote Bag) giúp gom nhiều đơn trong 1 lần quét mã. Lưu giữ ảnh chụp bằng chứng giao hàng, chữ ký số và đối soát tiền thu hộ (COD)" },
      { id: 9, name: "Cấu hình tham số hệ thống (System Configuration)", tables: ["system_settings"], keyFeature: "Lưu trữ tham số động cho thuật toán Trí tuệ nhân tạo (chu kỳ phát GPS, quy mô quần thể, tỷ lệ đột biến di truyền) — cho phép điều chỉnh linh hoạt trên web mà không cần khởi động lại hệ thống" },
      { id: 10, name: "Đơn vị hành chính Việt Nam (Administrative Units)", tables: ["administrative_regions", "administrative_units", "provinces", "wards"], keyFeature: "Dữ liệu địa chính chuẩn quốc gia gồm 63 tỉnh/thành phố và toàn bộ phường/xã, phục vụ việc chuẩn hóa địa chỉ bưu chính và tính cước phí giao vận tự động" },
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
    overview: "Smart Logistics Platform (SLP) is an enterprise-grade automated dispatching and routing platform engineered with Clean Architecture and Domain-Driven Design (DDD) principles, deployed in production at CITARES Co., Ltd. The system digitizes the entire logistics lifecycle across 7 closed-loop phases: order intake, door-to-door pickup dispatch, cross-dock facility zone sorting, line-haul inter-hub transfers, last-mile route optimization, digital Proof of Delivery (POD), and high-frequency real-time GPS telemetry monitoring.",
    role: "Software Engineer & Backend Developer",
    company: "CITARES Co., Ltd.",
    duration: "June 2026 – Present",
    teamSize: "4 members",
    githubUrl: "https://github.com/hungpptit/smart-logistics-platform/tree/SWE_BE",
    
    techStack: [
      { layer: "Runtime & Language", tech: "Node.js + TypeScript", version: "v20 LTS / TS 5.x", role: "Non-blocking event loop, strict compile-time type safety across complex domain models" },
      { layer: "API Gateway Framework", tech: "Express.js", version: "^4.19", role: "RESTful Gateway, centralized middleware error handling, automated Swagger documentation" },
      { layer: "ORM & Migrations", tech: "Prisma ORM", version: "^5.12", role: "Type-safe database client mapping, automated migrations, declarative schema management" },
      { layer: "Relational Database", tech: "PostgreSQL 15 + PostGIS", version: "PG 15", role: "38-table 3NF schema, ACID transactions, geospatial functions (ST_Distance, GEOADD)" },
      { layer: "In-Memory Data Store", tech: "Redis 7", version: "^4.6", role: "Real-time driver GPS buffer (HSET/GEOADD), token bucket rate limiting, sub-ms read/write" },
      { layer: "Real-time WebSocket", tech: "Socket.io", version: "^4.7", role: "Bidirectional room broadcasting for live driver tracking and instant 'flag drop' delivery events" },
      { layer: "Message Broker", tech: "RabbitMQ (amqplib)", version: "^2.0", role: "Asynchronous task offloading: email delivery, background heavy AI optimization jobs" },
      { layer: "AI Density Clustering", tech: "DBSCAN (Pure TypeScript)", version: "—", role: "Density-Based Spatial Clustering of Applications with Noise, isolating geographic outliers (3ms)" },
      { layer: "AI Capacity Partition", tech: "K-Means (Pure TypeScript)", version: "—", role: "Capacity-constrained geometric clustering, balancing vehicle payload limits (10ms)" },
      { layer: "AI Route Optimizer", tech: "Genetic Algorithm (GA)", version: "—", role: "CVRP+VRPTW meta-heuristic solver reducing total transit distance by 58.2% (444ms)" },
      { layer: "AI Driver Matching", tech: "Hungarian Algorithm (Kuhn-Munkres)", version: "—", role: "Global optimal bipartite driver-route assignment with minimal total relocation cost (< 1ms)" },
      { layer: "Distance Matrix Engine", tech: "Goong Maps → OSRM → Haversine", version: "—", role: "3-tier intelligent fallback mechanism (5s timeout per tier) ensuring 100% offline availability" },
      { layer: "Web Administration", tech: "React 19 + Vite 8 + Tailwind CSS v4", version: "—", role: "Single Page Application (SPA) dashboard with live interactive vehicle radar map" },
      { layer: "Mobile Driver App", tech: "Flutter (Dart)", version: "—", role: "Background GPS telemetry streaming, QR scanning, photo upload, and digital signature POD" },
      { layer: "Containerization", tech: "Docker + Docker Compose", version: "—", role: "Reproducible container orchestration for Backend API, PostgreSQL/PostGIS, and Redis 7" },
    ],

    aiPipeline: [
      {
        step: 1,
        name: "DBSCAN Spatial Clustering",
        algo: "Density-Based Spatial Clustering of Applications with Noise (DBSCAN)",
        description: "Pre-computes pairwise distance matrix using Haversine formula. Automatically partitions dense order clusters and isolates sparse geographic outliers before route sequencing.",
        result: "Successfully detected 1 remote outlier order 18km away (Hoc Mon district). Reconciled back to nearest cluster post-optimization.",
        timeMs: "3 ms"
      },
      {
        step: 2,
        name: "Capacity-Constrained K-Means",
        algo: "Geometric Clustering with Vehicle Payload Constraints",
        description: "Dynamically calculates optimal cluster count (K) from total order weight and volume against vehicle capacities. Separates pickup and delivery coordinate lifecycles.",
        result: "Balanced 4 orders into 2 capacity-compliant clusters with zero vehicle overload.",
        timeMs: "10 ms"
      },
      {
        step: 3,
        name: "Genetic Algorithm (GA)",
        algo: "Multi-Constraint Vehicle Routing Problem Solver (CVRP + VRPTW)",
        description: "Evaluates fitness using 3-tier distance matrix with penalty functions for capacity breaches and time-window violations. Converges to near-optimal routes in under 100 generations.",
        result: "Reduced total delivery transit distance by 58.2% compared to traditional manual dispatching.",
        timeMs: "444 ms"
      },
      {
        step: 4,
        name: "Hungarian Bipartite Matching",
        algo: "Kuhn-Munkres Minimum-Cost Bipartite Matching Algorithm",
        description: "Constructs cost matrix factoring driver GPS distances, vehicle capacity suitability, and relocation penalties. Executes 2-pass assignment guaranteeing 100% optimal driver match.",
        result: "Matched 3 drivers to 3 route clusters with globally minimal travel cost.",
        timeMs: "< 1 ms"
      }
    ],

    dbModules: [
      { id: 1, name: "Auth & Role-Based Access Control (RBAC)", tables: ["users", "roles", "permissions", "role_permissions"], keyFeature: "Personally Identifiable Information (PII) Separation: users table strictly stores authentication credentials. 4 granular roles: ADMIN, DISPATCH_STAFF, CUSTOMER, SHIPPER" },
      { id: 2, name: "Customers & Address Registry", tables: ["customers", "addresses", "customer_addresses"], keyFeature: "1-1 relation with users. Master address registry storing exact GPS latitude/longitude and digital map Place IDs" },
      { id: 3, name: "Facility Network & Warehouse Zones", tables: ["facility_types", "facilities", "facility_zones"], keyFeature: "Hierarchical multi-tier network (Sorting Hub → Hub → Station). Manages 6 functional warehouse zones: Receiving, Sorting, Shipping, Storage, Return, Quarantine" },
      { id: 4, name: "Orders & Package Lifecycle (Core)", tables: ["services", "orders", "packages", "order_payments", "order_status_history"], keyFeature: "17-state Finite State Machine (FSM). Address snapshot freezing upon creation to preserve immutable billing and audit records" },
      { id: 5, name: "Shipments & Consolidation Transfers", tables: ["shipments", "shipment_packages", "shipment_transfers"], keyFeature: "Package isolation guarantee via UNIQUE constraint on package_id. 2-way handshake QR logging for line-haul inter-facility transit" },
      { id: 6, name: "Fleet & Driver Management", tables: ["staff", "staff_driver_types", "vehicle_types", "vehicles", "driver_vehicle_assignments", "driver_locations"], keyFeature: "Unified personnel registry, license classification (A1, B2, C, FC), shift assignments, and high-frequency GPS coordinate buffers" },
      { id: 7, name: "AI Dispatch & Dynamic Route Engine", tables: ["routes", "route_stops", "dispatch_tasks", "route_optimizations", "route_adjustment_logs"], keyFeature: "Stores AI-generated sequence stops with planned vs actual metrics. Mid-trip exception audit logging when reassigning drivers dynamically" },
      { id: 8, name: "Tracking Events & Proof of Delivery (POD)", tables: ["tracking_events", "warehouse_scans", "tote_bags", "delivery_proofs"], keyFeature: "14 TrackingEventType public timeline. Tote Bag consolidation: 1 scan aggregates N packages. Digital signature, photo POD, and COD reconciliation" },
      { id: 9, name: "Dynamic System Configuration", tables: ["system_settings"], keyFeature: "Dynamic AI hyperparameters (GPS ping intervals, population size, mutation rates) configurable in real-time without restarting services" },
      { id: 10, name: "National Administrative Geography", tables: ["administrative_regions", "administrative_units", "provinces", "wards"], keyFeature: "Standardized geospatial dataset of 63 provinces and all wards across Vietnam for automated postal code indexing and rate calculations" },
    ],

    testResults: [
      { group: "Thuật toán (Algorithm)", name: "DBSCAN: Spatial Density Clustering & Noise Detection", timeMs: "3ms", result: "1 dense cluster + 1 isolated outlier (18km remote)", status: "PASS" },
      { group: "Thuật toán (Algorithm)", name: "K-Means: Capacity-Constrained Geographic Partitioning", timeMs: "10ms", result: "4 orders partitioned into 2 balanced vehicle clusters", status: "PASS" },
      { group: "Thuật toán (Algorithm)", name: "Genetic Algorithm: CVRP+VRPTW Route Optimization", timeMs: "444ms", result: "Converged in <100 generations, –58.2% total distance", status: "PASS" },
      { group: "Thuật toán (Algorithm)", name: "Hungarian: Global Optimal Driver Matching", timeMs: "< 1ms", result: "3 drivers matched to 3 route clusters at minimal cost", status: "PASS" },
      { group: "Tích hợp (Integration)", name: "PostgreSQL 15 + Prisma ORM Connection Pooling", timeMs: "80ms", result: "25-connection pool verified with safe multi-tenant queries", status: "PASS" },
      { group: "Tích hợp (Integration)", name: "Redis 7 In-Memory Cache Read/Write Throughput", timeMs: "9ms", result: "Sub-ms key set/get verified with TTL auto-expiration", status: "PASS" },
      { group: "Tích hợp (Integration)", name: "3-Tier Geospatial Distance Matrix Fallback", timeMs: "137ms", result: "Accurately measured 6,923 meters & 1,336 seconds", status: "PASS" },
      { group: "Bảo vệ API (Validation)", name: "Declarative DTO Input Validation Guard", timeMs: "8ms", result: "100% of malformed request payloads blocked at gateway", status: "PASS" },
      { group: "Bảo mật (Security)", name: "Role-Based Access Control (RBAC) Hierarchy", timeMs: "11ms", result: "Verified permission scopes across all 4 user roles", status: "PASS" },
      { group: "Chịu tải (Load Test)", name: "High-Frequency GPS Stream Load Test (1,000 pings)", timeMs: "779ms", result: "1,321 coordinates/sec throughput with sub-ms P99", status: "PASS" },
      { group: "Đồng thời (Concurrency)", name: "Multi-Table ACID Transaction Atomic Rollback", timeMs: "12ms", result: "100% clean rollback upon injected sub-operation failure", status: "PASS" },
      { group: "Đồng thời (Concurrency)", name: "Unique Constraint Duplicate Prevention Guard", timeMs: "12ms", result: "Prisma P2002 error caught, preventing double-assignment", status: "PASS" },
    ],

    businessImpact: [
      { metric: "Total Delivery Route Distance / Shift", before: "Manual experience-based dispatching", after: "AI Genetic Algorithm Optimization", delta: "–58.2% Reduction" },
      { metric: "Live GPS Telemetry Latency", before: "No real-time tracking system", after: "Redis + Socket.io In-Memory Stream", delta: "P99 < 1 ms" },
      { metric: "GPS Coordinate Write Throughput", before: "0 (unsupported)", after: "Redis 2-Tier In-Memory Pipeline", delta: "1,321 pings/sec" },
      { metric: "Warehouse Inter-facility Transfer Scans", before: "Individual manual barcode scans", after: "1 Tote Bag scan = N aggregated orders", delta: "–95% Scan Operations" },
      { metric: "Bulk Order Ingestion for Enterprise", before: "Manual single-order form entry", after: "Automated Excel bulk upload", delta: "20 orders / 2 seconds" },
      { metric: "Automated Test Suite Reliability", before: "0% automated testing", after: "Comprehensive 12-scenario master suite", delta: "100% Pass Rate" },
    ],

    challenges: [
      {
        title: "Database Write Saturation from High-Frequency Driver GPS Streams",
        problem: "500+ active drivers transmitting GPS pings every 5 seconds generated over 6,000 writes/minute. Writing directly to relational PostgreSQL caused disk I/O queue overflow and database crashes.",
        solution: "Engineered a 2-Tier In-Memory Pipeline: GPS coordinates are buffered into Redis (HSET/GEOADD) with sub-ms latency to drive live radar maps. Data is persisted to PostgreSQL strictly on business milestone events (PICKED_UP, AT_HUB, DELIVERED)."
      },
      {
        title: "Multi-Constraint Vehicle Routing Optimization (CVRP + VRPTW)",
        problem: "Determining the optimal stop sequence across dozens of destinations while strictly satisfying vehicle payload limits (kg & m³) and tight delivery time windows is an NP-Hard combinatorial problem.",
        solution: "Implemented a meta-heuristic Genetic Algorithm (GA) with penalty scoring for constraint violations. Converges to a near-optimal solution in 444ms, achieving a 58.2% reduction in total transit distance."
      },
      {
        title: "Sparse Outlier Orders Distorting Geometric Clustering Centroids",
        problem: "Remote orders (e.g., 18km away in suburban areas) pulled K-Means centroids away from urban cores, severely distorting route geometry across surrounding zones.",
        solution: "Introduced DBSCAN as Phase 1 to identify and isolate sparse noise points. After core cluster centroids stabilize, outliers are reconciled back to the nearest optimal route, ensuring 100% order assignment."
      },
      {
        title: "Dispatch System Outage Risk from External Mapping API Failures",
        problem: "If third-party road routing APIs (Goong Maps) experience network timeouts or rate limit saturation, the entire dispatch engine stalls.",
        solution: "Architected a 3-tier fallback strategy with a 5-second timeout per tier: Goong Maps API (live traffic) → self-hosted OSRM server → mathematical Haversine matrix. Guarantees 100% uninterrupted offline dispatching."
      },
      {
        title: "Concurrency Race Conditions during Shipment Consolidation",
        problem: "Multiple warehouse operators simultaneously scanning packages could concurrently assign the same package into two different active line-haul shipments, causing inventory discrepancies.",
        solution: "Enforced a UNIQUE constraint on shipment_packages.package_id at the PostgreSQL layer, coupled with Prisma transaction error handling. Ensures each package exists in exactly one active shipment at any time."
      },
    ],

    fulfillmentStages: [
      { stage: "1. Order Intake & A6 QR Label Generation", status: "CREATED → READY_FOR_PICKUP", tech: "Immutable address snapshot freezing · Automated EDD calculation · Excel bulk upload ingestion" },
      { stage: "2. AI-Driven Pickup Route Sequencing", status: "PICKUP_ASSIGNED", tech: "DBSCAN → K-Means → Genetic Algorithm (GA) → Hungarian matching · Dispatcher preview mode" },
      { stage: "3. First-Mile Driver Pickup", status: "PICKING → PICKED_UP", tech: "Mobile QR scanning verification · 5-second GPS telemetry streaming into Redis" },
      { stage: "4. Cross-Dock Facility Sorting & Tote Packaging", status: "ARRIVED_ORIGIN_FACILITY → AT_HUB", tech: "1 Tote Bag scan = N orders bulk status transition · Atomic ACID database transaction" },
      { stage: "5. Inter-Facility Line-Haul Transfer", status: "IN_TRANSIT → AT_HUB", tech: "2-way custodial QR handshake · ShipmentTransfer digital transfer logging" },
      { stage: "6. Last-Mile Delivery Route Optimization", status: "OUT_FOR_DELIVERY", tech: "VRPTW strict customer time-window route sequencing via Genetic Algorithm" },
      { stage: "7. Delivery Completion & Digital POD", status: "DELIVERED", tech: "Digital signature · Proof of Delivery (POD) photo capture · Real-time GPS verification · COD reconciliation" },
    ],
  }
};
