programa {
  funcao inicio() {
    caracter opcao
    real temp, resultado
    escreva("Qual conversão você deseja fazer?\n1- Celsius para Fahrenheit\n2- Fahrenheit para Celsius\n3- Celsius para Kelvin\n4- Kelvin para Celsius\n5- Fahrenheit para Kelvin\n6- Kelvin para Fahrenheit\n")
    leia(opcao)
    se(opcao == 1){
      escreva("Informe a temperatura em Celsius:\n")
      leia(temp)
      resultado = (temp*1.8)+32
      escreva("A temperatura em Fahrenheit é "+resultado+"°F.")
    }
    se(opcao == 2){
      escreva("Informe a temperatura em Fahrenheit:\n")
      leia(temp)
      resultado = (temp-32)*(5/9)
      escreva("A temperatura em Celsius é "+resultado+"°C.")
    }
    se(opcao == 3){
      escreva("Informe a temperatura em Celsius:\n")
      leia(temp)
      resultado = temp+273.15
      escreva("A temperatura em Kelvin é "+resultado+"°K.")
    }
    se(opcao == 4){
      escreva("Informe a temperatura em Kelvin:\n")
      leia(temp)
      resultado = temp-273.15
      escreva("A temperatura em Celsius é "+resultado+"°C.")
    }
    se(opcao == 5){
      escreva("Informe a temperatura em Fahrenheit:\n")
      leia(temp)
      resultado = (temp+459.67)*5/9
      escreva("A temperatura em Kelvin é "+resultado+"°K.")
    }
    se(opcao == 6){
      escreva("Informe a temperatura em Kelvin:\n")
      leia(temp)
      resultado = (temp-273.15)*(9/5)+32
      escreva("A temperatura em Fahrenheit é "+resultado+"°F.")
    }
    senao{
      escreva("Opção inválida. Encerrando sistema.")
    }
 }
}