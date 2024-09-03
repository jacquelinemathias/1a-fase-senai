programa {
  funcao inicio() {
    inteiro x, tentativa, n_tent
    cadeia mensagem
    mensagem="Tentativas esgotadas"
    n_tent=0
    escreva("Informe o número secreto\n")
    leia(x)
    limpa()
    escreva("Tente adivinhar o número secreto\n")
    enquanto(n_tent<5){
      leia(tentativa)
      se(tentativa==x){
        mensagem="Você acertou!"
        pare
      }senao se(tentativa<x){
        escreva("Tente um número maior\n")
      }senao{
        escreva("Tente um número menor\n")
      }
      n_tent=n_tent+1
    }escreva(mensagem)
  }
}
