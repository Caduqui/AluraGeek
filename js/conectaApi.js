async function listaCards() {
    const conexao = await fetch('http://localhost:3000/produto');
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}


export const conectaApi = {
    listaCards
}