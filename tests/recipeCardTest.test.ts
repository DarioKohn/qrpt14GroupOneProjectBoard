import { recipecard } from "../objects/recipeCardObjects";
const food = new recipecard();
const fs = require("fs");

describe("testing recipes cards on AllRecipes site", () => {
    beforeEach(async () => {
        await food.navigate();
        await food.driver.manage().window().maximize()
    });
    afterAll(async () => {
        await food.driver.quit();
    });
    test("checking recipes cards on AllRecipes site", async () => {
        await food.click(food.searchbar)
        await food.search("eggs and bacon")
        await food.driver.sleep(1000)
        await food.click(food.recipecard)
        await food.driver.sleep(1000)
        await fs.writeFile(`${__dirname}/sogood-bacon and eggs potato salad.png`,
    await food.driver.takeScreenshot(), "base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Save Succesful')
         });
         await food.driver.sleep(1000)

         await food.click(food.searchbar)
         await food.search("steak")
         await food.driver.sleep(1000)
         await food.click(food.recipecard)
         await food.driver.sleep(1000)
         await fs.writeFile(`${__dirname}/sogood-marinated flank steak.png`,
     await food.driver.takeScreenshot(), "base64",
     (e) => {
         if (e) console.error(e)
         else console.log('Save Succesful')
          });
         await food.driver.sleep(1000)

         await food.click(food.searchbar)
         await food.search("baked spaghetti")
         await food.driver.sleep(1000)
         await food.click(food.recipecard)
         await food.driver.sleep(1000)
         await fs.writeFile(`${__dirname}/sogood-baked spaghetti.png`,
     await food.driver.takeScreenshot(), "base64",
     (e) => {
         if (e) console.error(e)
         else console.log('Save Succesful')
          });
          await food.driver.sleep(1000)
    });
});