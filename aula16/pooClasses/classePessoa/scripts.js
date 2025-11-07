class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}



let pessoa1 = new Pessoa("Ana", 30);
let pessoa2 = new Pessoa("Bia", 40);


console.log(pessoa1.nome + " => " + pessoa1.idade)

pessoa1.apresentar()

