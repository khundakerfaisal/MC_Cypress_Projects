class enquiryPage {
  MCEnquiryPage() {
 
      cy.readFile('cypress/fixtures/lastName.json').then((data) => {
      const lastUser = data[data.length - 1].lastName;
      const lastNumber = parseInt(lastUser.split('-')[1]);
      const nextUser = `MAC-${lastNumber + 1}`;

        // Add new entry and write back
        data.push({lastName:nextUser});
        cy.writeFile('cypress/fixtures/lastName.json',data);
      
        // Use newLastName in UI form
        cy.wait(22000);
        cy.get('.navbar-toggle > .navbar-toggler', { timeout: 5000 }).click();
        cy.wait(500);
        cy.xpath('//div/ul/li/a/p[text()="Enquiry"]', { timeout: 40000 }).click();
        cy.wait(70000);
        cy.get('i.icon-simple-add', { timeout: 10000 })
        // .scrollIntoView()
        .should('be.visible')
        .click({ force: true });
         cy.wait(6000);


// Try scrolling to top even if Cypress thinks it’s not scrollable
    
              cy.get('#salutation')
        .select('Mr', { force: true });


              // Wait for overlay to disappear
        // cy.get('.velmld-overlay.fade-leave-active').should('not.exist');

        // Now safely interact with the select
        // cy.get('#salutation')
        //   .scrollIntoView()
        //   .should('be.visible')
        //   .select('Mr');
cy.wait(4000);

  
        // cy.xpath("//div/span/input[@placeholder='Last Name']").type(nextUser)
        // cy.wait(4000);
      });
  }
}

export default enquiryPage;
