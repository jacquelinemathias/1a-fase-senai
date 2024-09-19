// ta errado
function executar1038(){
    let pedido, codigoLanche, qtdLanche, pagamento
    while(codigoLanche!=0){
    codigoLanche = Number(prompt("Qual lanche você deseja comprar? (Digite 0 para encerrar seleção)\n1- Cachorro quente R$4,00\n2-X-Salada R$4,50\n3-X-Bacon R$5,00\n4- Torrada Simples R$2,00\n5- Refrigerante R$1,50"));
    qtdLanche = Number(prompt("Quantos você deseja comprar?"));
    if(codigoLanche==1){
        pagamento = qtdLanche * 4
        alert("O valor do seu lanche é R$"+pagamento);
    }else if(codigoLanche==2){
        pagamento = qtdLanche * 4.50
        alert("O valor do seu lanche é R$"+pagamento);
    }else if(codigoLanche==3){
        pagamento = qtdLanche * 5
        alert("O valor do seu lanche é R$"+pagamento);
    }else if(codigoLanche==4){
        pagamento = qtdLanche * 2
        alert("O valor do seu lanche é R$"+pagamento);
    }else if(codigoLanche==5){
        pagamento = qtdLanche * 1.50
        alert("O valor do seu lanche é R$"+pagamento);
    }else{
        alert("Até a próxima!");
    }
    }
}

function executar1009(){
    let nome, salarioFixo, vendas, salarioTotal
    nome = prompt("Informe seu nome:");
    salarioFixo = Number(prompt("Informe seu salário fixo:"));
    vendas = Number(prompt("Informe o valor das vendas efetuadas por você:"));
    salarioTotal = salarioFixo + (vendas * 0.15)
    alert(nome+" receberá "+salarioTotal.toFixed(2)+" no próximo pagamento.")
}

function executar1008(){
    let id, horas, valorHora, salario
    id = Number(prompt("Informe seu ID:"));
    horas = Number(prompt("Informe quantas horas você trabalhou:"));
    valorHora = Number(prompt("Informe seu salário por hora:"));
    salario = horas * valorHora
    alert("O funcionário "+id+" receberá R$"+salario.toFixed(2)+" no próximo pagamento.");
}

