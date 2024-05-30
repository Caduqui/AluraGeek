async function listaCards() {
    const conexao = await fetch('http://localhost:3000/produto');
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criaCard(nome, valor, imagem) {
    const conexao = await fetch('http://localhost:3000/produto', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            valor: valor,
            imagem: imagem
        })
    });

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
    listaCards,
    criaCard
}