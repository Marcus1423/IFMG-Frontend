class Departamento {
#nome;
constructor(nome) { this.#nome = nome; }
get nome () { return this.#nome; }
}

class Empresa {
#nome; #departamentos;
constructor(nome) {
this.#nome = nome;
this.#departamentos = [];
}
get nome () { return this.#nome; }
adicionarDepartamento(departamento) { 
    this.#departamentos.push(departamento)
 }
listarDepartamentos() { return console.log(this.#departamentos.map(dep => dep.nome)) }
}

let empresa1 = new Empresa("IFMG");

let departamento1 = new Departamento("TI");

let departamento2 = new Departamento("RH");

let departamento3 = new Departamento("Finanças");

empresa1.adicionarDepartamento(departamento1);
empresa1.adicionarDepartamento(departamento2);
empresa1.adicionarDepartamento(departamento3);

empresa1.listarDepartamentos();



