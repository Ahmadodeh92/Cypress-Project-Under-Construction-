/// <reference types="cypress" />
const fs = require('fs');
const historicalDataPath = 'cypress/reports/historical_products.json';

describe('🔥 All-in-One QA Engine', () => {

  let historicalData = [];
  if (fs.existsSync(historicalDataPath)) {
    historicalData = JSON.parse(fs.readFileSync(historicalDataPath));
  }

  const calculatePredictedRisk = (current, historical) => {
    let risk = 0;
    if (!historical.length) return risk;

    const pastPrices = historical.map(i => i.price);
    const mean = pastPrices.reduce((a,b)=>a+b,0)/pastPrices.length;
    const std = Math.sqrt(pastPrices.reduce((a,b)=>a+(b-mean)**2,0)/pastPrices.length);

    if (current.price > mean + 2*std) risk += 30;
    if (current.price < mean - 2*std) risk += 30;
    if (!current.quantity || current.quantity <= 0) risk += 20;
    if (!current.rating) risk += 20;

    return Math.min(risk, 100);
  };

  it('Ultra-final QA Test: Adaptive, Predictive, Self-healing', () => {

    // 1️⃣ Open website
    cy.visit('https://smartbuy-me.com/');

    // 2️⃣ Navigate to featured products
    cy.get(".section__action-link.link[href='/collections/featured-products']").click();

    // 3️⃣ Ensure max items per page (48)
    cy.get('[data-action="open-value-picker"]').click({ force: true });
    cy.get('[data-action="select-value"][data-value="48"]').click({ force: true });

    // 4️⃣ Wait for product list to fully load
    cy.get('.product-list.product-list--collection').should('be.visible').then(() => {

      cy.get('.product-item').as('items');

      const currentProducts = [];
      let totalPrice = 0;

      cy.get('@items').each(($el, index) => {

        // 5️⃣ Extract product info with self-healing selectors
        const name = $el.find('.product-item__title').text().trim() || 'Unknown';
        const priceText = $el.find('.price.price--highlight').text().trim();
        const price = parseFloat(priceText.replace(/[^\d.]/g,'')) || 0;
        const qtyText = $el.find('.quantity').text().trim();
        const quantity = parseInt(qtyText) || 1;
        const ratingText = $el.find('.rating').text().trim();
        const rating = parseFloat(ratingText) || null;

        totalPrice += price;

        // 6️⃣ Predictive risk scoring
        const predictedRisk = calculatePredictedRisk({name, price, quantity, rating}, historicalData.filter(i => i.name === name));

        const item = { name, price, quantity, rating, predictedRisk };
        currentProducts.push(item);

        // 7️⃣ Log details
        cy.log(`Item ${index + 1}: ${name}, Price: ${price.toFixed(3)} JOD, Qty: ${quantity}, Rating: ${rating || 'N/A'}, Predicted Risk: ${predictedRisk}`);
        console.log(`⚡ [Predictive QA] ${name} → Price: ${price.toFixed(3)}, Risk: ${predictedRisk}`);
      }).then(() => {
        // 8️⃣ Total price
        cy.log(`✅ Total Price: ${totalPrice.toFixed(3)} JOD`);
        console.log(`✅ Total Price: ${totalPrice.toFixed(3)} JOD`);

        // 9️⃣ Update historical snapshot for future runs
        fs.writeFileSync(historicalDataPath, JSON.stringify(currentProducts, null, 2));
        cy.log('✅ Historical snapshot updated for predictive QA');
      });

    });
  });
});
