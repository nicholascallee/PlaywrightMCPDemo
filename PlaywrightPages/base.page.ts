import { BaseElementsPage } from './base.elements.page';

export class BasePage {
  protected page: any;
  protected elements: BaseElementsPage;

  constructor(page: any) {
    this.page = page;
    this.elements = new BaseElementsPage(page);
  }

  async goto(url: string) {
    await this.page.goto(url);
  }

  async click(selector: string) {
    await this.page.click(selector);
  }

  async fill(selector: string, value: string) {
    await this.page.fill(selector, value);
  }

  async expectUrl(url: string) {
    await this.page.expect.toHaveURL(url);
  }
} 