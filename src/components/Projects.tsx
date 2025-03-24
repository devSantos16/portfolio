import YuGiOhImage from "./../assets/yu_gi_oh_image.jpg"
import UniritterImage from "./../assets/uniritter_image.jpg"
import ProjectsCard from "./ProjectsCard"
import TecnologiesCard from "./TecnologiesCard"

import { DiDotnet } from "react-icons/di"
import { TbBrandCSharp } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";

function Projects() {

    return (
        <div className="bg-[#15141b] space-y-12 p-6">
            <h1 className="text-white text-center text-5xl font-bold">Meus Projetos</h1>
            <div className="flex justify-center space-x-12">
                <ProjectsCard title="Yu-Gi-Oh Forbidden API" image={YuGiOhImage} link={"https://github.com/devSantos16/YuGiOhForbiddenAPI"} />
                <ProjectsCard title="Robo Financiamentos" image={UniritterImage} link={"https://github.com/robo-financiamentos/robo-2.0"} />
            </div>
            <h1 className="text-white text-center text-5xl font-bold">Tecnologias</h1>
            <div className="flex justify-center space-x-4">
                <TecnologiesCard Icon={DiDotnet} backgroundColor="bg-purple-700" text=".NET" link="https://dotnet.microsoft.com/pt-br/" />
                <TecnologiesCard Icon={TbBrandCSharp} backgroundColor="bg-purple-700" text="CSharp" link="https://dotnet.microsoft.com/pt-br/languages/csharp"/>
                <TecnologiesCard Icon={FaPython} backgroundColor="bg-yellow-500" text="Python" link="https://www.python.org/"/>
                <TecnologiesCard Icon={SiTypescript} backgroundColor="bg-gray-400" text="TypeScript" link="https://www.typescriptlang.org/"/>
                <TecnologiesCard Icon={FaReact} backgroundColor="bg-yellow-500" text="React" link="https://react.dev/"/>
            </div>
        </div>
    )
}

export default Projects