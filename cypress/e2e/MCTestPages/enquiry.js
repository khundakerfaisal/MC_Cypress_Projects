class enquiryPage {
  MCEnquiryPage() {

          cy.readFile('cypress/fixtures/lastName.json').then((data) => {
          const lastUser = data[data.length - 1].lastName;
          // const lastNumber = parseInt(lastUser.split('-')[1]);
          // const nextUser = `MAC-${lastNumber + 1}`;
          const nextUser = lastUser.replace(/\d+$/, (num) => parseInt(num) + 1);

            cy.wait(25000);
            cy.get('.navbar-toggle > .navbar-toggler', { timeout: 5000 }).click();
            cy.wait(500);
            cy.xpath('//div/ul/li/a/p[text()="Enquiry"]', { timeout: 40000 }).click();
            cy.wait(75000);
            cy.get('i.icon-simple-add', { timeout: 10000 })
            // .scrollIntoView()
            .should('be.visible')
            .click({ force: true });
            cy.wait(6000);
            // Try scrolling to top even if Cypress thinks it's not scrollable
            cy.get('#salutation')
            .select('Mr', { force: true });
            cy.wait(4000);
            cy.get('#first_name')
            .scrollIntoView({ offset: { top: -100, left: 0 } })  // Adjust scroll if header blocks it
            .type('AutoMac', { force: true });
            cy.wait(4000);
            cy.get('#last_name')
            .scrollIntoView({ offset: { top: -100, left: 0 } }) // Adjust scroll to avoid header overlap
            .should('be.visible') // Ensure it's interactable
            .type(nextUser, { force: true }); // Type the generated value
            cy.wait(4000); // Optional: use only if needed for loading


          // Add new entry and write back
          data.push({lastName:nextUser});
          cy.writeFile('cypress/fixtures/lastName.json',data);

          const today=new Date();
          today.setFullYear(today.getFullYear()-18);

          const formatedDate=today.toISOString().split('T')[0];
          cy.get('#dob').type(formatedDate,{ force: true });
          cy.wait(2000)

          cy.get('#mobile_primary').type('01201546879', { force: true })
          cy.wait(2000)
      });
  }
}

export default enquiryPage;
