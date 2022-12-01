import playgrndHomePagePageObjects from "../support/page-objects/playgrndHomePagePageObjects";

Cypress.Commands.add("visitPlayGroundApp", () => {
  playgrndHomePagePageObjects.navigateToSampleApp();
  cy.url().should("include", "/sampleapp");
});

import "./commands";
import addContext from "mochawesome/addContext";

Cypress.on("test:after:run", (test, runnable) => {
  let videoName = Cypress.spec.name;
  videoName = videoName.replace("/.js.*", ".js");
  const videoUrl = "videos/" + videoName + ".mp4";

  addContext({ test }, videoUrl);
});
