import { test, expect } from '@playwright/test';
import { LoginPage } from '../PlaywrightPages/login.page';
import { InventoryPage } from '../PlaywrightPages/inventory.page';
import { CartPage } from '../PlaywrightPages/cart.page';
import { DataClass } from '../data/data.class';

// Remove from cart on cart page scenario
// All browser automation is routed through the MCP Server and the page object model

test('Remove from cart on cart page scenario on saucedemo.com', async ({ page }) => {
  // 1. Open www.saucedemo.com
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto(DataClass.baseUrl);

  // 2. Enter standard_user into the username text box
  // 3. Enter secret_sauce into the password text box
  // 4. Click login
  await loginPage.login('standard_user', 'secret_sauce');

  // 5. Verify on the url https://www.saucedemo.com/inventory.html
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  // 6. Gather the name of the first product
  const firstProductName = await inventoryPage.getFirstProductName();

  // 7. Click the very first product's add to cart button
  await inventoryPage.addFirstProductToCart();

  // 8. Verify the very first product's add to cart button changes to a remove button
  await inventoryPage.expectFirstProductButtonToBe('Remove');

  // 9. Click the cart button
  await inventoryPage.goToCart();

  // 10. Verify the cart contains an instance of the product that was added to the cart
  const cartProductName = await cartPage.getCartFirstProductName();
  expect(cartProductName).toBe(firstProductName);

  // 11. Click remove on the product instance
  await page.locator('.cart_item .cart_button').first().click();

  // 12. Verify the product instance is gone
  await expect(page.locator('.cart_item .inventory_item_name')).toHaveCount(0);

  // 13. Close the browser (handled automatically by Playwright)
}); 