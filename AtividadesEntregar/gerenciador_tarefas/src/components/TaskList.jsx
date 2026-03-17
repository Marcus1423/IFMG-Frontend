import TaskItem from "./TaskItem";

function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return <p>Nenhuma tarefa criada ainda.</p>;
  }
  console.log("Tasks recebidas:", tasks);

  return (
    <ul className="space-y-4 mt-2.5">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task}/>
      ))}
    </ul>
  );
}

export default TaskList;