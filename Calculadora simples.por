programa {
  inclua biblioteca Matematica --> mat
  funcao inicio() {
    real opcao, n1, n2, res
    escreva("Selecione a opera��o que voc� deseja fazer:\n1- Adi��o\n2-Subtra��o\n3-Multiplica��o\n4-Divis�o\n")
    leia(opcao)
    se(opcao==1){
      escreva("Digite o primeiro n�mero\n")
      leia(n1)
      escreva("Digite o segundo n�mero\n")
      leia(n2)
      res=n1+n2
      escreva("Seu resultado �: "+mat.arredondar(res,2))
    }senao se(opcao==2){
      escreva("Digite o primeiro n�mero\n")
      leia(n1)
      escreva("Digite o segundo n�mero\n")
      leia(n2)
      res=n1-n2
      escreva("Seu resultado �: "+mat.arredondar(res,2))
    }senao se(opcao==3){
      escreva("Digite o primeiro n�mero\n")
      leia(n1)
      escreva("Digite o segundo n�mero\n")
      leia(n2)
      res=n1*n2
      escreva("Seu resultado �: "+mat.arredondar(res,2))
    }senao se(opcao==4){
      escreva("Digite o primeiro n�mero\n")
      leia(n1)
      escreva("Digite o segundo n�mero\n")
      leia(n2)
      res=n1/n2
      escreva("Seu resultado �: "+mat.arredondar(res,2))
    }
  }
}
