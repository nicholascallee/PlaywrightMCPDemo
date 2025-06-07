import { BaseElementsPage } from './base.elements.page';

export class InventoryElementsPage extends BaseElementsPage {
  firstProduct = '.inventory_item';
  firstProductName = '.inventory_item_name';
  cartFirstProductName = '.cart_item .inventory_item_name';

  constructor(page: any) {
    super(page);
  }
} 