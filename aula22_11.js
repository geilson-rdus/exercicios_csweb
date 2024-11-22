function getColors(){
    const vetorCores = []

    for(let i = 1; i <= 148; i++){
        const colorName = document.querySelector(`#box${i} > span > a`).innerText.toLowerCase(); vetorCores.push(colorName)} 

    return vetorCores;
}

function selectColors(quantidade, vetorCores){

    let vetorSelecionados = []

        if(quantidade > vetorCores.length){
            alert("Você não pode pedir uma quantidade de cores maior do que existe no vetor")
            return;
        }

    for(let i = 0; i < quantidade; i++){
        let i_aleatorio = Math.floor(Math.random()*vetorCores.length)
        let cor_selecionada = vetorCores.splice(i_aleatorio, 1)
        vetorSelecionados = [...vetorSelecionados, ...cor_selecionada]
    }

    return vetorSelecionados
}


function game(){
  const vetorCores = selectColors(10, getColors())
  console.log(vetorCores)

  alert("Jogo de cores! Selecione uma das cores abaixo:\n" + vetorCores)

  const cor_computador = vetorCores.splice(Math.floor(Math.random()*vetorCores.length),1)[0]  
  console.log(cor_computador)
  let tentativas = 0

  do{
    let cor_escolhida = prompt("Escolha uma cor:\nCores possíveis:\n" + vetorCores)
    tentativas = tentativas + 1
    if(cor_computador == cor_escolhida){
        alert("Parabéns! Você ganhou")
        return
    }else{
        if(tentativas > 2){
            alert("GAME OVER")
        }else {
            alert("Tente novamente")
        }

    }

  } while(tentativas < 3)
}
