import { nlpo } from "../objects/newsletterPageObject";
const page = new nlpo();
const { until } = require('selenium-webdriver');
const fs = require('fs');

describe("Testing AllRecipes for qrpt14 Group Project, testing Newsletter Signup with one valid email and one invalid email", () => {

    //Purpose of test one is to check if user can sign up for the newsletter with default options checked
    //Test two checks what happens when no information is entered
    
    beforeEach(async () => {
        await page.navigate();
    });
    afterAll(async () => {
        await page.driver.quit();
    });
    test("Testing Newsletter Signup with emaiil", async () => {
        // Open the Newsletter Popup
        await page.click(page.newsLtrBtn);
        //Enter Email
        await page.click(page.emailInput);
        await page.sendKeys(page.emailInput, "Aerosmitten@duck.com");
        // Click the signup button
        await page.click(page.signUpBtn)
        //Popup should say "Success!"
        await page.driver.wait(until.elementIsVisible(await page.driver.findElement(page.success)));    
        //Take screenshot
        await fs.writeFile(`${__dirname}/newsletter-signup-valid.png`
        ,await page.driver.takeScreenshot(), "base64",
        (e) => {
            if (e) console.error(e)
            else console.log('Save Succesful')
        });
        //Close the Popup with the excape key
        await page.driver.actions().sendKeys("\uE00C").perform();   
    });

    test("Testing signup with invalid email", async () => {
        //Open the Popups again
        await page.click(page.newsLtrBtn);
        //Deselect all buttons
        await page.click(page.dtCheck);
        await page.click(page.wsCheck);
        await page.click(page.kfCheck);
        await page.click(page.tffCheck);
        await page.click(page.eeCheck);
        await page.click(page.signUpBtn);
        //error card shown
        await page.driver.wait(until.elementIsVisible(await page.driver.findElement(page.nope)));
        //Take screenshot
        await fs.writeFile(`${__dirname}/newsletter-signup-invalid.png`,
        await page.driver.takeScreenshot(), "base64",
        (e) => {
            if (e) console.error(e)
            else console.log('Save Succesful')
        });
    })
});