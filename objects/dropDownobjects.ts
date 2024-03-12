import { BasePage } from "./basePage"; 
import { By } from "selenium-webdriver";

export class dropDownObjects extends BasePage {
    dinners:By = By.xpath('//li[@class = "mntl-header-nav__list-item"][1]')
    meals:By = By.xpath('//li[@class = "mntl-header-nav__list-item"][2]')
    ingredients:By = By.xpath('//li[@class = "mntl-header-nav__list-item"][3]')
    occasions:By = By.xpath('//li[@class = "mntl-header-nav__list-item"][4]')
    cuisines:By = By.xpath('//li[@class = "mntl-header-nav__list-item"][5]')
    kitchenTips:By = By.xpath('//li[@class = "mntl-header-nav__list-item"][6]')
    news:By = By.xpath('//li[@class = "mntl-header-nav__list-item"][7]')
    features:By = By.xpath('//li[@class = "mntl-header-nav__list-item"][8]')
    aboutUs:By = By.xpath('//div[@class = "mntl-header-nav__list-item mntl-header-nav__list-item-about-us"]')
    homeBtn:By = By.xpath('//div[@class="mntl-header__logo-wrapper"]')
    constructor(){
        super({url: "https://www.allrecipes.com/" })
    };
}