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
        cy.wait(20000);
        cy.get('.navbar-toggle > .navbar-toggler').click();
        cy.wait(5000);
        cy.get(':nth-child(8) > a > p').click();
        cy.wait(120000);
        cy.get('#new_enquiry').wait(20000).click();
        cy.wait(10000);
        cy.xpath("//div/span/input[@placeholder='First Name']").type("MAC")
        cy.wait(4000);
        cy.xpath("//div/span/input[@placeholder='Last Name']").type(nextUser)
        cy.wait(4000);
      });
  }
}

export default enquiryPage;
