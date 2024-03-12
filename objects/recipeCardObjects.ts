import { BasePage } from "./basePage";
import { By } from "selenium-webdriver";


export class recipecard extends BasePage {
    searchbar:By = By.name('q')
    recipecard:By = By.id('mntl-card-list-items_1-0')
    recipename:By = By.xpath('//h1[@class="article-heading type--lion"]')
    async search(searchItem: string) {
        return this.setInput(this.searchbar,`${searchItem}\n` );
    };
    constructor(){
        super({url: "https://www.allrecipes.com/" })
    };

}
