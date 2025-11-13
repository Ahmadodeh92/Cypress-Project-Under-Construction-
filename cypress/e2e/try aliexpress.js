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

describe("Try Aliexpress / SmartBuy Full Flow", () => {
  //   it("Runs the full registration flow with a random first name", () => {

  //     /* -------------------------------------- Start of create new user process Code -------------------------------------------- */

  //     // 1️⃣ Visit homepage

  //     cy.visit("https://smartbuy-me.com/");
  //     cy.get(
  //       'span.locale-selector__value[plerdy-tracking-id="81336156002"]'
  //     ).should("have.text", "English");
  //     cy.log("✅ English Language is visible");

  //     // 2️⃣ Navigate to login page

  //     cy.get("a[aria-label='My account'] span.icon-state__primary").click();
  //     cy.get("form[id='customer_login'] h1.form__title.heading.h1").should(
  //       "have.text",
  //       "Login to my account"
  //     );
  //     cy.log("✅ Login Page is visible");

  //     // 3️⃣ Navigate to create account page

  //     cy.get(".link.link--accented[href='/account/register']").click();
  //     cy.get(".form__title.heading.h1").should("have.text", "Create my account");
  //     cy.log("✅ Create Account Page is visible");

  //     // 4️⃣ Type a random first name

  //     const randomIndex = Math.floor(Math.random() * names.length);
  //     const randomName = names[randomIndex];
  //     cy.get("input[id='customer[first_name]']").type(randomName);
  //     cy.log(`✅ Typed random first name: ${randomName}`);

  //     const randomLastname = Math.floor(Math.random() * lastNames.length);
  //     const randomLastnameName = lastNames[randomLastname];

  //     //Type Random last name

  //     cy.get("input[id='customer[last_name]']").type(randomLastnameName);
  //     cy.log(`✅ Typed random last name: ${randomLastnameName}`);

  //     // Generate e-mail

  //     const randomEmail = `${randomName.toLowerCase()}.${randomLastnameName.toLowerCase()}@email.com`;
  //     cy.get("input[id='customer[email]']").type(randomEmail);
  //     cy.log(`✅ Email: ${randomEmail}`);

  //     // Type password

  //     const password = randomName + "12345";
  //     cy.get("input[id='customer[password]']").type(password);
  //     cy.log(`✅ Password: ${password}`);

  //     // Submit the registration form

  //     cy.get(".form__submit.button.button--primary.button--full").click();
  //     cy.log(`✅ Email: ${randomEmail}, ✅ Password: ${password}`);

  //     /* -------------------------------------- End of create new user process Code -------------------------------------------- */

  //     /*  This Command was created to add new user to the website, sadly the website has no (Registration successful) message or
  //     indication so it returns to the homepage only, please initiate this test only if you want to check if the procedure will pass

  //     // Note : Verify successful registration by checking for account dashboard

  //     // Sign in using created credentials for first time login validation (Can be found as "log" after initiating code).

  // -------------------------------------------- ASSERTIONS TO BE ADDED HERE BELOW THIS LINE ---------------------------------------*/

  //   });

  it("Assertions", () => {
    cy.visit("https://smartbuy-me.com/");

    // Assert that the language selector displays "English"

    cy.get(
      'span.locale-selector__value[plerdy-tracking-id="81336156002"]'
    ).should("have.text", "English");
    cy.log("✅ English Language is visible");

    // Assert that page title is correct

    cy.title().should("eq", "SmartBuy");

    // Assert that the main banner is visible

    cy.get("header[role='banner']").should("be.visible");
    cy.log("✅ Main banner is visible");

    // Assert that the footer contains Contact- Us

    cy.get(
      "div[class='footer__block-item footer__block-item--link'] span:nth-child(1)"
    ).should("have.text", "Contact US");
    cy.log("✅ Footer contains 'Contact US' text");

    // Assert that the search bar is present
    cy.get("input[placeholder='Search...']").should("be.visible");
    cy.log("✅ Search bar is visible");

    // Assert that the shopping cart icon is visible

    cy.get(
      "div[class='header__cart-icon icon-state'] span[class='icon-state__primary']"
    ).should("be.visible");
    cy.log("✅ Shopping cart icon is visible");

    // Assert that the promotional banner is visible

    cy.get(
      ".slideshow__image[src='//smartbuy-me.com/cdn/shop/files/WhatsApp_Image_2025-11-07_at_12.55.59_AM.jpg?v=1762515035&width=1600']"
    ).should("be.visible");
    cy.log("✅ Promotional banner is visible");

    // Assert that the featured products section is present

    cy.url().should("include", "smartbuy-me.com");
    cy.log("✅ URL contains 'smartbuy-me.com'");

    //assert using cy.location
    cy.location("hostname").should("include", "smartbuy-me.com");
    cy.log("✅ Hostname contains 'smartbuy-me.com'");
  });
});
