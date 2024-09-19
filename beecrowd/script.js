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
