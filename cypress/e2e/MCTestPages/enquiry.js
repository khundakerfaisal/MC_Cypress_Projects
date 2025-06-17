class enquiryPage{
    MCEnquiryPage(){
        cy.wait(16000)
        cy.get('.navbar-toggle > .navbar-toggler').click();
         cy.wait(5000)
        cy.xpath("//div/ul/li/a/p[text()='Enquiry']").click()


    }
}
export default enquiryPage;