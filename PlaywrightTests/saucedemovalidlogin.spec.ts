import { test } from '@playwright/test';
import { expect } from '@playwright/test';

test('SauceDemoValidLogin', async ({ page, context }) => {
  // Navigate to URL
  await page.goto('https://www.saucedemo.com');

  // Fill input field
  await page.fill('#user-name', 'standard_user');

  // Fill input field
  await page.fill('#password', 'secret_sauce');

  // Click element
  await page.click('#login-button');

  // Verify URL
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
}); 