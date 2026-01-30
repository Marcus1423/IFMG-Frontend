import { useState } from "react";

function Form() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function funcaoEvento(e) {
        e.preventDefault()
        console.log(`O usuário ${nome}, dono do email ${email} entrou com a senha ${senha}`);
    }

return (
<form onSubmit={funcaoEvento}>

<input
value={nome}
onChange={(e) => setNome(e.target.value)}
placeholder="Digite seu nome"
/>

<input
value={email}
onChange={(e) => setEmail(e.target.value)}
placeholder="Digite seu email"
/>

<input
value={senha}
onChange={(e) => setSenha(e.target.value)}
placeholder="Digite sua senha"
/>
<p>O email é: {email}</p>

    <div>
        <p>Clique aqui</p>
        <button type="submit" onClick={funcaoEvento}>Botão</button>
    </div>
</form>
);
}

export default Form