let bancoDeDados = [];

function add(){
    let usuario = {
        username: document.getElementById("username").value.toUpperCase(),
        password: document.getElementById("senha").value
    }
    if (existe(usuario.username) == false){
        bancoDeDados.push(usuario);
        alert("Usuário cadastrado com sucesso!");
    }else{
        alert("Esse usuário já está cadastrado");
    }
    document.getElementById("username").value = null;
    document.getElementById("senha").value = null;
}

function login(){
    let usuario = document.getElementById("user").value.toUpperCase();
    let senha = document.getElementById("passw").value;
    if(autentica(usuario, senha) == false){
        alert("Falha de autenticação");
    }else{
        alert("Bem vindo ao sistema!");
    }
    document.getElementById("user").value = null;
    document.getElementById("passw").value = null;
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
    let pos = indexOfExclui
    // if(existe(usuario) == false){
    //     alert("Usuário não encontrado");
    // }else{
    //     bancoDeDados.splice(pos, 1);
    //     alert("Usuário excluído com sucesso");
    // }
    // document.getElementById("excluir").value = null;
}

function existe(username){
    for(let usuario of bancoDeDados){
        if(usuario.username == username){
            return true;
        }
    }return false;
}

function autentica(username, password){
    for(let usuario of bancoDeDados){
        if(usuario.username == username && usuario.password == password){
            return true;
        }
    }return false;
}

function indexOfExclui(username){
    for(let usuario of bancoDeDados){
        if(usuario.username == username){
            return bancoDeDados.indexOf(usuario);
        }
    }return -1
}