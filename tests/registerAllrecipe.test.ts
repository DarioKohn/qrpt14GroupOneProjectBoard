import { registerAllrecipe } from "../objects/registerAllrecipeObjects";
const regpage = new registerAllrecipe();
const fs = require("fs");

describe("Testing Allrecipe register/sign up feature with email, facebook and google", () => {

    beforeEach(async () => {
        await regpage.navigate();
        await regpage.driver.manage().window().maximize()
    });

    afterAll(async () => {
        await regpage.driver.quit();
    });

    test("Testing sign up with valid email and password until validation requirements are met", async () => {
        //Click on "Log In" link at the top of home page
        await regpage.driver.sleep(300);
        await regpage.click(regpage.mainPageLoginLnk);
        await regpage.driver.sleep(300);
        //Click on "Join Now" link at the bottom
        await regpage.click(regpage.joinNowLnk);
        await regpage.driver.sleep(300);
        await regpage.click(regpage.signUpWithEmailBtn);
        await regpage.driver.sleep(300);
        await regpage.click(regpage.emailInputBar);
        await regpage.driver.sleep(300);
        await regpage.setInput(regpage.emailInputBar, "testqrpt14@gmail.com");
        await regpage.driver.sleep(300);
        await regpage.click(regpage.showHidePasswordBtn);
        await regpage.click(regpage.passwordInputBar);
        await regpage.driver.sleep(300);
        await regpage.setInput(regpage.passwordInputBar, "Test@qrpt14!1");
        await regpage.driver.sleep(300);
        await regpage.click(regpage.showHidePasswordBtn)
        await regpage.driver.sleep(300);
        //Take screenshot
        await fs.writeFile(`${__dirname}/sign_up_valid_email_and_password.png`,
        await regpage.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log('Screenshot of fully validated inputs and enabled JOIN NOW button ready to be clicked is saved')
        });
        await regpage.driver.sleep(300);
    });

    test("Testing sign up with Facebook", async () => {
        //Click on "Log In" link at the top of home page
        await regpage.driver.sleep(300);
        await regpage.click(regpage.mainPageLoginLnk);
        await regpage.driver.sleep(300);
        //Click on "Join Now" link at the bottom
        await regpage.click(regpage.joinNowLnk);
        await regpage.driver.sleep(300);
        await regpage.click(regpage.signUpWithFacebookBtn);
        await regpage.driver.sleep(300);
        await regpage.click(regpage.facebookEmailInput);
        await regpage.setInput(regpage.facebookEmailInput, "testqrpt14@gmail.com");
        await regpage.driver.sleep(300);
        await regpage.click(regpage.facebookPasswordInput);
        await regpage.setInput(regpage.facebookPasswordInput, "Test@qrpt14!1");
        await regpage.driver.sleep(300);
        //Take screenshot of valid Facebook credentials
        await fs.writeFile(`${__dirname}/sign_up_valid_facebook_credentials.png`,
        await regpage.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log('Screenshot of Facebook valid email and password inputs is saved')
        });
    });

    test("Testing sign up with valid email and password until validation requirements are met", async () => {
        //Click on "Log In" link at the top of home page
        await regpage.driver.sleep(300);
        await regpage.click(regpage.mainPageLoginLnk);
        await regpage.driver.sleep(300);
        //Click on "Join Now" link at the bottom
        await regpage.click(regpage.joinNowLnk);
        await regpage.driver.sleep(300);
        await regpage.click(regpage.signUpWithGoogleBtn);
        await regpage.driver.sleep(300);
        await regpage.click(regpage.googleEmailInput);
        await regpage.driver.sleep(300);
        await regpage.setInput(regpage.googleEmailInput, "testqrpt14@gmail.com");
        await regpage.driver.sleep(300);
        //Take screenshot of valid Google email address
        await fs.writeFile(`${__dirname}/sign_up_valid_google_credentials.png`,
        await regpage.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log('Screenshot of Google valid email input is saved')
        });
    });

    test("Testing sign up with invalid email and valid password", async () => {
        //Click on "Log In" link at the top of home page
        await regpage.click(regpage.mainPageLoginLnk);
        await regpage.driver.sleep(300);
        //Click on "Join Now" link at the bottom
        await regpage.click(regpage.joinNowLnk);
        await regpage.driver.sleep(300);
        await regpage.click(regpage.signUpWithEmailBtn);
        await regpage.driver.sleep(300);
        await regpage.click(regpage.emailInputBar);
        await regpage.driver.sleep(300);
        await regpage.setInput(regpage.emailInputBar, "t~(*&nofdkh&[]@gmail.com");
        await regpage.driver.sleep(300);
        await regpage.click(regpage.passwordInputBar);
        await regpage.setInput(regpage.passwordInputBar, "Test@qrpt14!1");
        await regpage.driver.sleep(300);
        await regpage.click(regpage.enabledJoinNowBtn);
        //Take screenshot
        await fs.writeFile(`${__dirname}/reg_Invalid_email_Valid_password.png`,
        await regpage.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log('Screenshot of Invalid email Valid password is saved')
        });
        await regpage.driver.sleep(300);
    });

    test("Testing sign up with blank email and valid password", async () => {
        //Click on "Log In" link at the top of home page
        await regpage.click(regpage.mainPageLoginLnk);
        await regpage.driver.sleep(300);
        //Click on "Join Now" link at the bottom
        await regpage.click(regpage.joinNowLnk);
        await regpage.driver.sleep(300);
        await regpage.click(regpage.signUpWithEmailBtn);
        await regpage.driver.sleep(300);
        await regpage.click(regpage.passwordInputBar);
        await regpage.setInput(regpage.passwordInputBar, "Test@qrpt14!1");
        await regpage.driver.sleep(300);
        await regpage.click(regpage.enabledJoinNowBtn);
        //Take screenshot
        await fs.writeFile(`${__dirname}/reg_blank_email_Valid_password.png`,
        await regpage.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log('Screenshot of blank email and Valid password is saved')
        });
        await regpage.driver.sleep(300);
    });

    test("Testing sign up with blank email and blank password", async () => {
        //Click on "Log In" link at the top of home page
        await regpage.click(regpage.mainPageLoginLnk);
        await regpage.driver.sleep(300);
        //Click on "Join Now" link at the bottom
        await regpage.click(regpage.joinNowLnk);
        await regpage.driver.sleep(300);
        await regpage.click(regpage.signUpWithEmailBtn);
        await regpage.driver.sleep(300);
        //Take screenshot
        await fs.writeFile(`${__dirname}/reg_blank_email_blank_password.png`,
        await regpage.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log('Screenshot of blank email and blank password is saved')
        });
        await regpage.driver.sleep(300);
    });

    test("Testing sign up with valid email and invalid password", async () => {
        //Click on "Log In" link at the top of home page
        await regpage.click(regpage.mainPageLoginLnk);
        await regpage.driver.sleep(300);
        //Click on "Join Now" link at the bottom
        await regpage.click(regpage.joinNowLnk);
        await regpage.driver.sleep(300);
        await regpage.click(regpage.signUpWithEmailBtn);
        await regpage.driver.sleep(300);
        await regpage.click(regpage.emailInputBar);
        await regpage.setInput(regpage.emailInputBar, "testqrpt14@gmail.com");
        await regpage.driver.sleep(300);
        await regpage.click(regpage.passwordInputBar);
        await regpage.setInput(regpage.passwordInputBar, "Test@q");
        await regpage.driver.sleep(300);
        //Take screenshot
        await fs.writeFile(`${__dirname}/reg_Valid_email_Invalid_password.png`,
        await regpage.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log('Screenshot of valid email and invalid password is saved')
        });
        await regpage.driver.sleep(300);
    });
});