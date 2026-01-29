let tabela = document.getElementById('tabela');

let valorDigitado;

let mutiplicador = [];

function criaTabelas(mutiplicando) {
    for(let i = 0;i <= 10; i++) {
    mutiplicador = i;
    console.log(`${mutiplicando} x ${mutiplicador} = ${mutiplicando * mutiplicador}`);
}
}

console.log(mutiplicador)

array.forEach(mutiplicador => {
    tabela.innerHTML = `${mutiplicando} x ${mutiplicador} = ${mutiplicando * mutiplicador}`;
});


criaTabelas(8);
criaTabelas(9);



