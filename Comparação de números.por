programa {
  funcao inicio() {
    real n1, n2
    escreva("Informe o primeiro n�mero\n")
    leia(n1)
    escreva("Informe o segundo n�mero\n")
    leia(n2)
    se(n1>n2){
      escreva(n1," � maior que ",n2)
    }senao se(n2>n1){
      escreva(n2," � maior que ",n1)
    }senao se(n1==n2){
      escreva("Os dois n�meros s�o iguais")
    }
  }
}
