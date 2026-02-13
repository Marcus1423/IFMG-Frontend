import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProjectContext } from "../contexts/ProjectContext";

function ProjectList() {
  const { projects, removeProject } = useContext(ProjectContext);

  if (projects.length === 0) {
    return <p>Nenhum projeto criado ainda.</p>;
  }

  return (
    <ul>
      {projects.map(project => (
        <li key={project.id} style={{ marginBottom: "10px" }}>
          <Link to={`/projects/${project.id}`}>
            {project.name}
          </Link>

          <button
            onClick={() => removeProject(project.id)}
            style={{ marginLeft: "10px" }}
          >
            Remover
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ProjectList;