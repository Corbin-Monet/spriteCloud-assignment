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
}
export default new playgrndHomePagePageObjects();
