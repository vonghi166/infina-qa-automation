import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import * as loginData from '../data/loginData.json';

test.describe('User Login Feature - AI Robot Store', () => {
  
  test('TC-LOG-01: Successful login with the registered credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Bước 1: Điều hướng tới trang đăng nhập
    await loginPage.goto();

    // Bước 2: Nhập thông tin đăng nhập từ file data và bấm Đăng Nhập
    await loginPage.loginUser(
      loginData.validUser.email,
      loginData.validUser.password
    );

    // Bước 3: Xác thực URL trang chủ sau khi đăng nhập thành công
    await expect(page).toHaveURL(loginData.messages.successRedirectUrl, { timeout: 10000 });

    // Bước 4: Xác thực tên người dùng hiển thị đúng trên góc phải Navbar
    const expectedUserName = loginData.validUser.name;
    const profileNameSpan = page.locator('div.flex.items-center.space-x-2 span.text-sm', { hasText: expectedUserName });
    
    await expect(profileNameSpan).toBeVisible({ timeout: 10000 });
    await expect(profileNameSpan).toHaveText(expectedUserName);
  });
  
  test('TC-LOG-02: Login with incorrect credentials — verify the error message is shown', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // Bước 1: Điều hướng tới trang đăng nhập
    await loginPage.goto();

    // Bước 2: Nhập sai thông tin (email hoặc mật khẩu không đúng) và bấm Đăng Nhập
    await loginPage.loginUser(
      loginData.validUser.email,
      loginData.invalidUser.password // Dùng mật khẩu sai
    );

    // Bước 3: Xác thực không được chuyển hướng khỏi trang login (URL vẫn giữ nguyên /login)
    await expect(page).toHaveURL(/\/login/, { timeout: 10000 });

    // Bước 4: Xác thực thông báo lỗi hiển thị chính xác với nội dung từ UI thực tế
    await expect(loginPage.errorMessage).toBeVisible({ timeout: 10000 });
    await expect(loginPage.errorMessage).toHaveText(loginData.messages.loginErrorText);
  });
});