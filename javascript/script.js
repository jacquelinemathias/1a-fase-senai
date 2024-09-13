function calculoIMC(){
    let peso = document.getElementById("inpPeso").value;
    let altura = document.getElementById("inpAltura").value;
    let imc = peso/(altura**2);
    // let imc = peso/(altura*altura)
    // alert("Seu IMC é "+imc+".")
    // document.getElementById("inpResultado").value = "Seu IMC é "+imc+".";
    document.getElementById("pResultado").innerHTML = "Seu IMC é: "+imc+".";

    // console.log(document.getElementById("inpPeso").value);
}

function idadeCachorro(){
    let idade = document.getElementById("inpIdade").value;
    idade = idade * 7
    if(idade>=65){
        document.getElementById("pIdade").innerHTML = "Seu cachorro tem "+idade+" anos humanos. Parabéns! Ele pode se aposentar."
    }else{
        document.getElementById("pIdade").innerHTML = "Seu cachorro tem "+idade+" anos humanos. Ele não pode se aposentar ainda."
    }
}