/// <reference types="cypress" />

const names = [
  "Olivia",
  "Liam",
  "Emma",
  "Noah",
  "Ava",
  "Oliver",
  "Sophia",
  "Elijah",
  "Isabella",
  "Lucas",
  "Mia",
  "Mason",
  "Amelia",
  "Logan",
  "Harper",
  "James",
  "Evelyn",
  "Ethan",
  "Abigail",
  "Alexander",
  "Emily",
  "Benjamin",
  "Ella",
  "Jacob",
  "Avery",
  "Michael",
  "Scarlett",
  "Daniel",
  "Grace",
  "Henry",
  "Chloe",
  "Jackson",
  "Victoria",
  "Sebastian",
  "Riley",
  "Jack",
  "Aria",
  "Aiden",
  "Lily",
  "Owen",
  "Zoey",
  "Samuel",
  "Penelope",
  "Matthew",
  "Lillian",
  "Joseph",
  "Nora",
  "Levi",
  "Hannah",
  "Mateo",
];

const lastNames = [
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Garcia",
  "Miller",
  "Davis",
  "Rodriguez",
  "Martinez",
  "Hernandez",
  "Lopez",
  "Gonzalez",
  "Wilson",
  "Anderson",
  "Thomas",
  "Taylor",
  "Moore",
  "Jackson",
  "Martin",
  "Lee",
  "Perez",
  "Thompson",
  "White",
  "Harris",
  "Sanchez",
  "Clark",
  "Ramirez",
  "Lewis",
  "Robinson",
  "Walker",
  "Young",
  "Allen",
  "King",
  "Wright",
  "Scott",
  "Torres",
  "Nguyen",
  "Hill",
  "Flores",
  "Green",
  "Adams",
  "Nelson",
  "Baker",
  "Hall",
  "Rivera",
  "Campbell",
  "Mitchell",
  "Carter",
  "Roberts",
];

describe("SmartBuy Full Flow Test", () => {
  //   it("Runs the full registration flow with a random first name", () => {

  //     /* -------------------------------------- Start of create new user process Code -------------------------------------------- */

  //**************/Used "Promise.then" to ensure proper logging order in Cypress after each sucessful procedure\*******************

  //     // 1️⃣ Visit homepage
  //     cy.visit("https://smartbuy-me.com/");
  //     cy.get('span.locale-selector__value[plerdy-tracking-id="81336156002"]')
  //       .should("have.text", "English");
  //     cy.log("✅ English Language is visible");

  //     // 2️⃣ Navigate to login page
  //     cy.get("a[aria-label='My account'] span.icon-state__primary")
  //       .click()
  //       .then(() => console.log("Clicked on My Account icon"));

  //     cy.get("form#customer_login h1.form__title.heading.h1")
  //       .should("have.text", "Login to my account");
  //     cy.log("✅ Login Page is visible");

  //     // 3️⃣ Navigate to create account page
  //     cy.get(".link.link--accented[href='/account/register']")
  //       .click()
  //       .then(() => console.log("Clicked on Create Account link"));

  //     cy.get(".form__title.heading.h1")
  //       .should("have.text", "Create my account");
  //     cy.log("✅ Create Account Page is visible");

  //     // 4️⃣ Generate random first name
  //     const randomIndex = Math.floor(Math.random() * names.length);
  //     const randomName = names[randomIndex];

  //     cy.get("#customer\\[first_name\\]")
  //       .type(randomName)
  //       .then(() => console.log(`Typed random first name: ${randomName}`));
  //     cy.log(`✅ Typed random first name: ${randomName}`);

  //     // 5️⃣ Generate random last name
  //     const randomLastIndex = Math.floor(Math.random() * lastNames.length);
  //     const randomLastName = lastNames[randomLastIndex];

  //     cy.get("#customer\\[last_name\\]")
  //       .type(randomLastName)
  //       .then(() => console.log(`Typed random last name: ${randomLastName}`));
  //     cy.log(`✅ Typed random last name: ${randomLastName}`);

  //     // 6️⃣ Generate random email
  //     const randomEmail = `${randomName.toLowerCase()}.${randomLastName.toLowerCase()}@email.com`;

  //     cy.get("#customer\\[email\\]")
  //       .type(randomEmail)
  //       .then(() => console.log(`Typed random email: ${randomEmail}`));

  //     cy.log(`✅ Email: ${randomEmail}`);

  //     // 7️⃣ Type password
  //     const password = randomName + "12345";

  //     cy.get("input[id='customer[password]']")
  //       .type(password)
  //       .then(() => console.log(`Typed password: ${password}`));

  //     cy.log(`✅ Password: ${password}`);

  //     // 8️⃣ Submit the registration form
  //     cy.get(".form__submit.button.button--primary.button--full")
  //       .click()
  //       .then(() => console.log("Account creation form successfully submitted"));

  //     cy.log(`✅ Account Created → Email: ${randomEmail}, Password: ${password}`);
  //   });
  // });

  // ******************************Code Tested and working fine in "Cypress 12.16.0" version" (17-11-2025)******************

  //     /* -------------------------------------- End of create new user process Code -------------------------------------------- */

  //     /*  This Command was created to add new user to the website, sadly the website has no (Registration successful) message or
  //     indication so it returns to the homepage only, please initiate this test only if you want to check if the
  //     procedure will pass.

  //     // Note : Verify successful registration by checking for account dashboard

  //     // Sign in using created credentials for first time login validation (Can be found in "Cypress Logs + Console Log"
  //     after test is finished.

  // -------------------------------------------- ASSERTIONS TO BE ADDED HERE BELOW THIS LINE ---------------------------------------*/

  // it("Assertions", () => {
  //   cy.visit("https://smartbuy-me.com/");

  //   // Assert that the language selector displays "English"

  //   cy.get(
  //     'span.locale-selector__value[plerdy-tracking-id="81336156002"]'
  //   ).should("have.text", "English");
  //   cy.log("✅ English Language is visible");

  //   // Assert that page title is correct

  //   cy.title().should("eq", "SmartBuy");

  //   // Assert that the main banner is visible

  //   cy.get("header[role='banner']").should("be.visible");
  //   cy.log("✅ Main banner is visible");

  //   // Assert that the footer contains Contact- Us

  //   cy.get(
  //     "div[class='footer__block-item footer__block-item--link'] span:nth-child(1)"
  //   ).should("have.text", "Contact US");
  //   cy.log("✅ Footer contains 'Contact US' text");

  //   // Assert that the search bar is present
  //   cy.get("input[placeholder='Search...']").should("be.visible");
  //   cy.log("✅ Search bar is visible");

  //   // Assert that the shopping cart icon is visible

  //   cy.get(
  //     "div[class='header__cart-icon icon-state'] span[class='icon-state__primary']"
  //   ).should("be.visible");
  //   cy.log("✅ Shopping cart icon is visible");

  //   // Assert that the promotional banner is visible

  //   cy.get(
  //     ".slideshow__image[src='//smartbuy-me.com/cdn/shop/files/WhatsApp_Image_2025-11-07_at_12.55.59_AM.jpg?v=1762515035&width=1600']"
  //   ).should("be.visible");
  //   cy.log("✅ Promotional banner is visible");

  //   // Assert that the featured products section is present

  //   cy.url().should("include", "smartbuy-me.com");
  //   cy.log("✅ URL contains 'smartbuy-me.com'");

  //   //assert using cy.location "Chain Commands"
  //   cy.location("hostname").should("include", "smartbuy-me.com");
  //   cy.log("✅ Hostname contains 'smartbuy-me.com'");

  //   //using .each + wrap to assert specific product visibility

  //   cy.get(".product-item__image-wrapper").each((element, index, list) => {

  //     if (element.text().includes("Xiaomi Vacuum")) {
  //       cy.wrap(element).click().then(() => {
  //       console.log("Xiaomi Vacuum has been clicked.");
  //       cy.log("✅ Xiaomi Vacuum product has been clicked.");

  //     }
  //     );
  //   }
  //   });

  //   cy.log("Assertions test completed successfully.").then(() => {
  //     console.log("Assertions test completed successfully.");
  //   });

  // });

  // ******************************Code Tested and working fine in "Cypress 12.16.0" version" (17-11-2025)******************

  //--------------------------------------------------------------------------------------------------------------------------

  // it('Logs SmartBuy items below 100 JOD using .then()', () => {

  //   cy.visit('https://smartbuy-me.com/');

  //   // Navigate to featured products
  //   cy.get(".section__action-link.link[href='/collections/featured-products']")
  //     .click();

  //   // Iterate through each product card
  //   cy.get('.product-item__info').each(($el) => {

  //     cy.wrap($el).then((product) => {

  //       const itemName = product
  //         .find('.product-item__title.text--strong.link')
  //         .text()
  //         .trim();

  //       const priceText = product
  //         .find('.price.price--highlight')
  //         .text()
  //         .trim();

  //       if (!priceText) return; // skip items without price

  //       // Convert price → keep full decimal places (ex: 85.000)
  //       const numericPrice = parseFloat(priceText.replace(/[^\d.]/g, ''));

  //       if (numericPrice < 100) {

  //         // Print clean format
  //         const formattedPrice = numericPrice.toFixed(3);

  //         cy.then(() => {
  //           console.log(`(${itemName}, ${formattedPrice} JOD)`);
  //         });

  //         cy.log(`(${itemName}, ${formattedPrice} JOD)`);
  //       }
  //     });
  //   });
  // });

  // ******************************Code Tested and working fine in "Cypress 12.16.0" version" (17-11-2025)******************

  //----------------------------------------------------------------------------------------------------------------------------

  // assert using invoke and alias.

  // it('Logs SmartBuy items below 100 JOD using .then()', () => {

  //   cy.visit('https://smartbuy-me.com/');

  //   // Navigate to featured products

  //   cy.get(".section__action-link.link[href='/collections/featured-products']")
  //     .click();

  //     cy.get('[class="collection"]').eq(0).invoke('text').as("firstitemtext")

  //     cy.get('@firstitemtext').should('include', 'Xiaomi').then((text) => {
  //       console.log('First item text includes Xiaomi: ' + text);
  //       cy.log('First item text includes Xiaomi: ' + text);

  // })
  // });

  // ******************************Code Tested and working fine in "Cypress 12.16.0" version" (17-11-2025)******************

  //----------------------------------------------------------------------------------------------------------------------------

  // it('Sort items with price and assign index to every item', () => {
  // cy.visit('https://smartbuy-me.com/');

  // // Navigate to featured products

  //   cy.get(".section__action-link.link[href='/collections/featured-products']")
  //     .click();

  //     cy.get('[class="product-item product-item--vertical   1/3--tablet-and-up 1/4--desk"]').as("items")

  //     cy.get('@items').find('[class="price price--highlight"]').each(($el,index,list) => {
  //     cy.log("Item " + $el.text() + "Its index number is " + index);

  //     })

  // })

  // ******************************Code Tested and working fine in "Cypress 12.16.0" version" (17-11-2025)******************

  //----------------------------------------------------------------------------------------------------------------------------

  // Combine all prices after discount and log the total price on certain page

  // it('Combine all prices after discount and log the total price', () => {

  //   cy.visit('https://smartbuy-me.com/');

  //   // Navigate to featured products
  //   cy.get(".section__action-link.link[href='/collections/featured-products']")
  //     .click();

  //   // Click to show "48 per page" and start math only after the click
  //   cy.get('[data-action="select-value"][data-value="48"]').click({ force: true }).then(() => {

  //     // Wait for the product list container to exist
  //     cy.get('.product-list.product-list--collection.product-list--with-sidebar', { timeout: 10000 })
  //       .should('exist')
  //       .then(($list) => {

  //         // Wait until the number of children stabilizes (all items loaded)
  //         cy.wrap($list).find('.product-item__info', { timeout: 10000 })
  //           .should('exist')
  //           .then(($items) => {

  //             let total = 0;

  //             $items.each((index, el) => {
  //               let raw = Cypress.$(el).find('.price.price--highlight').text().trim();
  //               let numeric = raw.replace(/[^\d.]/g, "");
  //               if (numeric) {
  //                 let value = parseFloat(numeric);
  //                 total += value;
  //                 cy.log(`Price ${index + 1}: ${value.toFixed(3)}`);
  //               }
  //             });

  //             cy.then(() => {
  //               cy.log(`Total Price = ${total.toFixed(3)} JOD`);
  //               console.log(`Total Price = ${total.toFixed(3)} JOD`);
  //             });

  //           });
  //       });
  //   });
  // });

  // ******************************Code Tested and working fine in "Cypress 12.16.0" version" (17-11-2025)******************

  //***************************** */ Lecture 15 + Assignment Starts Here Below This Line (My Method)***************************

  //----------------------------------- Collect all Prices on the page and sum them up ----------------------------------------------------------

  // it('Open SmartBuy, select 48 items per page, and sum prices', () => {

  //   // 1️⃣ Visit the homepage
  //   cy.visit('https://smartbuy-me.com/');

  //   // 2️⃣ Navigate to Featured Products
  //   cy.get(".section__action-link.link[href='/collections/featured-products']")
  //     .click();

  //   // 3️⃣ Click "48 per page" in the value picker
  //   cy.get('[data-action="select-value"][data-value="48"]').click({ force: true });

  //   // 4️⃣ Assert the value-picker button updated
  //   cy.get('.value-picker-button')
  //     .should('contain.text', '48 per page');

  //   // 5️⃣ Wait for product items to exist
  //   cy.get('.product-list.product-list--collection.product-list--with-sidebar', { timeout: 10000 })
  //     .find('.product-item__info')
  //     .should('exist')
  //     .then(($items) => {

  //       let total = 0;

  //       // 6️⃣ Loop through all items and sum prices
  //       $items.each((index, el) => {
  //         const raw = Cypress.$(el).find('.price.price--highlight').text().trim();

  //         // Extract numeric value (e.g., "89.000 JOD" → "89.000")
  //         const numeric = raw.replace(/[^\d.]/g, "");

  //         if (numeric) {
  //           const value = parseFloat(numeric);
  //           total += value;

  //           // Log each item price
  //           cy.log(`Price ${index + 1}: ${value.toFixed(3)}`);
  //         }
  //       });

  //       // 7️⃣ Log total price
  //       cy.then(() => {
  //         cy.log(`Total Price = ${total.toFixed(3)} JOD`);
  //         console.log(`Total Price = ${total.toFixed(3)} JOD`);
  //       });

  //     });

  // });

  // ******************************Code Tested and working fine in "Cypress 12.16.0" version" (17-11-2025)******************

  // ***************************LECTURE 16 New info + Lecture 15 ASSIGNMENT STARTS HERE BELOW THIS LINE*************************
  //------------------------- Use The extracted text to collect all Prices on the page and sum them up -------------------------

  // it("Sum the prices using another method", () => {
  //   cy.visit("https://smartbuy-me.com/");
  //   cy.get(
  //     ".section__action-link.link[href='/collections/featured-products']"
  //   ).click();
  //   cy.get('[data-action="select-value"][data-value="48"]').click({ force: true });
  //   cy.get('.value-picker-button').should('contain.text', '48 per page');

  //    cy.get('[class="product-item__info"]').as("productPrices"); // we select the whole product info section to narrow down the search for prices only within this section.
  //    cy.get("@productPrices") // we give the alias to the selected section to use it below.
  //     .find('[class="price price--highlight"]') // we find the price class within the selected section only.
  //     .invoke("text") // we extract the text of all prices found within the section.
  //     .as("itemPrice"); // we give an alias to the extracted text of all prices to use it below.

  //    cy.get("@itemPrice").then((priceText) => {
  //     // we get the alias of all prices text to manipulate it below
  //     let total = 0; // initialize total variable to accumulate the sum of prices

  //     priceText // the extracted text of all prices
  //       .split(/JOD|Sale price/i) // split by "JOD" or "Sale price"
  //       .map((s) => s.trim()) // remove whitespace
  //       .filter((s) => s) // remove empty strings
  //       .forEach((value) => {  // iterate through each price value
  //         const numberOnly = Number(value.replace(/[^\d]/g, "")); // extract numbers only
  //         if (!isNaN(numberOnly) && numberOnly > 0) {
  //           // check if it's a valid number
  //           cy.log(numberOnly); // log each number
  //           total += numberOnly; // logs only numbers

  //           // You can accumulate the total here if needed

  //         }

  //         cy.log(total); // log the total after each addition

  //         });
  //       });
  //   });
  // });

  /* Challenges :
  1 - the website i used was diffirent from the ones "Abd-Alraheem" used 
  2 - The method i used has'nt been used by "mentor" 
  3 - i managed to isolate the number from two text's on each side
  4 - i managed to Log a raw number only, which is possible to add commas later on 
  5 - i managed to log the total after cnanging page view to 48 items per page.
  6 - i used different methods to achieve the same goal.
  
  // ******************************Code Tested and working fine in "Cypress 12.16.0" version" (17-11-2025)******************
  -------------------------------------End of lecture 16 + Lecture 15 Assignment-----------------------------------------------.*/

  /*--------------------------------------------- Lecture 16 Assignment------------------------------------------------------- 
  
  1 - Add 10 % discount on each price and print Price "Before" = "Price After Discount"
  2 - Print First 3 alphabets of each item name 
  */

  it("Log first 3 Alphabets & log price + Price after discount", () => {
    cy.visit("https://smartbuy-me.com/");

    cy.get(
      ".section__action-link.link[href='/collections/featured-products']"
    ).click();

    cy.get('[data-action="select-value"][data-value="48"]').click({
      force: true,
    });
    cy.get(".value-picker-button").should("contain.text", "48 per page");

    // Each product box
    cy.get(".product-item__info").each(($product) => {
      // we select each product box one by one

      // 1️⃣ Extract item name (first 3 letters)
      const fullName = $product.find(".product-item__title").text().trim(); // we find the item name within this product box
      const first3 = fullName.substring(0, 3); // extract first 3 letters

      // 2️⃣ Extract item price (highlight price inside this product box)
      const priceText = $product.find(".price.price--highlight").text().trim(); // we find the price within this product box
      const numberOnly = Number(priceText.replace(/[^\d]/g, "")); // extract numbers only

      if (!isNaN(numberOnly) && numberOnly > 0) {
        // check if it's a valid number

        const before = numberOnly; // original price
        const after = Math.round(before * 0.9); // 10% discount

        cy.log(`Item: ${first3}`); // log first 3 letters of item name
        cy.log(`Before: ${before}`); // log original price
        cy.log(`After (10% off): ${after}`); // log price after discount
        cy.log("---------------------------"); // separator for clarity
      }
    });
  });
});

/* ******************************Code Tested and working fine in "Cypress 12.16.0" version" (17-11-2025)******************

 --------------------------------------------End of Lecture 16 Assignment------------------------------------------------

// *************(((Lecture 17 will be found @ "Alerts.js" Because we are handling a diffirent type of website)))****************/
