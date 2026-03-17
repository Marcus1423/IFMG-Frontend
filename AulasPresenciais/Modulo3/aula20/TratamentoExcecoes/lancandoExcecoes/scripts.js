try {
    let a = Number(prompt('Digite o valor de a:'));
    let b = Number(prompt('Digite o valor de b:'));
    let resuldado = a/b;
    if (isNaN(resuldado)) {
        throw new Error("Valores invalidos");
    }

    if (resuldado == Infinity || resuldado == -Infinity) {
        throw new Error("Divisão por zero");
    }
    console.log(resuldado)
} 

catch (erro) {
 console.log(erro.name);
 console.log(erro.message);
}

