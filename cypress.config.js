const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const filePath = path.resolve('cypress/fixtures/lastName.json');

      // Register custom tasks
      on('task', {
        // Task: Ensure file exists, or create it with default value
        ensureLastNameFile() {
          if (!fs.existsSync(filePath)) {
            fs.writeFileSync(
              filePath,
              JSON.stringify([{ lastName: "User-0" }], null, 2)
            );
          }
          return null;
        },

        // Task: Write updated data back to file
        writeLastName(data) {
          fs.writeFileSync(
            filePath,
            JSON.stringify(data, null, 2)
          );
          return null;
        }
      });

      // Specify which spec files to include in test run
      config.specPattern = [
        'cypress/e2e/MCTestRunner/login.cy.js',
        'cypress/e2e/MCTestRunner/enquiry.cy.js'
      ];

      return config;
    },
  },
});
