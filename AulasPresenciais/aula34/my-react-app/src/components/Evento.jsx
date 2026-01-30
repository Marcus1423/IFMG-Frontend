function Evento() {
    function funcaoEvento() {
        console.log('Olá');
    }

    return (
    <div>
        <p>Clique aqui</p>
        <button onClick={funcaoEvento}>Botão</button>
    </div>);
}

export default Evento;