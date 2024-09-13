programa {
  funcao inicio() {
    real n1, n2
    escreva("Informe o primeiro número\n")
    leia(n1)
    escreva("Informe o segundo número\n")
    leia(n2)
    se(n1>n2){
      escreva(n1," é maior que ",n2)
    }senao se(n2>n1){
      escreva(n2," é maior que ",n1)
    }senao se(n1==n2){
      escreva("Os dois números são iguais")
    }
  }
}
