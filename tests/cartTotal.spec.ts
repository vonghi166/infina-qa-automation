// tests/cartTotal.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductListPage } from '../pages/ProductListPage';
import { ProductDetailPage } from '../pages/ProductDetailPage';
import { CartPage } from '../pages/CartPage';
import * as loginData from '../data/loginData.json';

test.describe('Cart and Total Calculation Feature - AI Robot Store', () => {

  test('TC-CART-01: Verify cart total equals sum of (quantity × price) using sale price', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productListPage = new ProductListPage(page);
    const productDetail = new ProductDetailPage(page);
    const cartPage = new CartPage(page);

    // Bước 1: Login thành công
    await loginPage.goto();
    await loginPage.loginUser(loginData.validUser.email, loginData.validUser.password);
    await expect(page).toHaveURL('https://ai-robot-store.vercel.app/', { timeout: 10000 });

    // Mảng danh sách các sản phẩm cần thêm vào giỏ hàng
    const productsToAdd = ['Eilik', 'Eiliko', 'AIBI'];

    // Bước 2 & 3 & 4: Lần lượt duyệt qua từng sản phẩm, chọn và thêm vào giỏ
    for (const productName of productsToAdd) {
      await page.goto('/products');
      await productListPage.selectProductByName(productName);
      await productDetail.addToCart();
    }

    // Bước 5: Truy cập vào trang giỏ hàng (/cart)
    await page.click('a[href="/cart"]');
    await cartPage.verifyCartUrl();

    // Bước 6 & 7: Tính toán giá trị kỳ vọng từ POM và lấy giá trị hiển thị trên UI
    const calculatedSubtotal = await cartPage.calculateExpectedSubtotal();
    const displayedTotal = await cartPage.getDisplayedSubtotal();

    // Bước 8: Assert kiểm chứng
    expect(calculatedSubtotal).toBe(displayedTotal);
  });

});