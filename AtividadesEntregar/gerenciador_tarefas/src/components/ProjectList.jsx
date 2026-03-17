import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProjectContext } from "../contexts/ProjectContext";

function ProjectList() {
  const { projects, removeProject } = useContext(ProjectContext);

  if (projects.length === 0) {
    return <p>Nenhum projeto criado ainda.</p>;
  }

  return (
    <ul className="space-y-4 mt-2.5">
      {projects.map(project => (
        <li key={project.id} style={{ marginBottom: "10px" }} className="flex items-center justify-between dark:bg-slate-900 border border-slate-800 rounded-xl p-4 dark:hover:bg-slate-800 transition">
          <Link to={`/projects/${project.id}`}>
            {project.name}
          </Link>

          <button
            onClick={() => removeProject(project.id)}
            style={{ marginLeft: "10px" }}
            className="bg-red-500/10 text-red-400 hover:bg-red-500/20 px-3 py-1 rounded-lg transition"
          >
            Remover
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ProjectList;