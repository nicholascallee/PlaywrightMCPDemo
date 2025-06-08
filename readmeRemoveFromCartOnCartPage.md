# Remove From Cart On Cart Page Playwright Test

This project contains an automated Playwright test for the 'Remove from Cart on Cart Page' scenario on [saucedemo.com](https://www.saucedemo.com).

## Test Scenario
The test performs the following steps:
1. Opens www.saucedemo.com
2. Logs in as `standard_user`
3. Adds the first product to the cart
4. Verifies the button changes to 'Remove'
5. Goes to the cart page
6. Verifies the cart contains the product that was added (using CartPage)
7. Removes the product from the cart page
8. Verifies the product is removed from the cart (using CartPage)
9. Closes the browser

## File Structure
- `PlaywrightTests/saucedemoremovefromcartoncartpage.spec.ts`: The Playwright test file for the remove from cart on cart page scenario. The code is fully commented to explain each step.
- `readmeRemoveFromCartOnCartPage.md`: This documentation file.
- `PlaywrightPages/`: Contains page object model files for login, inventory, cart, and shared logic.
- `data/data.class.ts`: Contains test data such as the base URL.

## How to Run the Test

1. **Install dependencies** (if not already installed):
   ```
npm install
   ```
2. **Run the test**:
   ```
npx playwright test PlaywrightTests/saucedemoremovefromcartoncartpage.spec.ts
   ```
3. **View results**:
   - Test results will appear in the terminal and in the `test-results/` directory.

## Notes
- All browser automation is routed through the Playwright MCP Server and the page object model.
- Cart actions and product name verification are handled by the CartPage class.
- The test code is fully commented for clarity.
- No part of the test bypasses the MCP Server. 