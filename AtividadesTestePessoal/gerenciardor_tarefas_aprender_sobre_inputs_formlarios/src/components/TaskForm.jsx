import { useState, useEffect } from "react";

function TaskForm() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  

  function addTask() {
    if (newTask.trim() === "") return;

    setTasks([
      ...tasks,
      { id: Date.now(), text: newTask }
    ]);

    setNewTask("");
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>

      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Digite uma tarefa"
      />

      <button onClick={addTask}>
        Adicionar
      </button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskForm;