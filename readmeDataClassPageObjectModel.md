# Data Class Page Object Model

## Overview
This project uses a Page Object Model (POM) structure for Playwright tests, now enhanced with a **Data Class** for managing environment and test data.

## Structure
- `data/data.class.ts`: Stores test data such as the base URL as static properties.
- Test files in `PlaywrightTests/` now reference the base URL from the data class instead of hardcoding it.

## Usage
- **Data**: Use the data class to reference URLs and other test data instead of hardcoding values in your tests.

## Example
```typescript
import { DataClass } from '../data/data.class';

await loginPage.goto(DataClass.baseUrl);
```

## Benefits
- Centralized data management
- Cleaner, more maintainable tests
- Easy environment/data updates 