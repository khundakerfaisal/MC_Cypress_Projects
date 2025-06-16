import LoginPage from "./login";


describe ("MC Login Page",()=>{
    const loginPage=new LoginPage();
    it("MC Login With Valid Creds",()=>{
        loginPage.MCLoginPage();

    })
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

//   it("closes browser", () => {
//     // Close the browser window
//     cy.window().then(win => {
//       win.close();
//     });
//   });

})
