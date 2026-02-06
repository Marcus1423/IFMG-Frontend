const formCadastro = document.getElementById('formCadastro');
const senha = document.getElementById('senha');
const confirmaSenha = document.getElementById('confirmaSenha');
const confirmaSenhaErro = document.getElementById('confirmaSenhaErro');
const botaoSenha = document.getElementById('toggleSenha');

botaoSenha.addEventListener('click', () => {
    if (senha.type === 'password') {
      senha.type = 'text';
      botaoSenha.textContent = 'Esconder';
    } else {
      senha.type = 'password';
      botaoSenha.textContent = 'Mostrar';
    }
  });

formCadastro.addEventListener('submit', (event) => {
    event.preventDefault(); 

    if (senha.value.trim() === '' || confirmaSenha.value.trim() === '') {
      confirmaSenhaErro.textContent = 'Preencha ambos os campos.';
      confirmaSenhaErro.classList.add('error');
      return;
    }

    if (senha.value !== confirmaSenha.value) {
      confirmaSenhaErro.textContent = 'As senhas não coincidem.';
      confirmaSenhaErro.classList.add('error');
    } else {
        confirmaSenhaErro.textContent = '';
        formCadastro.reset();
    }

  });

  


