import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector('[data-lista]');

function constroiCard(produto) {
    const cartao = document.createElement('li');
    cartao.className = 'cards';
    cartao.dataset.id = produto.id;
    cartao.innerHTML = `<div class="cardConteudo">
    <img class= card__imagem src="${produto.imagem}" alt="boneco do megumi">
    <p class="card__texto">${produto.nome}</p>
</div>
<div class="card__precoExcluir">
    <p class="card__preco">R$ ${produto.preco}</p>
    <button class="card__botaoExcluir">
    <img class="card__excluir" src="./img/lixeira.png" alt="logo de lixeira">
    </button>
</div>`

    return cartao;
}

async function listaCard() {
    const listaApi = await conectaApi.listaCards();
    listaApi.forEach(produto => lista.appendChild(constroiCard(produto)))

    // Adiciona o evento de clique no botão de excluir
    const botoesExcluir = document.querySelectorAll('.card__botaoExcluir');
    botoesExcluir.forEach(botao => {
        botao.addEventListener('click', (evento) => {
            const cartao = evento.target.closest('.cards');
            const produtoId = cartao.dataset.id;
            excluirProduto(produtoId, cartao);
        });
    });
}

async function excluirProduto(id, cartao) {
    try {
        await conectaApi.deletaCard(id);
        lista.removeChild(cartao);
    } catch (error) {
        console.log('Erro ao excluir o produto:', error);
    }
}

listaCard();