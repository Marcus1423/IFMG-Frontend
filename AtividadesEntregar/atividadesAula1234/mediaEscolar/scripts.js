let n1 = Number(prompt("Digite a primeira nota:"));
let n2 = Number(prompt("Digite a segunda nota:"));
let n3 = Number(prompt("Digite a terceira nota:"));

let media = (n1 + n2 + n3) / 3;

if (media >= 7) {
    console.log("Aprovado! Média: " + media.toFixed(2));
} else if (media >= 5) {
    console.log("Recuperação. Média: " + media.toFixed(2));
} else {
    console.log("Reprovado. Média: " + media.toFixed(2));
}