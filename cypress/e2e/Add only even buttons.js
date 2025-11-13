/// <reference types="cypress" />

describe("Test to add even index items only", () => {
  it("should log in and add even-indexed items to cart", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    // Assert we are on the inventory page
    cy.url().should("include", "inventory");

    // Get all Add to cart buttons and click only even indices (0, 2, 4, ...)
    cy.get("#inventory_container .btn")
      .should("have.length.at.least", 6)
      .each(($btn, index) => {
        if (index % 2 === 0) {
          cy.wrap($btn).click();
        }
      });

    // Assert that 3 items (0, 2, 4) were added

    cy.get(".shopping_cart_badge").should("have.text", "3");

    cy.log("✅ Successfully added even-indexed items to cart");
  });
});
