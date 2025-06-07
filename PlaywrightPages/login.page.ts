import { BasePage } from './base.page';
import { LoginElementsPage } from './login.elements.page';

export class LoginPage extends BasePage {
  protected elements: LoginElementsPage;

  constructor(page: any) {
    super(page);
    this.elements = new LoginElementsPage(page);
  }

  async login(username: string, password: string) {
    await this.fill(this.elements.usernameInput, username);
    await this.fill(this.elements.passwordInput, password);
    await this.click(this.elements.loginButton);
  }
} 