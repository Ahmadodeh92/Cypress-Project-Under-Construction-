/// <reference types="cypress" />

require("cypress-xpath");

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

describe("PhP Project", () => {
  it("Assert phone number is visible", () => {
    cy.visit("https://www.phptravels.net/");
    cy.wait(1000); // waits 1 second

    // Assert language is English (US)
    cy.get('[class="h6 m-0 header_options text-dark fw-light"]').should(
      "contain",
      "English"
    );
    cy.get('[class="h6 m-0 header_options fw-light"]').should(
      "not.have.text",
      "JOD"
    );

    cy.contains("li", "+123456789").should("be.visible");
    cy.contains("li", "email@agency.com").should("be.visible");
    cy.contains("li", "Contact Us").should("be.visible");
    cy.log("Contact us is visible");

    cy.contains("div.term-box.footer-item", "All Rights Reserved").should(
      "be.visible"
    );

    // Use system's current date
    const today = new Date();
    today.setDate(today.getDate() + 4); // add 3 days

    // Format to DD-MM-YYYY
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();

    const expectedDate = `${dd}-${mm}-${yyyy}`;
    cy.log("Expected departure date (+4 days): " + expectedDate);

    // Assert the departure input value
    cy.get("input.depart").should("have.value", expectedDate);

    // Change language to Arabic first
    cy.get('[class="mx-1"]').click();
    cy.get(
      '#navbarSupportedContent a[href="https://www.phptravels.net/language/sa/Arabic/RTL"] span'
    ).click();

    // Map browser language codes to site names and URLs
    const langMap = {
      en: {
        name: "English",
        url: "https://www.phptravels.net/language/us/English/LTR",
      },
      fr: {
        name: "French",
        url: "https://www.phptravels.net/language/fr/French/LTR",
      },
      ar: {
        name: "Arabic",
        url: "https://www.phptravels.net/language/sa/Arabic/RTL",
      },
      tr: {
        name: "Turkish",
        url: "https://www.phptravels.net/language/tr/Turkish/LTR",
      },
      ru: {
        name: "Russian",
        url: "https://www.phptravels.net/language/ru/Russian/LTR",
      },
      zh: {
        name: "Chinese",
        url: "https://www.phptravels.net/language/cn/Chinese/LTR",
      },
      de: {
        name: "Germany",
        url: "https://www.phptravels.net/language/de/Germany/LTR",
      },
    };

    // Step 1: Detect current site language (only the language span)
    cy.get("a.nav-link.dropdown-toggle span.header_options")
      .should("be.visible") // in case there are multiple spans
      .first() // language is usually the first one
      .invoke("text")
      .then((currentText) => {
        const currentLanguage = currentText.trim();
        cy.log("Current site language: " + currentLanguage);

        // Step 2: Detect browser default language
        cy.window().then((win) => {
          const browserLangCode = win.navigator.language.substring(0, 2); // e.g., 'en'
          const browserLanguage = langMap[browserLangCode] || langMap.en;
          cy.log("Browser default language: " + browserLanguage.name);

          // Step 3: Only switch if different
          if (currentLanguage !== browserLanguage.name) {
            // Open language dropdown
            cy.get('[class="mx-1"]').click();

            // Click the matching browser language
            cy.wait(2000);
            cy.get(
              `#navbarSupportedContent a[href="${browserLanguage.url}"] span`
            ).click({ force: true });

            // Step 4: Assert the dropdown now shows browser language
            cy.get("a.nav-link.dropdown-toggle span.header_options")
              .should("be.visible")
              .first()
              .invoke("text")
              .then((text) => {
                const selectedText = text.trim();
                expect(selectedText).to.eq(browserLanguage.name);
                cy.log(
                  "Language successfully switched to browser default: " +
                    selectedText
                );
              });
          } else {
            cy.log(
              "Site language already matches browser default: " +
                currentLanguage
            );
          }
        });
      });

    // navigate to hotels tab to do assertions

    cy.contains("a", "Hotels").click({ force: true });
    cy.get("span.select2-selection.select2-selection--single")
      .contains("Search by City")
      .click();
    cy.get('[class="select2-search__field"]').type("Dubai");
    cy.get(
      '[class="select2-results__option select2-results__option--highlighted"]'
    ).click();
    cy.get('[class="select2-selection__rendered"]').should(
      "have.text",
      "Dubai United Arab Emirates"
    );
    cy.log("Clicked the first result on the list");
    cy.get(
      '[class="dropdown-toggle dropdown-btn travellers d-flex align-items-center waves-effect"]'
    ).click();

    cy.get("#hotels-search a.travellers").click();
    cy.get(
      "#hotels-search div:nth-child(2) > div.justify-content-between > div.qtyBtn > div.qtyDec > svg"
    ).click();
    cy.log("Selected 1 room for 1 adult");
    cy.get("#fadein section.container").click();
    cy.get("#hotels-search svg.c8LPF-icon").click();

    //Assert time to load page

    // Start measuring time
    const startTime = new Date().getTime();

    // 1️⃣ Wait for loader animation to disappear
    cy.get('div[ng-if="loading && !noMoreHotels"]', { timeout: 30000 }).should(
      "not.exist"
    );

    // 2️⃣ Ensure "Modify Search" button is visible (search finished)
    cy.get(
      "a.btn.btn-light.w-100.d-flex.align-items-center.justify-content-center",
      { timeout: 30000 }
    )
      .should("be.visible")
      .then(() => {
        const endTime = new Date().getTime();
        const duration = endTime - startTime;
        cy.log(`Search fully loaded in ${duration} ms`);
      });

    // 3️⃣ Get number of hotels found
    cy.get("h4.new-main-tit span.j_listABTit small strong.ng-binding")
      .should("be.visible")
      .then(($el) => {
        const hotelCount = parseInt($el.text().trim());
        cy.log(`Hotels found: ${hotelCount}`);
        expect(hotelCount).to.be.greaterThan(0); // assert at least 1 hotel

        //sort results from lowest to highest

        cy.get(
          "#fadein button[ng-click=\"sortHotels('asc')\"] span.d-flex"
        ).click();

        let lowestPrice = Number.MAX_VALUE;
        let lowestHotelName = "";

        cy.get("div.col-md-7")
          .each(($hotelCard) => {
            // Get hotel name
            const name = $hotelCard.find("h5.card-title strong").text().trim();

            // Get price text and convert to number
            const priceText = $hotelCard
              .find("p.card-text strong")
              .text()
              .replace(/\s+/g, " ")
              .trim();
            // Extract numeric value
            const priceMatch = priceText.match(/[\d,.]+/);
            if (!priceMatch) return;
            const price = parseFloat(priceMatch[0].replace(",", ""));

            // Compare and store lowest
            if (price < lowestPrice) {
              lowestPrice = price;
              lowestHotelName = name;
            }
          })
          .then(() => {
            cy.log(
              `Lowest Price Hotel: ${lowestHotelName} - USD ${lowestPrice}`
            );
          });
      });
  });
});
