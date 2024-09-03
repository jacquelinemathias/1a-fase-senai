programa {
  funcao inicio() {
    inteiro x, tentativa
    escreva("Informe o número secreto\n")
    leia(x)
    limpa()
    escreva("Informe uma tentativa\n")
    leia(tentativa)
    enquanto(tentativa<x){
      escreva("Digite um número maior\n")
      leia(tentativa)
    }enquanto(tentativa>x){
      escreva("Digite um número menor\n")
      leia(tentativa)
    }se(tentativa==x){
      escreva("Você acertou!")
    }
  }
}
