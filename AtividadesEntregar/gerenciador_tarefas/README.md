# 📋 Gerenciador de Tarefas

Uma aplicação web moderna para gerenciamento de tarefas, desenvolvida com foco em **organização, produtividade e boas práticas de desenvolvimento front-end com React**.

---

# Importante!

Este projeto foi Redirecionado para um repositório próprio para facilitar o deploy no seguinte link:

https://github.com/Marcus1423/Gerenciador-de-Tarefas

## Link do site:

https://gerenciador-de-tarefas-indol.vercel.app/

---


## 🚀 Sobre o Projeto

O **Gerenciador de Tarefas** é uma aplicação que permite ao usuário criar, organizar e acompanhar suas tarefas de forma simples e eficiente.

O projeto foi desenvolvido não apenas como uma ferramenta funcional, mas também como um ambiente de aprendizado para aplicar conceitos importantes do ecossistema React, como:

* Componentização
* Gerenciamento de estado com Context API
* Validação de formulários
* Persistência de dados
* Testes automatizados
* Otimização de performance

---

## ✨ Funcionalidades

* ✅ Criar tarefas com título, descrição e categoria
* 📂 Organização por categorias (Trabalho, Pessoal, Estudo)
* ✔️ Marcar tarefas como concluídas
* 🗑️ Remover tarefas
* 🌙 Tema claro e escuro com persistência no navegador
* 📊 Página de estatísticas (com acesso premium simulado)
* 🔒 Proteção de funcionalidades com HOC (`withPremiumAccess`)
* 💾 Persistência de dados utilizando **localStorage**
* 🧪 Testes automatizados com Vitest e Testing Library

---

## ⚙️ Tecnologias Utilizadas

* **React**
* **Vite**
* **JavaScript (ES6+)**
* **Tailwind CSS**
* **React Hook Form**
* **Zod**
* **Vitest**
* **React Testing Library**

---

## 🧠 Conceitos Aplicados

Este projeto demonstra na prática:

### 🔹 Gerenciamento de Estado

* Uso de **Context API**
* Atualizações imutáveis de estado

### 🔹 Validação de Formulários

* Integração com **React Hook Form**
* Validação com **Zod**

### 🔹 Persistência de Dados

* Armazenamento no **localStorage**

### 🔹 Performance

* Uso de `React.memo` para evitar re-renderizações desnecessárias
* Uso de `useCallback` para estabilizar funções
* Uso de `useMemo` para evitar recriação de valores

### 🔹 Testes

* Testes de renderização
* Testes de interação do usuário
* Simulação de eventos com `userEvent`

---

## 🧪 Testes

O projeto conta com testes automatizados utilizando **Vitest** e **React Testing Library**.

### Exemplos de testes implementados:

* ✔️ Verificação de renderização de elementos na tela
* ✔️ Simulação de preenchimento de formulário
* ✔️ Verificação da criação de tarefas

Para rodar os testes:

```bash
npm run test
```

Ou com interface visual:

```bash
npm run test:ui
```

---

## ⚡ Performance e Otimizações

Durante o desenvolvimento, foi utilizado o **React DevTools (Profiler)** para identificar problemas de renderização.

Melhorias aplicadas:

* Redução de re-renderizações na lista de tarefas
* Memoização de componentes com `React.memo`
* Otimização de funções com `useCallback`

Resultado:

➡️ Apenas os itens alterados são renderizados novamente
➡️ Melhor desempenho em listas maiores

---

## 📦 Instalação e Uso

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/gerenciador-tarefas.git
```

Acesse a pasta:

```bash
cd gerenciador-tarefas
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

---


## 👨‍💻 Autor

Desenvolvido por **Marcus Vinícius**
💡 Focado em evolução constante no desenvolvimento front-end

---

## 📄 Licença

Este projeto está sob a licença MIT.
