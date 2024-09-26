function executar1142(){
    let linha = Number(prompt("Quantos números você deseja listar?"));
    let contagem = 0
    let contador = 1
    let armazenamento = ''
    while(contagem<linha){
        if(contador%4!=0){
            console.log(contador);
            armazenamento += contador + ' '
        }else{
            console.log("PUM");
            contagem++
            armazenamento += "PUM\n"
        }contador++
    }alert(armazenamento)
}

function executar1115(){
    let X = Number(prompt("Informe o valor da coordenada X:"));
    let Y = Number(prompt("Informe o valor da coordenada Y"));
    if(X>0 && Y>0){
        alert("Primeiro quadrante.");
    }else if(X>0 && Y<0){
        alert("Quarto quadrante.");
    }else if(X<0 && Y<0){
        alert("Terceiro quadrante.");
    }else if(X<0 && Y>0){
        alert("Segundo quadrante.");
    }
}

function executar1050(){
    let ddd = Number(prompt("Informe seu DDD:"));
    if(ddd==61){
        alert("Seu código de área é de Brasília.");
    }else if(ddd==71){
        alert("Seu código de área é de Salvador.");
    }else if(ddd==11){
        alert("Seu código de área é de São Paulo.");
    }else if(ddd==21){
        alert("Seu código de área é do Rio de Janeiro.");
    }else if(ddd==32){
        alert("Seu código de área é de Juiz de Fora.");
    }else if(ddd==19){
        alert("Seu código de área é de Campinas.");
    }else if(ddd==27){
        alert("Seu código de área é de Vitória.");
    }else if(ddd==31){
        alert("Seu código de área é de Belo Horizonte.");
    }else{
        alert("Código inválido.");
    }
}

function executar1038(){
    let codigoLanche, qtdLanche, pagamento
    codigoLanche = Number(prompt("O que você deseja comprar?"));
    qtdLanche = Number(prompt("Quantos você deseja comprar?"));
    if(codigoLanche==1){
        pagamento = 4
    }else if(codigoLanche==2){
        pagamento = 4.50
    }else if(codigoLanche==3){
        pagamento = 5
    }else if(codigoLanche==4){
        pagamento = 2
    }else if(codigoLanche==5){
        pagamento = 1.50
    }else{
        alert("Até a próxima!");
    }preco = pagamento * qtdLanche
    alert("O valor da sua compra é R$"+preco.toFixed(2))
}

// PRECISO ARRUMAR!
// function executar1010(){
//     let codigoProduto, qtdProduto, valorProduto
//     valorTotal = 0
//     while(codigoProduto!=0){
//     codigoProduto = Number(prompt("Informe o código do produto (Digite 0 para finalizar a seleção"));
//     valorProduto = Number(prompt("Informe o valor do produto"));
//     qtdProduto = Number(prompt("Informe a quantidade que deseja comprar"));
//     valorTotal = valorTotal + (qtdProduto * valorProduto)
//     }alert("O valor total da compra é R$"+valorTotal.toFixed(2));
// 
// }

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

function executar1007(){
    let A = Number(prompt("Informe o valor de A:"));
    let B = Number(prompt("Informe o valor de B:"));
    let C = Number(prompt("Informe o valor de C:"));
    let D = Number(prompt("Informe o valor de D:"));
    diferenca = (A * B) - (C * D)
    alert("DIFERENCA = "+diferenca)
}

function executar1005(){
    let qtdAtv = prompt("Informe a quantidade de atividades que deseja calcular:");
    let mediaAprov = prompt("Informe a média necessária para aprovação.");
    media=0
    totalPeso=0
    for(qtdCad=0; qtdCad<qtdAtv; qtdCad++){
        let atv = Number( prompt("Informe a nota da atividade:"));
        let peso = Number( prompt("Informe o peso da atividade:"));
        totalPeso += peso
        media += (atv * peso)
    }
     media/=totalPeso
    if(media >= mediaAprov){
        alert("A nota final é "+media+", portanto o aluno foi aprovado.");
    }else if(mediaAprov - media <= 0.5){
        alert("A nota final é "+media+", portanto o aluno foi aprovado por conselho.")
    }else{
        alert("A nota final é "+media+", portanto o aluno foi reprovado.")
    }
}

function executar1004(){
    let A = Number(prompt("Informe o valor de A:"));
    let B = Number(prompt("Informe o valor de B:"));
    produto = A * B
    alert("PROD = "+produto)
}

function executar1003(){
    let A = Number(prompt("Informe o valor de A:"));
    let B = Number(prompt("Informe o valor de B:"));
    soma = A + B
    alert("SOMA = "+soma)
}

function executar1002(){
    let raio = Number(prompt("Informe o raio do círculo:"));
    area = 3.14159 * raio**2
    alert("A = "+area.toFixed(4));
}

function executar1001(){
    let A = Number(prompt("Informe o valor de A:"));
    let B = Number(prompt("Informe o valor de B:"));
    soma = A + B
    alert("X = "+soma)
}

function executar1000(){
    alert("Hello World!")
}