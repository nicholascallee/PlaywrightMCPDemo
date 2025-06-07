# SauceDemo Playwright Automation

This project demonstrates Playwright automation for the SauceDemo valid login scenario, generated using the Playwright MCP Server.

## Project Structure

- `temp_codegen/` - Contains the Playwright MCP generated test for the valid login scenario.
- `README.md` - Project instructions.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

## Running the Playwright Test

To run the test, use:
```bash
npx playwright test temp_codegen/saucedemovalidlogin.spec.ts
```

## Notes
- The test covers a valid login scenario and verifies navigation to the inventory page.
- The test was generated using the Playwright MCP Server as per the project instructions. 