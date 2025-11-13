/// <reference types = "cypress"/>

describe("Lecture 12 - Interacting with Items", () => {
  it("Select item with uniqe id", () => {
    cy.visit("https://www.automationexercise.com/products");
    // cy.get('div:nth-child(3) div.overlay-content a.btn').click();
    // cy.get('div:nth-child(7) div.overlay-content a.btn').click();
    cy.get(
      "div:nth-of-type(2) > .product-image-wrapper > .choose > .nav.nav-justified.nav-pills > a"
    )
      .should("be.visible")
      .click();
  });
});
