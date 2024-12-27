import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';

Given('que eu estou na página inicial', () => {
    cy.visit("https://www.automationexercise.com/login");
});

When('faço meu login', () => {
    cy.get('[data-qa="login-email"]').type('Agatha_lima@mailinator.com');
    cy.get('[data-qa="login-password"]').type('Agatha123');
    cy.get('[data-qa="login-button"]').click();
});

When('eu busco por um produto', () => {
    cy.contains(' Products').click();
    cy.get('#search_product').type('Tshirt');
    cy.get('#submit_search').click();

});

When('adiciono o produto ao carrinho', () => {
    cy.get('.productinfo.text-center')
        .contains('Men Tshirt')
        .should('be.visible')
        .parent()
        .find('.btn' , { timeout: 10000 })
        .click();

});


Then('o produto deve ser exibido o produto ao carrinho', () => {
    cy.contains('View Cart', { timeout: 10000 }).click();
    cy.get('h4')
        .contains('Men Tshirt')
        .should('be.visible')
});