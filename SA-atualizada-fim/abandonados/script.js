function gerarListaLivros() {
    const livrosAbandonados = document.getElementById("livrosAbandonados");
    const livros = JSON.parse(localStorage.getItem('livros')) || [];
    const abandonados = livros.filter(livro => livro.situacao === "Abandonados");

    if (abandonados.length === 0) {
        livrosAbandonados.innerHTML = "<p>Nenhum livro encontrado.</p>";
        return;
    }

    abandonados.forEach((livro, index) => {
        const section = document.createElement("section");

        const header = document.createElement("div");
        header.classList.add("header-accordion");
        header.innerHTML = `
            <h3>${livro.livro}<img class="outra-img editar-livro" src="/public/editar.svg" alt="editar" data-index="${index}"></h3>
            <img class="seta" src="/public/seta.svg" alt="seta">
        `;

        const infos = document.createElement("div");
        infos.classList.add("infos");
        infos.innerHTML = `
            <div class="info">
                <div class="campo">
                    <h4>AUTOR</h4>
                    <p>${livro.autor}</p>
                </div>
                <div class="campo">
                    <h4>EDITORA</h4>
                    <p>${livro.editora}</p>
                </div>
                <div class="campo">
                    <h4>GÊNERO</h4>
                    <p>${livro.genero}</p>
                </div>
                <div class="campo">
                    <h4>Nota</h4>
                    <div class="avaliacao">
                        <span>${livro.nota}</span>
                        <img src="/public/estrela.svg" alt="estrela" id="estrela">
                    </div>
                </div>
            </div>
            <div class="campo comentarios">
                <h4>COMENTÁRIOS</h4>
                <p>${livro.comentarios || "Sem comentários"}</p>
            </div>
        `;

        const seta = header.querySelector(".seta");
        seta.addEventListener("click", () => {
            const isCurrentlyOpen = infos.classList.contains("mostrar");

            document.querySelectorAll(".infos").forEach((info) => info.classList.remove("mostrar"));
            document.querySelectorAll(".header-accordion .seta").forEach((img) => img.classList.remove("girar"));

            if (!isCurrentlyOpen) {
                infos.classList.add("mostrar");
                seta.classList.add("girar");
            }
        });

        section.appendChild(header);
        section.appendChild(infos);

        livrosAbandonados.appendChild(section);
    });

    document.querySelectorAll('.editar-livro').forEach((botao) => {
        botao.addEventListener('click', (event) => {
            const index = event.target.dataset.index;
            abrirModalEdicao(index);
        });
    });
}

function abrirModalEdicao(index) {
    const livros = JSON.parse(localStorage.getItem('livros')) || [];
    const abandonados = livros.filter(livro => livro.situacao === "Abandonados");
    const livro = abandonados[index];

    document.getElementById('modalNome').value = livro.livro || '';
    document.getElementById('modalEditora').value = livro.editora || '';
    document.getElementById('modalGenero').value = livro.genero || '';
    document.getElementById('modalNota').value = livro.nota || '';
    document.getElementById('modalComentarios').value = livro.comentarios || '';
    document.getElementById('modalSituacao').value = livro.situacao || 'Abandonado';

    document.getElementById('modal').dataset.index = index;

    document.getElementById('modal').style.display = 'flex';
}

document.getElementById('modalFechar').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

document.getElementById('modalSalvar').addEventListener('click', () => {
    const livros = JSON.parse(localStorage.getItem('livros')) || [];
    const abandonados = livros.filter(livro => livro.situacao === "Abandonados");
    const indexAbandonados = document.getElementById('modal').dataset.index;

    const livroAbandonado = abandonados[indexAbandonados];
    const indexLivros = livros.findIndex(livro => livro.livro === livroAbandonado.livro);

    livros[indexLivros] = {
        ...livros[indexLivros],
        livro: document.getElementById('modalNome').value.trim(),
        editora: document.getElementById('modalEditora').value.trim(),
        genero: document.getElementById('modalGenero').value.trim(),
        nota: document.getElementById('modalNota').value.trim(),
        comentarios: document.getElementById('modalComentarios').value.trim(),
        situacao: document.getElementById('modalSituacao').value,
    };

    localStorage.setItem('livros', JSON.stringify(livros));

    document.getElementById('modal').style.display = 'none';
    document.getElementById('livrosAbandonados').innerHTML = '';
    gerarListaLivros();
});

gerarListaLivros();

function desconectarUsuario() {
    localStorage.removeItem('usuarioAtual');

    window.location.href = '../telaInicial/index.html';
}
