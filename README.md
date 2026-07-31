# 🚀 Hướng Dẫn Cài Đặt và Chạy Tự Động Hóa Kiểm Thử (Automation Testing)

Chào mừng bạn đến với hệ thống kiểm thử tự động của dự án **AI Robot Store**.

Tài liệu này hướng dẫn chi tiết từng bước để bất kỳ ai cũng có thể cài đặt, cấu hình và chạy kiểm thử mà không cần phải biết lập trình chuyên sâu.

---

# 📋 Mục Lục

1. [Yêu Cầu Hệ Thống](#1-yêu-cầu-hệ-thống--lưu-ý-quan-trọng-windows)
2. [Cài Đặt Dự Án](#2-cài-đặt-dự-án)
3. [Cấu Hình Môi Trường](#3-cấu-hình-môi-trường)
4. [Cách Chạy Kiểm Thử](#4-cách-chạy-kiểm-thử)
5. [Xem Báo Cáo Kết Quả](#5-xem-báo-cáo-kết-quả-test-report)

---

# 1. Yêu Cầu Hệ Thống & Lưu Ý Quan Trọng (Windows)

## A. Yêu Cầu Phần Mềm

- Cài đặt **Node.js phiên bản 18 trở lên**.

Kiểm tra phiên bản:

```bash
node -v
```

---

## B. Lưu ý đặc biệt cho người dùng Windows

Nếu gặp lỗi:

```text
npx.ps1 cannot be loaded because running scripts is disabled on this system
```

Đây là cơ chế bảo mật mặc định của **Windows PowerShell**.

Chỉ cần thực hiện **một lần duy nhất**:

### Bước 1

Mở **PowerShell** bằng quyền **Administrator**.

### Bước 2

Chạy lệnh:

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Bước 3

Khi được hỏi xác nhận:

```text
Y
```

rồi nhấn **Enter**.

### Bước 4

Đóng PowerShell và tiếp tục sử dụng bình thường.

---

# 2. Cài Đặt Dự Án

Mở **Terminal**, **Command Prompt** hoặc **PowerShell** tại thư mục chứa dự án.

## Bước A. Di chuyển vào thư mục dự án

```bash
cd path/to/infina-qa-automation
```

---

## Bước B. Cài đặt các thư viện

Lệnh này sẽ tải toàn bộ thư viện cần thiết.

```bash
npm install
```

---

## Bước C. Cài đặt trình duyệt Playwright

```bash
npx playwright install
```

---

# 3. Cấu Hình Môi Trường

Trong thư mục gốc của dự án:

- Tìm file `.env.example`
- Hoặc tạo mới file `.env`

Sau đó khai báo địa chỉ hệ thống cần kiểm thử:

```env
BASE_URL=https://ai-robot-store.vercel.app
```

---

# 4. Cách Chạy Kiểm Thử

## 🌟 Cách 1. Chạy giao diện tương tác (Khuyến nghị)

Mở giao diện trực quan để chọn và chạy từng kịch bản test.

```bash
npx playwright test --ui
```

---

## 👁️ Cách 2. Chạy có hiển thị trình duyệt

Cho phép quan sát toàn bộ quá trình tự động thao tác trên trình duyệt.

```bash
npx playwright test --headed
```

---

## ⚡ Cách 3. Chạy chế độ ẩn (Nhanh nhất)

Chạy toàn bộ test ở chế độ nền.

```bash
npx playwright test
```

---

## 🎯 Cách 4. Chạy một file kiểm thử

Ví dụ chỉ chạy file `cartTotal.spec.ts`.

```bash
npx playwright test tests/cartTotal.spec.ts
```

---

# 5. Xem Báo Cáo Kết Quả (Test Report)

Sau khi chạy test xong, Playwright sẽ tự động tạo báo cáo.

Báo cáo bao gồm:

- ✅ Test Pass / Fail
- 📸 Screenshot khi lỗi
- 📄 Log chi tiết

Mở báo cáo bằng lệnh:

```bash
npx playwright show-report
```

Trình duyệt sẽ tự động mở trang báo cáo để xem kết quả.