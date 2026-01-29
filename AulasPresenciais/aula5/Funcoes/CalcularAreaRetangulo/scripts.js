let valorBase;
let valorAltura;
let resultado = 0;

valorBase = Number(prompt('Digite o valor da Base'));
valorAltura = Number(prompt('Digite o valor da Altura'));

function calculaArea(base, altura) {
    resultado = base * altura;
    console.log(resultado);
}

calculaArea(valorBase, valorAltura);



