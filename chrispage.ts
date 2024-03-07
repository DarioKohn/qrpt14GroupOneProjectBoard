import { BasePage } from "./basePage"; 
import { By } from "selenium-webdriver";

export class chrisobject extends BasePage {
    dinners:By = By.name('')
    meals:By = By.name('')
    ingredients:By = By.name('')
    occasions:By = By.name('')
    cuisines:By = By.name('')
    kitchenTips:By = By.name('')
    news:By = By.name('')
    features:By = By.name('')
    aboutUs:By = By.name('')
    originalRecipes:By = By.name('')
    searchbar:By = By.name('')
    recipecard:By = By.name('')
    recipename:By = By.name('')
    constructor(){
        super({url: "https://www.allrecipes.com/" })
    };
};