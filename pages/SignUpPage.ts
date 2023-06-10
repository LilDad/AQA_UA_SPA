import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";
import { PASSWORD, USEREMAIL } from "../config";

export class SignUpPage extends BasePage {
    expectedText = this.page.locator('//*[@data-testid="regTitle"]');
    emailTab = this.page.locator('//*[@data-testid="regEmailTab"]');
    emailInput = this.page.locator('//*[@data-testid="regEmailInput"]');
    passwordInput = this.page.locator('//*[@data-testid="regPasswordInput"]');
    regConfirmButton = this.page.locator('//*[@data-testid="regEmailConfirmBtn"]');

    async titleIsDisplayed() {
        console.log('\'Реєстрація\' title is displayed');
        await expect(this.expectedText).toHaveText('Реєстрація');
    }

    async clickEmailTab() {
        console.log('Click email tab');
        await this.emailTab.click();
    }

    async setEmail() {
        console.log('Set email');
        await this.emailInput.type(USEREMAIL);        
    }

    async setPassword() {
        console.log('Set password');
        await this.passwordInput.type(PASSWORD);
    }

    async clickRegConfirmButton() {
        console.log('Click registration submit button');
        await this.regConfirmButton.click();
    }
}