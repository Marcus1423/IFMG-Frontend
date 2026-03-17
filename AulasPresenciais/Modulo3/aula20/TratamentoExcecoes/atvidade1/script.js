class ValorNegativoError extends Error {
    constructor() {
        super("O número deve ser positivo.");
        this.name = "ValorNegativoError";
    }
}

function calcularRaiz(valor) {
    if (valor < 0) {
        throw new ValorNegativoError();
    } return Math.sqrt(valor);
}

try {
    console.log(calcularRaiz(-9))
} catch (erro) {
    console.log(`Menssagem de erro: ${erro.message}`);
}
