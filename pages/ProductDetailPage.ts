// pages/ProductDetailPage.ts
import { Page, expect } from '@playwright/test';

export class ProductDetailPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addToCart() {
    const addButton = this.page.locator('button', { hasText: 'Add to Cart' });
    await addButton.click();
  }
}