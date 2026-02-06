let valorDigitado;

valorDigitado = Number(prompt("Digite um número para saber se é primo"));

function verificaPrimo(numeroVerificado) {
    if (numeroVerificado <= 1) return console.log(`${numeroVerificado} não é primo`);

    for (let i = 2; i < numeroVerificado; i++)
        if (numeroVerificado % i == 0) return console.log(`${numeroVerificado} não é primo`);
     return console.log(`${numeroVerificado} é primo`)
}

verificaPrimo(valorDigitado);
