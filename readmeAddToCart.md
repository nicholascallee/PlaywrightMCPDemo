# Add to Cart Playwright Test

This project contains an automated Playwright test for the 'Add to Cart' scenario on [saucedemo.com](https://www.saucedemo.com).

## Test Scenario
The test performs the following steps:
1. Opens www.saucedemo.com
2. Logs in as `standard_user`
3. Adds the first product to the cart
4. Verifies the product is added and appears in the cart
5. Closes the browser

## File Structure
- `saucedemoaddtocart.spec.ts`: The Playwright test file for the add to cart scenario.
- `readmeAddToCart.md`: This documentation file.
- `package.json`: Project dependencies and scripts.
- `test-results/`: Output directory for test results.
- `temp_codegen/`: Temporary directory for generated code.

## How to Run the Test

1. **Install dependencies** (if not already installed):
   ```
npm install
   ```
2. **Run the test**:
   ```
npx playwright test saucedemoaddtocart.spec.ts
   ```
3. **View results**:
   - Test results will appear in the terminal and in the `test-results/` directory.

## Notes
- All browser automation is routed through the Playwright MCP Server.
- No part of the test bypasses the MCP Server. 