import { chrisObjectsPage } from "../objects/chrisObjectsPage";
const allTests = new chrisObjectsPage
const fs = require("fs");

describe("testing all test for Allrecipes site", () => {
    beforeEach(async () => {
        await allTests.navigate();
        await allTests.driver.manage().window().maximize();
    });
    afterAll(async () => {
        await allTests.driver.quit();
    });
    test("checking each letter button takes you to right area", async () => {
        await allTests.click(allTests.originalRecipes);
        await allTests.driver.sleep(2000);
        await allTests.click(allTests.aBtn);
        await allTests.driver.sleep(1000);
        await allTests.scroll();
        await allTests.click(allTests.bBtn);
        await allTests.driver.sleep(1000);
        await allTests.scroll();
        await allTests.click(allTests.cBtn);
        await allTests.driver.sleep(1000);
        await allTests.scroll();
        await allTests.click(allTests.dBtn);
        await allTests.driver.sleep(1000);
        await allTests.scroll();
        await allTests.click(allTests.eBtn);
        await allTests.driver.sleep(1000);
        await allTests.scroll();
        await allTests.click(allTests.fBtn);
        await allTests.driver.sleep(1000);
        await allTests.scroll();
        await allTests.click(allTests.gBtn);
        await allTests.driver.sleep(1000);
        await allTests.scroll();
        await allTests.click(allTests.hBtn);
        await allTests.driver.sleep(1000);
        await allTests.scroll();
        await allTests.click(allTests.iBtn);
        await allTests.driver.sleep(1000);
        await allTests.scroll();
        await allTests.click(allTests.jBtn);
        await allTests.driver.sleep(1000);
        await allTests.scroll();
        await allTests.click(allTests.kBtn);
        await allTests.driver.sleep(1000);
        await allTests.scroll();
        await allTests.click(allTests.lBtn);
        await allTests.driver.sleep(1000);
        await allTests.scroll();
        await allTests.click(allTests.mBtn);
        await allTests.driver.sleep(1000);
        await allTests.scroll();
        await allTests.click(allTests.nBtn);
        await allTests.driver.sleep(1000);
        await allTests.scroll();
        await allTests.click(allTests.oBtn);
        await allTests.driver.sleep(1000);
        await allTests.scroll();
        await allTests.click(allTests.pBtn);
        await allTests.driver.sleep(1000);
        await allTests.scroll();
        await allTests.click(allTests.qBtn);
        await allTests.driver.sleep(1000);
        await allTests.scroll();
        await allTests.click(allTests.rBtn);
        await allTests.driver.sleep(1000);
        await allTests.scroll();
        await allTests.click(allTests.sBtn);
        await allTests.driver.sleep(1000);
        await allTests.scroll();
        await allTests.click(allTests.tBtn);
        await allTests.driver.sleep(1000);
        await allTests.scroll();
        await allTests.click(allTests.uBtn);
        await allTests.driver.sleep(1000);
        await allTests.scroll();
        await allTests.click(allTests.vBtn);
        await allTests.driver.sleep(1000);
        await allTests.scroll();
        await allTests.click(allTests.wBtn);
        await allTests.driver.sleep(1000);
        await allTests.scroll();
        await allTests.click(allTests.xBtn);
        await allTests.driver.sleep(1000);
        await allTests.scroll();
        await allTests.click(allTests.yBtn);
        await allTests.driver.sleep(1000);
        await allTests.scroll();
        await allTests.click(allTests.zBtn);
        await allTests.driver.sleep(1000);
        await allTests.scroll();
    });
    test("checking each drop down bar main buttons on AllRecipes site", async () => {
        await allTests.click(allTests.dinners);
        await allTests.driver.sleep(2000);
        await allTests.click(allTests.meals);
        await allTests.driver.sleep(2000);
        await allTests.click(allTests.ingredients);
        await allTests.driver.sleep(2000);
        await allTests.click(allTests.occasions);
        await allTests.driver.sleep(2000);
        await allTests.click(allTests.cuisines);
        await allTests.driver.sleep(2000);
        await allTests.click(allTests.kitchenTips);
        await allTests.driver.sleep(2000);
        await allTests.click(allTests.news);
        await allTests.driver.sleep(2000);
        await allTests.click(allTests.features);
        await allTests.driver.sleep(2000);
        await allTests.click(allTests.aboutUs);
        await allTests.driver.sleep(2000);
        });
        test("checking recipes cards on AllRecipes site", async () => {
            await allTests.click(allTests.searchbar);
            await allTests.search("eggs and bacon");
            await allTests.driver.sleep(1000);
            await allTests.click(allTests.recipecard);
            await allTests.driver.sleep(1000);
            await fs.writeFile(`${__dirname}/asogood-bacon and eggs potato salad.png`,
        await allTests.driver.takeScreenshot(), "base64",
        (e) => {
            if (e) console.error(e);
            else console.log('Save Succesful');
             });
             await allTests.driver.sleep(1000);
    
             await allTests.click(allTests.searchbar);
             await allTests.search("steak");
             await allTests.driver.sleep(1000);
             await allTests.click(allTests.recipecard);
             await allTests.driver.sleep(1000)
             await fs.writeFile(`${__dirname}/asogood-marinated flank steak.png`,
         await allTests.driver.takeScreenshot(), "base64",
         (e) => {
             if (e) console.error(e)
             else console.log('Save Succesful');
              });
             await allTests.driver.sleep(1000);
    
             await allTests.click(allTests.searchbar);
             await allTests.search("baked spaghetti");
             await allTests.driver.sleep(1000);
             await allTests.click(allTests.recipecard);
             await allTests.driver.sleep(1000);
             await fs.writeFile(`${__dirname}/asogood-baked spaghetti.png`,
         await allTests.driver.takeScreenshot(), "base64",
         (e) => {
             if (e) console.error(e);
             else console.log('Save Succesful');
              });
              await allTests.driver.sleep(1000);
        });
});