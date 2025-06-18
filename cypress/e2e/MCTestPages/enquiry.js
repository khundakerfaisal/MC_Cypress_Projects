class enquiryPage {
  MCEnquiryPage() {
    // Step 1: Ensure JSON file exists and has base data
    cy.task('ensureLastNameFile').then(() => {

      // Step 2: Now read the file
      cy.readFile('cypress/fixtures/lastName.json').then((data) => {
        const lastEntry = data[data.length - 1];
        const [prefix, numberStr] = lastEntry.lastName.split('-');
        const nextNumber = parseInt(numberStr) + 1;
        const newLastName = `${prefix}-${nextNumber}`;
        // Step 3: Add new entry and write back
        data.push({ lastName: newLastName });
        cy.task('writeLastName', data);
        // Step 4: Continue your test (example UI steps)
        cy.wait(16000);
        cy.get(".navbar-toggler").eq(0).click();
        cy.wait(5000);
        cy.xpath("//div/ul/li/a/p[text()='Enquiry']").click();
        cy.wait(25000);
        cy.xpath("//div/button[@id='new_enquiry']").click();
        cy.wait(8000);

        cy.xpath("//div/span/input[@placeholder='First Name']").type("MAC").click()
         cy.wait(4000);
        cy.xpath("//div/span/input[@placeholder='Last Name']").type("newLastName" ).click()
         cy.wait(4000);

        // Optional: use newLastName in UI
        // cy.get('#name').type(newLastName);
      });
    });
  }
}

export default enquiryPage;
