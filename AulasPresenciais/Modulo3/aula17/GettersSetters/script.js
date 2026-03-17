class Pessoa {
    #nome

    constructor(nome, endereco) {
        this.#nome = nome;
        this.endereco = endereco;
    }

    get nome() {
        return this.#nome = nome
    }

    set nome(valor) {
        this.#nome = valor
    }
};

let pessoa1 = new Pessoa("Conecta","ibirité");
pessoa1.nome = "IFMG";

console.log(pessoa1.nome);
console.log(pessoa1.endereco);



