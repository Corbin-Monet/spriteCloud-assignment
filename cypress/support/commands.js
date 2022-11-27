import playgrndHomePagePageObjects from "../support/page-objects/playgrndHomePagePageObjects";

Cypress.Commands.add("visitPlayGroundApp", () => {
  playgrndHomePagePageObjects.navigateToSampleApp();
  cy.url().should("include", "/sampleapp");
});

Cypress.Commands.add("getEp3VariablesToScope", () => {
  cy.readFile("cypress/config/ep3Config.json").then((data) => {
    platfromUrl = cy.log(data.data.URL);
  });
});
