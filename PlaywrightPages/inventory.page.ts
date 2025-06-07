import { BasePage } from './base.page';
import { InventoryElementsPage } from './inventory.elements.page';
import { expect } from '@playwright/test';

export class InventoryPage extends BasePage {
  protected elements: InventoryElementsPage;

  constructor(page: any) {
    super(page);
    this.elements = new InventoryElementsPage(page);
  }

  async getFirstProductName(): Promise<string> {
    return await this.page.locator(this.elements.firstProductName).first().innerText();
  }

  async addFirstProductToCart() {
    await this.page.locator(this.elements.firstProduct).first().locator('button').click();
  }

  async removeFirstProductFromCart() {
    await this.page.locator(this.elements.firstProduct).first().locator('button').click();
  }

  async expectFirstProductButtonToBe(text: string) {
    await expect(
      this.page.locator(this.elements.firstProduct).first().locator('button')
    ).toHaveText(text);
  }

  async goToCart() {
    await this.click(this.elements.cartLink);
  }
} 