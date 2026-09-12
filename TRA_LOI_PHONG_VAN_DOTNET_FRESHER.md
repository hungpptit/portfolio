# BỘ CẨM NANG PHỎNG VẤN INTERN / FRESHER .NET (C#) TOÀN TẬP
### *(Hợp nhất toàn bộ câu hỏi kỹ thuật, kịch bản hỏi sâu & So sánh chi tiết C# vs Java để tránh bẫy nhầm lẫn)*

---

> 💡 **LỜI KHUYÊN PHỎNG VẤN ĐẶC BIỆT DÀNH CHO BẠN:**
> Rất nhiều sinh viên và fresher học nền tảng OOP bằng Java ở đại học trước khi chuyển sang làm .NET (C#). Các interviewer rất thích hỏi các câu so sánh ngầm hoặc trực tiếp giữa C# và Java để kiểm tra xem bạn **thực sự hiểu bản chất C#** hay chỉ đang "viết code C# theo tư duy của Java".
> 
> Bộ tài liệu này đã tích hợp đầy đủ các hộp chú thích **`☕ So sánh với Java & Cạm bẫy dễ nhầm lẫn`** tại tất cả các chủ đề trọng tâm.

---

## MỤC LỤC TỔNG QUAN

- [BẢNG TỔNG HỢP NHANH: CÁC KHÁC BIỆT CỐT LÕI GIỮA C# VÀ JAVA](#bảng-tổng-hợp-nhanh-các-khác-biệt-cốt-lõi-giữa-c-và-java)
- [PHẦN 1: C# NỀN TẢNG, KIỂU DỮ LIỆU & QUẢN LÝ TÀI NGUYÊN](#phần-1-c-nền-tảng-kiểu-dữ-liệu--quản-lý-tài-nguyên)
  - [1.1. Kiểu dữ liệu, Structs, Boxing & Kiểu động (`dynamic`, `object`)](#11-kiểu-dữ-liệu-structs-boxing--kiểu-động-dynamic-object)
  - [1.2. Chuỗi ký tự (String), Toán tử `==`, Immutability & `StringBuilder`](#12-chuỗi-ký-tự-string-toán-tử--immutability--stringbuilder)
  - [1.3. Quản lý tài nguyên: `using` vs `try-with-resources`](#13-quản-lý-tài-nguyên-using-vs-try-with-resources)
  - [1.4. Cấu trúc tổ chức: Namespace vs Package (và Folder)](#14-cấu-trúc-tổ-chức-namespace-vs-package-và-folder)
  - [1.5. Hằng số: `const` & `readonly` vs `final` trong Java](#15-hằng-số-const--readonly-vs-final-trong-java)
  - [1.6. Kiểu Nullable & Xử lý `NullReferenceException`](#16-kiểu-nullable--xử-lý-nullreferenceexception)
  - [1.7. Truyền tham số: `ref`, `out`, `in` vs Pass-by-value của Java](#17-truyền-tham-số-ref-out-in-vs-pass-by-value-của-java)
  - [1.8. Mảng & Điều khiển luồng (`switch-case`, `for`, `while`)](#18-mảng--điều-khiển-luồng-switch-case-for-while)
- [PHẦN 2: BỘ NHỚ C# – STACK, HEAP, GENERICS & GARBAGE COLLECTOR](#phần-2-bộ-nhớ-c--stack-heap-generics--garbage-collector)
  - [2.1. So sánh chi tiết Stack vs Managed Heap](#21-so-sánh-chi-tiết-stack-vs-managed-heap)
  - [2.2. Bản chất Value Type vs Reference Type](#22-bản-chất-value-type-vs-reference-type)
  - [2.3. Bẫy phỏng vấn: "Value Type có luôn nằm trên Stack không?"](#23-bẫy-phỏng-vấn-value-type-có-luôn-nằm-trên-stack-không)
  - [2.4. Generics: C# Reification vs Java Type Erasure](#24-generics-c-reification-vs-java-type-erasure)
  - [2.5. Vòng đời Object & Cơ chế dọn rác của Garbage Collector (GC)](#25-vòng-đời-object--cơ-chế-dọn-rác-của-garbage-collector-gc)
- [PHẦN 3: TỪ KHÓA `STATIC` & VÒNG ĐỜI LƯU TRỮ](#phần-3-từ-khóa-static--vòng-đời-lưu-trữ)
  - [3.1. Bản chất `static`: Tại sao gọi là static và thuộc về ai?](#31-bản-chất-static-tại-sao-gọi-là-static-và-thuộc-về-ai)
  - [3.2. Static Method: Cơ chế gọi, từ khóa `this` và so sánh cấm/cho phép với Java](#32-static-method-cơ-chế-gọi-từ-khóa-this-và-so-sánh-cấmcho-phép-với-java)
  - [3.3. `static class` trong C# vs Static Nested Class trong Java](#33-static-class-trong-c-vs-static-nested-class-trong-java)
- [PHẦN 4: LẬP TRÌNH HƯỚNG ĐỐI TƯỢNG (OOP) & ĐA HÌNH CHUYÊN SÂU](#phần-4-lập-trình-hướng-đối-tượng-oop--đa-hình-chuyên-sâu)
  - [4.1. 4 Tính chất cốt lõi của OOP](#41-4-tính-chất-cốt-lõi-của-oop)
  - [4.2. `abstract class` vs `interface`](#42-abstract-class-vs-interface)
  - [4.3. Bẫy lớn nhất về Đa hình: Mặc định Virtual của Java vs Non-Virtual của C#](#43-bẫy-lớn-nhất-về-đa-hình-mặc-định-virtual-của-java-vs-non-virtual-của-c)
  - [4.4. Nạp chồng (Overloading) vs Ghi đè (Overriding) & Các câu hỏi bẫy](#44-nạp-chồng-overloading-vs-ghi-đè-overriding--các-câu-hỏi-bẫy)
  - [4.5. Xử lý ngoại lệ: C# Unchecked Exceptions vs Java Checked Exceptions](#45-xử-lý-ngoại-lệ-c-unchecked-exceptions-vs-java-checked-exceptions)
- [PHẦN 5: XỬ LÝ BẤT ĐỒNG BỘ & ĐA LUỒNG (ASYNC / MULTITHREADING)](#phần-5-xử-lý-bất-đồng-bộ--đa-luồng-async--multithreading)
  - [5.1. Cơ chế `async` / `await` & `Task` (So sánh với CompletableFuture / Virtual Threads của Java)](#51-cơ-chế-async--await--task-so-sánh-với-completablefuture--virtual-threads-của-java)
  - [5.2. Bất đồng bộ (Asynchronous) khác gì Đa luồng (Multithreading)?](#52-bất-đồng-bộ-asynchronous-khác-gì-đa-luồng-multithreading)
- [PHẦN 6: DEPENDENCY INJECTION (DI) & INVERSION OF CONTROL (IOC)](#phần-6-dependency-injection-di--inversion-of-control-ioc)
  - [6.1. Bản chất IoC, DIP và DI (So sánh ASP.NET Core Built-in DI vs Spring Boot IoC)](#61-bản-chất-ioc-dip-và-di-so-sánh-aspnet-core-built-in-di-vs-spring-boot-ioc)
  - [6.2. Phân biệt chi tiết 3 Lifetimes: Transient, Scoped, Singleton](#62-phân-biệt-chi-tiết-3-lifetimes-transient-scoped-singleton)
  - [6.3. Cạm bẫy nâng cao: "Captive Dependency"](#63-cạm-bẫy-nâng-cao-captive-dependency)
- [PHẦN 7: ASP.NET CORE REQUEST PIPELINE, MIDDLEWARE & MVC/API](#phần-7-aspnet-core-request-pipeline-middleware--mvcapi)
  - [7.1. Luồng đi của HTTP Request qua Pipeline](#71-luồng-đi-của-http-request-qua-pipeline)
  - [7.2. Middleware (So sánh với Filter/Interceptor trong Spring Boot)](#72-middleware-so-sánh-với-filterinterceptor-trong-spring-boot)
  - [7.3. Authentication vs Authorization trong Middleware](#73-authentication-vs-authorization-trong-middleware)
  - [7.4. Global Exception Handling & Logging](#74-global-exception-handling--logging)
  - [7.5. Action Filter vs Middleware](#75-action-filter-vs-middleware)
  - [7.6. Model Binding & Trích xuất dữ liệu](#76-model-binding--trích-xuất-dữ-liệu)
  - [7.7. ASP.NET Core MVC vs Web API](#77-aspnet-core-mvc-vs-web-api)
- [PHẦN 8: BÀI TOÁN THỰC TẾ & KIẾN TRÚC ỨNG DỤNG](#phần-8-bài-toán-thực-tế--kiến-trúc-ứng-dụng)
  - [8.1. Thiết kế chức năng Phân trang (Pagination) chuẩn RESTful](#81-thiết-kế-chức-năng-phân-trang-pagination-chuẩn-restful)
  - [8.2. Repository Pattern & Unit of Work Pattern](#82-repository-pattern--unit-of-work-pattern)
- [PHẦN 9: LINQ & TRUY VẤN CƠ SỞ DỮ LIỆU (LINQ VS JAVA STREAM API)](#phần-9-linq--truy-vấn-cơ-sở-dữ-liệu-linq-vs-java-stream-api)
  - [9.1. ADO.NET cấp thấp vs EF Core ORM (So sánh với JDBC vs Hibernate/JPA)](#91-adonet-cấp-thấp-vs-ef-core-orm-so-sánh-với-jdbc-vs-hibernatejpa)
  - [9.2. Bản chất LINQ vs Java Streams (Deferred Execution & Expression Trees)](#92-bản-chất-linq-vs-java-streams-deferred-execution--expression-trees)
  - [9.3. `IEnumerable` (LINQ to Objects) vs `IQueryable` (LINQ to Entities)](#93-ienumerable-linq-to-objects-vs-iqueryable-linq-to-entities)
  - [9.4. So sánh `First`, `FirstOrDefault`, `Single`, `SingleOrDefault`](#94-so-sánh-first-firstordefault-single-singleordefault)
- [PHẦN 10: ENTITY FRAMEWORK CORE TOÀN DIỆN (SO SÁNH VỚI HIBERNATE / SPRING DATA JPA)](#phần-10-entity-framework-core-toàn-diện-so-sánh-với-hibernate--spring-data-jpa)
  - [10.1. `DbContext`, `DbSet` (So sánh với `EntityManager`, `JpaRepository`)](#101-dbcontext-dbset-so-sánh-với-entitymanager-jparepository)
  - [10.2. Code First, Database First, Model First](#102-code-first-database-first-model-first)
  - [10.3. Quy trình Migration trong Code First (So sánh với Flyway/Liquibase)](#103-quy-trình-migration-trong-code-first-so-sánh-với-flywayliquibase)
  - [10.4. Quan hệ dữ liệu (1-1, 1-N, N-N) & Bảng trung gian](#104-quan-hệ-dữ-liệu-1-1-1-n-n-n--bảng-trung-gian)
  - [10.5. Database Transaction: ACID, Commit & Rollback](#105-database-transaction-acid-commit--rollback)
  - [10.6. Lazy Loading vs Eager Loading & Hiểm họa N+1 Query](#106-lazy-loading-vs-eager-loading--hiểm-họa-n1-query)
- [PHẦN 11: SQL THỰC CHIẾN](#phần-11-sql-thực-chiến)
  - [11.1. `INNER JOIN` vs `LEFT JOIN`](#111-inner-join-vs-left-join)
  - [11.2. Bản chất giá trị `NULL` trong CSDL](#112-bản-chất-giá-trị-null-trong-csdl)
  - [11.3. Kỹ thuật lọc với `WHERE`, ưu tiên `AND` / `OR`](#113-kỹ-thuật-lọc-với-where-ưu-tiên-and--or)
  - [11.4. `GROUP BY`, `HAVING` vs `WHERE`](#114-group-by-having-vs-where)
  - [11.5. Cơ chế sắp xếp `ORDER BY` đơn và đa cột](#115-cơ-chế-sắp-xếp-order-by-đơn-và-đa-cột)
- [PHẦN 12: THUẬT TOÁN & TƯ DUY TỐI ƯU (BIG O)](#phần-12-thuật-toán--tư-duy-tối-ưu-big-o)
  - [12.1. Bài toán: Tìm số lớn thứ 3 trong mảng (Tối ưu $O(n)$ không sort)](#121-bài-toán-tìm-số-lớn-thứ-3-trong-mảng-tối-ưu-on-không-sort)
  - [12.2. Khái niệm Big O và phân biệt $O(1)$, $O(n)$, $O(n^2)$](#122-khái-niệm-big-o-và-phân-biệt-o1-on-on2)

---

## BẢNG TỔNG HỢP NHANH: CÁC KHÁC BIỆT CỐT LÕI GIỮA C# VÀ JAVA

| Đặc điểm / Tính năng | C# (.NET) | Java (JVM) |
| :--- | :--- | :--- |
| **Hàm ảo / Đa hình (Virtual by default)** | **Mặc định là Non-virtual**. Phải khai báo tường minh `virtual` ở cha và `override` ở con. | **Mặc định là Virtual**. Mọi instance method đều có thể ghi đè trừ khi đánh dấu `final`. |
| **So sánh chuỗi (`==`)** | Toán tử `==` được overload để so sánh **nội dung chuỗi**. | Toán tử `==` so sánh **địa chỉ vùng nhớ**. Bắt buộc dùng `.equals()` để so sánh nội dung. |
| **Gọi hàm `static` qua object** | **Bị cấm hoàn toàn** (Lỗi biên dịch: *cannot be accessed with an instance reference*). | **Được phép** (`obj.staticMethod()`), nhưng bị coi là bad practice. |
| **Lớp tĩnh (Top-level static class)**| **Có hỗ trợ trực tiếp**: `public static class MathUtils`. | **Không có**. Chỉ hỗ trợ Static Nested Class bên trong class khác. |
| **Từ khóa hằng số / Bất biến** | Phân tách rõ: `const` (compile-time) và `readonly` (runtime). Ngăn kế thừa dùng `sealed`. | Gom chung một từ khóa **`final`** cho cả biến, method và class. |
| **Kiểu giá trị tùy biến (Struct)** | Hỗ trợ kiểu **`struct`** (Value Type do người dùng tự định nghĩa trên Stack). | **Không hỗ trợ struct**. Chỉ có các kiểu nguyên thủy có sẵn (`int`, `boolean`...). |
| **Cơ chế Generics** | **Reification (Tái hiện thực hóa):** Giữ nguyên kiểu lúc runtime. Hỗ trợ `List<int>` trực tiếp trên RAM, không bị boxing. | **Type Erasure (Xóa kiểu):** Bị xóa về `Object` lúc compile. Không thể tạo `List<int>`, bắt buộc dùng `List<Integer>` (bị boxing). |
| **Xử lý tài nguyên** | Câu lệnh `using` kết hợp interface `IDisposable`. | Khối `try-with-resources` kết hợp interface `AutoCloseable`. |
| **Truyền tham số** | Hỗ trợ `ref` (tham chiếu 2 chiều), `out` (trả ra kết quả), `in` (chỉ đọc). | Chỉ có **Pass-by-value** thuần túy (không thể trỏ lại biến gốc ở ngoài caller). |
| **Ngoại lệ (Exceptions)** | **Chỉ có Unchecked Exceptions** (Không bắt buộc try-catch hay khai báo `throws`). | Phân chia **Checked Exceptions** (bắt buộc try-catch hoặc `throws`) và Unchecked. |
| **Cơ chế Thuộc tính (Properties)** | Hỗ trợ cú pháp ngắn gọn trực tiếp: `public string Name { get; set; }`. | Phải viết thủ công cặp hàm getter/setter (`getName()`, `setName()`) hoặc dùng Lombok. |
| **Truy vấn Dữ liệu** | **LINQ** (Tích hợp sâu vào ngôn ngữ, dịch cây biểu thức Expression Tree thành SQL qua EF Core). | **Stream API** (chỉ thao tác trên RAM). Với Database phải dùng HQL/JPQL/Criteria trong JPA. |

---

## PHẦN 1: C# NỀN TẢNG, KIỂU DỮ LIỆU & QUẢN LÝ TÀI NGUYÊN

### 1.1. Kiểu dữ liệu, Structs, Boxing & Kiểu động (`dynamic`, `object`)
- **Kiểu dữ liệu cha cao nhất:** Mọi kiểu trong C# đều kế thừa từ `System.Object` (alias là `object`).
- **`bool` vs `System.Boolean`:** Hoàn toàn là một. `bool` là từ khóa alias trong C# đại diện cho struct `System.Boolean` của .NET BCL.
- **`dynamic` là gì?** Được giới thiệu từ C# 4.0, cho phép **bỏ qua kiểm tra kiểu tĩnh lúc biên dịch (compile-time)**. Việc phân giải kiểu và kiểm tra hàm được dời sang **lúc chạy (runtime)** qua DLR (Dynamic Language Runtime).
- **So sánh `object` vs `dynamic`:**
  - `object`: Kiểu tĩnh nghiêm ngặt. Muốn gọi hàm/thuộc tính của lớp con thì bắt buộc phải ép kiểu (casting) hoặc dùng Reflection. Báo lỗi ngay lúc gõ code/compile nếu sai.
  - `dynamic`: Cho phép gọi hàm trực tiếp không cần ép kiểu trước. Compile luôn thành công, nhưng nếu lúc chạy hàm không tồn tại sẽ ném ngoại lệ `RuntimeBinderException`.

> ☕ **So sánh với Java & Cạm bẫy dễ nhầm lẫn:**
> - **Structs:** C# cho phép bạn tự định nghĩa kiểu giá trị nhẹ bằng từ khóa `struct` (ví dụ `public struct Point { public int X, Y; }`). Trong Java, bạn không thể tự tạo kiểu Value Type (Java chỉ có các primitive types cứng như `int`, `double` và mọi class đều là Reference Type trên Heap).
> - **Dynamic:** Java hoàn toàn là ngôn ngữ định kiểu tĩnh, không có từ khóa tương đương `dynamic`. Trong Java, bạn buộc phải dùng Reflection thủ công hoặc thư viện ngoài.

---

### 1.2. Chuỗi ký tự (String), Toán tử `==`, Immutability & `StringBuilder`
- **Escape characters:** `\n` (xuống dòng mới), `\t` (thụt lề tab ngang), `\r` (về đầu dòng hiện tại - Carriage Return; trên Windows dấu xuống dòng chuẩn là `\r\n`).
- **Tại sao `string` là Immutable (Bất biến)?**
  - Dù là Reference Type lưu trên Heap, một khi object string đã được tạo ra thì mảng ký tự nội bộ của nó là Read-only.
  - Mọi thao tác biến đổi (`+`, `Replace()`, `ToUpper()`, `Substring()`) **không sửa chuỗi ban đầu**, mà cấp phát một vùng nhớ hoàn toàn mới trên Heap để chứa kết quả.
  - *Mục đích:* Đảm bảo an toàn đa luồng (Thread-safety) và cho phép cơ chế **String Interning** (tái sử dụng chuỗi trùng lặp trong bộ nhớ).
- **`string` vs `StringBuilder` (`System.Text`):**
  - `string`: Bất biến. Phù hợp cho chuỗi tĩnh, ít sửa đổi.
  - `StringBuilder`: Biến đổi được (Mutable). Quản lý buffer mảng ký tự nội bộ có khả năng tự co giãn.
  - *Khi nào dùng `StringBuilder`?* Khi nối chuỗi nhiều lần trong vòng lặp (vài chục đến hàng ngàn lần) hoặc ghép câu SQL/HTML động lớn để tránh sinh rác liên tục trên Heap.

> ☕ **So sánh với Java & Cạm bẫy dễ nhầm lẫn (CỰC KỲ QUAN TRỌNG):**
> - **Toán tử `==` trên chuỗi:**
>   - Trong **Java**: `string1 == string2` so sánh **địa chỉ vùng nhớ** (tham chiếu). Muốn so sánh nội dung chuỗi, lập trình viên Java **bắt buộc** phải dùng `string1.equals(string2)`.
>   - Trong **C#**: Microsoft đã **nạp chồng (overload) toán tử `==`** cho lớp `System.String`. Do đó trong C#, `string1 == string2` sẽ so sánh **nội dung chuỗi** giống hệt hàm `Equals()`. Đây là điểm các bạn chuyển từ Java sang C# rất hay bị "sốc" hoặc nhầm lẫn khi phỏng vấn!

---

### 1.3. Quản lý tài nguyên: `using` vs `try-with-resources`
- **Tác dụng của `using`:**
  1. `using directive`: Import namespace ở đầu file.
  2. `using static`: Import các hàm/field static của một class.
  3. `using statement`: Quản lý vòng đời tài nguyên không được quản lý (Unmanaged Resources).
- **Bản chất cơ chế `using`:**
  - GC chỉ quản lý bộ nhớ RAM (Managed Memory). Các tài nguyên hệ điều hành như File Handle, DB Connection, Socket mạng là **Unmanaged Resources**.
  - Khối `using` là syntactic sugar của khối **`try ... finally`**:
    ```csharp
    using (var stream = new FileStream("data.txt", FileMode.Open)) { /* ... */ }
    // Tương đương:
    FileStream stream = new FileStream("data.txt", FileMode.Open);
    try { /* ... */ }
    finally {
        if (stream != null) ((IDisposable)stream).Dispose(); // Luôn được gọi dù có Exception!
    }
    ```

> ☕ **So sánh với Java & Cạm bẫy dễ nhầm lẫn:**
> - Trong Java 7+, khái niệm tương đương với `using` là **`try-with-resources`**:
>   ```java
>   try (FileReader fr = new FileReader("file.txt")) { /* ... */ }
>   ```
> - Trong Java, class phải kế thừa giao diện `java.lang.AutoCloseable` và hiện thực hàm `close()`.
> - Trong C#, class phải kế thừa giao diện `System.IDisposable` và hiện thực hàm `Dispose()`.

---

### 1.4. Cấu trúc tổ chức: Namespace vs Package (và Folder)
- **Namespace trong C#:** Là cấu trúc **logic** trong mã nguồn và metadata của assembly, giúp gom nhóm các lớp và tránh trùng tên.
- **Khác biệt cốt lõi với Thư mục vật lý (Folder):**
  - C# **hoàn toàn không bắt buộc** namespace phải giống tên thư mục trên ổ cứng. Bạn có thể để 5 file ở 5 folder khác nhau nhưng cùng khai báo `namespace MyProject.Services`.

> ☕ **So sánh với Java & Cạm bẫy dễ nhầm lẫn:**
> - Trong **Java**: Java có quy tắc ràng buộc vật lý cực kỳ nghiêm ngặt: **Tên package BẮT BUỘC phải khớp 1-1 với cấu trúc thư mục ổ đĩa** (Ví dụ `package com.company.service;` thì file phải nằm chính xác tại `com/company/service/MyClass.java`).
> - Trong **C#**: Không có sự ràng buộc này! Namespace chỉ là cấu trúc logic của trình biên dịch.

---

### 1.5. Hằng số: `const` & `readonly` vs `final` trong Java
| Tiêu chí | `const` | `readonly` |
| :--- | :--- | :--- |
| **Thời điểm khởi tạo** | **Compile-time** (Lúc biên dịch). | **Runtime** (Lúc chạy). |
| **Giá trị gán** | Bắt buộc là hằng số tính toán được ngay (số, string, bool). | Có thể là giá trị động, đọc từ config, hoặc kết quả gọi hàm. |
| **Nơi gán giá trị** | Chỉ gán ngay dòng khai báo. | Gán tại dòng khai báo HOẶC **bên trong Constructor**. |
| **Thuộc về ai** | Mặc định là `static`, thuộc về **Class**. | Mặc định thuộc về từng **Instance** (trừ khi có thêm `static readonly`). |
| **Giá trị giữa các object**| Luôn giống hệt nhau trên mọi instance. | Có thể khác nhau giữa các object (truyền qua constructor khác nhau). |

> ☕ **So sánh với Java & Cạm bẫy dễ nhầm lẫn:**
> - Trong **Java**, người ta dùng duy nhất một từ khóa **`final`** cho rất nhiều mục đích:
>   - Biến `final`: Biến chỉ gán 1 lần (tương đương `readonly` của C#).
>   - `public static final`: Hằng số (tương đương `const` của C#).
>   - Method `final`: Không thể override (tương đương `sealed` của C#).
>   - Class `final`: Không thể kế thừa (tương đương `sealed class` của C#).
> - Trong **C#**, Microsoft tách biệt tường minh các mục đích trên thành: `const`, `readonly`, và `sealed`!

---

### 1.6. Kiểu Nullable & Xử lý `NullReferenceException`
- **`int?` là gì?** Là cú pháp viết tắt của struct generic `System.Nullable<int>`.
- **Value Type có nhận `null` được không?** Mặc định là **không**. Chỉ khi bọc trong `Nullable<T>` (`int?`, `DateTime?`) nó mới nhận được `null`.
- **Biến mang giá trị `null` nghĩa là gì?** Biến Reference Type đó không trỏ tới bất kỳ địa chỉ hợp lệ nào trên Heap (chứa con trỏ `0x00000000`).
- **Kỹ thuật phòng tránh:**
  1. Null-conditional: `user?.Address?.Street?.Length;`
  2. Null-coalescing: `string name = user?.Name ?? "Khách";`
  3. Bật `<Nullable>enable</Nullable>` trong file `.csproj` để Roslyn cảnh báo ngay lúc code.

> ☕ **So sánh với Java & Cạm bẫy dễ nhầm lẫn:**
> - Trong **Java**, các kiểu nguyên thủy (`int`, `boolean`) hoàn toàn không thể nhận `null`. Muốn nhận `null`, Java phải dùng các lớp bọc đối tượng (Wrapper Classes: `Integer`, `Boolean`), điều này gây ra chi phí cấp phát trên Heap và hiệu năng chậm do **Autoboxing/Unboxing**.
> - Trong **C#**, `Nullable<int>` (`int?`) là một **Value Type dạng struct nhẹ** lưu trực tiếp trên Stack, hoàn toàn không phải tạo object trên Heap như `Integer` của Java!

---

### 1.7. Truyền tham số: `ref`, `out`, `in` vs Pass-by-value của Java
C# cung cấp các từ khóa kiểm soát cơ chế truyền tham số vào hàm:
- **`ref`:** Truyền tham chiếu 2 chiều. Biến bên ngoài bắt buộc phải được khởi tạo trước khi truyền vào; thay đổi bên trong hàm sẽ tác động trực tiếp lên biến bên ngoài.
- **`out`:** Dùng để trả ra nhiều giá trị từ một hàm. Biến bên ngoài không cần gán trước, nhưng hàm bắt buộc phải gán giá trị cho biến `out` trước khi kết thúc hàm (Ví dụ: `int.TryParse("123", out int result)`).
- **`in`:** Truyền tham chiếu nhưng ở chế độ **Read-only** (ngăn chặn hàm sửa đổi giá trị), giúp tối ưu hiệu năng khi truyền các struct dữ liệu lớn mà không bị copy tốn RAM.

> ☕ **So sánh với Java & Cạm bẫy dễ nhầm lẫn:**
> - Trong **Java**, **MỌI THỨ ĐỀU LÀ PASS-BY-VALUE** (Truyền giá trị). Khi bạn truyền một object vào hàm trong Java, bạn đang truyền một bản sao của con trỏ địa chỉ, bạn **không bao giờ có thể gán lại biến gốc ở ngoài hàm trỏ sang một object khác**!
> - Java cũng không có cơ chế `out` để trả về nhiều giá trị, buộc lập trình viên Java phải tạo class bọc kết quả (Wrapper/DTO) hoặc dùng mảng 1 phần tử. C# hỗ trợ `ref`, `out` và `Tuple` cực kỳ tiện lợi.

---

### 1.8. Mảng & Điều khiển luồng (`switch-case`, `for`, `while`)
- **Mảng 2 chiều:**
  - Mảng chữ nhật nhiều chiều: `int[,] matrix = new int[3, 4];`
  - Mảng răng cưa (Jagged array - mảng của các mảng): `int[][] jagged = new int[3][]; jagged[0] = new int[2];`
- **Tại sao `switch-case` cần `break`?** C# áp dụng quy tắc **"No fall-through"** để tránh luồng code vô tình trôi từ case này sang case kế tiếp. Nếu không có `break` (hoặc `return`, `throw`), C# sẽ báo lỗi biên dịch ngay.
  - *Ngoại lệ:* Các case rỗng liên tiếp không có code (`case 1: case 2: DoSomething(); break;`) thì được phép để gộp điều kiện chung.
- **`for` vs `while` vs `do...while`:**
  - `for`: Dùng khi đã biết trước số lần lặp hoặc duyệt index tuần tự.
  - `while`: Dùng khi chưa biết số lần lặp, phụ thuộc điều kiện kiểm tra trước.
  - `do...while`: Dùng khi muốn khối lệnh chắc chắn thực thi **ít nhất 1 lần** trước khi kiểm tra điều kiện.

---

## PHẦN 2: BỘ NHỚ C# – STACK, HEAP, GENERICS & GARBAGE COLLECTOR

### 2.1. So sánh chi tiết Stack vs Managed Heap
| Tiêu chí | Stack Memory | Managed Heap Memory |
| :--- | :--- | :--- |
| **Cơ chế** | Ngăn xếp LIFO (Last In First Out), gắn liền với từng Thread riêng biệt. | Vùng nhớ dùng chung toàn bộ ứng dụng (Application-wide). |
| **Tốc độ** | Cực nhanh (chỉ dịch chuyển con trỏ Stack Pointer). | Chậm hơn (cần tìm block nhớ trống, cấp phát và lưu metadata). |
| **Kích thước** | Cố định, tương đối nhỏ (~1MB mỗi thread, vượt quá gây `StackOverflowException`). | Động, có thể mở rộng theo dung lượng RAM hệ thống. |
| **Thu hồi** | Tự động giải phóng ngay khi hàm kết thúc frame thực thi. | Được thu hồi tự động bởi **Garbage Collector (GC)**. |

### 2.2. Bản chất Value Type vs Reference Type
- **Value Type:** Lưu trữ trực tiếp **dữ liệu thực tế**. Khi gán `b = a;`, toàn bộ bit giá trị được sao chép sang `b`.
- **Reference Type:** Biến chỉ là một con trỏ tham chiếu (kích thước 4 bytes trên OS 32-bit hoặc 8 bytes trên OS 64-bit) lưu địa chỉ vùng nhớ. Dữ liệu thực sự của đối tượng nằm trên **Heap**. Khi gán `b = a;`, chỉ có địa chỉ tham chiếu được copy, cả 2 cùng trỏ vào 1 object trên Heap.

### 2.3. Bẫy phỏng vấn: "Value Type có LUÔN NẰM trên Stack không?"
- **Đáp án:** **KHÔNG!** Vị trí của Value Type hoàn toàn phụ thuộc vào ngữ cảnh khai báo:
  1. Biến cục bộ trong hàm: **Nằm trên Stack**.
  2. Là **Field bên trong một Class** (Reference Type): Nằm trọn vẹn trên **Heap** cùng với instance của class đó.
  3. Bị **Boxing** (chuyển sang `object` hoặc `interface`): Giá trị được copy lên **Heap**.
  4. Phần tử của **Mảng (Array)**: Vì mảng là reference type, mảng số nguyên `int[]` nằm hoàn toàn trên **Heap**.
  5. Biến nằm trong **Closure / Lambda / Async State Machine**: Được compiler biến thành field của class ẩn sinh ngầm, do đó nằm trên **Heap**.

---

### 2.4. Generics: C# Reification vs Java Type Erasure
Đây là một trong những khác biệt kiến trúc lớn nhất giữa .NET CLR và Java JVM mà các senior interviewer rất thích hỏi:

| Tiêu chí | C# Generics (**Reification** - Hiện thực hóa) | Java Generics (**Type Erasure** - Xóa kiểu) |
| :--- | :--- | :--- |
| **Thời điểm xử lý** | Được CLR hỗ trợ ở **cả Runtime lẫn Compile-time**. | Chỉ tồn tại ở **Compile-time**, bị xóa sạch lúc chạy. |
| **Mã nhị phân / IL** | Giữ nguyên kiểu dữ liệu thật trong Metadata của DLL. | Mọi tham số generic `<T>` đều bị compiler biến đổi thành `Object`. |
| **Với kiểu nguyên thủy** | Khởi tạo được trực tiếp: `List<int>`, `Dictionary<int, double>`. | **KHÔNG THỂ** dùng `List<int>`. Bắt buộc phải dùng `List<Integer>` (Boxing). |
| **Hiệu năng & Bộ nhớ** | **Cực nhanh và nhẹ**. `List<int>` lưu trữ các số nguyên liền mạch trên bộ nhớ, không tốn con trỏ, không boxing. | **Chậm và tốn RAM**. `List<Integer>` thực chất lưu danh sách con trỏ trỏ tới các object `Integer` riêng lẻ trên Heap. |
| **Kiểm tra kiểu lúc chạy** | Cho phép `typeof(T)`, `if (obj is T)`. | Không thể `T.class` hoặc `new T()` trực tiếp vì kiểu đã bị xóa. |

---

### 2.5. Vòng đời Object & Cơ chế dọn rác của Garbage Collector (GC)
- **Khi gọi `Person p = new Person();`:**
  1. Cấp phát biến tham chiếu `p` trên Stack (chứa địa chỉ).
  2. Toán tử `new` tính toán kích thước object (fields + 2 header fields của CLR: *Type Object Pointer* và *Sync Block Index*).
  3. Cấp phát vùng nhớ liên tục trên Heap, gán giá trị mặc định, gọi Constructor, trả địa chỉ về cho `p`.
- **Cơ chế thu gom rác:**
  - Khi không còn **GC Root** nào (biến stack, static field, CPU register) trỏ tới object, object đó trở thành "Unreachable Object" (rác).
  - GC chia bộ nhớ thành **3 thế hệ (Generations)**:
    - **Gen 0:** Đối tượng mới tạo, vòng đời ngắn. GC quét thường xuyên, dọn dẹp cực nhanh.
    - **Gen 1:** Vùng đệm cho các đối tượng sống sót qua lần quét Gen 0.
    - **Gen 2:** Đối tượng sống lâu (Static object, Singleton, Connection Pool). Full GC quét Gen 2 rất tốn tài nguyên (Stop-the-world).

---

## PHẦN 3: TỪ KHÓA `STATIC` & VÒNG ĐỜI LƯU TRỮ

### 3.1. Bản chất `static`: Tại sao gọi là static và thuộc về ai?
- **Thuộc về Class (Type), không thuộc về Instance (Object):**
  - Instance member: Mỗi lần gọi `new` sẽ sinh ra một bản copy dữ liệu riêng trên Heap.
  - Static member: Chỉ tồn tại **duy nhất một bản sao trong bộ nhớ** trong suốt vòng đời của Application Domain, nằm tại vùng nhớ Type Metadata (High Frequency Heap).
- **Tại sao gọi là static?** Vì địa chỉ bộ nhớ của nó cố định và không di dời hay gắn vào bất kỳ instance cụ thể nào.

### 3.2. Static Method: Cơ chế gọi, từ khóa `this` và so sánh cấm/cho phép với Java
- **Tại sao static method không cần tạo object?** Vì nó được gắn trực tiếp vào Type Metadata. Lời gọi hàm dùng lệnh IL `call` trực tiếp địa chỉ hàm mà không cần truyền con trỏ đối tượng.
- **Có dùng được từ khóa `this` trong static method không?**
  - **Tuyệt đối KHÔNG.** `this` đại diện cho con trỏ tham chiếu đến chính instance đang gọi hàm. Static method chạy độc lập không có ngữ cảnh instance nào nên `this` không tồn tại.

> ☕ **So sánh với Java & Cạm bẫy dễ nhầm lẫn (ĐẶC BIỆT CHÚ Ý):**
> - **Gọi static method thông qua biến object (`obj.StaticMethod()`):**
>   - Trong **Java**: Bạn **CÓ THỂ** dùng một biến instance để gọi một hàm static (ví dụ `MyClass obj = new MyClass(); obj.myStaticMethod();` vẫn chạy bình thường dù IDE cảnh báo).
>   - Trong **C#**: Trình biên dịch **CẤM HOÀN TOÀN** cú pháp này và báo lỗi biên dịch ngay lập tức: *Static member cannot be accessed with an instance reference*. Bắt buộc phải gọi qua tên lớp `MyClass.MyStaticMethod()`. C# cấm điều này để tránh gây hiểu lầm rằng hàm đó có tính đa hình!

### 3.3. `static class` trong C# vs Static Nested Class trong Java
- **Trong C#:**
  - Có từ khóa `static class` ở cấp độ ngoài cùng (top-level):
    ```csharp
    public static class StringHelper {
        public static bool IsEmpty(string s) => string.IsNullOrEmpty(s);
    }
    ```
  - Lớp này bị đóng băng: Không thể gọi `new`, bị `sealed` không thể kế thừa, và toàn bộ method/field bên trong bắt buộc phải là `static`.
- **Trong Java:**
  - Java **hoàn toàn không có** `static class` ở cấp ngoài cùng.
  - Java chỉ có khái niệm **Static Nested Class** (một class static nằm lồng bên trong một class khác). Để đạt hiệu ứng giống C#, lập trình viên Java phải tạo một class `final` với private constructor và toàn bộ hàm static.

---

## PHẦN 4: LẬP TRÌNH HƯỚNG ĐỐI TƯỢNG (OOP) & ĐA HÌNH CHUYÊN SÂU

### 4.1. 4 Tính chất cốt lõi của OOP
1. **Đóng gói (Encapsulation):** Gom nhóm dữ liệu và hàm xử lý vào trong class, che giấu chi tiết bên trong thông qua access modifiers (`private`, `protected`, `public`) và properties với getter/setter để kiểm soát tính toàn vẹn dữ liệu.
2. **Kế thừa (Inheritance):** Cho phép class con tái sử dụng thuộc tính/phương thức của class cha (quan hệ *is-a*). C# chỉ hỗ trợ **đơn kế thừa class** nhưng hỗ trợ **đa thực thi interface**.
3. **Đa hình (Polymorphism):** Khả năng các đối tượng khác nhau phản ứng khác nhau với cùng một thông điệp/lời gọi hàm (gồm đa hình tĩnh lúc compile và đa hình động lúc runtime).
4. **Trừu tượng (Abstraction):** Tập trung vào việc *đối tượng làm được gì* (What to do) và ẩn đi *chi tiết cài đặt làm như thế nào* (How to do) thông qua `interface` hoặc `abstract class`.

### 4.2. `abstract class` vs `interface`
| Tiêu chí | `interface` | `abstract class` |
| :--- | :--- | :--- |
| **Kế thừa** | Một class có thể implement **nhiều interface**. | Một class chỉ có thể kế thừa **1 class duy nhất**. |
| **Bản chất** | Hợp đồng giao tiếp (Contract), thể hiện quan hệ *"Can-do"* (hành vi). | Lớp cơ sở trừu tượng, thể hiện quan hệ phân cấp gia phả *"Is-a"*. |
| **Thành phần** | Chủ yếu chứa chữ ký phương thức/property (từ C# 8 có thêm default implementation). | Chứa được cả method trừu tượng lẫn method có code sẵn, fields dữ liệu, constructor. |

---

### 4.3. Bẫy lớn nhất về Đa hình: Mặc định Virtual của Java vs Non-Virtual của C#
Đây là **câu hỏi bẫy số 1** khiến các bạn sinh viên quen Java rớt phỏng vấn C#:

```csharp
// Xét đoạn code sau trong C#:
public class Parent {
    public void Print() => Console.WriteLine("Parent");
}
public class Child : Parent {
    public void Print() => Console.WriteLine("Child");
}

Parent obj = new Child();
obj.Print(); // Kết quả in ra cái gì???
```
- **Đáp án trong C#:** In ra **`Parent`**!
- **Đáp án trong Java (nếu viết tương đương):** In ra **`Child`**!

> ☕ **Tại sao lại có sự khác biệt này?**
> - Trong **Java**: Mọi phương thức non-static **mặc định đều là Virtual** (Hàm ảo). Java luôn sử dụng Dynamic Dispatch để gọi phương thức của đối tượng thực sự lúc runtime. Muốn chặn override trong Java, bạn phải dùng từ khóa `final`.
> - Trong **C#**: Mọi phương thức **mặc định là NON-VIRTUAL**! Trình biên dịch C# sẽ gọi hàm dựa trên kiểu của biến tham chiếu (`Parent`) thay vì kiểu của đối tượng thực tế.
> - **Muốn C# đa hình động giống Java:** Class cha **bắt buộc** phải khai báo từ khóa **`virtual`**, và class con **bắt buộc** phải khai báo từ khóa **`override`**:
>   ```csharp
>   public class Parent { public virtual void Print() => Console.WriteLine("Parent"); }
>   public class Child : Parent { public override void Print() => Console.WriteLine("Child"); }
>   // Lúc này: Parent obj = new Child(); obj.Print(); mới in ra "Child"!
>   ```

---

### 4.4. Nạp chồng (Overloading) vs Ghi đè (Overriding) & Các câu hỏi bẫy
| Tiêu chí | Method Overloading (Nạp chồng) | Method Overriding (Ghi đè) |
| :--- | :--- | :--- |
| **Loại đa hình** | Compile-time (Đa hình tĩnh). | Runtime (Đa hình động). |
| **Vị trí** | Trong cùng 1 class. | Giữa Class Cha và Class Con. |
| **Tham số** | **Bắt buộc phải khác nhau** (kiểu, số lượng, thứ tự). | **Bắt buộc phải giống hệt nhau**. |
| **Kiểu trả về** | Có thể giống hoặc khác. | Phải giống nhau. |
| **Cơ chế gọi** | Compiler quyết định địa chỉ hàm ngay lúc build. | CLR dùng bảng con trỏ hàm ảo **V-Table** để phân giải động lúc chạy. |

> **2 Câu hỏi bẫy phỏng vấn:**
> 1. *"Chỉ đổi kiểu trả về (Return type) có tạo thành Overloading không?"* -> **KHÔNG.** Compiler không phân biệt được hàm nào được gọi khi người dùng gọi hàm mà không hứng biến trả về (`DoWork();`).
> 2. *"Nếu method ở class cha là `private` thì class con có overload method đó không?"* -> **KHÔNG.** Vì method cha là private nên class con hoàn toàn không nhìn thấy nó; ở class con chỉ là một method mới độc lập.

---

### 4.5. Xử lý ngoại lệ: C# Unchecked Exceptions vs Java Checked Exceptions
Một triết lý thiết kế hoàn toàn trái ngược giữa hai kiến trúc sư Anders Hejlsberg (C#) và James Gosling (Java):

- **Trong Java:** Phân chia thành 2 loại:
  - **Checked Exceptions** (`IOException`, `SQLException`): Bắt buộc lập trình viên phải bọc trong `try-catch` hoặc khai báo chữ ký hàm `throws IOException`. Nếu không tuân thủ, mã nguồn sẽ **không thể compile**.
  - **Unchecked Exceptions** (`NullPointerException`, `ArithmeticException`).
- **Trong C#:** **TOÀN BỘ NGOẠI LỆ ĐỀU LÀ UNCHECKED!**
  - C# không có từ khóa `throws`. Trình biên dịch không bao giờ ép buộc bạn phải viết `try-catch` cho bất kỳ method nào.
  - *Lý do của C#:* Đội ngũ thiết kế C# nhận thấy Checked Exception trong Java thường khiến lập trình viên viết các khối `catch` rỗng vô nghĩa để đối phó compile, gây giảm chất lượng code và phá vỡ khả năng mở rộng của hệ thống phân tán.

---

## PHẦN 5: XỬ LÝ BẤT ĐỒNG BỘ & ĐA LUỒNG (ASYNC / MULTITHREADING)

### 5.1. Cơ chế `async` / `await` & `Task` (So sánh với CompletableFuture / Virtual Threads của Java)
- `Task` / `Task<T>`: Đại diện cho một tác vụ bất đồng bộ đang hoặc sẽ chạy.
- `async`: Đánh dấu hàm có chứa bất đồng bộ và cho phép dùng từ khóa `await`. Khi biên dịch, Roslyn tự động sinh ra một **Máy trạng thái (State Machine)** phía sau để theo dõi tiến trình.
- `await`: Ra lệnh tạm dừng hàm hiện tại cho đến khi Task hoàn tất. **Nó lập tức giải phóng Thread hiện tại quay về ThreadPool** để phục vụ các request khác, hoàn toàn không khóa luồng (Non-blocking). Khi Task có kết quả, ThreadPool sẽ cấp 1 thread để chạy tiếp đoạn code phía sau.

> ☕ **So sánh với Java & Cạm bẫy dễ nhầm lẫn:**
> - C# có cú pháp `async/await` ngôn ngữ bản địa cực kỳ tự nhiên từ năm 2012 (.NET 4.5).
> - Trong Java, truyền thống phải dùng `CompletableFuture` với cú pháp callback chuỗi khá phức tạp (`.thenApply()`, `.thenAccept()`). Mãi đến Java 21 (Project Loom), Java mới giới thiệu **Virtual Threads** để tối ưu xử lý I/O concurrency theo phong cách đồng bộ.

### 5.2. Bất đồng bộ (Asynchronous) khác gì Đa luồng (Multithreading)?
| Tiêu chí | Multithreading (Đa luồng) | Asynchronous (Bất đồng bộ) |
| :--- | :--- | :--- |
| **Bản chất** | Sử dụng **nhiều luồng CPU vật lý/logic** chạy song song đồng thời. | Mô hình lập trình **không chặn luồng (Non-blocking)** khi chờ đợi. |
| **Mục đích** | Tối ưu tính toán nặng (**CPU-bound**: xử lý ảnh, AI, thuật toán nặng) qua `Task.Run()`. | Tối ưu chờ đợi I/O (**I/O-bound**: gọi Database, gọi HTTP API, đọc ghi file). |
| **Số lượng thread**| Mỗi thread tốn ~1MB RAM cho call stack. | **Không tốn thêm thread nào** trong thời gian chờ phần cứng I/O phản hồi (cơ chế IOCP). |

---

## PHẦN 6: DEPENDENCY INJECTION (DI) & INVERSION OF CONTROL (IOC)

### 6.1. Bản chất IoC, DIP và DI (So sánh ASP.NET Core Built-in DI vs Spring Boot IoC)
- **Inversion of Control (IoC):** Đảo ngược điều khiển – framework kiểm soát luồng chạy và gọi code của bạn thay vì code bạn tự kiểm soát tất cả.
- **Dependency Inversion Principle (DIP):** Module cấp cao (Controller, Business Service) không được phụ thuộc trực tiếp vào Module cấp thấp (Database, SMS Service). Cả hai phải phụ thuộc vào **Interface (Abstraction)**.
- **Dependency Injection (DI):** Kỹ thuật tiêm các đối tượng phụ thuộc vào class từ bên ngoài (thường qua Constructor) thay vì tự `new`.

> ☕ **So sánh với Java & Cạm bẫy dễ nhầm lẫn:**
> - Trong Java, nhắc đến DI người ta nghĩ ngay đến **Spring Framework** với các Annotation: `@Component`, `@Service`, `@Autowired`. Spring IoC Container sử dụng Classpath Scanning (quét toàn bộ thư mục để tự tìm bean).
> - Trong .NET hiện đại, **ASP.NET Core đã tích hợp sẵn Built-in DI Container**. Khác với Spring tự quét, ASP.NET Core chuộng việc **đăng ký tường minh (Explicit Registration)** trong file `Program.cs` (`builder.Services.AddScoped<IService, Service>()`) giúp khởi động ứng dụng cực nhanh và dễ kiểm soát phụ thuộc.

### 6.2. Phân biệt chi tiết 3 Lifetimes: Transient, Scoped, Singleton
| Lifetime | Cú pháp | Vòng đời | Trường hợp sử dụng |
| :--- | :--- | :--- | :--- |
| **Transient** | `AddTransient<T>` | Tạo mới một instance **mỗi khi được yêu cầu** inject. | Service nhẹ, không lưu trạng thái (Stateless), chuyển đổi dữ liệu. |
| **Scoped** | `AddScoped<T>` | Tạo **duy nhất 1 instance cho mỗi HTTP Request**. | **`DbContext` của EF Core**, Service xử lý nghiệp vụ đơn hàng. |
| **Singleton** | `AddSingleton<T>` | Tạo **duy nhất 1 instance trong suốt thời gian app chạy**. | In-memory Cache, Logging, cấu hình ứng dụng. |

### 6.3. Cạm bẫy nâng cao: "Captive Dependency"
- **Tình huống:** Nếu bạn inject một `Scoped Service` (ví dụ `DbContext`) vào một `Singleton Service`.
- **Hậu quả:** Singleton sẽ giữ chặt instance Scoped đó suốt đời ứng dụng. `DbContext` không bao giờ được giải phóng sau HTTP request -> gây rò rỉ bộ nhớ nghiêm trọng và lỗi xung đột đa luồng (*Concurrency Exception: A second operation was started on this context before a previous operation completed*).

---

## PHẦN 7: ASP.NET CORE REQUEST PIPELINE, MIDDLEWARE & MVC/API

### 7.1. Luồng đi của HTTP Request qua Pipeline
```
[Client] 
  ➔ [Kestrel Web Server] 
  ➔ [Middleware Pipeline] (Exception ➔ HTTPS ➔ StaticFiles ➔ Routing ➔ CORS ➔ Auth)
  ➔ [Endpoint Routing] 
  ➔ [Action Filters] 
  ➔ [Model Binding & Validation] 
  ➔ [Controller Action] 
  ➔ [Result Execution (JSON/View)] 
  ➔ [Client]
```

### 7.2. Middleware (So sánh với Filter/Interceptor trong Spring Boot)
- Hoạt động 2 chiều theo mô hình Búp bê Nga (Russian Doll): chiều vào xử lý trước `await next()`, chiều ra xử lý sau `await next()`.
- **Short-circuiting (Chặn đứng request):** Nếu middleware không gọi `next()`, request lập tức quay đầu trả response (Ví dụ: kiểm tra API Key không hợp lệ trả về `401 Unauthorized`).

> ☕ **So sánh với Java / Spring Boot:**
> - Middleware trong ASP.NET Core tương đương với **`Servlet Filter`** hoặc **`OncePerRequestFilter`** trong Java Spring.
> - Cả hai đều nằm ngoài cùng của Request Pipeline để chặn và xử lý các tác vụ toàn cục (CORS, Logging, Authentication).

### 7.3. Authentication vs Authorization trong Middleware
- **Authentication (`UseAuthentication`):** Xác minh danh tính (*Bạn là ai?* – giải mã JWT token hoặc Cookie để gán `ClaimsPrincipal` vào `HttpContext.User`).
- **Authorization (`UseAuthorization`):** Xác minh quyền hạn (*Bạn được phép làm gì?* – kiểm tra Role hoặc Policy của user).
- **Thứ tự bắt buộc:** `app.UseAuthentication()` phải luôn luôn đứng **TRƯỚC** `app.UseAuthorization()`.

### 7.4. Global Exception Handling & Logging
- Dùng **Global Exception Middleware** (hoặc `app.UseExceptionHandler()`) bắt tập trung mọi lỗi chưa được xử lý, ghi log chi tiết và trả về mã lỗi HTTP 500 chuẩn RFC 7807 (Problem Details) thân thiện, bảo mật không làm lộ StackTrace ra ngoài client.

### 7.5. Action Filter vs Middleware
- **Middleware:** Nằm ở tầng ứng dụng toàn cục. Chỉ biết thông tin HTTP thô (`HttpContext`), không biết Controller hay Action nào đang chạy.
- **Action Filter:** Nằm trong phạm vi MVC/Web API (tương đương `HandlerInterceptor` trong Spring). Biết rõ **Controller nào, Action nào, tham số truyền vào là gì**. Dùng cho: Validate Model tự động, kiểm tra quyền riêng biệt của Action, Audit Log dữ liệu đầu vào.

### 7.6. Model Binding & Trích xuất dữ liệu
- Cơ chế tự động ánh xạ dữ liệu HTTP Request thành đối tượng C#.
- Các nguồn trích xuất qua Attributes (so sánh với Spring Boot):
  - `[FromBody]` ➔ tương đương `@RequestBody` trong Spring.
  - `[FromQuery]` ➔ tương đương `@RequestParam` trong Spring.
  - `[FromRoute]` ➔ tương đương `@PathVariable` trong Spring.
  - `[FromHeader]`, `[FromForm]`.

### 7.7. ASP.NET Core MVC vs Web API
- **MVC:** Trả về giao diện người dùng rendered từ Server (HTML/CSS qua Razor Views `.cshtml`). Kế thừa từ `Controller`.
- **Web API:** Chỉ trả về dữ liệu thô (JSON/XML) cho Single Page App (React, Vue) hoặc Mobile App. Kế thừa từ `ControllerBase` và có attribute `[ApiController]`.

---

## PHẦN 8: BÀI TOÁN THỰC TẾ & KIẾN TRÚC ỨNG DỤNG

### 8.1. Thiết kế chức năng Phân trang (Pagination) chuẩn RESTful
- **Client gửi lên:** `pageIndex` (số trang, ví dụ: 2) và `pageSize` (số bản ghi mỗi trang, ví dụ: 10).
- **Server xử lý với LINQ:**
  ```csharp
  var query = _context.Products.AsQueryable();
  var totalRecords = await query.CountAsync();
  var items = await query
      .OrderBy(p => p.Id)
      .Skip((pageIndex - 1) * pageSize)
      .Take(pageSize)
      .ToListAsync();

  var response = new PagedResult<Product> {
      Items = items,
      PageIndex = pageIndex,
      PageSize = pageSize,
      TotalRecords = totalRecords,
      TotalPages = (int)Math.Ceiling(totalRecords / (double)pageSize)
  };
  ```

### 8.2. Repository Pattern & Unit of Work Pattern
- **Repository:** Đóng gói logic truy vấn dữ liệu của từng thực thể riêng biệt (`IUserRepository`). Giúp tách rời Business Logic khỏi công nghệ DB cụ thể và dễ viết Unit Test (Mocking).
- **Unit of Work:** Gom nhiều Repository lại dưới một Database Transaction duy nhất, đảm bảo tính toàn vẹn (ACID) khi gọi `SaveChangesAsync()`.

---

## PHẦN 9: LINQ & TRUY VẤN CƠ SỞ DỮ LIỆU (LINQ VS JAVA STREAM API)

### 9.1. ADO.NET cấp thấp vs EF Core ORM (So sánh với JDBC vs Hibernate/JPA)
- **ADO.NET** trong C# tương đương trực tiếp với **JDBC thuần** trong Java (viết SQL chuỗi, quản lý Connection, map ResultSet).
- **EF Core** trong C# tương đương với **Hibernate / Spring Data JPA** trong Java (ORM cấp cao, ánh xạ bảng sang đối tượng, tự động quản lý transaction và sinh mã SQL).

---

### 9.2. Bản chất LINQ vs Java Streams (Deferred Execution & Expression Trees)
Nhiều ứng viên nghĩ LINQ trong C# chỉ giống hệt Java Stream API (`stream().filter().map()`). Đây là sự hiểu lầm lớn!

| Tiêu chí | C# LINQ | Java Stream API |
| :--- | :--- | :--- |
| **Bản chất** | Tích hợp trực tiếp vào cú pháp ngôn ngữ C#. Hỗ trợ cả **Delegate** lẫn **Expression Trees**. | Thư viện API bổ sung từ Java 8, hoạt động dựa trên Functional Interfaces. |
| **Truy vấn Database** | **CỰC KỲ MẠNH MẼ**. Thông qua `IQueryable`, LINQ phân tích cú pháp biểu thức và dịch thẳng thành **câu lệnh SQL chạy trên Database Server**. | **KHÔNG THỂ**. Java Stream chỉ có thể xử lý dữ liệu đã có sẵn trên RAM. Để truy vấn Database trong Java, bạn phải dùng JPQL/HQL hoặc Criteria API. |
| **Thực thi hoãn lại (Deferred)**| Có (`Where()`, `Select()` chỉ thực sự chạy khi gọi `.ToList()`, `.Count()`). | Có (Các intermediate operations chỉ chạy khi gặp terminal operation như `.collect()`). |

---

### 9.3. `IEnumerable` (LINQ to Objects) vs `IQueryable` (LINQ to Entities)
- **`IEnumerable<T>`:** Thao tác trên bộ nhớ RAM. Nếu viết `.Where()` trên IEnumerable, toàn bộ dữ liệu từ database sẽ bị kéo về RAM trước rồi mới lọc -> Cực kỳ chậm nếu bảng có hàng triệu dòng.
- **`IQueryable<T>`:** Giữ cây biểu thức (Expression Tree). Phép lọc `.Where()` được chuyển dịch trực tiếp thành mệnh đề SQL `WHERE` chạy trên Database Server, chỉ tải về RAM những bản ghi thỏa mãn.

### 9.4. So sánh `First`, `FirstOrDefault`, `Single`, `SingleOrDefault`
| Hàm | Tìm thấy 1 kết quả | Không tìm thấy | Tìm thấy > 1 kết quả |
| :--- | :--- | :--- | :--- |
| **`First()`** | Trả về phần tử đầu tiên. | **Ném ngoại lệ** | Trả về phần tử đầu tiên. |
| **`FirstOrDefault()`** | Trả về phần tử đầu tiên. | **Trả về `null`** | Trả về phần tử đầu tiên. |
| **`Single()`** | Trả về phần tử duy nhất. | **Ném ngoại lệ** | **Ném ngoại lệ** |
| **`SingleOrDefault()`** | Trả về phần tử duy nhất. | **Trả về `null`** | **Ném ngoại lệ** |

---

## PHẦN 10: ENTITY FRAMEWORK CORE TOÀN DIỆN (SO SÁNH VỚI HIBERNATE / SPRING DATA JPA)

### 10.1. `DbContext`, `DbSet` (So sánh với `EntityManager`, `JpaRepository`)
- `DbContext`: Đại diện cho phiên làm việc với Database, quản lý kết nối và theo dõi sự thay đổi (Change Tracker). Tương đương với **`EntityManager`** hoặc **`Session`** trong Hibernate.
- `DbSet<T>`: Đại diện cho một bảng dữ liệu để thực hiện CRUD.

### 10.2. Code First, Database First, Model First
- **Code First:** Viết code C# Entity trước, dùng EF Migration sinh ra và cập nhật Database. (Khuyên dùng trong dự án mới).
- **Database First:** Thiết kế Database trên SQL Server trước, dùng lệnh `dotnet ef dbcontext scaffold` để dịch ngược sinh ra code C#.
- **Model First:** Vẽ sơ đồ trực quan EDMX (đã lỗi thời và bị loại bỏ trên EF Core).

### 10.3. Quy trình Migration trong Code First (So sánh với Flyway/Liquibase)
- Trong Java Spring Boot, lập trình viên thường phải cài thêm công cụ bên thứ ba như **Flyway** hoặc **Liquibase** để viết script migration cập nhật database.
- Trong .NET, **EF Migrations đã được tích hợp sẵn**:
  1. Thay đổi Entity C#.
  2. `dotnet ef migrations add <TenMigration>`: EF tự so sánh model và sinh mã C# gồm 2 hàm `Up()` và `Down()`.
  3. `dotnet ef database update`: EF tự dịch thành SQL DDL chạy vào DB và ghi lịch sử vào bảng `__EFMigrationsHistory`.

### 10.4. Quan hệ dữ liệu (1-1, 1-N, N-N) & Bảng trung gian
- **Tại sao Many-to-Many cần bảng trung gian?** Vì RDBMS không thể lưu danh sách mảng ID vào trong một ô dữ liệu (vi phạm chuẩn 1NF). Cần bảng trung gian chứa 2 khóa ngoại để liên kết từng cặp bản ghi.
- **Navigation Property:** Thuộc tính điều hướng liên kết giữa các Entity (ví dụ: `public Category Category { get; set; }` và `public ICollection<Product> Products { get; set; }`).

### 10.5. Database Transaction: ACID, Commit & Rollback
- Đảm bảo tính toàn vẹn dữ liệu: Nếu một bước trong chuỗi nghiệp vụ thất bại, toàn bộ các bước trước đó phải được **Rollback**; nếu thành công toàn bộ mới **Commit**.
- Code chuẩn trong EF Core:
  ```csharp
  using var tx = await _context.Database.BeginTransactionAsync();
  try {
      // Thực hiện nhiều thao tác ghi dữ liệu
      await _context.SaveChangesAsync();
      await tx.CommitAsync();
  } catch {
      await tx.RollbackAsync();
      throw;
  }
  ```

### 10.6. Lazy Loading vs Eager Loading & Hiểm họa N+1 Query
- **Eager Loading:** Nạp dữ liệu liên quan ngay lập tức trong 1 câu SQL duy nhất bằng `.Include()` và `.ThenInclude()`.
- **Lazy Loading:** Không load dữ liệu liên quan ngay, chỉ khi chạm vào navigation property mới âm thầm bắn thêm câu query SQL xuống DB.
- **Lỗi N + 1 Query:**
  - Ví dụ: Kéo 100 cuốn sách (`1` query). Duyệt vòng lặp in tên tác giả, mỗi cuốn sách EF lại bắn thêm `1` query tìm tác giả -> Tổng cộng tốn **1 + 100 = 101 câu query xuống database!** Làm sập hệ thống.
  - **Khắc phục:** Luôn dùng **Eager Loading** với `.Include(b => b.Author)`.

---

## PHẦN 11: SQL THỰC CHIẾN

### 11.1. `INNER JOIN` vs `LEFT JOIN`
- `INNER JOIN`: Chỉ trả về các dòng có dữ liệu khớp điều kiện ở **CẢ HAI bảng**.
- `LEFT JOIN`: Giữ lại **toàn bộ dòng ở bảng bên trái**. Những dòng bên phải không khớp sẽ được điền giá trị `NULL`.

### 11.2. Bản chất giá trị `NULL` trong CSDL
- `NULL` không phải số 0, cũng không phải chuỗi rỗng `''`. Nó đại diện cho trạng thái **"Không xác định" (Unknown)**.
- **Quy tắc 3 giá trị logic:** Trong SQL, bất kỳ phép so sánh nào với NULL (ví dụ: `Age = NULL`) đều trả về kết quả `UNKNOWN` (coi như False). Do đó bắt buộc phải dùng toán tử **`IS NULL`** hoặc **`IS NOT NULL`**.

### 11.3. Kỹ thuật lọc với `WHERE`, ưu tiên `AND` / `OR`
- Bài toán: *"Tìm học sinh Nam quê Hà Nội và Nữ quê Hải Dương"*.
- **Viết đúng:**
  ```sql
  SELECT * FROM Students
  WHERE (Gender = 'Nam' AND Hometown = N'Hà Nội')
     OR (Gender = N'Nữ' AND Hometown = N'Hải Dương');
  ```
  > *Bắt buộc phải có cặp ngoặc tròn `()` vì toán tử `AND` có độ ưu tiên thực thi cao hơn `OR`!*

### 11.4. `GROUP BY`, `HAVING` vs `WHERE`
- `GROUP BY`: Gom nhóm các dòng có cùng giá trị để áp dụng các hàm tổng hợp (`SUM`, `COUNT`, `AVG`, `MAX`, `MIN`).
- `WHERE` vs `HAVING`:
  - `WHERE`: Lọc từng dòng dữ liệu **trước khi** gom nhóm (không dùng được hàm tổng hợp trong `WHERE`).
  - `HAVING`: Lọc dữ liệu trên các nhóm **sau khi** đã thực hiện `GROUP BY` (dùng được hàm tổng hợp: `HAVING COUNT(*) > 5`).

### 11.5. Cơ chế sắp xếp `ORDER BY` đơn và đa cột
- Mặc định là tăng dần (`ASC`). Giảm dần là `DESC`.
- `ORDER BY Cột1 ASC, Cột2 DESC`: Hệ thống sắp theo Cột 1 trước. Chỉ khi các dòng có Cột 1 giống hệt nhau, hệ thống mới xét tiếp Cột 2 để phân định thứ tự.

---

## PHẦN 12: THUẬT TOÁN & TƯ DUY TỐI ƯU (BIG O)

### 12.1. Bài toán: Tìm số lớn thứ 3 trong mảng (Tối ưu $O(n)$ không sort)
- **Cách thường:** Sắp xếp mảng giảm dần rồi lấy phần tử thứ 3 -> Tốn độ phức tạp $O(n \log n)$.
- **Cách tối ưu 1 vòng lặp duy nhất – Độ phức tạp $O(n)$, bộ nhớ $O(1)$:**
  ```csharp
  public static int? FindThirdLargest(int[] arr)
  {
      if (arr == null || arr.Length < 3) return null;

      long first = long.MinValue;
      long second = long.MinValue;
      long third = long.MinValue;

      foreach (int num in arr)
      {
          // Bỏ qua nếu phần tử đã trùng với một trong các số lớn nhất
          if (num == first || num == second || num == third) continue;

          if (num > first)
          {
              third = second;
              second = first;
              first = num;
          }
          else if (num > second)
          {
              third = second;
              second = num;
          }
          else if (num > third)
          {
              third = num;
          }
      }

      return third == long.MinValue ? null : (int?)third;
  }
  ```

### 12.2. Khái niệm Big O và phân biệt $O(1)$, $O(n)$, $O(n^2)$
- **Big O:** Ký hiệu đo lường tốc độ tăng trưởng thời gian thực thi hoặc bộ nhớ tiêu tốn khi kích thước dữ liệu đầu vào ($n$) tăng dần đến vô cùng.
- **$O(1)$ (Constant Time):** Nhanh nhất, không phụ thuộc $n$ (ví dụ: truy cập mảng qua index `arr[5]`, tra cứu key trong `Dictionary`).
- **$O(n)$ (Linear Time):** Tăng tỉ lệ thuận tuyến tính với $n$ (1 vòng lặp duyệt qua $n$ phần tử).
- **$O(n^2)$ (Quadratic Time):** Tăng theo bình phương (2 vòng lặp lồng nhau duyệt qua $n$, ví dụ thuật toán Bubble Sort). Khi $n = 10.000$, số phép tính lên tới 100.000.000, dễ gây treo hệ thống.

---
*Tài liệu cẩm nang phỏng vấn hoàn chỉnh nhất – Tích hợp so sánh đối sánh chuyên sâu C# vs Java.*
