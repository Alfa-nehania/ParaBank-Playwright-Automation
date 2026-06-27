class HomePage {

    constructor(page) {
        this.page = page;

        this.registerLink = page.getByRole('link', { name: 'Register' });
        this.username = page.locator('input[name="username"]');
        this.password = page.locator('input[name="password"]');
        this.loginButton = page.locator('input[value="Log In"]');
        this.logoutLink = page.getByRole('link', { name: 'Log Out' });
    }

    async navigateToApplication() {
        await this.page.goto('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');
    }

    async clickRegister() {
        await this.registerLink.click();
    }

    async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    async logout() {
        await this.logoutLink.click();
    }
}

module.exports = HomePage;