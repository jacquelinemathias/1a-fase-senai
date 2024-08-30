programa {
  funcao inicio() {
    inteiro idade
    escreva("Informe a sua idade: ")
    leia(idade)
    se(idade>=18){
      escreva("Você é maior de idade.")
    }senao se(idade>=12){
      escreva("Você é adolescente.")
    }senao{
      escreva("Você é criança.")
    }
  }
}
