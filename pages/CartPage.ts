// pages/CartPage.ts
import { Page, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyCartUrl() {
    await expect(this.page).toHaveURL(/\/cart/);
  }

  // Tính toán tổng tiền dựa trên (quantity × price) của từng item trong giỏ
  async calculateExpectedSubtotal(): Promise<number> {
    const cartItems = this.page.locator('.lg\\:col-span-2 div.rounded-xl.border.shadow');
    const count = await cartItems.count();
    
    let calculatedSubtotal = 0;

    for (let i = 0; i < count; i++) {
      const item = cartItems.nth(i);
      
      const priceText = await item.locator('span.text-cyan-400.font-bold').textContent();
      const quantityText = await item.locator('span.w-8.text-center').textContent();

      if (priceText && quantityText) {
        const price = parseInt(priceText.replace(' VNĐ', '').replace(/\./g, ''), 10);
        const quantity = parseInt(quantityText.trim(), 10);

        calculatedSubtotal += price * quantity;
      }
    }

    return calculatedSubtotal;
  }

  // Lấy tổng tiền đang hiển thị trên Order Summary từ UI
  async getDisplayedSubtotal(): Promise<number> {
    const summarySubtotalText = await this.page.locator('div.space-y-4 div.flex.justify-between.text-slate-400 span.text-white').textContent();
    expect(summarySubtotalText).not.toBeNull();
    
    return parseInt(summarySubtotalText!.replace(' VNĐ', '').replace(/\./g, ''), 10);
  }
}