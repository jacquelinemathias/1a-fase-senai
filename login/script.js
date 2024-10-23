let bancoDeDados = [];

function add(){
    let usuario = document.getElementById("username").value;
    if (existe(usuario) == false){
        bancoDeDados.push(usuario.toUpperCase());
        alert("Usuário cadastrado com sucesso!");
    }else{
        alert("Esse usuário já está cadastrado");
    }
    document.getElementById("username").value = null;
}
function login(){
    let usuario = document.getElementById("user").value;
    if(existe(usuario) == false){
        alert("Usuário não encontrado");
    }else{
        alert("Bem vindo ao sistema!");
    }
    document.getElementById("user").value = null;
}
function edit(){
    let usuario = document.getElementById("editar").value;
    if(existe(usuario) == false){
        alert("Usuário não encontrado");
    }else{
        let novoValor = prompt("Digite o novo nome de usuário:").toUpperCase();
        bancoDeDados[pos] = novoValor;
        alert("Usuário editado com sucesso");
    }
    document.getElementById("editar").value = null;
}
function exclui(){
    let usuario = document.getElementById("excluir").value;
    if(existe(usuario) == false){
        alert("Usuário não encontrado");
    }else{
        bancoDeDados.splice(pos, 1);
        alert("Usuário excluído com sucesso");
    }
    document.getElementById("excluir").value = null;
}
function existe(usuario){
    let pos = bancoDeDados.indexOf(usuario.toUpperCase());
    if(pos == -1){
        return false;
    }else{
        return true;
    }
}