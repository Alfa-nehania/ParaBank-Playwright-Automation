const { expect } = require('@playwright/test');

class AccountPage {

    constructor(page) {
        this.page = page;

        this.accountOverviewHeading = page.getByRole('heading', {
            name: 'Accounts Overview'
        });

        this.balance = page.locator('table tbody tr:first-child td:nth-child(2)');
    }

    async verifyAccountOverview() {

        await expect(this.accountOverviewHeading).toBeVisible();

    }

    async printBalance() {

        const amount = await this.balance.innerText();

        console.log("Account Balance :", amount);

    }

}

module.exports = AccountPage;