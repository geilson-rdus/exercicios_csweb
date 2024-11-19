vetorCores = [];

for(var i = 1; i <= 148; i++){
    var cor = document.querySelector(`#box${i} > span > a`).innerText.toLowerCase();
    vetorCores.push(cor);
}

vetorCores.splice(10,1);


# utilizar função de gerar numeros aleatorios
# usar como referencia esse numero em vetorCores.splice(numero,1)
# 
