let usuario = prompt("Digite o nome de usuário:");
let senha = prompt("Digite a senha:");

if (usuario === "admin" && senha === "123456") {
    console.log("Acesso de administrador");
} else if (usuario === "user" && senha === "123") {
    console.log("Acesso de usuário");
} else {
    console.log("Acesso negado");
}