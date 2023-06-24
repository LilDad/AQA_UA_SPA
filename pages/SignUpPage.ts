import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SignUpPage extends BasePage {
    expectedText = this.page.locator('//*[@data-testid="regTitle"]');
    emailTab = this.page.locator('//*[@data-testid="regEmailTab"]');
    emailInput = this.page.locator('//*[@data-testid="regEmailInput"]');
    passwordInput = this.page.locator('//*[@data-testid="regPasswordInput"]');
    regConfirmButton = this.page.locator('//*[@data-testid="regEmailConfirmBtn"]');

    async pageIsDisplayed() {
        console.log('\'Реєстрація\' page is displayed');
        await expect(this.expectedText).toHaveText('Реєстрація');
    }

    async clickEmailTab() {
        console.log('Click email tab');
        await this.emailTab.click();
    }

    async signUpEmail(email, password) {
        console.log('Set email');
        await this.emailInput.type(email);
        console.log('Set password');
        await this.passwordInput.type(password);
        console.log('Click registration submit button');
        await this.regConfirmButton.click();
    }
}