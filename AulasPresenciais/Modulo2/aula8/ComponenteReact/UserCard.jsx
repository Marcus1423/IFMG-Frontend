function UserCard() {

    document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const anoNasmento = document.getElementById('anoNascimento').value;
    const profissao = document.getElementById('profissao').value;

    console.log(nome)
    console.log(idade)
    console.log(anoNasmento)
    console.log(profissao)

    
    return (
        <>
            <p><strong>Nome: </strong> {nome}</p>
            <p><strong>Idade:</strong> {idade}</p>
            <p><strong>Ano nascimento:</strong> {anoNasmento}</p>
            <p><strong>Profissão:</strong> {profissao}</p>
        </>
    );
    })
}

ReactDOM.render(<UserCard />, document.getElementById('root'));