import { va } from "../objects/viewAllpageObject";
const page = new va();
const fs = require('fs');

describe("Testing AllRecipes for qrpt14 Group Project, testing tabs at top of homepage to see 'view all' and 'a to z search' ", () => {
  

    beforeEach(async () => {
        await page.navigate();
        await page.driver.manage().window().maximize()
    });
    afterAll(async () => {
        await page.driver.quit();
    });
    test("Clicks view all dinner options and takes a screenshot", async () => {
        await page.click(page.dinnerTab);
        await page.click(page.viewAllDinner);
        await fs.writeFile(`${__dirname}/view-all-dinner.png`,
        await page.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log('Screenshot of view all dinner tab successful')
        });    
    });

    test('Clicks meals tab, takes screenshot of a-z search', async () => {
        await page.click(page.mealsTab);
        await fs.writeFile(`${__dirname}/view-all-meals-a-to-z-search.png`,
        await page.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log('Screenshot of a-z search for meals successful')
        });
    });

    test('Clicks on ingredients tab, takes a screenshot of a-z search', async () => {
        await page.click(page.ingredientsTab);
        await fs.writeFile(`${__dirname}/view-all-ingredients-a-to-z-search.png`,
        await page.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log('Screenshot of a-z search for ingredients successful')
        });
    });

    test('Clicks on occasions tab and takes screenshot of the view all section', async () => {
        await page.click(page.occassionsTab);
        await page.click(page.viewAllOccassions);
        await fs.writeFile(`${__dirname}/view-all-occassions.png`,
        await page.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log('View all occassions screenshot taken')
        });
    });

    test('clicks the cuisineTabine tab and takes screenshot', async () => {
        await page.click(page.cuisineTab);
        await fs.writeFile(`${__dirname}/view-all-cuisine-a-to-z-search.png`,
        await page.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log('Cuisine tab a-z search screenshot taken')
        });
    });

    test('clicks on the kitchen tips tab and takes a screenshot', async () => {
        await page.click(page.kitchenTipsTab);
        await fs.writeFile(`${__dirname}/view-all-kitchen-tips.png`,
        await page.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log('Kitchen Tips screenshot successful')
        });
    });

    test('clicks on news tab and takes a screenshot', async () => {
        await page.click(page.newsTab);
        await fs.writeFile(`${__dirname}/view-all-news-tab.png`,
        await page.driver.takeScreenshot(), 'base64',
        (e) => {
            if (e) console.error(e)
            else console.log('News tab screenshot successful')
        });
    });
});