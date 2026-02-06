let n = Number(prompt("Quantos números da sequência você quer gerar?"));

let a = 0, b = 1;

console.log("Sequência de Fibonacci:");

for (let i = 0; i < n; i++) {
    console.log(a);
    let proximo = a + b;
    a = b;
    b = proximo;
}