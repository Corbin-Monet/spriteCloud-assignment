/// <reference types ="cypress"/>

import playgrndHomePagePageObjects from "../../support/page-objects/playgrndHomePagePageObjects";
import playgrndTextInputPageobjects from "../../support/page-objects/playgrndTextInputPageobjects";

describe("Home page has Text Input page in Container", () => {
  beforeEach("Load up home page", () => {
    cy.visit(Cypress.env("UITestURL"));
  });
  it("Home page is displaying the correct page/button name", () => {
    playgrndHomePagePageObjects
      .homePageContainer()
      .should("contain", "Text Input");
    cy.screenshot("Home Page Container");
  });

  it("Web Element has correct properties", () => {
    playgrndHomePagePageObjects
      .textInputButton()
      .should("have.attr", "href")
      .and("include", "textinput");
    cy.screenshot("Web-Element test");
  });

  it("Navigate to Sample App page", () => {
    cy.intercept({
      method: "GET",
      url: Cypress.env("UITestURL") + "/textinput",
    }).as("pageLoadup");

    playgrndHomePagePageObjects.navigateToTextInput();
    cy.wait("@pageLoadup").its("response.statusCode").should("equal", 200);

    cy.url().should("include", "/textinput");
    cy.screenshot("Navigate to textInput Page");
  });

  it("Simple page content tests", () => {
    playgrndHomePagePageObjects.navigateToTextInput();
    cy.url().should("include", "/textinput");

    //Cypress command to test for Nav bar on any page
    cy.testUITestingNavbar();

    //test the container for some page contents
    playgrndTextInputPageobjects
      .pageContainer()
      .should("contain", "Text Input")
      .and("contain", "Scenario")
      .and("contain", "Playground");

    //forms input field
    playgrndTextInputPageobjects
      .pageFormNameField()
      .invoke("attr", "placeholder")
      .should("contain", "MyButton");
  });

  it("Action change BTN name change", () => {
    let newBtnName = "SpriteCloudBTN";

    playgrndHomePagePageObjects.navigateToTextInput();
    cy.url().should("include", "/textinput");

    //test the default button name
    playgrndTextInputPageobjects
      .pageFormActionButton()
      .should(
        "contain",
        "Button That Should Change it's Name Based on Input Value"
      );
    //Test the change in the button AFTER input
    playgrndTextInputPageobjects.pageFormNameField().click().type(newBtnName);
    playgrndTextInputPageobjects.pageFormActionButtonClick();
    playgrndTextInputPageobjects
      .pageFormActionButton()
      .should("contain", newBtnName);
  });

  it("Default button name on reload", () => {
    playgrndHomePagePageObjects.navigateToTextInput();
    cy.url().should("include", "/textinput");

    //test the default button name
    playgrndTextInputPageobjects
      .pageFormActionButton()
      .should(
        "contain",
        "Button That Should Change it's Name Based on Input Value"
      );
  });
});
