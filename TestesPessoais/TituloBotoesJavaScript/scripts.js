let titulo = document.getElementById('titulo');
let paragrafo1 = document.getElementById('paragrafo1');
let paragrafo2 = document.getElementById('paragrafo2');
let botao = document.getElementById('botao')

titulo.innerHTML = "Olá aqui do JavaScript";
paragrafo1.innerHTML = "Clique no botão abaixo para alterar o título da página";
paragrafo2.innerHTML = "Clique no botão abaixo para restaurar o título original";

function mudaTitulo() {
    titulo.innerHTML = "Texto alterado pelo JavaScript";
}

botao.addEventListener('click', () => {
    titulo.innerHTML = "Olá aqui do JavaScript";
})





