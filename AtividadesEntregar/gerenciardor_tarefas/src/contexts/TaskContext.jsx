import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {

    const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(title, projectId = null) {
    if (title.trim() === "") return;

    setTasks(prev => [
      ...prev,
      { 
        id: Date.now(), 
        title,
        completed: false,
        projectId
       }
    ]);
  }

  function removeTask(id) {
        setTasks(prev => prev.filter(p => p.id !== id));
  }

  return (
    <TaskContext.Provider value={{tasks, addTask, removeTask}}>
        { children }
    </TaskContext.Provider>
  )

}



