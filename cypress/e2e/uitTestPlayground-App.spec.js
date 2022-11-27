/// <reference types ="cypress"/>

import playgrndHomePagePageObjects from "../support/page-objects/playgrndHomePagePageObjects";
import playgrndSampleAppPageobjects from "../support/page-objects/playgrndSampleAppPageobjects";

const userName = Cypress.env("userName");
const pwd = Cypress.env("password");
let wrongPwd = pwd + "123";

describe("Home page has Sample App in Container", () => {
  beforeEach("", () => {
    cy.visit("http://www.uitestingplayground.com/");
  });
  it("Login with correct credentials", () => {
    playgrndHomePagePageObjects
      .homePageContainer()
      .should("contain", "Sample App");
    cy.screenshot("Home Page Container");

    // playgrndHomePagePageObjects.navigateToSampleApp();
    //

    //assertions here
    //playgrndHomePagePageObjects.navigateToSampleApp();
    //cy.screenshot();

    // cy.intercept({
    //   method: "POST",
    //   url: cognitoEndPoint,
    //   headers: {
    //     "x-amz-target": "AWSCognitoIdentityProviderService.SignUp",
    //   },
    // }).as("signUpRequest");
  });

  it("Web Element has correct properties", () => {
    playgrndHomePagePageObjects
      .sampleAppButton()
      .should("have.attr", "href")
      .and("include", "sampleapp");
    cy.screenshot("Web-Element");
  });

  it("Navigate to Sample App page", () => {
    playgrndHomePagePageObjects.navigateToSampleApp();
    cy.url().should("include", "/sampleapp");
    cy.screenshot("Navigate to Sample App Page");
  });

  it("App denies incorrect users", () => {
    playgrndHomePagePageObjects.navigateToSampleApp();
    playgrndSampleAppPageobjects.selectAndFillUserNameField(userName);
    playgrndSampleAppPageobjects.selectAndFillWrngPasswordField(wrongPwd);
    playgrndSampleAppPageobjects.clickLogInBtn();
    playgrndSampleAppPageobjects
      .loginErrorMsg()
      .should("contain", "Invalid username/password");
    cy.screenshot("Error on Login");
  });

  it("App allows correct users", () => {
    playgrndHomePagePageObjects.navigateToSampleApp();
    playgrndSampleAppPageobjects.selectAndFillUserNameField(userName);
    playgrndSampleAppPageobjects.selectAndFillPasswordField(pwd);
    playgrndSampleAppPageobjects.clickLogInBtn();
    playgrndSampleAppPageobjects
      .loginErrorMsg()
      .should("contain", "Welcome, " + userName);
    cy.screenshot("Successful login");
  });
});
