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

class Cachorro extends Animal {
    constructor(nome, patas) {
        super(nome, patas);
    }

    emitirSom() {
        return `Au au`;
    }
}

class Gato extends Animal {
    constructor(nome, patas) {
        super(nome, patas);
    }

    emitirSom() {
        return `Miaw`;
    }
}

class Passaro extends Animal {
    constructor(nome, patas) {
        super(nome, patas);
    }

    emitirSom() {
        return `Bem te vi`;
    }
}


let adicionaCachorro = document.getElementById('btn-cachorro');

export const cachorros = []

adicionaCachorro.addEventListener('click', function () {
    let inputCachorro = document.getElementById('inputCachorro').value;
    let novoCachorro = new Cachorro(inputCachorro, 4);
    cachorros.push(novoCachorro)
    
    document.getElementById('inputCachorro').value = '';
    console.log(cachorros);
})

let adicionaGato = document.getElementById('btn-gato');

const gatos = [];

adicionaGato.addEventListener('click', function () {
    let inputGato = document.getElementById('inputGato').value;
    let novoGato = new Gato(inputGato, 4);
    gatos.push(novoGato);
    
    document.getElementById('inputGato').value = '';
    console.log(gatos);
})

let adicionaPassaro = document.getElementById('btn-passaro');

const passaros = [];

adicionaPassaro.addEventListener('click', function () {
    let inputPassaro = document.getElementById('inputPassaro').value;
    let novoPassaro = new Passaro(inputPassaro, 2);
    passaros.push(novoPassaro);
    
    document.getElementById('inputPassaro').value = '';
    console.log(passaros);
})












