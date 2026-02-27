let carrinho = [];

// Adicionar produto
function adicionaProduto() {
  const produtoDesejado = document.getElementById('produtoDesejado').value.trim();
  const informacaoCarrinho = document.getElementById('informacaoCarrinho');

  if (produtoDesejado === '') {
    informacaoCarrinho.textContent = 'Digite um produto antes de adicionar.';
    return;
  }

  carrinho.push(produtoDesejado);
  informacaoCarrinho.textContent = `Produto adicionado! Você possui ${carrinho.length} no carrinho.`;
  document.getElementById('produtoDesejado').value = '';
}

// Mostrar produtos
function mostraProduto() {
  const visualizarProdutos = document.getElementById('visualizarProdutos');
  if (carrinho.length === 0) {
    visualizarProdutos.textContent = 'Carrinho vazio.';
  } else {
    visualizarProdutos.textContent = carrinho.join(', ');
  }
}

// Iniciar edição
function editarProduto() {
  const produtosParaEditar = document.getElementById('produtosParaEditar');
  const editar = document.getElementById('editar');
  const containerEditar = document.getElementById('container_editar');

  produtosParaEditar.textContent = '';
  editar.innerHTML = '';
  containerEditar.querySelector('#mensagem_edicao').textContent = '';
  containerEditar.querySelector('#area_edicao').innerHTML = '';

  if (carrinho.length === 0) {
    produtosParaEditar.textContent = 'Carrinho vazio, adicione um produto para editar.';
    return;
  }

  produtosParaEditar.textContent = `Qual produto deseja editar? (${carrinho.join(', ')})`;

  const inputBuscaValor = document.createElement('input');
  const botaoEditar = document.createElement('button');
  botaoEditar.textContent = 'Editar';

  botaoEditar.addEventListener('click', function () {
    const nomeProduto = inputBuscaValor.value.trim();

    if (nomeProduto === '') {
      produtosParaEditar.textContent = 'Digite o nome do produto antes de editar.';
      return;
    }

    const indice = carrinho.findIndex(p => p.toLowerCase() === nomeProduto.toLowerCase());
    if (indice === -1) {
      produtosParaEditar.textContent = `Produto "${nomeProduto}" não encontrado.`;
      return;
    }

    criaEdicao(indice);
    inputBuscaValor.value = '';
  });

  editar.appendChild(inputBuscaValor);
  editar.appendChild(botaoEditar);
}

// Etapa final de edição
function criaEdicao(indice) {
  const mensagemEdicao = document.getElementById('mensagem_edicao');
  const areaEdicao = document.getElementById('area_edicao');

  mensagemEdicao.textContent = `Digite o novo nome para '${carrinho[indice]}':`;
  areaEdicao.innerHTML = '';

  const inputNovoValor = document.createElement('input');
  const botaoConfirmar = document.createElement('button');
  botaoConfirmar.textContent = 'Confirmar';

  botaoConfirmar.addEventListener('click', function () {
    const novoNome = inputNovoValor.value.trim();

    if (novoNome === '') {
      mensagemEdicao.textContent = 'Digite um novo nome válido antes de confirmar.';
      return;
    }

    carrinho[indice] = novoNome;
    mensagemEdicao.textContent = `Produto atualizado com sucesso para "${novoNome}"!`;
    areaEdicao.innerHTML = '';
  });

  areaEdicao.appendChild(inputNovoValor);
  areaEdicao.appendChild(botaoConfirmar);
}

// Excluir último produto
function excluirValores() {
  if (carrinho.length === 0) {
    document.getElementById('textoExclusao').textContent = 'Carrinho já está vazio.';
    return;
  }

  const confirmaExclusao = confirm('Deseja excluir o último produto do carrinho?');
  if (confirmaExclusao) {
    const removido = carrinho.pop();
    document.getElementById('textoExclusao').textContent = `Produto "${removido}" excluído com sucesso.`;
  }
}