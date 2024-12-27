Feature: Login

  Scenario: Login com credenciais válidas
    Given que eu acessei o site de login
    When eu insiro o email e a senha válidos
    Then eu devo ser redirecionado para a página inicial
