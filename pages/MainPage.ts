import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class MainPage extends BasePage {
    registrationButton = this.page.locator('//*[@data-testid="registrationBtn"]');
    loginButton = this.page.locator('//*[@data-testid="loginBtn"]');
    loginInput = this.page.locator('//*[@data-testid="loginFormAuthInput"]');
    passwordInput = this.page.locator('//*[@data-testid="loginFormPasswordInput"]');
    loginSubmitButton = this.page.locator('//*[@data-testid="loginBtn"]');
    profileButton = this.page.locator('//*[@data-testid="profileBtn"]');
    closeCashboxButton = this.page.locator('button[class="pu-cashbox-dialog__close-btn"]');

    async open(link) {
        console.log('Open page: DEV UA');
        await super.open(link);
    }

    async clickRegistrationButton() {
        console.log('Click registration button');
        await this.registrationButton.click();
    }

    async clickLoginButton() {
        console.log('Click login button');
        await this.loginButton.click();
    }

    async login(email, password) {
        console.log('Set email');
        await this.loginInput.type(email);
        console.log('Set password');
        await this.passwordInput.type(password);
        console.log('Submit login form');
        await this.loginSubmitButton.click();
    }

    async authorizedMainPageIsDisplayed() {
        console.log('Authorized main page is displayed');
        await expect(this.profileButton.isEnabled()).toBeTruthy();
    }

    async clickCloseCashboxButton() {
        console.log('Click close cashbox button');
        await this.closeCashboxButton.click();        
    }

    async clickProfileButton() {
        console.log('Click profile button');
        await this.profileButton.click();
    }

    async mainPageIsDisplayed() {
        console.log('Main page is displayed');
        await expect(this.loginButton.isEnabled()).toBeTruthy();
    }
}