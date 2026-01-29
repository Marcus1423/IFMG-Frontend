let cachorro = {
    nome: "Rex",
    cor: "preto",
    latir: function() {return "Au au"},
    nomeCor: function() {return this.nome + " é " + this.cor}
};

console.log(cachorro.latir());
console.log(cachorro.nomeCor());



