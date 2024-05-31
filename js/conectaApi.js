async function listaCards() {
    const conexao = await fetch('http://localhost:3000/produto');
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criaCard(nome, preco, imagem) {
    const conexao = await fetch('http://localhost:3000/produto', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            preco: preco,
            imagem: imagem
        })
    });

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function deletaCard(id) {
    const conexaoId = await fetch(`http://localhost:3000/produto/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!conexaoId.ok) {
        throw new Error(`Erro ao excluir o produto: ${conexaoId.status}`);
    }

    const data = await conexaoId.json()
    return data;
}

export const conectaApi = {
    listaCards,
    criaCard,
    deletaCard
}