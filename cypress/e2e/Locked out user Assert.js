/// <reference types = "cypress"/>
describe("Log failed login message", () => {});

it("Log Locked out user Message", function () {
  cy.visit("https://www.saucedemo.com/");
  cy.visit("www.saucedemo.com");
  cy.visit("www.saucedemo.com");
  cy.get(
    '[data-test="login-credentials-container"] div.login_credentials_wrap-inner'
  ).click();
  cy.get('[data-test="username"]').click();
  cy.get('[data-test="username"]').type("locked_out_user");
  cy.get(
    '[data-test="login-credentials-container"] div.login_credentials_wrap-inner'
  ).click();
  cy.get('[data-test="login-password"]').click();
  cy.get('[data-test="login-password"]').click();
  cy.get('[data-test="password"]').click();
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').click();
  cy.get('[data-test="error"]').click();

  /* Add assert to verify the error message */

  cy.get('[data-test="error"]').should(
    "have.text",
    "Epic sadface: Sorry, this user has been locked out."
  );
  cy.log("Epic sadface: Sorry, this user has been locked out.");
  Cypress.runner.stop();
});
