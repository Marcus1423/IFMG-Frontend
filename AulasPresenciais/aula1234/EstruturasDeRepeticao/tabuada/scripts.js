let valorDigitado
let matriz = []
let matriz2 = []

valorDigitado = Number(prompt("Digite o valor a ser mutiplicado"))

for(let i = 0;i <= valorDigitado; i++) {
    matriz = i;
}

for(let i = 0;i <= 10; i++) {
    matriz2 = i;
    console.log(`${matriz} x ${matriz2} = ${matriz * matriz2}`)

}

