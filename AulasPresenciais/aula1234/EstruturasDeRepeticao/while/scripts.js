let valorDigitado;
let tentativas = 0;


valorDigitado = Number(prompt('Digite um número'));


while (valorDigitado < 10) {
    valorDigitado = Number(prompt('Digite um número'));
    tentativas++;
    console.log(tentativas);
}




