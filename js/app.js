function pesquisar() {
    // Ocultar a introdução e mostrar os resultados
    document.getElementById('introducao-texto').style.display = 'none';
    document.getElementById('resultados-pesquisa').style.display = 'block';
    document.getElementById('btn-voltar').style.display = 'inline-block';

    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    // se campoPesquisa for vazio
    if (!campoPesquisa) {
        section.innerHTML = "<p>Por favor, digite gato ou cachorro para ver os animais disponíveis para adoção.</p>";
        return;
    }

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let nome = "";
    let especie = "";
    let idade = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        nome = dado.nome.toLowerCase();
        especie = dado.especie.toLowerCase();
        idade = dado.idade.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        // Se o nome, espécie, idade, descrição ou tags incluem o termo pesquisado
        if (nome.includes(campoPesquisa) || especie.includes(campoPesquisa) || idade.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <img src="${dado.imagemUrl}" alt="${dado.nome}">
                <div class="alinhar-texto-cartao">
                    <h2><a href="${dado.linkAdocao}" target="_blank">${dado.nome}</a></h2>
                    <p><strong>Idade:</strong> ${dado.idade}</p>
                    <p>${dado.descricao}</p>
                    <button><a href="${dado.linkAdocao}" target="_blank">Adote ${dado.nome}</a></button>
                </div>
            </div>
            `;
        }
    }

    // Se não houver resultados, exibe uma mensagem
    if (!resultados) {
        resultados = "<p>Nenhum animal encontrado. Tente buscar por gato ou cachorro.</p>";
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}

function voltarIntroducao() {
    // Exibir a introdução novamente e ocultar os resultados
    document.getElementById('introducao-texto').style.display = 'flex';
    document.getElementById('resultados-pesquisa').style.display = 'none';
    document.getElementById('btn-voltar').style.display = 'none';
}
