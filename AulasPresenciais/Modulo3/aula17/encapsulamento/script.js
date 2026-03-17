class Pessoa {
    #nome;
    #endereco;
    constructor(nome, endereco) {
        this.#nome = nome;
        this.#endereco = endereco;
    }

    obterNome() {
        return this.#nome;
    }

    obterEnderco() {
        return this.#endereco;
    }

    modificaEnderco(valor) {
        this.#endereco = prompt('Digite o novo enderço');
    }


    printarInfo() {
        return `A pessoa ${this.#nome} mora no endereço ${this.obterEnderco()}`;
    }

};

let pessoa1 = new Pessoa("Marcus","ibirité");
pessoa1.nome = "IFMG";
let pessoa2 = new Pessoa("Pessoa2", "Contagem");


pessoa1.modificaEnderco();
console.log(pessoa1.printarInfo());
console.log(pessoa2.printarInfo());

console.log(pessoa1.obterEnderco());



