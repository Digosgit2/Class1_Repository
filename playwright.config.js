require('dotenv').config();

const { defineConfig, devices } = require('@playwright/test');

// Get selected environment
const environment = process.env.TEST_ENV || 'qa';

// Environment URLs
const baseURLs = {
    qa: process.env.QA_URL,
    dev: process.env.DEV_URL,
    prod: process.env.PROD_URL
};

module.exports = defineConfig({

    testDir: './tests',

    timeout: 60 * 1000,

    use: {
        baseURL: baseURLs[environment],
        headless: false,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure'
    },

    projects: [

        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome']
            }
        },

        {
            name: 'firefox',
            use: {
                ...devices['Desktop Firefox']
            }
        },

        {
            name: 'webkit',
            use: {
                ...devices['Desktop Safari']
            }
        }

    ]

});