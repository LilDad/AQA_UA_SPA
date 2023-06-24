import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProfilePage extends BasePage {
    playerID = this.page.locator('//*[@data-testid="playerName"]');
    playerEmail = this.page.locator('//*[@data-testid="playerEmail"]');
    personalInfoButton = this.page.locator('a[href="/profile/personal-info"]');

    async profilePageIsDisplayed() {
        console.log('Profile page is displayed');
        await expect(this.playerID.isEnabled()).toBeTruthy();
    }

    async playerEmailIsMatches(email) {
        console.log('Player email is matches');
        await expect(this.playerEmail).toHaveText(email);
    }

    async clickPersonalInfoButton() {
        console.log('Click personal info button');
        await this.personalInfoButton.click();
    }
}