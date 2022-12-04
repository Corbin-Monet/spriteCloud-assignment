class playgrndHomePagePageObjects {
  homePageContainer() {
    return cy.get("#overview");
  }

  sampleAppButton() {
    return cy.contains("Sample App");
  }

  navigateToSampleApp() {
    return cy.contains("Sample App").click();
  }

  textInputButton() {
    return cy.get("h3").contains("a", "Text Input");
  }

  clientSideDelayButton() {
    return cy.get("h3").contains("a", "Client Side Delay");
  }

  navigateToTextInput() {
    return cy.get("h3").contains("a", "Text Input").click();
  }

  navigateClientSideDelay() {
    return cy.get("h3").contains("a", "Client Side Delay").click();
  }
}

export default new playgrndHomePagePageObjects();
