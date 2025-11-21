class Departamento {
    #nome;
    constructor(nome) {this.#nome = nome;}
    get nome() { return this.#nome;}
}

class Empresa {
    #nome; #departamentos;
    constructor(nome) {
        this.#nome = nome;
        this.#departamentos = [];
    }

    get nome () {return this.#nome;}

    insereDepartamento(departamento) {
        this.#departamentos.push(departamento);
    }

    listarDepartamentos() {
        for (departamento in this.#departamentos) {

        }
    }

    info() {
        console.log(`A empresa ${this.#nome} tem os departamentos de: ${this.#departamentos.nome}`)
    }
}


let departamento1 = new Departamento("Compras");
let departamento2 = new Departamento("Vendas");

let empresa1 = new Empresa("Marcus tec");

empresa1.insereDepartamento(departamento1);
empresa1.insereDepartamento(departamento2);

empresa1.info();

