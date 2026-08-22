import { TechStackItem, AIPipelineStep, DBModule, TestResult, BusinessImpact, ProjectChallenge } from '../../types';

export interface FulfillmentStage {
  stage: string;
  status: string;
  tech: string;
}

export const SMART_LOGISTICS_DETAIL = {
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
  ] as TechStackItem[],

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
  ] as AIPipelineStep[],

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
  ] as DBModule[],

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
  ] as TestResult[],

  businessImpact: [
    { metric: "Tổng quãng đường giao hàng mỗi ca", before: "Chia tuyến thủ công theo kinh nghiệm", after: "Thuật toán AI tự động tối ưu hóa lộ trình", delta: "Giảm 58.2%" },
    { metric: "Độ trễ truyền phát định vị GPS", before: "Chưa có hệ thống giám sát trực tiếp", after: "Truyền phát thời gian thực qua Redis & Socket.io", delta: "Dưới 1 mili-giây (P99)" },
    { metric: "Năng lực tiếp nhận tọa độ định vị", before: "0 (không hỗ trợ)", after: "Xử lý vùng đệm qua bộ nhớ đệm Redis", delta: "1,321 điểm/giây" },
    { metric: "Thao tác quét mã chuyển kho bãi", before: "Quét thủ công từng kiện hàng đơn lẻ", after: "Quét 1 mã sọt gom (Tote Bag) cập nhật hàng loạt đơn", delta: "Giảm 95% thao tác" },
    { metric: "Tạo đơn hàng loạt cho doanh nghiệp", before: "Nhập liệu thủ công từng đơn", after: "Tải tệp bảng tính Excel xử lý tự động", delta: "20 đơn / 2 giây" },
    { metric: "Độ tin cậy kiểm thử tự động", before: "0% (chưa có quy trình kiểm thử)", after: "Bộ kiểm thử tự động 12 kịch bản toàn diện", delta: "100% Đạt (PASS)" },
  ] as BusinessImpact[],

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
  ] as ProjectChallenge[],

  fulfillmentStages: [
    { stage: "1. Tạo đơn & In tem mã vạch QR A6", status: "ĐÃ TẠO ĐƠN → SẴN SÀNG LẤY HÀNG (CREATED → READY_FOR_PICKUP)", tech: "Chụp nhanh địa chỉ bất biến · Tự động tính thời gian giao dự kiến (EDD) · Hỗ trợ tải tệp Excel tạo hàng loạt" },
    { stage: "2. Trí tuệ nhân tạo (AI) chia tuyến lấy hàng", status: "ĐÃ GÁN TUYẾN LẤY HÀNG (PICKUP_ASSIGNED)", tech: "Thuật toán DBSCAN → K-Means → Giải thuật Di truyền (GA) → Hungarian · Cho phép người điều vận xem trước lộ trình" },
    { stage: "3. Tài xế đến lấy hàng tận nơi", status: "ĐANG ĐI LẤY → ĐÃ LẤY HÀNG (PICKING → PICKED_UP)", tech: "Quét mã phản hồi nhanh (QR Code) xác nhận · Truyền phát định vị GPS định kỳ 5 giây/lần qua Redis" },
    { stage: "4. Phân loại bưu kiện & Đóng sọt gom", status: "ĐÃ ĐẾN BƯU CỤC GỬI → TẠI KHO (ARRIVED_ORIGIN_FACILITY → AT_HUB)", tech: "Quét 1 mã sọt gom (Tote Bag) cập nhật hàng loạt đơn · Giao dịch CSDL nguyên tử đảm bảo toàn vẹn dữ liệu" },
    { stage: "5. Xe tải trung chuyển liên bưu cục (Line-haul)", status: "ĐANG TRUNG CHUYỂN → ĐẾN KHO ĐÍCH (IN_TRANSIT → AT_HUB)", tech: "Quét mã QR bàn giao hàng hóa hai chiều · Lưu vết biên bản giao nhận điện tử giữa các kho" },
    { stage: "6. Trí tuệ nhân tạo (AI) chia tuyến giao chặng cuối", status: "ĐANG ĐI GIAO HÀNG (OUT_FOR_DELIVERY)", tech: "Tối ưu hóa thứ tự giao theo khung giờ hẹn của khách (VRPTW) bằng Giải thuật Di truyền" },
    { stage: "7. Giao hàng thành công & Ký nhận điện tử (POD)", status: "ĐÃ GIAO THÀNH CÔNG (DELIVERED)", tech: "Chữ ký số · Chụp ảnh bằng chứng giao hàng (POD) · Xác thực tọa độ GPS tại chỗ · Đối soát tiền thu hộ (COD)" },
  ] as FulfillmentStage[],
};
