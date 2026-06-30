// @ts-check

const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

    testDir: './tests',

    timeout: 60000,

    expect: {
        timeout: 5000
    },

    reporter: 'html',

    use: {

        browserName: 'chromium',

        headless: false,

        trace: 'on-first-retry',

        navigationTimeout: 60000

    }

});