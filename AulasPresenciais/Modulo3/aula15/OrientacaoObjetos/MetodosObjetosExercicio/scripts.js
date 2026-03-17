let contaBancaria = {
    titular: 'Marcus',
    saldo: 0,

    exibiSaldo() {
        return this.saldo;
    },

    depositar(novoValor) {
        return (this.saldo += novoValor);
    },

    sacar(novoValor) {
        if (novoValor <= this.saldo) {
            return (this.saldo -= novoValor);
        } else {
            console.log('Saldo insulficiente');
        }
    }
};

console.log(`Saldo incial: ${contaBancaria.exibiSaldo()}`);

contaBancaria.depositar(500);

console.log(`Saldo atual: ${contaBancaria.exibiSaldo()}`);

contaBancaria.sacar(200);

console.log(`Saldo atual: ${contaBancaria.exibiSaldo()}`);

contaBancaria.sacar(1000);

console.log(`Saldo atual: ${contaBancaria.exibiSaldo()}`);
