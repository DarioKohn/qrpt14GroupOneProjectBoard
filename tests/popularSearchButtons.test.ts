import { psb } from "../objects/PSBpageObject";
const page = new psb()
const fs = require('fs');

describe("Testing AllRecipes for qrpt14 Group Project, testing pupular search buttons", () => {

    //Purpose of this test is to check if all of the popular search buttons work
    //First click the chicken button and save screenshot, then home button
    //then click the smoothies button and save screenshot, then home button
    //then click the banana bread butto and save screenshot, then home button
    //then click the lasagna button and save screenshot, then home button
    //then click the pancakes button and save screenshot, then home button
    //then click the meatloaf button and save screenshot, then home button
    //then click the cookies button and save screenshot, then home button
    //then click the chili button and save screenshot, then close the browser


    beforeEach(async () => {
        await page.navigate();
    });
    afterAll(async () => {
        await page.driver.quit();
    });
 test ("Popular Search Buttons", async () => {
    await page.scroll()
await page.click(page.chxBtn);
await fs.writeFile(`${__dirname}/psb-chicken.png`,
    await page.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Save Succesful')
    });
await page.click(page.homeBtn);
await page.scroll()
await page.click(page.smBtn);
await fs.writeFile(`${__dirname}/psb-smoothies.png`,
    await page.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Save Succesful')
    });
await page.click(page.homeBtn);
await page.scroll()
await page.driver.sleep(2000);
await page.click(page.banBrBtn);
await fs.writeFile(`${__dirname}/psb-banana-bread.png`,
    await page.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Save Succesful')
    });
await page.click(page.homeBtn);
await page.scroll()
await page.click(page.lasBtn);
await fs.writeFile(`${__dirname}/psb-lasagna.png`,
    await page.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Save Succesful')
    });
await page.click(page.homeBtn);
await page.scroll()
await page.click(page.panBtn);
await fs.writeFile(`${__dirname}/psb-pancakes.png`,
    await page.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Save Succesful')
    });
await page.click(page.homeBtn);
await page.scroll()
await page.click(page.meatBtn);
await fs.writeFile(`${__dirname}/psb-meatloaf.png`,
    await page.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Save Succesful')
    });
await page.click(page.homeBtn);
await page.scroll()
await page.click(page.cookBtn);
await fs.writeFile(`${__dirname}/psb-cookies.png`,
    await page.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Save Succesful')
    });
await page.click(page.homeBtn);
await page.scroll()
await page.click(page.chilBtn);
await fs.writeFile(`${__dirname}/psb-chili.png`,
    await page.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Save Succesful')
    });
}); 
});
