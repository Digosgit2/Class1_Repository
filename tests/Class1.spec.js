import { test } from '@playwright/test';

test("check browser", async ({ page, browserName }) => {

    console.log("=================================");
    console.log("Browser:", browserName);
    console.log("=================================");

    await page.goto("https://www.saucedemo.com/");
});