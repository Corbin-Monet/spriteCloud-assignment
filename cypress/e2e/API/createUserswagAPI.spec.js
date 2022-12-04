/// <reference types ="cypress"/>

describe("API allows Users MVP functionality", () => {
  it("API can Create a user", () => {
    cy.fixture("userCreate").then((userCreate) => {
      expect(userCreate, "the same data").to.deep.equal(userCreate);
      cy.request({
        url: "/user",
        method: "POST",
        body: { userCreate },
      })
        .its("body")
        .should("deep.contain", {
          code: 200,
        });
    });
  });

  it("Created user is able to log in", () => {
    cy.fixture("user").then((user) => {
      expect(user, "the same data").to.deep.equal(user);
      cy.request({
        url: "/user/login",
        method: "GET",
        body: { user },
      })
        .its("body")
        .should("deep.contain", {
          code: 200,
        });
    });
  });

  it("User is able to order Pet", () => {
    cy.fixture("petOrder").then((petOrder) => {
      expect(petOrder, "the same data").to.deep.equal(petOrder);
      cy.request({
        url: "/store/order",
        method: "POST",
        body: { petOrder },
      }).then((response) => {
        expect(response).property("status").to.equal(200);
      });
    });
  });
});
