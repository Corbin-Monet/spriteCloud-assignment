/// <reference types ="cypress"/>

import playgrndHomePagePageObjects from "../../support/page-objects/playgrndHomePagePageObjects";
import playgrndClientSideDelayPageObjects from "../../support/page-objects/playgrndClientSideDelayPageObjects";

let pageRoute = "/clientdelay";

describe("Client Side Delay, lets wait for things", () => {
  beforeEach("Load up home page", () => {
    cy.visit(Cypress.env("UITestURL"));
  });
  it("The page button is displaying on Home screen", () => {
    playgrndHomePagePageObjects
      .homePageContainer()
      .should("contain", "Client Side Delay");
    cy.screenshot("Home Page Container");
  });

  it("Web Element has correct properties", () => {
    playgrndHomePagePageObjects
      .clientSideDelayButton()
      .should("have.attr", "href")
      .and("include", pageRoute);
    cy.screenshot("Web-Element attribute test");
  });

  it(`Navigate to '${pageRoute}' page`, () => {
    cy.intercept({
      method: "GET",
      url: Cypress.env("UITestURL") + pageRoute,
    }).as("pageLoadup");

    playgrndHomePagePageObjects.navigateClientSideDelay();
    cy.wait("@pageLoadup").its("response.statusCode").should("equal", 200);

    cy.url().should("include", pageRoute);
    cy.screenshot(`Navigate to '${pageRoute}' Page`);
  });

  it("Simple page content tests", () => {
    playgrndHomePagePageObjects.navigateClientSideDelay();
    cy.url().should("include", pageRoute);

    //Cypress command to test for Nav bar on any page
    cy.testUITestingNavbar();

    //test the container for some page contents
    playgrndClientSideDelayPageObjects
      .pageContainer()
      .should("contain", "Client Side Delay")
      .and("contain", "Scenario")
      .and("contain", "Playground");

    //forms input field
    playgrndClientSideDelayPageObjects
      .containerActionButton()
      .should("contain", "Button Triggering Client Side Logic");
  });

  it("Buttons response label will be waited for", () => {
    playgrndHomePagePageObjects.navigateClientSideDelay();
    cy.url().should("include", pageRoute);

    //Test the button is enabled
    playgrndClientSideDelayPageObjects
      .containerActionButton()
      .should("not.be.disabled");

    //Test the label will be waited for!
    playgrndClientSideDelayPageObjects.containerActionButtonClick();
    playgrndClientSideDelayPageObjects
      .waitLabelcontainersection()
      .should("be.visible");
  });
});
