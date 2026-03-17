let valorDigitado;
let total = 0;
let tentativas = 0;

for(let i = 0;i < 5; i++) {
    valorDigitado = Number(prompt(`Digite um número ${i++} de 5`));
    total = total+valorDigitado;
    console.log(total)
}

