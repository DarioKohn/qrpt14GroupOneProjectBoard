import { By, } from "selenium-webdriver";
import { BasePage } from "./basePage";

export class pageAllrecipe extends BasePage {

    mainPageLoginLnk: By = By.xpath('(//a[@class="mntl-utility-nav__sublist-link"])[1]');
    mainPageMyAccountLnk: By = By.xpath('(//span[text()="My Account"])[1]');
    mainPageLogoutLnk: By = By.xpath('(//a[@class="mntl-utility-nav__sublist-link"])[2]');
    joinNowLnk: By = By.xpath('(//a[@class="carbon-link type--cat-link"])[2]');
    signUpWithEmailBtn: By = By.xpath('//button[@class="login__button login__button--email button--outlined button--full-width type--cat-bold"]');
    emailInputBar: By = By.xpath('//input[@id="email"]');
    passwordInputBar: By = By.xpath('//input[@id="password"]');
    showHidePasswordBtn: By = By.xpath('//button[@class="js-show-hide-password show-hide-password type--squirrel"]');
    errorInvalidEmail: By = By.xpath('//*[@id="input-error"]/span/text()');
    disabledJoinNowBtn: By = By.xpath('//input[@disabled=""]');
    enabledJoinNowBtn: By = By.xpath('//input[@class="js-button-submit form-buttons__submit button--contained button--full-width type--squirrel-bold"]');
   
    signUpWithFacebookBtn: By = By.xpath('//a[@id="social-facebook"]');
    facebookEmailInput: By = By.xpath('(//input[@class="inputtext _55r1 inputtext _1kbt inputtext _1kbt"])[1]');
    facebookPasswordInput: By = By.xpath('(//input[@class="inputtext _55r1 inputtext _1kbt inputtext _1kbt"])[2]');
    facebookLoginBtn: By = By.xpath('//button[@id="loginbutton"]');
    facebookContinueAsBtn: By = By.xpath('(//div[@role="button"])[2]');
   
    signUpWithGoogleBtn: By = By.xpath('//a[@class="login__button login__button--google button--outlined button--full-width type--cat-bold  "]');
    googleEmailInput: By = By.xpath('(//input[@class="whsOnd zHQkBf"])[1]');
    googleSignInNextBtn: By = By.xpath('(//span[@class="VfPpkd-vQzf8d"])[4]');
    googlePasswordInput: By = By.xpath('(//input[@class="whsOnd zHQkBf"])[1]');
    googleShowPasswordBox: By = By.xpath('//input[@class="VfPpkd-muHVFf-bMcfAe"]');
    googlePasswordNextBtn: By = By.xpath('//button[@class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 qIypjc TrZEUc lw1w4b"]');

    loginWithEmailBtn: By = By.xpath('//button[@class="login__button login__button--email button--outlined button--full-width type--cat-bold"]');
    emailInput: By = By.xpath('//input[@id="username"]');
    passwordShowHideBtn: By = By.xpath('//button[@class="js-show-hide-password show-hide-password type--squirrel"]');
    passwordInput: By = By.xpath('//input[@id="password"]');
    keepMeLoginBox: By = By.xpath('//input[@id="rememberMe"]');
    loginBtn: By = By.xpath('//input[@id="kc-login"]');
    forgotPasswordLink: By = By.xpath('(//a[@class="carbon-link type--cat-link"])[1]');
   
    loginWithFacebookBtn: By = By.xpath('//a[@class="login__button login__button--facebook button--outlined button--full-width type--cat-bold  "]');
   
    loginWithGoogleBtn: By = By.xpath('//a[@class="login__button login__button--google button--outlined button--full-width type--cat-bold  "]');

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