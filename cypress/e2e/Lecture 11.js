/// <reference types = "cypress"/>

describe("New Test Suite", () => {
  it("", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    // This code will add all items to the cart using .btn_inventory class and multiple option

    // cy.get("button.btn_inventory").click({ multiple: true });
    // Assert that 6 items were added
    // cy.get(".shopping_cart_badge").should("have.text", "6");
    // cy.log("✅ Successfully added all items to cart");
    // --------------------------------------------------------------------------------------
    // This code will add a specific item to the cart using its unique ID.
    // cy.get("button#add-to-cart-sauce-labs-backpack").click({ multiple: true });
    // using unique id will add only one item to the cart because id is unique for each element
    // --------------------------------------------------------------------------------------
    // This code will add specific items to the cart using CSS Selector.

    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    // --------------------------------------------------------------------------------------

    // This code will add Multiple Specific items to the cart using for loop.

    // for (let i=0; i<6; i++) {
    //     cy.get('div#inventory_container)')
    // }
  });
});
