let idades = [14, 22, 34, 20, 23, 55, 45];

function testar(){
    // let nome;
    // // console.log(idades);
    // nome = prompt("Digite seu nome: ");
    // console.log(nome);

    let numero = Number(prompt("Qual número você quer pesquisar?"));
    let indice = idades.indexOf(numero);
    if(indice!=-1){
        console.log("Achei! Está na posição "+ indice);
    }else{
        console.log("Valor não encontrado.")
    }
    // console.log(idades.indexOf(numero));
}

function cadastrar(){
    let numero = Number(prompt("Digite o número para cadastrar:"));
    idades.push(numero);
    console.log(idades);
}

function mostrarTodos(){
    // console.log(idades);
    // alert(idades);
    for(let i = 0; i<idades.length; i++){
        document.getElementById('saida').innerHTML +=
        "Aluno: " + idades[i] + " <br> "
    }
}