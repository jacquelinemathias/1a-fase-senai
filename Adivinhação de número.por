programa {
  funcao inicio() {
    inteiro x, tentativa
    escreva("Informe o n�mero secreto\n")
    leia(x)
    limpa()
    escreva("Informe uma tentativa\n")
    leia(tentativa)
    enquanto(tentativa<x){
      escreva("Digite um n�mero maior\n")
      leia(tentativa)
    }enquanto(tentativa>x){
      escreva("Digite um n�mero menor\n")
      leia(tentativa)
    }se(tentativa==x){
      escreva("Voc� acertou!")
    }
  }
}
