const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000, 
    setupNodeEvents(on, config) {
      config.specPattern = [
        'cypress/e2e/MCTestRunner/login.cy.js',
        'cypress/e2e/MCTestRunner/enquiry.cy.js'
      ];

      return config;
    },
  },
});
