programa {
  funcao inicio() {
    real peso_permitido, peso_pescado, multa_por_peso, multa, diferenca
    escreva("Informe o peso permitido\n")
    leia(peso_permitido)
    escreva("Informe o peso pescado\n")
    leia(peso_pescado)
    se(peso_pescado > peso_permitido){
      escreva("Informe o valor da multa por excesso\n")
      leia(multa_por_peso)
      diferenca = peso_pescado - peso_permitido
      multa = diferenca * multa_por_peso
      escreva("O peso excedeu em " +diferenca+"kg o limite permitido, deve-se pagar uma multa de R$" + multa + ".")
    }
    senao{
      escreva("O peso está dentro do limite permitido. Não é necessário pagar multa.")
    }
  }
}
