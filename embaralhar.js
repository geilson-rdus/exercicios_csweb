function geraAleatorios(quantidade) {
    // Cria um array de 1 a 60

    const vetorNumeros = []
    
    for(var j = 1; j <= 60; j++){
        vetorNumeros.push(j)
    }

    // Embaralha o array usando Fisher-Yates Shuffle
    for (let i = vetorNumeros.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Índice aleatório entre 0 e i
        [vetorNumeros[i], vetorNumeros[j]] = [vetorNumeros[j], vetorNumeros[i]]; // Troca os elementos
    }

    // Seleciona os primeiros 'quantidade' números do array embaralhado
    const vetorNumSel = vetorNumeros.slice(0, quantidade);

    console.log(vetorNumSel);
}
