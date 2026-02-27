let carrinho = [];

function adicionaProduto() {
    let produtoDesejado = document.getElementById('produtoDesejado').value
    let informacaoCarrinho = document.getElementById('informacaoCarrinho');

    if (produtoDesejado !== '') {
        carrinho.push(produtoDesejado);
        informacaoCarrinho.textContent = `Produto adicionado com sucesso, você pussui ${carrinho.length} produtos no carrinho`
    } else return
    
    console.log(carrinho);

    document.getElementById('produtoDesejado').value = '';
    
}

function mostraProduto() {
    let visualizarProdutos = document.getElementById('visualizarProdutos');

    if (carrinho !== '') {
       
        visualizarProdutos.innerText = carrinho.join(', ');
    
    } else {
        visualizarProdutos.innerText = 'Carrinho vazio, por favor adicione seus produtos.';
    }


}

function editarProduto() {
    let produtosParaEditar = document.getElementById('produtosParaEditar')
    if (carrinho.length === 0) {
       produtosParaEditar.innerText = 'Carrinho vazio, adicione um produto para editar.'
    } else {
        mostraProdutoEditar(produtosParaEditar);
}

}

function mostraProdutoEditar(produto) {
    produto.innerText = `Qual produto deseja editar? ${carrinho.join(', ')}`
    const containerEditar = document.getElementById('container_editar');
    const editar = document.getElementById('editar');
    const inputBuscaValor = document.createElement('input');
    const botaoEditar = document.createElement('button');
    editar.innerHTML = '';

    inputBuscaValor.id = 'buscaValor';
    botaoEditar.textContent = 'Editar';

    botaoEditar.addEventListener('click', function () {
        let indece = carrinho.findIndex(p => p.toLowerCase() === inputBuscaValor.value.toLocaleLowerCase());
        const nomeProduto = inputBuscaValor.value.trim();

        if (nomeProduto === '') return;

        if (indece === -1) {
            produto.innerText = `Produto "${nomeProduto}" não encontrado. `
            return;
        }

        criaEdicao(indece);
        inputBuscaValor.value = '';
        produto.innerHTML = '';
        editar.innerHTML = '';
        

    })

    editar.appendChild(inputBuscaValor);
    editar.appendChild(botaoEditar);
}

function criaEdicao(indece) {
    const areaEditar = document.getElementById('area_editar');
    const pEditar2 = document.getElementById('p_editar');
    const editar2 = document.createElement('div');
    const inputNovoValor = document.createElement('input');
    const botaoConfirmar = document.createElement('button');

    document.getElementById('buscaValor').value = '';
            
            areaEditar.innerHTML = '';
            pEditar2.textContent = `Digite o novo nome para '${carrinho[indece]}'`;
            editar2.id = 'editar2';
            inputNovoValor.id = 'inputNovoValor';
            botaoConfirmar.textContent = 'Confirmar';

            botaoConfirmar.addEventListener('click', function () {
                if (inputNovoValor !== '') {
                    carrinho[indece] = inputNovoValor.value;
                    pEditar2.innerText = 'Produto editado com sucesso!';

                    document.getElementById('inputNovoValor').value = '';
                    areaEditar.innerHTML = '';
                }
            })

    areaEditar.appendChild(editar2);
    editar2.appendChild(inputNovoValor);
    editar2.appendChild(botaoConfirmar);

    
}

function excluirValores() {

    if (carrinho.length !== 0)
    confirmaExclusao = confirm('Deseja excluir o último produto do carrinho?');
    if (confirmaExclusao == true) {
        const remover = carrinho.pop();
        document.getElementById('textoExclusao').innerText('ProdutoExcluido com sucesso');
    } else return


}   