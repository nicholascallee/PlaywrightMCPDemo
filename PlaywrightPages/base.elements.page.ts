export class BaseElementsPage {
  protected page: any;

  // Shared selectors
  cartLink = '.shopping_cart_link';

  constructor(page: any) {
    this.page = page;
  }
} 