import { useContext } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { TaskContext } from "../contexts/TaskContext";

function Home() {
    const { tasks } = useContext(TaskContext)
    const homeTasks = tasks.filter(
    task => task.projectId === null
    );

    return (
        <>
            <div className="flex-col justify-self-center">
                <TaskForm projectId={null}/>
                <TaskList tasks={homeTasks} />
            </div>
            
        </>
        
    )
}

export default Home;