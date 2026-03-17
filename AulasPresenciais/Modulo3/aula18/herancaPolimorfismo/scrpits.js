class Pessoa {
    #nome; #cpf;
    constructor(nome, cpf) {
        this.#nome = nome;
        this.#cpf = cpf;
    }

    get nome() {return this.#nome};

    apresentar() {
        return `Meu nome é ${this.#nome}`
    }
}

class Aluno extends Pessoa {
    #matricula; #curso;
    constructor(nome, cpf, matricula, curso) {
        super(nome, cpf);
        this.#matricula = matricula;
        this.#curso = curso;
    }

    get curso() {return this.#curso};

    get matricula() {return this.#matricula};

    apresentar() {
        return `Meu nome é ${this.nome} do curso ${this.#curso}`;
    }
}

let pessoa1 = new Pessoa("Lucas", 123);

console.log(pessoa1.apresentar());

let aluno1 = new Aluno("Marcus", 1234, 1, "React");

console.log(aluno1.apresentar());



