function celciusParaFahrenheit(celsius) {
    let fahrenheit = celsius * 1.8 + 32;
    return document.getElementById("resultado").textContent = `O resultado é: ${fahrenheit}`;
}

function fahrenheitParaCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) / 1.8;
    return document.getElementById("resultado").textContent = `O resultado é: ${celsius}`;
}

function celsiusParaKelvin(celsius) {
    let kelvin = celsius + 273.15;
    return document.getElementById("resultado").textContent = `O resultado é: ${kelvin}`;
}

function kelvinParaCelsius(kelvin) {
    let celsius = kelvin - 273.15;
    return document.getElementById("resultado").textContent = `O resultado é: ${celsius}`;
}

function fahrenheitParaKelvin(fahrenheit) {
    let kelvin = (fahrenheit - 32) * (5/9) + 273.15;
    return document.getElementById("resultado").textContent = `O resultado é: ${kelvin.toFixed(3)}`;
}

function kelvinParaFahrenheit(kelvin) {
    let fahrenheit = (kelvin - 273.15) * (9/5)  + 32;
    return document.getElementById("resultado").textContent = `O resultado é: ${fahrenheit.toFixed(2)}`;
}

function coverterTemperatura() {
    let valorCalcular = parseFloat(document.getElementById('valorCalcular').value);
    let campo1 = document.getElementById('campo1');
    let valorCampo1 = campo1.value;
    let campo2 = document.getElementById('campo2');
    let valorCampo2 = campo2.value;

    if (valorCampo1 === 'celsius' & valorCampo2 === 'fahrenheit') {
        celciusParaFahrenheit(valorCalcular);
    } else if (valorCampo1 === 'fahrenheit' & valorCampo2 === 'celsius') {
        fahrenheitParaCelsius(valorCalcular);
    } else if (valorCampo1 === 'celsius' & valorCampo2 === 'kelvin') {
        celsiusParaKelvin(valorCalcular);
    } else if (valorCampo1 === 'kelvin' & valorCampo2 === 'celsius') {
        kelvinParaCelsius(valorCalcular);
    } else if (valorCampo1 === 'fahrenheit' & valorCampo2 === 'kelvin') {
        fahrenheitParaKelvin(valorCalcular);
    } else if (valorCampo1 === 'kelvin' & valorCampo2 === 'fahrenheit') {
        kelvinParaFahrenheit(valorCalcular);
    }
}

