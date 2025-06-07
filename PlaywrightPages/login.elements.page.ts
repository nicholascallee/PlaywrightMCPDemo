import { BaseElementsPage } from './base.elements.page';

export class LoginElementsPage extends BaseElementsPage {
  usernameInput = '#user-name';
  passwordInput = '#password';
  loginButton = '#login-button';

  constructor(page: any) {
    super(page);
  }
} 