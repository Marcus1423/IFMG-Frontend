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
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Nome do projeto"
      />
      <button type="submit">Criar Projeto</button>
    </form>
  );
}

export default ProjectForm;