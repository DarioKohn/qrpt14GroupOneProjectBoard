import { searchBarAllrecipe } from "../objects/searchAllrecipeObjects";
const searchpage = new searchBarAllrecipe();
const fs = require("fs");

describe("Testing search bar and results bar", () => {

    beforeEach(async () => {
        await searchpage.navigate();
        await searchpage.driver.manage().window().maximize()
    });

    afterAll(async () => {
        await searchpage.driver.quit();
    });

    test("Searching with multiple valid terms Uppercase", async () => {
        //Click on main search bar at the top of home page
        await searchpage.driver.sleep(600);
        await searchpage.click(searchpage.mainSearchInputBar);
        await searchpage.setInput(searchpage.mainSearchInputBar, "Chicken Fish Fried Meat");
        await searchpage.driver.sleep(600);
        await searchpage.click(searchpage.searchBtn);
        await searchpage.driver.sleep(600);
        await searchpage.getResults();
        //write a file with the text results
        await fs.writeFile(`${__dirname}/multiple_terms_Uppercase.txt`, await searchpage.getResults(), (e) => {
        if (e) console.error(e)
        else console.log("Text results with multiple terms Uppercase saved"); 
        });
        //Take screenshot
        await fs.writeFile(`${__dirname}/multiple_terms_Uppercase.png`,
        await searchpage.driver.takeScreenshot(), 'base64',
        (e) => {
        if (e) console.error(e)
        else console.log("Screenshot results with multiple terms Uppercase saved");
        });
        await searchpage.driver.sleep(600);
    });

    test("Searching with multiple valid terms Lowercase", async () => {
        //Click on main search bar at the top of home page
        await searchpage.driver.sleep(600);
        await searchpage.click(searchpage.mainSearchInputBar);
        await searchpage.setInput(searchpage.mainSearchInputBar, "chicken fish fried meat");
        await searchpage.driver.sleep(600);
        await searchpage.click(searchpage.searchBtn);
        await searchpage.driver.sleep(600);
        await searchpage.getResults();
        //write a file with the text results
        await fs.writeFile(`${__dirname}/multiple_terms_Lowercase.txt`, await searchpage.getResults(), (e) => {
        if (e) console.error(e)
        else console.log("Text results with multiple terms Lowercase saved"); 
        });
        //Take screenshot
        await fs.writeFile(`${__dirname}/multiple_terms_Lowercase.png`,
        await searchpage.driver.takeScreenshot(), 'base64',
        (e) => {
        if (e) console.error(e)
        else console.log("Screenshot results with multiple terms Lowercase saved");
        });
        await searchpage.driver.sleep(600);
    });

    test("Searching with multiple Special Characters", async () => {
        await searchpage.driver.sleep(600);
        await searchpage.click(searchpage.mainSearchInputBar);
        await searchpage.setInput(searchpage.mainSearchInputBar, "@~!#$%^*()_+={}|&");
        await searchpage.driver.sleep(600);
        await searchpage.click(searchpage.searchBtn);
        await searchpage.driver.sleep(600);
        //Take screenshot of multiple special characters - bug
        await fs.writeFile(`${__dirname}/results_multiple_special_characters.png`,
        await searchpage.driver.takeScreenshot(), 'base64',
        (e) => {
        if (e) console.error(e)
        else console.log("Screenshot of multiple special characters saved");
        });
        await searchpage.driver.sleep(600);
    });

    test("Searching with multiple numbers", async () => {
        await searchpage.driver.sleep(600);
        await searchpage.click(searchpage.mainSearchInputBar);
        await searchpage.setInput(searchpage.mainSearchInputBar, "9876543210");
        await searchpage.driver.sleep(600);
        await searchpage.click(searchpage.searchBtn);
        await searchpage.driver.sleep(600);
        //Take screenshot
        await fs.writeFile(`${__dirname}/results_multiple_numbers.png`,
        await searchpage.driver.takeScreenshot(), 'base64',
        (e) => {
        if (e) console.error(e)
        else console.log("Screenshot of multiple numbers saved");
        });
        await searchpage.driver.sleep(600);
    });

    test("Searching with blank inputs on both searching bars", async () => {
        await searchpage.driver.sleep(600);
        await searchpage.click(searchpage.mainSearchInputBar);
        await searchpage.setInput(searchpage.mainSearchInputBar, "9876543210");
        await searchpage.driver.sleep(600);
        await searchpage.click(searchpage.searchBtn);
        await searchpage.driver.sleep(600);
        await searchpage.click(searchpage.mainSearchInputBar);
        await searchpage.setInput(searchpage.mainSearchInputBar, "");
        await searchpage.driver.sleep(600);
        await searchpage.click(searchpage.searchBtn);
        //Take screenshot
        await fs.writeFile(`${__dirname}/errorMsg_fill_out_field1.png`,
        await searchpage.driver.takeScreenshot(), 'base64',
        (e) => {
        if (e) console.error(e)
        else console.log("Screenshot of blank bar with error message 1 saved");
        });
        await searchpage.driver.sleep(600);
        await searchpage.click(searchpage.clearSearchFormBtn);
        await searchpage.driver.sleep(600);
        await searchpage.click(searchpage.searchGoBtn);
        //Take screenshot
        await fs.writeFile(`${__dirname}/errorMsg_fill_out_field2.png`,
        await searchpage.driver.takeScreenshot(), 'base64',
        (e) => {
        if (e) console.error(e)
        else console.log("Screenshot of blank bar with error message 2 saved");
        });
        await searchpage.driver.sleep(600);
        await searchpage.click(searchpage.searchBtn);
        //Take screenshot
        await fs.writeFile(`${__dirname}/errorMsg_fill_out_field1&2.png`,
        await searchpage.driver.takeScreenshot(), 'base64',
        (e) => {
        if (e) console.error(e)
        else console.log("Screenshot of blank bars with error messages 1 & 2 saved");
        });
        await searchpage.driver.sleep(600);
    });

    test("Searching with RETURN & ENTER keys on both searching bars", async () => {
        await searchpage.driver.sleep(600);
        await searchpage.click(searchpage.mainSearchInputBar);
        await searchpage.setInput(searchpage.mainSearchInputBar, "Pancakes");
        await searchpage.driver.sleep(600);
        //Press RETURN key
        await searchpage.driver.actions().sendKeys("\ue006").perform();
        await searchpage.driver.sleep(600);
        await searchpage.click(searchpage.clearSearchFormBtn);
        await searchpage.driver.sleep(600);
        await searchpage.click(searchpage.resultsSearchInputBar);
        await searchpage.setInput(searchpage.resultsSearchInputBar, "Fries");
        await searchpage.driver.sleep(600);
        //Press RETURN key
        await searchpage.driver.actions().sendKeys("\ue006").perform();
        await searchpage.driver.sleep(600);
        await searchpage.click(searchpage.mainSearchInputBar);
        await searchpage.setInput(searchpage.mainSearchInputBar, "");
        await searchpage.driver.sleep(600);
        await searchpage.click(searchpage.mainSearchInputBar);
        await searchpage.setInput(searchpage.mainSearchInputBar, "Hamburger");
        await searchpage.driver.sleep(600);
        //Press ENTER key
        await searchpage.driver.actions().sendKeys("\ue007").perform();
        await searchpage.driver.sleep(600);
        await searchpage.click(searchpage.clearSearchFormBtn);
        await searchpage.driver.sleep(600);
        await searchpage.click(searchpage.resultsSearchInputBar);
        await searchpage.setInput(searchpage.resultsSearchInputBar, "Ice Cream");
        await searchpage.driver.sleep(600);
        //Press ENTER key
        await searchpage.driver.actions().sendKeys("\ue007").perform();
        await searchpage.driver.sleep(600);
    });
});