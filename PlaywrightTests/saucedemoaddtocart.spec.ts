import { test, expect } from '@playwright/test';

test('Add to cart scenario on saucedemo.com', async ({ page }) => {
  // 1. open www.saucedemo.com.
  await page.goto('https://www.saucedemo.com');

  // 2. enter standard_user into the username text box
  await page.fill('#user-name', 'standard_user');

  // 3. enter secret_sauce into the password text box
  await page.fill('#password', 'secret_sauce');

  // 4. click login
  await page.click('#login-button');

  // 5. verify on the url https://www.saucedemo.com/inventory.html
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  // 6. gather the name of the first product
  const firstProductName = await page.locator('.inventory_item_name').first().innerText();

  // 7. click the very products add to cart button
  await page.locator('.inventory_item').first().locator('button').click();

  // 8. verify the very first products add to cart button changes to a remove button
  await expect(
    page.locator('.inventory_item').first().locator('button')
  ).toHaveText('Remove');

  // 9. click the cart button
  await page.click('.shopping_cart_link');

  // 10. verify the cart contains an instance of the product that was added to the cart.(make sure the name is the same as the name gathered in step 6)
  const cartProductName = await page.locator('.cart_item .inventory_item_name').first().innerText();
  expect(cartProductName).toBe(firstProductName);

  // 11. Close the browser. (Playwright closes automatically after test)
}); 