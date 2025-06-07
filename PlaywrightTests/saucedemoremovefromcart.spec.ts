import { test, expect } from '@playwright/test';
import { LoginPage } from '../PlaywrightPages/login.page';
import { InventoryPage } from '../PlaywrightPages/inventory.page';
import { DataClass } from '../data/data.class';

test('Remove from cart scenario on saucedemo.com', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto(DataClass.baseUrl);
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  const firstProductName = await inventoryPage.getFirstProductName();
  await inventoryPage.addFirstProductToCart();
  await inventoryPage.expectFirstProductButtonToBe('Remove');
  // Remove the product
  await inventoryPage.removeFirstProductFromCart();
  await inventoryPage.expectFirstProductButtonToBe('Add to cart');
}); 