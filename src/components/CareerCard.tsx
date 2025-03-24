
import React from 'react';

interface CarrerCardProps {
    children?: React.ReactNode,
    logo: string,
    title: string,
    description: string,
    technologies: string

}


function CarrerCard({children, logo, title, description, technologies}: CarrerCardProps) {
    return (
        <div className="rounded bg-[#15141b] shadow max-w-100 space-y-4 p-6">
            <img className="w-[50px]" src={logo} alt={`${logo} image`}/>
            <h1 className="text-white text-center text-3xl font-bold">{title}</h1>
                    <p className="text-gray-400">{description}</p>
                    <p className="text-gray-400"> <b>Tecnologias Utilizadas:</b> {technologies}</p>
            {children}
        </div>

    )
}

export default CarrerCard