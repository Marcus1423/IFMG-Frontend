let contador = 0;
let botao = document.getElementById('botao');
let resultado = document.getElementById('resultado'); 

botao.addEventListener('click', function contar() {
    contador++
    resultado.innerHTML = '<h1>Olá</h1>'
})