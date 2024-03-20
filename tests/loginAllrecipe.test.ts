import { loginAllrecipe } from "../objects/loginAllrecipeObjects";
const logpage = new loginAllrecipe();
const fs = require("fs");

describe("Testing Allrecipe login feature with email, facebook and google", () => {

    beforeEach(async () => {
        await logpage.navigate();
        await logpage.driver.manage().window().maximize()
    });

    afterAll(async () => {
        await logpage.driver.quit();
    });

    test("Testing login with registered email and password", async () => {
        //Click on "Log In" link at the top of home page
        await logpage.click(logpage.mainPageLoginLnk);
        await logpage.driver.sleep(600);
        await logpage.click(logpage.loginWithEmailBtn);
        await logpage.driver.sleep(300);
        await logpage.click(logpage.emailInput);
        await logpage.setInput(logpage.emailInput, "testqrpt14@gmail.com");
        await logpage.driver.sleep(300);
        await logpage.click(logpage.passwordShowHideBtn);
        await logpage.click(logpage.passwordInput);
        await logpage.setInput(logpage.passwordInput, "Test@qrpt14!1");
        await logpage.driver.sleep(300);
        await logpage.click(logpage.passwordShowHideBtn);
        await logpage.driver.sleep(300);
        await logpage.click(logpage.loginBtn);
        await logpage.driver.sleep(300);
        //Take screenshot of successful Email login on main page
        await fs.writeFile(`${__dirname}/successful_login_Email_wellcome.png`,
        await logpage.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log('Screenshot of successful login with valid Email is saved')
        });
        await logpage.click(logpage.mainPageMyAccountLnk);
        await logpage.driver.sleep(300);
        await logpage.click(logpage.mainPageLogoutLnk);
        await logpage.driver.sleep(300);
        //Take screenshot of logout message - bug
        await fs.writeFile(`${__dirname}/logout_with_a_logout_message.png`,
        await logpage.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log('Screenshot of logout with logout message is saved')
        });
    });

    test("Testing login with Facebook account", async () => {
        await logpage.click(logpage.mainPageLoginLnk);
        await logpage.driver.sleep(300);
        await logpage.click(logpage.loginWithFacebookBtn);
        await logpage.driver.sleep(300);
        await logpage.click(logpage.facebookEmailInput);
        await logpage.setInput(logpage.facebookEmailInput, "testqrpt14@gmail.com");
        await logpage.driver.sleep(300);
        await logpage.click(logpage.facebookPasswordInput);
        await logpage.setInput(logpage.facebookPasswordInput, "Test@qrpt14!1");
        await logpage.driver.sleep(300);
        await logpage.click(logpage.facebookLoginBtn);
        await logpage.driver.sleep(300);
        //Take screenshot of successful Facebook login on main page
        await fs.writeFile(`${__dirname}/successful_login_Facebook_wellcome.png`,
        await logpage.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log('Screenshot of successful login with Facebook is saved')
        });
        await logpage.click(logpage.mainPageMyAccountLnk);
        await logpage.driver.sleep(300);
        await logpage.click(logpage.mainPageLogoutLnk);
        await logpage.driver.sleep(300);
    });

    test("Testing login with Google account", async () => {
        await logpage.click(logpage.mainPageLoginLnk);
        await logpage.driver.sleep(300);
        await logpage.click(logpage.loginWithGoogleBtn);
        await logpage.driver.sleep(300);
        await logpage.click(logpage.googleEmailInput);
        await logpage.setInput(logpage.googleEmailInput, "testqrpt14@gmail.com");
        await logpage.driver.sleep(300);
        await logpage.click(logpage.googleSignInNextBtn);
        await logpage.driver.sleep(600);
        //Take screenshot of "Couldn't sign you in" Google message
        await fs.writeFile(`${__dirname}/screenshot_Google_cant_sign_in.png`,
        await logpage.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log('Screenshot of successful login with Google is saved')
        });
    });

    test("Testing login with invalid email and valid password", async () => {
        //Click on "Log In" link at the top of home page
        await logpage.click(logpage.mainPageLoginLnk);
        await logpage.driver.sleep(600);
        await logpage.click(logpage.loginWithEmailBtn);
        await logpage.driver.sleep(300);
        await logpage.click(logpage.emailInput);
        await logpage.setInput(logpage.emailInput, "t~(*&nofdkh&[]@gmail.com");
        await logpage.driver.sleep(300);
        await logpage.click(logpage.passwordShowHideBtn);
        await logpage.click(logpage.passwordInput);
        await logpage.setInput(logpage.passwordInput, "Test@qrpt14!1");
        await logpage.driver.sleep(300);
        await logpage.click(logpage.passwordShowHideBtn);
        await logpage.driver.sleep(300);
        await logpage.click(logpage.loginBtn);
        await logpage.driver.sleep(300);
        //Take screenshot
        await fs.writeFile(`${__dirname}/Log_invalid_email_valid_password.png`,
        await logpage.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log('Screenshot of invalid Email and valid password is saved')
        });
        await logpage.driver.sleep(300);
    });

    test("Testing login with blank email and valid password", async () => {
        //Click on "Log In" link at the top of home page
        await logpage.click(logpage.mainPageLoginLnk);
        await logpage.driver.sleep(600);
        await logpage.click(logpage.loginWithEmailBtn);
        await logpage.driver.sleep(300);
        await logpage.click(logpage.passwordShowHideBtn);
        await logpage.click(logpage.passwordInput);
        await logpage.setInput(logpage.passwordInput, "Test@qrpt14!1");
        await logpage.driver.sleep(300);
        await logpage.click(logpage.passwordShowHideBtn);
        await logpage.driver.sleep(300);
        await logpage.click(logpage.loginBtn);
        await logpage.driver.sleep(300);
        //Take screenshot
        await fs.writeFile(`${__dirname}/Log_blank_email_valid_password.png`,
        await logpage.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log('Screenshot of blank Email and valid password is saved')
        });
        await logpage.driver.sleep(300);
    });

    test("Testing login with valid email and invalid password", async () => {
        //Click on "Log In" link at the top of home page
        await logpage.click(logpage.mainPageLoginLnk);
        await logpage.driver.sleep(600);
        await logpage.click(logpage.loginWithEmailBtn);
        await logpage.driver.sleep(300);
        await logpage.click(logpage.emailInput);
        await logpage.setInput(logpage.emailInput, "testqrpt14@gmail.com");
        await logpage.driver.sleep(300);
        await logpage.click(logpage.passwordShowHideBtn);
        await logpage.click(logpage.passwordInput);
        await logpage.setInput(logpage.passwordInput, "Test@q");
        await logpage.driver.sleep(300);
        await logpage.click(logpage.passwordShowHideBtn);
        await logpage.driver.sleep(300);
        await logpage.click(logpage.loginBtn);
        //Take screenshot
        await fs.writeFile(`${__dirname}/Log_valid_email_invalid_password.png`,
        await logpage.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log('Screenshot of valid Email and invalid password is saved')
        });
        await logpage.driver.sleep(300);
    });

    test("Testing login with blank email and blank password", async () => {
        //Click on "Log In" link at the top of home page
        await logpage.click(logpage.mainPageLoginLnk);
        await logpage.driver.sleep(600);
        await logpage.click(logpage.loginWithEmailBtn);
        await logpage.driver.sleep(300);
        await logpage.click(logpage.loginBtn);
        //Take screenshot
        await fs.writeFile(`${__dirname}/Log_blank_email_blank_password.png`,
        await logpage.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log('Screenshot of blank email and blank password is saved')
        });
        await logpage.driver.sleep(300);
    });
});