import { pageAllrecipe } from "../objects/allAllrecipeObjects";
const page = new pageAllrecipe();
const fs = require("fs");

describe("Testing Allrecipe register feature with email, facebook and google; login feature with email, facebook and google; and main search bar with results bar", () => {

    beforeEach(async () => {
        await page.navigate();
        await page.driver.manage().window().maximize()
    });

    afterAll(async () => {
        await page.driver.quit();
    });

    test("Testing sign up with valid email and password until validation requirements are met", async () => {
        //Click on "Log In" link at the top of home page
        await page.driver.sleep(300);
        await page.click(page.mainPageLoginLnk);
        await page.driver.sleep(300);
        //Click on "Join Now" link at the bottom
        await page.click(page.joinNowLnk);
        await page.driver.sleep(300);
        await page.click(page.signUpWithEmailBtn);
        await page.driver.sleep(300);
        await page.click(page.emailInputBar);
        await page.driver.sleep(300);
        await page.setInput(page.emailInputBar, "testqrpt14@gmail.com");
        await page.driver.sleep(300);
        await page.click(page.showHidePasswordBtn);
        await page.click(page.passwordInputBar);
        await page.driver.sleep(300);
        await page.setInput(page.passwordInputBar, "Test@qrpt14!1");
        await page.driver.sleep(300);
        await page.click(page.showHidePasswordBtn)
        await page.driver.sleep(300);
        //Take screenshot
        await fs.writeFile(`${__dirname}/sign_up_valid_email_and_password.png`,
        await page.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log('Screenshot of fully validated inputs and enabled JOIN NOW button ready to be clicked is saved')
        });
        await page.driver.sleep(300);
    });

    test("Testing sign up with Facebook", async () => {
        //Click on "Log In" link at the top of home page
        await page.driver.sleep(300);
        await page.click(page.mainPageLoginLnk);
        await page.driver.sleep(300);
        //Click on "Join Now" link at the bottom
        await page.click(page.joinNowLnk);
        await page.driver.sleep(300);
        await page.click(page.signUpWithFacebookBtn);
        await page.driver.sleep(300);
        await page.click(page.facebookEmailInput);
        await page.setInput(page.facebookEmailInput, "testqrpt14@gmail.com");
        await page.driver.sleep(300);
        await page.click(page.facebookPasswordInput);
        await page.setInput(page.facebookPasswordInput, "Test@qrpt14!1");
        await page.driver.sleep(300);
        //Take screenshot of valid Facebook credentials
        await fs.writeFile(`${__dirname}/sign_up_valid_facebook_credentials.png`,
        await page.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log('Screenshot of Facebook valid email and password inputs is saved')
        });
    });

    test("Testing sign up with valid email and password until validation requirements are met", async () => {
        //Click on "Log In" link at the top of home page
        await page.driver.sleep(300);
        await page.click(page.mainPageLoginLnk);
        await page.driver.sleep(300);
        //Click on "Join Now" link at the bottom
        await page.click(page.joinNowLnk);
        await page.driver.sleep(300);
        await page.click(page.signUpWithGoogleBtn);
        await page.driver.sleep(300);
        await page.click(page.googleEmailInput);
        await page.driver.sleep(300);
        await page.setInput(page.googleEmailInput, "testqrpt14@gmail.com");
        await page.driver.sleep(300);
        //Take screenshot of valid Google email address
        await fs.writeFile(`${__dirname}/sign_up_valid_google_credentials.png`,
        await page.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log('Screenshot of Google valid email input is saved')
        });
    });

    test("Testing sign up with invalid email and valid password", async () => {
        //Click on "Log In" link at the top of home page
        await page.click(page.mainPageLoginLnk);
        await page.driver.sleep(300);
        //Click on "Join Now" link at the bottom
        await page.click(page.joinNowLnk);
        await page.driver.sleep(300);
        await page.click(page.signUpWithEmailBtn);
        await page.driver.sleep(300);
        await page.click(page.emailInputBar);
        await page.driver.sleep(300);
        await page.setInput(page.emailInputBar, "t~(*&nofdkh&[]@gmail.com");
        await page.driver.sleep(300);
        await page.click(page.passwordInputBar);
        await page.setInput(page.passwordInputBar, "Test@qrpt14!1");
        await page.driver.sleep(300);
        await page.click(page.enabledJoinNowBtn);
        //Take screenshot
        await fs.writeFile(`${__dirname}/reg_Invalid_email_Valid_password.png`,
        await page.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log('Screenshot of Invalid email Valid password is saved')
        });
        await page.driver.sleep(300);
    });

    test("Testing sign up with blank email and valid password", async () => {
        //Click on "Log In" link at the top of home page
        await page.click(page.mainPageLoginLnk);
        await page.driver.sleep(300);
        //Click on "Join Now" link at the bottom
        await page.click(page.joinNowLnk);
        await page.driver.sleep(300);
        await page.click(page.signUpWithEmailBtn);
        await page.driver.sleep(300);
        await page.click(page.passwordInputBar);
        await page.setInput(page.passwordInputBar, "Test@qrpt14!1");
        await page.driver.sleep(300);
        await page.click(page.enabledJoinNowBtn);
        //Take screenshot
        await fs.writeFile(`${__dirname}/reg_blank_email_Valid_password.png`,
        await page.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log('Screenshot of blank email and Valid password is saved')
        });
        await page.driver.sleep(300);
    });

    test("Testing sign up with blank email and blank password", async () => {
        //Click on "Log In" link at the top of home page
        await page.click(page.mainPageLoginLnk);
        await page.driver.sleep(300);
        //Click on "Join Now" link at the bottom
        await page.click(page.joinNowLnk);
        await page.driver.sleep(300);
        await page.click(page.signUpWithEmailBtn);
        await page.driver.sleep(300);
        //Take screenshot
        await fs.writeFile(`${__dirname}/reg_blank_email_blank_password.png`,
        await page.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log('Screenshot of blank email and blank password is saved')
        });
        await page.driver.sleep(300);
    });

    test("Testing sign up with valid email and invalid password", async () => {
        //Click on "Log In" link at the top of home page
        await page.click(page.mainPageLoginLnk);
        await page.driver.sleep(300);
        //Click on "Join Now" link at the bottom
        await page.click(page.joinNowLnk);
        await page.driver.sleep(300);
        await page.click(page.signUpWithEmailBtn);
        await page.driver.sleep(300);
        await page.click(page.emailInputBar);
        await page.setInput(page.emailInputBar, "testqrpt14@gmail.com");
        await page.driver.sleep(300);
        await page.click(page.passwordInputBar);
        await page.setInput(page.passwordInputBar, "Test@q");
        await page.driver.sleep(300);
        //Take screenshot
        await fs.writeFile(`${__dirname}/reg_Valid_email_Invalid_password.png`,
        await page.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log('Screenshot of valid email and invalid password is saved')
        });
        await page.driver.sleep(300);
    });

    test("Testing login with registered email and password", async () => {
        //Click on "Log In" link at the top of home page
        await page.click(page.mainPageLoginLnk);
        await page.driver.sleep(600);
        await page.click(page.loginWithEmailBtn);
        await page.driver.sleep(300);
        await page.click(page.emailInput);
        await page.setInput(page.emailInput, "testqrpt14@gmail.com");
        await page.driver.sleep(300);
        await page.click(page.passwordShowHideBtn);
        await page.click(page.passwordInput);
        await page.setInput(page.passwordInput, "Test@qrpt14!1");
        await page.driver.sleep(300);
        await page.click(page.passwordShowHideBtn);
        await page.driver.sleep(300);
        await page.click(page.loginBtn);
        await page.driver.sleep(300);
        //Take screenshot of successful Email login on main page
        await fs.writeFile(`${__dirname}/successful_login_Email_wellcome.png`,
        await page.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log('Screenshot of successful login with valid Email is saved')
        });
        await page.click(page.mainPageMyAccountLnk);
        await page.driver.sleep(300);
        await page.click(page.mainPageLogoutLnk);
        await page.driver.sleep(300);
        //Take screenshot of logout message - bug
        await fs.writeFile(`${__dirname}/logout_with_a_logout_message.png`,
        await page.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log('Screenshot of logout with logout message is saved')
        });
    });

    test("Testing login with Facebook account", async () => {
        await page.click(page.mainPageLoginLnk);
        await page.driver.sleep(300);
        await page.click(page.loginWithFacebookBtn);
        await page.driver.sleep(300);
        await page.click(page.facebookEmailInput);
        await page.setInput(page.facebookEmailInput, "testqrpt14@gmail.com");
        await page.driver.sleep(300);
        await page.click(page.facebookPasswordInput);
        await page.setInput(page.facebookPasswordInput, "Test@qrpt14!1");
        await page.driver.sleep(300);
        await page.click(page.facebookLoginBtn);
        await page.driver.sleep(300);
        //Take screenshot of successful Facebook login on main page
        await fs.writeFile(`${__dirname}/successful_login_Facebook_wellcome.png`,
        await page.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log('Screenshot of successful login with Facebook is saved')
        });
        await page.click(page.mainPageMyAccountLnk);
        await page.driver.sleep(300);
        await page.click(page.mainPageLogoutLnk);
        await page.driver.sleep(300);
    });

    test("Testing login with Google account", async () => {
        await page.click(page.mainPageLoginLnk);
        await page.driver.sleep(300);
        await page.click(page.loginWithGoogleBtn);
        await page.driver.sleep(300);
        await page.click(page.googleEmailInput);
        await page.setInput(page.googleEmailInput, "testqrpt14@gmail.com");
        await page.driver.sleep(300);
        await page.click(page.googleSignInNextBtn);
        await page.driver.sleep(600);
        //Take screenshot of "Couldn't sign you in" Google message
        await fs.writeFile(`${__dirname}/screenshot_Google_cant_sign_in.png`,
        await page.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log('Screenshot of successful login with Google is saved')
        });
    });

    test("Testing login with invalid email and valid password", async () => {
        //Click on "Log In" link at the top of home page
        await page.click(page.mainPageLoginLnk);
        await page.driver.sleep(600);
        await page.click(page.loginWithEmailBtn);
        await page.driver.sleep(300);
        await page.click(page.emailInput);
        await page.setInput(page.emailInput, "t~(*&nofdkh&[]@gmail.com");
        await page.driver.sleep(300);
        await page.click(page.passwordShowHideBtn);
        await page.click(page.passwordInput);
        await page.setInput(page.passwordInput, "Test@qrpt14!1");
        await page.driver.sleep(300);
        await page.click(page.passwordShowHideBtn);
        await page.driver.sleep(300);
        await page.click(page.loginBtn);
        await page.driver.sleep(300);
        //Take screenshot
        await fs.writeFile(`${__dirname}/Log_invalid_email_valid_password.png`,
        await page.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log('Screenshot of invalid Email and valid password is saved')
        });
        await page.driver.sleep(300);
    });

    test("Testing login with blank email and valid password", async () => {
        //Click on "Log In" link at the top of home page
        await page.click(page.mainPageLoginLnk);
        await page.driver.sleep(600);
        await page.click(page.loginWithEmailBtn);
        await page.driver.sleep(300);
        await page.click(page.passwordShowHideBtn);
        await page.click(page.passwordInput);
        await page.setInput(page.passwordInput, "Test@qrpt14!1");
        await page.driver.sleep(300);
        await page.click(page.passwordShowHideBtn);
        await page.driver.sleep(300);
        await page.click(page.loginBtn);
        await page.driver.sleep(300);
        //Take screenshot
        await fs.writeFile(`${__dirname}/Log_blank_email_valid_password.png`,
        await page.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log('Screenshot of blank Email and valid password is saved')
        });
        await page.driver.sleep(300);
    });

    test("Testing login with valid email and invalid password", async () => {
        //Click on "Log In" link at the top of home page
        await page.click(page.mainPageLoginLnk);
        await page.driver.sleep(600);
        await page.click(page.loginWithEmailBtn);
        await page.driver.sleep(300);
        await page.click(page.emailInput);
        await page.setInput(page.emailInput, "testqrpt14@gmail.com");
        await page.driver.sleep(300);
        await page.click(page.passwordShowHideBtn);
        await page.click(page.passwordInput);
        await page.setInput(page.passwordInput, "Test@q");
        await page.driver.sleep(300);
        await page.click(page.passwordShowHideBtn);
        await page.driver.sleep(300);
        await page.click(page.loginBtn);
        //Take screenshot
        await fs.writeFile(`${__dirname}/Log_valid_email_invalid_password.png`,
        await page.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log('Screenshot of valid Email and invalid password is saved')
        });
        await page.driver.sleep(300);
    });

    test("Testing login with blank email and blank password", async () => {
        //Click on "Log In" link at the top of home page
        await page.click(page.mainPageLoginLnk);
        await page.driver.sleep(600);
        await page.click(page.loginWithEmailBtn);
        await page.driver.sleep(300);
        await page.click(page.loginBtn);
        //Take screenshot
        await fs.writeFile(`${__dirname}/Log_blank_email_blank_password.png`,
        await page.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log('Screenshot of blank email and blank password is saved')
        });
        await page.driver.sleep(300);
    });

    test("Searching with multiple valid terms Uppercase", async () => {
        //Click on main search bar at the top of home page
        await page.driver.sleep(600);
        await page.click(page.mainSearchInputBar);
        await page.setInput(page.mainSearchInputBar, "Chicken Fish Fried Meat");
        await page.driver.sleep(600);
        await page.click(page.searchBtn);
        await page.driver.sleep(600);
        await page.getResults();
        //write a file with the text results
        await fs.writeFile(`${__dirname}/multiple_terms_Uppercase.txt`, await page.getResults(), (e) => {
        if (e) console.error(e)
        else console.log("Text results with multiple terms Uppercase saved"); 
        });
        //Take screenshot
        await fs.writeFile(`${__dirname}/multiple_terms_Uppercase.png`,
        await page.driver.takeScreenshot(), 'base64',
        (e) => {
        if (e) console.error(e)
        else console.log("Screenshot results with multiple terms Uppercase saved");
        });
        await page.driver.sleep(600);
    });

    test("Searching with multiple valid terms Lowercase", async () => {
        //Click on main search bar at the top of home page
        await page.driver.sleep(600);
        await page.click(page.mainSearchInputBar);
        await page.setInput(page.mainSearchInputBar, "chicken fish fried meat");
        await page.driver.sleep(600);
        await page.click(page.searchBtn);
        await page.driver.sleep(600);
        await page.getResults();
        //write a file with the text results
        await fs.writeFile(`${__dirname}/multiple_terms_Lowercase.txt`, await page.getResults(), (e) => {
        if (e) console.error(e)
        else console.log("Text results with multiple terms Lowercase saved"); 
        });
        //Take screenshot
        await fs.writeFile(`${__dirname}/multiple_terms_Lowercase.png`,
        await page.driver.takeScreenshot(), 'base64',
        (e) => {
        if (e) console.error(e)
        else console.log("Screenshot results with multiple terms Lowercase saved");
        });
        await page.driver.sleep(600);
    });

    test("Searching with multiple Special Characters", async () => {
        await page.driver.sleep(600);
        await page.click(page.mainSearchInputBar);
        await page.setInput(page.mainSearchInputBar, "@~!#$%^*()_+={}|&");
        await page.driver.sleep(600);
        await page.click(page.searchBtn);
        await page.driver.sleep(600);
        //Take screenshot of multiple special characters - bug
        await fs.writeFile(`${__dirname}/results_multiple_special_characters.png`,
        await page.driver.takeScreenshot(), 'base64',
        (e) => {
        if (e) console.error(e)
        else console.log("Screenshot of multiple special characters saved");
        });
        await page.driver.sleep(600);
    });

    test("Searching with multiple numbers", async () => {
        await page.driver.sleep(600);
        await page.click(page.mainSearchInputBar);
        await page.setInput(page.mainSearchInputBar, "9876543210");
        await page.driver.sleep(600);
        await page.click(page.searchBtn);
        await page.driver.sleep(600);
        //Take screenshot
        await fs.writeFile(`${__dirname}/results_multiple_numbers.png`,
        await page.driver.takeScreenshot(), 'base64',
        (e) => {
        if (e) console.error(e)
        else console.log("Screenshot of multiple numbers saved");
        });
        await page.driver.sleep(600);
    });

    test("Searching with blank inputs on both searching bars", async () => {
        await page.driver.sleep(600);
        await page.click(page.mainSearchInputBar);
        await page.setInput(page.mainSearchInputBar, "9876543210");
        await page.driver.sleep(600);
        await page.click(page.searchBtn);
        await page.driver.sleep(600);
        await page.click(page.mainSearchInputBar);
        await page.setInput(page.mainSearchInputBar, "");
        await page.driver.sleep(600);
        await page.click(page.searchBtn);
        //Take screenshot
        await fs.writeFile(`${__dirname}/errorMsg_fill_out_field1.png`,
        await page.driver.takeScreenshot(), 'base64',
        (e) => {
        if (e) console.error(e)
        else console.log("Screenshot of blank bar with error message 1 saved");
        });
        await page.driver.sleep(600);
        await page.click(page.clearSearchFormBtn);
        await page.driver.sleep(600);
        await page.click(page.searchGoBtn);
        //Take screenshot
        await fs.writeFile(`${__dirname}/errorMsg_fill_out_field2.png`,
        await page.driver.takeScreenshot(), 'base64',
        (e) => {
        if (e) console.error(e)
        else console.log("Screenshot of blank bar with error message 2 saved");
        });
        await page.driver.sleep(600);
        await page.click(page.searchBtn);
        //Take screenshot
        await fs.writeFile(`${__dirname}/errorMsg_fill_out_field1&2.png`,
        await page.driver.takeScreenshot(), 'base64',
        (e) => {
        if (e) console.error(e)
        else console.log("Screenshot of blank bars with error messages 1 & 2 saved");
        });
        await page.driver.sleep(600);
    });

    test("Searching with RETURN & ENTER keys on both searching bars", async () => {
        await page.driver.sleep(600);
        await page.click(page.mainSearchInputBar);
        await page.setInput(page.mainSearchInputBar, "Pancakes");
        await page.driver.sleep(600);
        //Press RETURN key
        await page.driver.actions().sendKeys("\ue006").perform();
        await page.driver.sleep(600);
        await page.click(page.clearSearchFormBtn);
        await page.driver.sleep(600);
        await page.click(page.resultsSearchInputBar);
        await page.setInput(page.resultsSearchInputBar, "Fries");
        await page.driver.sleep(600);
        //Press RETURN key
        await page.driver.actions().sendKeys("\ue006").perform();
        await page.driver.sleep(600);
        await page.click(page.mainSearchInputBar);
        await page.setInput(page.mainSearchInputBar, "");
        await page.driver.sleep(600);
        await page.click(page.mainSearchInputBar);
        await page.setInput(page.mainSearchInputBar, "Hamburger");
        await page.driver.sleep(600);
        //Press ENTER key
        await page.driver.actions().sendKeys("\ue007").perform();
        await page.driver.sleep(600);
        await page.click(page.clearSearchFormBtn);
        await page.driver.sleep(600);
        await page.click(page.resultsSearchInputBar);
        await page.setInput(page.resultsSearchInputBar, "Ice Cream");
        await page.driver.sleep(600);
        //Press ENTER key
        await page.driver.actions().sendKeys("\ue007").perform();
        await page.driver.sleep(600);
    });
});