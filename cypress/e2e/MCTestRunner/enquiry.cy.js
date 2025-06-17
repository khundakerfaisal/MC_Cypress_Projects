import loginPage from "../MCTestPages/login";
import enquiryPage from "../MCTestPages/enquiry";

describe("Input New Enquiry",()=>{
    const LoginPage=new loginPage();
    const EnquiryPage=new enquiryPage();

    beforeEach(()=>{
        LoginPage.MCLoginPage();

    })

    it("Create New enquiry",()=>{
        EnquiryPage.MCEnquiryPage();

    })

})