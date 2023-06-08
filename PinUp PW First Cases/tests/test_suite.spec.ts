import {test, expect} from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { SignUpPage } from '../pages/SignUpPage';
import { ProfilePage } from '../pages/ProfilePage';
import { PersonalInfoPage } from '../pages/PersonalInfoPage';

test.describe('AQA_tests', async () => {
    test('Register a new player via email', async ({page}) => {
        const mainPage = new MainPage(page);
        const signUpPage = new SignUpPage(page);
        const profilePage = new ProfilePage(page);
        const personalInfoPage = new PersonalInfoPage(page);

        await mainPage.open();
        await page.waitForTimeout(3000);
        await mainPage.clickRegistrationButton();

        await signUpPage.titleIsDisplayed();
        await signUpPage.clickEmailTab();
        await signUpPage.setEmail();
        await signUpPage.setPassword();
        await signUpPage.clickRegConfirmButton();
        
        await mainPage.authorizedMainPageIsDisplayed();
        await mainPage.clickCloseCashboxButton();
        await mainPage.clickProfileButton();
        
        await profilePage.profilePageIsDisplayed();
        await profilePage.clickPersonalInfoButton();

        await personalInfoPage.personalInfoPageIsDisplayed();
        await personalInfoPage.clickLogoutButton();
        await personalInfoPage.clickConfirmLogoutButton();

    });

    test('Authorization via email and logout', async ({page}) => {
        const mainPage = new MainPage(page);
        const profilePage = new ProfilePage(page);
        const personalInfoPage = new PersonalInfoPage(page);

        await mainPage.open();
        await page.waitForTimeout(3000);
        await mainPage.clickLoginButton();
        await mainPage.setEmail();
        await mainPage.setPassword();
        await mainPage.submitLoginForm();
        await mainPage.clickProfileButton();

        await profilePage.profilePageIsDisplayed();
        await profilePage.playerEmailIsMatches();
        await profilePage.clickPersonalInfoButton();

        await personalInfoPage.personalInfoPageIsDisplayed();
        await personalInfoPage.clickLogoutButton();
        await personalInfoPage.clickConfirmLogoutButton();

        await mainPage.mainPageIsDisplayed();

        await page.pause();
    }); 
});

