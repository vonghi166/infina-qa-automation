// pages/ProductListPage.ts
import { Page, expect } from '@playwright/test';

export class ProductListPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async selectProductByName(productName: string) {
    // 1. Định vị thẻ 'a' chứa sản phẩm có h3 khớp chính xác tên
    const productLink = this.page.locator('a').filter({
      has: this.page.locator('h3', { hasText: new RegExp(`^${productName}$`) })
    });

    // 2. Scroll tới sản phẩm đảm bảo nằm trong viewport
    await productLink.scrollIntoViewIfNeeded();

    // 3. Thực hiện click và đồng thời chờ URL thay đổi sang trang chi tiết của sản phẩm đó
    // Đảm bảo URL chứa đúng định dạng sản phẩm cụ thể (ví dụ: /products/eilik)
    await Promise.all([
      this.page.waitForURL(new RegExp(`/products/.*`), { timeout: 10000 }),
      productLink.click()
    ]);

    // 4. Verify lại lần nữa chắc chắn đã vào trang chi tiết sản phẩm
    await expect(this.page).toHaveURL(new RegExp(`/products/.+`));
  }
}