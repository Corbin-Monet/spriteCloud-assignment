class playgrndSampleAppPageobjects {
  selectUserNameField() {
    return cy.get("#aaab0071-7f1e-c847-fd55-7e1d88421a8d").click();
  }

  selectAndFillUserNameField(userName) {
    return cy.get('input[name="UserName"]').click().type(userName);
  }

  selectAndFillWrngPasswordField(wrongPwd) {
    return cy.get('input[name="Password"]').click().type(wrongPwd);
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
export default new playgrndSampleAppPageobjects();
