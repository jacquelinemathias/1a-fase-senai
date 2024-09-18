function contadorN(){
    let numero=1;
    let armazem=""
    let num_det = document.getElementById("inpNum").value;
    while(numero<=num_det){
        armazem+=(numero+"\n");
        numero++
    }
    alert(armazem)
}

function ateZero(){
    let numero = 0
    let novoNum
    while(novoNum!=0){
        novoNum = Number(prompt("Informe um número:"));
        numero = numero + novoNum
        alert("O resultado da sua soma é "+numero+".");
    }
}

function mediaSimples(){
    let qtd = Number(prompt("Informe a quantidade de números que deseja dividir:"));
    let mediaT=0;
    for(qtdInf=0; qtdInf<qtd; qtdInf++){
        let media = Number(prompt("Informe um número para cálculo da média:"));
        mediaT = mediaT + media
    }
    resultado = mediaT/qtd
    alert("O resultado da sua média é "+resultado)
}

function calcFatorial(){
    let fatorial = document.getElementById("inpFat").value;
    resultado = fatorial
    for(numero=1; numero<fatorial; numero++){
        resultado *= numero
    }
    alert("O resultado de "+fatorial+" fatorial é "+resultado)
}

function tabelaMult(){
    let tabela = document.getElementById("inpTabela").value;
    let armazenamento=""
    for(num=1; num<=10; num++){
    res = num*tabela
    armazenamento+=(num+" * "+tabela+" = "+res+"\n")
    }
    alert(armazenamento)
}

function contarPares(){
    let i = document.getElementById("inpPares").value;
    let amzn=""
    for(inicial=1; inicial<=i; inicial++){
        if(inicial%2==0){
            amzn+=(inicial+"\n")
        }
    }
    alert(amzn)
}

function contarPers(){
    let n = 0
    let inf = Number(prompt("Diga até qual número você deseja contar:"));
    let pers = Number(prompt("Informe o intervalo que deseja usar na contagem:"));
    let arma=""
    while(n<=inf){
        n += pers
        arma+=(n+"\n")
    }
    alert(arma)
}

function contarImpares(){
    let i = document.getElementById("inpImpares").value;
    let amzn=""
    for(inicial=1; inicial<=i; inicial++){
        if(inicial%2==1){
            amzn+=(inicial+"\n")
        }
    }
    alert(amzn)
}

function verMult(){
    let n1 = Number(prompt("Informe um número:"));
    let n2 = Number(prompt("Informe o divisor do primeiro número:"));
    if(n1%n2==0){
        alert(n1+" é múltiplo de "+n2);
    }else{
        alert(n1+" não é múltiplo de "+n2);
    }
}

function verPrimos(){
    let n1 = Number(prompt("Informe um número:"));
    for(n1%n1==0; n1%1==n1;){
        alert("O número "+n1+" é primo.")
    }
}