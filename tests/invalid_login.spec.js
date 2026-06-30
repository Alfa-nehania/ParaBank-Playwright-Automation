const { test } = require('@playwright/test');
const HomePage = require('../pages/HomePage');

test('Invalid login credentials show an authentication error', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.navigateToApplication();
    await homePage.login('invalidUser123', 'invalidPassword123');

    await homePage.expectLoginError();
});
