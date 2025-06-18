const { defineConfig } = require("cypress");
const fs = require('fs'); // Required to read/write files

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // TASK: Ensure file exists or is initialized
      on('task', {
        ensureLastNameFile() {
          const filePath = 'cypress/fixtures/lastName.json';
          if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, JSON.stringify([{ lastName: 'Postpaid-0' }], null, 2));
          } else {
            const fileData = fs.readFileSync(filePath, 'utf-8');
            if (!fileData || fileData.trim() === '') {
              fs.writeFileSync(filePath, JSON.stringify([{ lastName: 'Postpaid-0' }], null, 2));
            }
          }
          return null;
        },

        // TASK: Write updated JSON back to file
        writeLastName(data) {
          fs.writeFileSync('cypress/fixtures/lastName.json', JSON.stringify(data, null, 2));
          return null;
        }
      });

      // Keep your test file
      config.specPattern = [
        'cypress/e2e/MCTestRunner/login.cy.js',
        'cypress/e2e/MCTestRunner/enquiry.cy.js'
      ];

      return config;
    },
  },
});
