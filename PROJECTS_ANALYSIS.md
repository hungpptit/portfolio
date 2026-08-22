# 📦 TỔNG HỢP VÀ PHÂN TÍCH DỰ ÁN CHO PORTFOLIO

Tài liệu này lưu trữ danh sách các dự án GitHub của **Phạm Tuấn Hưng**, kèm theo liên kết, định hướng công nghệ và gợi ý phân tích để chuẩn bị đưa vào Portfolio & CV.

---

## 1. 🚚 Smart Logistics Platform (Hệ thống điều vận & tối ưu tuyến đường)
* **GitHub**: [hungpptit/smart-logistics-platform (master)](https://github.com/hungpptit/smart-logistics-platform.git)
* **Chủ đề**: Xây dựng hệ thống điều vận và tối ưu hóa tuyến đường giao hàng tự động (Vehicle Routing Problem - VRP / Route Optimization / Logistics Dispatching).
* **Điểm sáng cho Backend / SWE**:
  * Thuật toán tối ưu hóa định tuyến, xử lý bài toán đồ thị / tọa độ địa lý (GIS, OSRM / Google Maps API).
  * Xử lý điều phối đơn hàng thời gian thực (Real-time dispatching / Websocket / Queue).
  * Kiến trúc xử lý luồng nghiệp vụ logistics phức tạp.
* **Đánh giá đưa vào Portfolio**: ⭐⭐⭐⭐⭐ (Dự án rất thực tế và giá trị cao đối với các công ty TMĐT, Logistics, Vận tải như Shopee, Grab, Ahamove, GHN).

---

## 2. 🎬 Online Movie Ticket Booking System (Hệ thống đặt vé xem phim trực tuyến)
* **GitHub**: [hungpptit/XEMPHIM (tree/kientruc)](https://github.com/hungpptit/XEMPHIM/tree/kientruc)
* **Chủ đề**: Nền tảng đặt vé xem phim phân tán dựa trên kiến trúc Microservices.
* **Điểm sáng cho Backend / SWE**:
  * **Microservices Architecture**: API Gateway, User Service, Movie Service, Booking Service, Payment Service, Notification Service.
  * **Xử lý Concurrency & Distributed Lock**: Sử dụng **Redis Distributed Lock + TTL** và DB Lock fallback để ngăn chặn tình trạng Double-Booking (2 người cùng đặt 1 ghế tại cùng 1 tích tắc).
  * **Message Queue**: Sử dụng **RabbitMQ** để gửi email vé và thông báo bất đồng bộ.
  * **Payment Integration**: Tích hợp ZaloPay Dynamic QR code.
* **Đánh giá đưa vào Portfolio**: ⭐⭐⭐⭐⭐ (Dự án **Flagship số 1** cho vị trí Backend / System Developer).

---

## 3. 📚 Smart Library Management System (Hệ thống quản lý thư viện thông minh)
* **GitHub**: [hungpptit/library-management-system](https://github.com/hungpptit/library-management-system)
* **Chủ đề**: Quản lý mượn/trả sách, độc giả, danh mục, thống kê và phạt trễ hạn.
* **Điểm sáng cho Backend / SWE**:
  * Thiết kế cơ sở dữ liệu quan hệ chặt chẽ (Database Normalization, Transaction mượn/trả, Foreign Keys, Indexing).
  * Phân quyền người dùng (Role-Based Access Control - RBAC: Admin, Thủ thư, Độc giả).
  * Xử lý logic nghiệp vụ quản lý tài nguyên.
* **Đánh giá đưa vào Portfolio**: ⭐⭐⭐⭐ (Rất phù hợp để thể hiện kỹ năng thiết kế Database và cấu trúc mã nguồn sạch).

---

## 4. 🤖 TOEIC Learning System with AI Chatbot Microservices
Có 2 repository liên quan:

### Bản A: [chatbot-toeic-flutter (tree/microservice)](https://github.com/hungpptit/chatbot-toeic-flutter/tree/microservice)
* **Đặc điểm**: Kiến trúc **Microservices**, Client sử dụng **Flutter** (Mobile đa nền tảng), kết hợp Backend AI Chatbot.
* **Thế mạnh**: Thể hiện kiến trúc phân tán hiện đại, làm việc với Mobile App Framework phổ biến (Flutter), tích hợp dịch vụ AI độc lập.

### Bản B: [chatbot-toeic (tree/master)](https://github.com/hungpptit/chatbot-toeic/tree/master)
* **Đặc điểm**: Client **ReactJS**, Backend **Node.js** + Tích hợp **Gemini API** + Mô hình NLP **BERT** (Intent Recognition) + Thuật toán gợi ý lộ trình học (**Naïve Bayes / kNN**).
* **Thế mạnh**: Thể hiện thuật toán AI/Machine Learning & NLP sâu (BERT, Gemini, Naïve Bayes, kNN).

> 💡 **Gợi ý chọn lựa**:
> - Nếu bạn muốn nhấn mạnh **Kiến trúc hệ thống Microservices & Đa nền tảng (Mobile/Flutter)**: Chọn **Bản A (Flutter Microservice)**.
> - Nếu bạn muốn nhấn mạnh **Kỹ năng AI/NLP/LLM & Data Science (Gemini + BERT + ML)**: Chọn **Bản B (React/Node + ML)**.
> - Hoặc bạn có thể gộp lại thành một giải pháp tổng thể: *TOEIC AI Ecosystem* (Backend Microservices + AI Service + Multi-platform Client).

---

## 5. 📱 Tech Store Management System (Android)
* **GitHub**: [hungpptit/tech-store-mobile](https://github.com/hungpptit/tech-store-mobile)
* **Chủ đề**: Hệ sinh thái bán lẻ công nghệ kết hợp Mobile App và Web Admin.
* **Điểm sáng cho Backend / SWE**:
  * **Native Android (Java/Android Studio)**: Ứng dụng khách hàng mượt mà, chuẩn OOP.
  * **Real-time Chat & Notifications**: Firebase Cloud Messaging (FCM) + Firestore.
  * **Payment Integration**: Stripe API.
  * **Web Admin Dashboard**: Quản lý kho hàng, đơn hàng, đồng bộ dữ liệu.
* **Đánh giá đưa vào Portfolio**: ⭐⭐⭐⭐ (Chứng minh khả năng làm việc với hệ sinh thái ứng dụng thực tế và mobile development).

---

## 📋 Gợi ý lộ trình tiếp theo
1. Cùng phân tích chi tiết từng dự án (Tech stack, Kiến trúc, Thách thức & Giải pháp tối ưu).
2. Chuẩn bị mô tả chuẩn STAR (Situation - Task - Action - Result) cho từng dự án.
3. Thiết kế giao diện Portfolio đưa các dự án này vào các nhóm danh mục phù hợp.
