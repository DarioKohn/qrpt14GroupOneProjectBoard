import { By, } from "selenium-webdriver";
import { BasePage } from "./basePage";

export class searchBarAllrecipe extends BasePage {

    mainSearchInputBar: By = By.xpath('//input[@id="mntl-search-form--open__search-input"]');
    searchBtn: By = By.xpath('(//button[@class="mntl-search-form__button type--squirrel button--contained-standard"])[1]');
    resultsSearchInputBar: By = By.xpath('//input[@id="mntl-search-form--hero__search-input"]');
    searchGoBtn: By = By.xpath('(//button[@class="mntl-search-form__button type--squirrel button--contained-standard"])[2]');
    searchIconInContainer: By = By.xpath('//button[@class="mntl-search-form__search-button mntl-search-form__icon-button"]');
    resultsCards: By = By.xpath('//div[@id="mntl-search-results__list_1-0"]');
    searchNoResultsMsg: By = By.xpath('//h2[@id="mntl-search-results__no-results-header_1-0"]');
    errorPleaseFillMsg1: By = By.xpath('(//span[@class="type--cat-bold mntl-message-banner__text "])[1]');
    errorPleaseFillMsg2: By = By.xpath('(//span[@class="type--cat-bold mntl-message-banner__text "])[2]');
    clearSearchFormBtn: By = By.xpath('//button[@class="mntl-search-form__clear-button mntl-search-form__icon-button "]');

    constructor () {
        super({url: 'https://www.allrecipes.com/'});
    };

    async getResults(){
        return this.getText(this.resultsCards);
    };
};