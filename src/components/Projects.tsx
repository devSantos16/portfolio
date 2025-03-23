import YuGiOhImage from "./../assets/yu_gi_oh_image.jpg"
import UniritterImage from "./../assets/uniritter_image.jpg"
import ProjectsCard from "./sub-components/ProjectsCard"

function Projects() {
    return (
        <div className="bg-[#15141b] p-8 space-y-12">
            <h1 className="text-white text-center text-5xl font-bold">Meus Projetos</h1>
            <div className="flex justify-center space-x-12">
                <ProjectsCard title="Yu-Gi-Oh Forbidden API" image={YuGiOhImage} link={"https://github.com/devSantos16/YuGiOhForbiddenAPI"} />
                <ProjectsCard title="Robo Financiamentos" image={UniritterImage} link={"https://github.com/robo-financiamentos/robo-2.0"} />
            </div>
        </div>
    )
}

export default Projects