let paragrafo = document.getElementById('paragrafo');

let lugar = {
    nome: "Point barreiro",
    idade: "14",
    cidade: "Belo Horizonte"
};

console.log(lugar.nome);
console.log(lugar.idade);
console.log(lugar.cidade);

paragrafo.innerText = `${lugar.nome} tem ${lugar.idade} anos e fica em ${lugar.cidade}`

console.log(lugar.nome,"Tem", lugar)






