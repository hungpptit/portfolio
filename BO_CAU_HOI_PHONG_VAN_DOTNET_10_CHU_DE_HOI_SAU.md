# BỘ ÔN LUYỆN PHỎNG VẤN .NET FRESHER: 10 CHỦ ĐỀ HỎI SÂU
### *(Chuyển hóa 238 câu hỏi thực tế thành 10 chủ đề cốt lõi theo mô hình What ➔ Why ➔ How ➔ Code / Example)*

---

> **LỜI KHUYÊN PHỎNG VẤN:**
> Người phỏng vấn không chấm điểm bạn dựa trên việc "học vẹt định nghĩa". Họ đánh giá cao việc bạn hiểu **Bản chất (Why)**, nắm được **Cơ chế vận hành bên dưới (How)**, và biết cách **Áp dụng vào code thực tế (Example)**.
> Bộ tài liệu này đã gộp toàn bộ các câu hỏi trùng lặp, tổ chức thành 10 nhóm câu hỏi đào sâu giúp bạn tự tin trả lời bất kỳ câu hỏi bẫy nào.

---

## MỤC LỤC 10 CHỦ ĐỀ
1. [Chủ đề 1: C# Cốt lõi & Quản lý tài nguyên (`using`, `IDisposable`, Namespace, `const` vs `readonly`)](#chủ-đề-1-c-cốt-lõi--quản-lý-tài-nguyên)
2. [Chủ đề 2: Bộ nhớ C# – Stack, Heap, Value Type, Reference Type & Garbage Collector](#chủ-đề-2-bộ-nhớ-c--stack-heap-value-type-reference-type--gc)
3. [Chủ đề 3: Từ khóa `static` và Bản chất lưu trữ](#chủ-đề-3-từ-khóa-static-và-bản-chất-lưu-trữ)
4. [Chủ đề 4: Nạp chồng (Overloading) vs Ghi đè (Overriding) & Quan hệ kế thừa](#chủ-đề-4-nạp-chồng-overloading-vs-ghi-đè-overriding)
5. [Chủ đề 5: Dependency Injection (DI) & Inversion of Control (IoC)](#chủ-đề-5-dependency-injection-di--inversion-of-control)
6. [Chủ đề 6: ASP.NET Core Request Pipeline & Middleware](#chủ-đề-6-aspnet-core-request-pipeline--middleware)
7. [Chủ đề 7: Routing, Controller, Model Binding & Action Filter](#chủ-đề-7-routing-controller-model-binding--action-filter)
8. [Chủ đề 8: LINQ & Truy vấn Dữ liệu (ADO.NET vs EF Core)](#chủ-đề-8-linq--truy-vấn-dữ-liệu-adonet-vs-ef-core)
9. [Chủ đề 9: Entity Framework Core Toàn diện (Code First, Migration, Relationship, Transaction & Loading)](#chủ-đề-9-entity-framework-core-toàn-diện)
10. [Chủ đề 10: SQL Thực chiến & Thuật toán Tối ưu](#chủ-đề-10-sql-thực-chiến--thuật-toán-tối-ưu)

---

## CHỦ ĐỀ 1: C# CỐT LÕI & QUẢN LÝ TÀI NGUYÊN
*(Gộp các câu 1–11 và 24–35)*

### 1. Câu lệnh `using` và giao diện `IDisposable`
#### **What (Là gì? Có những tác dụng gì?)**
Từ khóa `using` trong C# có 3 vai trò chính:
1. **`using` directive (ở đầu file):** Nhập (import) một namespace để sử dụng các class trong namespace đó mà không cần gõ namespace đầy đủ (Fully Qualified Name). Có thể dùng để alias kiểu: `using ProjectUser = MyCompany.Project.User;`.
2. **`using static`:** Nhập trực tiếp các thành viên static của một lớp (ví dụ `using static System.Math;` để gọi `Sqrt(16)`).
3. **`using` statement (kết hợp với `IDisposable`):** Một khối lệnh kiểm soát vòng đời tài nguyên, đảm bảo phương thức `Dispose()` luôn được gọi tự động ngay khi ra khỏi scope.

#### **Why & How (Vì sao cần `using` và nó hoạt động như thế nào?)**
- **Tại sao cần:** Bộ thu gom rác (Garbage Collector - GC) của .NET chỉ tự động dọn dẹp bộ nhớ được quản lý (Managed Memory trên Heap). GC **không biết** khi nào cần giải phóng các **tài nguyên không được quản lý (Unmanaged Resources)** như: File Handle, Database Connection, Network Socket, Bitmap... Nếu không giải phóng kịp thời, ứng dụng sẽ bị rò rỉ tài nguyên (Resource Leak).
- **Cơ chế thực sự:** Bản chất khối `using` là một cú pháp viết tắt (Syntactic Sugar) của khối **`try ... finally`**:
  ```csharp
  // Cách viết using:
  using (var stream = new FileStream("data.txt", FileMode.Open))
  {
      // Thao tác với file
  }

  // Trình biên dịch C# thực chất dịch mã IL ra tương đương:
  FileStream stream = new FileStream("data.txt", FileMode.Open);
  try
  {
      // Thao tác với file
  }
  finally
  {
      if (stream != null)
          ((IDisposable)stream).Dispose(); // Luôn chạy dù có Exception hay không!
  }
  ```
- **Từ C# 8.0 (Using declaration):** `using var stream = new FileStream(...);` sẽ tự động dispose khi hàm kết thúc.

---

### 2. Namespace: Bản chất & Khác biệt với Thư mục vật lý (Folder)
#### **What & Why (Namespace là gì? Vì sao cần?)**
- **Namespace (Không gian tên):** Là cơ chế tổ chức logic mã nguồn trong C# để phân nhóm các lớp, giao diện, enum liên quan với nhau.
- **Mục đích:**
  1. Tránh **xung đột tên (Name Collision)** giữa các thư viện khác nhau (ví dụ: `System.Timers.Timer` vs `System.Threading.Timer`).
  2. Tạo cấu trúc phân cấp module rõ ràng, dễ bảo trì.

#### **How (Namespace khác Folder ở điểm nào?)**
- **Folder:** Là cấu trúc **vật lý** lưu trữ file trên ổ đĩa của hệ điều hành.
- **Namespace:** Là cấu trúc **logic** trong mã nguồn và metadata của Assembly (.dll/.exe).
- **Điểm mấu chốt interviewer muốn nghe:**
  - Mặc dù Visual Studio mặc định đặt namespace theo cấu trúc thư mục, nhưng **C# hoàn toàn không bắt buộc namespace phải khớp với thư mục**.
  - Bạn có thể đặt 10 file ở 10 thư mục vật lý khác nhau nhưng cùng khai báo `namespace MyProject.Core`, CLR vẫn coi chúng thuộc cùng một không gian tên.
  - Một file vật lý thậm chí có thể chứa nhiều namespace khác nhau.

---

### 3. Hằng số `const` vs Biến chỉ đọc `readonly`
#### **So sánh chi tiết (What - When - Where):**
| Tiêu chí | `const` | `readonly` |
| :--- | :--- | :--- |
| **Thời điểm khởi tạo** | **Compile-time** (Lúc biên dịch code). | **Runtime** (Lúc chương trình chạy). |
| **Giá trị** | Phải là hằng số tính toán được ngay lúc biên dịch (số, bool, string). | Có thể là kết quả tính toán động, đọc từ file, hoặc đối tượng `new Object()`. |
| **Nơi gán giá trị** | Chỉ được gán ngay tại dòng khai báo. | Gán tại dòng khai báo HOẶC **bên trong Constructor** của class. |
| **Thuộc về ai** | Ngầm định là `static`, thuộc về **Class**. | Mặc định thuộc về từng **Instance** (trừ khi khai báo `static readonly`). |
| **Giá trị giữa các object**| Luôn giống hệt nhau trên mọi object. | **Có thể khác nhau** giữa các object (vì truyền qua Constructor khác nhau). |
| **Sau khi gán có đổi được không?** | Không thể thay đổi. | Không thể thay đổi sau khi Constructor chạy xong. |

#### **Example & Cạm bẫy Versioning (Why interviewers ask):**
```csharp
public class AppConfig
{
    public const double PI = 3.14159; // Compile-time
    public readonly DateTime StartTime; // Runtime: mỗi instance có thời gian tạo khác nhau
    public readonly string ConnectionString;

    public AppConfig(string connStr)
    {
        StartTime = DateTime.UtcNow; // Hợp lệ trong constructor
        ConnectionString = connStr;
    }
}
```
> **Cạm bẫy Versioning (Tại sao nên ưu tiên `readonly` cho cấu hình Public?):**
> Khi bạn dùng `const`, giá trị của nó sẽ được **baking (in cứng giá trị trực tiếp)** vào mã IL của tất cả các project tham chiếu tới nó. Nếu bạn thay đổi giá trị `const` trong Library A mà không re-compile Project B, Project B vẫn dùng giá trị cũ! Với `readonly`, giá trị được đọc động lúc runtime nên không bị lỗi này.

---

## CHỦ ĐỀ 2: BỘ NHỚ C# – STACK, HEAP, VALUE TYPE, REFERENCE TYPE & GC
*(Gộp các câu 36–55)*

### 1. Phân biệt Value Type và Reference Type
- **Value Type:** Lưu trữ trực tiếp **dữ liệu thực tế**. Phép gán sao chép toàn bộ giá trị. Gồm: `int`, `double`, `bool`, `char`, `struct`, `enum`.
- **Reference Type:** Biến chỉ lưu **địa chỉ con trỏ tham chiếu** (4 hoặc 8 bytes). Dữ liệu đối tượng thực sự nằm trên Managed Heap. Gồm: `class`, `interface`, `delegate`, `string`, mảng `array`.

---

### 2. Stack và Heap: Bản chất & Cơ chế cấp phát
| Đặc tính | Stack Memory | Managed Heap Memory |
| :--- | :--- | :--- |
| **Bản chất** | Ngăn xếp LIFO (Last In First Out) gắn liền với từng Thread. | Vùng nhớ dùng chung toàn bộ ứng dụng do GC quản lý. |
| **Tốc độ** | Cực nhanh (chỉ cần dịch chuyển con trỏ Stack Pointer). | Chậm hơn (cần tìm block nhớ trống, cấp phát và quản lý metadata). |
| **Kích thước** | Cố định, tương đối nhỏ (~1MB mỗi thread, vượt quá gây `StackOverflowException`). | Động, có thể mở rộng theo dung lượng RAM hệ thống. |
| **Giải phóng** | Tự động pop ra khỏi stack ngay khi hàm kết thúc frame thực thi. | Được thu hồi tự động bởi **Garbage Collector (GC)** khi không còn root reference nào trỏ tới. |

---

### 3. Câu hỏi bẫy: "Value Type có LUÔN LUÔN nằm trên Stack không?"
- **Câu trả lời đúng chuẩn Senior:** **KHÔNG!** Vị trí của Value Type phụ thuộc vào **ngữ cảnh nơi nó được khai báo**:
  1. Nếu là biến cục bộ (local variable) trong một hàm: **Nằm trên Stack**.
  2. Nếu là **thuộc tính/field bên trong một Class** (Reference Type): Nó sẽ **nằm trên Heap** cùng với instance của class đó!
  3. Nếu bị **Boxing** (ép kiểu từ Value Type sang `object` hoặc `interface`): Giá trị được copy lên Heap.
  4. Nằm trong **mảng (Array)**: Vì mảng là Reference Type, các phần tử dù là value type (`int[]`) cũng nằm trọn trên Heap.
  5. Nằm trong biến được bọc bởi **Lambda / Async State Machine**: Được compiler chuyển thành field của class sinh ngầm, do đó nằm trên Heap.

---

### 4. Quá trình tạo một đối tượng: `Person p = new Person();`
1. Khởi tạo biến tham chiếu `p` (nằm trên Stack, kích thước 4 bytes/8 bytes).
2. Toán tử `new` tính toán kích thước của đối tượng `Person` (gồm các fields + 2 trường metadata bắt buộc của CLR: *Type Object Pointer* và *Sync Block Index*).
3. CLR cấp phát vùng nhớ liên tục trên Heap và gán các trường về giá trị mặc định (`0`, `false`, `null`).
4. Gọi Constructor của `Person` để khởi tạo dữ liệu.
5. Trả về địa chỉ vùng nhớ vừa cấp phát trên Heap và gán vào biến `p` trên Stack.

---

### 5. Vòng đời Object & Garbage Collector (GC)
- Khi biến `p` ra khỏi scope hoặc bị gán `p = null`, đối tượng trên Heap không còn bất kỳ **GC Root** nào tham chiếu tới. Nó trở thành **Unreachable Object (Đối tượng rác)**.
- **Garbage Collector hoạt động theo 3 thế hệ (Generations):**
  - **Gen 0:** Chứa các đối tượng ngắn ngày mới tạo. GC quét Gen 0 rất nhanh và thường xuyên.
  - **Gen 1:** Đóng vai trò là vùng đệm giữa đối tượng ngắn ngày và dài ngày.
  - **Gen 2:** Chứa các đối tượng sống lâu (Static objects, Singleton, Connection pool). Rất tốn chi phí khi phải thực hiện Full GC trên Gen 2.

---

## CHỦ ĐỀ 3: TỪ KHÓA `STATIC` VÀ BẢN CHẤT LƯU TRỮ
*(Gộp các câu 12–23)*

### 1. Tại sao gọi là "Static" và nó thuộc về ai?
- **Thuộc về Class (Type), không thuộc về Instance (Object):**
  - Thành viên thường (Instance): Mỗi khi gọi `new`, một bản copy dữ liệu mới được sinh ra cho đối tượng đó trên Heap.
  - Thành viên tĩnh (`static`): Chỉ tồn tại **duy nhất một bản sao trong bộ nhớ** trong suốt vòng đời của Application Domain, được lưu trữ tại vùng nhớ Type Metadata (High Frequency Heap).
- **Tại sao gọi là Static?** Bắt nguồn từ nghĩa "tĩnh / cố định" – địa chỉ vùng nhớ của nó được xác định một lần khi nạp Type và không di dời hay gắn với bất kỳ địa chỉ instance cụ thể nào.

---

### 2. Các câu hỏi đào sâu về Static Method
- **Vì sao gọi static method không cần tạo object?**
  - Vì static method được gắn trực tiếp với Type Metadata. Lời gọi hàm trong mã IL sử dụng lệnh `call` trực tiếp đến địa chỉ hàm của Type, không cần con trỏ instance.
- **Có thể dùng từ khóa `this` trong static method không? Tại sao?**
  - **Tuyệt đối KHÔNG.** Từ khóa `this` đại diện cho con trỏ tham chiếu đến *chính instance đang gọi hàm*. Static method hoạt động độc lập ở cấp độ Class, không có instance ngữ cảnh cụ thể nào, nên `this` không tồn tại.
- **Có thể khởi tạo object rồi gọi static method qua object đó không? (Ví dụ: `obj.MyStaticMethod()`)**
  - Trong **C# là KHÔNG ĐƯỢC PHÉP** (Lỗi biên dịch: *Static member cannot be accessed with an instance reference*). Phải gọi qua `ClassName.MyStaticMethod()`.
  - *(So sánh với Java)*: Trong Java, cú pháp `obj.staticMethod()` được chấp nhận nhưng bị coi là bad practice. C# cố tình cấm để tránh gây nhầm lẫn cho lập trình viên rằng phương thức đó có tính đa hình (polymorphism).
- **Nếu tạo 10 object của một class có static method thì có bao nhiêu method tồn tại?**
  - Vẫn **chỉ có duy nhất 1 static method** trong bộ nhớ.

---

## CHỦ ĐỀ 4: NẠP CHỒNG (OVERLOADING) VS GHI ĐÈ (OVERRIDING)
*(Gộp các câu 56–65)*

### 1. Method Overloading (Đa hình lúc biên dịch - Compile-time)
- **Xảy ra khi:** Trong cùng một phạm vi, có nhiều phương thức **cùng tên nhưng khác nhau về Signature**.
- **Quy tắc bắt buộc khác nhau:**
  - Khác nhau về **Số lượng tham số**, **Kiểu dữ liệu tham số**, hoặc **Thứ tự kiểu dữ liệu**.
- **Bẫy 1: "Chỉ đổi kiểu trả về (Return Type) có được coi là Overload không?"**
  - **KHÔNG!** Trình biên dịch không thể phân biệt hàm nào được gọi khi người dùng gọi hàm mà không hứng giá trị trả về:
    ```csharp
    int DoSomething() { return 1; }
    void DoSomething() { } // LỖI BIÊN DỊCH: Duplicate signature!
    ```
- **Bẫy 2: "Hai class khác nhau (cha - con) có tạo ra Overloading không?"**
  - Về nguyên tắc, nếu class con định nghĩa một method cùng tên nhưng khác tham số với class cha (và method cha là `public`/`protected`), C# compiler vẫn xem xét đưa cả hai vào tập ứng viên tìm kiếm (Overload Resolution).
  - Tuy nhiên, nếu method ở class cha là **`private`**, class con hoàn toàn không nhìn thấy method đó, do đó **không có quan hệ overloading** nào ở đây – nó chỉ là một method mới độc lập của class con.

---

### 2. So sánh toàn diện Overloading vs Overriding
| Tiêu chí | Method Overloading (Nạp chồng) | Method Overriding (Ghi đè) |
| :--- | :--- | :--- |
| **Loại đa hình** | Compile-time (Đa hình tĩnh). | Runtime (Đa hình động). |
| **Phạm vi** | Thường trong cùng 1 class. | Giữa Class Cha và Class Con (Kế thừa). |
| **Tham số** | **Bắt buộc phải khác nhau**. | **Bắt buộc phải giống hệt nhau**. |
| **Kiểu trả về** | Có thể giống hoặc khác. | Phải giống nhau. |
| **Từ khóa** | Không cần từ khóa. | Cần `virtual`/`abstract` ở cha, `override` ở con. |
| **Cơ chế gọi** | Compiler xác định địa chỉ hàm ngay lúc build. | Dùng bảng con trỏ hàm ảo **V-Table** để phân giải lúc chạy. |

---

## CHỦ ĐỀ 5: DEPENDENCY INJECTION (DI) & INVERSION OF CONTROL
*(Gộp các câu 66–80)*

### 1. Bản chất: IoC, DIP và DI là gì?
- **Inversion of Control (IoC - Đảo ngược điều khiển):** Là một nguyên lý kiến trúc, trong đó luồng điều khiển của ứng dụng bị đảo ngược. Thay vì code của bạn tự chủ động tạo đối tượng (`new`) và gọi thư viện, một Framework bên ngoài sẽ kiểm soát vòng đời và gọi code của bạn.
- **Dependency Inversion Principle (DIP - Chữ D trong SOLID):**
  1. *Module cấp cao* (Business Logic, Controller) không nên phụ thuộc trực tiếp vào *Module cấp thấp* (Database, File, Email Service). Cả hai nên phụ thuộc vào **Abstraction (Interface)**.
  2. *Abstraction* không nên phụ thuộc vào chi tiết, chi tiết phải phụ thuộc vào abstraction.
- **Dependency Injection (DI):** Là một kỹ thuật thiết kế hiện thực hóa IoC và DIP, trong đó các phụ thuộc (Dependencies) được "tiêm" (inject) vào đối tượng từ bên ngoài (thường qua Constructor) thay vì đối tượng tự tạo ra chúng.

```csharp
// XẤU (High coupling): OrderService tự new SqlDatabase
public class OrderService {
    private SqlDatabase _db = new SqlDatabase(); 
}

// TỐT (Loose coupling qua DI):
public class OrderService {
    private readonly IDatabase _db;
    public OrderService(IDatabase db) => _db = db; // Inject qua Constructor
}
```

---

### 2. Các câu hỏi đào sâu về DI trong ASP.NET Core
- **Ai tạo object khi dùng DI?**
  - **IoC Container tích hợp sẵn (`IServiceProvider`)** của ASP.NET Core sẽ tự động quét Constructor, phân giải các phụ thuộc và dùng Reflection để khởi tạo object.
- **Cấu hình ở đâu?** Trong file `Program.cs` thông qua `builder.Services`.
- **Class có bắt buộc phải kế thừa Interface mới DI được không?**
  - **Không bắt buộc.** Bạn hoàn toàn có thể đăng ký một Concrete Class: `builder.Services.AddScoped<MyService>();`. Tuy nhiên, dùng Interface mang lại tính trừu tượng cao, dễ thay thế cài đặt và dễ viết Unit Test (Mocking).

---

### 3. Phân biệt 3 Service Lifetimes trong ASP.NET Core
| Lifetime | Phương thức đăng ký | Vòng đời hoạt động | Trường hợp sử dụng tiêu biểu |
| :--- | :--- | :--- | :--- |
| **Transient** | `AddTransient<T>` | Tạo mới một instance **mỗi khi có yêu cầu (per request inject)**. | Các service nhẹ, phi trạng thái (Stateless), bộ chuyển đổi dữ liệu. |
| **Scoped** | `AddScoped<T>` | Tạo **duy nhất 1 instance cho mỗi HTTP Request**. Mọi class trong cùng request chia sẻ chung instance này. | **`DbContext` của EF Core**, các Service xử lý nghiệp vụ đơn hàng, người dùng. |
| **Singleton** | `AddSingleton<T>` | Tạo **duy nhất 1 instance trong suốt vòng đời ứng dụng**. | Bộ nhớ đệm (In-memory Cache), Logging, cấu hình ứng dụng. |

> **Cạm bẫy "Captive Dependency" (Câu hỏi mở rộng):**
> Điều gì xảy ra nếu inject một `Scoped Service` (như `DbContext`) vào một `Singleton Service`?
> -> **Nguy hiểm!** Singleton sẽ giữ chặt tham chiếu tới Scoped instance đó mãi mãi. `DbContext` sẽ không được giải phóng theo HTTP request, dẫn đến rò rỉ bộ nhớ và lỗi xung đột đa luồng (*Concurrency Exception*).

---

## CHỦ ĐỀ 6: ASP.NET CORE REQUEST PIPELINE & MIDDLEWARE
*(Gộp các câu 81–99)*

### 1. Middleware và Pipeline hoạt động như thế nào?
- **Middleware:** Là một khối xử lý phần mềm nhỏ gọn nằm trên đường ống xử lý HTTP Request.
- **Request Pipeline:** Tập hợp các middleware liên kết với nhau theo mô hình **Búp bê Nga (Russian Doll)**.
- Mỗi Middleware nhận vào một `HttpContext` và một delegate `RequestDelegate next`:
  ```csharp
  app.Use(async (context, next) => {
      // 1. Xử lý Logic TRƯỚC khi request đi tiếp (Chiều đi vào)
      Console.WriteLine("Incoming Request");

      await next(); // Chuyển quyền cho Middleware tiếp theo

      // 2. Xử lý Logic SAU KHI các middleware sau đã hoàn tất (Chiều đi ra)
      Console.WriteLine("Outgoing Response");
  });
  ```
- **Chặn request (Short-circuiting):** Nếu một middleware không gọi `await next()`, request sẽ bị chặn đứng tại đó và trả response quay ngược lại ngay lập tức (Ví dụ: Authentication thất bại trả về `401 Unauthorized`).

---

### 2. Thứ tự Middleware: Tại sao cực kỳ quan trọng?
Nếu thay đổi sai thứ tự middleware, ứng dụng có thể gặp lỗi bảo mật nghiêm trọng hoặc chạy sai chức năng.
- **Ví dụ kinh điển:**
  ```csharp
  app.UseAuthorization();  // SAI: Đứng trước UseAuthentication!
  app.UseAuthentication();
  ```
  - `Authentication`: Xác minh danh tính (*Bạn là ai?* – đọc JWT token, gán `User.Identity`).
  - `Authorization`: Kiểm tra quyền hạn (*Bạn được làm gì?*).
  - Nếu `UseAuthorization` chạy trước, hệ thống chưa biết người dùng là ai, `User.Identity` bị rỗng -> Mọi request đều bị từ chối `403 Forbidden` hoặc `401 Unauthorized` dù token hợp lệ!

---

### 3. Global Exception Handling Middleware vs Try-Catch cục bộ
- **Global Exception Middleware:** Bắt mọi ngoại lệ chưa được xử lý (Unhandled Exceptions) trên toàn bộ ứng dụng tại một điểm duy nhất, log lỗi và trả về phản hồi chuẩn hóa (như RFC 7807 Problem Details: HTTP 500 kèm mã lỗi thân thiện) mà không làm lộ StackTrace nhạy cảm ra ngoài client.
- **Khi nào dùng try-catch cục bộ?** Chỉ dùng khi ở tầng nghiệp vụ đó, bạn **có phương án xử lý phục hồi cụ thể** cho ngoại lệ đó (ví dụ: thử kết nối lại, đọc file dự phòng). Nếu chỉ catch rồi throw lại thì nên để Global Middleware xử lý.

---

## CHỦ ĐỀ 7: ROUTING, CONTROLLER, MODEL BINDING & ACTION FILTER
*(Gộp các câu 100–122)*

### 1. Luồng đi của một HTTP Request trong ASP.NET Core
```
[Client] 
   ⬇ (HTTP Request)
[Kestrel Web Server] 
   ⬇
[Middleware Pipeline] (Exception ➔ Https ➔ StaticFiles ➔ Routing ➔ Auth)
   ⬇
[Endpoint Routing] (Xác định Controller & Action qua Route pattern)
   ⬇
[Action Filters (OnActionExecuting)]
   ⬇
[Model Binding & Model Validation]
   ⬇
[Action Method Execution] (Chạy Business Logic, gọi DB)
   ⬇
[Action Filters (OnActionExecuted)]
   ⬇
[Result Execution] (Serialize JSON, Render View)
   ⬇ (HTTP Response)
[Client]
```

---

### 2. Action Filter vs Middleware
| Tiêu chí | Middleware | Action Filter |
| :--- | :--- | :--- |
| **Phạm vi** | Toàn bộ ứng dụng (Application-level). | Nằm trong phạm vi MVC/Web API (Action-level). |
| **Ngữ cảnh (Context)** | Chỉ biết về `HttpContext` (Request, Response, Headers thô). | Biết rõ **Controller nào, Action nào, tham số truyền vào là gì**, kết quả trả về (`ActionExecutingContext`). |
| **Khi nào sử dụng?** | Các tác vụ chung hệ thống: Ghi log thời gian request, CORS, nén file, xử lý token. | Các tác vụ gắn liền với Action: Validate Model tự động, kiểm tra quyền truy cập riêng cho từng Action, audit log dữ liệu vào ra. |

---

### 3. Model Binding: Cơ chế & Nguồn dữ liệu
- **Model Binding:** Là tiến trình tự động của ASP.NET Core ánh xạ các giá trị từ HTTP Request (dạng chuỗi/JSON thô) vào các tham số hoặc đối tượng C# tương ứng của Action Method.
- **Nguồn dữ liệu (Attributes):**
  - `[FromRoute]`: Lấy từ Route template (ví dụ: `/api/products/{id}`).
  - `[FromQuery]`: Lấy từ Query string trên URL (ví dụ: `/api/products?page=2&size=10`).
  - `[FromBody]`: Đọc từ Request Body (JSON/XML). Thường dùng bộ tuần tự hóa `System.Text.Json` để deserialize vào đối tượng C#.
  - `[FromHeader]`: Lấy từ HTTP Headers (ví dụ: `ApiKey`).
  - `[FromForm]`: Lấy từ dữ liệu Form gửi lên kèm file upload (`IFormFile`).
- **Khớp tên thuộc tính:** Mặc định không phân biệt hoa thường (Case-insensitive) và ánh xạ theo quy tắc camelCase của JSON sang PascalCase của C# Properties.

---

## CHỦ ĐỀ 8: LINQ & TRUY VẤN DỮ LIỆU (ADO.NET VS EF CORE)
*(Gộp các câu 123–139)*

### 1. ADO.NET vs Entity Framework Core
- **ADO.NET:** Thư viện cấp thấp. Lập trình viên tự viết câu SQL thuần, tự mở connection, tự map từng dòng `SqlDataReader` vào object.
  - *Ưu:* Tốc độ cực nhanh, kiểm soát tuyệt đối câu lệnh SQL.
  - *Nhược:* Code dài dòng, dễ lỗi gõ sai tên cột, bảo trì cực khổ.
- **EF Core (ORM):** Trừu tượng hóa việc truy cập dữ liệu. Cho phép truy vấn bằng LINQ, tự động theo dõi thay đổi (Change Tracking), tự sinh câu SQL tương ứng.

---

### 2. LINQ: Cơ chế Thực thi Hoãn lại (Deferred Execution)
- LINQ queries **chưa thực thi ngay** khi được khai báo.
- Câu query chỉ thực sự được gửi tới DB hoặc chạy vòng lặp khi bạn **duyệt qua nó** (ví dụ dùng `foreach`) hoặc gọi các toán tử gom cụm: `.ToList()`, `.ToArray()`, `.Count()`, `.FirstOrDefault()`.
- **`IEnumerable<T>` vs `IQueryable<T>`:**
  - `IEnumerable<T>` (LINQ to Objects): Dữ liệu đã được load về RAM, các phép lọc `Where` thực hiện bằng code C# trên bộ nhớ.
  - `IQueryable<T>` (LINQ to Entities): Giữ cây biểu thức (Expression Tree). Mệnh đề `Where`, `OrderBy` được dịch trực tiếp thành câu lệnh SQL chạy trên Database Server, chỉ tải về RAM những bản ghi thỏa mãn.

---

### 3. Phân biệt nhóm hàm tìm kiếm phần tử:
| Phương thức | Khi tìm thấy 1 phần tử | Khi không tìm thấy | Khi tìm thấy > 1 phần tử |
| :--- | :--- | :--- | :--- |
| **`First()`** | Trả về phần tử đầu tiên. | **Ném ngoại lệ** (`InvalidOperationException`). | Trả về phần tử đầu tiên. |
| **`FirstOrDefault()`**| Trả về phần tử đầu tiên. | **Trả về `null`** (hoặc `default(T)`). | Trả về phần tử đầu tiên. |
| **`Single()`** | Trả về phần tử duy nhất. | **Ném ngoại lệ**. | **Ném ngoại lệ** (Không được phép > 1). |
| **`SingleOrDefault()`**| Trả về phần tử duy nhất. | **Trả về `null`**. | **Ném ngoại lệ**. |

---

## CHỦ ĐỀ 9: ENTITY FRAMEWORK CORE TOÀN DIỆN
*(Gộp các câu 140–212)*

### 1. `DbContext`, `DbSet` và Vòng đời kết nối
- **`DbContext`:** Đại diện cho một Session làm việc với CSDL. Quản lý Connection, cấu hình Model, Change Tracker và Unit of Work (`SaveChangesAsync`).
- **`DbSet<T>`:** Đại diện cho một bảng dữ liệu trong CSDL, cho phép thao tác CRUD trên thực thể `T`.

---

### 2. Quy trình Code First & Migration
1. **Viết C# Entity:** Tạo các class `Student`, `Classroom` với các thuộc tính và quan hệ.
2. **Khai báo trong DbContext:** Tạo thuộc tính `public DbSet<Student> Students { get; set; }`.
3. **Tạo Migration (`dotnet ef migrations add InitialCreate`):**
   - EF Core so sánh cấu hình Entity hiện tại với Snapshot trước đó, sinh ra một file C# chứa hai phương thức `Up()` (áp dụng thay đổi) và `Down()` (rollback nếu cần).
4. **Cập nhật Database (`dotnet ef database update`):**
   - EF Core đọc file Migration, chuyển thành các câu lệnh SQL DDL (`CREATE TABLE`, `ALTER TABLE`) và thực thi trên Database, đồng thời ghi lại phiên bản migration vào bảng quản lý `__EFMigrationsHistory`.

---

### 3. Quan hệ dữ liệu: Tại sao Many-to-Many cần Bảng trung gian?
- Trong chuẩn hóa dữ liệu quan hệ (1NF), mỗi ô dữ liệu chỉ chứa một giá trị nguyên tố. Ta không thể lưu một chuỗi các `CourseId` vào một dòng của bảng `Student`.
- Do đó, quan hệ nhiều-nhiều bắt buộc phải phân rã thành **hai quan hệ 1-N** thông qua một **Bảng trung gian (Junction Table)** chứa cặp khóa ngoại trỏ về 2 bảng chính.

---

### 4. Database Transaction: Bản chất, Rollback & Commit
- **Transaction (Giao dịch):** Đảm bảo tính toàn vẹn dữ liệu tuân theo chuẩn **ACID** (Atomicity, Consistency, Isolation, Durability).
- **Nguyên tắc "Tất cả hoặc không gì cả":** Nếu một thao tác trong chuỗi bị lỗi, toàn bộ các thao tác trước đó phải được **Rollback** (hoàn tác) về trạng thái ban đầu; nếu thành công hết thì mới **Commit** (lưu vĩnh viễn).
- **Code mẫu chuẩn trong EF Core:**
  ```csharp
  using var transaction = await _context.Database.BeginTransactionAsync();
  try
  {
      _context.Accounts.Update(fromAccount);
      _context.Accounts.Update(toAccount);
      await _context.SaveChangesAsync();

      await transaction.CommitAsync(); // Xác nhận lưu thành công
  }
  catch (Exception)
  {
      await transaction.RollbackAsync(); // Lỗi -> Hoàn tác mọi thay đổi!
      throw;
  }
  ```

---

### 5. Lazy Loading vs Eager Loading & Vấn đề N+1 Query
#### **What & How:**
- **Eager Loading:** Dùng `.Include(b => b.Author)` để nạp luôn dữ liệu liên kết ngay trong câu query đầu tiên (thông qua `LEFT JOIN`).
- **Lazy Loading:** Không load dữ liệu bảng con ban đầu. Chỉ khi nào gọi `book.Author`, EF mới âm thầm gửi thêm câu query SQL xuống DB.

#### **Vấn đề N + 1 Query (Kinh điển trong phỏng vấn):**
- **Kịch bản:** Giả sử bạn có 100 cuốn sách (`Books`). Bạn muốn in ra Tên sách kèm Tên tác giả.
- **Nếu dùng Lazy Loading trong vòng lặp:**
  - 1 câu query ban đầu: `SELECT * FROM Books` (Lấy ra 100 cuốn).
  - Vòng lặp chạy 100 lần: Mỗi lần gọi `book.Author.Name`, EF lại bắn 1 câu query: `SELECT * FROM Authors WHERE Id = ...`.
  - **Hậu quả:** Tổng cộng tốn **1 + 100 = 101 câu lệnh truy vấn xuống Database!** Làm nghẽn mạng và sập server database.
- **Giải pháp triệt để:** Dùng **Eager Loading** với `.Include()`:
  ```csharp
  var books = await _context.Books.Include(b => b.Author).ToListAsync();
  // Chỉ bắn DUY NHẤT 1 câu lệnh SQL có JOIN!
  ```

---

## CHỦ ĐỀ 10: SQL THỰC CHIẾN & THUẬT TOÁN TỐI ƯU
*(Gộp các câu 213–238)*

### 1. SQL: Phép JOIN & Bản chất giá trị `NULL`
- **`INNER JOIN`:** Chỉ trả về các bản ghi thỏa mãn điều kiện khớp ở CẢ HAI bảng.
- **`LEFT JOIN`:** Giữ lại toàn bộ bản ghi ở bảng bên trái. Nếu bảng bên phải không có dữ liệu tương ứng, các cột của bảng phải sẽ được điền giá trị **`NULL`**.

#### **Bản chất của `NULL` trong Database:**
- `NULL` **không phải là số 0**, cũng **không phải là chuỗi rỗng `''`**.
- `NULL` biểu thị trạng thái **"Không xác định" (Unknown / Missing value)**.
- **Hệ quả trong phép so sánh:** Không thể dùng toán tử so sánh thông thường với NULL (ví dụ: `WHERE Age = NULL` luôn trả về kết quả rỗng!). Bắt buộc phải dùng `IS NULL` hoặc `IS NOT NULL`.

#### **Bài toán SQL: "Tìm học sinh Nam quê Hà Nội và Nữ quê Hải Dương"**
- Viết đúng với thứ tự ưu tiên logic:
  ```sql
  SELECT Id, FullName, Gender, Hometown
  FROM Students
  WHERE (Gender = 'Nam' AND Hometown = N'Hà Nội')
     OR (Gender = N'Nữ' AND Hometown = N'Hải Dương');
  ```
  > **Lưu ý phỏng vấn:** Bắt buộc phải có cặp dấu ngoặc đơn `()` để gom nhóm, vì toán tử `AND` có độ ưu tiên cao hơn `OR`.

---

### 2. Thuật toán: Tìm số lớn thứ 3 trong mảng
#### **Cách 1: Sắp xếp (Sort) – Độ phức tạp $O(n \log n)$**
- Sắp xếp mảng giảm dần, loại bỏ trùng lặp và lấy phần tử ở chỉ số 2.
- **Đánh giá:** Dễ viết nhưng tốn chi phí sắp xếp không cần thiết.

#### **Cách 2: Tối ưu với 1 vòng lặp duy nhất – Độ phức tạp $O(n)$, bộ nhớ $O(1)$**
```csharp
public static int? FindThirdLargest(int[] arr)
{
    if (arr == null || arr.Length < 3) return null;

    long first = long.MinValue;
    long second = long.MinValue;
    long third = long.MinValue;

    foreach (int num in arr)
    {
        // Bỏ qua phần tử trùng lặp nếu chỉ tính giá trị phân biệt (distinct)
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

#### **So sánh nhanh Big-O:**
- $O(1)$ (Constant Time): Thời gian thực thi không phụ thuộc kích thước dữ liệu (ví dụ: truy xuất mảng qua index `arr[0]`, lấy key từ `Dictionary`).
- $O(n)$ (Linear Time): Thời gian tỉ lệ thuận tuyến tính với số phần tử (1 vòng lặp duyệt qua $n$ phần tử).
- $O(n^2)$ (Quadratic Time): Thời gian tỉ lệ với bình phương số phần tử (2 vòng lặp lồng nhau duyệt qua $n$ phần tử, ví dụ Bubble Sort).

---
*Tài liệu được tinh gọn và chuẩn hóa phương pháp trả lời đào sâu (Deep Dive) cho phỏng vấn Fresher .NET.*
