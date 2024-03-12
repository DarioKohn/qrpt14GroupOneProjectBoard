import { By, } from "selenium-webdriver"
import { BasePage } from "./basePage"

export class nlpo extends BasePage {
    newsLtrBtn: By = By.id('mntl-newsletter-dialog--header-link_1-0');
    emailInput: By = By.name("email");
    signUpBtn: By = By.xpath('(//button[@class="newsletter__email-address-button js-submit-button"][1])');
    success: By = By.xpath('(//p[@class="newsletter__form-success-message type--goat-bold"][1])');
    nope: By = By.xpath('//div[@class="newsletter__subscriptions-container js-subscriptions has-error"]');
    dtCheck: By = By.xpath('(//label[text()="Dinner Tonight"])[1]');
    wsCheck: By = By.xpath('(//label[text()="Well Seasoned"])[1]');
    kfCheck: By = By.xpath('(//label[text()="Kitchen Fix"])[1]');
    tffCheck: By = By.xpath('(//label[text()="The Food Feed"])[1]');
    eeCheck: By = By.xpath('(//label[text()="Easy Eats"])[1]');
    checkboxArr: By = By.css('.newsletter__subscriptions-item');
    constructor () {
        super ({url: "https://www.allrecipes.com/"});
    };
};
    