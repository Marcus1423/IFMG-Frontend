import { useState, useEffect, useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";


function TaskForm({ projectId = null }) {
  
  const [title, setTitle] = useState("");
  const { addTask } = useContext(TaskContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim().length < 3) return;

    addTask(title, projectId);
    setTitle("");
  }


  
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-3xl text-center p-2.5">Lista de Tarefas</h1>
      <div className="flex gap-2.5">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Digite uma tarefa"
            className=" sm:w-3xs md:w-2xl dark:bg-slate-800 border dark:text-slate-100 border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 outline-none px-4 py-2 rounded-xl transition"
          />

        <button type="submit" className="bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition-all duration-200 text-white font-medium px-4 py-2 rounded-xl shadow-md">
          Adicionar
        </button>
      </div>
      

    </form>
  );
}

export default TaskForm;