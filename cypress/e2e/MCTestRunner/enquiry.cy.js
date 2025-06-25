import loginPage from "../MCTestPages/login";
import enquiryPage from "../MCTestPages/enquiry";

describe("Input New Enquiry", () => {
  const LoginPage = new loginPage();
  const EnquiryPage = new enquiryPage();

  beforeEach(() => {
    LoginPage.MCLoginPage();
  });

  it("Create New enquiry", () => {
    EnquiryPage.MCEnquiryPage();
    
  });
  Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('updateGradients')) {
    // returning false prevents Cypress from failing the test
    return false;
  }
});
});
