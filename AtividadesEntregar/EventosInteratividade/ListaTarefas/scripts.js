let lista = document.getElementById('listaTarefas');

function adicionaItem() {
    let valorDigitado = document.getElementById('novaTarefa').value;
    botaoConcluido = document.createElement('button');
    itemLista = document.createElement('li');
    botaoRemover = document.createElement('button');

    
    itemLista.innerText = `${valorDigitado}`;
    document.getElementById('novaTarefa').value = '';

    botaoConcluido.innerText = 'Concluído'
    botaoConcluido.addEventListener('click', conluido)

    botaoRemover.innerText = 'x'
    botaoRemover.addEventListener('click', removeItem);

    itemLista.appendChild(botaoConcluido);
    itemLista.appendChild(botaoRemover);
    lista.appendChild(itemLista);

}


function removeItem(event){
    const li = event.target.closest('li');
    li.remove();
}

function conluido(event) {
    const li = event.target.closest('li');
    li.classList.toggle('completed');

}