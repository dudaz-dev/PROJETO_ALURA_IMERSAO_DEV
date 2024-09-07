function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Resultado não encontrado, você precisa digitar alto relacionado a cão ou gato para acessar os animais para adoção</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let nome = "";
    let especie = "";
    let idade = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        nome = dado.nome.toLowerCase()
        especie = dado.especie.toLowerCase()
        idade = dado.idade.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if (nome.includes(campoPesquisa) || especie.includes(campoPesquisa) || especie.idade(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
                        
            <div class="item-resultado">
                <img src="${dado.imagemUrl}" alt="${dado.nome}">
                <div class="alinhar-texto-cartao">
                    <h2>
                        <a href="${dado.linkAdocao}" target="_blank">${dado.nome}</a>
                    </h2>
                    <p><strong>Espécie:</strong> ${dado.especie}</p>
                    <p><strong>Idade:</strong> ${dado.idade}</p>
                    <p>${dado.descricao}</p>
                    <a href="${dado.linkAdocao}" target="_blank">Adote ${dado.nome}</a>
                </div>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}