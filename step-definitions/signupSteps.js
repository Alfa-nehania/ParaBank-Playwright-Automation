const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');

const HomePage = require('../pages/HomePage');
const RegisterPage = require('../pages/RegisterPage');
const AccountPage = require('../pages/AccountPage');

const user = require('../test-data/userData.json');

user.username = `alfan${Date.now()}`;

let browser;
let page;
let homePage;
let registerPage;
let accountPage;

Given('I open the ParaBank application', async function () {

    browser = await chromium.launch({ headless: false });

    page = await browser.newPage();

    homePage = new HomePage(page);
    registerPage = new RegisterPage(page);
    accountPage = new AccountPage(page);

    await homePage.navigateToApplication();

});

When('I click on Register link', async function () {

    await homePage.clickRegister();

});

When('I enter valid registration details', async function () {

    await registerPage.register(user);

});

When('I click on Register button', async function () {

    // Already handled inside register()
});

Then('the account should be created successfully', async function () {

    await expect(page.locator('#rightPanel')).toContainText(user.username);

});

When('I logout from the application', async function () {

    await homePage.logout();

});

When('I login with the newly created credentials', async function () {

    await homePage.login(user.username, user.password);

});

Then('I should see the Account Overview page', async function () {

    await accountPage.verifyAccountOverview();

});

Then('I should print the account balance', async function () {

    await accountPage.printBalance();

    await browser.close();

});