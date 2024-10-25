function calculaImposto(salarioRecebido){
    
    var salario = salarioRecebido;
    var irpf = 0.0;
    var inss = 0.0;
    var salarioLiquido = 0.0;

    if(salario <= 1412){
        irpf = 0.0;
        inss = salario * 0.075;
        salarioLiquido = salario - irpf - inss;
        console.log("O salario liquido eh: R$"+salarioLiquido.toFixed(2));
    }

    else if(salario > 1412 && salario <= 2259.20){
        irpf = 0.0;
        inss = salario * 0.09;
        salarioLiquido = salario - irpf - inss;
        console.log("O salario liquido eh: R$"+salarioLiquido.toFixed(2));
    }

    else if(salario > 2259.20 && salario <= 2666.68){
        irpf = salario * 0.075;
        inss = salario * 0.09;
        salarioLiquido = salario - irpf - inss;
        console.log("O salario liquido eh: R$"+salarioLiquido.toFixed(2));
    }

    else if(salario > 2666.68 && salario <= 2826.65){
        irpf = salario * 0.075;
        inss = salario * 0.12;
        salarioLiquido = salario - irpf - inss;
        console.log("O salario liquido eh: R$"+salarioLiquido.toFixed(2));
    }

    else if(salario > 2826.65 && salario <= 3751.05){
        irpf = salario * 0.15;
        inss = salario * 0.12;
        salarioLiquido = salario - irpf - inss;
        console.log("O salario liquido eh: R$"+salarioLiquido.toFixed(2));
    }

    else if(salario > 3751.05 && salario <= 4000.03){
        irpf = salario * 0.225;
        inss = salario * 0.12;
        salarioLiquido = salario - irpf - inss;
        console.log("O salario liquido eh: R$"+salarioLiquido.toFixed(2));
    }

    else if(salario > 4000.03 && salario <= 4664.68){
        irpf = salario * 0.225;
        inss = salario * 0.14;
        salarioLiquido = salario - irpf - inss;
        console.log("O salario liquido eh: R$"+salarioLiquido.toFixed(2));
    }

    else if(salario > 4000.03 && salario <= 7786.02){
        irpf = salario * 0.225;
        inss = salario * 0.14;
        salarioLiquido = salario - irpf - inss;
        console.log("O salario liquido eh: R$"+salarioLiquido.toFixed(2));
    }

    else{
        irpf = salario * 0.275;
        inss = 908.85;
        salarioLiquido = salario - irpf - inss;
        console.log("O salario liquido eh: R$"+salarioLiquido.toFixed(2));
    }

}

calculaImposto(10000)
