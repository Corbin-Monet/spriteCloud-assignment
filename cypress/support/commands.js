import playgrndHomePagePageObjects from "../support/page-objects/playgrndHomePagePageObjects";

Cypress.Commands.add("visitPlayGroundApp", () => {
  playgrndHomePagePageObjects.navigateToSampleApp();
  cy.url().should("include", "/sampleapp");
});

Cypress.Commands.add("testUITestingNavbar", () => {
  cy.get("nav").contains("a", "UITAP");
  cy.get('div[id="navbarSupportedContent"]')
    .contains("a", "Home")
    .should("have.attr", "href")
    .and("include", "home");

  cy.get('div[id="navbarSupportedContent"]')
    .contains("a", "Resources")
    .should("have.attr", "href")
    .and("include", "resources");
});

import "./commands";
import addContext from "mochawesome/addContext";

Cypress.on("test:after:run", (test, runnable) => {
  let videoName = Cypress.spec.name;
  videoName = videoName.replace("/.js.*", ".js");
  const videoUrl = "videos/" + videoName + ".mp4";

  addContext({ test }, videoUrl);
});
