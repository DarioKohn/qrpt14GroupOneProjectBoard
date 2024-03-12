import { BasePage } from "./basePage"; 
import { By } from "selenium-webdriver";
export class aToZObject extends BasePage {
    originalRecipes:By = By.xpath(`//div[text()="Original Recipes"]`)
    aToZbar:By = By.xpath('//h2[@class="mntl-alphabetical-nav__heading type--monkey-bold"]')
    aBtn:By = By.xpath('//li[@class = "mntl-alphabetical-nav__list-item"][1]')
    bBtn:By = By.xpath('//li[@class = "mntl-alphabetical-nav__list-item"][2]')
    cBtn:By = By.xpath('//li[@class = "mntl-alphabetical-nav__list-item"][3]')
    dBtn:By = By.xpath('//li[@class = "mntl-alphabetical-nav__list-item"][4]')
    eBtn:By = By.xpath('//li[@class = "mntl-alphabetical-nav__list-item"][5]')
    fBtn:By = By.xpath('//li[@class = "mntl-alphabetical-nav__list-item"][6]')
    gBtn:By = By.xpath('//li[@class = "mntl-alphabetical-nav__list-item"][7]')
    hBtn:By = By.xpath('//li[@class = "mntl-alphabetical-nav__list-item"][8]')
    iBtn:By = By.xpath('//li[@class = "mntl-alphabetical-nav__list-item"][9]')
    jBtn:By = By.xpath('//li[@class = "mntl-alphabetical-nav__list-item"][10]')
    kBtn:By = By.xpath('//li[@class = "mntl-alphabetical-nav__list-item"][11]')
    lBtn:By = By.xpath('//li[@class = "mntl-alphabetical-nav__list-item"][12]')
    mBtn:By = By.xpath('//li[@class = "mntl-alphabetical-nav__list-item"][13]')
    nBtn:By = By.xpath('//li[@class = "mntl-alphabetical-nav__list-item"][14]')
    oBtn:By = By.xpath('//li[@class = "mntl-alphabetical-nav__list-item"][15]')
    pBtn:By = By.xpath('//li[@class = "mntl-alphabetical-nav__list-item"][16]')
    qBtn:By = By.xpath('//li[@class = "mntl-alphabetical-nav__list-item"][17]')
    rBtn:By = By.xpath('//li[@class = "mntl-alphabetical-nav__list-item"][18]')
    sBtn:By = By.xpath('//li[@class = "mntl-alphabetical-nav__list-item"][19]')
    tBtn:By = By.xpath('//li[@class = "mntl-alphabetical-nav__list-item"][20]')
    uBtn:By = By.xpath('//li[@class = "mntl-alphabetical-nav__list-item"][21]')
    vBtn:By = By.xpath('//li[@class = "mntl-alphabetical-nav__list-item"][22]')
    wBtn:By = By.xpath('//li[@class = "mntl-alphabetical-nav__list-item"][23]')
    xBtn:By = By.xpath('//li[@class = "mntl-alphabetical-nav__list-item"][24]')
    yBtn:By = By.xpath('//li[@class = "mntl-alphabetical-nav__list-item"][25]')
    zBtn:By = By.xpath('//li[@class = "mntl-alphabetical-nav__list-item"][26]')
    constructor(){
        super({url: "https://www.allrecipes.com/" })
    };
    async scroll() {
        const frame = await this.driver.findElement(this.aToZbar);

        await this.driver.actions()
            .move({ origin: frame })
            .perform();

    };
};