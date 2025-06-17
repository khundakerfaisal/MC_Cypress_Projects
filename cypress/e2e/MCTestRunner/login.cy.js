import loginPage from "../MCTestPages/login";

describe("MC Login Page",()=>{
    const LoginPage=new loginPage();
    it("Create login with valid creds",()=>{
        LoginPage.MCLoginPage();

    })

})
