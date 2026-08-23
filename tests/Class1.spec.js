const { test, chromium } =require('@playwright/test');

test("TC Name", async ()=>{

    const browser = await chromium.launch({headless : false});

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://copyright.gov.in/UserRegistration/frmNewUser.aspx");

    //Select Mr. value
    await page.locator("//select[@name='ctl00$ContentPlaceHolder1$ddlTitle']").selectOption({index : 1});

    await page.locator("//input[@name='ctl00$ContentPlaceHolder1$txtFName']").fill("Amruta");

    await page.locator("//input[@name='ctl00$ContentPlaceHolder1$txtLName']").fill("Shinde");

    await page.locator("//input[@name='ctl00$ContentPlaceHolder1$txtAddress']").fill("Pune");

    await page.locator("//select[@id='ctl00_ContentPlaceHolder1_ddlCountry']").selectOption({label : 'Canada'});

    await page.locator("//select[@name='ctl00$ContentPlaceHolder1$ddlState']").selectOption({value : '5'});

    await page.locator("//input[@name='ctl00$ContentPlaceHolder1$txtEmail']").fill("amruta@gmail.com");

    await page.getByLabel("Society User").click();

    await page.waitForTimeout(6000);

});
