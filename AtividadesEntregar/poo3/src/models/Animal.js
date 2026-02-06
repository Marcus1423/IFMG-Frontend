class Animal {
    #nome; #patas;
    constructor(nome, patas) {
        this.#nome = nome;
        this.#patas = patas;
    }

    get nome() {return this.#nome};

    emitirSom() {
        return `Som genérico`;
    }
}
 
export class Cachorro extends Animal {
    constructor(nome, patas) {
        super(nome, patas);
    }

    emitirSom() {
        return `Au au`;
    }
}

export class Gato extends Animal {
    constructor(nome, patas) {
        super(nome, patas);
    }

    emitirSom() {
        return `Miaw`;
    }
}

export class Passaro extends Animal {
    constructor(nome, patas) {
        super(nome, patas);
    }

    emitirSom() {
        return `Bem te vi`;
    }
}