function gerarAleatorios(qtdNumeros){
  var vetor = [];
  var geracoes = [];

  while(vetor.length < qtdNumeros){
    var aleatorio = Math.floor(Math.random()*60 + 1);
    geracoes.push(aleatorio);
    if(vetor.includes(aleatorio)){
      continue;
    }else{
      vetor.push(aleatorio);
    }
  }

  console.log("Gerações: ", geracoes);
  console.log("Finais: ", vetor);
}

function main(qtdNumeros){
  console.time("timer");
  gerarAleatorios(qtdNumeros);
  console.timeEnd("timer");
}
