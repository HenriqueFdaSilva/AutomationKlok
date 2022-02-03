import fluxo from '../../support/pages/Fluxo';

Given(/^que eu acesse o site$/, () => {
	fluxo.acessarSite();
});

And(/^queira pesquisar um produto$/, () => {
    return true;
});

When(/^eu pesquisar na barra de pesquisa pelo produto$/, () => {
    fluxo.busca();
});

Then(/^deve-se aparecer a lista de produtos$/, () => {
	fluxo.validarBusca();
});

Given(/^que eu queira escolher um produto da lista$/, () => {
	return true;
});

When(/^eu selecionar um produto na lista$/, () => {
	fluxo.selecionarProd();
});

Then(/^devo ser direcionado para a página do produto$/, () => {
	fluxo.validarPagProd();
});

Given(/^que eu queira adicionar o produto ao carrinho$/, () => {
	return true;
});

When(/^eu clicar em comprar$/, () => {
	fluxo.adicionarCart();
});

Then(/^devo ser direcionado a página do carrinho$/, () => {
	fluxo.validarPagCart();
});

Then(/^o produto selecionado deve estar no carrinho$/, () => {
	fluxo.validarProdCart();
});
