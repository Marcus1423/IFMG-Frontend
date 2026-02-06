let a = Number(prompt("Digite o lado A:"));
let b = Number(prompt("Digite o lado B:"));
let c = Number(prompt("Digite o lado C:"));

if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
        console.log("Triângulo Equilátero");
    } else if (a === b || a === c || b === c) {
        console.log("Triângulo Isósceles");
    } else {
        console.log("Triângulo Escaleno");
    }
} else {
    console.log("Os valores não formam um triângulo");
}