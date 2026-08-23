const { defineConfig } = require('@playwright/test');

const environment = process.env.TEST_ENV || 'qa';

const environments = {
    qa: 'https://qa.example.com',
    uat: 'https://uat.example.com',
    staging: 'https://staging.example.com'
};

module.exports = defineConfig({

    testDir: './tests',

    use: {
        baseURL: environments[environment],
        headless: false
    },

    projects: [
        {
            name: 'chromium',
            use: {
                browserName: 'chromium'
            }
        },

        {
            name: 'firefox',
            use: {
                browserName: 'firefox'
            }
        },

        {
            name: 'webkit',
            use: {
                browserName: 'webkit'
            }
        }
    ]
});