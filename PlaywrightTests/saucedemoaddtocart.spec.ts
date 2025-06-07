import { test, expect } from '@playwright/test';
import { LoginPage } from '../PlaywrightPages/login.page';
import { InventoryPage } from '../PlaywrightPages/inventory.page';

test('Add to cart scenario on saucedemo.com', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.goto('https://www.saucedemo.com');
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  const firstProductName = await inventoryPage.getFirstProductName();
  await inventoryPage.addFirstProductToCart();
  await inventoryPage.expectFirstProductButtonToBe('Remove');
  await inventoryPage.goToCart();
  const cartProductName = await inventoryPage.getCartFirstProductName();
  expect(cartProductName).toBe(firstProductName);
}); 