let botao = document.getElementById('botao');
botao.addEventListener('click', function eventos(event) {
    console.log('tipo evento: ', event.type);
    console.log('Evento alvo:', event.target);
    console.log('Evento atual:', event.currentTarget);
    console.log('timeStamp', event.timeStamp);
})