# Elements Page Object Model Structure

This project uses an expanded Page Object Model (POM) for Playwright tests, with a clear separation between page actions and element selectors. All browser automation is routed through the Playwright MCP Server.

## Structure

- **PlaywrightPages/base.elements.page.ts**: Contains shared selectors (elements) used across multiple pages. All element pages inherit from this base.
- **PlaywrightPages/inventory.elements.page.ts**: Contains selectors specific to the Inventory page. Inherits from `BaseElementsPage`.
- **PlaywrightPages/login.elements.page.ts**: Contains selectors specific to the Login page. Inherits from `BaseElementsPage`.
- **PlaywrightPages/base.page.ts**: Contains shared page actions and utilities. Uses `BaseElementsPage` for shared elements.
- **PlaywrightPages/inventory.page.ts**: Contains actions for the Inventory page. Uses `InventoryElementsPage` for selectors.
- **PlaywrightPages/login.page.ts**: Contains actions for the Login page. Uses `LoginElementsPage` for selectors.

## Benefits

- **Separation of Concerns**: Element selectors are managed separately from page actions, making maintenance easier.
- **Reusability**: Shared elements and actions are centralized in base classes.
- **Scalability**: New pages and elements can be added with minimal duplication.

## Example Usage

```typescript
import { LoginPage } from './PlaywrightPages/login.page';
const loginPage = new LoginPage(page);
await loginPage.login('user', 'pass');
```

All selectors used by `LoginPage` are defined in `LoginElementsPage`, which inherits any shared selectors from `BaseElementsPage`.

## Test Files

- `PlaywrightTests/saucedemovalidlogin.spec.ts`
- `PlaywrightTests/saucedemoaddtocart.spec.ts`

These tests use the refactored page and elements structure for robust, maintainable automation. 