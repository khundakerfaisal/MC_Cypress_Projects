class enquiryPage {
  MCEnquiryPage() {
    cy.task('ensureLastNameFile').then(() => {
      cy.readFile('cypress/fixtures/lastName.json').then((data) => {
        const lastEntry = data[data.length - 1];
        const [prefix, numberStr] = lastEntry.lastName.split('-');
        const nextNumber = parseInt(numberStr) + 1;
        const newLastName = `${prefix}-${nextNumber}`;

        // Add new entry and write back
        data.push({ lastName: newLastName });
        cy.task('writeLastName', data);

        // Use newLastName in UI form
        cy.wait(16000);
        cy.get(".navbar-toggler").eq(0).click();
        cy.wait(5000);
        cy.xpath("//div/ul/li/a/p[text()='Enquiry']").click();
        cy.wait(35000);
        cy.xpath("//div/button[@id='new_enquiry']").click();
        cy.wait(10000);
        cy.xpath("//div/span/input[@placeholder='First Name']").type("MAC").click();
        cy.wait(4000);
        cy.xpath("//div/span/input[@placeholder='Last Name']").type(newLastName).click();
        cy.wait(4000);
      });
    });
  }
}

export default enquiryPage;
