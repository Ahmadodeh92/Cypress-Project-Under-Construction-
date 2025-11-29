const { assert } = require("chai");

import "cypress-real-events/support";
import "cypress-file-upload";

// Const to check multiple values and assert

Cypress.on("uncaught:exception", (err, runnable) => {
  // Prevent Cypress from failing on uncaught exceptions
  return false;
});

beforeEach(() => {
  cy.clearCookies();
  cy.clearAllLocalStorage();
  cy.clearAllSessionStorage();

  // Clear IndexedDB
  indexedDB.databases().then((dbs) => {
    dbs.forEach((db) => indexedDB.deleteDatabase(db.name));
  });

  // Clear Service Workers
  if (navigator && navigator.serviceWorker) {
    navigator.serviceWorker.getRegistrations().then((regs) => {
      regs.forEach((reg) => reg.unregister());
    });
  }
});

//---------------------------------------------this is for alert with ok button only----------------------------------------------

describe("Testing Alerts With Ok", () => {
  it("Handles simple alert and asserts message", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");
    cy.get('[id="alertBtn"]').click();

    cy.on("window:alert", (theMsg) => {
      expect(theMsg).to.eql("I am an alert box!"); // Assert alert message
    });
  });
});

//-----------------------------------this is for alert with ok and cancel button and press ok ----------------------------------

describe("Alert with ok & Cancel (Press OK + Assert", () => {
  it("Alert and press ok", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");
    cy.get('[id="confirmBtn"]').click();
    cy.on("window:confirm", (str) => true);
    cy.log("ok button clicked");
  });

  //this is for alert with ok and cancel button and press cancel

  describe("Alert with ok & Cancel (Press Cancel + Assert", () => {
    it("Alert and press cancel", () => {
      cy.visit("https://testautomationpractice.blogspot.com/");
      cy.get('[id="confirmBtn"]').click();
      cy.on("window:confirm", (str) => false);
      cy.log("cancel button clicked");
    });

    // --------------------------------------------this is for alert with textbox-------------------------------------------------

    describe("Alert with Textbox", () => {
      it("Enters 'Ahmad odeh' into the prompt and clicks OK", () => {
        cy.visit("https://testautomationpractice.blogspot.com/");

        // Stub the prompt BEFORE clicking the button
        cy.window().then((win) => {
          cy.stub(win, "prompt").returns("Ahmad odeh");
        });

        // Click the prompt button
        cy.get("#promptBtn").click();

        // Assert that the result contains "Ahmad odeh"
        cy.get("#demo").should("contain.text", "Ahmad odeh");
      });
    });
  });
});

//----------------------------------------------Check Box test & Assert -----------------------------------------------------

describe("Check Box Test + Assert", () => {
  it("Checkbox + Assert", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");

    const ids = [
      "#sunday",
      "#monday",
      "#tuesday",
      "#wednesday",
      "#thursday",
      "#saturday",
    ];

    // Check all checkboxes
    ids.forEach((selector) => {
      // For loop for multiple selection
      cy.get(selector).check(); // To select multiple boxes
    });

    // Assert all are checked
    ids.forEach((selector) => {
      // another for loop to assert
      cy.get(selector).should("be.checked"); //Assertion sequence
    });
  });
});

//-------------------------------------------------Select Country From Drop Box------------------------------------------

describe("Select Country from drop box ", () => {
  it("Selects a country from the dropdown", () => {
    cy.visit("https://testautomationpractice.blogspot.com/#");

    cy.get("#country", { timeout: 10000 }) // wait if loaded dynamically
      .should("be.visible")
      .scrollIntoView()
      .select("uk") // select United Kingdom
      .should("have.value", "uk");
  });
});

//----------------------------------------how to handle "Static drop down list---------------------------------------------------

describe("Select Country from hidden menu ", () => {
  it("Selects a country from the dropdown", () => {
    cy.visit("https://testautomationpractice.blogspot.com/#");

    cy.get("#country").select("Japan"); // we add box id then name the option we want to select ..
    cy.get("#country").should("have.value", "japan"); // Use should have value to assert.
  });
});

//--------------------------------------------Hoover and click item then asssert ----------------------------------------------

describe("Hoover and click then assert ", () => {
  it("Hoover, Click, Assert", () => {
    cy.visit("https://testautomationpractice.blogspot.com/#");

    // cy.get().trigger('mouseover').click('Laptops')
    // cy.get().invoke('Laptops').click()
    cy.get('[class="dropbtn"]').trigger("mouseover"); // Do mouse over command.
    cy.get('[class="dropbtn"]').should("be.visible"); // Asserted that hover initiated menu successfuly.
    cy.get(".dropdown-content").invoke("show"); // force it to be visible

    // Click the Laptops link
    cy.contains(".dropdown-content a", "Laptops").click({ force: true });
    // Optional: assert URL or content
    cy.get(".laptops") // element that shows after click .
      .should("be.visible"); // Assertion that labtops has been clicked .
    // Since we can't assert page changes, we just assert the click happened
    cy.log("Laptops link clicked successfully");
  });
});

//---------------------------------------Click From Box And Assert Highlighted item -------------------------------------------

describe("Click from menu & assert highlighted item", () => {
  it("Click, highlight, assert", () => {
    cy.visit("https://testautomationpractice.blogspot.com/#");
    cy.get('[id="colors"]').select("white");
    cy.log("White has been clicked");
    cy.get("#colors") // Select box
      .find("option") // Click by Color option
      .contains("White") // Select white
      .should("be.selected"); /* Should use chain command to assert single color
    has been highlighted
*/
  });
});

//-----------------------------------------Interacting With Calenders-----------------------------------------------------------

describe("Using Calender", () => {
  it("Set calender properties", () => {
    cy.visit("https://testautomationpractice.blogspot.com/#");
    cy.get('[id="datepicker"]').click();
    function selectMonthYear(month, year) {
      cy.get(".ui-datepicker-title").then(($title) => {
        const currentMonth = $title.find(".ui-datepicker-month").text().trim();
        const currentYear = $title.find(".ui-datepicker-year").text().trim();

        if (currentMonth === month && currentYear === year) {
          return;
        }

        // Go backwards in time (1992 is in the past)
        cy.get(".ui-datepicker-prev").click();
        cy.wait(150);
        selectMonthYear(month, year);
      });
    }

    // 1️⃣ Set calendar to April 1992
    selectMonthYear("April", "2023");

    // 2️⃣ Select the 4th day
    cy.contains(".ui-datepicker-calendar a", "6").click();

    // 3️⃣ Assert (format may vary on your site)
    cy.get("#datepicker").should("have.value", "04/06/2023");
    cy.log("The date 04/06/2023 has been set");
  });
});

/* -------------------------------Different type of calender to calculate age by days ----------------------------------------
* - note that this calender will know the current day and assert the correct day each day and will not crash if date changes day 
after day */

describe("Using Calendar", () => {
  it("Calculates age correctly for today's date", () => {

    cy.visit("https://testautomationpractice.blogspot.com/#");

    // 1️⃣ Set the birth date
    const birthDate = "1992-04-06";
    cy.get("#start-date")
      .invoke("val", birthDate)
      .trigger("input")
      .trigger("change");

    // 2️⃣ Get today's date from browser's real clock
    const today = new Date().toISOString().split("T")[0];

    cy.get("#end-date")
      .invoke("val", today)
      .trigger("input")
      .trigger("change");

    cy.get(".submit-btn").click();

    // 3️⃣ **Calculate expected days automatically**
    const expectedDays = Math.floor(
      (new Date(today) - new Date(birthDate)) / (1000 * 60 * 60 * 24)
    );

    // 4️⃣ Assert dynamic result
    cy.get(".result").should(
      "have.text",
      `You selected a range of ${expectedDays} days.`
    );

    cy.log("Age in days =", expectedDays);
  });
});


//----------------------------------------- Interacting with (DRAG & DROP Items)---------------------------------------------

/* 1 - First we install "npm install cypress-real-events"
   2 - Then we add "import "cypress-real-events/support" to "cypress/support/e2e.js" "Current test" */

describe("Drag & Drop", () => {
  it("Drag & Drop item test", () => {
    cy.visit("https://testautomationpractice.blogspot.com/#");

    const dataTransfer = new DataTransfer();

    cy.visit("https://testautomationpractice.blogspot.com/");

    // Drag element
    cy.get("#draggable").trigger("mousedown", { which: 1 });

    // Move to drop area
    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true });

    // ASSERTION: Droppable text becomes "Dropped!"
    cy.get("#droppable p").should("contain", "Dropped!");
  });
});

/*-----------------------------------------Interacting with "Upload File"-------------------------------------------------------
You’ll need the cypress-file-upload plugin for this: BASH >> "npm install --save-dev cypress-file-upload" tHEN add 
"import 'cypress-file-upload' To "E2E" File ; then add The File inside "Fixtures Folder" to interact with During code.
"*/

describe("", () => {
  it("Upload Single File and Assert", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");
    cy.get('[id="singleFileInput"]').attachFile("TestDocument.docx"); // file inside cypress/fixtures
    cy.get("#singleFileForm button").click();
    cy.get("#singleFileStatus").should("contain.text", "TestDocument.docx");
    cy.log("The File", "TestDocument.docx", "Uploaded successfuly");
  });
});
