import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const apiUrl = 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a';

let response; // Variável para armazenar a resposta da API

Given('que eu tenho a URL da API do Trello', () => {
  // Não é necessário fazer nada aqui, apenas declaramos a URL no escopo global
});

When('eu envio uma requisição GET', () => {
  cy.request({
    method: 'GET',
    url: apiUrl,
    
  }).then((res) => {
    response = res; // Armazena a resposta para validações posteriores
  });
});

Then('o status da resposta deve ser 200', () => {
  expect(response.status).to.eq(200);
});

Then('o campo "name" na estrutura "list" deve ser exibido no log', () => {
  const listName = response.body.data.list.name; // Acessa o campo "name"
  cy.log('Nome da lista:', listName);
  expect(listName).to.be.a('string').and.not.to.be.empty; // Valida que é uma string não vazia
});
