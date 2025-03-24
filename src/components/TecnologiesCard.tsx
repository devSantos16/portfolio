import { useState } from "react";
import { ComponentType } from "react";

interface TecnologiesCardProp {
    Icon: ComponentType<React.SVGProps<SVGSVGElement>>,
    backgroundColor: string,
    text: string
    link: string
}

function TecnologiesCard({ Icon, backgroundColor, text, link } : TecnologiesCardProp) {
    const [hovered, setHovered] = useState(false)

    return (
        <div className={`bg-gray-300 shadow rounded-2xl w-50 h-15 flex justify-start items-center p-6 space-x-4 cursor-pointer transition-colors duration-300 ${
            hovered ? backgroundColor : "bg-gray-300"}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => window.open(link, "_blank")}>
                <Icon className={`text-2xl transition-colors duration-300 ${ hovered ? "text-white" : "text-gray-900"}`} />
                <p className={`font-bold transition-colors duration-300 ${ hovered ? "text-white" : "text-gray-900"}`}>{text}</p>
        </div>
    )
}


export default TecnologiesCard