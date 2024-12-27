import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que eu acessei o site de login', () => {
  cy.visit("https://www.automationexercise.com/login");
});

When('eu insiro o email e a senha válidos', () => {
  cy.get('[data-qa="login-email"]').type('Agatha_lima@mailinator.com');
  cy.get('[data-qa="login-password"]').type('Agatha123');
  cy.get('[data-qa="login-button"]').click();
});

Then('eu devo ser redirecionado para a página inicial', () => {
  cy.url().should('eq', "https://www.automationexercise.com/");
});
