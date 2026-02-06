let vitoria = 0;
let empate = 0;
let derrota = 0;

while (true) {
  let entrada = prompt("Digite 1=pedra, 2=papel, 3=tesoura ou 'sair'");

  if (entrada === null || entrada.toLowerCase() === "sair") {
    console.log("Jogo encerrado!");
    break;
  }

  let jogador = Number(entrada);
  let computador = Math.floor(Math.random() * 3) + 1;

  if (jogador === computador) {
    empate++;
    console.log("Empate!");
  } else if (
    (jogador === 1 && computador === 3) ||
    (jogador === 2 && computador === 1) ||
    (jogador === 3 && computador === 2)
  ) {
    vitoria++;
    console.log("Você venceu!");
  } else {
    derrota++;
    console.log("Você perdeu!");
  }

  console.log(`Placar: Vitórias=${vitoria}, Empates=${empate}, Derrotas=${derrota}`);
}




