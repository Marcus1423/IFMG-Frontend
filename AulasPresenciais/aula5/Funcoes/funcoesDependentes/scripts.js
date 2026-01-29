function tipoGeometria() {
    let valorDigitado = '';
    valorDigitado = prompt('Digite a geometria que deseja calcular: triângulo, retângulo, trapézio');
    return (valorDigitado)
}

let parametroGeometria = tipoGeometria()

function calculaArea(tipoGeometria) {
    let base = 0;
    let altura = 0;
    let resultado;
    
    if (tipoGeometria === 'retangulo' || tipoGeometria === 'retângulo') {
        base = prompt('Digite o valor da base');
        altura = prompt('Digite o valor da altura');
        resultado = base * altura
        console.log(resultado)
    } else if (tipoGeometria === 'triangulo' || tipoGeometria === 'triângulo') {
        base = prompt('Digite o valor da base');
        altura = prompt('Digite o valor da altura');
        resultado = base * altura /2;
        console.log(resultado)
    } else if (tipoGeometria === 'trapezio' || tipoGeometria === 'trapézio') {
        let base2
        base = prompt('Digite o valor primeira da base');
        base2 = prompt('Digite o valor da segunda base');
        altura = prompt('Digite o valor da altura');
        resultado = ((base + base2)* altura) /2;
        console.log(resultado)

}
}

calculaArea(parametroGeometria);
