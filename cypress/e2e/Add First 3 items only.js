/// <reference types="cypress" />

describe("Test to add first 3 items only using for loop", () => {
  it("should log in and add the first 3 items to cart", () => {
    // Visit the SauceDemo site (must include https://)
    cy.visit("https://www.saucedemo.com/");

    // Login
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    // Verify successful navigation to inventory page
    cy.url().should("include", "inventory");

    /* 
      This for loop clicks only the first 3 "Add to cart" buttons.
      Note: Using i < 3 ensures we only add 3 items, 
      while keeping .eq(i) dynamic for any product order.
    */
    for (let i = 0; i < 3; i++) {
      cy.get("div#inventory_container").find(".btn").eq(i).click();
    }

    // ✅ Verify that 3 items were added (cart badge shows 3)
    cy.get(".shopping_cart_badge").should("have.text", "3");

    cy.log("✅ Successfully added first 3 items to cart");
  });
});
