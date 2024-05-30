import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector('[data-lista]');

function constroiCard(nome, preco, imagem) {
    const cartao = document.createElement('li');
    cartao.className = 'cards';
    cartao.innerHTML = `<div class="cardConteudo">
    <img class= card__imagem src="${imagem}" alt="boneco do megumi">
    <p class="card__texto">${nome}</p>
</div>
<div class="card__precoExcluir">
    <p class="card__preco">R$ ${preco}</p>
    <img class="card__excluir" src="./img/lixeira.png" alt="logo de lixeira">
</div>`

    return cartao;
}

async function listaCard() {
    const listaApi = await conectaApi.listaCards();
    listaApi.forEach(elemento => lista.appendChild(constroiCard(elemento.nome, elemento.preco, elemento.imagem)))
}

listaCard();