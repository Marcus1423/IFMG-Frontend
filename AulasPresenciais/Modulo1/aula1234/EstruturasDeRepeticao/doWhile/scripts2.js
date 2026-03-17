let valorDigitado;
let tentativas = 0;

do {
    tentativas++;
    valorDigitado = Number(prompt('Digite um número'));
    console.log(tentativas);
}

while (valorDigitado < 10)