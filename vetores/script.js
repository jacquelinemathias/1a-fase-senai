let batatas = [];
function add(){
    let produto = document.getElementById("txt").value;
    let posicao = batatas.indexOf(produto);
    if(posicao==-1){
        alert("O item não existe na lista.")
    batatas.push(produto);
    document.getElementById("lista").innerHTML = batatas;
    }else{
        alert("Esse item já está cadastrado.")
    }
}

function remove(){
    let produto = document.getElementById("txt").value;
    let posicao = batatas.indexOf(produto);
    if(posicao==-1){
        alert("O item não existe na lista.")
    }else{
        batatas.splice(posicao, 1);
        document.getElementById("lista").innerHTML = batatas;
    }
}