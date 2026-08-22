import { TechStackItem, ProjectChallenge } from '../../types';

export interface GenericProjectDetail {
  id: string;
  overview: string;
  role: string;
  duration?: string;
  teamSize?: string;
  techStack?: TechStackItem[];
  challenges?: ProjectChallenge[];
}

export const OTHER_PROJECTS_DETAIL: Record<string, GenericProjectDetail> = {
  "toeic-ai-microservices": {
    id: "toeic-ai-microservices",
    overview: "Hệ thống học tập và luyện thi chứng chỉ tiếng Anh quốc tế (TOEIC) toàn diện kết hợp Trợ lý Trí tuệ nhân tạo (AI Chatbot). Hệ thống tích hợp mô hình Xử lý Ngôn ngữ Tự nhiên (Natural Language Processing - NLP) chuẩn BERT để nhận diện ý định học viên, giao diện lập trình ứng dụng Google Gemini API để giải thích chi tiết đáp án, và các thuật toán Học máy (Machine Learning - Naïve Bayes, k-Nearest Neighbors) nhằm phân tích điểm yếu và gợi ý lộ trình ôn tập cá nhân hóa.",
    role: "Lập trình viên Toàn diện & Tích hợp Trí tuệ Nhân tạo (Full-stack Developer & AI Integration)",
    duration: "4 tháng",
    teamSize: "4 thành viên",
    techStack: [
      { layer: "Ứng dụng Di động (Mobile)", tech: "Flutter (Dart)", version: "^3.x", role: "Đa nền tảng (Android & iOS), tốc độ khung hình 60 FPS mượt mà, hỗ trợ làm bài tập khi mất mạng" },
      { layer: "Trợ lý Trí tuệ Nhân tạo", tech: "Google Gemini API", version: "—", role: "Phân tích ngữ cảnh câu hỏi, giải thích ngữ pháp và từ vựng chuyên sâu theo ngôn ngữ tự nhiên" },
      { layer: "Xử lý Ngôn ngữ Tự nhiên", tech: "Mô hình BERT tinh chỉnh (Fine-tuned BERT)", version: "—", role: "Phân loại ý định của người học (luyện nghe, tra cứu ngữ pháp, phân tích điểm yếu)" },
      { layer: "Thuật toán Gợi ý Đề thi", tech: "Naïve Bayes & k-Nearest Neighbors (kNN)", version: "—", role: "Phân tích lịch sử làm bài để nhận diện dạng câu hỏi hay làm sai và tự động đề xuất đề luyện tương ứng" },
      { layer: "Hệ thống Vi dịch vụ Backend", tech: "Node.js / Express.js", version: "v18", role: "Tách biệt Dịch vụ Xác thực tài khoản (Auth), Dịch vụ Ngân hàng câu hỏi (Quiz), Dịch vụ Trợ lý AI (AI Agent)" },
    ],
    challenges: [
      {
        title: "Độ chính xác khi phân loại ý định người học bằng tiếng Việt tự nhiên (Intent Classification)",
        problem: "Học viên thường nhắn tin bằng tiếng Việt không dấu, viết tắt hoặc dùng từ lóng, khiến các mô hình ngôn ngữ tiếng Anh mặc định không hiểu được đúng nhu cầu.",
        solution: "Thu thập và gắn nhãn tập dữ liệu hơn 5,000 mẫu câu hỏi luyện thi TOEIC đặc thù, sau đó tiến hành tinh chỉnh (Fine-tuning) mô hình BERT tiếng Việt. Kết quả chỉ số đo lường độ chính xác (F1-score) đạt 87%."
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
};
