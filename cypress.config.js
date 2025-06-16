const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
      config.specPattern=
      [
        'cypress/e2e/login.cy.js',

      ]
      return config;
      
      // implement node event listeners here
    },
  },
});
