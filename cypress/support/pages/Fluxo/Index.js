const el = require('./elements').elements;

class fluxo {

    acessarSite(){
        cy.visit(el.idSite)
    }

    busca(){
        cy.get(el.idBusca)
            .type('Mesa{enter}')
    }

    validarBusca(){
        cy.url()
            .should('to.equal', 'https://busca.marabraz.com.br/busca?q=Mesa')
    }

    selecionarProd(){
        cy.get(el.idSelProd)
            .invoke('attr', 'alt')
            .then((prodUrl) => {
                cy.task('setProdUrl', prodUrl);
            });
        cy.get(el.idProdCod)
            .invoke('attr', 'data-sku')
            .then((prodCod) => {
                cy.task('setProdCod', prodCod);
            });
        cy.get(el.idSelProd)
            .click()
    }

    validarPagProd(){
        cy.task('getProdUrl').then((prodUrl) => {
            cy.url().should('to.equal', 'https:' + prodUrl);
        });
    }

    adicionarCart(){
        cy.get(el.idAddCart)
            .click()
    }

    validarPagCart(){
        cy.url().should('to.equal', 'https://www.marabraz.com.br/checkout/cart/')
    }

    validarProdCart(){
        cy.task('getProdCod').then((prodCod) => {
            cy.get(el.idProd)
                .should('have.text', '(Código ' + prodCod + ')')
        })
    }
}

export default new fluxo();