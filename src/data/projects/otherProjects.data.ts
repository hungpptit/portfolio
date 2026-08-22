import { TechStackItem, ProjectChallenge } from '../../types';
import { Language } from '../../context/LanguageContext';

export interface GenericProjectDetail {
  id: string;
  overview: string;
  role: string;
  duration?: string;
  teamSize?: string;
  techStack?: TechStackItem[];
  challenges?: ProjectChallenge[];
}

export const OTHER_PROJECTS_DETAIL: Record<Language, Record<string, GenericProjectDetail>> = {
  vi: {
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
  },
  en: {
    "toeic-ai-microservices": {
      id: "toeic-ai-microservices",
      overview: "Comprehensive TOEIC certification learning and examination ecosystem powered by an AI Chatbot Agent. Integrates fine-tuned BERT for natural language intent classification, Google Gemini API for deep contextual explanations, and Machine Learning algorithms (Naïve Bayes, kNN) to diagnose knowledge gaps and generate adaptive study paths.",
      role: "Full-stack Developer & AI Integration Specialist",
      duration: "4 months",
      teamSize: "4 members",
      techStack: [
        { layer: "Mobile Application", tech: "Flutter (Dart)", version: "^3.x", role: "Cross-platform (Android & iOS) delivery with 60 FPS animation and offline quiz caching" },
        { layer: "AI Reasoning Agent", tech: "Google Gemini API", version: "—", role: "Contextual grammar analysis, vocabulary synthesis, and natural language query resolution" },
        { layer: "Natural Language Processing", tech: "Fine-tuned BERT NLP", version: "—", role: "Classifies student intents (listening drill, grammar lookup, weakness diagnostics)" },
        { layer: "Recommendation Engine", tech: "Naïve Bayes & k-Nearest Neighbors", version: "—", role: "Analyzes historical test performance to generate dynamic personalized mock exams" },
        { layer: "Microservices Backend", tech: "Node.js / Express.js", version: "v18", role: "Decoupled Authentication, Quiz Bank, and AI Agent Microservices" },
      ],
      challenges: [
        {
          title: "Intent Classification Accuracy on Informal Vietnamese User Inputs",
          problem: "Students frequently typed unaccented Vietnamese, abbreviations, or conversational slang that default English NLP models failed to interpret.",
          solution: "Curated and labeled a dataset of over 5,000 domain-specific TOEIC queries to fine-tune a Vietnamese BERT model, achieving an 87% F1-score in intent classification."
        },
      ],
    },
    "smart-library": {
      id: "smart-library",
      overview: "Comprehensive digital library management platform for educational institutions: catalog management, circulation checkout/returns, automated overdue penalty calculations, and Role-Based Access Control (RBAC). Engineered with a 3NF normalized schema and ACID transactions.",
      role: "Backend Developer & Database Designer",
      duration: "2 months",
      teamSize: "2 members",
      techStack: [
        { layer: "Relational Database", tech: "Microsoft SQL Server (T-SQL)", version: "—", role: "3NF normalized schema, stored procedures, triggers, and query index tuning" },
        { layer: "Backend Runtime", tech: "Node.js + Express.js", version: "v18", role: "RESTful API services managing circulation and inventory workflows" },
        { layer: "Auth & Permissions", tech: "JWT & Role-Based Access Control (RBAC)", version: "—", role: "Granular access tiers for Administrators, Librarians, and Students" },
        { layer: "Web Frontend", tech: "React.js SPA", version: "^18", role: "Librarian administration portal and reader catalog discovery interface" },
      ],
      challenges: [
        {
          title: "Concurrent Checkout Race Condition on Single-Inventory Book Copies",
          problem: "When only 1 copy of a high-demand book remained, two librarians simultaneously clicking 'Issue Book' could cause inventory deficit anomalies.",
          solution: "Implemented Row-Level Locking coupled with SERIALIZABLE transaction isolation within SQL Server stored procedures, guaranteeing zero inventory drift."
        },
      ],
    },
    "tech-store-ecosystem": {
      id: "tech-store-ecosystem",
      overview: "Full-cycle tech retail e-commerce ecosystem consisting of an Android Native mobile app (OOP Java) for consumer purchasing and a reactive Next.js Web Admin Dashboard for real-time inventory and order fulfillment management.",
      role: "Mobile & Full-stack Developer",
      duration: "3 months",
      teamSize: "2 members",
      techStack: [
        { layer: "Mobile Application", tech: "Android Studio (Native Java)", version: "API 31+", role: "Object-Oriented Programming (OOP), MVC/MVVM patterns, local SQLite/Room caching" },
        { layer: "Admin Web Portal", tech: "Next.js + Tailwind CSS", version: "^14", role: "Real-time revenue metrics, order pipeline management, and stock auditing" },
        { layer: "Real-time Database", tech: "Google Firebase Firestore", version: "—", role: "Bidirectional real-time data sync for product catalogs and order status updates" },
        { layer: "Push Notifications", tech: "Firebase Cloud Messaging (FCM)", version: "—", role: "Dispatches automated order milestone alerts and promotional notifications" },
        { layer: "Payment Integration", tech: "Stripe Payment Gateway API", version: "—", role: "PCI-DSS compliant international credit card processing with Webhook validation" },
      ],
      challenges: [
        {
          title: "Offline-First Mobile Cart and Catalog Availability",
          problem: "When users entered poor network zones, unhandled network drops caused blank screen states and lost shopping carts.",
          solution: "Integrated an offline-first SQLite/Room cache on the Android client, paired with Firestore delta synchronization to reconcile data seamlessly upon reconnecting."
        },
      ],
    }
  }
};
