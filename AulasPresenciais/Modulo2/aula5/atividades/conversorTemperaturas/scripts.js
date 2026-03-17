let temperaturaDigitada = Number(prompt('Digite a temperatura'));
let escalaAtual = prompt('Digite a escala atual (c)celsius (k)kelvin (f)fahreinheit');
let escalaDesejada = prompt('Digite a escala desejada (c)celsius (k)kelvin (f)fahreinheit');

function celciusParaFahrenheit(celsius) {
    let fahrenheit = celsius * 1.8 + 32;
    return console.log(fahrenheit);
}

function fahrenheitParaCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) / 1.8;
    return console.log(celsius);
}

function celsiusParaKelvin(celsius) {
    let kelvin = celsius + 273.15;
    return console.log(kelvin);
}

function kelvinParaCelsius(kelvin) {
    let celsius = kelvin - 273.15;
    return console.log(celsius);
}

function fahrenheitParaKelvin(fahrenheit) {
    let kelvin = (fahrenheit - 32) * (5/9) + 273.15;
    return console.log(kelvin);
}

function kelvinParaFahrenheit(kelvin) {
    let fahrenheit = (kelvin - 273.15) * (9/5)  + 32;
    return console.log(fahrenheit);
}

function coverterTemperatura(temperaturaUtilisada, escalaAtual, escalaDesejada) {
    if (escalaAtual === 'c' & escalaDesejada === 'f') {
        celciusParaFahrenheit(temperaturaUtilisada);
    } else if (escalaAtual === 'f' & escalaDesejada === 'c') {
        fahrenheitParaCelsius(temperaturaUtilisada);
    } else if (escalaAtual === 'c' & escalaDesejada === 'k') {
        celsiusParaKelvin(temperaturaUtilisada);
    } else if (escalaAtual === 'k' & escalaDesejada === 'c') {
        kelvinParaCelsius(temperaturaUtilisada);
    } else if (escalaAtual === 'f' & escalaDesejada === 'k') {
        fahrenheitParaKelvin(temperaturaUtilisada);
    } else if (escalaAtual === 'k' & escalaDesejada === 'f') {
        kelvinParaFahrenheit(temperaturaUtilisada);
    }
}

coverterTemperatura(temperaturaDigitada, escalaAtual, escalaDesejada);