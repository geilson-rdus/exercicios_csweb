function geraMega() {
    var numeros = 0;
    var x;
    var fator = 1; 

    for (var i = 0; i < 6;) {
        if (i == 0) {
            x = Math.floor((Math.random() * 60) + 1);
            console.log(x);
            numeros += x * fator;
            fator *= 100;
            i++;
        } else {
            x = Math.floor((Math.random() * 60) + 1);
            
            var aux = numeros;
            var repetido = false;

            while (aux > 0) {
                if (aux % 100 == x) {
                    repetido = true;
                    break;
                }
                aux = Math.floor(aux / 100);
            }

            if (repetido == false) {
                console.log(x);
                numeros += x * fator;
                fator *= 100;
                i++;
            }
        }
    }
}

geraMega();
