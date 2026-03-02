class Pessoa {
    #nome; #cpf; #endereco;
    constructor(nome, cpf, logradoro, numero, bairro, cidade, estado, cep) {
        this.#nome = nome;
        this.#cpf = cpf;
        this.#endereco = new Endereco(logradoro, numero, bairro, cidade, estado, cep);
    } 
}

class Endereco {
    #logradoro; #numero; #bairro; 
    #cidade; #estado; #cep;

    constructor(logradoro, numero, bairro, cidade, estado, cep) {
        this.#logradoro = logradoro;
        this.#numero = numero;
        this.#bairro = bairro;
        this.#cidade = cidade;
        this.#estado = estado;
        this.#cep = cep;
    }

}

let pessoa1 = new Pessoa ("Marcus", 123, "Rua s", "3", "Bairro s", "Cidade C", "Estado M", "1235");

console.log(pessoa1);