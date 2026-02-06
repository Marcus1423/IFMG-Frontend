import { useState } from "react";

function ListaTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  function adicionarTarefa() {
    if (novaTarefa.trim() === "") return;

    setTarefas([
      ...tarefas,
      { id: Date.now(), texto: novaTarefa }
    ]);

    setNovaTarefa("");
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>

      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Digite uma tarefa"
      />

      <button onClick={adicionarTarefa}>
        Adicionar
      </button>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>{tarefa.texto}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTarefas;