import { By, } from "selenium-webdriver";
import { BasePage } from "./basePage";

export class loginAllrecipe extends BasePage {

   mainPageLoginLnk: By = By.xpath('(//a[@class="mntl-utility-nav__sublist-link"])[1]');
   mainPageMyAccountLnk: By = By.xpath('(//span[text()="My Account"])[1]');
   mainPageLogoutLnk: By = By.xpath('(//a[@class="mntl-utility-nav__sublist-link"])[2]');
   loginWithEmailBtn: By = By.xpath('//button[@class="login__button login__button--email button--outlined button--full-width type--cat-bold"]');
   emailInput: By = By.xpath('//input[@id="username"]');
   passwordShowHideBtn: By = By.xpath('//button[@class="js-show-hide-password show-hide-password type--squirrel"]');
   passwordInput: By = By.xpath('//input[@id="password"]');
   keepMeLoginBox: By = By.xpath('//input[@id="rememberMe"]');
   loginBtn: By = By.xpath('//input[@id="kc-login"]');
   forgotPasswordLink: By = By.xpath('(//a[@class="carbon-link type--cat-link"])[1]');
   
   loginWithFacebookBtn: By = By.xpath('//a[@class="login__button login__button--facebook button--outlined button--full-width type--cat-bold  "]');
   facebookEmailInput: By = By.xpath('(//input[@class="inputtext _55r1 inputtext _1kbt inputtext _1kbt"])[1]');
   facebookPasswordInput: By = By.xpath('(//input[@class="inputtext _55r1 inputtext _1kbt inputtext _1kbt"])[2]');
   facebookLoginBtn: By = By.xpath('//button[@id="loginbutton"]');
   facebookContinueAsBtn: By = By.xpath('(//div[@role="button"])[2]');
   
   loginWithGoogleBtn: By = By.xpath('//a[@class="login__button login__button--google button--outlined button--full-width type--cat-bold  "]');
   googleEmailInput: By = By.xpath('(//input[@class="whsOnd zHQkBf"])[1]');
   googleSignInNextBtn: By = By.xpath('(//span[@class="VfPpkd-vQzf8d"])[4]');
   googlePasswordInput: By = By.xpath('(//input[@class="whsOnd zHQkBf"])[1]');
   googleShowPasswordBox: By = By.xpath('//input[@class="VfPpkd-muHVFf-bMcfAe"]');
   googlePasswordNextBtn: By = By.xpath('//button[@class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 qIypjc TrZEUc lw1w4b"]');

   constructor () {
        super({url: 'https://www.allrecipes.com/'});
    };
};