import { createContext, useState, useEffect } from "react";

export const ProjectContext = createContext();

export function ProjectProvider({ children }) {
  const [projects, setProjects] = useState([]);

  // 🔹 Carregar do localStorage
  useEffect(() => {
    const stored = localStorage.getItem("projects");
    if (stored) {
      setProjects(JSON.parse(stored));
    }
  }, []);

  // 🔹 Salvar sempre que mudar
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  function addProject(name) {
    setProjects(prev => [
      ...prev,
      {
        id: Date.now(),
        name
      }
    ]);
  }

  function removeProject(id) {
    setProjects(prev => prev.filter(p => p.id !== id));
  }

  return (
    <ProjectContext.Provider
      value={{ projects, addProject, removeProject }}
    >
      {children}
    </ProjectContext.Provider>
  );
}