import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProjectContext } from "../contexts/ProjectContext";
import { TaskContext } from "../contexts/TaskContext";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

function ProjectDetails() {
  const { id } = useParams();

  const { projects } = useContext(ProjectContext);
  const { tasks } = useContext(TaskContext);

  //  Busca o projeto atual
  const project = projects.find(p => p.id.toString() === id);

  //  Filtra as tarefas desse projeto
  const projectTasks = tasks.filter(task => task.projectId === id);

  if (!project) {
    return <p>Projeto não encontrado.</p>;
  }

  return (
    <div>
      <h2>{project.name}</h2>
      <p>{project.description}</p>

      <hr />

      <h3>Tarefas</h3>

      <div className="flex-col justify-self-center">
        {/*  Form já recebe o projectId */}
        <TaskForm projectId={id} />

        {/*  Lista só das tarefas desse projeto */}
        <TaskList tasks={projectTasks} />
      </div>  
     
    </div>
  );
}

export default ProjectDetails;