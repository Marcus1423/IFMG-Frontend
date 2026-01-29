class NanError extends Error {
    constructor() {
        super("Digite um número");
        this.name = "NanError";
    }
}

function verificaNaN(valor) {
    if (valor = isNaN()) {
        throw new NanError();
    }
}

try {
    console.log(b)
} catch (erro) {
    console.log(`Menssagem de erro: ${erro.message}`);
}
