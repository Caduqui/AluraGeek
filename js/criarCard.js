import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector('[data-formulario]');

async function criarCard(evento) {
    evento.preventDefault();
    const nome = document.querySelector('[data-nome]').value;
    const preco = document.querySelector('[data-preco]').value;
    const imagem = document.querySelector('[data-imagem]').value;

    await conectaApi.criaCard(nome, preco, imagem);
}

formulario.addEventListener('submit', evento => criarCard(evento));