import { useState, useContext } from "react";
import { ProjectContext } from "../contexts/ProjectContext";

function ProjectForm() {
  const [name, setName] = useState("");
  const { addProject } = useContext(ProjectContext);

  function handleSubmit(e) {
    e.preventDefault();

    if (name.trim().length < 3) return;

    addProject(name);
    setName("");
  }

  return (
    <form className="flex gap-2.5" onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Nome do projeto"
        className="sm:w-3xs md:w-2xl dark:bg-slate-800 border dark:text-slate-100 border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 outline-none px-4 py-2 rounded-xl transition"
      />
      <button type="submit" className="bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition-all duration-200 text-white font-medium px-4 py-2 rounded-xl shadow-md">Criar Projeto</button>
    </form>
  );
}

export default ProjectForm;