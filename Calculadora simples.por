programa {
  inclua biblioteca Matematica --> mat
  funcao inicio() {
    real opcao, n1, n2, res
    escreva("Selecione a operação que você deseja fazer:\n1- Adição\n2-Subtração\n3-Multiplicação\n4-Divisão\n")
    leia(opcao)
    se(opcao==1){
      escreva("Digite o primeiro número\n")
      leia(n1)
      escreva("Digite o segundo número\n")
      leia(n2)
      res=n1+n2
      escreva("Seu resultado é: "+mat.arredondar(res,2))
    }senao se(opcao==2){
      escreva("Digite o primeiro número\n")
      leia(n1)
      escreva("Digite o segundo número\n")
      leia(n2)
      res=n1-n2
      escreva("Seu resultado é: "+mat.arredondar(res,2))
    }senao se(opcao==3){
      escreva("Digite o primeiro número\n")
      leia(n1)
      escreva("Digite o segundo número\n")
      leia(n2)
      res=n1*n2
      escreva("Seu resultado é: "+mat.arredondar(res,2))
    }senao se(opcao==4){
      escreva("Digite o primeiro número\n")
      leia(n1)
      escreva("Digite o segundo número\n")
      leia(n2)
      res=n1/n2
      escreva("Seu resultado é: "+mat.arredondar(res,2))
    }
  }
}
