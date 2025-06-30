class enquiryPage {
  MCEnquiryPage() {
 
      // cy.readFile('cypress/fixtures/lastName.json').then((data) => {
      // const lastUser = data[data.length - 1].lastName;
      // const lastNumber = parseInt(lastUser.split('-')[1]);
      // const nextUser = `MAC-${lastNumber + 1}`;

      //   // Add new entry and write back
      //   data.push({lastName:nextUser});
      //   cy.writeFile('cypress/fixtures/lastName.json',data);

        // Use newLastName in UI form
        cy.wait(22000);
        cy.get('.navbar-toggle > .navbar-toggler', { timeout: 5000 }).click();
        cy.wait(500);
        cy.xpath('//div/ul/li/a/p[text()="Enquiry"]', { timeout: 40000 }).click();
        cy.wait(100000);
        cy.get('i.icon-simple-add', { timeout: 10000 })
        .scrollIntoView()
        .should('be.visible')
        .click({ force: true });
         cy.wait(10000);


        cy.get('#first_name', { timeout: 10000 }).type('MAC');

         cy.wait(5000);

        // cy.get('#salutation', { timeout: 10000 })
        // .should('be.visible')
        // .select('Mr');
        // cy.wait(10000);

  
        // cy.xpath("//div/span/input[@placeholder='Last Name']").type(nextUser)
        cy.wait(4000);
      // });
  }
}

export default enquiryPage;
