import { Page, Locator } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly registerButton: Locator;

  constructor(page: Page) {
    this.page = page;
    // Sử dụng ID chuẩn xác từ HTML thực tế
    this.nameInput = page.locator('#name');
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.confirmPasswordInput = page.locator('#confirmPassword');
    this.registerButton = page.locator('button[type="submit"]');
  }

  async goto() {
    await this.page.goto('/register');
  }

  async registerUser(name: string, email: string, pass: string, confirmPass: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(pass);
    await this.confirmPasswordInput.fill(confirmPass);
    await this.registerButton.click();
  }
}