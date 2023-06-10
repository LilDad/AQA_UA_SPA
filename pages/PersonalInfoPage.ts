import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class PersonalInfoPage extends BasePage {
    playerID = this.page.locator('//*[@ng-reflect-name="playerId"]');
    logoutButton = this.page.locator('//*[@data-testid="logoutBtn"]');
    logoutConfirmButton = this.page.locator('//*[@data-testid="logoutConfirmDialogCloseBtn"]');

    async personalInfoPageIsDisplayed() {
        console.log('Personal info page is displayed');
        await expect(this.playerID.isEnabled).toBeTruthy();
    }

    async clickLogoutButton() {
        console.log('Click logout button');
        await this.logoutButton.click();
    }

    async clickConfirmLogoutButton() {
        console.log('Click confirm logout button');
        await this.logoutConfirmButton.click();
    }
}