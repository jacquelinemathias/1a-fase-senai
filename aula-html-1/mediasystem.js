function volta(){
    window.location.href = "index.html"
}
function mediaPonderada(){
    // let numero = Number(prompt("Digite um número"));
    // for(let sequencia = 0; sequencia<=numero; sequencia++){
    //     if(sequencia%2==0){
    //         alert(sequencia);
    //     }
    // }
    let qtdAtv = prompt("Informe a quantidade de atividades que deseja calcular:");
    let mediaAprov = prompt("Informe a média necessária para aprovação.");
    media=0
    totalPeso=0
    for(qtdCad=0; qtdCad<qtdAtv; qtdCad++){
        let atv = Number( prompt("Informe a nota da atividade:"));
        let peso = Number( prompt("Informe o peso da atividade:"));
        totalPeso += peso
        media += (atv * peso)
        // variável += outra coisa : variável = variável + outra coisa
        // variável /= outra coisa : variável = variável / outra coisa
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