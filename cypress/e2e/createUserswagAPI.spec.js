/// <reference types ="cypress"/>

let username = "Corbz";
let firstName = "Corbin";
let lastName = "Holdsworth";
let email = "corbin@test.com";
let password = "test123$";
let phone = "+447624244662";
let userStatus = 0;

describe("API allows Users basic functionality", () => {
  it("Create user", () => {
    cy.request({
      url: "/user",
      method: "POST",
      body: {
        id: 1,
        username: username,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phone: phone,
        userStatus: userStatus,
      },
    })
      .its("body")
      .should("deep.contain", {
        code: 200,
      });
  });

  it("User is able to log in", () => {
    cy.request({
      url: "/user/login",
      method: "GET",
      body: {
        username: username,
        password: password,
      },
    })
      .its("body")
      .should("deep.contain", {
        code: 200,
      });
  });

  it("User is able to log OUT", () => {
    cy.request({
      url: "/user/logout",
      method: "GET",
    })
      .its("body")
      .should("deep.contain", {
        code: 200,
      });
  });
});
