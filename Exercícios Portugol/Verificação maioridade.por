programa {
  funcao inicio() {
    inteiro idade
    escreva("Informe a sua idade: ")
    leia(idade)
    se(idade>=18){
      escreva("Voc� � maior de idade.")
    }senao se(idade>=12){
      escreva("Voc� � adolescente.")
    }senao{
      escreva("Voc� � crian�a.")
    }
  }
}
