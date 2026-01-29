class ContaBancaria {
    #saldo;

    constructor(saldo) {
        this.#saldo = saldo;
    }

    consultarSaldo() {
        return this.#saldo;
    }

    depositarValor(valorDepositar) {
        this.#saldo = this.#saldo + valorDepositar;
    }

    sacarValor(valorSacar) {
        if ((this.#saldo === 0) & (this.#saldo > 0)) {
            return;
        } else {
            this.#saldo = this.#saldo - valorSacar;
        }
    }
}

let conta1 = new ContaBancaria(500);

console.log(conta1.consultarSaldo());

conta1.depositarValor(200);

console.log(conta1.consultarSaldo());

conta1.sacarValor(100);

console.log(conta1.consultarSaldo());
