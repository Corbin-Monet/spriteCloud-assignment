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

import "./commands";
import addContext from "mochawesome/addContext";

Cypress.on("test:after:run", (test, runnable) => {
  let videoName = Cypress.spec.name;
  videoName = videoName.replace("/.js.*", ".js");
  const videoUrl = "videos/" + videoName + ".mp4";

  addContext({ test }, videoUrl);
});
