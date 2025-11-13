const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/*.js",
    // We add Test case Paths here OR inside E2E Area "Best Practice",
    //  to run multiple test cases in a single folder we use /"*.js".
  },
});
