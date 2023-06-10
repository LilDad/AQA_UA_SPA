import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";
import { LINK, PASSWORD, USEREMAIL } from "../config";


export class MainPage extends BasePage {
    registrationButton = this.page.locator('//*[@data-testid="registrationBtn"]');
    loginButton = this.page.locator('//*[@data-testid="loginBtn"]');
    // expectedBalance = this.page.locator('//*[@data-testid="balanceAmount"]');
    loginInput = this.page.locator('//*[@data-testid="loginFormAuthInput"]');
    passwordInput = this.page.locator('//*[@data-testid="loginFormPasswordInput"]');
    loginSubmitButton = this.page.locator('//*[@data-testid="loginBtn"]');
    profileButton = this.page.locator('//*[@data-testid="profileBtn"]');
    closeCashboxButton = this.page.locator('button[class="pu-cashbox-dialog__close-btn"]');

    async open() {
        console.log('Open page: DEV UA');
        await super.open(LINK);
    }

    async clickRegistrationButton() {
        console.log('Click registration button');
        await this.registrationButton.click();
    }

    async clickLoginButton() {
        console.log('Click login button');
        await this.loginButton.click();
    }

    // async balanceIsDisplayed() {
    //     console.log('Balance is displayed');
    //     expect(await this.expectedBalance.isEnabled()).toBeTruthy();
    // }

    async setEmail() {
        console.log('Set email');
        await this.loginInput.type(USEREMAIL)
    }

    async setPassword() {
        console.log('Set password');
        await this.passwordInput.type(PASSWORD)
    }

    async submitLoginForm() {
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