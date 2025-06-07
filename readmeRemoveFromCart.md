# Remove From Cart Playwright Test

This project contains an automated Playwright test for the 'Remove from Cart' scenario on [saucedemo.com](https://www.saucedemo.com).

## Test Scenario
The test performs the following steps:
1. Opens www.saucedemo.com
2. Logs in as `standard_user`
3. Adds the first product to the cart
4. Verifies the button changes to 'Remove'
5. Removes the product from the cart
6. Verifies the button changes back to 'Add to cart'
7. Closes the browser

## File Structure
- `PlaywrightTests/saucedemoremovefromcart.spec.ts`: The Playwright test file for the remove from cart scenario.
- `readmeRemoveFromCart.md`: This documentation file.
- `PlaywrightPages/`: Contains page object model files for login, inventory, and shared logic.
- `data/data.class.ts`: Contains test data such as the base URL.

## How to Run the Test

1. **Install dependencies** (if not already installed):
   ```
npm install
   ```
2. **Run the test**:
   ```
npx playwright test PlaywrightTests/saucedemoremovefromcart.spec.ts
   ```
3. **View results**:
   - Test results will appear in the terminal and in the `test-results/` directory.

## Notes
- All browser automation is routed through the Playwright MCP Server and the page object model.
- No part of the test bypasses the MCP Server. 