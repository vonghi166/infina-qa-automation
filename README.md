🚀 Hướng Dẫn Cài Đặt và Chạy Tự Động Hóa Kiểm Thử (Automation Testing)
Chào mừng bạn đến với hệ thống kiểm thử tự động của dự án AI Robot Store. Tài liệu này hướng dẫn chi tiết từng bước để bất kỳ ai cũng có thể cài đặt, cấu hình và chạy kiểm thử mà không cần phải biết lập trình chuyên sâu.

📋 Mục Lục
Yêu Cầu Hệ Thống (Chuẩn bị trước khi bắt đầu)

Cài Đặt Dự Án (Chỉ làm 1 lần duy nhất)

Cấu Hình Môi Trường (.env)

Cách Chạy Kiểm Thử (Thực thi các kịch bản test)

Xem Báo Cáo Kết Quả (Test Report)

1. Yêu Cầu Hệ Thống & Lưu Ý Quan Trọng (Windows)
A. Yêu Cầu Phần Mềm
Node.js (Phiên bản v18 trở lên).
Cách kiểm tra: Mở cửa sổ dòng lệnh và gõ node -v.

B. Lưu ý đặc biệt cho người dùng Windows (Lỗi chặn Script trong PowerShell)
Nếu bạn gặp thông báo lỗi kiểu như npx.ps1 cannot be loaded because running scripts is disabled on this system, đừng hoảng hốt! Đây là cơ chế bảo mật mặc định của Windows PowerShell. Hãy xử lý theo các bước sau chỉ một lần duy nhất:
Nhấn phím Windows, gõ chữ PowerShell.
Nhấp chuột phải vào Windows PowerShell và chọn Run as administrator (Chạy với quyền Quản trị viên).
Gõ câu lệnh sau vào cửa sổ PowerShell và nhấn Enter:

Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

Khi hệ thống hỏi xác nhận, nhập chữ Y (Yes) rồi nhấn Enter.
Đóng cửa sổ PowerShell đó lại và bạn đã sẵn sàng chạy lệnh bình thường!

2. Cài Đặt Dự Án
Mở cửa sổ dòng lệnh (Terminal trên Mac hoặc Command Prompt/PowerShell trên Windows) tại thư mục chứa dự án và thực hiện các lệnh sau:

Bước A: Di chuyển vào thư mục dự án
cd path/to/infina-qa-automation

Bước B: Tải và cài đặt các thư viện cần thiết
Lệnh này sẽ tự động tải các công cụ lập trình và kiểm thử cần thiết vào máy của bạn:
npm install

Bước C: Cài đặt trình duyệt tự động
Playwright cần cài đặt các trình duyệt chuyên dụng để chạy kiểm thử ngầm:
npx playwright install

3. Cấu Hình Môi Trường
Hệ thống cần biết địa chỉ trang web cần kiểm tra thông qua file cấu hình môi trường:
Nhìn vào thư mục gốc của dự án, tìm file mẫu .env.example (hoặc tạo một file mới tên là .env).
Mở file đó lên và điền đường dẫn trang web (Base URL) của hệ thống cần test:
BASE_URL=https://ai-robot-store.vercel.app

4. Cách Chạy Kiểm Thử
Tùy thuộc vào mục đích kiểm tra, bạn có thể chọn một trong các cách chạy dưới đây:

🌟 Cách 1: Chạy tương tác giao diện (Khuyên dùng cho Non-IT / Dễ quan sát nhất)
Lệnh này sẽ mở ra một bảng điều khiển trực quan trên màn hình, giúp bạn bấm nút chạy từng kịch bản và nhìn thấy hệ thống tự động click, nhập liệu giống như người thật:

npx playwright test --ui

👁️ Cách 2: Chạy hiển thị trực tiếp trình duyệt
Ép trình duyệt tự động mở lên, chạy xuyên suốt kịch bản để bạn theo dõi quá trình máy làm việc:

npx playwright test --headed

⚡ Cách 3: Chạy ẩn (Nhanh nhất, chạy ngầm dưới nền)
Phù hợp khi bạn muốn kiểm tra nhanh toàn bộ hệ thống mà không cần bật cửa sổ trình duyệt:

npx playwright test

🎯 Cách 4: Chạy một file kiểm thử riêng lẻ
Nếu bạn chỉ muốn kiểm tra tính năng tính toán giỏ hàng (cartTotal.spec.ts):

npx playwright test tests/cartTotal.spec.ts

5. Xem Báo Cáo Kết Quả (Test Report)
Sau khi quá trình kiểm thử hoàn tất, hệ thống sẽ tự động tổng hợp kết quả thành một trang web báo cáo chi tiết (bao gồm cả hình ảnh chụp màn hình lúc lỗi và video quay lại quá trình test).

Để mở xem báo cáo, bạn chỉ cần gõ lệnh:

npx playwright show-report

Trình duyệt sẽ tự động bật lên một giao diện báo cáo chuyên nghiệp, cho bạn biết kịch bản nào Pass (Thành công) và kịch bản nào Fail (Thất bại).