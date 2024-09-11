function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Remove espaços, vírgulas, pontos e hífens da string de pesquisa
    campoPesquisa = campoPesquisa.replace(/[\s,.\\-]+/g, "").toLowerCase();

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p class='mensagem-erro'>Nada foi encontrado. Você precisa digitar algo como nome ou autor</p>";
        return;
    }

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = ""; 
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.replace(/[\s,.\\-]+/g, "").toLowerCase();
        descricao = dado.descricao.replace(/[\s,.\\-]+/g, "").toLowerCase();
        tags = dado.tags.replace(/[\s,.\\-]+/g, "").toLowerCase();

        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

    if (resultados === "") {
        resultados = "<p class='mensagem-erro'>Nada foi encontrado</p>";
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}