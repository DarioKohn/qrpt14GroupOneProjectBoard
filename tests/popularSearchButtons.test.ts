import { psb } from "../objects/PSBpageObject";
const page = new psb()
const fs = require('fs');

describe("Testing AllRecipes for qrpt14 Group Project, testing pupular search buttons", () => {

    //Purpose of this test is to check if all of the popular search buttons work

    beforeEach(async () => {
        await page.navigate();
    });
    afterAll(async () => {
        await page.driver.quit();
    });
 test ("Popular Search Buttons", async () => {
    //Scroll down to pupular search buttons card
    await page.scroll()
    //Click the first popular search button
await page.click(page.chxBtn);
//Take scren shot of results
await fs.writeFile(`${__dirname}/psb-chicken.png`,
    await page.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Chicken Save Succesful')
    });
    //Go back to the home page
await page.click(page.homeBtn);
//Scroll back down to the popular search buttons card
await page.scroll()
//Click the next popular search button
await page.click(page.smBtn);
//Take screen shot of results
await fs.writeFile(`${__dirname}/psb-smoothies.png`,
    await page.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Smoothie Save Succesful')
    });
    //Go back to the home page
await page.click(page.homeBtn);
//Scroll back down to the popular search buttons
await page.scroll()
//Wait a minute for everything to load and be visible
await page.driver.sleep(2000);
//Click the next popular search button
await page.click(page.banBrBtn);
//Take screen shot of results
await fs.writeFile(`${__dirname}/psb-banana-bread.png`,
    await page.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Banana Bread Save Succesful')
    });
    //Back to the home page again
await page.click(page.homeBtn);
//Scroll  back down to the popular search buttons bard
await page.scroll()
//Click the next popular serach button
await page.click(page.lasBtn);
//Take screen shot of results
await fs.writeFile(`${__dirname}/psb-lasagna.png`,
    await page.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Lasagna Save Succesful')
    });
    //Back to the home page again
await page.click(page.homeBtn);
//Scroll back down to the popular search buttons
await page.scroll()
//Click the next popular search button
await page.click(page.panBtn);
//Take screen shot of results
await fs.writeFile(`${__dirname}/psb-pancakes.png`,
    await page.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Pancakes Save Succesful')
    });
    //Back to the home page again
await page.click(page.homeBtn);
//Scroll back down to the popular search buttons
await page.scroll()
//Click on the next popular search button
await page.click(page.meatBtn);
//Take screen shot of results
await fs.writeFile(`${__dirname}/psb-meatloaf.png`,
    await page.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Meatloaf Save Succesful')
    });
    //Back to the home page again
await page.click(page.homeBtn);
//Scroll back down to the popular serach buttons
await page.scroll()
//Click the next popular search button
await page.click(page.cookBtn);
//Take screen shot of results
await fs.writeFile(`${__dirname}/psb-cookies.png`,
    await page.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Cookies Save Succesful')
    });
    //Back to the home page again
await page.click(page.homeBtn);
//Scroll back down to the popular search button card
await page.scroll()
//Click the last popular search button
await page.click(page.chilBtn);
//Take screen shot of results
await fs.writeFile(`${__dirname}/psb-chili.png`,
    await page.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Chili Save Succesful')
    });
}); 
});
