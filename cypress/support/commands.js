// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add(
  "logPassFail",
  (condition, successMessage, failMessage) => {
    if (condition) {
      cy.log(`✅ ${successMessage}`); // Green check for pass
    } else {
      cy.log(`❌ ${failMessage}`); // Red X for fail
    }
  }
);


//---------------------------------------------------------------------------

// Cypress.Commands.add('safeGet', (primarySelector, textContains = null, ...alternateSelectors) => {
//   return cy.get('body').then($body => {
//     const checkText = (el) => !textContains || (el && el.innerText && el.innerText.includes(textContains));

//     const primaryEl = $body.find(primarySelector).toArray().find(checkText);
//     if (primaryEl) return cy.wrap(primaryEl);

//     for (let sel of alternateSelectors) {
//       const altEl = $body.find(sel).toArray().find(checkText);
//       if (altEl) {
//         cy.log(`Self-healed selector: Using alternative ${sel}`);
//         return cy.wrap(altEl);
//       }
//     }

//     throw new Error(`No element found matching selectors: ${[primarySelector, ...alternateSelectors]} with text "${textContains}"`);
//   });
// });
// //---------------------------------------------------------------------------------------------------------------

// Cypress.Commands.add('scanProducts', (containerSelector, priceSelector, nameSelector) => {
//   let itemsData = [];

//   const scrollAndCollect = () => {
//     return cy.get(containerSelector).scrollTo('bottom', { duration: 500 }).then(() => {
//       return cy.get(containerSelector).find(priceSelector).then($prices => {
//         $prices.each((index, priceEl) => {
//           const priceRaw = priceEl.innerText.trim();
//           const priceNum = parseFloat(priceRaw.replace(/[^\d.]/g, ''));
//           const nameEl = Cypress.$(priceEl).closest(containerSelector).find(nameSelector);
//           const name = nameEl.text().trim();

//           if (!itemsData.some(i => i.name === name)) {
//             itemsData.push({ name, price: priceNum });
//           }
//         });

//         const prevCount = $prices.length;
//         return cy.get(containerSelector).find(priceSelector).then($newPrices => {
//           if ($newPrices.length > prevCount) return scrollAndCollect();
//           return itemsData;
//         });
//       });
//     });
//   };

//   return scrollAndCollect().then(() => {
//     cy.log(`✅ Collected ${itemsData.length} items`);
//     console.table(itemsData);
//     return itemsData;
//   });
// });
// //-------------------------------------------------------------------------------------------------------------------------

// // 1️⃣ Self-healing selector command
// Cypress.Commands.add('safeGet', (primarySelector, textContains = null, ...alternateSelectors) => {
//   return cy.get('body').then($body => {
//     const checkText = (el) => !textContains || (el && el.innerText && el.innerText.includes(textContains));

//     const primaryEl = $body.find(primarySelector).toArray().find(checkText);
//     if (primaryEl) return cy.wrap(primaryEl);

//     for (let sel of alternateSelectors) {
//       const altEl = $body.find(sel).toArray().find(checkText);
//       if (altEl) {
//         cy.log(`Self-healed selector: Using alternative ${sel}`);
//         return cy.wrap(altEl);
//       }
//     }

//     throw new Error(`No element found matching selectors: ${[primarySelector, ...alternateSelectors]} with text "${textContains}"`);
//   });
// });

// // 2️⃣ Scan all products dynamically, handle lazy-load
// Cypress.Commands.add('scanProducts', (containerSelector, priceSelector, nameSelector) => {
//   let itemsData = [];

//   const scrollAndCollect = () => {
//     return cy.get(containerSelector).scrollTo('bottom', { duration: 500 }).then(() => {
//       return cy.get(containerSelector).find(priceSelector).then($prices => {
//         $prices.each((index, priceEl) => {
//           const priceRaw = priceEl.innerText.trim();
//           const priceNum = parseFloat(priceRaw.replace(/[^\d.]/g, ''));
//           const nameEl = Cypress.$(priceEl).closest(containerSelector).find(nameSelector);
//           const name = nameEl.text().trim();

//           if (!itemsData.some(i => i.name === name)) {
//             itemsData.push({ name, price: priceNum });
//           }
//         });

//         const prevCount = $prices.length;
//         return cy.get(containerSelector).find(priceSelector).then($newPrices => {
//           if ($newPrices.length > prevCount) return scrollAndCollect();
//           return itemsData;
//         });
//       });
//     });
//   };

//   return scrollAndCollect().then(() => {
//     cy.log(`✅ Collected ${itemsData.length} items`);
//     console.table(itemsData);
//     return itemsData;
//   });
// });
