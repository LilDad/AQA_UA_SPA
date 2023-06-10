import { Page } from "@playwright/test";

export class BasePage {
    page: Page;

    constructor(page) {
        this.page = page;
    }

    async open(path: string) {
        await this.page.goto(path);
    }
}