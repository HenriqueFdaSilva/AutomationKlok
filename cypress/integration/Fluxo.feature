Feature: Fluxo Adicionar ao carrinho

    Scenario: Pesquisar produto
        Given que eu acesse o site
        And queira pesquisar um produto
        When eu pesquisar na barra de pesquisa pelo produto
        Then deve-se aparecer a lista de produtos
    
    Scenario: Escolher produto da lista
        Given que eu queira escolher um produto da lista
        When eu selecionar um produto na lista
        Then devo ser direcionado para a página do produto
        
    Scenario: Adicionar ao carrinho
        Given que eu queira adicionar o produto ao carrinho
        When eu clicar em comprar
        Then devo ser direcionado a página do carrinho
        And o produto selecionado deve estar no carrinho 
        
        
