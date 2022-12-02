class playgrndClientSideDelayPageObjects {
  pageContainer() {
    return cy.get(".container");
  }

  containerActionButton() {
    return cy.get('button[id="ajaxButton"]');
  }

  containerActionButtonClick() {
    return cy.get('button[id="ajaxButton"]').click();
  }

  waitLabelcontainersection() {
    return cy
      .get('div[id="content"]')
      .contains("p", "Data calculated on the client side.", { timeout: 16000 });
  }
}
export default new playgrndClientSideDelayPageObjects();
