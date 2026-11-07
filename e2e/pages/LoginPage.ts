import { expect, Locator, Page } from "@playwright/test";

class LoginPage {

  readonly page: Page;
  readonly url: string;
  readonly loginButton: Locator
  readonly userEmailInput: Locator
  readonly userPassword: Locator
  readonly userEmailInputError: Locator


  constructor(page: Page) {
    this.page = page;
    this.url = "/login.html"
    this.loginButton = this.page.getByTestId('login-submit-btn')
    this.userEmailInput = this.page.getByTestId('email-input')
    this.userPassword = this.page.getByTestId('password-input')
    this.userEmailInputError = this.userEmailInput.locator('..').getByRole('alert')
  }

  async visit() {
    const promoScriptResponse = this.page.waitForResponse(
      /\/js\/components\/promo-adverts\.js$/,
    );
    await this.page.goto(this.url);
    await this.loginButton.waitFor()
    return promoScriptResponse;
  }

  async login(userEmail:string, userPassword:string){
    await this.userEmailInput.fill(userEmail)
    await this.userPassword.fill(userPassword)
    await this.loginButton.click()
  }

}
export default LoginPage;
