console.log('Inicio do programa');

try {
    console.log(nome);
}

catch (erro) {
    console.log(erro.name)
    console.log(erro.message)
}

finally {
    console.log('Fim Try-catch')
}


console.log('Fim do programa');