let biblioteca = [];
let inputTitulo = document.getElementById("cadTitulo");
let inputAutor = document.getElementById("cadAutor");
let inputGenero = document.getElementById("cadGenero");
let inputEditora = document.getElementById("cadEditora");
let inputISBN = document.getElementById("cadISBN");
let acervo = document.getElementById("acervo");

function add(){
    let livro = {
        titulo: inputTitulo.value,
        autor: inputAutor.value,
        genero: inputGenero.value,
        editora: inputEditora.value,
        ISBN: inputISBN.value
    }
    biblioteca.push(livro);
    inputTitulo.value = null;
    inputAutor.value = null;
    inputGenero.value = null;
    inputEditora.value = null;
    inputISBN.value = null;
    listagem();
}

function listagem(){
    let listaLivros = "";
    for(let livro of biblioteca){
        listaLivros += "Título: "+livro.titulo+"<br>"+"Autor: "+livro.autor+"<br>"+"Genero: "+livro.genero+"<br>"+"Editora: "+livro.editora+"<br>"+"ISBN: "+livro.ISBN+"<br>"+"------------------------------------------"+"<br>";        
    }
    acervo.innerHTML = listaLivros;
}

