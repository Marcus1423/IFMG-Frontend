import ProjectForm from "../components/ProjectForm"
import ProjectList from "../components/ProjectList"

function Projects() {
 return (
    <>
        <div className="flex-col justify-self-center">
            <h1 className="text-3xl text-center p-2.5">Projetos</h1>
            <ProjectForm />
            <ProjectList />
        </div>
        
    </>
 )
}

export default Projects