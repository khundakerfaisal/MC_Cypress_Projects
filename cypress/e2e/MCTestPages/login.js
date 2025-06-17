class loginPage{
    MCLoginPage(){
        cy.visit('https://testconnect.mimebd.com/login#')
        cy.get('#username').type('data.migration')
        cy.get('#password').type('Livemigration2024#')
        cy.get('#login').click()
        cy.wait(1000)
    }
}
export default loginPage;