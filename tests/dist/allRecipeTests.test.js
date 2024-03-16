"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var allAllrecipeObjects_1 = require("../objects/allAllrecipeObjects");
var page = new allAllrecipeObjects_1.pageAllrecipe();
var fs = require("fs");
describe("Testing Allrecipe register feature with email, facebook and google; login feature with email, facebook and google; and main search bar with results bar", function () {
    beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, page.navigate()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, page.driver.manage().window().maximize()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, page.driver.quit()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    test("Testing sign up with valid email and password until validation requirements are met", function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: 
                //Click on "Log In" link at the top of home page
                return [4 /*yield*/, page.driver.sleep(300)];
                case 1:
                    //Click on "Log In" link at the top of home page
                    _d.sent();
                    return [4 /*yield*/, page.click(page.mainPageLoginLnk)];
                case 2:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 3:
                    _d.sent();
                    //Click on "Join Now" link at the bottom
                    return [4 /*yield*/, page.click(page.joinNowLnk)];
                case 4:
                    //Click on "Join Now" link at the bottom
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 5:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.signUpWithEmailBtn)];
                case 6:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 7:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.emailInputBar)];
                case 8:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 9:
                    _d.sent();
                    return [4 /*yield*/, page.setInput(page.emailInputBar, "testqrpt14@gmail.com")];
                case 10:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 11:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.showHidePasswordBtn)];
                case 12:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.passwordInputBar)];
                case 13:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 14:
                    _d.sent();
                    return [4 /*yield*/, page.setInput(page.passwordInputBar, "Test@qrpt14!1")];
                case 15:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 16:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.showHidePasswordBtn)];
                case 17:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 18:
                    _d.sent();
                    _b = (_a = fs).writeFile;
                    _c = [__dirname + "/sign_up_valid_email_and_password.png"];
                    return [4 /*yield*/, page.driver.takeScreenshot()];
                case 19: 
                //Take screenshot
                return [4 /*yield*/, _b.apply(_a, _c.concat([_d.sent(), 'base64', function (e) {
                            if (e)
                                console.error(e);
                            else
                                console.log('Screenshot of fully validated inputs and enabled JOIN NOW button ready to be clicked is saved');
                        }]))];
                case 20:
                    //Take screenshot
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 21:
                    _d.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    test("Testing sign up with Facebook", function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: 
                //Click on "Log In" link at the top of home page
                return [4 /*yield*/, page.driver.sleep(300)];
                case 1:
                    //Click on "Log In" link at the top of home page
                    _d.sent();
                    return [4 /*yield*/, page.click(page.mainPageLoginLnk)];
                case 2:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 3:
                    _d.sent();
                    //Click on "Join Now" link at the bottom
                    return [4 /*yield*/, page.click(page.joinNowLnk)];
                case 4:
                    //Click on "Join Now" link at the bottom
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 5:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.signUpWithFacebookBtn)];
                case 6:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 7:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.facebookEmailInput)];
                case 8:
                    _d.sent();
                    return [4 /*yield*/, page.setInput(page.facebookEmailInput, "testqrpt14@gmail.com")];
                case 9:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 10:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.facebookPasswordInput)];
                case 11:
                    _d.sent();
                    return [4 /*yield*/, page.setInput(page.facebookPasswordInput, "Test@qrpt14!1")];
                case 12:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 13:
                    _d.sent();
                    _b = (_a = fs).writeFile;
                    _c = [__dirname + "/sign_up_valid_facebook_credentials.png"];
                    return [4 /*yield*/, page.driver.takeScreenshot()];
                case 14: 
                //Take screenshot of valid Facebook credentials
                return [4 /*yield*/, _b.apply(_a, _c.concat([_d.sent(), 'base64', function (e) {
                            if (e)
                                console.error(e);
                            else
                                console.log('Screenshot of Facebook valid email and password inputs is saved');
                        }]))];
                case 15:
                    //Take screenshot of valid Facebook credentials
                    _d.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    test("Testing sign up with valid email and password until validation requirements are met", function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: 
                //Click on "Log In" link at the top of home page
                return [4 /*yield*/, page.driver.sleep(300)];
                case 1:
                    //Click on "Log In" link at the top of home page
                    _d.sent();
                    return [4 /*yield*/, page.click(page.mainPageLoginLnk)];
                case 2:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 3:
                    _d.sent();
                    //Click on "Join Now" link at the bottom
                    return [4 /*yield*/, page.click(page.joinNowLnk)];
                case 4:
                    //Click on "Join Now" link at the bottom
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 5:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.signUpWithGoogleBtn)];
                case 6:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 7:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.googleEmailInput)];
                case 8:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 9:
                    _d.sent();
                    return [4 /*yield*/, page.setInput(page.googleEmailInput, "testqrpt14@gmail.com")];
                case 10:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 11:
                    _d.sent();
                    _b = (_a = fs).writeFile;
                    _c = [__dirname + "/sign_up_valid_google_credentials.png"];
                    return [4 /*yield*/, page.driver.takeScreenshot()];
                case 12: 
                //Take screenshot of valid Google email address
                return [4 /*yield*/, _b.apply(_a, _c.concat([_d.sent(), 'base64', function (e) {
                            if (e)
                                console.error(e);
                            else
                                console.log('Screenshot of Google valid email input is saved');
                        }]))];
                case 13:
                    //Take screenshot of valid Google email address
                    _d.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    test("Testing sign up with invalid email and valid password", function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: 
                //Click on "Log In" link at the top of home page
                return [4 /*yield*/, page.click(page.mainPageLoginLnk)];
                case 1:
                    //Click on "Log In" link at the top of home page
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 2:
                    _d.sent();
                    //Click on "Join Now" link at the bottom
                    return [4 /*yield*/, page.click(page.joinNowLnk)];
                case 3:
                    //Click on "Join Now" link at the bottom
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 4:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.signUpWithEmailBtn)];
                case 5:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 6:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.emailInputBar)];
                case 7:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 8:
                    _d.sent();
                    return [4 /*yield*/, page.setInput(page.emailInputBar, "t~(*&nofdkh&[]@gmail.com")];
                case 9:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 10:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.passwordInputBar)];
                case 11:
                    _d.sent();
                    return [4 /*yield*/, page.setInput(page.passwordInputBar, "Test@qrpt14!1")];
                case 12:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 13:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.enabledJoinNowBtn)];
                case 14:
                    _d.sent();
                    _b = (_a = fs).writeFile;
                    _c = [__dirname + "/reg_Invalid_email_Valid_password.png"];
                    return [4 /*yield*/, page.driver.takeScreenshot()];
                case 15: 
                //Take screenshot
                return [4 /*yield*/, _b.apply(_a, _c.concat([_d.sent(), 'base64', function (e) {
                            if (e)
                                console.error(e);
                            else
                                console.log('Screenshot of Invalid email Valid password is saved');
                        }]))];
                case 16:
                    //Take screenshot
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 17:
                    _d.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    test("Testing sign up with blank email and valid password", function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: 
                //Click on "Log In" link at the top of home page
                return [4 /*yield*/, page.click(page.mainPageLoginLnk)];
                case 1:
                    //Click on "Log In" link at the top of home page
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 2:
                    _d.sent();
                    //Click on "Join Now" link at the bottom
                    return [4 /*yield*/, page.click(page.joinNowLnk)];
                case 3:
                    //Click on "Join Now" link at the bottom
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 4:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.signUpWithEmailBtn)];
                case 5:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 6:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.passwordInputBar)];
                case 7:
                    _d.sent();
                    return [4 /*yield*/, page.setInput(page.passwordInputBar, "Test@qrpt14!1")];
                case 8:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 9:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.enabledJoinNowBtn)];
                case 10:
                    _d.sent();
                    _b = (_a = fs).writeFile;
                    _c = [__dirname + "/reg_blank_email_Valid_password.png"];
                    return [4 /*yield*/, page.driver.takeScreenshot()];
                case 11: 
                //Take screenshot
                return [4 /*yield*/, _b.apply(_a, _c.concat([_d.sent(), 'base64', function (e) {
                            if (e)
                                console.error(e);
                            else
                                console.log('Screenshot of blank email and Valid password is saved');
                        }]))];
                case 12:
                    //Take screenshot
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 13:
                    _d.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    test("Testing sign up with blank email and blank password", function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: 
                //Click on "Log In" link at the top of home page
                return [4 /*yield*/, page.click(page.mainPageLoginLnk)];
                case 1:
                    //Click on "Log In" link at the top of home page
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 2:
                    _d.sent();
                    //Click on "Join Now" link at the bottom
                    return [4 /*yield*/, page.click(page.joinNowLnk)];
                case 3:
                    //Click on "Join Now" link at the bottom
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 4:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.signUpWithEmailBtn)];
                case 5:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 6:
                    _d.sent();
                    _b = (_a = fs).writeFile;
                    _c = [__dirname + "/reg_blank_email_blank_password.png"];
                    return [4 /*yield*/, page.driver.takeScreenshot()];
                case 7: 
                //Take screenshot
                return [4 /*yield*/, _b.apply(_a, _c.concat([_d.sent(), 'base64', function (e) {
                            if (e)
                                console.error(e);
                            else
                                console.log('Screenshot of blank email and blank password is saved');
                        }]))];
                case 8:
                    //Take screenshot
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 9:
                    _d.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    test("Testing sign up with valid email and invalid password", function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: 
                //Click on "Log In" link at the top of home page
                return [4 /*yield*/, page.click(page.mainPageLoginLnk)];
                case 1:
                    //Click on "Log In" link at the top of home page
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 2:
                    _d.sent();
                    //Click on "Join Now" link at the bottom
                    return [4 /*yield*/, page.click(page.joinNowLnk)];
                case 3:
                    //Click on "Join Now" link at the bottom
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 4:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.signUpWithEmailBtn)];
                case 5:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 6:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.emailInputBar)];
                case 7:
                    _d.sent();
                    return [4 /*yield*/, page.setInput(page.emailInputBar, "testqrpt14@gmail.com")];
                case 8:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 9:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.passwordInputBar)];
                case 10:
                    _d.sent();
                    return [4 /*yield*/, page.setInput(page.passwordInputBar, "Test@q")];
                case 11:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 12:
                    _d.sent();
                    _b = (_a = fs).writeFile;
                    _c = [__dirname + "/reg_Valid_email_Invalid_password.png"];
                    return [4 /*yield*/, page.driver.takeScreenshot()];
                case 13: 
                //Take screenshot
                return [4 /*yield*/, _b.apply(_a, _c.concat([_d.sent(), 'base64', function (e) {
                            if (e)
                                console.error(e);
                            else
                                console.log('Screenshot of valid email and invalid password is saved');
                        }]))];
                case 14:
                    //Take screenshot
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 15:
                    _d.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    test("Testing login with registered email and password", function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, _c, _d, _e, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0: 
                //Click on "Log In" link at the top of home page
                return [4 /*yield*/, page.click(page.mainPageLoginLnk)];
                case 1:
                    //Click on "Log In" link at the top of home page
                    _g.sent();
                    return [4 /*yield*/, page.driver.sleep(600)];
                case 2:
                    _g.sent();
                    return [4 /*yield*/, page.click(page.loginWithEmailBtn)];
                case 3:
                    _g.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 4:
                    _g.sent();
                    return [4 /*yield*/, page.click(page.emailInput)];
                case 5:
                    _g.sent();
                    return [4 /*yield*/, page.setInput(page.emailInput, "testqrpt14@gmail.com")];
                case 6:
                    _g.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 7:
                    _g.sent();
                    return [4 /*yield*/, page.click(page.passwordShowHideBtn)];
                case 8:
                    _g.sent();
                    return [4 /*yield*/, page.click(page.passwordInput)];
                case 9:
                    _g.sent();
                    return [4 /*yield*/, page.setInput(page.passwordInput, "Test@qrpt14!1")];
                case 10:
                    _g.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 11:
                    _g.sent();
                    return [4 /*yield*/, page.click(page.passwordShowHideBtn)];
                case 12:
                    _g.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 13:
                    _g.sent();
                    return [4 /*yield*/, page.click(page.loginBtn)];
                case 14:
                    _g.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 15:
                    _g.sent();
                    _b = (_a = fs).writeFile;
                    _c = [__dirname + "/successful_login_Email_wellcome.png"];
                    return [4 /*yield*/, page.driver.takeScreenshot()];
                case 16: 
                //Take screenshot of successful Email login on main page
                return [4 /*yield*/, _b.apply(_a, _c.concat([_g.sent(), 'base64', function (e) {
                            if (e)
                                console.error(e);
                            else
                                console.log('Screenshot of successful login with valid Email is saved');
                        }]))];
                case 17:
                    //Take screenshot of successful Email login on main page
                    _g.sent();
                    return [4 /*yield*/, page.click(page.mainPageMyAccountLnk)];
                case 18:
                    _g.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 19:
                    _g.sent();
                    return [4 /*yield*/, page.click(page.mainPageLogoutLnk)];
                case 20:
                    _g.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 21:
                    _g.sent();
                    _e = (_d = fs).writeFile;
                    _f = [__dirname + "/logout_with_a_logout_message.png"];
                    return [4 /*yield*/, page.driver.takeScreenshot()];
                case 22: 
                //Take screenshot of logout message - bug
                return [4 /*yield*/, _e.apply(_d, _f.concat([_g.sent(), 'base64', function (e) {
                            if (e)
                                console.error(e);
                            else
                                console.log('Screenshot of logout with logout message is saved');
                        }]))];
                case 23:
                    //Take screenshot of logout message - bug
                    _g.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    test("Testing login with Facebook account", function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, page.click(page.mainPageLoginLnk)];
                case 1:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 2:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.loginWithFacebookBtn)];
                case 3:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 4:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.facebookEmailInput)];
                case 5:
                    _d.sent();
                    return [4 /*yield*/, page.setInput(page.facebookEmailInput, "testqrpt14@gmail.com")];
                case 6:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 7:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.facebookPasswordInput)];
                case 8:
                    _d.sent();
                    return [4 /*yield*/, page.setInput(page.facebookPasswordInput, "Test@qrpt14!1")];
                case 9:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 10:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.facebookLoginBtn)];
                case 11:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 12:
                    _d.sent();
                    _b = (_a = fs).writeFile;
                    _c = [__dirname + "/successful_login_Facebook_wellcome.png"];
                    return [4 /*yield*/, page.driver.takeScreenshot()];
                case 13: 
                //Take screenshot of successful Facebook login on main page
                return [4 /*yield*/, _b.apply(_a, _c.concat([_d.sent(), 'base64', function (e) {
                            if (e)
                                console.error(e);
                            else
                                console.log('Screenshot of successful login with Facebook is saved');
                        }]))];
                case 14:
                    //Take screenshot of successful Facebook login on main page
                    _d.sent();
                    return [4 /*yield*/, page.click(page.mainPageMyAccountLnk)];
                case 15:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 16:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.mainPageLogoutLnk)];
                case 17:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 18:
                    _d.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    test("Testing login with Google account", function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, page.click(page.mainPageLoginLnk)];
                case 1:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 2:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.loginWithGoogleBtn)];
                case 3:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 4:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.googleEmailInput)];
                case 5:
                    _d.sent();
                    return [4 /*yield*/, page.setInput(page.googleEmailInput, "testqrpt14@gmail.com")];
                case 6:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 7:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.googleSignInNextBtn)];
                case 8:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(600)];
                case 9:
                    _d.sent();
                    _b = (_a = fs).writeFile;
                    _c = [__dirname + "/screenshot_Google_cant_sign_in.png"];
                    return [4 /*yield*/, page.driver.takeScreenshot()];
                case 10: 
                //Take screenshot of "Couldn't sign you in" Google message
                return [4 /*yield*/, _b.apply(_a, _c.concat([_d.sent(), 'base64', function (e) {
                            if (e)
                                console.error(e);
                            else
                                console.log('Screenshot of successful login with Google is saved');
                        }]))];
                case 11:
                    //Take screenshot of "Couldn't sign you in" Google message
                    _d.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    test("Testing login with invalid email and valid password", function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: 
                //Click on "Log In" link at the top of home page
                return [4 /*yield*/, page.click(page.mainPageLoginLnk)];
                case 1:
                    //Click on "Log In" link at the top of home page
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(600)];
                case 2:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.loginWithEmailBtn)];
                case 3:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 4:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.emailInput)];
                case 5:
                    _d.sent();
                    return [4 /*yield*/, page.setInput(page.emailInput, "t~(*&nofdkh&[]@gmail.com")];
                case 6:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 7:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.passwordShowHideBtn)];
                case 8:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.passwordInput)];
                case 9:
                    _d.sent();
                    return [4 /*yield*/, page.setInput(page.passwordInput, "Test@qrpt14!1")];
                case 10:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 11:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.passwordShowHideBtn)];
                case 12:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 13:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.loginBtn)];
                case 14:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 15:
                    _d.sent();
                    _b = (_a = fs).writeFile;
                    _c = [__dirname + "/Log_invalid_email_valid_password.png"];
                    return [4 /*yield*/, page.driver.takeScreenshot()];
                case 16: 
                //Take screenshot
                return [4 /*yield*/, _b.apply(_a, _c.concat([_d.sent(), 'base64', function (e) {
                            if (e)
                                console.error(e);
                            else
                                console.log('Screenshot of invalid Email and valid password is saved');
                        }]))];
                case 17:
                    //Take screenshot
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 18:
                    _d.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    test("Testing login with blank email and valid password", function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: 
                //Click on "Log In" link at the top of home page
                return [4 /*yield*/, page.click(page.mainPageLoginLnk)];
                case 1:
                    //Click on "Log In" link at the top of home page
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(600)];
                case 2:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.loginWithEmailBtn)];
                case 3:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 4:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.passwordShowHideBtn)];
                case 5:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.passwordInput)];
                case 6:
                    _d.sent();
                    return [4 /*yield*/, page.setInput(page.passwordInput, "Test@qrpt14!1")];
                case 7:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 8:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.passwordShowHideBtn)];
                case 9:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 10:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.loginBtn)];
                case 11:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 12:
                    _d.sent();
                    _b = (_a = fs).writeFile;
                    _c = [__dirname + "/Log_blank_email_valid_password.png"];
                    return [4 /*yield*/, page.driver.takeScreenshot()];
                case 13: 
                //Take screenshot
                return [4 /*yield*/, _b.apply(_a, _c.concat([_d.sent(), 'base64', function (e) {
                            if (e)
                                console.error(e);
                            else
                                console.log('Screenshot of blank Email and valid password is saved');
                        }]))];
                case 14:
                    //Take screenshot
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 15:
                    _d.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    test("Testing login with valid email and invalid password", function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: 
                //Click on "Log In" link at the top of home page
                return [4 /*yield*/, page.click(page.mainPageLoginLnk)];
                case 1:
                    //Click on "Log In" link at the top of home page
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(600)];
                case 2:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.loginWithEmailBtn)];
                case 3:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 4:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.emailInput)];
                case 5:
                    _d.sent();
                    return [4 /*yield*/, page.setInput(page.emailInput, "testqrpt14@gmail.com")];
                case 6:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 7:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.passwordShowHideBtn)];
                case 8:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.passwordInput)];
                case 9:
                    _d.sent();
                    return [4 /*yield*/, page.setInput(page.passwordInput, "Test@q")];
                case 10:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 11:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.passwordShowHideBtn)];
                case 12:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 13:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.loginBtn)];
                case 14:
                    _d.sent();
                    _b = (_a = fs).writeFile;
                    _c = [__dirname + "/Log_valid_email_invalid_password.png"];
                    return [4 /*yield*/, page.driver.takeScreenshot()];
                case 15: 
                //Take screenshot
                return [4 /*yield*/, _b.apply(_a, _c.concat([_d.sent(), 'base64', function (e) {
                            if (e)
                                console.error(e);
                            else
                                console.log('Screenshot of valid Email and invalid password is saved');
                        }]))];
                case 16:
                    //Take screenshot
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 17:
                    _d.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    test("Testing login with blank email and blank password", function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: 
                //Click on "Log In" link at the top of home page
                return [4 /*yield*/, page.click(page.mainPageLoginLnk)];
                case 1:
                    //Click on "Log In" link at the top of home page
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(600)];
                case 2:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.loginWithEmailBtn)];
                case 3:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 4:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.loginBtn)];
                case 5:
                    _d.sent();
                    _b = (_a = fs).writeFile;
                    _c = [__dirname + "/Log_blank_email_blank_password.png"];
                    return [4 /*yield*/, page.driver.takeScreenshot()];
                case 6: 
                //Take screenshot
                return [4 /*yield*/, _b.apply(_a, _c.concat([_d.sent(), 'base64', function (e) {
                            if (e)
                                console.error(e);
                            else
                                console.log('Screenshot of blank email and blank password is saved');
                        }]))];
                case 7:
                    //Take screenshot
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(300)];
                case 8:
                    _d.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    test("Searching with multiple valid terms Uppercase", function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, _c, _d, _e, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0: 
                //Click on main search bar at the top of home page
                return [4 /*yield*/, page.driver.sleep(600)];
                case 1:
                    //Click on main search bar at the top of home page
                    _g.sent();
                    return [4 /*yield*/, page.click(page.mainSearchInputBar)];
                case 2:
                    _g.sent();
                    return [4 /*yield*/, page.setInput(page.mainSearchInputBar, "Chicken Fish Fried Meat")];
                case 3:
                    _g.sent();
                    return [4 /*yield*/, page.driver.sleep(600)];
                case 4:
                    _g.sent();
                    return [4 /*yield*/, page.click(page.searchBtn)];
                case 5:
                    _g.sent();
                    return [4 /*yield*/, page.driver.sleep(600)];
                case 6:
                    _g.sent();
                    return [4 /*yield*/, page.getResults()];
                case 7:
                    _g.sent();
                    _b = (_a = fs).writeFile;
                    _c = [__dirname + "/multiple_terms_Uppercase.txt"];
                    return [4 /*yield*/, page.getResults()];
                case 8: 
                //write a file with the text results
                return [4 /*yield*/, _b.apply(_a, _c.concat([_g.sent(), function (e) {
                            if (e)
                                console.error(e);
                            else
                                console.log("Text results with multiple terms Uppercase saved");
                        }]))];
                case 9:
                    //write a file with the text results
                    _g.sent();
                    _e = (_d = fs).writeFile;
                    _f = [__dirname + "/multiple_terms_Uppercase.png"];
                    return [4 /*yield*/, page.driver.takeScreenshot()];
                case 10: 
                //Take screenshot
                return [4 /*yield*/, _e.apply(_d, _f.concat([_g.sent(), 'base64', function (e) {
                            if (e)
                                console.error(e);
                            else
                                console.log("Screenshot results with multiple terms Uppercase saved");
                        }]))];
                case 11:
                    //Take screenshot
                    _g.sent();
                    return [4 /*yield*/, page.driver.sleep(600)];
                case 12:
                    _g.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    test("Searching with multiple valid terms Lowercase", function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, _c, _d, _e, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0: 
                //Click on main search bar at the top of home page
                return [4 /*yield*/, page.driver.sleep(600)];
                case 1:
                    //Click on main search bar at the top of home page
                    _g.sent();
                    return [4 /*yield*/, page.click(page.mainSearchInputBar)];
                case 2:
                    _g.sent();
                    return [4 /*yield*/, page.setInput(page.mainSearchInputBar, "chicken fish fried meat")];
                case 3:
                    _g.sent();
                    return [4 /*yield*/, page.driver.sleep(600)];
                case 4:
                    _g.sent();
                    return [4 /*yield*/, page.click(page.searchBtn)];
                case 5:
                    _g.sent();
                    return [4 /*yield*/, page.driver.sleep(600)];
                case 6:
                    _g.sent();
                    return [4 /*yield*/, page.getResults()];
                case 7:
                    _g.sent();
                    _b = (_a = fs).writeFile;
                    _c = [__dirname + "/multiple_terms_Lowercase.txt"];
                    return [4 /*yield*/, page.getResults()];
                case 8: 
                //write a file with the text results
                return [4 /*yield*/, _b.apply(_a, _c.concat([_g.sent(), function (e) {
                            if (e)
                                console.error(e);
                            else
                                console.log("Text results with multiple terms Lowercase saved");
                        }]))];
                case 9:
                    //write a file with the text results
                    _g.sent();
                    _e = (_d = fs).writeFile;
                    _f = [__dirname + "/multiple_terms_Lowercase.png"];
                    return [4 /*yield*/, page.driver.takeScreenshot()];
                case 10: 
                //Take screenshot
                return [4 /*yield*/, _e.apply(_d, _f.concat([_g.sent(), 'base64', function (e) {
                            if (e)
                                console.error(e);
                            else
                                console.log("Screenshot results with multiple terms Lowercase saved");
                        }]))];
                case 11:
                    //Take screenshot
                    _g.sent();
                    return [4 /*yield*/, page.driver.sleep(600)];
                case 12:
                    _g.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    test("Searching with multiple Special Characters", function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, page.driver.sleep(600)];
                case 1:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.mainSearchInputBar)];
                case 2:
                    _d.sent();
                    return [4 /*yield*/, page.setInput(page.mainSearchInputBar, "@~!#$%^*()_+={}|&")];
                case 3:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(600)];
                case 4:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.searchBtn)];
                case 5:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(600)];
                case 6:
                    _d.sent();
                    _b = (_a = fs).writeFile;
                    _c = [__dirname + "/results_multiple_special_characters.png"];
                    return [4 /*yield*/, page.driver.takeScreenshot()];
                case 7: 
                //Take screenshot of multiple special characters - bug
                return [4 /*yield*/, _b.apply(_a, _c.concat([_d.sent(), 'base64', function (e) {
                            if (e)
                                console.error(e);
                            else
                                console.log("Screenshot of multiple special characters saved");
                        }]))];
                case 8:
                    //Take screenshot of multiple special characters - bug
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(600)];
                case 9:
                    _d.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    test("Searching with multiple numbers", function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, page.driver.sleep(600)];
                case 1:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.mainSearchInputBar)];
                case 2:
                    _d.sent();
                    return [4 /*yield*/, page.setInput(page.mainSearchInputBar, "9876543210")];
                case 3:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(600)];
                case 4:
                    _d.sent();
                    return [4 /*yield*/, page.click(page.searchBtn)];
                case 5:
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(600)];
                case 6:
                    _d.sent();
                    _b = (_a = fs).writeFile;
                    _c = [__dirname + "/results_multiple_numbers.png"];
                    return [4 /*yield*/, page.driver.takeScreenshot()];
                case 7: 
                //Take screenshot
                return [4 /*yield*/, _b.apply(_a, _c.concat([_d.sent(), 'base64', function (e) {
                            if (e)
                                console.error(e);
                            else
                                console.log("Screenshot of multiple numbers saved");
                        }]))];
                case 8:
                    //Take screenshot
                    _d.sent();
                    return [4 /*yield*/, page.driver.sleep(600)];
                case 9:
                    _d.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    test("Searching with blank inputs on both searching bars", function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return __generator(this, function (_k) {
            switch (_k.label) {
                case 0: return [4 /*yield*/, page.driver.sleep(600)];
                case 1:
                    _k.sent();
                    return [4 /*yield*/, page.click(page.mainSearchInputBar)];
                case 2:
                    _k.sent();
                    return [4 /*yield*/, page.setInput(page.mainSearchInputBar, "9876543210")];
                case 3:
                    _k.sent();
                    return [4 /*yield*/, page.driver.sleep(600)];
                case 4:
                    _k.sent();
                    return [4 /*yield*/, page.click(page.searchBtn)];
                case 5:
                    _k.sent();
                    return [4 /*yield*/, page.driver.sleep(600)];
                case 6:
                    _k.sent();
                    return [4 /*yield*/, page.click(page.mainSearchInputBar)];
                case 7:
                    _k.sent();
                    return [4 /*yield*/, page.setInput(page.mainSearchInputBar, "")];
                case 8:
                    _k.sent();
                    return [4 /*yield*/, page.driver.sleep(600)];
                case 9:
                    _k.sent();
                    return [4 /*yield*/, page.click(page.searchBtn)];
                case 10:
                    _k.sent();
                    _b = (_a = fs).writeFile;
                    _c = [__dirname + "/errorMsg_fill_out_field1.png"];
                    return [4 /*yield*/, page.driver.takeScreenshot()];
                case 11: 
                //Take screenshot
                return [4 /*yield*/, _b.apply(_a, _c.concat([_k.sent(), 'base64', function (e) {
                            if (e)
                                console.error(e);
                            else
                                console.log("Screenshot of blank bar with error message 1 saved");
                        }]))];
                case 12:
                    //Take screenshot
                    _k.sent();
                    return [4 /*yield*/, page.driver.sleep(600)];
                case 13:
                    _k.sent();
                    return [4 /*yield*/, page.click(page.clearSearchFormBtn)];
                case 14:
                    _k.sent();
                    return [4 /*yield*/, page.driver.sleep(600)];
                case 15:
                    _k.sent();
                    return [4 /*yield*/, page.click(page.searchGoBtn)];
                case 16:
                    _k.sent();
                    _e = (_d = fs).writeFile;
                    _f = [__dirname + "/errorMsg_fill_out_field2.png"];
                    return [4 /*yield*/, page.driver.takeScreenshot()];
                case 17: 
                //Take screenshot
                return [4 /*yield*/, _e.apply(_d, _f.concat([_k.sent(), 'base64', function (e) {
                            if (e)
                                console.error(e);
                            else
                                console.log("Screenshot of blank bar with error message 2 saved");
                        }]))];
                case 18:
                    //Take screenshot
                    _k.sent();
                    return [4 /*yield*/, page.driver.sleep(600)];
                case 19:
                    _k.sent();
                    return [4 /*yield*/, page.click(page.searchBtn)];
                case 20:
                    _k.sent();
                    _h = (_g = fs).writeFile;
                    _j = [__dirname + "/errorMsg_fill_out_field1&2.png"];
                    return [4 /*yield*/, page.driver.takeScreenshot()];
                case 21: 
                //Take screenshot
                return [4 /*yield*/, _h.apply(_g, _j.concat([_k.sent(), 'base64', function (e) {
                            if (e)
                                console.error(e);
                            else
                                console.log("Screenshot of blank bars with error messages 1 & 2 saved");
                        }]))];
                case 22:
                    //Take screenshot
                    _k.sent();
                    return [4 /*yield*/, page.driver.sleep(600)];
                case 23:
                    _k.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    test("Searching with RETURN & ENTER keys on both searching bars", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, page.driver.sleep(600)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, page.click(page.mainSearchInputBar)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, page.setInput(page.mainSearchInputBar, "Pancakes")];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, page.driver.sleep(600)];
                case 4:
                    _a.sent();
                    //Press RETURN key
                    return [4 /*yield*/, page.driver.actions().sendKeys("\ue006").perform()];
                case 5:
                    //Press RETURN key
                    _a.sent();
                    return [4 /*yield*/, page.driver.sleep(600)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, page.click(page.clearSearchFormBtn)];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, page.driver.sleep(600)];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, page.click(page.resultsSearchInputBar)];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, page.setInput(page.resultsSearchInputBar, "Fries")];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, page.driver.sleep(600)];
                case 11:
                    _a.sent();
                    //Press RETURN key
                    return [4 /*yield*/, page.driver.actions().sendKeys("\ue006").perform()];
                case 12:
                    //Press RETURN key
                    _a.sent();
                    return [4 /*yield*/, page.driver.sleep(600)];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, page.click(page.mainSearchInputBar)];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, page.setInput(page.mainSearchInputBar, "")];
                case 15:
                    _a.sent();
                    return [4 /*yield*/, page.driver.sleep(600)];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, page.click(page.mainSearchInputBar)];
                case 17:
                    _a.sent();
                    return [4 /*yield*/, page.setInput(page.mainSearchInputBar, "Hamburger")];
                case 18:
                    _a.sent();
                    return [4 /*yield*/, page.driver.sleep(600)];
                case 19:
                    _a.sent();
                    //Press ENTER key
                    return [4 /*yield*/, page.driver.actions().sendKeys("\ue007").perform()];
                case 20:
                    //Press ENTER key
                    _a.sent();
                    return [4 /*yield*/, page.driver.sleep(600)];
                case 21:
                    _a.sent();
                    return [4 /*yield*/, page.click(page.clearSearchFormBtn)];
                case 22:
                    _a.sent();
                    return [4 /*yield*/, page.driver.sleep(600)];
                case 23:
                    _a.sent();
                    return [4 /*yield*/, page.click(page.resultsSearchInputBar)];
                case 24:
                    _a.sent();
                    return [4 /*yield*/, page.setInput(page.resultsSearchInputBar, "Ice Cream")];
                case 25:
                    _a.sent();
                    return [4 /*yield*/, page.driver.sleep(600)];
                case 26:
                    _a.sent();
                    //Press ENTER key
                    return [4 /*yield*/, page.driver.actions().sendKeys("\ue007").perform()];
                case 27:
                    //Press ENTER key
                    _a.sent();
                    return [4 /*yield*/, page.driver.sleep(600)];
                case 28:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
