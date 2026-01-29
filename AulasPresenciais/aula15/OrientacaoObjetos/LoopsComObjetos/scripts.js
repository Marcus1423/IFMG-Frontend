let objeto = {
    A: 10,
    B: 21,
    C: -5
};

for (let chave in objeto) {
    let valor = objeto[chave] 
    console.log(`${chave} => ${valor}`) 
}

