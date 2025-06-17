const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
      config.specPattern=
      [
        'cypress/e2e/MCTestRunner/login.cy.js',
        'cypress/e2e/MCTestRunner/enquiry.cy.js'

      ]
      return config;
      
      // implement node event listeners here
    },
  },
});
