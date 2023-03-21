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

const selector = require("../fixtures/selectors");

Cypress.Commands.add("login", (email, password) => {
  cy.get(selector.email).type(email);
  cy.get(selector.password).type(password);
  cy.get(selector.loginButton).click();
  cy.wait(500);
});

Cypress.Commands.add("choosePlace", (row, ...seats) => {
  for (let i = 0; i < seats.length; i++) {
    cy.get(`div:nth-child(${row}) > span:nth-child(${seats[i]})`).click();
    cy.get(`div:nth-child(${row}) > span:nth-child(${seats[i]}).buying-scheme__chair_selected`).should("exist");
  }
});