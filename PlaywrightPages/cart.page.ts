import { BasePage } from './base.page';
import { expect } from '@playwright/test';

export class CartPage extends BasePage {
  constructor(page: any) {
    super(page);
  }

  async getCartFirstProductName(): Promise<string> {
    return await this.page.locator('.cart_item .inventory_item_name').first().innerText();
  }
} 