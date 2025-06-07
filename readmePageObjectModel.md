# Page Object Model Structure for Playwright MCP Demo

## Overview
This project now uses a Page Object Model (POM) structure to organize browser automation code for Playwright tests, with all browser interactions routed through the MCP Server.

## Folder Structure

- `PlaywrightPages/`
  - `base.page.ts`: Contains the `BasePage` class with shared logic for all pages.
  - `login.page.ts`: Contains the `LoginPage` class for login actions, inherits from `BasePage`.
  - `inventory.page.ts`: Contains the `InventoryPage` class for inventory and cart actions, inherits from `BasePage`.
- `PlaywrightTests/`
  - Contains test files (e.g., `saucedemovalidlogin.spec.ts`, `saucedemoaddtocart.spec.ts`) that use the page objects.

## Page Classes

### BasePage
- Provides shared methods for navigation, clicking, filling fields, and URL assertions.
- All other page classes inherit from `BasePage`.

### LoginPage
- Encapsulates login actions (entering username, password, clicking login).
- Used by tests to perform login in a reusable way.

### InventoryPage
- Encapsulates actions on the inventory and cart pages (getting product names, adding to cart, verifying cart contents).
- Used by tests to interact with products and the cart.

## How Tests Use the Page Objects
- Tests create instances of the relevant page classes, passing the Playwright `page` object.
- Tests call methods on these page objects to perform actions and assertions, rather than directly using selectors in the test files.

## Example Usage
```typescript
import { LoginPage } from '../PlaywrightPages/login.page';
import { InventoryPage } from '../PlaywrightPages/inventory.page';

const loginPage = new LoginPage(page);
const inventoryPage = new InventoryPage(page);

await loginPage.goto('https://www.saucedemo.com');
await loginPage.login('standard_user', 'secret_sauce');
await inventoryPage.addFirstProductToCart();
```

This structure improves maintainability, readability, and reusability of the test code. 