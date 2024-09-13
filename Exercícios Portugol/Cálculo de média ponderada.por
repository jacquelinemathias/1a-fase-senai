programa {
  funcao inicio() {
    inteiro qtd_total, qtd_cad
    real media_ap, media, atv, peso, total_peso
    cadeia mensagem
    escreva("Informe a quantidade de atividades que deseja calcular\n")
    leia(qtd_total)
    escreva("Informe a média necessária para aprovação\n")
    leia(media_ap)
    media=0
    total_peso=0
    qtd_cad=0
    enquanto(qtd_cad<qtd_total){
      escreva("Informe a nota da atividade\n")
      leia(atv)
      escreva("Informe o peso da atividade\n")
      leia(peso)
      total_peso=total_peso+peso
      media=media+(atv*peso)
      qtd_cad=qtd_cad+1
    }
    media=media/total_peso
    se(media>=media_ap){
      mensagem="A nota final é "+media+", portanto o aluno foi aprovado."
      escreva(mensagem)
    }senao se(media_ap-media<=0.5){
      mensagem="A nota final é "+media+", portanto o aluno foi aprovado por conselho."
      escreva(mensagem)
    }senao{
      mensagem="A nota final é "+media+", portanto o aluno foi reprovado."
      escreva(mensagem)
    }
  }
}
