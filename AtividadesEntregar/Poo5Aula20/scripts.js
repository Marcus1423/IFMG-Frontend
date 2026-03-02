class ContaBancaria {
  #saldo;
  #titular;
  #historicoEntradas;
  #historicoSaidas;

  constructor(titular, saldoInicial = 0) {
    if (saldoInicial < 0) {
      throw new ValorInvalidoError("Saldo inicial não pode ser negativo.");
    }

    this.#titular = titular;
    this.#saldo = saldoInicial;
    this.#historicoEntradas = [];
    this.#historicoSaidas = [];
  }

   consultarSaldo() {
    return this.#saldo;
  }

  depositar(valor) {
    if (valor <= 0) {
      throw new ValorInvalidoError("O valor do depósito deve ser maior que zero.");
    }

    this.#saldo += valor;
    this.#historicoEntradas.push(valor);
  }

  sacar(valor) {
    if (valor <= 0) {
      throw new ValorInvalidoError("O valor do saque deve ser maior que zero.");
    }

    if (valor > this.#saldo) {
      throw new SaldoInsuficienteError("Saldo insuficiente para realizar o saque.");
    }

    this.#saldo -= valor;
    this.#historicoSaidas.push(valor);
  }
}

class SaldoInsuficienteError extends Error {
  constructor(message) {
    super(message);
    this.name = "SaldoInsuficienteError";
  }
}

class ValorInvalidoError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValorInvalidoError";
  }
}

try {
  const conta = new ContaBancaria("Marcus", 100);

  conta.depositar(50);
  conta.sacar(30);
  conta.sacar(500); // vai gerar erro

  console.log("Saldo:", conta.consultarSaldo());
} catch (error) {
  console.log("Erro:", error.name);
  console.log("Mensagem:", error.message);
}