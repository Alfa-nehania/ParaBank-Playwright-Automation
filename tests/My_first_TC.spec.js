const { test } = require('@playwright/test');

const HomePage = require('../pages/HomePage');
const RegisterPage = require('../pages/RegisterPage');
const AccountPage = require('../pages/AccountPage');

const user = require('../test-data/userData.json');

// Generate unique username
user.username = `alfan${Date.now()}`;

test('Register and Login to ParaBank', async ({ page }) => {

    const homePage = new HomePage(page);
    const registerPage = new RegisterPage(page);
    const accountPage = new AccountPage(page);

    // Open Application
    await homePage.navigateToApplication();

    // Register
    await homePage.clickRegister();

    await registerPage.register(user);

    // Logout
    await homePage.logout();

    // Login
    await homePage.login(user.username, user.password);

    // Verify
    await accountPage.verifyAccountOverview();

    // Print Balance
    await accountPage.printBalance();

});