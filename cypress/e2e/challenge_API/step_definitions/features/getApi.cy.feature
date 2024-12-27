Feature: Testar API do Trello

    Scenario: Fazer uma requisição GET e validar o campo "name"
        Given que eu tenho a URL da API do Trello
        When eu envio uma requisição GET
        Then o status da resposta deve ser 200
        And o campo "name" na estrutura "list" deve ser exibido no log


