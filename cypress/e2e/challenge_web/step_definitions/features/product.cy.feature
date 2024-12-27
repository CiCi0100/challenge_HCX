Feature: Buscar produto

    Scenario: Realizar busca por um produto
        Given que eu estou na página inicial
        And faço meu login
        When eu busco por um produto
        And adiciono o produto ao carrinho
        Then o produto deve ser exibido o produto ao carrinho

