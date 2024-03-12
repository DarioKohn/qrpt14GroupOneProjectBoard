import { dropDownObjects } from "../objects/dropDownobjects";
const page = new dropDownObjects();
const fs = require("fs");

describe("testing top drop down bar on AllRecipes site", () => {
    beforeEach(async () => {
        await page.navigate();
        await page.driver.manage().window().maximize()
    });
    afterAll(async () => {
        await page.driver.quit();
    });
    test("checking each drop down bar main buttons on AllRecipes site", async () => {
    await page.click(page.dinners)
    await page.driver.sleep(2000);
    await page.click(page.meals)
    await page.driver.sleep(2000);
    await page.click(page.ingredients)
    await page.driver.sleep(2000);
    await page.click(page.occasions)
    await page.driver.sleep(2000);
    await page.click(page.cuisines)
    await page.driver.sleep(2000);
    await page.click(page.kitchenTips)
    await page.driver.sleep(2000);
    await page.click(page.news)
    await page.driver.sleep(2000);
    await page.click(page.features)
    await page.driver.sleep(2000);
    await page.click(page.aboutUs)
    await page.driver.sleep(2000);
    });
});