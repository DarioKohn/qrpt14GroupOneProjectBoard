import { By, } from "selenium-webdriver";
import { BasePage } from "./basePage";

export class va extends BasePage {
   topOfPage: By = By.id('header_1-0');
   dinnerTab: By = By.xpath('(//li[@class="mntl-header-nav__list-item"][1])');
   viewAllDinner: By = By.xpath('//a[@id="mntl-taxonomy-nodes__chop-text_1-0"]');
   mealsTab: By = By.xpath('(//li[@class="mntl-header-nav__list-item"][2])');
   ingredientsTab: By = By.xpath('(//li[@class="mntl-header-nav__list-item"][3])');
   occassionsTab: By = By.xpath('(//li[@class="mntl-header-nav__list-item"][4])');
   viewAllOccassions: By = By.xpath('//a[@id="mntl-taxonomy-nodes__chop-text_1-0"]');
   cuisineTab: By = By.xpath('(//li[@class="mntl-header-nav__list-item"][5])');
   kitchenTipsTab: By = By.xpath('(//li[@class="mntl-header-nav__list-item"][6])');
   newsTab: By = By.xpath('(//li[@class="mntl-header-nav__list-item"][7])');

   constructor () {
        super({url: 'https://www.allrecipes.com/'});
        this.topOfPage = this.topOfPage;
    };

    async canHover(elementBy:By) {
        const hover = this.driver.actions();
        const startElement = await this.getElement(elementBy);
        await this.actionWiggle(hover, startElement, 100);
        await hover.perform();
    };
    async sendKeys(elementBy: By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy); 
        await input.clear(); 
        return input.sendKeys(keys); 
    }; 
};
