let num1 = Number(prompt('digite um valor'));
let num2 = Number(prompt('digite outro valor'));
let operacao = prompt('digite a operação desejada: (somar, subtrair, multiplicar, dividir)');

function somar(num1, num2){
    return console.log(num1 + num2);
}

function multiplicar(num1, num2){
    return console.log(num1 * num2);
}

function subtrair(num1, num2){
    return console.log(num1 - num2);
}

function dividir(num1, num2){
    return console.log(num1 / num2);
}

function calcular(num1, num2, operacao){

   if (operacao === 'somar' || operacao === '+') {
     somar(num1, num2);
   } else if (operacao === 'multiplicar' || operacao === '*') {
    multiplicar(num1, num2);
   } else if (operacao === 'subtrair' || operacao === '-') {
    subtrair(num1, num2);
   } else if (operacao === 'dividir' || operacao === '/') {
    dividir(num1, num2);
   } 
    
}

calcular(num1, num2, operacao);