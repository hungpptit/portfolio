import { TechStackItem, ProjectChallenge } from '../../types';
import { Language } from '../../context/LanguageContext';

export interface LibraryManagementData {
  overview: string;
  role: string;
  duration: string;
  teamSize: string;
  branch: string;
  githubUrl: string;
  techStack: TechStackItem[];
  challenges: ProjectChallenge[];
}

export const LIBRARY_MANAGEMENT_DETAIL: Record<Language, LibraryManagementData> = {
  vi: {
    overview: "Hệ thống Quản lý Thư viện số cấp doanh nghiệp (Enterprise-Grade LMS) được xây dựng trên nền tảng NestJS, TypeScript và TypeORM. Hệ thống số hóa toàn diện quy trình vận hành thư viện: từ quản lý danh mục sách, tự động hóa vòng đời mượn - trả sách theo máy trạng thái (State Machine), kiểm soát hạn ngạch và hạn thẻ độc giả, đến tính toán phí phạt vi phạm tự động. Nền tảng đảm bảo tính toàn vẹn dữ liệu tuyệt đối nhờ các giao dịch CSDL nguyên tử (ACID Transactions) và cơ chế xóa mềm an toàn, được kiểm chứng qua 95/95 Test Cases (100% PASS) kiểm thử tự động.",
    role: "Kỹ sư Phần mềm & Lập trình viên Backend chính (Software Engineer & Lead Backend Developer)",
    duration: "2 tháng",
    teamSize: "3 thành viên",
    branch: "tree/SWE_BE4",
    githubUrl: "https://github.com/hungpptit/library-management-system/tree/SWE_BE4",

    techStack: [
      { layer: "Kiến trúc hệ thống", tech: "Kiến trúc Module hóa Phân tầng (Layered Modular Architecture)", version: "—", role: "Phân tách hệ thống thành 3 Module nghiệp vụ độc lập (UsersModule, BooksModule, LoansModule) theo tầng: Controller → Service → Repository → Entity; tuân thủ nguyên lý SOLID, Dependency Injection qua NestJS IoC Container" },
      { layer: "Nền tảng Backend Framework", tech: "NestJS v10 + TypeScript 5", version: "NestJS 10", role: "Framework cấp doanh nghiệp (Enterprise Framework) với Decorator Pattern, Guards, Pipes; Global ValidationPipe (whitelist: true, transform: true) chặn dữ liệu rác ngay tại cổng HTTP Gateway; hỗ trợ Module hóa và Auto-injection" },
      { layer: "Trình ánh xạ CSDL (ORM)", tech: "TypeORM v0.3", version: "^0.3", role: "Ánh xạ quan hệ đối tượng đa bảng (Entity Relationships): OneToMany, ManyToOne, ManyToMany tự động ánh xạ bảng trung gian (Book_Authors); hỗ trợ @DeleteDateColumn cho Soft Delete; DataSource Transaction Manager đảm bảo ACID" },
      { layer: "Cơ sở dữ liệu quan hệ", tech: "Microsoft SQL Server 2019+ / PostgreSQL 14+", version: "MSSQL 2019+", role: "CSDL quan hệ song song (Dual-Database Support): SQL Server cho môi trường Local Dev với Trigger đồng bộ kho tồn, PostgreSQL cho Cloud Production (Neon.tech/Supabase); Clustered PKs, Index tối ưu" },
      { layer: "Xác thực & Bảo mật", tech: "JWT HttpOnly Cookie + bcrypt + RBAC", version: "—", role: "Cơ chế trích xuất Token kép (Dual-Source Token Extraction): Ưu tiên Cookie httpOnly (chống XSS) + fallback Authorization Bearer Header; bcrypt hash mật khẩu (salt 10 rounds); Phân quyền RBAC nghiêm ngặt bằng Custom Decorator @Roles() kết hợp RolesGuard" },
      { layer: "Kiểm soát dữ liệu đầu vào", tech: "class-validator + class-transformer (DTOs)", version: "—", role: "Xây dựng hệ thống Data Transfer Objects (DTOs) chuẩn hóa đầy đủ: CreateUserDto, LoginUserDto, UpdateUserDto, CreateBookDto, UpdateBookDto, BorrowLoanDto, ReportDamageDto; tự động loại bỏ field thừa và ép kiểu trước khi vào tầng nghiệp vụ" },
      { layer: "Kiểm thử tự động & QA", tech: "Jest 29 + ts-jest (Unit & Integration Tests)", version: "Jest 29", role: "8 Test Suites với 95 Test Cases tự động (100% PASS); Độ bao phủ mã nguồn: Users Service 98.98%, Guards 100%, DTOs 100%, Loans Service 87.15%; Kịch bản tự động xuất báo cáo coverage (run-test-runner.js)" },
      { layer: "Giao diện người dùng (Web)", tech: "React 18 + Vite + TypeScript", version: "React 18", role: "Ứng dụng đơn trang (SPA) với Bảng điều khiển quản trị dành cho Thủ thư và Cổng tra cứu/mượn sách trực tuyến cho Độc giả" },
      { layer: "Quản lý mã nguồn & Workspace", tech: "Monorepo (npm workspaces)", version: "—", role: "Cấu trúc Monorepo quản lý đồng thời Backend (NestJS) và Frontend (React Vite) từ một workspace gốc duy nhất; script khởi chạy đồng thời cả 2 ứng dụng" },
    ],

    challenges: [
      {
        title: "Đảm bảo toàn vẹn dữ liệu khi Trả sách và Tính phạt nhiều bảng cùng lúc",
        problem: "Khi độc giả trả sách hoặc báo mất/hỏng, hệ thống phải cập nhật đồng thời tiền phạt, trạng thái phiếu và kho sách. Nếu xảy ra lỗi mạng giữa chừng, dữ liệu sẽ bị sai lệch (ví dụ: đã thu tiền phạt nhưng kho sách chưa được hoàn trả).",
        solution: "Bọc toàn bộ thao tác vào Giao dịch CSDL nguyên tử (ACID Transaction). Nếu bất kỳ bước nào phát sinh lỗi, hệ thống tự động hoàn tác (Rollback) toàn bộ về ban đầu, đảm bảo số liệu kho và tài chính luôn chính xác tuyệt đối."
      },
      {
        title: "Xử lý công bằng khi nhiều độc giả cùng đặt mượn sách có số lượng giới hạn",
        problem: "Khi một cuốn sách chỉ còn 1 bản nhưng có nhiều người cùng đặt mượn, việc thủ thư duyệt tùy ý dễ gây bất công cho người gửi yêu cầu trước, và độc giả cũng không biết mình đang xếp thứ mấy trong hàng chờ.",
        solution: "Thiết lập cơ chế hàng đợi ưu tiên theo thời gian gửi (FIFO Queue). Bắt buộc thủ thư duyệt đúng người gửi sớm nhất trước, đồng thời tự động tính và hiển thị số thứ tự hàng chờ thời gian thực cho độc giả."
      },
      {
        title: "Chặn nguy cơ mất dấu lịch sử mượn trả khi xóa tài khoản hoặc đầu sách",
        problem: "Nếu xóa vĩnh viễn (Hard Delete) một độc giả hoặc cuốn sách đang có giao dịch, toàn bộ lịch sử mượn trả và biên lai phạt cũ sẽ bị mất, gây thất thoát tài sản thư viện và không thể đối soát.",
        solution: "Áp dụng cơ chế Xóa mềm có điều kiện (Guarded Soft Delete): Hệ thống tự động kiểm tra và chặn 100% thao tác xóa nếu còn phiếu mượn chưa hoàn tất. Dữ liệu sau khi xóa chỉ bị ẩn khỏi giao diện nhưng vẫn được lưu trữ an toàn để phục vụ kiểm toán."
      },
      {
        title: "Bảo vệ phiên đăng nhập an toàn chống đánh cắp mã xác thực (XSS)",
        problem: "Lưu trữ mã xác thực JWT ở bộ nhớ trình duyệt (LocalStorage) dễ bị mã độc JavaScript đánh cắp (tấn công XSS), dẫn đến nguy cơ bị chiếm quyền tài khoản quản trị viên.",
        solution: "Chuyển sang lưu trữ token trong Cookie bảo mật (HttpOnly Cookie) — trình duyệt tự động gửi kèm nhưng mã độc không thể đọc được. Kết hợp phân quyền đa tầng (RBAC) để chặn người dùng thường truy cập trái phép vào các trang quản trị."
      },
    ],
  },
  en: {
    overview: "Enterprise-Grade Library Management System (LMS) built with NestJS, TypeScript, and TypeORM. The platform comprehensively digitizes library circulation operations: from catalog administration and state machine-driven loan lifecycle tracking, to reader quota and card expiry enforcement, and automated penalty fee calculation. The system guarantees absolute data integrity through ACID database transactions and guarded soft deletes, verified by 95/95 automated test cases (100% PASS rate).",
    role: "Software Engineer & Lead Backend Developer",
    duration: "2 months",
    teamSize: "3 members",
    branch: "tree/SWE_BE4",
    githubUrl: "https://github.com/hungpptit/library-management-system/tree/SWE_BE4",

    techStack: [
      { layer: "System Architecture", tech: "Layered Modular Architecture (NestJS)", version: "—", role: "Decoupled 3 independent business modules (UsersModule, BooksModule, LoansModule) following Controller → Service → Repository → Entity layering; adheres to SOLID principles with NestJS IoC Container Dependency Injection" },
      { layer: "Backend Framework", tech: "NestJS v10 + TypeScript 5", version: "NestJS 10", role: "Enterprise-grade framework with Decorator Pattern, Guards, Pipes; Global ValidationPipe (whitelist: true, transform: true) blocks malicious input at HTTP Gateway; full Module encapsulation and Auto-injection" },
      { layer: "Database ORM", tech: "TypeORM v0.3", version: "^0.3", role: "Multi-table Entity Relationships: OneToMany, ManyToOne, ManyToMany with automatic junction table mapping (Book_Authors); @DeleteDateColumn for Soft Delete support; DataSource Transaction Manager ensuring ACID compliance" },
      { layer: "Relational Database", tech: "Microsoft SQL Server 2019+ / PostgreSQL 14+", version: "MSSQL 2019+", role: "Dual-Database Support: SQL Server for Local Dev with inventory synchronization Triggers, PostgreSQL for Cloud Production (Neon.tech/Supabase); Clustered PKs, optimized Indexes" },
      { layer: "Auth & Security", tech: "JWT HttpOnly Cookie + bcrypt + RBAC", version: "—", role: "Dual-Source Token Extraction: prioritizes HttpOnly Cookie (XSS-proof) with Bearer Header fallback; bcrypt password hashing (salt rounds=10); strict RBAC via Custom @Roles() Decorator + RolesGuard" },
      { layer: "Input Validation", tech: "class-validator + class-transformer (DTOs)", version: "—", role: "Comprehensive Data Transfer Objects: CreateUserDto, LoginUserDto, UpdateUserDto, CreateBookDto, UpdateBookDto, BorrowLoanDto, ReportDamageDto; auto-strips unknown fields and type-coerces before reaching business layer" },
      { layer: "Testing & QA", tech: "Jest 29 + ts-jest (Unit & Integration Tests)", version: "Jest 29", role: "8 Test Suites with 95 automated test cases (100% PASS); Coverage: Users Service 98.98%, Guards 100%, DTOs 100%, Loans Service 87.15%; automated coverage report generation (run-test-runner.js)" },
      { layer: "Web Frontend", tech: "React 18 + Vite + TypeScript", version: "React 18", role: "Single Page Application (SPA) with Librarian administration dashboard and Reader catalog discovery/borrow interface" },
      { layer: "Project Structure", tech: "Monorepo (npm workspaces)", version: "—", role: "Monorepo managing Backend (NestJS) and Frontend (React Vite) from a single root workspace; concurrent dev server launch scripts" },
    ],

    challenges: [
      {
        title: "Multi-Table Data Integrity During Book Return & Penalty Processing",
        problem: "When returning books or reporting damage/loss, the system must atomically record fines, transition loan statuses, and update physical stock. A network drop mid-process causes data inconsistency (e.g. fines collected but inventory not restored).",
        solution: "Encapsulated all mutation steps within an atomic ACID Database Transaction. Any runtime failure triggers an immediate automatic rollback, guaranteeing zero discrepancies between inventory and financial records."
      },
      {
        title: "Fair Queue Enforcement for Concurrent Borrow Requests on Limited Stock",
        problem: "When multiple readers contend for the last available copy of a popular book, arbitrary approval orders cause unfairness for earlier applicants, while readers lack visibility into their waiting queue position.",
        solution: "Implemented FIFO Queue Enforcement forcing chronological approval order based on request timestamps, paired with real-time queue position computation displayed on the reader dashboard."
      },
      {
        title: "Preventing Audit Trail Loss When Deleting Active Readers or Book Records",
        problem: "Physically hard-deleting a user account or book with active borrow records permanently destroys loan histories and penalty logs, making financial reconciliation and asset tracking impossible.",
        solution: "Enforced Guarded Soft Delete: the system strictly blocks deletion attempts if active loans exist. Deleted records are marked inactive and hidden from active views while remaining intact in the database for auditing."
      },
      {
        title: "Hardening JWT Authentication Against Client-Side Token Theft (XSS)",
        problem: "Storing JWT tokens in browser LocalStorage exposes authentication sessions to Cross-Site Scripting (XSS) attacks, risking unauthorized administrative privilege escalation.",
        solution: "Migrated token storage to secure HttpOnly Cookies (inaccessible to JavaScript) with Dual-Source extraction fallback, combined with strict Role-Based Access Control (RBAC) guards protecting admin endpoints."
      },
    ],
  }
};
