let num1 = 0;
let num2 = 0;
let operacao;
let resultado = 0;

num1 = Number(prompt("Digite um valor para calcular:"));
num2 = Number(prompt("Digite outro valor para calcular:"));
operacao = prompt("Selecione a operação desejada: +, -, *, /");

if (operacao === "+") {
    resultado = num1 + num2; 
    console.log(`A soma entre ${num1} e ${num2} é = ${resultado}`);
} else if (operacao === "-") {
    resultado = num1 - num2;
    console.log(`A subtração entre ${num1} e ${num2} é = ${resultado}`);
} else if (operacao === "*") {
    resultado = num1 * num2;
    console.log(`A multiplicação entre ${num1} e ${num2} é = ${resultado}`);
} else if (operacao === "/") {
    resultado = num1 / num2;
    console.log(`A divisão entre ${num1} e ${num2} é = ${resultado}`);
} else {
    console.log("valor inválido, por favor digite um valor válido")
}

