import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import * as registerData from '../data/registerData.json';

test.describe('User Registration Feature - AI Robot Store', () => {
  
  test('TC-REG-01: Successful registration with valid data', async ({ page }) => {
    const registerPage = new RegisterPage(page);

    // Tạo dynamic email tránh trùng lặp
    const timestamp = Date.now();
    const uniqueEmail = `${registerData.validUser.emailPrefix}${timestamp}@infina.test`;
    const expectedUserName = registerData.validUser.name; // "Senior QA Automation"

    // Bước 1: Điều hướng tới trang đăng ký
    await registerPage.goto();

    // Bước 2: Điền thông tin và bấm đăng ký
    await registerPage.registerUser(
      expectedUserName, 
      uniqueEmail, 
      registerData.validUser.password,
      registerData.validUser.confirmPassword
    );

    // Bước 3: Xác thực URL trang chủ sau khi đăng ký thành công
    await expect(page).toHaveURL('https://ai-robot-store.vercel.app/', { timeout: 10000 });

    // Định nghĩa locator bắt trực tiếp thẻ span có chứa chính xác tên user vừa đăng ký
    const profileNameSpan = page.locator('div.flex.items-center.space-x-2 span.text-sm', { hasText: expectedUserName });

    // Kiểm tra xem text hiển thị bên trong có đúng với tên đã đăng ký hay không
    await expect(profileNameSpan).toHaveText(expectedUserName);
  });

});