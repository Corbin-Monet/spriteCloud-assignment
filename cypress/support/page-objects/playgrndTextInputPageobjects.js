class playgrndTextInputPageobjects {
  pageContainer() {
    return cy.get(".container");
  }

  pageFormNameField() {
    return cy.get('input[id="newButtonName"]');
  }

  pageFormActionButton() {
    return cy.get('button[id="updatingButton"]');
  }

  pageFormActionButtonClick() {
    return cy.get('button[id="updatingButton"]').click();
  }

  selectAndFillPasswordField(pwd) {
    return cy.get('input[name="Password"]').click().type(pwd);
  }
  clickLogInBtn() {
    return cy.get("#login").click();
  }

  loginErrorMsg() {
    return cy.get("#loginstatus");
  }
}
export default new playgrndTextInputPageobjects();
