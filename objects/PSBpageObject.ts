import { By } from "selenium-webdriver"
import { BasePage } from "./basePage"

export class psb extends BasePage {
    box: By = By.id('related-category-search--curated_1-0');
    chxBtn: By = By.xpath('//a[text()=" Chicken "]');
    smBtn: By = By. xpath('//a[text()=" Smoothies "]');
    banBrBtn: By = By.xpath('//a[text()=" Banana Bread "]');
    lasBtn: By = By.xpath('//a[text()=" Lasagna "]');
    panBtn: By = By.xpath('//a[text()=" Pancakes "]');
    meatBtn: By = By.xpath('//a[text()=" Meatloaf "]');
    cookBtn: By = By.xpath('//a[text()=" Cookies "]');
    chilBtn: By = By.xpath('//a[text()=" Chili "]');
    homeBtn: By = By.xpath('(//a[@id="header-logo_1-0"][1])') //not sure this is the correct one
    constructor () {
        super ({url: "https://www.allrecipes.com/"});
    };
    async scroll() {
        const frame = await this.driver.findElement(this.box);

        await this.driver.actions()
            .move({ origin: frame })
            .perform();

    };
};