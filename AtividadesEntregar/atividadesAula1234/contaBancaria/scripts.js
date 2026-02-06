let saldo = 500;       // depósito inicial
let rendimento = 0.01; // 1% ao mês

// Mês 1
saldo = saldo * (1 + rendimento);

// Mês 2
saldo = saldo + 200; // depósito
saldo = saldo * (1 + rendimento);

// Mês 3
saldo = saldo - 50;  // retirada
saldo = saldo * (1 + rendimento);

// Mês 4
saldo = saldo * (1 + rendimento);

console.log("Saldo final ao fim do 4º mês: R$ " + saldo.toFixed(2));