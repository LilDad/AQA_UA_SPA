import { test } from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { SignUpPage } from '../pages/SignUpPage';
import { ProfilePage } from '../pages/ProfilePage';
import { PersonalInfoPage } from '../pages/PersonalInfoPage';
import { EMAIL, LINK, PASSWORD } from '../testData';

test.describe('AQA_tests', async () => {
    test('Register a new player via email', async ({page}) => {
        const mainPage = new MainPage(page);
        const signUpPage = new SignUpPage(page);
        const profilePage = new ProfilePage(page);
        const personalInfoPage = new PersonalInfoPage(page);

        await mainPage.open(LINK);
        await page.waitForTimeout(3000);
        await mainPage.clickRegistrationButton();

        await signUpPage.pageIsDisplayed();
        await signUpPage.clickEmailTab();
        await signUpPage.signUpEmail(EMAIL, PASSWORD);
        
        await mainPage.authorizedMainPageIsDisplayed();
        await mainPage.clickCloseCashboxButton();
        await mainPage.clickProfileButton();
        
        await profilePage.profilePageIsDisplayed();
        await profilePage.clickPersonalInfoButton();

        await personalInfoPage.personalInfoPageIsDisplayed();
        await personalInfoPage.clickLogoutButton();
        await personalInfoPage.clickConfirmLogoutButton();
        
        await mainPage.mainPageIsDisplayed(); 
    });

    test('Authorization via email and logout', async ({page}) => {
        const mainPage = new MainPage(page);
        const profilePage = new ProfilePage(page);
        const personalInfoPage = new PersonalInfoPage(page);

        await mainPage.open(LINK);
        await page.waitForTimeout(3000);
        await mainPage.clickLoginButton();
        await mainPage.login(EMAIL, PASSWORD)
        await mainPage.clickProfileButton();

        await profilePage.profilePageIsDisplayed();
        await profilePage.playerEmailIsMatches(EMAIL);
        await profilePage.clickPersonalInfoButton();

        await personalInfoPage.personalInfoPageIsDisplayed();
        await personalInfoPage.clickLogoutButton();
        await personalInfoPage.clickConfirmLogoutButton();

        await mainPage.mainPageIsDisplayed();
    }); 
});

